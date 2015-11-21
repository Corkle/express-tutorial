var express = require('express'),
	swig = require('swig'),
	bodyParser = require('body-parser'),
	passport = require('passport');

module.exports = function() {
	var app = express();
	
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	
	app.use(bodyParser.json());
	
	app.engine('html', swig.renderFile);
	app.set('views', './app/views');
	app.set('view engine', 'html');
	
	app.use(passport.initialize());
	app.use(passport.session());
	
	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);
	
	app.use(express.static('./public'));
	
	return app;
}