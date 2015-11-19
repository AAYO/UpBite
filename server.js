var render = require('mithril-node-render');
var m = require('mithril');
var express = require('express');
var app = express();

var Router = require('./Client/Router')

app.use(express.static('.'));

app.get('*', function (req, res) {
    res.send(render(Router(true)[req.originalUrl] ));
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
    
