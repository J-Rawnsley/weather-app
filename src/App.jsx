import { useState, useEffect } from "react";
import "./App.css";
import LayoutMap from "./LayoutMap";
import locations from "./locations";
import ButtonsArray from "./Buttons";

function App() {
  const [selected, setSelected] = useState({
    city: "Manchester",
    country: "UK",
    lat: "53.48",
    lon: "02.24",
  });


  const url = `https://jrawnsley-weather.netlify.app/.netlify/functions/token-hider?lat=${selected.lat}&lon=${selected.lon}`

  // const url = `http://localhost:8888/.netlify/functions/token-hider?lat=${selected.lat}&lon=${selected.lon}`


  const [weatherData, setWeatherData] = useState([]);

  const getData = () => {
    const fetchData = async () => {
      const response = await fetch(url);
      console.log(response);

      const json = await response.json();
      console.log(json);
      setWeatherData(json.list);
    };

    fetchData();
  };

  useEffect(getData, [selected]);

  console.log("weather data", weatherData);
  console.log("selected datapoint", selected);

  return (
    <div id="appContainer">
      <h1>How's The Weather?</h1>
      <div id="buttons-container">
        <ButtonsArray data={locations} setFunction={setSelected} />
      </div>
      <h2>Weather forecast for {selected.city}</h2>
      <LayoutMap data={weatherData} />
    </div>
  );
}

export default App;
