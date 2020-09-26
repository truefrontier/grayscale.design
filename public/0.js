(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/forms */ "./resources/js/utils/forms.js");
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/color */ "./resources/js/utils/color.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/object */ "./resources/js/utils/object.js");
/* harmony import */ var _components_PaletteRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PaletteRow */ "./resources/js/components/PaletteRow.vue");
/* harmony import */ var _components_GrayscaleRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GrayscaleRow */ "./resources/js/components/GrayscaleRow.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  components: {
    PaletteRow: _components_PaletteRow__WEBPACK_IMPORTED_MODULE_4__["default"],
    GrayscaleRow: _components_GrayscaleRow__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  props: {
    cms: Object,
    csrf: String
  },
  data: function data() {
    return {
      presets: {
        bell: {
          label: 'Bell Curve',
          icon: 'fa-wave-sine',
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
          icon: 'fa-horizontal-rule',
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
          icon: 'fa-moon',
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
          icon: 'fa-sun',
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
      storedSwatches: {}
    };
  },
  computed: {
    paletteBases: function paletteBases() {
      return this.palettes.reduce(function (arr, palette) {
        arr.push(palette.hex);
        return arr;
      }, []);
    },
    hasLockedLums: function hasLockedLums() {
      return Object.keys(this.lockedByHex).length > 0;
    },
    lumsValues: function lumsValues() {
      var _this = this;

      return Object.keys(this.lums).reduce(function (arr, index) {
        arr.push(_this.lums[index].lum);
        return arr;
      }, []);
    },
    lumsCount: function lumsCount() {
      return Object.keys(this.lums).length;
    },
    exportConfig: function exportConfig() {
      var _this2 = this;

      var colors = {};
      colors.gray = {
        name: 'gray',
        swatches: Object.keys(this.lums).reduce(function (obj, index) {
          var swatch = {
            lum: _this2.lums[index].lum,
            rgb: _this2.lums[index].rgb,
            hex: _utils_color__WEBPACK_IMPORTED_MODULE_2__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_2__, _toConsumableArray(_this2.lums[index].rgb)),
            hsl: Object.values(_utils_color__WEBPACK_IMPORTED_MODULE_2__["RGBToHSL"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_2__, _toConsumableArray(_this2.lums[index].rgb)))
          };
          obj[index] = swatch;
          return obj;
        }, {})
      };
      this.palettes.forEach(function (palette, i) {
        var name = palette.name;

        if (!name) {
          var closestToMid = _utils_color__WEBPACK_IMPORTED_MODULE_2__["closestLum"](_this2.lumsValues, 50);

          var _ref = Object.keys(closestToMid) || Math.floor(_this2.lumsCount / 2),
              _ref2 = _slicedToArray(_ref, 1),
              midIndex = _ref2[0];

          var swatch = palette.swatches[midIndex];

          var _Color$RGBToHSL = _utils_color__WEBPACK_IMPORTED_MODULE_2__["RGBToHSL"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_2__, _toConsumableArray(swatch.rgb)),
              h = _Color$RGBToHSL.h,
              s = _Color$RGBToHSL.s,
              l = _Color$RGBToHSL.l;

          name = _utils_color__WEBPACK_IMPORTED_MODULE_2__["colorName"](h, s, l);
        }

        if (name === 'gray') name += '-custom';
        colors[name] = Object.keys(palette.swatches).reduce(function (obj, j) {
          if (_this2.storedSwatches[i] && _this2.storedSwatches[i][j]) {
            obj.swatches[j] = _this2.storedSwatches[i][j];
          }

          return obj;
        }, _objectSpread(_objectSpread({}, palette), {}, {
          name: name,
          swatches: {}
        }));
      });
      return JSON.stringify(colors);
    },
    tailwindConfig: function tailwindConfig() {
      var _this3 = this;

      var colors = {};
      colors.gray = Object.keys(this.lums).reduce(function (obj, index) {
        obj["".concat(parseInt(index, 10) + 1, "00")] = _utils_color__WEBPACK_IMPORTED_MODULE_2__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_2__, _toConsumableArray(_this3.lums[index].rgb));
        return obj;
      }, {});
      this.palettes.forEach(function (palette, i) {
        var name = palette.name;

        if (!name) {
          var closestToMid = _utils_color__WEBPACK_IMPORTED_MODULE_2__["closestLum"](_this3.lumsValues, 50);

          var _ref3 = Object.keys(closestToMid) || Math.floor(_this3.lumsCount / 2),
              _ref4 = _slicedToArray(_ref3, 1),
              midIndex = _ref4[0];

          var swatch = palette.swatches[midIndex];

          var _Color$RGBToHSL2 = _utils_color__WEBPACK_IMPORTED_MODULE_2__["RGBToHSL"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_2__, _toConsumableArray(swatch.rgb)),
              h = _Color$RGBToHSL2.h,
              s = _Color$RGBToHSL2.s,
              l = _Color$RGBToHSL2.l;

          name = _utils_color__WEBPACK_IMPORTED_MODULE_2__["colorName"](h, s, l);
        }

        if (name === 'gray') name += '-custom';
        colors[name] = Object.keys(palette.swatches).reduce(function (obj, j) {
          if (_this3.storedSwatches[i] && _this3.storedSwatches[i][j]) {
            obj["".concat(parseInt(j, 10) + 1, "00")] = _this3.storedSwatches[i][j].hex;
          }

          return obj;
        }, {});
      });
      var config = JSON.stringify(colors, null, ' ');
      localStorage.setItem(new Date(), config);
      return config;
    }
  },
  watch: {
    paletteBases: function paletteBases(val) {
      var _this4 = this;

      Object.keys(this.lockedByHex).forEach(function (hex) {
        if (val.indexOf(hex) === -1) {
          _this4.toggleLocked(hex, false);
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
          var lum = _utils_color__WEBPACK_IMPORTED_MODULE_2__["lumFromRGB"](r, g, b);
          this.lums[i] = {
            lum: lum,
            rgb: [r, g, b]
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
      var _this5 = this;

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
        if (color.hex) _this5.palettes.push({
          name: '',
          swatches: Object(_utils_object__WEBPACK_IMPORTED_MODULE_3__["clone"])(_this5.lums),
          hex: color.hex,
          filters: {
            hue: 0,
            sat: 0
          }
        });
      }); // Force render on the palette array

      var last = this.palettes.pop();
      this.$nextTick(function () {
        _this5.palettes.unshift(last);

        _this5.$nextTick(function () {
          setTimeout(function () {
            _this5.dedupePalettes();
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
        var _this6 = this;

        clearTimeout(this.updateSwatchTimeout);
        this.updateSwatchTimeout = setTimeout(function () {
          _this6.updateSwatchLums(val);
        }, 250);
      }
    },
    lumsCount: function lumsCount(val) {
      var _this7 = this;

      this.$nextTick(function () {
        _this7.updateSwatchLums();
      });
    }
  },
  created: function created() {
    this.setLums([98, 92, 82, 67, 50, 33, 18, 8, 2]);
  },
  mounted: function mounted() {
    document.addEventListener('copy', this.onCopy.bind(this));
    if (this.uploadFileUrl) this.setFromUploadFile();
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('copy', this.onCopy.bind(this), null);
  },
  methods: {
    storeSwatches: function storeSwatches(swatches, index) {
      this.storedSwatches[index] = swatches;
    },
    dedupePalettes: function dedupePalettes() {
      var dupes = this.getDupes();

      for (var i = dupes.length - 1; i >= 0; i--) {
        this.palettes.splice(dupes[i], 1);
      }
    },
    getDupes: function getDupes() {
      var _this8 = this;

      var rgbs = {};
      var dupes = [];
      this.palettes.forEach(function (palette, p1) {
        var isDupe = false;
        rgbs[p1] = [];
        var closestToMid = _utils_color__WEBPACK_IMPORTED_MODULE_2__["closestLum"](_this8.lumsValues, 50);
        var midIndex = Object.keys(closestToMid)[0];
        var swatch = palette.swatches[midIndex];

        var _swatch$rgb = _slicedToArray(swatch.rgb, 3),
            r = _swatch$rgb[0],
            g = _swatch$rgb[1],
            b = _swatch$rgb[2];

        for (var p2 = Object.keys(rgbs).length - 1; p2 >= 0; p2--) {
          for (var j = rgbs[p2].length - 1; j >= 0; j--) {
            var matches = 0;

            var _rgbs$p2$j = _slicedToArray(rgbs[p2][j], 3),
                R = _rgbs$p2$j[0],
                G = _rgbs$p2$j[1],
                B = _rgbs$p2$j[2];

            if (r - 3 <= R && r + 3 >= R) matches++;
            if (g - 3 <= G && g + 3 >= G) matches++;
            if (b - 3 <= B && b + 3 >= B) matches++;

            if (matches >= 2) {
              var hex1 = _this8.palettes[p1].hex;
              var hex2 = _this8.palettes[p2].hex;
              var lum1 = _utils_color__WEBPACK_IMPORTED_MODULE_2__["lumFromRGB"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_2__, _toConsumableArray(Object.values(_utils_color__WEBPACK_IMPORTED_MODULE_2__["hexToRGB"](hex1))));
              var lum2 = _utils_color__WEBPACK_IMPORTED_MODULE_2__["lumFromRGB"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_2__, _toConsumableArray(Object.values(_utils_color__WEBPACK_IMPORTED_MODULE_2__["hexToRGB"](hex2))));
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
      var _this9 = this;

      if (this.copyText) {
        e.preventDefault();
        e.clipboardData.setData('text/plain', this.copyText);
        setTimeout(function () {
          _this9.copyText = false;
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
      var _this10 = this;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.isLockedHex(hex) || force !== true && force === false) {
        var lumsByPalette = Object.keys(this.lockedByHex).reduce(function (obj, hx) {
          var lockedPalette = _this10.lockedByHex[hx];

          if (hex !== hx) {
            obj[hx] = lockedPalette;
          } else {
            _this10.lums[lockedPalette.lumIndex] = {
              lum: lockedPalette.lastLum,
              rgb: _this10.lumToGrayscaleRGB(lockedPalette.lastLum)
            };
          }

          return obj;
        }, {});
        this.lockedByHex = lumsByPalette;
      } else {
        var lockedByHex = Object(_utils_object__WEBPACK_IMPORTED_MODULE_3__["clone"])(this.lockedByHex);
        var rgb = Object.values(_utils_color__WEBPACK_IMPORTED_MODULE_2__["hexToRGB"](hex));
        var lum = _utils_color__WEBPACK_IMPORTED_MODULE_2__["lumFromRGB"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_2__, _toConsumableArray(rgb));
        var closest = _utils_color__WEBPACK_IMPORTED_MODULE_2__["closestLum"](this.lumsValues, lum);

        var _ref5 = Object.keys(closest) || [],
            _ref6 = _slicedToArray(_ref5, 1),
            lumIndex = _ref6[0];

        if (this.isLockedLum(lumIndex)) {
          alert('This color value is already LOCKED!');
          return;
        }

        var _ref7 = Object.values(closest) || [],
            _ref8 = _slicedToArray(_ref7, 1),
            lastLum = _ref8[0];

        lumIndex = parseInt(lumIndex, 10);
        this.lums[lumIndex] = {
          lum: lum,
          rgb: this.lumToGrayscaleRGB(lum)
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
      var _this11 = this;

      lums = lums || this.lums;
      var lumsCount = Object.keys(lums).length; // Update palette swatch lums

      this.palettes = this.palettes.map(function (palette) {
        var swatchKeys = Object.keys(palette.swatches);
        swatchKeys.forEach(function (i) {
          if (i < lumsCount) {
            palette.swatches[i].lum = lums[i].lum;
          } else {
            delete palette.swatches[i];
          }
        });
        var i = swatchKeys.length - 1;

        while (i < lumsCount) {
          palette.swatches[i] = {
            lum: lums[i].lum
          };
          i++;
        }

        return palette;
      });
      clearTimeout(this.paletteCacheBustTimeout);
      this.paletteCacheBustTimeout = setTimeout(function () {
        _this11.palettes.reverse();

        _this11.$nextTick(function () {
          _this11.palettes.reverse();
        });
      }, 100);
    },
    setLums: function setLums(values) {
      var _this12 = this;

      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var pos = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      this.lums = Object.keys(this.lums).reduce(function (obj, i) {
        obj[i] = {
          lum: values[i],
          rgb: _this12.lumToGrayscaleRGB(values[i])
        };
        return obj;
      }, {});
      this.$nextTick(function () {
        _this12.adjustLums(index === 0 ? pos : _this12.lums[0].lum, index === _this12.lumsCount - 1 ? pos : _this12.lums[_this12.lumsCount - 1].lum, 100 - pos, index);
      });
    },
    lumToGrayscaleRGB: function lumToGrayscaleRGB(lum) {
      var newL = _utils_color__WEBPACK_IMPORTED_MODULE_2__["lightnessFromHSLum"](0, 0, lum);
      return Object.values(_utils_color__WEBPACK_IMPORTED_MODULE_2__["HSLtoRGB"](0, 0, newL)).map(Math.round);
    },
    adjustLums: function adjustLums(startPos, endPos, curPos, curIndex) {
      var _this13 = this;

      if (!this.autoDistribute) return;
      var lumIndices = Object.keys(this.lums);
      lumIndices.pop();
      lumIndices.shift();
      lumIndices.forEach(function (ndx) {
        ndx = parseInt(ndx, 10);

        if (ndx < curIndex) {
          var dist = (curPos - startPos) / curIndex;
          _this13.lums[ndx].lum = ndx * dist + _this13.lums[0].lum;
          _this13.lums[ndx].rgb = _this13.lumToGrayscaleRGB(_this13.lums[ndx].lum);
        } else if (curIndex < ndx) {
          var _dist = (endPos - curPos) / (_this13.lumsCount - curIndex - 1);

          _this13.lums[ndx].lum = (ndx - curIndex) * _dist + curPos;
          _this13.lums[ndx].rgb = _this13.lumToGrayscaleRGB(_this13.lums[ndx].lum);
        }
      });
    },
    addPalette: function addPalette() {
      var _this14 = this;

      this.palettes.unshift({
        name: '',
        swatches: Object(_utils_object__WEBPACK_IMPORTED_MODULE_3__["clone"])(this.lums),
        hex: '#000001',
        filters: {
          hue: 0,
          sat: 0
        }
      });
      this.isChoosingBase = 0;
      this.$nextTick(function () {
        _this14.palettes[0].hex = '#000000'; // setTimeout(() => {
        //   let [input] = this.$refs.palettePicker0 || [];
        //   if (input) input.click();
        // }, 10);
      });
    },
    onFileUpload: function onFileUpload() {
      var _this15 = this;

      return new Promise( /*#__PURE__*/function () {
        var _ref9 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
          var filePicker;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this15.isUploading = true;
                  filePicker = _this15.$refs.upload;

                  if (!(!filePicker || !filePicker.files || filePicker.files.length <= 0)) {
                    _context.next = 5;
                    break;
                  }

                  reject('No file selected.');
                  return _context.abrupt("return");

                case 5:
                  _this15.uploadFile = filePicker.files[0];

                  if (!(_this15.uploadFile.size > 10485760 / 2)) {
                    _context.next = 9;
                    break;
                  }

                  reject('Image is too big (max. 5 Mb)');
                  return _context.abrupt("return");

                case 9:
                  _context.next = 11;
                  return _this15.toBase64(_this15.uploadFile);

                case 11:
                  _this15.base64File = _context.sent;
                  return _context.abrupt("return", resolve(_this15.uploadFile));

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref9.apply(this, arguments);
        };
      }()).then(function (file) {
        var formData = Object(_utils_forms__WEBPACK_IMPORTED_MODULE_1__["jsonToFormData"])({
          file: file
        });
        axios.post('/palette-uploads', formData).then(function (_ref10) {
          var data = _ref10.data;

          if (data.url) {
            _this15.uploadFileUrl = data.url;
            _this15.uploadFilePath = data.path;

            _this15.setFromUploadFile();
          } else {
            alert('Sorry! Please try again.');
          }
        });
      })["catch"](alert)["finally"](function () {
        var _this15$$refs;

        _this15.isUploading = false;

        if ((_this15$$refs = _this15.$refs) === null || _this15$$refs === void 0 ? void 0 : _this15$$refs.upload) {
          _this15.$refs.upload.value = null;
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
      var _this16 = this;

      if (newCount < 3 || newCount > 20) return;
      var lums = Object(_utils_object__WEBPACK_IMPORTED_MODULE_3__["clone"])(this.lums);
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

      this.lums = lums;

      if (this.uploadFileUrl) {
        clearTimeout(this.setFromUploadTimeout);
        this.setFromUploadTimeout = setTimeout(function () {
          _this16.setFromUploadFile(false);
        }, 2500);
      }
    },
    setFromUploadFile: function setFromUploadFile() {
      var _this17 = this;

      var addPalette = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var grayscaleUrl = "".concat(this.uploadFileUrl, "?sat=-100&colorquant=").concat(this.lumsCount, "&palette=json&colors=").concat(this.lumsCount);
      axios.get(grayscaleUrl).then(function (_ref11) {
        var data = _ref11.data;
        _this17.grayscaleJson = data;
      }).then(function () {
        if (addPalette) {
          var paletteUrl = "".concat(_this17.uploadFileUrl, "?palette=json&colors=3");
          axios.get(paletteUrl).then(function (_ref12) {
            var data = _ref12.data;
            _this17.paletteJson = data;
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GrayscaleRow.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GrayscaleRow.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color */ "./resources/js/utils/color.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/object */ "./resources/js/utils/object.js");
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

      if (elX < 0 || elX > parentWidth) {
        $event.preventDefault();
        return false;
      }

      return parseFloat(elX / parentWidth * 100);
    },
    onDragEnd: function onDragEnd($event, index) {
      this.isDragging = null;
      if (!$event.screenX) return; // FIX for firefox

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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PaletteRow',
  props: {
    palette: Object,
    hideLum: Boolean,
    isLocked: {
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
    SwatchSquare: _SwatchSquare__WEBPACK_IMPORTED_MODULE_2__["default"]
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

          _this.paletteClone.closest = _utils_color__WEBPACK_IMPORTED_MODULE_1__["closestLum"](val, _this.paletteClone.lum);
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
          _this2.copyText = false;
        }, 500);
      }
    },
    updateBase: function updateBase(hex) {
      this.paletteClone = Object.assign({}, this.paletteClone, this.palette, {
        hex: hex,
        picker: hex
      });
      this.paletteClone.rgb = _utils_color__WEBPACK_IMPORTED_MODULE_1__["hexToRGB"](hex);
      var rgb = Object.values(this.paletteClone.rgb);
      this.paletteClone.hsl = _utils_color__WEBPACK_IMPORTED_MODULE_1__["RGBToHSL"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_1__, _toConsumableArray(rgb));
      this.paletteClone.lum = _utils_color__WEBPACK_IMPORTED_MODULE_1__["lumFromRGB"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_1__, _toConsumableArray(rgb));
      this.paletteClone.closest = _utils_color__WEBPACK_IMPORTED_MODULE_1__["closestLum"](this.lums, this.paletteClone.lum);
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
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(i) {
            var swatch, diffIndex, newH, newS, newL, newRGB, rgb;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
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
                    return _utils_color__WEBPACK_IMPORTED_MODULE_1__["lightnessFromHSLum"](newH, newS, swatch.lum);

                  case 10:
                    newL = _context.sent;
                    newRGB = _utils_color__WEBPACK_IMPORTED_MODULE_1__["HSLtoRGB"](newH, newS, newL);
                    rgb = Object.values(newRGB).map(Math.round);
                    _this3.paletteClone.swatches[i].hsl = [newH, newS, newL];
                    _this3.paletteClone.swatches[i].hex = _utils_color__WEBPACK_IMPORTED_MODULE_1__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_1__, _toConsumableArray(rgb));
                    _this3.paletteClone.swatches[i].rgb = rgb;
                    _this3.paletteClone.swatches[i].lum = _utils_color__WEBPACK_IMPORTED_MODULE_1__["lumFromRGB"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_1__, _toConsumableArray(_this3.paletteClone.swatches[i].rgb));

                  case 17:
                  case "end":
                    return _context.stop();
                }
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
  name: 'SwatchSquare',
  props: {
    index: Number,
    swatch: Object,
    isFirst: Boolean,
    isLast: Boolean,
    isClosest: Boolean,
    copy: Function,
    copied: String
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
    _c(
      "section",
      { staticClass: "mt-6" },
      [
        _c(
          "h1",
          { staticClass: "mb-6 mr-5 font-bold uppercase tracking-wide" },
          [_vm._v("\n      1.  Set Your Luminance-Based Grayscale\n    ")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mt-6 md:mt-0 flex items-center justify-between" },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "relative" }, [
              _c(
                "button",
                {
                  staticClass:
                    "text-center h-7 leading-7 px-4 rounded text-xl text-blue-600 hover:opacity-75 focus:text-blue-900",
                  on: {
                    click: function($event) {
                      _vm.showLumsMenu = !_vm.showLumsMenu
                    }
                  }
                },
                [_c("i", { staticClass: "far fa-lg fa-ellipsis-h" })]
              ),
              _vm._v(" "),
              _vm.showLumsMenu
                ? _c(
                    "div",
                    {
                      staticClass:
                        "absolute right-0 top-100 mr-4 mt-2 text-left shadow-lg bg-gray-500 py-4 min-w-9 rounded-b-lg rounded-tl-lg z-40"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "text-sm block py-half-4 px-5 mr-5 whitespace-no-wrap text-gray-900 uppercase tracking-wide font-bold"
                        },
                        [_vm._v("\n            Distribute\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          class: [
                            "block w-full text-left py-half-4 px-5 whitespace-no-wrap",
                            { "bg-gray-400 bg-opacity-75": _vm.autoDistribute },
                            _vm.hasLockedLums
                              ? "text-gray-600 cursor-not-allowed"
                              : "text-gray-800 hover:bg-gray-400 hover:bg-opacity-75"
                          ],
                          attrs: {
                            title: _vm.hasLockedLums
                              ? "You have LOCKED colors"
                              : "",
                            disabled: _vm.hasLockedLums
                          },
                          on: {
                            click: function($event) {
                              _vm.autoDistribute = true
                              _vm.showLumsMenu = false
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "far fa-fw fa-hand-sparkles mr-4"
                          }),
                          _vm._v("Auto\n          ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          class: [
                            "block w-full text-left py-half-4 px-5 whitespace-no-wrap text-gray-800 hover:bg-gray-400 hover:bg-opacity-75",
                            { "bg-gray-400 bg-opacity-75": !_vm.autoDistribute }
                          ],
                          on: {
                            click: function($event) {
                              _vm.autoDistribute = false
                              _vm.showLumsMenu = false
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "far fa-fw fa-hand-paper mr-4"
                          }),
                          _vm._v("Manual\n          ")
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "mt-5 text-sm block py-half-4 px-5 mr-5 whitespace-no-wrap text-gray-900 uppercase tracking-wide font-bold"
                        },
                        [_vm._v("\n            Presets\n          ")]
                      ),
                      _vm._v(" "),
                      _vm._l(_vm.presets, function(preset, key) {
                        return _c(
                          "a",
                          {
                            key: key,
                            class: [
                              "block py-half-4 px-5 whitespace-no-wrap",
                              {
                                "bg-gray-400 bg-opacity-75":
                                  JSON.stringify(
                                    preset.getValues(
                                      _vm.lumsValues,
                                      _vm.lumsCount
                                    )
                                  ) == JSON.stringify(_vm.lumsValues)
                              },
                              _vm.hasLockedLums
                                ? "text-gray-600 cursor-not-allowed"
                                : "text-gray-800 hover:bg-gray-400 hover:bg-opacity-75"
                            ],
                            attrs: {
                              title: _vm.hasLockedLums
                                ? "You have LOCKED colors"
                                : "",
                              href: "#" + key
                            },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.autoDistribute = false
                                _vm.showLumsMenu = false
                                _vm.setLums(
                                  preset.getValues(
                                    _vm.lumsValues,
                                    _vm.lumsCount
                                  )
                                )
                              }
                            }
                          },
                          [
                            _c("i", { class: ["fa fa-fw mr-4", preset.icon] }),
                            _vm._v(_vm._s(preset.label))
                          ]
                        )
                      })
                    ],
                    2
                  )
                : _vm._e()
            ])
          ]
        ),
        _vm._v(" "),
        _c("grayscale-row", {
          staticClass: "mt-4 -mx-6 sm:mx-0",
          attrs: {
            lums: _vm.lums,
            "lums-values": _vm.lumsValues,
            "set-lums": _vm.setLums,
            "is-locked-lum": _vm.isLockedLum
          }
        }),
        _vm._v(" "),
        _c("palette-row", {
          staticClass: "mt-7",
          attrs: { palette: { swatches: _vm.lums } }
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "text-center justify-between md:flex md:space-x-6" },
          [
            _c("div", [
              _c(
                "button",
                {
                  staticClass:
                    "relative inline-block mt-7 border-1 border-gray-500 transition-all hover:shadow hover:border-gray-800 hover:bg-gray-800 duration-300 rounded py-4 px-5 text-gray-600 hover:text-white uppercase text-sm font-bold tracking-wide",
                  on: {
                    click: function($event) {
                      return _vm.setLumsCount(_vm.lumsCount - 1)
                    }
                  }
                },
                [_c("i", { staticClass: "far fa-lg fa-minus" })]
              ),
              _vm._v(" "),
              _c("span", { staticClass: "px-4 opacity-50" }, [
                _vm._v(_vm._s(_vm.lumsCount) + " values")
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "relative inline-block mt-7 border-1 border-gray-500 transition-all hover:shadow hover:border-gray-800 hover:bg-gray-800 duration-300 rounded py-4 px-5 text-gray-600 hover:text-white uppercase text-sm font-bold tracking-wide",
                  on: {
                    click: function($event) {
                      return _vm.setLumsCount(_vm.lumsCount + 1)
                    }
                  }
                },
                [_c("i", { staticClass: "far fa-lg fa-plus" })]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "md:text-right" }, [
              _c(
                "label",
                {
                  class: [
                    "relative inline-block mt-7 border-1 border-gray-500 transition-all hover:shadow hover:border-gray-800 hover:bg-gray-800 duration-300 rounded py-4 px-5 text-gray-600 hover:text-white uppercase text-sm font-bold tracking-wide",
                    {
                      "cursor-not-allowed pointer-events-none opacity-50":
                        _vm.isUploading
                    }
                  ],
                  attrs: { for: "upload" }
                },
                [
                  _c("input", {
                    ref: "upload",
                    staticClass: "absolute inset-0 opacity-0 z-10 max-w-full",
                    attrs: {
                      disabled: _vm.isUploading,
                      name: "upload",
                      id: "upload",
                      type: "file",
                      accept: "image/x-png,image/gif,image/jpeg"
                    },
                    on: { change: _vm.onFileUpload }
                  }),
                  _vm._v("\n          Upload an image\n        ")
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "text-sm opacity-50 mt-3 w-double-10 max-w-full mx-auto"
                },
                [
                  _vm._v(
                    "\n          Optionally upload image to auto-generate your grayscale and colors. Max\n          filesize: 5MB\n        "
                  )
                ]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _vm.uploadFilePath
          ? _c("div", { staticClass: "mt-6 text-center" }, [
              _c(
                "a",
                {
                  staticClass:
                    "relative inline-block shadow hover:shadow-2xl transition-shadow duration-300",
                  attrs: {
                    href: _vm.getUploadFileUrl(
                      "?sat=-100&colorquant=" + _vm.lumsCount
                    ),
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [
                  _c("img", {
                    staticClass: "rounded-lg",
                    attrs: { src: _vm.base64File || _vm.uploadFileUrl, alt: "" }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    staticClass:
                      "rounded-lg absolute inset-0 z-10 opacity-100 hover:opacity-0 transition-opacity duration-200",
                    attrs: {
                      src: _vm.getUploadFileUrl(
                        "?sat=-100&colorquant=" + _vm.lumsCount
                      ),
                      alt: ""
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                { staticClass: "mt-2 text-xs mx-auto opacity-50 max-w-2xl" },
                [
                  _vm._v(
                    "\n        Click image to view and print. This is your image using just " +
                      _vm._s(_vm.lumsCount) +
                      " shades of\n        gray (the grays used to generate your luminosity scale). Below, we added a few colors from\n        your image!\n      "
                  )
                ]
              )
            ])
          : _vm._e()
      ],
      1
    ),
    _vm._v(" "),
    _c("section", { staticClass: "mt-10" }, [
      _c("h1", { staticClass: "font-bold uppercase tracking-wide" }, [
        _vm._v("2.  Set your colors")
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass:
            "mt-6 border-1 border-blue-600 transition-all hover:shadow hover:border-blue-800 hover:bg-blue-800 duration-300 rounded py-4 px-5 text-blue-600 hover:text-white uppercase text-sm font-bold tracking-wide",
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
              _c(
                "div",
                {
                  staticClass:
                    "min-h-8 md:flex justify-between items-center relative"
                },
                [
                  _c("div", { staticClass: "absolute right-0 top-0" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "text-center h-7 my-half-6 rounded text-xl text-blue-600 p-4 hover:opacity-75 focus:text-blue-900",
                        on: {
                          click: function($event) {
                            return _vm.togglePaletteMenu(index)
                          }
                        }
                      },
                      [_c("i", { staticClass: "far fa-lg fa-ellipsis-h" })]
                    ),
                    _vm._v(" "),
                    _vm.shownPaletteMenu == index
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "absolute z-40 right-0 top-100 mr-4 -mt-3 text-left shadow-lg bg-gray-500 py-4 min-w-9 rounded-b-lg rounded-tl-lg z-10"
                          },
                          [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "block py-half-4 px-5 whitespace-no-wrap text-gray-800 hover:bg-gray-400 hover:bg-opacity-75",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.toggleFilters(index)
                                    _vm.togglePaletteMenu(index)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "far fa-fw fa-sliders-h mr-4"
                                }),
                                _vm._v(
                                  _vm._s(
                                    _vm.showFilters.includes(index)
                                      ? "Hide"
                                      : "Show"
                                  ) + " Filters\n              "
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("hr", {
                              staticClass: "my-3 border-gray-600 opacity-75"
                            }),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass:
                                  "block py-half-4 px-5 whitespace-no-wrap text-red-800 hover:bg-gray-400 hover:bg-opacity-75",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.removePalette(index)
                                    _vm.togglePaletteMenu(index)
                                  }
                                }
                              },
                              [
                                _c("i", {
                                  staticClass: "far fa-fw fa-times mr-4"
                                }),
                                _vm._v("Remove\n              ")
                              ]
                            )
                          ]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "h-8 leading-8 mr-8 relative" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "hidden sm:block absolute right-full top-0 px-4 opacity-25 hover:opacity-100 focus:outline-none focus:shadow-none",
                        attrs: {
                          title: "Adjusts grayscale to match this color"
                        },
                        on: {
                          click: function($event) {
                            return _vm.toggleLocked(palette.hex)
                          }
                        }
                      },
                      [
                        _c("i", {
                          class: [
                            "fa-fw",
                            _vm.isLockedHex(palette.hex)
                              ? "fa fa-lock"
                              : "far fa-unlock"
                          ]
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      ref: "palettePicker" + index,
                      refInFor: true,
                      staticClass:
                        "leading-6 inline-block align-middle h-7 w-8 p-0 border-1 rounded bg-transparent mr-4",
                      attrs: { type: "color" },
                      domProps: { value: _vm.getPickerHex(palette.hex) },
                      on: {
                        input: function($event) {
                          palette.hex = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
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
                        "leading-6 inline-block align-middle w-9 mr-5 text-gray-600 hover:text-gray-800 py-3 px-0 text-lg font-bold border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none relative z-30",
                      attrs: { type: "text", placeholder: "#000000" },
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
                        "leading-6 inline-block align-middle w-10 text-gray-600 hover:text-gray-800 py-3 px-0 text-lg font-bold border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none",
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
                    })
                  ]),
                  _vm._v(" "),
                  _vm.showFilters.includes(index)
                    ? _c("div", { staticClass: "flex md:mr-8 space-x-5" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "text-center leading-5 mt-4 w-1/2 md:min-w-10 lg:min-w-11"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "block font-mono text-xs opacity-50 uppercase"
                              },
                              [
                                _vm._v(
                                  "Hue (" +
                                    _vm._s(
                                      palette.filters.hue > 0
                                        ? "+" + palette.filters.hue
                                        : palette.filters.hue
                                    ) +
                                    "°)"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: palette.filters.hue,
                                  expression: "palette.filters.hue"
                                }
                              ],
                              staticClass: "p-half-4 w-full",
                              attrs: { type: "range", min: "-50", max: "50" },
                              domProps: { value: palette.filters.hue },
                              on: {
                                __r: function($event) {
                                  return _vm.$set(
                                    palette.filters,
                                    "hue",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "text-center leading-5 mt-4 w-1/2 md:min-w-10 lg:min-w-11"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "block font-mono text-xs opacity-50 uppercase"
                              },
                              [
                                _vm._v(
                                  "Saturation (" +
                                    _vm._s(palette.filters.sat) +
                                    "%)"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: palette.filters.sat,
                                  expression: "palette.filters.sat"
                                }
                              ],
                              staticClass: "p-half-4 w-full",
                              attrs: { type: "range", min: "-30", max: "30" },
                              domProps: { value: palette.filters.sat },
                              on: {
                                __r: function($event) {
                                  return _vm.$set(
                                    palette.filters,
                                    "sat",
                                    $event.target.value
                                  )
                                }
                              }
                            })
                          ]
                        )
                      ])
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c("palette-row", {
                staticClass: "mt-4",
                attrs: {
                  palette: palette,
                  "hide-lum": "",
                  "is-locked": _vm.isLockedHex(palette.hex),
                  "store-swatches": function(swatches) {
                    return _vm.storeSwatches(swatches, index)
                  }
                }
              })
            ],
            1
          )
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "mt-10" }, [
      _c("h1", { staticClass: "font-bold uppercase tracking-wide" }, [
        _vm._v("3.  Export Your Colors")
      ]),
      _vm._v(" "),
      _c(
        "form",
        { attrs: { action: "/export-svgs", target: "_blank", method: "POST" } },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.exportConfig,
                expression: "exportConfig"
              }
            ],
            staticClass: "hidden",
            attrs: { type: "text", name: "palettes" },
            domProps: { value: _vm.exportConfig },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.exportConfig = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.csrf,
                expression: "csrf"
              }
            ],
            attrs: { type: "hidden", name: "_token" },
            domProps: { value: _vm.csrf },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.csrf = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "mt-6 border-1 border-blue-600 transition-all hover:shadow hover:border-blue-800 hover:bg-blue-800 duration-300 rounded py-4 px-5 text-blue-600 hover:text-white uppercase text-sm font-bold tracking-wide",
              attrs: { type: "submit" }
            },
            [_vm._v("\n        Export Svgs\n      ")]
          )
        ]
      ),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "mt-6 bg-gray-300 rounded-lg p-6 text-gray-800 overflow-auto"
        },
        [
          _c(
            "button",
            {
              staticClass:
                "relative z-20 bg-gray-200 float-right rounded border-1 text-blue-600 border-blue-600 px-5 py-4 transition-all hover:shadow hover:border-blue-800 hover:bg-blue-800 hover:text-white duration-300 uppercase text-sm font-bold tracking-wide",
              on: {
                click: function($event) {
                  return _vm.copy(_vm.tailwindConfig)
                }
              }
            },
            [
              _c("i", {
                class: ["fa fa-fw mr-3", _vm.copyText ? "fa-check" : "fa-clone"]
              }),
              _vm._v(_vm._s(_vm.copyText ? "Copied!" : "Copy") + "\n      ")
            ]
          ),
          _vm._v(" "),
          _c("pre", { staticClass: "relative z-10" }, [
            _vm._v(_vm._s(_vm.tailwindConfig))
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _vm._m(2),
    _vm._v(" "),
    _c("section", {
      staticClass: "mt-9 rich-text",
      domProps: { innerHTML: _vm._s(_vm.cms.content) }
    })
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "flex-shrink" }, [
      _vm._v("\n        Drag the sliders below or use the\n        "),
      _c("i", { staticClass: "far fa-ellipsis-h mx-2 text-blue-600" }),
      _vm._v(" menu.\n      ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "mt-8" }, [
      _vm._v("\n      Or\n      "),
      _c(
        "a",
        {
          staticClass:
            "transition-all duration-200 border-b border-gray-500 inline-block hover:opacity-50",
          attrs: {
            href: "https://tailwindcss.com/docs/customizing-colors",
            target: "_blank",
            rel: "noopener"
          }
        },
        [_vm._v("customize your Tailwind CSS colors")]
      ),
      _vm._v("\n      with your generated colors:\n    ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "mt-9 text-center leading-7" }, [
      _c("div", { staticClass: "text-3xl font-bold" }, [
        _vm._v("Have feedback?")
      ]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass:
            "inline-block mt-5 leading-6 sm:leading-7 sm:mt-4 text-xl sm:text-2xl sm:border-b-1 border-gold-300 transition-all duration-300 text-gold-600 hover:text-gold-500",
          attrs: { href: "mailto:feedback@grayscale.design" }
        },
        [
          _c("i", { staticClass: "fa fa-send mr-4" }),
          _vm._v("Send us an email\n    ")
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GrayscaleRow.vue?vue&type=template&id=58ce25fe&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/GrayscaleRow.vue?vue&type=template&id=58ce25fe& ***!
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
  return _c("div", { staticClass: "GrayscaleRow" }, [
    _c(
      "div",
      {
        ref: "grayscale",
        staticClass: "sm:rounded-full shadow-lg bg-gray-800 relative px-6"
      },
      [
        _vm._m(0),
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
              "absolute inset-y-0 left-0 right-0 mx-6 border-l border-r border-gray-600"
          },
          _vm._l(_vm.lums, function(swatch, index) {
            return _c("div", {
              key: index,
              class: [
                "absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer w-half-7 h-half-7 shadow-inner rounded-full border-1 border-white",
                _vm.isDragging === index
                  ? "shadow-outline"
                  : "transition-all duration-200",
                _vm.isLockedLum(index) ? "cursor-not-allowed" : ""
              ],
              style: {
                left: _vm.getSwatchPosition(index),
                backgroundColor:
                  "rgb(" + _vm.lumToGrayscaleRGB(swatch.lum).join(",") + ")"
              },
              attrs: {
                title: _vm.isLockedLum(index) ? "LOCKED" : "",
                draggable: !_vm.isLockedLum(index)
              },
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
          }),
          0
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "h-8 sm:h-half-9 divide-x divide-gray-600 flex justify-between"
      },
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
  return _c("div", { class: ["PaletteRow", { "is-locked": _vm.isLocked }] }, [
    _c(
      "div",
      { staticClass: "flex items-center justify-between" },
      _vm._l(_vm.swatches, function(swatch, index) {
        return _c(
          "swatch-square",
          {
            key: index,
            staticClass: "w-full",
            attrs: {
              copy: _vm.copy,
              copied: _vm.copyText,
              swatch: swatch,
              index: parseInt(index, 10),
              "is-first": index == 0,
              "is-last": index == Object.keys(_vm.swatches).length - 1,
              "is-closest": _vm.isClosest(index)
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
                _c("span", { staticClass: "hidden md:inline-block" }, [
                  _vm._v(_vm._s(_vm.palette.name ? _vm.palette.name + "-" : ""))
                ]),
                _vm._v(_vm._s(parseInt(index, 10) + 1) + "00\n      ")
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
                      "\n        " +
                        _vm._s(
                          swatch.lum
                            ? swatch.lum.toFixed(2)
                            : swatch.lum == 0
                            ? "0.00"
                            : "--"
                        ) +
                        "%\n      "
                    )
                  ]
                )
              : _vm._e()
          ]
        )
      }),
      1
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
  return _vm.swatch.rgb
    ? _c(
        "div",
        { class: ["SwatchSquare", { "is-closest": _vm.isClosest }] },
        [
          _c(
            "button",
            {
              class: [
                "w-full h-9 shadow-inner transition-colors duration-150 relative z-10",
                _vm.isFirst ? "rounded-l-lg" : _vm.isLast ? "rounded-r-lg" : "",
                { "pointer-events-none": !_vm.swatch.hex }
              ],
              style: {
                color: _vm.getBgColor(_vm.swatch),
                backgroundColor: _vm.getBgColor(_vm.swatch)
                // transitionDelay: `${index * 40}ms`,
              },
              on: {
                click: function($event) {
                  return _vm.copy(_vm.swatch.hex)
                }
              }
            },
            [
              _vm.swatch.hex
                ? _c(
                    "span",
                    {
                      staticClass:
                        "absolute text-sm text-gray-700 bg-white px-3 py-half-2 shadow rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    },
                    [_vm._v("\n      " + _vm._s(_vm.swatch.hex) + "\n    ")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.swatch.hex
                ? _c(
                    "span",
                    {
                      class: [
                        "absolute text-sm text-gray-700 bg-white px-3 py-half-2 shadow rounded top-1/2 left-1/2 transform -translate-x-1/2",
                        _vm.copied === _vm.swatch.hex
                          ? "translate-y-full opacity-100"
                          : "opacity-0 -translate-y-1/2"
                      ]
                    },
                    [_vm._v("\n      " + _vm._s(_vm.swatch.hex) + "\n    ")]
                  )
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _vm._t("default")
        ],
        2
      )
    : _vm._e()
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

/***/ "./resources/js/components/GrayscaleRow.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/GrayscaleRow.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GrayscaleRow_vue_vue_type_template_id_58ce25fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GrayscaleRow.vue?vue&type=template&id=58ce25fe& */ "./resources/js/components/GrayscaleRow.vue?vue&type=template&id=58ce25fe&");
/* harmony import */ var _GrayscaleRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GrayscaleRow.vue?vue&type=script&lang=js& */ "./resources/js/components/GrayscaleRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _GrayscaleRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _GrayscaleRow_vue_vue_type_template_id_58ce25fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _GrayscaleRow_vue_vue_type_template_id_58ce25fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
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

/***/ "./resources/js/components/GrayscaleRow.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/GrayscaleRow.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GrayscaleRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./GrayscaleRow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GrayscaleRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GrayscaleRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/GrayscaleRow.vue?vue&type=template&id=58ce25fe&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/GrayscaleRow.vue?vue&type=template&id=58ce25fe& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GrayscaleRow_vue_vue_type_template_id_58ce25fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./GrayscaleRow.vue?vue&type=template&id=58ce25fe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/GrayscaleRow.vue?vue&type=template&id=58ce25fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GrayscaleRow_vue_vue_type_template_id_58ce25fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_GrayscaleRow_vue_vue_type_template_id_58ce25fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/*! exports provided: hexToRGB, RGBToHex, RGBToHSL, lumFromRGB, closestLum, lightnessFromHSLum, HSLtoRGB, colorName */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorName", function() { return colorName; });
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
} // @see: https://stackoverflow.com/a/55600168/622287

function colorName(h, s, l) {
  l = Math.floor(l);
  s = Math.floor(s);
  h = Math.floor(h);

  if (s <= 10 && l >= 90) {
    return 'white';
  } else if (s <= 10 && l <= 70 || s === 0) {
    return 'gray';
  } else if (l <= 15) {
    return 'black';
  } else if (h >= 0 && h <= 15 || h >= 346) {
    return 'red';
  } else if (h >= 16 && h <= 35) {
    if (s < 90) {
      return 'brown';
    } else {
      return 'orange';
    }
  } else if (h >= 36 && h <= 54) {
    if (s < 90) {
      return 'brown';
    } else {
      return 'yellow';
    }
  } else if (h >= 55 && h <= 155) {
    return 'green';
  } else if (h >= 156 && h <= 190) {
    return 'teal';
  } else if (h >= 191 && h <= 260) {
    return 'blue';
  } else if (h >= 261 && h <= 290) {
    return 'purple';
  } else if (h >= 291 && h <= 345) {
    return 'pink';
  }
}

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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

/***/ })

}]);