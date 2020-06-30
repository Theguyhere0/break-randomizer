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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./pages/edit/index.js":
/*!*****************************!*\
  !*** ./pages/edit/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateList; });
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

class CreateList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      actList: '',
      title: '',
      tempName: '',
      aOpen: false,
      nOpen: false,
      iOpen: false
    });

    _defineProperty(this, "handleAddition", (e, {
      value
    }) => {
      window.localStorage.setItem(value, JSON.stringify({
        key: value,
        text: value,
        value,
        activities: []
      }));
      getOptions();
    });

    _defineProperty(this, "handleChange", (e, {
      value
    }) => this.setState({
      actList: value,
      title: value
    }));

    _defineProperty(this, "handleInputChange", (e, {
      value
    }) => this.setState({
      actList: value
    }));

    _defineProperty(this, "handleDelete", () => {
      window.localStorage.removeItem(this.state.title);
      this.setState({
        actList: '',
        title: ''
      });
      getOptions();
    });

    _defineProperty(this, "handleAntidelete", () => {
      if (this.state.actList) {
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          negative: true,
          content: "Comfirm Delete",
          onClick: this.handleDelete
        });
      } else {
        return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
          negative: true,
          content: "You cannot delete nothing!"
        });
      }
    });

    _defineProperty(this, "handleEdit", () => {
      if (this.state.title) {
        const activities = JSON.parse(window.localStorage.getItem(this.state.title)).activities;
        window.localStorage.removeItem(this.state.title);
        window.localStorage.setItem(this.state.actList, JSON.stringify({
          key: this.state.actList,
          text: this.state.actList,
          value: this.state.actList,
          activities
        }));
        this.setState({
          title: this.state.actList
        });
        this.setState({
          aOpen: true
        });
        getOptions();
      }
    });

    _defineProperty(this, "handleActChange", (e, {
      value
    }) => this.setState({
      tempName: value
    }));

    _defineProperty(this, "handleAdd", () => {
      if (this.state.tempName) {
        let activities = JSON.parse(window.localStorage.getItem(this.state.title)).activities;
        activities.push({
          key: this.state.tempName,
          weight: 1
        });
        window.localStorage.setItem(this.state.title, JSON.stringify({
          key: this.state.title,
          text: this.state.title,
          value: this.state.title,
          activities
        }));
        this.setState({
          tempName: ''
        });
        getOptions();
      }
    });

    _defineProperty(this, "handleRemove", e => {
      let activities = JSON.parse(window.localStorage.getItem(this.state.title)).activities;
      const removed = e.currentTarget.parentNode.parentNode.getAttribute('class').replace('row ', '');
      activities.splice(activities.map(function (e) {
        return e.key;
      }).indexOf(removed), 1);
      window.localStorage.setItem(this.state.title, JSON.stringify({
        key: this.state.title,
        text: this.state.title,
        value: this.state.title,
        activities
      }));
      this.setState({
        tempName: this.state.tempName
      });
      getOptions();
    });

    _defineProperty(this, "handleModify", e => {
      if (e.currentTarget.parentNode.querySelector('input').value) {
        let activities = JSON.parse(window.localStorage.getItem(this.state.title)).activities;
        const newName = e.currentTarget.parentNode.querySelector('input').value;
        const oldName = e.currentTarget.parentNode.querySelector('input').getAttribute('value');
        activities[activities.map(function (e) {
          return e.key;
        }).indexOf(oldName)].key = newName;
        window.localStorage.setItem(this.state.title, JSON.stringify({
          key: this.state.title,
          text: this.state.title,
          value: this.state.title,
          activities
        }));
        this.setState({
          nOpen: true
        });
        getOptions();
      }
    });

    _defineProperty(this, "handleIncrement", e => {
      let activities = JSON.parse(window.localStorage.getItem(this.state.title)).activities;
      const activity = e.currentTarget.parentNode.parentNode.querySelector('input').getAttribute('value');
      activities[activities.map(function (e) {
        return e.key;
      }).indexOf(activity)].weight++;
      window.localStorage.setItem(this.state.title, JSON.stringify({
        key: this.state.title,
        text: this.state.title,
        value: this.state.title,
        activities
      }));
      this.setState({
        tempName: this.state.tempName
      });
      getOptions();
    });

    _defineProperty(this, "handleDecrement", e => {
      let activities = JSON.parse(window.localStorage.getItem(this.state.title)).activities;
      const activity = e.currentTarget.parentNode.parentNode.querySelector('input').getAttribute('value');

      if (activities[activities.map(function (e) {
        return e.key;
      }).indexOf(activity)].weight > 1) {
        activities[activities.map(function (e) {
          return e.key;
        }).indexOf(activity)].weight--;
        window.localStorage.setItem(this.state.title, JSON.stringify({
          key: this.state.title,
          text: this.state.title,
          value: this.state.title,
          activities
        }));
        this.setState({
          tempName: this.state.tempName
        });
        getOptions();
      } else {
        this.setState({
          iOpen: true
        });
      }
    });

    _defineProperty(this, "handleAClose", () => this.setState({
      aOpen: false
    }));

    _defineProperty(this, "handleNClose", () => this.setState({
      nOpen: false
    }));

    _defineProperty(this, "handleIClose", () => this.setState({
      iOpen: false
    }));
  }

  componentDidMount() {
    getOptions();
  }

  renderActivities() {
    if (this.state.title) {
      if (window.localStorage.getItem(this.state.title)) {
        return JSON.parse(window.localStorage.getItem(this.state.title)).activities.map(activity => {
          return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, {
            key: activity.key,
            className: activity.key
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
            width: 2,
            textAlign: "right",
            verticalAlign: "middle"
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            circular: true,
            negative: true,
            icon: "minus",
            size: "medium",
            onClick: this.handleRemove
          })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
            width: 9
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
            action: {
              color: 'blue',
              content: 'Edit Name',
              onClick: this.handleModify
            },
            size: "small",
            fluid: true,
            defaultValue: activity.key
          })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
            width: 2,
            textAlign: "right",
            verticalAlign: "middle"
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            circular: true,
            negative: true,
            icon: "minus",
            size: "mini",
            onClick: this.handleDecrement
          })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
            width: 1,
            textAlign: "center",
            verticalAlign: "middle"
          }, __jsx("h2", null, activity.weight)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
            width: 2,
            verticalAlign: "middle"
          }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            circular: true,
            positive: true,
            icon: "plus",
            size: "mini",
            onClick: this.handleIncrement
          })));
        });
      }
    }
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 8
    }, __jsx("h2", {
      style: {
        textAlign: 'right'
      }
    }, "Saved Activity Sets")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 5
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      placeholder: "Activity Set",
      search: true,
      selection: true,
      options: actSetList,
      allowAdditions: true,
      additionLabel: "New Activity Set: ",
      onAddItem: this.handleAddition,
      onChange: this.handleChange,
      value: this.state.title
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      textAlign: "center"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
      trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
        size: "large",
        placeholder: "Title",
        value: this.state.actList,
        onChange: this.handleInputChange,
        action: true
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Popup"], {
        trigger: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
          negative: true,
          icon: "minus",
          size: "large"
        }),
        content: this.handleAntidelete,
        on: "click",
        position: "top center"
      }), __jsx("input", null), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        color: "blue",
        content: "Edit Title",
        onClick: this.handleEdit,
        disabled: !this.state.actList
      })),
      content: __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
        negative: true,
        content: "You cannot title an activity set nothing!"
      }),
      position: "top center",
      disabled: !!this.state.actList
    }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 2
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 9,
      textAlign: "center",
      verticalAlign: "bottom"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
      color: "blue",
      header: "Activity Name",
      content: "Name of your break activity."
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 5,
      textAlign: "center"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Message"], {
      color: "red",
      header: "Weight",
      content: "How much you want to weight an activity to show up. Each unit is like adding another entry into a lottery."
    }))), this.renderActivities(), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 2,
      textAlign: "right",
      verticalAlign: "middle"
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      circular: true,
      positive: true,
      icon: "plus",
      size: "medium",
      onClick: this.handleAdd
    })), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"].Column, {
      width: 9
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      size: "small",
      placeholder: "Name",
      fluid: true,
      value: this.state.tempName,
      onChange: this.handleActChange
    })))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["TransitionablePortal"], {
      onClose: this.handleAClose,
      open: this.state.aOpen
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      textAlign: "center",
      vertical: true,
      inverted: true,
      color: "green",
      secondary: true,
      style: {
        left: '30%',
        right: '30%',
        minWidth: '370px',
        top: '45%',
        position: 'fixed',
        zIndex: 1000
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], null, "Activity set title was changed successfully."))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["TransitionablePortal"], {
      onClose: this.handleNClose,
      open: this.state.nOpen
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      textAlign: "center",
      vertical: true,
      inverted: true,
      color: "green",
      tertiary: true,
      style: {
        left: '30%',
        right: '30%',
        minWidth: '350px',
        top: '45%',
        position: 'fixed',
        zIndex: 1000
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], null, "Activity name was changed successfully."))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["TransitionablePortal"], {
      onClose: this.handleIClose,
      open: this.state.iOpen
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Segment"], {
      textAlign: "center",
      vertical: true,
      inverted: true,
      color: "red",
      tertiary: true,
      style: {
        left: '30%',
        right: '30%',
        minWidth: '270px',
        top: '45%',
        position: 'fixed',
        zIndex: 1000
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Header"], null, "Weight cannot be less than 1."))));
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

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/edit/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mxlin\Documents\GitHub\break-randomizer\pages\edit\index.js */"./pages/edit/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZWRpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yb3V0ZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiXSwibmFtZXMiOlsiSGVhZGVyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwibWFyZ2luVG9wIiwicHJvcHMiLCJjaGlsZHJlbiIsImFjdFNldExpc3QiLCJnZXRPcHRpb25zIiwibGVuZ3RoIiwiaSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiSlNPTiIsInBhcnNlIiwiQ3JlYXRlTGlzdCIsImFjdExpc3QiLCJ0aXRsZSIsInRlbXBOYW1lIiwiYU9wZW4iLCJuT3BlbiIsImlPcGVuIiwiZSIsInZhbHVlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImtleSIsInRleHQiLCJhY3Rpdml0aWVzIiwic2V0U3RhdGUiLCJyZW1vdmVJdGVtIiwic3RhdGUiLCJoYW5kbGVEZWxldGUiLCJ3ZWlnaHQiLCJyZW1vdmVkIiwiY3VycmVudFRhcmdldCIsInBhcmVudE5vZGUiLCJnZXRBdHRyaWJ1dGUiLCJyZXBsYWNlIiwic3BsaWNlIiwibWFwIiwiaW5kZXhPZiIsInF1ZXJ5U2VsZWN0b3IiLCJuZXdOYW1lIiwib2xkTmFtZSIsImFjdGl2aXR5IiwiY29tcG9uZW50RGlkTW91bnQiLCJyZW5kZXJBY3Rpdml0aWVzIiwiaGFuZGxlUmVtb3ZlIiwiY29sb3IiLCJjb250ZW50Iiwib25DbGljayIsImhhbmRsZU1vZGlmeSIsImhhbmRsZURlY3JlbWVudCIsImhhbmRsZUluY3JlbWVudCIsInRleHRBbGlnbiIsImhhbmRsZUFkZGl0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJoYW5kbGVBbnRpZGVsZXRlIiwiaGFuZGxlRWRpdCIsImhhbmRsZUFkZCIsImhhbmRsZUFjdENoYW5nZSIsImhhbmRsZUFDbG9zZSIsImxlZnQiLCJyaWdodCIsIm1pbldpZHRoIiwidG9wIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJoYW5kbGVOQ2xvc2UiLCJoYW5kbGVJQ2xvc2UiLCJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUdFLGNBQVEsTUFIVjtBQUlFLFdBQUssRUFBQyxLQUpSO0FBS0UsY0FBUSxNQUxWO0FBTUUsV0FBSyxFQUFFO0FBQ0wyQyxZQUFJLEVBQUUsS0FERDtBQUVMQyxhQUFLLEVBQUUsS0FGRjtBQUdMQyxnQkFBUSxFQUFFLE9BSEw7QUFJTEMsV0FBRyxFQUFFLEtBSkE7QUFLTEMsZ0JBQVEsRUFBRSxPQUxMO0FBTUxDLGNBQU0sRUFBRTtBQU5IO0FBTlQsT0FlRSxNQUFDLHdEQUFELHdDQWZGLENBSkYsQ0E3SkYsQ0FERjtBQXNMRDs7QUF6WStDLEM7Ozs7Ozs7Ozs7O0FDZGxELE1BQU1HLE1BQU0sR0FBR0MsbUJBQU8sQ0FBRSxnQ0FBRixDQUFQLEVBQWY7O0FBRUFELE1BQU0sQ0FDSEUsR0FESCxDQUNPLEdBRFAsRUFDWSxPQURaO0FBR0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosTUFBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TWVzc2FnZSwgR3JpZH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxHcmlkPlxyXG4gICAgICA8R3JpZC5Db2x1bW4gdGV4dEFsaWduPSdyaWdodCc+XHJcbiAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgIGNvbXBhY3RcclxuICAgICAgICAgIHNpemU9J3RpbnknXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQXBwIGRlc2lnbmVkIGJ5IFRoZWd1eWhlcmVcclxuICAgICAgICA8L01lc3NhZ2U+XHJcbiAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtNZW51fSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vcm91dGVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1lbnVcclxuICAgICAgICBoZWFkZXI9J3RydWUnXHJcbiAgICAgICAgc2l6ZT0nbWFzc2l2ZSdcclxuICAgICAgICBzdHlsZT17e21hcmdpblRvcDogJzEwcHgnfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0gaGVhZGVyXHJcbiAgICAgICAgICBuYW1lPSdCUkVBSyBSQU5ET01JWkVSJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPE1lbnUuTWVudSBwb3NpdGlvbj0ncmlnaHQnPlxyXG4gICAgICAgICAgPExpbmsgcm91dGU9Jy9tYWluJz5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdpdGVtJz5cclxuICAgICAgICAgICAgICBNYWluXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIHJvdXRlPScvZWRpdCc+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0naXRlbSc+XHJcbiAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lk1lbnU+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q29udGFpbmVyLCBEaXZpZGVyfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlbWFudGljLXVpQDIuNC4yL2Rpc3Qvc2VtYW50aWMubWluLmNzc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQge0dyaWQsIERyb3Bkb3duLCBJbnB1dCwgQnV0dG9uLCBNZXNzYWdlLCBQb3B1cCwgVHJhbnNpdGlvbmFibGVQb3J0YWwsIFNlZ21lbnQsIEhlYWRlcn0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5cclxubGV0IGFjdFNldExpc3QgPSBbXTtcclxuZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHtcclxuICBhY3RTZXRMaXN0Lmxlbmd0aCA9IDA7XHJcbiAgZm9yIChjb25zdCBpIGluIHdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcclxuICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaSkgJiYgaSAhPT0gXCJhbGx5LXN1cHBvcnRzLWNhY2hlXCIpIHtcclxuICAgICAgYWN0U2V0TGlzdC5wdXNoKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGkpKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGdldE9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgYWN0TGlzdDogJycsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICB0ZW1wTmFtZTogJycsXHJcbiAgICBhT3BlbjogZmFsc2UsXHJcbiAgICBuT3BlbjogZmFsc2UsXHJcbiAgICBpT3BlbjogZmFsc2VcclxuICB9O1xyXG5cclxuLy8gQWRkcyBhY3Rpdml0eSBsaXN0IGludG8gbG9jYWwgc3RvcmFnZVxyXG4gIGhhbmRsZUFkZGl0aW9uID0gKGUsIHt2YWx1ZX0pID0+IHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh2YWx1ZSwgSlNPTi5zdHJpbmdpZnkoe2tleTogdmFsdWUsIHRleHQ6IHZhbHVlLCB2YWx1ZSwgYWN0aXZpdGllczogW119KSk7XHJcbiAgICBnZXRPcHRpb25zKCk7XHJcbiAgfVxyXG5cclxuLy8gQ2hhbmdlcyB0aXRsZSBkaXNwbGF5IHRvIG1hdGNoIGN1cnJlbnQgdmFsdWUgYW5kIGtlZXBzIHRyYWNrIG9mIHRydWUgdGl0bGVcclxuICBoYW5kbGVDaGFuZ2UgPSAoZSwge3ZhbHVlfSkgPT4gdGhpcy5zZXRTdGF0ZSh7YWN0TGlzdDogdmFsdWUsIHRpdGxlOiB2YWx1ZX0pO1xyXG5cclxuLy8gQWxsb3dzIGNoYW5nZXMgaW4gYWN0aXZpdHkgbGlzdCBpbnB1dCBmaWVsZFxyXG4gIGhhbmRsZUlucHV0Q2hhbmdlID0gKGUsIHt2YWx1ZX0pID0+IHRoaXMuc2V0U3RhdGUoe2FjdExpc3Q6IHZhbHVlfSk7XHJcblxyXG4vLyBEZWxldGVzIHRoZSBhY3Rpdml0eSBsaXN0XHJcbiAgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuc3RhdGUudGl0bGUpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7YWN0TGlzdDogJycsIHRpdGxlOiAnJ30pO1xyXG4gICAgZ2V0T3B0aW9ucygpO1xyXG4gIH07XHJcblxyXG4vLyBFbnN1cmVzIG5vIGFjY2lkZW50YWwgZGVsZXRpb24gb2YgYWN0aXZpdHkgbGlzdFxyXG4gIGhhbmRsZUFudGlkZWxldGUgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5hY3RMaXN0KSB7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBuZWdhdGl2ZVxyXG4gICAgICAgICAgY29udGVudD0nQ29tZmlybSBEZWxldGUnXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZURlbGV0ZX1cclxuICAgICAgICAvPlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICBuZWdhdGl2ZVxyXG4gICAgICAgICAgY29udGVudD0nWW91IGNhbm5vdCBkZWxldGUgbm90aGluZyEnXHJcbiAgICAgICAgLz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4vLyBFZGl0cyB0aGUgdGl0bGUgb2YgdGhlIGFjdGl2ZSBhY3Rpdml0eSBsaXN0XHJcbiAgaGFuZGxlRWRpdCA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnRpdGxlKSB7XHJcbiAgICAgIGNvbnN0IGFjdGl2aXRpZXMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0YXRlLnRpdGxlKSkuYWN0aXZpdGllcztcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMuc3RhdGUudGl0bGUpO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zdGF0ZS5hY3RMaXN0LCBKU09OLnN0cmluZ2lmeSh7a2V5OiB0aGlzLnN0YXRlLmFjdExpc3QsIHRleHQ6IHRoaXMuc3RhdGUuYWN0TGlzdCwgdmFsdWU6IHRoaXMuc3RhdGUuYWN0TGlzdCwgYWN0aXZpdGllc30pKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dGl0bGU6IHRoaXMuc3RhdGUuYWN0TGlzdH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthT3BlbjogdHJ1ZX0pO1xyXG4gICAgICBnZXRPcHRpb25zKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbi8vIEFsbG93cyBjaGFuZ2VzIGluIGFjdGl2aXR5IGlucHV0IGZpZWxkXHJcbiAgaGFuZGxlQWN0Q2hhbmdlID0gKGUsIHt2YWx1ZX0pID0+IHRoaXMuc2V0U3RhdGUoe3RlbXBOYW1lOiB2YWx1ZX0pO1xyXG5cclxuLy8gQWRkcyBhbiBhY3Rpdml0eSB0byB0aGUgYWN0aXZpdHkgbGlzdFxyXG4gIGhhbmRsZUFkZCA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnRlbXBOYW1lKSB7XHJcbiAgICAgIGxldCBhY3Rpdml0aWVzID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdGF0ZS50aXRsZSkpLmFjdGl2aXRpZXM7XHJcbiAgICAgIGFjdGl2aXRpZXMucHVzaCh7a2V5OiB0aGlzLnN0YXRlLnRlbXBOYW1lLCB3ZWlnaHQ6IDF9KTtcclxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RhdGUudGl0bGUsIEpTT04uc3RyaW5naWZ5KHtrZXk6IHRoaXMuc3RhdGUudGl0bGUsIHRleHQ6IHRoaXMuc3RhdGUudGl0bGUsIHZhbHVlOiB0aGlzLnN0YXRlLnRpdGxlLCBhY3Rpdml0aWVzfSkpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt0ZW1wTmFtZTogJyd9KTtcclxuICAgICAgZ2V0T3B0aW9ucygpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4vLyBSZW1vdmVzIGFuIGFjdGl2aXR5IGZyb20gdGhlIGFjdGl2aXR5IGxpc3RcclxuICBoYW5kbGVSZW1vdmUgPSBlID0+IHtcclxuICAgIGxldCBhY3Rpdml0aWVzID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdGF0ZS50aXRsZSkpLmFjdGl2aXRpZXM7XHJcbiAgICBjb25zdCByZW1vdmVkID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykucmVwbGFjZSgncm93ICcsICcnKTtcclxuICAgIGFjdGl2aXRpZXMuc3BsaWNlKGFjdGl2aXRpZXMubWFwKGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGUua2V5OyB9KS5pbmRleE9mKHJlbW92ZWQpLCAxKTtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0YXRlLnRpdGxlLCBKU09OLnN0cmluZ2lmeSh7a2V5OiB0aGlzLnN0YXRlLnRpdGxlLCB0ZXh0OiB0aGlzLnN0YXRlLnRpdGxlLCB2YWx1ZTogdGhpcy5zdGF0ZS50aXRsZSwgYWN0aXZpdGllc30pKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3RlbXBOYW1lOiB0aGlzLnN0YXRlLnRlbXBOYW1lfSk7XHJcbiAgICBnZXRPcHRpb25zKCk7XHJcbiAgfTtcclxuXHJcbi8vIE1vZGlmaWVzIHRoZSBuYW1lIG9mIGFuIGFjdGl2aXR5XHJcbiAgaGFuZGxlTW9kaWZ5ID0gZSA9PiB7XHJcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSkge1xyXG4gICAgICBsZXQgYWN0aXZpdGllcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RhdGUudGl0bGUpKS5hY3Rpdml0aWVzO1xyXG4gICAgICBjb25zdCBuZXdOYW1lID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcclxuICAgICAgY29uc3Qgb2xkTmFtZSA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG4gICAgICBhY3Rpdml0aWVzW2FjdGl2aXRpZXMubWFwKGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGUua2V5OyB9KS5pbmRleE9mKG9sZE5hbWUpXS5rZXkgPSBuZXdOYW1lO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zdGF0ZS50aXRsZSwgSlNPTi5zdHJpbmdpZnkoe2tleTogdGhpcy5zdGF0ZS50aXRsZSwgdGV4dDogdGhpcy5zdGF0ZS50aXRsZSwgdmFsdWU6IHRoaXMuc3RhdGUudGl0bGUsIGFjdGl2aXRpZXN9KSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe25PcGVuOiB0cnVlfSk7XHJcbiAgICAgIGdldE9wdGlvbnMoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuLy8gSW5jcmVtZW50cyB0aGUgd2VpZ2h0IG9mIGFuIGFjdGl2aXR5XHJcbiAgaGFuZGxlSW5jcmVtZW50ID0gZSA9PiB7XHJcbiAgICBsZXQgYWN0aXZpdGllcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RhdGUudGl0bGUpKS5hY3Rpdml0aWVzO1xyXG4gICAgY29uc3QgYWN0aXZpdHkgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG4gICAgYWN0aXZpdGllc1thY3Rpdml0aWVzLm1hcChmdW5jdGlvbihlKSB7IHJldHVybiBlLmtleTsgfSkuaW5kZXhPZihhY3Rpdml0eSldLndlaWdodCArKztcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnN0YXRlLnRpdGxlLCBKU09OLnN0cmluZ2lmeSh7a2V5OiB0aGlzLnN0YXRlLnRpdGxlLCB0ZXh0OiB0aGlzLnN0YXRlLnRpdGxlLCB2YWx1ZTogdGhpcy5zdGF0ZS50aXRsZSwgYWN0aXZpdGllc30pKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3RlbXBOYW1lOiB0aGlzLnN0YXRlLnRlbXBOYW1lfSk7XHJcbiAgICBnZXRPcHRpb25zKCk7XHJcbiAgfTtcclxuXHJcbi8vIERlY3JlbWVudHMgdGhlIHdlaWdodCBvZiBhbiBhY3Rpdml0eVxyXG4gIGhhbmRsZURlY3JlbWVudCA9IGUgPT4ge1xyXG4gICAgbGV0IGFjdGl2aXRpZXMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0YXRlLnRpdGxlKSkuYWN0aXZpdGllcztcclxuICAgIGNvbnN0IGFjdGl2aXR5ID0gZS5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuICAgIGlmIChhY3Rpdml0aWVzW2FjdGl2aXRpZXMubWFwKGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGUua2V5OyB9KS5pbmRleE9mKGFjdGl2aXR5KV0ud2VpZ2h0ID4gMSkge1xyXG4gICAgICBhY3Rpdml0aWVzW2FjdGl2aXRpZXMubWFwKGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGUua2V5OyB9KS5pbmRleE9mKGFjdGl2aXR5KV0ud2VpZ2h0IC0tO1xyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5zdGF0ZS50aXRsZSwgSlNPTi5zdHJpbmdpZnkoe2tleTogdGhpcy5zdGF0ZS50aXRsZSwgdGV4dDogdGhpcy5zdGF0ZS50aXRsZSwgdmFsdWU6IHRoaXMuc3RhdGUudGl0bGUsIGFjdGl2aXRpZXN9KSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RlbXBOYW1lOiB0aGlzLnN0YXRlLnRlbXBOYW1lfSk7XHJcbiAgICAgIGdldE9wdGlvbnMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2lPcGVuOiB0cnVlfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbi8vIENsb3NlcyBwb3J0YWwgZm9yIGFjdGl2aXR5IGxpc3QgdGl0bGUgY2hhbmdlIGNvbmZpcm1hdGlvblxyXG4gIGhhbmRsZUFDbG9zZSA9ICgpID0+IHRoaXMuc2V0U3RhdGUoe2FPcGVuOiBmYWxzZX0pO1xyXG5cclxuLy8gQ2xvc2VzIHBvcnRhbCBmb3IgYWN0aXZpdHkgbmFtZSBjaGFuZ2UgY29uZmlybWF0aW9uXHJcbiAgaGFuZGxlTkNsb3NlID0gKCkgPT4gdGhpcy5zZXRTdGF0ZSh7bk9wZW46IGZhbHNlfSk7XHJcblxyXG4vLyBDbG9zZXMgcG9ydGFsIGZvciBhY3Rpdml0eSBuYW1lIGNoYW5nZSBjb25maXJtYXRpb25cclxuICBoYW5kbGVJQ2xvc2UgPSAoKSA9PiB0aGlzLnNldFN0YXRlKHtpT3BlbjogZmFsc2V9KTtcclxuXHJcbiAgcmVuZGVyQWN0aXZpdGllcygpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLnRpdGxlKSB7XHJcbiAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdGF0ZS50aXRsZSkpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5zdGF0ZS50aXRsZSkpLmFjdGl2aXRpZXMubWFwKGFjdGl2aXR5ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgIDxHcmlkLlJvd1xyXG4gICAgICAgICAgICAgICAga2V5PXthY3Rpdml0eS5rZXl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2aXR5LmtleX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW5cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj0ncmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249J21pZGRsZSdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyXHJcbiAgICAgICAgICAgICAgICAgICAgbmVnYXRpdmVcclxuICAgICAgICAgICAgICAgICAgICBpY29uPSdtaW51cydcclxuICAgICAgICAgICAgICAgICAgICBzaXplPSdtZWRpdW0nXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVSZW1vdmV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs5fT5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ0VkaXQgTmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZU1vZGlmeVxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICAgICAgZmx1aWRcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2FjdGl2aXR5LmtleX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW5cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbj0ncmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249J21pZGRsZSdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyXHJcbiAgICAgICAgICAgICAgICAgICAgbmVnYXRpdmVcclxuICAgICAgICAgICAgICAgICAgICBpY29uPSdtaW51cydcclxuICAgICAgICAgICAgICAgICAgICBzaXplPSdtaW5pJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRGVjcmVtZW50fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtblxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD17MX1cclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249J21pZGRsZSdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGgyPnthY3Rpdml0eS53ZWlnaHR9PC9oMj5cclxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW5cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249J21pZGRsZSdcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNpcmN1bGFyXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpdmVcclxuICAgICAgICAgICAgICAgICAgICBpY29uPSdwbHVzJ1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9J21pbmknXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJbmNyZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybihcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8R3JpZD5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cclxuICAgICAgICAgICAgICA8aDIgc3R5bGU9e3t0ZXh0QWxpZ246ICdyaWdodCd9fT5TYXZlZCBBY3Rpdml0eSBTZXRzPC9oMj5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs1fT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBY3Rpdml0eSBTZXQnXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17YWN0U2V0TGlzdH1cclxuICAgICAgICAgICAgICAgIGFsbG93QWRkaXRpb25zXHJcbiAgICAgICAgICAgICAgICBhZGRpdGlvbkxhYmVsPSdOZXcgQWN0aXZpdHkgU2V0OiAnXHJcbiAgICAgICAgICAgICAgICBvbkFkZEl0ZW09e3RoaXMuaGFuZGxlQWRkaXRpb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50aXRsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHRleHRBbGlnbj0nY2VudGVyJz5cclxuICAgICAgICAgICAgICA8UG9wdXBcclxuICAgICAgICAgICAgICAgIHRyaWdnZXI9e1xyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBzaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWN0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb3B1cFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcj17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBuZWdhdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249J21pbnVzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J2xhcmdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5oYW5kbGVBbnRpZGVsZXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb249J2NsaWNrJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249J3RvcCBjZW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj0nYmx1ZSdcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9J0VkaXQgVGl0bGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUVkaXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuc3RhdGUuYWN0TGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0lucHV0PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgbmVnYXRpdmVcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PSdZb3UgY2Fubm90IHRpdGxlIGFuIGFjdGl2aXR5IHNldCBub3RoaW5nISdcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPSd0b3AgY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyEhdGhpcy5zdGF0ZS5hY3RMaXN0fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezJ9PjwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtblxyXG4gICAgICAgICAgICAgIHdpZHRoPXs5fVxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ249J2JvdHRvbSdcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxNZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBjb2xvcj0nYmx1ZSdcclxuICAgICAgICAgICAgICAgIGhlYWRlcj0nQWN0aXZpdHkgTmFtZSdcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9J05hbWUgb2YgeW91ciBicmVhayBhY3Rpdml0eS4nXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezV9XHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8TWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgY29sb3I9J3JlZCdcclxuICAgICAgICAgICAgICAgIGhlYWRlcj0nV2VpZ2h0J1xyXG4gICAgICAgICAgICAgICAgY29udGVudD0nSG93IG11Y2ggeW91IHdhbnQgdG8gd2VpZ2h0IGFuIGFjdGl2aXR5IHRvIHNob3cgdXAuIEVhY2ggdW5pdCBpcyBsaWtlIGFkZGluZyBhbm90aGVyIGVudHJ5IGludG8gYSBsb3R0ZXJ5LidcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICAgIHt0aGlzLnJlbmRlckFjdGl2aXRpZXMoKX1cclxuICAgICAgICAgIDxHcmlkLlJvdz5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezJ9XHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduPSdyaWdodCdcclxuICAgICAgICAgICAgICB2ZXJ0aWNhbEFsaWduPSdtaWRkbGUnXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjaXJjdWxhclxyXG4gICAgICAgICAgICAgICAgcG9zaXRpdmVcclxuICAgICAgICAgICAgICAgIGljb249J3BsdXMnXHJcbiAgICAgICAgICAgICAgICBzaXplPSdtZWRpdW0nXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezl9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgc2l6ZT0nc21hbGwnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nTmFtZSdcclxuICAgICAgICAgICAgICAgIGZsdWlkXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZW1wTmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUFjdENoYW5nZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgPC9HcmlkLlJvdz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPFRyYW5zaXRpb25hYmxlUG9ydGFsXHJcbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLmhhbmRsZUFDbG9zZX1cclxuICAgICAgICAgIG9wZW49e3RoaXMuc3RhdGUuYU9wZW59XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFNlZ21lbnRcclxuICAgICAgICAgICAgdGV4dEFsaWduPSdjZW50ZXInXHJcbiAgICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICAgIGludmVydGVkXHJcbiAgICAgICAgICAgIGNvbG9yPSdncmVlbidcclxuICAgICAgICAgICAgc2Vjb25kYXJ5XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbGVmdDogJzMwJScsXHJcbiAgICAgICAgICAgICAgcmlnaHQ6ICczMCUnLFxyXG4gICAgICAgICAgICAgIG1pbldpZHRoOiAnMzcwcHgnLFxyXG4gICAgICAgICAgICAgIHRvcDogJzQ1JScsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICAgekluZGV4OiAxMDAwXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+QWN0aXZpdHkgc2V0IHRpdGxlIHdhcyBjaGFuZ2VkIHN1Y2Nlc3NmdWxseS48L0hlYWRlcj5cclxuICAgICAgICAgIDwvU2VnbWVudD5cclxuICAgICAgICA8L1RyYW5zaXRpb25hYmxlUG9ydGFsPlxyXG4gICAgICAgIDxUcmFuc2l0aW9uYWJsZVBvcnRhbFxyXG4gICAgICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVOQ2xvc2V9XHJcbiAgICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm5PcGVufVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxTZWdtZW50XHJcbiAgICAgICAgICAgIHRleHRBbGlnbj0nY2VudGVyJ1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbFxyXG4gICAgICAgICAgICBpbnZlcnRlZFxyXG4gICAgICAgICAgICBjb2xvcj0nZ3JlZW4nXHJcbiAgICAgICAgICAgIHRlcnRpYXJ5XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbGVmdDogJzMwJScsXHJcbiAgICAgICAgICAgICAgcmlnaHQ6ICczMCUnLFxyXG4gICAgICAgICAgICAgIG1pbldpZHRoOiAnMzUwcHgnLFxyXG4gICAgICAgICAgICAgIHRvcDogJzQ1JScsXHJcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICAgICAgICAgICAgekluZGV4OiAxMDAwXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxIZWFkZXI+QWN0aXZpdHkgbmFtZSB3YXMgY2hhbmdlZCBzdWNjZXNzZnVsbHkuPC9IZWFkZXI+XHJcbiAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgPC9UcmFuc2l0aW9uYWJsZVBvcnRhbD5cclxuICAgICAgICA8VHJhbnNpdGlvbmFibGVQb3J0YWxcclxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuaGFuZGxlSUNsb3NlfVxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5pT3Blbn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8U2VnbWVudFxyXG4gICAgICAgICAgICB0ZXh0QWxpZ249J2NlbnRlcidcclxuICAgICAgICAgICAgdmVydGljYWxcclxuICAgICAgICAgICAgaW52ZXJ0ZWRcclxuICAgICAgICAgICAgY29sb3I9J3JlZCdcclxuICAgICAgICAgICAgdGVydGlhcnlcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBsZWZ0OiAnMzAlJyxcclxuICAgICAgICAgICAgICByaWdodDogJzMwJScsXHJcbiAgICAgICAgICAgICAgbWluV2lkdGg6ICcyNzBweCcsXHJcbiAgICAgICAgICAgICAgdG9wOiAnNDUlJyxcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgICAgICAgICAgICB6SW5kZXg6IDEwMDBcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEhlYWRlcj5XZWlnaHQgY2Fubm90IGJlIGxlc3MgdGhhbiAxLjwvSGVhZGVyPlxyXG4gICAgICAgICAgPC9TZWdtZW50PlxyXG4gICAgICAgIDwvVHJhbnNpdGlvbmFibGVQb3J0YWw+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiY29uc3Qgcm91dGVzID0gcmVxdWlyZSAoJ25leHQtcm91dGVzJykoKTtcclxuXHJcbnJvdXRlc1xyXG4gIC5hZGQoJy8nLCAnL21haW4nKTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gcm91dGVzO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJvdXRlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VtYW50aWMtdWktcmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==