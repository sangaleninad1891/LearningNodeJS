/* 
 * if file exists then write funciton 
 * will overwrite the existing file with new content
 */
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});