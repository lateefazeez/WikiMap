
$(() => {
  (function() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
    },
    function(error) {
      console.log("The Locator was denied. :(");
    });
  })();

  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(showPosition);

  //   } else {
  //     x.innerHTML = "Geolocation is not supported by this browser.";
  //   }
  // };

  // const showPosition = (position) => {

  //   let mymap = L.map('mapid').setView([position.coords.latitude, position.coords.longitude], 13);


  //   let marker = L.marker([51.5, -0.09]).addTo(mymap);

  //   L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //     maxZoom: 18,
  //     id: 'mapbox/streets-v11',
  //     tileSize: 512,
  //     zoomOffset: -1,
  //     accessToken: 'pk.eyJ1IjoiZnJlZW0xMSIsImEiOiJja3V0M2kxdHk1bDVoMnduemZiems0ZjZyIn0.W0f8zYdfwwPgtXTgoWT3ig'
  //   }).addTo(mymap);

  // };
  // getLocation();
  // module.exports = getLocation;
});






