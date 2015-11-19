var m = require('mithril')


HeadDefaults = {}

HeadDefaults.controller = function(elements){}

HeadDefaults.view = function(defaults, insertions){
	return [
		m('script', {src:"bundle.js", type:"application/javascript"})
	]
}

module.exports = HeadDefaults

    
