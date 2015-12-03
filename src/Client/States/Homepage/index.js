var m = require('M')


var fake_db = function(dog) {
    var deferred = m.deferred();
    setTimeout(function() {
        deferred.resolve(dog);
    }, 3000);
    return deferred.promise;
}


Hello = {}

Hello.controller = function(args, done) {
    var scope = {};
    scope.dog = m.prop("Mr Still Loading");
    // fake_db(args.dog).then(function(dog) {
    //     scope.dog(dog);
    //     // A real DB call with m.request does this for us.
    //     // m.redraw();
    // })
    m.request({method: "GET", url: "https://graph.facebook.com/v2.2/10206432093535262", background:true}).then(function(user){
        console.log('user')
    }, function(error){
        console.log(error)
    })
    return scope;
}

Hello.view = function(scope) {
    return m('div', [
        m('p', 'My dog is ' + scope.dog())
    ]);
}

controller = function() {
    return {};
}

view = function(scope) {
    return [
        m.component(Hello, {dog: 'Mr Pebbles'}),
        m('a', {
            href: '/test',
            config: m.route
        }, 'Test')
    ]
}


module.exports = {
      controller: controller,
      view: view
}
