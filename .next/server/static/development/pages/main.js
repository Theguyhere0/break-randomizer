module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
    textAlign: "right"
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Message"], {
    compact: true,
    size: "tiny"
  }, "App designed by Theguyhere")));
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
      header: "true",
      size: "massive",
      style: {
        marginTop: '10px'
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
      header: true,
      name: "BREAK RANDOMIZER"
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
      position: "right"
    }, __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: "/main"
    }, __jsx("a", {
      className: "item"
    }, "Main")), __jsx(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: "/edit"
    }, __jsx("a", {
      className: "item"
    }, "Edit"))));
  }

}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (props => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
  })), __jsx(_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), props.children, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], null), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
});

/***/ }),

/***/ "./pages/main/index.js":
/*!*****************************!*\
  !*** ./pages/main/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let actSetList = [];

function getOptions() {
  actSetList.length = 0;

  for (const i in window.localStorage) {
    if (window.localStorage.getItem(i) && i !== "ally-supports-cache") {
      actSetList.push(JSON.parse(window.localStorage.getItem(i)));
    }
  }
}

class MainMenu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      title: '',
      activity: ''
    });

    _defineProperty(this, "handleChange", (e, {
      value
    }) => this.setState({
      title: value,
      activity: ''
    }));

    _defineProperty(this, "handleClick", () => {
      let activities, actWeights, actNames, sumWeight, rand;
      activities = JSON.parse(window.localStorage.getItem(this.state.title)).activities;
      actNames = activities.map(function (e) {
        return e.key;
      });
      actWeights = activities.map(function (e) {
        return e.weight;
      });
      sumWeight = actWeights.reduce(function (a, b) {
        return a + b;
      }, 0);
      rand = Math.floor(Math.random() * sumWeight);

      for (let i = 0; i < actWeights.length; i++) {
        rand -= actWeights[i];

        if (rand < 0) {
          this.setState({
            activity: actNames[i]
          });
          break;
        }
      }

      ;
    });
  }

  componentDidMount() {
    getOptions();
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 8
    }, __jsx("h2", {
      style: {
        textAlign: 'right'
      }
    }, "Choose Activity Set")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 5
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      placeholder: "Activity Set",
      search: true,
      selection: true,
      options: actSetList,
      onChange: this.handleChange,
      value: this.state.title
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 10,
      verticalAlign: "middle"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      size: "huge"
    }, "My break will now be...")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 6
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      size: "massive",
      primary: true,
      floated: "right",
      content: "Break Time!",
      onClick: this.handleClick
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
      positive: true,
      size: "huge",
      content: this.state.activity,
      hidden: !this.state.activity,
      style: {
        textAlign: 'center'
      }
    })))));
  }

}

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const routes = __webpack_require__(/*! next-routes */ "next-routes")();

routes.add('/', '/main');
module.exports = routes;

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./pages/main/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mxlin\Documents\GitHub\break-randomizer\pages\main\index.js */"./pages/main/index.js");


/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWFpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiSGVhZGVyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwibWFyZ2luVG9wIiwicHJvcHMiLCJjaGlsZHJlbiIsImFjdFNldExpc3QiLCJnZXRPcHRpb25zIiwibGVuZ3RoIiwiaSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiSlNPTiIsInBhcnNlIiwiTWFpbk1lbnUiLCJ0aXRsZSIsImFjdGl2aXR5IiwiZSIsInZhbHVlIiwic2V0U3RhdGUiLCJhY3Rpdml0aWVzIiwiYWN0V2VpZ2h0cyIsImFjdE5hbWVzIiwic3VtV2VpZ2h0IiwicmFuZCIsInN0YXRlIiwibWFwIiwia2V5Iiwid2VpZ2h0IiwicmVkdWNlIiwiYSIsImIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb21wb25lbnREaWRNb3VudCIsInRleHRBbGlnbiIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUNsaWNrIiwicm91dGVzIiwicmVxdWlyZSIsImFkZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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Q0FoQkYsRUFpQ0UsTUFBQyxzREFBRCxDQUFNLEdBQU4sUUFDRSxNQUFDLHNEQUFELENBQU0sTUFBTixRQUNFLE1BQUMseURBQUQ7QUFDRSxjQUFRLE1BRFY7QUFFRSxVQUFJLEVBQUMsTUFGUDtBQUdFLGFBQU8sRUFBRSxLQUFLYixLQUFMLENBQVdULFFBSHRCO0FBSUUsWUFBTSxFQUFFLENBQUMsS0FBS1MsS0FBTCxDQUFXVCxRQUp0QjtBQUtFLFdBQUssRUFBRTtBQUFDb0IsaUJBQVMsRUFBRTtBQUFaO0FBTFQsTUFERixDQURGLENBakNGLENBREYsQ0FERjtBQWlERDs7QUFyRjZDLEM7Ozs7Ozs7Ozs7O0FDZGhELE1BQU1HLE1BQU0sR0FBR0MsbUJBQU8sQ0FBRSxnQ0FBRixDQUFQLEVBQWY7O0FBRUFELE1BQU0sQ0FDSEUsR0FESCxDQUNPLEdBRFAsRUFDWSxPQURaO0FBR0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosTUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TWVzc2FnZSwgR3JpZH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxHcmlkPlxyXG4gICAgICA8R3JpZC5Db2x1bW4gdGV4dEFsaWduPSdyaWdodCc+XHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIGNvbXBhY3RcclxuICAgICAgICAgIHNpemU9J3RpbnknXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQXBwIGRlc2lnbmVkIGJ5IFRoZWd1eWhlcmVcclxuICAgICAgICA8L01lc3NhZ2U+XHJcbiAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtNZW51fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vcm91dGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1lbnVcclxuICAgICAgICBoZWFkZXI9J3RydWUnXHJcbiAgICAgICAgc2l6ZT0nbWFzc2l2ZSdcclxuICAgICAgICBzdHlsZT17e21hcmdpblRvcDogJzEwcHgnfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0gaGVhZGVyXHJcbiAgICAgICAgICBuYW1lPSdCUkVBSyBSQU5ET01JWkVSJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj0ncmlnaHQnPlxyXG4gICAgICAgICAgPExpbmsgcm91dGU9Jy9tYWluJz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdpdGVtJz5cclxuICAgICAgICAgICAgICBNYWluXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIHJvdXRlPScvZWRpdCc+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0naXRlbSc+XHJcbiAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lk1lbnU+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29udGFpbmVyLCBEaXZpZGVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQge0Ryb3Bkb3duLCBHcmlkLCBCdXR0b24sIEhlYWRlciwgTWVzc2FnZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5cclxubGV0IGFjdFNldExpc3QgPSBbXTtcclxuZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHtcclxuICBhY3RTZXRMaXN0Lmxlbmd0aCA9IDA7XHJcbiAgZm9yIChjb25zdCBpIGluIHdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaSkgJiYgaSAhPT0gXCJhbGx5LXN1cHBvcnRzLWNhY2hlXCIpIHtcclxuICAgICAgYWN0U2V0TGlzdC5wdXNoKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGkpKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluTWVudSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBnZXRPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIGFjdGl2aXR5OiAnJ1xyXG4gIH1cclxuXHJcbi8vIENoYW5nZXMgdGl0bGUgZGlzcGxheSB0byBtYXRjaCBjdXJyZW50IHZhbHVlIGFuZCBrZWVwcyB0cmFjayBvZiB0cnVlIHRpdGxlXHJcbiAgaGFuZGxlQ2hhbmdlID0gKGUsIHt2YWx1ZX0pID0+IHRoaXMuc2V0U3RhdGUoe3RpdGxlOiB2YWx1ZSwgYWN0aXZpdHk6ICcnfSk7XHJcblxyXG4gIGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgbGV0IGFjdGl2aXRpZXMsIGFjdFdlaWdodHMsIGFjdE5hbWVzLCBzdW1XZWlnaHQsIHJhbmQ7XHJcbiAgICBhY3Rpdml0aWVzID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdGF0ZS50aXRsZSkpLmFjdGl2aXRpZXM7XHJcbiAgICBhY3ROYW1lcyA9IGFjdGl2aXRpZXMubWFwKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgcmV0dXJuIGUua2V5O1xyXG4gICAgfSk7XHJcbiAgICBhY3RXZWlnaHRzID0gYWN0aXZpdGllcy5tYXAoZnVuY3Rpb24oZSkge1xyXG4gICAgICByZXR1cm4gZS53ZWlnaHQ7XHJcbiAgICB9KTtcclxuICAgIHN1bVdlaWdodCA9IGFjdFdlaWdodHMucmVkdWNlKGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgcmV0dXJuIGEgKyBiO1xyXG4gICAgfSwgMCk7XHJcbiAgICByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc3VtV2VpZ2h0KTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0V2VpZ2h0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICByYW5kIC09IGFjdFdlaWdodHNbaV07XHJcbiAgICAgIGlmIChyYW5kIDwgMCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2aXR5OiBhY3ROYW1lc1tpXX0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezh9PlxyXG4gICAgICAgICAgICAgIDxoMiBzdHlsZT17e3RleHRBbGlnbjoncmlnaHQnfX0+Q2hvb3NlIEFjdGl2aXR5IFNldDwvaDI+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NX0+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0FjdGl2aXR5IFNldCdcclxuICAgICAgICAgICAgICBzZWFyY2hcclxuICAgICAgICAgICAgICBzZWxlY3Rpb25cclxuICAgICAgICAgICAgICBvcHRpb25zPXthY3RTZXRMaXN0fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezEwfVxyXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249J21pZGRsZSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxIZWFkZXIgc2l6ZT0naHVnZSc+TXkgYnJlYWsgd2lsbCBub3cgYmUuLi48L0hlYWRlcj5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgc2l6ZT0nbWFzc2l2ZSdcclxuICAgICAgICAgICAgICBwcmltYXJ5XHJcbiAgICAgICAgICAgICAgZmxvYXRlZD0ncmlnaHQnXHJcbiAgICAgICAgICAgICAgY29udGVudD0nQnJlYWsgVGltZSEnXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBwb3NpdGl2ZVxyXG4gICAgICAgICAgICAgICAgc2l6ZT0naHVnZSdcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3RoaXMuc3RhdGUuYWN0aXZpdHl9XHJcbiAgICAgICAgICAgICAgICBoaWRkZW49eyF0aGlzLnN0YXRlLmFjdGl2aXR5fVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSAoJ25leHQtcm91dGVzJykoKTtcclxuXHJcbnJvdXRlc1xyXG4gIC5hZGQoJy8nLCAnL21haW4nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==