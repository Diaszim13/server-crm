const express = require('express');

const db = require('../../db/server.ts');

const router = express.Router();
const userController = require('../../controllers/userController.ts');


router.post('/add', (req, res) => {
	const {name, email, password} = req.body;
	const newUser = {
		name,
		email,
		password
	};
	UserController.add(req,res, newUser).then((data) => {
		res.json({data: newUser, status: 'success'});
	}).catch((err) => {
		console.log(err);
	});
});

router.get('/listar/:id', (req, res) => {
	const { id } = req.params;
	db.query('SELECT * FROM user WHERE id = ?', [id], (err, rows) => {
		if (!err) {
	
			res.json({data: rows, status: 'success'});
		} else {
			console.log(err);
		}
	});
});

router.delete('/delete/:id', (req, res) => {
)};
	module.exports = router;
