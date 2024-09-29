const apiKey = "3ba34ea86b374915e4b9c2fac4ab59ad"
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

        const searchBox = document.querySelector(".search-box input")
        const searchBtn = document.querySelector(".btn")
        const weatherIcon = document.querySelector(".weather-icon") 

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
            let data = await response.json()

            console.log(data)

            document.querySelector(".city-name").innerHTML = data.name
            document.querySelector(".celsius").innerHTML = Math.round(data.main.temp) + `°c`
            document.querySelector("#humidity").innerHTML = data.main.humidity + `%`
            document.querySelector("#windSpeed").innerHTML = Math.round(data.wind.speed) + ` Km/h`

            if (data.weather[0].main == "Clear") {
                weatherIcon.src = "images/clear.png"
            }
            else if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "images/clouds.png"
            }
            else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "images/drizzle.png"
            }
            else if (data.weather[0].main == "Humidity") {
                weatherIcon.src = "images/humidity.png"
            }
            else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "images/mist.png"
            }
            else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "images/rain.png"
            }
            else if (data.weather[0].main == "Snow") {
                weatherIcon.src = "images/snow.png"
            }
            else if (data.weather[0].main == "Wind") {
                weatherIcon.src = "images/wind.png"
            }


        }

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value)
        })