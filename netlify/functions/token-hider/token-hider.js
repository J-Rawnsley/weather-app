const process = require("process");
const axios = require("axios");
const qs = require("qs");

// function to get weather data from server while keeping API key secret
const handler = async function (event) {
  console.log("function accessed");

  // define url and parameters including secret API key
  const API_PARAMS = event.queryStringParameters;
  console.log("API_PARAMS", API_PARAMS);
  const { API_KEY } = process.env;
  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${API_PARAMS.lat}&lon=${API_PARAMS.lon}&units=metric&appid=${API_KEY}`;
  console.log("function updated 25/10/2023")

  
  try {
    const { data } = await axios.get(URL); // fetch data using axios

    return {
      statusCode: 200, // return data to be processed in weather app
      body: JSON.stringify(data),
      headers: { //enable CORS
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTION",
      },
    };
  } catch (error) {
    const { data, headers, status, statusText } = error.response;
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    };
  }
};

module.exports = { handler };
