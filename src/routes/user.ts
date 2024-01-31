const express = require('express');
const fetch = require('fetch')
const db = require('../../db/server.ts');

const userRouter = express.Router();
const userController = require('../controllers/user.ts');

const controller = new userController();
##aq vai ter q usaqr a api para buscar os dados
userRouter.get('/listar', async (req, res) => {
	controller.listar(req, res).then((data) => {
		const data = await  fetch.get('link da api', () => {
			method: 'POST',
			//Aq ver oq vai precisar
		}).then((res) => res.json());

		
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
