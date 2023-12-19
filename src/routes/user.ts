const express = require('express');

const db = require('../../db/server.ts');

const userRouter = express.Router();
const userController = require('../controllers/user.ts');

const controller = new userController();

userRouter.get('/listar', (req, res) => {
	controller.listar(req, res).then((data) => {
		res.json({ data, status: 'success'});
	}).catch((err) => {
		res.json({ err, status: 'error' });
	});
});

userRouter.post('/add', (req, res) => {
	const data = req.body;
	
	const newUser = {
	data.name,
		data.email,
		data.password,
		data.avatar,
		data.whatsapp,
		data.bio
	};
	controller.add(req,res, newUser).then((data) => {
		res.json({ data, status: 'success'});
	}).catch((err) => {
		res.json({ err, status: 'error' });
	});
});

userRouter.get('/listar/:id', (req, res) => {
	const { id } = req.params;
	controller.listarById(req, res, id).then((data) => {
		res.json({ data, status: 'success'});
	}).catch((err) => {
		res.json({ err, status: 'error' });
	});
});

userRouter.delete('/delete/:id', (req, res) => {
	const { id } = req.params;
	controller.delete(req, res, id).then((data) => {
		res.json({ data, status: 'success'});
	}).catch((err) => {
		res.json({ err, status: 'error' });
	});
});

module.exports = userRouter;
