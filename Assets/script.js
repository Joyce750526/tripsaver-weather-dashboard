// Acceptance Criteria

// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

var ApiKey = "a3aeb8a2a5907118519350d12d7d03e9";
var todayEl = document.querySelector(".row-today-weather");
var forecastContainer = document.querySelector(".forecast-container")
var searchBtn = document.querySelector("#search");


// //Use moment.js library to display current day & time.(24 hour format!)
// $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


// Create function for user to search city
function handleUserInput(event) {
    event.preventDefault();
    var searchInput = document.querySelector(".search-bar");
    var cityName = searchInput.value;
    console.log(cityName);
    fetchCity(cityName);
}

// Create function to search specific city data from the API that the user has requested
function fetchCity(city) {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var latitude = data.coord.lat;
            var longitude = data.coord.lon;
            fetchByLatLon(latitude, longitude)
        });
}


// Use fetch function to get today forecast to access latitude and longitude
function fetchByLatLon(latitude, longitude) {
    // fetch request gets a list of all the repos for the node.js organization
    var LatLonUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`;

    fetch(LatLonUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            // Today Temp
            var todayTemp = data.current.temp;
            console.log(todayTemp);

            // Today Wind Speed
            var todayWindspeed = data.current.wind_speed;
            console.log(todayWindspeed);

            // Today Humidity
            var todayHumidity = data.current.humidity;
            console.log(todayHumidity);

            // Today UVI
            var todayUVI = data.current.uvi;
            console.log(todayUVI);

            // Create variables for each weather elements
            var tempEl = document.createElement('p');
            tempEl.classList.add('card-text');
            tempEl.textContent = `Temp: ${todayTemp}`;
            todayEl.appendChild(tempEl);

            var windEl = document.createElement('p');
            windEl.classList.add('card-text');
            windEl.textContent = `Wind Speed: ${todayWindspeed}`;
            todayEl.appendChild(windEl);

            var humidEl = document.createElement('p');
            humidEl.classList.add('card-text');
            humidEl.textContent = `Humidity: ${todayHumidity}`;
            todayEl.appendChild(humidEl);

            var uviEl = document.createElement('p');
            uviEl.classList.add('card-text');
            uviEl.textContent = `Wind Speed: ${todayUVI}`;
            todayEl.appendChild(uviEl);

            //Use forloop to get 5 days weather forecast
            for (let index = 0; index < 5; index++) {
                console.log(data.daily[index].humidity);
              
                
                // 5 days Temperture forecast
                var dailyTemp = data.daily[index].temp.day;
                console.log(dailyTemp);
                var dailyTempEl = document.createElement("p");
                dailyTempEl.classList.add("card-text");
                dailyTempEl.textContent = `Temp: ${dailyTemp}`;
                forecastContainer.append(dailyTempEl);

                // 5 days WindSpeed forecast
                var dailyWindSpeed = data.daily[index].wind_speed;
                var dailyWindSpeedEl = document.createElement("p");
                dailyWindSpeedEl.classList.add("card-text");
                dailyWindSpeedEl.textContent = `WindSpeed: ${dailyWindSpeed}`;
                forecastContainer.append(dailyWindSpeedEl);

                // 5 days Humidity forecast
                var dailyHumidity = data.daily[index].humidity;
                var dailyHumidityEl = document.createElement("p");
                dailyHumidityEl.classList.add("card-text");
                dailyHumidityEl.textContent = `Humdidity: ${dailyHumidity}`;
                forecastContainer.append(dailyHumidityEl);
            }
        });
}


// var titleEl = document.createElement('h4');
// titleEl.classList.add('card');

// titleEl.textContent = `${data.name} (${new Date().toLocaleDateString()})`;
// var cardEl = document.createElement('div');
// cardEl.classList.add('card');

// clear all the local storage after a page refresh
$('#clear').click( function() {
    window.localStorage.clear();
    location.reload();
    return false;
    });

searchBtn.addEventListener("click", handleUserInput);
