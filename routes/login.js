const express = require('express');
const router  = express.Router();
const db = require('../lib/mapqueries.js');

router.get("/:id", (req, res) => {
  const id = req.params.id;
  req.session.userId = id;
  db.getUserById(id)
    .then(user => {
      if (user.id === id) {
        res.redirect("/", {username: user.name});
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
module.exports = router;

