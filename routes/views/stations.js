var keystone = require('keystone');

var Station = keystone.list('Station');

exports = module.exports = function(req, res) {
	
	var locals = res.locals,
		view = new keystone.View(req, res);
	
	// Set locals
	locals.section = 'stations';
	
	// Load the list of stations
	view.query('stations', Station.model.find().sort('name'));
	
	// Render the view
	view.render('stations');
	
}
