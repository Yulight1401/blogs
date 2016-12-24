var http=require('http');
var url=require('url');
var fs=require('fs');
var DIR_ROOT="/home/ubuntu/Blog_BE/views";
var server=http.createServer(function (req,res){
    var urlObj=url.parse(req.url,true,false);
//console.log(urlObj.pathname);
    if(urlObj.pathname=="/"){
        var pathname="/index.html";
    }
    else{var pathname=urlObj.pathname};
    fs.readFile(DIR_ROOT+pathname,function(err,data){
        if(err){
            res.writeHead(404);
            res.end('没有找到您的网页哦');
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}).listen(0080);

console.log('http server start');
