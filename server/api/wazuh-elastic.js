const importAppObjects = require('../initialize');

module.exports = (server, options) => {

    // Elastic JS Client
    const elasticRequest = server.plugins.elasticsearch.getCluster('data');

    const getTimeStamp = async (req,reply) => {
        try {

            const data = await elasticRequest.callWithInternalUser('search', {
                index: '.wazuh-version',
                type :  'wazuh-version'
            })

            if(data.hits && 
               data.hits.hits[0] && 
               data.hits.hits[0]._source && 
               data.hits.hits[0]._source.installationDate && 
               data.hits.hits[0]._source.lastRestart){
                
                    return reply({
                        installationDate: data.hits.hits[0]._source.installationDate,
                        lastRestart     : data.hits.hits[0]._source.lastRestart
                    });

            } else {
                throw new Error('Could not fetch .wazuh-version index');
            }

        } catch (err) {
            reply({
                'statusCode': 500,
                'error':      99,
                'message':    err.message || 'Could not fetch .wazuh-version index'
            }).code(500);
        }
    }

    //Handlers
    const fetchElastic = (req, payload) => {
        return elasticRequest.callWithRequest(req, 'search', {
            index: 'wazuh-alerts-3.x-*',
            type:  'wazuh',
            body:  payload
        });
    };

    const getConfig = (id, callback) => {
        elasticRequest.callWithInternalUser('get', {
            index: '.wazuh',
            type:  'wazuh-configuration',
            id:     id
        })
        .then(data => {
            callback({
                'user':         data._source.api_user,
                'password':     Buffer.from(data._source.api_password, 'base64').toString("ascii"),
                'url':          data._source.url,
                'port':         data._source.api_port,
                'insecure':     data._source.insecure,
                'cluster_info': data._source.cluster_info,
                'extensions':   data._source.extensions
            });
        })
        .catch(error => {
            callback({
                'error': 'no elasticsearch',
                'error_code': 2
            });
        });
    };

    // Updating Wazuh app visualizations and dashboards
    const updateAppObjects = (req, reply) => {
        elasticRequest.callWithInternalUser('deleteByQuery', { 
            index: '.kibana', 
            body: {
                'query': {
                    'bool': {
                        'must': {
                            'match': {
                                "visualization.title": 'Wazuh App*'
                            }
                        },
                        'must_not': {
                            "match": {
                                "visualization.title": 'Wazuh App Overview General Agents status'
                            }
                        }
                    }
                }
            } 
        })
        .then(resp => {
            // Update the pattern in the configuration
            importAppObjects(req.params.pattern);
            reply({
                'statusCode': 200,
                'data':       'Index pattern updated'
            });
        })
        .catch(error => {
            reply({
                'statusCode': 500,
                'error':      9,
                'message':    'Could not delete visualizations'
            }).code(500);
        });
    };

    const getTemplate = (req, reply) => {
        elasticRequest.callWithInternalUser('cat.templates', {})
        .then(data => {
            if (req.params.pattern == "wazuh-alerts-3.x-*" && data.includes("wazuh-alerts-3.*")) {
                reply({
                    'statusCode': 200,
                    'status': true,
                    'data': `Template found for ${req.params.pattern}`
                });   
            } else {
                let lastChar = req.params.pattern[req.params.pattern.length -1];
                let array = data.match(/[^\s]+/g);
                let found = false;

                let pattern = req.params.pattern;
                if (lastChar === '*') { // Remove last character if it is a '*'
                    pattern = pattern.slice(0, -1);
                }

                for (let i = 1; i < array.length; i++) {
                    if (array[i].includes(pattern) && array[i-1] == `wazuh`) {
                        found = true;
                        reply({
                            'statusCode': 200,
                            'status': true,
                            'data': `Template found for ${req.params.pattern}`
                        });    
                    }
                }
                if (!found) {
                    reply({
                        'statusCode': 200,
                        'status': false,
                        'data': `No template found for ${req.params.pattern}`
                    });      
                }
            }
        })
        .catch(error => {
            reply({
                'statusCode': 500,
                'error':      10000,
                'message':    'Could not retrieve templates from Elasticsearch'
            }).code(500);
        }); 
    };

    const checkPattern = (req, reply) => {
        elasticRequest.callWithInternalUser('search', { 
            index: '.kibana', 
            body: {
                'query': {
                    'bool': {
                        'must': {
                            'match': {
                                "type": 'index-pattern'
                            }
                        }
                    }
                }
            } 
        })
        .then((response) => {
            // Looking for the pattern
            for (let i = 0, len = response.hits.hits.length; i < len; i++) {
                if (response.hits.hits[i]._source['index-pattern'].title == req.params.pattern) {
                    return reply({
                        'statusCode': 200,
                        'status': true,
                        'data': 'Index pattern found'
                    });
                }
            }
            return reply({
                'statusCode': 200,
                'status': false, 
                'data': 'Index pattern not found'
            });
        })
        .catch(error => {
            reply({
                'statusCode': 500,
                'error':      10000,
                'message':    'Something went wrong retrieving index-patterns from Elasticsearch'
            }).code(500);
        });
    };

    const getFieldTop = (req, reply) => {

        // Top field payload
        var payload = {
            "size": 1,
            "query": {
                "bool": {
                    "must": [],
                    "filter": {
                        "range": {
                            "@timestamp": {}
                        }
                    }
                }
            },
            "aggs": {
                "2": {
                    "terms": {
                        "field": "",
                        "size": 1,
                        "order": {
                            "_count": "desc"
                        }
                    }
                }
            }
        };

        // Set up time interval, default to Last 24h
        const timeGTE = 'now-1d';
        const timeLT  = 'now';
        payload.query.bool.filter.range['@timestamp']['gte'] = timeGTE;
        payload.query.bool.filter.range['@timestamp']['lt']  = timeLT;

        if (req.params.mode === 'cluster') {
            // Set up match for default cluster name
            payload.query.bool.must.push({
                "match": {
                    "cluster.name": req.params.cluster
                }
            });
        } else {
            // Set up match for default cluster name
            payload.query.bool.must.push({
                "match": {
                    "manager.name": req.params.cluster
                }
            });
        }

        payload.aggs['2'].terms.field = req.params.field;

        fetchElastic(req, payload)
        .then(data => {

            if (data.hits.total === 0 || typeof data.aggregations['2'].buckets[0] === 'undefined'){
                reply({
                    'statusCode': 200,
                    'data':       ''
                });
            } else {
                reply({
                    'statusCode': 200,
                    'data':       data.aggregations['2'].buckets[0].key
                });
            }
        })
        .catch(error => {
            reply({
                'statusCode': 500,
                'error':      9,
                'message':    error
            }).code(500);
        });
    };

    const getSetupInfo = (req, reply) => {
        elasticRequest
        .callWithInternalUser('search', {
                index: '.wazuh-version',
                type: 'wazuh-version'
        })
        .then(data => {
            if (data.hits.total === 0) {
                reply({
                    'statusCode': 200,
                    'data':       ''
                });
            } else {
                reply({
                    'statusCode': 200,
                    'data':       data.hits.hits[0]._source
                });
            }
        })
        .catch(error => {
            reply({
                'statusCode': 500,
                'error':      9,
                'message':    'Could not get data from elasticsearch'
            }).code(500);
        });
    };

    const getCurrentlyAppliedPattern = (req, reply) => {
        // We search for the currently applied pattern in the visualizations
        elasticRequest .callWithInternalUser('search', {
            index: '.kibana',
            type:  'doc',
            q:     `visualization.title:"Wazuh App Overview General Metric alerts"`
        })
        .then(data => {
            if(data && data.hits && data.hits.hits && data.hits.hits[0] && data.hits.hits[0]._source){
                return reply({
                    statusCode: 200,
                    data:       JSON.parse(data.hits.hits[0]._source.visualization.kibanaSavedObjectMeta.searchSourceJSON).index
                });
            } else {
                throw Error('no_visualization');
            }
        })
        .catch(error => {
            if(error && error.message && error.message === 'no_visualization'){
                return reply('kibana_index_pattern_error').code(500);
            }
            
            return reply('elasticsearch_down').code(500);
        });
    };

    module.exports = getConfig;


    const getlist = async (req,res) => {
        try {
            const data = await elasticRequest
            .callWithInternalUser('search', {
                    index: '.kibana',
                    type: 'doc',
                    body: {
                        "size": 999,
                        "query":{
                            "match":{
                              "type": "index-pattern"
                            }
                          }
                    }
                    
            });
            if(data && data.hits && data.hits.hits){
                const minimum = ["@timestamp", "full_log", "manager.name", "agent.id"];
                let list = [];
                if(data.hits.hits.length === 0) throw new Error('There is no index pattern');
                for(const index of data.hits.hits){   
                    let valid, parsed;        
                    try{
                        parsed = JSON.parse(index._source['index-pattern'].fields)
                    } catch (error){
                        continue;
                    }     
                    
                    valid = parsed.filter(item => minimum.includes(item.name));
                    if(valid.length === 4){
                        list.push({
                            id: index._id.split('index-pattern:')[1],
                            title: index._source['index-pattern'].title
                        })
                    }
           
                }
                return res({data: list});
            }
            
            throw new Error('The Elasticsearch request didn\'t fetch the expected data');

        } catch(error){
            return res({error: error.message}).code(500)
        }
    }

    // Get index patterns list
    server.route({
        method:  'GET',
        path:    '/get-list',
        handler: getlist
    });
    //Server routes

    /*
     * GET /api/wazuh-elastic/current-pattern
     * Returns the currently applied pattern
     *
     **/
    server.route({
        method: 'GET',
        path: '/api/wazuh-elastic/current-pattern',
        handler: getCurrentlyAppliedPattern
    });

    /*
     * GET /api/wazuh-elastic/template/{pattern}
     * Returns whether a correct template is being applied for the index-pattern
     *
     **/
    server.route({
        method: 'GET',
        path: '/api/wazuh-elastic/template/{pattern}',
        handler: getTemplate
    });

    /*
     * GET /api/wazuh-elastic/pattern/{pattern}
     * Returns whether the pattern exists or not
     *
     **/
    server.route({
        method: 'GET',
        path: '/api/wazuh-elastic/pattern/{pattern}',
        handler: checkPattern
    });



    /*
     * GET /api/wazuh-elastic/top/{cluster}/{field}/{time?}
     * Returns the agent with most alerts
     *
     **/
    server.route({
        method: 'GET',
        path: '/api/wazuh-elastic/top/{mode}/{cluster}/{field}',
        handler: getFieldTop
    });

    /*
     * GET /api/wazuh-elastic/setup
     * Return Wazuh Appsetup info
     *
     **/
    server.route({
        method: 'GET',
        path: '/api/wazuh-elastic/setup',
        handler: getSetupInfo
    });

    /*
     * POST /api/wazuh-elastic/updatePattern
     * Update the index pattern in the app visualizations
     *
     **/
    server.route({
        method: 'GET',
        path: '/api/wazuh-elastic/updatePattern/{pattern}',
        handler: updateAppObjects
    });

    server.route({
        method: 'GET',
        path: '/api/wazuh-elastic/timestamp',
        handler: getTimeStamp
    });
};