var m = require('mithril')





var HomepageHead = {}

//controller
HomepageHead.controller = function() {};

//view
HomepageHead.view = function(ctrl) {
    return [
        m('meta', {description: "Best links on the internet"})
    ]
};





var HomepageBody = {}

//controller
HomepageBody.controller = function() {};

//view
HomepageBody.view = function(ctrl) {
    console.log("running")
    return m('p', 'Hello World')
};





module.exports = {
    head: HomepageHead,
    body: HomepageBody,
}