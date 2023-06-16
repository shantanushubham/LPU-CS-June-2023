const axios = require("axios");
const WEATHER_APP_URL = `http://localhost:8080`;

const getWeatherByAddress = async (address) => {
  let { data: weatherData } = await axios.get(`${WEATHER_APP_URL}/weather`, {
    params: {
      address,
    },
  });
  return weatherData;
};

module.exports = { getWeatherByAddress };
