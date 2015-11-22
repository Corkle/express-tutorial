exports.render = function(req, res) {
	res.render('home', {
		title: 'MEAN MVC',
		user: req.user ? req.user.username : ''
	});
};