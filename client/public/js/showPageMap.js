mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: listing.geometry.coordinates,
    zoom: 9
});

map.addControl(new mapboxgl.NavigationControl());

const el = document.createElement('div');
el.className = 'marker';
el.style.backgroundColor = '#fe424d';
el.style.width = '24px';
el.style.height = '24px';
el.style.borderRadius = '50%';
el.style.border = '3px solid white';
el.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';

new mapboxgl.Marker(el)
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h6 class="fw-bold mb-1 p-2 pb-0">${listing.title}</h6><p class="mb-0 text-muted p-2 pt-1" style="font-size:0.85rem">Exact location will be provided after booking.</p>`
        )
    )
    .addTo(map);
