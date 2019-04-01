const express = require('express');
const users = require('./routes/users');
const app = express();

app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.use('/users', require('./routes/users'));
app.use('/login', require('./routes/login'));
app.use('/chat', require('./routes/chat'));

app.listen(9837, () => { 
	console.log('Server Started at https://localhost:9837/login');
});