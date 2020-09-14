(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/Pages/App.scss":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/Pages/App.scss ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=range] {\n  -webkit-appearance: none;\n  /* Hides the slider so that custom slider can be made */\n  width: 100%;\n  /* Specific width is required for Firefox. */\n  background: transparent;\n  /* Otherwise white in Chrome */\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n}\n\ninput[type=range]:focus {\n  outline: none;\n  /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n}\n\ninput[type=range]::-ms-track {\n  width: 100%;\n  cursor: pointer;\n  /* Hides the slider so custom styles can be added */\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n\n/* Special styling for WebKit/Blink */\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: var(--golden-ratio-5);\n  height: var(--golden-ratio-5);\n  margin-top: calc(var(--golden-ratio-half-4) * -1);\n  --bg-opacity: 1;\n  background-color: #48bb78;\n  background-color: rgba(72, 187, 120, var(--bg-opacity));\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  border-radius: 9999px;\n  cursor: pointer;\n}\n\n/* All the same stuff for Firefox */\n\ninput[type=range]::-moz-range-thumb {\n  width: var(--golden-ratio-5);\n  height: var(--golden-ratio-5);\n  --bg-opacity: 1;\n  background-color: #48bb78;\n  background-color: rgba(72, 187, 120, var(--bg-opacity));\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  border-radius: 9999px;\n  cursor: pointer;\n}\n\n/* All the same stuff for IE */\n\ninput[type=range]::-ms-thumb {\n  width: var(--golden-ratio-5);\n  height: var(--golden-ratio-5);\n  --bg-opacity: 1;\n  background-color: #48bb78;\n  background-color: rgba(72, 187, 120, var(--bg-opacity));\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  border-radius: 9999px;\n  cursor: pointer;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n  cursor: default;\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n  cursor: default;\n}\n\ninput[type=range]::-moz-range-track {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n  cursor: default;\n}\n\ninput[type=range]::-ms-track {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n  cursor: default;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n  cursor: default;\n}\n\ninput[type=range]:focus::-ms-fill-lower {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n  cursor: default;\n}\n\ninput[type=range]::-ms-fill-upper {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n}\n\ninput[type=range]:focus::-ms-fill-upper {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/js/Pages/App.scss":
/*!*************************************!*\
  !*** ./resources/js/Pages/App.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./App.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/Pages/App.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);