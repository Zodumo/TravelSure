// go flightlabs APIKey
var flightKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZWI4NjNiMzUxZWVkMGE2YzQ4NzE0YjE2YTI2NTllNDVlMzg3Y2U0NjEwMWQ4MTA3OGRhNjhlNmNmYTk0MDFlMWQzNGEwNjEwNzNkM2IzOGEiLCJpYXQiOjE2NzYwNDg5OTYsIm5iZiI6MTY3NjA0ODk5NiwiZXhwIjoxNzA3NTg0OTk2LCJzdWIiOiIyMDAzMSIsInNjb3BlcyI6W119.lynQIlkGhwrILDRjyWzoU6AnE81UwOFnGWBwPqqO0XZDxuidiRhVlkysp7EC58-mrqZSvBCNgVaj2bEWLvJusg";

var originCity = document.querySelector("#departure-city")
var destinationCity = document.querySelector("#arrival-city")
var searchFlightBtn = document.querySelector("#search-flight-button")


// var datePicker = document.querySelector("#dateInput")

// var arrival = $("<p class='card-text mb-0'>");
// var departure = $("<p class='card-text mb-0'>");


function flightSearch() {
    console.log("hello")
    var url = "https://app.goflightlabs.com/search-all-flights?access_key=" + flightKey + "&adults=1&origin=" + originCity.value + "&destination=" + destinationCity.value + "&departureDate=2023-02-11"

    console.log(url);


    $.ajax({
        url: url,
        type: "GET",
    }).then(function (response) {
        console.log(response.data.results[0].legs[0].destination.name);
        // originCity.dataset.departure = response.data.results[0].legs[0].destination.name;
        // console.log( originCity.dataset.departure);

        // currentCity.text(response.data.results[0].legs[0].destination.name); 

        currentCity.append("<small class='text-muted' id='current-date'>");
        $("#current-date").text("(" + currentDate + ")");
        currentCity.append("<img src='https://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='" + response.weather[0].main + "' />")
        currentTemp.text(response.main.temp);
        currentTemp.append("&deg;C");
        currentHumidity.text(response.main.humidity + "%");
        currentWindSpeed.text(response.wind.speed + " m/sec");

        /////////////////

        // forecastCardBody.append(arrival);
        // forecastCardBody.append(departure);

        // arrival.text(response.results[0].destination.name);

        // console.log(response.data.results.legs[0].destination.name);
        // return (response);
        
        var AirportData = $("<h6 class='card-subtitle mb-2 text-muted'>");
        // var forecastHumidity = $("<p class='card-text mb-0'>");

        AirportData.text(response.data.results[0].legs[0].destination.name);
        //---was "Wind"
        AirportData.prepend("Departure: ");
        //-----was "m/sec"
        AirportData.append(" ");
        // forecastHumidity.text(response.list[i].main.humidity);
        //------was "Humidity" 
        // forecastHumidity.prepend("Arrival: ");
        // //--------"%"
        // forecastHumidity.append("");

    })
}

searchFlightBtn.addEventListener("click", () => flightSearch())

