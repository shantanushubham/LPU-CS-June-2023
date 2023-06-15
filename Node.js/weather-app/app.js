const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 8080;
const GEO_CODE_API_URL = "https://geocode.maps.co/search";

app.get("/weather", async (req, res) => {
  const { address } = req.query;
  try {
    let { data } = await axios.get(GEO_CODE_API_URL, {
      params: {
        q: address,
      },
    });
    if (!data.length) {
      return res
        .status(404)
        .send({ message: "Address could not be geocoded." });
    }
    data = data[0];
    let { lat: latitude, lon: longitude } = data;
    return res.status(200).send({
      latitude,
      longitude,
    });
  } catch (err) {}
});

app.listen(PORT, () => {
  console.log(`Weather App is running on PORT: ${PORT}`);
});

// Golghar, Patna Coordinates:  25.620318, 85.139456
// Victoria Memorial, Kolkata: 22.544933, 88.342556
// LPU 31.258018, 75.706948
// Golden Temple, Amritsar: 31.620020, 74.876440
// Shaniwar Wada: 18.519361, 73.855355
