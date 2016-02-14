// Use the Singleton pattern
// to make sure that only one Client object exists
var Geo;

(function () {
  var instance;
  Geo = function Geo() {
    if (instance) {
      return instance;
    }

    // Set the instance variable and return it onwards
    instance = this;

  };
}());

/* callback fn retorn position.coords */
Geo.prototype.getLocation = function( fn ) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition( fn );
	} else {
		console.log("Geolocation is not supported by this browser.");
	}
}



	