var http = require('http');
var dateandtime = require('./myfirstmodule');

http.createServer(function (req, res) {
    
	res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
	res.write('This is my first assignmetn in Node.js');
	res.write('Custom module - Current time: ' + dateandtime);
	res.end();
	
}).listen(8080);

