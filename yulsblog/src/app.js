/**
 * Created by �� on 2016/8/8.
 */

var headArticle = new Vue({
    el: '#head-article',
})
var otherArticle=new Vue({
    el:"#otherarticle-container",
})
blogmodel.getAllArticles(function(data){
console.log(JSON.stringify(data));
var first=data[0];
console.log(JSON.stringify(first));
data.shift();
console.log(JSON.stringify(data));
var others={
    articles: data
};
headArticle.$data=first;
otherArticle.$data=others;
});
