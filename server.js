const express = require('express');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(9837, () => { 
	console.log('Server Started at https://localhost:9837/');
});