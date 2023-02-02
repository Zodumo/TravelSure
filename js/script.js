
var city = "Kingston";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + weatherKey;


$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});




