function formatDate(timestamp) {
  
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

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

  function convertToOrdinal(cardinalNumber) {

    if (cardinalNumber >= 11 && cardinalNumber <= 13) {
      return cardinalNumber + 'th';
    }

    const lastDigit = cardinalNumber % 10;
    switch (lastDigit) {
      case 1:
        return cardinalNumber + 'st';
      case 2:
        return cardinalNumber + 'nd';
      case 3:
        return cardinalNumber + 'rd';
      default:
        return cardinalNumber + 'th';
    }
  }
  
  function convertToAMPM(hour) {
    if (hour === 0) {
      return "12 AM"
    }
    if (hour < 12) {
      return `${hour} AM`
    }
    else return `${hour - 12} PM`
  }

  let date = new Date(timestamp * 1000)
  
  let dayOfWeek = days[date.getDay()]
  let dateOfMonth = convertToOrdinal(date.getDate())
  let month = months[date.getMonth()]
  let year = date.getFullYear()
  
  let time = convertToAMPM(date.getHours())
  
  return {
    date: `${dayOfWeek}, ${dateOfMonth} ${month} ${year}`,
    time: time
  }
}


export default formatDate