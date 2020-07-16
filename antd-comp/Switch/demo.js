(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["antd-comp/Switch/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Switch/demo/basic.md":
/*!*************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Switch/demo/basic.md ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "普通样式,带有文字"
    ]
  ],
  "meta": {
    "order": 0,
    "title": "普通样式",
    "filename": "docs/antd-comp/Switch/demo/basic.md",
    "id": "docs-antd-comp-Switch-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Switch<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checkedChildren</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>开<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">unCheckedChildren</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>关<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">defaultChecked</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Switch<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Switch</span></span> <span class=\"token attr-name\">checkedChildren</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>开<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">unCheckedChildren</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>关<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">defaultChecked</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

  return /*#__PURE__*/React.createElement(_antd.Switch, {
    checkedChildren: "\u5F00",
    unCheckedChildren: "\u5173",
    defaultChecked: true
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Switch/demo/disabled.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Switch/demo/disabled.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "disabled"
    ]
  ],
  "meta": {
    "order": 1,
    "title": "不可点",
    "filename": "docs/antd-comp/Switch/demo/disabled.md",
    "id": "docs-antd-comp-Switch-demo-disabled"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Switch<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checkedChildren</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>开<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">unCheckedChildren</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>关<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">defaultChecked</span> <span class=\"token attr-name\">disabled</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Switch</span> <span class=\"token attr-name\">checkedChildren</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>开<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">unCheckedChildren</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>关<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">disabled</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode\n<span class=\"token punctuation\">)</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Switch<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Switch</span></span> <span class=\"token attr-name\">checkedChildren</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>开<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">unCheckedChildren</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>关<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">defaultChecked</span> <span class=\"token attr-name\">disabled</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Switch</span></span> <span class=\"token attr-name\">checkedChildren</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>开<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">unCheckedChildren</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>关<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">disabled</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode\n<span class=\"token punctuation\">)</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_antd.Switch, {
    checkedChildren: "\u5F00",
    unCheckedChildren: "\u5173",
    defaultChecked: true,
    disabled: true
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_antd.Switch, {
    checkedChildren: "\u5F00",
    unCheckedChildren: "\u5173",
    disabled: true
  }));
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/antd-comp-Switch-demo.index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bisheng/tmp/antd-comp-Switch-demo.index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/antd-comp/Switch/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Switch/demo/basic.md"),
    'disabled': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/antd-comp/Switch/demo/disabled.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Switch/demo/disabled.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map