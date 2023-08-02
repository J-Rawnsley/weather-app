import formatDate from "./formatDate";

let tomorrow = 0;
let rows = [];

const Day = ({ startIndex, endIndex, passedData }) => {
  return (
    <div className="day">
      <h2>{formatDate(passedData[startIndex].dt).date}</h2>
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

const LayoutMap = ({data}) => {
  if (data.length > 0) {
    let today = data[0].dt_txt[9];
    tomorrow = data.findIndex((item) => item.dt_txt[9] != today);

    rows = [
      {
        start: 0,
        end: tomorrow,
      },
      {
        start: tomorrow,
        end: tomorrow + 8,
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
        end: tomorrow + 40,
      },
    ];

    return (
      <div className="daysContainer">
        {rows.map((row) => (
          <Day
            dayName={row.timestamp}
            startIndex={row.start}
            endIndex={row.end}
            passedData={data}
          />
        ))}
      </div>
    );
  }
  return "Loading weather. Please wait....";
};

export default LayoutMap;
