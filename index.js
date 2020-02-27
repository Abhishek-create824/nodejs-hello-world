var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = 4000;
server.listen(port);

console.log("Server running at http://34.209.79.39:%d", port);
