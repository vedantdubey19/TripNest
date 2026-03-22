
// mapboxgl.accessToken = map_Token;

// const map = new mapboxgl.Map({
//         container: 'map', // container ID
//         style:"mapbox://styles/mapbox/streets-v12",
//         center: ([77.2090, 28.6139]), // starting position [lng, lat]. Note that lat must be set between -90 and 90
//         zoom: 9 // starting zoom
// });

// console.log(coordinates);
// // const marker = new mapboxgl.Marker()
// //     .setLngLat(coordinates)
// //     .addTo(map);

mapboxgl.accessToken = map_Token;

const map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates,
    zoom: 8,
});

const marker = new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h6>${listing.location}<br><br>Exact location provided after booking!</h6>`
      )
    )
    .addTo(map);