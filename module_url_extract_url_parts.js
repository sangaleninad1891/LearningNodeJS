var url = require('url');
var address = 'https://localhost:8080/myfile1.html?year=2017&month=july';
var q = url.parse(address, true);

console.log('Operational URL: ' + address);
console.log('Host: ' + q.host);
console.log('Pathname: ' + q.pathname);
console.log('Search: ' + q.search);
console.log(q.query);

var qdata = q.query;
console.log('parameter month value: ' + qdata.month);