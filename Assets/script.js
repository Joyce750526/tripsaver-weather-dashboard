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
            humidEl.textContent = `Humidity: ${data.main.humidity} %`;
            tempEl.textContent = `Temperature: ${data.main.temp} °F`;
            var cardBody = document.createElement('div');
            cardBody.classList.add('card-body');       
            cardBody.appendChild(titleEl);
            cardBody.appendChild(tempEl);
            cardBody.appendChild(humidEl);
            cardBody.appendChild(windEl);
            cardEl.appendChild(cardBody);
            todayEl.appendChild(cardEl);

            // todayEl = document.querySelector("#current-day");
            // todayEl.textContent = "";
            
            // var titleEl=document.createElement("h4");
            // titleEl.classList.add("card");
       

        });
}

//   function printResults(resultObj) {
//     console.log(resultObj);

//     // set up `<div>` to hold result content
//     var resultCard = document.createElement('div');
//     resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');

//     var resultBody = document.createElement('div');
//     resultBody.classList.add('card-body');
//     resultCard.append(resultBody);

//     var titleEl = document.createElement('h3');
//     titleEl.textContent = resultObj.title;

//     var bodyContentEl = document.createElement('p');
//     bodyContentEl.innerHTML =
//       '<strong>Date:</strong> ' + resultObj.date + '<br/>';

//     if (resultObj.subject) {
//       bodyContentEl.innerHTML +=
//         '<strong>Subjects:</strong> ' + resultObj.subject.join(', ') + '<br/>';
//     } else {
//       bodyContentEl.innerHTML +=
//         '<strong>Subjects:</strong> No subject for this entry.';
//     }

//     if (resultObj.description) {
//       bodyContentEl.innerHTML +=
//         '<strong>Description:</strong> ' + resultObj.description[0];
//     } else {
//       bodyContentEl.innerHTML +=
//         '<strong>Description:</strong>  No description for this entry.';
//     }

//     var linkButtonEl = document.createElement('a');
//     linkButtonEl.textContent = 'Read More';
//     linkButtonEl.setAttribute('href', resultObj.url);
//     linkButtonEl.classList.add('btn', 'btn-dark');

//     resultBody.append(titleEl, bodyContentEl, linkButtonEl);

//     resultContentEl.append(resultCard);
//   }



// function handleUserInput(event) {
//     event.preventDefault();
//     var searchInput = document.querySelector(".search-bar");
//     var cityName = searchInput.value;
//     console.log(cityName);
//     fetchCity(cityName);
//   }


searchBtn.addEventListener("click", handleUserInput);
