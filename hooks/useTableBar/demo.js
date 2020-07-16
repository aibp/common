(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hooks/useTableBar/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useTableBar/demo/basic.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useTableBar/demo/basic.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "表格上方Bar。"
    ]
  ],
  "meta": {
    "order": 0,
    "title": "基本用法",
    "filename": "docs/hooks/useTableBar/demo/basic.md",
    "id": "docs-hooks-useTableBar-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>PlusOutlined<span class=\"token punctuation\">,</span> SyncOutlined<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@ant-design/icons'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>hooks<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>Search<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>useTableBar<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> hooks<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> tableBarConfig <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    leftConfig<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>\n                key<span class=\"token punctuation\">:</span> <span class=\"token string\">'create'</span><span class=\"token punctuation\">,</span>\n                control<span class=\"token punctuation\">:</span> Button<span class=\"token punctuation\">,</span>\n                children<span class=\"token punctuation\">:</span> <span class=\"token string\">'新建'</span><span class=\"token punctuation\">,</span>\n                config<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n                    type<span class=\"token punctuation\">:</span> <span class=\"token string\">'primary'</span><span class=\"token punctuation\">,</span>\n                    icon<span class=\"token punctuation\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>PlusOutlined</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n                <span class=\"token punctuation\">}</span>\n            <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    rightConfig<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">'search'</span><span class=\"token punctuation\">,</span>\n            control<span class=\"token punctuation\">:</span> Search<span class=\"token punctuation\">,</span>\n            config<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n                placeholder<span class=\"token punctuation\">:</span> <span class=\"token string\">'请输入名称搜索'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">'reload'</span><span class=\"token punctuation\">,</span>\n            control<span class=\"token punctuation\">:</span> Button<span class=\"token punctuation\">,</span>\n            config<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n                icon<span class=\"token punctuation\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>SyncOutlined</span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>tableBarComp<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">useTableBar</span><span class=\"token punctuation\">(</span>tableBarConfig<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>aibp-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>tableBarComp<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>PlusOutlined<span class=\"token punctuation\">,</span> SyncOutlined<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@ant-design/icons'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>hooks<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>Search<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>useTableBar<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> hooks<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> tableBarConfig <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    leftConfig<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>\n                key<span class=\"token operator\">:</span> <span class=\"token string\">'create'</span><span class=\"token punctuation\">,</span>\n                control<span class=\"token operator\">:</span> Button<span class=\"token punctuation\">,</span>\n                children<span class=\"token operator\">:</span> <span class=\"token string\">'新建'</span><span class=\"token punctuation\">,</span>\n                config<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n                    type<span class=\"token operator\">:</span> <span class=\"token string\">'primary'</span><span class=\"token punctuation\">,</span>\n                    icon<span class=\"token operator\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">PlusOutlined</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n                <span class=\"token punctuation\">}</span>\n            <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    rightConfig<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">'search'</span><span class=\"token punctuation\">,</span>\n            control<span class=\"token operator\">:</span> Search<span class=\"token punctuation\">,</span>\n            config<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n                placeholder<span class=\"token operator\">:</span> <span class=\"token string\">'请输入名称搜索'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">'reload'</span><span class=\"token punctuation\">,</span>\n            control<span class=\"token operator\">:</span> Button<span class=\"token punctuation\">,</span>\n            config<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n                icon<span class=\"token operator\">:</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">SyncOutlined</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>tableBarComp<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">useTableBar</span><span class=\"token punctuation\">(</span>tableBarConfig<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>aibp-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>tableBarComp<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

  var _icons = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  var Search = _antd.Input.Search;
  var useTableBar = _baiduAibpReactCommon.hooks.useTableBar;
  var tableBarConfig = {
    leftConfig: [{
      key: 'create',
      control: _antd.Button,
      children: '新建',
      config: {
        type: 'primary',
        icon: /*#__PURE__*/_react["default"].createElement(_icons.PlusOutlined, null)
      }
    }],
    rightConfig: [{
      key: 'search',
      control: Search,
      config: {
        placeholder: '请输入名称搜索'
      }
    }, {
      key: 'reload',
      control: _antd.Button,
      config: {
        icon: /*#__PURE__*/_react["default"].createElement(_icons.SyncOutlined, null)
      }
    }]
  };

  var _useTableBar = useTableBar(tableBarConfig),
      tableBarComp = _useTableBar.tableBarComp;

  return /*#__PURE__*/_react["default"].createElement("div", {
    "class": "aibp-list"
  }, tableBarComp);
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/hooks-useTableBar-demo.index.js":
/*!******************************************************************!*\
  !*** ./node_modules/bisheng/tmp/hooks-useTableBar-demo.index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/hooks/useTableBar/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useTableBar/demo/basic.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map