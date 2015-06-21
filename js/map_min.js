// Initialize Map
function initialize() {
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById('map'), 
  {       
    zoom: 9,       
    center: new google.maps.LatLng(43.464258, -80.520410),       
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: true,
  });  
}

// Geolocation error
function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  console.log(content);
}