var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/content/lorem.txt',
{
    encoding:'utf8', highWaterMark: 8*1024
})

var writable = fs.createWriteStream(__dirname+'/content/lorem_copy.txt');

readable.on('data', function(chunk)
{
    console.log(chunk.length);
    writable.write(chunk);
})