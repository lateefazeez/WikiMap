/*
 * This would be routes for all maps
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');

router.get("/", (req, res) => {
  const userId = req.session.user_id;
  db.getMyMaps(userId)
    .then(myMaps => {
      res.json({ myMaps });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
module.exports = router;



