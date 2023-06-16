const { getGeoCodeByAddress } = require("../apis/geoCodeApi");
const { getWeatherInfoByGeoCode } = require("../apis/weatherApi");

const getWeatherInfoByAddress = async (address) => {
  const { latitude, longitude } = await getGeoCodeByAddress(address);
  const weatherData = await getWeatherInfoByGeoCode(latitude, longitude);
  return weatherData;
};

module.exports = { getWeatherInfoByAddress };
