
const mysql = require('mysql');

const coon = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'test'
});

coon.connect();

module.exports = coon;
