var runServer = function() {
var http = require('http');
var fs = require('fs');

http.createServer(
    function(req,res)
    {
        if (req.url === '/api')
        {
            res.writeHead(200, {
                'Content-Type':'application/json'
            })
            var data = {
                name: 'Shaw',
                age: 28
            }
            res.end(JSON.stringify(data));
        }
        
        else if (req.url === '/')
        {
            res.writeHead(200, {
                'Content-Type':'text/html'
            })
            var html = fs.readFileSync(__dirname + "/index.html", 'utf8');
            var name = 'Shaw';
            html = html.replace('{ Name }',name);
            res.end(html);
        }
        else
        {
        res.writeHead(404);
        res.end('404: Not Found!');
        }

    }
).listen(1337, '127.0.0.1');

}

module.exports = runServer;