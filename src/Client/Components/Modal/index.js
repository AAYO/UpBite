var m = require('mithril')

require('./Modal.sass')


var ModalItem = {}

ModalItem.view = function(template){
	return m('div.modal-backdrop', [
		m('div.modal-alignment-vertical', [
			m('div.modal-alignment-horizontal', 'foo')
		])
	])
}


var Modal = {}

Modal.controller = function() {};

Modal.view = function(scope) {
    return [
       	m.component(ModalItem)
    ]
};


module.exports = Modal
