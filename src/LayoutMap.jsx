// This file defines the overall layout of the visual output

import formatDate from "./formatDate";

let tomorrow = 0; //????????
let rows = []; //???????

// weather data visualisation for a single day
const Day = ({ startIndex, endIndex, passedData }) => {
  return (
    <div className="day">

      {/* displays the date heading in the format defined by the immported function */}
      <h2>{formatDate(passedData[startIndex].dt).date}</h2>

      {/* start and end indexes representing a single day of weather datapoints are passed in when the Day component function is invoked below. Creates a slice of the full data array representing one day, then for each "timepoint" within the day, creates a box with a time, descriptor, icon and temerature value */}
      <div className="weatherBoxes">
        {passedData.slice(startIndex, endIndex).map((timepoint) => (
          <div className="weatherBox">
            <p className="bold-text">{formatDate(timepoint.dt).time}</p>
            <p>{timepoint.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${timepoint.weather[0].icon}@2x.png`}
            ></img>
            <p>{Math.floor(timepoint.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

//creates the full 6-day layout
const LayoutMap = ({ data }) => {
  //"data" will be passed in through the weatherData state hook in app.jsx
  if (data.length > 0) {
    //ensure that data has been fetched before attempting to create a layout
    let today = data[0].dt_txt[9]; //get the second digit of the "day" of today's date
    tomorrow = data.findIndex((item) => item.dt_txt[9] != today); //find the point in the data array where the date changes to tomorrow

    // defines how the weather data from the server will be passed into the visualisation function
    rows = [
      {
        start: 0,
        end: tomorrow, //today's "day" row will only include datapoints from the current time until the date changes (so may contain fewer datapoints than other rows)
      },
      {
        start: tomorrow,
        end: tomorrow + 8, //a full day will contain 8 datapoints
      },
      {
        start: tomorrow + 8,
        end: tomorrow + 16,
      },
      {
        start: tomorrow + 16,
        end: tomorrow + 24,
      },
      {
        start: tomorrow + 24,
        end: tomorrow + 32,
      },
      {
        start: tomorrow + 32,
        end: tomorrow + 40, //the final day will contain the remaining datapoints (may not be a full day)
      },
    ];

    return (
      <div className="daysContainer">
        {rows.map(
          (
            row //invokes the Day component function to visualise weather data in the rows defined above
          ) => (
            <Day
              dayName={row.timestamp}
              startIndex={row.start}
              endIndex={row.end}
              passedData={data}
            />
          )
        )}
      </div>
    );
  }
  return "Loading weather. Please wait...."; //loading message gives feedback to the user when the app is first loaded or when a new location is selected
};

export default LayoutMap;
