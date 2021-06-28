require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[9],{

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___38k3D","item":"item___2zsL9","info":"info___2parW","content":"content___1u2JZ","add":"add___3PqsZ","del":"del___Vz816","title":"title___HVr0M","dec":"dec___27MZ0"};

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@remax/wechat/esm/index.js + 53 modules
var wechat_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./src/hooks/useDidMount.js
var useDidMount = __webpack_require__(9);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(8);

// EXTERNAL MODULE: ./src/components/List/index.js + 2 modules
var List = __webpack_require__(14);

// EXTERNAL MODULE: ./src/pages-backstage/user-order/index.css?modules
var user_ordermodules = __webpack_require__(21);
var user_ordermodules_default = /*#__PURE__*/__webpack_require__.n(user_ordermodules);

// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(23);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);

// CONCATENATED MODULE: ./src/pages-backstage/user-order/index.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr&&(typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"]);if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}/* harmony default export */ var user_order = (function(props){var query=props.location.query;var _useState=Object(react["useState"])([]),_useState2=_slicedToArray(_useState,2),data=_useState2[0],setData=_useState2[1];var renderFunction=Object(react["useCallback"])(function(data){var type=data.type,info=data.info,date=data.date;var front=type===1?"\xA5".concat(info.payment).concat(info.presenter?"(\u8D60\u9001\xA5".concat(info.presenter,")"):''):"".concat(info.product.name);var end=type===1?/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:user_ordermodules_default.a.add},"+\xA5",info.recharge):/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:user_ordermodules_default.a.del},"-\xA5",info.cost);return/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:user_ordermodules_default.a.item,key:data._id,__key:data._id},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:user_ordermodules_default.a.content},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],null,/*#__PURE__*/react_default.a.createElement(wechat_esm["g" /* Text */],{className:user_ordermodules_default.a.title},type===1?'充值':'消费'),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:user_ordermodules_default.a.dec},front)),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],null,end,/*#__PURE__*/react_default.a.createElement(wechat_esm["g" /* Text */],{className:user_ordermodules_default.a.dec},dayjs_min_default()(date).format('YYYY-MM-DD HH:mm:ss')))));},[]);Object(useDidMount["a" /* default */])(function(){Object(wechat_esm["x" /* showLoading */])();Object(wechat_esm["v" /* setNavigationBarTitle */])({title:"".concat(query.user,"\u7684\u6D88\u8D39\u8BB0\u5F55")});Object(utils["a" /* request */])('/order/list',{userPhoneNumber:query.phoneNumber}).then(function(_ref){var list=_ref.list;setData(list);Object(wechat_esm["o" /* hideLoading */])();}).catch(function(){Object(wechat_esm["o" /* hideLoading */])();});});return/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],null,/*#__PURE__*/react_default.a.createElement(List["a" /* default */],{data:data,render:renderFunction}));});
// CONCATENATED MODULE: ./src/pages-backstage/user-order/index.entry.js
__webpack_require__(77);Page(Object(esm["f" /* createPageConfig */])(user_order,'pages-backstage/user-order/index'));

/***/ })

},[[76,0,1,2]]]);