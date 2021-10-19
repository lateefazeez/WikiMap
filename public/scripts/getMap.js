
$(document).ready(function () {



  $.ajax({
    type: "GET",
    url: "/maps/:id",
    dataType: "json",
    success: function(data){
        console.log(data)

    }
});
});
