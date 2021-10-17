/*
 * This would be routes for all maps
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');


router.get("/", (req, res) => {
  db.getAllMaps()
    .then(allMaps => {
      res.json({allMaps});
      // res.render("all-maps", { allmaps });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
module.exports = router;
