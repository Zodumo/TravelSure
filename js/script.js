// HTML SELECTING //

// Search button and flight input to find the flights
var searchBtn = document.querySelector("#search-btn");
var cityDepart = "London";
var citydestination = document.querySelector("#input2");
var flyDays = document.querySelector("#dateInput");

// document.querySelector("#input1");

function flight(){
  var cityDepart = "London";
}

console.log(flight);










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








