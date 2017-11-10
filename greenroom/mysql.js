var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'test',
    port: 3306
});
conn.connect();
var insertSQL = 'INSERT INTO user VALUES ("1", "opopb", "5")';

//insert
 conn.query(insertSQL, function (err2, rows){

 	if (err2) console.log(err2);

    console.log("insert ==> ");
    console.log(rows);

 });