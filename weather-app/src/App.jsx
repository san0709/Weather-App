import { useState } from "react";
import "./App.css";
import Card from "./Card.jsx";
import Snow from "./assets/snow.png";
import Rainy from "./assets/rainy.png";
import Sunny from "./assets/sunny.png";
import Windy from "./assets/windy.png";
import Search from "./assets/search.png";
import Humidity from "./assets/humidity.png";

function App() {
  const apiKey = `c29d93a310571008eb85a0e71a8a946a`;

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    if (!city) return alert("Please enter a city!");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      console.log("Fetch attempt finished.");
    }
  };

  return (
    <div className="card-container">
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
      <div>
        {city},{weatherData && <div>{weatherData.sys.country}</div>}
      </div>
      <div>
        {weatherData && <div>{Math.floor(weatherData.main.temp)}°C</div>}
      </div>
      <div className="cards-wrapper">
        <Card image={Humidity}>
          {weatherData && <div>{weatherData.main.humidity}</div>}
        </Card>
        <Card image={Rainy} />
        <Card image={Windy}>
          {weatherData && <div>{weatherData.wind.speed} km/hr</div>}
        </Card>
      </div>
    </div>
  );
}

export default App;
