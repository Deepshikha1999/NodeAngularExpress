var http = require('http')
var fs = require('fs');
var hello = require('./OpenFile');
var csv = require('csv');
const { stringify } = require('querystring');
const { json } = require('express/lib/response');

http.createServer(function(req,res)
{
    fs.readFile('C:/Users/002UHM744/Documents/Book1.csv',
    function(err,data)
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        //res.write(data);
        var x = data;
        console.log(hello.hello);
        //var y = x.split("\n");
        res.write(x);
        return res.end();
    });
}).listen(8080);

var readStream = fs.createReadStream("C:/Users/002UHM744/Documents/Book1.csv");
var csvStream=csv.parse();

csvStream.on("data",function(data)
{
    var x = JSON.stringify(data);
    var z = x.replace("[","");
    z = z.replace("]","");
    var y = z.split(",")
    console.log(y[1]);
}).on("end", function()
{
    console.log("done");
}).on("error",function(error)
{
    console.log("error");
});

readStream.pipe(csvStream);
