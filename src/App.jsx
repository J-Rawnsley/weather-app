import { useState, useEffect } from "react";
import "./App.css";
import LayoutMap from "./LayoutMap";

function App() {
  const url =
    `https://api.openweathermap.org/data/2.5/forecast?lat=53.48&lon=02.24&units=metric&appid=fdcf7d03afbc001fee4ba948237bc9c3`;

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

  useEffect(getData, []);

  console.log(weatherData);

  return (
    <>
      <h1>Manchester Weather</h1>
      
      {LayoutMap(weatherData)}
    </>
  );
}

export default App;
