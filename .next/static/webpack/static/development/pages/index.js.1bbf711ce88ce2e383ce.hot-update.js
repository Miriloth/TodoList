webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


var API_BASE = 'http://localhost:3009';

var apiGet = function apiGet(path) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function apiGet$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("".concat(API_BASE, "/").concat(path)));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

var apiPost = function apiPost(path, body) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function apiPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("".concat(API_BASE, "/").concat(path), body));

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var apiDelete = function apiDelete(path, body) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function apiDelete$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("".concat(API_BASE, "/").concat(path), body));

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
};



/***/ })

})
//# sourceMappingURL=index.js.1bbf711ce88ce2e383ce.hot-update.js.map