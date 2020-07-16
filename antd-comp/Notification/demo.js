(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["antd-comp/Notification/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Notification/demo/basic.md":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Notification/demo/basic.md ***!
  \*******************************************************************************************************/
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
    "filename": "docs/antd-comp/Notification/demo/basic.md",
    "id": "docs-antd-comp-Notification-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Button<span class=\"token punctuation\">,</span> notification<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> openNotificationWithIcon <span class=\"token operator\">=</span> type <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    notification<span class=\"token punctuation\">[</span>type<span class=\"token punctuation\">]</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        message<span class=\"token punctuation\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n        description<span class=\"token punctuation\">:</span>\n            <span class=\"token string\">'This is the content of the notification. This is the content of the notification. This is the content of the notification.'</span><span class=\"token punctuation\">,</span>\n        duration<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>antd-comp-notification-basic-demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'open'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>基本<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'success'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Success<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'info'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Info<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'warning'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Warning<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'error'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Error<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n    mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Button<span class=\"token punctuation\">,</span> notification<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">openNotificationWithIcon</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">type</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    notification<span class=\"token punctuation\">[</span>type<span class=\"token punctuation\">]</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        message<span class=\"token operator\">:</span> <span class=\"token string\">'Notification Title'</span><span class=\"token punctuation\">,</span>\n        description<span class=\"token operator\">:</span>\n            <span class=\"token string\">'This is the content of the notification. This is the content of the notification. This is the content of the notification.'</span><span class=\"token punctuation\">,</span>\n        duration<span class=\"token operator\">:</span> <span class=\"token number\">0</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>antd-comp-notification-basic-demo<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'open'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>基本<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'success'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Success<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'info'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Info<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'warning'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Warning<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">openNotificationWithIcon</span><span class=\"token punctuation\">(</span><span class=\"token string\">'error'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Error<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n    mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

  var openNotificationWithIcon = function openNotificationWithIcon(type) {
    _antd.notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      duration: 0
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "antd-comp-notification-basic-demo"
  }, /*#__PURE__*/React.createElement(_antd.Button, {
    onClick: function onClick() {
      return openNotificationWithIcon('open');
    }
  }, "\u57FA\u672C"), /*#__PURE__*/React.createElement(_antd.Button, {
    onClick: function onClick() {
      return openNotificationWithIcon('success');
    }
  }, "Success"), /*#__PURE__*/React.createElement(_antd.Button, {
    onClick: function onClick() {
      return openNotificationWithIcon('info');
    }
  }, "Info"), /*#__PURE__*/React.createElement(_antd.Button, {
    onClick: function onClick() {
      return openNotificationWithIcon('warning');
    }
  }, "Warning"), /*#__PURE__*/React.createElement(_antd.Button, {
    onClick: function onClick() {
      return openNotificationWithIcon('error');
    }
  }, "Error"));
},
  "style": ".antd-comp-notification-basic-demo .ant-btn {\n    margin-right: 8px\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.antd-comp-notification-basic-demo</span> <span class=\"token class\">.ant-btn</span> </span><span class=\"token punctuation\">{</span>\n    <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/antd-comp-Notification-demo.index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bisheng/tmp/antd-comp-Notification-demo.index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/antd-comp/Notification/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/antd-comp/Notification/demo/basic.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map