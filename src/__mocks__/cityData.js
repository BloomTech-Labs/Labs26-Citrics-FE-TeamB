export const mockCityDetails = [
  {
    image: "https://i.imgur.com/YXdssOR.jpeg",
    name: "Baton Rouge",
    state: "LA",
    population: {
      data: {
        total_pop: 221606
      },
      viz: JSON.stringify({
        data: [{ x: [3, 5, 6, 8, 9] }, { y: [10, 2, 5, 21] }]
      })
    },
    unemployRate: {
      viz: JSON.stringify({
        data: [{ x: [3, 5, 6, 8, 9] }, { y: [10, 2, 5, 21] }]
      })
    },
    rent: { studio: 3412 },
    weather: {
      summer_humidity_mean: 77,
      summer_maxtempF_mean: 91,
      winter_mintempF_mean: 47
    }
  },
  {
    image: "https://i.imgur.com/YXdssOR.jpeg",
    name: "Sacramento",
    state: "CA",
    population: {
      data: {
        total_pop: 22160216
      },
      viz: JSON.stringify({
        data: [{ x: [3, 5, 6, 8, 9] }, { y: [10, 2, 5, 21] }]
      })
    },
    unemployRate: {
      viz: JSON.stringify({
        data: [{ x: [3, 5, 6, 8, 9] }, { y: [10, 2, 5, 21] }]
      })
    },
    rent: { studio: 3412 },
    weather: {
      summer_humidity_mean: 77,
      summer_maxtempF_mean: 91,
      winter_mintempF_mean: 47
    },
    currentWeather: {
      current: { temp: 10 }
    }
  }
];
