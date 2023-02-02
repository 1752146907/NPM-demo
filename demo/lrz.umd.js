(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lrz"] = factory(require("vue"));
	else
		root["lrz"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 620:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./package/pig-button/index.vue?vue&type=template&id=6419a45b&scoped=true

const _withScopeId = n => ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.pushScopeId)("data-v-6419a45b"), n = n(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.popScopeId)(), n);
const _hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("button", null, "我是测试按钮", -1));
const _hoisted_2 = [_hoisted_1];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", null, _hoisted_2);
}
;// CONCATENATED MODULE: ./package/pig-button/index.vue?vue&type=template&id=6419a45b&scoped=true

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./package/pig-button/index.vue?vue&type=script&lang=js
/* harmony default export */ var pig_buttonvue_type_script_lang_js = ({
  name: "pig-button" //组件名
});
;// CONCATENATED MODULE: ./package/pig-button/index.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-54.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-54.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-54.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./package/pig-button/index.vue?vue&type=style&index=0&id=6419a45b&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./package/pig-button/index.vue?vue&type=style&index=0&id=6419a45b&scoped=true&lang=css

// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(620);
;// CONCATENATED MODULE: ./package/pig-button/index.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(pig_buttonvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-6419a45b"]])

/* harmony default export */ var pig_button = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./package/card/index.vue?vue&type=template&id=1834a874

const cardvue_type_template_id_1834a874_hoisted_1 = ["src"];
const cardvue_type_template_id_1834a874_hoisted_2 = {
  key: 0,
  class: "m-card-summary"
};
const _hoisted_3 = {
  key: 1,
  class: "m-card-summary"
};
function cardvue_type_template_id_1834a874_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    class: "m-card",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)($props.width ? {
      width: $props.width + 'px'
    } : {})
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", {
    class: "m-card-img",
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)($props.imgHeight ? {
      height: $props.imgHeight + 'px'
    } : {})
  }, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("img", {
    src: $props.imgSrc,
    alt: "img"
  }, null, 8, cardvue_type_template_id_1834a874_hoisted_1)], 4), $props.summary ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", cardvue_type_template_id_1834a874_hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($props.summary), 1)) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_3, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default")])), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "footer")], 4);
}
;// CONCATENATED MODULE: ./package/card/index.vue?vue&type=template&id=1834a874

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./package/card/index.vue?vue&type=script&lang=js
/* harmony default export */ var cardvue_type_script_lang_js = ({
  name: "m-card",
  props: {
    width: {
      type: Number,
      default: 0
    },
    imgSrc: {
      type: String,
      default: ""
    },
    imgHeight: {
      type: Number,
      default: 0
    },
    summary: {
      type: String,
      default: ""
    }
  }
});
;// CONCATENATED MODULE: ./package/card/index.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./package/card/index.vue




;
const card_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(cardvue_type_script_lang_js, [['render',cardvue_type_template_id_1834a874_render]])

/* harmony default export */ var card = (card_exports_);
;// CONCATENATED MODULE: ./package/index.js



// 将来如果有其它组件,都可以写到这个数组里
const components = [pig_button, card];

// 批量组件注册
const install = function (Vue) {
  components.forEach(com => {
    Vue.component(com.name, com);
  });
};

// 这个方法以后再使用的时候可以被use调用
/* harmony default export */ var package_0 = (install);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (package_0);


}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=lrz.umd.js.map