(function(){
    'use strict';

var map = L.map('map').setView([38.5449, -121.7405], 15);
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

    var markerHome = L.marker([38.552506, -121.749865]).addTo(map);
    markerHome.bindPopup("Home");

    var markerTrack = L.marker([38.546470, -121.748168]).addTo(map);
    markerTrack.bindPopup("Almost the UC Davis Track, it doesn't have an address.");

    var markerChipotle = L.marker([38.544016, -121.741513]).addTo(map);
    markerChipotle.bindPopup('Heaven "Chipotle"');
}());