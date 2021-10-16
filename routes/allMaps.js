/*
 * This would be routes for all maps
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');

module.exports = () => {
  router.get("/", (req, res) => {
    db.getAllMaps()
      .then(data => {
        const allmaps = data.rows;
        res.render("all-maps", { allmaps });
      });
  });
  return router;
};
