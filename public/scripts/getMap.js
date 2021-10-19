

$(document).ready(function() {
  $(".map-box").click(function(e) {
    let map_name = $(this).find(".map-name").text();
    //e.preventDefault();

    //thisMapsId = db.getMapIdByname(map_id);

    // console.log("map id", thisMapsId)

    $.ajax({
      type: "GET",
      url: `/maps/${map_name}?map=${map_name}`,
      // data: {map: map_name},
      dataType: "json",
      success: function(data) {
        console.log(data);
      },
    });
  });
});
