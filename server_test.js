const mysql = require("mysql");
var fs = require("fs");
var path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const handleBars = require("express-handlebars");
const mysqlConnection = require("./connection");

var peopleRoutes = require("./routes/people");
var index1 = require("./routes/index");

//create express app
var app = express();
var options = {
    index: 'index.html'
};

app.use(bodyParser.json());
app.use("/", index1);
app.use("/people", peopleRoutes);
app.use("/project", index1);

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

//configures the nodejs app
//const port = process.env.PORT || 1337;
app.listen(8080);

//console.log("Server running at http://localhost:%d", port);
