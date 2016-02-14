var b = new Buffer('Hello','utf8');

console.log(b);
console.log(b.toString()); //UTF8
console.log(b.toJSON()); //Unicode numbers.

b.write('wo');
console.log(b.toString()); //Characters are overwritten.

console.log('--------------------FILES--------------------');
var fs = require('fs');

var readerSync = fs.readFileSync(__dirname + '/names.txt', 'utf8'); //UTF8 param gives me back text.

console.log(readerSync);

var readerAsync = fs.readFile(__dirname + '/names.txt', 'utf8',
function(err, data)
{
console.log(data);    //This ends up executing after the done because the async.
});


console.log('Done!');