const LayoutMap = (data) => {
  let tomorrow = 0;
  let dayNumber = 0;
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  if (data.length > 0) {
    let today = data[0].dt_txt[9];
    tomorrow = data.findIndex((item) => item.dt_txt[9] != today);
    let date = new Date(data[0].dt)
    dayNumber = date.getDay()

    console.log(dayNumber)

  }

  return (
    <div className="daysContainer">
      <div className="day">
        <h2>Today's Weather ({days[dayNumber]})</h2>
        <div className="weatherBoxes">
        {data.slice(0, tomorrow).map((timepoint) => (
          <div className="weatherBox">
            <p className="bold-text">{timepoint.dt_txt}</p>
            <p>{timepoint.weather[0].description}</p>
            <img src={`https://openweathermap.org/img/wn/${timepoint.weather[0].icon}@2x.png`}></img>
          </div>
          ))}
        </div>
      </div>
      <div className="day">
        <h2>Tomorrow's' Weather ({days[dayNumber + 1]})</h2>
        <div className="weatherBoxes">
          {data.slice(tomorrow, tomorrow + 8).map((timepoint) => (
            <div className="weatherBox">
              <p className="bold-text">{timepoint.dt_txt}</p>
              <p>{timepoint.weather[0].description}</p>
              <img src={`https://openweathermap.org/img/wn/${timepoint.weather[0].icon}@2x.png`}></img>
            </div>
          ))}
        </div>
      </div>
      <div className="day">
        <h2>{days[dayNumber + 2]}'s Weather</h2>
        <div className="weatherBoxes">
          {data.slice(tomorrow + 8, tomorrow + 16).map((timepoint) => (
            <div className="weatherBox">
              <p className="bold-text">{timepoint.dt_txt}</p>
              <p>{timepoint.weather[0].description}</p>
              <img src={`https://openweathermap.org/img/wn/${timepoint.weather[0].icon}@2x.png`}></img>
            </div>
          ))}
        </div>
      </div>
      <div className="day">
        <h2>{days[dayNumber + 3]}'s Weather</h2>
        <div className="weatherBoxes">
          {data.slice(tomorrow + 16, tomorrow + 24).map((timepoint) => (
            <div className="weatherBox">
              <p className="bold-text">{timepoint.dt_txt}</p>
              <p>{timepoint.weather[0].description}</p>
              <img src={`https://openweathermap.org/img/wn/${timepoint.weather[0].icon}@2x.png`}></img>
            </div>
          ))}
        </div>
      </div>
      <div className="day">
        <h2>{days[dayNumber + 4]}'s Weather</h2>
        <div className="weatherBoxes">
          {data.slice(tomorrow + 24, tomorrow + 32).map((timepoint) => (
            <div className="weatherBox">
              <p className="bold-text">{timepoint.dt_txt}</p>
              <p>{timepoint.weather[0].description}</p>
              <img src={`https://openweathermap.org/img/wn/${timepoint.weather[0].icon}@2x.png`}></img>
            </div>
          ))}
        </div>
      </div>
      <div className="day">
        <h2>{days[dayNumber + 5]}'s Weather</h2>
        <div className="weatherBoxes">
          {data.slice(tomorrow + 32, tomorrow + 40).map((timepoint) => (
            <div className="weatherBox">
              <p className="bold-text">{timepoint.dt_txt}</p>
              <p>{timepoint.weather[0].description}</p>
              <img src={`https://openweathermap.org/img/wn/${timepoint.weather[0].icon}@2x.png`}></img>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default LayoutMap;
