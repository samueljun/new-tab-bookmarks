// Firefox SDK

var service = require('sdk/preferences/service');
var unload = require('sdk/system/unload');



var bookmarksPanel = 'chrome://browser/content/bookmarks/bookmarksPanel.xul';
service.set('browser.newtab.url', bookmarksPanel);

unload.when(function() {
	service.reset('browser.newtab.url');
});