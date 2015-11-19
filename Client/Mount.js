var m = require('mithril')

var Router = require('./Router')

m.route.mode = 'pathname';

var readyStateCheckInterval = setInterval(function() {
	console.log('Ready State: ' + document.readyState)
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);
        m.route(document.getElementById('body'), '/', Router());
    }
}, 0);