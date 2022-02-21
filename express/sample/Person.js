const express = require('express');
const res = require('express/lib/response');
var app=express();

app.set("view engine","pug");

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>res.render("person"));

app.post('/save',(req,res)=>{
    var params = req.body;
    res.render("personresponse",{
    name:params.name,
    age:params.age,
    city:params.city});
}
);

app.listen(9000,()=>console.log("server started"));