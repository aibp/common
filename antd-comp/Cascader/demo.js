(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["antd-comp/Cascader/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Cascader/demo/basic.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Cascader/demo/basic.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [

  ],
  "meta": {
    "order": 0,
    "title": "基本用法",
    "filename": "docs/antd-comp/Cascader/demo/basic.md",
    "id": "docs-antd-comp-Cascader-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Cascader<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>\n                value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n                label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n                children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n                    <span class=\"token punctuation\">{</span>\n                        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n                        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n                    <span class=\"token punctuation\">}</span>\n                <span class=\"token punctuation\">]</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>\n                value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n                label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n                children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n                    <span class=\"token punctuation\">{</span>\n                        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n                        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n                    <span class=\"token punctuation\">}</span>\n                <span class=\"token punctuation\">]</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select\"</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Cascader<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>\n                value<span class=\"token operator\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n                label<span class=\"token operator\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n                children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n                    <span class=\"token punctuation\">{</span>\n                        value<span class=\"token operator\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n                        label<span class=\"token operator\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n                    <span class=\"token punctuation\">}</span>\n                <span class=\"token punctuation\">]</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>\n                value<span class=\"token operator\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n                label<span class=\"token operator\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n                children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n                    <span class=\"token punctuation\">{</span>\n                        value<span class=\"token operator\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n                        label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n                    <span class=\"token punctuation\">}</span>\n                <span class=\"token punctuation\">]</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please select<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

  var options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake'
      }]
    }]
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men'
      }]
    }]
  }];
  return /*#__PURE__*/React.createElement(_antd.Cascader, {
    options: options,
    placeholder: "Please select"
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/antd-comp-Cascader-demo.index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bisheng/tmp/antd-comp-Cascader-demo.index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/antd-comp/Cascader/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Cascader/demo/basic.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map