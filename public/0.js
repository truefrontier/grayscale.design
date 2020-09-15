(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-color-gradient-picker/dist/index.css?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-color-gradient-picker/dist/index.css?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  box-sizing: border-box;\n}\n.ui-color-picker {\n  margin: 8px;\n  background-color: #FFFFFF;\n  display: flex;\n  flex-direction: column;\n  width: 280px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.ui-color-picker .gradient-controls {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n  margin-bottom: 8px;\n  height: 24px;\n  padding: 0 16px;\n}\n.ui-color-picker .gradient-controls .gradient-type {\n  flex: 1;\n  display: flex;\n}\n.ui-color-picker .gradient-controls .gradient-type .gradient-type-item {\n  height: 28px;\n  width: 28px;\n  border-radius: 50%;\n  position: relative;\n  cursor: pointer;\n}\n.ui-color-picker .gradient-controls .gradient-type .gradient-type-item.active::after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: -3px;\n  right: -3px;\n  border: 2px solid #1F2667;\n  border-radius: 50%;\n}\n.ui-color-picker .gradient-controls .gradient-type .gradient-type-item.liner-gradient {\n  background: linear-gradient(270deg, #FFFFFF 0%, #1F2667 100%);\n}\n.ui-color-picker .gradient-controls .gradient-type .gradient-type-item.radial-gradient {\n  margin-left: 8px;\n  background: radial-gradient(circle, #FFFFFF 0%, #1F2667 100%);\n}\n.ui-color-picker .gradient-controls .gradient-degrees-options {\n  position: relative;\n}\n.ui-color-picker .gradient-controls .gradient-degrees-options .gradient-degrees {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 28px;\n  height: 28px;\n  border: 3px solid #1F2667;\n  border-radius: 18px;\n  margin-right: 54px;\n}\n.ui-color-picker .gradient-controls .gradient-degrees-options .gradient-degrees .gradient-degree-center {\n  position: relative;\n  width: 6px;\n  height: 22px;\n  pointer-events: none;\n}\n.ui-color-picker .gradient-controls .gradient-degrees-options .gradient-degrees .gradient-degree-center .gradient-degree-pointer {\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  top: 2px;\n  border-radius: 3px;\n  background: #1F2667;\n}\n.ui-color-picker .gradient-controls .gradient-degrees-options .gradient-degree-value {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 48px;\n  height: 28px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #bbbfc5;\n  border-radius: 6px;\n}\n.ui-color-picker .gradient-controls .gradient-degrees-options .gradient-degree-value p {\n  text-align: center;\n  padding: 0 6px;\n}\n.ui-color-picker .picker-area {\n  display: flex;\n  flex-direction: column;\n  padding: 0 16px;\n}\n.ui-color-picker .picker-area.gradient-tab .picking-area {\n  margin-bottom: 10px;\n}\n.ui-color-picker .picker-area .picking-area {\n  width: 100%;\n  height: 160px;\n  margin-bottom: 16px;\n  position: relative;\n  border-radius: 8px;\n}\n.ui-color-picker .picker-area .picking-area:hover {\n  cursor: default;\n}\n.ui-color-picker .picker-area .picking-area .picking-area-overlay1 {\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);\n  border-radius: 3px;\n}\n.ui-color-picker .picker-area .picking-area .picking-area-overlay1 .picking-area-overlay2 {\n  height: 100%;\n  width: 100%;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, black 100%);\n  border-radius: 8px;\n}\n.ui-color-picker .picker-area .preview {\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 16px;\n}\n.ui-color-picker .picker-area .preview .preview-box {\n  box-sizing: border-box;\n  height: 36px;\n  width: 36px;\n  border-radius: 8px;\n  border: 1px solid #EBEDF5;\n}\n.ui-color-picker .picker-area .preview .color-hue-alpha {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  margin-left: 6px;\n}\n.ui-color-picker .picker-area .preview .color-hue-alpha .hue {\n  width: 100%;\n  position: relative;\n  border-radius: 10px;\n  margin-bottom: 8px;\n  padding: 0 7px;\n  background-color: red;\n  cursor: pointer;\n}\n.ui-color-picker .picker-area .preview .color-hue-alpha .hue .hue-area {\n  position: relative;\n  height: 14px;\n  background: linear-gradient(to right, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff00ff, #ff0080, #ff0000);\n}\n.ui-color-picker .picker-area .preview .color-hue-alpha .alpha {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  border-radius: 10px;\n  height: 14px;\n  cursor: pointer;\n}\n.ui-color-picker .picker-area .preview .color-hue-alpha .alpha .gradient {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.ui-color-picker .picker-area .preview .color-hue-alpha .alpha .alpha-area {\n  width: 100%;\n  height: 100%;\n  background: url(" + escape(__webpack_require__(/*! ./assets/images/alpha-background.svg */ "./node_modules/vue-color-gradient-picker/dist/assets/images/alpha-background.svg")) + ");\n  background-size: auto;\n  background-position: 50% 50%;\n  border-radius: 10px;\n  padding: 0 7px;\n}\n.ui-color-picker .picker-area .preview .color-hue-alpha .alpha .alpha-area .alpha-mask {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.ui-color-picker .picker-area .gradient {\n  width: 100%;\n  height: 14px;\n  position: relative;\n  cursor: pointer;\n  border-radius: 10px;\n  margin-bottom: 8px;\n  padding: 0 7px;\n}\n.ui-color-picker .picker-area .gradient .gradient-slider-container {\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n.ui-color-picker .picker-area .picker-pointer {\n  position: absolute;\n  top: 1px;\n  height: 12px;\n  width: 12px;\n  border: 1px solid #FFFFFF;\n  background: transparent;\n  border-radius: 50%;\n  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.3);\n}\n.ui-color-picker .picker-area .picker-pointer .child-point {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 3px;\n  width: 3px;\n  background: #FFFFFF;\n  border-radius: 50%;\n  opacity: 0;\n  transition: opacity 0.33s;\n}\n.ui-color-picker .picker-area .picker-pointer .child-point.active {\n  opacity: 1;\n}\n.ui-color-picker .color-preview-area {\n  margin-bottom: 8px;\n  padding: 0 16px;\n}\n.ui-color-picker .color-preview-area .input-group {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.ui-color-picker .color-preview-area .input-group .uc-field-group:not(:last-child) {\n  margin-right: 7px;\n}\n.ui-color-picker .color-preview-area .hex {\n  width: 65px;\n}\n.ui-color-picker .color-preview-area .rgb {\n  width: 40px;\n}\n.ui-color-picker .colors {\n  padding: 3px 16px 0;\n}\n.ui-color-picker .colors .colors-label {\n  display: flex;\n  align-items: center;\n  margin-bottom: 4px;\n  cursor: pointer;\n}\n.ui-color-picker .colors .colors-label .uc-icon {\n  margin-right: 8px;\n  transition: transform 0.3s;\n}\n.ui-color-picker .colors .colors-label .tp-text {\n  text-transform: uppercase;\n}\n.ui-color-picker .colors .colors-label.show + .colors-item-container {\n  max-height: 80px;\n  padding-bottom: 16px;\n}\n.ui-color-picker .colors .colors-label.show .uc-icon {\n  transform: rotate(-90deg);\n}\n.ui-color-picker .colors .template {\n  display: flex;\n  flex-direction: column;\n}\n.ui-color-picker .colors .global {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n.ui-color-picker .colors .colors-item-container {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  transition: max-height 0.3s, padding-bottom 0.3s;\n  max-height: 0;\n  overflow: hidden;\n}\n.ui-color-picker .colors .colors-item-container .colors-item {\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n  background-color: #EBEDF5;\n  cursor: pointer;\n  position: relative;\n  margin-top: 4px;\n  flex-shrink: 0;\n}\n.ui-color-picker .colors .colors-item-container .colors-item:not(.plus) {\n  border: 1px solid #EBEDF5;\n}\n.ui-color-picker .colors .colors-item-container .colors-item.empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.ui-color-picker .colors .colors-item-container .colors-item.empty .line {\n  width: 2px;\n  height: 16px;\n  background-color: #8892B3;\n  border-radius: 1px;\n  transform: rotate(45deg);\n}\n.ui-color-picker .colors .colors-item-container .colors-item.plus {\n  margin-bottom: 4px;\n}\n.ui-color-picker .colors .colors-item-container .colors-item.plus .uc-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 1;\n}\n.ui-color-picker .colors .colors-item-container .colors-item:not(:first-child):not(:nth-child(9)) {\n  margin-left: 8px;\n}\n.ui-color-picker .colors .colors-item-container .colors-item .uc-icon {\n  position: absolute;\n  right: -8px;\n  top: -3px;\n  opacity: 0;\n  transition: opacity 0.3s;\n}\n.ui-color-picker .colors .colors-item-container .colors-item:hover .uc-icon {\n  opacity: 1;\n}\n.ui-color-picker .colors .colors-item-container .colors-item.active::after {\n  content: '';\n  display: block;\n  position: absolute;\n  top: -3px;\n  bottom: -3px;\n  left: -3px;\n  right: -3px;\n  border: 2px solid #8892B3;\n  border-radius: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-color-gradient-picker/dist/index.css?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-color-gradient-picker/dist/index.css?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!./index.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-color-gradient-picker/dist/index.css?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/vue-color-gradient-picker/dist/assets/images/alpha-background.svg":
/*!****************************************************************************************!*\
  !*** ./node_modules/vue-color-gradient-picker/dist/assets/images/alpha-background.svg ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/vendor/vue-color-gradient-picker/dist/alpha-background.svg?4291733509f3aa56eb797bcf5ca831d7";

/***/ }),

/***/ "./node_modules/vue-color-gradient-picker/dist/index-cjs.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue-color-gradient-picker/dist/index-cjs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js"));
var vueFragment = __webpack_require__(/*! vue-fragment */ "./node_modules/vue-fragment/dist/vue-fragment.esm.js");

function rgbToHSv(ref) {
    var red = ref.red;
    var green = ref.green;
    var blue = ref.blue;

    var rr;
    var gg;
    var bb;
    var h;
    var s;

    var rabs = red / 255;
    var gabs = green / 255;
    var babs = blue / 255;
    var v = Math.max(rabs, gabs, babs);
    var diff = v - Math.min(rabs, gabs, babs);
    var diffc = function (c) { return (v - c) / 6 / diff + 1 / 2; };
    if (diff === 0) {
        h = 0;
        s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        } else if (h > 1) {
            h -= 1;
        }
    }

    return {
        hue: Math.round(h * 360),
        saturation: Math.round(s * 100),
        value: Math.round(v * 100),
    };
}

function getRgbByHue(hue) {
    var C = 1;
    var H = hue / 60;
    var X = C * (1 - Math.abs(H % 2 - 1));
    var m = 0;
    var precision = 255;
    var r = 0;
    var g = 0;
    var b = 0;

    C = (C + m) * precision | 0;
    X = (X + m) * precision | 0;

    if (H >= 0 && H < 1) {
        r = C | 0;
        g = X | 0;
        b = m | 0;
    }
    if (H >= 1 && H < 2) {
        r = X | 0;
        g = C | 0;
        b = m | 0;
    }
    if (H >= 2 && H < 3) {
        r = m | 0;
        g = C | 0;
        b = X | 0;
    }
    if (H >= 3 && H < 4) {
        r = m | 0;
        g = X | 0;
        b = C | 0;
    }
    if (H >= 4 && H < 5) {
        r = X | 0;
        g = m | 0;
        b = C | 0;
    }
    if (H >= 5 && H <= 6) {
        r = C | 0;
        g = m | 0;
        b = X | 0;
    }

    return {
        red: r,
        green: g,
        blue: b,
    };
}

function isValidRGBValue(value) {
    return (typeof (value) === 'number' && Number.isNaN(value) === false && value >= 0 && value <= 255);
}

function setRGBA(red, green, blue, alpha) {
    if (isValidRGBValue(red) && isValidRGBValue(green) && isValidRGBValue(blue)) {
        var color = {
            red: red | 0,
            green: green | 0,
            blue: blue | 0,
        };

        if (isValidRGBValue(alpha) === true) {
            color.alpha = alpha | 0;
        }

        // RGBToHSL(color.r, color.g, color.b);

        return color;
    }
}

function hsvToRgb(hue, saturation, value) {
    value /= 100;
    var sat = saturation / 100;
    var C = sat * value;
    var H = hue / 60;
    var X = C * (1 - Math.abs(H % 2 - 1));
    var m = value - C;
    var precision = 255;

    C = (C + m) * precision | 0;
    X = (X + m) * precision | 0;
    m = m * precision | 0;

    if (H >= 1 && H < 2) {
        return setRGBA(X, C, m);
    }
    if (H >= 2 && H < 3) {
        return setRGBA(m, C, X);
    }
    if (H >= 3 && H < 4) {
        return setRGBA(m, X, C);
    }
    if (H >= 4 && H < 5) {
        return setRGBA(X, m, C);
    }
    if (H >= 5 && H <= 6) {
        return setRGBA(C, m, X);
    }

    return setRGBA(C, X, m);
}

function changePicker(x, y, height, width, hue) {
    if (x > width) { x = width; }
    if (y > height) { y = height; }
    if (x < 0) { x = 0; }
    if (y < 0) { y = 0; }
    var value = 100 - (y * 100 / height) | 0;
    var saturation = x * 100 / width | 0;
    return Object.assign({}, hsvToRgb(hue, saturation, value),
        {saturation: saturation,
        value: value});
}

function getHue(offsetX, width, saturation, value) {
    var hue = ((360 * offsetX) / width) | 0;

    hue = hue < 0 ? 0 : hue > 360 ? 360 : hue;

    return Object.assign({}, hsvToRgb(hue, saturation, value),
        {hue: hue});
}

function getAlpha(value, width) {
    value = Number((value / width).toFixed(2));

    return value > 1 ? 1 : value < 0 ? 0 : value;
}

function rgbToHex(red, green, blue) {
    var r16 = red.toString(16);
    var g16 = green.toString(16);
    var b16 = blue.toString(16);

    if (red < 16) { r16 = "0" + r16; }
    if (green < 16) { g16 = "0" + g16; }
    if (blue < 16) { b16 = "0" + b16; }

    return r16 + g16 + b16;
}

var hexRegexp = /(^#{0,1}[0-9A-F]{6}$)|(^#{0,1}[0-9A-F]{3}$)|(^#{0,1}[0-9A-F]{8}$)/i;

var regexp = /([0-9A-F])([0-9A-F])([0-9A-F])/i;

function hexToRgb(value) {
    var valid = hexRegexp.test(value);

    if (valid) {
        if (value[0] === '#') { value = value.slice(1, value.length); }

        if (value.length === 3) { value = value.replace(regexp, '$1$1$2$2$3$3'); }

        var red = parseInt(value.substr(0, 2), 16);
        var green = parseInt(value.substr(2, 2), 16);
        var blue = parseInt(value.substr(4, 2), 16);
        var alpha = parseInt(value.substr(6, 2), 16) / 255;

        var color = setRGBA(red, green, blue, alpha);
        var hsv = rgbToHSv(Object.assign({}, color));

        return Object.assign({}, color,
            hsv);
    }

    return false;
}

function updateGradientActivePercent(offsetX, width) {
    var leftPercent = (offsetX * 100) / width;
    return leftPercent < 0 ? 0 : leftPercent > 100 ? 100 : leftPercent;
}

function calculateDegree(x, y, centerX, centerY) {
    var radians = Math.atan2(x - centerX, y - centerY);
    return (radians * (180 / Math.PI) * -1) + 180;
}

function getRightValue(newValue, oldValue) {
    return (!newValue && newValue !== 0) ? oldValue : newValue;
}

function generateSolidStyle(red, green, blue, alpha) {
    return ("rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")");
}

function generateGradientStyle(points, type, degree) {
    var style = '';
    var sortedPoints = points.slice();

    sortedPoints.sort(function (a, b) { return a.left - b.left; });

    if (type === 'linear') {
        style = "linear-gradient(" + degree + "deg,";
    } else {
        style = 'radial-gradient(';
    }

    sortedPoints.forEach(function (point, index) {
        style += "rgba(" + (point.red) + ", " + (point.green) + ", " + (point.blue) + ", " + (point.alpha) + ") " + (point.left) + "%";

        if (index !== sortedPoints.length - 1) {
            style += ',';
        }
    });

    return style;
}

function useMouseEvents(mouseDownHandler, mouseMoveHandler, mouseUpHandler) {
    return function mouseEventsHandler(event) {
        var positions = mouseDownHandler(event);

        function onMouseMove(event) {
            positions = mouseMoveHandler(event, positions) || positions;
        }

        window.addEventListener('mousemove', onMouseMove);

        window.addEventListener('mouseup', function (event) {
            window.removeEventListener('mousemove', onMouseMove);

            mouseUpHandler && mouseUpHandler(event, positions);
        }, { once: true });
    };
}

var script = {
    name: "Picker",

    props: {
        red: Number,
        green: Number,
        blue: Number,
        alpha: Number,
        hue: Number,
        saturation: Number,
        value: Number,
        updateColor: Function,
    },

    data: function data() {
        return {
            width: 0,
            height: 0,
            mouseEvents: function () {},
        }
    },

    mounted: function mounted() {
        var ref = this.$refs;
        var pickerAreaRef = ref.pickerAreaRef;

        if (pickerAreaRef) {
            this.width = pickerAreaRef.clientWidth;
            this.height = pickerAreaRef.clientHeight;
        }

        this.mouseEvents = useMouseEvents(this.mouseDownHandler, this.mouseMoveHandler, this.mouseUpHandler);
    },

    computed: {
        offsetLeft: function offsetLeft() {
            return ((this.saturation * this.width / 100) | 0) - 6;
        },

        offsetTop: function offsetTop() {
            return (this.height - (this.value * this.height / 100) | 0) - 6;
        },

        pointerStyle: function pointerStyle() {
            return {
                backgroundColor: ("rgb(" + (this.red) + ", " + (this.green) + ", " + (this.blue) + ")"),
                left: ((this.offsetLeft) + "px"),
                top: ((this.offsetTop) + "px"),
            }
        },

        pickerStyle: function pickerStyle() {
            var ref = getRgbByHue(this.hue);
            var red = ref.red;
            var green = ref.green;
            var blue = ref.blue;

            return { backgroundColor: ("rgb(" + red + ", " + green + ", " + blue + ")") };
        }
    },

    methods: {
        mouseDownHandler: function mouseDownHandler(event) {
            var ref = this.$refs.pickerAreaRef.getBoundingClientRect();
            var elementX = ref.x;
            var elementY = ref.y;
            var startX = event.pageX;
            var startY = event.pageY;
            var positionX = startX - elementX;
            var positionY = startY - elementY;

            var color = changePicker(positionX, positionY, this.height, this.width, this.hue);

            this.updateColor(color, 'onStartChange');
            return {
                startX: startX,
                startY: startY,
                positionX: positionX,
                positionY: positionY,

            };
        },

        changeObjectPositions: function changeObjectPositions(event, ref) {
            var startX = ref.startX;
            var startY = ref.startY;
            var positionX = ref.positionX;
            var positionY = ref.positionY;

            var moveX = event.pageX - startX;
            var moveY = event.pageY - startY;
            positionX += moveX;
            positionY += moveY;

            var color = changePicker(positionX, positionY, this.height, this.width, this.hue);

            return {
                positions: {
                    positionX: positionX,
                    positionY: positionY,
                    startX: event.pageX,
                    startY: event.pageY,
                },
                color: color,
            };
        },

        mouseMoveHandler: function mouseMoveHandler(event, ref) {
            var startX = ref.startX;
            var startY = ref.startY;
            var positionX = ref.positionX;
            var positionY = ref.positionY;

            var ref$1 = this.changeObjectPositions(event, {
                startX: startX, startY: startY, positionX: positionX, positionY: positionY,
            });
            var positions = ref$1.positions;
            var color = ref$1.color;

            this.updateColor(color, 'onChange');

            return positions;
        },

        mouseUpHandler: function mouseUpHandler(event, ref) {
            var startX = ref.startX;
            var startY = ref.startY;
            var positionX = ref.positionX;
            var positionY = ref.positionY;

            var ref$1 = this.changeObjectPositions(event, {
                startX: startX, startY: startY, positionX: positionX, positionY: positionY,
            });
            var positions = ref$1.positions;
            var color = ref$1.color;

            this.updateColor(color, 'onEndChange');

            return positions;
        },
    }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      ref: "pickerAreaRef",
      staticClass: "picking-area",
      style: _vm.pickerStyle,
      on: { mousedown: _vm.mouseEvents }
    },
    [
      _c("div", { staticClass: "picking-area-overlay1" }, [
        _c("div", { staticClass: "picking-area-overlay2" }, [
          _c("div", { staticClass: "picker-pointer", style: _vm.pointerStyle })
        ])
      ])
    ]
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

var script$1 = {
    name: "area-preview",

    props: {
        isGradient: Boolean,
        red: Number,
        green: Number,
        blue: Number,
        alpha: Number,
        points: Array,
        gradientDegree: Number,
        gradientType: String,
    },

    computed: {
        style: function style() {
            if (this.isGradient) {
                var style$1 = generateGradientStyle(this.points, this.gradientType, this.gradientDegree);

                return { background: style$1 };
            }

            var style = generateSolidStyle(this.red, this.green, this.blue, this.alpha);

            return { backgroundColor: style };
        }
    }
};

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "preview-area" }, [
    _c("div", { staticClass: "preview-box", style: _vm.style })
  ])
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

var script$2 = {
    name: "hue",

    props: {
        hue: Number,
        saturation: Number,
        value: Number,
        updateColor: Function,
    },

    data: function data() {
        return {
            width: 0,
            mouseEvents: function () {},
        }
    },

    mounted: function mounted() {
        var ref = this.$refs;
        var hueRef = ref.hueRef;

        if (hueRef) {
            this.width = hueRef.clientWidth;
        }

        this.mouseEvents = useMouseEvents(this.mouseDownHandler, this.mouseMoveHandler, this.mouseUpHandler);
    },

    computed: {
        offsetLeft: function offsetLeft() {
            return ((this.hue * this.width / 360) | 0) - 6;
        },

        pointerStyle: function pointerStyle() {
            return {
                left: ((this.offsetLeft) + "px"),
            }
        },
    },

    methods: {
        mouseDownHandler: function mouseDownHandler(event) {
            var elementX = event.currentTarget.getBoundingClientRect().x;
            var startX = event.pageX;
            var positionX = startX - elementX;

            var color = getHue(positionX, this.width, this.saturation, this.value);

            this.updateColor(color, 'onStartChange');

            return {
                startX: startX,
                positionX: positionX,
            };
        },

        changeObjectPositions: function changeObjectPositions(event, ref) {
            var startX = ref.startX;
            var positionX = ref.positionX;

            var moveX = event.pageX - startX;
            positionX += moveX;

            // update value and saturation
            var offsetX = positionX > this.width ? this.width : positionX <= 0 ? 0 : positionX;
            var color = getHue(offsetX, this.width, this.saturation, this.value);

            return {
                positions: {
                    positionX: positionX,
                    startX: event.pageX,
                },
                color: color,
            };
        },

        mouseMoveHandler: function mouseMoveHandler(event, ref) {
            var startX = ref.startX;
            var positionX = ref.positionX;

            var ref$1 = this.changeObjectPositions(event, { startX: startX, positionX: positionX });
            var positions = ref$1.positions;
            var color = ref$1.color;

            this.updateColor(color, 'onChange');

            return positions;
        },

        mouseUpHandler: function mouseUpHandler(event, ref) {
            var startX = ref.startX;
            var positionX = ref.positionX;

            var ref$1 = this.changeObjectPositions(event, { startX: startX, positionX: positionX });
            var positions = ref$1.positions;
            var color = ref$1.color;

            this.updateColor(color, 'onEndChange');

            return positions;
        },
    }
};

/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "hue", on: { mousedown: _vm.mouseEvents } }, [
    _c("div", { ref: "hueRef", staticClass: "hue-area" }, [
      _c("div", { staticClass: "picker-pointer", style: _vm.pointerStyle })
    ])
  ])
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

var script$3 = {
    name: "alpha",

    props: {
        red: Number,
        green: Number,
        blue: Number,
        alpha: Number,
        updateColor: Function,
    },

    data: function data() {
        return {
            width: 0,
            mouseEvents: function () {},
        }
    },

    mounted: function mounted() {
        var ref = this.$refs;
        var alphaMaskRef = ref.alphaMaskRef;

        if (alphaMaskRef) {
            this.width = alphaMaskRef.clientWidth;
        }

        this.mouseEvents = useMouseEvents(this.mouseDownHandler, this.mouseMoveHandler, this.mouseUpHandler);
    },

    computed: {
        offsetLeft: function offsetLeft() {
            return ((this.alpha * this.width) | 0) - 6;
        },

        pointerStyle: function pointerStyle() {
            return {left: ((this.offsetLeft) + "px"),}
        },

        style: function style() {
            return {
                background: ("linear-gradient(to right, rgba(0, 0, 0, 0), rgb(" + (this.red) + ", " + (this.green) + ", " + (this.blue) + "))"),
            }
        }
    },

    methods: {
        mouseDownHandler: function mouseDownHandler(event) {
            var elementX = event.currentTarget.getBoundingClientRect().x;
            var startX = event.pageX;
            var positionX = startX - elementX;

            this.updateColor({ alpha: getAlpha(positionX, this.width) }, 'onStartChange');

            return {
                startX: startX,
                positionX: positionX,

            };
        },

        changeObjectPositions: function changeObjectPositions(event, ref) {
            var startX = ref.startX;
            var positionX = ref.positionX;

            var moveX = event.pageX - startX;
            positionX += moveX;

            var alpha = getAlpha(positionX, this.width);

            return {
                positions: {
                    positionX: positionX,
                    startX: event.pageX,
                },
                alpha: alpha,
            };
        },

        mouseMoveHandler: function mouseMoveHandler(event, ref) {
            var startX = ref.startX;
            var positionX = ref.positionX;

            var ref$1 = this.changeObjectPositions(event, { startX: startX, positionX: positionX });
            var positions = ref$1.positions;
            var alpha = ref$1.alpha;

            this.updateColor({ alpha: alpha }, 'onChange');

            return positions;
        },

        mouseUpHandler: function mouseUpHandler(event, ref) {
            var startX = ref.startX;
            var positionX = ref.positionX;

            var ref$1 = this.changeObjectPositions(event, { startX: startX, positionX: positionX });
            var positions = ref$1.positions;
            var alpha = ref$1.alpha;

            this.updateColor({ alpha: alpha }, 'onEndChange');

            return positions;
        },
    }
};

/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "alpha", on: { mousedown: _vm.mouseEvents } },
    [
      _c("div", { staticClass: "gradient", style: _vm.style }),
      _vm._v(" "),
      _c("div", { staticClass: "alpha-area" }, [
        _c("div", { ref: "alphaMaskRef", staticClass: "alpha-mask" }, [
          _c("div", { staticClass: "picker-pointer", style: _vm.pointerStyle })
        ])
      ])
    ]
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  var __vue_inject_styles__$3 = undefined;
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = undefined;
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$3 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  );

var script$4 = {
    name: "GradientPoint",

    props: {
        point: Object,
        activePointIndex: Number,
        index: Number,
        width: Number,
        positions: Object,
        changeActivePointIndex: Function,
        updateGradientLeft: Function,
        removePoint: Function,
    },

    data: function data() {
        return {
            mouseEvents: function () {},
        }
    },

    mounted: function mounted() {
        this.mouseEvents = useMouseEvents(this.mouseDownHandler, this.mouseMoveHandler, this.mouseUpHandler);
    },

    computed: {
        activeClassName: function activeClassName() {
            return this.activePointIndex === this.index ? ' active' : '';
        },

        pointStyle: function pointStyle() {
            return { left: (((this.point.left * (this.width / 100)) - 6) + "px"), }
        }
    },

    methods: {
        mouseDownHandler: function mouseDownHandler(event) {
            this.changeActivePointIndex(this.index);

            var startX = event.pageX;
            var startY = event.pageY;
            var offsetX = startX - this.positions.x;

            this.updateGradientLeft(this.point.left, this.index, 'onStartChange');

            return {
                startX: startX,
                startY: startY,
                offsetX: offsetX,

            };
        },

        changeObjectPositions: function changeObjectPositions(event, ref) {
            var startX = ref.startX;
            var offsetX = ref.offsetX;

            var moveX = event.pageX - startX;
            offsetX += moveX;
            // update point percent
            var left = updateGradientActivePercent(offsetX, this.width);

            return {
                positions: {
                    offsetX: offsetX,
                    startX: event.pageX,
                },
                left: left,
            };
        },

        mouseMoveHandler: function mouseMoveHandler(event, ref) {
            var startX = ref.startX;
            var offsetX = ref.offsetX;

            var ref$1 = this.changeObjectPositions(event, { startX: startX, offsetX: offsetX });
            var positions = ref$1.positions;
            var left = ref$1.left;

            this.updateGradientLeft(left, this.index, 'onChange');

            return positions;
        },

        mouseUpHandler: function mouseUpHandler(event, ref) {
            var startX = ref.startX;
            var offsetX = ref.offsetX;

            var ref$1 = this.changeObjectPositions(event, { startX: startX, offsetX: offsetX });
            var positions = ref$1.positions;
            var left = ref$1.left;

            this.updateGradientLeft(left, this.index, 'onEndChange');

            return positions;
        },
    }
};

/* script */
var __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      class: "picker-pointer" + _vm.activeClassName,
      style: _vm.pointStyle,
      on: {
        mousedown: _vm.mouseEvents,
        dblclick: function() {
          return _vm.removePoint(_vm.index)
        },
        click: function($event) {
          $event.stopPropagation();
        }
      }
    },
    [_c("span", { class: "child-point" + _vm.activeClassName })]
  )
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  var __vue_inject_styles__$4 = undefined;
  /* scoped */
  var __vue_scope_id__$4 = undefined;
  /* module identifier */
  var __vue_module_identifier__$4 = undefined;
  /* functional template */
  var __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$4 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    undefined,
    undefined,
    undefined
  );

var script$5 = {
    name: "index",

    props: {
        points: Array,
        activePointIndex: Number,
        changeActivePointIndex: Function,
        updateGradientLeft: Function,
        addPoint: Function,
        removePoint: Function,
    },

    data: function data() {
        return {
            width: 0,
            positions: { x: 0, y: 0 }
        }
    },

    components: {
        GradientPoint: __vue_component__$4
    },

    mounted: function mounted() {
        var pointer = this.$refs.pointsContainerRef;

        if (pointer) {
            this.width = pointer.clientWidth;

            var pointerPos = pointer.getBoundingClientRect();

            this.positions = { x: pointerPos.x, y: pointerPos.y };
        }
    },

    computed: {
        pointsStyle: function pointsStyle() {
            var style = generateGradientStyle(this.points, 'linear', 90);

            return { background: style };
        }
    },

    methods: {
        pointsContainerClick: function pointsContainerClick(event) {
            var left = updateGradientActivePercent(event.pageX - this.positions.x, this.width);

            this.addPoint(left);
        },
    }
};

/* script */
var __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    {
      staticClass: "gradient",
      style: _vm.pointsStyle,
      on: { click: _vm.pointsContainerClick }
    },
    [
      _c(
        "div",
        { ref: "pointsContainerRef", staticClass: "gradient-slider-container" },
        _vm._l(_vm.points, function(point, index) {
          return _c("GradientPoint", {
            key: index,
            attrs: {
              activePointIndex: _vm.activePointIndex,
              index: index,
              point: point,
              width: _vm.width,
              positions: _vm.positions,
              changeActivePointIndex: _vm.changeActivePointIndex,
              updateGradientLeft: _vm.updateGradientLeft,
              removePoint: _vm.removePoint
            }
          })
        }),
        1
      )
    ]
  )
};
var __vue_staticRenderFns__$5 = [];
__vue_render__$5._withStripped = true;

  /* style */
  var __vue_inject_styles__$5 = undefined;
  /* scoped */
  var __vue_scope_id__$5 = undefined;
  /* module identifier */
  var __vue_module_identifier__$5 = undefined;
  /* functional template */
  var __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$5 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    undefined,
    undefined,
    undefined
  );

var script$6 = {
    name: "Area",

    props: {
        isGradient: Boolean,
        red: Number,
        green: Number,
        blue: Number,
        alpha: Number,
        hue: Number,
        saturation: Number,
        value: Number,
        updateColor: Function,
        points: Array,
        degree: Number,
        type: String,
        activePointIndex: Number,
        changeGradientControl: Function,
        changeActivePointIndex: Function,
        updateGradientLeft: Function,
        addPoint: Function,
        removePoint: Function,
    },

    components: {
        Picker: __vue_component__,
        GradientPoints: __vue_component__$5,
        Preview: __vue_component__$1,
        Hue: __vue_component__$2,
        Alpha: __vue_component__$3
    },
};

/* script */
var __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "picker-area" },
    [
      _c("Picker", {
        attrs: {
          red: _vm.red,
          green: _vm.green,
          blue: _vm.blue,
          hue: _vm.hue,
          saturation: _vm.saturation,
          value: _vm.value,
          updateColor: _vm.updateColor
        }
      }),
      _vm._v(" "),
      _vm.isGradient
        ? _c("GradientPoints", {
            attrs: {
              type: _vm.type,
              degree: _vm.degree,
              points: _vm.points,
              activePointIndex: _vm.activePointIndex,
              changeActivePointIndex: _vm.changeActivePointIndex,
              updateGradientLeft: _vm.updateGradientLeft,
              addPoint: _vm.addPoint,
              removePoint: _vm.removePoint
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "preview" },
        [
          _c("Preview", {
            attrs: {
              red: _vm.red,
              green: _vm.green,
              blue: _vm.blue,
              alpha: _vm.alpha,
              isGradient: _vm.isGradient,
              points: _vm.points,
              gradientDegree: _vm.degree,
              gradientType: _vm.type
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "color-hue-alpha" },
            [
              _c("Hue", {
                attrs: {
                  hue: _vm.hue,
                  saturation: _vm.saturation,
                  value: _vm.value,
                  updateColor: _vm.updateColor
                }
              }),
              _vm._v(" "),
              _c("Alpha", {
                attrs: {
                  alpha: _vm.alpha,
                  red: _vm.red,
                  green: _vm.green,
                  blue: _vm.blue,
                  updateColor: _vm.updateColor
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__$6 = [];
__vue_render__$6._withStripped = true;

  /* style */
  var __vue_inject_styles__$6 = undefined;
  /* scoped */
  var __vue_scope_id__$6 = undefined;
  /* module identifier */
  var __vue_module_identifier__$6 = undefined;
  /* functional template */
  var __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$6 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    undefined,
    undefined,
    undefined
  );

var script$7 = {
    name: "Input",

    props: {
        value: {
            type: String | Number,
            default: '',
        },
        label: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'text'
        },
        classes: {
            type: String,
            default: ''
        },
        onFocus: {
            type: Function,
            default: function () {
            }
        },
        onBlur: {
            type: Function,
            default: function () {
            }
        },
    },

    model: {
        prop: "value",
        event: "input"
    }
};

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
var __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { class: "input-field " + _vm.classes }, [
    _c("div", { staticClass: "input-container" }, [
      _c("input", {
        class: _vm.type + "-input input",
        domProps: { value: _vm.value },
        on: {
          focus: _vm.onFocus,
          blur: _vm.onBlur,
          input: function($event) {
            return _vm.$emit("input", $event)
          }
        }
      })
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "label" }, [
      _vm._v("\n        " + _vm._s(_vm.label) + "\n    ")
    ])
  ])
};
var __vue_staticRenderFns__$7 = [];
__vue_render__$7._withStripped = true;

  /* style */
  var __vue_inject_styles__$7 = function (inject) {
    if (!inject) { return }
    inject("data-v-643d0a04_0", { source: ".input-field {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  flex-direction: column;\n}\n.input-field .label {\n  font-size: 12px;\n  line-height: 15px;\n  font-weight: 600;\n  margin-top: 6px;\n  margin-bottom: 0;\n  color: #1F2667;\n}\n.input-field .input-container {\n  display: flex;\n  align-items: center;\n  position: relative;\n  width: 100%;\n  border-radius: 6px;\n  color: #28314d;\n}\n.input-field .input-container .input {\n  width: 100%;\n  outline: 0;\n  color: #1F2667;\n  border-radius: inherit;\n  border: 1px solid #bbbfc5;\n  height: 24px;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 0 6px;\n}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$7 = undefined;
  /* module identifier */
  var __vue_module_identifier__$7 = undefined;
  /* functional template */
  var __vue_is_functional_template__$7 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$7 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    false,
    createInjector,
    undefined,
    undefined
  );

var script$8 = {
    name: "Preview",

    props: {
        red: Number,
        green: Number,
        blue: Number,
        alpha: Number,
        updateColor: Function,
    },

    components: {
        Input: __vue_component__$7
    },

    data: function data() {
        return {
            inProgress: false,
            hexValue: rgbToHex(this.red, this.green, this.blue),
        }
    },

    computed: {
        hex: function hex() {
            return rgbToHex(this.red, this.green, this.blue)
        }
    },

    watch: {
        inProgress: "setHex",
        red: "setHex",
        green: "setHex",
        blue: "setHex",
    },

    methods: {
        setHex: function setHex() {
            if (this.inProgress) {
                return;
            }

            this.hexValue = this.hex;
        },

        changeHex: function changeHex(event) {
            var color = hexToRgb(event.target.value);

            if (color) {
                this.updateColor(color);
            }
        }
    }
};

/* script */
var __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "fragment",
    [
      _c("Input", {
        attrs: {
          value: _vm.hexValue,
          label: "hex",
          onFocus: function() {
            return (_vm.inProgress = true)
          },
          onBlur: function() {
            return (_vm.inProgress = false)
          },
          inProgress: _vm.inProgress,
          classes: "hex"
        },
        on: { input: _vm.changeHex }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$8 = [];
__vue_render__$8._withStripped = true;

  /* style */
  var __vue_inject_styles__$8 = undefined;
  /* scoped */
  var __vue_scope_id__$8 = undefined;
  /* module identifier */
  var __vue_module_identifier__$8 = undefined;
  /* functional template */
  var __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$8 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    false,
    undefined,
    undefined,
    undefined
  );

var script$9 = {
    name: "RGBItem",

    props: {
        value: String | Number,
        type: String,
        label: String,
        onChange: Function,
    },

    components: {
        Input: __vue_component__$7
    },

    data: function data() {
        return {
            inputValue: this.value,
            inProgress: false
        }
    },

    watch: {
        value: "setValue"
    },

    methods: {
        onChangeHandler: function onChangeHandler(event) {
            var value = +event.target.value;

            if (Number.isNaN(value) || value.length > 3 || value < 0 || value > 255) {
                this.inputValue = this.value;

                this.$forceUpdate();

                return;
            }

            this.inputValue = event.target.value;

            this.onChange(value);
        },

        onBlur: function onBlur() {
            if (!this.inputValue && !this.inputValue !== 0) {
                this.inputValue = this.value;
            }

            this.inProgress = false;
        },

        setValue: function setValue() {
            if (this.value !== +this.inputValue && this.inputValue !== '') {
                this.inputValue = this.value;
            }
        }
    }
};

/* script */
var __vue_script__$9 = script$9;

/* template */
var __vue_render__$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    [
      _c("Input", {
        attrs: {
          value: _vm.inputValue,
          type: _vm.type,
          label: _vm.label,
          onFocus: function() {
            return (_vm.inProgress = true)
          },
          onBlur: _vm.onBlur,
          inProgress: _vm.inProgress,
          classes: "rgb"
        },
        on: { input: _vm.onChangeHandler }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$9 = [];
__vue_render__$9._withStripped = true;

  /* style */
  var __vue_inject_styles__$9 = function (inject) {
    if (!inject) { return }
    inject("data-v-0e0c7d30_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"index.vue"}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$9 = "data-v-0e0c7d30";
  /* module identifier */
  var __vue_module_identifier__$9 = undefined;
  /* functional template */
  var __vue_is_functional_template__$9 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$9 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    false,
    createInjector,
    undefined,
    undefined
  );

var script$a = {
    name: "RGB",

    props: {
        red: Number,
        green: Number,
        blue: Number,
        alpha: Number,
        updateColor: Function,
    },

    components: {
        RGBItem: __vue_component__$9
    },

    methods: {
        changeValue: function changeValue(field, value) {
            var obj, obj$1;

            if (field === 'alpha') {
                this.updateColor({ alpha: value / 100 });

                return;
            }

            var color = rgbToHSv(( obj = {
                red: this.red, green: this.green, blue: this.blue
            }, obj[field] = value, obj ));

            this.updateColor(Object.assign({}, color, ( obj$1 = {}, obj$1[field] = value, obj$1 )));
        },
    }
};

/* script */
var __vue_script__$a = script$a;

/* template */
var __vue_render__$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "fragment",
    [
      _c("RGBItem", {
        attrs: {
          value: _vm.red,
          type: "number",
          label: "R",
          onChange: function(value) {
            return _vm.changeValue("red", value)
          }
        }
      }),
      _vm._v(" "),
      _c("RGBItem", {
        attrs: {
          value: _vm.green,
          type: "number",
          label: "G",
          onChange: function(value) {
            return _vm.changeValue("green", value)
          }
        }
      }),
      _vm._v(" "),
      _c("RGBItem", {
        attrs: {
          value: _vm.blue,
          type: "number",
          label: "B",
          onChange: function(value) {
            return _vm.changeValue("blue", value)
          }
        }
      }),
      _vm._v(" "),
      _c("RGBItem", {
        attrs: {
          value: parseInt(_vm.alpha * 100, 10),
          type: "number",
          label: "Alpha",
          onChange: function(value) {
            return _vm.changeValue("alpha", value)
          }
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$a = [];
__vue_render__$a._withStripped = true;

  /* style */
  var __vue_inject_styles__$a = function (inject) {
    if (!inject) { return }
    inject("data-v-5d2434ac_0", { source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", map: {"version":3,"sources":[],"names":[],"mappings":"","file":"index.vue"}, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__$a = "data-v-5d2434ac";
  /* module identifier */
  var __vue_module_identifier__$a = undefined;
  /* functional template */
  var __vue_is_functional_template__$a = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$a = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    false,
    createInjector,
    undefined,
    undefined
  );

var script$b = {
    name: "Preview",

    props: {
        red: Number,
        green: Number,
        blue: Number,
        alpha: Number,
        updateColor: Function,
    },

    components: {
        Hex: __vue_component__$8,
        RGB: __vue_component__$a
    }
};

/* script */
var __vue_script__$b = script$b;

/* template */
var __vue_render__$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "color-preview-area" }, [
    _c(
      "div",
      { staticClass: "input-group" },
      [
        _c("Hex", {
          attrs: {
            red: _vm.red,
            green: _vm.green,
            blue: _vm.blue,
            updateColor: _vm.updateColor
          }
        }),
        _vm._v(" "),
        _c("RGB", {
          attrs: {
            red: _vm.red,
            green: _vm.green,
            blue: _vm.blue,
            alpha: _vm.alpha,
            updateColor: _vm.updateColor
          }
        })
      ],
      1
    )
  ])
};
var __vue_staticRenderFns__$b = [];
__vue_render__$b._withStripped = true;

  /* style */
  var __vue_inject_styles__$b = undefined;
  /* scoped */
  var __vue_scope_id__$b = undefined;
  /* module identifier */
  var __vue_module_identifier__$b = undefined;
  /* functional template */
  var __vue_is_functional_template__$b = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$b = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    false,
    undefined,
    undefined,
    undefined
  );

var script$c = {
    name: "Solid",

    props: {
        red: {
            type: Number,
            default: 255
        },
        green: {
            type: Number,
            default: 0
        },
        blue: {
            type: Number,
            default: 0
        },
        alpha: {
            type: Number,
            default: 1
        },
        hue: Number,
        saturation: Number,
        value: Number,
        onStartChange: Function,
        onChange: Function,
        onEndChange: Function,
    },

    components: {
        Area: __vue_component__$6,
        Preview: __vue_component__$b,
    },

    data: function data() {
        return {
            colorRed: this.red,
            colorGreen: this.green,
            colorBlue: this.blue,
            colorAlpha: this.alpha,
            colorHue: 0,
            colorSaturation: 100,
            colorValue: 100,
            actions: {
                onStartChange: this.onStartChange,
                onChange: this.onChange,
                onEndChange: this.onEndChange,
            }

        }
    },

    mounted: function mounted() {
        var ref = rgbToHSv({ red: this.colorRed, green: this.colorGreen, blue: this.colorBlue });
        var hue = ref.hue;
        var saturation = ref.saturation;
        var value = ref.value;

        this.colorHue = hue;
        this.colorSaturation = saturation;
        this.colorValue = value;
    },

    computed: {
        hsv: function hsv() {
            if (this.hue === undefined || this.saturation === undefined || this.value=== undefined) {
                return rgbToHSv({ red: this.red, green: this.green, blue: this.blue });
            }

            return  {
                hue: this.hue,
                saturation: this.saturation,
                value: this.value,
            }
        },

        color: function color() {
            return {
                red: this.red,
                green: this.green,
                blue: this.blue,
                alpha: this.alpha,

            }
        }
    },

    watch: {
        hsv: function (ref) {
            var hue = ref.hue;
            var saturation = ref.saturation;
            var value = ref.value;

            this.colorHue = hue;
            this.colorSaturation = saturation;
            this.colorValue = value;
        },

        color: function (ref) {
            var red = ref.red;
            var green = ref.green;
            var blue = ref.blue;
            var alpha = ref.alpha;

            this.colorRed = red;
            this.colorGreen = green;
            this.colorBlue = blue;
            this.colorAlpha = alpha;
        },
    },

    methods: {
        updateColor: function updateColor(ref, actionName) {
            var red = ref.red;
            var green = ref.green;
            var blue = ref.blue;
            var alpha = ref.alpha;
            var hue = ref.hue;
            var saturation = ref.saturation;
            var value = ref.value;
            if ( actionName === void 0 ) actionName = 'onChange';

            red = getRightValue(red, this.colorRed);
            green = getRightValue(green, this.colorGreen);
            blue = getRightValue(blue, this.colorBlue);
            alpha = getRightValue(alpha, this.colorAlpha);
            hue = getRightValue(hue, this.colorHue);
            saturation = getRightValue(saturation, this.colorSaturation);
            value = getRightValue(value, this.colorValue);

            this.colorRed = red;
            this.colorGreen = green;
            this.colorBlue = blue;
            this.colorAlpha = alpha;
            this.colorHue = hue;
            this.colorSaturation = saturation;
            this.colorValue = value;

            var action = this.actions[actionName];

            action && action({
                red: red,
                green: green,
                blue: blue,
                alpha: alpha,
                hue: hue,
                saturation: saturation,
                value: value,
                style: generateSolidStyle(red, green, blue, alpha),
            });
        },
    }
};

/* script */
var __vue_script__$c = script$c;

/* template */
var __vue_render__$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "fragment",
    [
      _c("Area", {
        attrs: {
          red: _vm.colorRed,
          green: _vm.colorGreen,
          blue: _vm.colorBlue,
          alpha: _vm.colorAlpha,
          hue: _vm.colorHue,
          saturation: _vm.colorSaturation,
          value: _vm.colorValue,
          updateColor: _vm.updateColor,
          "is-gradient": false
        }
      }),
      _vm._v(" "),
      _c("Preview", {
        attrs: {
          red: _vm.colorRed,
          green: _vm.colorGreen,
          blue: _vm.colorBlue,
          alpha: _vm.colorAlpha,
          updateColor: _vm.updateColor
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$c = [];
__vue_render__$c._withStripped = true;

  /* style */
  var __vue_inject_styles__$c = undefined;
  /* scoped */
  var __vue_scope_id__$c = undefined;
  /* module identifier */
  var __vue_module_identifier__$c = undefined;
  /* functional template */
  var __vue_is_functional_template__$c = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$c = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    false,
    undefined,
    undefined,
    undefined
  );

var script$d = {
    name: "GradientControls",

    props: {
        type: String,
        degree: Number,
        changeGradientControl: {
            type: Function,
            default: function () {}
        }
    },
    data: function data() {
        return {
            disableClick: false,
            mouseEvents: function () {},
        }
    },

    mounted: function mounted() {
        this.mouseEvents = useMouseEvents(this.mouseDownHandler, this.mouseMoveHandler, this.mouseUpHandler);
    },

    computed: {
        degreesStyle: function degreesStyle() {
            return { transform: ("rotate(" + (this.degree) + "deg)") };
        }
    },

    methods: {
        mouseDownHandler: function mouseDownHandler(event) {
            var pointer = event.target;
            var pointerBox = pointer.getBoundingClientRect();
            var centerY = pointerBox.top + parseInt(8 - window.pageYOffset, 10);
            var centerX = pointerBox.left + parseInt(8 - window.pageXOffset, 10);

            return {
                centerY: centerY,
                centerX: centerX,

            };
        },

        mouseMoveHandler: function mouseMoveHandler(event, ref) {
            var centerX = ref.centerX;
            var centerY = ref.centerY;

            this.disableClick = true;

            var newDegree = calculateDegree(event.clientX, event.clientY, centerX, centerY);

            this.changeGradientControl({ degree: parseInt(newDegree, 10) });
        },

        mouseUpHandler: function mouseUpHandler(event) {
            var targetClasses = event.target.classList;

            if (targetClasses.contains('gradient-degrees') || targetClasses.contains('icon-rotate')) {
                return;
            }

            this.disableClick = false;
        },

        onClickGradientDegree: function onClickGradientDegree() {
            if (this.disableClick) {
                this.disableClick = false;
                return;
            }

            var gradientDegree = this.degree + 45;

            if (gradientDegree >= 360) {
                gradientDegree = 0;
            }

            this.changeGradientControl({ degree: parseInt(gradientDegree, 10) });
        }
    }
};

/* script */
var __vue_script__$d = script$d;

/* template */
var __vue_render__$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "gradient-controls" }, [
    _c("div", { staticClass: "gradient-type" }, [
      _c("div", {
        class:
          "gradient-type-item liner-gradient " +
          (_vm.type === "linear" ? "active" : ""),
        on: {
          click: function() {
            return _vm.changeGradientControl({ type: "linear" })
          }
        }
      }),
      _vm._v(" "),
      _c("div", {
        class:
          "gradient-type-item radial-gradient " +
          (_vm.type === "radial" ? "active" : ""),
        on: {
          click: function() {
            return _vm.changeGradientControl({ type: "radial" })
          }
        }
      })
    ]),
    _vm._v(" "),
    _vm.type === "linear"
      ? _c("div", { staticClass: "gradient-degrees-options" }, [
          _c(
            "div",
            {
              staticClass: "gradient-degrees",
              on: {
                mousedown: _vm.mouseEvents,
                click: _vm.onClickGradientDegree
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "gradient-degree-center",
                  style: _vm.degreesStyle
                },
                [_c("div", { staticClass: "gradient-degree-pointer" })]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "gradient-degree-value" }, [
            _c("p", [
              _vm._v(
                "\n                " + _vm._s(_vm.degree) + "°\n            "
              )
            ])
          ])
        ])
      : _vm._e()
  ])
};
var __vue_staticRenderFns__$d = [];
__vue_render__$d._withStripped = true;

  /* style */
  var __vue_inject_styles__$d = undefined;
  /* scoped */
  var __vue_scope_id__$d = undefined;
  /* module identifier */
  var __vue_module_identifier__$d = undefined;
  /* functional template */
  var __vue_is_functional_template__$d = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$d = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    false,
    undefined,
    undefined,
    undefined
  );

var script$e = {
    name: "Gradient",

    props: {
        type: {
            type: String,
            default: 'linear'
        },
        degree: {
            type: Number,
            default: 0
        },
        points: {
            type: Array,
            default: function () {
                return [
                    {
                        left: 0,
                        red: 0,
                        green: 0,
                        blue: 0,
                        alpha: 1,
                    },
                    {
                        left: 100,
                        red: 255,
                        green: 0,
                        blue: 0,
                        alpha: 1,
                    } ];
            }
        },
        onStartChange: Function,
        onChange: Function,
        onEndChange: Function,
    },

    components: {
        GradientControls: __vue_component__$d,
        Area: __vue_component__$6,
        Preview: __vue_component__$b
    },

    data: function data() {
        return {
            activePointIndex: 0,
            gradientPoints: this.points,
            activePoint: this.points[0],
            colorRed: this.points[0].red,
            colorGreen: this.points[0].green,
            colorBlue: this.points[0].blue,
            colorAlpha: this.points[0].alpha,
            colorHue: 0,
            colorSaturation: 100,
            colorValue: 100,
            gradientType: this.type,
            gradientDegree: this.degree,
            actions: {
                onStartChange: this.onStartChange,
                onChange: this.onChange,
                onEndChange: this.onEndChange,
            }
        }
    },

    mounted: function mounted() {
        var ref = rgbToHSv({ red: this.colorRed, green: this.colorGreen, blue: this.colorBlue });
        var hue = ref.hue;
        var saturation = ref.saturation;
        var value = ref.value;

        this.colorHue = hue;
        this.colorSaturation = saturation;
        this.colorValue = value;

        document.addEventListener('keyup', this.keyUpHandler);
    },

    beforeDestroy: function beforeDestroy() {
        document.removeEventListener('keyup', this.keyUpHandler);
    },

    methods: {
        removePoint: function removePoint(index) {
            if ( index === void 0 ) index = this.activePointIndex;

            if (this.gradientPoints.length <= 2) {
                return;
            }

            this.gradientPoints.splice(index, 1);


            if (index > 0) {
                this.activePointIndex = index - 1;
            }

            this.onChange && this.onChange({
                points: this.gradientPoints,
                type: this.gradientType,
                degree: this.gradientDegree,
                style: generateGradientStyle(this.gradientPoints, this.gradientType, this.gradientDegree),
            });
        },

        keyUpHandler: function keyUpHandler(event) {
            if ((event.keyCode === 46 || event.keyCode === 8)) {
                this.removePoint(this.activePointIndex);
            }
        },

        changeActivePointIndex: function changeActivePointIndex(index) {
            this.activePointIndex = index;

            this.activePoint = this.gradientPoints[index];

            var ref = this.activePoint;
            var red = ref.red;
            var green = ref.green;
            var blue = ref.blue;
            var alpha = ref.alpha;

            this.colorRed = red;
            this.colorGreen = green;
            this.colorBlue = blue;
            this.colorAlpha = alpha;

            var ref$1 = rgbToHSv({ red: red, green: green, blue: blue });
            var hue = ref$1.hue;
            var saturation = ref$1.saturation;
            var value = ref$1.value;

            this.colorHue = hue;
            this.colorSaturation = saturation;
            this.colorValue = value;
        },

        changeGradientControl: function changeGradientControl(ref) {
            var type = ref.type;
            var degree = ref.degree;

            type = getRightValue(type, this.gradientType);
            degree = getRightValue(degree, this.gradientDegree);

            this.gradientType = type;
            this.gradientDegree = degree;

            this.onChange({
                points: this.gradientPoints,
                type: this.gradientType,
                degree: this.gradientDegree,
                style: generateGradientStyle(this.gradientPoints, this.gradientType, this.gradientDegree),
            });
        },

        updateColor: function updateColor(ref, actionName) {
            var red = ref.red;
            var green = ref.green;
            var blue = ref.blue;
            var alpha = ref.alpha;
            var hue = ref.hue;
            var saturation = ref.saturation;
            var value = ref.value;
            if ( actionName === void 0 ) actionName = 'onChange';

            red = getRightValue(red, this.colorRed);
            green = getRightValue(green, this.colorGreen);
            blue = getRightValue(blue, this.colorBlue);
            alpha = getRightValue(alpha, this.colorAlpha);
            hue = getRightValue(hue, this.colorHue);
            saturation = getRightValue(saturation, this.colorSaturation);
            value = getRightValue(value, this.colorValue);

            var localGradientPoints = this.gradientPoints.slice();

            localGradientPoints[this.activePointIndex] = Object.assign({}, localGradientPoints[this.activePointIndex],
                {red: red,
                green: green,
                blue: blue,
                alpha: alpha});

            this.colorRed = red;
            this.colorGreen = green;
            this.colorBlue = blue;
            this.colorAlpha = alpha;
            this.colorHue = hue;
            this.colorSaturation = saturation;
            this.colorValue = value;
            this.gradientPoints = localGradientPoints;

            var action = this.actions[actionName];

            action && action({
                points: localGradientPoints,
                type: this.gradientType,
                degree: this.gradientDegree,
                style: generateGradientStyle(localGradientPoints, this.gradientType, this.gradientDegree),
            });
        },

        updateGradientLeft: function updateGradientLeft(left, index, actionName) {
            if ( actionName === void 0 ) actionName = 'onChange';

            this.gradientPoints[index].left = left;

            var action = this.actions[actionName];

            action && action({
                points: this.gradientPoints,
                type: this.gradientType,
                degree: this.gradientDegree,
                style: generateGradientStyle(this.gradientPoints, this.gradientType, this.gradientDegree),
            });
        },

        addPoint: function addPoint(left) {
            this.gradientPoints.push(Object.assign({}, this.gradientPoints[this.activePointIndex],
                {left: left}));

            this.activePointIndex = this.gradientPoints.length - 1;

            this.onChange && this.onChange({
                points: this.gradientPoints,
                type: this.gradientType,
                degree: this.gradientDegree,
                style: generateGradientStyle(this.gradientPoints, this.gradientType, this.gradientDegree),
            });
        },

    }
};

/* script */
var __vue_script__$e = script$e;

/* template */
var __vue_render__$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "fragment",
    [
      _c("GradientControls", {
        attrs: {
          type: _vm.gradientType,
          degree: _vm.gradientDegree,
          changeGradientControl: _vm.changeGradientControl
        }
      }),
      _vm._v(" "),
      _c("Area", {
        attrs: {
          red: _vm.colorRed,
          green: _vm.colorGreen,
          blue: _vm.colorBlue,
          alpha: _vm.colorAlpha,
          hue: _vm.colorHue,
          saturation: _vm.colorSaturation,
          value: _vm.colorValue,
          updateColor: _vm.updateColor,
          "is-gradient": true,
          type: _vm.gradientType,
          degree: _vm.gradientDegree,
          points: _vm.gradientPoints,
          activePointIndex: _vm.activePointIndex,
          changeGradientControl: _vm.changeGradientControl,
          changeActivePointIndex: _vm.changeActivePointIndex,
          updateGradientLeft: _vm.updateGradientLeft,
          addPoint: _vm.addPoint,
          removePoint: _vm.removePoint
        }
      }),
      _vm._v(" "),
      _c("Preview", {
        attrs: {
          red: _vm.colorRed,
          green: _vm.colorGreen,
          blue: _vm.colorBlue,
          alpha: _vm.colorAlpha,
          updateColor: _vm.updateColor
        }
      })
    ],
    1
  )
};
var __vue_staticRenderFns__$e = [];
__vue_render__$e._withStripped = true;

  /* style */
  var __vue_inject_styles__$e = undefined;
  /* scoped */
  var __vue_scope_id__$e = undefined;
  /* module identifier */
  var __vue_module_identifier__$e = undefined;
  /* functional template */
  var __vue_is_functional_template__$e = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$e = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    false,
    undefined,
    undefined,
    undefined
  );

Vue.use(vueFragment.Plugin);

var script$f = {
    name: "ColorPicker",

    props: {
        isGradient: {
            type: Boolean,
            default: false,
        },
        color: {
            type: Object,
            default: function () { return ({
                red: 255,
                green: 0,
                blue: 0,
                alpha: 1,
                hue: 0,
                saturation: 100,
                value: 100,
            }); }
        },

        gradient: {
            type: Object,
            default: function () { return ({
                type: 'linear',
                degree: 0,
                points: [
                    {
                        left: 0,
                        red: 0,
                        green: 0,
                        blue: 0,
                        alpha: 1,
                    },
                    {
                        left: 100,
                        red: 255,
                        green: 0,
                        blue: 0,
                        alpha: 1,
                    } ],
            }); }
        },

        onStartChange: {
            type: Function,
            default: function () {}
        },
        onChange: {
            type: Function,
            default: function () {}
        },
        onEndChange: {
            type: Function,
            default: function () {}
        },
    },

    components: {
        Solid: __vue_component__$c,
        Gradient: __vue_component__$e
    }
};

/* script */
var __vue_script__$f = script$f;

/* template */
var __vue_render__$f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "ui-color-picker" },
    [
      _vm.isGradient
        ? _c("Gradient", {
            attrs: {
              points: _vm.gradient.points,
              type: _vm.gradient.type,
              degree: _vm.gradient.degree,
              onChange: _vm.onChange,
              onStartChange: _vm.onStartChange,
              onEndChange: _vm.onEndChange
            }
          })
        : _c("Solid", {
            attrs: {
              red: _vm.color.red,
              green: _vm.color.green,
              blue: _vm.color.blue,
              alpha: _vm.color.alpha,
              hue: _vm.color.hue,
              saturation: _vm.color.saturation,
              value: _vm.color.value,
              onChange: _vm.onChange,
              onStartChange: _vm.onStartChange,
              onEndChange: _vm.onEndChange
            }
          })
    ],
    1
  )
};
var __vue_staticRenderFns__$f = [];
__vue_render__$f._withStripped = true;

  /* style */
  var __vue_inject_styles__$f = undefined;
  /* scoped */
  var __vue_scope_id__$f = undefined;
  /* module identifier */
  var __vue_module_identifier__$f = undefined;
  /* functional template */
  var __vue_is_functional_template__$f = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$f = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$f,
    __vue_script__$f,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    false,
    undefined,
    undefined,
    undefined
  );

exports.ColorPicker = __vue_component__$f;
//# sourceMappingURL=index-cjs.js.map


/***/ }),

/***/ "./node_modules/vue-color-gradient-picker/dist/index.css?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************!*\
  !*** ./node_modules/vue-color-gradient-picker/dist/index.css?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_index_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader!../../css-loader??ref--6-1!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/src??ref--6-2!./index.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-color-gradient-picker/dist/index.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_index_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_index_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_index_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_index_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_style_loader_index_js_css_loader_index_js_ref_6_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_src_index_js_ref_6_2_index_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./node_modules/vue-fragment/dist/vue-fragment.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/vue-fragment/dist/vue-fragment.esm.js ***!
  \************************************************************/
/*! exports provided: default, Fragment, SSR, Plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SSR", function() { return SSR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Plugin", function() { return Plugin; });
function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _objectSpread(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){_defineProperty(e,n,t[n])})}return e}var freeze=function(e,n,t){Object.defineProperty(e,n,{configurable:!0,get:function(){return t},set:function(e){console.warn("tried to set frozen property ".concat(n," with ").concat(e))}})},unfreeze=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object.defineProperty(e,n,{configurable:!0,writable:!0,value:t})},component={abstract:!0,name:"Fragment",props:{name:{type:String,default:function(){return Math.floor(Date.now()*Math.random()).toString(16)}}},mounted:function(){var e=this.$el,n=e.parentNode,t=document.createComment("fragment#".concat(this.name,"#head")),r=document.createComment("fragment#".concat(this.name,"#tail"));n.insertBefore(t,e),n.insertBefore(r,e),e.appendChild=function(t){n.insertBefore(t,r),freeze(t,"parentNode",e)},e.insertBefore=function(t,r){n.insertBefore(t,r),freeze(t,"parentNode",e)},e.removeChild=function(e){n.removeChild(e),unfreeze(e,"parentNode")},Array.from(e.childNodes).forEach(function(n){return e.appendChild(n)}),n.removeChild(e),freeze(e,"parentNode",n),freeze(e,"nextSibling",r.nextSibling);var o=n.insertBefore;n.insertBefore=function(r,i){o.call(n,r,i!==e?i:t)};var i=n.removeChild;n.removeChild=function(a){if(a===e){for(;t.nextSibling!==r;)e.removeChild(t.nextSibling);n.removeChild(t),n.removeChild(r),unfreeze(e,"parentNode"),n.insertBefore=o,n.removeChild=i}else i.call(n,a)}},render:function(e){var n=this,t=this.$slots.default;return t&&t.length&&t.forEach(function(e){return e.data=_objectSpread({},e.data,{attrs:_objectSpread({fragment:n.name},(e.data||{}).attrs)})}),e("div",{attrs:{fragment:this.name}},t)}};function ssr(e,n){ true&&console.warn("v-fragment SSR is not implemented yet.")}var Fragment=component,SSR=ssr,Plugin={install:function(e){e.component("fragment",component)}},index={Fragment:component,Plugin:Plugin,SSR:ssr};/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ })

}]);