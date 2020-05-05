function initMap() {
    var center = { lat: 52.2160155, lng: 5.0103505 };
    var locations = [
        ['Daily Meal Amsterdam<br>\
        Lijnbaansgracht 246 (bij het Leidseplein)<br>', 52.363060, 4.884550],
        ['Daily Meal Utrecht<br>\
        Ariënslaan 18 (Tennisclub ULTC Iduna)<br>', 52.101400, 5.239600]
    ];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: center
    });
    var infowindow = new google.maps.InfoWindow({});
    var marker, count;
    for (count = 0; count < locations.length; count++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[count][1], locations[count][2]),
            map: map,
            title: locations[count][0]
        });
        google.maps.event.addListener(marker, 'click', (function (marker, count) {
            return function () {
                infowindow.setContent(locations[count][0]);
                infowindow.open(map, marker);
            }
        })(marker, count));
    }
}