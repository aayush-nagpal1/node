const http = require('http');

http.createServer(function(req,res){
    res.write("<h1>This the response from server</h1><br/><h2>An html response from server</h2>");
    res.end();
}).listen(3000);