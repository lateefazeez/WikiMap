const express = require('express');
const router  = express.Router();
const db = require('../lib/userQueries');

//----------------------------------------------------------------------------------------------------

router.get("/:id", (req, res) => {
  const id = req.params.id;
  req.session.userId = id;

  db.getUserById(id)
    .then(user => {
      req.session.username = user[0].name;
      res.redirect("/user/profile");
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

console.log('hi');
module.exports = router;


