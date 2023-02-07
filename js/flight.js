// go flightlabs APIKey
var flightKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYTBkNzFkYjEzMWQ4MGM2YmM1NzEzZmFkMjQwZTdjZjZiOWQyOGUxYzY4ZTkwZDIwNmY2MzAxMzgyYzgxNDkxNmMwOTNlNzgwODFlOWQ4YjgiLCJpYXQiOjE2NzUzNjU1MzAsIm5iZiI6MTY3NTM2NTUzMCwiZXhwIjoxNzA2OTAxNTMwLCJzdWIiOiIxOTkyOSIsInNjb3BlcyI6W119.XyEvZfR2Kv1ojv_vuzF2KLlTvI8QyKDsr6jJfocaEYbJwQARCisqFXkoS-6YqSNUt3j-RoNPe98LASCoC9FcYw";

var originCity = document.querySelector("#departure-city")
var destinationCity = document.querySelector("#arrival-city")
var searchFlightBtn = document.querySelector("#search-flight-button")
var datePicker = document.querySelector("#dateInput")


// var travelURL = "https://app.goflightlabs.com/search-all-flights?access_key=" + flightKey + "&adults=1&origin=MAD&destination=FCO&departureDate=2023-02-07";

function flightSearch(){
    console.log(datePicker.value)
$.ajax({
    url: "https://app.goflightlabs.com/search-all-flights?access_key=" + flightKey + "&adults=1&origin=" + originCity.value + "&destination=" + destinationCity.value + "&departureDate=" + datePicker.value,
    type: "GET",
}).then(function (response) {
    console.log(response);
    currentCity.text(response.name);
    currentCity.append("<small class='text-muted' id='current-date'>");
    $("#current-date").text("(" + currentDate + ")");
    currentCity.append("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='" + response.weather[0].main + "' />")
    currentTemp.text(response.main.temp);
    currentTemp.append("&deg;C");
    currentHumidity.text(response.main.humidity + "%");
    currentWindSpeed.text(response.wind.speed + " m/sec");



})
}

searchFlightBtn.addEventListener("click", flightSearch)