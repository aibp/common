(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["utils/timeUtil/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/utils/timeUtil/demo/basic.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/utils/timeUtil/demo/basic.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [

  ],
  "meta": {
    "component": false,
    "filename": "docs/utils/timeUtil/demo/basic.md",
    "id": "docs-utils-timeUtil-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>utils<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>timeUtil<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> utils<span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// 1. timeToUtc</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>timeUtil<span class=\"token punctuation\">.</span><span class=\"token function\">timeToUtc</span><span class=\"token punctuation\">(</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2020-07-15 17:36:12'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// 2020-07-15T09:36:12Z</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>timeUtil<span class=\"token punctuation\">.</span><span class=\"token function\">timeToUtc</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2020-07-15 17:36:12'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// 2020-07-15T09:36:12Z</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// 2. toTime</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>timeUtil<span class=\"token punctuation\">.</span><span class=\"token function\">toTime</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2020-07-15T09:36:12Z'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// 2020-07-15 17:36:12</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>utils<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>timeUtil<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> utils<span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">// 1. timeToUtc</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>timeUtil<span class=\"token punctuation\">.</span><span class=\"token function\">timeToUtc</span><span class=\"token punctuation\">(</span><span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2020-07-15 17:36:12'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 2020-07-15T09:36:12Z</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>timeUtil<span class=\"token punctuation\">.</span><span class=\"token function\">timeToUtc</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2020-07-15 17:36:12'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 2020-07-15T09:36:12Z</span>\n\n<span class=\"token comment\">// 2. toTime</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>timeUtil<span class=\"token punctuation\">.</span><span class=\"token function\">toTime</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2020-07-15T09:36:12Z'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 2020-07-15 17:36:12</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var timeUtil = _baiduAibpReactCommon.utils.timeUtil; // 1. timeToUtc

  console.log(timeUtil.timeToUtc((0, _moment["default"])('2020-07-15 17:36:12'))); // 2020-07-15T09:36:12Z

  console.log(timeUtil.timeToUtc('2020-07-15 17:36:12')); // 2020-07-15T09:36:12Z
  // 2. toTime

  console.log(timeUtil.toTime('2020-07-15T09:36:12Z')); // 2020-07-15 17:36:12
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/utils-timeUtil-demo.index.js":
/*!***************************************************************!*\
  !*** ./node_modules/bisheng/tmp/utils-timeUtil-demo.index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/utils/timeUtil/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/utils/timeUtil/demo/basic.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map