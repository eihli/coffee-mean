(function() {
  var handleRequest, http, ip, port, server;

  http = require('http');

  port = 8080;

  ip = '127.0.0.1';

  handleRequest = function(req, res) {
    switch (req.url) {
      case "/":
        res.end('got to root');
        break;
      default:
        res.end("didn't get to root");
    }
    return res.end("it works! path hit! " + req.url);
  };

  server = http.createServer(handleRequest);

  server.listen(port, function() {
    return console.log("Listening on port " + port);
  });

}).call(this);
