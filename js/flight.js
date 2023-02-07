// go flightlabs APIKey
var flightKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiYTBkNzFkYjEzMWQ4MGM2YmM1NzEzZmFkMjQwZTdjZjZiOWQyOGUxYzY4ZTkwZDIwNmY2MzAxMzgyYzgxNDkxNmMwOTNlNzgwODFlOWQ4YjgiLCJpYXQiOjE2NzUzNjU1MzAsIm5iZiI6MTY3NTM2NTUzMCwiZXhwIjoxNzA2OTAxNTMwLCJzdWIiOiIxOTkyOSIsInNjb3BlcyI6W119.XyEvZfR2Kv1ojv_vuzF2KLlTvI8QyKDsr6jJfocaEYbJwQARCisqFXkoS-6YqSNUt3j-RoNPe98LASCoC9FcYw";

// var travelURL = "https://app.goflightlabs.com/advanced-future-flights?access_key=" + travelKey +  "&type=departure&iataCode=BER&date=" + flydate;

var travelURL = "https://app.goflightlabs.com/search-all-flights?access_key=" + flightKey + "&adults=1&origin=MAD&destination=FCO&departureDate=2023-02-07";
	

$.ajax({
	  url: travelURL,
	  method: "GET"
	}).then(function(response) {
	  console.log(response);
	});