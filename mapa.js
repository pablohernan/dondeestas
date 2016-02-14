/* 
Google Maps utils

Pablo Rapetti 
07/02/2016  

Example:
http://wrightshq.com/playground/placing-multiple-markers-on-a-google-map-using-api-3/
*/


var Mapa;

(function () {
  var instance;
  Mapa = function Mapa() {
    if (instance) {
      return instance;
    }

    // Set the instance variable and return it onwards 
    instance = this;
	
  };
}());

/* Carga la Api */
Mapa.prototype.loadApi = function( latitud , longitud , fnstring ){
	/* seto los valores para el init */
	this.lugarLatitud = latitud;
	this.lugarLongitud = longitud;	
	
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCXGYrhU1bkONC6gli3F9vLVwMTrTNnx-I&callback="+fnstring; // llama init
    document.body.appendChild(script);
	
}

/* si la Api fue cargada es llamado init  */
Mapa.prototype.init = function() {
    var mapOptions = {
		mapTypeId: 'roadmap',
		center:new google.maps.LatLng( this.lugarLatitud , this.lugarLongitud ),
		zoom:16	
    };		
    // Display a map on the page
    this.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    this.map.setTilt(45);      
}

Mapa.prototype.addMaker = function( latitud , longitud , titulo ){
	var marker;
	//var bounds = new google.maps.LatLngBounds();
	
	var position = new google.maps.LatLng(latitud, longitud);
	//bounds.extend(position);
	marker = new google.maps.Marker({
		position: position,
		map: this.map,
		title: titulo
	});
	
	// Automatically center the map fitting all markers on the screen
	//map.fitBounds(bounds);
	return marker;	
}

Mapa.prototype.deleteMaker = function( marker ){
	marker.setMap(null);
}

/* actualiza la posicion de un maker ja existente */
Mapa.prototype.changePosition = function( marker , latitud , longitud ){    
	var newLatLng = new google.maps.LatLng( latitud , longitud );
	marker.setPosition(newLatLng);	
}
