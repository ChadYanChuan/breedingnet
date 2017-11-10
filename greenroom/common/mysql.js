var db = {};
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'test',
    port: 3306
});

db.query = function(sql,callback){
	if(!sql){
		callback&&callback();
		return;
	}

	conn.query(sql, function (err, rows ,fields){

	 	if (err) {
	 		console.log(err);
	 		callback(err,null);
	 	};
	    callback(null,rows,fields);
	 });

}
db.connect = function(){
	conn.connect();	
}
db.close = function(){
	conn.end();
}

conn.connect();

module.exports = db;
 