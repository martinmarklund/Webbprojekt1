<script src='https://www.google.com/recaptcha/api.js'></script>

function initMap() {
  var myLatLng = {lat: 58.592, lng: 16.186};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Ädla Ting'
  });
}