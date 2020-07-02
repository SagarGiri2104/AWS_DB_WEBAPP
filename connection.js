//configuration for MySql DB
const mysql = require("mysql");
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "example_crud_sam",
    multipleStatements: true,
    port: 3306
});
//const mysql = require('mysql');

// var config = {
//     host: 'earthquakes01.database.windows.net',
//     user: 'sagar6582',
//     password: 'Ocean@2012',
//     database: 'Assignment2',
//     port: 3306,
//     ssl: true
// };

//const mysqlConnection = new mysql.createConnection(config);

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("connected");
    } else {
        console.log("Connection Failed", err);
    }
})

module.exports = mysqlConnection;