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
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ "./src/pages/index/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_JoinForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/JoinForm */ "./src/components/JoinForm/index.tsx");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Button */ "./src/components/Button/index.tsx");
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Carousel */ "./src/components/Carousel/index.js");
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Logo */ "./src/components/Logo/index.js");
/* harmony import */ var _components_ImageGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ImageGrid */ "./src/components/ImageGrid/index.tsx");
var _jsxFileName = "/Users/kif/pr/flux/web/src/pages/index/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var prefix = function prefix(name) {
  return "".concat("", "/").concat(name);
};

var people = [{
  name: 'Kirill Kovalevskiy',
  avatar: 'kirill_avatar.jpg',
  bio: "There is a question that adult often ask to kids \"Who do you\n      want to be when you grow up?\" while most of the kids would say\n      a fire fighter, a doctor or a policeman, my answer was\"I want\n      to be a robot\". I think that by enlarge I succeeded."
}, {
  name: 'Sneha Belkhale',
  avatar: 'sneha_avatar.jpg',
  bio: "Beautiful creature with unique combinations of abilities.\n      She create VR games and generate music with math and code.\n      Shy on outside but with strong rebel spirit inside.\n      She walks 6 miles a day religiously and eats Trader Joes veggie wrap.\n      She is passionate about minimalism and location independent lifestyle."
}, {
  name: 'Yulia Tolmacheva',
  avatar: 'yulia_avatar.jpg',
  bio: "I'm a UX/UI designer obsessed with translating users design needs\n      to empathetic solutions and bridging the gap between users and their goals.\n      I try to surround myself with enthusiastic individuals who think differently.\n      I want to live in a world where we can learn to understand and communicate\n      with each other freely, embracing our different cultures."
}];

var Index = function Index() {
  var autoplay =  false ? undefined : 0;
  var isMobile = use_media__WEBPACK_IMPORTED_MODULE_1___default()({
    maxWidth: 768
  });
  console.log('[D] autoplay: ', autoplay);
  console.log('[D] prefix: ', "");
  console.log('[D] isMobile: ', isMobile);
  var totalImages = 24;
  var galleryElements = [];
  var totalTbilisiImages = 9;
  var tbilisiImages = [];

  for (var i = 1; i < totalTbilisiImages + 1; i += 1) {
    tbilisiImages.push("tbilisi/img_".concat(i, ".jpg"));
  }

  for (var _i = 1; _i < totalImages; _i += 1) {
    galleryElements.push(__jsx("div", {
      key: _i,
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.galleryImg,
      style: {
        backgroundImage: "url(gallery/img_".concat(_i, ".jpg)")
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }));
  }

  var peopleElements = people.map(function (person) {
    return __jsx("div", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.person,
      key: person.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("img", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.avatar,
      src: prefix(person.avatar),
      alt: person.avatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }), __jsx("h3", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.personName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, person.name), __jsx("p", {
      className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bio,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, person.bio));
  });
  return __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.layout,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Flux."), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.titleContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.titleBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    scale: isMobile ? 0.4 : 0.55,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("h3", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.punchline,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "join the remote revolution"))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.statements,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.statement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "WHO?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "We are group of travelers, entrepreneurs, engineers and artist.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.statement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "WHAT?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "One month coliving and coworking gathering.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.statement,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "WHY?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "We believe in remote feature and better lifestyle outside of office cubicles.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.statement,
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
  }, "WHERE?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "Tbilisi, Georgia")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.statement,
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
  }, "WHEN?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "June 1 - 30, 2020"))), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.videoWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.videoOverlay,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx("iframe", {
    id: "video",
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.video,
    width: "100%",
    height: "600px",
    src: "https://www.youtube.com/embed/TzrbSXzNUhA?autoplay=".concat(autoplay, "&amp;loop=1&amp;enablejsapi=1&amp;&amp;playerapiid=featuredytplayer&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;theme=light&amp;wmode=transparent&amp;mute=1&amp;playlist=TzrbSXzNUhA"),
    frameBorder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textBlocks,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "What is Flux?"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Flux is a one month gathering of creative and open minded individuals in vibrant locations around the world. The main goals are facilitate connections, friendship, collaboration, explore new cultures and have fun working and living together. Also we like to promote location independent life style and cultivate technology, art and peer to peer education.")), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.textBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Who is Flux for?"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "Beginner and experienced Digital Nomads who is looking to connect with local and global community", ' '), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "People who interested in location independent life style but doesn't know where to start"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Artists, hackers and technology enthusiast of any kind")), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Do not fit to any of these category. \uD83D\uDE42 Don't worry just drop as a message!"))), __jsx(_components_Carousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.carousel,
    height: 280,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, galleryElements), __jsx("h2", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sectionHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Events"), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.events,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.event,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.eventContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.eventTitleBlock,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Tbilisi, Georgia"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, "09.01 - 09.31. 2020"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Price: $300")), __jsx("p", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.eventDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Tbilisi the capital of Georgia is unique uprising destination for digital nomads. The combination of low prices, visa requirement vibrant culture and reach young community makes it a perfect spot for Flux gathering."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "This is one of our first event which makes it an excellent opportunity to engage with the Flux community. We are very exited to host it in Tbilisi and connect with other Fluxers and local community."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "We are renting a large 3 bedroom apartment in the city around Fabrika - famous art and tech place in Marjanishvili district. It is very walkable area popular among younger locals. Located 25 minutes walk from the Old Town."), __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.joinButton,
    text: "Join",
    onClick: function onClick() {
      return console.log('[D] Join button click!');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  })), __jsx(_components_ImageGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    urls: tbilisiImages,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }))), __jsx("h2", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sectionHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "People"), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.people,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, peopleElements), __jsx("h2", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.sectionHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, "Join"), __jsx(_components_JoinForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    containerClass: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.joinForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }), __jsx("div", {
    className: _index_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, "\xA9 2020 Flux."), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, "Made by", ' ', __jsx("a", {
    href: "https://codercat.tk",
    target: "_blank",
    rel: "noopener noreferrer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "CoderCat"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.a8bb88d4683a0e152aea.hot-update.js.map