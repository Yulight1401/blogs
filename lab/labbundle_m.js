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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var $ = function $(id) {
	    return document.getElementById(id);
	}; /**
	    * Created by yul on 16-10-7.
	    */

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
	slider.listenTouch();

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
	            var angle = Math.atan2(dy, dx) * 180 / Math.PI;
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

/***/ }
/******/ ]);