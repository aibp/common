(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/ExpandIcon/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/ExpandIcon/demo/basic.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/ExpandIcon/demo/basic.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "基本用法。"
    ]
  ],
  "meta": {
    "order": 0,
    "title": "基本用法",
    "filename": "docs/components/ExpandIcon/demo/basic.md",
    "id": "docs-components-ExpandIcon-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>ExpandIcon<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> handleExpand <span class=\"token operator\">=</span> expand <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>expand<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ExpandIcon</span> <span class=\"token attr-name\">onExpand</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>handleExpand<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>ExpandIcon<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">handleExpand</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">expand</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>expand<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">ExpandIcon</span></span> <span class=\"token attr-name\">onExpand</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>handleExpand<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var ExpandIcon = _baiduAibpReactCommon.components.ExpandIcon;

  var handleExpand = function handleExpand(expand) {
    console.log(expand);
  };

  return /*#__PURE__*/_react["default"].createElement(ExpandIcon, {
    onExpand: handleExpand
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/components-ExpandIcon-demo.index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bisheng/tmp/components-ExpandIcon-demo.index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/components/ExpandIcon/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/ExpandIcon/demo/basic.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map