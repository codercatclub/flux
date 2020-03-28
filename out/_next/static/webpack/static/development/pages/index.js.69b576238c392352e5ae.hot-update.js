webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/InputField/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/InputField/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorMessage */ "./src/components/ErrorMessage/index.tsx");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.css */ "./src/components/InputField/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/kif/pr/flux/web/src/components/InputField/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var InputField = function InputField(_ref) {
  var name = _ref.name,
      value = _ref.value,
      placeholder = _ref.placeholder,
      type = _ref.type,
      disabled = _ref.disabled,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      className = _ref.className,
      autoComplete = _ref.autoComplete,
      validationMessage = _ref.validationMessage;
  return __jsx("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("input", {
    className: "".concat(_index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input, " ").concat(!validationMessage && !!value ? _index_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.valid : ''),
    placeholder: (placeholder || type).toUpperCase(),
    type: type,
    name: name || type,
    value: value,
    onChange: onChange,
    autoComplete: autoComplete,
    onKeyDown: onKeyDown,
    disabled: disabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_ErrorMessage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    text: validationMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ })

})
//# sourceMappingURL=index.js.69b576238c392352e5ae.hot-update.js.map