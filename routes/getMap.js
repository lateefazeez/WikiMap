/*
 * This would be routes for all maps
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');


router.get("/map/:id", (req, res) => {
  const map_name = mapName;
  console.log(map_name);
  db.getSingleMap(map_name)
    .then(currentMap => {
      console.log(currentMap);
      res.render("map", { currentMap });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
module.exports = router;


