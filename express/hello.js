var express = require('express');
var app = express();

app.get('/',function(re,res)
{
    res.send("hello and welcome to express.js")
})


app.get('/greet/:name',function(req,res)
{
    res.send("Hello, "+req.params.name);
})

app.post('/hello',function(req,res)
{
    res.send("Hello for a psot request");
})

app.all('/hola',function(req,res)
{
    res.send("Hello, any http method is fine");
})

var server = app.listen(9000,function(){
    console.log('express server running on port 9000');
});