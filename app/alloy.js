// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
var MapModule = require('ti.map');
if (Titanium.Platform.name == 'android') {
	var rc = MapModule.isGooglePlayServicesAvailable();
	switch (rc) {
    case MapModule.SUCCESS:
        Ti.API.info('Google Play services is installed.');
        break;
    case MapModule.SERVICE_MISSING:
        alert('Google Play services is missing. Please install Google Play services from the Google Play store.');
        break;
    case MapModule.SERVICE_VERSION_UPDATE_REQUIRED:
        alert('Google Play services is out of date. Please update Google Play services.');
        break;
    case MapModule.SERVICE_DISABLED:
        alert('Google Play services is disabled. Please enable Google Play services.');
        break;
    case MapModule.SERVICE_INVALID:
        alert('Google Play services cannot be authenticated. Reinstall Google Play services.');
        break;
    default:
        alert('Unknown error.');
        break;
	}
}
