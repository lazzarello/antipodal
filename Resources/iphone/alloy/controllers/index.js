function Controller() {
    function report(evt) {
        Ti.API.info("Annotation " + evt.title + " clicked, id: " + evt.annotation.myid);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.mapview = Alloy.Globals.Map.createView({
        width: Ti.UI.FILL,
        height: Ti.UI.FILL,
        mapType: Alloy.Globals.Map.NORMAL_TYPE,
        animate: true,
        regionFit: true,
        userLocation: true,
        id: "mapview",
        ns: "Alloy.Globals.Map"
    });
    $.__views.index.add($.__views.mapview);
    report ? $.__views.mapview.addEventListener("click", report) : __defers["$.__views.mapview!click!report"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var getAntipode = function(title, lat, lon) {
        0 > lon ? lon += 180 : lon > 0 ? lon -= 180 : alert("you have no lat or long, are you sure you are on earth?");
        this.title = title;
        this.coords = {
            latitude: -1 * lat,
            longitude: lon
        };
        alert("new lat: " + coords.latitude + "\n" + "new long: " + coords.longitude);
        $.mapview.region = {
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 20,
            longitudeDelta: 20
        };
        return this.coords;
    };
    Ti.Geolocation.purpose = "Find my antipode";
    Titanium.Geolocation.getCurrentPosition(function(e) {
        var latitude;
        var longitude;
        if (e.error) {
            alert("cannot get your location");
            return;
        }
        longitude = e.coords.longitude;
        latitude = e.coords.latitude;
        $.mapview.region = {
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: .01,
            longitudeDelta: .01
        };
        alert("current lat: " + latitude + "\n" + "current long: " + longitude);
        getAntipode("antipode", latitude, longitude);
        return;
    });
    $.index.open();
    __defers["$.__views.mapview!click!report"] && $.__views.mapview.addEventListener("click", report);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;