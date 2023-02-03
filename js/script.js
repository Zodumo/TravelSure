
var city = "Kingston";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherKey;


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});


// var city = "Kingston";
var flydate = "2023-03-10";
var travelURL = "https://app.goflightlabs.com/advanced-future-flights?access_key=" + travelKey +  "&type=departure&iataCode=BER&date=" + flydate;

$.ajax({
  url: travelURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});






