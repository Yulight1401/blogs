/**
 * Created by yul on 16-10-5.
 */
class yul_floatinfo{
    constructor(target,float){
        this.map=target;
        this.float=float;
        let yf=this;
        map.addEventListener("mouseover",function (e) {
            yf.onfloat(e);
        });
        map.addEventListener("mousemove",function (e) {
            yf.onfloat(e);
        });
        map.addEventListener("mouseout",function (e) {
            yf.onleave(e)
        })
    }
    onfloat(e){
        window.event.stopPropagation();
        let float=this.float;
        console.log(e.target.nodeName);
        if(e.target.nodeName=="path"){
            console.log(e.target.getAttribute("data-code"));
            float.innerHTML=e.target.getAttribute("data-code");
            float.style.left=e.clientX-float.clientWidth+"px";
            float.style.top=e.clientY-float.clientHeight-10+"px";
            float.style.display="block";
            e.target.fill="gray";
        }else if(e.target.nodeName=="circle"){
            float.innerHTML=e.target.getAttribute("data-index");
            float.style.left=e.clientX-float.clientWidth+"px";
            float.style.top=e.clientY-float.clientHeight-10+"px";
            float.style.display="block";
        }
    }
    onleave(e){
        window.event.stopPropagation();
        let float=this.float;
        float.innerHTML="";
        float.style.display="none";
    }
}
export default yul_floatinfo;