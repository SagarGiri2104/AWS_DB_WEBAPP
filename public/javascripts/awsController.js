var myApp = angular.module('quiz5App', []);

myApp.controller('quiz5Controller', function($scope, $http) {
    console.log("in");
    $scope.getSoln1 = function() {
        $scope.dataRequest = {};
        $scope.dataRequest.input1 = $scope.input1;
        $scope.dataRequest.input2 = $scope.input2;
        $scope.dataRequest.input3 = $scope.input3;
        $http({
            method: 'POST',
            url: '/aws_sql_query/q1',
            data: $scope.dataRequest

        }).then(function(response) {

                $scope.displayData = response.data;
                $scope.showGrid = true;
                console.log(response.data);
            },
            function(error) {
                //$scope.deleteData = {};
                console.log('error:' + error);
            });

    };

})