/*
 * This would be routes for the maps not owned by thw current user
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');


router.get("/", (req, res) => {
  const user_id = req.session.userId;
  db.getNotMyMaps(user_id)
    .then(notMyMaps=> {
      res.json({ notMyMaps });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
module.exports = router;
