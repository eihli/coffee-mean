http = require 'http'
port = 8080
ip = '127.0.0.1'

handleRequest = (req, res) ->
  res.end("it works! path hit! #{req.url}")
server = http.createServer(handleRequest)

server.listen(port, ->
  console.log("Listening on port #{port}")
)
