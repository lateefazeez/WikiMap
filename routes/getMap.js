/*
 * This would be routes for all maps
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');


router.get("/:id", (req, res) => {
  const username = req.session.username;
  const map_id = req.params.id;
  db.getSingleMap(map_id)
    .then(currentMap => {
      console.log(currentMap);
      res.render("map", { currentMap, user: username });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
module.exports = router;


