var express = require('express');
var swig = require('swig');
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();
	
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	
	app.use(bodyParser.json());
	
	app.engine('html', swig.renderFile);
	app.set('views', './app/views');
	app.set('view engine', 'html');
	
	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);
	
	app.use(express.static('./public'));
	
	return app;
}