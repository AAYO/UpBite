var m = require('mithril')

// require('./Modal.sass')
if(typeof BROWSER !== 'undefined') require('./Modal.css')



var ModalItem = {}

ModalItem.view = function(template){
	return m('div.modal-backdrop', [
		m('div.modal-alignment-vertical', [
			m('div.modal-alignment-horizontal')
		])
	])
}



var Modal = {}

//controller
Modal.controller = function() {};

//view
Modal.view = function(ctrl) {
    return [
       	m.component(ModalItem)
    ]
};





module.exports = Modal