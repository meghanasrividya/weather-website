const API_KEY = "f23ee9deb4e1a7450f3157c44ed020e1";

// First, get the latitude and longitude for the city
// const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

// Call getWeather API when the button is clicked
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

document.getElementById("getWeather").addEventListener("click", fetchLatLon);

function fetchLatLon() {
    const city = document.getElementById("city").value;
  
    if (city) {
      // GitHub API endpoint for fetching user repositories
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
  
      // Make a GET request to the GitHub API
      fetch(geoUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("City not found");
          }
          return response.json();
        })
        .then((data) => {
            let latitude = data.lat;
            let longitude = data.lon;
            console.log(latitude,longitude);
            // fetchWeather(latitude,longitude);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    } else {
      console.log("Please enter a City.");
    }
  }
