/*
 * This would be routes for all maps
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');


router.get("/", (req, res) => {
  const user_id = req.session.userId;
  const username = req.session.username;
  db.getMyMaps(user_id)
    .then(myMaps => {
      res.render("my-maps-list", { maps: myMaps, user: username });
      // const templateVars = { gallerymaps: myMaps, user: username };
      // console.log(templateVars);
      // res.render("gallerypages", templateVars);

    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
module.exports = router;
