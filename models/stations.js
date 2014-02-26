var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Station = new keystone.List('Station', {
	autokey: { from: 'name', path: 'key' }
});

Station.add({
	name: { type: String },
	location: { type: Types.Location }
});

Station.register();
