/**
 * Created by yul on 16-10-1.
 */
//获取所有section元素，根据element.getBoundingClientRect().top<10% 执行入场动画,bottom<10% 执行出场动画;所以要监听pc滑轮滚动和移动touch事件
    //根据移动,pc来执行不同初始化任务.
    // 动画以class来管理
class yul_slider{
    constructor(aniIn,aniOut){
        let t=document.documentElement.scrollTop||document.body.scrollTop;
        this.aniIn=aniIn;
        this.aniOut=aniOut;
        this.setSectionshw();
        this.listenScroll();
        this.slider=document.getElementById("yulslider-container");
    }
    setSectionshw(){
        let winHeight=window.innerHeight;
        let winWidth=window.innerWidth;
        let allsections= document.getElementById("yulslider").children;
        for(let i=0;i<allsections.length;i++){
            allsections[i].style.height=winHeight+"px";
            allsections[i].style.width=winWidth+"px";
        }
    }
    getdirection(startX, startY, endX, endY) {
      let dy = startY - endY;
      let dx = endX - startX;
      let result = 0;
        if(Math.abs(dx) < 50 && Math.abs(dy) <50) {
            return result;
        }
        let angle =(dx,dy)=> Math.atan2(dy, dx) * 180 / Math.PI;
        if(angle >= -45 && angle < 45) {//xiang you
             result = 4;
        }else if (angle >= 45 && angle < 135) {//shang
            result = 1;
        }else if (angle >= -135 && angle < -45) {//xia
            result = 2;
        }
        else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {//zuo
            result = 3;
        }
        return result;
    }
    listenTouch(){
        let index=0;
        let startx,starty,endx,endy;
        let winHeight=window.innerHeight;
        let winWidth=window.innerWidth;
        let slider=document.getElementById("yulslider");
        let container=document.getElementById("yulslider-container");
        container.style.height=winHeight+"px";
        let self=this;
        window.onscroll=function (e) {
            if (e&&e.preventDefault){
                e.preventDefault();
                e.stopPropagation();
            }else{
                e.returnvalue=false;
            }
        }
        this.slider.addEventListener("touchstart",function (event) {
            startx = event.touches[0].pageX;
            starty = event.touches[0].pageY;
            event.preventDefault();
        });
        this.slider.addEventListener("touchend",function (event) {
            endx = event.changedTouches[0].pageX;
            endy = event.changedTouches[0].pageY;
            event.preventDefault();
            let direction = self.getdirection(startx, starty, endx, endy);
            switch(direction) {
                case 0:
                    // alert("没滑动");
                    break;
                case 1:
                    if(++index<=7){
                        slider.style.cssText="transition: all 0.3s;transform:translate(0,"+(-index*winHeight)+"px)";
                    }else{
                        --index;
                    }
                    //alert("向上");
                    break;
                case 2:
                    if(--index>-1){
                        slider.style.cssText="transition: all 0.3s;transform:translate(0,"+(-index*winHeight)+"px)"
                    }
                    else{
                        ++index;
                    }
                    //alert("向下");
                    break;
                case 3:
                    //alert("向左");
                    break;
                case 4:
                    //alert("向右");
                    break;
                default:
            }
        })
    }
    listenScroll(){
        let yulslider=this;
        let allsections= document.getElementById("yulslider").children;
        window.onscroll=function () {
            console.log(allsections[1].getBoundingClientRect().top+":"+allsections[1].getBoundingClientRect().bottom);
            for(let i=0;i<allsections.length;i++){
                if(yulslider.ifShow(allsections[i])=="show"){
                    yulslider.eleInani(allsections[i]);
                }else if(yulslider.ifShow(allsections[i])=="out"){
                    yulslider.eleOutani(allsections[i]);
                }
            }
        }
    }
    notifySections(ele,func){

    }
    ifShow(ele){
        let winHeight=window.innerHeight;
        let bottom= ele.getBoundingClientRect().bottom;
        let top =ele.getBoundingClientRect().top;
        if(top<winHeight*2/3&&top>(-winHeight/3)){
            return "show";
        }else if(bottom<winHeight/3||bottom>winHeight){
            return "out";
        }
    }
    eleInani(ele){
        this.aniIn(ele);
    }
    eleOutani(ele){
        this.aniOut(ele);
    }
    scrollTo(target){

    }
}
export  default  yul_slider;