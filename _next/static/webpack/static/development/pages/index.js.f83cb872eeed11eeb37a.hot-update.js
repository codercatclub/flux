webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, props));
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var use_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-media */ "./node_modules/use-media/lib/index.js");
/* harmony import */ var use_media__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(use_media__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ "./src/pages/index/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_JoinForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/JoinForm */ "./src/components/JoinForm/index.tsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.tsx");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Carousel */ "./src/components/Carousel/index.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Logo */ "./src/components/Logo/index.js");
/* harmony import */ var _components_ImageGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ImageGrid */ "./src/components/ImageGrid/index.tsx");
var _jsxFileName = "/Users/kif/pr/flux/web/src/pages/index/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var prefix = function prefix(name) {
  return "".concat("", "/").concat(name);
};

var people = [{
  name: 'Kirill Kovalevskiy',
  avatar: 'kirill_avatar.jpg',
  bio: "There is a question that adults often ask to kids \"Who do you\n      want to be when you grow up?\". While most of the kids would say\n      a fire fighter, a doctor or a policeman, my answer was \"I want\n      to be a robot\". I think that by and large I succeeded."
}, {
  name: 'Sneha Belkhale',
  avatar: 'sneha_avatar.jpg',
  bio: "A beautiful creature,\n      shy on outside but with strong rebel spirit inside,\n      and a unique combinations of abilities.\n      She creates VR games, generates music with math and code, and\n      walks 6 miles a day religiously and eats Trader Joes veggie wrap.\n      She is passionate about minimalism and location independent lifestyles."
}, {
  name: 'Yulia Tolmacheva',
  avatar: 'yulia_avatar.jpg',
  bio: "I'm a UX/UI designer obsessed with translating users design needs\n      to empathetic solutions and bridging the gap between users and their goals.\n      I try to surround myself with enthusiastic individuals who think differen tly.\n      I want to live in a world where we can learn to understand and communicate\n      with each other freely, embracing our different cultures."
}];

var Index = function Index() {
  var autoplay =  false ? undefined : 0;
  var isMobile = use_media__WEBPACK_IMPORTED_MODULE_1___default()({
    maxWidth: 768
  });
  var totalImages = 24;
  var galleryElements = [];
  var totalTbilisiImages = 9;
  var tbilisiImages = [];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    react_ga__WEBPACK_IMPORTED_MODULE_4__["default"].initialize('UA-100222662-1');
    react_ga__WEBPACK_IMPORTED_MODULE_4__["default"].pageview(window.location.pathname + window.location.search);
  }, []);

  for (var i = 1; i < totalTbilisiImages + 1; i += 1) {
    tbilisiImages.push("tbilisi/img_".concat(i, ".jpg"));
  }

  for (var _i = 1; _i < totalImages; _i += 1) {
    galleryElements.push(__jsx("div", {
      key: _i,
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.galleryImg,
      style: {
        backgroundImage: "url(gallery/img_".concat(_i, ".jpg)")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }));
  }

  var peopleElements = people.map(function (person) {
    return __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.person,
      key: person.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("img", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.avatar,
      src: prefix(person.avatar),
      alt: person.avatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.personBody,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("h3", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.personName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, person.name), __jsx("p", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.bio,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, person.bio)));
  });
  return __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.layout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Flux."), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: prefix('/'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("h3", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: prefix('/about'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("h3", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.menuItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "About"))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.titleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.titleBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    scale: isMobile ? 0.4 : 0.75,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx("h3", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.punchline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "join the remote revolution"))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.statements,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.statement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "WHO?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "We are group of travelers, entrepreneurs, engineers and artist.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.statement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "WHAT?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "A one month coliving and coworking gathering.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.statement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "WHY?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "We believe in a remote future and balanced lifestyle outside of office cubicles.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.statement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "WHERE?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Tbilisi, Georgia")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.statement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "WHEN?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "June 1 - 30, 2020"))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.videoWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.videoOverlay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), __jsx("iframe", {
    id: "video",
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.video,
    width: "100%",
    height: "600px",
    src: "https://www.youtube.com/embed/TzrbSXzNUhA?autoplay=".concat(autoplay, "&amp;loop=1&amp;enablejsapi=1&amp;&amp;playerapiid=featuredytplayer&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;theme=light&amp;wmode=transparent&amp;mute=1&amp;playlist=TzrbSXzNUhA"),
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.textBlocks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.textBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "What is Flux?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Flux is a one month gathering of creative and open minded individuals in vibrant locations around the world. We like to cultivate a space for technology, art, peer to peer education, and a location independent lifestyle. We believe the time spent working and living together will facilitate connections, friendship, and collaboration.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.textBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Who is Flux for?"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Digital Nomads who are looking to connect with the local and global community", ' '), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "People who are interested in a location independent life style but don't know where to start"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Artists, hackers and technology enthusiast of any kind")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }))), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.carousel,
    height: 280,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, galleryElements), __jsx("h2", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.sectionHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Events"), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.events,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.event,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.eventContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.eventTitleBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Tbilisi, Georgia"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "09.01 - 09.31. 2020"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, "Price: $300")), __jsx("p", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.eventDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Tbilisi, the capital of Georgia, is a unique and uprising destination for digital nomads. The combination of low prices, one year visas, vibrant culture, and rich young community, makes it a perfect spot for a Flux gathering."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "//TODO: We are very exited to host Flux in Tbilisi and connect with other Fluxers and local people."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "We are renting a large 3 bedroom apartment in the city around Fabrika - a famous art and tech hub in Marjanishvili district. It is a very walkable area popular among younger locals, located a 25 minute walk from the Old Town."), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.joinButton,
    text: "Join",
    onClick: function onClick() {
      return window.scrollTo(0, 9999);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  })), __jsx(_components_ImageGrid__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.eventImages,
    urls: tbilisiImages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }))), __jsx("h2", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.sectionHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "People"), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.people,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, peopleElements), __jsx("h2", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.sectionHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "Join"), __jsx(_components_JoinForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    containerClass: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.joinForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "\xA9 2020 Flux."), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, "Made by", __jsx("a", {
    href: "https://codercat.tk",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, "CODERCAT"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.f83cb872eeed11eeb37a.hot-update.js.map