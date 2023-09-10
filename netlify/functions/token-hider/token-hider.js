const process = require("process");

const axios = require("axios");
const qs = require("qs");

const handler = async function (event) {
  console.log("function accessed");

  const API_PARAMS = event.queryStringParameters;
  console.log("API_PARAMS", API_PARAMS);

  const { API_KEY } = process.env;
  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${API_PARAMS.lat}&lon=${API_PARAMS.lon}&units=metric&appid=${API_KEY}`;
  console.log("Constructed URL is ...", URL);

  try {
    const { data } = await axios.get(URL);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
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
