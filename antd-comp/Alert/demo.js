(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["antd-comp/Alert/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Alert/demo/basic.md":
/*!************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Alert/demo/basic.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "共有四种样式 ",
      [
        "code",
        "success"
      ],
      "、",
      [
        "code",
        "info"
      ],
      "、",
      [
        "code",
        "warning"
      ],
      "、",
      [
        "code",
        "error"
      ],
      "。"
    ]
  ],
  "meta": {
    "order": 0,
    "title": "四种样式",
    "filename": "docs/antd-comp/Alert/demo/basic.md",
    "id": "docs-antd-comp-Alert-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "tsx",
      "highlighted": "import {Alert} from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"antd-comp-alert-basic-demo\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Success Text\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Info Text\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"info\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Warning Text\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Error Text\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
    }
  ],
  "highlightedCodes": {
    "tsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Alert<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>antd-comp-alert-basic-demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success Text<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Info Text<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning Text<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error Text<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>",
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>antd-comp-alert-basic-demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success Text<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Info Text<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning Text<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error Text<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

  return /*#__PURE__*/React.createElement("div", {
    className: "antd-comp-alert-basic-demo"
  }, /*#__PURE__*/React.createElement(_antd.Alert, {
    message: "Success Text",
    type: "success"
  }), /*#__PURE__*/React.createElement(_antd.Alert, {
    message: "Info Text",
    type: "info"
  }), /*#__PURE__*/React.createElement(_antd.Alert, {
    message: "Warning Text",
    type: "warning"
  }), /*#__PURE__*/React.createElement(_antd.Alert, {
    message: "Error Text",
    type: "error"
  }));
},
  "style": ".antd-comp-alert-basic-demo .ant-alert {\n    margin-bottom: 8px\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.antd-comp-alert-basic-demo</span> <span class=\"token class\">.ant-alert</span> </span><span class=\"token punctuation\">{</span>\n    <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Alert/demo/withIcon.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Alert/demo/withIcon.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "可口的图标让信息类型更加醒目。"
    ]
  ],
  "meta": {
    "order": 1,
    "title": "带有图标",
    "filename": "docs/antd-comp/Alert/demo/withIcon.md",
    "id": "docs-antd-comp-Alert-demo-withIcon"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "tsx",
      "highlighted": "import {Alert} from <span class=\"token string\">'antd'</span><span class=\"token comment\" spellcheck=\"true\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token string\">\"antd-comp-alert-with-icon-demo\"</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Success Tips\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span> showIcon <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Informational Notes\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"info\"</span> showIcon <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Warning\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span> showIcon <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Alert message<span class=\"token operator\">=</span><span class=\"token string\">\"Error\"</span> type<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span> showIcon <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Alert\n            message<span class=\"token operator\">=</span><span class=\"token string\">\"Success Tips\"</span>\n            description<span class=\"token operator\">=</span><span class=\"token string\">\"Detailed description and advice about successful copywriting.\"</span>\n            type<span class=\"token operator\">=</span><span class=\"token string\">\"success\"</span>\n            showIcon\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Alert\n            message<span class=\"token operator\">=</span><span class=\"token string\">\"Informational Notes\"</span>\n            description<span class=\"token operator\">=</span><span class=\"token string\">\"Additional description and information about copywriting.\"</span>\n            type<span class=\"token operator\">=</span><span class=\"token string\">\"info\"</span>\n            showIcon\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Alert\n            message<span class=\"token operator\">=</span><span class=\"token string\">\"Warning\"</span>\n            description<span class=\"token operator\">=</span><span class=\"token string\">\"This is a warning notice about copywriting.\"</span>\n            type<span class=\"token operator\">=</span><span class=\"token string\">\"warning\"</span>\n            showIcon\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token operator\">&lt;</span>Alert\n            message<span class=\"token operator\">=</span><span class=\"token string\">\"Error\"</span>\n            description<span class=\"token operator\">=</span><span class=\"token string\">\"This is an error message about copywriting.\"</span>\n            type<span class=\"token operator\">=</span><span class=\"token string\">\"error\"</span>\n            showIcon\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span><span class=\"token comment\" spellcheck=\"true\">;</span>"
    }
  ],
  "highlightedCodes": {
    "tsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Alert<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>antd-comp-alert-with-icon-demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success Tips<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Informational Notes<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span>\n            <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success Tips<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Detailed description and advice about successful copywriting.<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">showIcon</span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span>\n            <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Informational Notes<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Additional description and information about copywriting.<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">showIcon</span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span>\n            <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>This is a warning notice about copywriting.<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">showIcon</span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span>\n            <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>This is an error message about copywriting.<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">showIcon</span>\n        <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>",
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>antd-comp-alert-with-icon-demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success Tips<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Informational Notes<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span> <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">showIcon</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Success Tips<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Detailed description and advice about successful copywriting.<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>success<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">showIcon</span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Informational Notes<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Additional description and information about copywriting.<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">showIcon</span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Warning<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>This is a warning notice about copywriting.<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">showIcon</span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span>\n      <span class=\"token attr-name\">message</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Error<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>This is an error message about copywriting.<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>error<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">showIcon</span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

  return /*#__PURE__*/React.createElement("div", {
    className: "antd-comp-alert-with-icon-demo"
  }, /*#__PURE__*/React.createElement(_antd.Alert, {
    message: "Success Tips",
    type: "success",
    showIcon: true
  }), /*#__PURE__*/React.createElement(_antd.Alert, {
    message: "Informational Notes",
    type: "info",
    showIcon: true
  }), /*#__PURE__*/React.createElement(_antd.Alert, {
    message: "Warning",
    type: "warning",
    showIcon: true
  }), /*#__PURE__*/React.createElement(_antd.Alert, {
    message: "Error",
    type: "error",
    showIcon: true
  }), /*#__PURE__*/React.createElement(_antd.Alert, {
    message: "Success Tips",
    description: "Detailed description and advice about successful copywriting.",
    type: "success",
    showIcon: true
  }), /*#__PURE__*/React.createElement(_antd.Alert, {
    message: "Informational Notes",
    description: "Additional description and information about copywriting.",
    type: "info",
    showIcon: true
  }), /*#__PURE__*/React.createElement(_antd.Alert, {
    message: "Warning",
    description: "This is a warning notice about copywriting.",
    type: "warning",
    showIcon: true
  }), /*#__PURE__*/React.createElement(_antd.Alert, {
    message: "Error",
    description: "This is an error message about copywriting.",
    type: "error",
    showIcon: true
  }));
},
  "style": ".antd-comp-alert-with-icon-demo .ant-alert {\n    margin-bottom: 8px\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.antd-comp-alert-with-icon-demo</span> <span class=\"token class\">.ant-alert</span> </span><span class=\"token punctuation\">{</span>\n    <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/antd-comp-Alert-demo.index.js":
/*!****************************************************************!*\
  !*** ./node_modules/bisheng/tmp/antd-comp-Alert-demo.index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/antd-comp/Alert/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Alert/demo/basic.md"),
    'withIcon': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/antd-comp/Alert/demo/withIcon.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Alert/demo/withIcon.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map