import { useEffect, useState } from 'react'
import './App.css'

const API_KEY = "cfb1817bc9b96d2cf259e5ae701eeb0a";

function App() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState()
  const [error, setError] = useState("")
  const [query, setQuery] = useState("")

  const handleChange = (event) => {
    setCity(event.target.value)
  }

  useEffect(() => {
    if (query === "") return;

    const fetchWeather = async () => {
     try {
      setError("")
      setWeather(null)

      const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`
      );

      if(!response.ok){
          throw new Error("City not found ❌");
      }

      const data = await response.json(); 
      setWeather(data);

     } catch (error) {
      setError("Error Occured Something went wrong :: Please try again")
     }
    }

    fetchWeather()
  },[query])

 return (
    <div className="app">
      <h1>🌦️ Simple Weather App</h1>

      {/* Input + Button */}
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={() => setQuery(city)}>Search</button>
      </div>

      {/* Result */}
      <div className="result">
        {error && <p className="error">{error}</p>}
        {weather && (
          <div className="weather-card">
            <h2>{weather.name}, {weather.sys.country}</h2>
            <p>🌡️ {weather.main.temp} °C</p>
            <p>☁️ {weather.weather[0].description}</p>
            <p>💨 Wind: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App
