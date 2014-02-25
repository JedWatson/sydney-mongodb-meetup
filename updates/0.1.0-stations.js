var keystone = require('keystone'),
	csv = require('csv');

var Station = keystone.list('Station');

function addStation(data) {
	
	new Station.model({
		name: data[2],
		location: {
			suburb: data[2].replace(/\sStation.*/, ''),
			state: 'NSW',
			geo: [data[0], data[1]]
		}
	}).save();
	
}

exports = module.exports = function(done) {
	
	var stations = csv().from('./data/cityrail-stations.csv')
		.on('record', addStation)
		.on('end', function(count) {
			console.log('Added ' + count + ' stations.');
			done();
		});
};
