/**
 * Created by yul on 16-10-2.
 */


class yul_flipimg{
    constructor(){
        let yulflipimg=this;
        let orgimg=document.getElementById("orgimg");
        var flipimg=document.getElementById("flipimg");
        flipimg.style.cssText=" transform:translate(0,200px)";
        console.log(orgimg.getBoundingClientRect().left);
        console.log(orgimg.clientWidth);
        let imgheight=orgimg.clientHeight;
        orgimg.addEventListener("mouseover",function (e) {
           // console.log(e.clientX);
            yulflipimg.orgMouseoverormove(e);
        })
        orgimg.addEventListener("mousemove",function (e) {
            console.log();
            yulflipimg.orgMouseoverormove(e);
        })
    }
    orgMouseoverormove(e){
        let ch=e.clientX-orgimg.getBoundingClientRect().left-orgimg.clientWidth/2;
        let cw=orgimg.getBoundingClientRect().top+orgimg.clientWidth/2-e.clientY;
        let w=50;
        if(ch/cw>=-1&&ch/cw<=1&&cw>=0){//shangbu
            console.log("shangbu");
            console.log(cw);
            document.getElementById("flipimg").style.cssText="transform:scaleX(1) scaleY(-1) translate(0,"+(w+cw+5+100)+"px);";
            // document.getElementById("org").style.cssText="height:"+(75+cw/2)+"px;width:100px;bottom:0;";
        }else if(ch/cw>1&&ch>0||ch/cw<-1&&ch>0){//youbian
            console.log("youbian");
            console.log(ch);
            document.getElementById("flipimg").style.cssText="transform:scaleX(-1) scaleY(1) translate("+(-w-ch-5)+"px,-100px);";
            // document.getElementById("org").style.cssText="width:"+(75+cw/2)+"px;height:100px;left:0";
        }else if(ch/cw>=-1&&ch/cw<=1&&cw<=0){//xiabu
            console.log("xiabu");
            console.log(cw);
            document.getElementById("flipimg").style.cssText="transform:scaleX(1) scaleY(-1) translate(0,"+(cw-w-5+100)+"px);";
            // document.getElementById("org").style.cssText="height:"+(75-cw/2)+"px;width:100px;top:0;";
        }else if(ch/cw>1&&ch<0||ch/cw<-1&&ch<0){//zuobian
            console.log("zuobian");
            console.log(ch);
            document.getElementById("flipimg").style.cssText="transform:scaleX(-1) scaleY(1) translate("+(w-ch+5)+"px,-100px);";
            // document.getElementById("org").style.cssText="width:"+(75-cw/2)+"px;height:100px;right:0";
        }
    }
}
export default yul_flipimg;