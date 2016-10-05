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

	var _yul_flipimg = __webpack_require__(2);

	var _yul_flipimg2 = _interopRequireDefault(_yul_flipimg);

	var _yul_lightbox = __webpack_require__(3);

	var _yul_lightbox2 = _interopRequireDefault(_yul_lightbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//require("./css/yul_blog_main.sass");
	//let slider=new yul_slider();

	//import yul_scrollsmoothly from "./es6/yul_scrollsmoothly"
	var flipimg = new _yul_flipimg2.default(); /**
	                                            * Created by yul on 16-10-1.
	                                            */

	var lightbox = new _yul_lightbox2.default();
	var slider = new _yul_slider2.default();

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
	        key: "listenTouch",
	        value: function listenTouch() {
	            window.event.preventDefault();
	        }
	    }, {
	        key: "listenScroll",
	        value: function listenScroll() {
	            var yulslider = this;
	            window.onscroll = function () {
	                for (var i = 0; i < yulslider.allsections.length; i++) {
	                    if (yulslider.ifShow(yulslider.allsections[i]) == "show") {
	                        yulslider.eleInani(yulslider.allsections[i]);
	                    } else if (yulslider.ifShow(yulslider.allsections[i]) == "out") {
	                        yulslider.eleOutani(yulslider.allsections[i]);
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
	            var bottom = ele.getBoundingClientRect().bottom;
	            var top = ele.getBoundingClientRect().top;
	            if (top < this.winHeiht * 9 / 10) {
	                return "show";
	            } else if (bottom < this.winHeiht / 10) {
	                return "out";
	            }
	        }
	    }, {
	        key: "eleInani",
	        value: function eleInani(ele) {
	            ele.className = this.aniIn;
	        }
	    }, {
	        key: "eleOutani",
	        value: function eleOutani(ele) {
	            ele.className = this.aniOut;
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
	 * Created by yul on 16-10-2.
	 */

	var yul_flipimg = function () {
	    function yul_flipimg() {
	        _classCallCheck(this, yul_flipimg);

	        var yulflipimg = this;
	        var orgimg = document.getElementById("orgimg");
	        var flipimg = document.getElementById("flipimg");
	        flipimg.style.cssText = " transform:translate(0,200px)";
	        console.log(orgimg.getBoundingClientRect().left);
	        console.log(orgimg.clientWidth);
	        var imgheight = orgimg.clientHeight;
	        orgimg.addEventListener("mouseover", function (e) {
	            // console.log(e.clientX);
	            yulflipimg.orgMouseoverormove(e);
	        });
	        orgimg.addEventListener("mousemove", function (e) {
	            console.log();
	            yulflipimg.orgMouseoverormove(e);
	        });
	        orgimg.addEventListener("mouseout", function (e) {
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
	                document.getElementById("flipimg").style.cssText = "transform:scaleX(1) scaleY(-1) translate(0," + (w + cw + 5 + 100) + "px);";
	                document.getElementById("org").style.cssText = "height:" + (75 + cw / 2) + "px;width:100px;transform:translate(0," + (25 - cw / 2) + "px)";
	                document.getElementById("orgimg").style.cssText = "transform:translate(0," + (-25 + cw / 2) + "px)";
	            } else if (ch / cw > 1 && ch > 0 || ch / cw < -1 && ch > 0) {
	                //youbian
	                console.log("youbian");
	                console.log(ch);
	                document.getElementById("flipimg").style.cssText = "transform:scaleX(-1) scaleY(1) translate(" + (-w - ch - 5) + "px,-100px);";
	                document.getElementById("org").style.cssText = "width:" + (75 + ch / 2) + "px;height:100px;transform:translate()";
	                document.getElementById("orgimg").style.cssText = "transform:translate(0,0)";
	            } else if (ch / cw >= -1 && ch / cw <= 1 && cw <= 0) {
	                //xiabu
	                console.log("xiabu");
	                console.log(cw);
	                document.getElementById("flipimg").style.cssText = "transform:scaleX(1) scaleY(-1) translate(0," + (cw - w - 5 + 100) + "px);";
	                document.getElementById("org").style.cssText = "height:" + (75 - cw / 2) + "px;width:100px;";
	                document.getElementById("orgimg").style.cssText = "transform:translate(0,0)";
	            } else if (ch / cw > 1 && ch < 0 || ch / cw < -1 && ch < 0) {
	                //zuobian
	                console.log("zuobian");
	                console.log(ch);
	                document.getElementById("flipimg").style.cssText = "transform:scaleX(-1) scaleY(1) translate(" + (w - ch + 5) + "px,-100px);";
	                document.getElementById("org").style.cssText = "width:" + (75 - ch / 2) + "px;height:100px;transform:translate(" + (25 + ch / 2) + "px,0)";
	                document.getElementById("orgimg").style.cssText = "transform:translate(" + (-25 - ch / 2) + "px,0)";
	            }
	        }
	    }]);

	    return yul_flipimg;
	}();

	exports.default = yul_flipimg;

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
	            lightbox.style.display = "none";
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
	            lightbox.style.display = "block";
	            var winw = window.innerWidth;
	            var winh = window.innerHeight;
	            img.src = src;
	            document.getElementById("loading").style.display = "block";
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