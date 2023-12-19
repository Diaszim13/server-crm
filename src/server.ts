
const express = require('express');
const {Router, Request, Response} = require('express');
const bodyParser = require('body-parser');

const app = express();
const usersRoutes = require('./routes/user.ts');

app.use(express.json())
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
const router = express.Router();  // <--- Router

app.get('/', (req, res) => {
	res.send('Hello World!');
});


app.use('/api', router);  // <--- Router
app.use('/users', usersRoutes);  // <--- Router

app.listen(3000, () => console.log('Server running on port 3000!'));

