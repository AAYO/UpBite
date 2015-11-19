var m = require('mithril')


var Modal = require('./Components/Modal/Modal')
var Homepage = require('./States/Homepage/Homepage')


var router = {
    '/': Homepage,
}

var Router = function(isServer){
	
	var routerObject = {}
	
	for(var key in router){

		if(isServer){

			var HeadDefaults = require('../Server/Head-Defaults/Head-Defaults')

			routerObject[key] = [
				m('!doctype', {html:true}),
				m('html', [
					m('head', [
						HeadDefaults,
						router[key].head
					]),
					m('body', [
						m.component(Modal),
						m('div', {id:'body', role:'body'}, [
							router[key].body
						])
					])
				])
			]
		}

		else{
			routerObject[key] = router[key].body
		}
	}

	return routerObject
}

    
module.exports = Router