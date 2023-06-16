const axios = require("axios");

const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

const getWeatherInfoByGeoCode = async (latitude, longitude) => {
  const {
    data: { current_weather: weather },
  } = await axios.get(WEATHER_API_URL, {
    params: {
      latitude,
      longitude,
      current_weather: true,
      time_zone: "IST",
    },
  });
  return { weather, latitude, longitude };
};

module.exports = { getWeatherInfoByGeoCode };
