function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: {
            lat: 51.237974,
            lng: -0.436263
        }
});

let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let locations = [
    { lat: 51.330003, lng: -0.420852 },
    { lat: 51.234246, lng: -0.572456 }
];

let markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    })
});

new MarkerClusterer(map, markers, {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
});

}