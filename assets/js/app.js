$(document).ready(function () {

// google places API: AIzaSyDvoVUjY-466T_MG7ZUxYXxXzmF6MJusCY

var landmark = "harajuku"

var queryURLrest="https://maps.googleapis.com/maps/api/place/textsearch/xml?query=" + landmark + "&type=restaurant&key=AIzaSyDvoVUjY-466T_MG7ZUxYXxXzmF6MJusCY"

queryURLlodg="https://maps.googleapis.com/maps/api/place/textsearch/xml?query=" + landmark + "&type=lodging&key=AIzaSyDvoVUjY-466T_MG7ZUxYXxXzmF6MJusCY"


$.ajax({
	url: queryURLrest,
	method: "GET"
}).done(function(response) {
	console.log(response.PlaceSearchResponse[0].name);
});

$.ajax({
	url: queryURLlodg,
	method: "GET"
}).done(function(response) {
	console.log(response);
});


});