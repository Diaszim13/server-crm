const express = require('express');

const db = require('../../db/server.ts'); // importamos la conexion a la base de datos

class UserController {

	listar(req, res) {
		db.query('SELECT * FROM users', (err, rows, fields) => {
			if (!err) {
				res.json({data: rows, status: 'success'});
			} else {
				console.log(err);
			}
		});
	}

	listarById(req, res) {
		const { id } = req.params;
		db.query('SELECT * FROM users WHERE id = ?', [id], (err, rows) => {
			if (!err) {
				res.json({data: rows, status: 'success'});
			} else {
				console.log(err);
			}
		});
	}

	add(req, res) {
		db.query('INSERT INTO users SET ?', [req.body], (err, rows) => {
			if (!err) {
				res.json({data: rows, status: 'success'});
			} else {
				console.log(err);
			}
		});
	}

	delete(req, res, id) {
		db.query('DELETE FROM users WHERE id = ?', [id], (err, rows) => {
			if (!err) {
				res.json({data: rows, status: 'success'});
			} else {
				console.log(err);
			}
		});
	}
}

module.exports = UserController;

