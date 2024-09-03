//your JS code here. If required.
const getBtn = document.getElementById("get-btn");

getBtn.addEventListener("click", () => {
  const apiKey = "27cda249c0c147f31b3e9481324c2323";
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${apiKey}`;

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.weather);
      const weatherDiv = document.getElementById("weatherData");
      weatherDiv.textContent = `Current weather in London:${data.weather[0].main}`;
    });
});
