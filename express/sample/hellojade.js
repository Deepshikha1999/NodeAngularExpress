const express = require('express');
var app = express();

app.set("view engine","jade");

app.get('/',(req,res)=>res.render('hello'));

app.listen(9000,()=>console.log("server started"));