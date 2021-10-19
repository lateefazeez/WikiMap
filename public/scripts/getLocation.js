
$(() => {

  let mymap;

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);

    }
  };

  const showPosition = (position) => {

    mymap = L.map('mapid').setView([position.coords.latitude, position.coords.longitude], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiZnJlZW0xMSIsImEiOiJja3V0M2kxdHk1bDVoMnduemZiems0ZjZyIn0.W0f8zYdfwwPgtXTgoWT3ig'
    }).addTo(mymap);

    L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap)
      .bindPopup('im home')
      .openPopup();

    let pathname = window.location.pathname;

    const myArr = pathname.split("/");

    $.ajax(`/api/maps/${myArr[2]}`, { method: "GET" })
      .then(function(results) {

        console.log(results);
        drawPins(results, mymap);

      });

  };
  getLocation();
});

const drawPins = (arr, map) => {

  for (const pinData of arr) {

    console.log(pinData);
    console.log(pinData.latitude, pinData.longitude);

    L.marker([pinData.latitude, pinData.longitude]).addTo(map)
      .bindPopup(`im ${pinData.title}`)
      .openPopup();

    console.log("map", map);

  }
};
