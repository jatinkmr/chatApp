const express = require('express');
const users = require('./routes/users');
const path = require('path');
const exphbs = require('express-hbs');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.use('/users', require('./routes/users'));
app.use('/login', require('./routes/login'));
app.use('/chat', require('./routes/chat'));

app.set('port', (process.env.PORT || 9837));

app.listen(app.get('port'), () => { 
	console.log('Server Started at '+ app.get('port'));
});