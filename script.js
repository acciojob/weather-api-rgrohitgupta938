const apiKey = "27cda249c0c147f31b3e9481324c2323";
const weatherDataDiv = document.getElementById("weatherData");
const getWeatherBtn = document.getElementById("getWeatherBtn");

getWeatherBtn.addEventListener("click", () => {
  const city = "London";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      const weatherDescription = data.weather[0].main;
      weatherDataDiv.innerHTML = `Current weather in London: ${weatherDescription}`;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
      weatherDataDiv.innerHTML = "Failed to load weather data.";
    });
});
