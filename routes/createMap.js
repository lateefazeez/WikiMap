const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');

router.get("/", (req, res) => {
  const username = req.session.username;
  res.render("create-map", {user: username});
});

router.post("/", (req, res) => {
  const name = req.body.map_name;
  const description = req.body.map_description;
  const latitude = 0;
  const longitude = 0;
  const image = "map_image";

  const map = {
    name,
    description,
    image,
    latitude,
    longitude,
  };

  const username = req.session.username;
  db.generateMap(map)
    .then(data => {
      res.render("create-map", {user: username, mapName: data.name});
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
