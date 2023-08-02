import locations from "./locations";

function LocationButton({ city, setFunction }) {
  return (
    <button
      type="button"
      className="locationButton"
      name={city}
      onClick={() => setFunction(locations.find((item) => item.city === city))}
    >
      {city}
    </button>
  );
}

function ButtonsArray({ data, setFunction }) {
  return data.map((item) => (
    <LocationButton city={item.city} setFunction={setFunction} />
  ));
}

export default ButtonsArray;
