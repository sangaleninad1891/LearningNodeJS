var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  
  // get url from borwser which is nothing but a request url
  var q = url.parse(req.url, true); 
  
  // wil return param after domain which is a filename
  var filename = "." + q.pathname;
  
  fs.readFile(filename, function(err, data) {
    if(err) {
	  res.writeHead(404, {'Content-Type' : 'text/html'});
	  return res.end("404 not found");
	}
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(data);
	return res.end();
  });
}).listen(8080);