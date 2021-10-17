const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');


router.post("/", (req, res) => {
  const name = req.body.name;
  const userId = req.seesion.userId;
  const description = req.body.description;
  const latitude = getLocation().latitude;
  const longitude = getLocation().longitude;
  const image = "map_image";


  db.saveToDatabase(name, userId, description, image, latitude, longitude)
    .then(data => console.log(data))
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);

  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
};

const showPosition = (position) => {
  const coordinate = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude
  };

  return coordinate;
};
