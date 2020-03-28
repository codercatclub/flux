webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ "./src/pages/index/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_JoinForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/JoinForm */ "./src/components/JoinForm/index.tsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.tsx");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Carousel */ "./src/components/Carousel/index.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Logo */ "./src/components/Logo/index.js");
/* harmony import */ var _components_ImageGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ImageGrid */ "./src/components/ImageGrid/index.tsx");
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
    react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].initialize('UA-100222662-1');
    react_ga__WEBPACK_IMPORTED_MODULE_3__["default"].pageview(window.location.pathname + window.location.search);
  }, []);

  for (var i = 1; i < totalTbilisiImages + 1; i += 1) {
    tbilisiImages.push("tbilisi/img_".concat(i, ".jpg"));
  }

  for (var _i = 1; _i < totalImages; _i += 1) {
    galleryElements.push(__jsx("div", {
      key: _i,
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.galleryImg,
      style: {
        backgroundImage: "url(gallery/img_".concat(_i, ".jpg)")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  }

  var peopleElements = people.map(function (person) {
    return __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.person,
      key: person.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx("img", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.avatar,
      src: prefix(person.avatar),
      alt: person.avatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.personBody,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("h3", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.personName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, person.name), __jsx("p", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bio,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, person.bio)));
  });
  return __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.layout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Flux."), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.titleBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_8__["default"], {
    scale: isMobile ? 0.4 : 0.65,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx("h3", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.punchline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "join the remote revolution"))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.statements,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.statement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "WHO?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "We are group of travelers, entrepreneurs, engineers and artist.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.statement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "WHAT?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "A one month coliving and coworking gathering.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.statement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "WHY?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "We believe in a remote future and balanced lifestyle outside of office cubicles.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.statement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "WHERE?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Tbilisi, Georgia")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.statement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "WHEN?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "June 1 - 30, 2020"))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.videoWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.videoOverlay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), __jsx("iframe", {
    id: "video",
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.video,
    width: "100%",
    height: "600px",
    src: "https://www.youtube.com/embed/TzrbSXzNUhA?autoplay=".concat(autoplay, "&amp;loop=1&amp;enablejsapi=1&amp;&amp;playerapiid=featuredytplayer&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;theme=light&amp;wmode=transparent&amp;mute=1&amp;playlist=TzrbSXzNUhA"),
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  })), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.textBlocks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.textBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "What is Flux?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, "Flux is a one month gathering of creative and open minded individuals in vibrant locations around the world. We like to cultivate a space for technology, art, peer to peer education, and a location independent lifestyle. We believe the time spent working and living together will facilitate connections, friendship, and collaboration.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.textBlock,
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
  }, "Who is Flux for?"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "Digital Nomads who are looking to connect with the local and global community", ' '), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "People who are interested in a location independent life style but don't know where to start"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Artists, hackers and technology enthusiast of any kind")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }))), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.carousel,
    height: 280,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, galleryElements), __jsx("h2", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sectionHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, "Events"), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.events,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.event,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.eventContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.eventTitleBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Tbilisi, Georgia"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "09.01 - 09.31. 2020"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Price: $300")), __jsx("p", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.eventDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, "Tbilisi, the capital of Georgia, is a unique and uprising destination for digital nomads. The combination of low prices, one year visas, vibrant culture, and rich young community, makes it a perfect spot for a Flux gathering."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "//TODO: We are very exited to host Flux in Tbilisi and connect with other Fluxers and local people."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "We are renting a large 3 bedroom apartment in the city around Fabrika - a famous art and tech hub in Marjanishvili district. It is a very walkable area popular among younger locals, located a 25 minute walk from the Old Town."), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.joinButton,
    text: "Join",
    onClick: function onClick() {
      return window.scrollTo(0, 9999);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })), __jsx(_components_ImageGrid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.eventImages,
    urls: tbilisiImages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }))), __jsx("h2", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sectionHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "People"), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.people,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, peopleElements), __jsx("h2", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.sectionHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Join"), __jsx(_components_JoinForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    containerClass: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.joinForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }, "\xA9 2020 Flux."), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Made by", __jsx("a", {
    href: "https://codercat.tk",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "CODERCAT"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.bc1d45181aeabb537d4c.hot-update.js.map