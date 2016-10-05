/**
 * Created by yul on 16-10-2.
 */
class ss  {
    constructor(step){
        this.fixAllLinks();
        this.STEPS=step;
    }
    fixAllLinks() {
        // 获取所有a标签
        let allLinks = document.getElementsByTagName('a');
        // 遍历
        for (var i=0;i<allLinks.length;i++) {
            var lnk = allLinks;
            if ((lnk.href && lnk.href.indexOf('#') != -1) &&
                ( (lnk.pathname == location.pathname) ||
                ('/'+lnk.pathname == location.pathname) ) &&
                (lnk.search == location.search)) {
                // 如果有#
                // 给这个标签打上事件监听
                // event handler
                ss.addEvent(lnk,'click',ss.smoothScroll);
            }
        }
    }

    smoothScroll(e) {
        if (window.event) {
            target = window.event.srcElement;
        } else if (e) {
            target = e.target;
        } else return;

        // 确定是一个标签
        if (target.nodeName.toLowerCase() == 'a') {
            target = target.parentNode;
        }else{
            return
        }
        // 获得锚点名称
        anchor = target.hash.substr(1);
        // 找到它
        var allLinks = document.getElementsByTagName('a');
        var destinationLink = null;
        for (var i=0;i<allLinks.length;i++) {
            var lnk = allLinks;
            if (lnk.name && (lnk.name == anchor)) {
                destinationLink = lnk;
                break;
            }
        }
        if (!destinationLink) destinationLink = document.getElementById(anchor);
        if (!destinationLink) return true;

        //找到它的位置
        let destx = destinationLink.offsetLeft;
        let desty = destinationLink.offsetTop;
        let thisNode = destinationLink;
        while (thisNode.offsetParent &&
        (thisNode.offsetParent != document.body)) {
            thisNode = thisNode.offsetParent;
            destx += thisNode.offsetLeft;
            desty += thisNode.offsetTop;
        }

        //停止滚动
        clearInterval(ss.INTERVAL);

        cypos = ss.getCurrentYPos();

        ss_stepsize = parseInt((desty-cypos)/ss.STEPS);
        ss.INTERVAL =
            setInterval('ss.scrollWindow('+ss_stepsize+','+desty+',"'+anchor+'")',10);

        // 停止事件冒泡
        if (window.event) {
            window.event.cancelBubble = true;
            window.event.returnValue = false;
        }
        if (e && e.preventDefault && e.stopPropagation) {
            e.preventDefault();
            e.stopPropagation();
        }
    }

    scrollWindow(scramount,dest,anchor) {
        wascypos = ss.getCurrentYPos();
        isAbove = (wascypos < dest);
        window.scrollTo(0,wascypos + scramount);
        iscypos = ss.getCurrentYPos();
        isAboveNow = (iscypos < dest);
        if ((isAbove != isAboveNow) || (wascypos == iscypos)) {
            // if we've just scrolled past the destination, or
            // we haven't moved from the last scroll (i.e., we're at the
            // bottom of the page) then scroll exactly to the link
            window.scrollTo(0,dest);
            // cancel the repeating timer
            clearInterval(ss.INTERVAL);
            // and jump to the link directly so the URL's right
            location.hash = anchor;
        }
    }

    getCurrentYPos() {
        if (document.body && document.body.scrollTop)
            return document.body.scrollTop;
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        if (window.pageYOffset)
            return window.pageYOffset;
        return 0;
    }

    addEvent(elm, evType, fn, useCapture) {
        // addEvent and removeEvent
        // cross-browser event handling for IE5+,  NS6 and Mozilla
        // By Scott Andrew
        if (elm.addEventListener){
            elm.addEventListener(evType, fn, useCapture);
            return true;
        } else if (elm.attachEvent){
            var r = elm.attachEvent("on"+evType, fn);
            return r;
        } else {
            alert("Handler could not be removed");
        }
    }
}

//ss.STEPS = 25;

//ss.addEvent(window,"load",ss.fixAllLinks);

export default yul_scrollsmoothly;