webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/JoinForm/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/JoinForm/index.tsx ***!
  \*******************************************/
/*! exports provided: useInput, areInputsValid, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areInputsValid", function() { return areInputsValid; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/InputField */ "./src/components/InputField/index.tsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.tsx");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.module.css */ "./src/components/JoinForm/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/kif/pr/flux/web/src/components/JoinForm/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var useInput = function useInput(name, validation, defaultValue) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultValue || ''),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      error = _useState2[0],
      setError = _useState2[1];

  var handleInputChange = function handleInputChange(event) {
    var val = event.target.value;
    var schema = validation(value);
    schema.validate(val).then(function () {
      return setError('');
    })["catch"](function (err) {
      return setError(err.message);
    });
    setValue(val);
  };

  return {
    value: value,
    name: name,
    validationMessage: error,
    onChange: handleInputChange
  };
};
var areInputsValid = function areInputsValid(inputs) {
  var valid = true;

  for (var i = 0; i < inputs.length; i += 1) {
    var input = inputs[i];
    var isValue = !!input.value;
    var isError = !!input.validationMessage;

    if (isError || !isValue) {
      valid = false;
    }
  }

  return valid;
};

var join = function join(email, fields, onSuccess, onFailure) {
  questions = fields.map(function (i) {
    return {
      key: i.key,
      values: i.props.value
    };
  });
  axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://localhost:9000/v1/subscribe', {
    email: email,
    questions: questions
  }).then(function (res) {
    onSuccess(res);
  })["catch"](function (err) {
    var data = err.response.data;
    onFailure(data);
  });
};

var JoinForm = function JoinForm(_ref) {
  var containerClass = _ref.containerClass;
  var emailProps = useInput('email', function () {
    return yup__WEBPACK_IMPORTED_MODULE_3__["string"]().email().required();
  }, '');
  var interestsProps = useInput('interests', function () {
    return yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required();
  }, '');
  var projectProps = useInput('project', function () {
    return yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required();
  }, '');
  var socialProps = useInput('social', function () {
    return yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required();
  }, '');

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      requestError = _useState3[0],
      setRequestError = _useState3[1];

  var allInputsValid = areInputsValid([emailProps, interestsProps, projectProps, socialProps]);

  var handleSuccess = function handleSuccess() {
    return console.log('[D] Request success!');
  };

  var handleFailure = function handleFailure(data) {
    return setRequestError(data.error);
  };

  var questions = [{
    key: 'What are your interests?',
    props: interestsProps
  }, {
    key: 'Do you have a project to work on during Flux event?',
    props: projectProps
  }, {
    key: 'Link to Instagram, Facebook or personal site',
    props: socialProps
  }];
  return __jsx("div", {
    className: containerClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, emailProps, {
    type: "email",
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.input,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  })), questions.map(function (i) {
    return __jsx(_components_InputField__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: i.key
    }, i.props, {
      type: "text",
      placeholder: i.key,
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.input,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }));
  }), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "Submit",
    buttonClass: _index_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.submitButton,
    disabled: !allInputsValid,
    onClick: function onClick() {
      return join(emailProps.value, questions, handleSuccess, handleFailure);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, requestError));
};

/* harmony default export */ __webpack_exports__["default"] = (JoinForm);

/***/ })

})
//# sourceMappingURL=index.js.bca43ac7bf94dee8b3cd.hot-update.js.map