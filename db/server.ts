const mysql = require('mysql');

const coon = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: ''
});

coon.connect();

module.exports = coon;
