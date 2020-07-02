const express = require('express');
const router = express.Router();
const mysqlConnection = require("../connection");

router.post("/q1", (req, res) => {
    console.log('request received:', req.body);
    var ip1 = req.body.ip1;
    var ip2 = req.body.ip2;
    var ip3 = req.body.ip3;
    var sql = `SELECT * FROM quakes SET where mag = '${ip1}'  and locationSource = '${ip2}' and latitude >= '${ip3}';`
    mysqlConnection.query(sql, [ip1, ip2, ip3], function(err, result) {
        if (err) {
            console.error(err);
            return res.send("no results found!");
        } else {
            return res.send(result);
        }
    });
})

module.exports = router;