// var movie = "Dune";
// var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   // Create a new table row element
//   var tRow = $("<tr>");



var city = "New York";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=london&appid=e9a538c7344f69d6d95b37754ca578fd";


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});


// var city = "New York";
// var queryURL = "test.api.amadeus.com/v1" + city + "&apikey=travelKey";


// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   console.log(response);
// });


// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km",
// 	"method": "GET",
// 	"headers": {
// 		"travelKey": "a9957cc904msh3e97ed6c5b376c5p197c53jsn7bbe42089fde",
// 		"X-RapidAPI-Host": "travel-advisor.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
