(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    PaletteRow: _components_PaletteRow__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      presets: {
        bell: {
          label: 'Bell Curve',
          values: [98, 92, 82, 67, 50, 33, 18, 8, 2]
        },
        linear: {
          label: 'Linear',
          values: [98, 86, 74, 62, 50, 38, 26, 14, 2]
        },
        dark: {
          label: 'The Darkside',
          values: [90, 81, 66, 43, 22, 10, 4, 0.8, 0.2]
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
      isDragging: null,
      isChoosingBase: null,
      lastPos: null,
      adjustLumsTimeout: 0,
      autoDistribute: false,
      palettes: [],
      dragTimeout: 0,
      showFilters: [],
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
      shownPaletteMenu: null
    };
  },
  computed: {
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
    tailwindConfig: function tailwindConfig() {
      var _this2 = this;

      var colors = {};
      colors.gray = Object.keys(this.lums).reduce(function (obj, index) {
        obj["".concat(parseInt(index, 10) + 1, "00")] = _utils_color__WEBPACK_IMPORTED_MODULE_2__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_2__, _toConsumableArray(_this2.lums[index].rgb));
        return obj;
      }, {});
      this.palettes.forEach(function (palette) {
        colors[palette.name] = Object.keys(palette.swatches).reduce(function (obj, index) {
          obj["".concat(parseInt(index, 10) + 1, "00")] = _utils_color__WEBPACK_IMPORTED_MODULE_2__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_2__, _toConsumableArray(palette.swatches[index].rgb.map(Math.round)));
          return obj;
        }, {});
      });
      var config = JSON.stringify(colors, null, '  ');
      localStorage.setItem(new Date(), config);
      return config;
    }
  },
  watch: {
    grayscaleJson: function grayscaleJson(val) {
      var _this3 = this;

      val.colors.forEach(function (c, i) {
        var r = Math.round(c.red * 255);
        var g = Math.round(c.green * 255);
        var b = Math.round(c.blue * 255);
        var lum = _utils_color__WEBPACK_IMPORTED_MODULE_2__["lumFromRGB"](r, g, b);
        _this3.lums[i].lum = lum;
        _this3.lums[i].rgb = [r, g, b];
      });
    },
    paletteJson: function paletteJson(val) {
      var _this4 = this;

      var dominants = ['vibrant', 'muted'].reduce(function (arr, color) {
        arr.push(val.dominant_colors[color].hex);
        return arr;
      }, []);
      var colors = val.colors.reduce(function (arr, color) {
        arr.push(color.hex);
        return arr;
      }, []);

      var all = _toConsumableArray(new Set(colors.concat(dominants))).sort();

      all.forEach(function (hex, i) {
        if (hex) _this4.palettes.push({
          name: '',
          swatches: Object(_utils_object__WEBPACK_IMPORTED_MODULE_3__["clone"])(_this4.lums),
          hex: hex,
          filters: {
            hue: 0,
            sat: 0
          }
        });
      }); // Force render on the palette array

      var last = this.palettes.pop();
      this.$nextTick(function () {
        _this4.palettes.unshift(last);
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
        var _this5 = this;

        clearTimeout(this.updateSwatchTimeout);
        this.updateSwatchTimeout = setTimeout(function () {
          _this5.updateSwatchLums(val);
        }, 250);
      }
    }
  },
  created: function created() {
    this.setLums(this.presets.bell.values);
  },
  methods: {
    removePalette: function removePalette(index) {
      this.palettes.splice(index, 1);
    },
    togglePaletteMenu: function togglePaletteMenu(index) {
      this.shownPaletteMenu = this.shownPaletteMenu == index ? null : index;
    },
    toggleFilters: function toggleFilters(index) {
      if (this.showFilters.includes(index)) {
        this.showFilters.splice(index, 1);
      } else {
        this.showFilters = _toConsumableArray(new Set([].concat(_toConsumableArray(this.showFilters), [index])));
      }
    },
    getPickerHex: function getPickerHex(hex) {
      if (hex.length === 4) {
        return hex + hex.replace('#', '');
      }

      return hex;
    },
    updateSwatchLums: function updateSwatchLums(lums) {
      var _this6 = this;

      lums = lums || this.lums; // Update palette swatch lums

      this.palettes = this.palettes.map(function (palette) {
        Object.keys(palette.swatches).forEach(function (i) {
          palette.swatches[i].lum = lums[i].lum;
        });
        return palette;
      });
      clearTimeout(this.paletteCacheBustTimeout);
      this.paletteCacheBustTimeout = setTimeout(function () {
        _this6.palettes.reverse();

        _this6.$nextTick(function () {
          _this6.palettes.reverse();
        });
      }, 100);
    },
    setLums: function setLums(values) {
      var _this7 = this;

      this.lums = Object.keys(this.lums).reduce(function (obj, index) {
        obj[index] = {
          lum: values[index],
          rgb: _this7.lumToGrayscaleRGB(values[index])
        };
        return obj;
      }, {});
    },
    lumToGrayscaleRGB: function lumToGrayscaleRGB(lum) {
      var newL = _utils_color__WEBPACK_IMPORTED_MODULE_2__["lightnessFromHSLum"](0, 0, lum);
      return Object.values(_utils_color__WEBPACK_IMPORTED_MODULE_2__["HSLtoRGB"](0, 0, newL)).map(Math.round);
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
      var _this8 = this;

      index = parseInt(index, 10);
      var el = $event.target;
      var parent = el.parentElement;
      var parentWidth = parent.clientWidth;
      var elX = $event.pageX - parent.offsetLeft - parent.parentElement.offsetLeft;

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
          return _this8.adjustLums(index === 0 ? pos : _this8.lums[0].lum, index === _this8.lumsCount - 1 ? pos : _this8.lums[_this8.lumsCount - 1].lum, 100 - pos, index);
        }, 20);
      }
    },
    adjustLums: function adjustLums(startPos, endPos, curPos, curIndex) {
      var _this9 = this;

      if (!this.autoDistribute) return;

      if (curPos !== this.lastPos) {
        var lumIndices = Object.keys(this.lums);
        lumIndices.pop();
        lumIndices.shift();
        lumIndices.forEach(function (ndx) {
          ndx = parseInt(ndx, 10);

          if (ndx < curIndex) {
            var dist = (curPos - startPos) / curIndex;
            _this9.lums[ndx].lum = ndx * dist + _this9.lums[0].lum;
            _this9.lums[ndx].rgb = _this9.lumToGrayscaleRGB(_this9.lums[ndx].lum);
          } else if (curIndex < ndx) {
            var _dist = (endPos - curPos) / (_this9.lumsCount - curIndex - 1);

            _this9.lums[ndx].lum = (ndx - curIndex) * _dist + curPos;
            _this9.lums[ndx].rgb = _this9.lumToGrayscaleRGB(_this9.lums[ndx].lum);
          }
        }); // Prevent this from running unnecessarily

        this.lastPos = curPos;
      }
    },
    addPalette: function addPalette() {
      var _this10 = this;

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
        _this10.palettes[0].hex = '#000000';
        setTimeout(function () {
          var _ref = _this10.$refs.palettePicker0 || [],
              _ref2 = _slicedToArray(_ref, 1),
              input = _ref2[0];

          if (input) input.click();
        }, 10);
      });
    },
    onFileUpload: function onFileUpload() {
      var _this11 = this;

      return new Promise( /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve, reject) {
          var filePicker;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this11.isUploading = true;
                  filePicker = _this11.$refs.upload;

                  if (!(!filePicker || !filePicker.files || filePicker.files.length <= 0)) {
                    _context.next = 5;
                    break;
                  }

                  reject('No file selected.');
                  return _context.abrupt("return");

                case 5:
                  _this11.uploadFile = filePicker.files[0];

                  if (!(_this11.uploadFile.size > 10485760 / 2)) {
                    _context.next = 9;
                    break;
                  }

                  reject('Image is too big (max. 5 Mb)');
                  return _context.abrupt("return");

                case 9:
                  _context.next = 11;
                  return _this11.toBase64(_this11.uploadFile);

                case 11:
                  _this11.base64File = _context.sent;
                  return _context.abrupt("return", resolve(_this11.uploadFile));

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref3.apply(this, arguments);
        };
      }()).then(function (file) {
        var formData = Object(_utils_forms__WEBPACK_IMPORTED_MODULE_1__["jsonToFormData"])({
          file: file
        });
        axios.post('/palette-uploads', formData).then(function (_ref4) {
          var data = _ref4.data;

          if (data.url) {
            _this11.uploadFileUrl = data.url;
            _this11.uploadFilePath = data.path;
            var grayscaleUrl = "".concat(_this11.uploadFileUrl, "?sat=-100&colorquant=").concat(_this11.lumsCount, "&palette=json&colors=").concat(_this11.lumsCount);
            axios.get(grayscaleUrl).then(function (_ref5) {
              var data = _ref5.data;
              _this11.grayscaleJson = data;
            });
            var paletteUrl = "".concat(_this11.uploadFileUrl, "?palette=json&colors=3");
            axios.get(paletteUrl).then(function (_ref6) {
              var data = _ref6.data;
              _this11.paletteJson = data;
            });
          } else {
            alert('Sorry! Please try again.');
          }
        });
      })["catch"](alert)["finally"](function () {
        var _this11$$refs;

        _this11.isUploading = false;

        if ((_this11$$refs = _this11.$refs) === null || _this11$$refs === void 0 ? void 0 : _this11$$refs.upload) {
          _this11.$refs.upload.value = null;
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
      if (newCount < 3 || newCount > 20) return;
      this.lums = {};
      var i = 0;

      while (i < newCount) {
        var lum = 100 - 92 / (newCount - 1) * i - 4;
        this.lums[i] = {
          lum: lum,
          rgb: this.lumToGrayscaleRGB(lum)
        };
        i++;
      }
    },
    getUploadFileUrl: function getUploadFileUrl(params) {
      // return `/uploads/${this.uploadFilePath}${params}`;
      return this.uploadFileUrl + params;
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
    name: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      paletteClone: {},
      generateTimeout: 0,
      copyText: '',
      copied: false
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
        this.palette.hex = val.length === 4 ? val + val.replace('#', '') : val;
        this.updateBase(this.palette.hex);
      }
    },
    'palette.hex': {
      handler: function handler() {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#000000';
        this.palette.picker = val.length === 4 ? val + val.replace('#', '') : val;
        this.updateBase(this.palette.picker);
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
      var _this = this;

      e.preventDefault();
      if (!this.copyText) return false;
      e.clipboardData.setData('text/plain', this.copyText);
      this.copied = true;
      setTimeout(function () {
        _this.copied = false;
      }, 500);
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
      var _this2 = this;

      if (!this.paletteClone.hsl) return;

      var run = function run() {
        var baseHSL = _this2.paletteClone.hsl;

        var _ref = Object.keys(_this2.paletteClone.closest) || [],
            _ref2 = _slicedToArray(_ref, 1),
            closestIndex = _ref2[0];

        Object.keys(_this2.paletteClone.swatches).forEach( /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(i) {
            var swatch, diffIndex, newH, newS, newL, newRGB, rgb;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    swatch = _this2.paletteClone.swatches[i];
                    diffIndex = Math.abs(closestIndex - i);
                    newH = baseHSL.h + parseFloat(_this2.paletteClone.filters.hue) * diffIndex;
                    if (newH < 0) newH = 360 - newH;
                    if (newH > 360) newH = newH - 360;
                    newS = baseHSL.s + parseFloat(_this2.paletteClone.filters.sat) * diffIndex;
                    _context.next = 8;
                    return _utils_color__WEBPACK_IMPORTED_MODULE_1__["lightnessFromHSLum"](newH, newS, swatch.lum);

                  case 8:
                    newL = _context.sent;
                    newRGB = _utils_color__WEBPACK_IMPORTED_MODULE_1__["HSLtoRGB"](newH, newS, newL);
                    rgb = Object.values(newRGB).map(Math.round);
                    _this2.paletteClone.swatches[i].hex = _utils_color__WEBPACK_IMPORTED_MODULE_1__["RGBToHex"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_1__, _toConsumableArray(rgb));
                    _this2.paletteClone.swatches[i].rgb = rgb;
                    _this2.paletteClone.swatches[i].lum = _utils_color__WEBPACK_IMPORTED_MODULE_1__["lumFromRGB"].apply(_utils_color__WEBPACK_IMPORTED_MODULE_1__, _toConsumableArray(_this2.paletteClone.swatches[i].rgb));

                  case 14:
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
    copied: Boolean
  },
  methods: {
    getBgColor: function getBgColor(swatch) {
      return "rgb(".concat(swatch.rgb.join(','), ")");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/SwatchSquare.scss?vue&type=style&index=0&id=d2826838&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/SwatchSquare.scss?vue&type=style&index=0&id=d2826838&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".SwatchSquare > button span[data-v-d2826838] {\n  display: none;\n  transition-property: all;\n  transition-duration: 300ms;\n}\n.SwatchSquare > button[data-v-d2826838]:hover, .SwatchSquare > button[data-v-d2826838]:focus {\n  z-index: 20;\n}\n.SwatchSquare > button:hover span[data-v-d2826838], .SwatchSquare > button:focus span[data-v-d2826838] {\n  display: inline-block;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/SwatchSquare.scss?vue&type=style&index=0&id=d2826838&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./resources/js/components/SwatchSquare.scss?vue&type=style&index=0&id=d2826838&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./SwatchSquare.scss?vue&type=style&index=0&id=d2826838&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/SwatchSquare.scss?vue&type=style&index=0&id=d2826838&lang=scss&scoped=true&");

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
      { staticClass: "mt-8" },
      [
        _c("div", { staticClass: "sm:flex justify-between" }, [
          _c(
            "h1",
            { staticClass: "mb-6 mr-5 font-bold uppercase tracking-wide" },
            [_vm._v("1. Set Your Luminosity Scale")]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "whitespace-no-wrap" }, [
            _c(
              "button",
              {
                staticClass:
                  "focus:shadow-outline focus:outline-none leading-5 py-half-4 px-4 rounded bg-gray-200 text-xl text-gray-600 hover:text-gray-800",
                on: {
                  click: function($event) {
                    return _vm.setLumsCount(_vm.lumsCount - 1)
                  }
                }
              },
              [_vm._v("\n          -\n        ")]
            ),
            _vm._v(" "),
            _c("span", { staticClass: "opacity-50 mx-4" }, [
              _vm._v(_vm._s(_vm.lumsCount) + " values")
            ]),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass:
                  "focus:shadow-outline focus:outline-none leading-5 py-half-4 px-4 rounded bg-gray-200 text-xl text-gray-600 hover:text-gray-800",
                on: {
                  click: function($event) {
                    return _vm.setLumsCount(_vm.lumsCount + 1)
                  }
                }
              },
              [_vm._v("\n          +\n        ")]
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-6 md:mt-0 md:flex justify-between" }, [
          _c("p", { staticClass: "flex-shrink" }, [
            _vm._v("Drag the sliders below to set your luminosity scale.")
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "mt-6 md:mt-0 divide-x flex-grow text-center md:text-right"
            },
            [
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
                [_vm._v("\n          auto\n        ")]
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
                [_vm._v("\n          manual\n        ")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "inline-block relative" }, [
                _c(
                  "button",
                  {
                    staticClass: "px-4 text-gray-600 hover:underline",
                    on: {
                      click: function($event) {
                        _vm.autoDistribute = false
                        _vm.showPresets = !_vm.showPresets
                      }
                    }
                  },
                  [
                    _vm._v("\n            presets"),
                    _c("i", { staticClass: "ml-2 fa fa-caret-down" })
                  ]
                ),
                _vm._v(" "),
                _vm.showPresets
                  ? _c(
                      "div",
                      {
                        staticClass:
                          "absolute right-0 top-100 mr-4 mt-2 text-right shadow-lg bg-gray-500 py-4 min-w-9 rounded-b-lg rounded-tl-lg z-40"
                      },
                      _vm._l(_vm.presets, function(preset, key) {
                        return _c(
                          "a",
                          {
                            key: key,
                            class: [
                              "block py-half-4 px-5 whitespace-no-wrap text-gray-800 hover:bg-gray-400 hover:bg-opacity-75",
                              {
                                "bg-gray-400 bg-opacity-75":
                                  JSON.stringify(preset.values) ==
                                  JSON.stringify(_vm.lumsValues)
                              }
                            ],
                            attrs: { href: "#" + key },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.setLums(preset.values)
                                _vm.showPresets = false
                              }
                            }
                          },
                          [_vm._v(_vm._s(preset.label))]
                        )
                      }),
                      0
                    )
                  : _vm._e()
              ])
            ]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mt-5 -mx-6 sm:mx-0" }, [
          _c(
            "div",
            {
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
                        : "transition-all duration-200"
                    ],
                    style: {
                      left: 100 - swatch.lum + "%",
                      backgroundColor:
                        "rgb(" +
                        _vm.lumToGrayscaleRGB(swatch.lum).join(",") +
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
                }),
                0
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c("palette-row", {
          staticClass: "mt-7",
          attrs: { palette: { swatches: _vm.lums } }
        }),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _c("div", { staticClass: "mt-6 font-bold" }, [
          _c("span", { staticClass: "opacity-75" }, [_vm._v("Shortcut »")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "font-bold text-blue-600",
              on: {
                click: function($event) {
                  _vm.showUploadForm = true
                }
              }
            },
            [_vm._v("\n        Upload an image\n      ")]
          )
        ]),
        _vm._v(" "),
        _vm.showUploadForm
          ? _c("div", { staticClass: "mt-6" }, [
              _c("p", { staticClass: "opacity-50" }, [
                _vm._v(
                  "\n        After uploading an image, we turn it grayscale to set your luminosity scale. After that,\n        we find the most prominant colors from your image and add them to your color palette!\n      "
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c("input", {
                  ref: "upload",
                  class: ["mt-6", { "opacity-25": _vm.isUploading }],
                  attrs: {
                    disabled: _vm.isUploading,
                    type: "file",
                    accept: "image/x-png,image/gif,image/jpeg"
                  },
                  on: { change: _vm.onFileUpload }
                }),
                _vm._v(" "),
                _vm.isUploading
                  ? _c("i", { staticClass: "fa fa-spinner-third fa-spin" })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-sm opacity-50 mt-2" }, [
                _vm._v("Max filesize: 5MB")
              ])
            ])
          : _vm._e(),
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
                    attrs: { src: _vm.base64File, alt: "" }
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
    _c("section", { staticClass: "mt-9" }, [
      _c("h1", { staticClass: "mb-6 font-bold uppercase tracking-wide" }, [
        _vm._v("2. Set your colors")
      ]),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
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
                  _c("div", { staticClass: "h-8 leading-8 mr-8" }, [
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
                        "leading-6 inline-block align-middle w-9 mr-5 text-gray-700 hover:text-gray-800 py-3 px-0 text-lg font-bold border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none",
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
                        "leading-6 inline-block align-middle w-10 text-gray-700 hover:text-gray-800 py-3 px-0 text-lg font-bold border-b border-gray-400 border-dashed hover:border-gray-600 focus:border-gray-600 focus:shadow-none",
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
      _vm._m(4),
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
    return _c("p", { staticClass: "mt-6 opacity-50" }, [
      _vm._v("\n      If your base color has "),
      _c("strong", [_vm._v("high saturation")]),
      _vm._v(", try using the\n      "),
      _c("i", {
        staticClass:
          "far fa-ellipsis-h text-blue-700 inline-block align-middle mx-2"
      }),
      _vm._v(
        ' menu to "Show\n      Filters" and adjust hues towards the extremes of your palette. Or, if your base color has\n      '
      ),
      _c("strong", [_vm._v("low saturation")]),
      _vm._v(
        " and more gray-ish, try adding more saturation for the\n      extremes.\n    "
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
          "swatch-square",
          {
            key: index,
            staticClass: "w-full",
            attrs: {
              copy: _vm.copy,
              copied: _vm.copied,
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
                        _vm._s(swatch.lum ? swatch.lum.toFixed(1) : "--") +
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c(
        "button",
        {
          class: [
            "w-full h-9 shadow-inner transition-colors duration-150 relative z-10",
            _vm.isFirst ? "rounded-l-lg" : _vm.isLast ? "rounded-r-lg" : "",
            { "pointer-events-none": !_vm.swatch.hex }
          ],
          style: {
            backgroundColor: _vm.getBgColor(_vm.swatch),
            transitionDelay: _vm.index * 40 + "ms"
          },
          attrs: { "data-hex": _vm.swatch.hex },
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
                    _vm.copied
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

/***/ "./resources/js/components/SwatchSquare.scss?vue&type=style&index=0&id=d2826838&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/SwatchSquare.scss?vue&type=style&index=0&id=d2826838&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_SwatchSquare_scss_vue_type_style_index_0_id_d2826838_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./SwatchSquare.scss?vue&type=style&index=0&id=d2826838&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/components/SwatchSquare.scss?vue&type=style&index=0&id=d2826838&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_SwatchSquare_scss_vue_type_style_index_0_id_d2826838_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_SwatchSquare_scss_vue_type_style_index_0_id_d2826838_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_SwatchSquare_scss_vue_type_style_index_0_id_d2826838_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_SwatchSquare_scss_vue_type_style_index_0_id_d2826838_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_SwatchSquare_scss_vue_type_style_index_0_id_d2826838_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/SwatchSquare.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/SwatchSquare.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SwatchSquare_vue_vue_type_template_id_d2826838_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwatchSquare.vue?vue&type=template&id=d2826838&scoped=true& */ "./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838&scoped=true&");
/* harmony import */ var _SwatchSquare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SwatchSquare.vue?vue&type=script&lang=js& */ "./resources/js/components/SwatchSquare.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SwatchSquare_scss_vue_type_style_index_0_id_d2826838_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwatchSquare.scss?vue&type=style&index=0&id=d2826838&lang=scss&scoped=true& */ "./resources/js/components/SwatchSquare.scss?vue&type=style&index=0&id=d2826838&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SwatchSquare_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SwatchSquare_vue_vue_type_template_id_d2826838_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SwatchSquare_vue_vue_type_template_id_d2826838_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d2826838",
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

/***/ "./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwatchSquare_vue_vue_type_template_id_d2826838_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SwatchSquare.vue?vue&type=template&id=d2826838&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SwatchSquare.vue?vue&type=template&id=d2826838&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwatchSquare_vue_vue_type_template_id_d2826838_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SwatchSquare_vue_vue_type_template_id_d2826838_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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