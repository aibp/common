(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["antd-comp/Tabs/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Tabs/demo/basic.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Tabs/demo/basic.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "基础标签页"
    ]
  ],
  "meta": {
    "order": 0,
    "title": "基本用法",
    "filename": "docs/antd-comp/Tabs/demo/basic.md",
    "id": "docs-antd-comp-Tabs-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Tabs<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>TabPane<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> handleTabChange <span class=\"token operator\">=</span> key <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tabs</span> <span class=\"token attr-name\">defaultActiveKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>handleTabChange<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">1</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">2\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">2</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TabPane</span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab</span> <span class=\"token attr-name\">3\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">3</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TabPane</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tabs</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Tabs<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>TabPane<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Tabs<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">handleTabChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">key</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>key<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tabs</span></span> <span class=\"token attr-name\">defaultActiveKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>handleTabChange<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TabPane</span></span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab 1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">1</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">TabPane</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TabPane</span></span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab 2<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">2</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">TabPane</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TabPane</span></span> <span class=\"token attr-name\">tab</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Tab 3<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>3<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            Content <span class=\"token keyword\">of</span> Tab Pane <span class=\"token number\">3</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">TabPane</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tabs</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

  var TabPane = _antd.Tabs.TabPane;

  var handleTabChange = function handleTabChange(key) {
    console.log(key);
  };

  return /*#__PURE__*/React.createElement(_antd.Tabs, {
    defaultActiveKey: "1",
    onChange: handleTabChange
  }, /*#__PURE__*/React.createElement(TabPane, {
    tab: "Tab 1",
    key: "1"
  }, "Content of Tab Pane 1"), /*#__PURE__*/React.createElement(TabPane, {
    tab: "Tab 2",
    key: "2"
  }, "Content of Tab Pane 2"), /*#__PURE__*/React.createElement(TabPane, {
    tab: "Tab 3",
    key: "3"
  }, "Content of Tab Pane 3"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/antd-comp-Tabs-demo.index.js":
/*!***************************************************************!*\
  !*** ./node_modules/bisheng/tmp/antd-comp-Tabs-demo.index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/antd-comp/Tabs/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Tabs/demo/basic.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map