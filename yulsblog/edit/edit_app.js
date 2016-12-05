/**
 * Created by �� on 2016/8/9.
 */
if(getCookie('login')!='ok') $('#modal-container-881436').modal('show')
//var Bmob=require('src/blogmodel.js');
//Bmob.init();
var url=location.search;
var revise=false;
var loginPanel=new Vue({
    el:'#modal-container-881436',
    data:{
        name:false,
        password:false,
        nameok:false,
        passwordok:false,
        ok:true
    }
});
var article=new Vue({
    el:'#article',
    data:{
        title:'',
        subscribe:'',
        author:'',
        content:'',
        updatetime:'',
        precontent:''
    },
    methods:{
	previewMarkdown: function(){
	  this.precontent=Markdown.toHTML(this.content);
	},
	updateArticle: function (){
    if(!revise){
      blogmodel.postArticle(this.title,this.subscribe,this.author,this.content,this.updatetime,function(data,status){
      if(status=="success"){
      alert("添加成功！");
      location.href="http://yulstudio.cn";
      }
    });
    }else{
      blogmodel.reviseArticle(url.split("?")[2],this.title,this.subscribe,this.author,this.content,this.updatetime,function(data,status){
        if(status=="success"){
        alert("修改成功！");
        location.href="http://yulstudio.cn";
        }
      })
    }
            //Bmob.updateBlog(this.title,this.content,this.author);
  }
   }
});
if(url.split("?")[1]=='revise'){
var id=url.split("?")[2];
datas=blogmodel.getArticle(id,function(data){
console.log(JSON.stringify(data));
document.title =data[0].title;
article.title=data[0].title;
article.author=data[0].author;
article.subscribe=data[0].subscribe;
article.content=data[0].content;
article.precontent=Markdown.toHTML(data[0].content);
revise=true;
})
}
var interval=setInterval(function(){
var DATE=new Date();
    var year    =   DATE.getFullYear();
    var month   =   DATE.getMonth()+1;
    var date    =   DATE.getDate();
    var hour    =   DATE.getHours();
    var minute  =   DATE.getMinutes();
    var second  =   DATE.getSeconds();
article.updatetime=year+"-"+month+"-"+date+" "+hour+":"+minute+":"+second;
},1000);
loginPanel.$watch('nameval',function(){
    if(this.nameval=="yul"){this.name=false,this.nameok=true}else{ this.name=true}},function(){
    });
loginPanel.$watch('passwordval',function(){ if(this.passwordval=="yuliang"){this.password=false,this.passwordok=true;
if(this.nameok==true){$('#modal-container-881436').modal('hide');setCookie('login','ok');}
}else{ this.password=true}},function(){});
function login(name,password){
    //Bmob.logIn(name,password)
}
function setCookie(name,value)
{
var Days = 5;
var exp = new Date();
exp.setTime(exp.getTime() + Days*24*60*60*1000);
document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg))
return unescape(arr[2]);
else
return null;
}
