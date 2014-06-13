function report(evt) {
	Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
}

/*
$.mapview.region = {latitude:0, longitude:0,
					latitudeDelta:0.01,longitudeDelta:0.01 };
*/

$.mapview.userLocation = true;
$.mapview.regionFit = true;
$.mapview.regionFit = Alloy.Globals.Map.NORMAL_TYPE;

var GeoData = function(title,lat,lon) {
	if ( lon < 0 ) {
  		lon = lon + 180;
	} else if (lon > 0) {
  		lon = lon - 180;
	} else {
		print("you're on the equator");
	}
	this.title = title;
	this.coords = {
		latitude: lat,
		longitude: lon
	};
};


var latitude;
var longitude;

var callback = function(e) {
	if (e.error) {
		alert("cannot get your location");
		return;
	} else {
		longitude = e.coords.longitude;
		latitude = e.coords.latitude;
	};
};

Titanium.Geolocation.getCurrentPosition(callback);

$.index.open();
