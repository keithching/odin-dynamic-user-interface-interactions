/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.current {\n    color: black;\n}\n\n.navbar ul {\n    display: flex;\n    justify-content: center;\n    gap: 50px;\n    list-style-type: none;\n    color: grey;\n}\n\n.navbar ul li {\n    cursor: pointer;\n}\n\n.container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    gap: 20px;\n}\n\n/* dropdown */\n.dropdown p,\nul.dropdownitems li {\n    width: 120px;\n    cursor: pointer;\n    border-style: solid;\n    border-width: 0.5px;\n    border-color: lightgrey;\n    padding: 0 10px;\n    color: rgb(66, 66, 66);\n}\n\n.dropdown p {\n    background-color: rgba(0, 0, 0, 0.1);\n    margin: 0;\n    text-align: center;\n}\n\nul.dropdownitems {\n    padding: 0;\n    margin: 0;\n    text-align: center;\n}\n\nul.dropdownitems li {\n    list-style-type: none;\n\n    opacity: 0;\n    margin: -1px 0;\n}\n\n\nul.dropdownitems li.visible {\n    opacity: 1;\n}\n\n/* mobile menu  */\n.tabMenu {\n    display: flex;\n    justify-content: center;\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    gap: 20px;\n    background-color: rgba(48, 48, 48, 0.6);\n    color: lightgrey;\n    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);\n}\n\n.tabMenu .tabItem {\n    cursor: pointer;\n    padding: 10px 20px;\n    border-style: solid;\n    border-width: 0 0 2px 0;\n    border-color: transparent;\n}\n\n.tabMenu .tabItem.tabItem-current {\n    color: white;\n    border-bottom: solid;\n    border-width: 0 0 2px 0;\n}\n\n\n.top {\n    display: flex;\n    gap: 50px;\n    align-items: center;\n    margin-bottom: 50px;\n}\n\n/* image slider */\n.imageSlider {\n    width: 250px;\n    display: flex;\n    /* only show the first-ordered image */\n    justify-content: space-between;\n    border-style: solid;\n    border-width: 0.5px;\n    border-color: lightgrey;\n    border-radius: 10px;\n    gap: 100px;\n    /* show only the current image within the slider */\n    overflow: hidden;\n}\n\n.sliderButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 30px;\n    height: 30px;\n    background-color: white;\n    border-style: none;\n    border-radius: 20px;\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.sliderButton:hover {\n    background-color: lightgrey;\n}\n\n\n.images {\n    flex: 0;\n    padding: 0;\n    width: 300px;\n    height: auto;\n}\n\n/* current image */\n.image1 {\n    order: 1;\n}\n\n/* on queues */\n.image2 {\n    order: 2;\n}\n\n.image3 {\n    order: 3;\n}\n\n.image4 {\n    order: 4;\n}\n\n.image5 {\n    order: 5;\n}\n\n.navCircles {\n    display: flex;\n    gap: 20px;\n}\n\n.navCircles p {\n    width: 10px;\n    height: 10px;\n    padding: 0;\n    margin: 0;\n    border-style: solid;\n    border-width: 1px;\n    border-color: grey;\n    border-radius: 20px;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.currentCircle {\n    background-color: grey;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,YAAY;IACZ,SAAS;AACb;;AAEA,aAAa;AACb;;IAEI,YAAY;IACZ,eAAe;IACf,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,oCAAoC;IACpC,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;;IAErB,UAAU;IACV,cAAc;AAClB;;;AAGA;IACI,UAAU;AACd;;AAEA,iBAAiB;AACjB;IACI,aAAa;IACb,uBAAuB;IACvB,qBAAqB;IACrB,UAAU;IACV,SAAS;IACT,SAAS;IACT,uCAAuC;IACvC,gBAAgB;IAChB,0CAA0C;AAC9C;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;AAC7B;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,uBAAuB;AAC3B;;;AAGA;IACI,aAAa;IACb,SAAS;IACT,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA,iBAAiB;AACjB;IACI,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,8BAA8B;IAC9B,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,kDAAkD;IAClD,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,mBAAmB;IACnB,2CAA2C;IAC3C,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,2BAA2B;AAC/B;;;AAGA;IACI,OAAO;IACP,UAAU;IACV,YAAY;IACZ,YAAY;AAChB;;AAEA,kBAAkB;AAClB;IACI,QAAQ;AACZ;;AAEA,cAAc;AACd;IACI,QAAQ;AACZ;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,UAAU;IACV,SAAS;IACT,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B","sourcesContent":["body {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.current {\n    color: black;\n}\n\n.navbar ul {\n    display: flex;\n    justify-content: center;\n    gap: 50px;\n    list-style-type: none;\n    color: grey;\n}\n\n.navbar ul li {\n    cursor: pointer;\n}\n\n.container {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    gap: 20px;\n}\n\n/* dropdown */\n.dropdown p,\nul.dropdownitems li {\n    width: 120px;\n    cursor: pointer;\n    border-style: solid;\n    border-width: 0.5px;\n    border-color: lightgrey;\n    padding: 0 10px;\n    color: rgb(66, 66, 66);\n}\n\n.dropdown p {\n    background-color: rgba(0, 0, 0, 0.1);\n    margin: 0;\n    text-align: center;\n}\n\nul.dropdownitems {\n    padding: 0;\n    margin: 0;\n    text-align: center;\n}\n\nul.dropdownitems li {\n    list-style-type: none;\n\n    opacity: 0;\n    margin: -1px 0;\n}\n\n\nul.dropdownitems li.visible {\n    opacity: 1;\n}\n\n/* mobile menu  */\n.tabMenu {\n    display: flex;\n    justify-content: center;\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    gap: 20px;\n    background-color: rgba(48, 48, 48, 0.6);\n    color: lightgrey;\n    box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.3);\n}\n\n.tabMenu .tabItem {\n    cursor: pointer;\n    padding: 10px 20px;\n    border-style: solid;\n    border-width: 0 0 2px 0;\n    border-color: transparent;\n}\n\n.tabMenu .tabItem.tabItem-current {\n    color: white;\n    border-bottom: solid;\n    border-width: 0 0 2px 0;\n}\n\n\n.top {\n    display: flex;\n    gap: 50px;\n    align-items: center;\n    margin-bottom: 50px;\n}\n\n/* image slider */\n.imageSlider {\n    width: 250px;\n    display: flex;\n    /* only show the first-ordered image */\n    justify-content: space-between;\n    border-style: solid;\n    border-width: 0.5px;\n    border-color: lightgrey;\n    border-radius: 10px;\n    gap: 100px;\n    /* show only the current image within the slider */\n    overflow: hidden;\n}\n\n.sliderButton {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 30px;\n    height: 30px;\n    background-color: white;\n    border-style: none;\n    border-radius: 20px;\n    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.sliderButton:hover {\n    background-color: lightgrey;\n}\n\n\n.images {\n    flex: 0;\n    padding: 0;\n    width: 300px;\n    height: auto;\n}\n\n/* current image */\n.image1 {\n    order: 1;\n}\n\n/* on queues */\n.image2 {\n    order: 2;\n}\n\n.image3 {\n    order: 3;\n}\n\n.image4 {\n    order: 4;\n}\n\n.image5 {\n    order: 5;\n}\n\n.navCircles {\n    display: flex;\n    gap: 20px;\n}\n\n.navCircles p {\n    width: 10px;\n    height: 10px;\n    padding: 0;\n    margin: 0;\n    border-style: solid;\n    border-width: 1px;\n    border-color: grey;\n    border-radius: 20px;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n\n.currentCircle {\n    background-color: grey;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDropdownList": () => (/* binding */ createDropdownList)
/* harmony export */ });
const createDropdownList = () => {

    // DOM creation
    const container = document.querySelector('.container');

    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown');
    const timeInterval = document.createElement('p');
    timeInterval.textContent = 'time interval';
    const dropdownitems = document.createElement('ul');
    dropdownitems.classList.add('dropdownitems');
    const li1 = document.createElement('li');
    li1.textContent = 'Item A';
    const li2 = document.createElement('li');
    li2.textContent = 'Item B';    
    const li3 = document.createElement('li');
    li3.textContent = 'Item C';

    dropdownitems.appendChild(li1);
    dropdownitems.appendChild(li2);   
    dropdownitems.appendChild(li3);

    dropdown.appendChild(timeInterval);
    dropdown.appendChild(dropdownitems);

    container.appendChild(dropdown);

    // application logic
    const tab = document.querySelector('.dropdown > p');
    const list = document.querySelector('.dropdown > ul');
    let isClicked = false;
    
    tab.addEventListener('click', () => {
    
        if (!isClicked) {
    
            let i = 0;
            let interval = setInterval(() => {
                list.children[i].classList.add('visible');
                i++;

                if (i == list.children.length) {
                    clearInterval(interval);
                }
            }, 50); // time interval
    
            isClicked = true;

        } else {
    
            let i = 0;
            let interval = setInterval(() => {
                list.children[list.children.length - i - 1].classList.remove('visible');
                i++;

                if (i == list.children.length) {
                    clearInterval(interval);
                }
            }, 50); // time interval

            isClicked = false;
        }
    
    });
    
};



/***/ }),

/***/ "./src/image-slider.js":
/*!*****************************!*\
  !*** ./src/image-slider.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createImageSlider": () => (/* binding */ createImageSlider)
/* harmony export */ });
/* harmony import */ var _img_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/1.jpg */ "./src/img/1.jpg");
/* harmony import */ var _img_2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/2.jpeg */ "./src/img/2.jpeg");
/* harmony import */ var _img_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/3.jpg */ "./src/img/3.jpg");
/* harmony import */ var _img_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/4.jpg */ "./src/img/4.jpg");
/* harmony import */ var _img_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/5.jpg */ "./src/img/5.jpg");







const createImageSlider = () => {

    // DOM creation
    const container = document.querySelector('.container');

    const top = document.createElement('div');
    top.classList.add('top');
    const bottom = document.createElement('div');
    bottom.classList.add('bottom');

    const imageSlider = document.createElement('div');
    imageSlider.classList.add('imageSlider');

    const image1 = new Image();
    image1.classList.add('images');
    image1.src = _img_1_jpg__WEBPACK_IMPORTED_MODULE_0__;
    image1.classList.add('image1');
    imageSlider.appendChild(image1);

    const image2 = new Image();
    image2.classList.add('images');
    image2.src = _img_2_jpeg__WEBPACK_IMPORTED_MODULE_1__;
    image2.classList.add('image2');
    imageSlider.appendChild(image2);

    const image3 = new Image();
    image3.classList.add('images');
    image3.src = _img_3_jpg__WEBPACK_IMPORTED_MODULE_2__;
    image3.classList.add('image3');
    imageSlider.appendChild(image3);

    const image4 = new Image();
    image4.classList.add('images');
    image4.src = _img_4_jpg__WEBPACK_IMPORTED_MODULE_3__;
    image4.classList.add('image4');
    imageSlider.appendChild(image4);

    const image5 = new Image();
    image5.classList.add('images');
    image5.src = _img_5_jpg__WEBPACK_IMPORTED_MODULE_4__;
    image5.classList.add('image5');
    imageSlider.appendChild(image5);


    const previousButton = document.createElement('button');
    previousButton.classList.add('sliderButton');
    previousButton.textContent = '<';
    previousButton.addEventListener('click', switchToPreviousImage);
    
    const nextButton = document.createElement('button');
    nextButton.classList.add('sliderButton');
    nextButton.textContent = '>';
    nextButton.addEventListener('click', switchToNextImage);

    top.appendChild(previousButton);
    top.appendChild(imageSlider);
    top.appendChild(nextButton);

    // navigation circles DOM
    const navCircles = document.createElement('div');
    navCircles.classList.add('navCircles');
    navCircles.addEventListener('click', (e) => {

        if (e.target.nodeName == 'DIV') {
            return;
        }
        jumpToImage(e.target.id);
    })

    const circle1 = document.createElement('p');
    circle1.id = 'circle1';
    const circle2 = document.createElement('p');
    circle2.id = 'circle2';
    const circle3 = document.createElement('p');
    circle3.id = 'circle3';
    const circle4 = document.createElement('p');
    circle4.id = 'circle4';
    const circle5 = document.createElement('p');
    circle5.id = 'circle5';


    circle1.classList.add('currentCircle');

    navCircles.appendChild(circle1);
    navCircles.appendChild(circle2);
    navCircles.appendChild(circle3);
    navCircles.appendChild(circle4);
    navCircles.appendChild(circle5);


    bottom.appendChild(navCircles);

    container.appendChild(top);
    container.appendChild(bottom);


    // execute slide show
    playSlideShow();

};


const playSlideShow = () => {

    // slide show: 5-second interval
    const showImage = setInterval(() => {
        switchToNextImage();
    }, 5000);

    // function for stopping the slider when navbar gets clicked away from image slider
    const stopSlider = () => {
            clearInterval(showImage);
    };

    const navbar = document.querySelector('.navbar ul');
    const imageSliderId = 'image-slider-id';

    navbar.addEventListener('click', (e) => {

        // return if click not on the list items
        if (e.target.nodeName == 'UL') {
            return;
        }

        if (e.target.id !== imageSliderId) {
            stopSlider();
        }

    });

};


const jumpToImage = (circleId) => {

    // set the input id as the current image
    let newImageSourceIndex;

    if (circleId == 'circle1') {
        newImageSourceIndex = 0;
    } else if (circleId == 'circle2') {
        newImageSourceIndex = 1;        
    } else if (circleId == 'circle3') {
        newImageSourceIndex = 2;        
    } else if (circleId == 'circle4') {
        newImageSourceIndex = 3;        
    } else if (circleId == 'circle5') {
        newImageSourceIndex = 4;        
    } 


    const images = document.querySelectorAll('.images');

    // reorder the image array so that the previous image becomes the current image
    const reorderedImages = Array.from(images); // create array from nodelist
    const shortenedArray = reorderedImages.splice(newImageSourceIndex, images.length - newImageSourceIndex); 
    // shortened array being the extracted sub-array
    // reorderedImages being the remaining sub-array

    const finalArray = shortenedArray.concat(reorderedImages); // joining the extracted array and the remaining array together

    // assign the classes so that the new current image is shown within the frame

    // remove existing ordering
    images.forEach(image => {
        for (let i = 0; i < images.length; i++) {
            image.classList.remove(`image${i+1}`);
        }
    });
    
    // assign new ordering
    for (let i = 0; i < finalArray.length; i++) {
        finalArray[i].classList.add(`image${i+1}`);
    }
    

    // nav circles styling
    const navCircles = document.querySelector('.navCircles').children;

    for (let i = 0; i < navCircles.length; i++) {
        navCircles[i].classList.remove('currentCircle');
    }

    navCircles[newImageSourceIndex].classList.add('currentCircle');
    
};


const switchToPreviousImage = () => {

    // get the current image
    const currentImage = document.querySelector('.image1');
    const images = document.querySelectorAll('.images');
    let currentImageSourceIndex;

    images.forEach((image, index) => {
        if (image === currentImage) {
            currentImageSourceIndex = index;
        } 
    });

    // get the previous image in the queue
    let previousImageSourceIndex;

    if (currentImageSourceIndex == 0) {
        previousImageSourceIndex = images.length - 1;
    } else {
        previousImageSourceIndex = currentImageSourceIndex - 1;
    }

    // reorder the image array so that the previous image becomes the current image
    const reorderedImages = Array.from(images); // create array from nodelist
    const shortenedArray = reorderedImages.splice(previousImageSourceIndex, images.length - previousImageSourceIndex); 
    // shortened array being the extracted sub-array
    // reorderedImages being the remaining sub-array

    const finalArray = shortenedArray.concat(reorderedImages); // joining the extracted array and the remaining array together

    // assign the classes so that the new current image is shown within the frame

    // remove existing ordering
    images.forEach(image => {
        for (let i = 0; i < images.length; i++) {
            image.classList.remove(`image${i+1}`);
        }
    });
    
    // assign new ordering
    for (let i = 0; i < finalArray.length; i++) {
        finalArray[i].classList.add(`image${i+1}`);
    }


    // nav circles styling
    const navCircles = document.querySelector('.navCircles').children;

    for (let i = 0; i < navCircles.length; i++) {
        navCircles[i].classList.remove('currentCircle');
    }

    navCircles[previousImageSourceIndex].classList.add('currentCircle');

};


const switchToNextImage = () => {

    // get the current image
    const currentImage = document.querySelector('.image1');
    const images = document.querySelectorAll('.images');
    let currentImageSourceIndex;

    images.forEach((image, index) => {
        if (image === currentImage) {
            currentImageSourceIndex = index;
        } 
    });

    // get the next image in the queue
    let nextImageSourceIndex;

    if (currentImageSourceIndex == images.length - 1) {
        nextImageSourceIndex = 0;
    } else {
        nextImageSourceIndex = currentImageSourceIndex + 1;
    }

    // reorder the image array so that the next image becomes the current image
    const reorderedImages = Array.from(images); // create array from nodelist
    const shortenedArray = reorderedImages.splice(nextImageSourceIndex, images.length - nextImageSourceIndex); 
    // shortened array being the extracted sub-array
    // reorderedImages being the remaining sub-array

    const finalArray = shortenedArray.concat(reorderedImages); // joining the extracted array and the remaining array together

    // assign the classes so that the new current image is shown within the frame

    // remove existing ordering
    images.forEach(image => {
        for (let i = 0; i < images.length; i++) {
            image.classList.remove(`image${i+1}`);
        }
    });
    
    // assign new ordering
    for (let i = 0; i < finalArray.length; i++) {
        finalArray[i].classList.add(`image${i+1}`);
    }


    // nav circles styling
    const navCircles = document.querySelector('.navCircles').children;

    for (let i = 0; i < navCircles.length; i++) {
        navCircles[i].classList.remove('currentCircle');
    }

    navCircles[nextImageSourceIndex].classList.add('currentCircle');

};




/***/ }),

/***/ "./src/mobile-menu.js":
/*!****************************!*\
  !*** ./src/mobile-menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMobileMenu": () => (/* binding */ createMobileMenu)
/* harmony export */ });
const createMobileMenu = () => {

    // DOM creation
    const container = document.querySelector('.container');

    // tabs type
    const tabMenu = document.createElement('ul');
    tabMenu.classList.add('tabMenu');

    const tabItem1 = document.createElement('li');
    tabItem1.classList.add('tabItem');
    const tabItem1id = 'tabItem1-id';
    tabItem1.id = tabItem1id;
    tabItem1.textContent = 'Item 1';

    const tabItem2 = document.createElement('li');
    tabItem2.classList.add('tabItem');
    const tabItem2id = 'tabItem2-id';
    tabItem2.id = tabItem2id;
    tabItem2.textContent = 'Item 2';

    const tabItem3 = document.createElement('li');
    tabItem3.classList.add('tabItem');
    const tabItem3id = 'tabItem3-id';
    tabItem3.id = tabItem3id;
    tabItem3.textContent = 'Item 3';

    const tabItem4 = document.createElement('li');
    tabItem4.classList.add('tabItem');
    const tabItem4id = 'tabItem4-id';
    tabItem4.id = tabItem4id;
    tabItem4.textContent = 'Item 4';

    tabMenu.appendChild(tabItem1);
    tabMenu.appendChild(tabItem2);
    tabMenu.appendChild(tabItem3);
    tabMenu.appendChild(tabItem4);

    container.appendChild(tabMenu);

    tabMenu.addEventListener('click', (e) => {

        // return if click not on the list items
        if (e.target.nodeName == 'UL') {
            return;
        }

        for (let i = 0; i < tabMenu.children.length; i++) {
            tabMenu.children[i].classList.remove('tabItem-current');
        }

        if (e.target.id == tabItem1id) {
            document.querySelector(`#${tabItem1id}`).classList.add('tabItem-current');
        } else if (e.target.id == tabItem2id) {
            document.querySelector(`#${tabItem2id}`).classList.add('tabItem-current');
        }  else if (e.target.id == tabItem3id) {
            document.querySelector(`#${tabItem3id}`).classList.add('tabItem-current');
        }  else if (e.target.id == tabItem4id) {
            document.querySelector(`#${tabItem4id}`).classList.add('tabItem-current');
        } 


    });



};




/***/ }),

/***/ "./src/img/1.jpg":
/*!***********************!*\
  !*** ./src/img/1.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c0bdfcaead2d8235be0.jpg";

/***/ }),

/***/ "./src/img/2.jpeg":
/*!************************!*\
  !*** ./src/img/2.jpeg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d50162ddc8899dc83da7.jpeg";

/***/ }),

/***/ "./src/img/3.jpg":
/*!***********************!*\
  !*** ./src/img/3.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "970f20165be320a1ca6a.jpg";

/***/ }),

/***/ "./src/img/4.jpg":
/*!***********************!*\
  !*** ./src/img/4.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "67e730638f4bcaff4621.jpg";

/***/ }),

/***/ "./src/img/5.jpg":
/*!***********************!*\
  !*** ./src/img/5.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7a995a946741613eb7ac.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown */ "./src/dropdown.js");
/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobile-menu */ "./src/mobile-menu.js");
/* harmony import */ var _image_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image-slider */ "./src/image-slider.js");






const navbar = document.querySelector('.navbar ul');
navbar.addEventListener('click', (e) => {

    // return if click not on the list items
    if (e.target.nodeName == 'UL') {
        return;
    }

    // clear font highlight at navbar
    for (let i = 0; i < navbar.children.length; i++) {
        navbar.children[i].classList.remove('current');
    }

    // clear container DOM
    const container = document.querySelector('.container');
    let child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }


    // add highlight to the current selected item
    const dropdownId = 'dropdown-id';
    const mobileMenuId = 'mobile-menu-id';
    const imageSliderId = 'image-slider-id';

    if (e.target.id == dropdownId) {
        (0,_dropdown__WEBPACK_IMPORTED_MODULE_1__.createDropdownList)();
        document.querySelector(`#${dropdownId}`).classList.add('current');
    } else if (e.target.id == mobileMenuId) {
        (0,_mobile_menu__WEBPACK_IMPORTED_MODULE_2__.createMobileMenu)();
        document.querySelector(`#${mobileMenuId}`).classList.add('current');
    } else if (e.target.id == imageSliderId) {
        (0,_image_slider__WEBPACK_IMPORTED_MODULE_3__.createImageSlider)();  
        document.querySelector(`#${imageSliderId}`).classList.add('current');
    }

});





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSw2REFBa0I7QUFDMUIsbUNBQW1DLFdBQVc7QUFDOUMsTUFBTTtBQUNOLFFBQVEsOERBQWdCO0FBQ3hCLG1DQUFtQyxhQUFhO0FBQ2hELE1BQU07QUFDTixRQUFRLGdFQUFpQjtBQUN6QixtQ0FBbUMsY0FBYztBQUNqRDs7QUFFQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zLy4vc3JjL2Ryb3Bkb3duLmpzIiwid2VicGFjazovL29kaW4tZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvaW1hZ2Utc2xpZGVyLmpzIiwid2VicGFjazovL29kaW4tZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvLi9zcmMvbW9iaWxlLW1lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWR5bmFtaWMtdXNlci1pbnRlcmZhY2UtaW50ZXJhY3Rpb25zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tZHluYW1pYy11c2VyLWludGVyZmFjZS1pbnRlcmFjdGlvbnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1keW5hbWljLXVzZXItaW50ZXJmYWNlLWludGVyYWN0aW9ucy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmN1cnJlbnQge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5uYXZiYXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4ubmF2YmFyIHVsIGxpIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4vKiBkcm9wZG93biAqL1xcbi5kcm9wZG93biBwLFxcbnVsLmRyb3Bkb3duaXRlbXMgbGkge1xcbiAgICB3aWR0aDogMTIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgY29sb3I6IHJnYig2NiwgNjYsIDY2KTtcXG59XFxuXFxuLmRyb3Bkb3duIHAge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG51bC5kcm9wZG93bml0ZW1zIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnVsLmRyb3Bkb3duaXRlbXMgbGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuXFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIG1hcmdpbjogLTFweCAwO1xcbn1cXG5cXG5cXG51bC5kcm9wZG93bml0ZW1zIGxpLnZpc2libGUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiBtb2JpbGUgbWVudSAgKi9cXG4udGFiTWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ4LCA0OCwgNDgsIDAuNik7XFxuICAgIGNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuLnRhYk1lbnUgLnRhYkl0ZW0ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi50YWJNZW51IC50YWJJdGVtLnRhYkl0ZW0tY3VycmVudCB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMCAwIDJweCAwO1xcbn1cXG5cXG5cXG4udG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1MHB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcbn1cXG5cXG4vKiBpbWFnZSBzbGlkZXIgKi9cXG4uaW1hZ2VTbGlkZXIge1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIG9ubHkgc2hvdyB0aGUgZmlyc3Qtb3JkZXJlZCBpbWFnZSAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMC41cHg7XFxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBnYXA6IDEwMHB4O1xcbiAgICAvKiBzaG93IG9ubHkgdGhlIGN1cnJlbnQgaW1hZ2Ugd2l0aGluIHRoZSBzbGlkZXIgKi9cXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnNsaWRlckJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG5cXG4uc2xpZGVyQnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG5cXG4uaW1hZ2VzIHtcXG4gICAgZmxleDogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qIGN1cnJlbnQgaW1hZ2UgKi9cXG4uaW1hZ2UxIHtcXG4gICAgb3JkZXI6IDE7XFxufVxcblxcbi8qIG9uIHF1ZXVlcyAqL1xcbi5pbWFnZTIge1xcbiAgICBvcmRlcjogMjtcXG59XFxuXFxuLmltYWdlMyB7XFxuICAgIG9yZGVyOiAzO1xcbn1cXG5cXG4uaW1hZ2U0IHtcXG4gICAgb3JkZXI6IDQ7XFxufVxcblxcbi5pbWFnZTUge1xcbiAgICBvcmRlcjogNTtcXG59XFxuXFxuLm5hdkNpcmNsZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5uYXZDaXJjbGVzIHAge1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci13aWR0aDogMXB4O1xcbiAgICBib3JkZXItY29sb3I6IGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5jdXJyZW50Q2lyY2xlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBLGFBQWE7QUFDYjs7SUFFSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUJBQXFCOztJQUVyQixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxVQUFVO0FBQ2Q7O0FBRUEsaUJBQWlCO0FBQ2pCO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1QsdUNBQXVDO0lBQ3ZDLGdCQUFnQjtJQUNoQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQix1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGtEQUFrRDtJQUNsRCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COzs7QUFHQTtJQUNJLE9BQU87SUFDUCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0lBQ0ksUUFBUTtBQUNaOztBQUVBLGNBQWM7QUFDZDtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uY3VycmVudCB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLm5hdmJhciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi5uYXZiYXIgdWwgbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi8qIGRyb3Bkb3duICovXFxuLmRyb3Bkb3duIHAsXFxudWwuZHJvcGRvd25pdGVtcyBsaSB7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDAuNXB4O1xcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBjb2xvcjogcmdiKDY2LCA2NiwgNjYpO1xcbn1cXG5cXG4uZHJvcGRvd24gcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbnVsLmRyb3Bkb3duaXRlbXMge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxudWwuZHJvcGRvd25pdGVtcyBsaSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG5cXG4gICAgb3BhY2l0eTogMDtcXG4gICAgbWFyZ2luOiAtMXB4IDA7XFxufVxcblxcblxcbnVsLmRyb3Bkb3duaXRlbXMgbGkudmlzaWJsZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi8qIG1vYmlsZSBtZW51ICAqL1xcbi50YWJNZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDgsIDQ4LCA0OCwgMC42KTtcXG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4udGFiTWVudSAudGFiSXRlbSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItd2lkdGg6IDAgMCAycHggMDtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnRhYk1lbnUgLnRhYkl0ZW0udGFiSXRlbS1jdXJyZW50IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4IDA7XFxufVxcblxcblxcbi50b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDUwcHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XFxufVxcblxcbi8qIGltYWdlIHNsaWRlciAqL1xcbi5pbWFnZVNsaWRlciB7XFxuICAgIHdpZHRoOiAyNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyogb25seSBzaG93IHRoZSBmaXJzdC1vcmRlcmVkIGltYWdlICovXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAwLjVweDtcXG4gICAgYm9yZGVyLWNvbG9yOiBsaWdodGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGdhcDogMTAwcHg7XFxuICAgIC8qIHNob3cgb25seSB0aGUgY3VycmVudCBpbWFnZSB3aXRoaW4gdGhlIHNsaWRlciAqL1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2xpZGVyQnV0dG9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcblxcbi5zbGlkZXJCdXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XFxufVxcblxcblxcbi5pbWFnZXMge1xcbiAgICBmbGV4OiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyogY3VycmVudCBpbWFnZSAqL1xcbi5pbWFnZTEge1xcbiAgICBvcmRlcjogMTtcXG59XFxuXFxuLyogb24gcXVldWVzICovXFxuLmltYWdlMiB7XFxuICAgIG9yZGVyOiAyO1xcbn1cXG5cXG4uaW1hZ2UzIHtcXG4gICAgb3JkZXI6IDM7XFxufVxcblxcbi5pbWFnZTQge1xcbiAgICBvcmRlcjogNDtcXG59XFxuXFxuLmltYWdlNSB7XFxuICAgIG9yZGVyOiA1O1xcbn1cXG5cXG4ubmF2Q2lyY2xlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLm5hdkNpcmNsZXMgcCB7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuXFxuLmN1cnJlbnRDaXJjbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNyZWF0ZURyb3Bkb3duTGlzdCA9ICgpID0+IHtcblxuICAgIC8vIERPTSBjcmVhdGlvblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24nKTtcbiAgICBjb25zdCB0aW1lSW50ZXJ2YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGltZUludGVydmFsLnRleHRDb250ZW50ID0gJ3RpbWUgaW50ZXJ2YWwnO1xuICAgIGNvbnN0IGRyb3Bkb3duaXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGRyb3Bkb3duaXRlbXMuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd25pdGVtcycpO1xuICAgIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGkxLnRleHRDb250ZW50ID0gJ0l0ZW0gQSc7XG4gICAgY29uc3QgbGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaTIudGV4dENvbnRlbnQgPSAnSXRlbSBCJzsgICAgXG4gICAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBsaTMudGV4dENvbnRlbnQgPSAnSXRlbSBDJztcblxuICAgIGRyb3Bkb3duaXRlbXMuYXBwZW5kQ2hpbGQobGkxKTtcbiAgICBkcm9wZG93bml0ZW1zLmFwcGVuZENoaWxkKGxpMik7ICAgXG4gICAgZHJvcGRvd25pdGVtcy5hcHBlbmRDaGlsZChsaTMpO1xuXG4gICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQodGltZUludGVydmFsKTtcbiAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChkcm9wZG93bml0ZW1zKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkcm9wZG93bik7XG5cbiAgICAvLyBhcHBsaWNhdGlvbiBsb2dpY1xuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93biA+IHAnKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duID4gdWwnKTtcbiAgICBsZXQgaXNDbGlja2VkID0gZmFsc2U7XG4gICAgXG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIFxuICAgICAgICBpZiAoIWlzQ2xpY2tlZCkge1xuICAgIFxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxpc3QuY2hpbGRyZW5baV0uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIGkrKztcblxuICAgICAgICAgICAgICAgIGlmIChpID09IGxpc3QuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwKTsgLy8gdGltZSBpbnRlcnZhbFxuICAgIFxuICAgICAgICAgICAgaXNDbGlja2VkID0gdHJ1ZTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgIFxuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxpc3QuY2hpbGRyZW5bbGlzdC5jaGlsZHJlbi5sZW5ndGggLSBpIC0gMV0uY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgIGkrKztcblxuICAgICAgICAgICAgICAgIGlmIChpID09IGxpc3QuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDUwKTsgLy8gdGltZSBpbnRlcnZhbFxuXG4gICAgICAgICAgICBpc0NsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIFxuICAgIH0pO1xuICAgIFxufTtcblxuZXhwb3J0IHtcbiAgICBjcmVhdGVEcm9wZG93bkxpc3Rcbn07IiwiaW1wb3J0IEltZzEgZnJvbSAnLi9pbWcvMS5qcGcnO1xuaW1wb3J0IEltZzIgZnJvbSAnLi9pbWcvMi5qcGVnJztcbmltcG9ydCBJbWczIGZyb20gJy4vaW1nLzMuanBnJztcbmltcG9ydCBJbWc0IGZyb20gJy4vaW1nLzQuanBnJztcbmltcG9ydCBJbWc1IGZyb20gJy4vaW1nLzUuanBnJztcblxuXG5jb25zdCBjcmVhdGVJbWFnZVNsaWRlciA9ICgpID0+IHtcblxuICAgIC8vIERPTSBjcmVhdGlvblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcC5jbGFzc0xpc3QuYWRkKCd0b3AnKTtcbiAgICBjb25zdCBib3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBib3R0b20uY2xhc3NMaXN0LmFkZCgnYm90dG9tJyk7XG5cbiAgICBjb25zdCBpbWFnZVNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlU2xpZGVyJyk7XG5cbiAgICBjb25zdCBpbWFnZTEgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZTEuY2xhc3NMaXN0LmFkZCgnaW1hZ2VzJyk7XG4gICAgaW1hZ2UxLnNyYyA9IEltZzE7XG4gICAgaW1hZ2UxLmNsYXNzTGlzdC5hZGQoJ2ltYWdlMScpO1xuICAgIGltYWdlU2xpZGVyLmFwcGVuZENoaWxkKGltYWdlMSk7XG5cbiAgICBjb25zdCBpbWFnZTIgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZTIuY2xhc3NMaXN0LmFkZCgnaW1hZ2VzJyk7XG4gICAgaW1hZ2UyLnNyYyA9IEltZzI7XG4gICAgaW1hZ2UyLmNsYXNzTGlzdC5hZGQoJ2ltYWdlMicpO1xuICAgIGltYWdlU2xpZGVyLmFwcGVuZENoaWxkKGltYWdlMik7XG5cbiAgICBjb25zdCBpbWFnZTMgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZTMuY2xhc3NMaXN0LmFkZCgnaW1hZ2VzJyk7XG4gICAgaW1hZ2UzLnNyYyA9IEltZzM7XG4gICAgaW1hZ2UzLmNsYXNzTGlzdC5hZGQoJ2ltYWdlMycpO1xuICAgIGltYWdlU2xpZGVyLmFwcGVuZENoaWxkKGltYWdlMyk7XG5cbiAgICBjb25zdCBpbWFnZTQgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZTQuY2xhc3NMaXN0LmFkZCgnaW1hZ2VzJyk7XG4gICAgaW1hZ2U0LnNyYyA9IEltZzQ7XG4gICAgaW1hZ2U0LmNsYXNzTGlzdC5hZGQoJ2ltYWdlNCcpO1xuICAgIGltYWdlU2xpZGVyLmFwcGVuZENoaWxkKGltYWdlNCk7XG5cbiAgICBjb25zdCBpbWFnZTUgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZTUuY2xhc3NMaXN0LmFkZCgnaW1hZ2VzJyk7XG4gICAgaW1hZ2U1LnNyYyA9IEltZzU7XG4gICAgaW1hZ2U1LmNsYXNzTGlzdC5hZGQoJ2ltYWdlNScpO1xuICAgIGltYWdlU2xpZGVyLmFwcGVuZENoaWxkKGltYWdlNSk7XG5cblxuICAgIGNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZCgnc2xpZGVyQnV0dG9uJyk7XG4gICAgcHJldmlvdXNCdXR0b24udGV4dENvbnRlbnQgPSAnPCc7XG4gICAgcHJldmlvdXNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hUb1ByZXZpb3VzSW1hZ2UpO1xuICAgIFxuICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NsaWRlckJ1dHRvbicpO1xuICAgIG5leHRCdXR0b24udGV4dENvbnRlbnQgPSAnPic7XG4gICAgbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN3aXRjaFRvTmV4dEltYWdlKTtcblxuICAgIHRvcC5hcHBlbmRDaGlsZChwcmV2aW91c0J1dHRvbik7XG4gICAgdG9wLmFwcGVuZENoaWxkKGltYWdlU2xpZGVyKTtcbiAgICB0b3AuYXBwZW5kQ2hpbGQobmV4dEJ1dHRvbik7XG5cbiAgICAvLyBuYXZpZ2F0aW9uIGNpcmNsZXMgRE9NXG4gICAgY29uc3QgbmF2Q2lyY2xlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hdkNpcmNsZXMuY2xhc3NMaXN0LmFkZCgnbmF2Q2lyY2xlcycpO1xuICAgIG5hdkNpcmNsZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXG4gICAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PSAnRElWJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGp1bXBUb0ltYWdlKGUudGFyZ2V0LmlkKTtcbiAgICB9KVxuXG4gICAgY29uc3QgY2lyY2xlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjaXJjbGUxLmlkID0gJ2NpcmNsZTEnO1xuICAgIGNvbnN0IGNpcmNsZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2lyY2xlMi5pZCA9ICdjaXJjbGUyJztcbiAgICBjb25zdCBjaXJjbGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNpcmNsZTMuaWQgPSAnY2lyY2xlMyc7XG4gICAgY29uc3QgY2lyY2xlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjaXJjbGU0LmlkID0gJ2NpcmNsZTQnO1xuICAgIGNvbnN0IGNpcmNsZTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2lyY2xlNS5pZCA9ICdjaXJjbGU1JztcblxuXG4gICAgY2lyY2xlMS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Q2lyY2xlJyk7XG5cbiAgICBuYXZDaXJjbGVzLmFwcGVuZENoaWxkKGNpcmNsZTEpO1xuICAgIG5hdkNpcmNsZXMuYXBwZW5kQ2hpbGQoY2lyY2xlMik7XG4gICAgbmF2Q2lyY2xlcy5hcHBlbmRDaGlsZChjaXJjbGUzKTtcbiAgICBuYXZDaXJjbGVzLmFwcGVuZENoaWxkKGNpcmNsZTQpO1xuICAgIG5hdkNpcmNsZXMuYXBwZW5kQ2hpbGQoY2lyY2xlNSk7XG5cblxuICAgIGJvdHRvbS5hcHBlbmRDaGlsZChuYXZDaXJjbGVzKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3ApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib3R0b20pO1xuXG5cbiAgICAvLyBleGVjdXRlIHNsaWRlIHNob3dcbiAgICBwbGF5U2xpZGVTaG93KCk7XG5cbn07XG5cblxuY29uc3QgcGxheVNsaWRlU2hvdyA9ICgpID0+IHtcblxuICAgIC8vIHNsaWRlIHNob3c6IDUtc2Vjb25kIGludGVydmFsXG4gICAgY29uc3Qgc2hvd0ltYWdlID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzd2l0Y2hUb05leHRJbWFnZSgpO1xuICAgIH0sIDUwMDApO1xuXG4gICAgLy8gZnVuY3Rpb24gZm9yIHN0b3BwaW5nIHRoZSBzbGlkZXIgd2hlbiBuYXZiYXIgZ2V0cyBjbGlja2VkIGF3YXkgZnJvbSBpbWFnZSBzbGlkZXJcbiAgICBjb25zdCBzdG9wU2xpZGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzaG93SW1hZ2UpO1xuICAgIH07XG5cbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyIHVsJyk7XG4gICAgY29uc3QgaW1hZ2VTbGlkZXJJZCA9ICdpbWFnZS1zbGlkZXItaWQnO1xuXG4gICAgbmF2YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgICAgICAvLyByZXR1cm4gaWYgY2xpY2sgbm90IG9uIHRoZSBsaXN0IGl0ZW1zXG4gICAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PSAnVUwnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgIT09IGltYWdlU2xpZGVySWQpIHtcbiAgICAgICAgICAgIHN0b3BTbGlkZXIoKTtcbiAgICAgICAgfVxuXG4gICAgfSk7XG5cbn07XG5cblxuY29uc3QganVtcFRvSW1hZ2UgPSAoY2lyY2xlSWQpID0+IHtcblxuICAgIC8vIHNldCB0aGUgaW5wdXQgaWQgYXMgdGhlIGN1cnJlbnQgaW1hZ2VcbiAgICBsZXQgbmV3SW1hZ2VTb3VyY2VJbmRleDtcblxuICAgIGlmIChjaXJjbGVJZCA9PSAnY2lyY2xlMScpIHtcbiAgICAgICAgbmV3SW1hZ2VTb3VyY2VJbmRleCA9IDA7XG4gICAgfSBlbHNlIGlmIChjaXJjbGVJZCA9PSAnY2lyY2xlMicpIHtcbiAgICAgICAgbmV3SW1hZ2VTb3VyY2VJbmRleCA9IDE7ICAgICAgICBcbiAgICB9IGVsc2UgaWYgKGNpcmNsZUlkID09ICdjaXJjbGUzJykge1xuICAgICAgICBuZXdJbWFnZVNvdXJjZUluZGV4ID0gMjsgICAgICAgIFxuICAgIH0gZWxzZSBpZiAoY2lyY2xlSWQgPT0gJ2NpcmNsZTQnKSB7XG4gICAgICAgIG5ld0ltYWdlU291cmNlSW5kZXggPSAzOyAgICAgICAgXG4gICAgfSBlbHNlIGlmIChjaXJjbGVJZCA9PSAnY2lyY2xlNScpIHtcbiAgICAgICAgbmV3SW1hZ2VTb3VyY2VJbmRleCA9IDQ7ICAgICAgICBcbiAgICB9IFxuXG5cbiAgICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1hZ2VzJyk7XG5cbiAgICAvLyByZW9yZGVyIHRoZSBpbWFnZSBhcnJheSBzbyB0aGF0IHRoZSBwcmV2aW91cyBpbWFnZSBiZWNvbWVzIHRoZSBjdXJyZW50IGltYWdlXG4gICAgY29uc3QgcmVvcmRlcmVkSW1hZ2VzID0gQXJyYXkuZnJvbShpbWFnZXMpOyAvLyBjcmVhdGUgYXJyYXkgZnJvbSBub2RlbGlzdFxuICAgIGNvbnN0IHNob3J0ZW5lZEFycmF5ID0gcmVvcmRlcmVkSW1hZ2VzLnNwbGljZShuZXdJbWFnZVNvdXJjZUluZGV4LCBpbWFnZXMubGVuZ3RoIC0gbmV3SW1hZ2VTb3VyY2VJbmRleCk7IFxuICAgIC8vIHNob3J0ZW5lZCBhcnJheSBiZWluZyB0aGUgZXh0cmFjdGVkIHN1Yi1hcnJheVxuICAgIC8vIHJlb3JkZXJlZEltYWdlcyBiZWluZyB0aGUgcmVtYWluaW5nIHN1Yi1hcnJheVxuXG4gICAgY29uc3QgZmluYWxBcnJheSA9IHNob3J0ZW5lZEFycmF5LmNvbmNhdChyZW9yZGVyZWRJbWFnZXMpOyAvLyBqb2luaW5nIHRoZSBleHRyYWN0ZWQgYXJyYXkgYW5kIHRoZSByZW1haW5pbmcgYXJyYXkgdG9nZXRoZXJcblxuICAgIC8vIGFzc2lnbiB0aGUgY2xhc3NlcyBzbyB0aGF0IHRoZSBuZXcgY3VycmVudCBpbWFnZSBpcyBzaG93biB3aXRoaW4gdGhlIGZyYW1lXG5cbiAgICAvLyByZW1vdmUgZXhpc3Rpbmcgb3JkZXJpbmdcbiAgICBpbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QucmVtb3ZlKGBpbWFnZSR7aSsxfWApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgLy8gYXNzaWduIG5ldyBvcmRlcmluZ1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmluYWxBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBmaW5hbEFycmF5W2ldLmNsYXNzTGlzdC5hZGQoYGltYWdlJHtpKzF9YCk7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gbmF2IGNpcmNsZXMgc3R5bGluZ1xuICAgIGNvbnN0IG5hdkNpcmNsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Q2lyY2xlcycpLmNoaWxkcmVuO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZDaXJjbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5hdkNpcmNsZXNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudENpcmNsZScpO1xuICAgIH1cblxuICAgIG5hdkNpcmNsZXNbbmV3SW1hZ2VTb3VyY2VJbmRleF0uY2xhc3NMaXN0LmFkZCgnY3VycmVudENpcmNsZScpO1xuICAgIFxufTtcblxuXG5jb25zdCBzd2l0Y2hUb1ByZXZpb3VzSW1hZ2UgPSAoKSA9PiB7XG5cbiAgICAvLyBnZXQgdGhlIGN1cnJlbnQgaW1hZ2VcbiAgICBjb25zdCBjdXJyZW50SW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1hZ2UxJyk7XG4gICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltYWdlcycpO1xuICAgIGxldCBjdXJyZW50SW1hZ2VTb3VyY2VJbmRleDtcblxuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGltYWdlID09PSBjdXJyZW50SW1hZ2UpIHtcbiAgICAgICAgICAgIGN1cnJlbnRJbWFnZVNvdXJjZUluZGV4ID0gaW5kZXg7XG4gICAgICAgIH0gXG4gICAgfSk7XG5cbiAgICAvLyBnZXQgdGhlIHByZXZpb3VzIGltYWdlIGluIHRoZSBxdWV1ZVxuICAgIGxldCBwcmV2aW91c0ltYWdlU291cmNlSW5kZXg7XG5cbiAgICBpZiAoY3VycmVudEltYWdlU291cmNlSW5kZXggPT0gMCkge1xuICAgICAgICBwcmV2aW91c0ltYWdlU291cmNlSW5kZXggPSBpbWFnZXMubGVuZ3RoIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcmV2aW91c0ltYWdlU291cmNlSW5kZXggPSBjdXJyZW50SW1hZ2VTb3VyY2VJbmRleCAtIDE7XG4gICAgfVxuXG4gICAgLy8gcmVvcmRlciB0aGUgaW1hZ2UgYXJyYXkgc28gdGhhdCB0aGUgcHJldmlvdXMgaW1hZ2UgYmVjb21lcyB0aGUgY3VycmVudCBpbWFnZVxuICAgIGNvbnN0IHJlb3JkZXJlZEltYWdlcyA9IEFycmF5LmZyb20oaW1hZ2VzKTsgLy8gY3JlYXRlIGFycmF5IGZyb20gbm9kZWxpc3RcbiAgICBjb25zdCBzaG9ydGVuZWRBcnJheSA9IHJlb3JkZXJlZEltYWdlcy5zcGxpY2UocHJldmlvdXNJbWFnZVNvdXJjZUluZGV4LCBpbWFnZXMubGVuZ3RoIC0gcHJldmlvdXNJbWFnZVNvdXJjZUluZGV4KTsgXG4gICAgLy8gc2hvcnRlbmVkIGFycmF5IGJlaW5nIHRoZSBleHRyYWN0ZWQgc3ViLWFycmF5XG4gICAgLy8gcmVvcmRlcmVkSW1hZ2VzIGJlaW5nIHRoZSByZW1haW5pbmcgc3ViLWFycmF5XG5cbiAgICBjb25zdCBmaW5hbEFycmF5ID0gc2hvcnRlbmVkQXJyYXkuY29uY2F0KHJlb3JkZXJlZEltYWdlcyk7IC8vIGpvaW5pbmcgdGhlIGV4dHJhY3RlZCBhcnJheSBhbmQgdGhlIHJlbWFpbmluZyBhcnJheSB0b2dldGhlclxuXG4gICAgLy8gYXNzaWduIHRoZSBjbGFzc2VzIHNvIHRoYXQgdGhlIG5ldyBjdXJyZW50IGltYWdlIGlzIHNob3duIHdpdGhpbiB0aGUgZnJhbWVcblxuICAgIC8vIHJlbW92ZSBleGlzdGluZyBvcmRlcmluZ1xuICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5yZW1vdmUoYGltYWdlJHtpKzF9YCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvLyBhc3NpZ24gbmV3IG9yZGVyaW5nXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaW5hbEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbmFsQXJyYXlbaV0uY2xhc3NMaXN0LmFkZChgaW1hZ2Uke2krMX1gKTtcbiAgICB9XG5cblxuICAgIC8vIG5hdiBjaXJjbGVzIHN0eWxpbmdcbiAgICBjb25zdCBuYXZDaXJjbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdkNpcmNsZXMnKS5jaGlsZHJlbjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2Q2lyY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuYXZDaXJjbGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnRDaXJjbGUnKTtcbiAgICB9XG5cbiAgICBuYXZDaXJjbGVzW3ByZXZpb3VzSW1hZ2VTb3VyY2VJbmRleF0uY2xhc3NMaXN0LmFkZCgnY3VycmVudENpcmNsZScpO1xuXG59O1xuXG5cbmNvbnN0IHN3aXRjaFRvTmV4dEltYWdlID0gKCkgPT4ge1xuXG4gICAgLy8gZ2V0IHRoZSBjdXJyZW50IGltYWdlXG4gICAgY29uc3QgY3VycmVudEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltYWdlMScpO1xuICAgIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWFnZXMnKTtcbiAgICBsZXQgY3VycmVudEltYWdlU291cmNlSW5kZXg7XG5cbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbWFnZSA9PT0gY3VycmVudEltYWdlKSB7XG4gICAgICAgICAgICBjdXJyZW50SW1hZ2VTb3VyY2VJbmRleCA9IGluZGV4O1xuICAgICAgICB9IFxuICAgIH0pO1xuXG4gICAgLy8gZ2V0IHRoZSBuZXh0IGltYWdlIGluIHRoZSBxdWV1ZVxuICAgIGxldCBuZXh0SW1hZ2VTb3VyY2VJbmRleDtcblxuICAgIGlmIChjdXJyZW50SW1hZ2VTb3VyY2VJbmRleCA9PSBpbWFnZXMubGVuZ3RoIC0gMSkge1xuICAgICAgICBuZXh0SW1hZ2VTb3VyY2VJbmRleCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dEltYWdlU291cmNlSW5kZXggPSBjdXJyZW50SW1hZ2VTb3VyY2VJbmRleCArIDE7XG4gICAgfVxuXG4gICAgLy8gcmVvcmRlciB0aGUgaW1hZ2UgYXJyYXkgc28gdGhhdCB0aGUgbmV4dCBpbWFnZSBiZWNvbWVzIHRoZSBjdXJyZW50IGltYWdlXG4gICAgY29uc3QgcmVvcmRlcmVkSW1hZ2VzID0gQXJyYXkuZnJvbShpbWFnZXMpOyAvLyBjcmVhdGUgYXJyYXkgZnJvbSBub2RlbGlzdFxuICAgIGNvbnN0IHNob3J0ZW5lZEFycmF5ID0gcmVvcmRlcmVkSW1hZ2VzLnNwbGljZShuZXh0SW1hZ2VTb3VyY2VJbmRleCwgaW1hZ2VzLmxlbmd0aCAtIG5leHRJbWFnZVNvdXJjZUluZGV4KTsgXG4gICAgLy8gc2hvcnRlbmVkIGFycmF5IGJlaW5nIHRoZSBleHRyYWN0ZWQgc3ViLWFycmF5XG4gICAgLy8gcmVvcmRlcmVkSW1hZ2VzIGJlaW5nIHRoZSByZW1haW5pbmcgc3ViLWFycmF5XG5cbiAgICBjb25zdCBmaW5hbEFycmF5ID0gc2hvcnRlbmVkQXJyYXkuY29uY2F0KHJlb3JkZXJlZEltYWdlcyk7IC8vIGpvaW5pbmcgdGhlIGV4dHJhY3RlZCBhcnJheSBhbmQgdGhlIHJlbWFpbmluZyBhcnJheSB0b2dldGhlclxuXG4gICAgLy8gYXNzaWduIHRoZSBjbGFzc2VzIHNvIHRoYXQgdGhlIG5ldyBjdXJyZW50IGltYWdlIGlzIHNob3duIHdpdGhpbiB0aGUgZnJhbWVcblxuICAgIC8vIHJlbW92ZSBleGlzdGluZyBvcmRlcmluZ1xuICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5yZW1vdmUoYGltYWdlJHtpKzF9YCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAvLyBhc3NpZ24gbmV3IG9yZGVyaW5nXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaW5hbEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbmFsQXJyYXlbaV0uY2xhc3NMaXN0LmFkZChgaW1hZ2Uke2krMX1gKTtcbiAgICB9XG5cblxuICAgIC8vIG5hdiBjaXJjbGVzIHN0eWxpbmdcbiAgICBjb25zdCBuYXZDaXJjbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdkNpcmNsZXMnKS5jaGlsZHJlbjtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2Q2lyY2xlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuYXZDaXJjbGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnRDaXJjbGUnKTtcbiAgICB9XG5cbiAgICBuYXZDaXJjbGVzW25leHRJbWFnZVNvdXJjZUluZGV4XS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Q2lyY2xlJyk7XG5cbn07XG5cblxuZXhwb3J0IHtcbiAgICBjcmVhdGVJbWFnZVNsaWRlclxufTsiLCJjb25zdCBjcmVhdGVNb2JpbGVNZW51ID0gKCkgPT4ge1xuXG4gICAgLy8gRE9NIGNyZWF0aW9uXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG4gICAgLy8gdGFicyB0eXBlXG4gICAgY29uc3QgdGFiTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdGFiTWVudS5jbGFzc0xpc3QuYWRkKCd0YWJNZW51Jyk7XG5cbiAgICBjb25zdCB0YWJJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdGFiSXRlbTEuY2xhc3NMaXN0LmFkZCgndGFiSXRlbScpO1xuICAgIGNvbnN0IHRhYkl0ZW0xaWQgPSAndGFiSXRlbTEtaWQnO1xuICAgIHRhYkl0ZW0xLmlkID0gdGFiSXRlbTFpZDtcbiAgICB0YWJJdGVtMS50ZXh0Q29udGVudCA9ICdJdGVtIDEnO1xuXG4gICAgY29uc3QgdGFiSXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRhYkl0ZW0yLmNsYXNzTGlzdC5hZGQoJ3RhYkl0ZW0nKTtcbiAgICBjb25zdCB0YWJJdGVtMmlkID0gJ3RhYkl0ZW0yLWlkJztcbiAgICB0YWJJdGVtMi5pZCA9IHRhYkl0ZW0yaWQ7XG4gICAgdGFiSXRlbTIudGV4dENvbnRlbnQgPSAnSXRlbSAyJztcblxuICAgIGNvbnN0IHRhYkl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0YWJJdGVtMy5jbGFzc0xpc3QuYWRkKCd0YWJJdGVtJyk7XG4gICAgY29uc3QgdGFiSXRlbTNpZCA9ICd0YWJJdGVtMy1pZCc7XG4gICAgdGFiSXRlbTMuaWQgPSB0YWJJdGVtM2lkO1xuICAgIHRhYkl0ZW0zLnRleHRDb250ZW50ID0gJ0l0ZW0gMyc7XG5cbiAgICBjb25zdCB0YWJJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdGFiSXRlbTQuY2xhc3NMaXN0LmFkZCgndGFiSXRlbScpO1xuICAgIGNvbnN0IHRhYkl0ZW00aWQgPSAndGFiSXRlbTQtaWQnO1xuICAgIHRhYkl0ZW00LmlkID0gdGFiSXRlbTRpZDtcbiAgICB0YWJJdGVtNC50ZXh0Q29udGVudCA9ICdJdGVtIDQnO1xuXG4gICAgdGFiTWVudS5hcHBlbmRDaGlsZCh0YWJJdGVtMSk7XG4gICAgdGFiTWVudS5hcHBlbmRDaGlsZCh0YWJJdGVtMik7XG4gICAgdGFiTWVudS5hcHBlbmRDaGlsZCh0YWJJdGVtMyk7XG4gICAgdGFiTWVudS5hcHBlbmRDaGlsZCh0YWJJdGVtNCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFiTWVudSk7XG5cbiAgICB0YWJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblxuICAgICAgICAvLyByZXR1cm4gaWYgY2xpY2sgbm90IG9uIHRoZSBsaXN0IGl0ZW1zXG4gICAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PSAnVUwnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYk1lbnUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRhYk1lbnUuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgndGFiSXRlbS1jdXJyZW50Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT0gdGFiSXRlbTFpZCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7dGFiSXRlbTFpZH1gKS5jbGFzc0xpc3QuYWRkKCd0YWJJdGVtLWN1cnJlbnQnKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSB0YWJJdGVtMmlkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YWJJdGVtMmlkfWApLmNsYXNzTGlzdC5hZGQoJ3RhYkl0ZW0tY3VycmVudCcpO1xuICAgICAgICB9ICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSB0YWJJdGVtM2lkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YWJJdGVtM2lkfWApLmNsYXNzTGlzdC5hZGQoJ3RhYkl0ZW0tY3VycmVudCcpO1xuICAgICAgICB9ICBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSB0YWJJdGVtNGlkKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YWJJdGVtNGlkfWApLmNsYXNzTGlzdC5hZGQoJ3RhYkl0ZW0tY3VycmVudCcpO1xuICAgICAgICB9IFxuXG5cbiAgICB9KTtcblxuXG5cbn07XG5cbmV4cG9ydCB7XG4gICAgY3JlYXRlTW9iaWxlTWVudVxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVEcm9wZG93bkxpc3QgfSBmcm9tICcuL2Ryb3Bkb3duJztcbmltcG9ydCB7IGNyZWF0ZU1vYmlsZU1lbnUgfSBmcm9tICcuL21vYmlsZS1tZW51JztcbmltcG9ydCB7IGNyZWF0ZUltYWdlU2xpZGVyIH0gZnJvbSAnLi9pbWFnZS1zbGlkZXInO1xuXG5cbmNvbnN0IG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXIgdWwnKTtcbm5hdmJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cbiAgICAvLyByZXR1cm4gaWYgY2xpY2sgbm90IG9uIHRoZSBsaXN0IGl0ZW1zXG4gICAgaWYgKGUudGFyZ2V0Lm5vZGVOYW1lID09ICdVTCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNsZWFyIGZvbnQgaGlnaGxpZ2h0IGF0IG5hdmJhclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2YmFyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5hdmJhci5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXIgY29udGFpbmVyIERPTVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcbiAgICBsZXQgY2hpbGQgPSBjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB3aGlsZSAoY2hpbGQpIHtcbiAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgY2hpbGQgPSBjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZDtcbiAgICB9XG5cblxuICAgIC8vIGFkZCBoaWdobGlnaHQgdG8gdGhlIGN1cnJlbnQgc2VsZWN0ZWQgaXRlbVxuICAgIGNvbnN0IGRyb3Bkb3duSWQgPSAnZHJvcGRvd24taWQnO1xuICAgIGNvbnN0IG1vYmlsZU1lbnVJZCA9ICdtb2JpbGUtbWVudS1pZCc7XG4gICAgY29uc3QgaW1hZ2VTbGlkZXJJZCA9ICdpbWFnZS1zbGlkZXItaWQnO1xuXG4gICAgaWYgKGUudGFyZ2V0LmlkID09IGRyb3Bkb3duSWQpIHtcbiAgICAgICAgY3JlYXRlRHJvcGRvd25MaXN0KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2Ryb3Bkb3duSWR9YCkuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT0gbW9iaWxlTWVudUlkKSB7XG4gICAgICAgIGNyZWF0ZU1vYmlsZU1lbnUoKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7bW9iaWxlTWVudUlkfWApLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09IGltYWdlU2xpZGVySWQpIHtcbiAgICAgICAgY3JlYXRlSW1hZ2VTbGlkZXIoKTsgIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbWFnZVNsaWRlcklkfWApLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICB9XG5cbn0pO1xuXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=