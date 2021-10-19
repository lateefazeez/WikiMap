/*
 * This would be routes for the users favorite maps
 */

const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');


router.get("/", (req, res) => {
  const user_id = req.session.userId;
  const username = req.session.username;
  db.getMyFavoriteMaps(user_id)
    .then(myFavoriteMaps => {
      res.render("my-favs", {maps: myFavoriteMaps, user: username});
      // const templateVars = { gallerymaps: myFavoriteMaps, user: username};
      // res.render("gallerypages", templateVars);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
module.exports = router;
