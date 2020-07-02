var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require("fs");

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.sendFile(path.join(__dirname + '/../public/html/main.html'));
// });

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.sendFile(path.join(__dirname + '/../public/index.html'));
// });


router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/../public/views/quiz5.html'));
});

// router.get('/', function(req, res, next) {
//     res.sendFile(path.join(__dirname + '/../public/quiz3.html'));
// });

router.get("/student", (req, res) => {
    let rawdata = fs.readFileSync(__dirname + '/student.json', 'utf8');
    let student = JSON.parse(rawdata);

    console.log(student);
    res.json(student);

})


module.exports = router;