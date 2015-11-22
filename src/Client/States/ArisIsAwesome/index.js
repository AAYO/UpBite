var m = require('mithril')


controller = function(params) {};

view = function(scope) {
    return [
        m('p', 'Fresh as fuck'),
        m('a', {
            href: '/',
            config: m.route
        }, 'home page')
    ]
}

module.exports = {
      controller: controller,
      view: view
}
