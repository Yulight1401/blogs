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

	var _yul_flipimg = __webpack_require__(1);

	var _yul_flipimg2 = _interopRequireDefault(_yul_flipimg);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//require("./css/yul_blog_main.sass");
	//let slider=new yul_slider();
	var flipimg = new _yul_flipimg2.default(); /**
	                                            * Created by yul on 16-10-1.
	                                            */
	//import yul_slider from "./es6/yul_slider";
	//import yul_scrollsmoothly from "./es6/yul_scrollsmoothly"

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
	                // document.getElementById("orgimg").style.cssText="height:"+(75+cw/2)+"px;width:100px;bottom:0;";
	            } else if (ch / cw > 1 && ch > 0 || ch / cw < -1 && ch > 0) {
	                //youbian
	                console.log("youbian");
	                console.log(ch);
	                document.getElementById("flipimg").style.cssText = "transform:scaleX(-1) scaleY(1) translate(" + (-w - ch - 5) + "px,-100px);";
	                // document.getElementById("orgimg").style.cssText="width:"+(75+cw/2)+"px;height:100px;left:0";
	            } else if (ch / cw >= -1 && ch / cw <= 1 && cw <= 0) {
	                //xiabu
	                console.log("xiabu");
	                console.log(cw);
	                document.getElementById("flipimg").style.cssText = "transform:scaleX(1) scaleY(-1) translate(0," + (cw - w - 5 + 100) + "px);";
	                // document.getElementById("orgimg").style.cssText="height:"+(75-cw/2)+"px;width:100px;top:0;";
	            } else if (ch / cw > 1 && ch < 0 || ch / cw < -1 && ch < 0) {
	                //zuobian
	                console.log("zuobian");
	                console.log(ch);
	                document.getElementById("flipimg").style.cssText = "transform:scaleX(-1) scaleY(1) translate(" + (w - ch + 5) + "px,-100px);";
	                // document.getElementById("orgimg").style.cssText="width:"+(75-cw/2)+"px;height:100px;right:0";
	            }
	        }
	    }]);

	    return yul_flipimg;
	}();

	exports.default = yul_flipimg;

/***/ }
/******/ ]);