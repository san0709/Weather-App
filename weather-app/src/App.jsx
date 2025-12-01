import { useState } from "react";
import "./App.css";
import Card from "./Card.jsx";

// Icons
import Snow from "./assets/snow.png";
import Cloud from "./assets/cloudy.png";
import Rainy from "./assets/rainy.png";
import Sunny from "./assets/sunny.png";
import Windy from "./assets/windy.png";
import Search from "./assets/search.png";
import Humidity from "./assets/humidity.png";
import Temp from "./assets/temp.png";

// Weather icon map
const WeatherIcons = {
  Rain: Rainy,
  Snow: Snow,
  Clear: Sunny,
  Clouds: Cloud,
  Mist: Windy,
  Haze: Windy,
  Smoke: Windy,
  Fog: Windy,
};

function App() {
  const apiKey = `c29d93a310571008eb85a0e71a8a946a`;

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const getWeather = async () => {
    if (!city) return alert("Please enter a city!");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === "404") {
        setErrorMsg("City not found!");
        setWeatherData(null);
        return;
      }

      setErrorMsg("");
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setErrorMsg("Error fetching data. Try again.");
    }
  };

  // pick the icon based on weather condition
  const getWeatherIcon = () => {
    if (!weatherData) return null;
    const condition = weatherData.weather[0].main;
    return WeatherIcons[condition] || Sunny;
  };

  return (
    <div className="card-container">
      {/* Search Bar */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>
          <img src={Search} alt="search" />
        </button>
      </div>

      {/* Error Message */}
      {errorMsg && <div className="error">{errorMsg}</div>}

      {/* Weather Info */}
      {weatherData && (
        <div className="weather-top">
          <h2>{weatherData.name}</h2>

          {/* Weather Icon */}
          <img
            src={getWeatherIcon()}
            alt="weather icon"
            className="weather-icon"
          />

          <div className="weather-desc">
            {weatherData.weather[0].description}
          </div>
        </div>
      )}

      {/* Bottom Cards */}
      <div className="cards-wrapper">
        <Card image={Humidity} title="Humidity">
          {weatherData && <div>{weatherData.main.humidity}%</div>}
        </Card>

        <Card image={Temp} title="Temp">
          {weatherData && <div>{weatherData.main.temp}°C</div>}
        </Card>

        <Card image={Windy} title="Wind">
          {weatherData && <div>{weatherData.wind.speed} km/hr</div>}
        </Card>
      </div>
    </div>
  );
}

export default App;
