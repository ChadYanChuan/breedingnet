var mysql = require('mysql');
var db = require('../common/mysql.js');

exports.getUsers = function(req,res){
	
	var selectSQL = 'select * from user';

	db.query(selectSQL,function(err,rows,fields){
		if (err) console.log(err);
		console.log(rows);
		res.send(rows);
	});
	
}