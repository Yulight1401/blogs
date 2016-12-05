/**
 * Created by �� on 2016/8/9.
 */
var url,article,datas;
url = location.search;
datas=blogmodel.getArticle(url.split("?")[1],function(data){
console.log(JSON.stringify(data));
document.title =data[0].title;
article.$data=data[0];
article.afcontent=Markdown.toHTML(article.content);
});
article=new Vue({
    el:'#article',
    data:{
        afcontent:'',
        revise:true,
        delete:false,
        suredelete:true
    },
    methods:{
      deleteArticle: function(){
        $("#delete").hide();
        $("#suredelete").show();
      },
      sureDelete: function(){
        if(getCookie('login')=='ok'){
          blogmodel.deleteArticle(url.split("?")[1],function(data,status){
            if(status=="success"){
            alert("删除成功！");
            location.href="http://yulstudio.cn";
            }else{
            $("#suredelete").hide();
            $("#delete").show();
            alert("删除失败");
          }
          })
        }else{
          location.href="edit.html";
        }
      },
      reviseArticle: function(){
        location.href="edit.html?revise?"+url.split("?")[1];
      }
    }
})
function getCookie(name)
{
var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
if(arr=document.cookie.match(reg))
return unescape(arr[2]);
else
return null;
}
