//configuration for MySql DB
// const mysql = require("mysql");
// var mysqlConnection = mysql.createConnection({
//     host: "dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net",
//     user: "pmz02895",
//     password: "6800d+k884x10mlk",
//     database: "ASSGN1",
//     multipleStatements: true,
//     port: 50000
// });
const mysql = require('mysql');

var config = {
    host: 'earthquakes01.database.windows.net',
    user: 'sagar6582',
    password: 'Ocean@2012',
    database: 'Assignment2',
    port: 3306,
    ssl: true
};

const mysqlConnection = new mysql.createConnection(config);

mysqlConnection.connect(
    function(err) {
        if (err) {
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        } else {
            console.log("Connection established.");

        }
    });

// const ibmdb = require("ibm_db");

// const connStr = "DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=pmz02895;PWD=6800d+k884x10mlk";

// const conn = ibmdb.openSync(connStr);

// conn.query("select * from equake", (err, res) => {
//     // here in res u get the data

// });


// mysqlConnection.connect((err) => {
//     if (!err) {
//         console.log("connected");
//     } else {
//         console.log("Connection Failed", err);
//     }
// })

module.exports = mysqlConnection;