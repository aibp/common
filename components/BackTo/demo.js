(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/BackTo/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/BackTo/demo/basic.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/BackTo/demo/basic.md ***!
  \**************************************************************************************************/
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
    "filename": "docs/components/BackTo/demo/basic.md",
    "id": "docs-components-BackTo-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>BackTo<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> option <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    backText<span class=\"token punctuation\">:</span> <span class=\"token string\">'返回'</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx详情'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BackTo</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">option</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>option<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>BackTo<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> option <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    backText<span class=\"token operator\">:</span> <span class=\"token string\">'返回'</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'xxx详情'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">BackTo</span></span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">option</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>option<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var BackTo = _baiduAibpReactCommon.components.BackTo;
  var option = {
    backText: '返回',
    title: 'xxx详情'
  };
  return /*#__PURE__*/_react["default"].createElement(BackTo, {
    to: "/",
    option: option
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/BackTo/demo/buttonConfig.md":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/BackTo/demo/buttonConfig.md ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "设置按钮部分。"
    ]
  ],
  "meta": {
    "order": 3,
    "title": "按钮部分",
    "filename": "docs/components/BackTo/demo/buttonConfig.md",
    "id": "docs-components-BackTo-demo-buttonConfig"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>BackTo<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> option <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx详情'</span><span class=\"token punctuation\">,</span>\n    titlePosition<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span><span class=\"token punctuation\">,</span>\n    buttonConfig<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">'start'</span><span class=\"token punctuation\">,</span>\n            text<span class=\"token punctuation\">:</span> <span class=\"token string\">'启用'</span><span class=\"token punctuation\">,</span>\n            action<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n                console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'启用'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">'delete'</span><span class=\"token punctuation\">,</span>\n            text<span class=\"token punctuation\">:</span> <span class=\"token string\">'删除'</span><span class=\"token punctuation\">,</span>\n            action<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n                console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'删除'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BackTo</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>button<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">option</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>option<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>BackTo<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> option <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'xxx详情'</span><span class=\"token punctuation\">,</span>\n    titlePosition<span class=\"token operator\">:</span> <span class=\"token string\">'left'</span><span class=\"token punctuation\">,</span>\n    buttonConfig<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">'start'</span><span class=\"token punctuation\">,</span>\n            text<span class=\"token operator\">:</span> <span class=\"token string\">'启用'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token function-variable function\">action</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n                console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'启用'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">'delete'</span><span class=\"token punctuation\">,</span>\n            text<span class=\"token operator\">:</span> <span class=\"token string\">'删除'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token function-variable function\">action</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n                console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'删除'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">BackTo</span></span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>button<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">option</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>option<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var BackTo = _baiduAibpReactCommon.components.BackTo;
  var option = {
    title: 'xxx详情',
    titlePosition: 'left',
    buttonConfig: [{
      key: 'start',
      text: '启用',
      action: function action() {
        console.log('启用');
      }
    }, {
      key: 'delete',
      text: '删除',
      action: function action() {
        console.log('删除');
      }
    }]
  };
  return /*#__PURE__*/_react["default"].createElement(BackTo, {
    to: "/",
    type: "button",
    option: option
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/BackTo/demo/buttonType.md":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/BackTo/demo/buttonType.md ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "按钮类型。"
    ]
  ],
  "meta": {
    "order": 1,
    "title": "按钮类型",
    "filename": "docs/components/BackTo/demo/buttonType.md",
    "id": "docs-components-BackTo-demo-buttonType"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>BackTo<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> option <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx详情'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BackTo</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>button<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">option</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>option<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>BackTo<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> option <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'xxx详情'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">BackTo</span></span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>button<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">option</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>option<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var BackTo = _baiduAibpReactCommon.components.BackTo;
  var option = {
    title: 'xxx详情'
  };
  return /*#__PURE__*/_react["default"].createElement(BackTo, {
    to: "/",
    type: "button",
    option: option
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/BackTo/demo/titlePosition.md":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/BackTo/demo/titlePosition.md ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "设置标题位置在左侧。"
    ]
  ],
  "meta": {
    "order": 2,
    "title": "设置标题位置",
    "filename": "docs/components/BackTo/demo/titlePosition.md",
    "id": "docs-components-BackTo-demo-titlePosition"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>BackTo<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> option <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx详情'</span><span class=\"token punctuation\">,</span>\n    titlePosition<span class=\"token punctuation\">:</span> <span class=\"token string\">'left'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BackTo</span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>button<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">option</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>option<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>BackTo<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> option <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'xxx详情'</span><span class=\"token punctuation\">,</span>\n    titlePosition<span class=\"token operator\">:</span> <span class=\"token string\">'left'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">BackTo</span></span> <span class=\"token attr-name\">to</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>button<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">option</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>option<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var BackTo = _baiduAibpReactCommon.components.BackTo;
  var option = {
    title: 'xxx详情',
    titlePosition: 'left'
  };
  return /*#__PURE__*/_react["default"].createElement(BackTo, {
    to: "/",
    type: "button",
    option: option
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/components-BackTo-demo.index.js":
/*!******************************************************************!*\
  !*** ./node_modules/bisheng/tmp/components-BackTo-demo.index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/components/BackTo/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/BackTo/demo/basic.md"),
    'buttonConfig': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/components/BackTo/demo/buttonConfig.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/BackTo/demo/buttonConfig.md"),
    'buttonType': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/components/BackTo/demo/buttonType.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/BackTo/demo/buttonType.md"),
    'titlePosition': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/components/BackTo/demo/titlePosition.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/BackTo/demo/titlePosition.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map