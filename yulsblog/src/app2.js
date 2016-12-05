/**
 * Created by �� on 2016/8/8.
 */
// �������ǵ� Model
//var blogModel=require("blogmodel.js");
//blogModel.init();
var exampleData = {
    title: 'Vue.js',
    author:'yul',
    content:'hello world',
    updatetime:'2016-08-12',
    objectid:'256'
}
var exampleData1 = {
    articles:[
     {title:'hello,vuejs',content:'first time',objectid:'123'},
     {title:'hello,mynewblog',content:'second',objectid:'256'},
    ]
}
// ����һ�� Vue ʵ���� "ViewModel"
// ������ View �� Model
// var headArticle = new Vue({
//     el: '#head-article',
// })
var otherArticle=new Vue({
    el:"#content_content",
    methods:{
        openurl(url){
            document.getElementById("blog_content").style.display="block";
            var blog_width=document.getElementById("blog_content").clientWidth;
            document.getElementById("blog_content").style.cssText="display:block;transform:translate("+(-blog_width)+"px,0px)";
            document.getElementById("content_bar").setAttribute("class","bar_over");
            blogmodel.getArticle(url,function (data) {
                document.getElementsByClassName("blog_title")[0].innerHTML=data[0].title;
                document.getElementsByClassName("blog_des")[0].innerHTML=data[0].author;
                document.getElementsByClassName("blog_content")[0].innerHTML=data[0].content;
            })
            blog_state="open";
        }
    }
})
blogmodel.getAllArticles(function(data){
//console.log(JSON.stringify(data));
//var first=data[0];
//console.log(JSON.stringify(first));
//data.shift();
//console.log(JSON.stringify(data));
var others={
    articles: data
};
//headArticle.$data=first;
otherArticle.$data=others;
});