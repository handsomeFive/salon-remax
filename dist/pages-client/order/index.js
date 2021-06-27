require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages-client/order/index"],{

/***/ "./node_modules/weui-miniprogram/miniprogram_dist/slideview/slideview.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/weui-miniprogram/miniprogram_dist/slideview/slideview.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* istanbul ignore next */
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createNativeComponent"])('slideview-slideview-8d4aeff'));

/***/ }),

/***/ "./node_modules/weui-miniprogram/miniprogram_dist/weui-wxss/dist/style/weui.wxss":
/*!***************************************************************************************!*\
  !*** ./node_modules/weui-miniprogram/miniprogram_dist/weui-wxss/dist/style/weui.wxss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Empty/index.js":
/*!***************************************!*\
  !*** ./src/components/Empty/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      width: '100%',
      height: '100vh',
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#434343'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], null, "\u6682\u65E0\u6570\u636E"));
});

/***/ }),

/***/ "./src/components/List/index.css?modules":
/*!***********************************************!*\
  !*** ./src/components/List/index.css?modules ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"enhanceList":"enhanceList___38w1U","swipeItem":"swipeItem___16EY1","content":"content___3-cLr","extWrapper":"extWrapper___1fiJq","extItem":"extItem___1As7Y","loading":"loading___3ph9V"};

/***/ }),

/***/ "./src/components/List/index.js":
/*!**************************************!*\
  !*** ./src/components/List/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Empty */ "./src/components/Empty/index.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css?modules */ "./src/components/List/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var annar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! annar */ "./node_modules/annar/esm/index.js");
/* harmony import */ var weui_miniprogram_miniprogram_dist_slideview_slideview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! weui-miniprogram/miniprogram_dist/slideview/slideview */ "./node_modules/weui-miniprogram/miniprogram_dist/slideview/slideview.js");
/* harmony import */ var weui_miniprogram_miniprogram_dist_weui_wxss_dist_style_weui_wxss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! weui-miniprogram/miniprogram_dist/weui-wxss/dist/style/weui.wxss */ "./node_modules/weui-miniprogram/miniprogram_dist/weui-wxss/dist/style/weui.wxss");
/* harmony import */ var weui_miniprogram_miniprogram_dist_weui_wxss_dist_style_weui_wxss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(weui_miniprogram_miniprogram_dist_weui_wxss_dist_style_weui_wxss__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var data = props.data,
      render = props.render,
      onTapOption = props.onTapOption,
      onTouchEnd = props.onTouchEnd,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$more = props.more,
      more = _props$more === void 0 ? false : _props$more;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var handleTapOption = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data, optionValue) {
    onTapOption && onTapOption(optionValue.detail.data, data);
  }, [onTapOption]);
  var handleTouchEnd = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    onTouchEnd && onTouchEnd();
  }, [onTouchEnd]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["ScrollView"], {
    scrollY: true,
    enhanced: true // pagingEnabled
    ,
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.enhanceList,
    onScrollToLower: handleTouchEnd
  }, data.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, data.map(function (item) {
    var _item$options = item.options,
        options = _item$options === void 0 ? [] : _item$options;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(weui_miniprogram_miniprogram_dist_slideview_slideview__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: item._id,
      key: item._id,
      buttons: options,
      disable: !options.length,
      show: current === item._id,
      bindshow: function bindshow(_ref) {
        var target = _ref.target;
        return setCurrent(target.id);
      },
      bindbuttontap: handleTapOption.bind(null, item),
      __key: item._id
    }, render(item));
  }), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(annar__WEBPACK_IMPORTED_MODULE_4__["Loading"], null)), !loading && !more && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_3___default.a.loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], null, "\u5DF2\u52A0\u8F7D\u5168\u90E8"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Empty__WEBPACK_IMPORTED_MODULE_2__["default"], null));
});

/***/ }),

/***/ "./src/pages-client/order/index.css":
/*!******************************************!*\
  !*** ./src/pages-client/order/index.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages-client/order/index.css?modules":
/*!**************************************************!*\
  !*** ./src/pages-client/order/index.css?modules ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___3XGZN","item":"item___2HBpE","info":"info___1StDh","content":"content___diDg5","add":"add___1RZeo","del":"del___3Li27","title":"title___K6koN","dec":"dec___2ReCs"};

/***/ }),

/***/ "./src/pages-client/order/index.entry.js":
/*!***********************************************!*\
  !*** ./src/pages-client/order/index.entry.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages-client/order/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages-client/order/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages-client/order/index'));

/***/ }),

/***/ "./src/pages-client/order/index.js":
/*!*****************************************!*\
  !*** ./src/pages-client/order/index.js ***!
  \*****************************************/
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
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages-client/order/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var query = props.location.query;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var renderFunction = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data) {
    var type = data.type,
        info = data.info,
        date = data.date;
    var front = type === 1 ? "\xA5".concat(info.payment).concat(info.presenter ? "(\u8D60\u9001\xA5".concat(info.presenter, ")") : '') : "".concat(info.product.name);
    var end = type === 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_5___default.a.add
    }, "+\xA5", info.recharge) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_5___default.a.del
    }, "-\xA5", info.cost);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_5___default.a.item,
      key: data._id,
      __key: data._id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_5___default.a.content
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_5___default.a.title
    }, type === 1 ? '充值' : '消费'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_5___default.a.dec
    }, front)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, end, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_5___default.a.dec
    }, dayjs(date).format('YYYY-MM-DD HH:mm:ss')))));
  }, []);
  Object(_hooks_useDidMount__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["showLoading"])();
    Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["setNavigationBarTitle"])({
      title: '消费记录'
    });
    Object(_utils__WEBPACK_IMPORTED_MODULE_3__["request"])('/order/list', {
      phoneNumber: query.phoneNumber
    }).then(function (_ref) {
      var list = _ref.list;
      setData(list);
      Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
    }).catch(function () {
      Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["hideLoading"])();
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_1__["View"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_List__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data,
    render: renderFunction
  }));
});

/***/ }),

/***/ 3:
/*!*****************************************************!*\
  !*** multi ./src/pages-client/order/index.entry.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/grig/Desktop/grig/salon-remax/src/pages-client/order/index.entry.js */"./src/pages-client/order/index.entry.js");


/***/ })

},[[3,"runtime","remax-vendors"]]]);