/**
 * Created by yul on 16-10-4.
 */
class  yul_lightbox{
    constructor(){
        let img=document.getElementById("lightboximg");
        let right=document.getElementById("toright");
        let left=document.getElementById("toleft");
        let imgs=document.getElementsByName("img");
        let winw=window.innerWidth;
        let winh=window.innerHeight;
        var lightbox=this;
        for(var i=0;i<imgs.length;i++){
            imgs[i].addEventListener("click",function () {
                lightbox.show(img[i].src);
            })
        }
        right.addEventListener("click",lightbox.toright);
        left.addEventListener("click",lightbox.toleft);
    }
    toright(){

    }
    toleft(){

    }
    show(src){
        this.img.src=src;
        this.img.onload=function () {
            if(img.clientWidth>(this.winw*0.8)){
                img.width=this.winw*0.8;
            }else if(img.clientHeight>(this.winh*0.8)){
                img.height=this.winh*0.8;
            }
            img.style.marginLeft=(-img.clientWidth/2);
            img.style.marginTop=(-img.clientHeight/2);
        }
    }
}
export default  yul_lightbox;