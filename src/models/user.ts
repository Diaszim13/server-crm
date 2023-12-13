const express = require('express');

const db = require('../db');

const router = express.Router();


router.get('/listar', (req, res) => {
	db.query('SELECT * FROM user', (err, rows) => {
		if (!err) {
			res.json(rows);
		} else {
			console.log(err);
		}
	});
});

router.post('/add', (req, res) => {
	db.query('INSERT INTO user SET ?', [req.body], (err, rows) => {
		if (!err) {
			res.json(rows);
		} else {
			console.log(err);
		}
	});
});

router.get('/listar/:id', (req, res) => {
	const { id } = req.params;
	db.query('SELECT * FROM user WHERE id = ?', [id], (err, rows) => {
		if (!err) {
			res.json(rows[0]);
		} else {
			console.log(err);
		}
	});
});

module.export = router;
