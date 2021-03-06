/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_objects.js */ \"./src/moving_objects.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction Asteroid(pos) {\n  this.COLOR = 'grey';\n  this.RADIUS = 10;\n  this.pos = pos;\n  this.vel = Util.randomVec(this.RADIUS * 2);\n  MovingObject.call(this, this.pos, this.vel, this.RADIUS, this.COLOR);\n}\n\n// const DEFAULTS = {\n//   COLOR: \"#505050\",\n//   RADIUS: 25,\n//   SPEED: 4\n// };\n// \n// function Asteroid(options) {\n//   options = options || {};\n//   options.color = DEFAULTS.COLOR;\n//   options.pos = options.pos || options.game.randomPosition();\n//   options.radius = DEFAULTS.RADIUS;\n//   options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);\n// \n//   MovingObject.call(this, options);\n// }\n\nUtil.inherits(Asteroid, MovingObject);\n\n\n\n\n\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"Webpack is working!\");\n\nconst MovingObject = __webpack_require__ (/*! ./moving_objects.js */ \"./src/moving_objects.js\");\nwindow.MovingObject = MovingObject;\n\nconst Util = __webpack_require__ (/*! ./utils.js */ \"./src/utils.js\");\nconst Asteroid = __webpack_require__ (/*! ./asteroid.js */ \"./src/asteroid.js\");\nwindow.Asteroid = Asteroid;\n\ndocument.addEventListener(\"DOMContentLoaded\", function(event) {\n  let $canvas = document.getElementById(\"game-canvas\");\n  $canvas.getContext('2d');\n });\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_objects.js":
/*!*******************************!*\
  !*** ./src/moving_objects.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction MovingObject(pos, vel, radius, color ) {\n  this.pos = pos;\n  this.vel = vel;\n  this.radius = radius;\n  this.color = color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  \n  \n   ctx.beginPath();\n   ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, false);\n   // ctx.strokeStyle = `${this.color}`;\n   // ctx.lineWidth = 5;\n   // ctx.stroke();\n   ctx.fillStyle = `${this.color}`;\n   ctx.fill();\n};\n\n\nMovingObject.prototype.move = function () {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n};\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_objects.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    function Surrogate () {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n  randomVec(length) {\n   const deg = 2 * Math.PI * Math.random();\n   return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n },\n // Scale the length of a vector by the given amount.\n scale(vec, m) {\n   return [vec[0] * m, vec[1] * m];\n }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });