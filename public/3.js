(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/FalseColor.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/FalseColor.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color */ "./resources/js/utils/color.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



// Grayscale ---------------------

/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'FalseColor',
  setup: function setup(__props) {
    var grayscaleValue = Object(vue__WEBPACK_IMPORTED_MODULE_1__["ref"])(200);
    var grayscaleRGB = Object(vue__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      var rgb = Math.round(grayscaleValue.value);
      return "".concat(rgb, " ").concat(rgb, " ").concat(rgb);
    });
    var grayscaleLumInput = Object(vue__WEBPACK_IMPORTED_MODULE_1__["ref"])(null);
    var grayscaleLumComputed = Object(vue__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      return Object(_utils_color__WEBPACK_IMPORTED_MODULE_0__["lumFromRGB"])(grayscaleValue.value, grayscaleValue.value, grayscaleValue.value);
    });
    var grayscaleHex = Object(vue__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      return Object(_utils_color__WEBPACK_IMPORTED_MODULE_0__["RGBToHex"])(grayscaleValue.value, grayscaleValue.value, grayscaleValue.value);
    });
    function setGrayscaleValue(lum) {
      var _RGBFromLum = Object(_utils_color__WEBPACK_IMPORTED_MODULE_0__["RGBFromLum"])(lum),
        r = _RGBFromLum.r,
        g = _RGBFromLum.g,
        b = _RGBFromLum.b;
      grayscaleValue.value = r;
    }
    function setGrayscaleLum(rgb) {
      grayscaleLumInput.value.value = Object(_utils_color__WEBPACK_IMPORTED_MODULE_0__["lumFromRGB"])(rgb, rgb, rgb).toFixed(2);
    }
    Object(vue__WEBPACK_IMPORTED_MODULE_1__["onMounted"])(function () {
      setGrayscaleLum(grayscaleValue.value);
    });

    // Hue and Saturation ---------------------

    var hueValue = Object(vue__WEBPACK_IMPORTED_MODULE_1__["ref"])(180);
    var satValue = Object(vue__WEBPACK_IMPORTED_MODULE_1__["ref"])(50);
    var falseRGB = Object(vue__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      var _RGBFromLum2 = Object(_utils_color__WEBPACK_IMPORTED_MODULE_0__["RGBFromLum"])(grayscaleLumComputed.value, hueValue.value, satValue.value),
        r = _RGBFromLum2.r,
        g = _RGBFromLum2.g,
        b = _RGBFromLum2.b;
      return "".concat(r, " ").concat(g, " ").concat(b);
    });
    var hueLumInput = Object(vue__WEBPACK_IMPORTED_MODULE_1__["ref"])(null);
    var satLumInput = Object(vue__WEBPACK_IMPORTED_MODULE_1__["ref"])(null);
    var falseHex = Object(vue__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      var _falseRGB$value$split = falseRGB.value.split(' ').map(function (v) {
          return parseInt(v);
        }),
        _falseRGB$value$split2 = _slicedToArray(_falseRGB$value$split, 3),
        r = _falseRGB$value$split2[0],
        g = _falseRGB$value$split2[1],
        b = _falseRGB$value$split2[2];
      return Object(_utils_color__WEBPACK_IMPORTED_MODULE_0__["RGBToHex"])(r, g, b);
    });
    return {
      __sfc: true,
      grayscaleValue: grayscaleValue,
      grayscaleRGB: grayscaleRGB,
      grayscaleLumInput: grayscaleLumInput,
      grayscaleLumComputed: grayscaleLumComputed,
      grayscaleHex: grayscaleHex,
      setGrayscaleValue: setGrayscaleValue,
      setGrayscaleLum: setGrayscaleLum,
      hueValue: hueValue,
      satValue: satValue,
      falseRGB: falseRGB,
      hueLumInput: hueLumInput,
      satLumInput: satLumInput,
      falseHex: falseHex
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/FalseColor.vue?vue&type=template&id=02136a69":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/FalseColor.vue?vue&type=template&id=02136a69 ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", [_c("section", {
    staticClass: "mt-6"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "mt-7"
  }, [_c("div", {
    staticClass: "flex items-center justify-between"
  }, [_c("div", {
    staticClass: "font-bold"
  }, [_vm._v("Luminance")]), _vm._v(" "), _c("input", {
    ref: "grayscaleLumInput",
    staticClass: "text-right font-mono leading-6 inline-block align-middle w-10 text-gray-600 hover:text-gray-800 py-3 px-0 text-lg border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none",
    attrs: {
      placeholder: "Luminance",
      type: "number"
    },
    on: {
      input: function input($event) {
        return _setup.setGrayscaleValue($event.target.value);
      }
    }
  })]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _setup.grayscaleValue,
      expression: "grayscaleValue"
    }],
    staticClass: "w-full",
    attrs: {
      type: "range",
      min: "0",
      max: "255"
    },
    domProps: {
      value: _setup.grayscaleValue
    },
    on: {
      input: function input($event) {
        return _setup.setGrayscaleLum($event.target.value);
      },
      __r: function __r($event) {
        _setup.grayscaleValue = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "p-5 border relative mt-5"
  }, [_c("div", {
    staticClass: "z-10 absolute inset-y-0 left-0 w-1/2 bg-white"
  }), _vm._v(" "), _c("div", {
    staticClass: "z-10 absolute inset-y-0 left-1/2 w-1/2 bg-black"
  }), _vm._v(" "), _c("div", {
    staticClass: "z-20 relative w-full h-8",
    style: {
      backgroundColor: "rgb(".concat(_setup.grayscaleRGB, ")")
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono",
    "class": _setup.grayscaleLumComputed < 21.5 ? "text-white" : ""
  }, [_vm._v(_vm._s("rgb(".concat(_setup.grayscaleRGB, ")")) + " " + _vm._s(_setup.grayscaleHex))])])])]), _vm._v(" "), _c("section", {
    staticClass: "mt-10 pb-8"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "mt-7"
  }, [_c("div", {
    staticClass: "flex items-center justify-between"
  }, [_c("div", {
    staticClass: "font-bold"
  }, [_vm._v("Hue")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _setup.hueValue,
      expression: "hueValue"
    }],
    ref: "hueLumInput",
    staticClass: "text-right font-mono leading-6 inline-block align-middle w-10 text-gray-600 hover:text-gray-800 py-3 px-0 text-lg border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none",
    attrs: {
      placeholder: "Hue",
      type: "number"
    },
    domProps: {
      value: _setup.hueValue
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _setup.hueValue = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _setup.hueValue,
      expression: "hueValue"
    }],
    staticClass: "w-full",
    attrs: {
      type: "range",
      min: "0",
      max: "359"
    },
    domProps: {
      value: _setup.hueValue
    },
    on: {
      input: function input($event) {},
      __r: function __r($event) {
        _setup.hueValue = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "flex items-center justify-between"
  }, [_c("div", {
    staticClass: "font-bold"
  }, [_vm._v("Saturation")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _setup.satValue,
      expression: "satValue"
    }],
    ref: "satLumInput",
    staticClass: "text-right font-mono leading-6 inline-block align-middle w-10 text-gray-600 hover:text-gray-800 py-3 px-0 text-lg border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none",
    attrs: {
      placeholder: "Saturation",
      type: "number"
    },
    domProps: {
      value: _setup.satValue
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _setup.satValue = $event.target.value;
      }
    }
  })]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _setup.satValue,
      expression: "satValue"
    }],
    staticClass: "w-full",
    attrs: {
      type: "range",
      min: "0",
      max: "100"
    },
    domProps: {
      value: _setup.satValue
    },
    on: {
      __r: function __r($event) {
        _setup.satValue = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "p-5 border relative mt-5"
  }, [_c("div", {
    staticClass: "z-10 absolute inset-y-0 left-0 w-1/2 bg-white"
  }), _vm._v(" "), _c("div", {
    staticClass: "z-10 absolute inset-y-0 left-1/2 w-1/2 bg-black"
  }), _vm._v(" "), _c("div", {
    staticClass: "z-20 relative w-full h-8",
    style: {
      backgroundColor: "rgb(".concat(_setup.falseRGB, ")")
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-mono",
    "class": _setup.grayscaleLumComputed < 21.5 ? "text-white" : ""
  }, [_vm._v(_vm._s("rgb(".concat(_setup.falseRGB, ")")) + " " + _vm._s(_setup.falseHex))])])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "md:flex justify-between"
  }, [_c("h1", {
    staticClass: "mb-6 mr-5 font-bold uppercase tracking-wide"
  }, [_vm._v("\n\t\t\t\t1. Choose your luminance\n\t\t\t")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c("div", {
    staticClass: "md:flex justify-between"
  }, [_c("h1", {
    staticClass: "mb-6 mr-5 font-bold uppercase tracking-wide"
  }, [_vm._v("\n\t\t\t\t2. Choose your hue and saturation\n\t\t\t")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/Pages/FalseColor.vue":
/*!*******************************************!*\
  !*** ./resources/js/Pages/FalseColor.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FalseColor_vue_vue_type_template_id_02136a69__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FalseColor.vue?vue&type=template&id=02136a69 */ "./resources/js/Pages/FalseColor.vue?vue&type=template&id=02136a69");
/* harmony import */ var _FalseColor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FalseColor.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/FalseColor.vue?vue&type=script&setup=true&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FalseColor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _FalseColor_vue_vue_type_template_id_02136a69__WEBPACK_IMPORTED_MODULE_0__["render"],
  _FalseColor_vue_vue_type_template_id_02136a69__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/FalseColor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/FalseColor.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/FalseColor.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FalseColor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FalseColor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/FalseColor.vue?vue&type=script&setup=true&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FalseColor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/FalseColor.vue?vue&type=template&id=02136a69":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/FalseColor.vue?vue&type=template&id=02136a69 ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FalseColor_vue_vue_type_template_id_02136a69__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./FalseColor.vue?vue&type=template&id=02136a69 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/FalseColor.vue?vue&type=template&id=02136a69");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FalseColor_vue_vue_type_template_id_02136a69__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_FalseColor_vue_vue_type_template_id_02136a69__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);