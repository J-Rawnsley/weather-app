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

  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${selected.lat}&lon=${selected.lon}&units=metric&appid=fdcf7d03afbc001fee4ba948237bc9c3`;

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

  console.log(weatherData);
  console.log(selected);

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
