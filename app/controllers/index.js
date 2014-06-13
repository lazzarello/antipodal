function doClick(e) {
    alert($.label.text);
}

var lon = 1;
if ( lon < 0 ) {
  longe = lon + 180;
} else if (lon > 0) {
  lon = lon - 180;
} else {
	print("you're on the equator");
}

$.index.open();
