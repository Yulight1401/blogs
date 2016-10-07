/**
 * Created by yul on 16-10-2.
 */
class  sinablog{
    constructor(){
        let input=document.getElementById("sinainput");
        let sb=this;
        input.addEventListener("change",function (e) {
            sb.listenAt(e);
        })
    }
    listenAt(e){
        alert(e.keyCode);
    }
    showList(){

    }
}