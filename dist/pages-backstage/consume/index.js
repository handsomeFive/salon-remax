require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages-backstage/consume/index"],{

/***/ "./src/pages-backstage/consume/index.css":
/*!***********************************************!*\
  !*** ./src/pages-backstage/consume/index.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages-backstage/consume/index.css?modules":
/*!*******************************************************!*\
  !*** ./src/pages-backstage/consume/index.css?modules ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"body":"body___3ACuv","item":"item___1gMzO","label":"label___2lVj9","scan":"scan___3oehA"};

/***/ }),

/***/ "./src/pages-backstage/consume/index.entry.js":
/*!****************************************************!*\
  !*** ./src/pages-backstage/consume/index.entry.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @remax/runtime */ "./node_modules/@remax/runtime/esm/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/pages-backstage/consume/index.js");
__webpack_require__(/*! ./index.css */ "./src/pages-backstage/consume/index.css");



Page(Object(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages-backstage/consume/index'));

/***/ }),

/***/ "./src/pages-backstage/consume/index.js":
/*!**********************************************!*\
  !*** ./src/pages-backstage/consume/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remax */ "./node_modules/remax/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _remax_wechat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @remax/wechat */ "./node_modules/@remax/wechat/esm/index.js");
/* harmony import */ var annar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! annar */ "./node_modules/annar/esm/index.js");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css?modules */ "./src/pages-backstage/consume/index.css?modules");
/* harmony import */ var _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css_modules__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useDidMount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useDidMount */ "./src/hooks/useDidMount.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useQuery = Object(remax__WEBPACK_IMPORTED_MODULE_0__["useQuery"])(),
      type = _useQuery.type;

  var ling = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      number = _useState2[0],
      setNumber = _useState2[1]; // 会员号


  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      spend = _useState4[0],
      setSpend = _useState4[1]; // 充值金额


  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      presenter = _useState6[0],
      setPresenter = _useState6[1]; // 赠送金额


  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      custom = _useState8[0],
      setCustom = _useState8[1]; // 自定义金额


  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState10 = _slicedToArray(_useState9, 2),
      current = _useState10[0],
      setCurrent = _useState10[1]; //


  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      product = _useState12[0],
      setProduct = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState14 = _slicedToArray(_useState13, 2),
      loading = _useState14[0],
      setLoading = _useState14[1];

  var handleSelectProduct = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (event) {
    setCurrent(event.detail.value);
  }, []);
  var handleChangeInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (type, event) {
    var value = event.detail.value;
    var handle = {
      number: setNumber,
      spend: setSpend,
      presenter: setPresenter,
      custom: setCustom
    }[type];
    handle(value);
  }, []);
  var handleCreate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!number) {
      ling.current.error('请输入手机号');
      return;
    } else if (type === '1' && !spend) {
      ling.current.error('请输入充值金额');
      return;
    } else if (type === '1' && Number(spend) < 0) {
      ling.current.error('充值金额不能小于0');
      return;
    } else if (type === '2' && !current && !custom) {
      ling.current.error('请选择或输入价格');
      return;
    }

    var path = type === '1' ? '/order/recharge' : '/order/consume';
    var data = {
      phoneNumber: number
    };

    if (type === '1') {
      // 充值
      data.recharge = Number(spend) + (presenter ? Number(presenter) : 0);
      data.presenter = Number(presenter);
      data.payment = Number(spend);
    } else {
      // 消费
      data.cost = current ? Number(product[current].price) : Number(custom);
      data.product = current ? product[current] : {
        _id: 'custom',
        name: '自定义价格',
        price: custom
      };
    }

    Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["showLoading"])();
    setLoading(true);
    Object(_utils__WEBPACK_IMPORTED_MODULE_6__["request"])(path, data).then(function () {
      Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["hideLoading"])();
      setLoading(false);
      ling.current.success(type === '1' ? '充值成功' : '消费成功');
    }).catch(function (error) {
      Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["hideLoading"])();
      setLoading(false);
      ling.current.error(error.message || '操作失败');
    });
  }, [type, number, spend, presenter, current, product, custom]);
  var handleScan = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["scanCode"])({
      success: function success(res) {
        var _JSON$parse = JSON.parse(res.result || '{}'),
            phoneNumber = _JSON$parse.phoneNumber;

        if (phoneNumber) {
          setNumber(phoneNumber + '');
        } else {
          ling.current.error('无效的二维码');
        }
      }
    });
  }, []);
  var consume = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.label
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], null, "\u4F1A\u5458\u53F7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.scan,
      onTap: handleScan
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(annar__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      type: "scan",
      size: "40px"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      value: number,
      type: "number",
      onInput: handleChangeInput.bind(null, 'number'),
      placeholder: "\u8BF7\u8F93\u5165\u4F1A\u5458\u53F7\u6216\u626B\u63CF"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.label
    }, "\u4EA7\u54C1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Picker"], {
      value: current,
      mode: "selector",
      range: product,
      rangeKey: "name",
      onChange: handleSelectProduct
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      value: current ? product[current].name + ' / ¥' + product[current].price : '',
      placeholder: "\u8BF7\u9009\u62E9\u6D88\u8D39\u7684\u4EA7\u54C1",
      disabled: true
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.label
    }, "\u81EA\u5B9A\u4E49\u4EF7\u683C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      value: custom,
      type: "number",
      onInput: handleChangeInput.bind(null, 'custom'),
      placeholder: "\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49\u4EF7\u683C"
    })));
  }, [current, product, number]);
  var recharge = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.label
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Text"], null, "\u4F1A\u5458\u53F7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.scan,
      onTap: handleScan
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(annar__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      size: "40px",
      type: "scan"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "number",
      value: number,
      onInput: handleChangeInput.bind(null, 'number'),
      placeholder: "\u8BF7\u8F93\u5165\u4F1A\u5458\u53F7\u6216\u626B\u63CF"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.label
    }, "\u5145\u503C\u91D1\u989D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "number",
      value: spend,
      onInput: handleChangeInput.bind(null, 'spend'),
      placeholder: "\u8BF7\u8F93\u5165\u5145\u503C\u91D1\u989D"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.item
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
      className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.label
    }, "\u8D60\u9001\u91D1\u989D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Input"], {
      type: "number",
      value: presenter,
      onInput: handleChangeInput.bind(null, 'presenter'),
      placeholder: "\u8BF7\u8F93\u5165\u8D60\u9001\u91D1\u989D"
    })));
  }, [number]);
  Object(_hooks_useDidMount__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
    Object(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["setNavigationBarTitle"])({
      title: type === '1' ? '充值中心' : '消费中心'
    });

    if (type === '2') {
      Object(_utils__WEBPACK_IMPORTED_MODULE_6__["request"])('/product/list').then(function (_ref) {
        var list = _ref.list;
        setProduct(list);
      });
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["View"], {
    className: _index_css_modules__WEBPACK_IMPORTED_MODULE_4___default.a.body
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(annar__WEBPACK_IMPORTED_MODULE_3__["Ling"], {
    ref: ling
  }), type === '1' ? recharge : consume, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_remax_wechat__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "primary",
    onTap: handleCreate,
    loading: loading,
    disabled: loading
  }, "\u786E\u8BA4"));
});

/***/ }),

/***/ 6:
/*!**********************************************************!*\
  !*** multi ./src/pages-backstage/consume/index.entry.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/grig/Desktop/grig/salon-remax/src/pages-backstage/consume/index.entry.js */"./src/pages-backstage/consume/index.entry.js");


/***/ })

},[[6,"runtime","remax-vendors"]]]);