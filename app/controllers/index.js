function report(evt) {
	Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
}

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
	alert("new lat: " + coords.latitude + "\n" + "new long: " + coords.longitude);
	$.mapview.region = {latitude: coords.latitude, longitude: coords.longitude,
					latitudeDelta:20.0,longitudeDelta:20.0 };
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
	$.mapview.region = {latitude: latitude, longitude: longitude,
					latitudeDelta:0.01,longitudeDelta:0.01 };
	alert("current lat: " + latitude + "\n" +  "current long: " + longitude);
	//var timeout = setTimeout(getAntipode("antipode", latitude,longitude ),30000);
	getAntipode("antipode", latitude,longitude );
	return;
 });

$.index.open();