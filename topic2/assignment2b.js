const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    var options = {
        host: 'www.google.com',
        port: 80,
        path: '/index.html'
    };
    http.get(options, function (res) {
        var content = "";
        console.log(res.statusCode);
        res.setEncoding("utf8")
        res.on('data', function (chunk) {
            fs.appendFileSync('google.html', chunk, function (err) {
                console.log(err);
            })
        })
    })
    res.end();
}).listen(3000);