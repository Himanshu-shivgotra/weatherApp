// 03a1936e345c4e89a8993930222306

// http://api.weatherapi.com/v1/current.json?key=<key value>&q=



const weatherApi = {
    key: "03a1936e345c4e89a8993930222306",
    baseUrl: "http://api.weatherapi.com/v1/current.json"
}


const searchInputBox = document.getElementById("input-box");


// Event listener function on keypress

searchInputBox.addEventListener("keypress", (event) => {
    if (event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
});


//Get weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?key=${weatherApi.key}&q=${searchInputBox.value}`)  //unit-metric to change into degree

        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
}


// Show Weather Report
function showWeatherReport(weather) {
    console.log(weather)

    let city = document.getElementById('city');
    city.innerText = `${weather.location.name},${weather.location.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${weather.current.temp_c}&deg;C`;

    let humidityLevel = document.getElementById('humidity');
    humidityLevel.innerHTML = `Humidity: ${weather.current.humidity}%`;

    let windSpeed = document.getElementById('wind');
    windSpeed.innerHTML = `Wind: ${weather.current.wind_kph}k/h`

    let weatherCondition = document.getElementById('weather');
    weatherCondition.innerHTML = `${weather.current.condition.text}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerHTML = dateManage(todayDate);

    let icon = document.querySelector('.icons');
    icon.src = `${weather.current.condition.icon}`
    // icon.innerHTML = `${weather.current.condition.icon}`

    //CHANGE IMG ACC. TO WEATHER CONDITION

    if (weatherCondition.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('./img/clear.jpg')"
    }
    else if (weatherCondition.textContent == 'Cloudy') {
        document.body.style.backgroundImage = "url('./img/cloudy.jpg')"
    }
    else if (weatherCondition.textContent == 'Partly cloudy') {
        document.body.style.backgroundImage = "url('./img/cloudy.jpg')"
    }
    else if (weatherCondition.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('./img/rainy.jpg')"
    }
    else if (weatherCondition.textContent == 'Light rain shower') {
        document.body.style.backgroundImage = "url('./img/heavy rain.jpg')"
    }
    else if (weatherCondition.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('./img/snow.jpg')"
    }
    else if (weatherCondition.textContent == 'Moderate or heavy rain shower') {
        document.body.style.backgroundImage = "url('./img/heavy rain.jpg')"
    }
    else if (weatherCondition.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('./img/haze.jpg')"
    }
    else if (weatherCondition.textContent == 'Fog') {
        document.body.style.backgroundImage = "url('./img/fog.jpg')"
    }
    else if (weatherCondition.textContent == 'Mist') {
        document.body.style.backgroundImage = "url('./img/mist.jpg')"
    }
    else if (weatherCondition.textContent == 'Light rain') {
        document.body.style.backgroundImage = "url('./img/mist.jpg')"
    }
    else if (weatherCondition.textContent == 'Patchy rain possible') {
        document.body.style.backgroundImage = "url('./img/dark cloud.jpg')"
    }
    else if (weatherCondition.textContent == 'Sunny') {
        document.body.style.backgroundImage = "url('./img/sunny.jpg')"
    }
    else if (weatherCondition.textContent == 'ThunderStorm') {
        document.body.style.backgroundImage = "url('./img/thunderstorm.jpg')"
    }
    else if (weatherCondition.textContent == 'Moderate or heavy rain with thunder') {
        document.body.style.backgroundImage = "url('./img/thunderstorm.jpg')"
    }

}


//Date Manage


function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}




