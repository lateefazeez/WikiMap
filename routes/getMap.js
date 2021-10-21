/*
 * This would be routes for all maps
 */

const express = require("express");
const router = express.Router();
const db = require("../lib/mapqueries.js");
const dc = require("../lib/pinQueries.js");
const dd = require('../lib/favoritesQueries.js');

router.get("/:id", (req, res) => {
  const username = req.session.username;
  const map_id = req.params.id;
  db.getSingleMap(map_id)
    .then(currentMap => {

      dc.getPinsByMap(map_id)
        .then(pincollection => {

          dd.isMapFavorited(map_id)
            .then(mapFav => {

              let mapVar = mapFav.length;


              res.render("map", { mapName: currentMap[0]['name'], user: username, pins: pincollection, mapVar });
            });
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
    });
});

module.exports = router;


