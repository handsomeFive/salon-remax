require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages-backstage/user/index"],{

/***/ "./src/pages-backstage/user/index.css":
/*!********************************************!*\
  !*** ./src/pages-backstage/user/index.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages-backstage/user/index.css?modules":
/*!****************************************************!*\
  !*** ./src/pages-backstage/user/index.css?modules ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___2e-A7","item":"item___3PWD_","info":"info___kcoCS","content":"content___1bbRP","add":"add___2uKrf","del":"del___23MYg","title":"title___2zxH1","dec":"dec___1bMcO","avatar":"avatar___1hanX","part":"part___39cFk","form":"form___1GF1H","formItem":"formItem___1GI-L","phone":"phone___3G-HG","footer":"footer___45yvg","btn":"btn___1rKmS","cancel":"cancel___1-65B","ok":"ok___kywdl"};

/***/ }),

/***/ "./src/pages-backstage/user/index.entry.js":
/*!*************************************************!*\
  !*** ./src/pages-backstage/user/index.entry.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages-backstage/user/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages-backstage/user/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages-backstage/user/index'));

/***/ }),

/***/ "./src/pages-backstage/user/index.js":
/*!*******************************************!*\
  !*** ./src/pages-backstage/user/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @remax/wechat */ "./node_modules/@remax/wechat/esm/index.js");
/* harmony import */ var _hooks_useDidMount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useDidMount */ "./src/hooks/useDidMount.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/List */ "./src/components/List/index.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Modal */ "./src/components/Modal/index.jsx");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages-backstage/user/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_6__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var actions = [{
  data: '1',
  text: '查看记录',
  color: '#faad14'
}, {
  data: '2',
  text: '编号',
  color: '#ff4d4f',
  type: 'warn'
}];
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      alternativeName = _useState6[0],
      setAlternativeName = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      currentId = _useState8[0],
      setCurrentId = _useState8[1];

  var renderFunction = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data) {
    var nickName = data.nickName,
        alternativeName = data.alternativeName,
        balance = data.balance,
        avatarUrl = data.avatarUrl;
    var end = balance > 100 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.add
    }, "\xA5", balance) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.del
    }, "\xA5", balance);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.item,
      key: data._id,
      __key: data._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.content
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.part
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: avatarUrl,
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.avatar
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.title
    }, alternativeName ? "".concat(alternativeName, "(").concat(nickName, ")") : nickName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.part
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.dec
    }, "\u4F59\u989D\uFF1A"), end)));
  }, []);
  var handleTapOption = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (optionValue, item) {
    if (optionValue === '1') {
      Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["navigateTo"])({
        url: "/pages-backstage/user-order/index?phoneNumber=".concat(item.phoneNumber, "&user=").concat(item.nickName)
      });
    } else {
      var _alternativeName = item.alternativeName,
          _id = item._id;
      _alternativeName && setAlternativeName(_alternativeName);
      setCurrentId(_id);
      setOpen(true);
    }
  }, [data]);
  var handleCloseUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setOpen(false);
    setCurrentId('');
    setAlternativeName('');
  }, []);
  var handleUpgrade = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["showLoading"])();
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["request"])('/user/update', {
      _id: currentId,
      alternativeName: alternativeName
    }).then(function (_ref) {
      var result = _ref.data;
      var copy = data.slice();
      var index = copy.findIndex(function (item) {
        return item._id === currentId;
      });

      if (index > -1) {
        copy[index] = result;
        setData(copy);
      }

      Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
      setCurrentId('');
      setAlternativeName('');
      setOpen(false);
    }).catch(function () {
      Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
    });
  }, [data, currentId, alternativeName]);
  Object(_hooks_useDidMount__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["showLoading"])();
    Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["setNavigationBarTitle"])({
      title: '用户管理'
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["request"])('/user/list').then(function (_ref2) {
      var list = _ref2.list;
      setData(list);
      Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
    }).catch(function () {
      Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        options: actions
      });
    }),
    onTapOption: handleTapOption,
    render: renderFunction
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: open,
    archor: "center",
    onClose: handleCloseUpdate
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.form
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.formItem
  }, "\u7ED9\u7528\u6237\u4E00\u4E2A\u7279\u6B8A\u7F16\u53F7\uFF0C\u65B9\u4FBF\u67E5\u627E\u53CA\u64CD\u4F5C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    value: alternativeName,
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.phone,
    type: "text",
    placeholder: "\u8BF7\u8F93\u5165\u7F16\u53F7",
    onInput: function onInput(_ref3) {
      var detail = _ref3.detail;
      return setAlternativeName(detail.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.footer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.btn + ' ' + _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.cancel,
    onTap: handleCloseUpdate
  }, "\u53D6\u6D88"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.btn + ' ' + _index_css_modules__WEBPACK_IMPORTED_MODULE_6___default.a.ok,
    onTap: handleUpgrade
  }, "\u786E\u8BA4")))));
});

/***/ }),

/***/ 10:
/*!*******************************************************!*\
  !*** multi ./src/pages-backstage/user/index.entry.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/grig/Desktop/grig/salon-remax/src/pages-backstage/user/index.entry.js */"./src/pages-backstage/user/index.entry.js");


/***/ })

},[[10,"runtime","remax-vendors","remax-styles"]]]);