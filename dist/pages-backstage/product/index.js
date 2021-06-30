require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages-backstage/product/index"],{

/***/ "./src/pages-backstage/product/index.css":
/*!***********************************************!*\
  !*** ./src/pages-backstage/product/index.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages-backstage/product/index.css?modules":
/*!*******************************************************!*\
  !*** ./src/pages-backstage/product/index.css?modules ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"listItem":"listItem___3800L","listItemPart":"listItemPart___2w_8F","addIcon":"addIcon___2OxnC","form":"form___3RhKh","footer":"footer___3lW73","btn":"btn___3DgQX","cancel":"cancel___35Sbq","ok":"ok___3YULj","item":"item____ZujJ"};

/***/ }),

/***/ "./src/pages-backstage/product/index.entry.js":
/*!****************************************************!*\
  !*** ./src/pages-backstage/product/index.entry.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages-backstage/product/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages-backstage/product/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages-backstage/product/index'));

/***/ }),

/***/ "./src/pages-backstage/product/index.js":
/*!**********************************************!*\
  !*** ./src/pages-backstage/product/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @remax/wechat */ "./node_modules/@remax/wechat/esm/index.js");
/* harmony import */ var annar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! annar */ "./node_modules/annar/esm/index.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages-backstage/product/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_useDidMount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/useDidMount */ "./src/hooks/useDidMount.js");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/index */ "./src/utils/index.js");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/List */ "./src/components/List/index.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Modal */ "./src/components/Modal/index.jsx");
var _excluded = ["options"],
    _excluded2 = ["_id"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var actions = [{
  data: '1',
  text: '修改',
  color: '#faad14'
}, {
  data: '2',
  text: '删除',
  color: '#ff4d4f',
  type: 'warn'
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var ling = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      current = _useState4[0],
      setCurrent = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      open = _useState6[0],
      setOpen = _useState6[1];

  var dataRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])([]);
  var createCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    var list = dataRef.current.slice();
    list.push(value);
    setData(list);
  }, []);
  var updateCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    var list = dataRef.current.slice();
    var index = list.findIndex(function (item) {
      return item._id === value._id;
    });
    list[index] = value;
    setData(list);
  }, []);
  var handleShiftOpen = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setOpen(function (value) {
      return !value;
    });
  }, []);
  var handleTapOption = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (optionValue, _ref) {
    var options = _ref.options,
        other = _objectWithoutProperties(_ref, _excluded);

    if (optionValue === '1') {
      handleShiftOpen();
      setCurrent(other);
    } else {
      Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["showLoading"])();
      Object(_utils_index__WEBPACK_IMPORTED_MODULE_5__["request"])('/product/delete', {
        id: other._id
      }).then(function () {
        var newData = data.slice();
        var index = newData.findIndex(function (value) {
          return value._id === other._id;
        });
        newData.splice(index, 1);
        setData(newData);
        ling.current.success('删除成功');
        Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
      }).catch(function (_ref2) {
        var message = _ref2.message;
        ling.current.error(message);
        Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
      });
    }
  }, [data]);
  var handleCreate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCurrent(null);
    handleShiftOpen();
  }, []);
  var handleChangeInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (type, event) {
    var result = _objectSpread(_objectSpread({}, current), {}, _defineProperty({}, type, event.detail.value));

    setCurrent(result);
  }, [current]);
  var handleOk = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!current || !current.name || !current.price) {
      ling.current.warning('请完成输入');
    } else {
      var _id = current._id,
          other = _objectWithoutProperties(current, _excluded2);

      var isCreate = !_id;
      var path = isCreate ? '/product/add' : '/product/update';
      var params = isCreate ? other : {
        id: _id,
        data: other
      };
      Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["showLoading"])();
      Object(_utils_index__WEBPACK_IMPORTED_MODULE_5__["request"])(path, params).then(function (_ref3) {
        var data = _ref3.data;
        ling.current.success(isCreate ? '创建成功' : '修改成功');
        handleShiftOpen();
        Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
        isCreate && createCallback(data);
        !isCreate && updateCallback(data);
      }).catch(function (error) {
        ling.current.error(error.message || '操作失败');
        handleShiftOpen();
        Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
      });
    }
  }, [current]);
  Object(_hooks_useDidMount__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
    Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["setNavigationBarTitle"])({
      title: '产品管理'
    });
    Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["showLoading"])();
    Object(_utils_index__WEBPACK_IMPORTED_MODULE_5__["request"])('/product/list').then(function (_ref4) {
      var list = _ref4.list;
      setData(list);
      Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
    }).catch(function (_ref5) {
      var message = _ref5.message;
      Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
      ling.current.error(message);
    });
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dataRef.current = data;
  }, [data]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(annar__WEBPACK_IMPORTED_MODULE_2__["Ling"], {
    ref: ling
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: data.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        options: actions
      });
    }),
    onTapOption: handleTapOption,
    render: function render(data) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
        className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.listItem,
        key: data._id,
        __key: data._id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
        className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.listItemPart
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], null, data.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, "\xA5", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], null, data.price)));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(annar__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    shape: "circle",
    icon: "add",
    float: true,
    size: "superlarge",
    style: {
      bottom: '100px',
      right: '40px',
      zIndex: 100
    },
    onTap: handleCreate
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    open: open,
    archor: "center",
    onClose: handleShiftOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.item
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165\u670D\u52A1\u9879",
    value: current ? current.name : '',
    onInput: handleChangeInput.bind(null, 'name')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.item
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "number",
    placeholder: "\u8BF7\u8F93\u5165\u4EF7\u683C",
    value: current ? current.price : undefined,
    onInput: handleChangeInput.bind(null, 'price')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.footer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.btn + ' ' + _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.cancel,
    onTap: handleShiftOpen
  }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.btn + ' ' + _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.ok,
    onTap: handleOk
  }, "\u786E\u8BA4")))));
});

/***/ }),

/***/ 7:
/*!**********************************************************!*\
  !*** multi ./src/pages-backstage/product/index.entry.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/grig/Desktop/grig/salon-remax/src/pages-backstage/product/index.entry.js */"./src/pages-backstage/product/index.entry.js");


/***/ })

},[[7,"runtime","remax-vendors","remax-styles"]]]);