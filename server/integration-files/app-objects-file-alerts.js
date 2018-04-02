module.exports = [
	{
		"_id": "Wazuh-App-Overview-General-Metric-alerts",
		"_source": {
			"title": "Wazuh App Overview General Metric alerts",
			"visState":
				"{\"title\":\"Wazuh App Overview General Metric Alerts\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"gauge\",\"gauge\":{\"verticalSplit\":false,\"autoExtend\":false,\"percentageMode\":false,\"gaugeType\":\"Metric\",\"gaugeStyle\":\"Full\",\"backStyle\":\"Full\",\"orientation\":\"vertical\",\"colorSchema\":\"Green to Red\",\"gaugeColorMode\":\"None\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"scale\":{\"show\":false,\"labels\":false,\"color\":\"#333\",\"width\":2},\"type\":\"simple\",\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Alerts\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-General-Level-12-alerts",
		"_source": {
			"title": "Wazuh App Overview General Level 12 alerts",
			"visState":
				"{\"title\":\"Wazuh App Overview General Count Level 12 Alerts\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"gauge\",\"gauge\":{\"verticalSplit\":false,\"autoExtend\":false,\"percentageMode\":false,\"gaugeType\":\"Metric\",\"gaugeStyle\":\"Full\",\"backStyle\":\"Full\",\"orientation\":\"vertical\",\"colorSchema\":\"Green to Red\",\"gaugeColorMode\":\"None\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"scale\":{\"show\":false,\"labels\":false,\"color\":\"#333\",\"width\":2},\"type\":\"simple\",\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Level 12 or above alerts\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.level:[12 TO *]\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-General-Authentication-failure",
		"_source": {
			"title": "Wazuh App Overview General Authentication failure",
			"visState":
				"{\"title\":\"Wazuh App Overview General Count Authentication Failure\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"gauge\",\"gauge\":{\"verticalSplit\":false,\"autoExtend\":false,\"percentageMode\":false,\"gaugeType\":\"Metric\",\"gaugeStyle\":\"Full\",\"backStyle\":\"Full\",\"orientation\":\"vertical\",\"colorSchema\":\"Green to Red\",\"gaugeColorMode\":\"None\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"scale\":{\"show\":false,\"labels\":false,\"color\":\"#333\",\"width\":2},\"type\":\"simple\",\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Authentication failure\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: authentication_failed OR rule.groups: authentication_failures\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-General-Authentication-success",
		"_source": {
			"title": "Wazuh App Overview General Authentication success",
			"visState":
				"{\"title\":\"Wazuh App Overview General Count Authentication Success\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"gauge\",\"gauge\":{\"verticalSplit\":false,\"autoExtend\":false,\"percentageMode\":false,\"gaugeType\":\"Metric\",\"gaugeStyle\":\"Full\",\"backStyle\":\"Full\",\"orientation\":\"vertical\",\"colorSchema\":\"Green to Red\",\"gaugeColorMode\":\"None\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"scale\":{\"show\":false,\"labels\":false,\"color\":\"#333\",\"width\":2},\"type\":\"simple\",\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Authentication success\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: authentication_success\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-General-Alert-level-evolution",
		"_source": {
			"title": "Wazuh App Overview General Alert level evolution",
			"visState": "{\"title\":\"Wazuh App Overview General Alert level evolution\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"line\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true,\"interpolate\":\"cardinal\"}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"rule.level\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"h\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-General-Alerts",
		"_source": {
			"title": "Wazuh App Overview General Alerts",
			"visState":
				"{\"title\":\"Wazuh App Overview General Alerts\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"histogram\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":false,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"h\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}]}",
			"uiStateJSON": "{\"spy\":{\"mode\":{\"name\":null,\"fill\":false}},\"vis\":{\"legendOpen\":false}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-General-Top-5-agents",
		"_source": {
			"title": "Wazuh App Overview General Top 5 agents",
			"visState":
				"{\"title\":\"Wazuh App Overview General Top 5 Agents\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"agent.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-General-Alerts-evolution-Top-5-agents",
		"_source": {
			"title": "Wazuh App Overview General Alerts evolution Top 5 agents",
			"visState": "{\"title\":\"Wazuh App Overview General Alerts evolution Top 5 agents\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"histogram\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"agent.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"h\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}]}",
			"uiStateJSON": "{\"vis\":{\"colors\":{\"ip-10-0-0-157.localdomain\":\"#64B0C8\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-General-Top-source-user",
		"_source": {
			"title": "Wazuh App Overview General Top source user",
			"visState":
				"{\"title\":\"Wazuh App Overview General Top Source User\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.srcuser\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Top source user\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-General-Top-source-IP",
		"_source": {
			"title": "Wazuh App Overview General Top source IP",
			"visState":
				"{\"title\":\"Wazuh App Overview General Top Source IP\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.srcip\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Top source ip\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-General-Top-group",
		"_source": {
			"title": "Wazuh App Overview General Top group",
			"visState":
				"{\"title\":\"Wazuh App Overview General Top Group\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.groups\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Top group\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-General-Top-PCI-DSS-requirement",
		"_source": {
			"title": "Wazuh App Overview General Top PCI DSS requirement",
			"visState":
				"{\"title\":\"Wazuh App Overview General Top Top PCI DSS\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.pci_dss\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Top PCI DSS\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-General-Alerts-summary",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Overview General Alerts summary",
		"visState": "{\"title\":\"Wazuh App Overview General Alerts summary\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.id\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Rule ID\"}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.description\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Description\"}},{\"id\":\"4\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.level\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Level\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-General-Groups-summary",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Overview General Groups summary",
		"visState": "{\"title\":\"Wazuh App Overview General Groups summary\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.groups\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Group\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Added",
		"_source": {
			"title": "Wazuh App Overview FIM Added",
			"visState": "{\"title\":\"Wazuh App Overview FIM Added\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"metric\",\"metric\":{\"percentageMode\":false,\"colorSchema\":\"Green to Red\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"},\"metricColorMode\":\"None\"}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Added\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: \\\"syscheck\\\" AND syscheck.event: (added OR readded)\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Modified",
		"_source": {
			"title": "Wazuh App Overview FIM Modified",
			"visState": "{\"title\":\"Wazuh App Overview FIM Modified\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"metric\",\"metric\":{\"percentageMode\":false,\"colorSchema\":\"Green to Red\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"},\"metricColorMode\":\"None\"}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Modified\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: \\\"syscheck\\\" syscheck.event: \\\"modified\\\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Deleted",
		"_source": {
			"title": "Wazuh App Overview FIM Deleted",
			"visState": "{\"title\":\"Wazuh App Overview FIM Deleted\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"metric\",\"metric\":{\"percentageMode\":false,\"colorSchema\":\"Green to Red\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"},\"metricColorMode\":\"None\"}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Deleted\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: \\\"syscheck\\\" AND syscheck.event: \\\"deleted\\\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Events-over-time",
		"_source": {
			"title": "Wazuh App Overview FIM Events over time",
			"visState":
				"{\"title\":\"Wazuh App Overview FIM Events over time\",\"type\":\"area\",\"params\":{\"type\":\"area\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"area\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"drawLinesBetweenPoints\":true,\"showCircles\":true,\"interpolate\":\"linear\",\"valueAxis\":\"ValueAxis-1\"}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"auto\",\"customInterval\":\"30m\",\"min_doc_count\":1,\"extended_bounds\":{}}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"rule.groups\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"_term\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: syscheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Top-user-owners",
		"_type": "visualization",
		"_source": {
			"title": "Wazuh App Overview FIM Top user owners",
			"visState": "{\"title\":\"Wazuh App Overview FIM Top user owners\",\"type\":\"pie\",\"params\":{\"isDonut\":true,\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"type\":\"pie\",\"legendPosition\":\"right\",\"labels\":{\"show\":false,\"values\":true,\"last_level\":true,\"truncate\":100}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"syscheck.uname_after\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups:\\\"syscheck\\\"\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Top-group-owners",
		"_type": "visualization",
		"_source": {
			"title": "Wazuh App Overview FIM Top group owners",
			"visState": "{\"title\":\"Wazuh App Overview FIM Top group owners\",\"type\":\"pie\",\"params\":{\"isDonut\":true,\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"type\":\"pie\",\"legendPosition\":\"right\",\"labels\":{\"show\":false,\"values\":true,\"last_level\":true,\"truncate\":100}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"syscheck.gname_after\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups:\\\"syscheck\\\"\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Last-file-modified",
		"_source": {
			"title": "Wazuh App Overview FIM Last file modified",
			"visState":
				"{\"title\":\"Wazuh App Overview FIM Last file modified\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"syscheck.path\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"_term\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":2,\"direction\":\"desc\"}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"syscheck.event: modified AND location: syscheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Last-file-added",
		"_source": {
			"title": "Wazuh App Overview FIM Last file added",
			"visState":
				"{\"title\":\"Wazuh App Overview FIM Last file added\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"syscheck.path\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"_term\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":2,\"direction\":\"desc\"}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"syscheck.event: added AND location: syscheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Last-file-deleted",
		"_source": {
			"title": "Wazuh App Overview FIM Last file deleted",
			"visState":
				"{\"title\":\"Wazuh App Overview FIM Last file deleted\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"syscheck.path\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"_term\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":2,\"direction\":\"desc\"}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"syscheck.event: deleted AND location: syscheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Top-file-changes",
		"_source": {
			"title": "Wazuh App Overview FIM Top file changes",
			"visState": "{\"title\":\"Wazuh App Overview FIM Top file changes\",\"type\":\"pie\",\"params\":{\"isDonut\":false,\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"type\":\"pie\",\"legendPosition\":\"right\",\"labels\":{\"show\":false,\"values\":true,\"last_level\":true,\"truncate\":100}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"syscheck.path\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups:\\\"syscheck\\\" AND syscheck.event: \\\"modified\\\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Root-user-file-changes",
		"_source": {
			"title": "Wazuh App Overview FIM Root user file changes",
			"visState":
				"{\"params\": {\"isDonut\": false, \"shareYAxis\": true, \"addTooltip\": true, \"addLegend\": true}, \"listeners\": {}, \"type\": \"pie\", \"aggs\": [{\"type\": \"count\", \"enabled\": true, \"id\": \"1\", \"params\": {}, \"schema\": \"metric\"}, {\"type\": \"terms\", \"enabled\": true, \"id\": \"2\", \"params\": {\"orderBy\": \"1\", \"field\": \"syscheck.path\", \"order\": \"desc\", \"size\": 10}, \"schema\": \"segment\"}], \"title\": \"FIM Top 10 files with Root/Admin owner\"}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups:\\\"syscheck\\\" AND (syscheck.udata.id_after:\\\"0\\\" OR syscheck.udata.id_before:\\\"0\\\" or syscheck.gudata.id_after:\\\"root\\\" or syscheck.gudata.id_before:\\\"0\\\")\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-FIM-World-writable-modified-files",
		"_source": {
			"title": "Wazuh App Overview FIM World writable modified files",
			"visState":
				"{\"title\":\"Wazuh App Overview FIM World writable modified files\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"syscheck.path\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups:\\\"syscheck\\\" AND _exists_:syscheck.perm_after AND (syscheck.perm_after:/[0-7]{5}([2367]).*/)\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Top-agent",
		"_source": {
			"title": "Wazuh App Overview FIM Top agent",
			"visState":
				"{\"title\":\"Wazuh App Overview FIM Top agent\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"agent.name\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":2,\"direction\":\"desc\"}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"location: syscheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Top-PCI-requirement",
		"_source": {
			"title": "Wazuh App Overview FIM Top PCI requirement",
			"visState":
				"{\"title\":\"Wazuh App Overview FIM Top PCI requirement\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.pci_dss\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"location: syscheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Most-common-permissions",
		"_source": {
			"title": "Wazuh App Overview FIM Most common permissions",
			"visState":
				"{\"title\":\"Wazuh App Overview FIM Most common permissions\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"syscheck.perm_after\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"location: syscheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Most-modified-file",
		"_source": {
			"title": "Wazuh App Overview FIM Most modified file",
			"visState":
				"{\"title\":\"Wazuh App Overview FIM Most modified file\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"syscheck.path\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"location: syscheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-FIM-Events-summary",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Overview FIM Events summary",
		"visState": "{\"title\":\"Wazuh App Overview FIM Events summary\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"agent.name\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Agent\"}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"syscheck.path\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"File\"}},{\"id\":\"5\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.description\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Description\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":3,\"direction\":\"desc\"}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: syscheck\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-PM-Events-over-time",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Overview PM Events over time",
		"visState": "{\"title\":\"Wazuh App Overview PM Events over time\",\"type\":\"area\",\"params\":{\"scale\":\"linear\",\"yAxis\":{},\"smoothLines\":true,\"addTimeMarker\":false,\"interpolate\":\"linear\",\"addLegend\":true,\"shareYAxis\":true,\"mode\":\"overlap\",\"defaultYExtents\":false,\"setYExtents\":false,\"addTooltip\":true,\"times\":[],\"type\":\"area\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\",\"setYExtents\":false,\"defaultYExtents\":false},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"area\",\"mode\":\"normal\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"interpolate\":\"cardinal\",\"valueAxis\":\"ValueAxis-1\"}],\"legendPosition\":\"right\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"rule.description\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}},{\"id\":\"3\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"auto\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}]}",
		"uiStateJSON": "{}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups:\\\"rootcheck\\\"\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-PM-Top-5-CIS-requirements",
		"_source": {
			"title": "Wazuh App Overview PM Top 5 CIS requirements",
			"visState":
				"{\"params\": {\"isDonut\": true, \"shareYAxis\": true, \"addTooltip\": true, \"addLegend\": true}, \"listeners\": {}, \"type\": \"pie\", \"aggs\": [{\"type\": \"count\", \"enabled\": true, \"id\": \"1\", \"params\": {}, \"schema\": \"metric\"}, {\"type\": \"terms\", \"enabled\": true, \"id\": \"2\", \"params\": {\"orderBy\": \"1\", \"field\": \"rule.cis\", \"order\": \"desc\", \"size\": 5}, \"schema\": \"segment\"}], \"title\": \"PM Top 5 CIS Requirements\"}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups:\\\"rootcheck\\\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-PM-Top-5-PCI-DSS-requirements",
		"_source": {
			"title": "Wazuh App Overview PM Top 5 PCI DSS requirements",
			"visState":
				"{\"params\": {\"isDonut\": true, \"shareYAxis\": true, \"addTooltip\": true, \"addLegend\": true}, \"listeners\": {}, \"type\": \"pie\", \"aggs\": [{\"type\": \"count\", \"enabled\": true, \"id\": \"1\", \"params\": {}, \"schema\": \"metric\"}, {\"type\": \"terms\", \"enabled\": true, \"id\": \"2\", \"params\": {\"orderBy\": \"1\", \"field\": \"rule.pci_dss\", \"order\": \"desc\", \"size\": 5}, \"schema\": \"segment\"}], \"title\": \"PM Top 5 PCI DSS Requirements\"}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups:\\\"rootcheck\\\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-PM-Events-per-agent-evolution",
		"_source": {
			"title": "Wazuh App Overview PM Events per agent evolution",
			"visState": "{\"title\":\"Wazuh App Overview PM Events per agent evolution\",\"type\":\"line\",\"params\":{\"type\":\"line\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"line\",\"mode\":\"normal\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"agent.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"auto\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups:\\\"rootcheck\\\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-PM-Alerts-summary",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Overview PM Alerts summary",
		"visState": "{\"title\":\"Wazuh App Overview PM Alerts summary\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showMeticsAtAllLevels\":false,\"showPartialRows\":false,\"showTotal\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"agent.name\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Agent\"}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.description\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Description\"}},{\"id\":\"4\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.title\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Control\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"language\":\"lucene\",\"query\":\"rule.groups:\\\"rootcheck\\\"\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-OSCAP-Last-score",
		"_source": {
			"title": "Wazuh App Overview OSCAP Last score",
			"visState":
				"{\"title\":\"Wazuh App Overview OSCAP Last score\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"max\",\"schema\":\"metric\",\"params\":{\"field\":\"@timestamp\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.oscap.scan.score\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-OSCAP-Last-agent-scanned",
		"_source": {
			"title": "Wazuh App Overview OSCAP Last agent scanned",
			"visState":
				"{\"title\":\"Wazuh App Overview OSCAP Last agent scanned\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"max\",\"schema\":\"metric\",\"params\":{\"field\":\"@timestamp\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"agent.name\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"data.oscap.check.result: fail AND rule.groups:oscap\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-OSCAP-Last-scan-profile",
		"_source": {
			"title": "Wazuh App Overview OSCAP Last scan profile",
			"visState":
				"{\"title\":\"Wazuh App Overview OSCAP Last scan profile\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"max\",\"schema\":\"metric\",\"params\":{\"field\":\"@timestamp\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.oscap.scan.profile.title\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-OSCAP-Agents",
		"_source": {
			"title": "Wazuh App Overview OSCAP Agents",
			"visState":
				"{\"params\": {\"isDonut\": false, \"shareYAxis\": true, \"addTooltip\": true, \"addLegend\": true}, \"listeners\": {}, \"type\": \"pie\", \"aggs\": [{\"type\": \"count\", \"enabled\": true, \"id\": \"1\", \"params\": {}, \"schema\": \"metric\"}, {\"type\": \"terms\", \"enabled\": true, \"id\": \"2\", \"params\": {\"orderBy\": \"1\", \"field\": \"agent.name\", \"order\": \"desc\", \"size\": 5}, \"schema\": \"segment\"}], \"title\": \"Wazuh App Overview OSCAP Agents\"}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups:\\\"oscap\\\" AND NOT rule.groups:\\\"syslog\\\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-OSCAP-Profiles",
		"_source": {
			"title": "Wazuh App Overview OSCAP Profiles",
			"visState":
				"{\"params\": {\"isDonut\": false, \"legendPosition\": \"right\", \"shareYAxis\": true, \"addTooltip\": true, \"addLegend\": true}, \"listeners\": {}, \"type\": \"pie\", \"aggs\": [{\"type\": \"count\", \"enabled\": true, \"id\": \"1\", \"params\": {}, \"schema\": \"metric\"}, {\"type\": \"terms\", \"enabled\": true, \"id\": \"3\", \"params\": {\"orderBy\": \"1\", \"field\": \"data.oscap.scan.profile.title\", \"order\": \"desc\", \"size\": 5}, \"schema\": \"segment\"}], \"title\": \"Wazuh App Overview OSCAP Profiles\"}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups:\\\"oscap\\\" AND NOT rule.groups:\\\"syslog\\\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-OSCAP-Content",
		"_source": {
			"title": "Wazuh App Overview OSCAP Content",
			"visState":
				"{\"params\": {\"isDonut\": false, \"legendPosition\": \"right\", \"shareYAxis\": true, \"addTooltip\": true, \"addLegend\": true}, \"listeners\": {}, \"type\": \"pie\", \"aggs\": [{\"type\": \"count\", \"enabled\": true, \"id\": \"1\", \"params\": {}, \"schema\": \"metric\"}, {\"type\": \"terms\", \"enabled\": true, \"id\": \"2\", \"params\": {\"orderBy\": \"1\", \"field\": \"data.oscap.scan.content\", \"order\": \"desc\", \"size\": 5}, \"schema\": \"segment\"}], \"title\": \"Wazuh App Overview OSCAP Content\"}",
			"uiStateJSON": "{}",
			"version": 1,
			"description": "",
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups:\\\"oscap\\\" AND NOT rule.groups:\\\"syslog\\\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-OSCAP-Severity",
		"_source": {
			"title": "Wazuh App Overview OSCAP Severity",
			"visState":
				"{\"title\":\"Wazuh App Overview OSCAP Severity\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.oscap.check.severity\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"data.oscap.check.result: fail AND rule.groups:oscap AND NOT rule.groups: syslog\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-OSCAP-Top-5-agents-Severity-high",
		"_source": {
			"title": "Wazuh App Overview OSCAP Top 5 agents - Severity high",
			"visState":
				"{\"title\":\"Wazuh App Overview OSCAP Top 5 Agents - Severity high\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"histogram\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":false,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"agent.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: oscap AND data.oscap.check.severity: high\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-OSCAP-Top-10-alerts",
		"_source": {
			"title": "Wazuh App Overview OSCAP Top 10 alerts",
			"visState":
				"{\"title\":\"Wazuh App OSCAP Top 10 alerts\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.oscap.check.title\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"data.oscap.check.result: fail AND rule.groups:oscap AND rule.groups: oscap-result AND data.oscap.check.result:fail\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-OSCAP-Top-10-high-risk-alerts",
		"_source": {
			"title": "Wazuh App Overview OSCAP Top 10 high risk alerts",
			"visState":
				"{\"title\":\"Wazuh App OSCAP Top 10 high risk alerts\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.oscap.check.title\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"data.oscap.check.severity: high AND data.oscap.check.result: fail AND rule.groups:oscap AND rule.groups: oscap-result AND data.oscap.check.result:fail\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-OSCAP-Highest-score",
		"_source": {
		  "title": "Wazuh App Overview OSCAP Highest score",
		  "visState": "{\"title\":\"Wazuh App Overview OSCAP Highest score\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"max\",\"schema\":\"metric\",\"params\":{\"field\":\"data.oscap.scan.score\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.oscap.scan.score\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
		  "uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":0,\"direction\":null}}}}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
		    "searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
		  }
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-OSCAP-Lowest-score",
		"_source": {
		  "title": "Wazuh App Overview OSCAP Lowest score",
		  "visState": "{\"title\":\"Wazuh App Overview OSCAP Lowest score\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"min\",\"schema\":\"metric\",\"params\":{\"field\":\"data.oscap.scan.score\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.oscap.scan.score\",\"size\":1,\"order\":\"asc\",\"orderBy\":\"1\"}}]}",
		  "uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
		    "searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
		  }
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-OSCAP-Latest-alert",
		"_source": {
			"title": "Wazuh App Overview OSCAP Latest alert",
			"visState":
				"{\"title\":\"Wazuh App Overview OSCAP Latest alert\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"max\",\"schema\":\"metric\",\"params\":{\"field\":\"@timestamp\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.oscap.check.title\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"data.oscap.check.result: fail AND rule.groups:oscap AND rule.groups: oscap-result AND data.oscap.check.result:fail\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-OSCAP-Last-alerts",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Overview OSCAP Last alerts",
		"visState": "{\"title\":\"Wazuh App Overview OSCAP Last alerts\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"agent.name\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":40,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Agent\"}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.oscap.check.title\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Title\"}},{\"id\":\"4\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.oscap.scan.profile.title\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Profile\"}},{\"id\":\"6\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.oscap.scan.content\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Content\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: oscap\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-Audit-New-files",
		"_source": {
			"title": "Wazuh App Overview Audit New files",
			"visState":
				"{\"title\":\"Wazuh App Overview Audit New files\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"gauge\",\"gauge\":{\"verticalSplit\":false,\"autoExtend\":false,\"percentageMode\":false,\"gaugeType\":\"Metric\",\"gaugeStyle\":\"Full\",\"backStyle\":\"Full\",\"orientation\":\"vertical\",\"colorSchema\":\"Green to Red\",\"gaugeColorMode\":\"None\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"scale\":{\"show\":false,\"labels\":false,\"color\":\"#333\",\"width\":2},\"type\":\"simple\",\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"New files\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.groups : audit_watch_create\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-Audit-Read-files",
		"_source": {
			"title": "Wazuh App Overview Audit Read files",
			"visState":
				"{\"title\":\"Wazuh App Overview Audit Read files\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"gauge\",\"gauge\":{\"verticalSplit\":false,\"autoExtend\":false,\"percentageMode\":false,\"gaugeType\":\"Metric\",\"gaugeStyle\":\"Full\",\"backStyle\":\"Full\",\"orientation\":\"vertical\",\"colorSchema\":\"Green to Red\",\"gaugeColorMode\":\"None\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"scale\":{\"show\":false,\"labels\":false,\"color\":\"#333\",\"width\":2},\"type\":\"simple\",\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Read files\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.groups : audit_watch_read\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-Audit-Modified-files",
		"_source": {
			"title": "Wazuh App Overview Audit Modified files",
			"visState":
				"{\"title\":\"Wazuh App Overview Audit Modified files\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"gauge\",\"gauge\":{\"verticalSplit\":false,\"autoExtend\":false,\"percentageMode\":false,\"gaugeType\":\"Metric\",\"gaugeStyle\":\"Full\",\"backStyle\":\"Full\",\"orientation\":\"vertical\",\"colorSchema\":\"Green to Red\",\"gaugeColorMode\":\"None\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"scale\":{\"show\":false,\"labels\":false,\"color\":\"#333\",\"width\":2},\"type\":\"simple\",\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Modified files\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.groups : audit_watch_write\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-Audit-Removed-files",
		"_source": {
			"title": "Wazuh App Overview Audit Removed files",
			"visState":
				"{\"title\":\"Wazuh App Overview Audit Removed files\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"gauge\",\"gauge\":{\"verticalSplit\":false,\"autoExtend\":false,\"percentageMode\":false,\"gaugeType\":\"Metric\",\"gaugeStyle\":\"Full\",\"backStyle\":\"Full\",\"orientation\":\"vertical\",\"colorSchema\":\"Green to Red\",\"gaugeColorMode\":\"None\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"scale\":{\"show\":false,\"labels\":false,\"color\":\"#333\",\"width\":2},\"type\":\"simple\",\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Removed files\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.groups : audit_watch_delete\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-Audit-Latest-alert",
		"_source": {
			"title": "Wazuh App Overview Audit Latest alert",
			"visState":
				"{\"title\":\"Wazuh App Overview Audit Latest alert\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"max\",\"schema\":\"metric\",\"params\":{\"field\":\"@timestamp\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.description\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-Audit-Groups",
		"_source": {
			"title": "Wazuh App Overview Audit Groups",
			"visState":
				"{\"title\":\"Wazuh App Overview Audit Groups\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.groups\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-Audit-Agents",
		"_source": {
			"title": "Wazuh App Overview Audit Agents",
			"visState":
				"{\"title\":\"Wazuh App Overview Audit Agents\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"agent.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-Audit-Directories",
		"_source": {
			"title": "Wazuh App Overview Audit Directories",
			"visState":
				"{\"title\":\"Wazuh App Overview Audit Directories\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.audit.directory.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-Audit-Files",
		"_source": {
			"title": "Wazuh App Overview Audit Files",
			"visState":
				"{\"title\":\"Wazuh App Overview Audit Files\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.audit.file.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-Audit-Alerts-over-time",
		"_source": {
			"title": "Wazuh App Overview Audit Alerts over time",
			"visState": "{\"title\":\"Wazuh App Overview Audit Alerts over time\",\"type\":\"area\",\"params\":{\"scale\":\"linear\",\"yAxis\":{},\"smoothLines\":true,\"setYExtents\":false,\"legendPosition\":\"right\",\"addTimeMarker\":false,\"interpolate\":\"linear\",\"addLegend\":true,\"shareYAxis\":true,\"mode\":\"overlap\",\"defaultYExtents\":false,\"times\":[],\"addTooltip\":true,\"type\":\"area\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\",\"setYExtents\":false,\"defaultYExtents\":false},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"area\",\"mode\":\"normal\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"interpolate\":\"cardinal\",\"valueAxis\":\"ValueAxis-1\"}]},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"rule.description\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"auto\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-Audit-File-read-access",
		"_type": "visualization",
		"_source": {
		  "title": "Wazuh App Overview Audit File read access",
		  "visState": "{\"title\":\"Wazuh App Overview Audit File read access\",\"type\":\"pie\",\"params\":{\"isDonut\":false,\"legendPosition\":\"right\",\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"type\":\"pie\",\"labels\":{\"show\":false,\"values\":true,\"last_level\":true,\"truncate\":100}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.audit.file.name\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"\"}}]}",
		  "uiStateJSON": "{}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
			"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.id: 80784\",\"language\":\"lucene\"}}"
		  }
		}
	},
	{
		"_id": "Wazuh-App-Overview-Audit-File-write-access",
		"_type": "visualization",
		"_source": {
		  "title": "Wazuh App Overview Audit File write access",
		  "visState": "{\"title\":\"Wazuh App Overview Audit File write access\",\"type\":\"pie\",\"params\":{\"isDonut\":false,\"legendPosition\":\"right\",\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"type\":\"pie\",\"labels\":{\"show\":false,\"values\":true,\"last_level\":true,\"truncate\":100}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.audit.file.name\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"\"}}]}",
		  "uiStateJSON": "{}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
			"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.id: 80781\",\"language\":\"lucene\"}}"
		  }
		}
	},
	{
		"_id": "Wazuh-App-Overview-Audit-Commands",
		"_source": {
			"title": "Wazuh App Overview Audit Commands",
			"visState":
				"{\"params\": {\"isDonut\": false, \"legendPosition\": \"right\", \"shareYAxis\": true, \"addTooltip\": true, \"addLegend\": true}, \"listeners\": {}, \"type\": \"pie\", \"aggs\": [{\"type\": \"count\", \"enabled\": true, \"id\": \"1\", \"params\": {}, \"schema\": \"metric\"}, {\"type\": \"terms\", \"enabled\": true, \"id\": \"2\", \"params\": {\"orderBy\": \"1\", \"field\": \"data.audit.command\", \"customLabel\": \"\", \"order\": \"desc\", \"size\": 10}, \"schema\": \"segment\"}], \"title\": \"Wazuh App Overview Audit Commands\"}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-Audit-Files-created",
		"_type": "visualization",
		"_source": {
		  "title": "Wazuh App Overview Audit Files created",
		  "visState": "{\"title\":\"Wazuh App Overview Audit Files created\",\"type\":\"pie\",\"params\":{\"isDonut\":false,\"legendPosition\":\"right\",\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"type\":\"pie\",\"labels\":{\"show\":false,\"values\":true,\"last_level\":true,\"truncate\":100}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.audit.file.name\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"\"}}]}",
		  "uiStateJSON": "{}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
			"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.id: 80790\",\"language\":\"lucene\"}}"
		  }
		}
	},
	{
		"_id": "Wazuh-App-Overview-Audit-Files-deleted",
		"_type": "visualization",
		"_source": {
		  "title": "Wazuh App Overview Audit Files deleted",
		  "visState": "{\"title\":\"Wazuh App Overview Audit Files deleted\",\"type\":\"pie\",\"params\":{\"isDonut\":false,\"legendPosition\":\"right\",\"shareYAxis\":true,\"addTooltip\":true,\"addLegend\":true,\"type\":\"pie\",\"labels\":{\"show\":false,\"values\":true,\"last_level\":true,\"truncate\":100}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.audit.file.name\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"\"}}]}",
		  "uiStateJSON": "{}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
			"searchSourceJSON": 
				"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.id: 80791\",\"language\":\"lucene\"}}"
		  }
		}
	},
	{
		"_id": "Wazuh-App-Overview-Audit-Last-alerts",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Overview Audit Last alerts",
		"visState": "{\"title\":\"Wazuh App Overview Audit Last alerts\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"agent.name\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Agent\"}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.description\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Event\"}},{\"id\":\"4\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.audit.exe\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Command\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-PCI-DSS-Requirements-heatmap",
		"_source": {
			"title": "Wazuh App Overview PCI DSS Requirements heatmap",
			"visState": "{\"title\":\"Wazuh App Overview PCI DSS Requirements heatmap\",\"type\":\"heatmap\",\"params\":{\"type\":\"heatmap\",\"addTooltip\":true,\"addLegend\":true,\"enableHover\":false,\"legendPosition\":\"right\",\"times\":[],\"colorsNumber\":4,\"colorSchema\":\"Reds\",\"setColorRange\":false,\"colorsRange\":[],\"invertColors\":false,\"percentageMode\":false,\"valueAxes\":[{\"show\":false,\"id\":\"ValueAxis-1\",\"type\":\"value\",\"scale\":{\"type\":\"linear\",\"defaultYExtents\":false},\"labels\":{\"show\":false,\"rotate\":0,\"color\":\"#555\"}}]},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"agent.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Agents\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.pci_dss\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"PCI DSS Requirements\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 60\":\"rgb(255,245,240)\",\"60 - 120\":\"rgb(252,187,161)\",\"120 - 180\":\"rgb(251,106,74)\",\"180 - 240\":\"rgb(203,24,29)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"language\":\"lucene\",\"query\":\"\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-PCI-DSS-requirements",
		"_source": {
			"title": "Wazuh App Overview PCI DSS requirements",
			"visState": "{\"title\":\"Wazuh App Overview PCI DSS requirements\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"histogram\",\"mode\":\"normal\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"\"}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"rule.pci_dss\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.pci_dss\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"PCI DSS Requirementes\"}}]}",
			"uiStateJSON": "{\"vis\":{\"legendOpen\":true}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"_exists_:rule.pci_dss\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-PCI-DSS-Groups",
		"_source": {
			"title": "Wazuh App Overview PCI DSS Groups",
			"visState":
				"{\"title\":\"Wazuh App Overview PCI DSS Groups\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.groups\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-PCI-DSS-Agents",
		"_source": {
			"title": "Wazuh App Overview PCI DSS Agents",
			"visState":
				"{\"title\":\"Wazuh App Overview PCI DSS Agents\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"agent.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"_exists_:rule.pci_dss\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-PCI-DSS-Requirements-by-agent",
		"_source": {
			"title": "Wazuh App Overview PCI DSS Requirements by agent",
			"visState":
				"{\"title\":\"Wazuh App Overview PCI DSS Requirements by agent\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"histogram\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false,\"radiusRatio\":51},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.pci_dss\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"PCI DSS Requirements\"}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"agent.name\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"_exists_:rule.pci_dss\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-PCI-DSS-Last-alerts",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Overview PCI DSS Last alerts",
		"visState": "{\"title\":\"Wazuh App Overview PCI DSS Last alerts\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"agent.name\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Agent name\"}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.pci_dss\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Requirement\"}},{\"id\":\"4\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.description\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Rule description\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":3,\"direction\":\"desc\"}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"_exists_:rule.pci_dss\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Manager-Ruleset-Rules-Top-24h-Groups",
		"_source": {
			"title": "Wazuh App Manager Ruleset Rules Top 24h Groups",
			"visState":
				"{\"title\":\"Wazuh App Manager Ruleset Rules Top 24h Groups\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.groups\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Manager-Ruleset-Rules-Top-24h-Level",
		"_source": {
			"title": "Wazuh App Manager Ruleset Rules Top 24h Level",
			"visState":
				"{\"title\":\"Wazuh App Manager Ruleset Rules Top 24h Level\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.level\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Manager-Ruleset-Decoders-Top-24h-Decoder-name",
			"_source": {
			"title": "Wazuh App Manager Ruleset Decoders Top 24h Decoder name",
			"visState": "{\"title\":\"Wazuh App Manager Ruleset Decoders Top 24h Decoder name\",\"type\":\"area\",\"params\":{\"type\":\"area\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"area\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"drawLinesBetweenPoints\":true,\"showCircles\":true,\"interpolate\":\"linear\",\"valueAxis\":\"ValueAxis-1\"}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"decoder.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"h\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Manager-Ruleset-Rules-Top-24h-Rule-ID",
		"_source": {
			"title": "Wazuh App Manager Ruleset Rules Top 24h Rule ID",
			"visState":
				"{\"title\":\"Wazuh App Manager Ruleset Rules Top 24h Rule ID\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.id\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Manager-Ruleset-Rules-Top-24h-PCI-DSS-requirements",
		"_source": {
			"title": "Wazuh App Manager Ruleset Rules Top 24h PCI DSS requirements",
			"visState":
				"{\"title\":\"Wazuh App Manager Ruleset Rules Top 24h PCI DSS requirements\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.pci_dss\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Overview-Top-5-alerts",
		"_source": {
			"title": "Wazuh App Agents Overview Top 5 alerts",
			"visState":
				"{\"title\":\"Wazuh App Agents Overview Top 5 alerts\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.description\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Overview-Top-5-groups",
		"_source": {
			"title": "Wazuh App Agents Overview Top 5 groups",
			"visState":
				"{\"title\":\"Wazuh App Agents Overview Top 5 groups\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.groups\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Overview-Top-5-PCI-DSS-Requirements",
		"_source": {
			"title": "Wazuh App Agents Overview Top 5 PCI DSS Requirements",
			"visState":
				"{\"title\":\"Wazuh App Agents Overview Top 5 PCI DSS Requirements\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.pci_dss\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Overview-Alert-level-evolution",
		"_source": {
			"title": "Wazuh App Agents Overview Alert level evolution",
			"visState": "{\"title\":\"Wazuh App Agents Overview Alert level evolution\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"histogram\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"rule.level\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"h\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Overview-Alerts",
		"_source": {
			"title": "Wazuh App Agents Overview Alerts",
			"visState":
				"{\"title\":\"Wazuh App Agents Overview Alerts\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"histogram\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":false,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"h\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{},\"customLabel\":\"Agent alerts\"}}]}",
			"uiStateJSON": "{\"vis\":{\"legendOpen\":false}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Overview-Alerts-summary",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Agents Overview Alerts summary",
		"visState": "{\"title\":\"Wazuh App Agents Overview Alerts summary\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.id\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Rule ID\"}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.description\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Description\"}},{\"id\":\"4\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.level\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Level\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Agents-Overview-Groups-summary",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Agents Overview Groups summary",
		"visState": "{\"title\":\"Wazuh App Agents Overview Groups summary\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.groups\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Group\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Agents-FIM-Users",
		"_source": {
			"title": "Wazuh App Agents FIM Users",
			"visState":
				"{\"title\":\"Wazuh App Agents FIM Users\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"syscheck.uname_after\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: syscheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-FIM-Groups",
		"_source": {
			"title": "Wazuh App Agents FIM Groups",
			"visState":
				"{\"title\":\"Wazuh App Agents FIM Groups\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"syscheck.gname_after\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: syscheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-FIM-Permissions",
		"_source": {
			"title": "Wazuh App Agents FIM Permissions",
			"visState":
				"{\"title\":\"Wazuh App Agents FIM Permissions\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"syscheck.perm_after\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: syscheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-FIM-Events",
		"_source": {
			"title": "Wazuh App Agents FIM Events",
			"visState":
				"{\"title\":\"Wazuh App Agents FIM Events\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"histogram\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":false,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"h\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}]}",
			"uiStateJSON": "{\"vis\":{\"legendOpen\":false}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: syscheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-FIM-Files-added",
		"_source": {
			"title": "Wazuh App Agents FIM Files added",
			"visState":
				"{\"title\":\"Wazuh App Agents FIM Files added\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"syscheck.path\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.id: 554 AND NOT location: syscheck-registry\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-FIM-Files-modified",
		"_source": {
			"title": "Wazuh App Agents FIM Files modified",
			"visState":
				"{\"title\":\"Wazuh App Agents FIM Files modified\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"syscheck.path\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"(rule.id: 550 OR rule.id: 551 OR rule.id: 552 OR rule.id: 555) AND NOT location: syscheck-registry\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-FIM-Files-deleted",
		"_source": {
			"title": "Wazuh App Agents FIM Files deleted",
			"visState":
				"{\"title\":\"Wazuh App Agents FIM Files deleted\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"syscheck.path\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.id: 553 AND NOT location: syscheck-registry\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-FIM-Alerts-summary",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Agents FIM Alerts summary",
		"visState": "{\"title\":\"Wazuh App Agents FIM Alerts summary\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"syscheck.path\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"File\"}},{\"id\":\"5\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.description\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Description\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: syscheck\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Agents-PM-Alerts-over-time",
		"_source": {
			"title": "Wazuh App Agents PM Alerts over time",
			"visState":
				"{\"title\":\"Wazuh App Agents PM Alerts over time\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"histogram\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":false,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"h\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}]}",
			"uiStateJSON": "{\"vis\":{\"legendOpen\":false}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: rootcheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-PM-Top-5-CIS-Requirements",
		"_source": {
			"title": "Wazuh App Agents PM Top 5 CIS Requirements",
			"visState":
				"{\"title\":\"Wazuh App Agents PM Top 5 CIS Requirements\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.cis\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: rootcheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-PM-Top-5-PCI-DSS-Requirements",
		"_source": {
			"title": "Wazuh App Agents PM Top 5 PCI DSS Requirements",
			"visState":
				"{\"title\":\"Wazuh App Agents PM Top 5 PCI DSS Requirements\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.pci_dss\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: rootcheck\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-PM-Alerts-summary",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Agents PM Alerts summary",
		"visState": "{\"title\":\"Wazuh App Agents PM Alerts summary\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.description\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Rule description\"}},{\"id\":\"4\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.title\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Control\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: rootcheck\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Agents-OSCAP-Higher-score-metric",
		"_source": {
			"title": "Wazuh App Agents OSCAP Higher score metric",
			"visState":
				"{\"title\":\"Wazuh App Agents OSCAP Higher score metric\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"gauge\",\"gauge\":{\"verticalSplit\":false,\"autoExtend\":false,\"percentageMode\":false,\"gaugeType\":\"Metric\",\"gaugeStyle\":\"Full\",\"backStyle\":\"Full\",\"orientation\":\"vertical\",\"colorSchema\":\"Green to Red\",\"gaugeColorMode\":\"None\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"scale\":{\"show\":false,\"labels\":false,\"color\":\"#333\",\"width\":2},\"type\":\"simple\",\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"max\",\"schema\":\"metric\",\"params\":{\"field\":\"data.oscap.scan.score\",\"customLabel\":\"Higher score\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-OSCAP-Lower-score-metric",
		"_source": {
			"title": "Wazuh App Agents OSCAP Lower score metric",
			"visState":
				"{\"title\":\"Wazuh App Agents OSCAP Lower score metric\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"gauge\",\"gauge\":{\"verticalSplit\":false,\"autoExtend\":false,\"percentageMode\":false,\"gaugeType\":\"Metric\",\"gaugeStyle\":\"Full\",\"backStyle\":\"Full\",\"orientation\":\"vertical\",\"colorSchema\":\"Green to Red\",\"gaugeColorMode\":\"None\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"scale\":{\"show\":false,\"labels\":false,\"color\":\"#333\",\"width\":2},\"type\":\"simple\",\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"min\",\"schema\":\"metric\",\"params\":{\"field\":\"data.oscap.scan.score\",\"customLabel\":\"Lower score\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-OSCAP-Last-score",
		"_source": {
			"title": "Wazuh App Agents OSCAP Last score",
			"visState":
				"{\"title\":\"Wazuh App Agents OSCAP Last score\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"max\",\"schema\":\"metric\",\"params\":{\"field\":\"@timestamp\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.oscap.scan.score\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-OSCAP-Last-scan-profile",
		"_source": {
			"title": "Wazuh App Agents OSCAP Last scan profile",
			"visState":
				"{\"title\":\"Wazuh App Agents OSCAP Last scan profile\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"max\",\"schema\":\"metric\",\"params\":{\"field\":\"@timestamp\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.oscap.scan.profile.title\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"data.oscap.check.result: fail AND rule.groups: oscap\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-OSCAP-Scans",
		"_source": {
			"title": "Wazuh App Agents OSCAP Scans",
			"visState":
				"{\"title\":\"Wazuh App Agents OSCAP Scans\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.oscap.scan.id\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-OSCAP-Profiles",
		"_source": {
			"title": "Wazuh App Agents OSCAP Profiles",
			"visState":
				"{\"title\":\"Wazuh App Agents OSCAP Profiles\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.oscap.scan.profile.title\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"data.oscap.check.result: fail AND rule.groups:oscap AND NOT rule.groups: syslog\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-OSCAP-Content",
		"_source": {
			"title": "Wazuh App Agents OSCAP Content",
			"visState":
				"{\"title\":\"Wazuh App Agents OSCAP Content\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.oscap.scan.content\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"data.oscap.check.result: fail AND rule.groups:oscap AND NOT rule.groups: syslog\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-OSCAP-Severity",
		"_source": {
			"title": "Wazuh App Agents OSCAP Severity",
			"visState":
				"{\"title\":\"Wazuh App Agents OSCAP Severity\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.oscap.check.severity\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"data.oscap.check.result: fail AND rule.groups:oscap AND NOT rule.groups: syslog\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-OSCAP-Daily-scans-evolution",
		"_source": {
			"title": "Wazuh App Agents OSCAP Daily scans evolution",
			"visState":
				"{\"title\":\"Wazuh App Agents OSCAP Daily scans evolution\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"histogram\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":false,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"h\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{},\"customLabel\":\"Daily scans\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: oscap AND data.oscap.check.result:fail\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-OSCAP-Top-5-Alerts",
		"_source": {
			"title": "Wazuh App Agents OSCAP Top 5 Alerts",
			"visState":
				"{\"title\":\"Wazuh App Agents OSCAP Top 5 Alerts\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.oscap.check.title\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"data.oscap.check.result: fail AND rule.groups:oscap AND rule.groups: oscap-result AND data.oscap.check.result:fail\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-OSCAP-Top-5-High-risk-alerts",
		"_source": {
			"title": "Wazuh App Agents OSCAP Top 5 High risk alerts",
			"visState":
				"{\"title\":\"Wazuh App Agents OSCAP Top 5 High risk alerts\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.oscap.check.title\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"data.oscap.check.severity: high AND data.oscap.check.result: fail AND rule.groups:oscap AND rule.groups: oscap-result AND data.oscap.check.result:fail\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-OSCAP-Top-alert",
		"_source": {
			"title": "Wazuh App Agents OSCAP Top alert",
			"visState":
				"{\"title\":\"Wazuh App Agents OSCAP Top alert\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.oscap.check.title\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"data.oscap.check.result: fail AND rule.groups:oscap\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-OSCAP-Last-alerts",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Agents OSCAP Last alerts",
		"visState": "{\"title\":\"Wazuh App Agents OSCAP Last alerts\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":1,\"direction\":\"asc\"},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.oscap.check.title\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Title\"}},{\"id\":\"4\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.oscap.scan.profile.title\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Profile\"}},{\"id\":\"6\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.oscap.scan.content\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Content\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":4,\"direction\":\"desc\"}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: oscap\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Agents-Audit-New-files-metric",
		"_source": {
			"title": "Wazuh App Agents Audit New files metric",
			"visState":
				"{\"title\":\"Wazuh App Agents Audit New files metric\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"gauge\",\"gauge\":{\"verticalSplit\":false,\"autoExtend\":false,\"percentageMode\":false,\"gaugeType\":\"Metric\",\"gaugeStyle\":\"Full\",\"backStyle\":\"Full\",\"orientation\":\"vertical\",\"colorSchema\":\"Green to Red\",\"gaugeColorMode\":\"None\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"scale\":{\"show\":false,\"labels\":false,\"color\":\"#333\",\"width\":2},\"type\":\"simple\",\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"New files\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Audit-Read-files-metric",
		"_source": {
			"title": "Wazuh App Agents Audit Read files metric",
			"visState":
				"{\"title\":\"Wazuh App Agents Audit Read files metric\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"gauge\",\"gauge\":{\"verticalSplit\":false,\"autoExtend\":false,\"percentageMode\":false,\"gaugeType\":\"Metric\",\"gaugeStyle\":\"Full\",\"backStyle\":\"Full\",\"orientation\":\"vertical\",\"colorSchema\":\"Green to Red\",\"gaugeColorMode\":\"None\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"scale\":{\"show\":false,\"labels\":false,\"color\":\"#333\",\"width\":2},\"type\":\"simple\",\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Read files\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.id: 80784\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Audit-Modified-files-metric",
		"_source": {
			"title": "Wazuh App Agents Audit Modified files metric",
			"visState":
				"{\"title\":\"Wazuh App Agents Audit Modified files metric\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"gauge\",\"gauge\":{\"verticalSplit\":false,\"autoExtend\":false,\"percentageMode\":false,\"gaugeType\":\"Metric\",\"gaugeStyle\":\"Full\",\"backStyle\":\"Full\",\"orientation\":\"vertical\",\"colorSchema\":\"Green to Red\",\"gaugeColorMode\":\"None\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"scale\":{\"show\":false,\"labels\":false,\"color\":\"#333\",\"width\":2},\"type\":\"simple\",\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Modified files\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.id: 80781\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Audit-Removed-files-metric",
		"_source": {
			"title": "Wazuh App Agents Audit Removed files metric",
			"visState":
				"{\"title\":\"Wazuh App Agents Audit Removed files metric\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"gauge\",\"gauge\":{\"verticalSplit\":false,\"autoExtend\":false,\"percentageMode\":false,\"gaugeType\":\"Metric\",\"gaugeStyle\":\"Full\",\"backStyle\":\"Full\",\"orientation\":\"vertical\",\"colorSchema\":\"Green to Red\",\"gaugeColorMode\":\"None\",\"useRange\":false,\"colorsRange\":[{\"from\":0,\"to\":100}],\"invertColors\":false,\"labels\":{\"show\":true,\"color\":\"black\"},\"scale\":{\"show\":false,\"labels\":false,\"color\":\"#333\",\"width\":2},\"type\":\"simple\",\"style\":{\"fontSize\":20,\"bgColor\":false,\"labelColor\":false,\"subText\":\"\"}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Removed files\"}}]}",
			"uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 100\":\"rgb(0,104,55)\"}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.id: 80791\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Audit-Latest-alert",
		"_source": {
			"title": "Wazuh App Agents Audit Latest alert",
			"visState":
				"{\"title\":\"Wazuh App Agents Audit Latest alert\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"max\",\"schema\":\"metric\",\"params\":{\"field\":\"@timestamp\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.description\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Rule description\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Audit-Groups",
		"_source": {
			"title": "Wazuh App Agents Audit Groups",
			"visState":
				"{\"title\":\"Wazuh App Agents Audit Groups\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.groups\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Audit-Directories",
		"_source": {
			"title": "Wazuh App Agents Audit Directories",
			"visState":
				"{\"title\":\"Wazuh App Agents Audit Directories\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.audit.directory.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Audit-Files",
		"_source": {
			"title": "Wazuh App Agents Audit Files",
			"visState":
				"{\"title\":\"Wazuh App Agents Audit Files\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.audit.file.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Audit-Alerts-over-time",
		"_source": {
			"title": "Wazuh App Agents Audit Alerts over time",
			"visState": "{\"title\":\"Wazuh App Agents Audit Alerts over time\",\"type\":\"area\",\"params\":{\"type\":\"area\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"area\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"drawLinesBetweenPoints\":true,\"showCircles\":true,\"interpolate\":\"linear\",\"valueAxis\":\"ValueAxis-1\"}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"rule.description\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"h\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Audit-File-read-access",
		"_source": {
			"title": "Wazuh App Agents Audit File read access",
			"visState":
				"{\"title\":\"Wazuh App Agents Audit File read access\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.audit.file.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.id: 80784\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Audit-File-write-access",
		"_source": {
			"title": "Wazuh App Agents Audit File write access",
			"visState":
				"{\"title\":\"Wazuh App Agents Audit File write access\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.audit.file.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.id: 80781\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Audit-Commands",
		"_source": {
			"title": "Wazuh App Agents Audit Commands",
			"visState":
				"{\"title\":\"Wazuh App Agents Audit Commands\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.audit.command\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Audit-Created-files",
		"_source": {
			"title": "Wazuh App Agents Audit Created files",
			"visState":
				"{\"title\":\"Wazuh App Agents Audit Created files\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.audit.file.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.id: 80790\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Audit-Removed-files",
		"_source": {
			"title": "Wazuh App Agents Audit Removed files",
			"visState":
				"{\"title\":\"Wazuh App Agents Audit Removed files\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.audit.file.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit AND rule.id: 80791\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-Audit-Last-alerts",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Agents Audit Last alerts",
		"visState": "{\"title\":\"Wazuh App Agents Audit Last alerts\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.description\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Event\"}},{\"id\":\"4\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.audit.exe\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Command\"}},{\"id\":\"5\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.audit.type\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Type\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: audit\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
	    "_id": "Wazuh-App-Agents-PCI-Requirements",
	    "_source": {
			"title": "Wazuh App Agents PCI Requirements",
			"visState": "{\"title\":\"Wazuh App Agents PCI Requirements\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"histogram\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"rule.pci_dss\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.pci_dss\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"PCI DSS Requirements\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"_exists_:rule.pci_dss\",\"language\":\"lucene\"}}"
			}
	    },
	    "_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-PCI-Groups",
		"_source": {
			"title": "Wazuh App Agents PCI Groups",
			"visState":
				"{\"title\":\"Wazuh App Agents PCI Groups\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"rule.groups\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON":
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"_exists_:rule.pci_dss\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Agents-PCI-Last-alerts",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Agents PCI Last alerts",
		"visState": "{\"title\":\"Wazuh App Agents PCI Last alerts\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":2,\"direction\":\"asc\"},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.pci_dss\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Requirement\"}},{\"id\":\"4\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.description\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Rule description\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":2,\"direction\":\"desc\"}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"_exists_:rule.pci_dss\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-AWS-Metric-Authorize-security",
		"_source": {
			"title": "Wazuh App Overview AWS Metric Authorize security",
			"visState": "{\"title\":\"Wazuh App Overview AWS Metric Authorize security\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"metric\",\"metric\":{\"percentageMode\":false,\"useRanges\":false,\"colorSchema\":\"Green to Red\",\"metricColorMode\":\"None\",\"colorsRange\":[{\"from\":0,\"to\":10000}],\"labels\":{\"show\":true},\"invertColors\":false,\"style\":{\"bgFill\":\"#000\",\"bgColor\":false,\"labelColor\":false,\"subText\":\"\",\"fontSize\":20}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Authorized security groups\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: amazon AND rule.description: *AuthorizeSecurity*\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-AWS-Metric-Revoke-security",
		"_source": {
			"title": "Wazuh App Overview AWS Metric Revoke security",
			"visState": "{\"title\":\"Wazuh App Overview AWS Metric Revoke security\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"metric\",\"metric\":{\"percentageMode\":false,\"useRanges\":false,\"colorSchema\":\"Green to Red\",\"metricColorMode\":\"None\",\"colorsRange\":[{\"from\":0,\"to\":10000}],\"labels\":{\"show\":true},\"invertColors\":false,\"style\":{\"bgFill\":\"#000\",\"bgColor\":false,\"labelColor\":false,\"subText\":\"\",\"fontSize\":20}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Revoked security groups\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: amazon AND rule.description: *RevokeSecurity*\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-AWS-Instances",
		"_source": {
			"title": "Wazuh App Overview AWS Instances",
			"visState": "{\"title\":\"Wazuh App Overview AWS Instances\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"histogram\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":false,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.aws.eventName\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Instance state\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: amazon AND data.aws.eventName: *Instances*\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-AWS-Metric-Successful-logins",
		"_source": {
			"title": "Wazuh App Overview AWS Metric Successful logins",
			"visState": "{\"title\":\"Wazuh App Overview AWS Metric Successful logins\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"metric\",\"metric\":{\"percentageMode\":false,\"useRanges\":false,\"colorSchema\":\"Green to Red\",\"metricColorMode\":\"None\",\"colorsRange\":[{\"from\":0,\"to\":10000}],\"labels\":{\"show\":true},\"invertColors\":false,\"style\":{\"bgFill\":\"#000\",\"bgColor\":false,\"labelColor\":false,\"subText\":\"\",\"fontSize\":20}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Successful logins\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: amazon AND rule.description: *Login?Success*\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-AWS-Most-active-user",
		"_source": {
			"title": "Wazuh App Overview AWS Most active user",
			"visState": "{\"title\":\"Wazuh App Overview AWS Most active user\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.aws.userIdentity.userName\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"User name\"}}]}",
			"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-AWS-Security-groups-over-time",
		"_source": {
			"title": "Wazuh App Overview AWS Security groups over time",
			"visState": "{\"title\":\"Wazuh App Overview AWS Security groups over time\",\"type\":\"area\",\"params\":{\"type\":\"area\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"area\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"drawLinesBetweenPoints\":true,\"showCircles\":true,\"interpolate\":\"linear\",\"valueAxis\":\"ValueAxis-1\"}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"rule.description\",\"size\":2,\"order\":\"desc\",\"orderBy\":\"1\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"auto\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: amazon AND rule.description: *Security*\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-AWS-Success-login-Top-5-countries",
		"_source": {
			"title": "Wazuh App Overview AWS Success login Top 5 countries",
			"visState": "{\"title\":\"Wazuh App Overview AWS Success login Top 5 countries\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true,\"labels\":{\"show\":false,\"values\":true,\"last_level\":true,\"truncate\":100}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"GeoLocation.country_name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Country\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: amazon AND rule.description: *Login?Success*\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-AWS-Events-over-time",
		"_source": {
			"title": "Wazuh App Overview AWS Events over time",
			"visState": "{\"title\":\"Wazuh App Overview AWS Events over time\",\"type\":\"area\",\"params\":{\"type\":\"area\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"area\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"drawLinesBetweenPoints\":true,\"showCircles\":true,\"interpolate\":\"linear\",\"valueAxis\":\"ValueAxis-1\"}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"auto\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"data.aws.eventName\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Event name\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: amazon\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-AWS-Event-sources-over-time",
		"_source": {
			"title": "Wazuh App Overview AWS Event sources over time",
			"visState": "{\"title\":\"Wazuh App Overview AWS Event sources over time\",\"type\":\"area\",\"params\":{\"type\":\"area\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"area\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"drawLinesBetweenPoints\":true,\"showCircles\":true,\"interpolate\":\"linear\",\"valueAxis\":\"ValueAxis-1\"}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"auto\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"data.aws.eventSource\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Event source\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: amazon\",\"language\":\"lucene\"}}"
			}
		},
		"_type": "visualization"
	},
	{
		"_id": "Wazuh-App-Overview-AWS-Alerts-summary",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Overview AWS Alerts summary",
		"visState": "{\"title\":\"Wazuh App Overview AWS Alerts summary\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":3,\"direction\":\"desc\"},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"4\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"manager.name\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Manager\"}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"GeoLocation.country_name\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Country\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"rule.description\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Description\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":3,\"direction\":\"desc\"}}},\"spy\":{\"mode\":{\"name\":null,\"fill\":false}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": 
					"{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: amazon\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-Virustotal-Last-Files-Pie",
		"_type": "visualization",
		"_source": {
		  "title": "Wazuh App Overview Virustotal Last Files Pie",
		  "visState": "{\"title\":\"Wazuh App Overview Virustotal Last Files Pie\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true,\"labels\":{\"show\":false,\"values\":true,\"last_level\":true,\"truncate\":100}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Files\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.virustotal.source.file\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
		  "uiStateJSON": "{\"vis\":{\"legendOpen\":true}}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
			"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
		  }
		}
	  },
	  {
		"_id": "Wazuh-App-Overview-Virustotal-Files-Table",
		"_type": "visualization",
		"_source": {
		  "title": "Wazuh App Overview Virustotal Files Table",
		  "visState": "{\"title\":\"Wazuh App Overview Virustotal Files Table\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Count\"}},{\"id\":\"4\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.virustotal.source.file\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"File\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.virustotal.permalink\",\"size\":1,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Link\"}}]}",
		  "uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
			"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"\",\"language\":\"lucene\"}}"
		  }
		}
	  },
	  {
		"_id": "Wazuh-App-Overview-Virustotal-Total-Malicious",
		"_type": "visualization",
		"_source": {
		  "title": "Wazuh App Overview Virustotal Total Malicious",
		  "visState": "{\"title\":\"Wazuh App Overview Virustotal Total Malicious\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"metric\",\"metric\":{\"percentageMode\":false,\"useRanges\":false,\"colorSchema\":\"Green to Red\",\"metricColorMode\":\"None\",\"colorsRange\":[{\"from\":0,\"to\":10000}],\"labels\":{\"show\":true},\"invertColors\":false,\"style\":{\"bgFill\":\"#000\",\"bgColor\":false,\"labelColor\":false,\"subText\":\"\",\"fontSize\":20}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Total malicious files\"}}]}",
		  "uiStateJSON": "{}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
			"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"data.virustotal.malicious: 1\",\"language\":\"lucene\"}}"
		  }
		}
	  },
	  {
		"_id": "Wazuh-App-Overview-Virustotal-Total-Positives",
		"_type": "visualization",
		"_source": {
		  "title": "Wazuh App Overview Virustotal Total Positives",
		  "visState": "{\"title\":\"Wazuh App Overview Virustotal Total Positives\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"metric\",\"metric\":{\"percentageMode\":false,\"useRanges\":false,\"colorSchema\":\"Green to Red\",\"metricColorMode\":\"None\",\"colorsRange\":[{\"from\":0,\"to\":10000}],\"labels\":{\"show\":true},\"invertColors\":false,\"style\":{\"bgFill\":\"#000\",\"bgColor\":false,\"labelColor\":false,\"subText\":\"\",\"fontSize\":20}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Total positive files\"}}]}",
		  "uiStateJSON": "{}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
			"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"_exists_:data.virustotal.positives AND NOT data.virustotal.positives: 0\",\"language\":\"lucene\"}}"
		  }
		}
	  },
	  {
		"_id": "Wazuh-App-Overview-Virustotal-Malicious-Evolution",
		"_type": "visualization",
		"_source": {
		  "title": "Wazuh App Overview Virustotal Malicious Evolution",
		  "visState": "{\"title\":\"Wazuh App Overview Virustotal Malicious Evolution\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Malicious\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"histogram\",\"mode\":\"stacked\",\"data\":{\"label\":\"Malicious\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":false,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Malicious\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"auto\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}}]}",
		  "uiStateJSON": "{}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
			"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"_exists_:data.virustotal.malicious AND NOT data.virustotal.malicious: 0\",\"language\":\"lucene\"}}"
		  }
		}
	  },
	  {
		"_id": "Wazuh-App-Overview-Virustotal-Total",
		"_type": "visualization",
		"_source": {
		  "title": "Wazuh App Overview Virustotal Total",
		  "visState": "{\"title\":\"Wazuh App Overview Virustotal Total\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"metric\",\"metric\":{\"percentageMode\":false,\"useRanges\":false,\"colorSchema\":\"Green to Red\",\"metricColorMode\":\"None\",\"colorsRange\":[{\"from\":0,\"to\":10000}],\"labels\":{\"show\":true},\"invertColors\":false,\"style\":{\"bgFill\":\"#000\",\"bgColor\":false,\"labelColor\":false,\"subText\":\"\",\"fontSize\":20}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Total scans\"}}]}",
		  "uiStateJSON": "{}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
			"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"_exists_:data.virustotal\",\"language\":\"lucene\"}}"
		  }
		}
	  },
	  {
		"_id": "Wazuh-App-Overview-Virustotal-Malicious-Per-Agent-Table",
		"_type": "visualization",
		"_source": {
		  "title": "Wazuh App Overview Virustotal Malicious Per Agent Table",
		  "visState": "{\"title\":\"Wazuh App Overview Virustotal Malicious Per Agent Table\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":null,\"direction\":null},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"cardinality\",\"schema\":\"metric\",\"params\":{\"field\":\"data.virustotal.source.md5\",\"customLabel\":\"Malicious detected files\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.virustotal.source.agent.name\",\"size\":16,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Agent\"}}]}",
		  "uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":null,\"direction\":null}}}}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
			"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"NOT data.virustotal.malicious: 0\",\"language\":\"lucene\"}}"
		  }
		}
	  },
	  {
		"_id": "Wazuh-App-Overview-Virustotal-Malicious-Per-Agent",
		"_type": "visualization",
		"_source": {
		  "title": "Wazuh App Overview Virustotal Malicious Per Agent",
		  "visState": "{\"title\":\"Wazuh App Overview Virustotal Malicious Per Agent\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true,\"labels\":{\"show\":false,\"values\":true,\"last_level\":true,\"truncate\":100}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"cardinality\",\"schema\":\"metric\",\"params\":{\"field\":\"data.virustotal.source.md5\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.virustotal.source.agent.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\"}}]}",
		  "uiStateJSON": "{}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
			"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"NOT data.virustotal.malicious: 0\",\"language\":\"lucene\"}}"
		  }
		}
	  },
	  {
		"_id": "Wazuh-App-Overview-Virustotal-Positives-Heatmap",
		"_type": "visualization",
		"_source": {
		  "title": "Wazuh App Overview Virustotal Positives Heatmap",
		  "visState": "{\"title\":\"Wazuh App Overview Virustotal Positives Heatmap\",\"type\":\"heatmap\",\"params\":{\"type\":\"heatmap\",\"addTooltip\":true,\"addLegend\":true,\"enableHover\":false,\"legendPosition\":\"right\",\"times\":[],\"colorsNumber\":7,\"colorSchema\":\"Blues\",\"setColorRange\":false,\"colorsRange\":[],\"invertColors\":false,\"percentageMode\":false,\"valueAxes\":[{\"show\":false,\"id\":\"ValueAxis-1\",\"type\":\"value\",\"scale\":{\"type\":\"linear\",\"defaultYExtents\":false},\"labels\":{\"show\":false,\"rotate\":0,\"color\":\"#555\"}}]},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Positives\"}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.virustotal.source.agent.name\",\"size\":10,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Agent\"}},{\"id\":\"4\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"group\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"auto\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{},\"customLabel\":\"Date\"}}]}",
		  "uiStateJSON": "{\"vis\":{\"defaultColors\":{\"0 - 7\":\"rgb(247,251,255)\",\"7 - 13\":\"rgb(219,233,246)\",\"13 - 20\":\"rgb(187,214,235)\",\"20 - 26\":\"rgb(137,190,220)\",\"26 - 33\":\"rgb(83,158,205)\",\"33 - 39\":\"rgb(42,123,186)\",\"39 - 45\":\"rgb(11,85,159)\"},\"legendOpen\":true}}",
		  "description": "",
		  "version": 1,
		  "kibanaSavedObjectMeta": {
			"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"_exists_:data.virustotal AND NOT data.virustotal.positives: 0\",\"language\":\"lucene\"}}"
		  }
		}
	},
	{
		"_id": "Wazuh-App-Overview-VULS-Alerts-severity-over-time",
		"_type": "visualization",
		"_source": {
			"title": "Wazuh App Overview VULS Alerts severity over time",
			"visState": "{\"title\":\"Wazuh App Overview VULS Alerts severity over time\",\"type\":\"area\",\"params\":{\"type\":\"area\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"area\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"drawLinesBetweenPoints\":true,\"showCircles\":true,\"interpolate\":\"linear\",\"valueAxis\":\"ValueAxis-1\"}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"date_histogram\",\"schema\":\"segment\",\"params\":{\"field\":\"@timestamp\",\"interval\":\"auto\",\"customInterval\":\"2h\",\"min_doc_count\":1,\"extended_bounds\":{}}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"data.vulnerability.severity\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Severity\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: vulnerability-detector\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-VULS-Alerts-summary",
		"_type": "visualization",
		"_source": {
		"title": "Wazuh App Overview VULS Alerts summary",
		"visState": "{\"title\":\"Wazuh App Overview VULS Alerts summary\",\"type\":\"table\",\"params\":{\"perPage\":10,\"showPartialRows\":false,\"showMeticsAtAllLevels\":false,\"sort\":{\"columnIndex\":5,\"direction\":\"desc\"},\"showTotal\":false,\"totalFunc\":\"sum\"},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"4\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.vulnerability.cve\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":50,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"CVE\"}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.vulnerability.severity\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Severity\"}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.vulnerability.title\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Title\"}},{\"id\":\"5\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.vulnerability.updated\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Updated\"}},{\"id\":\"6\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"bucket\",\"params\":{\"field\":\"data.vulnerability.reference\",\"otherBucket\":false,\"otherBucketLabel\":\"Other\",\"missingBucket\":false,\"missingBucketLabel\":\"Missing\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Reference\"}}]}",
		"uiStateJSON": "{\"vis\":{\"params\":{\"sort\":{\"columnIndex\":5,\"direction\":\"desc\"}}}}",
		"description": "",
		"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: vulnerability-detector\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-VULS-Top-5-affected-packages",
		"_type": "visualization",
		"_source": {
			"title": "Wazuh App Overview VULS Top 5 affected packages",
			"visState": "{\"title\":\"Wazuh App Overview VULS Top 5 affected packages\",\"type\":\"pie\",\"params\":{\"type\":\"pie\",\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"isDonut\":true,\"labels\":{\"show\":false,\"values\":true,\"last_level\":true,\"truncate\":100}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"data.vulnerability.package.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Affected package\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: vulnerability-detector\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-VULS-Metric-Critical-severity",
		"_type": "visualization",
		"_source": {
			"title": "Wazuh App Overview VULS Metric Critical severity",
			"visState": "{\"title\":\"Wazuh App Overview VULS Metric Critical severity\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"metric\",\"metric\":{\"percentageMode\":false,\"useRanges\":false,\"colorSchema\":\"Green to Red\",\"metricColorMode\":\"None\",\"colorsRange\":[{\"from\":0,\"to\":10000}],\"labels\":{\"show\":true},\"invertColors\":false,\"style\":{\"bgFill\":\"#000\",\"bgColor\":false,\"labelColor\":false,\"subText\":\"\",\"fontSize\":20}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Critical severity alerts\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: vulnerability-detector AND data.vulnerability.severity: Critical\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-VULS-Metric-High-severity",
		"_type": "visualization",
		"_source": {
			"title": "Wazuh App Overview VULS Metric High severity",
			"visState": "{\"title\":\"Wazuh App Overview VULS Metric High severity\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"metric\",\"metric\":{\"percentageMode\":false,\"useRanges\":false,\"colorSchema\":\"Green to Red\",\"metricColorMode\":\"None\",\"colorsRange\":[{\"from\":0,\"to\":10000}],\"labels\":{\"show\":true},\"invertColors\":false,\"style\":{\"bgFill\":\"#000\",\"bgColor\":false,\"labelColor\":false,\"subText\":\"\",\"fontSize\":20}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"High severity alerts\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: vulnerability-detector AND data.vulnerability.severity: High\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-VULS-Metric-Medium-severity",
		"_type": "visualization",
		"_source": {
			"title": "Wazuh App Overview VULS Metric Medium severity",
			"visState": "{\"title\":\"Wazuh App Overview VULS Metric Medium severity\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"metric\",\"metric\":{\"percentageMode\":false,\"useRanges\":false,\"colorSchema\":\"Green to Red\",\"metricColorMode\":\"None\",\"colorsRange\":[{\"from\":0,\"to\":10000}],\"labels\":{\"show\":true},\"invertColors\":false,\"style\":{\"bgFill\":\"#000\",\"bgColor\":false,\"labelColor\":false,\"subText\":\"\",\"fontSize\":20}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Medium severity alerts\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: vulnerability-detector AND data.vulnerability.severity: Medium\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-VULS-Metric-Low-severity",
		"_type": "visualization",
		"_source": {
			"title": "Wazuh App Overview VULS Metric Low severity",
			"visState": "{\"title\":\"Wazuh App Overview VULS Metric Low severity\",\"type\":\"metric\",\"params\":{\"addTooltip\":true,\"addLegend\":false,\"type\":\"metric\",\"metric\":{\"percentageMode\":false,\"useRanges\":false,\"colorSchema\":\"Green to Red\",\"metricColorMode\":\"None\",\"colorsRange\":[{\"from\":0,\"to\":10000}],\"labels\":{\"show\":true},\"invertColors\":false,\"style\":{\"bgFill\":\"#000\",\"bgColor\":false,\"labelColor\":false,\"subText\":\"\",\"fontSize\":20}}},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{\"customLabel\":\"Low severity alerts\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: vulnerability-detector AND data.vulnerability.severity: Low\",\"language\":\"lucene\"}}"
			}
		}
	},
	{
		"_id": "Wazuh-App-Overview-VULS-Top-Agents-severity",
		"_type": "visualization",
		"_source": {
			"title": "Wazuh App Overview VULS Top Agents severity",
			"visState": "{\"title\":\"Wazuh App Overview VULS Top Agents severity\",\"type\":\"histogram\",\"params\":{\"type\":\"histogram\",\"grid\":{\"categoryLines\":false,\"style\":{\"color\":\"#eee\"}},\"categoryAxes\":[{\"id\":\"CategoryAxis-1\",\"type\":\"category\",\"position\":\"bottom\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\"},\"labels\":{\"show\":true,\"truncate\":100},\"title\":{}}],\"valueAxes\":[{\"id\":\"ValueAxis-1\",\"name\":\"LeftAxis-1\",\"type\":\"value\",\"position\":\"left\",\"show\":true,\"style\":{},\"scale\":{\"type\":\"linear\",\"mode\":\"normal\"},\"labels\":{\"show\":true,\"rotate\":0,\"filter\":false,\"truncate\":100},\"title\":{\"text\":\"Count\"}}],\"seriesParams\":[{\"show\":\"true\",\"type\":\"histogram\",\"mode\":\"stacked\",\"data\":{\"label\":\"Count\",\"id\":\"1\"},\"valueAxis\":\"ValueAxis-1\",\"drawLinesBetweenPoints\":true,\"showCircles\":true}],\"addTooltip\":true,\"addLegend\":true,\"legendPosition\":\"right\",\"times\":[],\"addTimeMarker\":false},\"aggs\":[{\"id\":\"1\",\"enabled\":true,\"type\":\"count\",\"schema\":\"metric\",\"params\":{}},{\"id\":\"2\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"segment\",\"params\":{\"field\":\"agent.name\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Agent name\"}},{\"id\":\"3\",\"enabled\":true,\"type\":\"terms\",\"schema\":\"group\",\"params\":{\"field\":\"data.vulnerability.severity\",\"size\":5,\"order\":\"desc\",\"orderBy\":\"1\",\"customLabel\":\"Severity\"}}]}",
			"uiStateJSON": "{}",
			"description": "",
			"version": 1,
			"kibanaSavedObjectMeta": {
				"searchSourceJSON": "{\"index\":\"wazuh-alerts\",\"filter\":[],\"query\":{\"query\":\"rule.groups: vulnerability-detector\",\"language\":\"lucene\"}}"
			}
		}
	}
]