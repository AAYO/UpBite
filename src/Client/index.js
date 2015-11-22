var domready = require('domready');
var m = require('mithril')

var Router = require('Common/Router')

m.route.mode = 'pathname';

domready(function() {
  m.route(document.getElementById('body') , '/', Router);
});
