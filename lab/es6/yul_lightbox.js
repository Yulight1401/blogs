/**
 * Created by yul on 16-10-4.
 */
class  yul_lightbox{
    constructor(){
        let index=0
        let lightbox=document.getElementById("lightbox")
        let img=document.getElementById("lightboximg");
        let right=document.getElementById("toright");
        let left=document.getElementById("toleft");
        let imgs=document.getElementsByName("lightboximg");
        let max=imgs.length;
        console.log(imgs[0].src);
        var lb=this;
        lightbox.addEventListener("click",function () {
            lightbox.className="animated fadeOut";
            setTimeout(function () {
                lightbox.className="";
                lightbox.style.display="none";
            },1000)
        })
        for(var i=0;i<max;i++){
            imgs[i].addEventListener("click",function () {
                lb.show(this.src);
            })
        }
        right.addEventListener("click",function () {
            window.event.stopPropagation();
            lb.toright();
        });
        left.addEventListener("click",function () {
            window.event.stopPropagation();
            lb.toleft();
        });
    }
    toright(){
        let lb=this;
        let imgs=document.getElementsByName("lightboximg");
        if(lb.index>=lb.max){
            lb.show(imgs[0].src,0);
        }else{
            lb.show(imgs[(lb.index+1)].src,(lb.index+1));
        }
    }
    toleft() {
        let imgs=document.getElementsByName("lightboximg");
        let lb=this;
        if (lb.index <= 1) {
            this.show(imgs[0].src, 0);
        } else {
            this.show(imgs[(lb.index - 1)].src, (lb.index - 1));
        }
    }
    show(src,i=0){
        let lightbox=document.getElementById("lightbox");
        let img=document.getElementById("lightboximg");
        let imgloding=document.getElementById("imgloding");
        let right=document.getElementById("toright");
        let left=document.getElementById("toleft");
        this.index=i;
        let winw=window.innerWidth;
        let winh=window.innerHeight;
        document.getElementById("loading").style.display="block";
        img.src=src;
        lightbox.className="animated fadeIn";
        lightbox.style.display="block";
        img.onload=function () {
            document.getElementById("loading").style.display="none";
            if(img.clientWidth>(this.winw*0.8)){
                img.style.width=this.winw*0.8;
            }else if(img.clientHeight>(this.winh*0.8)){
                img.style.height=this.winh*0.8;
            }
            imgloding.style.marginTop=(-imgloding.clientHeight/2)+"px";
            imgloding.style.marginLeft=(-imgloding.clientWidth/2)+"px";
            right.style.cssText= "transform:translate(0,"+(-imgloding.clientHeight/2)+"px)"  ;
            left.style.cssText="transform:translate(0,"+(-imgloding.clientHeight/2)+"px)"  ;
        }
    }
}
export default  yul_lightbox;