var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Globals.Map = require("ti.map");

var rc = Alloy.Globals.Map.isGooglePlayServicesAvailable();

switch (rc) {
  case Alloy.Globals.Map.SUCCESS:
    Ti.API.info("Google Play services is installed.");
    break;

  case Alloy.Globals.Map.SERVICE_MISSING:
    alert("Google Play services is missing. Please install Google Play services from the Google Play store.");
    break;

  case Alloy.Globals.Map.SERVICE_VERSION_UPDATE_REQUIRED:
    alert("Google Play services is out of date. Please update Google Play services.");
    break;

  case Alloy.Globals.Map.SERVICE_DISABLED:
    alert("Google Play services is disabled. Please enable Google Play services.");
    break;

  case Alloy.Globals.Map.SERVICE_INVALID:
    alert("Google Play services cannot be authenticated. Reinstall Google Play services.");
    break;

  default:
    alert("Unknown error.");
}

Alloy.createController("index");