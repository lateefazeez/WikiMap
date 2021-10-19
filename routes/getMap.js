/*
 * This would be routes for all maps
 */

const express = require("express");
const router = express.Router();
const db = require("../lib/mapqueries.js");
const dc = require("../lib/pinQueries.js");

// router.get("/:id", (req, res) => {
//   const username = req.session.username;
//   const map_id = req.params.id;
//   db.getSingleMap(map_id)
//     .then(currentMap => {

//       res.render("map", { mapName: currentMap[0].name, user: username });
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// });

router.get("/:id", (req, res) => {
  map_id = req.params.id;
  db.getMapIdByname(req.query.map)
    .then((currentMap) => {
      dc.getPinsByMap(map_id).then((mapPins) => {
        db.getSingleMap(map_id).then((currentMap) => {
          const username = req.session.username;
          console.log("map", currentMap);
          console.log("pins", mapPins);
          const templateVars = {
            pins: mapPins,
            user: username,
            mapName: currentMap,
          };
          res.render("map", templateVars);
        });
      });
    })
    .catch((err) => {
      console.log(err);
      // res
      //   .status(500)
      //   .json({ error: err.message });
    });
});

module.exports = router;
