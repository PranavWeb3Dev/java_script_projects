document.addEventListener('DOMContentLoaded', () => {
    let cityName = document.getElementById('city');
    let getWeather = document.getElementById('getWeather');
    let showCityName = document.getElementById("city-name");
    let cityTemp = document.getElementById('city-temp');
    let extraInfo = document.getElementById("extra-info");
    let dataInfo = document.getElementById("data-col");
    let error = document.getElementById("error-message");
    const API_KEY = "463125d4efac2e9b64437cd63fed479c";

    getWeather.addEventListener('click', async () => {
        let city = cityName.value.trim();
        if (!city) return;
       
        let data = await getWatherData(city);
        showWeatherData(data);

    })

   async function getWatherData(city) {
       try {
           
           const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

           let response = await fetch(url);
           if (!response.ok) {
               showError();
           }
           let data = await response.json();
           console.log(data);
           return data;
            
       } catch {
           
        }
    }

    function showWeatherData(data) {
        let { name, main, weather } = data;
        showCityName.textContent = name;
        cityTemp.textContent = main.temp;
        extraInfo.textContent = weather[0].description;

    }

    function showError(){
        dataInfo.classList.add("hidden");
        error.classList.remove("hidden");
    }


})