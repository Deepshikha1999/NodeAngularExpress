var http = require('http');
var fs = require('fs');
var fomidable = require('formidable');
const formidable = require('formidable');

http.createServer(function(req,res){
    fs.readFile('form.html',function(err,data)
    {
        if(err)
        {
            res.writeHead(404,{'Content-Type':'text/html'})
            return res.end("File Not Found");
        }
        if(req.url=='/fileupload')
        {
            var form = new formidable.IncomingForm();
            form.parse(req, function (err, fields, files)
            {
                var oldpath = files.filetoupload.filepath;
                var newpath = 'C:/ibm js/express/nodeJs/'+
                files.filetoupload.originalFilename;
                fs.rename(oldpath,newpath,function(err){
                    if(err) throw err;
                    res.write('File uploaded and moved!');
                    res.end();
                });

            });
        }
        else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
        }
    })
}).listen(8080);