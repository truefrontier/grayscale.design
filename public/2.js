(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/vanilla-colorful/hex-color-picker.js":
/*!***********************************************************!*\
  !*** ./node_modules/vanilla-colorful/hex-color-picker.js ***!
  \***********************************************************/
/*! exports provided: HexColorPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HexColorPicker", function() { return HexColorPicker; });
/* harmony import */ var _lib_entrypoints_hex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/entrypoints/hex.js */ "./node_modules/vanilla-colorful/lib/entrypoints/hex.js");

/**
 * A color picker custom element that uses HEX format.
 *
 * @element hex-color-picker
 *
 * @prop {string} color - Selected color in HEX format.
 * @attr {string} color - Selected color in HEX format.
 *
 * @fires color-changed - Event fired when color property changes.
 *
 * @csspart hue - A hue selector container.
 * @csspart saturation - A saturation selector container
 * @csspart hue-pointer - A hue pointer element.
 * @csspart saturation-pointer - A saturation pointer element.
 */
class HexColorPicker extends _lib_entrypoints_hex_js__WEBPACK_IMPORTED_MODULE_0__["HexBase"] {
}
customElements.define('hex-color-picker', HexColorPicker);
//# sourceMappingURL=hex-color-picker.js.map

/***/ }),

/***/ "./node_modules/vanilla-colorful/lib/components/color-picker.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vanilla-colorful/lib/components/color-picker.js ***!
  \**********************************************************************/
/*! exports provided: $render, ColorPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$render", function() { return $render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPicker", function() { return ColorPicker; });
/* harmony import */ var _utils_compare_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/compare.js */ "./node_modules/vanilla-colorful/lib/utils/compare.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dom.js */ "./node_modules/vanilla-colorful/lib/utils/dom.js");
/* harmony import */ var _hue_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hue.js */ "./node_modules/vanilla-colorful/lib/components/hue.js");
/* harmony import */ var _saturation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saturation.js */ "./node_modules/vanilla-colorful/lib/components/saturation.js");
/* harmony import */ var _styles_color_picker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/color-picker.js */ "./node_modules/vanilla-colorful/lib/styles/color-picker.js");





const tpl = Object(_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__["createTemplate"])(`
<style>${_styles_color_picker_js__WEBPACK_IMPORTED_MODULE_4__["default"]}</style>
<vc-saturation part="saturation" exportparts="pointer: saturation-pointer"></vc-saturation>
<vc-hue part="hue" exportparts="pointer: hue-pointer"></vc-hue>
`);
const $h = Symbol('h');
const $s = Symbol('s');
const $isSame = Symbol('same');
const $color = Symbol('color');
const $hsva = Symbol('hsva');
const $change = Symbol('change');
const $render = Symbol('render');
class ColorPicker extends HTMLElement {
    constructor() {
        super();
        const root = Object(_utils_dom_js__WEBPACK_IMPORTED_MODULE_1__["createRoot"])(this, tpl);
        root.addEventListener('move', this);
        this[$s] = root.children[1];
        this[$h] = root.children[2];
    }
    static get observedAttributes() {
        return ['color'];
    }
    get color() {
        return this[$color];
    }
    set color(newColor) {
        if (!this[$isSame](newColor)) {
            const newHsva = this.colorModel.toHsva(newColor);
            this[$render](newHsva);
            this[$change](newColor, newHsva);
        }
    }
    connectedCallback() {
        // A user may set a property on an _instance_ of an element,
        // before its prototype has been connected to this class.
        // If so, we need to run it through the proper class setter.
        if (this.hasOwnProperty('color')) {
            const value = this.color;
            delete this['color'];
            this.color = value;
        }
        else if (!this.color) {
            this.color = this.colorModel.defaultColor;
        }
    }
    attributeChangedCallback(_attr, _oldVal, newVal) {
        const color = this.colorModel.fromAttr(newVal);
        if (!this[$isSame](color)) {
            this.color = color;
        }
    }
    handleEvent(event) {
        // Merge the current HSV color object with updated params.
        const newHsva = Object.assign({}, this[$hsva], event.detail);
        this[$render](newHsva);
        let newColor;
        if (!Object(_utils_compare_js__WEBPACK_IMPORTED_MODULE_0__["equalColorObjects"])(newHsva, this[$hsva]) &&
            !this[$isSame]((newColor = this.colorModel.fromHsva(newHsva)))) {
            this[$change](newColor, newHsva);
        }
    }
    [$isSame](color) {
        return this.color && this.colorModel.equal(color, this.color);
    }
    [$render](hsva) {
        this[$s].hsva = hsva;
        this[$h].hue = hsva.h;
    }
    [$change](color, hsva) {
        this[$color] = color;
        this[$hsva] = hsva;
        this.dispatchEvent(new CustomEvent('color-changed', { detail: { value: color } }));
    }
}
//# sourceMappingURL=color-picker.js.map

/***/ }),

/***/ "./node_modules/vanilla-colorful/lib/components/hue.js":
/*!*************************************************************!*\
  !*** ./node_modules/vanilla-colorful/lib/components/hue.js ***!
  \*************************************************************/
/*! exports provided: Hue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hue", function() { return Hue; });
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/vanilla-colorful/lib/components/interactive.js");
/* harmony import */ var _utils_convert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/convert.js */ "./node_modules/vanilla-colorful/lib/utils/convert.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom.js */ "./node_modules/vanilla-colorful/lib/utils/dom.js");
/* harmony import */ var _utils_clamp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/clamp.js */ "./node_modules/vanilla-colorful/lib/utils/clamp.js");
/* harmony import */ var _styles_hue_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/hue.js */ "./node_modules/vanilla-colorful/lib/styles/hue.js");





const template = Object(_utils_dom_js__WEBPACK_IMPORTED_MODULE_2__["createTemplate"])(`<style>${_styles_hue_js__WEBPACK_IMPORTED_MODULE_4__["default"]}</style>`);
class Hue extends _interactive_js__WEBPACK_IMPORTED_MODULE_0__["Interactive"] {
    constructor() {
        super();
        Object(_utils_dom_js__WEBPACK_IMPORTED_MODULE_2__["createRoot"])(this, template);
        this.setAttribute('aria-label', 'Hue');
        this.setAttribute('aria-valuemin', '0');
        this.setAttribute('aria-valuemax', '360');
    }
    connectedCallback() {
        if (this.hasOwnProperty('hue')) {
            const value = this.hue;
            delete this['hue'];
            this.hue = value;
        }
    }
    get xy() {
        return false;
    }
    get hue() {
        return this._h;
    }
    set hue(h) {
        this._h = h;
        this.setStyles({
            left: `${(h / 360) * 100}%`,
            color: Object(_utils_convert_js__WEBPACK_IMPORTED_MODULE_1__["hsvaToHslString"])({ h, s: 100, v: 100, a: 1 })
        });
        this.setAttribute('aria-valuenow', `${Math.round(h)}`);
    }
    getMove(interaction, key) {
        // Hue measured in degrees of the color circle ranging from 0 to 360
        return { h: key ? Object(_utils_clamp_js__WEBPACK_IMPORTED_MODULE_3__["clamp"])(this.hue + interaction.left * 360, 0, 360) : 360 * interaction.left };
    }
}
customElements.define('vc-hue', Hue);
//# sourceMappingURL=hue.js.map

/***/ }),

/***/ "./node_modules/vanilla-colorful/lib/components/interactive.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vanilla-colorful/lib/components/interactive.js ***!
  \*********************************************************************/
/*! exports provided: Interactive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interactive", function() { return Interactive; });
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom.js */ "./node_modules/vanilla-colorful/lib/utils/dom.js");
/* harmony import */ var _utils_clamp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/clamp.js */ "./node_modules/vanilla-colorful/lib/utils/clamp.js");
/* harmony import */ var _styles_interactive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/interactive.js */ "./node_modules/vanilla-colorful/lib/styles/interactive.js");



const template = Object(_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__["createTemplate"])(`<style>${_styles_interactive_js__WEBPACK_IMPORTED_MODULE_2__["default"]}</style><div id="interactive"><div part="pointer"></div></div>`);
let hasTouched = false;
// Check if an event was triggered by touch
const isTouch = (e) => 'touches' in e;
// Prevent mobile browsers from handling mouse events (conflicting with touch ones).
// If we detected a touch interaction before, we prefer reacting to touch events only.
const isValid = (event) => {
    if (hasTouched && !isTouch(event))
        return false;
    if (!hasTouched)
        hasTouched = isTouch(event);
    return true;
};
const fireMove = (target, interaction, key) => {
    target.dispatchEvent(new CustomEvent('move', {
        bubbles: true,
        detail: target.getMove(interaction, key)
    }));
};
const pointerMove = (target, event) => {
    const pointer = isTouch(event) ? event.touches[0] : event;
    const rect = target.getBoundingClientRect();
    fireMove(target, {
        left: Object(_utils_clamp_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])((pointer.pageX - (rect.left + window.pageXOffset)) / rect.width),
        top: Object(_utils_clamp_js__WEBPACK_IMPORTED_MODULE_1__["clamp"])((pointer.pageY - (rect.top + window.pageYOffset)) / rect.height)
    });
};
const keyMove = (target, event) => {
    // We use `keyCode` instead of `key` to reduce the size of the library.
    const keyCode = event.keyCode;
    // Ignore all keys except arrow ones, Page Up, Page Down, Home and End.
    if (keyCode > 40 || (target.xy && keyCode < 37) || keyCode < 33)
        return;
    // Do not scroll page by keys when color picker element has focus.
    event.preventDefault();
    // Send relative offset to the parent component.
    fireMove(target, {
        left: keyCode === 39 // Arrow Right
            ? 0.01
            : keyCode === 37 // Arrow Left
                ? -0.01
                : keyCode === 34 // Page Down
                    ? 0.05
                    : keyCode === 33 // Page Up
                        ? -0.05
                        : keyCode === 35 // End
                            ? 1
                            : keyCode === 36 // Home
                                ? -1
                                : 0,
        top: keyCode === 40 // Arrow down
            ? 0.01
            : keyCode === 38 // Arrow Up
                ? -0.01
                : 0
    }, true);
};
class Interactive extends HTMLElement {
    constructor() {
        super();
        this.pointer = Object(_utils_dom_js__WEBPACK_IMPORTED_MODULE_0__["createRoot"])(this, template).querySelector('[part=pointer]').style;
        this.addEventListener('mousedown', this);
        this.addEventListener('touchstart', this);
        this.addEventListener('keydown', this);
        this.setAttribute('role', 'slider');
        this.setAttribute('tabindex', '0');
    }
    set dragging(state) {
        const toggleEvent = state ? document.addEventListener : document.removeEventListener;
        toggleEvent(hasTouched ? 'touchmove' : 'mousemove', this);
        toggleEvent(hasTouched ? 'touchend' : 'mouseup', this);
    }
    handleEvent(event) {
        switch (event.type) {
            case 'mousedown':
            case 'touchstart':
                event.preventDefault();
                // event.button is 0 in mousedown for left button activation
                if (!isValid(event) || (!hasTouched && event.button != 0))
                    return;
                pointerMove(this, event);
                this.dragging = true;
                break;
            case 'mousemove':
            case 'touchmove':
                event.preventDefault();
                pointerMove(this, event);
                break;
            case 'mouseup':
            case 'touchend':
                this.dragging = false;
                break;
            case 'keydown':
                keyMove(this, event);
                break;
        }
    }
    setStyles(properties) {
        for (const p in properties) {
            this.pointer.setProperty(p, properties[p]);
        }
    }
}
//# sourceMappingURL=interactive.js.map

/***/ }),

/***/ "./node_modules/vanilla-colorful/lib/components/saturation.js":
/*!********************************************************************!*\
  !*** ./node_modules/vanilla-colorful/lib/components/saturation.js ***!
  \********************************************************************/
/*! exports provided: Saturation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Saturation", function() { return Saturation; });
/* harmony import */ var _interactive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactive.js */ "./node_modules/vanilla-colorful/lib/components/interactive.js");
/* harmony import */ var _utils_convert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/convert.js */ "./node_modules/vanilla-colorful/lib/utils/convert.js");
/* harmony import */ var _utils_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/dom.js */ "./node_modules/vanilla-colorful/lib/utils/dom.js");
/* harmony import */ var _utils_clamp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/clamp.js */ "./node_modules/vanilla-colorful/lib/utils/clamp.js");
/* harmony import */ var _styles_saturation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/saturation.js */ "./node_modules/vanilla-colorful/lib/styles/saturation.js");





const template = Object(_utils_dom_js__WEBPACK_IMPORTED_MODULE_2__["createTemplate"])(`<style>${_styles_saturation_js__WEBPACK_IMPORTED_MODULE_4__["default"]}</style>`);
class Saturation extends _interactive_js__WEBPACK_IMPORTED_MODULE_0__["Interactive"] {
    constructor() {
        super();
        Object(_utils_dom_js__WEBPACK_IMPORTED_MODULE_2__["createRoot"])(this, template);
        this.setAttribute('aria-label', 'Color');
    }
    connectedCallback() {
        if (this.hasOwnProperty('hsva')) {
            const value = this.hsva;
            delete this['hsva'];
            this.hsva = value;
        }
    }
    get xy() {
        return true;
    }
    get hsva() {
        return this._hsva;
    }
    set hsva(hsva) {
        this._hsva = hsva;
        this.style.backgroundColor = Object(_utils_convert_js__WEBPACK_IMPORTED_MODULE_1__["hsvaToHslString"])({ h: hsva.h, s: 100, v: 100, a: 1 });
        this.setStyles({
            top: `${100 - hsva.v}%`,
            left: `${hsva.s}%`,
            color: Object(_utils_convert_js__WEBPACK_IMPORTED_MODULE_1__["hsvaToHslString"])(hsva)
        });
        this.setAttribute('aria-valuetext', `Saturation ${Math.round(hsva.s)}%, Brightness ${Math.round(hsva.v)}%`);
    }
    getMove(interaction, key) {
        // Saturation and brightness always fit into [0, 100] range
        return {
            s: key ? Object(_utils_clamp_js__WEBPACK_IMPORTED_MODULE_3__["clamp"])(this.hsva.s + interaction.left * 100, 0, 100) : interaction.left * 100,
            v: key
                ? Object(_utils_clamp_js__WEBPACK_IMPORTED_MODULE_3__["clamp"])(this.hsva.v - interaction.top * 100, 0, 100)
                : Math.round(100 - interaction.top * 100)
        };
    }
}
customElements.define('vc-saturation', Saturation);
//# sourceMappingURL=saturation.js.map

/***/ }),

/***/ "./node_modules/vanilla-colorful/lib/entrypoints/hex.js":
/*!**************************************************************!*\
  !*** ./node_modules/vanilla-colorful/lib/entrypoints/hex.js ***!
  \**************************************************************/
/*! exports provided: HexBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HexBase", function() { return HexBase; });
/* harmony import */ var _components_color_picker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/color-picker.js */ "./node_modules/vanilla-colorful/lib/components/color-picker.js");
/* harmony import */ var _utils_convert_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/convert.js */ "./node_modules/vanilla-colorful/lib/utils/convert.js");
/* harmony import */ var _utils_compare_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/compare.js */ "./node_modules/vanilla-colorful/lib/utils/compare.js");



const colorModel = {
    defaultColor: '#000',
    toHsva: _utils_convert_js__WEBPACK_IMPORTED_MODULE_1__["hexToHsva"],
    fromHsva: _utils_convert_js__WEBPACK_IMPORTED_MODULE_1__["hsvaToHex"],
    equal: _utils_compare_js__WEBPACK_IMPORTED_MODULE_2__["equalHex"],
    fromAttr: (color) => color
};
class HexBase extends _components_color_picker_js__WEBPACK_IMPORTED_MODULE_0__["ColorPicker"] {
    get colorModel() {
        return colorModel;
    }
}
//# sourceMappingURL=hex.js.map

/***/ }),

/***/ "./node_modules/vanilla-colorful/lib/styles/color-picker.js":
/*!******************************************************************!*\
  !*** ./node_modules/vanilla-colorful/lib/styles/color-picker.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`:host{display:flex;flex-direction:column;position:relative;width:200px;height:200px;user-select:none;-webkit-user-select:none;cursor:default}:host([hidden]){display:none !important}[part]:last-child{border-radius:0 0 8px 8px}`);
//# sourceMappingURL=color-picker.js.map

/***/ }),

/***/ "./node_modules/vanilla-colorful/lib/styles/hue.js":
/*!*********************************************************!*\
  !*** ./node_modules/vanilla-colorful/lib/styles/hue.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`:host{position:relative;bottom:0;left:0;right:0;height:24px;background:linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)}[part=pointer]{top:50%;z-index:2}`);
//# sourceMappingURL=hue.js.map

/***/ }),

/***/ "./node_modules/vanilla-colorful/lib/styles/interactive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vanilla-colorful/lib/styles/interactive.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`:host{outline:none}:host(:focus) [part=pointer]{transform:translate(-50%, -50%) scale(1.1)}#interactive{position:absolute;left:0;top:0;width:100%;height:100%;touch-action:none;user-select:none;-webkit-user-select:none}[part=pointer]{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%, -50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}[part=pointer]::after{display:block;content:"";position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;background-color:currentColor}`);
//# sourceMappingURL=interactive.js.map

/***/ }),

/***/ "./node_modules/vanilla-colorful/lib/styles/saturation.js":
/*!****************************************************************!*\
  !*** ./node_modules/vanilla-colorful/lib/styles/saturation.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (`:host{display:block;position:relative;flex-grow:1;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(to top, #000, rgba(0, 0, 0, 0)),linear-gradient(to right, #fff, rgba(255, 255, 255, 0));box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}[part=pointer]{z-index:3}`);
//# sourceMappingURL=saturation.js.map

/***/ }),

/***/ "./node_modules/vanilla-colorful/lib/utils/clamp.js":
/*!**********************************************************!*\
  !*** ./node_modules/vanilla-colorful/lib/utils/clamp.js ***!
  \**********************************************************/
/*! exports provided: clamp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
// Clamps a value between an upper and lower bound.
// We use ternary operators because it makes the minified code
// 2 times shorter then `Math.min(Math.max(a,b),c)`
const clamp = (number, min = 0, max = 1) => {
    return number > max ? max : number < min ? min : number;
};
//# sourceMappingURL=clamp.js.map

/***/ }),

/***/ "./node_modules/vanilla-colorful/lib/utils/compare.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-colorful/lib/utils/compare.js ***!
  \************************************************************/
/*! exports provided: equalColorObjects, equalColorString, equalHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalColorObjects", function() { return equalColorObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalColorString", function() { return equalColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalHex", function() { return equalHex; });
/* harmony import */ var _convert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert */ "./node_modules/vanilla-colorful/lib/utils/convert.js");

const equalColorObjects = (first, second) => {
    if (first === second)
        return true;
    for (const prop in first) {
        // The following allows for a type-safe calling of this function (first & second have to be HSL, HSV, or RGB)
        // with type-unsafe iterating over object keys. TS does not allow this without an index (`[key: string]: number`)
        // on an object to define how iteration is normally done. To ensure extra keys are not allowed on our types,
        // we must cast our object to unknown (as RGB demands `r` be a key, while `Record<string, x>` does not care if
        // there is or not), and then as a type TS can iterate over.
        if (first[prop] !==
            second[prop])
            return false;
    }
    return true;
};
const equalColorString = (first, second) => {
    return first.replace(/\s/g, '') === second.replace(/\s/g, '');
};
const equalHex = (first, second) => {
    if (first.toLowerCase() === second.toLowerCase())
        return true;
    // To compare colors like `#FFF` and `ffffff` we convert them into RGB objects
    return equalColorObjects(Object(_convert__WEBPACK_IMPORTED_MODULE_0__["hexToRgba"])(first), Object(_convert__WEBPACK_IMPORTED_MODULE_0__["hexToRgba"])(second));
};
//# sourceMappingURL=compare.js.map

/***/ }),

/***/ "./node_modules/vanilla-colorful/lib/utils/convert.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-colorful/lib/utils/convert.js ***!
  \************************************************************/
/*! exports provided: hexToHsva, hexToRgba, hslaStringToHsva, hslStringToHsva, hslaToHsva, hsvaToHex, hsvaToHsla, hsvaToHsvString, hsvaToHsvaString, hsvaToHslString, hsvaToHslaString, hsvaToRgba, hsvaToRgbString, hsvaToRgbaString, hsvaStringToHsva, hsvStringToHsva, rgbaStringToHsva, rgbStringToHsva, rgbaToHex, rgbaToHsva, rgbaToRgb, hslaToHsl, hsvaToHsv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToHsva", function() { return hexToHsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgba", function() { return hexToRgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslaStringToHsva", function() { return hslaStringToHsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslStringToHsva", function() { return hslStringToHsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslaToHsva", function() { return hslaToHsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvaToHex", function() { return hsvaToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvaToHsla", function() { return hsvaToHsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvaToHsvString", function() { return hsvaToHsvString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvaToHsvaString", function() { return hsvaToHsvaString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvaToHslString", function() { return hsvaToHslString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvaToHslaString", function() { return hsvaToHslaString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvaToRgba", function() { return hsvaToRgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvaToRgbString", function() { return hsvaToRgbString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvaToRgbaString", function() { return hsvaToRgbaString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvaStringToHsva", function() { return hsvaStringToHsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvStringToHsva", function() { return hsvStringToHsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaStringToHsva", function() { return rgbaStringToHsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbStringToHsva", function() { return rgbStringToHsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToHex", function() { return rgbaToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToHsva", function() { return rgbaToHsva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbaToRgb", function() { return rgbaToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslaToHsl", function() { return hslaToHsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsvaToHsv", function() { return hsvaToHsv; });
const hexToHsva = (hex) => rgbaToHsva(hexToRgba(hex));
const hexToRgba = (hex) => {
    if (hex[0] === '#')
        hex = hex.substr(1);
    if (hex.length < 6) {
        return {
            r: parseInt(hex[0] + hex[0], 16),
            g: parseInt(hex[1] + hex[1], 16),
            b: parseInt(hex[2] + hex[2], 16),
            a: 1
        };
    }
    return {
        r: parseInt(hex.substr(0, 2), 16),
        g: parseInt(hex.substr(2, 2), 16),
        b: parseInt(hex.substr(4, 2), 16),
        a: 1
    };
};
const hslaStringToHsva = (hslString) => {
    const matcher = /hsla?\((\d+\.?\d*),\s*(\d+\.?\d*)%?,\s*(\d+\.?\d*)%?,?\s*(\d+\.?\d*)?\)/;
    const match = matcher.exec(hslString);
    if (!match)
        return { h: 0, s: 0, v: 0, a: 1 };
    return hslaToHsva({
        h: Number(match[1]),
        s: Number(match[2]),
        l: Number(match[3]),
        a: match[4] !== undefined ? Number(match[4]) : 1
    });
};
const hslStringToHsva = hslaStringToHsva;
const hslaToHsva = ({ h, s, l, a }) => {
    s *= (l < 50 ? l : 100 - l) / 100;
    return {
        h: h,
        s: s > 0 ? ((2 * s) / (l + s)) * 100 : 0,
        v: l + s,
        a
    };
};
const hsvaToHex = (hsva) => rgbaToHex(hsvaToRgba(hsva));
const hsvaToHsla = ({ h, s, v, a }) => {
    const hh = ((200 - s) * v) / 100;
    return {
        h: h,
        s: hh > 0 && hh < 200 ? ((s * v) / 100 / (hh <= 100 ? hh : 200 - hh)) * 100 : 0,
        l: hh / 2,
        a
    };
};
const hsvaToHsvString = (hsv) => {
    const { h, s, v } = hsv;
    return `hsv(${h}, ${s}%, ${v}%)`;
};
const hsvaToHsvaString = (hsva) => {
    const { h, s, v, a } = hsva;
    return `hsva(${h}, ${s}%, ${v}%, ${a})`;
};
const hsvaToHslString = (hsva) => {
    const { h, s, l } = hsvaToHsla(hsva);
    return `hsl(${h}, ${s}%, ${l}%)`;
};
const hsvaToHslaString = (hsva) => {
    const { h, s, l, a } = hsvaToHsla(hsva);
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};
const hsvaToRgba = ({ h, s, v, a }) => {
    h = (h / 360) * 6;
    s = s / 100;
    v = v / 100;
    const hh = Math.floor(h), b = v * (1 - s), c = v * (1 - (h - hh) * s), d = v * (1 - (1 - h + hh) * s), module = hh % 6;
    return {
        r: Math.round([v, c, b, b, d, v][module] * 255),
        g: Math.round([d, v, v, c, b, b][module] * 255),
        b: Math.round([b, b, d, v, v, c][module] * 255),
        a
    };
};
const hsvaToRgbString = (hsva) => {
    const { r, g, b } = hsvaToRgba(hsva);
    return `rgb(${r}, ${g}, ${b})`;
};
const hsvaToRgbaString = (hsva) => {
    const { r, g, b, a } = hsvaToRgba(hsva);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};
const hsvaStringToHsva = (hsvString) => {
    const matcher = /hsva?\((\d+\.?\d*),\s*(\d+\.?\d*)%?,\s*(\d+\.?\d*)%?,?\s*(\d+\.?\d*)?\)/;
    const match = matcher.exec(hsvString);
    if (!match)
        return { h: 0, s: 0, v: 0, a: 1 };
    return {
        h: Number(match[1]),
        s: Number(match[2]),
        v: Number(match[3]),
        a: match[4] !== undefined ? Number(match[4]) : 1
    };
};
const hsvStringToHsva = hsvaStringToHsva;
const rgbaStringToHsva = (rgbaString) => {
    const matcher = /rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d+\.?\d*)?\)/;
    const match = matcher.exec(rgbaString);
    if (!match)
        return { h: 0, s: 0, v: 0, a: 1 };
    return rgbaToHsva({
        r: Number(match[1]),
        g: Number(match[2]),
        b: Number(match[3]),
        a: match[4] !== undefined ? Number(match[4]) : 1
    });
};
const rgbStringToHsva = rgbaStringToHsva;
const format = (number) => {
    const hex = number.toString(16);
    return hex.length < 2 ? '0' + hex : hex;
};
const rgbaToHex = ({ r, g, b }) => {
    return '#' + format(r) + format(g) + format(b);
};
const rgbaToHsva = ({ r, g, b, a }) => {
    const max = Math.max(r, g, b);
    const delta = max - Math.min(r, g, b);
    // prettier-ignore
    const hh = delta
        ? max === r
            ? (g - b) / delta
            : max === g
                ? 2 + (b - r) / delta
                : 4 + (r - g) / delta
        : 0;
    return {
        h: Math.round(60 * (hh < 0 ? hh + 6 : hh)),
        s: Math.round(max ? (delta / max) * 100 : 0),
        v: Math.round((max / 255) * 100),
        a
    };
};
const rgbaToRgb = ({ r, g, b }) => ({ r, g, b });
const hslaToHsl = ({ h, s, l }) => ({ h, s, l });
const hsvaToHsv = ({ h, s, v }) => ({ h, s, v });
//# sourceMappingURL=convert.js.map

/***/ }),

/***/ "./node_modules/vanilla-colorful/lib/utils/dom.js":
/*!********************************************************!*\
  !*** ./node_modules/vanilla-colorful/lib/utils/dom.js ***!
  \********************************************************/
/*! exports provided: createTemplate, createRoot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTemplate", function() { return createTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRoot", function() { return createRoot; });
const createTemplate = (tpl) => {
    const template = document.createElement('template');
    template.innerHTML = tpl;
    return template;
};
const createRoot = (node, tpl) => {
    const root = node.shadowRoot || node.attachShadow({ mode: 'open' });
    root.appendChild(tpl.content.cloneNode(true));
    return root;
};
//# sourceMappingURL=dom.js.map

/***/ })

}]);