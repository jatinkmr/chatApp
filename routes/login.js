const express = require('express');
const router = express.Router();

// Bring in User Model
const User = require('../Models/Users');

// Register Form
router.get('/login', (req, res) => {
	return res.sendFile(path.join(__dirname + '/views/login'));
});

// Login Process
router.post('/login', (req, res) => { 
	if (req.body.email && req.body.pwd) {
		User.authenticate(req.body.email, req.body.pwd, (err, user) => {
			if (err || !user) {
				const err = new Error('Wrong Email or Password !');
				err.status = 401;
				return next(err);
			} else {
				return res.redirect('../views/chat');
			}
		});
	
	} else { 
		const err = new Error('All Fields are Required !');
		err.status = 400;
		return next(err);
	}
});