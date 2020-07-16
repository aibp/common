(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["antd-comp/Upload/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Upload/demo/basic.md":
/*!*************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Upload/demo/basic.md ***!
  \*************************************************************************************************/
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
    "order": 0,
    "title": "基本用法",
    "filename": "docs/antd-comp/Upload/demo/basic.md",
    "id": "docs-antd-comp-Upload-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>UploadOutlined<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@ant-design/icons'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    action<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> file<span class=\"token punctuation\">,</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">,</span> fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    defaultFileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n            uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n            name<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n            status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n            response<span class=\"token punctuation\">:</span> <span class=\"token string\">'Server Error 500'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// custom error message to show</span>\n            url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://www.baidu.com/xxx.png'</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>\n            uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n            name<span class=\"token punctuation\">:</span> <span class=\"token string\">'yyy.png'</span><span class=\"token punctuation\">,</span>\n            status<span class=\"token punctuation\">:</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">,</span>\n            url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://www.baidu.com/yyy.png'</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>\n            uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n            name<span class=\"token punctuation\">:</span> <span class=\"token string\">'zzz.png'</span><span class=\"token punctuation\">,</span>\n            status<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span>\n            response<span class=\"token punctuation\">:</span> <span class=\"token string\">'Server Error 500'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// custom error message to show</span>\n            url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://www.baidu.com/zzz.png'</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>UploadOutlined</span> <span class=\"token punctuation\">/></span></span> Upload\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>UploadOutlined<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@ant-design/icons'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    action<span class=\"token operator\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> file<span class=\"token punctuation\">,</span> fileList <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">,</span> fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    defaultFileList<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n            uid<span class=\"token operator\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n            name<span class=\"token operator\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n            status<span class=\"token operator\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n            response<span class=\"token operator\">:</span> <span class=\"token string\">'Server Error 500'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// custom error message to show</span>\n            url<span class=\"token operator\">:</span> <span class=\"token string\">'http://www.baidu.com/xxx.png'</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>\n            uid<span class=\"token operator\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n            name<span class=\"token operator\">:</span> <span class=\"token string\">'yyy.png'</span><span class=\"token punctuation\">,</span>\n            status<span class=\"token operator\">:</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">,</span>\n            url<span class=\"token operator\">:</span> <span class=\"token string\">'http://www.baidu.com/yyy.png'</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>\n            uid<span class=\"token operator\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n            name<span class=\"token operator\">:</span> <span class=\"token string\">'zzz.png'</span><span class=\"token punctuation\">,</span>\n            status<span class=\"token operator\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span>\n            response<span class=\"token operator\">:</span> <span class=\"token string\">'Server Error 500'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// custom error message to show</span>\n            url<span class=\"token operator\">:</span> <span class=\"token string\">'http://www.baidu.com/zzz.png'</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">UploadOutlined</span></span> <span class=\"token punctuation\">/></span></span> Upload\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n    mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

  var _icons = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");

  var props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: function onChange(_ref) {
      var file = _ref.file,
          fileList = _ref.fileList;

      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    defaultFileList: [{
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500',
      // custom error message to show
      url: 'http://www.baidu.com/xxx.png'
    }, {
      uid: '2',
      name: 'yyy.png',
      status: 'uploading',
      url: 'http://www.baidu.com/yyy.png'
    }, {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500',
      // custom error message to show
      url: 'http://www.baidu.com/zzz.png'
    }]
  };
  return /*#__PURE__*/React.createElement(_antd.Upload, props, /*#__PURE__*/React.createElement(_antd.Button, null, /*#__PURE__*/React.createElement(_icons.UploadOutlined, null), " Upload"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/antd-comp-Upload-demo.index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bisheng/tmp/antd-comp-Upload-demo.index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/antd-comp/Upload/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Upload/demo/basic.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map