// API Keys
var weatherKey = "e9a538c7344f69d6d95b37754ca578fd";
var travelKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYTBkNzFkYjEzMWQ4MGM2YmM1NzEzZmFkMjQwZTdjZjZiOWQyOGUxYzY4ZTkwZDIwNmY2MzAxMzgyYzgxNDkxNmMwOTNlNzgwODFlOWQ4YjgiLCJpYXQiOjE2NzUzNjU1MzAsIm5iZiI6MTY3NTM2NTUzMCwiZXhwIjoxNzA2OTAxNTMwLCJzdWIiOiIxOTkyOSIsInNjb3BlcyI6W119.XyEvZfR2Kv1ojv_vuzF2KLlTvI8QyKDsr6jJfocaEYbJwQARCisqFXkoS-6YqSNUt3j-RoNPe98LASCoC9FcYw";



// HTML SELECTING //

// Search button and flight input to find the flights
var searchBtn = document.querySelector("#search-btn");
var cityDepart = document.querySelector("#input1");;
var citydestination = document.querySelector("#input2");
var flyDays = document.querySelector("#dateInput");




var city = "Kingston";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + weatherKey;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});


var flydate = "2023-03-10";
var travelURL = "https://app.goflightlabs.com/advanced-future-flights?access_key=" + travelKey +  "&type=departure&iataCode=BER&date=" + flydate;


$(document).on("submit", function(){
  event.preventDefault();

  // Grab value entered into search bar 
  var cityTitle = cityDepart.val().trim();

  currentConditionsRequest(cityTitle)
  searchHistory(cityTitle);
  cityDepart.val(""); 
});

// Clicking the search button will trigger
// value added to search history
searchBtn.on("click", function(event){
  event.preventDefault();

  // Grab value entered into search bar 
  var cityTitle = cityTitleInput.val().trim();

  currentConditionsRequest(cityTitle)
  searchHistory(cityTitle);    
  cityTitleInput.val(""); 
});


$.ajax({
  url: travelURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
}).then(function(response){
  city-title.text(response.name);
  city-title.append("<class= city-title>");
})










