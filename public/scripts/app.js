// Client facing scripts here

$(document).ready(()=> {

  const getLocation = require("./getLocation");
  const locationGetter = require("./locationGetter");
  locationGetter();
  getLocation();

});

