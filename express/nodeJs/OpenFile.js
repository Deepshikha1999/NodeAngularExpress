var fs = require('fs');
var greet = "hello";

fs.open('file4.txt','w',function(err,txt){
    if(err)throw err;
    console.log('Saved!');
})

var hello=(req,res)=>{
   var hola = greet;
   console.log(hola);
}

exports.hello = hello;