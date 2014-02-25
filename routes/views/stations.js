var keystone = require('keystone');

var Station = keystone.list('Station');

exports = module.exports = function(req, res) {
	
	var locals = res.locals,
		view = new keystone.View(req, res);
	
	// Set locals
	locals.section = 'stations';
	
	if (req.query.geo) {
		// Load the stations near the place
		locals.near = req.query.near;
		var geo = req.query.geo.split(',');
		geo = [geo[1], geo[0]];
		view.query('stations', Station.model.find()
			.where('location.geo')
			.near({ center: { type: 'Point', coordinates: geo }, maxDistance: 10000 })
		);
	} else {
		// Load the complete list of stations
		view.query('stations', Station.model.find().sort('name'));
	}
	
	// Render the view
	view.render('stations');
	
}
