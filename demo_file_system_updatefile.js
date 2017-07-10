var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('first Update!');
});

fs.appendFile('mynewfile1.txt', ' updated called second time.', function (err) {
  if (err) throw err;
  console.log('second Update!');
});