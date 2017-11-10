var express = require('express');
var router = express.Router();

var user = require('../controller/user.js');


router.get('/userlist', user.getUsers);


module.exports = router;