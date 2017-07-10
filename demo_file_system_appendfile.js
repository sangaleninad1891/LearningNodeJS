var fs = require('fs');

fs.appendFile('myfile1.txt', 'this is my content which will be added in the file!', function(err) {
	if(err) throw err;
	console.log('Data is Saved in file!');
});