const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');

router.get("/", (req, res) => {
  res.render("new-map");
});

router.post("/", (req, res) => {
  const name = req.body.map_name;
  const description = req.body.description;
  const latitude = 0;
  const longitude = 0;
  const image = "https://ibb.co/0XbkmmH";

  const map = {
    name,
    description,
    image,
    latitude,
    longitude,
  };

  db.generateMap(map)
    .then(data => console.log(data))
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
