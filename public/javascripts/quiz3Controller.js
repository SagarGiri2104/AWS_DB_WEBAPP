var myApp = angular.module('quiz3App', []);

myApp.controller('quiz3Controller', function($scope, $http) {


    $scope.showGrid1 = false;
    $scope.showGrid3 = false;
    $scope.showGrid2 = false;
    //  console.log("in");

    $scope.Submit = function(input1) {
        $scope.showGrid1 = false;
        $scope.showGrid3 = false;
        $scope.showGrid2 = false;
        $scope.showChart = false;
            $http({
                method: 'GET',
                url: '/quiz3/getQuakes',
                params: { lat_first: input1}

            }).then(function(response) {
                    $scope.outputData1 = response.data.dataRows;
                    console.log($scope.outputData1 );
                    $scope.showGrid1 = false;
                    $scope.showChart = true;
                    $scope.timeTaken = response.data.timeTaken;
                    $scope.dbUsed = response.data.dbUsed;
                    var result =[];
                    var data = $scope.outputData1;
                    for(var i=0;i< data.length;i++)
                    {
                    var data_final ={};
                    data_final["x"] = data[i].year.value;
                    data_final["y"] =  data[i].NumberTerroristIncidents.value;
                    result.push(data_final);
                   
                    }
                   
                   $scope.displayChart(result,'column');
                   //histogram(data);
                   // lineChart($scope.outputData1);
                },
                function(error) {
                    $scope.deleteData = {};
                    console.log('error:' + error);
                });

    };

    $scope.Submit1 = function(input1,from) {
        
        $scope.showGrid1 = false;
        $scope.showGrid3 = false;
        $scope.showGrid2 = false;
        $scope.showChart = false;
        $scope.db =false;
        $scope.outputData1 = "";
        $http({
            method: 'GET',
            url: '/quiz3/getCount',
            params: {lat_first: input1,lat_second:  input2,country: input3}
    
        }).then(function(response) {
              // var opdata = [];
              $scope.showGrid1 = false;
              $scope.showGrid3 = false;
              $scope.showGrid2 = false;
              $scope.showChart = true;
              $scope.outputData1 = response.data.dataRows;
              $scope.outputData2 = "";
              $scope.showGrid1 = true;
              $scope.timeTaken = response.data.timeTaken;
              var result =[];
                    var data = $scope.outputData1;
                    for(var i=0;i< data.length;i++)
                    {
                    var data_final ={};
                    data_final["x"] = data[i].year.value;
                    data_final["y"] =  data[i].count.value;
                    result.push(data_final);
                   
                    }
                    var type;
                    if(from == 'pie'){
                       type = 'pie'
                    }
                    else if(from == 'scatter'){
                        type = 'scatter'
            
                    }
                    else if(type == 'bar'){
                        type = 'bar'
                    }
                    
                    if(type=='hist'){
                        histogram(result);
                    }
                   else {
                       $scope.displayChart(result,type);
                   }
            },
            function(error) {
                $scope.deleteData = {};
                console.log('error:' + error);
            });
    
    };

    $scope.Submit11 = function(input1,input2,input3) {
        $scope.showGrid1 = false;
        $scope.showGrid3 = false;
        $scope.showGrid2 = false;
        $scope.showChart = false;
        $scope.db =false;
        $scope.outputData1 = "";
        $http({
            method: 'GET',
            url: '/quiz3/getQuakes1',
            params: {lat_first: input1,lat_second:  input2,country: input3}
    
        }).then(function(response) {
              // var opdata = [];
              $scope.showGrid1 = false;
              $scope.showGrid3 = false;
              $scope.showGrid2 = false;
              $scope.showChart = true;
              $scope.outputData1 = response.data.dataRows;
              $scope.outputData2 = "";
              $scope.showGrid1 = true;
              $scope.timeTaken = response.data.timeTaken;
              var result =[];
                    var data = $scope.outputData1;
                    for(var i=0;i< data.length;i++)
                    {
                    var data_final ={};
                    data_final["x"] = data[i].year.value;
                    data_final["y"] =  data[i].Smokers.value;
                    result.push(data_final);
                   
                    }
                   
                   $scope.displayChart(result,'scatter');
            },
            function(error) {
                $scope.deleteData = {};
                console.log('error:' + error);
            });
    
    };
                  
    $scope.Submit12 = function(input1,input2,input3) {
        $scope.showGrid1 = false;
        $scope.showGrid3 = false;
        $scope.showGrid2 = false;
        $scope.showChart = false;
        $scope.db =false;
        $scope.outputData1 = "";
        $http({
            method: 'GET',
            url: '/quiz3/getQuakes1',
            params: {lat_first: input1,lat_second:  input2,country: input3}
    
        }).then(function(response) {
              // var opdata = [];
              $scope.showGrid1 = false;
              $scope.showGrid3 = false;
              $scope.showGrid2 = false;
              $scope.showChart = true;
              $scope.outputData1 = response.data.dataRows;
              $scope.outputData2 = "";
              $scope.showGrid1 = true;
              $scope.timeTaken = response.data.timeTaken;
              var result =[];
                    var data = $scope.outputData1;
                    for(var i=0;i< data.length;i++)
                    {
                    var data_final ={};
                    data_final["x"] = data[i].year.value;
                    data_final["y"] =  data[i].Smokers.value;
                    result.push(data_final);
                   
                    }
                   
                   $scope.displayChart(result,'bar');
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

function displayColumnChart(data1,fir,sec){
    document.getElementById("charts").innerHTML = "";
    //sec=parseInt(second);
    fir = Number(fir);
    sec = Number(sec);
    firstValue = fir;
    var cata =[];
 for(var i=0;i<=sec-fir;i++)
 {
    cata[i] = firstValue;
    firstValue++;
 }
 // console.log(cata);
 //for x axis values
 /////////////////////////y axis value
 var result =[];
 for(var i=0;i<data1.length;i=i+cata.length)
 {
    var data_final ={};
    var data_array = [];
    data_final["name"] = data1[i].Entity.value;
    
    for(var j=0;j<cata.length;j++)
    {
       data_array[j] = data1[j+i].Prevalence.value;
    }
    data_final["data"] = data_array;
    result.push(data_final);
    
 }
    var chart = {
        type: 'column'
     };
     var title = {
        text: 'Monthly Average Rainfall'   
     };
     var subtitle = {
        text: 'Source: WorldClimate.com'  
     };
     var xAxis = {
        categories: cata,
        crosshair: true
     };
     var yAxis = {
        min: 0,
        title: {
           text: 'Rainfall (mm)'         
        }      
     };
     var tooltip = {
        headerFormat: '<span style = "font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style = "color:{series.color};padding:0">{series.name}: </td>' +
           '<td style = "padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
     };
     var plotOptions = {
        column: {
           pointPadding: 0.2,
           borderWidth: 0
        }
     };  
     var credits = {
        enabled: false
     };
     var series= result
  
     var json = {};   
     json.chart = chart; 
     json.title = title;   
     json.subtitle = subtitle; 
     json.tooltip = tooltip;
     json.xAxis = xAxis;
     json.yAxis = yAxis;  
     json.series = series;
     json.plotOptions = plotOptions;  
     json.credits = credits;
     $('#charts').highcharts(json);

  //});
}

    $scope.SubmitRedis = function(input1,input2) {
        $scope.showGrid1 = false;
        $scope.showGrid3 = false;
        $scope.showGrid2 = false;
            $http({
                method: 'GET',
                url: '/quiz3/get1FromRedis',
                params: { lat_first: input1,lat_second:  input2}

            }).then(function(response) {
                    $scope.outputData1 = response.data.dataRows;
                    $scope.showGrid1 = true;
                    $scope.timeTaken = response.data.timeTaken;
                    $scope.dbUsed = response.data.dbUsed;
                    //       console.log(response.data);
                },
                function(error) {
                    $scope.deleteData = {};
                    console.log('error:' + error);
                });

    };


    function histogram(data1) {  
       
     document.getElementById("charts").innerHTML = "";
     
     var cata =[];
     var data_val =[];
     var data_obj ={};
     var sere =[];
     for(var i=0;i<data1.length;i++)
     {
        cata[i] = data1[i].year.value;
        data_val[i] = data1[i].NumberTerroristIncidents.value;
     }
     data_obj["name"]= 'Data';
     data_obj["data"]= data_val;
     sere.push(data_obj);
     console.log(sere);
     Highcharts.chart('charts', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Histogram using a column chart'
        },
        subtitle: {
          text: ''
        },
        xAxis: {
          categories: cata,
          crosshair: true
        },
        yAxis: {
          min: 0,
          title: {
            text: ''
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0,
            borderWidth: 0,
            groupPadding: 0,
            shadow: false
          }
        },
        series: sere
      });
      
       }

    $scope.Submit2 = function(input1,input2) {
        $scope.showGrid1 = false;
        $scope.showGrid3 = false;
        $scope.showGrid2 = false;
        $scope.outputData2 = "";
            $http({
                method: 'GET',
                url: '/quiz3/getonlyFromRedis',
                params: { lat_first: input1,lat_second:  input2}

            }).then(function(response) {
                $scope.showGrid1 = false;
                $scope.showGrid3 = false;
                $scope.showGrid2 = false;
                
                   
                    $scope.outputData1 = response.data.dataRows;
                    $scope.showGrid1 = true;
                    $scope.timeTaken = response.data.timeTaken;
                    $scope.dbUsed = response.data.dbUsed;
                    //       console.log(response.data);
                },
                function(error) {
                    $scope.deleteData = {};
                    console.log('error:' + error);
                });

    };

    

    $scope.Submit3 = function(input1,input2,input3) {
        $scope.showGrid1 = false;
        $scope.showGrid3 = false;
        $scope.showGrid2 = false;
        $scope.db =false;
        $scope.outputData1 = "";
        $http({
            method: 'GET',
            url: '/quiz3/getQuakes10a',
            params: {lat_first: input1,lat_second:  input2,range: input3}
    
        }).then(function(response) {
              // var opdata = [];
              $scope.showGrid1 = false;
              $scope.showGrid3 = false;
              $scope.showGrid2 = false;
              $scope.outputData1 = response.data[0].dataRows;
              console.log($scope.outputData1);
              $scope.outputData2 = "";
              $scope.showGrid1 = true;
              //$scope.timeTaken = response.data.timeTaken;
              $scope.timeTaken = (response.data[response.data.length-1].timeTaken);
              // console.log($scope.outputData2);
               console.log(response.data);
               var total=0;

             
              // $scope.db = true;
            //     angular.forEach(response.data, function (obj) {  
            //         console.log(obj);
            //         opdata.push(obj)
              
            // });
              // $scope.outputData3 = opdata;
                //console.log($scope.outputData);
               // $scope.showGrid3 = true;
                //       console.log(response.data);
            },
            function(error) {
                $scope.deleteData = {};
                console.log('error:' + error);
            });
    
    };

    $scope.Submit5 = function(input1,input2,input3) {
        $scope.showGrid1 = false;
        $scope.showGrid3 = false;
        $scope.showGrid2 = false;
        $scope.db =false;
        $scope.outputData1 = "";
        $http({
            method: 'GET',
            url: '/quiz3/getQuakes11a',
            params: {lat_first: input1,lat_second:  input2,range: input3}
    
        }).then(function(response) {
              // var opdata = [];
              $scope.showGrid1 = false;
              $scope.showGrid3 = false;
              $scope.showGrid2 = false;
              $scope.outputData1 = response.data[0].dataRows;
              console.log($scope.outputData1);
              $scope.outputData2 = "";
              $scope.showGrid1 = true;
              //$scope.timeTaken = response.data.timeTaken;
              $scope.timeTaken = (response.data[response.data.length-1].timeTaken);
              // console.log($scope.outputData2);
               console.log(response.data);
             
              // $scope.db = true;
            //     angular.forEach(response.data, function (obj) {  
            //         console.log(obj);
            //         opdata.push(obj)
              
            // });
              // $scope.outputData3 = opdata;
                //console.log($scope.outputData);
               // $scope.showGrid3 = true;
                //       console.log(response.data);
            },
            function(error) {
                $scope.deleteData = {};
                console.log('error:' + error);
            });
    
    };

    $scope.Submit4 = function(input1,input2,input3) {
        $scope.showGrid1 = false;
        $scope.showGrid3 = false;
        $scope.showGrid2 = false;
        $scope.db =false;
        $scope.outputData1 = "";
        $http({
            method: 'GET',
            url: '/quiz3/getQuakes10b',
            params: {lat_first: input1,lat_second:  input2,range: input3}
    
        }).then(function(response) {
              // var opdata = [];
              $scope.showGrid1 = false;
              $scope.showGrid3 = false;
              $scope.showGrid2 = false;
              $scope.outputData2 = response.data[0].dataRows;
              console.log($scope.outputData1);
              $scope.outputData1 = "";
              $scope.showGrid2 = true;
              //$scope.timeTaken = response.data.timeTaken;
              $scope.timeTaken = (response.data[response.data.length-1].timeTaken);
              // console.log($scope.outputData2);
               console.log(response.data);
             
              // $scope.db = true;
            //     angular.forEach(response.data, function (obj) {  
            //         console.log(obj);
            //         opdata.push(obj)
              
            // });
              // $scope.outputData3 = opdata;
                //console.log($scope.outputData);
               // $scope.showGrid3 = true;
                //       console.log(response.data);
            },
            function(error) {
                $scope.deleteData = {};
                console.log('error:' + error);
            });
    
    };

    $scope.Submit2 = function(input1,input2) {
        $scope.showGrid1 = false;
        $scope.showGrid3 = false;
        $scope.showGrid2 = false;
        $scope.db =false;
        $scope.outputData1 = "";
        $http({
            method: 'GET',
            url: '/quiz3/getQuakes2',
            params: {lat_first: input1,lat_second:  input2}
    
        }).then(function(response) {
              // var opdata = [];
              $scope.showGrid1 = false;
              $scope.showGrid3 = false;
              $scope.showGrid2 = false;
              $scope.outputData2 = response.data.dataRows;
              $scope.showGrid2 = true;
              $scope.outputData1 = "";
              $scope.timeTaken = response.data.timeTaken;
              // console.log($scope.outputData2);
               console.log(outputData2);
             
              // $scope.db = true;
            //     angular.forEach(response.data, function (obj) {  
            //         console.log(obj);
            //         opdata.push(obj)
              
            // });
              // $scope.outputData3 = opdata;
                //console.log($scope.outputData);
               // $scope.showGrid3 = true;
                //       console.log(response.data);
            },
            function(error) {
                $scope.deleteData = {};
                console.log('error:' + error);
            });
    
    };
    $scope.Submit1Redis = function(input1,input2,input3) {
        $scope.showGrid1 = false;
        $scope.showGrid3 = false;
        $scope.showGrid2 = false;
        $scope.db =false;
        $scope.outputData1 = "";
        $http({
            method: 'GET',
            url: '/quiz3/get2FromRedis',
            params: {lat_first: input1,lat_second:  input2,range:input3}
    
        }).then(function(response) {
              // var opdata = [];
              $scope.showGrid1 = false;
              $scope.showGrid3 = false;
              $scope.showGrid2 = false;
               $scope.outputData2 = response.data;
              // console.log($scope.outputData2);
               console.log(response.data);
               $scope.totalTime = (response.data[response.data.length-1].totalTime);
               $scope.showGrid2 = true;
              // $scope.db = true;
            //     angular.forEach(response.data, function (obj) {  
            //         console.log(obj);
            //         opdata.push(obj)
              
            // });
              // $scope.outputData3 = opdata;
                //console.log($scope.outputData);
               // $scope.showGrid3 = true;
                //       console.log(response.data);
            },
            function(error) {
                $scope.deleteData = {};
                console.log('error:' + error);
            });
    
    };
    
    $scope.getChart = function(input1){
        $scope.showGrid1 = false;
        $scope.showGrid3 = false;
        $scope.showGrid2 = false;
            $http({
                method: 'GET',
                url: '/quiz3/getQuakes',
                params: { lat_first: input1}

            }).then(function(response) {
                    $scope.outputData1 = response.data.dataRows;
                    $scope.showGrid1 = true;
                    $scope.timeTaken = response.data.timeTaken;
                    $scope.dbUsed = response.data.dbUsed;

                    //       console.log(response.data);
                },
                function(error) {
                    $scope.deleteData = {};
                    console.log('error:' + error);
                });
            }

});

