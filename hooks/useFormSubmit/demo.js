(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hooks/useFormSubmit/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useFormSubmit/demo/basic.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useFormSubmit/demo/basic.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    [
      "p",
      "表单处理。"
    ]
  ],
  "meta": {
    "order": 0,
    "title": "基本用法",
    "filename": "docs/hooks/useFormSubmit/demo/basic.md",
    "id": "docs-hooks-useFormSubmit-demo-basic"
  },
  "toc": [
    "ul"
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Form<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>hooks<span class=\"token punctuation\">,</span> components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> controls <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'名称'</span><span class=\"token punctuation\">,</span>\n        control<span class=\"token punctuation\">:</span> Input<span class=\"token punctuation\">,</span>\n        rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>required<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">:</span> <span class=\"token string\">'请输入名称'</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        config<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n            placeholder<span class=\"token punctuation\">:</span> <span class=\"token string\">'请输入名称'</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> action <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>resolve<span class=\"token punctuation\">,</span> reject<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> window<span class=\"token punctuation\">.</span><span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span><span class=\"token string\">'success'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token number\">500</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> App <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    \n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>useFormSubmit<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> hooks<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>HooksForm<span class=\"token punctuation\">,</span> notification<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">[</span>form<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">useForm</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>submit<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">useFormSubmit</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        action<span class=\"token punctuation\">,</span>\n        form<span class=\"token punctuation\">,</span>\n        <span class=\"token function\">$onRequest</span><span class=\"token punctuation\">(</span>formData<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            formData<span class=\"token punctuation\">.</span>id <span class=\"token operator\">=</span> <span class=\"token string\">'123'</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token function\">$onResponse</span><span class=\"token punctuation\">(</span>response<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            notification<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span>response<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token function\">$onError</span><span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            notification<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>HooksForm</span> <span class=\"token attr-name\">form</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>form<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">controls</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>controls<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>submit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>提交<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>Input<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Form<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span>hooks<span class=\"token punctuation\">,</span> components<span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'baidu-aibp-react-common'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> controls <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n        name<span class=\"token operator\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'名称'</span><span class=\"token punctuation\">,</span>\n        control<span class=\"token operator\">:</span> Input<span class=\"token punctuation\">,</span>\n        rules<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n            <span class=\"token punctuation\">{</span>required<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> message<span class=\"token operator\">:</span> <span class=\"token string\">'请输入名称'</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        config<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n            placeholder<span class=\"token operator\">:</span> <span class=\"token string\">'请输入名称'</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">action</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">resolve<span class=\"token punctuation\">,</span> reject</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> window<span class=\"token punctuation\">.</span><span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span><span class=\"token string\">'success'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> <span class=\"token number\">500</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">App</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    \n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>useFormSubmit<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> hooks<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>HooksForm<span class=\"token punctuation\">,</span> notification<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> components<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">[</span>form<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">useForm</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span>submit<span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token function\">useFormSubmit</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        action<span class=\"token punctuation\">,</span>\n        form<span class=\"token punctuation\">,</span>\n        <span class=\"token function\">$onRequest</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">formData</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            formData<span class=\"token punctuation\">.</span>id <span class=\"token operator\">=</span> <span class=\"token string\">'123'</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token function\">$onResponse</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">response</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            notification<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span>response<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token function\">$onError</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">error</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n            notification<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">HooksForm</span></span> <span class=\"token attr-name\">form</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>form<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">controls</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>controls<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>submit<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>提交<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">App</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  var _antd = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

  var _baiduAibpReactCommon = __webpack_require__(/*! baidu-aibp-react-common */ "./src/index.ts");

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  var controls = [{
    name: 'name',
    label: '名称',
    control: _antd.Input,
    rules: [{
      required: true,
      message: '请输入名称'
    }],
    config: {
      placeholder: '请输入名称'
    }
  }];

  var action = function action() {
    return new Promise(function (resolve, reject) {
      return window.setTimeout(function () {
        return resolve('success');
      }, 500);
    });
  };

  var App = function App() {
    var useFormSubmit = _baiduAibpReactCommon.hooks.useFormSubmit;
    var HooksForm = _baiduAibpReactCommon.components.HooksForm,
        notification = _baiduAibpReactCommon.components.notification;

    var _Form$useForm = _antd.Form.useForm(),
        _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
        form = _Form$useForm2[0];

    var _useFormSubmit = useFormSubmit({
      action: action,
      form: form,
      $onRequest: function $onRequest(formData) {
        formData.id = '123';
      },
      $onResponse: function $onResponse(response) {
        notification.success(response);
      },
      $onError: function $onError(error) {
        notification.error(error);
      }
    }),
        submit = _useFormSubmit.submit;

    return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(HooksForm, {
      form: form,
      controls: controls
    }), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
      type: "primary",
      onClick: submit
    }, "\u63D0\u4EA4"));
  };

  return /*#__PURE__*/_react["default"].createElement(App, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/hooks-useFormSubmit-demo.index.js":
/*!********************************************************************!*\
  !*** ./node_modules/bisheng/tmp/hooks-useFormSubmit-demo.index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./docs/hooks/useFormSubmit/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/hooks/useFormSubmit/demo/basic.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map