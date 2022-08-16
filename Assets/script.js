var ApiKey = "a3aeb8a2a5907118519350d12d7d03e9";
var searchBtn = document.querySelector("#search");


// //Use moment.js library to display current day & time.(24 hour format!)
// $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));



function fetchCity(city) {
    // fetch request gets a list of all the repos for the node.js organization
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`;

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
}

function handleUserInput(event) {
    event.preventDefault();
    var searchInput = document.querySelector(".search-bar");
    var cityName = searchInput.value;
    console.log(cityName);
    fetchCity(cityName);
}



// Use fetch function to get 5 days forecast to access latitude and longitude
function fetchCity(latitude, longitude) {
    // fetch request gets a list of all the repos for the node.js organization
    var forecastUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon=${city}&appid=${ApiKey}`;

    fetch(forecastUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

            var titleEl = document.createElement('h4');
            titleEl.classList.add('card');

            titleEl.textContent = `${data.name} (${new Date().toLocaleDateString()})`;
            var cardEl = document.createElement('div');
            cardEl.classList.add('card');

            var windEl = document.createElement('p');
            windEl.classList.add('card-text');


            var humidEl = document.createElement('p');
            humidEl.classList.add('card-text');

            var tempEl = document.createElement('p');
            tempEl.classList.add('card-text');
            


        });
}

searchBtn.addEventListener("click", handleUserInput);
