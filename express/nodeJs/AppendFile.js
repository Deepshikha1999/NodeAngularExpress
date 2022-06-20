var fs = require('fs');

fs.appendFile('newFile.txt','\n mind me telling you',function(err){
    if(err)throw err;
    console.log('Saved!');
});

fs.appendFile('file2.txt','hi how are you\ni m fine thank you ',function(err){
    if(err)throw err;
    console.log("saved!");
});