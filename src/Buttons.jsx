import locations from "./locations";

// defines an individual button
function LocationButton({ city, setFunction }) { //"city" will come from a map of locations array. "setFunction" will be "setSelected" defined in app.jsx. 
  return (
    <button
      type="button" 
      className="locationButton"
      name={city}
      onClick={() => setFunction(locations.find((item) => item.city === city))} //sets the "selected" location to match whichever button was clicked.
    >
      {city}
    </button>
  );
}

/* creates a grid of button components */
function ButtonsArray({ data, setFunction }) {
  return data.map((item) => (
    <LocationButton city={item.city} setFunction={setFunction} />
  ));
}

export default ButtonsArray;
