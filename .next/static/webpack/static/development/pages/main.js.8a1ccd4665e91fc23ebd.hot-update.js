webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./pages/main/index.js":
/*!*****************************!*\
  !*** ./pages/main/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainMenu; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var actSetList = [];

function getOptions() {
  actSetList.length = 0;

  for (var i in window.localStorage) {
    if (window.localStorage.getItem(i) && i !== "ally-supports-cache") {
      actSetList.push(JSON.parse(window.localStorage.getItem(i)));
    }
  }
}

var MainMenu = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(MainMenu, _Component);

  var _super = _createSuper(MainMenu);

  function MainMenu() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      title: '',
      activity: ''
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (e, _ref) {
      var value = _ref.value;
      return _this.setState({
        title: value,
        activity: ''
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleClick", function () {
      var activities, actWeights, actNames, sumWeight, rand;
      activities = JSON.parse(window.localStorage.getItem(_this.state.title)).activities;
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

      for (var i = 0; i < actWeights.length; i++) {
        rand -= actWeights[i];

        if (rand < 0) {
          _this.setState({
            activity: actNames[i]
          });

          break;
        }
      }

      ;
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      getOptions();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"], null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: 8
      }, __jsx("h2", {
        style: {
          textAlign: 'right'
        }
      }, "Choose Activity Set")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: 5
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
        placeholder: "Activity Set",
        search: true,
        selection: true,
        options: actSetList,
        onChange: this.handleChange,
        value: this.state.title
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: 10,
        verticalAlign: "middle"
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Header"], {
        size: "huge"
      }, "My break will now be...")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, {
        width: 6
      }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        size: "massive",
        primary: true,
        floated: "right",
        content: "Break Time!",
        onClick: this.handleClick
      }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Row, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Grid"].Column, null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_9__["Message"], {
        positive: true,
        size: "huge",
        content: this.state.activity,
        hidden: !this.state.activity,
        style: {
          textAlign: 'center'
        }
      })))));
    }
  }]);

  return MainMenu;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tYWluL2luZGV4LmpzIl0sIm5hbWVzIjpbImFjdFNldExpc3QiLCJnZXRPcHRpb25zIiwibGVuZ3RoIiwiaSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiSlNPTiIsInBhcnNlIiwiTWFpbk1lbnUiLCJ0aXRsZSIsImFjdGl2aXR5IiwiZSIsInZhbHVlIiwic2V0U3RhdGUiLCJhY3Rpdml0aWVzIiwiYWN0V2VpZ2h0cyIsImFjdE5hbWVzIiwic3VtV2VpZ2h0IiwicmFuZCIsInN0YXRlIiwibWFwIiwia2V5Iiwid2VpZ2h0IiwicmVkdWNlIiwiYSIsImIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0ZXh0QWxpZ24iLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVDbGljayIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBSUEsVUFBVSxHQUFHLEVBQWpCOztBQUNBLFNBQVNDLFVBQVQsR0FBc0I7QUFDcEJELFlBQVUsQ0FBQ0UsTUFBWCxHQUFvQixDQUFwQjs7QUFDQSxPQUFLLElBQU1DLENBQVgsSUFBZ0JDLE1BQU0sQ0FBQ0MsWUFBdkIsRUFBcUM7QUFDbkMsUUFBSUQsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QkgsQ0FBNUIsS0FBa0NBLENBQUMsS0FBSyxxQkFBNUMsRUFBbUU7QUFDakVILGdCQUFVLENBQUNPLElBQVgsQ0FBZ0JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCSCxDQUE1QixDQUFYLENBQWhCO0FBQ0Q7QUFDRjtBQUNGOztJQUVvQk8sUTs7Ozs7Ozs7Ozs7Ozs7OztnTkFLWDtBQUNOQyxXQUFLLEVBQUUsRUFERDtBQUVOQyxjQUFRLEVBQUU7QUFGSixLOzt1TkFNTyxVQUFDQyxDQUFEO0FBQUEs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QUFJLEVBQUMsTUFGUDtBQUdFLGVBQU8sRUFBRSxLQUFLWixLQUFMLENBQVdULFFBSHRCO0FBSUUsY0FBTSxFQUFFLENBQUMsS0FBS1MsS0FBTCxDQUFXVCxRQUp0QjtBQUtFLGFBQUssRUFBRTtBQUFDbUIsbUJBQVMsRUFBRTtBQUFaO0FBTFQsUUFERixDQURGLENBakNGLENBREYsQ0FERjtBQWlERDs7OztFQXJGbUNHLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxtYWluLmpzLjhhMWNjZDQ2NjVlOTFmYzIzZWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7RHJvcGRvd24sIEdyaWQsIEJ1dHRvbiwgSGVhZGVyLCBNZXNzYWdlfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5sZXQgYWN0U2V0TGlzdCA9IFtdO1xyXG5mdW5jdGlvbiBnZXRPcHRpb25zKCkge1xyXG4gIGFjdFNldExpc3QubGVuZ3RoID0gMDtcclxuICBmb3IgKGNvbnN0IGkgaW4gd2luZG93LmxvY2FsU3RvcmFnZSkge1xyXG4gICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShpKSAmJiBpICE9PSBcImFsbHktc3VwcG9ydHMtY2FjaGVcIikge1xyXG4gICAgICBhY3RTZXRMaXN0LnB1c2goSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oaSkpKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5NZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGdldE9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHN0YXRlID0ge1xyXG4gICAgdGl0bGU6ICcnLFxyXG4gICAgYWN0aXZpdHk6ICcnXHJcbiAgfVxyXG5cclxuLy8gQ2hhbmdlcyB0aXRsZSBkaXNwbGF5IHRvIG1hdGNoIGN1cnJlbnQgdmFsdWUgYW5kIGtlZXBzIHRyYWNrIG9mIHRydWUgdGl0bGVcclxuICBoYW5kbGVDaGFuZ2UgPSAoZSwge3ZhbHVlfSkgPT4gdGhpcy5zZXRTdGF0ZSh7dGl0bGU6IHZhbHVlLCBhY3Rpdml0eTogJyd9KTtcclxuXHJcbiAgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBsZXQgYWN0aXZpdGllcywgYWN0V2VpZ2h0cywgYWN0TmFtZXMsIHN1bVdlaWdodCwgcmFuZDtcclxuICAgIGFjdGl2aXRpZXMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnN0YXRlLnRpdGxlKSkuYWN0aXZpdGllcztcclxuICAgIGFjdE5hbWVzID0gYWN0aXZpdGllcy5tYXAoZnVuY3Rpb24oZSkge1xyXG4gICAgICByZXR1cm4gZS5rZXk7XHJcbiAgICB9KTtcclxuICAgIGFjdFdlaWdodHMgPSBhY3Rpdml0aWVzLm1hcChmdW5jdGlvbihlKSB7XHJcbiAgICAgIHJldHVybiBlLndlaWdodDtcclxuICAgIH0pO1xyXG4gICAgc3VtV2VpZ2h0ID0gYWN0V2VpZ2h0cy5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICByZXR1cm4gYSArIGI7XHJcbiAgICB9LCAwKTtcclxuICAgIHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzdW1XZWlnaHQpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3RXZWlnaHRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHJhbmQgLT0gYWN0V2VpZ2h0c1tpXTtcclxuICAgICAgaWYgKHJhbmQgPCAwKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZpdHk6IGFjdE5hbWVzW2ldfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17OH0+XHJcbiAgICAgICAgICAgICAgPGgyIHN0eWxlPXt7dGV4dEFsaWduOidyaWdodCd9fT5DaG9vc2UgQWN0aXZpdHkgU2V0PC9oMj5cclxuICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs1fT5cclxuICAgICAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQWN0aXZpdHkgU2V0J1xyXG4gICAgICAgICAgICAgIHNlYXJjaFxyXG4gICAgICAgICAgICAgIHNlbGVjdGlvblxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e2FjdFNldExpc3R9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRpdGxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW5cclxuICAgICAgICAgICAgICB3aWR0aD17MTB9XHJcbiAgICAgICAgICAgICAgdmVydGljYWxBbGlnbj0nbWlkZGxlJ1xyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEhlYWRlciBzaXplPSdodWdlJz5NeSBicmVhayB3aWxsIG5vdyBiZS4uLjwvSGVhZGVyPlxyXG4gICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBzaXplPSdtYXNzaXZlJ1xyXG4gICAgICAgICAgICAgIHByaW1hcnlcclxuICAgICAgICAgICAgICBmbG9hdGVkPSdyaWdodCdcclxuICAgICAgICAgICAgICBjb250ZW50PSdCcmVhayBUaW1lISdcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICA8R3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPE1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIHBvc2l0aXZlXHJcbiAgICAgICAgICAgICAgICBzaXplPSdodWdlJ1xyXG4gICAgICAgICAgICAgICAgY29udGVudD17dGhpcy5zdGF0ZS5hY3Rpdml0eX1cclxuICAgICAgICAgICAgICAgIGhpZGRlbj17IXRoaXMuc3RhdGUuYWN0aXZpdHl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcid9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICA8L0dyaWQuUm93PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9