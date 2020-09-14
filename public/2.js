(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var BLANK_IMG = new Image();
BLANK_IMG.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  data: function data() {
    return {
      lums: {
        0: {
          rgb: 200,
          lum: 3
        },
        1: {
          rgb: 180,
          lum: 14.75
        },
        2: {
          rgb: 160,
          lum: 26.5
        },
        3: {
          rgb: 140,
          lum: 38.25
        },
        4: {
          rgb: 120,
          lum: 50
        },
        5: {
          rgb: 100,
          lum: 62.25
        },
        6: {
          rgb: 80,
          lum: 74.5
        },
        7: {
          rgb: 60,
          lum: 86.75
        },
        8: {
          rgb: 50,
          lum: 99
        }
      },
      isDragging: null,
      lastPos: null,
      adjustLumsTimeout: 0
    };
  },
  computed: {
    lumsCount: function lumsCount() {
      return Object.keys(this.lums).length;
    }
  },
  watch: {},
  methods: {
    onDragStart: function onDragStart($event, index) {
      this.isDragging = index;
      $event.dataTransfer.setDragImage(BLANK_IMG, 0, 0);
    },
    onDragEnd: function onDragEnd($event, index) {
      this.isDragging = null;
      this.lastPos = null;
    },
    onDrag: function onDrag($event, index) {
      var _this = this;

      index = parseInt(index, 10);
      var el = $event.target;
      var parent = el.parentElement;
      var parentWidth = parent.clientWidth;
      var elX = $event.pageX - parent.offsetLeft;

      if (elX < 0 || elX > parentWidth) {
        $event.preventDefault();
        return false;
      }

      var pos = parseFloat(elX / parentWidth * 100);

      if ($event.screenX) {
        this.lums[index].lum = pos;
        clearTimeout(this.adjustLumsTimeout);
        this.adjustLumsTimeout = setTimeout(function () {
          return _this.adjustLums(index === 0 ? pos : _this.lums[0].lum, index === _this.lumsCount - 1 ? pos : _this.lums[_this.lumsCount - 1].lum, pos, index);
        }, 20);
      }
    },
    adjustLums: function adjustLums(startPos, endPos, curPos, curIndex) {
      var _this2 = this;

      if (curPos !== this.lastPos) {
        var lumIndices = Object.keys(this.lums);
        lumIndices.pop();
        lumIndices.shift();
        lumIndices.forEach(function (ndx) {
          ndx = parseInt(ndx, 10);

          if (ndx < curIndex) {
            var dist = (curPos - startPos) / curIndex;
            _this2.lums[ndx].lum = ndx * dist + _this2.lums[0].lum;
          } else if (curIndex < ndx) {
            var _dist = (endPos - curPos) / (_this2.lumsCount - curIndex - 1);

            _this2.lums[ndx].lum = (ndx - curIndex) * _dist + curPos;
          }
        }); // Prevent this from running unnecessarily

        this.lastPos = curPos;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/Pages/App.scss?vue&type=style&index=0&id=0ec91988&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/Pages/App.scss?vue&type=style&index=0&id=0ec91988&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=range][data-v-0ec91988] {\n  -webkit-appearance: none;\n  /* Hides the slider so that custom slider can be made */\n  width: 100%;\n  /* Specific width is required for Firefox. */\n  background: transparent;\n  /* Otherwise white in Chrome */\n}\ninput[type=range][data-v-0ec91988]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n}\ninput[type=range][data-v-0ec91988]:focus {\n  outline: none;\n  /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n}\ninput[type=range][data-v-0ec91988]::-ms-track {\n  width: 100%;\n  cursor: pointer;\n  /* Hides the slider so custom styles can be added */\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\n\n/* Special styling for WebKit/Blink */\ninput[type=range][data-v-0ec91988]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: var(--golden-ratio-5);\n  height: var(--golden-ratio-5);\n  margin-top: calc(var(--golden-ratio-half-4) * -1);\n  --bg-opacity: 1;\n  background-color: #48bb78;\n  background-color: rgba(72, 187, 120, var(--bg-opacity));\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  border-radius: 9999px;\n  cursor: pointer;\n}\n\n/* All the same stuff for Firefox */\ninput[type=range][data-v-0ec91988]::-moz-range-thumb {\n  width: var(--golden-ratio-5);\n  height: var(--golden-ratio-5);\n  --bg-opacity: 1;\n  background-color: #48bb78;\n  background-color: rgba(72, 187, 120, var(--bg-opacity));\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  border-radius: 9999px;\n  cursor: pointer;\n}\n\n/* All the same stuff for IE */\ninput[type=range][data-v-0ec91988]::-ms-thumb {\n  width: var(--golden-ratio-5);\n  height: var(--golden-ratio-5);\n  --bg-opacity: 1;\n  background-color: #48bb78;\n  background-color: rgba(72, 187, 120, var(--bg-opacity));\n  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  border-radius: 9999px;\n  cursor: pointer;\n}\ninput[type=range][data-v-0ec91988]::-webkit-slider-runnable-track {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n  cursor: default;\n}\ninput[type=range][data-v-0ec91988]:focus::-webkit-slider-runnable-track {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n  cursor: default;\n}\ninput[type=range][data-v-0ec91988]::-moz-range-track {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n  cursor: default;\n}\ninput[type=range][data-v-0ec91988]::-ms-track {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n  cursor: default;\n  background: transparent;\n  border-color: transparent;\n  color: transparent;\n}\ninput[type=range][data-v-0ec91988]::-ms-fill-lower {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n  cursor: default;\n}\ninput[type=range][data-v-0ec91988]:focus::-ms-fill-lower {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n  cursor: default;\n}\ninput[type=range][data-v-0ec91988]::-ms-fill-upper {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n}\ninput[type=range][data-v-0ec91988]:focus::-ms-fill-upper {\n  height: var(--golden-ratio-3);\n  background-color: transparent;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/Pages/App.scss?vue&type=style&index=0&id=0ec91988&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/Pages/App.scss?vue&type=style&index=0&id=0ec91988&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./App.scss?vue&type=style&index=0&id=0ec91988&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/Pages/App.scss?vue&type=style&index=0&id=0ec91988&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/App.vue?vue&type=template&id=0ec91988&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/App.vue?vue&type=template&id=0ec91988&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "App" }, [
    _c("h1", { staticClass: "font-bold uppercase tracking-wide" }, [
      _vm._v("Set Your Luminosity Scale")
    ]),
    _vm._v(" "),
    _c("p", { staticClass: "mt-6" }, [
      _vm._v(
        "\n    This scale will be consistent throughout each color in your project's\n    palette. To get you started, we've setup 9 steps in your scale, light to\n    dark. Making all your colors with a scale of equal luminance allows you to\n    design a site in grayscale and add color of the same luminance later.\n  "
      )
    ]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "mt-7" }, [
      _c(
        "div",
        { staticClass: "rounded bg-gray-800 h-8 relative" },
        [
          _vm._m(1),
          _vm._v(" "),
          _c("div", {
            staticClass:
              "border-t border-gray-600 absolute inset-x-0 top-1/2 -mt-px"
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "absolute bottom-0 left-0 uppercase font-bold tracking-wide text-sm text-gray-600 leading-5 p-2"
            },
            [_vm._v("\n        White\n      ")]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "absolute bottom-0 right-0 uppercase font-bold tracking-wide text-sm text-gray-600 leading-5 p-2"
            },
            [_vm._v("\n        Black\n      ")]
          ),
          _vm._v(" "),
          _vm._l(_vm.lums, function(swatch, index) {
            return _c("div", {
              key: index,
              class: [
                "absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer w-half-7 h-half-7 shadow-inner rounded-full border-1 border-white",
                _vm.isDragging === index ? "" : "transition-all duration-200"
              ],
              style: {
                left: swatch.lum + "%",
                backgroundColor:
                  "rgb(" +
                  swatch.rgb +
                  "," +
                  swatch.rgb +
                  "," +
                  swatch.rgb +
                  ")"
              },
              attrs: { draggable: "" },
              on: {
                dragstart: function($event) {
                  return _vm.onDragStart($event, index)
                },
                drag: function($event) {
                  return _vm.onDrag($event, index)
                },
                dragend: function($event) {
                  return _vm.onDragEnd($event, index)
                }
              }
            })
          })
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mt-8" }, [
      _c("div", { staticClass: "flex items-center justify-between" }, [
        _c("div", [
          _c("div", { staticClass: "font-mono opacity-50 mt-3" }, [
            _vm._v("100")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-9 h-9 bg-gray-100 rounded shadow-inner" })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "font-mono opacity-50 mt-3" }, [
            _vm._v("200")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-9 h-9 bg-gray-200 rounded shadow-inner" })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "font-mono opacity-50 mt-3" }, [
            _vm._v("300")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-9 h-9 bg-gray-300 rounded shadow-inner" })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "font-mono opacity-50 mt-3" }, [
            _vm._v("400")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-9 h-9 bg-gray-400 rounded shadow-inner" })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "font-mono opacity-50 mt-3" }, [
            _vm._v("500")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "w-9 h-9 bg-gray-500 rounded shadow-inner" })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "font-mono opacity-50 mt-3" }, [
            _vm._v("600")
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "w-9 h-9 bg-gray-600 rounded shadow-inner text-white"
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "font-mono opacity-50 mt-3" }, [
            _vm._v("700")
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "w-9 h-9 bg-gray-700 rounded shadow-inner text-white"
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "font-mono opacity-50 mt-3" }, [
            _vm._v("800")
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "w-9 h-9 bg-gray-800 rounded shadow-inner text-white"
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "font-mono opacity-50 mt-3" }, [
            _vm._v("900")
          ]),
          _vm._v(" "),
          _c("div", {
            staticClass: "w-9 h-9 bg-gray-900 rounded shadow-inner text-white"
          })
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "h-8 divide-x divide-gray-600 flex justify-between" },
      [
        _c("div", { staticClass: "flex-grow" }),
        _vm._v(" "),
        _c("div", { staticClass: "flex-grow" }),
        _vm._v(" "),
        _c("div", { staticClass: "flex-grow" }),
        _vm._v(" "),
        _c("div", { staticClass: "flex-grow" }),
        _vm._v(" "),
        _c("div", { staticClass: "flex-grow" }),
        _vm._v(" "),
        _c("div", { staticClass: "flex-grow" }),
        _vm._v(" "),
        _c("div", { staticClass: "flex-grow" }),
        _vm._v(" "),
        _c("div", { staticClass: "flex-grow" }),
        _vm._v(" "),
        _c("div", { staticClass: "flex-grow" }),
        _vm._v(" "),
        _c("div", { staticClass: "flex-grow" })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/App.scss?vue&type=style&index=0&id=0ec91988&lang=scss&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/App.scss?vue&type=style&index=0&id=0ec91988&lang=scss&scoped=true& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_App_scss_vue_type_style_index_0_id_0ec91988_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./App.scss?vue&type=style&index=0&id=0ec91988&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/Pages/App.scss?vue&type=style&index=0&id=0ec91988&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_App_scss_vue_type_style_index_0_id_0ec91988_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_App_scss_vue_type_style_index_0_id_0ec91988_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_App_scss_vue_type_style_index_0_id_0ec91988_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_App_scss_vue_type_style_index_0_id_0ec91988_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_App_scss_vue_type_style_index_0_id_0ec91988_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/Pages/App.vue":
/*!************************************!*\
  !*** ./resources/js/Pages/App.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_0ec91988_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0ec91988&scoped=true& */ "./resources/js/Pages/App.vue?vue&type=template&id=0ec91988&scoped=true&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/Pages/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _App_scss_vue_type_style_index_0_id_0ec91988_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.scss?vue&type=style&index=0&id=0ec91988&lang=scss&scoped=true& */ "./resources/js/Pages/App.scss?vue&type=style&index=0&id=0ec91988&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_0ec91988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_0ec91988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0ec91988",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/App.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/Pages/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/App.vue?vue&type=template&id=0ec91988&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/App.vue?vue&type=template&id=0ec91988&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ec91988_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0ec91988&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/App.vue?vue&type=template&id=0ec91988&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ec91988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ec91988_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);