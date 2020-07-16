(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/Sidebar/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/Sidebar/demo/basic.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/Sidebar/demo/basic.md ***!
  \***************************************************************************************************/
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
    "filename": "docs/components/Sidebar/demo/basic.md",
    "id": "docs-components-Sidebar-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>Sidebar<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> sidebarOptions <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidebar1'</span><span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidebar1'</span><span class=\"token punctuation\">,</span> link<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`/sidebar1`</span></span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidebar2'</span><span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidebar2'</span><span class=\"token punctuation\">,</span> link<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`/sidebar2`</span></span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidebar3'</span><span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Sidebar3'</span><span class=\"token punctuation\">,</span> link<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`/sidebar3`</span></span><span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Sidebar</span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>sidebarOptions<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">activeKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Sidebar1<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>Sidebar<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> sidebarOptions <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'Sidebar1'</span><span class=\"token punctuation\">,</span> title<span class=\"token operator\">:</span> <span class=\"token string\">'Sidebar1'</span><span class=\"token punctuation\">,</span> link<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">/sidebar1</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'Sidebar2'</span><span class=\"token punctuation\">,</span> title<span class=\"token operator\">:</span> <span class=\"token string\">'Sidebar2'</span><span class=\"token punctuation\">,</span> link<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">/sidebar2</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>key<span class=\"token operator\">:</span> <span class=\"token string\">'Sidebar3'</span><span class=\"token punctuation\">,</span> title<span class=\"token operator\">:</span> <span class=\"token string\">'Sidebar3'</span><span class=\"token punctuation\">,</span> link<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">/sidebar3</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Sidebar</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>sidebarOptions<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">activeKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Sidebar1<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var Sidebar = _baiduAibpReactCommon.components.Sidebar;
  var sidebarOptions = [{
    key: 'Sidebar1',
    title: 'Sidebar1',
    link: "/sidebar1"
  }, {
    key: 'Sidebar2',
    title: 'Sidebar2',
    link: "/sidebar2"
  }, {
    key: 'Sidebar3',
    title: 'Sidebar3',
    link: "/sidebar3"
  }];
  return /*#__PURE__*/_react["default"].createElement(Sidebar, {
    options: sidebarOptions,
    activeKey: "Sidebar1"
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/components-Sidebar-demo.index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bisheng/tmp/components-Sidebar-demo.index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/components/Sidebar/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/components/Sidebar/demo/basic.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map