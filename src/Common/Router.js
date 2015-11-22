var m = require('mithril')


var Modal = require('Client/Components/Modal')
var Homepage = require('Client/States/Homepage')
var ArisIsAwesome = require('Client/States/ArisIsAwesome')


var router = {
    '/': Homepage,
    '/test': ArisIsAwesome,
}

module.exports = router
