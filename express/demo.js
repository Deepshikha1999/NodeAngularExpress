var express =require('express');
var app = express();

var greet = require('./greeting');

app.use('/greet',greet);

app.listen(9000,function()
{
    console.log("server started...");
});