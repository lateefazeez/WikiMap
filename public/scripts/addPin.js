$(() => {
  // let locationName = "saddledome calgary";
  const $addresses = [];
  const getAddress = () => {
    $("#search-button").on("click", function() {
      const $address = $("#search-bar").val();
      $addresses.push($address);
      console.log($addresses);
      sendGeocodingRequest($address)
        .then(function(data) {
          //and if it is success drawing map and marker
          drawMarker(data);
          $("#search-bar").val("");
        })
        .catch(err => console.log(err));
    });
  };

  getAddress();


  // These secret variables are needed to authenticate the request. Get them from http://docs.traveltimeplatform.com/overview/getting-keys/ and replace
  let APPLICATION_ID = "da409bff";
  let API_KEY = "169ddfc918d7919f5aaf1778daa6a314";

  ///sending request


  const drawMarker = (response) => {
    // We need to extract the coordinates from the response.
    let coordinates = response.features[0].geometry.coordinates; // The coordintaes are in a [<lng>, <lat>] format/
    let latLng = L.latLng([coordinates[1], coordinates[0]]); // The url template for OpenStreetMap tiles.
    // var osmUrl =
    //   "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZnJlZW0xMSIsImEiOiJja3V0M2kxdHk1bDVoMnduemZiems0ZjZyIn0.W0f8zYdfwwPgtXTgoWT3ig"; // Creates the tile layer.
    let osmTileLayer = L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiZnJlZW0xMSIsImEiOiJja3V0M2kxdHk1bDVoMnduemZiems0ZjZyIn0.W0f8zYdfwwPgtXTgoWT3ig",
      }
    ); // Adds the tile layer to the map.
    let map = L.map("mapid").addLayer(osmTileLayer);
    map.setView(latLng, 13); // Creates a marker for our departure location and adds it to the map.
    let markter = L.marker(latLng).addTo(map);
  };

  function sendGeocodingRequest(location) {
    return fetch(
      `https://api.traveltimeapp.com/v4/geocoding/search?query=` +
        location,
      {
        method: "GET",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-Application-Id": APPLICATION_ID,
          "X-Api-Key": API_KEY,
          "Accept-Language": "en-US",
        },
      }
    ).then((response) => response.json()); // parses JSON response into native Javascript objects
  }



});
