const express = require('express');
const router = express.Router();

// Bring in User Model
let User = require('../Models/Users');

// Register Form
router.get('/register', (req, res) => {
	res.render('register');
});

// Register Process
router.post('/register', (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const username = req.body.username;
	const password = req.body.password;
	const password2 = req.body.password2;

	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is require').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Password does not matched').equals(req.body.password);
});

module.exports = router;