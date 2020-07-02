var myApp = angular.module('earthApp', []);

myApp.controller('earthController', function($scope, $http) {
    $scope.showGrid1 = false;
    $scope.showGrid2 = false;
    //  console.log("in");
    $scope.inputData = {};
    $scope.Submit = function() {
            $http({
                method: 'GET',
                url: '/quake/createTable',
                //params: { lat_first: $scope.input1,lat_second:  $scope.input2}

            }).then(function(response) {
                    $scope.timeTakenForTable = response.data.timeTaken;
                    $scope.showGrid1 = true;
                    //       console.log(response.data);
                },
                function(error) {
                    $scope.deleteData = {};
                    console.log('error:' + error);
                });

    };

    $scope.Submit1 = function() {
        $http({
            method: 'GET',
            url: '/quake/insertTable',
            //params: { lat_first: $scope.input1,lat_second:  $scope.input2}

        }).then(function(response) {
                $scope.timeTakenForInsert = response.data.timeTaken;
                $scope.showGrid1 = true;
                //       console.log(response.data);
            },
            function(error) {
                $scope.deleteData = {};
                console.log('error:' + error);
            });

};

$scope.Submit1 = function() {
    $http({
        method: 'GET',
        url: '/quake/insertTable',
        //params: { lat_first: $scope.input1,lat_second:  $scope.input2}

    }).then(function(response) {
            $scope.timeTakenForInsert = response.data.timeTaken;
            $scope.showGrid1 = true;
            //       console.log(response.data);
        },
        function(error) {
            $scope.deleteData = {};
            console.log('error:' + error);
        });

};

$scope.Submit1 = function() {
    $scope.showGrid1 = false;
    $scope.showGrid3 = false;
    $scope.showGrid2 = false;
    $scope.db =false;
    $http({
        method: 'GET',
        url: '/earth/getQuakesGivenRange',
        params: {lat_first: $scope.input1,lat_second:  $scope.input2,range: $scope.input3}

    }).then(function(response) {
           var opdata = [];
           $scope.outputData1 = response.data.dataRows;
           //$scope.totalTime = (response.data[response.data.length-1].totalTime)/1000;
           $scope.showGrid1 = true;
           var result =[];
                    var data = $scope.outputData1;
                    for(var i=0;i< data.length;i++)
                    {
                    var data_final ={};
                    data_final["x"] = data[i].random.value;
                    data_final["y"] =  data[i].count.value;
                    result.push(data_final);
                   
                    }
           $scope.displayChart(result,'pie')
        },
        function(error) {
            $scope.deleteData = {};
            console.log('error:' + error);
        });

};

$scope.displayChart = function(result,chartType){
    var pointDisplayFormat;
    var piePointFormat = '<b>{point.x}</b>: <b>{point.percentage:.1f}%</b>';
    var columnPointFormat = '<b>{point.x}</b>: <b>{point.y:.1f}</b>';
    if(chartType == 'pie')
    {
        pointDisplayFormat = piePointFormat;
    }
    else{
        pointDisplayFormat = columnPointFormat;
    }
  

        var chart = {
           plotBackgroundColor: null,
           plotBorderWidth: null,
           plotShadow: false,
        };
        var title = {
           text: 'Data in ' + chartType + ' chart'   
        };
        var tooltip = {
           pointFormat: pointDisplayFormat
        };
        var plotOptions = {
           pie: {
              allowPointSelect: true,
              cursor: 'pointer',

              dataLabels: {
                 enabled: true,
                 format: pointDisplayFormat,
                 align:'right',
                 style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor)||
                    'black'
                 }
              }
           },
           bar: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
               enabled: true,
               format: '<b>{point.y:.1f}</b>',
               inside: true,
               crop: false,
               overflow: 'none',
               align: 'left',
               style: {
                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor)||
                  'black'
               }
            }
         }
        }
        
        var series = [{
           color:'green',
           type: chartType,
           name: chartType + ' chart',
           data: result
           
        }];

        var json = {};   
        json.chart = chart; 
        json.title = title;     
        json.tooltip = tooltip;  
        json.series = series;
        json.plotOptions = plotOptions;
        $('#charts').highcharts(json);  
    
}

$scope.displayChart = function(result,chartType){
    var pointDisplayFormat;
    var piePointFormat = '<b>{point.x}</b>: <b>{point.percentage:.1f}%</b>';
    var columnPointFormat = '<b>{point.x}</b>: <b>{point.y:.1f}</b>';
    if(chartType == 'pie')
    {
        pointDisplayFormat = piePointFormat;
    }
    else{
        pointDisplayFormat = columnPointFormat;
    }
  

        var chart = {
           plotBackgroundColor: null,
           plotBorderWidth: null,
           plotShadow: false,
        };
        var title = {
           text: 'Data in ' + chartType + ' chart'   
        };
        var tooltip = {
           pointFormat: pointDisplayFormat
        };
        var plotOptions = {
           pie: {
              allowPointSelect: true,
              cursor: 'pointer',

              dataLabels: {
                 enabled: true,
                 format: pointDisplayFormat,
                 align:'right',
                 style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor)||
                    'black'
                 }
              }
           },
           bar: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
               enabled: true,
               format: '<b>{point.y:.1f}</b>',
               inside: true,
               crop: false,
               overflow: 'none',
               align: 'left',
               style: {
                  color: (Highcharts.theme && Highcharts.theme.contrastTextColor)||
                  'black'
               }
            }
         }
        }
        
        var series = [{
           color:'green',
           type: chartType,
           name: chartType + ' chart',
           data: result
           
        }];

        var json = {};   
        json.chart = chart; 
        json.title = title;     
        json.tooltip = tooltip;  
        json.series = series;
        json.plotOptions = plotOptions;
        $('#charts').highcharts(json);  
    
}


$scope.Submit2 = function() {
    $scope.showGrid1 = false;
    $scope.showGrid3 = false;
    $scope.showGrid2 = false;
    $scope.db =false;
    $http({
        method: 'GET',
        url: '/earth/getFromRedis',
        params: {lat_first: $scope.input1,lat_second:  $scope.input2,range: $scope.input3}

    }).then(function(response) {
           var opdata = [];
           $scope.outputData1 = response.data;
           $scope.totalTime = (response.data[response.data.length-1].totalTime)/1000;
           $scope.showGrid1 = true;
        },
        function(error) {
            $scope.deleteData = {};
            console.log('error:' + error);
        });

};

});