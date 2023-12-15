const express = require('express');

const db = require('../../db/server.ts'); // importamos la conexion a la base de datos

class UserController {

	function listar(req, res) {
		db.query('SELECT * FROM user', (err, rows) => {
			if (!err) {
				res.json({data: rows, status: 'success'});
			} else {
				console.log(err);
			}
		});
	}

	function listarById(req, res) {
		const { id } = req.params;
		db.query('SELECT * FROM user WHERE id = ?', [id], (err, rows) => {
			if (!err) {
				res.json({data: rows, status: 'success'});
			} else {
				console.log(err);
			}
		});
	}

	function add(req, res) {
		db.query('INSERT INTO user SET ?', [req.body], (err, rows) => {
			if (!err) {
				res.json({data: rows, status: 'success'});
			} else {
				console.log(err);
			}
		});
	}

}

module.exports = UserController;

