var express=require('express');
var mongo=require('mongodb');
var url=require('url');
var http=require('http');
var markdown = require( "markdown" ).markdown;
var fs=require('fs');
var querystring=require('querystring');
var DIR_ROOT="/home/ubuntu/www";
var app=express();

var host="localhost";
var port="27017";
var mongoserver=new mongo.Server(host,port,{auto_connection:true});
var db=new mongo.Db('mongodb-yulblog',mongoserver,{safe:true});

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
res.end(JSON.stringify(err));
return;
}
res.writeHead(200);
res.end(data);
});
}).listen(0080);

console.log('http server start');
app.get('/allArticles',function(req,res){

db.open(function(err,db){
if(err) throw err;
else{

db.collection('articles',function(err,collection){

collection.find({}).sort({ id : -1 }).toArray(function(err,docs){
if(err) throw err;
else{
//console.log(docs);
res.setHeader("Access-Control-Allow-Origin", "*");
res.statusCode = 200;
res.json(docs);
db.close();
}
});

});

}
});

});
app.get('/article/:id?',function(req,res){

//console.log(req.params.id);
db.open(function(err,db){
if(err) throw err;
else{

db.collection('articles',function(err,collection){
//默认获得的数据就是字符串，应该强制转换为数字，来对应数据库中的数字.
collection.find({id:parseInt(req.params.id)},{limit:1}).toArray(function(err,docs){
if(err) throw err;
else{
//console.log(docs);
res.setHeader("Access-Control-Allow-Origin", "*");
res.statusCode = 200;
res.json(docs);
db.close();
}
});

});

}
});

});
app.get('/search/:content?',function(req,res){

db.open(function(err,db){
if(err) throw err;
else{

db.collection('articles',function(err,collection){

collection.find({id:parseInt(req.params.content)}).toArray(function(err,docs){
if(err) throw err;
else{
//console.log(docs);
res.setHeader("Access-Control-Allow-Origin", "*");
res.statusCode = 200;
res.json(docs);
db.close();
}
});

});

}
});

});
app.post('/postarticle',function(req,res){

req.on('data',function(data){
var obj=querystring.parse(data.toString());
//console.log(obj.content);
db.open(function(err,db){
if(err) throw err;
else{

db.collection('articles',function(err,collection){
var timestamp=new Date().getTime();
collection.insert({title:obj.title,subscribe:obj.subscribe,author:obj.author,content: markdown.toHTML( obj.content ) ,updatetime:obj.updatetime,id:timestamp},function(err,docs){
if(err) throw err;
else{
//console.log(docs);
res.statusCode=200;
res.setHeader("Access-Control-Allow-Origin", "*");
res.json(docs);
res.end();
db.close();
}
});

});

}
});

});
});

var exserver=app.listen(8000,function(){
console.log("server start");
});

