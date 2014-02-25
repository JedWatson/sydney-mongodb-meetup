jQuery(function($) {
	
	var input = document.getElementById('place-autocomplete');
	var autocompleteOptions = {
		types: ['geocode'],
		componentRestrictions: { country: 'au' }
	};
	
	var autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions);
	
	google.maps.event.addListener(autocomplete, 'place_changed', function() {
		var place = autocomplete.getPlace();
		if (place && place.geometry.location) {
			top.location.href = '?near=' + place.name + '&geo=' + place.geometry.location.toUrlValue();
		}
	});
	
});
