(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/BackTo/demo~components/BottomSubmit/demo~components/ColorPicker/demo~components/ExpandIco~3792d2c6"],{

/***/ "./src/components/BackTo/index.less":
/*!******************************************!*\
  !*** ./src/components/BackTo/index.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/BackTo/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/BackTo/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.less */ "./src/components/BackTo/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);






var isDev = "development" === 'development';

var _require = __webpack_require__(isDev ? /*! react-router */ "./node_modules/bisheng/node_modules/react-router/umd/ReactRouter.js" : /*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js"),
    Link = _require.Link;

var BACK_TYPES = {
  ARROW: 'arrow',
  BUTTON: 'button'
};
var TITLE_POSITIONS = {
  CENTER: 'center',
  LEFT: 'left',
  RIGHT: 'right'
};
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$type = props.type,
      type = _props$type === void 0 ? BACK_TYPES.ARROW : _props$type,
      _props$to = props.to,
      to = _props$to === void 0 ? '/' : _props$to,
      _props$option = props.option,
      option = _props$option === void 0 ? {} : _props$option,
      className = props.className;
  var title = option.title,
      _option$titlePosition = option.titlePosition,
      titlePosition = _option$titlePosition === void 0 ? TITLE_POSITIONS.CENTER : _option$titlePosition,
      titleComp = option.titleComp,
      backText = option.backText,
      buttonConfig = option.buttonConfig;
  var handlButtonAction = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (action) {
    action && action();
  }, []);
  var backToClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('aibp-back-to', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: backToClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-back-to-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-back-to-icon aibp-back-to-icon-".concat(type)
  }, to && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    to: to
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["LeftOutlined"], null))), backText && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-back-to-text"
  }, to && type === BACK_TYPES.ARROW ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, {
    to: to
  }, backText) : backText), titlePosition === TITLE_POSITIONS.LEFT && !titleComp && title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-back-to-title"
  }, title), buttonConfig && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-back-to-button-group"
  }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(buttonConfig, function (button, buttonIndex) {
    var key = button.key,
        disabled = button.disabled,
        text = button.text,
        action = button.action;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      key: key || buttonIndex,
      className: "aibp-back-to-button",
      disabled: disabled,
      onClick: function onClick() {
        return handlButtonAction(action);
      }
    }, text);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-back-to-main"
  }, titleComp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-back-to-title"
  }, titleComp), !titleComp && titlePosition !== TITLE_POSITIONS.LEFT && title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-back-to-title aibp-back-to-title-".concat(titlePosition)
  }, title)));
});

/***/ }),

/***/ "./src/components/BottomSubmit/index.less":
/*!************************************************!*\
  !*** ./src/components/BottomSubmit/index.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/BottomSubmit/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/BottomSubmit/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/components/BottomSubmit/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var options = props.options;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aibp-bottom-submit"
  }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(options, function (option) {
    var text = option.text,
        buttonProps = __rest(option, ["text"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], buttonProps, text);
  }));
});

/***/ }),

/***/ "./src/components/ColorPicker/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ColorPicker/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/lib/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var noop = function noop() {};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$color = props.color,
      propsColor = _props$color === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__["PRIMARY_COLOR"] : _props$color,
      _props$small = props.small,
      small = _props$small === void 0 ? false : _props$small,
      _props$onChange = props.onChange,
      onChange = _props$onChange === void 0 ? noop : _props$onChange,
      _props$onChangeComple = props.onChangeComplete,
      onChangeComplete = _props$onChangeComple === void 0 ? noop : _props$onChangeComple,
      restProps = __rest(props, ["color", "small", "onChange", "onChangeComplete"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(propsColor),
      _useState2 = _slicedToArray(_useState, 2),
      color = _useState2[0],
      setColor = _useState2[1];

  var handleColorChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (color) {
    setColor(color.hex);
    onChange(color.hex, color);
  }, []);
  var handleChangeComplete = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (color) {
    setColor(color.hex);
    onChangeComplete(color.hex);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (color !== propsColor) {
      setColor(propsColor);
    }
  }, [propsColor]);
  var styles = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      color: {
        width: small ? '80px' : '120px',
        height: small ? '16px' : '24px',
        borderRadius: '2px',
        background: color
      },
      swatch: {
        padding: '4px',
        background: '#fff',
        borderRadius: '2px',
        boxShadow: '0 0 0 1px rgba(0, 0, 0, .1)',
        display: 'inline-block',
        cursor: 'pointer'
      }
    };
  }, [color]);
  var swatch = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.swatch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styles.color
  }));
  var picker = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_2__["SketchPicker"], _extends({}, restProps, {
    color: color,
    onChange: handleColorChange,
    onChangeComplete: handleChangeComplete
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    overlayClassName: "color-popover",
    title: false,
    trigger: "click",
    content: picker
  }, swatch);
});

/***/ }),

/***/ "./src/components/ExpandIcon/index.less":
/*!**********************************************!*\
  !*** ./src/components/ExpandIcon/index.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/ExpandIcon/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/ExpandIcon/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./src/components/ExpandIcon/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      text = props.text,
      propsExpand = props.expand,
      onExpand = props.onExpand;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!!propsExpand),
      _useState2 = _slicedToArray(_useState, 2),
      expand = _useState2[0],
      setExpand = _useState2[1];

  var handleExpandChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var newExpand = !expand;
    setExpand(newExpand);
    onExpand && onExpand(newExpand);
  }, [expand, onExpand]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!!propsExpand !== expand) {
      setExpand(!!propsExpand);
    }
  }, [propsExpand]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aibp-expand-icon ".concat(expand ? 'aibp-expand-icon-active' : '', " ").concat(className),
    onClick: handleExpandChange
  }, text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "expand-text"
  }, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["DownOutlined"], {
    className: "expand-arrow"
  }));
});

/***/ }),

/***/ "./src/components/FilterDropdown/index.less":
/*!**************************************************!*\
  !*** ./src/components/FilterDropdown/index.less ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/FilterDropdown/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/FilterDropdown/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./src/components/FilterDropdown/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Search = antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search;
var PREFIX_CLASS = 'ant-table-filter';
var DROPDOWN_PREFIX_CLASS = 'ant-dropdown';

var isSubstr = function isSubstr(str, substr) {
  return str.toLowerCase().indexOf(substr.toLowerCase()) > -1;
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? true : _props$multiple,
      _props$showSearch = props.showSearch,
      showSearch = _props$showSearch === void 0 ? true : _props$showSearch,
      _props$showSelectAll = props.showSelectAll,
      showSelectAll = _props$showSelectAll === void 0 ? true : _props$showSelectAll,
      _props$placeholder = props.placeholder,
      placeholder = _props$placeholder === void 0 ? '请输入' : _props$placeholder,
      _props$locale = props.locale,
      locale = _props$locale === void 0 ? {} : _props$locale,
      _props$selectedKeys = props.selectedKeys,
      selectedKeys = _props$selectedKeys === void 0 ? [] : _props$selectedKeys,
      filters = props.filters,
      confirm = props.confirm,
      getPopupContainer = props.getPopupContainer,
      setSelectedKeys = props.setSelectedKeys;
  var _locale$filterConfirm = locale.filterConfirm,
      filterConfirm = _locale$filterConfirm === void 0 ? '确定' : _locale$filterConfirm,
      _locale$filterReset = locale.filterReset,
      filterReset = _locale$filterReset === void 0 ? '重置' : _locale$filterReset;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      searchKey = _useState2[0],
      setSearchKey = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(selectedKeys),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedItemKeys = _useState4[0],
      setSelectedItemKeys = _useState4[1];

  var handleSearchChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    return setSearchKey(e.target.value);
  }, []);
  var handleSelectAllChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (selectAll) {
    selectAll ? handleMenuAllDeselect() : handleMenuAllSelect();
  }, []);
  var handleMenuItemSelect = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (item) {
    var itemValue = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, 'item.props.data-value', '');

    if (itemValue || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(itemValue)) {
      setSelectedItemKeys(function (prevSelectedItemKeys) {
        return multiple ? [].concat(_toConsumableArray(prevSelectedItemKeys), [itemValue]) : [itemValue];
      });
    }
  }, []);
  var handleMenuItemDeselect = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (item) {
    var itemValue = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(item, 'item.props.data-value', '');

    if (itemValue || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(itemValue)) {
      var currentSelectedItemKeys = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(selectedItemKeys, function (selectedItemKey) {
        return selectedItemKey !== itemValue;
      });

      setSelectedItemKeys(currentSelectedItemKeys);
    }
  }, [selectedItemKeys]);
  var handleMenuAllSelect = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var selectedItemKeys = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(filters, 'value');

    setSelectedItemKeys(selectedItemKeys);
  }, []);
  var handleMenuAllDeselect = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return setSelectedItemKeys([]);
  }, []);
  var handleConfirm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    confirm && confirm();
  }, [confirm]);
  var handleClearFilters = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSelectedItemKeys([]);
    window.setTimeout(function () {
      confirm && confirm();
    }, 300);
  }, [confirm]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setSelectedKeys(selectedItemKeys);
    !multiple && confirm && confirm();
  }, [selectedItemKeys]);
  var menuOptions = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    if (!searchKey) {
      return filters;
    }

    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(filters, function (filterItem) {
      var value = filterItem.value,
          text = filterItem.text;
      return isSubstr("".concat(value), searchKey || '') || isSubstr("".concat(text), searchKey || '');
    });
  }, [searchKey, filters]);
  var selectAll = multiple ? filters.length === selectedItemKeys.length : selectedItemKeys.length === 0;

  var formatSelectedItemKeys = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(selectedItemKeys, function (selectedItemKey) {
    return "".concat(selectedItemKey);
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-table-filter-dropdown"
  }, multiple && showSearch && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-table-filter-dropdown-search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Search, {
    placeholder: placeholder,
    onChange: handleSearchChange
  })), multiple ? showSelectAll && menuOptions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-table-filter-dropdown-select-all",
    onClick: function onClick() {
      return handleSelectAllChange(selectAll);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
    checked: selectAll
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u5168\u9009/\u5168\u4E0D\u9009")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    getPopupContainer: getPopupContainer,
    prefixCls: "".concat(DROPDOWN_PREFIX_CLASS, "-menu"),
    selectedKeys: formatSelectedItemKeys.length ? [] : ['all'],
    onSelect: handleMenuAllDeselect
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "all"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "\u5168\u90E8"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    multiple: multiple,
    getPopupContainer: getPopupContainer,
    prefixCls: "".concat(DROPDOWN_PREFIX_CLASS, "-menu"),
    selectedKeys: formatSelectedItemKeys,
    onSelect: handleMenuItemSelect,
    onDeselect: handleMenuItemDeselect
  }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(menuOptions, function (menuItem) {
    var value = menuItem.value,
        text = menuItem.text;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      key: value,
      "data-value": value
    }, multiple && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      checked: selectedItemKeys.indexOf(value) >= 0
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, text));
  })), multiple && menuOptions.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ant-empty ant-empty-normal aibp-empty"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "aibp-empty-image",
    src: _constants__WEBPACK_IMPORTED_MODULE_3__["EMPTY_DATA_IMG"],
    width: 100
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "ant-empty-description aibp-empty-description"
  }, "\u6682\u65E0\u6570\u636E")), multiple && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "".concat(PREFIX_CLASS, "-dropdown-btns")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "".concat(PREFIX_CLASS, "-dropdown-link confirm"),
    onClick: handleConfirm
  }, filterConfirm), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "".concat(PREFIX_CLASS, "-dropdown-link clear"),
    onClick: handleClearFilters
  }, filterReset)));
});

/***/ }),

/***/ "./src/components/GridViews/index.less":
/*!*********************************************!*\
  !*** ./src/components/GridViews/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/GridViews/index.tsx":
/*!********************************************!*\
  !*** ./src/components/GridViews/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./src/components/GridViews/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);





var LABEL_WIDTH = 100;
var COL_COUNT = 2;
var WITH_COLON = true;

var GridViews = function GridViews(props) {
  var className = props.className,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? LABEL_WIDTH : _props$labelWidth,
      _props$colCount = props.colCount,
      colCount = _props$colCount === void 0 ? COL_COUNT : _props$colCount,
      _props$withColon = props.withColon,
      withColon = _props$withColon === void 0 ? WITH_COLON : _props$withColon,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options;
  var gridViewsClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('aibp-grid-views', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: gridViewsClassName
  }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(options, function (option, optionIndex) {
    var key = option.key,
        title = option.title;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GridViews.Item, {
      key: key || optionIndex,
      title: title,
      className: option.className,
      colCount: option.colCount || colCount,
      labelWidth: option.labelWidth || labelWidth,
      withColon: option.withColon || withColon,
      options: option.options
    });
  }));
};

GridViews.Item = function (props) {
  var title = props.title,
      className = props.className,
      _props$colCount2 = props.colCount,
      colCount = _props$colCount2 === void 0 ? COL_COUNT : _props$colCount2,
      _props$labelWidth2 = props.labelWidth,
      labelWidth = _props$labelWidth2 === void 0 ? LABEL_WIDTH : _props$labelWidth2,
      _props$withColon2 = props.withColon,
      withColon = _props$withColon2 === void 0 ? WITH_COLON : _props$withColon2,
      _props$options2 = props.options,
      options = _props$options2 === void 0 ? [] : _props$options2;
  var spanCount = Math.ceil(24 / colCount);

  var rowList = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.chunk(options, colCount);

  var gridViewItemClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('aibp-grid-view-item', className);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: gridViewItemClassName
  }, title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-grid-view-item-title"
  }, title), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(rowList, function (chunkRow, chunkRowIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
      key: chunkRowIndex,
      className: "aibp-grid-view-item-row"
    }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(chunkRow, function (col, colIndex) {
      var key = col.key,
          label = col.label,
          content = col.content;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        span: spanCount,
        key: key || colIndex,
        className: "aibp-grid-view-item-col"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "grid-view-item-label",
        style: {
          width: labelWidth
        }
      }, label, withColon && ':'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "grid-view-item-content"
      }, content));
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GridViews);

/***/ }),

/***/ "./src/components/HooksDialog/index.less":
/*!***********************************************!*\
  !*** ./src/components/HooksDialog/index.less ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/HooksDialog/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/HooksDialog/index.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./src/components/HooksDialog/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var Footer = function Footer(props) {
  var _props$okText = props.okText,
      okText = _props$okText === void 0 ? '确定' : _props$okText,
      _props$okType = props.okType,
      okType = _props$okType === void 0 ? 'primary' : _props$okType,
      _props$okButtonProps = props.okButtonProps,
      okButtonProps = _props$okButtonProps === void 0 ? {} : _props$okButtonProps,
      _props$cancelText = props.cancelText,
      cancelText = _props$cancelText === void 0 ? '取消' : _props$cancelText,
      _props$cancelButtonPr = props.cancelButtonProps,
      cancelButtonProps = _props$cancelButtonPr === void 0 ? {} : _props$cancelButtonPr,
      onOk = props.onOk,
      onCancel = props.onCancel;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aibp-dialog-drawer-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({
    type: okType,
    onClick: onOk
  }, okButtonProps), okText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], _extends({
    onClick: onCancel
  }, cancelButtonProps), cancelText));
};

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _a = props || {},
      type = _a.type,
      dialogContent = _a.dialogContent,
      onActionCompOk = _a.onActionCompOk,
      onActionCompCancel = _a.onActionCompCancel,
      restDialogProps = __rest(_a, ["type", "dialogContent", "onActionCompOk", "onActionCompCancel"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, type === 'modal' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], _extends({}, restDialogProps, {
    onOk: onActionCompOk,
    onCancel: onActionCompCancel
  }), dialogContent), type === 'drawer' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Drawer"], _extends({
    footer: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, _extends({}, restDialogProps, {
      onOk: onActionCompOk,
      onCancel: onActionCompCancel
    }))
  }, restDialogProps, {
    onClose: onActionCompCancel
  }), dialogContent));
});

/***/ }),

/***/ "./src/components/HooksForm/index.tsx":
/*!********************************************!*\
  !*** ./src/components/HooksForm/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var form = props.form,
      controls = props.controls,
      className = props.className,
      restFormProps = __rest(props, ["form", "controls", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], _extends({
    form: form,
    className: "aibp-form ".concat(className)
  }, restFormProps), lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(controls, function (controlItemConfig) {
    var title = controlItemConfig.title,
        name = controlItemConfig.name,
        label = controlItemConfig.label,
        Control = controlItemConfig.control,
        config = controlItemConfig.config,
        _controlItemConfig$ev = controlItemConfig.events,
        events = _controlItemConfig$ev === void 0 ? {} : _controlItemConfig$ev,
        restControlItemConfig = __rest(controlItemConfig, ["title", "name", "label", "control", "config", "events"]);

    return title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "aibp-form-title"
    }, title) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, _extends({
      key: name,
      name: name,
      label: label
    }, restControlItemConfig), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Control, _extends({}, config, events)));
  }));
});

/***/ }),

/***/ "./src/components/HooksLabelBox/index.less":
/*!*************************************************!*\
  !*** ./src/components/HooksLabelBox/index.less ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/HooksLabelBox/index.tsx":
/*!************************************************!*\
  !*** ./src/components/HooksLabelBox/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./src/components/HooksLabelBox/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props) {
  var outerContainerId = props.outerContainerId,
      containerId = props.containerId,
      wrapClassName = props.wrapClassName,
      container = props.container;

  var customWidth = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(container, 'width');

  var customHeight = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(container, 'height');

  var customStyle = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var customSize = {};

    if (customWidth) {
      var styleWidth = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(customWidth) ? "".concat(customWidth, "px") : customWidth;
      customSize.width = styleWidth;
    }

    if (customHeight) {
      var styleHeight = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(customHeight) ? "".concat(customHeight, "px") : customHeight;
      customSize.height = styleHeight;
    }

    return customSize;
  }, [customWidth, customHeight]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: outerContainerId,
    className: "aibp-ailabel-core ".concat(wrapClassName),
    style: customStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: containerId,
    className: 'aibp-ailabel-core-container'
  }));
}));

/***/ }),

/***/ "./src/components/HooksTable/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/HooksTable/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};





var OMIT_FILTER_KEYS = ['pageNo', 'pageSize', 'order', 'orderBy'];
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var loading = props.loading,
      pageNo = props.pageNo,
      pageSize = props.pageSize,
      totalCount = props.totalCount,
      dataSource = props.dataSource,
      filterData = props.filterData,
      selectedRowKeys = props.selectedRowKeys,
      Card = props.card,
      columns = props.columns,
      propsPagination = props.pagination,
      _props$select = props.select,
      select = _props$select === void 0 ? 'multi' : _props$select,
      _props$locale = props.locale,
      propsLocale = _props$locale === void 0 ? {} : _props$locale,
      onTableChange = props.onTableChange,
      onPaginationChange = props.onPaginationChange,
      onPageSizeChange = props.onPageSizeChange,
      onSelectedRowKeysChange = props.onSelectedRowKeysChange,
      restTableProps = __rest(props, ["loading", "pageNo", "pageSize", "totalCount", "dataSource", "filterData", "selectedRowKeys", "card", "columns", "pagination", "select", "locale", "onTableChange", "onPaginationChange", "onPageSizeChange", "onSelectedRowKeysChange"]);

  var _a = propsLocale,
      _a$omitFilterKeys = _a.omitFilterKeys,
      omitFilterKeys = _a$omitFilterKeys === void 0 ? [] : _a$omitFilterKeys,
      descriptions = _a.descriptions,
      defaultDescriptions = _a.defaultDescriptions,
      restPropsLocale = __rest(_a, ["omitFilterKeys", "descriptions", "defaultDescriptions"]);

  var tableFilterData = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.omit(filterData, [].concat(OMIT_FILTER_KEYS, _toConsumableArray(omitFilterKeys)));

  var tableFilterValue = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.values(tableFilterData);

  var hasTableFilterValue = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.some(tableFilterValue, function (valueItem) {
    return !!valueItem;
  });

  var curDescriptions = descriptions && !hasTableFilterValue ? descriptions : defaultDescriptions || ['暂无数据'];
  var pagination = propsPagination || propsPagination !== false && Object.assign({
    total: totalCount,
    current: pageNo,
    pageSize: pageSize,
    showSizeChanger: true,
    showQuickJumper: true,
    onChange: onPaginationChange
  }, Card ? {
    onShowSizeChange: onPageSizeChange
  } : {});
  var locale = Object.assign({
    emptyText: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ant-empty ant-empty-normal aibp-empty"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "aibp-empty-image",
      src: _constants__WEBPACK_IMPORTED_MODULE_3__["EMPTY_DATA_IMG"],
      width: 140
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "ant-empty-description aibp-empty-description"
    }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(curDescriptions, function (description) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, description);
    })))
  }, restPropsLocale);
  var rowSelection = select === 'none' ? undefined : {
    selectedRowKeys: selectedRowKeys,
    onChange: onSelectedRowKeysChange
  };
  return Card ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-list-card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    spinning: loading
  }, !loading && dataSource.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-list-card-container"
  }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(dataSource, function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "aibp-list-card-item"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Card, _extends({
      item: item,
      rowSelection: rowSelection
    }, restTableProps)));
  })), pagination && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "aibp-list-card-pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Pagination"], pagination))) : locale && locale.emptyText)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], _extends({
    className: "aibp-list-table",
    loading: loading,
    dataSource: dataSource,
    columns: columns,
    pagination: pagination,
    locale: locale,
    rowSelection: rowSelection,
    showSorterTooltip: false,
    onChange: onTableChange
  }, restTableProps));
});

/***/ }),

/***/ "./src/components/ListInput/index.less":
/*!*********************************************!*\
  !*** ./src/components/ListInput/index.less ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/ListInput/index.tsx":
/*!********************************************!*\
  !*** ./src/components/ListInput/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./src/components/ListInput/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






;
;

var ListInput = /*#__PURE__*/function (_React$Component) {
  _inherits(ListInput, _React$Component);

  var _super = _createSuper(ListInput);

  function ListInput(props) {
    var _this;

    _classCallCheck(this, ListInput);

    _this = _super.call(this, props);

    _this.handleLineMinus = function (index) {
      var onChange = _this.props.onChange;

      var values = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(_this.state.values);

      values.splice(index, 1);

      _this.setState({
        values: values
      });

      onChange && onChange(values.map(function (v) {
        return v.value;
      }));
    };

    _this.handleLinePlus = function () {
      var onChange = _this.props.onChange;
      var _this$props = _this.props,
          valueType = _this$props.valueType,
          rules = _this$props.rules;
      var defaultValue = '';

      if (valueType === 'ListInt') {
        defaultValue = rules.minInt || 0;
      } else if (valueType === 'ListDouble') {
        defaultValue = rules.minDouble || 0;
      }

      var values = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(_this.state.values);

      values.push({
        value: defaultValue,
        key: Math.random()
      });

      _this.setState({
        values: values
      });

      onChange && onChange(values.map(function (v) {
        return v.value;
      }));
    };

    _this.handleInputChange = function (value, index) {
      var onChange = _this.props.onChange;

      var values = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(_this.state.values);

      values[index].value = value;
      onChange && onChange(values.map(function (v) {
        return v.value;
      }));

      _this.setState({
        values: values
      });
    };

    _this.getInputItem = function (value, index) {
      var _this$props2 = _this.props,
          valueType = _this$props2.valueType,
          rules = _this$props2.rules;

      if (valueType === 'ListInt') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
          min: rules.minInt,
          max: rules.maxInt,
          precision: 0,
          value: +value,
          onChange: function onChange(v) {
            return _this.handleInputChange(v + '', index);
          }
        });
      } else if (valueType === 'ListDouble') {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
          min: rules.minDouble,
          max: rules.maxDouble,
          step: rules.step,
          value: +value,
          onChange: function onChange(v) {
            return _this.handleInputChange(v + '', index);
          }
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
        value: value,
        onChange: function onChange(e) {
          return _this.handleInputChange(e.target.value, index);
        }
      });
    };

    var valueType = props.valueType,
        rules = props.rules,
        values = props.values;
    var newValues = values.map(function (v) {
      if (v === 'null' && valueType === 'ListInt') {
        v = rules.minInt || 0;
      } else if (v === 'null' && valueType === 'ListDouble') {
        v = rules.minDouble || 0;
      }

      return {
        value: v,
        key: Math.random()
      };
    });

    if (!newValues.length) {
      newValues.push({
        value: valueType === 'ListString' ? '' : rules.minInt || 0,
        key: Math.random()
      });
    }

    _this.state = {
      values: newValues
    };
    return _this;
  }

  _createClass(ListInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var values = this.state.values;
      var inputsCom = values.map(function (v, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
          key: v.key,
          className: "aibp-list-input-line"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          span: 18
        }, _this2.getInputItem(v.value, index)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          span: 6,
          className: "minus-button"
        }, values.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MinusCircleOutlined"], {
          onClick: function onClick() {
            return _this2.handleLineMinus(index);
          }
        })));
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "aibp-list-input-box"
      }, inputsCom, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        className: "aibp-plus-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PlusOutlined"], null),
        type: "dashed",
        onClick: this.handleLinePlus
      }, "\u65B0\u589E\u4E00\u884C"))));
    }
  }]);

  return ListInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./src/components/Sidebar/index.less":
/*!*******************************************!*\
  !*** ./src/components/Sidebar/index.less ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Sidebar/index.tsx":
/*!******************************************!*\
  !*** ./src/components/Sidebar/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./src/components/Sidebar/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);




var isDev = "development" === 'development';

var _require = __webpack_require__(isDev ? /*! react-router */ "./node_modules/bisheng/node_modules/react-router/umd/ReactRouter.js" : /*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js"),
    Link = _require.Link;

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options,
      activeKey = props.activeKey;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    className: "aibp-detail-content-sidebar",
    mode: "inline",
    selectedKeys: activeKey ? [activeKey] : []
  }, lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(options, function (_ref, optionIndex) {
    var key = _ref.key,
        title = _ref.title,
        link = _ref.link;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      key: key || optionIndex
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
      to: link
    }, title));
  }));
});

/***/ }),

/***/ "./src/components/Uploader/Card.tsx":
/*!******************************************!*\
  !*** ./src/components/Uploader/Card.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var getBase64ByFile = _utils__WEBPACK_IMPORTED_MODULE_5__["default"].getBase64ByFile,
    getSuffixByName = _utils__WEBPACK_IMPORTED_MODULE_5__["default"].getSuffixByName;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var file = props.file,
      onClose = props.onClose,
      iconRender = props.iconRender;
  var name = file.name,
      type = file.type,
      status = file.status,
      percent = file.percent,
      originFileObj = file.originFileObj;
  var suffixName = getSuffixByName(name);
  var isImg = /image/.test(type);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isDelete = _useState2[0],
      setIsDelete = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      imgSrc = _useState4[0],
      setImgSrc = _useState4[1];

  var showBase64 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    if (isImg) {
      return _constants__WEBPACK_IMPORTED_MODULE_6__["IMG_BASE64"];
    }

    if (suffixName === 'pdf') {
      return _constants__WEBPACK_IMPORTED_MODULE_6__["PDF_BASE64"];
    }

    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.includes(['zip', 'gz'], suffixName)) {
      return _constants__WEBPACK_IMPORTED_MODULE_6__["ZIP_BASE64"];
    }

    return _constants__WEBPACK_IMPORTED_MODULE_6__["TEXT_BASE64"];
  }, [suffixName, isImg]);
  var renderStatusIcon = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var statusIcon = null;

    switch (status) {
      case 'done':
        statusIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CheckCircleFilled"], null);
        break;

      case 'error':
        statusIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["ExclamationCircleFilled"], null);
        break;

      default:
        break;
    }

    return statusIcon;
  }, [status]);
  var renderShowImage = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var showImage = null;

    if (isImg && imgSrc) {
      showImage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box ".concat(!status ? 'no-progress' : '')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: imgSrc
      }));
    } else {
      showImage = iconRender;
    }

    return showImage;
  }, [isImg, iconRender, imgSrc, status]);
  var handleMouseEnter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return setIsDelete(true);
  }, []);
  var handleMouseLeave = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    return setIsDelete(false);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (originFileObj) {
      getBase64ByFile(originFileObj).then(function (result) {
        isImg && setImgSrc(result);
      });
    }
  }, [originFileObj, isImg]);
  var uploaderCardClassName = classnames__WEBPACK_IMPORTED_MODULE_3___default()('uploader-card', {
    'uploader-card-progress-none': !status,
    'uploader-card-progress-has': status
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: uploaderCardClassName,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "custom-icon"
  }, isDelete ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CloseCircleFilled"], {
    onClick: onClose
  }) : !status && imgSrc ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CheckCircleFilled"], null) : renderStatusIcon), renderShowImage ? renderShowImage : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: showBase64
  }), status ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
    percent: percent
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-name",
    title: name
  }, name));
});

/***/ }),

/***/ "./src/components/Uploader/index.less":
/*!********************************************!*\
  !*** ./src/components/Uploader/index.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Uploader/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Uploader/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _huse_previous_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @huse/previous-value */ "./node_modules/@huse/previous-value/es/index.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Card */ "./src/components/Uploader/Card.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ "./src/components/Uploader/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};










var MAX_FILE_NUM = 100;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$wrapClassName = props.wrapClassName,
      wrapClassName = _props$wrapClassName === void 0 ? '' : _props$wrapClassName,
      _props$className = props.className,
      className = _props$className === void 0 ? '' : _props$className,
      _props$extra = props.extra,
      extra = _props$extra === void 0 ? '' : _props$extra,
      _props$listType = props.listType,
      listType = _props$listType === void 0 ? 'text' : _props$listType,
      _props$maxFileNum = props.maxFileNum,
      maxFileNum = _props$maxFileNum === void 0 ? MAX_FILE_NUM : _props$maxFileNum,
      _props$fileList = props.fileList,
      fileList = _props$fileList === void 0 ? [] : _props$fileList,
      _props$showUploadList = props.showUploadList,
      showUploadList = _props$showUploadList === void 0 ? {} : _props$showUploadList,
      _props$iconRender = props.iconRender,
      iconRender = _props$iconRender === void 0 ? null : _props$iconRender,
      _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children,
      _props$customItem = props.customItem,
      customItem = _props$customItem === void 0 ? null : _props$customItem,
      onChange = props.onChange,
      onClose = props.onClose,
      restProps = __rest(props, ["wrapClassName", "className", "extra", "listType", "maxFileNum", "fileList", "showUploadList", "iconRender", "children", "customItem", "onChange", "onClose"]);

  var isPictureType = listType === 'picture-card';
  var originFileList = Object(_huse_previous_value__WEBPACK_IMPORTED_MODULE_5__["useOriginalDeepCopy"])(fileList);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      totalFileList = _useState2[0],
      setTotalFileList = _useState2[1];

  var handleUploadChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (fileData) {
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(onChange) && onChange(fileData);
    setTotalFileList(fileData.fileList);
  }, [onChange]);
  var handleClose = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (file) {
    setTotalFileList(function (prevTotalFileList) {
      var currentFileList = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(prevTotalFileList, function (item) {
        return item.uid !== file.uid;
      });

      file.status = 'removed';
      handleUploadChange({
        file: file,
        fileList: currentFileList
      });
      return currentFileList;
    });
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(onClose) && onClose(file);
  }, [onClose, handleUploadChange]);
  var realFileList = props.fileList ? originFileList : totalFileList;

  var isFileListEmpty = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(realFileList);

  var uploadWrapClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()('aibp-uploader-container', "".concat(wrapClassName));
  var uploadClassName = classnames__WEBPACK_IMPORTED_MODULE_4___default()('aibp-uploader', _defineProperty({}, 'aibp-uploader-card', !isFileListEmpty && isPictureType), "".concat(className));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: uploadWrapClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: uploadClassName
  }, isPictureType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uploader-action ".concat(!isFileListEmpty ? 'uploader-action-card' : '')
  }, isFileListEmpty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "cloud-img",
    src: _constants__WEBPACK_IMPORTED_MODULE_7__["CLOUD_BASE64"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uploader-card-list"
  }, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(realFileList, function (file) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: file.uid,
      file: file,
      iconRender: iconRender,
      onClose: function onClose() {
        return handleClose(file);
      }
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Upload"], _extends({
    className: "uploader",
    showUploadList: false,
    fileList: realFileList,
    onChange: handleUploadChange
  }, restProps), isFileListEmpty ? children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary"
  }, "\u70B9\u51FB\u9009\u62E9\u6587\u4EF6") : totalFileList.length >= maxFileNum ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "continue-upload"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PlusOutlined"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u7EE7\u7EED\u6DFB\u52A0")))), extra && isFileListEmpty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uploader-extra"
  }, extra)), listType === 'text' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uploader-action"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "cloud-img",
    src: _constants__WEBPACK_IMPORTED_MODULE_7__["CLOUD_BASE64"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Upload"], _extends({
    className: "uploader",
    showUploadList: showUploadList,
    fileList: totalFileList,
    onChange: handleUploadChange
  }, restProps), children || /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary"
  }, "\u70B9\u51FB\u9009\u62E9\u6587\u4EF6")), extra && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uploader-extra"
  }, extra))), customItem);
});

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorPicker */ "./src/components/ColorPicker/index.tsx");
/* harmony import */ var _ListInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListInput */ "./src/components/ListInput/index.tsx");
/* harmony import */ var _notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notification */ "./src/components/notification.ts");
/* harmony import */ var _BackTo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BackTo */ "./src/components/BackTo/index.tsx");
/* harmony import */ var _ExpandIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExpandIcon */ "./src/components/ExpandIcon/index.tsx");
/* harmony import */ var _BottomSubmit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BottomSubmit */ "./src/components/BottomSubmit/index.tsx");
/* harmony import */ var _HooksLabelBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HooksLabelBox */ "./src/components/HooksLabelBox/index.tsx");
/* harmony import */ var _HooksTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HooksTable */ "./src/components/HooksTable/index.tsx");
/* harmony import */ var _HooksDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HooksDialog */ "./src/components/HooksDialog/index.tsx");
/* harmony import */ var _HooksForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HooksForm */ "./src/components/HooksForm/index.tsx");
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Sidebar */ "./src/components/Sidebar/index.tsx");
/* harmony import */ var _Uploader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Uploader */ "./src/components/Uploader/index.tsx");
/* harmony import */ var _FilterDropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FilterDropdown */ "./src/components/FilterDropdown/index.tsx");
/* harmony import */ var _GridViews__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./GridViews */ "./src/components/GridViews/index.tsx");














/* harmony default export */ __webpack_exports__["default"] = ({
  ColorPicker: _ColorPicker__WEBPACK_IMPORTED_MODULE_0__["default"],
  ListInput: _ListInput__WEBPACK_IMPORTED_MODULE_1__["default"],
  notification: _notification__WEBPACK_IMPORTED_MODULE_2__["default"],
  BackTo: _BackTo__WEBPACK_IMPORTED_MODULE_3__["default"],
  ExpandIcon: _ExpandIcon__WEBPACK_IMPORTED_MODULE_4__["default"],
  BottomSubmit: _BottomSubmit__WEBPACK_IMPORTED_MODULE_5__["default"],
  HooksLabelBox: _HooksLabelBox__WEBPACK_IMPORTED_MODULE_6__["default"],
  HooksTable: _HooksTable__WEBPACK_IMPORTED_MODULE_7__["default"],
  HooksDialog: _HooksDialog__WEBPACK_IMPORTED_MODULE_8__["default"],
  HooksForm: _HooksForm__WEBPACK_IMPORTED_MODULE_9__["default"],
  Sidebar: _Sidebar__WEBPACK_IMPORTED_MODULE_10__["default"],
  Uploader: _Uploader__WEBPACK_IMPORTED_MODULE_11__["default"],
  FilterDropdown: _FilterDropdown__WEBPACK_IMPORTED_MODULE_12__["default"],
  GridViews: _GridViews__WEBPACK_IMPORTED_MODULE_13__["default"]
});

/***/ }),

/***/ "./src/components/notification.ts":
/*!****************************************!*\
  !*** ./src/components/notification.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");

var defaultDuration = 3;
/* harmony default export */ __webpack_exports__["default"] = ({
  error: function error(message) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
    return antd__WEBPACK_IMPORTED_MODULE_0__["notification"].error({
      message: message,
      duration: duration
    });
  },
  success: function success(message) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
    return antd__WEBPACK_IMPORTED_MODULE_0__["notification"].success({
      message: message,
      duration: duration
    });
  },
  info: function info(message) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
    return antd__WEBPACK_IMPORTED_MODULE_0__["notification"].info({
      message: message,
      duration: duration
    });
  },
  warning: function warning(message) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDuration;
    return antd__WEBPACK_IMPORTED_MODULE_0__["notification"].warning({
      message: message,
      duration: duration
    });
  }
});

/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: PRIMARY_COLOR, noop, EMPTY_DATA_IMG, TEXT_BASE64, ZIP_BASE64, PDF_BASE64, IMG_BASE64, FOLDER_BASE64, CLOUD_BASE64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIMARY_COLOR", function() { return PRIMARY_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPTY_DATA_IMG", function() { return EMPTY_DATA_IMG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_BASE64", function() { return TEXT_BASE64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZIP_BASE64", function() { return ZIP_BASE64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDF_BASE64", function() { return PDF_BASE64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMG_BASE64", function() { return IMG_BASE64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLDER_BASE64", function() { return FOLDER_BASE64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOUD_BASE64", function() { return CLOUD_BASE64; });
var PRIMARY_COLOR = '#108cee';
var noop = function noop() {};
var EMPTY_DATA_IMG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAADKCAQAAADUBpeXAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfkBA8EIB6EYPS/AAAVrElEQVR42u2deXAb93XHPwuAt0jwkChKlExKlGQdjk0STmwprR0n0iSdpJFzuMk4naZxnGt6pJPEGncy02Qap7Gnnc7kcGdyuXbaaS3Xdpp7UjtNHDeKFRsgZceSfMiiKZI6CR7iDWC3fyxIAtgFsPcuqd/nHwkL4Lc/LL58+37v/d6DpBA0Xqqf+Vy0a2t9/N3q41hc/Tceu4IeDy/85sW62n+6+rLf30YhEb8nUEjirTygdMxNc9LvmfhK+/in5M7pDyfu6P1fv6eSj+SshUl8s/VvNs3aGCByejjZWj+x/nw0cH9b3jJdM9x+ORqS5U2xs37PJZfwFx0cLH4b9840bvipjSHubWqpnW4/W73g83Xxncp0SxJ540hnC0/4PZdcHLQwQzXnT3IVSO/o/bnFIdr5gd8XJIAcZNjvKSwTcm6oC4e4KgTwwPFmayOMf1KR/L4gAeR9fk8gF8cszLEd6X5qOrjALNL3e9+HhYETl6nr6XPYrVrhvNaRmr660+9ZLOOQhRmozjxCTSO1tBNGeU/iXiujKGsUScgln7G1Ux1+zyEXhwQz+s/KdZWsByrYhIRyKPEJvz+awA0cEUziLj4l0Z4drJYNAP+S+ILZ0esn6if8viCC0ti/A0QS9ysfhw005hxMch6QflH5oWvOmxjrOb8vR/AYb4DGHX7PYhmbgnm+NfXvHJBop77gmRmGScOl0N09Dxh2gIVg9Lne7wksY+uWlHhv+vcciNCpkQvUsoU1sFb+TvyZ/jf6/TEFTmHZwrzQtPANboc6NpZISE1ynjSSzHcb/mrbfLkxx1+Gxkm/L0kACZCFsZx8XPgit0OI5pJDZJAB5WLox+XlAqe2L+duBSovb4MAuTDWb0mxT4cOcFLmDENkdF+hMMI5ZKRH6vb0/NDvD7pSuRy9HPV7DrnY8GF6nuRa6ZA0dZnX0CaoMwwyAZPSB3s/sHPU748pcApbTm8s1fuPkV38X5oBknnPpBlgBgYr3tx72Ph4Ig4TfJyIxEfi90iHFCk3EjPALNKz1e/efc7USGJZrSFocRgnIr3p2N3Sn8NZprIHLjCL9HrF203KRaBD42Sw1o0O5ZJ6vscXYJg5YIpRSPPBN4z5/eEEzuPYfpjY3/M9mREynAOkz/c+Y36M8YbxBr8viKA0Du4miNfSx45KFqA/FkO2MIIi4jCFvLwNdjT6PYtlHNxxF5sJ/ynpBSD0aStyEeixiuIwWrqfle4B6XDPr/3+WAK3cFQw0Ptl6anKu6y+W8Rhgo/jOyKPV+62XiIi4jAaVmMcJg8bchHoYDcOk/iLeJeT83FcMIKAcTsvJf6zv9up4QIlGBGHcQGJsPLBTF+8L3EofpUDwwWpqkPEYbTYjcMkfqvcuIZZMoCkMMLrDHKWFGkpLd8XmzE7XuC6NwjysR2FWQvrqWCKy1yW5Hba2Zd95mfm5SIEo8tw3SstkrxzdL2dPhTBQGIzVCBRTz2QJkWKBS4CoXusDBgowQQhCpOsOrJ5JArw0vqO5L6h+pTfM7LD8+uUqgjLBesRItQwDkhPdR+xMmKgBLPjVX/PPx9+ZsMrrfLS9X29eahx97nrz1f4mOjoesXOu+Xdel/xJCA9YG3EQAnGTxSOrTu2cb7gemRCL2w8tTY2vCtpbVT72IvCZD4AawqOpZiG2drvWxtRCAaA0w1HN03W6D83U/n0lhdb953ZOO33LM0Sr+A2KIxUTAH82Gr3vEAJZrzBj7qkZNWRTSONZV5T95OrrxpbaR6N9HalpZqqgqPzgPSU1TEDJRjv65IKvZbiKNLrzUONe87FPPZo7NQlKZ9FpyY1BTBodT6BEoy36HstpciEnt/4qscejfU4TP+beQtc5BIVVFDBGtYgAWkgdMbqqFesYAbqj26eqDH/vpnKp7ccX7d3KPgejfxJkoSlCLUL0gIwToh6oqSAzJDVUQOVGnh53JultRGvpTSS0pHcO+yFRxOPQcxW57+B6vHNSodyDbexd7GHYDS6zaKvGCjBeLEfZj58dMPLhryWcoTlPeeuPxdx+QI6uR+mr0P5kPKXbBCCMYhxr0VSwEhHz9oFTzwaB7s3vFo1+WHl0Joeq8vqK0gwRr2WSGbPud4LqdBzbS+vkw1s/2iZ2ndmg4U0ngmcbvcRRrbS5RQCJhg3+8OMVT2+O1P265eUzuTe4TWpxfcc2TTcWH7sivRtx9e46c8EqD9MoATj7n6YyxVHNg02lbrRrJ3aq7EVr9c/U9IuhZSuizecrU27Neug1SVdQcvq+tTbT49cOLI5Waf3bO3C9UM7dYp7Oy5fdfz5tf3t+p5P2+S+M2vn3Jx1sKqSrhDBpEKL0dmN0+8/eaL5ufbZyryLkNl9vvh6R+K6SzvHtGur+rk3DXVlN2ScrU1seOcpvz+nFwRKMG7th3l4T+/InqWmRruS28bj619qVW1GWO5M3jBSzgOpytw09IaLRzcONamiqV3Yfb77YkgBGK882j7YVJnhiiBQPoxbq6RvxaBp5k1DHTlLSYXpilQoItelQyYuQSo0F06HKjO1adXYzIePblDXUlXpDx9zY+5Bq0sKlIVxk7Han+/YOL5vqDnbnFHCyrqmQl5OPcpSovWFtpTLVzBY3WGuIMEAjDQ+Ht1+8Y2OrGmG657aMlVlf5yVRqAE4/5+GFl6qXWg6ebTnTZ/IPDV6K+6nEgvrDx8Ekzi48o39Z/Z6fq55yue3HGAtTZGmOVpbT+TyHTMjdkOAVM6Xpb0id5vuXWFSuFL5WN/t/JVP867iMzvbL3/VbzbeDe11DkwH+WrzpW/msEHC9PfmHmM6lY2a56JA3XmB7TAGLM2bIxe8z7JxZlrTdcgF6szj/XHusddO2kRvLcwUuZBttaxSeepKN6FNe10bPR/79Rm6mBr5kE896M8F0z8bg5G2Kr7SbexzbN5rJSuJNvZrnNUYisROBi/2+v5eCyYvpv5kkQnlfaHukJoQL+hRSWdSPClvpu9nY+nPszxNvlhwm05N55RBnKed3+FtMy8jRuLXtmA4uKN6mTO/ztpyf4vShtnw/LDx3u8bKDtpYWJzB2mrYGNSwfmCqodpgPgHQSdQZaT4xtpgLa5w17+2Xt4qvh93FTJlqXHMq8hE80R0Amgx6PZVGChZCCLvqdpfbxSnAJ2LT0aYYLX2Ln0d76FEyzcFL8v9lm3rlMhnlmY+K18JuuqZRlkliravJrACmWS3NB3G1XMslxUlF0+fCZ+q1fz8Ugw8S4ehE05sYpRRln+6WKBMUK0I3GJ5R+gygYoHnS29WGpGXjAUI30GNEmWpeOqN5LW0Hdb7EVgWAZ1SbnejKtNEFUemzInXtiAZ4I5sL9ynXVdC49XvReGgte14VHfyYrCO01aSSavYKLdFKNct2F+5054+WW8ZuoKPasB4JJfEz5SIitOacS3otx9KxuoSejXl3lI4mPOXHGhT9OP3UpeenHyffrPeu6YPq7la9BR84aIhjei/UdlUqRdKB3aD2ZGjoA5WuOJCT3A2t4J3v0z+0q8WjmUarX0bx0RN97UclfEbjLKaztokrzaw9z1cXQejLNrIPqzKNx2+k4ZX/2P0/oPeuuYCQeoqsuJy9dzHtROYV3G+9HeYzTJt+jcILD2Go6Z5pi10TryWymDrp4yF5Ccuxa1gNIk826e0BcFYw20Rgk7+Uyv+BHXDD8+kEe5Td43Ym1uNUt9GScSUgu2Zdf6ZtgFwWjTTQGw3vJ5Tw/5JcGfJKL/IT/IQBdYXPQejJOJCTlA9n/PKH/vGvfnTbRWMp7UfEnDnOKR3i2hF8yxS/5AWd9mFk5tJ5MlDYIyw8fN2DExztG2zUHK/nD7P+e1H+XW4LRJBpLey8qbsVhym2mkDnGYY7rNDRY4CiPGPKs3JJ66Wui9WSMJyTTn1eGRl8c/erYuy4tNcK7tE8NxktDLSf13+WSYOL3KnmJRn+9FyO7s+c4wmNczDs2yGFeMPTzlQ38gUtzL2d1Cz0Z2EIlyk3xe8sOvR+U3cpfZ34kJS89nfy75D4i0qIH82SxN7lS+Ri/le9LXJ2XORpAYgulC3mqXZiLSpKjDBt4XYj9LP5GzEDxq1Yw6x52ueqXla72n+c0Ss4+GZjmJRR4T+y/i79roiulaQ4nTZJRmgD40Nr/0H9f+IuOf7x4Fz+jejNNOR/4FAobND2pC5lhHndqw2rYzjpGKddoQWGQnUSAND8yYFvCXMfbaHN5a23piFGECFNM0rR0F6okzCT80dn/2lh06/LUVukaaUOBzqvU+KqkhFLTVcqFSp3tSY5bmIHq5DPKdU1sXToic5LZvH0vxXB7P4zCCRJlRROjB2P2ZTvXu17lcApoL/uqESaoydknA68xhnSs+cbOEh/3Uj23SPs5oOhudZQU5YXQEzzZ/Gtmco86/AETDygfqc4z0QOMUkWnAaPtxQaqFP38vmRiYBPvAI7xbMlx2rkhJ37tHn3kbqAqhswA86ylI+fICeaQ/rX3jvLnSG5S9nNAeZsasitEWuAIT4R/2tgPjgsmfiffDrEzL3NkxHtR8WrH3RTPllj5NPE+IE5f0Vc08ybdMhk3MCYYPU9mlpPI8LHYd4yea/R1peiP/En/1vJn4PAqqb+br+cnGsvHXnLxKg6zhls4qP/nBGW6BdZyE+/1TC7G0cZk1IQkXzeakBzvVOUiLYTeIf2D9Dsp34XL3qEdtDDxKHG61rEsUuPei4p7qyR9BvidTuC9kfejb2EquJZrCXs6x0nKx5EW0Xoyg1yEU8RiBoLUyTvlbwNIv2q5BWCiKX0LB5T92WKx9rUj4OQmcE2iMViZIz06uYoX6TNU1Caxi17PJa0GBI020WtjjlnO5Hgym5lhuouHeE/5NquFSYHoGI/zOIx3yvvlPapcHLQw8bv5SoRdeZkj496LivdfB8ACCV7MuZ56FqaTN3pYxluI8a6LWk9mgROk4W9j5QJ50qULarm5dENLiV4FDvkwfTdzT36i0Zz3ouLlfphlKrmR23I2kBbSyrvY76NczKD1ZLIJyXvKJSQnerJyGWsp2TjOEcFoE41GMkdavNwPk08D+3kX6zTH63kr7/b1pmr2mmizS8YSkunFG9IvS8crnRCMJtEYfO9FjzYO8pacQFwVN3JbTgDSH8xbXW12yVBCMptFUp6gJA4IJvGVwkRj8Pa9GGUbf0I3ADu5nWtW4CfQ2yezmJBMfKXom6qVbPa0wm3BxG9VPpdf0WjFe1EJQl1SOLuKrPN4+ewkWk9G3feofK5YheTEbtXrlwaiZe6ANldJ8S7iRDfnlKiZjb3k4s8qKdiYicPkoo3JXOAMTBCL6UuievTNHGC8pcxqypZgtIlGM5kjnTnbmMtqxsqPGWizS8YSkuWwdUtKFlQ0rmTvZbWh58moFZJJWxWSNr7Z+J3KHfkVjda9FxV/4jCrFa0nk62QvCN+p/VRLd+S+rszv6V6S06K3473ouJlf5iVgrH9MMXQejJJTsNceG93v7URLVoYbUXjyoy9BB97Vlcbk7FbIWlNMDqJRuG9BBE9T8ZehaSl77fvUGFFo13vRSUIcZjVhtaTWayQ7DtkZTwLPkzfzfIvpHBXXubIrveiIpbVWqzGYXLRejITnELJhN7W85TZsUxbGG2iUXgvbuKE1dV6MmYqJPMxK5iwNtEovJego+fJLCUkTWZATH7LCU1FozPei4qIw7iF1pNZSkiWr5DMw5Rg+g8WJhqt7Xsphn/7YYKLU9dEu09mMSHZf9DMOCYEE+/KPJTfOrW496JYyn8ItDhndbWejNqyNfOQmZathgUzUM2j+a1TS3kvScYp+Il5ZkmW34kscA09T0Zt2cqjA4YXqIYFk7yf7vxEYynvpRaYZD7nyBQTLOQd0SLiMO6i58l0Ug3dxhOSBuMwfR+Vv5Nf0Vgu9jLFFBLN2YavE8wCDdSWPIuIw2hxIg6TizYmo1ZIhu7s+a6R9xsSjDbRaGTfywSzhGgmzDjzSDSWXUkJwejjpD+ot0/GTELSwC1JL9FoJPYSpQqZJEnmCdHsUiMPgTn0PBkzCcnygtFJNBqNvTRSgUyK0NKtqTQiDuMFep6M8YRkWcFoE43GYy+ZbFuNsMFwoojDaHHjmmhjMsYTkmUE03ez/OXC32g0mjlKkUSmghApxh3/0FcK7lhdbUxGrZCUv1yuQrKkYPQSjUYzR/MkkamimWZCzAesx+2Vjp4nYywhWep710k0GvVeZhhDoYYmJCI0ITFroH2yiMN4h54nYyQhWaIpYuI+5fZKtudoSuYVUkR1apDzmWMCWLP09YepYI4FwmVc31ZPmoCtLOpodqmkrpoUc0zRkuOfRhkj03GuZkPR+seiFqb/oHJXfqLRuPdSRSXRvJ6ZVTSA5336VwNuWl2tJ5NNSN5VPCFZJHCnrWi00u8lnzmqyqzaROBOH/cSudp+MuUqJHUtjF6i0f6+l+qyi3wRh/EaPU+mdEJSVzDaRKOz+16KIeIwWty+JtqYTOmEpI5g+j5aWNEodu36h/tWV+vJLFZI9n1U+2qNYPq75W/kt04Vu3ZXN3oxGbVlq/wNbcvWAg3oJRqd3LVbGhGH8Qc9T6ZYQrLQaGgSjd54Lyrid6u1eHNN9DyZpYRkHnmCSWgSjcJ78RuvrK7Wk1lMSCbyEpI5cRhtRaP92Is5RBxGH2821OvFZLQVkksWRi/R6J33oiLiMH6i58loE5KLgtFJNHrpvaiIOIwWL6+JnidTmJDMCkbbOlV4L8HAW6ur9WQKW7aGQD/RKGIvVyJ6MZn8hGRIv6LRa+9FRcRh/EfPk8mtkJROV4/+lu781qlqzZF1jPyCmB5ilaTFTl3SCRvnza9dUlu20t+yN6RNNKreiyAY+GV1ZxnMe7yYkJSeU2B3XubIHnGsW5gT2UukxjYns+sD8dhqF80TGPuRd2PMcpys0+ucXASrF1Ul0nOKkyq0Z2EEzuKshVG/W7FqFphCCEZgCiEYgSmEYASmEIIRmEIIRmAKIRiBKYRgBKYQghGYQghGYAohGIEphGAEphCCEZhCCEZgCiEYgSmEYASmEIIRmCJifwgtdnarC4KNsDACUzhuYZzcQyoIHsLCCEwhBCMwhRCMwBRCMAJTCMEITCEEIzCFEIzAFEIwAlMIwQhMIQQjMIUQjMAUQjACUwjBCEwhBCMwhRCMwBRCMAJTCMEITOHKnt6gEPfpvKt516GwMAJTrGoLA973DF7tFRPCwghMIQQjMIUQjMAUQjACUwjBCEyx6ldJq33V4jXCwghMsaotzGqOuPqFsDACUwjBCEwhBCMwhRCMwBRCMAJTCMEITCEEIzCFEIzAFEIwAlMIwQhMIQQjMIUQjMAUQjACUwjBCEwhBCMwhRCMwBRCMAJTRMC/GmTBykNYGIEp/h+CpjRfSv1Q9wAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wNC0xNFQyMDozMjozMCswODowMIEhsUkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDQtMTRUMjA6MzI6MzArMDg6MDDwfAn1AAAAAElFTkSuQmCC";
var TEXT_BASE64 = 'data:image/png;base64,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';
var ZIP_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAYAAAAcaxDBAAAAAXNSR0IArs4c6QAAA85JREFUeAHtnT9MFEEUxt8sZxRFgyIgGlTUWBgNxsLCP4mNRiU2JiZGS7WxMhYW2kq0sbWzsLExoTFEEzv/hGBhoiHRgIJgQYIiBNQDjttxdu8g3GQT7uY9dvfMN8kd+2b5vjfz2zd33DEcRGiiBNSC2/m32R0Zjzo1qbNEeuNC/0p/vTL1kE7+7RZJ83JtBz3acF3EqzwTNWFYPc/7dLvraO1woPGCuwu92bYaj95postxwgxyV3cLC++SYdd7sSe7M5hLCFRr6jTHTUEHmhOB5jyFDAtAlVannWwgWkJAnQmCsEKxzJdwcT4sPO8UgTq7QGgRAFALCDcEUC5BSw+gFhBuCKBcgpYeQC0g3BBAuQQtPYBaQLghgHIJWnoAtYBwQwDlErT0AGoB4YYAyiVo6QHUAsINAZRL0NIDqAWEGwIol6ClB1ALCDcEUC5BSw+gFhBuCKBcgpYeQC0g3DATGDzousX1cdbX7xol2uIsLxEeGeyhfYPfSvriDJ6aZCHQ5rHJOPOW5PJaZktiTlCbnaXVCc4lGDuWPOcKRmgBNAIKpytc8hwDV6137DiplhZSTbOk6nOuNiU6b9sqUntXkx4dJf/N65JzcQWJAFW791Dm6jXxOS5udjXOOQNVf/0inmM5w0SWvKqrW25c7PNx5IgaZCJAowbyv/QlsuQj4Y33kf7VF3lquU61aT9Rg7mloKUD6MxP8yRy02xTNfuAHZr2MuSdekK0psFBLStJx5Kfm3aGGeLw54nmpmTJOLqlA6jj4NMoA1DhqwKgACpMQNgOFQqgwgSE7VChACpMQNguHRWqavjTkvDgj6LwKxABH57F+lZSbedI/3hvXjH5lXkpj1TjISLjkYaWjtfypEi13zD31d/SseSrn+PiDJIB6ru9q7Q46nIO4sgRMY5Elrw/MED+50/ktW4nqjGfIxHcJFrePGiYmz8yQn5/v4RjxR6JAKWZGZq/fy8crNc+SV7bn4oHHiXwh9aR/6E+6lRsfcks+dimF3+isEI/Hvwdf+ZixtaGHDUKZR/fnKPvCc6FHhe34jw7MSY0pcptOsYz1Dgt8IO9ST28NUvdB8y7/wk2LHlh+AAKoMIEhO1QoQAqTEDYDhUKoMIEhO1QoQAqTEDYDhUKoMIEhO1QoQAqTEDYDhUKoMIEhO1QoQAqTEDYDhUKoMIEhO1QoQAqTEDYDhW6QkDNf11BYxIIGRYrVL9gmkFOBYYhUN/L3DFEktvtUP2XY6zIsPCZI3fbXw3ltT5s9q6Zv0AlLP/yL/BEwCxgFzAsX4bvLJvAP5o7omD4ghTFAAAAAElFTkSuQmCC';
var PDF_BASE64 = 'data:image/png;base64,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';
var IMG_BASE64 = 'data:image/png;base64,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';
var FOLDER_BASE64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAsCAYAAAAjFjtnAAAAAXNSR0IArs4c6QAAAhRJREFUaAXtWbtKxFAQPXOTfbAq+MLSH1gLC0EEURt/QLCxs7YSGxEFEfwRW8VOUOysRAtxdT9CREVEd2Oyuc5EEK00Tlw3cAcSlmzm3Dnn3NxiBvgUdhPGWlDa6xNE239KsSY4wTIZLFigYuOUNRiAMRq+QS222CtN4oAIDNWeoMYJNkpFbMmSXMCvgjjLeEAUMUaM3VeLpZ4p3P4KLGWSEGiyYiVWUR2Mg1IZaAY4bpQx3z+GRzXoNwAmq+JlHRGh2QDKBcxWXrD4zdqZ/M0OmAy0/1pLsQAEES6DaHimd6iLN1aGEXkWfiukav1VUKl1MZo5AdlKDB2S6aqBTLKQPFEHHxj8rT7x7RDPwQ6Nn92RrU1nTiApVEj4fCVkkifZ3ARPiDRb+3gOF3mJtOfmD+sQWcIfvpv2NSFR8OZQMeeiUf4iEYeFJ6yIGfmM940/mF8CIjuTyDcB5uAI/PcH5BxwDigVcFtIKaA63TmgllAJ4BxQCqhOdw6oJVQCOAeUAqrTnQNqCZUAzgGlgOp054BaQiWAc0ApoDpdHHjvcamh/gfAcH/xCl7WLeQ2kElqttcGHtbYgxB+jkhIrVIz0aqPG+8IA9EqPLOOsunr+F6dTANa9gFRvI0H/yiR3darRVD/CGKa4G5jt4waOzKSMzN+gqFT2PtrGTN97BsZcmO+mo95wW49os2/msx0pHUdXNQbh1+hoW1g/MIAAAAASUVORK5CYII=';
var CLOUD_BASE64 = 'data:image/png;base64,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';

/***/ }),

/***/ "./src/hooks/index.ts":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useDialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDialog */ "./src/hooks/useDialog/index.tsx");
/* harmony import */ var _useTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useTable */ "./src/hooks/useTable/index.ts");
/* harmony import */ var _useTableBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useTableBar */ "./src/hooks/useTableBar/index.tsx");
/* harmony import */ var _useFormSubmit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useFormSubmit */ "./src/hooks/useFormSubmit/index.ts");
/* harmony import */ var _useChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useChart */ "./src/hooks/useChart/index.tsx");
/* harmony import */ var _labelbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./labelbox */ "./src/hooks/labelbox/index.ts");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useTheme */ "./src/hooks/useTheme/index.ts");







/* harmony default export */ __webpack_exports__["default"] = ({
  useDialog: _useDialog__WEBPACK_IMPORTED_MODULE_0__["default"],
  useTable: _useTable__WEBPACK_IMPORTED_MODULE_1__["default"],
  useTableBar: _useTableBar__WEBPACK_IMPORTED_MODULE_2__["default"],
  useFormSubmit: _useFormSubmit__WEBPACK_IMPORTED_MODULE_3__["default"],
  useChart: _useChart__WEBPACK_IMPORTED_MODULE_4__["default"],
  useLabelBox: _labelbox__WEBPACK_IMPORTED_MODULE_5__["default"],
  useTheme: _useTheme__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/hooks/labelbox/constants.ts":
/*!*****************************************!*\
  !*** ./src/hooks/labelbox/constants.ts ***!
  \*****************************************/
/*! exports provided: OUTER_CONTAINERID_PREFIX, CONTAINERID_PREFIX, LABEL_DELETE_MARKER_ID_PREFIX, LABEL_LABEL_TEXT_ID_PREFIX, LABEL_RELATED_MARKER_ID_PREFIX, LABEL_RELATED_TEXT_ID_PREFIX, EAGLE_MAP_PREFIX, GFEATURE_STYLE, GTEXT_STYLE, DEFAULT_ZOOM, DELETE_ICON, LABEL_OFFSET, DELETE_ICON_OFFSET, EAGLE_MAP_SIZE, FEATURE_TYPE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUTER_CONTAINERID_PREFIX", function() { return OUTER_CONTAINERID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINERID_PREFIX", function() { return CONTAINERID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_DELETE_MARKER_ID_PREFIX", function() { return LABEL_DELETE_MARKER_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_LABEL_TEXT_ID_PREFIX", function() { return LABEL_LABEL_TEXT_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_RELATED_MARKER_ID_PREFIX", function() { return LABEL_RELATED_MARKER_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_RELATED_TEXT_ID_PREFIX", function() { return LABEL_RELATED_TEXT_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAGLE_MAP_PREFIX", function() { return EAGLE_MAP_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GFEATURE_STYLE", function() { return GFEATURE_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GTEXT_STYLE", function() { return GTEXT_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_ZOOM", function() { return DEFAULT_ZOOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ICON", function() { return DELETE_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LABEL_OFFSET", function() { return LABEL_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ICON_OFFSET", function() { return DELETE_ICON_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EAGLE_MAP_SIZE", function() { return EAGLE_MAP_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEATURE_TYPE_MAP", function() { return FEATURE_TYPE_MAP; });
var OUTER_CONTAINERID_PREFIX = 'mapContainerOuter';
var CONTAINERID_PREFIX = 'map-container-';
var LABEL_DELETE_MARKER_ID_PREFIX = 'label-delete-';
var LABEL_LABEL_TEXT_ID_PREFIX = 'label-label-';
var LABEL_RELATED_MARKER_ID_PREFIX = 'label-markers-';
var LABEL_RELATED_TEXT_ID_PREFIX = 'label-texts-';
var EAGLE_MAP_PREFIX = 'eagle-map-';
var GFEATURE_STYLE = {
  strokeColor: '#0000FF'
};
var GTEXT_STYLE = {
  fontColor: '#FFF',
  fontSize: 12,
  bgColor: '#1890FF'
};
var DEFAULT_ZOOM = 1000;
var DELETE_ICON = 'https://multimedia.bj.bcebos.com/icon/delete.png';
var LABEL_OFFSET = {
  rect: {
    x: -1,
    y: -14
  },
  polygon: {
    x: -1,
    y: -16
  },
  polyline: {
    x: -1,
    y: -18
  },
  point: {
    x: -1,
    y: -18
  }
};
var DELETE_ICON_OFFSET = {
  rect: {
    x: -18,
    y: 2
  },
  polygon: {
    x: -1,
    y: 4
  },
  polyline: {
    x: -1,
    y: 4
  },
  point: {
    x: -1,
    y: 4
  }
};
var EAGLE_MAP_SIZE = {
  width: 100,
  height: 100
};
var FEATURE_TYPE_MAP = {
  rect: 'Rect',
  polygon: 'Polygon',
  polyline: 'Polyline',
  point: 'Point'
};

/***/ }),

/***/ "./src/hooks/labelbox/eagleMap.ts":
/*!****************************************!*\
  !*** ./src/hooks/labelbox/eagleMap.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ailabel */ "./node_modules/ailabel/index.js");
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ailabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/hooks/labelbox/constants.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ __webpack_exports__["default"] = (function (gMap, eagleMap, image) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      eagleMapControl = _useState2[0],
      setEagleMapControl = _useState2[1];

  var getEagleMapControl = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!gMap || !eagleMap || !image) {
      return null;
    }

    var selfConfig = {};

    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(eagleMap)) {
      var container = eagleMap.container,
          grid = eagleMap.grid,
          _eagleMap$size = eagleMap.size,
          size = _eagleMap$size === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__["EAGLE_MAP_SIZE"] : _eagleMap$size;
      selfConfig = Object.assign(Object.assign(Object.assign({}, container ? {
        container: container
      } : {
        postion: {
          right: 10,
          bottom: 10
        }
      }), lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(grid) ? {
        grid: grid
      } : {}), {
        size: size
      });
    } else {
      selfConfig = {
        postion: {
          right: 10,
          bottom: 10
        },
        size: _constants__WEBPACK_IMPORTED_MODULE_3__["EAGLE_MAP_SIZE"]
      };
    }

    return new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Control.EagleMap(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqueId(_constants__WEBPACK_IMPORTED_MODULE_3__["EAGLE_MAP_PREFIX"]), Object.assign(Object.assign({}, selfConfig), {
      type: 'grid',
      image: Object.assign(Object.assign({}, image), {
        src: image.url
      })
    }));
  }, [gMap, eagleMap, image]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var newEagleMapControl = getEagleMapControl();

    if (newEagleMapControl) {
      setEagleMapControl(newEagleMapControl);
      gMap.addControl(newEagleMapControl);
    }
  }, [gMap, getEagleMapControl]);
  return {
    eagleMapControl: eagleMapControl
  };
});

/***/ }),

/***/ "./src/hooks/labelbox/event.ts":
/*!*************************************!*\
  !*** ./src/hooks/labelbox/event.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var baidu_acu_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baidu-acu-react-hooks */ "./node_modules/baidu-acu-react-hooks/es/index.js");
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ailabel */ "./node_modules/ailabel/index.js");
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ailabel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var polybooljs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polybooljs */ "./node_modules/polybooljs/index.js");
/* harmony import */ var polybooljs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(polybooljs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lineclip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lineclip */ "./node_modules/lineclip/index.js");
/* harmony import */ var lineclip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lineclip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/notification */ "./src/components/notification.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./src/hooks/labelbox/util.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./src/hooks/labelbox/constants.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










/* harmony default export */ __webpack_exports__["default"] = (function (gMap, labels, gTextLayer, image, show, filter, clip, onChange, handleFeatureStatusReset) {
  var onChangeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  onChangeRef.current = onChange;
  var update = Object(baidu_acu_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useUpdate"])();
  var filterValidFeature = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (points) {
    var imgWidth = image.width,
        imgHeight = image.height;

    var _AILabel$Util$getBoun = ailabel__WEBPACK_IMPORTED_MODULE_3___default.a.Util.getBounds(points),
        _AILabel$Util$getBoun2 = _slicedToArray(_AILabel$Util$getBoun, 3),
        ltPoint = _AILabel$Util$getBoun2[0],
        rbPoint = _AILabel$Util$getBoun2[2];

    var halfImageWidth = imgWidth / 2;
    var halfImageHeight = imgHeight / 2;
    var isLTvalid = ltPoint.x >= -halfImageWidth && ltPoint.x <= halfImageWidth && ltPoint.y >= -halfImageHeight && ltPoint.y <= halfImageHeight;
    var isRBvalid = rbPoint.x >= -halfImageWidth && rbPoint.x <= halfImageWidth && rbPoint.y >= -halfImageHeight && rbPoint.y <= halfImageHeight;
    return isLTvalid && isRBvalid;
  }, [image]);
  var handleBoundsChanged = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (onChangeRef.current) {
      onChangeRef.current('boundsChanged');
    }
  }, []);
  var handleFeatureWillSelected = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (feature) {
    var toSelectLabel = Object(_util__WEBPACK_IMPORTED_MODULE_7__["getLabelWithKey"])(labels, feature.id);

    if (toSelectLabel && onChangeRef.current) {
      onChangeRef.current('select', toSelectLabel);
    }
  }, [labels]);
  var handleDrawGeometryDone = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (type, points, options) {
    var _image$url = image.url,
        imgUrl = _image$url === void 0 ? '' : _image$url,
        imgWidth = image.width,
        imgHeight = image.height;
    var originPoints = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(points) ? points : [points];
    var formatPoints = [];
    var dataKey = '';

    if (type === 'mask') {
      formatPoints = originPoints;
      dataKey = 'masks';
    } else {
      formatPoints = Object(_util__WEBPACK_IMPORTED_MODULE_7__["centerToImagePointsForPoint"])(originPoints, image);
      dataKey = type === 'point' ? 'point' : 'points';

      if (clip && imgUrl && type !== 'point') {
        var simplePoints = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(formatPoints, function (fPoint) {
          return [fPoint.x, fPoint.y];
        });

        if (type === 'polyline') {
          var imgBBox = [0, 0, imgWidth, imgHeight];
          var clipPoints = lineclip__WEBPACK_IMPORTED_MODULE_5___default()(simplePoints, imgBBox);

          if (clipPoints.length) {
            formatPoints = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(clipPoints[0], function (linePoint) {
              return {
                x: linePoint[0],
                y: linePoint[1]
              };
            });
          } else {
            _components_notification__WEBPACK_IMPORTED_MODULE_6__["default"].warning('请在‘样本图片区域内’进行标注绘制！');
            return;
          }
        } else {
          var imgPoints = [[0, 0], [imgWidth, 0], [imgWidth, imgHeight], [0, imgHeight]];
          var newPoints = polybooljs__WEBPACK_IMPORTED_MODULE_4___default.a.intersect({
            regions: [simplePoints],
            inverted: false
          }, {
            regions: [imgPoints],
            inverted: false
          });

          var firstRegion = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(newPoints, 'regions[0]', []);

          if (firstRegion.length > 2) {
            formatPoints = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(firstRegion, function (regionPoint) {
              return {
                x: regionPoint[0],
                y: regionPoint[1]
              };
            });
          } else {
            var innerImgPoints = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(simplePoints, function (point) {
              var _point = _slicedToArray(point, 2),
                  x = _point[0],
                  y = _point[1];

              return x < 0 || x > imgWidth || y < 0 || y > imgHeight;
            });

            var tipMsg = innerImgPoints ? '请在‘样本图片区域内’进行标注绘制！' : '绘制图形不规则，请重新绘制！';
            _components_notification__WEBPACK_IMPORTED_MODULE_6__["default"].warning(tipMsg);
            return;
          }
        }
      } else if (filter && imgUrl) {
        var isValidFea = filterValidFeature(originPoints);

        if (!isValidFea) {
          _components_notification__WEBPACK_IMPORTED_MODULE_6__["default"].warning('请在‘样本图片区域内’进行标注绘制！');
          return;
        }
      }
    }

    if (onChangeRef.current) {
      onChangeRef.current('add', _defineProperty({
        type: type
      }, dataKey, type === 'point' ? formatPoints[0] : formatPoints), options);
    }
  }, [image, filter, clip, filterValidFeature]);
  var handleEditMaskDone = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (layersData) {
    var defaultLayerMasks = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(layersData, '[0].masks', null);

    if (onChangeRef.current && defaultLayerMasks) {
      onChangeRef.current('update', {
        type: 'mask',
        masks: defaultLayerMasks
      });
    }
  }, []);
  var handleEditGeometryDone = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (activeFeature, points) {
    var _image$url2 = image.url,
        imgUrl = _image$url2 === void 0 ? '' : _image$url2;

    if (filter && imgUrl) {
      var isValidFea = filterValidFeature(points);

      if (!isValidFea) {
        _components_notification__WEBPACK_IMPORTED_MODULE_6__["default"].warning('请在‘样本图片区域内’进行标注绘制！');
        var toUpdateResetLabel = Object(_util__WEBPACK_IMPORTED_MODULE_7__["getLabelWithKey"])(labels, activeFeature.id);

        if (toUpdateResetLabel && onChangeRef.current) {
          onChangeRef.current('updateReset', toUpdateResetLabel);
        }

        return;
      }
    }

    var updateLabel = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(labels, {
      key: activeFeature.id
    });

    if (updateLabel && onChangeRef.current) {
      var newLabel = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(updateLabel);

      var formatPoints = Object(_util__WEBPACK_IMPORTED_MODULE_7__["centerToImagePointsForPoint"])(points, image);
      newLabel.points = formatPoints;

      if (onChangeRef.current) {
        onChangeRef.current('update', newLabel);
      }
    }
  }, [filter, image, labels, filterValidFeature]);
  var handleEditingGeometry = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (feature, points) {
    var updatingLabel = Object(_util__WEBPACK_IMPORTED_MODULE_7__["getLabelWithKey"])(labels, feature.id);
    var formatPoints = Object(_util__WEBPACK_IMPORTED_MODULE_7__["centerToImagePointsForPoint"])(points, image);

    if (updatingLabel && onChangeRef.current) {
      onChangeRef.current('updating', Object.assign(Object.assign({}, updatingLabel), {
        points: formatPoints
      }));
    }
  }, [image, labels]);
  var hideHoverLabel = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (show === 'hover') {
      var allTexts = gTextLayer.getAllTexts();

      var allLabelTexts = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(allTexts, function (text) {
        return text.id.indexOf("".concat(_constants__WEBPACK_IMPORTED_MODULE_8__["LABEL_LABEL_TEXT_ID_PREFIX"])) === 0;
      });

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(allLabelTexts, function (labelText) {
        if (labelText && labelText.visible) {
          labelText.hide();
        }
      });
    }
  }, [show, gTextLayer]);
  var handleFeatureHover = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (feature, evt, wxy) {
    if (feature && show === 'hover') {
      hideHoverLabel();
      var featureId = feature.id;
      var labelLabelId = "".concat(_constants__WEBPACK_IMPORTED_MODULE_8__["LABEL_LABEL_TEXT_ID_PREFIX"]).concat(featureId);
      var labelText = gTextLayer.getTextById(labelLabelId);

      if (labelText && !labelText.visible) {
        labelText.show();
      }
    } else if (!feature) {
      hideHoverLabel();
    }

    if (onChangeRef.current) {
      var labelKey = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(feature, 'id');

      var hoverLabel = Object(_util__WEBPACK_IMPORTED_MODULE_7__["getLabelWithKey"])(labels, labelKey);
      onChangeRef.current('hover', hoverLabel, evt, wxy);
    }
  }, [show, labels, gTextLayer, hideHoverLabel]);
  var handleFeatureDelete = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (__, feature) {
    var labelKey = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(feature, 'id');

    var toDeleteLabel = Object(_util__WEBPACK_IMPORTED_MODULE_7__["getLabelWithKey"])(labels, labelKey);

    if (toDeleteLabel && onChangeRef.current) {
      onChangeRef.current('delete', toDeleteLabel);
    }
  }, [labels]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gMap && gMap.events.on('featureStatusReset', function () {
      return handleFeatureStatusReset();
    });
  }, [gMap, handleFeatureStatusReset]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gMap && gMap.events.on('boundsChanged', function () {
      return handleBoundsChanged();
    });
  }, [gMap, handleBoundsChanged]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gMap && gMap.events.on('featureWillSelected', function (feature) {
      return handleFeatureWillSelected(feature);
    });
  }, [gMap, handleFeatureWillSelected]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gMap && gMap.events.on('geometryDrawDone', function (type, points, options) {
      return handleDrawGeometryDone(type, points, options);
    });
  }, [gMap, handleDrawGeometryDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gMap && gMap.events.on('geometryEditDone', function (type, activeFeature, points) {
      if (type === 'mask') {
        handleEditMaskDone(activeFeature);
      } else {
        handleEditGeometryDone(activeFeature, points);
      }
    });
  }, [gMap, handleEditGeometryDone, handleEditMaskDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gMap && gMap.events.on('geometryEditing', function (___, feature, points) {
      return handleEditingGeometry(feature, points);
    });
  }, [gMap, handleEditingGeometry]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gMap && gMap.events.on('featureHover', function (feature, evt, wxy) {
      return handleFeatureHover(feature, evt, wxy);
    });
  }, [gMap, handleFeatureHover]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gMap && gMap.events.on('geometryRemove', function (type, feature) {
      if (type === 'point') {
        handleFeatureDelete(type, feature);
      }
    });
  }, [gMap, handleFeatureDelete]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    gMap && gMap.events.on('resize', function () {
      return update();
    });
  }, [gMap, update]);
});

/***/ }),

/***/ "./src/hooks/labelbox/gmap.ts":
/*!************************************!*\
  !*** ./src/hooks/labelbox/gmap.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ailabel */ "./node_modules/ailabel/index.js");
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ailabel__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ __webpack_exports__["default"] = (function (containerDom, image, initZoom) {
  var _image$url = image.url,
      imgUrl = _image$url === void 0 ? '' : _image$url,
      _image$width = image.width,
      imgWidth = _image$width === void 0 ? 0 : _image$width,
      _image$height = image.height,
      imgHeight = _image$height === void 0 ? 0 : _image$height;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      gMap = _useState2[0],
      setGMap = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      gImageLayer = _useState4[0],
      setGImageLayer = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      gFeatureLayer = _useState6[0],
      setGFeatureLayer = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      gTextLayer = _useState8[0],
      setGTextLayer = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState10 = _slicedToArray(_useState9, 2),
      gMaskLayer = _useState10[0],
      setGMaskLayer = _useState10[1];

  var handleMaskCoordsTransformToCenter = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (point, scene) {
    var x = point.x,
        y = point.y;

    if (scene === 'mask') {
      return imgWidth && imgHeight ? {
        x: Math.ceil(x - imgWidth / 2),
        y: Math.ceil(imgHeight / 2 - y)
      } : {
        x: x,
        y: y
      };
    }

    return point;
  }, [imgWidth, imgHeight]);
  var handleMaskCoordsTransformToImage = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (point, scene) {
    var x = point.x,
        y = point.y;

    if (scene === 'mask') {
      if (imgWidth && imgHeight) {
        var newX = Math.floor(x + imgWidth / 2);
        var newY = Math.floor(imgHeight / 2 - y);
        return {
          x: newX === imgWidth ? newX - 1 : newX,
          y: newY === imgHeight ? newY - 1 : newY
        };
      }

      return {
        x: x,
        y: y
      };
    }

    return point;
  }, [imgWidth, imgHeight]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var containerId = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(containerDom, 'id', '');

    var containerElement = document.getElementById(containerId);

    if (!containerDom || !containerElement) {
      return;
    }

    var innerGMap = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Map(containerId, {
      zoom: initZoom,
      cx: 0,
      cy: 0,
      autoFeatureSelect: false
    });

    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(imgWidth) && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(imgHeight)) {
      innerGMap.setMaskBounds(-imgWidth / 2, imgWidth / 2, -imgHeight / 2, imgHeight / 2);
      innerGMap.slots.on('coordsTransformBeforeRender', function (point, scene) {
        return handleMaskCoordsTransformToCenter(point, scene);
      });
      innerGMap.slots.on('coordsTransformBeforeGeometryDrawDone', function (point, scene) {
        return handleMaskCoordsTransformToImage(point, scene);
      });
    }

    if (imgUrl) {
      var innerGImageLayer = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Layer.Image("layer-img-".concat(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqueId()), imgUrl, {
        w: imgWidth,
        h: imgHeight
      }, {
        zIndex: 1
      });
      innerGMap.addLayer(innerGImageLayer);
      setGImageLayer(innerGImageLayer);
    }

    var innerGFeatureLayer = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Layer.Feature("layer-feature-".concat(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqueId()), {
      zIndex: 3,
      transparent: false
    });
    innerGMap.addLayer(innerGFeatureLayer);
    setGFeatureLayer(innerGFeatureLayer);
    var innerGTextLayer = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Layer.Text("layer-text-".concat(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqueId()));
    innerGMap.addLayer(innerGTextLayer);
    setGTextLayer(innerGTextLayer);
    var innerGMaskLayer = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Layer.Mask("mask-layer-".concat(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqueId()), {
      zIndex: 2
    });
    innerGMap.addLayer(innerGMaskLayer);
    setGMaskLayer(innerGMaskLayer);
    setGMap(innerGMap);
  }, [containerDom, imgUrl, imgWidth, imgHeight, initZoom]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      gMap && gMap.destroy();
      setGMap(null);
      setGImageLayer(null);
      setGFeatureLayer(null);
      setGTextLayer(null);
      setGMaskLayer(null);
    };
  }, []);
  return {
    gMap: gMap,
    gImageLayer: gImageLayer,
    gFeatureLayer: gFeatureLayer,
    gTextLayer: gTextLayer,
    gMaskLayer: gMaskLayer
  };
});

/***/ }),

/***/ "./src/hooks/labelbox/imgGrid.ts":
/*!***************************************!*\
  !*** ./src/hooks/labelbox/imgGrid.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (function (gImageLayer, image) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!gImageLayer) {
      return;
    }

    var gridConfig = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(image, 'grid');

    gImageLayer.removeGrid();

    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(gridConfig)) {
      gImageLayer.update({
        grid: gridConfig
      });
    }
  }, [gImageLayer, image]);
});

/***/ }),

/***/ "./src/hooks/labelbox/index.ts":
/*!*************************************!*\
  !*** ./src/hooks/labelbox/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baidu_acu_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baidu-acu-react-hooks */ "./node_modules/baidu-acu-react-hooks/es/index.js");
/* harmony import */ var _zoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zoom */ "./src/hooks/labelbox/zoom.ts");
/* harmony import */ var _gmap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gmap */ "./src/hooks/labelbox/gmap.ts");
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./label */ "./src/hooks/labelbox/label.ts");
/* harmony import */ var _labelRemove__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./labelRemove */ "./src/hooks/labelbox/labelRemove.ts");
/* harmony import */ var _labelUpdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./labelUpdate */ "./src/hooks/labelbox/labelUpdate.ts");
/* harmony import */ var _labelAdd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./labelAdd */ "./src/hooks/labelbox/labelAdd.ts");
/* harmony import */ var _mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mask */ "./src/hooks/labelbox/mask.ts");
/* harmony import */ var _eagleMap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./eagleMap */ "./src/hooks/labelbox/eagleMap.ts");
/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mode */ "./src/hooks/labelbox/mode.ts");
/* harmony import */ var _imgGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./imgGrid */ "./src/hooks/labelbox/imgGrid.ts");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./event */ "./src/hooks/labelbox/event.ts");
/* harmony import */ var _method__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./method */ "./src/hooks/labelbox/method.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./util */ "./src/hooks/labelbox/util.ts");















/* harmony default export */ __webpack_exports__["default"] = (function (configOptions, props, handleLabelChange) {
  var formatOptions = configOptions(props);
  var outerContainerId = formatOptions.id,
      wrapClassName = formatOptions.wrapClassName,
      container = formatOptions.container,
      image = formatOptions.image,
      _formatOptions$show = formatOptions.show,
      show = _formatOptions$show === void 0 ? 'default' : _formatOptions$show,
      deleteIcon = formatOptions.deleteIcon,
      _formatOptions$labels = formatOptions.labels,
      labels = _formatOptions$labels === void 0 ? [] : _formatOptions$labels,
      _formatOptions$masks = formatOptions.masks,
      masks = _formatOptions$masks === void 0 ? [] : _formatOptions$masks,
      _formatOptions$mode = formatOptions.mode,
      mode = _formatOptions$mode === void 0 ? 'pan' : _formatOptions$mode,
      _formatOptions$filter = formatOptions.filter,
      filter = _formatOptions$filter === void 0 ? false : _formatOptions$filter,
      _formatOptions$clip = formatOptions.clip,
      clip = _formatOptions$clip === void 0 ? false : _formatOptions$clip,
      _formatOptions$drawSt = formatOptions.drawStyle,
      drawStyle = _formatOptions$drawSt === void 0 ? null : _formatOptions$drawSt,
      _formatOptions$eagleM = formatOptions.eagleMap,
      eagleMap = _formatOptions$eagleM === void 0 ? false : _formatOptions$eagleM,
      tipsOff = formatOptions.tipsOff;

  var customCompareEvent = function customCompareEvent(savedValue, value) {
    var savedValueFormat = Object(_util__WEBPACK_IMPORTED_MODULE_14__["processObjFunction"])(savedValue);
    var valueFormat = Object(_util__WEBPACK_IMPORTED_MODULE_14__["processObjFunction"])(value);
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(savedValueFormat, valueFormat);
  };

  var originalLabels = Object(baidu_acu_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useOriginalCopy"])(labels, customCompareEvent);
  var originalImage = Object(baidu_acu_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useOriginalCopy"])(image);
  var originalDrawStyle = Object(baidu_acu_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useOriginalCopy"])(drawStyle);
  var originalEagleMap = Object(baidu_acu_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useOriginalCopy"])(eagleMap);
  var containerId = "gmap-".concat(outerContainerId);
  var containerElement = document.getElementById(containerId);

  var _useZoom = Object(_zoom__WEBPACK_IMPORTED_MODULE_2__["default"])(containerElement, originalImage),
      initZoom = _useZoom.zoom;

  var _useGMap = Object(_gmap__WEBPACK_IMPORTED_MODULE_3__["default"])(containerElement, originalImage, initZoom),
      gMap = _useGMap.gMap,
      gImageLayer = _useGMap.gImageLayer,
      gFeatureLayer = _useGMap.gFeatureLayer,
      gTextLayer = _useGMap.gTextLayer,
      gMaskLayer = _useGMap.gMaskLayer;

  var _useMethod = Object(_method__WEBPACK_IMPORTED_MODULE_13__["default"])(gMap, gTextLayer, labels, originalImage, deleteIcon, handleLabelChange),
      worldToScreen = _useMethod.worldToScreen,
      screenToWorld = _useMethod.screenToWorld,
      removeRelatedMarkersAndTexts = _useMethod.removeRelatedMarkersAndTexts,
      addRelatedMarkersAndTexts = _useMethod.addRelatedMarkersAndTexts,
      addLabelDeleteIcon = _useMethod.addLabelDeleteIcon,
      removeLabelDeleteIcon = _useMethod.removeLabelDeleteIcon,
      handleFeatureStatusReset = _useMethod.handleFeatureStatusReset;

  Object(_mode__WEBPACK_IMPORTED_MODULE_10__["default"])(gMap, mode, originalDrawStyle, initZoom, !!tipsOff, handleFeatureStatusReset);
  Object(_imgGrid__WEBPACK_IMPORTED_MODULE_11__["default"])(gImageLayer, originalImage);

  var _useLabel = Object(_label__WEBPACK_IMPORTED_MODULE_4__["default"])(gMap, originalLabels, gFeatureLayer, gTextLayer),
      toRemoveLabels = _useLabel.toRemoveLabels,
      toUpdateLabels = _useLabel.toUpdateLabels,
      toAddLabels = _useLabel.toAddLabels;

  Object(_labelRemove__WEBPACK_IMPORTED_MODULE_5__["default"])(gMap, gFeatureLayer, gTextLayer, toRemoveLabels, removeRelatedMarkersAndTexts);
  Object(_labelUpdate__WEBPACK_IMPORTED_MODULE_6__["default"])(gMap, gFeatureLayer, gTextLayer, originalImage, toUpdateLabels, removeRelatedMarkersAndTexts, addRelatedMarkersAndTexts, addLabelDeleteIcon, removeLabelDeleteIcon);
  Object(_labelAdd__WEBPACK_IMPORTED_MODULE_7__["default"])(gFeatureLayer, gTextLayer, originalImage, show, toAddLabels, addRelatedMarkersAndTexts, addLabelDeleteIcon);
  Object(_mask__WEBPACK_IMPORTED_MODULE_8__["default"])(gMap, masks, originalImage, gMaskLayer);
  Object(_eagleMap__WEBPACK_IMPORTED_MODULE_9__["default"])(gMap, originalEagleMap, originalImage);
  Object(_event__WEBPACK_IMPORTED_MODULE_12__["default"])(gMap, originalLabels, gTextLayer, originalImage, show, filter, clip, handleLabelChange, handleFeatureStatusReset);
  var labelProps = {
    outerContainerId: outerContainerId,
    containerId: containerId,
    wrapClassName: wrapClassName,
    container: container
  };
  return {
    labelProps: labelProps,
    gMap: gMap,
    initZoom: initZoom,
    gImageLayer: gImageLayer,
    gFeatureLayer: gFeatureLayer,
    gTextLayer: gTextLayer,
    tools: {
      worldToScreen: worldToScreen,
      screenToWorld: screenToWorld
    }
  };
});

/***/ }),

/***/ "./src/hooks/labelbox/label.ts":
/*!*************************************!*\
  !*** ./src/hooks/labelbox/label.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/hooks/labelbox/util.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ __webpack_exports__["default"] = (function (gMap, labels, gFeatureLayer, gTextLayer) {
  var initPreLabels = [];
  var refContainer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(initPreLabels);
  var refShowLabels = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      toRemoveLabels = _useState2[0],
      setToRemoveLabels = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      toUpdateLabels = _useState4[0],
      setToUpdateLabels = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      toAddLabels = _useState6[0],
      setToAddLabels = _useState6[1];

  refShowLabels.current = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var preLabels = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(refContainer.current);

    refContainer.current = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(labels);

    var _diffLabels = Object(_util__WEBPACK_IMPORTED_MODULE_2__["diffLabels"])(preLabels, labels),
        toRemoveLabels = _diffLabels.toRemoveLabels,
        toUpdateLabels = _diffLabels.toUpdateLabels,
        toAddLabels = _diffLabels.toAddLabels;

    setToRemoveLabels(toRemoveLabels);
    setToUpdateLabels(toUpdateLabels);
    setToAddLabels(toAddLabels);
  }, [labels]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    refShowLabels.current && refShowLabels.current();
  }, [labels]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    refContainer.current = [];
    refShowLabels.current && refShowLabels.current();
  }, [gMap, gFeatureLayer, gTextLayer]);
  return {
    toRemoveLabels: toRemoveLabels,
    toUpdateLabels: toUpdateLabels,
    toAddLabels: toAddLabels
  };
});

/***/ }),

/***/ "./src/hooks/labelbox/labelAdd.ts":
/*!****************************************!*\
  !*** ./src/hooks/labelbox/labelAdd.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ailabel */ "./node_modules/ailabel/index.js");
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ailabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/hooks/labelbox/util.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/hooks/labelbox/constants.ts");





/* harmony default export */ __webpack_exports__["default"] = (function (gFeatureLayer, gTextLayer, image, show, toAddLabels, addRelatedMarkersAndTexts, addLabelDeleteIcon) {
  var addLabelFeature = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (featureId, label) {
    if (!gFeatureLayer) {
      return;
    }

    var _label$select = label.select,
        select = _label$select === void 0 ? false : _label$select,
        _label$points = label.points,
        points = _label$points === void 0 ? [] : _label$points,
        point = label.point,
        style = label.style,
        _label$type = label.type,
        type = _label$type === void 0 ? 'rect' : _label$type,
        options = label.options;
    var originPoints = type === 'point' ? [point] : points;
    var formatPoints = Object(_util__WEBPACK_IMPORTED_MODULE_3__["imageToCenterPointsForPoint"])(originPoints, image);
    var featureStyle = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Style(style || _constants__WEBPACK_IMPORTED_MODULE_4__["GFEATURE_STYLE"]);
    var featureType = _constants__WEBPACK_IMPORTED_MODULE_4__["FEATURE_TYPE_MAP"][type];
    var feature = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Feature[featureType](featureId, formatPoints, {}, featureStyle, options);
    gFeatureLayer.addFeature(feature);

    if (select) {
      feature.active();
    }
  }, [gFeatureLayer, image]);
  var addLabelLabel = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (featureId, label) {
    if (!gTextLayer) {
      return;
    }

    var _label$label = label.label,
        labelConfig = _label$label === void 0 ? {} : _label$label,
        _label$points2 = label.points,
        points = _label$points2 === void 0 ? [] : _label$points2,
        _label$type2 = label.type,
        type = _label$type2 === void 0 ? 'rect' : _label$type2;
    var _labelConfig$name = labelConfig.name,
        labelName = _labelConfig$name === void 0 ? '' : _labelConfig$name,
        labelStyle = labelConfig.style;
    var labelLabelId = "".concat(_constants__WEBPACK_IMPORTED_MODULE_4__["LABEL_LABEL_TEXT_ID_PREFIX"]).concat(featureId);
    var formatPoints = Object(_util__WEBPACK_IMPORTED_MODULE_3__["imageToCenterPointsForPoint"])(points, image);
    var labelLabelPoint = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getLabelLabelDeletePosition"])(type, 'label', formatPoints);
    var labelLabelStyle = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Style(labelStyle || _constants__WEBPACK_IMPORTED_MODULE_4__["GTEXT_STYLE"]);
    var lableLabel = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Text(labelLabelId, {
      pos: {
        x: labelLabelPoint.x,
        y: labelLabelPoint.y
      },
      offset: _constants__WEBPACK_IMPORTED_MODULE_4__["LABEL_OFFSET"][type],
      visible: show !== 'hover',
      maxWidth: 100,
      text: labelName
    }, labelLabelStyle);
    gTextLayer.addText(lableLabel);
  }, [gTextLayer, image, show]);
  var addLabels = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(toAddLabels, function (addLabel) {
      var featureId = addLabel.key || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqueId();

      if (gFeatureLayer && gFeatureLayer.getFeatureById(featureId)) {
        return;
      }

      addLabelFeature(featureId, addLabel);
      addLabelLabel(featureId, addLabel);
      addLabelDeleteIcon(featureId, addLabel);
      addRelatedMarkersAndTexts(featureId, addLabel);
    });
  }, [gFeatureLayer, toAddLabels, addLabelFeature, addLabelLabel, addLabelDeleteIcon, addRelatedMarkersAndTexts]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    addLabels();
  }, [toAddLabels]);
});

/***/ }),

/***/ "./src/hooks/labelbox/labelRemove.ts":
/*!*******************************************!*\
  !*** ./src/hooks/labelbox/labelRemove.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/hooks/labelbox/constants.ts");



/* harmony default export */ __webpack_exports__["default"] = (function (gMap, gFeatureLayer, gTextLayer, toRemoveLabels, removeRelatedMarkersAndTexts) {
  var removeLabels = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!gMap || !gFeatureLayer || !gTextLayer) {
      return;
    }

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(toRemoveLabels, function (removeLabel) {
      var featureId = removeLabel.key;
      var deleteMarkerId = "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["LABEL_DELETE_MARKER_ID_PREFIX"]).concat(featureId);
      var labelLabelId = "".concat(_constants__WEBPACK_IMPORTED_MODULE_2__["LABEL_LABEL_TEXT_ID_PREFIX"]).concat(featureId);
      gFeatureLayer.removeFeatureById(featureId);
      gTextLayer.removeTextById(labelLabelId);
      gMap.mLayer.removeMarkerById(deleteMarkerId);
      removeRelatedMarkersAndTexts(removeLabel);
    });
  }, [gMap, gFeatureLayer, gTextLayer, toRemoveLabels, removeRelatedMarkersAndTexts]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    removeLabels();
  }, [toRemoveLabels]);
});

/***/ }),

/***/ "./src/hooks/labelbox/labelUpdate.ts":
/*!*******************************************!*\
  !*** ./src/hooks/labelbox/labelUpdate.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ailabel */ "./node_modules/ailabel/index.js");
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ailabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/hooks/labelbox/util.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/hooks/labelbox/constants.ts");





/* harmony default export */ __webpack_exports__["default"] = (function (gMap, gFeatureLayer, gTextLayer, image, toUpdateLabels, removeRelatedMarkersAndTexts, addRelatedMarkersAndTexts, addLabelDeleteIcon, removeLabelDeleteIcon) {
  var updateLabelAndDeletePosition = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (featureType, featureId, points) {
    var labelPoint = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getLabelLabelDeletePosition"])(featureType, 'label', points);
    var deletePoint = Object(_util__WEBPACK_IMPORTED_MODULE_3__["getLabelLabelDeletePosition"])(featureType, 'delete', points);
    var deleteMarkerId = "".concat(_constants__WEBPACK_IMPORTED_MODULE_4__["LABEL_DELETE_MARKER_ID_PREFIX"]).concat(featureId);
    var labelLabelId = "".concat(_constants__WEBPACK_IMPORTED_MODULE_4__["LABEL_LABEL_TEXT_ID_PREFIX"]).concat(featureId);
    var deleteMarker = gMap.mLayer.getMarkerById(deleteMarkerId);
    var labelText = gTextLayer.getTextById(labelLabelId);

    if (deleteMarker) {
      deleteMarker.update(deletePoint);
    }

    if (labelText) {
      labelText.update({
        pos: labelPoint
      });
    }
  }, [gMap, gTextLayer]);
  var updateLabels = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(toUpdateLabels, function (updateLabel) {
      var featureId = updateLabel.key,
          _updateLabel$select = updateLabel.select,
          select = _updateLabel$select === void 0 ? false : _updateLabel$select,
          _updateLabel$label = updateLabel.label,
          labelConfig = _updateLabel$label === void 0 ? {} : _updateLabel$label,
          _updateLabel$points = updateLabel.points,
          points = _updateLabel$points === void 0 ? [] : _updateLabel$points,
          style = updateLabel.style;
      var _labelConfig$name = labelConfig.name,
          labelName = _labelConfig$name === void 0 ? '' : _labelConfig$name,
          labelStyle = labelConfig.style;
      var labelLabelId = "".concat(_constants__WEBPACK_IMPORTED_MODULE_4__["LABEL_LABEL_TEXT_ID_PREFIX"]).concat(featureId);
      var cLabelFeature = gFeatureLayer.getFeatureById(featureId);
      var cLabelText = gTextLayer.getTextById(labelLabelId);
      var cFeatureStyle = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Style(style || _constants__WEBPACK_IMPORTED_MODULE_4__["GFEATURE_STYLE"]);
      var cLabelStyle = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Style(labelStyle || _constants__WEBPACK_IMPORTED_MODULE_4__["GTEXT_STYLE"]);

      if (!cLabelFeature || !cLabelText) {
        return;
      }

      var formatPoints = Object(_util__WEBPACK_IMPORTED_MODULE_3__["imageToCenterPointsForPoint"])(points, image);
      cLabelFeature.update({
        points: formatPoints,
        style: cFeatureStyle
      });

      if (select) {
        cLabelFeature.active();
        addLabelDeleteIcon(featureId, updateLabel);
      } else if (!select && cLabelFeature.activeStatus) {
        cLabelFeature.deActive();
        removeLabelDeleteIcon(featureId);
      }

      cLabelText.update({
        text: labelName,
        style: cLabelStyle
      });
      updateLabelAndDeletePosition(cLabelFeature.type, cLabelFeature.id, cLabelFeature.points);
      removeRelatedMarkersAndTexts(updateLabel);
      addRelatedMarkersAndTexts(featureId, updateLabel);
    });
  }, [gFeatureLayer, gTextLayer, toUpdateLabels, image, addLabelDeleteIcon, removeLabelDeleteIcon, addRelatedMarkersAndTexts, removeRelatedMarkersAndTexts, updateLabelAndDeletePosition]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    updateLabels();
  }, [toUpdateLabels]);
});

/***/ }),

/***/ "./src/hooks/labelbox/mask.ts":
/*!************************************!*\
  !*** ./src/hooks/labelbox/mask.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (gMap, masks, image, gMaskLayer) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!gMap || !gMaskLayer) {
      return;
    }

    gMaskLayer.addMasks(masks, true);
  }, [gMap, masks, image, gMaskLayer]);
});

/***/ }),

/***/ "./src/hooks/labelbox/method.ts":
/*!**************************************!*\
  !*** ./src/hooks/labelbox/method.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ailabel */ "./node_modules/ailabel/index.js");
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ailabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./src/hooks/labelbox/constants.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/hooks/labelbox/util.ts");





/* harmony default export */ __webpack_exports__["default"] = (function (gMap, gTextLayer, labels, image, deleteIcon, onChange) {
  var onChangeRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  onChangeRef.current = onChange;
  var worldToScreen = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (points) {
    if (!gMap || !points || !points.length) {
      return points;
    }

    var formatWorldCenterPoints = Object(_util__WEBPACK_IMPORTED_MODULE_4__["imageToCenterPointsForPoint"])(points, image);

    var screenPoints = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(formatWorldCenterPoints, function (point) {
      return ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Util.worldToScreen(gMap, point.x, point.y);
    });

    return screenPoints;
  }, [gMap, image]);
  var screenToWorld = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (points, returnType) {
    if (!gMap || !points || !points.length) {
      return points;
    }

    var worldPoints = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(points, function (point) {
      return ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Util.screenToWorld(gMap, point.x, point.y);
    });

    if (returnType && returnType === 'center') {
      return worldPoints;
    }

    var formatWorldCenterPoints = Object(_util__WEBPACK_IMPORTED_MODULE_4__["centerToImagePointsForPoint"])(worldPoints, image);
    return formatWorldCenterPoints;
  }, [gMap, image]);
  var removeRelatedMarkers = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (removeLabel) {
    if (!gMap) {
      return;
    }

    var featureId = removeLabel.key;
    var allMarkers = gMap.mLayer.getAllMarkers();

    var deleteRelatedMarkers = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(allMarkers, function (marker) {
      return marker.id.indexOf("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["LABEL_RELATED_MARKER_ID_PREFIX"]).concat(featureId, "-")) === 0;
    });

    var toRemoveRelatedMarkerIds = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(deleteRelatedMarkers, 'id');

    if (toRemoveRelatedMarkerIds.length) {
      gMap.mLayer.removeMarkersByIds(toRemoveRelatedMarkerIds);
    }
  }, [gMap]);
  var removeRelatedTexts = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (removeLabel) {
    if (!gMap || !gTextLayer) {
      return;
    }

    var featureId = removeLabel.key;
    var allTexts = gTextLayer.getAllTexts();

    var deleteRelatedTexts = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(allTexts, function (text) {
      return text.id.indexOf("".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["LABEL_RELATED_TEXT_ID_PREFIX"]).concat(featureId, "-")) === 0;
    });

    var toRemoveRelatedTextIds = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(deleteRelatedTexts, 'id');

    if (toRemoveRelatedTextIds.length) {
      gTextLayer.removeTextsByIds(toRemoveRelatedTextIds);
    }
  }, [gMap, gTextLayer]);
  var removeRelatedMarkersAndTexts = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (removeLabel) {
    removeRelatedMarkers(removeLabel);
    removeRelatedTexts(removeLabel);
  }, [removeRelatedMarkers, removeRelatedTexts]);
  var addLabelDeleteIcon = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (featureId, label) {
    if (!gMap) {
      return;
    }

    var _label$select = label.select,
        select = _label$select === void 0 ? false : _label$select,
        _label$points = label.points,
        points = _label$points === void 0 ? [] : _label$points,
        _label$type = label.type,
        type = _label$type === void 0 ? 'rect' : _label$type;
    var deleteMarkerId = "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["LABEL_DELETE_MARKER_ID_PREFIX"]).concat(featureId);
    gMap.mLayer.removeMarkerById(deleteMarkerId);

    if (!select) {
      return;
    }

    var formatPoints = Object(_util__WEBPACK_IMPORTED_MODULE_4__["imageToCenterPointsForPoint"])(points, image);
    var deleteIconPoint = Object(_util__WEBPACK_IMPORTED_MODULE_4__["getLabelLabelDeletePosition"])(type, 'delete', formatPoints);
    var deleteMarker = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Marker(deleteMarkerId, {
      src: deleteIcon || _constants__WEBPACK_IMPORTED_MODULE_3__["DELETE_ICON"],
      x: deleteIconPoint.x,
      y: deleteIconPoint.y,
      offset: _constants__WEBPACK_IMPORTED_MODULE_3__["DELETE_ICON_OFFSET"][type]
    });
    gMap.mLayer.addMarker(deleteMarker);
    deleteMarker.regEvent('click', function () {
      var toDeleteLabel = Object(_util__WEBPACK_IMPORTED_MODULE_4__["getLabelWithKey"])(labels, featureId);

      if (toDeleteLabel && onChangeRef.current) {
        onChangeRef.current('delete', toDeleteLabel);
      }
    });
  }, [gMap, image, labels, deleteIcon]);
  var removeLabelDeleteIcon = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (featureId) {
    if (!gMap) {
      return;
    }

    var deleteMarkerId = "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["LABEL_DELETE_MARKER_ID_PREFIX"]).concat(featureId);
    gMap.mLayer.removeMarkerById(deleteMarkerId);
  }, [gMap]);
  var addLabelRelatedMarkers = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (featureId, label) {
    if (!gMap) {
      return;
    }

    var _label$markers = label.markers,
        markers = _label$markers === void 0 ? [] : _label$markers;

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(markers, function (marker, index) {
      var relatedMarkerId = "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["LABEL_RELATED_MARKER_ID_PREFIX"]).concat(featureId, "-").concat(index);
      var _marker$src = marker.src,
          src = _marker$src === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__["DELETE_ICON"] : _marker$src,
          _marker$position = marker.position,
          position = _marker$position === void 0 ? {
        x: 0,
        y: 0
      } : _marker$position,
          _marker$offset = marker.offset,
          offset = _marker$offset === void 0 ? {
        x: 0,
        y: 0
      } : _marker$offset,
          _marker$events = marker.events,
          events = _marker$events === void 0 ? {} : _marker$events;
      var tmpMarker = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Marker(relatedMarkerId, Object.assign(Object.assign({
        src: src
      }, Object(_util__WEBPACK_IMPORTED_MODULE_4__["imageToCenterPointsForPoint"])([position], image)[0]), {
        offset: offset
      }));
      gMap.mLayer.addMarker(tmpMarker);

      if (events.click) {
        tmpMarker.regEvent('click', function () {
          events.click(tmpMarker, label);
        });
      }
    });
  }, [gMap, image]);
  var addLabelRelatedTexts = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (featureId, label) {
    if (!gTextLayer) {
      return;
    }

    var _label$texts = label.texts,
        texts = _label$texts === void 0 ? [] : _label$texts;

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(texts, function (text, index) {
      var relatedTextId = "".concat(_constants__WEBPACK_IMPORTED_MODULE_3__["LABEL_RELATED_TEXT_ID_PREFIX"]).concat(featureId, "-").concat(index);
      var _text$position = text.position,
          position = _text$position === void 0 ? {
        x: 0,
        y: 0
      } : _text$position,
          _text$offset = text.offset,
          offset = _text$offset === void 0 ? {
        x: 0,
        y: 0
      } : _text$offset,
          _text$maxWidth = text.maxWidth,
          maxWidth = _text$maxWidth === void 0 ? 100 : _text$maxWidth,
          textValue = text.text,
          tmpStyle = text.style;
      var textStyle = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Style(tmpStyle || _constants__WEBPACK_IMPORTED_MODULE_3__["GTEXT_STYLE"]);
      var relatedText = new ailabel__WEBPACK_IMPORTED_MODULE_2___default.a.Text(relatedTextId, {
        pos: Object(_util__WEBPACK_IMPORTED_MODULE_4__["imageToCenterPointsForPoint"])([position], image)[0],
        offset: offset,
        maxWidth: maxWidth,
        text: textValue
      }, textStyle);
      gTextLayer.addText(relatedText);
    });
  }, [gTextLayer, image]);
  var addRelatedMarkersAndTexts = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (featureId, label) {
    addLabelRelatedMarkers(featureId, label);
    addLabelRelatedTexts(featureId, label);
  }, [addLabelRelatedMarkers, addLabelRelatedTexts]);
  var removeAllDeleteMarkers = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var allMarkers = gMap.mLayer.getAllMarkers();

    var deleteIconMarkers = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.filter(allMarkers, function (marker) {
      return marker.id.indexOf(_constants__WEBPACK_IMPORTED_MODULE_3__["LABEL_DELETE_MARKER_ID_PREFIX"]) === 0;
    });

    var toRemoveIconMarkerIds = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(deleteIconMarkers, 'id');

    if (toRemoveIconMarkerIds.length) {
      gMap.mLayer.removeMarkersByIds(toRemoveIconMarkerIds);
    }
  }, [gMap]);
  var handleFeatureStatusReset = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    removeAllDeleteMarkers();

    if (onChangeRef.current) {
      onChangeRef.current('reset');
    }
  }, [removeAllDeleteMarkers]);
  return {
    worldToScreen: worldToScreen,
    screenToWorld: screenToWorld,
    removeRelatedMarkersAndTexts: removeRelatedMarkersAndTexts,
    addLabelDeleteIcon: addLabelDeleteIcon,
    removeLabelDeleteIcon: removeLabelDeleteIcon,
    addRelatedMarkersAndTexts: addRelatedMarkersAndTexts,
    removeAllDeleteMarkers: removeAllDeleteMarkers,
    handleFeatureStatusReset: handleFeatureStatusReset
  };
});

/***/ }),

/***/ "./src/hooks/labelbox/mode.ts":
/*!************************************!*\
  !*** ./src/hooks/labelbox/mode.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ailabel */ "./node_modules/ailabel/index.js");
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ailabel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/hooks/labelbox/constants.ts");



/* harmony default export */ __webpack_exports__["default"] = (function (gMap, mode, drawStyle, initZoom, tipsOff, handleFeatureStatusReset) {
  var handleModeChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (gMap) {
      handleFeatureStatusReset();
      gMap.setMode(mode);
    }
  }, [gMap, mode, handleFeatureStatusReset]);
  var handleDrawStyleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (gMap) {
      var cDrawStyle = new ailabel__WEBPACK_IMPORTED_MODULE_1___default.a.Style(drawStyle || _constants__WEBPACK_IMPORTED_MODULE_2__["GFEATURE_STYLE"]);
      gMap.setGlobalStyle(cDrawStyle);
    }
  }, [gMap, drawStyle]);
  var handleTipsOffChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (gMap) {
      var showOrHideFuncName = tipsOff ? 'hideTips' : 'showTips';
      gMap.tipLayer[showOrHideFuncName]();
    }
  }, [gMap, tipsOff]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    handleModeChange();
  }, [handleModeChange]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    handleDrawStyleChange();
  }, [handleDrawStyleChange]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    handleTipsOffChange();
  }, [handleTipsOffChange]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (gMap) {
      gMap.centerAndZoom({
        x: 0,
        y: 0
      }, initZoom);
    }
  }, [gMap, initZoom]);
});

/***/ }),

/***/ "./src/hooks/labelbox/util.ts":
/*!************************************!*\
  !*** ./src/hooks/labelbox/util.ts ***!
  \************************************/
/*! exports provided: imageToCenterPointsForPoint, imageToCenterPointsForMask, toFixed, centerToImagePointsForPoint, centerToImagePointsForMask, getLabelLabelDeletePosition, getLabelWithKey, diffLabels, processObjFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageToCenterPointsForPoint", function() { return imageToCenterPointsForPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageToCenterPointsForMask", function() { return imageToCenterPointsForMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFixed", function() { return toFixed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerToImagePointsForPoint", function() { return centerToImagePointsForPoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerToImagePointsForMask", function() { return centerToImagePointsForMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelLabelDeletePosition", function() { return getLabelLabelDeletePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelWithKey", function() { return getLabelWithKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffLabels", function() { return diffLabels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processObjFunction", function() { return processObjFunction; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ailabel */ "./node_modules/ailabel/index.js");
/* harmony import */ var ailabel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ailabel__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function imageToCenterPointsForPoint(points, image) {
  var imgWidth = image.width,
      imgHeight = image.height;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(points, function (point) {
    var x = point.x,
        y = point.y;
    return imgWidth && imgHeight ? {
      x: x - imgWidth / 2,
      y: imgHeight / 2 - y
    } : {
      x: x,
      y: y
    };
  });
}
function imageToCenterPointsForMask(masks, image) {
  var imgWidth = image.width,
      imgHeight = image.height;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(masks, function (mask) {
    var _mask = _slicedToArray(mask, 2),
        pos = _mask[0],
        color = _mask[1];

    var _pos = _slicedToArray(pos, 2),
        x = _pos[0],
        y = _pos[1];

    var formatPosition = imgWidth && imgHeight ? {
      x: Math.ceil(x - imgWidth / 2),
      y: Math.ceil(imgHeight / 2 - y)
    } : {
      x: x,
      y: y
    };
    return [[formatPosition.x, formatPosition.y], color];
  });
}
function toFixed(num) {
  return parseFloat((+num).toFixed(4));
}
function centerToImagePointsForPoint(points, image) {
  var imgWidth = image.width,
      imgHeight = image.height;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(points, function (point) {
    var x = point.x,
        y = point.y;
    return imgWidth && imgHeight ? {
      x: x + imgWidth / 2,
      y: imgHeight / 2 - y
    } : {
      x: x,
      y: y
    };
  });
}
function centerToImagePointsForMask(masks, image) {
  var imgWidth = image.width,
      imgHeight = image.height;
  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(masks, function (mask) {
    var _mask2 = _slicedToArray(mask, 2),
        pos = _mask2[0],
        color = _mask2[1];

    var _pos2 = _slicedToArray(pos, 2),
        x = _pos2[0],
        y = _pos2[1];

    var formatPosition = imgWidth && imgHeight ? {
      x: Math.floor(x + imgWidth / 2),
      y: Math.floor(imgHeight / 2 - y)
    } : {
      x: x,
      y: y
    };
    return [[formatPosition.x, formatPosition.y], color];
  });
}
function getLabelLabelDeletePosition(featureType, type, points) {
  var defaultPosition = {
    x: 0,
    y: 0
  };

  if (featureType === 'rect') {
    var bounds = ailabel__WEBPACK_IMPORTED_MODULE_1___default.a.Util.getBounds(points);

    var _bounds = _slicedToArray(bounds, 2),
        _bounds$ = _bounds[0],
        leftTopPoint = _bounds$ === void 0 ? defaultPosition : _bounds$,
        _bounds$2 = _bounds[1],
        rightTopPoint = _bounds$2 === void 0 ? defaultPosition : _bounds$2;

    return type === 'label' ? leftTopPoint : rightTopPoint;
  }

  if (featureType === 'polygon') {
    var sortedPoints = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.sortBy(points, ['y']);

    var pointsLength = sortedPoints.length;
    return pointsLength ? sortedPoints[pointsLength - 1] : defaultPosition;
  }

  if (featureType === 'polyline' || featureType === 'point') {
    var _pointsLength = points.length;
    return _pointsLength ? points[_pointsLength - 1] : defaultPosition;
  }

  return defaultPosition;
}
function getLabelWithKey(labels, labelKey) {
  var mapLabel = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(labels, {
    key: labelKey
  });

  return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(mapLabel);
}
function diffLabels() {
  var labels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var nextLabels = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var toRemoveLabels = [];
  var toUpdateLabels = [];
  var toAddLabels = [];

  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(labels, function (label) {
    var nextLabel = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(nextLabels, {
      key: label.key
    });

    if (nextLabel) {
      var isLabelEqual = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(label, nextLabel);

      if (!isLabelEqual) {
        toUpdateLabels.push(nextLabel);
      }
    } else {
      toRemoveLabels.push(label);
    }
  });

  lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(nextLabels, function (nextLabel) {
    var label = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.find(labels, {
      key: nextLabel.key
    });

    if (!label) {
      toAddLabels.push(nextLabel);
    }
  });

  return {
    toRemoveLabels: toRemoveLabels,
    toUpdateLabels: toUpdateLabels,
    toAddLabels: toAddLabels
  };
}
function processObjFunction(obj) {
  var result = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(obj) ? [] : {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isObject(obj[key])) {
        result[key] = processObjFunction(obj[key]);
      } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(obj[key])) {
        result[key] = obj[key].toString();
      } else {
        result[key] = obj[key];
      }
    }
  }

  return result;
}

/***/ }),

/***/ "./src/hooks/labelbox/zoom.ts":
/*!************************************!*\
  !*** ./src/hooks/labelbox/zoom.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var baidu_acu_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baidu-acu-react-hooks */ "./node_modules/baidu-acu-react-hooks/es/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/hooks/labelbox/constants.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ __webpack_exports__["default"] = (function (containerDom, image) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_ZOOM"]),
      _useState2 = _slicedToArray(_useState, 2),
      zoom = _useState2[0],
      setZoom = _useState2[1];

  var _image$width = image.width,
      imgWidth = _image$width === void 0 ? 0 : _image$width,
      _image$height = image.height,
      imgHeight = _image$height === void 0 ? 0 : _image$height;

  var _ref = containerDom || {},
      _ref$clientWidth = _ref.clientWidth,
      clientWidth = _ref$clientWidth === void 0 ? 0 : _ref$clientWidth,
      _ref$clientHeight = _ref.clientHeight,
      clientHeight = _ref$clientHeight === void 0 ? 0 : _ref$clientHeight;

  var newZoom = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    if (!imgWidth || !imgHeight || !containerDom) {
      return _constants__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_ZOOM"];
    }

    var innerZoom = imgWidth;

    if (clientWidth / clientHeight >= imgWidth / imgHeight) {
      var scale = imgHeight / clientHeight;
      innerZoom = clientWidth * scale;
    }

    return innerZoom;
  }, [imgWidth, imgHeight, clientWidth, clientHeight, containerDom]);
  Object(baidu_acu_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useDeepCompareEffect"])(function () {
    setZoom(newZoom);
  }, [newZoom]);
  return {
    zoom: zoom
  };
});

/***/ }),

/***/ "./src/hooks/useChart/index.tsx":
/*!**************************************!*\
  !*** ./src/hooks/useChart/index.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts/lib/echarts */ "./node_modules/echarts/lib/echarts.js");
/* harmony import */ var echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts/lib/chart/bar */ "./node_modules/echarts/lib/chart/bar.js");
/* harmony import */ var echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_bar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts/lib/chart/pie */ "./node_modules/echarts/lib/chart/pie.js");
/* harmony import */ var echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_pie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! echarts/lib/chart/line */ "./node_modules/echarts/lib/chart/line.js");
/* harmony import */ var echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_chart_line__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! echarts/lib/component/tooltip */ "./node_modules/echarts/lib/component/tooltip.js");
/* harmony import */ var echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_tooltip__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var echarts_lib_component_title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! echarts/lib/component/title */ "./node_modules/echarts/lib/component/title.js");
/* harmony import */ var echarts_lib_component_title__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_title__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var echarts_lib_component_legend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! echarts/lib/component/legend */ "./node_modules/echarts/lib/component/legend.js");
/* harmony import */ var echarts_lib_component_legend__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_legend__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var echarts_lib_component_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! echarts/lib/component/grid */ "./node_modules/echarts/lib/component/grid.js");
/* harmony import */ var echarts_lib_component_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(echarts_lib_component_grid__WEBPACK_IMPORTED_MODULE_8__);
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};











var COLOR = ['#108CEE', '#FACC14', '#2FC25B', '#8543E0', '#F04864', '#13C2C2', '#fa8c16', '#a0d911'];

var makeOptions = function makeOptions() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _a = options,
      color = _a.color,
      _a$title = _a.title,
      title = _a$title === void 0 ? {} : _a$title,
      _a$grid = _a.grid,
      grid = _a$grid === void 0 ? {} : _a$grid,
      restOptions = __rest(_a, ["color", "title", "grid"]);

  return Object.assign({
    color: color || COLOR,
    title: Object.assign({
      textStyle: {
        fontSize: 14,
        fontWeight: 'normal'
      }
    }, title),
    grid: Object.assign({
      left: 30,
      right: 30,
      top: 30,
      bottom: 30,
      containLabel: true
    }, grid)
  }, restOptions);
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _props$width = props.width,
      width = _props$width === void 0 ? '100%' : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 300 : _props$height,
      propsOptions = props.options,
      _props$autoResize = props.autoResize,
      autoResize = _props$autoResize === void 0 ? true : _props$autoResize;
  var options = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return makeOptions(propsOptions);
  }, [propsOptions]);
  var chartInstance = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var chartRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var chartComp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: chartRef,
    style: {
      width: width,
      height: height,
      overflow: 'hidden'
    }
  });
  var setAutoResize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (autoResize && chartInstance.current && chartRef.current) {
      chartInstance.current.resize();
    }
  }, [autoResize]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (chartRef.current) {
      var renderedInstance = echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_1___default.a.getInstanceByDom(chartRef.current);
      chartInstance.current = renderedInstance || echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_1___default.a.init(chartRef.current);
      chartInstance.current.setOption(options);
      chartInstance.current.resize();
    }
  }, [options]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener('resize', setAutoResize);
    return function () {
      chartInstance.current && chartInstance.current.dispose();
      window.removeEventListener('resize', setAutoResize);
    };
  }, [setAutoResize]);
  return {
    chartComp: chartComp,
    chartInstance: chartInstance,
    chartRef: chartRef
  };
});

/***/ }),

/***/ "./src/hooks/useDialog/index.tsx":
/*!***************************************!*\
  !*** ./src/hooks/useDialog/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var confirm = antd__WEBPACK_IMPORTED_MODULE_2__["Modal"].confirm;

var _onSubmit;

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      dialogProps = _useState2[0],
      setDialogProps = _useState2[1];

  var _ref = dialogProps || {},
      dialogContent = _ref.dialogContent,
      onOk = _ref.onOk,
      onCancel = _ref.onCancel,
      onClose = _ref.onClose,
      $onRequest = _ref.$onRequest,
      $onResponse = _ref.$onResponse,
      $onError = _ref.$onError;

  if (_typeof(dialogContent) === 'object') {
    dialogContent.props = Object.assign({
      onSubmit: function onSubmit(submit) {
        _onSubmit = submit;
      }
    }, dialogContent.props);
  }

  var handleDialog = function handleDialog() {
    var dialogConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var type = dialogConfig.type,
        content = dialogConfig.content,
        _dialogConfig$action = dialogConfig.action,
        action = _dialogConfig$action === void 0 ? function () {
      return Promise.resolve();
    } : _dialogConfig$action,
        config = dialogConfig.config,
        $onRequest = dialogConfig.$onRequest,
        $onResponse = dialogConfig.$onResponse,
        $onError = dialogConfig.$onError;

    switch (type) {
      case 'ajax':
        setDialogProps({});
        confirm(Object.assign(Object.assign({
          icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["ExclamationCircleOutlined"], null),
          content: content,
          cancelText: '取消',
          okText: '确定'
        }, config), {
          onOk: function onOk() {
            var params = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction($onRequest) && $onRequest();
            return action(params).then(function (response) {
              lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction($onResponse) && $onResponse(response);
            })["catch"](function (error) {
              $onError && $onError(error);
            });
          }
        }));
        break;

      case 'modal':
        setDialogProps(Object.assign({
          type: type,
          dialogContent: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(content),
          visible: true,
          destroyOnClose: true,
          maskClosable: false,
          $onRequest: $onRequest,
          $onResponse: $onResponse,
          $onError: $onError
        }, config));
        break;

      case 'drawer':
        setDialogProps(Object.assign({
          type: type,
          dialogContent: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.cloneDeep(content),
          visible: true,
          destroyOnClose: true,
          maskClosable: false
        }, config));
        break;

      default:
        setDialogProps({});
        break;
    }
  };

  var handleDialogCompClose = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setDialogProps(function (prevDialogProps) {
      return Object.assign(Object.assign({}, prevDialogProps), {
        visible: false
      });
    });
  }, []);
  var handleDialogCompCancel = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var actionCancelFn = onCancel || onClose;
    actionCancelFn ? actionCancelFn() : handleDialogCompClose();
  }, [onCancel, onClose, handleDialogCompClose]);
  var handleDialogCompOk = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction($onRequest) && $onRequest();
    var actionOkFn = onOk || _onSubmit;

    if (actionOkFn) {
      var actionOkResult = actionOkFn();

      if (actionOkResult && actionOkResult.then) {
        setDialogProps(function (prevDialogProps) {
          return Object.assign(Object.assign({}, prevDialogProps), {
            confirmLoading: true
          });
        });
        actionOkResult.then(function (response) {
          lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction($onResponse) && $onResponse(response);
          handleDialogCompClose();
        })["catch"](function (error) {
          $onError && $onError(error);
          setDialogProps(function (prevDialogProps) {
            return Object.assign(Object.assign({}, prevDialogProps), {
              confirmLoading: false
            });
          });
        });
      } else {
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction($onResponse) && $onResponse();
        handleDialogCompClose();
      }
    } else {
      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction($onResponse) && $onResponse();
      handleDialogCompClose();
    }
  }, [onOk, $onRequest, $onResponse, $onError, handleDialogCompClose]);
  return {
    handleDialog: handleDialog,
    dialogProps: Object.assign(Object.assign({}, dialogProps), {
      onActionCompOk: handleDialogCompOk,
      onActionCompCancel: handleDialogCompCancel
    }),
    handleDialogCompClose: handleDialogCompClose
  };
});

/***/ }),

/***/ "./src/hooks/useFormSubmit/index.ts":
/*!******************************************!*\
  !*** ./src/hooks/useFormSubmit/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var action = props.action,
      form = props.form,
      $onRequest = props.$onRequest,
      $onResponse = props.$onResponse,
      $onError = props.$onError;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      submitting = _useState2[0],
      setSubmitting = _useState2[1];

  var submit = function submit() {
    return new Promise(function (resolve, reject) {
      form.validateFields().then(function (values) {
        return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var payload, response;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  setSubmitting(true);
                  payload = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction($onRequest) ? $onRequest(values) || values : values;
                  _context.next = 4;
                  return action(payload);

                case 4:
                  response = _context.sent;
                  $onResponse && $onResponse(response);
                  setSubmitting(false);
                  resolve(response);

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
      })["catch"](function (error) {
        $onError && $onError(error);
        setSubmitting(false);
        reject(error);
      });
    });
  };

  return {
    submit: submit,
    submitting: submitting
  };
});

/***/ }),

/***/ "./src/hooks/useTable/index.ts":
/*!*************************************!*\
  !*** ./src/hooks/useTable/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var baidu_acu_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! baidu-acu-react-hooks */ "./node_modules/baidu-acu-react-hooks/es/index.js");
/* harmony import */ var _huse_previous_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @huse/previous-value */ "./node_modules/@huse/previous-value/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var action = props.action,
      _props$payload = props.payload,
      payload = _props$payload === void 0 ? {} : _props$payload,
      interval = props.interval,
      $onRequest = props.$onRequest,
      $onResponse = props.$onResponse,
      $onError = props.$onError,
      abort = props.abort;
  var originPayload = Object(_huse_previous_value__WEBPACK_IMPORTED_MODULE_3__["useOriginalDeepCopy"])(payload);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(payload),
      _useState2 = _slicedToArray(_useState, 2),
      filterData = _useState2[0],
      setFilterData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedRowKeys = _useState4[0],
      setSelectedRowKeys = _useState4[1];

  var $onFetchResponse = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (response) {
    var responsePage = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction($onResponse) ? $onResponse(response) || response : response;
    var totalCount = responsePage.totalCount,
        pageNo = responsePage.pageNo,
        result = responsePage.result;

    if (totalCount > 0 && pageNo > 1 && !result.length) {
      setFilterData(function (prevFilterData) {
        return Object.assign(Object.assign({}, prevFilterData), {
          pageNo: responsePage.pageNo - 1
        });
      });
    }

    return responsePage;
  }, [$onResponse]);

  var _useFetch = Object(baidu_acu_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useFetch"])(action, filterData, $onRequest, $onFetchResponse, $onError, abort),
      _useFetch$data = _useFetch.data,
      pageData = _useFetch$data === void 0 ? {} : _useFetch$data,
      loading = _useFetch.loading,
      reload = _useFetch.reload;

  Object(baidu_acu_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useInterval"])(function () {
    return reload(false);
  }, interval);
  var _pageData$pageNo = pageData.pageNo,
      pageNo = _pageData$pageNo === void 0 ? 1 : _pageData$pageNo,
      _pageData$pageSize = pageData.pageSize,
      pageSize = _pageData$pageSize === void 0 ? 10 : _pageData$pageSize,
      _pageData$totalCount = pageData.totalCount,
      totalCount = _pageData$totalCount === void 0 ? 0 : _pageData$totalCount,
      _pageData$result = pageData.result,
      result = _pageData$result === void 0 ? [] : _pageData$result;
  var handlePaginationChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (pageNo, pageSize) {
    var filterData = {
      pageNo: pageNo,
      pageSize: pageSize
    };
    setFilterData(function (prevFilterData) {
      return Object.assign(Object.assign({}, prevFilterData), filterData);
    });
  }, []);
  var handleSelectedRowKeysChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (selectedRowKeys) {
    setSelectedRowKeys(selectedRowKeys);
  }, []);
  var handleTableChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (pagination, filters, sorter) {
    var current = pagination.current,
        nextPageSize = pagination.pageSize;
    var isPaginationChange = current !== pageNo || nextPageSize !== pageSize;

    if (isPaginationChange) {
      handlePaginationChange(current, nextPageSize);
      return;
    }

    var order = sorter.order,
        field = sorter.field;
    var filterData = Object.assign({
      pageNo: 1,
      order: order && (order === 'ascend' ? 'asc' : 'desc'),
      orderBy: order && field
    }, filters);
    setFilterData(function (prevFilterData) {
      return Object.assign(Object.assign({}, prevFilterData), filterData);
    });
  }, [pageNo, pageSize, handlePaginationChange]);
  var loadList = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSelectedRowKeys([]);
    reload();
  }, [reload]);
  var loadFirstPage = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setSelectedRowKeys([]);
    setFilterData(function (prevFilterData) {
      return Object.assign(Object.assign({}, prevFilterData), {
        pageNo: 1
      });
    });

    if (pageNo === 1) {
      reload();
    }
  }, [pageNo, reload]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var originPayloadKeys = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.keys(originPayload);

    var originPayloadInFilterData = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.pick(filterData, originPayloadKeys);

    if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEqual(originPayload, originPayloadInFilterData)) {
      setFilterData(originPayload);
    }
  }, [originPayload]);
  return {
    pageData: pageData,
    loading: loading,
    loadList: loadList,
    loadFirstPage: loadFirstPage,
    filterData: filterData,
    setFilterData: setFilterData,
    selectedRowKeys: selectedRowKeys,
    tableProps: {
      loading: loading,
      filterData: filterData,
      selectedRowKeys: selectedRowKeys,
      pageNo: pageNo,
      pageSize: pageSize,
      totalCount: totalCount,
      dataSource: result,
      onTableChange: handleTableChange,
      onPaginationChange: handlePaginationChange,
      onPageSizeChange: handlePaginationChange,
      onSelectedRowKeysChange: handleSelectedRowKeysChange
    }
  };
});

/***/ }),

/***/ "./src/hooks/useTableBar/index.tsx":
/*!*****************************************!*\
  !*** ./src/hooks/useTableBar/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _props$leftConfig = props.leftConfig,
      leftConfig = _props$leftConfig === void 0 ? [] : _props$leftConfig,
      _props$rightConfig = props.rightConfig,
      rightConfig = _props$rightConfig === void 0 ? [] : _props$rightConfig;

  var getConfigComp = function getConfigComp(config) {
    return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(config, function (configItem) {
      var key = configItem.key,
          ControlComp = configItem.control,
          children = configItem.children,
          config = configItem.config;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ControlComp, _extends({
        key: key
      }, config), children);
    });
  };

  var tableBarComp = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aibp-table-bar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aibp-table-bar-left"
  }, getConfigComp(leftConfig)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "aibp-table-bar-right"
  }, getConfigComp(rightConfig)));
  return {
    tableBarComp: tableBarComp
  };
});

/***/ }),

/***/ "./src/hooks/useTheme/index.ts":
/*!*************************************!*\
  !*** ./src/hooks/useTheme/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_loadCss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/loadCss */ "./src/utils/loadCss.ts");
/* harmony import */ var _utils_loadScript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/loadScript */ "./src/utils/loadScript.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/constants.ts");



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _ref = props || {},
      cssPath = _ref.cssPath,
      jsPath = _ref.jsPath,
      _ref$onComplete = _ref.onComplete,
      onComplete = _ref$onComplete === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_2__["noop"] : _ref$onComplete;

  if (cssPath && !window.aibpThemeCssLoaded) {
    Object(_utils_loadCss__WEBPACK_IMPORTED_MODULE_0__["default"])(cssPath);
    window.aibpThemeCssLoaded = true;
  }

  if (jsPath && !window.less) {
    window.less = {
      async: true,
      javascriptEnabled: true
    };
    Object(_utils_loadScript__WEBPACK_IMPORTED_MODULE_1__["default"])(jsPath);
  }

  var setTheme = function setTheme(theme) {
    if (window.less) {
      window.less.modifyVars(theme).then(onComplete);
    } else {
      throw new Error('`window.less` is required');
    }
  };

  return {
    setTheme: setTheme
  };
});

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: components, hooks, utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _components__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks */ "./src/hooks/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hooks", function() { return _hooks__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./src/utils/Enum.ts":
/*!***************************!*\
  !*** ./src/utils/Enum.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Enum; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var valueIndex = Symbol('valueIndex');
var textIndex = Symbol('textIndex');
var aliasIndex = Symbol('aliasIndex');

var Enum = /*#__PURE__*/function () {
  function Enum() {
    _classCallCheck(this, Enum);

    this[valueIndex] = {};
    this[textIndex] = {};
    this[aliasIndex] = {};

    for (var i = 0, len = arguments.length; i < len; i++) {
      var item = i < 0 || arguments.length <= i ? undefined : arguments[i];

      if (item.value === null || item.value === undefined) {
        item.value = i;
      }

      this.addItem(item);
    }
  }

  _createClass(Enum, [{
    key: "addItem",
    value: function addItem(item) {
      this[item.alias] = item.value;
      this[item.value] = item.alias;
      this[valueIndex][item.value] = item;
      this[textIndex][item.text] = item;
      this[aliasIndex][item.alias] = item;
    }
  }, {
    key: "fromValue",
    value: function fromValue(value) {
      return this[valueIndex][value] || {};
    }
  }, {
    key: "fromAlias",
    value: function fromAlias(alias) {
      return this[aliasIndex][alias] || {};
    }
  }, {
    key: "fromText",
    value: function fromText(text) {
      return this[textIndex][text] || {};
    }
  }, {
    key: "getTextFromValue",
    value: function getTextFromValue(value) {
      return this.fromValue(value).text;
    }
  }, {
    key: "getTextFromAlias",
    value: function getTextFromAlias(alias) {
      return this.fromAlias(alias).text;
    }
  }, {
    key: "getValueFromAlias",
    value: function getValueFromAlias(alias) {
      return this.fromAlias(alias).value;
    }
  }, {
    key: "getValueFromText",
    value: function getValueFromText(text) {
      return this.fromText(text).value;
    }
  }, {
    key: "getAliasFromValue",
    value: function getAliasFromValue(value) {
      return this.fromValue(value).alias;
    }
  }, {
    key: "getAliasFromText",
    value: function getAliasFromText(text) {
      return this.fromText(text).alias;
    }
  }, {
    key: "toJson",
    value: function toJson() {
      var json = {};

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(this[valueIndex], function (item, value) {
        json[value] = item.text;
      });

      return json;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.map(this[valueIndex], function (item) {
        return Object.assign(Object.assign({}, item), {
          label: item.text
        });
      });
    }
  }]);

  return Enum;
}();



/***/ }),

/***/ "./src/utils/getBase64ByFile.ts":
/*!**************************************!*\
  !*** ./src/utils/getBase64ByFile.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (file) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      return resolve(reader.result);
    };

    reader.onerror = function (error) {
      return reject(error);
    };
  });
});

/***/ }),

/***/ "./src/utils/getSuffixByName.ts":
/*!**************************************!*\
  !*** ./src/utils/getSuffixByName.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (name) {
  return name.slice(name.lastIndexOf('.') + 1).toLowerCase();
});

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadCss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadCss */ "./src/utils/loadCss.ts");
/* harmony import */ var _loadScript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadScript */ "./src/utils/loadScript.ts");
/* harmony import */ var _Enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum */ "./src/utils/Enum.ts");
/* harmony import */ var _isAbsolutePath__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isAbsolutePath */ "./src/utils/isAbsolutePath.ts");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request */ "./src/utils/request.ts");
/* harmony import */ var _timeUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeUtil */ "./src/utils/timeUtil.ts");
/* harmony import */ var _getBase64ByFile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getBase64ByFile */ "./src/utils/getBase64ByFile.ts");
/* harmony import */ var _getSuffixByName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getSuffixByName */ "./src/utils/getSuffixByName.ts");








/* harmony default export */ __webpack_exports__["default"] = ({
  loadCss: _loadCss__WEBPACK_IMPORTED_MODULE_0__["default"],
  loadScript: _loadScript__WEBPACK_IMPORTED_MODULE_1__["default"],
  Enum: _Enum__WEBPACK_IMPORTED_MODULE_2__["default"],
  isAbsolutePath: _isAbsolutePath__WEBPACK_IMPORTED_MODULE_3__["default"],
  request: _request__WEBPACK_IMPORTED_MODULE_4__["default"],
  timeUtil: _timeUtil__WEBPACK_IMPORTED_MODULE_5__["default"],
  getBase64ByFile: _getBase64ByFile__WEBPACK_IMPORTED_MODULE_6__["default"],
  getSuffixByName: _getSuffixByName__WEBPACK_IMPORTED_MODULE_7__["default"]
});

/***/ }),

/***/ "./src/utils/isAbsolutePath.ts":
/*!*************************************!*\
  !*** ./src/utils/isAbsolutePath.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (path) {
  return /^https?:\/\//.test(path);
});

/***/ }),

/***/ "./src/utils/loadCss.ts":
/*!******************************!*\
  !*** ./src/utils/loadCss.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (src) {
  var link = document.createElement('link');
  link.rel = 'stylesheet/less';
  link.href = src;
  document.head.appendChild(link);
});

/***/ }),

/***/ "./src/utils/loadScript.ts":
/*!*********************************!*\
  !*** ./src/utils/loadScript.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (src) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
});

/***/ }),

/***/ "./src/utils/request.ts":
/*!******************************!*\
  !*** ./src/utils/request.ts ***!
  \******************************/
/*! exports provided: Request, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/notification */ "./src/components/notification.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var STATUS_MESSAGE = {
  400: '400：发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '401：用户没有权限（令牌、用户名、密码错误）。',
  403: '403：用户得到授权，但是访问是被禁止的。',
  404: '404：发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '406：请求的格式不可得。',
  410: '410：请求的资源被永久删除，且不会再得到的。',
  422: '422：当创建一个对象时，发生一个验证错误。',
  500: '500：服务器发生错误，请检查服务器。',
  502: '502：网关错误。',
  503: '503：服务不可用，服务器暂时过载或维护。',
  504: '504：网关超时。'
};
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.withCredentials = true;
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common.Accept = 'application/json';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common['Content-Type'] = 'application/json; charset=UTF-8';
axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.timeout = 60000 * 20;
var Request = /*#__PURE__*/function () {
  function Request() {
    _classCallCheck(this, Request);
  }

  _createClass(Request, [{
    key: "post",
    value: function post(url, data, options) {
      return this.sendRequest(Object.assign({
        url: url,
        method: 'post',
        data: data
      }, options));
    }
  }, {
    key: "get",
    value: function get(url, params, options) {
      return this.sendRequest(Object.assign({
        url: url,
        method: 'get',
        params: params
      }, options));
    }
  }, {
    key: "put",
    value: function put(url, data, options) {
      return this.sendRequest(Object.assign({
        url: url,
        method: 'put',
        data: data
      }, options));
    }
  }, {
    key: "delete",
    value: function _delete(url, data, options) {
      return this.sendRequest(Object.assign({
        url: url,
        method: 'delete',
        data: data
      }, options));
    }
  }, {
    key: "setHeaders",
    value: function setHeaders(headers) {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common = Object.assign(Object.assign({}, axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common), headers);
    }
  }, {
    key: "beforeSend",
    value: function beforeSend(options) {
      return options;
    }
  }, {
    key: "beforeSuccess",
    value: function beforeSuccess(data) {
      var success = data.success;

      if (success) {
        return data.page || data.result;
      }

      return Promise.reject(this.afterFail(data));
    }
  }, {
    key: "afterFail",
    value: function afterFail(data) {
      var message = data.message;

      if (message) {
        if (message.redirect) {
          window.location.href = message.redirect;
        }

        return message;
      }

      return {};
    }
  }, {
    key: "sendRequest",
    value: function sendRequest(options) {
      var _this = this;

      var config = typeof this.beforeSend === 'function' ? this.beforeSend(options) || options : options;
      return axios__WEBPACK_IMPORTED_MODULE_1___default()(config).then(function (response) {
        var status = response.status,
            statusText = response.statusText;

        if (status > 400 || status < 200) {
          var error = new Error("API ".concat(options.url, " status is ").concat(status, " (").concat(statusText, ")"));
          return Promise.reject(error);
        }

        return response.data;
      }).then(function (data) {
        if (typeof _this.beforeSuccess === 'function') {
          return _this.beforeSuccess(data);
        }

        return data;
      })["catch"](function (error) {
        var errorMessage = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(error, 'message') || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(error, 'global');

        var silent = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(options, 'silent');

        if (errorMessage && !silent) {
          var errorStatus = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(error, 'response.status');

          var errorContent = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.get(STATUS_MESSAGE, errorStatus) || errorMessage;
          _components_notification__WEBPACK_IMPORTED_MODULE_2__["default"].error(errorContent);
        }

        return Promise.reject(error);
      });
    }
  }]);

  return Request;
}();
/* harmony default export */ __webpack_exports__["default"] = (new Request());

/***/ }),

/***/ "./src/utils/timeUtil.ts":
/*!*******************************!*\
  !*** ./src/utils/timeUtil.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  timeToUtc: function timeToUtc(time) {
    if (!time || !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(time) && !moment__WEBPACK_IMPORTED_MODULE_1___default.a.isMoment(time)) {
      return null;
    }

    var t = moment__WEBPACK_IMPORTED_MODULE_1___default.a.isMoment(time) ? time : moment__WEBPACK_IMPORTED_MODULE_1___default()(time);

    if (t.isValid()) {
      return t.utc().format('YYYY-MM-DDTHH:mm:ss') + 'Z';
    }

    return null;
  },
  toTime: function toTime(utcTimeStr) {
    var defaultTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return utcTimeStr ? moment__WEBPACK_IMPORTED_MODULE_1___default()(utcTimeStr).format('YYYY-MM-DD HH:mm:ss') : defaultTime;
  }
});

/***/ })

}]);
//# sourceMappingURL=ExpandIco~3792d2c6.js.map