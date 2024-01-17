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
		try {
		if(req.body.name == null || req.body.email == null || req.body.password == null) throw new Error('Nao veio todos os dados');
		const cpfValidator = require('cpf-cnpj-validator');
		const isValid = cpfValidator.cpf.isValid(req.body.cpf);
		if(!isValid) throw new Error('CPF invalido');

		db.query('INSERT INTO users SET ?', [req.body], (err, rows) => {
			if (!err) {
				res.json({data: rows, status: 'success'});
			} else {
				console.log(err);
			}
		});

		}catch (error) {
			console.log(error);
		}
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

