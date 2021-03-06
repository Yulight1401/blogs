/**
 * Created by yul on 16-10-1.
 */
import yul_slider from "./yul_slider";
//import yul_scrollsmoothly from "./es6/yul_scrollsmoothly"
import yul_floatinfo from "./yul_floatinfo"
import yul_flipimg from "./yul_flipimg"
import yul_lightbox from "./yul_lightbox"
//require("./css/yul_blog_main.sass");
var $=function (id) {
    return document.getElementById(id);
}
let flipimg=new yul_flipimg($("org"),$("orgimg"),$("flipimg"));
let lightbox=new yul_lightbox();
let slider=new yul_slider(function (ele) {//aniin
switch (ele.id){
    case "homeschool":
        if($("hscontent").className=="content"){
            $("hscontent").className="content animated fadeInUp";
        };
        break;
    case "travel":
        if($("tvcontent").className=="content"){
            $("map").className="animated fadeInRight";
            $("tvcontent").className="content animated fadeInLeft";
        };
        break;
    case "photography":
        if($("pgcontent").className=="content container"){
            $("pgcontent").className="content container animated fadeIn";
            let time=0;
            for(let img of $("montage").children){
                img.className="animated flipInY";
                img.style.cssText="animation-delay:"+time+"ms";
                time+=100;
            }
        };
        break;
    case "design":
        if($("dscontent").className=="content"){
            $("dscontent").className="content animated fadeInRight";
            $("showcase").className="animated fadeInLeft";
        };
        break;
    case "speech":
        if($("spcontent").className=="content"){
            $("spcontent").className="content animated fadeInLeft";
        };
        break;
}
},function (ele) {//aniout
    switch (ele.id){
        case "homeschool":
            $("hscontent").className="content";
            break;
        case "travel":
            $("map").className="";
            $("tvcontent").className="content";
            break;
        case "photography":
            $("pgcontent").className="content container";
            for(let img of $("montage").children){
                img.className="";
            }
            break;
        case "design":
            $("showcase").className="";
            $("dscontent").className="content";
            break;
        case "speech":
            $("spcontent").className="content";
            break;
    }
});
let float=new yul_floatinfo($("map"),$("yul_floatinfo"));
document.body.onresize=function () {
    slider.setSectionshw();
}