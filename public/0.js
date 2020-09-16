(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color */ "./resources/js/utils/color.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./resources/js/utils/object.js");
/* harmony import */ var _components_PaletteRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PaletteRow */ "./resources/js/components/PaletteRow.vue");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  components: {
    PaletteRow: _components_PaletteRow__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      lums: {
        0: {
          lum: 98,
          rgb: this.lumToGrayscaleRGB(98)
        },
        1: {
          lum: 92,
          rgb: this.lumToGrayscaleRGB(92)
        },
        2: {
          lum: 82,
          rgb: this.lumToGrayscaleRGB(82)
        },
        3: {
          lum: 67,
          rgb: this.lumToGrayscaleRGB(67)
        },
        4: {
          lum: 50,
          rgb: this.lumToGrayscaleRGB(50)
        },
        5: {
          lum: 33,
          rgb: this.lumToGrayscaleRGB(33)
        },
        6: {
          lum: 18,
          rgb: this.lumToGrayscaleRGB(18)
        },
        7: {
          lum: 8,
          rgb: this.lumToGrayscaleRGB(8)
        },
        8: {
          lum: 3,
          rgb: this.lumToGrayscaleRGB(3)
        }
      },
      isDragging: null,
      isChoosingBase: null,
      lastPos: null,
      adjustLumsTimeout: 0,
      autoDistribute: false,
      palettes: [],
      dragTimeout: 0
    };
  },
  computed: {
    lumsCount: function lumsCount() {
      return Object.keys(this.lums).length;
    },
    tailwindConfig: function tailwindConfig() {
      var _this = this;

      var colors = {};
      colors.gray = Object.keys(this.lums).reduce(function (obj, index) {
        obj["".concat(index, "00")] = _utils_color__WEBPACK_IMPORTED_MODULE_0__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_0__, _toConsumableArray(_this.lums[index].rgb));
        return obj;
      }, {});
      this.palettes.forEach(function (palette) {
        colors[palette.name] = Object.keys(palette.swatches).reduce(function (obj, index) {
          obj["".concat(index, "00")] = _utils_color__WEBPACK_IMPORTED_MODULE_0__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_0__, _toConsumableArray(palette.swatches[index].rgb.map(Math.round)));
          return obj;
        }, {});
      });
      return JSON.stringify(colors, null, '  ');
    }
  },
  watch: {
    autoDistribute: function autoDistribute(val) {
      if (val) {
        this.adjustLums(this.lums[0], this.lums[this.lumsCount - 1].lum, this.lums[0].lum, 0);
      }
    },
    lums: {
      deep: true,
      handler: function handler(val) {
        // Update palette swatch lums
        this.palettes = this.palettes.map(function (palette) {
          Object.keys(palette.swatches).forEach(function (i) {
            palette.swatches[i].lum = val[i].lum;
          });
          return palette;
        });
      }
    }
  },
  methods: {
    lumToGrayscaleRGB: function lumToGrayscaleRGB(lum) {
      var val = Math.round(255 * lum / 100);
      return [val, val, val];
    },
    onDragStart: function onDragStart($event, index) {
      this.isDragging = index;
      $event.dataTransfer.setDragImage(BLANK_IMG, 0, 0);
    },
    onDragEnd: function onDragEnd($event, index) {
      this.isDragging = null;
      this.lastPos = null;
    },
    onDrag: function onDrag($event, index) {
      var _this2 = this;

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
        this.lums[index].lum = 100 - pos;
        this.lums[index].rgb = this.lumToGrayscaleRGB(100 - pos);
        clearTimeout(this.adjustLumsTimeout);
        this.adjustLumsTimeout = setTimeout(function () {
          return _this2.adjustLums(index === 0 ? pos : _this2.lums[0].lum, index === _this2.lumsCount - 1 ? pos : _this2.lums[_this2.lumsCount - 1].lum, 100 - pos, index);
        }, 20);
      }
    },
    adjustLums: function adjustLums(startPos, endPos, curPos, curIndex) {
      var _this3 = this;

      if (!this.autoDistribute) return;

      if (curPos !== this.lastPos) {
        var lumIndices = Object.keys(this.lums);
        lumIndices.pop();
        lumIndices.shift();
        lumIndices.forEach(function (ndx) {
          ndx = parseInt(ndx, 10);

          if (ndx < curIndex) {
            var dist = (curPos - startPos) / curIndex;
            _this3.lums[ndx].lum = ndx * dist + _this3.lums[0].lum;
            _this3.lums[ndx].rgb = _this3.lumToGrayscaleRGB(_this3.lums[ndx].lum);
          } else if (curIndex < ndx) {
            var _dist = (endPos - curPos) / (_this3.lumsCount - curIndex - 1);

            _this3.lums[ndx].lum = (ndx - curIndex) * _dist + curPos;
            _this3.lums[ndx].rgb = _this3.lumToGrayscaleRGB(_this3.lums[ndx].lum);
          }
        }); // Prevent this from running unnecessarily

        this.lastPos = curPos;
      }
    },
    addPalette: function addPalette() {
      var _this4 = this;

      this.palettes.unshift({
        name: 'new',
        swatches: Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__["clone"])(this.lums)
      });
      this.isChoosingBase = 0;
      this.$nextTick(function () {
        setTimeout(function () {
          var _ref = _this4.$refs.paletteHex0 || [],
              _ref2 = _slicedToArray(_ref, 1),
              input = _ref2[0];

          if (input) input.click();
        }, 10);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PaletteRow.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PaletteRow.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/color */ "./resources/js/utils/color.js");
/* harmony import */ var _SwatchSquare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwatchSquare */ "./resources/js/components/SwatchSquare.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PaletteRow',
  props: {
    palette: Object,
    hideLum: Boolean,
    name: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      paletteClone: {},
      generateTimeout: 0
    };
  },
  components: {
    SwatchSquare: _SwatchSquare__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  watch: {
    palette: {
      deep: true,
      handler: function handler(val) {
        this.paletteClone = Object.assign({}, this.paletteClone, val);
      }
    },
    'palette.hex': {
      handler: function handler() {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#000000';
        this.paletteClone = Object.assign({}, this.paletteClone, this.palette, {
          hex: val
        });
        this.paletteClone.rgb = _utils_color__WEBPACK_IMPORTED_MODULE_1__["hexToRGB"](val);
        var rgb = Object.values(this.paletteClone.rgb);
        this.paletteClone.hsl = _utils_color__WEBPACK_IMPORTED_MODULE_1__["RGBToHSL"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_1__, _toConsumableArray(rgb));
        this.paletteClone.lum = _utils_color__WEBPACK_IMPORTED_MODULE_1__["lumFromRGB"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_1__, _toConsumableArray(rgb));
        this.paletteClone.closest = _utils_color__WEBPACK_IMPORTED_MODULE_1__["closestLum"](this.lums, this.paletteClone.lum);
        this.$nextTick(this.generateSwatches);
      }
    },
    lums: {
      deep: true,
      handler: function handler() {
        this.$nextTick(this.generateSwatches);
      }
    }
  },
  computed: {
    swatches: function swatches() {
      return this.paletteClone && this.paletteClone.swatches || this.palette && this.palette.swatches || {};
    },
    lums: function lums() {
      return Object.values(this.palette.swatches).reduce(function (arr, cur) {
        arr.push(cur.lum);
        return arr;
      }, []);
    }
  },
  methods: {
    generateSwatches: function generateSwatches() {
      var _this = this;

      if (!this.paletteClone.hsl) return;

      var run = function run() {
        var baseHSL = _this.paletteClone.hsl;
        Object.keys(_this.paletteClone.swatches).forEach( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(i) {
            var swatch, newL, newRGB;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    swatch = _this.paletteClone.swatches[i];
                    _context.next = 3;
                    return _utils_color__WEBPACK_IMPORTED_MODULE_1__["lightnessFromHSLum"](baseHSL.h, baseHSL.s, swatch.lum);

                  case 3:
                    newL = _context.sent;
                    newRGB = _utils_color__WEBPACK_IMPORTED_MODULE_1__["HSLtoRGB"](baseHSL.h, baseHSL.s, newL);
                    _this.paletteClone.swatches[i].rgb = Object.values(newRGB).map(function (c) {
                      return c * 1;
                    });
                    _this.paletteClone.swatches[i].lum = _utils_color__WEBPACK_IMPORTED_MODULE_1__["lumFromRGB"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_1__, _toConsumableArray(_this.paletteClone.swatches[i].rgb));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      };

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(run);
      } else {
        clearTimeout(this.generateTimeout);
        this.generateTimeout = setTimeout(run, 50);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SwatchSquare.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SwatchSquare.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SwatchSquare',
  props: {
    index: Number,
    swatch: Object,
    isFirst: Boolean,
    isLast: Boolean
  },
  methods: {
    getBgColor: function getBgColor(swatch) {
      return "rgb(".concat(swatch.rgb.join(','), ")");
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/App.vue?vue&type=template&id=0ec91988&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/App.vue?vue&type=template&id=0ec91988& ***!
  \*************************************************************************************************************************************************************************************************/
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
    _c("h1", { staticClass: "text-4xl leading-7 text-gray-500" }, [
      _vm._v("Luminance-Based Color Palette Generator")
    ]),
    _vm._v(" "),
    _c(
      "section",
      { staticClass: "mt-7" },
      [
        _c("h1", { staticClass: "mb-6 font-bold uppercase tracking-wide" }, [
          _vm._v("1. Set Your Luminosity Scale")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "float-right flex divide-x" }, [
          _c(
            "button",
            {
              class: [
                "px-4",
                _vm.autoDistribute
                  ? "font-bold text-gray-700"
                  : "text-gray-600 hover:underline"
              ],
              on: {
                click: function($event) {
                  _vm.autoDistribute = true
                }
              }
            },
            [_vm._v("\n        auto\n      ")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              class: [
                "px-4",
                !_vm.autoDistribute
                  ? "font-bold text-gray-700"
                  : "text-gray-600 hover:underline"
              ],
              on: {
                click: function($event) {
                  _vm.autoDistribute = false
                }
              }
            },
            [_vm._v("\n        manual\n      ")]
          )
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v("Drag the sliders below to set your luminosity scale.")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-5" }, [
          _c(
            "div",
            { staticClass: "rounded-full shadow-lg bg-gray-800 relative" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("div", {
                staticClass:
                  "border-t border-gray-600 absolute inset-x-0 top-1/2 -mt-px"
              }),
              _vm._v(" "),
              _vm._l(_vm.lums, function(swatch, index) {
                return _c("div", {
                  key: index,
                  class: [
                    "absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer w-half-7 h-half-7 shadow-inner rounded-full border-1 border-white",
                    _vm.isDragging === index
                      ? "shadow-outline"
                      : "transition-all duration-200"
                  ],
                  style: {
                    left: 100 - swatch.lum + "%",
                    backgroundColor:
                      "rgb(" + _vm.lumToGrayscaleRGB(swatch.lum).join(",") + ")"
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
        ]),
        _vm._v(" "),
        _c("palette-row", {
          staticClass: "mt-8",
          attrs: { palette: { swatches: _vm.lums } }
        }),
        _vm._v(" "),
        _vm._m(1)
      ],
      1
    ),
    _vm._v(" "),
    _c("section", { staticClass: "mt-9" }, [
      _c("h1", { staticClass: "mb-6 font-bold uppercase tracking-wide" }, [
        _vm._v("2. Set your colors")
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass:
            "mt-7 border-1 border-gray-700 transition-all hover:shadow hover:border-gray-800 hover:bg-gray-800 duration-300 rounded py-4 px-5 text-gray-700 hover:text-white uppercase text-sm font-bold tracking-wide",
          on: { click: _vm.addPalette }
        },
        [_vm._v("\n      Add A Color\n    ")]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-8" },
        _vm._l(_vm.palettes, function(palette, index) {
          return _c(
            "div",
            { key: index, staticClass: "mt-8" },
            [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: palette.hex,
                    expression: "palette.hex"
                  }
                ],
                ref: "paletteHex" + index,
                refInFor: true,
                staticClass:
                  "inline-block align-middle h-7 w-8 p-0 border-1 rounded bg-transparent mr-4",
                attrs: { type: "color", placeholder: "Enter color label" },
                domProps: { value: palette.hex },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(palette, "hex", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: palette.name,
                    expression: "palette.name"
                  }
                ],
                ref: "paletteName" + index,
                refInFor: true,
                staticClass:
                  "inline-block align-middle w-10 text-gray-700 hover:text-gray-800 py-3 px-0 text-lg font-bold border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none",
                attrs: { type: "text", placeholder: "Enter color label" },
                domProps: { value: palette.name },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(palette, "name", $event.target.value)
                  }
                }
              }),
              _vm._v(" "),
              _c("palette-row", {
                staticClass: "mt-5",
                attrs: { palette: palette }
              })
            ],
            1
          )
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "mt-9" }, [
      _c("h1", { staticClass: "mb-6 font-bold uppercase tracking-wide" }, [
        _vm._v("3. Export Colors for Tailwind CSS")
      ]),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _c(
        "pre",
        { staticClass: "mt-6 bg-gray-300 rounded-lg p-6 text-gray-800" },
        [_vm._v(_vm._s(_vm.tailwindConfig))]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "h-half-9 divide-x divide-gray-600 flex justify-between" },
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mt-7 opacity-50" }, [
      _vm._v(
        "\n      This scale will be consistent throughout each color in your project's palette. For example,\n      a blue-500 will match a red-500 in luminance (or visual lightness/darkness)... or\n      any-other-color-500. In the same way, a red-300 would match a yellow-300 or gray-300. This\n      is the beauty of\n      "
      ),
      _c("strong", [_vm._v("grayscale design")]),
      _vm._v(
        ". Making all your colors with a scale of equal luminance\n      allows you to design a website first in grayscale, and then, you can add color later without\n      losing any contrast.\n      "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mt-6 opacity-50" }, [
      _vm._v(
        "\n      When you add a color, it will create a swatch for each position from your luminosity scale\n      that you set above in step one.\n      "
      ),
      _c("strong", [_vm._v("Remember,")]),
      _vm._v(
        " to keep your entire color set consistent, changing your\n      luminosity scale will adjust all the colors accordingly.\n    "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mt-6" }, [
      _c(
        "a",
        {
          staticClass: "border-b border-gray-500 inline-block hover:opacity-50",
          attrs: {
            href: "https://tailwindcss.com/docs/customizing-colors",
            target: "_blank",
            rel: "noopener"
          }
        },
        [_vm._v("Customize your Tailwind CSS colors")]
      ),
      _vm._v("\n      with these generated colors:\n    ")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PaletteRow.vue?vue&type=template&id=4b79ba8a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PaletteRow.vue?vue&type=template&id=4b79ba8a& ***!
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
  return _c("div", { staticClass: "PaletteRow" }, [
    _c(
      "div",
      { staticClass: "flex items-center justify-between" },
      _vm._l(_vm.swatches, function(swatch, index) {
        return _c(
          "div",
          { staticClass: "w-full" },
          [
            _c(
              "swatch-square",
              {
                key: index,
                attrs: {
                  swatch: swatch,
                  index: parseInt(index, 10),
                  "is-first": index == 0,
                  "is-last": index == Object.keys(_vm.swatches).length - 1
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "font-mono opacity-50 text-gray-800 text-sm text-center px-2 leading-5 mt-4 mb-3"
                  },
                  [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.palette.name ? _vm.palette.name + "-" : "") +
                        _vm._s(parseInt(index, 10) + 1) +
                        "00\n        "
                    )
                  ]
                ),
                _vm._v(" "),
                !_vm.hideLum
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "font-mono opacity-50 text-gray-600 text-xs text-center leading-5"
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(swatch.lum ? swatch.lum.toFixed(1) : "--") +
                            "%\n        "
                        )
                      ]
                    )
                  : _vm._e()
              ]
            )
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "SwatchSquare" },
    [
      _c("div", {
        class: [
          "w-full h-9 shadow-inner transition-colors duration-150",
          _vm.isFirst ? "rounded-l-lg" : _vm.isLast ? "rounded-r-lg" : ""
        ],
        style: {
          backgroundColor: _vm.getBgColor(_vm.swatch),
          transitionDelay: _vm.index * 40 + "ms"
        }
      }),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/App.vue":
/*!************************************!*\
  !*** ./resources/js/Pages/App.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_0ec91988___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0ec91988& */ "./resources/js/Pages/App.vue?vue&type=template&id=0ec91988&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/Pages/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_0ec91988___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_0ec91988___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
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

/***/ "./resources/js/Pages/App.vue?vue&type=template&id=0ec91988&":
/*!*******************************************************************!*\
  !*** ./resources/js/Pages/App.vue?vue&type=template&id=0ec91988& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ec91988___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0ec91988& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/App.vue?vue&type=template&id=0ec91988&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ec91988___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ec91988___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/PaletteRow.vue":
/*!************************************************!*\
  !*** ./resources/js/components/PaletteRow.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaletteRow_vue_vue_type_template_id_4b79ba8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaletteRow.vue?vue&type=template&id=4b79ba8a& */ "./resources/js/components/PaletteRow.vue?vue&type=template&id=4b79ba8a&");
/* harmony import */ var _PaletteRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaletteRow.vue?vue&type=script&lang=js& */ "./resources/js/components/PaletteRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaletteRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaletteRow_vue_vue_type_template_id_4b79ba8a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaletteRow_vue_vue_type_template_id_4b79ba8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PaletteRow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PaletteRow.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/PaletteRow.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PaletteRow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PaletteRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PaletteRow.vue?vue&type=template&id=4b79ba8a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/PaletteRow.vue?vue&type=template&id=4b79ba8a& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteRow_vue_vue_type_template_id_4b79ba8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PaletteRow.vue?vue&type=template&id=4b79ba8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PaletteRow.vue?vue&type=template&id=4b79ba8a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteRow_vue_vue_type_template_id_4b79ba8a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteRow_vue_vue_type_template_id_4b79ba8a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SwatchSquare.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/SwatchSquare.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwatchSquare_vue_vue_type_template_id_d2826838___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwatchSquare.vue?vue&type=template&id=d2826838& */ "./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838&");
/* harmony import */ var _SwatchSquare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwatchSquare.vue?vue&type=script&lang=js& */ "./resources/js/components/SwatchSquare.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SwatchSquare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwatchSquare_vue_vue_type_template_id_d2826838___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwatchSquare_vue_vue_type_template_id_d2826838___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SwatchSquare.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SwatchSquare.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/SwatchSquare.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwatchSquare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SwatchSquare.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SwatchSquare.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwatchSquare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwatchSquare_vue_vue_type_template_id_d2826838___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SwatchSquare.vue?vue&type=template&id=d2826838& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwatchSquare_vue_vue_type_template_id_d2826838___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwatchSquare_vue_vue_type_template_id_d2826838___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/utils/color.js":
/*!*************************************!*\
  !*** ./resources/js/utils/color.js ***!
  \*************************************/
/*! exports provided: hexToRGB, RGBToHex, RGBToHSL, lumFromRGB, closestLum, lightnessFromHSLum, HSLtoRGB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGB", function() { return hexToRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBToHex", function() { return RGBToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RGBToHSL", function() { return RGBToHSL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lumFromRGB", function() { return lumFromRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closestLum", function() { return closestLum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lightnessFromHSLum", function() { return lightnessFromHSLum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HSLtoRGB", function() { return HSLtoRGB; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function hexToRGB(hex) {
  var r = 0;
  var g = 0;
  var b = 0;

  if (hex.length === 4) {
    r = "0x".concat(hex[1]).concat(hex[1]);
    g = "0x".concat(hex[2]).concat(hex[2]);
    b = "0x".concat(hex[3]).concat(hex[3]);
  } else if (hex.length === 7) {
    r = "0x".concat(hex[1]).concat(hex[2]);
    g = "0x".concat(hex[3]).concat(hex[4]);
    b = "0x".concat(hex[5]).concat(hex[6]);
  }

  return {
    r: r,
    g: g,
    b: b
  };
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function RGBToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function RGBToHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  var cmin = Math.min(r, g, b);
  var cmax = Math.max(r, g, b);
  var delta = cmax - cmin;
  var h = 0;
  var s = 0;
  var l = 0;
  if (delta === 0) h = 0;else if (cmax === r) h = (g - b) / delta % 6;else if (cmax === g) h = (b - r) / delta + 2;else h = (r - g) / delta + 4;
  h = Math.round(h * 60);
  if (h < 0) h += 360;
  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  return {
    h: h,
    s: s,
    l: l
  };
}
function lumFromRGB(r, g, b) {
  // Formula from WCAG 2.0
  var _map = [r, g, b].map(function (c) {
    c /= 255; // to 0-1 range

    return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  }),
      _map2 = _slicedToArray(_map, 3),
      R = _map2[0],
      G = _map2[1],
      B = _map2[2];

  return 21.26 * R + 71.52 * G + 7.22 * B;
}
function closestLum(lums, lum) {
  var min = 100;
  var cLum = null;
  var cIndex = null;

  for (var i = lums.length - 1; i >= 0; i--) {
    var val = Math.abs(lums[i] - lum);

    if (val < min) {
      min = val;
      cLum = lums[i];
      cIndex = i;
    }
  }

  var closest = {};
  closest[cIndex] = cLum;
  return closest;
}
function lightnessFromHSLum(h, s, lum) {
  var lowestDiff = 100;
  var newL = 100; // ballpark

  for (var l = 100; l >= 0; l--) {
    var curLum = lumFromRGB.apply(void 0, _toConsumableArray(Object.values(HSLtoRGB(h, s, l))));
    var diff = Math.abs(lum - curLum);

    if (diff < lowestDiff) {
      newL = l;
      lowestDiff = diff;
    }
  } // fine-tune


  for (var l = newL + 5; l >= newL - 5; l -= 0.01) {
    var _curLum = lumFromRGB.apply(void 0, _toConsumableArray(Object.values(HSLtoRGB(h, s, l))));

    var _diff = Math.abs(lum - _curLum);

    if (_diff < lowestDiff) {
      newL = l;
      lowestDiff = _diff;
    }
  }

  return newL;
}
function HSLtoRGB(h, s, l) {
  s /= 100;
  l /= 100;
  var c = (1 - Math.abs(2 * l - 1)) * s;
  var x = c * (1 - Math.abs(h / 60 % 2 - 1));
  var m = l - c / 2;
  var r = 0;
  var g = 0;
  var b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  return {
    r: (r + m) * 255,
    g: (g + m) * 255,
    b: (b + m) * 255
  };
}

/***/ }),

/***/ "./resources/js/utils/object.js":
/*!**************************************!*\
  !*** ./resources/js/utils/object.js ***!
  \**************************************/
/*! exports provided: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
var clone = function clone(obj) {
  var backup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return JSON.parse(JSON.stringify(obj || backup));
};

/***/ })

}]);