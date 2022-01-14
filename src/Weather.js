import React, { useState } from "react";
import axios from "axios";
//import Loader from "react-loader-spinner";

export default function Weather() {
  const [city, setCity] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    //have access to the city
    //alert(city);
    //make an api call
    let apiKey = "a0321581dcecd509e313e60aef62d42d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(apiUrl);
    axios.get(apiUrl).then(showTemperature);
    //update the weather UI by creating function showTemperature above
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  const form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a City.."
        onChange={updateCity}
      ></input>
      <input type="submit" value="Search"></input>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}mph</li>
          <li>Description: {weather.description}</li>
          <li>
            <img src={weather.icon} alt="Weather Icon"></img>
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
