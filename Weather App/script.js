const apiKey = "caa35d690256898331c06ec68e529cb1";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search imput");
const searchBtn = document.querySelector(".search button");
const weatherIcon=document.querySelector(".Weather-icon")
async function checkWeather() {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src= "images/Clouds.png"
    }
    else if
        
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
checkWeather();
