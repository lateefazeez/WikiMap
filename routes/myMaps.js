/*
 * This would be routes for all maps
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');


router.get("/", (req, res) => {
  const user_id = req.session.userId;
  db.getMyMaps(user_id)
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



