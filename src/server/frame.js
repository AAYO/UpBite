var m = require('mithril')
var render = require('mithril-node-render');

var Modal = require('Client/Components/Modal')


frame = function(content){
    return render([
        m('!doctype', {html: true}),
        m('html', [
            m('head', [
                m('meta', {description: "Best links on the internet"}),
                m('script', {src:"client.bundle.js", type: "application/javascript"}),
                m('link', {href:"app.css", rel: "stylesheet"}),
                // TODO allow custom head extensions
            ]),
            m('body', [
                m.component(Modal),
                m('p', 'from base layout'),
                m('div', {id:'body', role:'body'}, content)
            ])
        ])
    ])
}

module.exports = frame
