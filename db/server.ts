
const mysql = require('mysql');

const coon = mysql.createConnection({
	host: 'localhost',
	user: 'matheus',
	password: '',
	database: 'server'
});

coon.connect();

module.exports = coon;
