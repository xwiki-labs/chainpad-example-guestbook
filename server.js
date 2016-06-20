/*
    globals require console
*/
var Express = require('express');
var ChainPadServer = require('chainpad-server');
var Http = require('http');

var app = Express();
app.use('/', Express.static(__dirname + '/www'));
app.use('/bower_components', Express.static(__dirname + '/bower_components'));

var server = Http.createServer(app);

var chainPadServerConfig = {

    // *optional* if not defined, a new server will be created
    // and returned by ChainPadServer.launch()
    httpServer: server,

    // *optional* one of './storage/amnesia', './storage/lvl' Default: amnesia
    // NOTE: amnesiadb will lose all information every time to restart the server !
    storage: undefined,

    // *optional* port to bind websocket on.
    // Default: reuse the httpServer
    websocketPort: undefined,

    // *optional* array of files containing private and public keys if https is desired and
    // httpServer is not defined
    privKeyAndCertFiles: undefined,

    // *optional* URL path to the websocket. Default: /cryptpad_websocket
    websocketPath: undefined,

    // *optional* log incoming/outgoing messages to stdout. Default: false
    logToStdout: undefined,
};

ChainPadServer.launch(chainPadServerConfig);
server.listen(3000);
console.log("Navigate your browser to http://localhost:3000/ and Sign The Guestbook!");
