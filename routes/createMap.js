const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');

router.post("/", (req, res) => {
  const name = req.body.map_name;
  const description = req.body.map_description;
  const latitude = 0;
  const longitude = 0;
  const image = "map_image";
  const user_id = req.session.userId;

  const map = {
    name,
    description,
    user_id,
    image,
    latitude,
    longitude,
  };

  const username = req.session.username;
  db.generateMap(map)
    .then(data => {
      console.log(data[0]);
      res.redirect(`/maps/${data[0].id}`);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});



module.exports = router;
