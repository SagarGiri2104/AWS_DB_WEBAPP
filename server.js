const mysql = require("mysql");
var fs = require("fs");
var path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const azureDbconnect = require("./azureDb");

//above are all import statements

///var quiz5Routes = require("./routes/aws_sql_query");

var route0 = require("./routes/eq");
var index = require("./routes/home");
var route1 = require("./routes/earth");
var route2 = require("./routes/quake");
var route3 = require("./routes/quiz3");
//create express app
var app = express();

//app.use('/', express.static('/home/site/wwwroot', options));
app.use(bodyParser.json());
app.use("/", index);
app.use("/eq", route0);
app.use("/earth", route1);
app.use("/quake", route2);
app.use("/quiz3", route3);


app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

//configures the nodejs app
//const port = process.env.PORT || 1337;
app.listen(8080);

//console.log("Server running at http://localhost:%d", port);
