(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hooks/useChart/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useChart/demo/basic.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useChart/demo/basic.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "图表处理。"
    ]
  ],
  "meta": {
    "order": 0,
    "title": "图表处理",
    "filename": "docs/hooks/useChart/demo/basic.md",
    "id": "docs-hooks-useChart-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// import {Input, Button} from 'antd';</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>hooks<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>useChart<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> hooks<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    yAxis<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        type<span class=\"token punctuation\">:</span> <span class=\"token string\">'value'</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    xAxis<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'c'</span><span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    series<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n            type<span class=\"token punctuation\">:</span> <span class=\"token string\">'line'</span><span class=\"token punctuation\">,</span>\n            data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token number\">10</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">,</span> <span class=\"token number\">30</span><span class=\"token punctuation\">]</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>chartComp<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">useChart</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>chartComp<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\">// import {Input, Button} from 'antd';</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>hooks<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>useChart<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> hooks<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    yAxis<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        type<span class=\"token operator\">:</span> <span class=\"token string\">'value'</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    xAxis<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        data<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'a'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'b'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'c'</span><span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    series<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n            type<span class=\"token operator\">:</span> <span class=\"token string\">'line'</span><span class=\"token punctuation\">,</span>\n            data<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token number\">10</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">,</span> <span class=\"token number\">30</span><span class=\"token punctuation\">]</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">App</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>chartComp<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">useChart</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>chartComp<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">App</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  // import {Input, Button} from 'antd';
  var useChart = _baiduAibpReactCommon.hooks.useChart;
  var options = {
    yAxis: {
      type: 'value'
    },
    xAxis: {
      data: ['a', 'b', 'c']
    },
    series: [{
      type: 'line',
      data: [10, 20, 30]
    }]
  };

  var App = function App() {
    var _useChart = useChart({
      options: options
    }),
        chartComp = _useChart.chartComp;

    return /*#__PURE__*/_react["default"].createElement("div", null, chartComp);
  };

  return /*#__PURE__*/_react["default"].createElement(App, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/hooks-useChart-demo.index.js":
/*!***************************************************************!*\
  !*** ./node_modules/bisheng/tmp/hooks-useChart-demo.index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/hooks/useChart/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useChart/demo/basic.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map