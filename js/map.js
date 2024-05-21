// Map 2
function init1 () {
    const map = new ymaps.Map('contact-map', {
        center: [51.77088048478847,15.313126427971605],
        zoom: 8,
        controls: []
    });

    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');
}

if (document.querySelector('#contact-map')) {
    ymaps.ready(init1)
}
// Map 2 end