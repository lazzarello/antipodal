function report(evt) {
	Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
}

/*
$.mapview.region = {latitude:0, longitude:0,
					latitudeDelta:0.01,longitudeDelta:0.01 };
*/

$.mapview.userLocation = true;
$.mapview.regionFit = true;
$.mapview.mapType = Alloy.Globals.Map.NORMAL_TYPE;

var getAntipode = function(title,lat,lon) {
	if ( lon < 0 ) {
  		lon = lon + 180;
	} else if (lon > 0) {
  		lon = lon - 180;
	} else {
		alert("you have no lat or long, are you sure you are on earth?");
	}
	this.title = title;
	this.coords = {
		latitude: lat * -1,
		longitude: lon
	};
	alert("new lat: " + coords.latitude + " new long: " + coords.longitude);
	return this.coords;
};

Ti.Geolocation.purpose = "Find my antipode";
Titanium.Geolocation.getCurrentPosition(function(e) {
	var latitude;
	var longitude;
	
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
