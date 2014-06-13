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
        id: "mapview",
        ns: "Alloy.Globals.Map"
    });
    $.__views.index.add($.__views.mapview);
    report ? $.__views.mapview.addEventListener("click", report) : __defers["$.__views.mapview!click!report"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.mapview.userLocation = true;
    $.mapview.regionFit = true;
    $.mapview.regionFit = Alloy.Globals.Map.NORMAL_TYPE;
    var latitude;
    var longitude;
    var callback = function(e) {
        if (e.error) {
            alert("cannot get your location");
            return;
        }
        longitude = e.coords.longitude;
        latitude = e.coords.latitude;
    };
    Titanium.Geolocation.getCurrentPosition(callback);
    $.index.open();
    __defers["$.__views.mapview!click!report"] && $.__views.mapview.addEventListener("click", report);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;