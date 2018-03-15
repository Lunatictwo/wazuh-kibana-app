const app = require('ui/modules').get('app/wazuh', []);

// Logs controller
app.controller('clusterController', function ($scope, $rootScope, errorHandler, apiReq,ClusterNodes,$window,$location) {
    $scope.loading    = true;
    $scope.showConfig = false;
    $scope.showNodes  = false;
    $scope.showFiles  = false;
    $scope.nodeSearchTerm = '';
    $location.search('tab','general')
    
    $scope.nodes      = ClusterNodes;

    $rootScope.currentImplicitFilter = ""
    $rootScope.ownHandlers = [];
    $rootScope.loadedVisualizations = [];
    $rootScope.tabVisualizations = {
        general   : 2
    };

    const cleanHandlers = () => {
        if ($rootScope.ownHandlers) {
            for (let h of $rootScope.ownHandlers) {
                h._scope.$destroy();
            }
        }

        $rootScope.ownHandlers = [];
    }

    const setBooleans = component => {
        $scope.showConfig = component === 'showConfig';
        $scope.showNodes  = component === 'showNodes';
        $scope.showFiles  = component === 'showFiles';
    }

    $scope.goAgents = () => {
        cleanHandlers();
        $window.location.href = '#/agents-preview';
    }

    $scope.goConfiguration = () => {
        cleanHandlers();
        setBooleans('showConfig');
    }

    $scope.goNodes = () => {
        cleanHandlers();
        setBooleans('showNodes');
    }

    $scope.goFiles = () => {
        cleanHandlers();
        setBooleans('showFiles');
    }

    $scope.goBack = () => {
        cleanHandlers();
        setBooleans(null);
    }

    const load = async () => {
        try {
            await $scope.nodes.nextPage();

            const data = await Promise.all([
                apiReq.request('GET','/cluster/files',{}),
                apiReq.request('GET','/cluster/agents',{}),
                apiReq.request('GET','/cluster/status',{}),
                apiReq.request('GET','/cluster/nodes',{}),
                apiReq.request('GET','/manager/configuration',{section:'cluster'}),
                apiReq.request('GET','/version',{})
            ]);

            const files = data[0]
            const firstKey =  Object.keys(files.data.data)[0];
            $scope.filesCount = 0;
            for(let key in firstKey) $scope.filesCount += firstKey[key].length;

            const agents = data[1]
            $scope.agentsCount = 0;
            for(let key in agents.data.data) $scope.agentsCount += agents.data.data[key].length;
            
            const status = data[2]
            $scope.status = status.data.data.running;
            
            const nodesCount = data[3]
            $scope.nodesCount = nodesCount.data.data.totalItems;
            const connected = nodesCount.data.data.items.filter(item => item.status === 'connected');
            $scope.nodeCoverage = (connected.length / nodesCount.data.data.totalItems) * 100;

            const configuration = data[4]
            $scope.configuration = configuration.data.data;
            
            const version = data[5]
            $scope.version = version.data.data;

            $scope.loading = false;
            if(!$scope.$$phase) $scope.$digest();
            return;
        } catch(error) {
            errorHandler.handle(error,'Cluster')
        }
    }

    load();

    $scope.$on('destroy',() => {
        cleanHandlers();
    })
});