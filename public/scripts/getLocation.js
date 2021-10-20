
$(() => {


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
