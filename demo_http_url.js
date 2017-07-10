var http = require('http');

http.createServer(function (req, res) {
	
    res.writeHead(200, {'Content-Type': 'text/html'});
    /* returns url after domain name. 
	 * if the accesing url is "http://localhost:8080/pages/contents/fields" 
	 * then the ourput wil be "/pages/contents/fields"
	*/
	res.write(req.url);
    res.end();
}).listen(8080);