const express = require('express');
const {Router, Request, Response} = require('express');
const app = express();

app.use(express.json())
const router = Router();  // <--- Router

app.get('/', (req, res) => {
	res.send('Hello World!');
});


app.use('/api', router);  // <--- Router

app.listen(3000, () => console.log('Server running on port 3000!'));
