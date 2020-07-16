(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["antd-comp/Tooltip/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Tooltip/demo/basic.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Tooltip/demo/basic.md ***!
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
    "filename": "docs/antd-comp/Tooltip/demo/basic.md",
    "id": "docs-antd-comp-Tooltip-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Tooltip<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>QuestionOutlined<span class=\"token punctuation\">,</span> ExclamationOutlined<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@ant-design/icons'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tooltip</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>单行气泡提示，用于解释说明、提示等<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>QuestionOutlined</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tooltip</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tooltip</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>在列表中对异常状态进行说明<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ExclamationOutlined</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tooltip</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Tooltip<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>QuestionOutlined<span class=\"token punctuation\">,</span> ExclamationOutlined<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@ant-design/icons'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tooltip</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>单行气泡提示，用于解释说明、提示等<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">QuestionOutlined</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tooltip</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tooltip</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>在列表中对异常状态进行说明<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">ExclamationOutlined</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tooltip</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

  var _icons = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_antd.Tooltip, {
    title: "\u5355\u884C\u6C14\u6CE1\u63D0\u793A\uFF0C\u7528\u4E8E\u89E3\u91CA\u8BF4\u660E\u3001\u63D0\u793A\u7B49",
    placement: "right"
  }, /*#__PURE__*/React.createElement(_icons.QuestionOutlined, null)), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_antd.Tooltip, {
    title: "\u5728\u5217\u8868\u4E2D\u5BF9\u5F02\u5E38\u72B6\u6001\u8FDB\u884C\u8BF4\u660E",
    placement: "right"
  }, /*#__PURE__*/React.createElement(_icons.ExclamationOutlined, null)));
},
  "style": ".anticon-question, .anticon-exclamation {\n    width: 14px;\n    height: 14px;\n    border: 1px solid #999;\n    color: #999;\n    font-size: 12px;\n}\n.anticon-question:hover {\n    background: #108CEE;\n    color: #fff;\n    border: 1px solid #108CEE;\n}\n.anticon-exclamation:hover {\n    background: #F38900;\n    color: #fff;\n    border: 1px solid #F38900;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.anticon-question</span>, <span class=\"token class\">.anticon-exclamation</span> </span><span class=\"token punctuation\">{</span>\n    <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">14</span>px<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">14</span>px<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n    <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n    <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.anticon-question</span><span class=\"token pseudo-class\">:hover</span> </span><span class=\"token punctuation\">{</span>\n    <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#108CEE</span><span class=\"token punctuation\">;</span>\n    <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n    <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#108CEE</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.anticon-exclamation</span><span class=\"token pseudo-class\">:hover</span> </span><span class=\"token punctuation\">{</span>\n    <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#F38900</span><span class=\"token punctuation\">;</span>\n    <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#fff</span><span class=\"token punctuation\">;</span>\n    <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#F38900</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/antd-comp-Tooltip-demo.index.js":
/*!******************************************************************!*\
  !*** ./node_modules/bisheng/tmp/antd-comp-Tooltip-demo.index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/antd-comp/Tooltip/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Tooltip/demo/basic.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map