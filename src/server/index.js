var each = require('lodash').each;
var render = require('mithril-node-render');
var express = require('express');

var Router = require('Common/Router')
var Frame = require('./frame')


var app = express();
app.use(express.static('./dist'));
// b = require('browserify-middleware')
//app.get('/bundle.js', b('./src/Client/index.js'));


each(Router, function(module, route) {
    app.get(route, function(req, res, next) {
        function send(scope) {
            res.send(frame(module.view(scope)));
            scope && scope.onunload && scope.onunload();
        }

        //sync
        if (module.controller.length < 2) {
            return send(module.controller(req.params));
        }

        // async
        return module.controller(req.params, function(err, scope) {
            if (err) {
                return next(err);
            }
            send(scope);
        });
    });
});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
