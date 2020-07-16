(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hooks/useTable/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useTable/demo/basic.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useTable/demo/basic.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "表格处理。"
    ]
  ],
  "meta": {
    "order": 0,
    "title": "基本用法",
    "filename": "docs/hooks/useTable/demo/basic.md",
    "id": "docs-hooks-useTable-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>hooks<span class=\"token punctuation\">,</span> components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Provider <span class=\"token keyword\">as</span> ReduxProvider<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react-redux'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>createStore<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'redux'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> store <span class=\"token operator\">=</span> <span class=\"token function\">createStore</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> fetchData <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>resolve<span class=\"token punctuation\">,</span> reject<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> pageData <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        totalCount<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n        pageNo<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n        pageSize<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span><span class=\"token punctuation\">,</span>\n        result<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>id<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Alice'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>id<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Bob'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    window<span class=\"token punctuation\">.</span><span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span>pageData<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token number\">500</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    \n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'id'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'id'</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'名称'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> TableDemo <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    \n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>useTable<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> hooks<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>HooksTable<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>tableProps<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">useTable</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        action<span class=\"token punctuation\">:</span> fetchData\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token operator\">&lt;</span>HooksTable <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>tableProps<span class=\"token punctuation\">}</span> columns<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span> rowKey<span class=\"token operator\">=</span><span class=\"token string\">\"id\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ReduxProvider</span> <span class=\"token attr-name\">store</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>store<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TableDemo</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ReduxProvider</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>hooks<span class=\"token punctuation\">,</span> components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Provider <span class=\"token keyword\">as</span> ReduxProvider<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react-redux'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>createStore<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'redux'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> store <span class=\"token operator\">=</span> <span class=\"token function\">createStore</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">fetchData</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">resolve<span class=\"token punctuation\">,</span> reject</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> pageData <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n        totalCount<span class=\"token operator\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n        pageNo<span class=\"token operator\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n        pageSize<span class=\"token operator\">:</span> <span class=\"token number\">10</span><span class=\"token punctuation\">,</span>\n        result<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>id<span class=\"token operator\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> name<span class=\"token operator\">:</span> <span class=\"token string\">'Alice'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">{</span>id<span class=\"token operator\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> name<span class=\"token operator\">:</span> <span class=\"token string\">'Bob'</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    window<span class=\"token punctuation\">.</span><span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span>pageData<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token number\">500</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    \n\n<span class=\"token keyword\">const</span> columns <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">'id'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token operator\">:</span> <span class=\"token string\">'id'</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">'名称'</span><span class=\"token punctuation\">,</span>\n        dataIndex<span class=\"token operator\">:</span> <span class=\"token string\">'name'</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">TableDemo</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    \n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>useTable<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> hooks<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>HooksTable<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>tableProps<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">useTable</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        action<span class=\"token operator\">:</span> fetchData\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">HooksTable</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">tableProps</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">columns</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>columns<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">rowKey</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>id<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">App</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">ReduxProvider</span></span> <span class=\"token attr-name\">store</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>store<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TableDemo</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">ReduxProvider</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">App</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

  var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  var store = (0, _redux.createStore)(function () {});

  var fetchData = function fetchData() {
    return new Promise(function (resolve, reject) {
      var pageData = {
        totalCount: 2,
        pageNo: 1,
        pageSize: 10,
        result: [{
          id: 1,
          name: 'Alice'
        }, {
          id: 2,
          name: 'Bob'
        }]
      };
      window.setTimeout(function () {
        return resolve(pageData);
      }, 500);
    });
  };

  var columns = [{
    title: 'id',
    dataIndex: 'id'
  }, {
    title: '名称',
    dataIndex: 'name'
  }];

  var TableDemo = function TableDemo() {
    var useTable = _baiduAibpReactCommon.hooks.useTable;
    var HooksTable = _baiduAibpReactCommon.components.HooksTable;

    var _useTable = useTable({
      action: fetchData
    }),
        tableProps = _useTable.tableProps;

    return /*#__PURE__*/_react["default"].createElement(HooksTable, _extends({}, tableProps, {
      columns: columns,
      rowKey: "id"
    }));
  };

  var App = function App() {
    return /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
      store: store
    }, /*#__PURE__*/_react["default"].createElement(TableDemo, null));
  };

  return /*#__PURE__*/_react["default"].createElement(App, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/hooks-useTable-demo.index.js":
/*!***************************************************************!*\
  !*** ./node_modules/bisheng/tmp/hooks-useTable-demo.index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/hooks/useTable/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useTable/demo/basic.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map