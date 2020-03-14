webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Logo/index.js":
/*!**************************************!*\
  !*** ./src/components/Logo/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _GlitchShader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlitchShader */ "./src/components/Logo/GlitchShader.js");
var _jsxFileName = "/Users/snehabelkhale/flux/src/components/Logo/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // THREE.OBJLoader expects THREE to be a global object

if (true) {
  window.THREE = three__WEBPACK_IMPORTED_MODULE_1__;
} else {}

__webpack_require__(/*! three/examples/js/loaders/OBJLoader */ "./node_modules/three/examples/js/loaders/OBJLoader.js");

var Logo = function Logo() {
  var mountRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var controls = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var scale = 0.8;
  var h = 300 * scale;
  var w = 600 * scale;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var width = mountRef.current.clientWidth;
    var height = mountRef.current.clientHeight;
    var frameId;
    var startTime = Date.now();
    var scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
    var camera = new three__WEBPACK_IMPORTED_MODULE_1__["OrthographicCamera"](-6 / 4, 6 / 4, 3 / 4, -3 / 4, .01, 1000);
    var renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({
      antialias: true
    });
    var logoMesh;
    var loader = new window.THREE.OBJLoader();
    loader.load("logo_01.obj", function (obj) {
      logoMesh = obj.children[0];
      var mUniforms = {
        time: {
          value: 0
        }
      };
      var material = new three__WEBPACK_IMPORTED_MODULE_1__["ShaderMaterial"]({
        uniforms: mUniforms,
        vertexShader: _GlitchShader__WEBPACK_IMPORTED_MODULE_2__["default"].vertex,
        fragmentShader: _GlitchShader__WEBPACK_IMPORTED_MODULE_2__["default"].fragment,
        side: three__WEBPACK_IMPORTED_MODULE_1__["DoubleSide"]
      });
      logoMesh.material = material;
      scene.add(logoMesh);
    });
    camera.position.z = 4;
    renderer.setClearColor('#FFFFFF');
    renderer.setSize(w, h);
    renderer.setPixelRatio(2);

    var renderScene = function renderScene() {
      renderer.render(scene, camera);
    };

    var handleResize = function handleResize() {
      // width = mountRef.current.clientWidth;
      // height = mountRef.current.clientHeight;
      // renderer.setSize(width, height);
      // camera.aspect = width / height;
      // camera.updateProjectionMatrix();
      renderScene();
    };

    var animate = function animate() {
      if (logoMesh) {
        logoMesh.material.uniforms.time.value = (Date.now() - startTime) / 1000;
      }

      renderScene();
      frameId = window.requestAnimationFrame(animate);
    };

    var start = function start() {
      if (!frameId) {
        frameId = requestAnimationFrame(animate);
      }
    };

    var stop = function stop() {
      cancelAnimationFrame(frameId);
      frameId = null;
    };

    mountRef.current.appendChild(renderer.domElement);
    window.addEventListener('resize', handleResize);
    start();
    controls.current = {
      start: start,
      stop: stop
    };
    return function () {
      stop();
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
      scene.remove(cube);
      geometry.dispose();
      material.dispose();
    };
  }, []);
  return __jsx("div", {
    style: {
      height: h,
      width: w
    },
    ref: mountRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ })

})
//# sourceMappingURL=index.js.95cc1b9d7db8a2f56a9b.hot-update.js.map