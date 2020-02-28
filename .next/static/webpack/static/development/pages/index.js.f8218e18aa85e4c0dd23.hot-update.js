webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_APIService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/APIService */ "./utils/APIService.js");

var _jsxFileName = "/Users/michal.grabowski/Documents/learning/todo/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var Index = function Index(_ref) {
  var todos = _ref.todos;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, todos.map(function (todo) {
    return __jsx("div", {
      key: todo.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, todo.title);
  }));
};

Index.getInitialProps = function _callee() {
  var response;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_utils_APIService__WEBPACK_IMPORTED_MODULE_2__["apiGet"])('/todos'));

        case 2:
          response = _context.sent;
          console.log(response);
          return _context.abrupt("return", {
            todos: response.data
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/APIService.js":
/*!*****************************!*\
  !*** ./utils/APIService.js ***!
  \*****************************/
/*! exports provided: apiGet, apiPost, apiDelete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiGet", function() { return apiGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiPost", function() { return apiPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiDelete", function() { return apiDelete; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var API_BASE = 'http://localhost:3009';

var apiGet = function apiGet(path) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(API_BASE, "/").concat(path));
};

var apiPost = function apiPost(path, body) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("".concat(API_BASE, "/").concat(path), body);
};

var apiDelete = function apiDelete(path, body) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("".concat(API_BASE, "/").concat(path), body);
};



/***/ })

})
//# sourceMappingURL=index.js.f8218e18aa85e4c0dd23.hot-update.js.map