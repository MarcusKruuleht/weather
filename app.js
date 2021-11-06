document.addEventListener('DOMContentLoaded', cityWeather)


function weatherDataFetch( city ) {
	var key = 'd00152fe962c8822c05ca141c0c4c22c';
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	.then( function(resp) {
	return resp.json()
	}) // Convert data to json
	.then( function(data) {
		console.log(data);
	})
	.catch( function() {
		// catch any errors
	});
}

function cityWeather(e) {
	weatherDataFetch( 'Tallinn' );
}
