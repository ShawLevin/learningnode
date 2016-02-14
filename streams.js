var fs = require('fs'); //File Streams
var zlib = require('zlib'); //Zip

var readable = fs.createReadStream(__dirname + '/content/lorem.txt',
{
    encoding:'utf8',
    highWaterMark: 8*1024 //Override the default buffer size so we can see chunking.
})

var writable = fs.createWriteStream(__dirname+'/content/lorem_piped.txt');

/*
//Ditch this it is built in to node - see pipe below.
readable.on('data', //looks like the event emitter looking for the data event.
    function(chunk)
    {
        console.log(chunk.length);
        writable.write(chunk);
    }
)*/

readable.pipe(writable); //We can use pipe instead of making our own data writing event.

var compressed = fs.createWriteStream(__dirname+'/content/lorem_zipped.txt.gz');
var gzip = zlib.createGzip(); //Transform stream so we can compress the data.

//First pipe to zip the data then pipe to the gz writter. 
//Compressed write isn't doing any compression. It is just writing the compressed bits.
readable.pipe(gzip).pipe(compressed); 
