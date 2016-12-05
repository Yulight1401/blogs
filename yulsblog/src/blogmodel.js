/**
 * Created by yul on 2016/8/8.
 * require jquery.js
 */
var blogmodel=(function(){
var _ROOT_URL="http://119.29.218.79:8000";
var allArticles=function(callback){
$.getJSON(_ROOT_URL+"/allArticles",function(data,status){
callback(data);
});
};
var article=function(id,callback){
$.getJSON(_ROOT_URL+"/article/"+id,function(data,status,xhr){
callback(data);
});
};
var search=function(content,callback){
$.getJSON(_ROOT_URL+"/search/"+content,function(data,status){
callback(data);
});
};
var postarticle=function(title,subscribe,author,content,updatetime,callback){
$.post(_ROOT_URL+"/postarticle",{title:title,subscribe:subscribe,author:author,content:content,updatetime:updatetime},function(data,status){
callback(data,status);
});
};
var reviseArticle=function (id,title,subscribe,author,content,updatetime,callback) {
	// body...
$.post(_ROOT_URL+"/revisearticle",{id:id,title:title,subscribe:subscribe,author:author,content:content,updatetime:updatetime},function(data,status){
	callback(data,status);
})
}
var deleteArticle=function(id,callback){
	$.post(_ROOT_URL+'/deletearticle',{id:id},function(data,status){
		callback(data,status);
	})
}
return{
getAllArticles:allArticles,
getArticle:article,
getSearch:search,
postArticle:postarticle,
reviseArticle:reviseArticle,
deleteArticle:deleteArticle
}
})();
