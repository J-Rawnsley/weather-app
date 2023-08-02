const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let dayNumber = 0;
let tomorrow = 0;
let rows = [];

const Day = ({ dayName = "Monday", startIndex, endIndex, passedData }) => {
  console.log("rendering a day");
  return (
    <div className="day">
      <h2>{dayName}</h2>
      <div className="weatherBoxes">
        {passedData.slice(startIndex, endIndex).map((timepoint) => (
          <div className="weatherBox">
            <p className="bold-text">{timepoint.dt_txt}</p>
            <p>{timepoint.weather[0].description}</p>
            <img
              src={`https://openweathermap.org/img/wn/${timepoint.weather[0].icon}@2x.png`}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

const LayoutMap = (data) => {
  if (data.length > 0) {
    let today = data[0].dt_txt[9];
    tomorrow = data.findIndex((item) => item.dt_txt[9] != today);
    
    let date = new Date(data[0].dt * 1000);
    dayNumber = date.getDay();

    console.log(date, dayNumber, tomorrow);

    rows = [
      {
        dayName: days[dayNumber],
        start: 0,
        end: tomorrow,
      },
      {
        dayName: days[dayNumber + 1],
        start: tomorrow,
        end: tomorrow + 8,
      },
      {
        dayName: days[dayNumber + 2],
        start: tomorrow + 8,
        end: tomorrow + 16,
      },
      {
        dayName: days[dayNumber + 3],
        start: tomorrow + 16,
        end: tomorrow + 24,
      },
      {
        dayName: days[dayNumber + 4],
        start: tomorrow + 24,
        end: tomorrow + 32,
      },
      {
        dayName: days[dayNumber + 5],
        start: tomorrow + 32,
        end: tomorrow + 40,
      },
    ];

    return (
      <div className="daysContainer">
        {rows.map((row) => (
          <Day
            dayName={row.dayName}
            startIndex={row.start}
            endIndex={row.end}
            passedData={data}
          />
        ))}
      </div>
    );
  }
  return "Loading weather. Please wait...."
};

export default LayoutMap;
