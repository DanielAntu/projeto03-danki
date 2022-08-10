window.onload = function() {
    let map
    function initialize() {
        var mapProp = {
            center: new google.maps.latLng(-27.898510, -50.757330),
            scrollWheel:false,
            zoom:12,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById('mapa'), mapProp)
    }

    function addMarker(lat, long, icon, content) {
        var latLng = {'lat':lat, long:long};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        });

        infoWindow.open(map,marker)
    }

    initialize();
    addMarker(-27.616637, -48.5923228, '', 'Meu endereço personalizado!')
}