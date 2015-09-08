var unload = require('sdk/system/unload');
var NewTabURL = require('resource:///modules/NewTabURL.jsm').NewTabURL;

var bookmarksPanelURL = 'chrome://browser/content/bookmarks/bookmarksPanel.xul';
NewTabURL.override(bookmarksPanelURL);

unload.when(function() {
	NewTabURL.reset();
});
