import { useState, useEffect } from "react";
import "./App.css";
import LayoutMap from "./LayoutMap";
import locations from "./locations";
import ButtonsArray from "./Buttons";

function App() {

  // current selected location
  const [selected, setSelected] = useState({
    city: "Manchester",
    country: "UK",
    lat: "53.48",
    lon: "02.24",
  });

// use this url for deployment
  const url = `https://jrawnsley-weather.netlify.app/.netlify/functions/token-hider?lat=${selected.lat}&lon=${selected.lon}`

  // replace the url above with the url below for developing serverless functions in netlify dev mode:
  // const url = `http://localhost:8888/.netlify/functions/token-hider?lat=${selected.lat}&lon=${selected.lon}`


  const [weatherData, setWeatherData] = useState([]);

  // function to update "weatherData" variable by getting weather forecast data for the selected location from the weather server at OpenWeatherMap.org
  const getData = () => {

    setWeatherData([]) //clears data to enable loading message

    const fetchData = async () => {
      const response = await fetch(url);
      console.log(response);

      const json = await response.json();
      console.log(json);
      setWeatherData(json.list);
    };

    fetchData();
  };

  useEffect(getData, [selected]); // updates weather forecast data each time the selected location is changed

  console.log("weather data", weatherData);
  console.log("selected datapoint", selected);

  /* overall app layout */
  return (
    <div id="appContainer">
      <h1>How's The Weather?</h1>
      <p>View code at <a href="https://github.com/J-Rawnsley/weather-app">github.com/J-Rawnsley</a></p>
      <div id="buttons-container">
        <ButtonsArray data={locations} setFunction={setSelected} />
      </div>
      <h2>Weather forecast for {selected.city}</h2>
      <LayoutMap data={weatherData} /> 
    </div>
  );
}

export default App;
