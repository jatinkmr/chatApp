const express = require('express');
const router = express.Router();

// Bring in User Model
const User = require('../Models/Users');

// Register Form
router.get('/register', (req, res) => {
	return res.sendFile(
		path.join(__dirname + '/views/register')
	);
});

// Register Process
router.post('/register', (req, res) => {
	const userData = {
		name: req.body.name,
		email: req.body.email,
		username: req.body.username,
		password: req.body.password,
		password2: req.body.password2,
	};

	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Email is not valid').isEmail();
	req.checkBody('username', 'Username is require').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password2', 'Password does not matched').equals(req.body.password);

	User.create(userData, (err, user) => { 
		if (err) { 
			return next(err);
		} else {
			return res.redirect('../views/login.hbs');
		}
	});
});

module.exports = router;