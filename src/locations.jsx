const locationData = [
  {
    city: "London",
    lat: "51.5074",
    lon: "-0.1278",
  },
  {
    city: "Manchester",
    lat: "53.483",
    lon: "-2.244",
  },
  {
    city: "Birmingham",
    lat: "52.4862",
    lon: "-1.8904",
  },
  {
    city: "Glasgow",
    lat: "55.8642",
    lon: "-4.2518",
  },
  {
    city: "Liverpool",
    lat: "53.4084",
    lon: "-2.9916",
  },
  {
    city: "Edinburgh",
    lat: "55.9533",
    lon: "-3.1883",
  },
  {
    city: "Leeds",
    lat: "53.8008",
    lon: "-1.5491",
  },
  {
    city: "Sheffield",
    lat: "53.3811",
    lon: "-1.4701",
  },
  {
    city: "Bristol",
    lat: "51.4545",
    lon: "-2.5879",
  },
  {
    city: "Newcastle",
    lat: "54.9783",
    lon: "-1.6177",
  },
  {
    city: "Nottingham",
    lat: "52.9548",
    lon: "-1.1581",
  },
  {
    city: "Cardiff",
    lat: "51.4816",
    lon: "-3.1791",
  },
  {
    city: "Belfast",
    lat: "54.5973",
    lon: "-5.9301",
  },
  {
    city: "Southampton",
    lat: "50.9097",
    lon: "-1.4044",
  },
  {
    city: "Leicester",
    lat: "52.6369",
    lon: "-1.1398",
  },
  {
    city: "Plymouth",
    lat: "50.3755",
    lon: "-4.1427",
  },
  {
    city: "Stoke-on-Trent",
    lat: "53.0027",
    lon: "-2.1794",
  },
  {
    city: "Derby",
    lat: "52.9228",
    lon: "-1.4762",
  },
  {
    city: "Swansea",
    lat: "51.6214",
    lon: "-3.9436",
  },
  {
    city: "Sunderland",
    lat: "54.9069",
    lon: "-1.3833",
  },
  {
    city: "Luton",
    lat: "51.8787",
    lon: "-0.4200",
  },
  {
    city: "Wolverhampton",
    lat: "52.5862",
    lon: "-2.1287",
  },
  {
    city: "Southend-on-Sea",
    lat: "51.5450",
    lon: "0.7075",
  },
  {
    city: "Norwich",
    lat: "52.6309",
    lon: "1.2974",
  },
  {
    city: "Blackpool",
    lat: "53.8175",
    lon: "-3.0357",
  },
  {
    city: "Reading",
    lat: "51.4543",
    lon: "-0.9781",
  },
  {
    city: "Oldham",
    lat: "53.5409",
    lon: "-2.1114",
  },
  {
    city: "Middlesbrough",
    lat: "54.5742",
    lon: "-1.2354",
  },
  {
    city: "Huddersfield",
    lat: "53.6458",
    lon: "-1.7850",
  },
  {
    city: "Oxford",
    lat: "51.7520",
    lon: "-1.2577",
  },
  {
    city: "York",
    lat: "53.9591",
    lon: "-1.0815",
  }
];

const locations = locationData.sort((a, b) => a.city.localeCompare(b.city));

export default locations;
