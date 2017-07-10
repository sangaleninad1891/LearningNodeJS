var http = require('http');

http.createServer(function (req, res) {
  // writeHead (status_code, object containing response header)
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8080);