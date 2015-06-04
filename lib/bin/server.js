(function() {
  var handleRequest, http, ip, port, server;

  http = require('http');

  port = 8080;

  ip = '127.0.0.1';

  handleRequest = function(req, res) {
    return res.end("it works! path hit! " + req.url);
  };

  server = http.createServer(handleRequest);

  server.listen(port, function() {
    return console.log("Listening on port " + port);
  });

}).call(this);
