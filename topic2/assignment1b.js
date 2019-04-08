const http = require('http');

http.createServer(function(req,res){
    res.write("This the response from server");
    res.end();
}).listen(3000);