var express = require('express');
var http = require('http');
var mysql = require('mysql');
var appBack = express();
var routes = require('./routes/index.js');

appBack.use("/greenroom",routes);

// appBack.set('port', process.env.PORT || 3000)
// var server = http.createServer(appBack);
// server.listen(appBack.get('port'), function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log("Web server listening on port " + appBack.get('port'));
// });
