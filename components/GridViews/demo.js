(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/GridViews/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/GridViews/demo/basic.md":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/GridViews/demo/basic.md ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "GridViews的基本用法。"
    ]
  ],
  "meta": {
    "order": 0,
    "title": "基本用法",
    "filename": "docs/components/GridViews/demo/basic.md",
    "id": "docs-components-GridViews-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>GridViews<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'basic'</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'基本信息'</span><span class=\"token punctuation\">,</span>\n        options<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'ID'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'ID'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'12345678'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'名称'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'详情名称'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'createTime'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'创建时间'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'2020-07-01 10:00:00'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'endTime'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'结束时间'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'2020-07-02 10:00:00'</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'other'</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'其他信息'</span><span class=\"token punctuation\">,</span>\n        options<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'ID'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'ID'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'12345678'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'名称'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'详情名称'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'createTime'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'创建时间'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'2020-07-01 10:00:00'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'endTime'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'结束时间'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'2020-07-02 10:00:00'</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>GridViews</span> <span class=\"token attr-name\">colCount</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">3</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">labelWidth</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">120</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>GridViews<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">'basic'</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">'基本信息'</span><span class=\"token punctuation\">,</span>\n        options<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'ID'</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'ID'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'12345678'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'名称'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'详情名称'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'createTime'</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'创建时间'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'2020-07-01 10:00:00'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'endTime'</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'结束时间'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'2020-07-02 10:00:00'</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">'other'</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">'其他信息'</span><span class=\"token punctuation\">,</span>\n        options<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'ID'</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'ID'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'12345678'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'名称'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'详情名称'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'createTime'</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'创建时间'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'2020-07-01 10:00:00'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'endTime'</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'结束时间'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'2020-07-02 10:00:00'</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">GridViews</span></span> <span class=\"token attr-name\">colCount</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">3</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">labelWidth</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">120</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var GridViews = _baiduAibpReactCommon.components.GridViews;
  var options = [{
    key: 'basic',
    title: '基本信息',
    options: [{
      key: 'ID',
      label: 'ID',
      content: '12345678'
    }, {
      key: 'name',
      label: '名称',
      content: '详情名称'
    }, {
      key: 'createTime',
      label: '创建时间',
      content: '2020-07-01 10:00:00'
    }, {
      key: 'endTime',
      label: '结束时间',
      content: '2020-07-02 10:00:00'
    }]
  }, {
    key: 'other',
    title: '其他信息',
    options: [{
      key: 'ID',
      label: 'ID',
      content: '12345678'
    }, {
      key: 'name',
      label: '名称',
      content: '详情名称'
    }, {
      key: 'createTime',
      label: '创建时间',
      content: '2020-07-01 10:00:00'
    }, {
      key: 'endTime',
      label: '结束时间',
      content: '2020-07-02 10:00:00'
    }]
  }];
  return /*#__PURE__*/_react["default"].createElement(GridViews, {
    colCount: 3,
    options: options,
    labelWidth: 120
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/GridViews/demo/item.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/GridViews/demo/item.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "GridViews.Item 可以单独使用。"
    ]
  ],
  "meta": {
    "order": 1,
    "title": "GridViews.Item 用法",
    "filename": "docs/components/GridViews/demo/item.md",
    "id": "docs-components-GridViews-demo-item"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>GridViews<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'ID'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'ID'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'12345678'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'名称'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'详情名称'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'createTime'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'创建时间'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'2020-07-01 10:00:00'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'endTime'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'结束时间'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'2020-07-02 10:00:00'</span><span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>GridViews.Item</span> <span class=\"token attr-name\">colCount</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">3</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">labelWidth</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">100</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>GridViews<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'ID'</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'ID'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'12345678'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'名称'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'详情名称'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'createTime'</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'创建时间'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'2020-07-01 10:00:00'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'endTime'</span><span class=\"token punctuation\">,</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'结束时间'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'2020-07-02 10:00:00'</span><span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">GridViews.Item</span></span> <span class=\"token attr-name\">colCount</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">3</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">labelWidth</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">100</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var GridViews = _baiduAibpReactCommon.components.GridViews;
  var options = [{
    key: 'ID',
    label: 'ID',
    content: '12345678'
  }, {
    key: 'name',
    label: '名称',
    content: '详情名称'
  }, {
    key: 'createTime',
    label: '创建时间',
    content: '2020-07-01 10:00:00'
  }, {
    key: 'endTime',
    label: '结束时间',
    content: '2020-07-02 10:00:00'
  }];
  return /*#__PURE__*/_react["default"].createElement(GridViews.Item, {
    colCount: 3,
    options: options,
    labelWidth: 100
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/components-GridViews-demo.index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bisheng/tmp/components-GridViews-demo.index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/components/GridViews/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/GridViews/demo/basic.md"),
    'item': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/components/GridViews/demo/item.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/GridViews/demo/item.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map