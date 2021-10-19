const express = require('express');
const router  = express.Router();

router.post("/", (req, res) => {
  if (!req.body.location) {
    res.status(400).json({ error: 'invalid request: no data in POST body'});
    return;
  } else {
    const locationName = req.body.location;
    res.status(201).send(locationName);
  }
});



module.exports = router;
