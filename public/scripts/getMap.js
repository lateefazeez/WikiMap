

//const route = require('../routes/getMap.js');


$(document).ready(function () {

     $('.map-box').click(function (e) {
      var mapName = $(this).find(".map-name").text();

      alert(mapName)

     //route(mapName)

  });

});
