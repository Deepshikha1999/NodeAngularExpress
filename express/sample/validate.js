const express = require('express');
var app = express();

app.set("view engine","pug");

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=> res.render('login'));

app.post('/validate',(req,res)=>
{
    var uname=req.body.username;
    var passwd=req.body.password;

    res.render('success',{
        name:uname,
        pass:passwd
    })
})

app.listen(9000,()=>console.log("server started"));