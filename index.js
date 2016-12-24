/**
 * Created by yul on 16-10-28.
 */
var express=require('express');
var mongo=require('mongodb');
var url=require('url');
var http=require('http');
var cookieParser=require('cookie-parser');
var bodyParser=require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: 'views/img/' })

var fs=require('fs');
var querystring=require('querystring');
var DIR_ROOT="/home/ubuntu/Blog_BE/views";
var app=express();

var host="localhost";
var port="27017";
var mongoserver=new mongo.Server(host,port,{auto_connection:true});
var db=new mongo.Db('mongodb-yulblog',mongoserver,{safe:true});


 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:false}));

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
                        console.log(docs);
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

                collection.find({title:req.params.content}).toArray(function(err,docs){
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
    // req.on('data',function(data){
    //     content+=data.toString();
    //     console.log('ondata');
    // });

    // req.on('end',function () {
        var obj=req.body;
        console.log(obj.content);

        db.open(function(err,db){
            if(err) throw err;
            else{

                db.collection('articles',function(err,collection){
                    var timestamp=new Date().getTime();
                    collection.insert({title:obj.title,subscribe:obj.subscribe,author:obj.author,content: obj.content ,updatetime:obj.updatetime,id:timestamp},function(err,docs){
                        if(err) throw err;
                        else{
                            console.log(docs);
                            res.statusCode=200;
                            res.setHeader("Access-Control-Allow-Origin", "*");
                            res.json(docs);
                            db.close();
                        }
                    });

                });

            }
        });

    // })
});

app.post('/revisearticle',function(req,res){
  var id=req.body.id;
  var obj=req.body;
  console.log(id);

  db.open(function(err,db){
      if(err) throw err;
      else{

          db.collection('articles',function(err,collection){
              collection.update({id:parseInt(id)},{$set:{title:obj.title,subscribe:obj.subscribe,author:obj.author,content: obj.content ,updatetime:obj.updatetime}},function(err,docs){
                  if(err) throw err;
                  else{
                      console.log(docs);
                      res.statusCode=200;
                      res.setHeader("Access-Control-Allow-Origin", "*");
                      res.json(docs);
                      db.close();
                  }
              });

          });

      }
  });

})

app.post('/deletearticle',function(req,res){
    var id=req.body.id;
    db.open(function(err,db){
        if(err) throw err;
        else{

            db.collection('articles',function(err,collection){
                var timestamp=new Date().getTime();
                collection.remove({id:parseInt(id)},function(err,docs){
                    if(err) throw err;
                    else{
                        console.log(docs);
                        res.statusCode=200;
                        res.setHeader("Access-Control-Allow-Origin", "*");
                        res.json(docs);
                        db.close();
                    }
                });

            });

        }
    });

})

app.post('/postfile',upload.array('img', 1),function (req,res,next) {
    if(req.files){
    var tmp_path = req.files[0].path;
      // 指定文件上传后的目录 - 示例为"images"目录。
      var target_path = 'views/img/' + req.files[0].originalname;
      var res_path='/img/' + req.files[0].originalname;
      // 移动文件
      var extName = '';  //后缀名

      switch (req.files[0].mimetype) {
        case 'image/pjpeg':
          extName = 'jpg';
          break;
        case 'image/jpeg':
          extName = 'jpg';
          break;
        case 'image/png':
          extName = 'png';
          break;
        case 'image/x-png':
          extName = 'png';
          break;
      }
      if(extName.length == 0){
          res.statusCode=202;
          res.send('请上传图片格式');
          return;
      }
      fs.rename(tmp_path, target_path, function(err) {
        if (err) throw err;
        // 删除临时文件夹文件,
        fs.unlink(tmp_path, function() {
           if (err) throw err;
           res.setHeader("Access-Control-Allow-Origin", "*");
           res.send(res_path);
        });
      });
   }else{
     res.send('please upload a file');
   }

})



var exserver=app.listen(8000,function(){
    console.log("server start");
});
