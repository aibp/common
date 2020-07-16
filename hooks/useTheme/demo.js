(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hooks/useTheme/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useTheme/demo/setPrimaryColor.md":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useTheme/demo/setPrimaryColor.md ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "结合ColorPicker设置主色"
    ]
  ],
  "meta": {
    "order": 0,
    "title": "设置主色",
    "filename": "docs/hooks/useTheme/demo/setPrimaryColor.md",
    "id": "docs-hooks-useTheme-demo-setPrimaryColor"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>useCallback<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">,</span> hooks<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>ColorPicker<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>useTheme<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> hooks<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>setTheme<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">useTheme</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>cssPath<span class=\"token punctuation\">:</span> <span class=\"token string\">'/color.less'</span><span class=\"token punctuation\">,</span> jsPath<span class=\"token punctuation\">:</span> <span class=\"token string\">'/less.min.js'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> handleThemeChange <span class=\"token operator\">=</span> <span class=\"token function\">useCallback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>color<span class=\"token punctuation\">:</span> string<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">setTheme</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token string\">'@primary-color'</span><span class=\"token punctuation\">:</span> color<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ColorPicker</span> <span class=\"token attr-name\">onChangeComplete</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>handleThemeChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> React<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>useCallback<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">,</span> hooks<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>ColorPicker<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>useTheme<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> hooks<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>setTheme<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">useTheme</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>cssPath<span class=\"token operator\">:</span> <span class=\"token string\">'/color.less'</span><span class=\"token punctuation\">,</span> jsPath<span class=\"token operator\">:</span> <span class=\"token string\">'/less.min.js'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> handleThemeChange <span class=\"token operator\">=</span> <span class=\"token function\">useCallback</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">color<span class=\"token operator\">:</span> string</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">setTheme</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span><span class=\"token string\">'@primary-color'</span><span class=\"token operator\">:</span> color<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">ColorPicker</span></span> <span class=\"token attr-name\">onChangeComplete</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>handleThemeChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  var ColorPicker = _baiduAibpReactCommon.components.ColorPicker;
  var useTheme = _baiduAibpReactCommon.hooks.useTheme;

  var _useTheme = useTheme({
    cssPath: '/color.less',
    jsPath: '/less.min.js'
  }),
      setTheme = _useTheme.setTheme;

  var handleThemeChange = (0, _react.useCallback)(function (color) {
    setTheme({
      '@primary-color': color
    });
  }, []);
  return /*#__PURE__*/_react["default"].createElement(ColorPicker, {
    onChangeComplete: handleThemeChange
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/hooks-useTheme-demo.index.js":
/*!***************************************************************!*\
  !*** ./node_modules/bisheng/tmp/hooks-useTheme-demo.index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'setPrimaryColor': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/hooks/useTheme/demo/setPrimaryColor.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useTheme/demo/setPrimaryColor.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map