var fs = require('fs');

fs.unlink('file4.txt',function(err){
    if(err) throw err;

    console.log("deleted");
});