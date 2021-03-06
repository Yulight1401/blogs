/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _yul_slider = __webpack_require__(1);

	var _yul_slider2 = _interopRequireDefault(_yul_slider);

	var _yul_floatinfo = __webpack_require__(2);

	var _yul_floatinfo2 = _interopRequireDefault(_yul_floatinfo);

	var _yul_flipimg = __webpack_require__(3);

	var _yul_flipimg2 = _interopRequireDefault(_yul_flipimg);

	var _yul_lightbox = __webpack_require__(4);

	var _yul_lightbox2 = _interopRequireDefault(_yul_lightbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//require("./css/yul_blog_main.sass");
	/**
	 * Created by yul on 16-10-1.
	 */
	var $ = function $(id) {
	    return document.getElementById(id);
	};
	//import yul_scrollsmoothly from "./es6/yul_scrollsmoothly"

	var flipimg = new _yul_flipimg2.default($("org"), $("orgimg"), $("flipimg"));
	var lightbox = new _yul_lightbox2.default();
	var slider = new _yul_slider2.default(function (ele) {
	    //aniin
	    switch (ele.id) {
	        case "homeschool":
	            if ($("hscontent").className == "content") {
	                $("hscontent").className = "content animated fadeInUp";
	            };
	            break;
	        case "travel":
	            if ($("tvcontent").className == "content") {
	                $("map").className = "animated fadeInRight";
	                $("tvcontent").className = "content animated fadeInLeft";
	            };
	            break;
	        case "photography":
	            if ($("pgcontent").className == "content container") {
	                $("pgcontent").className = "content container animated fadeIn";
	                var time = 0;
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;

	                try {
	                    for (var _iterator = $("montage").children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var img = _step.value;

	                        img.className = "animated flipInY";
	                        img.style.cssText = "animation-delay:" + time + "ms";
	                        time += 100;
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator.return) {
	                            _iterator.return();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            };
	            break;
	        case "design":
	            if ($("dscontent").className == "content") {
	                $("dscontent").className = "content animated fadeInRight";
	                $("showcase").className = "animated fadeInLeft";
	            };
	            break;
	        case "speech":
	            if ($("spcontent").className == "content") {
	                $("spcontent").className = "content animated fadeInLeft";
	            };
	            break;
	    }
	}, function (ele) {
	    //aniout
	    switch (ele.id) {
	        case "homeschool":
	            $("hscontent").className = "content";
	            break;
	        case "travel":
	            $("map").className = "";
	            $("tvcontent").className = "content";
	            break;
	        case "photography":
	            $("pgcontent").className = "content container";
	            var _iteratorNormalCompletion2 = true;
	            var _didIteratorError2 = false;
	            var _iteratorError2 = undefined;

	            try {
	                for (var _iterator2 = $("montage").children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                    var img = _step2.value;

	                    img.className = "";
	                }
	            } catch (err) {
	                _didIteratorError2 = true;
	                _iteratorError2 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                        _iterator2.return();
	                    }
	                } finally {
	                    if (_didIteratorError2) {
	                        throw _iteratorError2;
	                    }
	                }
	            }

	            break;
	        case "design":
	            $("showcase").className = "";
	            $("dscontent").className = "content";
	            break;
	        case "speech":
	            $("spcontent").className = "content";
	            break;
	    }
	});
	var float = new _yul_floatinfo2.default($("map"), $("yul_floatinfo"));
	document.body.onresize = function () {
	    slider.setSectionshw();
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by yul on 16-10-1.
	 */
	//获取所有section元素，根据element.getBoundingClientRect().top<10% 执行入场动画,bottom<10% 执行出场动画;所以要监听pc滑轮滚动和移动touch事件
	//根据移动,pc来执行不同初始化任务.
	// 动画以class来管理
	var yul_slider = function () {
	    function yul_slider(aniIn, aniOut) {
	        _classCallCheck(this, yul_slider);

	        var t = document.documentElement.scrollTop || document.body.scrollTop;
	        this.aniIn = aniIn;
	        this.aniOut = aniOut;
	        this.setSectionshw();
	        this.listenScroll();
	        this.slider = document.getElementById("yulslider-container");
	    }

	    _createClass(yul_slider, [{
	        key: "setSectionshw",
	        value: function setSectionshw() {
	            var winHeight = window.innerHeight;
	            var winWidth = window.innerWidth;
	            var allsections = document.getElementById("yulslider").children;
	            for (var i = 0; i < allsections.length; i++) {
	                allsections[i].style.height = winHeight + "px";
	                allsections[i].style.width = winWidth + "px";
	            }
	        }
	    }, {
	        key: "getdirection",
	        value: function getdirection(startX, startY, endX, endY) {
	            var dy = startY - endY;
	            var dx = endX - startX;
	            var result = 0;
	            if (Math.abs(dx) < 50 && Math.abs(dy) < 50) {
	                return result;
	            }
	            var angle = function angle(dx, dy) {
	                return Math.atan2(dy, dx) * 180 / Math.PI;
	            };
	            if (angle >= -45 && angle < 45) {
	                //xiang you
	                result = 4;
	            } else if (angle >= 45 && angle < 135) {
	                //shang
	                result = 1;
	            } else if (angle >= -135 && angle < -45) {
	                //xia
	                result = 2;
	            } else if (angle >= 135 && angle <= 180 || angle >= -180 && angle < -135) {
	                //zuo
	                result = 3;
	            }
	            return result;
	        }
	    }, {
	        key: "listenTouch",
	        value: function listenTouch() {
	            var index = 0;
	            var startx = void 0,
	                starty = void 0,
	                endx = void 0,
	                endy = void 0;
	            var winHeight = window.innerHeight;
	            var winWidth = window.innerWidth;
	            var slider = document.getElementById("yulslider");
	            var container = document.getElementById("yulslider-container");
	            container.style.height = winHeight + "px";
	            var self = this;
	            window.onscroll = function (e) {
	                if (e && e.preventDefault) {
	                    e.preventDefault();
	                    e.stopPropagation();
	                } else {
	                    e.returnvalue = false;
	                }
	            };
	            this.slider.addEventListener("touchstart", function (event) {
	                startx = event.touches[0].pageX;
	                starty = event.touches[0].pageY;
	                event.preventDefault();
	            });
	            this.slider.addEventListener("touchend", function (event) {
	                endx = event.changedTouches[0].pageX;
	                endy = event.changedTouches[0].pageY;
	                event.preventDefault();
	                var direction = self.getdirection(startx, starty, endx, endy);
	                switch (direction) {
	                    case 0:
	                        // alert("没滑动");
	                        break;
	                    case 1:
	                        if (++index <= 7) {
	                            slider.style.cssText = "transition: all 0.3s;transform:translate(0," + -index * winHeight + "px)";
	                        } else {
	                            --index;
	                        }
	                        //alert("向上");
	                        break;
	                    case 2:
	                        if (--index > -1) {
	                            slider.style.cssText = "transition: all 0.3s;transform:translate(0," + -index * winHeight + "px)";
	                        } else {
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
	            });
	        }
	    }, {
	        key: "listenScroll",
	        value: function listenScroll() {
	            var yulslider = this;
	            var allsections = document.getElementById("yulslider").children;
	            window.onscroll = function () {
	                console.log(allsections[1].getBoundingClientRect().top + ":" + allsections[1].getBoundingClientRect().bottom);
	                for (var i = 0; i < allsections.length; i++) {
	                    if (yulslider.ifShow(allsections[i]) == "show") {
	                        yulslider.eleInani(allsections[i]);
	                    } else if (yulslider.ifShow(allsections[i]) == "out") {
	                        yulslider.eleOutani(allsections[i]);
	                    }
	                }
	            };
	        }
	    }, {
	        key: "notifySections",
	        value: function notifySections(ele, func) {}
	    }, {
	        key: "ifShow",
	        value: function ifShow(ele) {
	            var winHeight = window.innerHeight;
	            var bottom = ele.getBoundingClientRect().bottom;
	            var top = ele.getBoundingClientRect().top;
	            if (top < winHeight * 2 / 3 && top > -winHeight / 3) {
	                return "show";
	            } else if (bottom < winHeight / 3 || bottom > winHeight) {
	                return "out";
	            }
	        }
	    }, {
	        key: "eleInani",
	        value: function eleInani(ele) {
	            this.aniIn(ele);
	        }
	    }, {
	        key: "eleOutani",
	        value: function eleOutani(ele) {
	            this.aniOut(ele);
	        }
	    }, {
	        key: "scrollTo",
	        value: function scrollTo(target) {}
	    }]);

	    return yul_slider;
	}();

	exports.default = yul_slider;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by yul on 16-10-5.
	 */
	var yul_floatinfo = function () {
	    function yul_floatinfo(target, float) {
	        _classCallCheck(this, yul_floatinfo);

	        this.map = target;
	        this.float = float;
	        var yf = this;
	        map.addEventListener("mouseover", function (e) {
	            yf.onfloat(e);
	        });
	        map.addEventListener("mousemove", function (e) {
	            yf.onfloat(e);
	        });
	        map.addEventListener("mouseout", function (e) {
	            yf.onleave(e);
	        });
	    }

	    _createClass(yul_floatinfo, [{
	        key: "onfloat",
	        value: function onfloat(e) {
	            window.event.stopPropagation();
	            var float = this.float;
	            console.log(e.target.nodeName);
	            if (e.target.nodeName == "path") {
	                console.log(e.target.getAttribute("data-code"));
	                float.innerHTML = e.target.getAttribute("data-code");
	                float.style.left = e.clientX - float.clientWidth + "px";
	                float.style.top = e.clientY - float.clientHeight - 10 + "px";
	                float.style.display = "block";
	                e.target.fill = "gray";
	            } else if (e.target.nodeName == "circle") {
	                float.innerHTML = e.target.getAttribute("data-index");
	                float.style.left = e.clientX - float.clientWidth + "px";
	                float.style.top = e.clientY - float.clientHeight - 10 + "px";
	                float.style.display = "block";
	            }
	        }
	    }, {
	        key: "onleave",
	        value: function onleave(e) {
	            window.event.stopPropagation();
	            var float = this.float;
	            float.innerHTML = "";
	            float.style.display = "none";
	        }
	    }]);

	    return yul_floatinfo;
	}();

	exports.default = yul_floatinfo;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by yul on 16-10-2.
	 */

	var yul_flipimg = function () {
	    function yul_flipimg(org, orgimg, flipimg) {
	        _classCallCheck(this, yul_flipimg);

	        var yulflipimg = this;
	        this.org = org;
	        this.orgimg = orgimg;
	        this.flipimg = flipimg;
	        this.flipimg.style.cssText = " transform:translate(0,200px)";
	        console.log(orgimg.getBoundingClientRect().left);
	        console.log(orgimg.clientWidth);
	        var imgheight = orgimg.clientHeight;
	        this.orgimg.addEventListener("mouseover", function (e) {
	            // console.log(e.clientX);
	            yulflipimg.orgMouseoverormove(e);
	        });
	        this.orgimg.addEventListener("mousemove", function (e) {
	            console.log();
	            yulflipimg.orgMouseoverormove(e);
	        });
	        this.orgimg.addEventListener("mouseout", function (e) {
	            document.getElementById("org").style.cssText = "width:100px;height:100px;transform:translate()";
	            document.getElementById("orgimg").style.cssText = "transform:translate(0,0)";
	            document.getElementById("flipimg").style.cssText = "transform:scaleX(1) scaleY(-1) translate(0,0);";
	        });
	    }

	    _createClass(yul_flipimg, [{
	        key: "orgMouseoverormove",
	        value: function orgMouseoverormove(e) {
	            var ch = e.clientX - orgimg.getBoundingClientRect().left - orgimg.clientWidth / 2;
	            var cw = orgimg.getBoundingClientRect().top + orgimg.clientWidth / 2 - e.clientY;
	            var w = 50;
	            if (ch / cw >= -1 && ch / cw <= 1 && cw >= 0) {
	                //shangbu
	                console.log("shangbu");
	                console.log(cw);
	                this.flipimg.style.cssText = "transform:scaleX(1) scaleY(-1) translate(0," + (w + cw + 5 + 100) + "px);";
	                this.org.style.cssText = "height:" + (75 + cw / 2) + "px;width:100px;transform:translate(0," + (25 - cw / 2) + "px)";
	                this.orgimg.style.cssText = "transform:translate(0," + (-25 + cw / 2) + "px)";
	            } else if (ch / cw > 1 && ch > 0 || ch / cw < -1 && ch > 0) {
	                //youbian
	                console.log("youbian");
	                console.log(ch);
	                this.flipimg.style.cssText = "transform:scaleX(-1) scaleY(1) translate(" + (-w - ch - 5) + "px,-100px);";
	                this.org.style.cssText = "width:" + (75 + ch / 2) + "px;height:100px;transform:translate()";
	                this.orgimg.style.cssText = "transform:translate(0,0)";
	            } else if (ch / cw >= -1 && ch / cw <= 1 && cw <= 0) {
	                //xiabu
	                console.log("xiabu");
	                console.log(cw);
	                this.flipimg.style.cssText = "transform:scaleX(1) scaleY(-1) translate(0," + (cw - w - 5 + 100) + "px);";
	                this.org.style.cssText = "height:" + (75 - cw / 2) + "px;width:100px;";
	                this.orgimg.style.cssText = "transform:translate(0,0)";
	            } else if (ch / cw > 1 && ch < 0 || ch / cw < -1 && ch < 0) {
	                //zuobian
	                console.log("zuobian");
	                console.log(ch);
	                this.flipimg.style.cssText = "transform:scaleX(-1) scaleY(1) translate(" + (w - ch + 5) + "px,-100px);";
	                this.org.style.cssText = "width:" + (75 - ch / 2) + "px;height:100px;transform:translate(" + (25 + ch / 2) + "px,0)";
	                this.orgimg.style.cssText = "transform:translate(" + (-25 - ch / 2) + "px,0)";
	            }
	        }
	    }]);

	    return yul_flipimg;
	}();

	exports.default = yul_flipimg;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Created by yul on 16-10-4.
	 */
	var yul_lightbox = function () {
	    function yul_lightbox() {
	        _classCallCheck(this, yul_lightbox);

	        var index = 0;
	        var lightbox = document.getElementById("lightbox");
	        var img = document.getElementById("lightboximg");
	        var right = document.getElementById("toright");
	        var left = document.getElementById("toleft");
	        var imgs = document.getElementsByName("lightboximg");
	        var max = imgs.length;
	        console.log(imgs[0].src);
	        var lb = this;
	        lightbox.addEventListener("click", function () {
	            lightbox.className = "animated fadeOut";
	            setTimeout(function () {
	                lightbox.className = "";
	                lightbox.style.display = "none";
	            }, 1000);
	        });
	        for (var i = 0; i < max; i++) {
	            imgs[i].addEventListener("click", function () {
	                lb.show(this.src);
	            });
	        }
	        right.addEventListener("click", function () {
	            window.event.stopPropagation();
	            lb.toright();
	        });
	        left.addEventListener("click", function () {
	            window.event.stopPropagation();
	            lb.toleft();
	        });
	    }

	    _createClass(yul_lightbox, [{
	        key: "toright",
	        value: function toright() {
	            var lb = this;
	            var imgs = document.getElementsByName("lightboximg");
	            if (lb.index >= lb.max) {
	                lb.show(imgs[0].src, 0);
	            } else {
	                lb.show(imgs[lb.index + 1].src, lb.index + 1);
	            }
	        }
	    }, {
	        key: "toleft",
	        value: function toleft() {
	            var imgs = document.getElementsByName("lightboximg");
	            var lb = this;
	            if (lb.index <= 1) {
	                this.show(imgs[0].src, 0);
	            } else {
	                this.show(imgs[lb.index - 1].src, lb.index - 1);
	            }
	        }
	    }, {
	        key: "show",
	        value: function show(src) {
	            var i = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	            var lightbox = document.getElementById("lightbox");
	            var img = document.getElementById("lightboximg");
	            var imgloding = document.getElementById("imgloding");
	            var right = document.getElementById("toright");
	            var left = document.getElementById("toleft");
	            this.index = i;
	            var winw = window.innerWidth;
	            var winh = window.innerHeight;
	            document.getElementById("loading").style.display = "block";
	            img.src = src;
	            lightbox.className = "animated fadeIn";
	            lightbox.style.display = "block";
	            img.onload = function () {
	                document.getElementById("loading").style.display = "none";
	                if (img.clientWidth > this.winw * 0.8) {
	                    img.style.width = this.winw * 0.8;
	                } else if (img.clientHeight > this.winh * 0.8) {
	                    img.style.height = this.winh * 0.8;
	                }
	                imgloding.style.marginTop = -imgloding.clientHeight / 2 + "px";
	                imgloding.style.marginLeft = -imgloding.clientWidth / 2 + "px";
	                right.style.cssText = "transform:translate(0," + -imgloding.clientHeight / 2 + "px)";
	                left.style.cssText = "transform:translate(0," + -imgloding.clientHeight / 2 + "px)";
	            };
	        }
	    }]);

	    return yul_lightbox;
	}();

	exports.default = yul_lightbox;

/***/ }
/******/ ]);