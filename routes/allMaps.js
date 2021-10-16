/*
 * This would be routes for all maps
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');


router.get("/", (req, res) => {
  db.getAllMaps()
    .then(data => {
      const allmaps = data.rows;
      console.log("MAPS: ", allmaps);
      res.json({allmaps});
      // res.render("all-maps", { allmaps });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
console.log("ROUTER: ", router);
module.exports = router;
