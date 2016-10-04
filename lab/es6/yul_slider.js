/**
 * Created by yul on 16-10-1.
 */
//获取所有section元素，根据element.getBoundingClientRect().top<10% 执行入场动画,bottom<10% 执行出场动画;所以要监听pc滑轮滚动和移动touch事件
    //根据移动,pc来执行不同初始化任务.
    // 动画以class来管理
var $=function (id) {
    return document.getElementById(id);
}
class ys{
    constructor(aniIn,aniOut){
        let allsections=$("yulslider").children;
        let t=document.documentElement.scrollTop||document.body.scrollTop;
        let aniIn=aniIn;
        let aniOut=aniOut;
        this.setSectionshw();
    }
    setSectionshw(){
        let winHeight=window.innerHeight;
        let winWidth=window.innerWidth;
        for(let i=0;i<this.allsections.length;i++){
            this.allsections[i].height=winHeight;
            this.allsections[i].width=winWidth;
        }
    }
    listenTouch(){
        window.event.preventDefault();
    }
    listenScroll(){
        let yulslider=this;
        window.onscroll=function () {
            for(let i=0;i<yulslider.allsections.length;i++){
                if(yulslider.ifShow(yulslider.allsections[i])=="show"){
                    yulslider.eleInani(yulslider.allsections[i]);
                }else if(yulslider.ifShow(yulslider.allsections[i])=="out"){
                    yulslider.eleOutani(yulslider.allsections[i]);
                }
            }
        }
    }
    notifySections(ele,func){

    }
    ifShow(ele){
        let bottom= ele.getBoundingClientRect().bottom;
        let top =ele.getBoundingClientRect().top;
        if(top<this.winHeiht*9/10){
            return "show";
        }else if(bottom<this.winHeiht/10){
            return "out";
        }
    }
    eleInani(ele){
        ele.className=this.aniIn;

    }
    eleOutani(ele){
        ele.className=this.aniOut;
    }
    scrollTo(target){

    }
}
export  {ys as yul_slider};