/**
 * Created by yul on 16-10-2.
 */


class yul_flipimg{
    constructor(org,orgimg,flipimg){
        let yulflipimg=this;
        this.org=org;
        this.orgimg=orgimg;
        this.flipimg=flipimg;
        this.flipimg.style.cssText=" transform:translate(0,200px)";
        console.log(orgimg.getBoundingClientRect().left);
        console.log(orgimg.clientWidth);
        let imgheight=orgimg.clientHeight;
        this.orgimg.addEventListener("mouseover",function (e) {
           // console.log(e.clientX);
            yulflipimg.orgMouseoverormove(e);
        })
        this.orgimg.addEventListener("mousemove",function (e) {
            console.log();
            yulflipimg.orgMouseoverormove(e);
        })
        this.orgimg.addEventListener("mouseout",function (e) {
            document.getElementById("org").style.cssText="width:100px;height:100px;transform:translate()";
            document.getElementById("orgimg").style.cssText="transform:translate(0,0)";
            document.getElementById("flipimg").style.cssText="transform:scaleX(1) scaleY(-1) translate(0,0);";
        })
    }
    orgMouseoverormove(e){
        let ch=e.clientX-orgimg.getBoundingClientRect().left-orgimg.clientWidth/2;
        let cw=orgimg.getBoundingClientRect().top+orgimg.clientWidth/2-e.clientY;
        let w=50;
        if(ch/cw>=-1&&ch/cw<=1&&cw>=0){//shangbu
            console.log("shangbu");
            console.log(cw);
            this.flipimg.style.cssText="transform:scaleX(1) scaleY(-1) translate(0,"+(w+cw+5+100)+"px);";
            this.org.style.cssText="height:"+(75+cw/2)+"px;width:100px;transform:translate(0,"+(25-cw/2)+"px)";
            this.orgimg.style.cssText="transform:translate(0,"+(-25+cw/2)+"px)";
        }else if(ch/cw>1&&ch>0||ch/cw<-1&&ch>0){//youbian
            console.log("youbian");
            console.log(ch);
            this.flipimg.style.cssText="transform:scaleX(-1) scaleY(1) translate("+(-w-ch-5)+"px,-100px);";
            this.org.style.cssText="width:"+(75+ch/2)+"px;height:100px;transform:translate()";
            this.orgimg.style.cssText="transform:translate(0,0)";
        }else if(ch/cw>=-1&&ch/cw<=1&&cw<=0){//xiabu
            console.log("xiabu");
            console.log(cw);
            this.flipimg.style.cssText="transform:scaleX(1) scaleY(-1) translate(0,"+(cw-w-5+100)+"px);";
            this.org.style.cssText="height:"+(75-cw/2)+"px;width:100px;";
            this.orgimg.style.cssText="transform:translate(0,0)";
        }else if(ch/cw>1&&ch<0||ch/cw<-1&&ch<0){//zuobian
            console.log("zuobian");
            console.log(ch);
            this.flipimg.style.cssText="transform:scaleX(-1) scaleY(1) translate("+(w-ch+5)+"px,-100px);";
            this.org.style.cssText="width:"+(75-ch/2)+"px;height:100px;transform:translate("+(25+ch/2)+"px,0)";
            this.orgimg.style.cssText="transform:translate("+(-25-ch/2)+"px,0)";
        }
    }
}
export default yul_flipimg;