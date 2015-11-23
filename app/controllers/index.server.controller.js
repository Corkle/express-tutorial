exports.render = function(req, res) {
	res.render('home', {
		title: 'MEAN MVC',
		user: JSON.stringify(req.user)
	});
};