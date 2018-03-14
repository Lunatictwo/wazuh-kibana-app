const app = require('ui/modules').get('app/wazuh', []);

// Logs controller
app.controller('clusterController', function ($scope, $rootScope, errorHandler,apiReq) {
    $scope.showConfig = false;
    $scope.showNodes  = false;
    $scope.nodes = {items:[{
        "node": "grulla_node",
        "status": "connected",
        "url": "192.168.0.134",
        "cluster": "cluster01",
        "type": "master",
        "localhost": true
        }]}
    $scope.goAgents = () => {
        console.log('Go agents!');
    }

    $scope.goConfiguration = () => {
        $scope.showConfig = true;
    }

    $scope.goNodes = () => {
        $scope.showNodes = true;
    }

    $scope.goBack = () => {
        $scope.showConfig = false;
        $scope.showNodes  = false;
    }
});