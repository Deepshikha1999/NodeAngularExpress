var fs = require('fs');

fs.writeFile("text3.txt","can u be my friend",function(err){
    if(err)throw err;
    console.log("Saved");
})