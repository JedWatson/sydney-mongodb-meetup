var keystone = require('keystone'),
	Types = keystone.Field.Types;

var Station = new keystone.List('Station', {
	autokey: { from: 'name', path: 'key' }
});

Station.add({
	name: { type: String, default: Date.now },
	location: { type: Types.Location }
});

Station.register();
