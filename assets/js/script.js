const API_KEY = "f23ee9deb4e1a7450f3157c44ed020e1";

// First, get the latitude and longitude for the city
// const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

// Call getWeather API when the button is clicked
// const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

document.getElementById("getWeather").addEventListener("click", fetchLatLon);

function fetchLatLon() {
    const city = document.getElementById("city").value;
    console.log(city)
    
    if (city) {
      // GitHub API endpoint for fetching user repositories
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
  
      // Make a GET request to the GitHub API
      fetch(geoUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("City not found");
          }
          console.log(response)
          return response.json();
          
        })
        .then((data) => {
            
            let latitude = data[0].lat;
            let longitude = data[0].lon;
            console.log(latitude,longitude);
            fetchWeather(latitude,longitude);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    } else {
      console.log("Please enter a City.");
    }
  }

  function fetchWeather(lat,lon) {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const weatherListEl = document.getElementById("weatherResult");
    let html = "";

    fetch(weatherUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Data not found");
      }
      console.log(response)
      return response.json();
      
    })
    .then((data) => {
        let name = data.name
        let temp = data.main.temp;
        let weatherCondition = data.weather[0].description;
        console.log(temp,weatherCondition);
        html += `<p>City: ${name} <br> Temperature: ${temp} <br> Weather conditions: ${weatherCondition}</p>`;
        weatherListEl.innerHTML = html;
    })
    

  }
