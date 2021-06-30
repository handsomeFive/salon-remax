require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/backstage/index"],{

/***/ "./src/pages/backstage/images/bg.png":
/*!*******************************************!*\
  !*** ./src/pages/backstage/images/bg.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "06076f03fdfdba4b37c2ea069ce20591.png");

/***/ }),

/***/ "./src/pages/backstage/index.css":
/*!***************************************!*\
  !*** ./src/pages/backstage/index.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/backstage/index.css?modules":
/*!***********************************************!*\
  !*** ./src/pages/backstage/index.css?modules ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___17chN","nav":"nav___1qDss","navTitle":"navTitle___2rTXc","info":"info___33Oc1","contentWrapper":"contentWrapper___1_5n6","content":"content___3kxZj","userInfo":"userInfo___1cKC4","function":"function___186Tg","functionTitle":"functionTitle___3E1cu","items":"items___18XBX","item":"item___2cCNm"};

/***/ }),

/***/ "./src/pages/backstage/index.entry.js":
/*!********************************************!*\
  !*** ./src/pages/backstage/index.entry.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages/backstage/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages/backstage/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/backstage/index'));

/***/ }),

/***/ "./src/pages/backstage/index.js":
/*!**************************************!*\
  !*** ./src/pages/backstage/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remax/wechat */ "./node_modules/remax/wechat.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages/backstage/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useNavHeight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useNavHeight */ "./src/hooks/useNavHeight.js");
/* harmony import */ var _hooks_useDidMount__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useDidMount */ "./src/hooks/useDidMount.js");
/* harmony import */ var _images_bg_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/bg.png */ "./src/pages/backstage/images/bg.png");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var menu = [{
  title: '充值',
  type: 1
}, {
  title: '消费',
  type: 2
}, {
  title: '产品',
  type: 3
}, {
  title: '用户',
  type: 4
}, {
  title: '流水',
  type: 5
}, {
  title: '记录',
  type: 6
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useNavHeight = Object(_hooks_useNavHeight__WEBPACK_IMPORTED_MODULE_5__["default"])(),
      _useNavHeight2 = _slicedToArray(_useNavHeight, 2),
      statusBarHeight = _useNavHeight2[0],
      navHeight = _useNavHeight2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      info = _useState2[0],
      setInfo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      appointment = _useState4[0],
      setAppointment = _useState4[1];

  var handleTap = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (type) {
    if (!info) {
      handleLogin();
    } else {
      switch (type) {
        case 1:
          Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
            url: '/pages-backstage/consume/index?type=1'
          });
          break;

        case 2:
          Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
            url: '/pages-backstage/consume/index?type=2'
          });
          break;

        case 3:
          Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
            url: '/pages-backstage/product/index'
          });
          break;

        case 4:
          Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
            url: '/pages-backstage/user/index'
          });
          break;

        case 5:
          Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
            url: '/pages-backstage/order/index'
          });
          break;

        case 6:
          Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
            url: '/pages-backstage/order-consume/index'
          });
          break;
      }
    }
  }, [info]);
  var handleLogin = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!info) {
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["navigateTo"])({
        url: '/pages-backstage/authorized/index'
      });
    }
  }, [info]);
  Object(_hooks_useDidMount__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
    // getStorageInfoSync().then(() => {});
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["showLoading"])();
    var info = Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["getStorageSync"])('user_info');

    if (info) {
      setInfo(JSON.parse(info));
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["hideLoading"])(); // todo 获取今日预约数据
    } else {
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["hideLoading"])();
    }
  });
  Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageEvent"])('onShow', function () {
    // getStorageInfoSync().then(() => {});
    Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["showLoading"])();
    var info = Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["getStorageSync"])('user_info');

    if (info) {
      setInfo(JSON.parse(info));
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["hideLoading"])(); // todo 获取今日预约数据
    } else {
      Object(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["hideLoading"])();
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.app
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.nav,
    style: {
      height: navHeight + statusBarHeight + 'px',
      paddingTop: statusBarHeight + 'px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.navTitle,
    style: {
      height: navHeight + 'px',
      top: statusBarHeight + 'px',
      lineHeight: navHeight + 'px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], null, "Welcome to Salon")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.info
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: _images_bg_png__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.contentWrapper
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.content
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.userInfo,
    onTap: handleLogin
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], null, info ? "\u6B22\u8FCE\u60A8\uFF0C".concat(info.name) : '请先登录'))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.function
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.functionTitle
  }, "\u529F\u80FD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.items
  }, menu.map(function (item) {
    var title = item.title,
        type = item.type;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      key: type,
      onTap: handleTap.bind(null, type),
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.item,
      __key: type
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], null, title));
  }))));
});

/***/ }),

/***/ 2:
/*!**************************************************!*\
  !*** multi ./src/pages/backstage/index.entry.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/grig/Desktop/grig/salon-remax/src/pages/backstage/index.entry.js */"./src/pages/backstage/index.entry.js");


/***/ })

},[[2,"runtime","remax-vendors"]]]);