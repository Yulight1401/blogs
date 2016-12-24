'use strict'
var express = require('express')
var app = express();
var fs=require('fs');
var imageinfo=require('./imageinfo.js');

app.get('/imgs', function(req, res) {
	let json=[];
	fs.readdir('./views/img',function(err,files){
   	   console.log(files)
   	   for(let i in files){
   	   		let file=fs.readFileSync('./views/img/'+files[i]);
   	   		let info=imageinfo(file);
   	   		let a={src:files[i],width:info.width,height:info.height};
   	   		json.push(a);
   	   }
	   res.setHeader("Access-Control-Allow-Origin", "*");
           res.statusCode = 200;
	   res.json(json);
	})
});

var server = app.listen(3001, function() {
   console.log('listening on port %d', server.address().port);
})

