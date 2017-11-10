var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'test',
    port: 3306
});
conn.connect();


exports.getUsers = function(req,res){
	var selectSQL = 'select * from user';
	conn.query(selectSQL,function(err2,rows){
		if (err2) console.log(err2);
		console.log(rows);
		res.send(rows);
	});

}