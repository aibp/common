(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["antd-comp/Popover/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Popover/demo/basic.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Popover/demo/basic.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "基本用法"
    ]
  ],
  "meta": {
    "title": "基本用法",
    "filename": "docs/antd-comp/Popover/demo/basic.md",
    "id": "docs-antd-comp-Popover-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Popover<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>EditOutlined<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@ant-design/icons'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> content <span class=\"token operator\">=</span> <span class=\"token string\">\"具有标题的双行或多行气泡提示，用于解释说明和相关提示\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> title <span class=\"token operator\">=</span> <span class=\"token string\">\"标题文字\"</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Popover</span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>title<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditOutlined</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Popover</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Popover<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>EditOutlined<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@ant-design/icons'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> content <span class=\"token operator\">=</span> <span class=\"token string\">\"具有标题的双行或多行气泡提示，用于解释说明和相关提示\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> title <span class=\"token operator\">=</span> <span class=\"token string\">\"标题文字\"</span><span class=\"token punctuation\">;</span>\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Popover</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>title<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">content</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">EditOutlined</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Popover</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

  var _icons = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");

  var content = "具有标题的双行或多行气泡提示，用于解释说明和相关提示";
  var title = "标题文字";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_antd.Popover, {
    title: title,
    content: content,
    placement: "right"
  }, /*#__PURE__*/React.createElement(_icons.EditOutlined, null)));
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/antd-comp-Popover-demo.index.js":
/*!******************************************************************!*\
  !*** ./node_modules/bisheng/tmp/antd-comp-Popover-demo.index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/antd-comp/Popover/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Popover/demo/basic.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map