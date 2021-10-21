const express = require('express');
const router  = express.Router();
const db = require('../lib/pinQueries');

router.post("/", (req, res) => {
  const pin_id = req.body.pinId;
  const map = {
    pin_id
  };

  db.deletePinById(map)
    .then(data => {
      res.redirect(`/maps/${data[0].map_id}`);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
