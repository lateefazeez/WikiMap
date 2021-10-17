/*
 * This would be routes for the users contributed maps
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');


router.get("/", (req, res) => {
  const user_id = req.session.userId;
  db.getMyContributionMaps(user_id)
    .then(myContributed => {
      res.json({ myContributed });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
module.exports = router;
