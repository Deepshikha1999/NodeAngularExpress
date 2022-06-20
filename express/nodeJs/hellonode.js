var http = require('http');
var date = require('./module1');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Todays Date and Time=" + date.myDateTime());
    res.write("<hr>"+req.url+"<hr>");
    var q = url.parse(req.url,true).query;
    var txt = q.year+" "+q.month;
    res.end(txt);
}).listen(8080);