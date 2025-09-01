(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/App.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/App.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vanilla_colorful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-colorful */ "./node_modules/vanilla-colorful/hex-color-picker.js");
/* harmony import */ var _utils_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/forms */ "./resources/js/utils/forms.js");
/* harmony import */ var _utils_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/url */ "./resources/js/utils/url.js");
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/color */ "./resources/js/utils/color.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/object */ "./resources/js/utils/object.js");
/* harmony import */ var _components_PaletteRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PaletteRow */ "./resources/js/components/PaletteRow.vue");
/* harmony import */ var _components_GrayscaleRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GrayscaleRow */ "./resources/js/components/GrayscaleRow.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  components: {
    PaletteRow: _components_PaletteRow__WEBPACK_IMPORTED_MODULE_5__["default"],
    GrayscaleRow: _components_GrayscaleRow__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    cms: {
      type: Object,
      "default": function _default() {
        var Statamic = window.Statamic || {};
        return Statamic.cms || {};
      }
    },
    csrf: String
  },
  data: function data() {
    return {
      showPicker: null,
      presets: {
        bell: {
          label: 'Bell Curve',
          icon: 'fa fa-wave-sine',
          getValues: function getValues(lums, count) {
            var min = lums.reduce(function (num, val) {
              return val < num ? val : num;
            }, 100);
            var max = lums.reduce(function (num, val) {
              return val > num ? val : num;
            }, 0);
            var spread = max - min;
            var space = spread / (count - 1);
            var mid = spread / 2 + min;
            var half = (count - 1) / 2;
            var vals = [min];
            var i = 1;
            while (i < count - 1) {
              var val = void 0,
                virtualIndex = void 0;
              if (i === half) {
                val = mid;
              } else if (i < half) {
                virtualIndex = half - i;
                val = i * space;
                val *= Math.pow((half - 1) / half, virtualIndex);
                val = Math.max(val + min, min);
              } else {
                virtualIndex = i - half;
                val = (count - 1 - i) * space;
                val *= Math.pow((half - 1) / half, virtualIndex);
                val = Math.min(max - val, max);
              }
              vals.push(val);
              i++;
            }
            vals.push(max);
            vals.reverse();
            return vals;
          }
        },
        linear: {
          label: 'Linear',
          icon: 'fa fa-horizontal-rule',
          getValues: function getValues(lums, count) {
            var min = lums.reduce(function (num, val) {
              return val < num ? val : num;
            }, 100);
            var max = lums.reduce(function (num, val) {
              return val > num ? val : num;
            }, 0);
            var space = (max - min) / (count - 1);
            var vals = [min];
            var i = 1;
            while (i < count - 1) {
              var val = min + i * space;
              vals.push(val);
              i++;
            }
            vals.push(max);
            vals.reverse();
            return vals;
          }
        },
        dark: {
          label: 'Darker Side',
          icon: 'fa fa-moon',
          getValues: function getValues(lums, count) {
            var min = lums.reduce(function (num, val) {
              return val < num ? val : num;
            }, 100);
            var max = lums.reduce(function (num, val) {
              return val > num ? val : num;
            }, 0);
            var spread = max - min;
            var space = spread / (count - 1);
            var vals = [min];
            var i = 1;
            while (i < count - 1) {
              var val = i * space;
              val *= Math.pow((count - 1) / count, count - i * (count + 1) / count);
              vals.push(Math.min(val + min, max));
              i++;
            }
            vals.push(max);
            vals.reverse();
            return vals;
          }
        },
        light: {
          label: 'Lighter Side',
          icon: 'fa fa-sun',
          getValues: function getValues(lums, count) {
            var min = lums.reduce(function (num, val) {
              return val < num ? val : num;
            }, 100);
            var max = lums.reduce(function (num, val) {
              return val > num ? val : num;
            }, 0);
            var spread = max - min;
            var space = spread / (count - 1);
            var vals = [min];
            var i = count - 2;
            while (i > 0) {
              var val = i * space;
              val *= Math.pow((count - 1) / count, count - i * (count + 1) / count);
              vals.push(Math.max(max - val, min));
              i--;
            }
            vals.push(max);
            vals.reverse();
            return vals;
          }
        },
        "default": {
          label: 'Default',
          icon: 'fa fa-dot-circle',
          getValues: function getValues(lums, count) {
            return [93.87, 82.28, 68.67, 49.10, 40.20, 32.78, 13.29, 9.31, 6.30, 2.62, 1.30, 0.52];
          }
        },
        tailwind: {
          label: 'Tailwind',
          icon: 'fak fa-tailwind',
          getValues: function getValues(lums, count) {
            return [93.88, 87.19, 75.61, 61.14, 42.57, 28.39, 18.04, 11.21, 6.97, 4.72, 1.63];
          }
        },
        radix: {
          label: 'Radix',
          icon: 'fak fa-radix',
          getValues: function getValues(lums, count) {
            return [98.1, 96.4, 90.1, 83.3, 75.6, 65.8, 52.6, 37.4, 15.2, 12.8, 10.2, 1.2];
          }
        }
      },
      lums: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {}
      },
      isChoosingBase: null,
      lastPos: null,
      adjustLumsTimeout: 0,
      autoDistribute: false,
      palettes: [],
      showFilters: [],
      lockedPalettes: [],
      lockedByHex: {},
      showPresets: false,
      showUploadForm: false,
      paletteCacheBustTimeout: 0,
      updateSwatchTimeout: 0,
      isUploading: false,
      uploadFile: null,
      base64File: null,
      uploadFileUrl: '',
      uploadFilePath: '',
      grayscaleJson: {},
      paletteJson: {},
      shownPaletteMenu: null,
      setFromUploadTimeout: 0,
      hasUpdatedLumsCount: false,
      copyText: '',
      showLumsMenu: false,
      storedSwatches: {},
      cssTab: 'tailwind',
      cssType: 'rgb',
      updateUrlTimeout: 0,
      textOverlay: false,
      autoDarkModeTab: 'css'
    };
  },
  computed: {
    radixLums: function radixLums() {
      var newLums = this.lums;
      Object.keys(this.lums).forEach(function (lum, i) {
        newLums[lum].label = parseInt(i, 10) + 1;
      });
      return newLums;
    },
    isRadixPreset: function isRadixPreset() {
      return JSON.stringify(this.presets.radix.getValues()) == JSON.stringify(this.lumsValues);
    },
    isTailwindPreset: function isTailwindPreset() {
      return JSON.stringify(this.presets.tailwind.getValues()) == JSON.stringify(this.lumsValues);
    },
    suggestedColors: function suggestedColors() {
      var _this = this;
      if (!this.paletteBases.length) return [];
      var hex = this.paletteBases[0];
      if (hex === '#000000') return [];
      var _Color$hexToRGB = _utils_color__WEBPACK_IMPORTED_MODULE_3__["hexToRGB"](hex),
        r = _Color$hexToRGB.r,
        g = _Color$hexToRGB.g,
        b = _Color$hexToRGB.b;
      var _Color$RGBToHSL = _utils_color__WEBPACK_IMPORTED_MODULE_3__["RGBToHSL"](r, g, b),
        h = _Color$RGBToHSL.h,
        s = _Color$RGBToHSL.s,
        l = _Color$RGBToHSL.l;
      var lum = 40; // Color.lumFromRGB(r, g, b);
      var complH = h > 179 ? h - 180 : h + 180;
      var complRGB = _utils_color__WEBPACK_IMPORTED_MODULE_3__["HSLtoRGB"](complH, s, _utils_color__WEBPACK_IMPORTED_MODULE_3__["lightnessFromHSLum"](complH, s, lum));
      var complHex = _utils_color__WEBPACK_IMPORTED_MODULE_3__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_3__, _toConsumableArray(Object.values(complRGB).map(Math.round)));
      var tri1H = h + 120;
      if (tri1H > 359) tri1H -= 360;
      var tri1RGB = _utils_color__WEBPACK_IMPORTED_MODULE_3__["HSLtoRGB"](tri1H, s, _utils_color__WEBPACK_IMPORTED_MODULE_3__["lightnessFromHSLum"](tri1H, s, lum));
      var tri1Hex = _utils_color__WEBPACK_IMPORTED_MODULE_3__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_3__, _toConsumableArray(Object.values(tri1RGB).map(Math.round)));
      var tri2H = h - 120;
      if (tri2H < 0) tri2H += 360;
      var tri2RGB = _utils_color__WEBPACK_IMPORTED_MODULE_3__["HSLtoRGB"](tri2H, s, _utils_color__WEBPACK_IMPORTED_MODULE_3__["lightnessFromHSLum"](tri2H, s, lum));
      var tri2Hex = _utils_color__WEBPACK_IMPORTED_MODULE_3__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_3__, _toConsumableArray(Object.values(tri2RGB).map(Math.round)));
      var near1H = h + 60;
      if (near1H > 359) near1H -= 360;
      var near1RGB = _utils_color__WEBPACK_IMPORTED_MODULE_3__["HSLtoRGB"](near1H, s, _utils_color__WEBPACK_IMPORTED_MODULE_3__["lightnessFromHSLum"](near1H, s, lum));
      var near1Hex = _utils_color__WEBPACK_IMPORTED_MODULE_3__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_3__, _toConsumableArray(Object.values(near1RGB).map(Math.round)));
      var near2H = h - 60;
      if (near2H < 0) near2H += 360;
      var near2RGB = _utils_color__WEBPACK_IMPORTED_MODULE_3__["HSLtoRGB"](near2H, s, _utils_color__WEBPACK_IMPORTED_MODULE_3__["lightnessFromHSLum"](near2H, s, lum));
      var near2Hex = _utils_color__WEBPACK_IMPORTED_MODULE_3__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_3__, _toConsumableArray(Object.values(near2RGB).map(Math.round)));
      return [near2Hex, tri2Hex, complHex, tri1Hex, near1Hex].filter(function (h) {
        return _this.paletteBases.indexOf(h) === -1;
      });
    },
    tabContent: function tabContent() {
      if (this.cssTab === 'tailwind') return this.cssTailwind;
      if (this.cssTab === 'radix') return this.cssRadix;
      if (this.cssTab === 'vars') return this.cssVars;
      if (this.cssTab === 'scss') return this.cssScss;
      if (this.cssTab === 'stylus') return this.cssStylus;
      if (this.cssTab === 'less') return this.cssLess;
    },
    paletteBases: function paletteBases() {
      this.updateUrl();
      return this.palettes.reduce(function (arr, palette) {
        arr.push(palette.hex);
        return arr;
      }, []);
    },
    paletteNames: function paletteNames() {
      this.updateUrl();
      return this.palettes.reduce(function (arr, palette) {
        arr.push(palette.name);
        return arr;
      }, []);
    },
    paletteLabels: function paletteLabels() {
      this.updateUrl();
      return this.palettes.reduce(function (arr, palette) {
        arr.push(palette.label);
        return arr;
      }, []);
    },
    paletteFilters: function paletteFilters() {
      return this.palettes.reduce(function (arr, palette) {
        arr.push(palette.filters);
        return arr;
      }, []);
    },
    hasLockedLums: function hasLockedLums() {
      return Object.keys(this.lockedByHex).length > 0;
    },
    lumsValues: function lumsValues() {
      var _this2 = this;
      return Object.keys(this.lums).reduce(function (arr, index) {
        arr.push(_this2.lums[index].lum);
        return arr;
      }, []);
    },
    lumsCount: function lumsCount() {
      return Object.keys(this.lums).length;
    },
    exportConfig: function exportConfig() {
      return JSON.stringify(this.cssColors);
    },
    cssColors: function cssColors() {
      var _this3 = this;
      var colors = {};
      colors.grayscale = {
        name: 'grayscale',
        swatches: Object.keys(this.lums).reduce(function (obj, index) {
          var swatch = {
            lum: _this3.lums[index].lum,
            rgb: _this3.lums[index].rgb,
            hex: _utils_color__WEBPACK_IMPORTED_MODULE_3__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_3__, _toConsumableArray(_this3.lums[index].rgb)),
            hsl: Object.values(_utils_color__WEBPACK_IMPORTED_MODULE_3__["RGBToHSL"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_3__, _toConsumableArray(_this3.lums[index].rgb))),
            oklch: Object.values(_utils_color__WEBPACK_IMPORTED_MODULE_3__["RGBToOKLCH"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_3__, _toConsumableArray(_this3.lums[index].rgb))),
            label: _this3.lums[index].label
          };
          obj[index] = swatch;
          return obj;
        }, {})
      };
      this.palettes.forEach(function (palette, i) {
        var name = palette.name;
        if (!name) {
          var closestToMid = _utils_color__WEBPACK_IMPORTED_MODULE_3__["closestLum"](_this3.lumsValues, 50);
          var _ref = Object.keys(closestToMid) || Math.floor(_this3.lumsCount / 2),
            _ref2 = _slicedToArray(_ref, 1),
            midIndex = _ref2[0];
          var swatch = palette.swatches[midIndex];
          var _Color$RGBToHSL2 = _utils_color__WEBPACK_IMPORTED_MODULE_3__["RGBToHSL"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_3__, _toConsumableArray(swatch.rgb)),
            h = _Color$RGBToHSL2.h,
            s = _Color$RGBToHSL2.s,
            l = _Color$RGBToHSL2.l;
          name = _utils_color__WEBPACK_IMPORTED_MODULE_3__["colorName"](h, s, l);
        }
        if (name === 'grayscale') name += '-alt';
        colors[name] = Object.keys(palette.swatches).reduce(function (obj, j) {
          if (_this3.storedSwatches[palette.hex] && _this3.storedSwatches[palette.hex][j]) {
            obj.swatches[j] = _this3.storedSwatches[palette.hex][j];
          }
          return obj;
        }, _objectSpread(_objectSpread({}, palette), {}, {
          name: name,
          swatches: {}
        }));
      });
      return colors;
    },
    cssTailwind: function cssTailwind() {
      var _this4 = this;
      var colors = Object.keys(this.cssColors).reduce(function (obj, name) {
        obj[name] = {};
        var swatchCount = Object.keys(_this4.cssColors[name].swatches).length;
        Object.keys(_this4.cssColors[name].swatches).forEach(function (i) {
          var swatch = _this4.cssColors[name].swatches[i];
          var label = _this4.getValueLabel(i, swatchCount);
          obj[name][label] = _this4.formatSwatchColor(swatch);
          if (_this4.isLockedHex(swatch.hex)) {
            obj[name]['DEFAULT'] = obj[name][label];
          }
        });
        return obj;
      }, {});
      var config = JSON.stringify(colors, null, '  ');
      localStorage.setItem(new Date(), config);
      return "// Grayscale Design palette: ".concat(window.location.href, "\nconst grayscale = ") + config;
    },
    cssRadix: function cssRadix() {
      var _this5 = this;
      var colors = this.cssColors;
      var js = "// Grayscale Design palette: ".concat(window.location.href, "\n");
      try {
        js += Object.keys(colors).reduce(function (str, name) {
          str += "\nconst ".concat(name, " = {\n");
          Object.keys(colors[name].swatches).forEach(function (i) {
            var swatch = colors[name].swatches[i];
            var label = parseInt(i, 10) + 1;
            str += "  '".concat(name).concat(label, "': '").concat(_this5.formatSwatchColor(swatch), "',\n");
          });
          str += '};\n';

          // Dark Colors
          str += "\nconst ".concat(name, "Dark = {\n");
          Object.keys(colors[name].swatches).forEach(function (i) {
            var swatch = colors[name].swatches[i];
            var lum = 100 - swatch.lum;
            var _swatch$hsl = _slicedToArray(swatch.hsl, 2),
              h = _swatch$hsl[0],
              s = _swatch$hsl[1];
            var l = _utils_color__WEBPACK_IMPORTED_MODULE_3__["lightnessFromHSLum"](h, s, lum);
            var _Color$HSLtoRGB = _utils_color__WEBPACK_IMPORTED_MODULE_3__["HSLtoRGB"](swatch.hsl[0], swatch.hsl[1], l),
              r = _Color$HSLtoRGB.r,
              g = _Color$HSLtoRGB.g,
              b = _Color$HSLtoRGB.b;
            var hex = _utils_color__WEBPACK_IMPORTED_MODULE_3__["RGBToHex"](r, g, b);
            var newSwatch = {
              lum: lum,
              hex: hex,
              rgb: [r, g, b].map(Math.round),
              hsl: [h, s, l],
              label: parseInt(i, 10) + 1
            };
            str += "  '".concat(name).concat(newSwatch.label, "': '").concat(_this5.formatSwatchColor(newSwatch), "',\n");
          });
          str += '};\n';
          return str;
        }, '');
      } catch (e) {
        //
      }
      return js;
    },
    cssVars: function cssVars() {
      var _this6 = this;
      var colors = this.cssColors;
      var css = "/* Grayscale Design palette: ".concat(window.location.href, " */\n:root {");
      css += Object.keys(colors).reduce(function (str, name) {
        str += '\n';
        var swatchCount = Object.keys(colors[name].swatches).length;
        Object.keys(colors[name].swatches).forEach(function (i) {
          var swatch = colors[name].swatches[i];
          var label = _this6.getValueLabel(i, swatchCount);
          str += "  --".concat(name, "-").concat(label, ": ").concat(_this6.formatSwatchColor(swatch), ";\n");
        });
        return str;
      }, '');
      css += '}';
      return css;
    },
    cssScss: function cssScss() {
      var _this7 = this;
      var colors = this.cssColors;
      var css = "// Grayscale Design palette: ".concat(window.location.href, "\n");
      css += Object.keys(colors).reduce(function (str, name) {
        var swatchCount = Object.keys(colors[name].swatches).length;
        Object.keys(colors[name].swatches).forEach(function (i) {
          var swatch = colors[name].swatches[i];
          var label = _this7.getValueLabel(i, swatchCount);
          str += "$".concat(name, "-").concat(label, ": ").concat(_this7.formatSwatchColor(swatch), ";\n");
        });
        str += '\n';
        return str;
      }, '');
      return css;
    },
    cssLess: function cssLess() {
      var _this8 = this;
      var colors = this.cssColors;
      var css = "// Grayscale Design palette: ".concat(window.location.href, "\n");
      css += Object.keys(colors).reduce(function (str, name) {
        var swatchCount = Object.keys(colors[name].swatches).length;
        Object.keys(colors[name].swatches).forEach(function (i) {
          var swatch = colors[name].swatches[i];
          var label = _this8.getValueLabel(i, swatchCount);
          str += "@".concat(name, "-").concat(label, ": ").concat(_this8.formatSwatchColor(swatch), ";\n");
        });
        str += '\n';
        return str;
      }, '');
      return css;
    },
    cssStylus: function cssStylus() {
      var _this9 = this;
      var colors = this.cssColors;
      var css = "// Grayscale Design palette: ".concat(window.location.href, "\n");
      css += Object.keys(colors).reduce(function (str, name) {
        var swatchCount = Object.keys(colors[name].swatches).length;
        Object.keys(colors[name].swatches).forEach(function (i) {
          var swatch = colors[name].swatches[i];
          var label = _this9.getValueLabel(i, swatchCount >= 10);
          str += "".concat(name, "-").concat(label, " = ").concat(_this9.formatSwatchColor(swatch), "\n");
        });
        str += '\n';
        return str;
      }, '');
      return css;
    },
    autoDarkModeCss: function autoDarkModeCss() {
      var _this10 = this;
      var colors = this.cssColors;
      var css = "@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n@layer utilities {\n";
      css += "  /* Grayscale Design palette: ".concat(window.location.href, " */\n");
      css += "  :root {\n";

      // Generate all color variables in RGB format for Tailwind compatibility
      css += Object.keys(colors).reduce(function (str, name) {
        str += "\n";
        var swatchCount = Object.keys(colors[name].swatches).length;
        Object.keys(colors[name].swatches).forEach(function (i) {
          var _swatch$rgb;
          var swatch = colors[name].swatches[i];
          var label = _this10.getValueLabel(i, swatchCount);
          var value = (_swatch$rgb = swatch.rgb) === null || _swatch$rgb === void 0 ? void 0 : _swatch$rgb.join(' ');
          if (value) {
            str += "    --".concat(name, "-").concat(label, ": ").concat(value, ";\n");
          }
        });
        return str;
      }, '');

      // Add black and white variables
      css += "\n    --black: 0 0 0;\n";
      css += "    --white: 255 255 255;\n\n";

      // Add abstract color mappings based on grayscale
      if (colors.grayscale && colors.grayscale.swatches) {
        css += "    /* Set abstract colors */\n";
        css += "    --dark: var(--black);\n";
        css += "    --light: var(--white);\n\n";
        var grayscaleSwatches = colors.grayscale.swatches;
        var swatchKeys = Object.keys(grayscaleSwatches).sort(function (a, b) {
          return parseInt(a) - parseInt(b);
        });
        var swatchCount = swatchKeys.length;
        swatchKeys.forEach(function (i) {
          var label = _this10.getValueLabel(i, swatchCount);
          css += "    --neutral-".concat(label, ": var(--grayscale-").concat(label, ");\n");
        });
      }
      css += "  }\n\n";

      // Add dark mode section that flips the values
      css += "  @media (prefers-color-scheme: dark) {\n";
      css += "    /* Flip the values for dark mode */\n";
      css += "    :root {\n";
      css += "      --dark: var(--white);\n";
      css += "      --light: var(--black);\n\n";

      // Flip grayscale/neutral values if they exist
      if (colors.grayscale && colors.grayscale.swatches) {
        var _grayscaleSwatches = colors.grayscale.swatches;
        var _swatchKeys = Object.keys(_grayscaleSwatches).sort(function (a, b) {
          return parseInt(a) - parseInt(b);
        });
        var _swatchCount = _swatchKeys.length;
        _swatchKeys.forEach(function (i) {
          var label = _this10.getValueLabel(i, _swatchCount);
          var reverseIndex = _swatchCount - 1 - parseInt(i);
          var reverseLabel = _this10.getValueLabel(reverseIndex, _swatchCount);
          css += "      --neutral-".concat(label, ": var(--grayscale-").concat(reverseLabel, ");\n");
        });
      }

      // Flip all other color palettes
      Object.keys(colors).forEach(function (name) {
        if (name !== 'grayscale') {
          css += "\n";
          var _swatchCount2 = Object.keys(colors[name].swatches).length;
          var _swatchKeys2 = Object.keys(colors[name].swatches).sort(function (a, b) {
            return parseInt(a) - parseInt(b);
          });
          _swatchKeys2.forEach(function (i) {
            var label = _this10.getValueLabel(i, _swatchCount2);
            var reverseIndex = _swatchCount2 - 1 - parseInt(i);
            var reverseLabel = _this10.getValueLabel(reverseIndex, _swatchCount2);
            css += "      --".concat(name, "-").concat(label, ": var(--").concat(name, "-").concat(reverseLabel, ");\n");
          });
        }
      });
      css += "    }\n\n";
      css += "\n    /* with this utility class you can do something like <div class=\"text-primary-400 dark:unset-dark-mode\"> and it (and all it's child elements) will not automatically switch in darkmode. */\n";
      css += "    .unset-dark-mode {\n";

      // Reset all colors to their original values in the unset class
      css += Object.keys(colors).reduce(function (str, name) {
        var swatchCount = Object.keys(colors[name].swatches).length;
        Object.keys(colors[name].swatches).forEach(function (i) {
          var label = _this10.getValueLabel(i, swatchCount);
          str += "      --".concat(name, "-").concat(label, ": var(--").concat(name, "-").concat(label, ");\n");
        });
        str += "\n";
        return str;
      }, '');
      if (colors.grayscale && colors.grayscale.swatches) {
        var _grayscaleSwatches2 = colors.grayscale.swatches;
        var _swatchKeys3 = Object.keys(_grayscaleSwatches2).sort(function (a, b) {
          return parseInt(a) - parseInt(b);
        });
        var _swatchCount3 = _swatchKeys3.length;
        _swatchKeys3.forEach(function (i) {
          var label = _this10.getValueLabel(i, _swatchCount3);
          css += "      --neutral-".concat(label, ": var(--grayscale-").concat(label, ");\n");
        });
      }
      css += "    }\n";
      css += "  }\n";
      css += "}";
      return css;
    },
    autoDarkModeTailwindConfig: function autoDarkModeTailwindConfig() {
      var _this11 = this;
      var colors = this.cssColors;
      var config = "function setAsCssVariable(colorName) {\n";
      config += "  let augmentedPalette = {};\n";
      config += "  const values = [";

      // Get the values from grayscale to determine the scale
      if (colors.grayscale && colors.grayscale.swatches) {
        var swatchKeys = Object.keys(colors.grayscale.swatches).sort(function (a, b) {
          return parseInt(a) - parseInt(b);
        });
        var labels = swatchKeys.map(function (i) {
          return _this11.getValueLabel(i, swatchKeys.length);
        });
        config += labels.join(', ');
      } else {
        config += '50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100';
      }
      config += "];\n";
      config += "  values.forEach((value) => {\n";
      config += "    augmentedPalette[value] = `rgb(var(--${colorName}-${value}) / <alpha-value>)`;\n";
      config += "  });\n";
      config += "  return augmentedPalette;\n";
      config += "}\n\n";
      config += "module.exports = {\n";
      config += "  theme: {\n";
      config += "    colors: {\n";
      config += "      current: 'currentColor',\n";
      config += "      transparent: 'transparent',\n";
      config += "      black: 'rgb(var(--black) / <alpha-value>)',\n";
      config += "      white: 'rgb(var(--white) / <alpha-value>)',\n";
      config += "      light: 'rgb(var(--light) / <alpha-value>)',\n";
      config += "      dark: 'rgb(var(--dark) / <alpha-value>)',\n";

      // Add all color palettes
      Object.keys(colors).forEach(function (name) {
        config += "      ".concat(name, ": setAsCssVariable('").concat(name, "'),\n");
      });
      config += "      neutral: setAsCssVariable('neutral'),\n";
      config += "    },\n";
      config += "  },\n";
      config += "};\n";
      return config;
    },
    autoDarkModeTabContent: function autoDarkModeTabContent() {
      if (this.autoDarkModeTab === 'css') return this.autoDarkModeCss;
      if (this.autoDarkModeTab === 'config') return this.autoDarkModeTailwindConfig;
    }
  },
  watch: {
    cssTab: function cssTab(val, oldVal) {
      var _this$lumsValues;
      if (val && val !== oldVal && (_this$lumsValues = this.lumsValues) !== null && _this$lumsValues !== void 0 && _this$lumsValues.length) this.setLums(this.lumsValues);
    },
    isRadixPreset: function isRadixPreset(val) {
      if (val) this.cssTab = 'radix';
    },
    isTailwindPreset: function isTailwindPreset(val) {
      if (val) this.cssTab = 'tailwind';
    },
    paletteBases: function paletteBases(val) {
      var _this12 = this;
      Object.keys(this.lockedByHex).forEach(function (hex) {
        if (val.indexOf(hex) === -1) {
          _this12.toggleLocked(hex, false);
        }
      });
    },
    hasLockedLums: function hasLockedLums(val) {
      if (!!val) this.autoDistribute = false;
    },
    /**
     * Create a grayscale palette from uploaded image
     * @param  {Object} val     JSON response from imgix
     */
    grayscaleJson: function grayscaleJson(val) {
      var hexes = [];
      var colors = [];
      val.colors.forEach(function (color) {
        if (!hexes.includes(color.hex)) {
          colors.push(color);
          hexes.push(color.hex);
        }
      });
      if (colors.length < this.lumsCount) {
        Object.values(val.dominant_colors).forEach(function (color) {
          if (!hexes.includes(color.hex)) {
            colors.push(color);
          }
        });
      }
      colors.sort(function (a, b) {
        if (a.hex < b.hex) return 1;
        if (a.hex > b.hex) return -1;
        return 0;
      });
      if (!this.hasUpdatedLumsCount) {
        this.lums = {};
        var i = 0;
        while (i < colors.length) {
          var color = colors[i];
          var r = Math.round(color.red * 255);
          var g = Math.round(color.green * 255);
          var b = Math.round(color.blue * 255);
          var lum = _utils_color__WEBPACK_IMPORTED_MODULE_3__["lumFromRGB"](r, g, b);
          this.lums[i] = {
            lum: lum,
            rgb: [r, g, b],
            label: this.getValueLabel(i, colors.length)
          };
          i++;
        }
      }
    },
    /**
     * Create a palette from colors pulled from an image
     * @param  {Object} val   JSON response from imgix
     */
    paletteJson: function paletteJson(val) {
      var _this13 = this;
      var hexes = [];
      var colors = [];
      val.colors.forEach(function (color) {
        if (hexes.indexOf(color.hex) === -1) {
          colors.push(color);
          hexes.push(color.hex);
        }
      });
      Object.values(val.dominant_colors).forEach(function (color) {
        if (hexes.indexOf(color.hex) === -1) {
          colors.push(color);
          hexes.push(color.hex);
        }
      });
      colors.sort(function (a, b) {
        if (a.hex < b.hex) return 1;
        if (a.hex > b.hex) return -1;
        return 0;
      });
      colors.forEach(function (color, i) {
        if (color.hex) _this13.palettes.push({
          name: '',
          swatches: Object(_utils_object__WEBPACK_IMPORTED_MODULE_4__["clone"])(_this13.lums),
          hex: color.hex,
          filters: {
            hue: 0,
            sat: 0
          }
        });
      });

      // Force render on the palette array
      // let last = this.palettes.pop();
      this.$nextTick(function () {
        // this.palettes.unshift(last);
        _this13.$nextTick(function () {
          setTimeout(function () {
            _this13.dedupePalettes();
          }, 1000);
        });
      });
    },
    autoDistribute: function autoDistribute(val) {
      if (val) {
        this.adjustLums(this.lums[0], this.lums[this.lumsCount - 1].lum, this.lums[0].lum, 0);
      }
    },
    lums: {
      deep: true,
      handler: function handler(val) {
        var _this14 = this;
        clearTimeout(this.updateSwatchTimeout);
        this.updateSwatchTimeout = setTimeout(function () {
          _this14.updateSwatchLums(val);
        }, 250);
        this.updateUrl();
      }
    },
    lumsCount: function lumsCount(val) {
      var _this15 = this;
      this.$nextTick(function () {
        _this15.updateSwatchLums();
      });
    }
  },
  created: function created() {
    var _this16 = this;
    this.setLums(this.presets["default"].getValues());
    if (Object.keys(this.$route.query).length) {
      var _this$$route$query = this.$route.query,
        _this$$route$query$lu = _this$$route$query.lums,
        lums = _this$$route$query$lu === void 0 ? [] : _this$$route$query$lu,
        _this$$route$query$pa = _this$$route$query.palettes,
        palettes = _this$$route$query$pa === void 0 ? [] : _this$$route$query$pa,
        _this$$route$query$fi = _this$$route$query.filters,
        filters = _this$$route$query$fi === void 0 ? [] : _this$$route$query$fi,
        _this$$route$query$na = _this$$route$query.names,
        names = _this$$route$query$na === void 0 ? [] : _this$$route$query$na,
        _this$$route$query$la = _this$$route$query.labels,
        labels = _this$$route$query$la === void 0 ? [] : _this$$route$query$la;
      lums = lums.split(',').filter(function (val) {
        return !!val;
      }).map(parseFloat);
      this.setLums(lums);
      var paletteBases = palettes.split(',').filter(function (val) {
        return !!val;
      });
      var namesArr = names.split(',').filter(function (val) {
        return !!val;
      });
      var labelsArr = labels.split(',').filter(function (val) {
        return !!val;
      });
      var filtersArr = filters.split(',').filter(function (val) {
        return !!val;
      });
      paletteBases.forEach(function (hex, i) {
        var _filtersArr$i$split = filtersArr[i].split('|'),
          _filtersArr$i$split2 = _slicedToArray(_filtersArr$i$split, 2),
          _filtersArr$i$split2$ = _filtersArr$i$split2[0],
          hue = _filtersArr$i$split2$ === void 0 ? 0 : _filtersArr$i$split2$,
          _filtersArr$i$split2$2 = _filtersArr$i$split2[1],
          sat = _filtersArr$i$split2$2 === void 0 ? 0 : _filtersArr$i$split2$2;
        _this16.addPalette();
        _this16.$nextTick(function () {
          _this16.palettes[i].name = namesArr[i];
          _this16.palettes[i].hex = hex;
          _this16.palettes[i].filters = {
            hue: hue,
            sat: sat
          };
          _this16.palettes[i].label = labelsArr[i];
        });
      });
    }
  },
  mounted: function mounted() {
    document.addEventListener('copy', this.onCopy.bind(this));
    if (this.uploadFileUrl) this.setFromUploadFile();
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('copy', this.onCopy.bind(this), null);
  },
  methods: {
    onPaste: function onPaste(evt) {
      var _evt$clipboardData;
      var target = evt.target;
      var txt = evt === null || evt === void 0 || (_evt$clipboardData = evt.clipboardData) === null || _evt$clipboardData === void 0 ? void 0 : _evt$clipboardData.getData('text/plain');
      if (!txt) {
        return true;
      }
      evt.preventDefault();
      var hexValue = '';
      var input = txt.trim();

      // Check if it's already a hex value (with or without #)
      var hexMatch = input.match(/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/);
      if (hexMatch) {
        hexValue = "#".concat(hexMatch[1]);
        // Expand 3-char hex to 6-char
        if (hexValue.length === 4) {
          hexValue = '#' + _toConsumableArray(hexValue.slice(1)).map(function (c) {
            return c + c;
          }).join('');
        }
      }
      // Check for RGB/HSL values in various formats
      else {
        // Check for HSL values (looking for % on 2nd or 3rd value, or 'hsl' keyword)
        // HSL format: hue (0-360), saturation (0-100%), lightness (0-100%)
        var hslMatch = input.match(/(\d+)\s*[,\s]\s*(\d+)(%?)\s*[,\s]\s*(\d+)(%?)/);
        if (hslMatch && (hslMatch[3] === '%' || hslMatch[5] === '%' || input.toLowerCase().includes('hsl'))) {
          var h = parseInt(hslMatch[1]);
          var s = parseInt(hslMatch[2]);
          var l = parseInt(hslMatch[4]);
          var rgb = _utils_color__WEBPACK_IMPORTED_MODULE_3__["HSLtoRGB"](h, s, l);
          hexValue = _utils_color__WEBPACK_IMPORTED_MODULE_3__["RGBToHex"](Math.round(rgb.r), Math.round(rgb.g), Math.round(rgb.b));
        }
        // Otherwise treat as RGB values (including RGBA with alpha that might have %)
        else if (hslMatch) {
          // It matched the pattern but no % signs, so treat as RGB
          var r = Math.min(255, Math.max(0, parseInt(hslMatch[1])));
          var g = Math.min(255, Math.max(0, parseInt(hslMatch[2])));
          var b = Math.min(255, Math.max(0, parseInt(hslMatch[4])));
          hexValue = _utils_color__WEBPACK_IMPORTED_MODULE_3__["RGBToHex"](r, g, b);
        }
        // If nothing matched, try to use it as hex anyway
        else {
          // Remove any non-hex characters and take first 6 valid hex chars
          var cleaned = input.replace(/[^0-9A-Fa-f]/g, '').slice(0, 6);
          if (cleaned.length >= 3) {
            hexValue = "#".concat(cleaned);
          } else {
            // Default to black if we can't parse it
            hexValue = '#000000';
          }
        }
      }
      target.value = hexValue;
      // Trigger input event to update v-model
      target.dispatchEvent(new Event('input', {
        bubbles: true
      }));
      return false;
    },
    getValueLabel: function getValueLabel(i, count) {
      if (this.cssTab == 'radix') return parseInt(i, 10) + 1;
      if (count == 11 && i == 10) return '950';
      if (count >= 10) {
        return i == 0 ? '50' : parseInt(i, 10) + '00';
      }
      return parseInt(i, 10) + 1 + '00';
    },
    removeAll: function removeAll() {
      if (confirm('Are you sure?')) this.palettes = [];
    },
    addSuggestedColor: function addSuggestedColor(hex) {
      var _this17 = this;
      this.addPalette();
      this.$nextTick(function () {
        _this17.palettes[0].hex = hex;
      });
    },
    updateUrl: function updateUrl() {
      var _this18 = this;
      clearTimeout(this.updateUrlTimeout);
      this.updateUrlTimeout = setTimeout(function () {
        _this18.$nextTick(function () {
          var query = {
            lums: _this18.lumsValues.map(function (v) {
              return v.toFixed(2);
            }).join(','),
            palettes: _this18.paletteBases.join(','),
            filters: _this18.paletteFilters.map(function (f) {
              return "".concat(f.hue, "|").concat(f.sat);
            }).join(','),
            names: _this18.paletteNames.join(','),
            labels: _this18.paletteLabels.join(',')
          };
          if (JSON.stringify(query) !== JSON.stringify(_this18.$route.query)) {
            _this18.$router.push({
              query: query
            });
          }
        });
      }, 200);
    },
    formatSwatchColor: function formatSwatchColor(swatch) {
      var _swatch$rgb2;
      if (this.cssType === 'hex') return swatch === null || swatch === void 0 ? void 0 : swatch.hex;
      if (this.cssType === 'rgb') return "rgb(".concat((_swatch$rgb2 = swatch.rgb) === null || _swatch$rgb2 === void 0 ? void 0 : _swatch$rgb2.join(', '), ")");
      if (this.cssType === 'hsl') return "hsl(".concat(swatch.hsl[0], ", ").concat(swatch.hsl[1] === 0 ? 0 : swatch.hsl[1].toFixed(2), "%, ").concat(swatch.hsl[2].toFixed(2), "%)");
      if (this.cssType === 'oklch') return "oklch(".concat(swatch.oklch[0].toFixed(4), " ").concat(swatch.oklch[1].toFixed(4), " ").concat(swatch.oklch[2] === 0 ? 0 : swatch.oklch[2].toFixed(2), ")");
    },
    storeSwatches: function storeSwatches(swatches, hex) {
      this.$set(this.storedSwatches, hex, swatches);
      this.updateUrl();
    },
    dedupePalettes: function dedupePalettes() {
      var _this19 = this;
      this.palettes.reverse();
      this.$nextTick(setTimeout(function () {
        _this19.palettes.reverse();
      }));
      return;
      var dupes = this.getDupes();
      for (var i = dupes.length - 1; i >= 0; i--) {
        this.palettes.splice(dupes[i], 1);
      }
    },
    getDupes: function getDupes() {
      var _this20 = this;
      var rgbs = {};
      var dupes = [];
      this.palettes.forEach(function (palette, p1) {
        var isDupe = false;
        rgbs[p1] = [];
        var closestToMid = _utils_color__WEBPACK_IMPORTED_MODULE_3__["closestLum"](_this20.lumsValues, 50);
        var midIndex = Object.keys(closestToMid)[0];
        var swatch = palette.swatches[midIndex];
        var _swatch$rgb3 = _slicedToArray(swatch.rgb, 3),
          r = _swatch$rgb3[0],
          g = _swatch$rgb3[1],
          b = _swatch$rgb3[2];
        for (var p2 = Object.keys(rgbs).length - 1; p2 >= 0; p2--) {
          for (var j = rgbs[p2].length - 1; j >= 0; j--) {
            var matches = 0;
            var _rgbs$p2$j = _slicedToArray(rgbs[p2][j], 3),
              R = _rgbs$p2$j[0],
              G = _rgbs$p2$j[1],
              B = _rgbs$p2$j[2];
            if (r <= R && r >= R) matches++;
            if (g <= G && g >= G) matches++;
            if (b <= B && b >= B) matches++;
            if (matches >= 2) {
              var hex1 = _this20.palettes[p1].hex;
              var hex2 = _this20.palettes[p2].hex;
              var lum1 = _utils_color__WEBPACK_IMPORTED_MODULE_3__["lumFromRGB"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_3__, _toConsumableArray(Object.values(_utils_color__WEBPACK_IMPORTED_MODULE_3__["hexToRGB"](hex1))));
              var lum2 = _utils_color__WEBPACK_IMPORTED_MODULE_3__["lumFromRGB"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_3__, _toConsumableArray(Object.values(_utils_color__WEBPACK_IMPORTED_MODULE_3__["hexToRGB"](hex2))));
              var diff1 = Math.abs(50 - lum1);
              var diff2 = Math.abs(50 - lum2);
              if (diff2 < diff1 && dupes.indexOf(p1) === -1) {
                dupes.push(p1);
              } else {
                dupes.push(p2);
              }
              isDupe = true;
              break;
            }
          }
          if (isDupe) break;
        }
        if (!isDupe) rgbs[p1].push(swatch.rgb);
      });
      return _toConsumableArray(new Set(dupes)).sort();
    },
    copy: function copy(copyText) {
      this.copyText = copyText;
      this.$nextTick(function () {
        document.execCommand('copy');
      });
    },
    onCopy: function onCopy(e) {
      var _this21 = this;
      if (this.copyText) {
        e.preventDefault();
        e.clipboardData.setData('text/plain', this.copyText);
        setTimeout(function () {
          _this21.copyText = false;
        }, 2000);
      }
    },
    removePalette: function removePalette(index) {
      this.palettes.splice(index, 1);
    },
    togglePaletteMenu: function togglePaletteMenu(index) {
      this.shownPaletteMenu = this.shownPaletteMenu == index ? null : index;
    },
    toggleFilters: function toggleFilters(index) {
      var filterIndex = this.showFilters.indexOf(index);
      if (filterIndex !== -1) {
        this.showFilters.splice(filterIndex, 1);
      } else {
        this.showFilters = _toConsumableArray(new Set([].concat(_toConsumableArray(this.showFilters), [index])));
      }
    },
    toggleLocked: function toggleLocked(hex) {
      var _this22 = this;
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (this.isLockedHex(hex) || force !== true && force === false) {
        var lumsByPalette = Object.keys(this.lockedByHex).reduce(function (obj, hx) {
          var lockedPalette = _this22.lockedByHex[hx];
          if (hex !== hx) {
            obj[hx] = lockedPalette;
          } else {
            var label = _this22.lums[lockedPalette.lumIndex].label;
            _this22.lums[lockedPalette.lumIndex] = {
              lum: lockedPalette.lastLum,
              rgb: _this22.lumToGrayscaleRGB(lockedPalette.lastLum),
              label: label
            };
          }
          return obj;
        }, {});
        this.lockedByHex = lumsByPalette;
      } else {
        var lockedByHex = Object(_utils_object__WEBPACK_IMPORTED_MODULE_4__["clone"])(this.lockedByHex);
        var rgb = Object.values(_utils_color__WEBPACK_IMPORTED_MODULE_3__["hexToRGB"](hex));
        var lum = _utils_color__WEBPACK_IMPORTED_MODULE_3__["lumFromRGB"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_3__, rgb);
        var closest = _utils_color__WEBPACK_IMPORTED_MODULE_3__["closestLum"](this.lumsValues, lum);
        var _ref3 = Object.keys(closest) || [],
          _ref4 = _slicedToArray(_ref3, 1),
          lumIndex = _ref4[0];
        if (this.isLockedLum(lumIndex)) {
          alert('This color value is already LOCKED!');
          return;
        }
        var _ref5 = Object.values(closest) || [],
          _ref6 = _slicedToArray(_ref5, 1),
          lastLum = _ref6[0];
        lumIndex = parseInt(lumIndex, 10);
        var label = this.lums[lumIndex].label;
        this.lums[lumIndex] = {
          lum: lum,
          rgb: this.lumToGrayscaleRGB(lum),
          label: label
        };
        lockedByHex[hex] = {
          lumIndex: lumIndex,
          lastLum: lastLum
        };
        this.lockedByHex = lockedByHex;
      }
    },
    isLockedHex: function isLockedHex(hex) {
      return Object.keys(this.lockedByHex).indexOf(hex) !== -1;
    },
    isLockedLum: function isLockedLum(lumIndex) {
      return Object.values(this.lockedByHex).map(function (val) {
        return val.lumIndex;
      }).indexOf(parseInt(lumIndex, 10)) !== -1;
    },
    getPickerHex: function getPickerHex(hex) {
      if (hex.length === 4) {
        return '#' + _toConsumableArray(hex.replace('#', '')).reduce(function (str, cur) {
          return str + cur + cur;
        }, '');
      }
      return hex;
    },
    updateSwatchLums: function updateSwatchLums(lums) {
      var _this23 = this;
      lums = lums || this.lums;
      var lumsCount = Object.keys(lums).length;
      // Update palette swatch lums
      this.palettes = this.palettes.map(function (palette) {
        var swatchKeys = Object.keys(palette.swatches);
        swatchKeys.forEach(function (i) {
          if (i < lumsCount) {
            palette.swatches[i].lum = lums[i].lum;
            palette.swatches[i].label = lums[i].label;
          } else {
            delete palette.swatches[i];
          }
        });
        var i = swatchKeys.length - 1;
        while (i < lumsCount) {
          palette.swatches[i] = {
            lum: lums[i].lum,
            label: lums[i].label
          };
          i++;
        }
        return palette;
      });
      clearTimeout(this.paletteCacheBustTimeout);
      this.paletteCacheBustTimeout = setTimeout(function () {
        _this23.palettes.reverse();
        _this23.$nextTick(function () {
          _this23.palettes.reverse();
        });
      }, 100);
    },
    setLums: function setLums(values) {
      var _this24 = this;
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var pos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.lums = values.reduce(function (obj, val, i) {
        obj[i] = {
          lum: val,
          rgb: _this24.lumToGrayscaleRGB(val),
          label: _this24.getValueLabel(i, values.length)
        };
        return obj;
      }, {});
      this.$nextTick(function () {
        _this24.adjustLums(index === 0 ? pos : _this24.lums[0].lum, index === _this24.lumsCount - 1 ? pos : _this24.lums[_this24.lumsCount - 1].lum, 100 - pos, index);
      });
    },
    lumToGrayscaleRGB: function lumToGrayscaleRGB(lum) {
      var newL = _utils_color__WEBPACK_IMPORTED_MODULE_3__["lightnessFromHSLum"](0, 0, lum);
      return Object.values(_utils_color__WEBPACK_IMPORTED_MODULE_3__["HSLtoRGB"](0, 0, newL)).map(Math.round);
    },
    adjustLums: function adjustLums(startPos, endPos, curPos, curIndex) {
      var _this25 = this;
      if (!this.autoDistribute) return;
      var lumIndices = Object.keys(this.lums);
      lumIndices.pop();
      lumIndices.shift();
      lumIndices.forEach(function (ndx) {
        ndx = parseInt(ndx, 10);
        if (ndx < curIndex) {
          var dist = (curPos - startPos) / curIndex;
          _this25.lums[ndx].lum = ndx * dist + _this25.lums[0].lum;
          _this25.lums[ndx].rgb = _this25.lumToGrayscaleRGB(_this25.lums[ndx].lum);
        } else if (curIndex < ndx) {
          var _dist = (endPos - curPos) / (_this25.lumsCount - curIndex - 1);
          _this25.lums[ndx].lum = (ndx - curIndex) * _dist + curPos;
          _this25.lums[ndx].rgb = _this25.lumToGrayscaleRGB(_this25.lums[ndx].lum);
        }
      });
    },
    addPalette: function addPalette(ev) {
      var hex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#000000';
      this.palettes.unshift({
        name: '',
        swatches: Object(_utils_object__WEBPACK_IMPORTED_MODULE_4__["clone"])(this.lums),
        hex: hex,
        filters: {
          hue: 0,
          sat: 0
        }
      });
      this.isChoosingBase = 0;

      // this.$nextTick(() => {
      //   setTimeout(() => {
      //     let [input] = this.$refs.palettePicker0 || [];
      //     if (input) input.click();
      //   }, 10);
      // });
    },
    onFileUpload: function onFileUpload() {
      var _this26 = this;
      return new Promise( /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
          var filePicker;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this26.isUploading = true;
                filePicker = _this26.$refs.upload;
                if (!(!filePicker || !filePicker.files || filePicker.files.length <= 0)) {
                  _context.next = 5;
                  break;
                }
                reject('No file selected.');
                return _context.abrupt("return");
              case 5:
                _this26.uploadFile = filePicker.files[0];
                if (!(_this26.uploadFile.size > 10485760 / 2)) {
                  _context.next = 9;
                  break;
                }
                reject('Image is too big (max. 5 Mb)');
                return _context.abrupt("return");
              case 9:
                _context.next = 11;
                return _this26.toBase64(_this26.uploadFile);
              case 11:
                _this26.base64File = _context.sent;
                return _context.abrupt("return", resolve(_this26.uploadFile));
              case 13:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref7.apply(this, arguments);
        };
      }()).then(function (file) {
        var formData = Object(_utils_forms__WEBPACK_IMPORTED_MODULE_1__["jsonToFormData"])({
          file: file
        });
        axios.post('/palette-uploads', formData).then(function (_ref8) {
          var data = _ref8.data;
          if (data.url) {
            _this26.uploadFileUrl = data.url;
            _this26.uploadFilePath = data.path;
            _this26.setFromUploadFile();
          } else {
            alert('Sorry! Please try again.');
          }
        });
      })["catch"](alert)["finally"](function () {
        var _this26$$refs;
        _this26.isUploading = false;
        if ((_this26$$refs = _this26.$refs) !== null && _this26$$refs !== void 0 && _this26$$refs.upload) {
          _this26.$refs.upload.value = null;
        }
      });
    },
    toBase64: function toBase64(uploadFile) {
      return new Promise(function (resolve, reject) {
        var fileReader = new FileReader();
        if (fileReader && uploadFile) {
          fileReader.readAsDataURL(uploadFile);
          fileReader.onload = function () {
            resolve(fileReader.result);
          };
          fileReader.onerror = function (error) {
            reject(error);
          };
        } else {
          reject('No file provided');
        }
      });
    },
    setLumsCount: function setLumsCount(newCount) {
      var _this27 = this;
      if (newCount < 3 || newCount > 20) return;
      var lums = Object(_utils_object__WEBPACK_IMPORTED_MODULE_4__["clone"])(this.lums);
      var i = 0;
      while (i < Math.max(this.lumsCount, newCount)) {
        if (i < newCount) {
          if (!lums.hasOwnProperty(i)) {
            var lum = lums[i - 1].lum / 2;
            lums[i] = {
              lum: lum,
              rgb: this.lumToGrayscaleRGB(lum)
            };
          }
        } else {
          delete lums[i];
        }
        i++;
      }
      var swatchCount = Object.keys(lums).length;
      Object.keys(lums).forEach(function (i) {
        var lum = lums[i];
        lum.label = _this27.getValueLabel(i, swatchCount);
      });
      this.lums = lums;
      if (this.uploadFileUrl) {
        clearTimeout(this.setFromUploadTimeout);
        this.setFromUploadTimeout = setTimeout(function () {
          _this27.setFromUploadFile(false);
        }, 2500);
      }
    },
    setFromUploadFile: function setFromUploadFile() {
      var _this28 = this;
      var addPalette = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var grayscaleUrl = "".concat(this.uploadFileUrl, "?sat=-100&colorquant=").concat(this.lumsCount, "&palette=json&colors=").concat(this.lumsCount);
      axios.get(grayscaleUrl).then(function (_ref9) {
        var data = _ref9.data;
        _this28.grayscaleJson = data;
      }).then(function () {
        if (addPalette) {
          var paletteUrl = "".concat(_this28.uploadFileUrl, "?palette=json&colors=3");
          axios.get(paletteUrl).then(function (_ref10) {
            var data = _ref10.data;
            _this28.paletteJson = data;
          });
        }
      });
    },
    getUploadFileUrl: function getUploadFileUrl(params) {
      // return `/uploads/${this.uploadFilePath}${params}`;
      return this.uploadFileUrl + params;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GrayscaleRow.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GrayscaleRow.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color */ "./resources/js/utils/color.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./resources/js/utils/object.js");


var BLANK_IMG = new Image();
BLANK_IMG.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'GrayscaleRow',
  props: {
    lums: Object,
    lumsValues: Array,
    setLums: Function,
    isLockedLum: Function
  },
  data: function data() {
    return {
      isDragging: null,
      dragTimeout: 0,
      swatchPositions: {}
    };
  },
  watch: {
    lumsValues: function lumsValues(val) {
      this.setSwatchPositionsFromLumsValues(val);
    }
  },
  created: function created() {
    this.setSwatchPositionsFromLumsValues();
  },
  methods: {
    setSwatchPositionsFromLumsValues: function setSwatchPositionsFromLumsValues() {
      var lumsValues = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      lumsValues = lumsValues ? lumsValues : this.lumsValues;
      this.swatchPositions = lumsValues.reduce(function (swatches, pos, index) {
        swatches[index] = pos;
        return swatches;
      }, {});
    },
    getSwatchPosition: function getSwatchPosition(index) {
      var pos = this.swatchPositions[index];
      return "".concat(100 - pos, "%");
    },
    onDragStart: function onDragStart($event, index) {
      this.isDragging = index;
      $event.dataTransfer.setDragImage(BLANK_IMG, 0, 0);
    },
    getPos: function getPos($event, index) {
      var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'pageX';
      index = parseInt(index, 10);
      var el = $event.target;
      var parent = el.parentElement;
      if (!parent) return;
      var parentWidth = parent.clientWidth;
      var grandparent = parent.parentElement;
      if (!grandparent) return;
      var elX = $event[prop] - parent.offsetLeft - grandparent.offsetLeft;
      if (elX <= 0 || elX >= parentWidth) {
        $event.preventDefault();
        return elX <= 0 ? 0 : 100;
      }
      var pos = parseFloat(elX / parentWidth * 100);
      return pos > 100 ? 100 : pos < 0 ? 0 : pos;
    },
    onDragEnd: function onDragEnd($event, index) {
      this.isDragging = null;
      if (!$event.screenX) return;

      // FIX for firefox
      var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      if (!isFirefox) return;
      var pos = this.getPos($event, index, 'screenX');
      if ($event.screenX) this.prepareAdjustLums(index, pos);
    },
    onDrag: function onDrag($event, index) {
      if (!$event.screenX) return;
      var pos = this.getPos($event, index);
      this.prepareAdjustLums(index, pos);
    },
    prepareAdjustLums: function prepareAdjustLums(index, pos) {
      var _this = this;
      var lums = Object(_utils_object__WEBPACK_IMPORTED_MODULE_1__["clone"])(this.lums);
      lums[index].lum = 100 - pos;
      lums[index].rgb = this.lumToGrayscaleRGB(100 - pos);
      this.swatchPositions[index] = 100 - pos;
      var lumsValues = Object.keys(this.swatchPositions).reduce(function (arr, i) {
        arr.push(_this.swatchPositions[i]);
        return arr;
      }, []);
      clearTimeout(this.setLumsTimeout);
      this.setLumsTimeout = setTimeout(function () {
        _this.setLums(lumsValues, parseInt(index, 10), pos);
      }, 50);
    },
    lumToGrayscaleRGB: function lumToGrayscaleRGB(lum) {
      var newL = _utils_color__WEBPACK_IMPORTED_MODULE_0__["lightnessFromHSLum"](0, 0, lum);
      return Object.values(_utils_color__WEBPACK_IMPORTED_MODULE_0__["HSLtoRGB"](0, 0, newL)).map(Math.round);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PaletteRow.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PaletteRow.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color */ "./resources/js/utils/color.js");
/* harmony import */ var _SwatchSquare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwatchSquare */ "./resources/js/components/SwatchSquare.vue");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PaletteRow',
  props: {
    palette: Object,
    hideLum: Boolean,
    isLocked: {
      type: Boolean,
      "default": false
    },
    textOverlay: {
      type: Boolean,
      "default": false
    },
    name: {
      type: String,
      "default": ''
    },
    storeSwatches: {
      type: Function,
      "default": function _default() {
        return function () {};
      }
    }
  },
  data: function data() {
    return {
      paletteClone: {},
      generateTimeout: 0,
      copyText: ''
    };
  },
  components: {
    SwatchSquare: _SwatchSquare__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  watch: {
    palette: {
      deep: true,
      handler: function handler(val) {
        this.paletteClone = Object.assign({}, this.paletteClone, val);
      }
    },
    'palette.filters.hue': {
      handler: function handler(val) {
        this.paletteClone.filters.hue = val;
        this.$nextTick(this.generateSwatches);
      }
    },
    'palette.filters.sat': {
      handler: function handler(val) {
        this.paletteClone.filters.sat = val;
        this.$nextTick(this.generateSwatches);
      }
    },
    'palette.picker': {
      handler: function handler() {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#000000';
        this.palette.hex = val.length === 4 ? '#' + _toConsumableArray(val.replace('#', '')).reduce(function (str, cur) {
          return str + cur + cur;
        }, '') : val;
        this.updateBase(this.palette.hex);
      }
    },
    'palette.hex': {
      handler: function handler() {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#000000';
        this.palette.picker = val.length === 4 ? '#' + _toConsumableArray(val.replace('#', '')).reduce(function (str, cur) {
          return str + cur + cur;
        }, '') : val;
        this.updateBase(this.palette.picker);
      }
    },
    lums: {
      deep: true,
      handler: function handler(val) {
        var _this = this;
        this.$nextTick(function () {
          _this.generateSwatches();
          _this.paletteClone.closest = _utils_color__WEBPACK_IMPORTED_MODULE_0__["closestLum"](val, _this.paletteClone.lum);
        });
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
  mounted: function mounted() {
    document.addEventListener('copy', this.onCopy.bind(this));
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('copy', this.onCopy.bind(this), null);
  },
  methods: {
    copy: function copy(copyText) {
      this.copyText = copyText;
      this.$nextTick(function () {
        document.execCommand('copy');
      });
    },
    onCopy: function onCopy(e) {
      var _this2 = this;
      if (this.copyText) {
        e.preventDefault();
        e.clipboardData.setData('text/plain', this.copyText);
        setTimeout(function () {
          _this2.copyText = '';
        }, 500);
      }
    },
    updateBase: function updateBase(hex) {
      this.paletteClone = Object.assign({}, this.paletteClone, this.palette, {
        hex: hex,
        picker: hex
      });
      this.paletteClone.rgb = _utils_color__WEBPACK_IMPORTED_MODULE_0__["hexToRGB"](hex);
      var rgb = Object.values(this.paletteClone.rgb);
      this.paletteClone.hsl = _utils_color__WEBPACK_IMPORTED_MODULE_0__["RGBToHSL"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_0__, rgb);
      this.paletteClone.lum = _utils_color__WEBPACK_IMPORTED_MODULE_0__["lumFromRGB"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_0__, rgb);
      this.paletteClone.closest = _utils_color__WEBPACK_IMPORTED_MODULE_0__["closestLum"](this.lums, this.paletteClone.lum);
      this.$nextTick(this.generateSwatches);
    },
    generateSwatches: function generateSwatches() {
      var _this3 = this;
      if (!this.paletteClone.hsl) return;
      var run = function run() {
        var baseHSL = _this3.paletteClone.hsl;
        var _ref = Object.keys(_this3.paletteClone.closest) || [],
          _ref2 = _slicedToArray(_ref, 1),
          closestIndex = _ref2[0];
        Object.keys(_this3.paletteClone.swatches).forEach( /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(i) {
            var swatch, diffIndex, newH, newS, newL, newRGB, rgb;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  swatch = _this3.paletteClone.swatches[i];
                  diffIndex = Math.abs(closestIndex - i);
                  newH = baseHSL.h + parseFloat(_this3.paletteClone.filters.hue) * diffIndex;
                  if (newH < 0) newH = 360 - newH;
                  if (newH > 360) newH = newH - 360;
                  newS = baseHSL.s + parseFloat(_this3.paletteClone.filters.sat) * diffIndex;
                  if (newS < 0) newS = Math.max(newS, 0);
                  if (newS > 100) newS = Math.min(newS, 100);
                  _context.next = 10;
                  return _utils_color__WEBPACK_IMPORTED_MODULE_0__["lightnessFromHSLum"](newH, newS, swatch.lum);
                case 10:
                  newL = _context.sent;
                  newRGB = _utils_color__WEBPACK_IMPORTED_MODULE_0__["HSLtoRGB"](newH, newS, newL);
                  rgb = Object.values(newRGB).map(Math.round);
                  _this3.paletteClone.swatches[i].hsl = [newH, newS, newL];
                  _this3.paletteClone.swatches[i].hex = _utils_color__WEBPACK_IMPORTED_MODULE_0__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_0__, _toConsumableArray(rgb));
                  _this3.paletteClone.swatches[i].rgb = rgb;
                  _this3.paletteClone.swatches[i].oklch = Object.values(_utils_color__WEBPACK_IMPORTED_MODULE_0__["RGBToOKLCH"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_0__, _toConsumableArray(rgb)));
                  _this3.paletteClone.swatches[i].lum = _utils_color__WEBPACK_IMPORTED_MODULE_0__["lumFromRGB"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_0__, _toConsumableArray(_this3.paletteClone.swatches[i].rgb));
                case 18:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }());
        _this3.storeSwatches(_this3.paletteClone.swatches);
      };
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(run);
      } else {
        clearTimeout(this.generateTimeout);
        this.generateTimeout = setTimeout(run, 50);
      }
    },
    isClosest: function isClosest(index) {
      var _ref4 = Object.keys(this.paletteClone.closest || {}) || [],
        _ref5 = _slicedToArray(_ref4, 1),
        closestIndex = _ref5[0];
      return index == closestIndex;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SwatchSquare.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SwatchSquare.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SwatchSquare',
  props: {
    index: Number,
    swatch: Object,
    isFirst: Boolean,
    isLast: Boolean,
    isClosest: Boolean,
    copy: Function,
    copied: String,
    textOverlay: Boolean
  },
  methods: {
    getBgColor: function getBgColor(swatch) {
      return "rgb(".concat(swatch.rgb.join(','), ")");
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/App.vue?vue&type=template&id=0ec91988":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/App.vue?vue&type=template&id=0ec91988 ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "App",
    on: {
      click: function click($event) {
        _vm.showPicker = null;
      }
    }
  }, [_c("section", {
    staticClass: "mt-6"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "mt-6 md:mt-0 flex items-center justify-between"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "relative"
  }, [_c("button", {
    staticClass: "text-center h-7 leading-7 px-4 rounded text-xl text-blue-600 hover:opacity-75 focus:text-blue-900",
    on: {
      click: function click($event) {
        _vm.showLumsMenu = !_vm.showLumsMenu;
      }
    }
  }, [_c("i", {
    staticClass: "far fa-lg fa-ellipsis-h"
  })]), _vm._v(" "), _vm.showLumsMenu ? _c("div", {
    staticClass: "absolute right-0 top-100 mr-4 mt-2 text-left shadow-lg bg-gray-500 py-4 min-w-9 rounded-b-lg rounded-tl-lg z-40"
  }, [_c("div", {
    staticClass: "text-sm block py-half-4 px-5 mr-5 whitespace-no-wrap text-gray-900 uppercase tracking-wide font-bold"
  }, [_vm._v("\n            Distribute\n          ")]), _vm._v(" "), _c("button", {
    "class": ["block w-full text-left py-half-4 px-5 whitespace-no-wrap", {
      "bg-gray-400 bg-opacity-75": _vm.autoDistribute
    }, _vm.hasLockedLums ? "text-gray-600 cursor-not-allowed" : "text-gray-800 hover:bg-gray-400 hover:bg-opacity-75"],
    attrs: {
      title: _vm.hasLockedLums ? "You have LOCKED colors" : "",
      disabled: _vm.hasLockedLums
    },
    on: {
      click: function click($event) {
        _vm.autoDistribute = true;
        _vm.showLumsMenu = false;
      }
    }
  }, [_c("i", {
    staticClass: "far fa-fw fa-hand-sparkles mr-4"
  }), _vm._v("Auto\n          ")]), _vm._v(" "), _c("button", {
    "class": ["block w-full text-left py-half-4 px-5 whitespace-no-wrap text-gray-800 hover:bg-gray-400 hover:bg-opacity-75", {
      "bg-gray-400 bg-opacity-75": !_vm.autoDistribute
    }],
    on: {
      click: function click($event) {
        _vm.autoDistribute = false;
        _vm.showLumsMenu = false;
      }
    }
  }, [_c("i", {
    staticClass: "far fa-fw fa-hand-paper mr-4"
  }), _vm._v("Manual\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "mt-5 text-sm block py-half-4 px-5 mr-5 whitespace-no-wrap text-gray-900 uppercase tracking-wide font-bold"
  }, [_vm._v("\n            Presets\n          ")]), _vm._v(" "), _vm._l(_vm.presets, function (preset, key) {
    return _c("a", {
      key: key,
      "class": ["block py-half-4 px-5 whitespace-no-wrap", {
        "bg-gray-400 bg-opacity-75": JSON.stringify(preset.getValues(_vm.lumsValues, _vm.lumsCount)) == JSON.stringify(_vm.lumsValues)
      }, _vm.hasLockedLums ? "text-gray-600 cursor-not-allowed" : "text-gray-800 hover:bg-gray-400 hover:bg-opacity-75"],
      attrs: {
        title: _vm.hasLockedLums ? "You have LOCKED colors" : "",
        href: "#".concat(key)
      },
      on: {
        mouseenter: function mouseenter($event) {
          _vm.autoDistribute = false;
        },
        click: function click($event) {
          $event.preventDefault();
          _vm.autoDistribute = false;
          _vm.showLumsMenu = false;
          _vm.setLums(preset.getValues(_vm.lumsValues, _vm.lumsCount));
        }
      }
    }, [_c("i", {
      "class": ["fa-fw mr-4", preset.icon]
    }), _vm._v(_vm._s(preset.label))]);
  }), _vm._v(" "), _c("div", {
    staticClass: "mt-5 text-sm block py-half-4 px-5 mr-5 whitespace-no-wrap text-gray-900 uppercase tracking-wide font-bold"
  }, [_vm._v("\n            Contrast\n          ")]), _vm._v(" "), _c("button", {
    "class": ["block w-full text-left py-half-4 px-5 whitespace-no-wrap text-gray-800 hover:bg-gray-400 hover:bg-opacity-75", {
      "bg-gray-400 bg-opacity-75": _vm.textOverlay
    }],
    on: {
      click: function click($event) {
        _vm.textOverlay = !_vm.textOverlay;
        _vm.showLumsMenu = false;
      }
    }
  }, [_c("i", {
    staticClass: "fa fa-fw fa-font-case mr-4"
  }), _vm._v("Text Overlay\n          ")])], 2) : _vm._e()])]), _vm._v(" "), _c("grayscale-row", {
    staticClass: "mt-4 -mx-6 sm:mx-0",
    attrs: {
      lums: _vm.lums,
      "lums-values": _vm.lumsValues,
      "set-lums": _vm.setLums,
      "is-locked-lum": _vm.isLockedLum
    }
  }), _vm._v(" "), _c("palette-row", {
    staticClass: "mt-7",
    attrs: {
      palette: {
        swatches: _vm.cssTab === "radix" ? _vm.radixLums : _vm.lums
      },
      "text-overlay": _vm.textOverlay
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "text-center justify-between md:flex md:space-x-6"
  }, [_c("div", [_c("button", {
    staticClass: "relative inline-block mt-7 border-1 border-gray-500 transition-all hover:shadow hover:border-gray-800 hover:bg-gray-800 duration-300 rounded py-4 px-5 text-gray-600 hover:text-white uppercase text-sm font-bold tracking-wide",
    on: {
      click: function click($event) {
        return _vm.setLumsCount(_vm.lumsCount - 1);
      }
    }
  }, [_c("i", {
    staticClass: "far fa-lg fa-minus"
  })]), _vm._v(" "), _c("span", {
    staticClass: "px-4 opacity-50"
  }, [_vm._v(_vm._s(_vm.lumsCount) + " values")]), _vm._v(" "), _c("button", {
    staticClass: "relative inline-block mt-7 border-1 border-gray-500 transition-all hover:shadow hover:border-gray-800 hover:bg-gray-800 duration-300 rounded py-4 px-5 text-gray-600 hover:text-white uppercase text-sm font-bold tracking-wide",
    on: {
      click: function click($event) {
        return _vm.setLumsCount(_vm.lumsCount + 1);
      }
    }
  }, [_c("i", {
    staticClass: "far fa-lg fa-plus"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "md:text-right"
  }, [_c("label", {
    "class": ["relative inline-block mt-7 border-1 border-gray-500 transition-all hover:shadow hover:border-gray-800 hover:bg-gray-800 duration-300 rounded py-4 px-5 text-gray-600 hover:text-white uppercase text-sm font-bold tracking-wide", {
      "cursor-not-allowed pointer-events-none opacity-50": _vm.isUploading
    }],
    attrs: {
      "for": "upload"
    }
  }, [_c("input", {
    ref: "upload",
    staticClass: "absolute inset-0 opacity-0 z-10 max-w-full",
    attrs: {
      disabled: _vm.isUploading,
      name: "upload",
      id: "upload",
      type: "file",
      accept: "image/x-png,image/gif,image/jpeg"
    },
    on: {
      change: _vm.onFileUpload
    }
  }), _vm._v("\n          Upload an image\n        ")]), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _vm.uploadFilePath ? _c("div", {
    staticClass: "mt-6 text-center"
  }, [_c("a", {
    staticClass: "relative inline-block shadow hover:shadow-2xl transition-shadow duration-300",
    attrs: {
      href: _vm.getUploadFileUrl("?sat=-100&colorquant=".concat(_vm.lumsCount)),
      target: "_blank",
      rel: "noopener"
    }
  }, [_c("img", {
    staticClass: "rounded-lg",
    attrs: {
      src: _vm.base64File || _vm.uploadFileUrl,
      alt: ""
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "rounded-lg absolute inset-0 z-10 opacity-100 hover:opacity-0 transition-opacity duration-200",
    attrs: {
      src: _vm.getUploadFileUrl("?sat=-100&colorquant=".concat(_vm.lumsCount)),
      alt: ""
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "mt-2 text-xs mx-auto opacity-50 max-w-2xl"
  }, [_vm._v("\n        Click image to view and print. This is your image using just " + _vm._s(_vm.lumsCount) + " shades of\n        gray (the grays used to generate your luminosity scale). Below, we added a few colors from\n        your image!\n      ")])]) : _vm._e()], 1), _vm._v(" "), _c("section", {
    staticClass: "mt-10"
  }, [_c("h1", {
    staticClass: "font-bold uppercase tracking-wide"
  }, [_vm._v("2.  Set your colors")]), _vm._v(" "), _c("div", {
    staticClass: "mt-6 inline-block space-x-4"
  }, [_c("button", {
    staticClass: "border-1 border-blue-600 transition-all hover:shadow hover:border-blue-800 hover:bg-blue-800 duration-300 rounded py-4 px-5 text-blue-600 hover:text-white uppercase text-sm font-bold tracking-wide",
    on: {
      click: _vm.addPalette
    }
  }, [_vm._v("\n        Add A Color\n      ")]), _vm._v(" "), _vm.palettes.length ? _c("a", {
    staticClass: "border-b border-red-500 text-red-600 hover:text-red-700 transition-all duration-200",
    attrs: {
      href: "#"
    },
    on: {
      click: _vm.removeAll
    }
  }, [_vm._v("Remove All")]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "space-x-4"
  }, _vm._l(_vm.suggestedColors, function (color) {
    return _c("button", {
      staticClass: "mt-4 transition-all hover:shadow border-1 duration-300 h-half-8 w-half-8 shadow-inner text-white text-opacity-50 hover:opacity-75",
      style: {
        "background-color": color,
        "border-color": color
      },
      on: {
        click: function click($event) {
          return _vm.addSuggestedColor(color);
        }
      }
    }, [_c("i", {
      staticClass: "fal fa-plus fa-sm"
    })]);
  }), 0), _vm._v(" "), _c("div", {
    staticClass: "mt-8"
  }, _vm._l(_vm.palettes, function (palette, index) {
    return _c("div", {
      key: _vm.palettes.length - index,
      staticClass: "mt-8"
    }, [_c("div", {
      staticClass: "min-h-8 md:flex justify-between items-center relative"
    }, [_c("div", {
      staticClass: "absolute right-0 top-0"
    }, [_c("button", {
      staticClass: "text-center h-7 my-half-6 rounded text-xl text-blue-600 p-4 hover:opacity-75 focus:text-blue-900",
      on: {
        click: function click($event) {
          return _vm.togglePaletteMenu(index);
        }
      }
    }, [_c("i", {
      staticClass: "far fa-lg fa-ellipsis-h"
    })]), _vm._v(" "), _vm.shownPaletteMenu == index ? _c("div", {
      staticClass: "absolute z-40 right-0 top-100 mr-4 -mt-3 text-left shadow-lg bg-gray-500 py-4 min-w-9 rounded-b-lg rounded-tl-lg z-10"
    }, [_c("a", {
      staticClass: "block py-half-4 px-5 whitespace-no-wrap text-gray-800 hover:bg-gray-400 hover:bg-opacity-75",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          _vm.toggleFilters(index);
          _vm.togglePaletteMenu(index);
        }
      }
    }, [_c("i", {
      staticClass: "far fa-fw fa-sliders-h mr-4"
    }), _vm._v("Tweak Hue/Sat\n              ")]), _vm._v(" "), _c("hr", {
      staticClass: "my-3 border-gray-600 opacity-75"
    }), _vm._v(" "), _c("a", {
      staticClass: "block py-half-4 px-5 whitespace-no-wrap text-red-800 hover:bg-gray-400 hover:bg-opacity-75",
      attrs: {
        href: "#"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          _vm.removePalette(index);
          _vm.togglePaletteMenu(index);
        }
      }
    }, [_c("i", {
      staticClass: "far fa-fw fa-times mr-4"
    }), _vm._v("Remove\n              ")])]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "h-8 leading-8 mr-8 relative"
    }, [_c("button", {
      staticClass: "absolute right-full top-0 px-4 opacity-25 hover:opacity-100 focus:outline-none focus:shadow-none",
      attrs: {
        title: "Adjusts grayscale to match this color"
      },
      on: {
        click: function click($event) {
          return _vm.toggleLocked(palette.hex);
        }
      }
    }, [_c("i", {
      "class": ["fa-fw", _vm.isLockedHex(palette.hex) ? "fa fa-lock" : "far fa-unlock"]
    })]), _vm._v(" "), _vm.showPicker === index ? _c("hex-color-picker", {
      staticClass: "absolute bottom-full left-0 z-10",
      attrs: {
        color: palette.hex
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
        },
        "color-changed": function colorChanged($event) {
          palette.hex = $event.target.color;
        }
      }
    }) : _vm._e(), _vm._v(" "), _c("button", {
      staticClass: "h-half-8 w-half-8 mr-4 inline-block align-middle shadow-inner",
      style: {
        background: palette.hex
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          _vm.showPicker = _vm.showPicker === index ? null : index;
        }
      }
    }), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: palette.hex,
        expression: "palette.hex"
      }],
      ref: "paletteHex".concat(index),
      refInFor: true,
      staticClass: "font-mono leading-6 inline-block align-middle w-9 mr-5 text-gray-600 hover:text-gray-800 py-3 px-0 text-lg border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none relative z-30",
      attrs: {
        type: "text",
        placeholder: "#000000"
      },
      domProps: {
        value: palette.hex
      },
      on: {
        focus: function focus($event) {
          return $event.target.select();
        },
        paste: _vm.onPaste,
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(palette, "hex", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: palette.name,
        expression: "palette.name"
      }],
      ref: "paletteName".concat(index),
      refInFor: true,
      staticClass: "font-mono leading-6 inline-block align-middle w-10 text-gray-600 hover:text-gray-800 py-3 px-0 text-lg border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none",
      attrs: {
        type: "text",
        placeholder: "Add label"
      },
      domProps: {
        value: palette.name
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(palette, "name", $event.target.value);
        }
      }
    })], 1), _vm._v(" "), _vm.showFilters.includes(index) ? _c("div", {
      staticClass: "flex md:mr-8 space-x-5"
    }, [_c("div", {
      staticClass: "text-center leading-5 mt-4 w-1/2 md:min-w-10 lg:min-w-11"
    }, [_c("label", {
      staticClass: "block font-mono text-xs opacity-50 uppercase"
    }, [_vm._v("Hue (" + _vm._s(palette.filters.hue > 0 ? "+".concat(palette.filters.hue) : palette.filters.hue) + "°)")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: palette.filters.hue,
        expression: "palette.filters.hue"
      }],
      staticClass: "p-half-4 w-full",
      attrs: {
        type: "range",
        min: "-50",
        step: "0.1",
        max: "50"
      },
      domProps: {
        value: palette.filters.hue
      },
      on: {
        __r: function __r($event) {
          return _vm.$set(palette.filters, "hue", $event.target.value);
        }
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "text-center leading-5 mt-4 w-1/2 md:min-w-10 lg:min-w-11"
    }, [_c("label", {
      staticClass: "block font-mono text-xs opacity-50 uppercase"
    }, [_vm._v("Saturation (" + _vm._s(palette.filters.sat) + "%)")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: palette.filters.sat,
        expression: "palette.filters.sat"
      }],
      staticClass: "p-half-4 w-full",
      attrs: {
        type: "range",
        min: "-30",
        step: "0.1",
        max: "30"
      },
      domProps: {
        value: palette.filters.sat
      },
      on: {
        __r: function __r($event) {
          return _vm.$set(palette.filters, "sat", $event.target.value);
        }
      }
    })])]) : _vm._e()]), _vm._v(" "), _c("palette-row", {
      staticClass: "mt-4",
      attrs: {
        palette: palette,
        "hide-lum": "",
        "is-locked": _vm.isLockedHex(palette.hex),
        "store-swatches": function storeSwatches(swatches) {
          return _vm.storeSwatches(swatches, palette.hex);
        }
      }
    })], 1);
  }), 0)]), _vm._v(" "), _c("section", {
    staticClass: "mt-10"
  }, [_c("h1", {
    staticClass: "font-bold uppercase tracking-wide"
  }, [_vm._v("3.  Export Your Colors")]), _vm._v(" "), _c("form", {
    attrs: {
      action: "/export-svgs",
      target: "_blank",
      method: "POST"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.exportConfig,
      expression: "exportConfig"
    }],
    staticClass: "hidden",
    attrs: {
      type: "text",
      name: "palettes"
    },
    domProps: {
      value: _vm.exportConfig
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.exportConfig = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.csrf,
      expression: "csrf"
    }],
    attrs: {
      type: "hidden",
      name: "_token"
    },
    domProps: {
      value: _vm.csrf
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.csrf = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "mt-6 border-1 border-blue-600 transition-all hover:shadow hover:border-blue-800 hover:bg-blue-800 duration-300 rounded py-4 px-5 text-blue-600 hover:text-white uppercase text-sm font-bold tracking-wide",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n        Export Svgs\n      ")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-8 md:flex justify-between md:space-x-7"
  }, [_c("div", {
    staticClass: "space-x-5"
  }, [_c("button", {
    "class": [_vm.cssTab === "tailwind" ? "font-bold" : "border-b border-gray-500 text-blue-700 hover:opacity-50", "mb-6 transition-all duration-200"],
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.cssTab = "tailwind";
      }
    }
  }, [_vm._v("\n          Tailwind CSS\n        ")]), _vm._v(" "), _c("button", {
    "class": [_vm.cssTab === "radix" ? "font-bold" : "border-b border-gray-500 text-blue-700 hover:opacity-50", "mb-6 transition-all duration-200"],
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.cssTab = "radix";
      }
    }
  }, [_vm._v("\n          Radix UI\n        ")]), _vm._v(" "), _c("button", {
    "class": [_vm.cssTab === "vars" ? "font-bold" : "border-b border-gray-500 text-blue-700 hover:opacity-50", "mb-6 transition-all duration-200"],
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.cssTab = "vars";
      }
    }
  }, [_vm._v("\n          CSS Variables\n        ")]), _vm._v(" "), _c("button", {
    "class": [_vm.cssTab === "stylus" ? "font-bold" : "border-b border-gray-500 text-blue-700 hover:opacity-50", "mb-6 transition-all duration-200"],
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.cssTab = "stylus";
      }
    }
  }, [_vm._v("\n          Stylus\n        ")]), _vm._v(" "), _c("button", {
    "class": [_vm.cssTab === "scss" ? "font-bold" : "border-b border-gray-500 text-blue-700 hover:opacity-50", "mb-6 transition-all duration-200"],
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.cssTab = "scss";
      }
    }
  }, [_vm._v("\n          SCSS\n        ")]), _vm._v(" "), _c("button", {
    "class": [_vm.cssTab === "less" ? "font-bold" : "border-b border-gray-500 text-blue-700 hover:opacity-50", "mb-6 transition-all duration-200"],
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.cssTab = "less";
      }
    }
  }, [_vm._v("\n          LESS\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "mt-5 md:mt-0 space-x-5"
  }, [_c("button", {
    "class": [_vm.cssType === "rgb" ? "font-bold" : "border-b border-gray-500 text-blue-700 hover:opacity-50", "mb-6 transition-all duration-200"],
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.cssType = "rgb";
      }
    }
  }, [_vm._v("\n          RGB\n        ")]), _vm._v(" "), _c("button", {
    "class": [_vm.cssType === "hex" ? "font-bold" : "border-b border-gray-500 text-blue-700 hover:opacity-50", "mb-6 transition-all duration-200"],
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.cssType = "hex";
      }
    }
  }, [_vm._v("\n          HEX\n        ")]), _vm._v(" "), _c("button", {
    "class": [_vm.cssType === "hsl" ? "font-bold" : "border-b border-gray-500 text-blue-700 hover:opacity-50", "mb-6 transition-all duration-200"],
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.cssType = "hsl";
      }
    }
  }, [_vm._v("\n          HSL\n        ")]), _vm._v(" "), _c("button", {
    "class": [_vm.cssType === "oklch" ? "font-bold" : "border-b border-gray-500 text-blue-700 hover:opacity-50", "mb-6 transition-all duration-200"],
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.cssType = "oklch";
      }
    }
  }, [_vm._v("\n          OKLCH\n        ")])])]), _vm._v(" "), _c("div", {
    staticClass: "bg-gray-300 rounded-lg p-6 text-gray-800 overflow-auto"
  }, [_c("button", {
    staticClass: "relative z-20 bg-gray-200 float-right rounded border-1 text-blue-600 border-blue-600 px-5 py-4 transition-all hover:shadow hover:border-blue-800 hover:bg-blue-800 hover:text-white duration-300 uppercase text-sm font-bold tracking-wide",
    on: {
      click: function click($event) {
        return _vm.copy(_vm.tabContent);
      }
    }
  }, [_c("i", {
    "class": ["fa fa-fw mr-3", _vm.copyText ? "fa-check" : "fa-clone"]
  }), _vm._v(_vm._s(_vm.copyText ? "Copied!" : "Copy") + "\n      ")]), _vm._v(" "), _c("pre", {
    staticClass: "relative z-10"
  }, [_vm._v(_vm._s(_vm.tabContent))])])]), _vm._v(" "), _c("section", {
    staticClass: "mt-10"
  }, [_vm._m(3), _vm._v(" "), _c("p", {
    staticClass: "mt-4 text-gray-600 leading-relaxed"
  }, [_vm._v("\n      Generate CSS and Tailwind config for automatic dark mode using flipped color scales. \n      This approach creates symmetric color values that automatically invert in dark mode while maintaining consistent contrast ratios.\n    ")]), _vm._v(" "), _c("div", {
    staticClass: "mt-6 space-x-5"
  }, [_c("button", {
    "class": [_vm.autoDarkModeTab === "css" ? "font-bold" : "border-b border-gray-500 text-blue-700 hover:opacity-50", "mb-6 transition-all duration-200"],
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.autoDarkModeTab = "css";
      }
    }
  }, [_vm._v("\n        CSS Variables\n      ")]), _vm._v(" "), _c("button", {
    "class": [_vm.autoDarkModeTab === "config" ? "font-bold" : "border-b border-gray-500 text-blue-700 hover:opacity-50", "mb-6 transition-all duration-200"],
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.autoDarkModeTab = "config";
      }
    }
  }, [_vm._v("\n        Tailwind Config\n      ")])]), _vm._v(" "), _c("div", {
    staticClass: "bg-gray-300 rounded-lg p-6 text-gray-800 overflow-auto"
  }, [_c("button", {
    staticClass: "relative z-20 bg-gray-200 float-right rounded border-1 text-blue-600 border-blue-600 px-5 py-4 transition-all hover:shadow hover:border-blue-800 hover:bg-blue-800 hover:text-white duration-300 uppercase text-sm font-bold tracking-wide",
    on: {
      click: function click($event) {
        return _vm.copy(_vm.autoDarkModeTabContent);
      }
    }
  }, [_c("i", {
    "class": ["fa fa-fw mr-3", _vm.copyText ? "fa-check" : "fa-clone"]
  }), _vm._v(_vm._s(_vm.copyText ? "Copied!" : "Copy") + "\n      ")]), _vm._v(" "), _c("pre", {
    staticClass: "relative z-10"
  }, [_vm._v(_vm._s(_vm.autoDarkModeTabContent))])]), _vm._v(" "), _vm._m(4)]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("section", {
    staticClass: "mt-9 rich-text",
    domProps: {
      innerHTML: _vm._s(_vm.cms.content)
    }
  })]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "md:flex justify-between"
  }, [_c("h1", {
    staticClass: "mb-6 mr-5 font-bold uppercase tracking-wide"
  }, [_vm._v("\n        1.  Set Your Luminance-Based Grayscale\n      ")]), _vm._v(" "), _c("a", {
    staticClass: "leading-7 h-7 box-content whitespace-nowrap text-blue-600 hover:bg-white duration-300 inline-block pl-4 pr-5 rounded-full border-1 border-blue-500 bg-blue-200 uppercase text-sm font-bold tracking-wide",
    attrs: {
      href: "https://www.loom.com/share/3da3164377e84cbe87c7d0281c823e5e",
      target: "_blank"
    }
  }, [_c("i", {
    staticClass: "fa fa-play-circle mr-3 opacity-75"
  }), _vm._v("Watch Demo"), _c("i", {
    staticClass: "ml-3 fa fa-xs fa-external-link opacity-50"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "flex-shrink"
  }, [_vm._v("\n        Drag the sliders below or use the\n        "), _c("i", {
    staticClass: "far fa-ellipsis-h mx-2 text-blue-600"
  }), _vm._v(" menu.\n      ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "text-sm leading-6 mt-3 w-double-10 max-w-full mx-auto"
  }, [_c("span", {
    staticClass: "opacity-50"
  }, [_vm._v("\n            Max filesize: 5MB. Upload an image to auto-generate your grayscale and colors.\n          ")]), _vm._v(" "), _c("a", {
    staticClass: "whitespace-no-wrap text-gray-500 transition-colors duration-300 hover:text-gray-700",
    attrs: {
      href: "https://www.imgix.com/",
      target: "_blank",
      title: "imgix"
    }
  }, [_vm._v("Powered by\n            "), _c("img", {
    staticClass: "inline h-double-4",
    attrs: {
      src: "/img/imgix_logo1_small.png",
      alt: "imgix"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "flex justify-between"
  }, [_c("h1", {
    staticClass: "font-bold uppercase tracking-wide leading-7"
  }, [_vm._v("4.  Tailwind Auto-Dark Mode")]), _vm._v(" "), _c("a", {
    staticClass: "leading-7 h-7 box-content whitespace-nowrap text-blue-600 hover:bg-white duration-300 inline-block pl-4 pr-5 rounded-full border-1 border-blue-500 bg-blue-200 uppercase text-sm font-bold tracking-wide",
    attrs: {
      href: "https://www.loom.com/share/4b52f02f07264137b70c7864f8928c77",
      target: "_blank"
    }
  }, [_c("i", {
    staticClass: "fa fa-play-circle mr-3 opacity-75"
  }), _vm._v("Watch Demo"), _c("i", {
    staticClass: "ml-3 fa fa-xs fa-external-link opacity-50"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mt-4 text-sm text-gray-500 leading-relaxed"
  }, [_c("p", [_c("strong", [_vm._v("How to use:")])]), _vm._v(" "), _c("ol", {
    staticClass: "mt-2 list-decimal list-inside space-y-1 pl-4"
  }, [_c("li", [_vm._v("Copy the CSS Variables code and paste it into your main CSS file")]), _vm._v(" "), _c("li", [_vm._v("Copy the Tailwind Config code and merge it with your tailwind.config.js")]), _vm._v(" "), _c("li", [_vm._v("Use color classes like "), _c("code", {
    staticClass: "bg-gray-200 px-1 rounded"
  }, [_vm._v("text-neutral-600")]), _vm._v(" or "), _c("code", {
    staticClass: "bg-gray-200 px-1 rounded"
  }, [_vm._v("bg-primary-200")])]), _vm._v(" "), _c("li", [_vm._v("Colors will automatically flip to their opposite values in dark mode")]), _vm._v(" "), _c("li", [_vm._v("Use the "), _c("code", {
    staticClass: "bg-gray-200 px-1 rounded"
  }, [_vm._v("unset-dark-mode")]), _vm._v(" class to prevent auto-flipping on specific elements")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "mt-9 text-center leading-7"
  }, [_c("div", {
    staticClass: "text-3xl font-bold"
  }, [_vm._v("Have feedback?")]), _vm._v(" "), _c("a", {
    staticClass: "inline-block mt-5 leading-6 sm:leading-7 sm:mt-4 text-xl sm:text-2xl sm:border-b-1 border-gold-300 transition-all duration-300 text-gold-600 hover:text-gold-500",
    attrs: {
      href: "mailto:feedback@grayscale.design"
    }
  }, [_c("i", {
    staticClass: "fa fa-send mr-4"
  }), _vm._v("Send us an email\n    ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GrayscaleRow.vue?vue&type=template&id=58ce25fe":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GrayscaleRow.vue?vue&type=template&id=58ce25fe ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "GrayscaleRow"
  }, [_c("div", {
    ref: "grayscale",
    staticClass: "sm:rounded-full shadow-lg bg-gray-800 relative px-6"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "border-t border-gray-600 absolute inset-x-0 top-1/2 -mt-px"
  }), _vm._v(" "), _c("div", {
    staticClass: "absolute inset-y-0 left-0 right-0 mx-6 border-l border-r border-gray-600"
  }, _vm._l(_vm.lums, function (swatch, index) {
    return _c("div", {
      key: index,
      "class": ["absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer w-half-7 h-half-7 shadow-inner rounded-full border-1 border-white", _vm.isDragging === index ? "shadow-outline" : "transition-all duration-200", _vm.isLockedLum(index) ? "cursor-not-allowed" : ""],
      style: {
        left: _vm.getSwatchPosition(index),
        backgroundColor: "rgb(".concat(_vm.lumToGrayscaleRGB(swatch.lum).join(","), ")")
      },
      attrs: {
        title: _vm.isLockedLum(index) ? "LOCKED" : "",
        draggable: !_vm.isLockedLum(index)
      },
      on: {
        dragstart: function dragstart($event) {
          return _vm.onDragStart($event, index);
        },
        drag: function drag($event) {
          return _vm.onDrag($event, index);
        },
        dragend: function dragend($event) {
          return _vm.onDragEnd($event, index);
        }
      }
    });
  }), 0)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "h-8 sm:h-half-9 divide-x divide-gray-600 flex justify-between"
  }, [_c("div", {
    staticClass: "flex-grow"
  }), _vm._v(" "), _c("div", {
    staticClass: "flex-grow"
  }), _vm._v(" "), _c("div", {
    staticClass: "flex-grow"
  }), _vm._v(" "), _c("div", {
    staticClass: "flex-grow"
  }), _vm._v(" "), _c("div", {
    staticClass: "flex-grow"
  }), _vm._v(" "), _c("div", {
    staticClass: "flex-grow"
  }), _vm._v(" "), _c("div", {
    staticClass: "flex-grow"
  }), _vm._v(" "), _c("div", {
    staticClass: "flex-grow"
  }), _vm._v(" "), _c("div", {
    staticClass: "flex-grow"
  }), _vm._v(" "), _c("div", {
    staticClass: "flex-grow"
  })]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PaletteRow.vue?vue&type=template&id=4b79ba8a":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PaletteRow.vue?vue&type=template&id=4b79ba8a ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    "class": ["PaletteRow", {
      "is-locked": _vm.isLocked
    }]
  }, [_c("div", {
    staticClass: "flex items-center justify-between"
  }, _vm._l(_vm.swatches, function (swatch, index) {
    return _c("swatch-square", {
      key: index,
      staticClass: "w-full",
      attrs: {
        copy: _vm.copy,
        copied: _vm.copyText,
        swatch: swatch,
        "text-overlay": _vm.textOverlay,
        index: parseInt(index, 10),
        "is-first": index == 0,
        "is-last": index == Object.keys(_vm.swatches).length - 1,
        "is-closest": _vm.isClosest(index)
      }
    }, [_c("div", {
      staticClass: "font-mono opacity-50 text-gray-800 text-sm text-center px-2 leading-5 mt-4 mb-3"
    }, [_c("span", {
      staticClass: "hidden md:inline-block"
    }, [_vm._v(_vm._s(_vm.palette.name ? _vm.palette.name + "-" : ""))]), _vm._v(_vm._s(swatch.label) + "\n      ")]), _vm._v(" "), !_vm.hideLum ? _c("div", {
      staticClass: "font-mono opacity-50 text-gray-600 text-xs text-center leading-5"
    }, [_vm._v("\n        " + _vm._s(swatch.lum ? swatch.lum.toFixed(2) : swatch.lum == 0 ? "0.00" : "--") + "%\n      ")]) : _vm._e()]);
  }), 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838 ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.swatch.rgb ? _c("div", {
    "class": ["SwatchSquare", {
      "is-closest": _vm.isClosest
    }]
  }, [_c("button", {
    "class": ["w-full h-9 shadow-inner transition-colors duration-150 relative z-10", _vm.isFirst ? "rounded-l-lg" : _vm.isLast ? "rounded-r-lg" : "", {
      "pointer-events-none": !_vm.swatch.hex
    }],
    style: {
      color: _vm.getBgColor(_vm.swatch),
      backgroundColor: _vm.getBgColor(_vm.swatch)
      // transitionDelay: `${index * 40}ms`,
    },
    attrs: {
      type: "button"
    },
    on: {
      click: function click($event) {
        return _vm.copy(_vm.swatch.hex);
      }
    }
  }, [_vm.swatch.hex ? _c("span", {
    staticClass: "absolute text-sm text-gray-700 bg-white px-3 py-half-2 shadow rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  }, [_vm._v("\n      " + _vm._s(_vm.swatch.hex) + "\n    ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "absolute inset-0 flex flex-col items-center justify-center"
  }, [_vm.textOverlay ? _c("strong", {
    staticClass: "block text-black text-lg"
  }, [_c("i", {
    staticClass: "fa fa-font-case"
  })]) : _vm._e(), _vm._v(" "), _vm.textOverlay ? _c("strong", {
    staticClass: "block text-white text-lg"
  }, [_c("i", {
    staticClass: "fa fa-font-case"
  })]) : _vm._e()]), _vm._v(" "), _vm.swatch.hex ? _c("span", {
    "class": ["absolute text-sm text-gray-700 bg-white px-3 py-half-2 shadow rounded top-1/2 left-1/2 transform -translate-x-1/2", _vm.copied === _vm.swatch.hex ? "translate-y-full opacity-100" : "opacity-0 -translate-y-1/2"]
  }, [_vm._v("\n      " + _vm._s(_vm.swatch.hex) + "\n    ")]) : _vm._e()]), _vm._v(" "), _vm._t("default")], 2) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/Pages/App.vue":
/*!************************************!*\
  !*** ./resources/js/Pages/App.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_0ec91988__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0ec91988 */ "./resources/js/Pages/App.vue?vue&type=template&id=0ec91988");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./resources/js/Pages/App.vue?vue&type=script&lang=js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_0ec91988__WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_0ec91988__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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

/***/ "./resources/js/Pages/App.vue?vue&type=script&lang=js":
/*!************************************************************!*\
  !*** ./resources/js/Pages/App.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/App.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/App.vue?vue&type=template&id=0ec91988":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/App.vue?vue&type=template&id=0ec91988 ***!
  \******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ec91988__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0ec91988 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/App.vue?vue&type=template&id=0ec91988");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ec91988__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0ec91988__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/GrayscaleRow.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/GrayscaleRow.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GrayscaleRow_vue_vue_type_template_id_58ce25fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GrayscaleRow.vue?vue&type=template&id=58ce25fe */ "./resources/js/components/GrayscaleRow.vue?vue&type=template&id=58ce25fe");
/* harmony import */ var _GrayscaleRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GrayscaleRow.vue?vue&type=script&lang=js */ "./resources/js/components/GrayscaleRow.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GrayscaleRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _GrayscaleRow_vue_vue_type_template_id_58ce25fe__WEBPACK_IMPORTED_MODULE_0__["render"],
  _GrayscaleRow_vue_vue_type_template_id_58ce25fe__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/GrayscaleRow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/GrayscaleRow.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/GrayscaleRow.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GrayscaleRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GrayscaleRow.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GrayscaleRow.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GrayscaleRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/GrayscaleRow.vue?vue&type=template&id=58ce25fe":
/*!********************************************************************************!*\
  !*** ./resources/js/components/GrayscaleRow.vue?vue&type=template&id=58ce25fe ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_GrayscaleRow_vue_vue_type_template_id_58ce25fe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./GrayscaleRow.vue?vue&type=template&id=58ce25fe */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GrayscaleRow.vue?vue&type=template&id=58ce25fe");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_GrayscaleRow_vue_vue_type_template_id_58ce25fe__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_GrayscaleRow_vue_vue_type_template_id_58ce25fe__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/PaletteRow.vue":
/*!************************************************!*\
  !*** ./resources/js/components/PaletteRow.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PaletteRow_vue_vue_type_template_id_4b79ba8a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PaletteRow.vue?vue&type=template&id=4b79ba8a */ "./resources/js/components/PaletteRow.vue?vue&type=template&id=4b79ba8a");
/* harmony import */ var _PaletteRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaletteRow.vue?vue&type=script&lang=js */ "./resources/js/components/PaletteRow.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PaletteRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PaletteRow_vue_vue_type_template_id_4b79ba8a__WEBPACK_IMPORTED_MODULE_0__["render"],
  _PaletteRow_vue_vue_type_template_id_4b79ba8a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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

/***/ "./resources/js/components/PaletteRow.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/PaletteRow.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PaletteRow.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PaletteRow.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteRow_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PaletteRow.vue?vue&type=template&id=4b79ba8a":
/*!******************************************************************************!*\
  !*** ./resources/js/components/PaletteRow.vue?vue&type=template&id=4b79ba8a ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteRow_vue_vue_type_template_id_4b79ba8a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./PaletteRow.vue?vue&type=template&id=4b79ba8a */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PaletteRow.vue?vue&type=template&id=4b79ba8a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteRow_vue_vue_type_template_id_4b79ba8a__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_PaletteRow_vue_vue_type_template_id_4b79ba8a__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SwatchSquare.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/SwatchSquare.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwatchSquare_vue_vue_type_template_id_d2826838__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwatchSquare.vue?vue&type=template&id=d2826838 */ "./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838");
/* harmony import */ var _SwatchSquare_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwatchSquare.vue?vue&type=script&lang=js */ "./resources/js/components/SwatchSquare.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SwatchSquare_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwatchSquare_vue_vue_type_template_id_d2826838__WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwatchSquare_vue_vue_type_template_id_d2826838__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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

/***/ "./resources/js/components/SwatchSquare.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/SwatchSquare.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwatchSquare_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SwatchSquare.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SwatchSquare.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SwatchSquare_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838":
/*!********************************************************************************!*\
  !*** ./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838 ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwatchSquare_vue_vue_type_template_id_d2826838__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./SwatchSquare.vue?vue&type=template&id=d2826838 */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwatchSquare_vue_vue_type_template_id_d2826838__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SwatchSquare_vue_vue_type_template_id_d2826838__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/utils/forms.js":
/*!*************************************!*\
  !*** ./resources/js/utils/forms.js ***!
  \*************************************/
/*! exports provided: jsonToFormData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonToFormData", function() { return jsonToFormData; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * Conver JSON data into FormData
 * @param  {Any} data
 * @return {FormData}
 * @see: https://stackoverflow.com/a/49388446/622287
 */
var jsonToFormData = function jsonToFormData(data) {
  var formData = new FormData();
  function buildFormData(formData, data, parentKey) {
    if (data && _typeof(data) === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach(function (key) {
        buildFormData(formData, data[key], parentKey ? "".concat(parentKey, "[").concat(key, "]") : key);
      });
    } else {
      var value = data == null ? '' : data;
      formData.append(parentKey, value);
    }
  }
  buildFormData(formData, data);
  return formData;
};

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

/***/ }),

/***/ "./resources/js/utils/url.js":
/*!***********************************!*\
  !*** ./resources/js/utils/url.js ***!
  \***********************************/
/*! exports provided: makeQuery, getQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeQuery", function() { return makeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuery", function() { return getQuery; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function makeQuery() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var query = Object.keys(params).reduce(function (arr, key) {
    var val = params[key];
    arr.push("".concat(key, "=").concat(val));
    return arr;
  }, []);
  return query.length ? "?".concat(query.join('&')) : '';
}
function getQuery() {
  var _window$location$href = window.location.href.split('?'),
    _window$location$href2 = _slicedToArray(_window$location$href, 2),
    path = _window$location$href2[0],
    query = _window$location$href2[1];
  return query.split('&').reduce(function (obj, keyVal) {
    var _keyVal$split = keyVal.split('='),
      _keyVal$split2 = _slicedToArray(_keyVal$split, 2),
      key = _keyVal$split2[0],
      val = _keyVal$split2[1];
    obj[key] = val;
    return obj;
  }, {});
}

/***/ })

}]);