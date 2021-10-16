// Client facing scripts here

$(document).ready(()=> {

  var x = document.getElementById("demo");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);

    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {

    var mymap = L.map('mapid').setView([position.coords.latitude, position.coords.longitude], 13);


    var marker = L.marker([51.5, -0.09]).addTo(mymap);

    var polygon = L.polygon([
      [51.04930825575628, -114.06314259719633],
      [51.0461149595259, -114.06061057380877],
      [51.044064384834975, -114.07254103879534],
      [51.039369306165035, -114.07434348330452]
  ]).addTo(mymap);



    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiZnJlZW0xMSIsImEiOiJja3V0M2kxdHk1bDVoMnduemZiems0ZjZyIn0.W0f8zYdfwwPgtXTgoWT3ig'
  }).addTo(mymap);

  }


  getLocation();

});

