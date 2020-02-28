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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var API_BASE = 'http://localhost:3009';

var apiGet = function apiGet(path) {
  console.log("".concat(API_BASE, "/").concat(path));
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
//# sourceMappingURL=index.js.b7629843625e48419d37.hot-update.js.map