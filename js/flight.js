// go flightlabs APIKey
var flightKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYTAxMWNhYTg1OGQwM2MxMmVmNjU3ZmNhNDBjYTk1NjRkNjMzZDExMGNhZDcyNmJlMWViOTQyZWE4NTQ0OGIyZDY0MjlmZTU1ZTJkNjlhODQiLCJpYXQiOjE2NzU4ODU5OTgsIm5iZiI6MTY3NTg4NTk5OCwiZXhwIjoxNzA3NDIxOTk4LCJzdWIiOiIyMDAwMSIsInNjb3BlcyI6W119.DH0gHf7CqrjrooPq86Qa8xhGVQfp1zs32llcOpT8qMDdoE5ejybdeGb2fcJyt3vcKjmeJ5G2BGCnpIH_pO96Kg";

var originCity = document.querySelector("#departure-city")
var destinationCity = document.querySelector("#arrival-city")
var searchFlightBtn = document.querySelector("#search-flight-button")
// var datePicker = document.querySelector("#dateInput")

// var arrival = $("<p class='card-text mb-0'>");
// var departure = $("<p class='card-text mb-0'>");


function flightSearch(){
    console.log("hello")
    var url = "https://app.goflightlabs.com/search-all-flights?access_key=" + flightKey + "&adults=1&origin=" + originCity.value + "&destination=" + destinationCity.value + "&departureDate=2023-02-09"

    console.log(url);
    

$.ajax({
    url: url,
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

    // forecastCardBody.append(arrival);
    // forecastCardBody.append(departure);

    // arrival.text(response.results[0].destination.name);

    // console.log(response.data.results.legs[0].destination.name);

})
}

searchFlightBtn.addEventListener("click", () => flightSearch())