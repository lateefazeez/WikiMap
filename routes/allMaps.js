/*
 * This would be routes for all maps
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');

router.get("/", (req, res) => {
  const username = req.session.username;
  db.getAllMaps()
    .then(allMaps => {
      // res.render("all-maps", {maps: allMaps, user: username});
      const templateVars = { gallerymaps: allMaps, user: username};

      res.render("gallerypages", templateVars);

    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });

});


module.exports = router;
