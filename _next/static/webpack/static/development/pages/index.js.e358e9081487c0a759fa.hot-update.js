webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/ImageGrid/index.tsx":
/*!********************************************!*\
  !*** ./src/components/ImageGrid/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.css */ "./src/components/ImageGrid/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Carousel_arrow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Carousel/arrow */ "./src/components/Carousel/arrow.js");
var _jsxFileName = "/Users/kif/pr/flux/web/src/components/ImageGrid/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var ImageGrid = function ImageGrid(_ref) {
  var urls = _ref.urls,
      className = _ref.className;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      curIndex = _useState[0],
      setCurIndex = _useState[1];

  var curUrl = urls[curIndex];
  return __jsx("div", {
    className: "".concat(_index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container, " ").concat(className),
    style: {
      backgroundImage: "url(".concat(curUrl, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx(_Carousel_arrow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.arrow,
    onClick: function onClick() {
      curIndex !== 0 ? setCurIndex(curIndex - 1) : setCurIndex(urls.length - 1);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx(_Carousel_arrow__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.arrow,
    onClick: function onClick() {
      curIndex < urls.length - 1 ? setCurIndex(curIndex + 1) : setCurIndex(0);
    },
    isRight: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageGrid);

/***/ })

})
//# sourceMappingURL=index.js.e358e9081487c0a759fa.hot-update.js.map