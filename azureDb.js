const { Connection, Request } = require("tedious");


// Create connection to database
const config = {
    authentication: {
        options: {
            userName: "admin", // update me
            password: "qwertyjkl",
            port:"1433"
            // update me
        },
        type: "default"
    },
    server: "database-3.ccqmamrug85r.us-east-2.rds.amazonaws.com",
    pool: {
        idleTimeoutMillis: 32000
        //max: 100
    },
    stream: true,
    parseJSON: true, // update me
    options: {
        database: "awsdb", //update me
        encrypt: true,
        rowCollectionOnRequestCompletion: true,
        useColumnNames: true

    }
};

const connection = new Connection(config);
//config.options.rowCollectionOnRequestCompletion

// Attempt to connect and execute queries if connection goes through
connection.on("connect", err => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("connected");
        //queryDatabase();
    }
});

module.exports = connection;