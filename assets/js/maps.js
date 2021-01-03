function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 51.369621,
            lng: -0.365670
        }
});

let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let locations = [
    { lat: 51.239167, lng: -0.564511 }, /* Location A Mandolay Hotel */
    { lat: 51.329200, lng: -0.411190 }, /* Location B Hilton Cobham */
    { lat: 51.330003, lng: -0.420852 }, /* Location C Painshill Park */
    { lat: 51.234246, lng: -0.572456 }, /* Location D Guildford Castle */
    { lat: 51.292720, lng: -0.392500 }, /* Location E Bookham Common */
    { lat: 51.232865, lng: -0.507144 } /* Location F Newlands Corner */
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

};
