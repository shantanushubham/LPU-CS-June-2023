const express = require("express");
const { getWeatherInfoByAddress } = require("./utils/weatherUtil");

const app = express();

const PORT = 8080;

app.get("/weather", async (req, res) => {
  const { address } = req.query;
  try {
    const weatherInfo = await getWeatherInfoByAddress(address);
    return res.status(200).send(weatherInfo);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Weather App is running on PORT: ${PORT}`);
});

// Golghar, Patna Coordinates:  25.620318, 85.139456
// Victoria Memorial, Kolkata: 22.544933, 88.342556
// LPU 31.258018, 75.706948
// Golden Temple, Amritsar: 31.620020, 74.876440
// Shaniwar Wada, Pune: 18.519361, 73.855355
