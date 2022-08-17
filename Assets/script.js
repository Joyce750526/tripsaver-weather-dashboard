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


var todayEl=document.querySelector(".row-today-weather");

var ApiKey = "a3aeb8a2a5907118519350d12d7d03e9";
var searchBtn = document.querySelector("#search");


// //Use moment.js library to display current day & time.(24 hour format!)
// $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

function handleUserInput(event) {
    event.preventDefault();
    var searchInput = document.querySelector(".search-bar");
    var cityName = searchInput.value;
    console.log(cityName);
    fetchCity(cityName);
}


function fetchCity(city) {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var latitude= data.coord.lat;
            var longitude=data.coord.lon;
            fetchByLatLon(latitude, longitude)
        });
}




// Use fetch function to get 5 days forecast to access latitude and longitude
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
var todayTemp=data.current.temp;
console.log(todayTemp);

// Today Wind Speed
var todayWindspeed=data.current.wind_speed;
console.log(todayWindspeed);

// Today Humidity
var todayHumidity=data.current.humidity;
console.log(todayHumidity);

// Today UVI
var todayUVI=data.current.uvi;
console.log(todayUVI);


            // var titleEl = document.createElement('h4');
            // titleEl.classList.add('card');

            // titleEl.textContent = `${data.name} (${new Date().toLocaleDateString()})`;
            // var cardEl = document.createElement('div');
            // cardEl.classList.add('card');

            var windEl = document.createElement('p');
            windEl.classList.add('card-text');
            windEl.textContent=`Wind Speed: ${todayWindspeed}`;
            todayEl.appendChild(windEl);



            var humidEl = document.createElement('p');
            humidEl.classList.add('card-text');
            humidEl.textContent=todayHumidity
            todayEl.appendChild(humidEl)
            // var tempEl = document.createElement('p');
            // tempEl.classList.add('card-text');
            


        });
}

searchBtn.addEventListener("click", handleUserInput);
