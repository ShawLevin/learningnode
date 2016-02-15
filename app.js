var moment = require('moment');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

var server = require('./server');

server();