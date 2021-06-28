require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[13],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___17chN","nav":"nav___1qDss","navTitle":"navTitle___2rTXc","info":"info___33Oc1","contentWrapper":"contentWrapper___1_5n6","content":"content___3kxZj","userInfo":"userInfo___1cKC4","function":"function___186Tg","functionTitle":"functionTitle___3E1cu","items":"items___18XBX","item":"item___2cCNm"};

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(82);


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/remax/wechat.js
var wechat = __webpack_require__(4);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(8);

// EXTERNAL MODULE: ./src/pages/backstage/index.css?modules
var backstagemodules = __webpack_require__(12);
var backstagemodules_default = /*#__PURE__*/__webpack_require__.n(backstagemodules);

// EXTERNAL MODULE: ./src/hooks/useNavHeight.js
var useNavHeight = __webpack_require__(27);

// EXTERNAL MODULE: ./src/hooks/useDidMount.js
var useDidMount = __webpack_require__(9);

// CONCATENATED MODULE: ./src/pages/backstage/images/bg.png
/* harmony default export */ var bg = (__webpack_require__.p + "06076f03fdfdba4b37c2ea069ce20591.png");
// CONCATENATED MODULE: ./src/pages/backstage/index.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr&&(typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"]);if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var menu=[{title:'充值',type:1},{title:'消费',type:2},{title:'产品',type:3},{title:'流水',type:4},{title:'用户',type:5}];/* harmony default export */ var backstage = (function(){var _useNavHeight=Object(useNavHeight["a" /* default */])(),_useNavHeight2=_slicedToArray(_useNavHeight,2),statusBarHeight=_useNavHeight2[0],navHeight=_useNavHeight2[1];var _useState=Object(react["useState"])(),_useState2=_slicedToArray(_useState,2),info=_useState2[0],setInfo=_useState2[1];var _useState3=Object(react["useState"])([]),_useState4=_slicedToArray(_useState3,2),appointment=_useState4[0],setAppointment=_useState4[1];var handleTap=Object(react["useCallback"])(function(type){if(!info){handleLogin();}else{switch(type){case 1:Object(wechat["p" /* navigateTo */])({url:'/pages-backstage/consume/index?type=1'});break;case 2:Object(wechat["p" /* navigateTo */])({url:'/pages-backstage/consume/index?type=2'});break;case 3:Object(wechat["p" /* navigateTo */])({url:'/pages-backstage/product/index'});break;case 4:Object(wechat["p" /* navigateTo */])({url:'/pages-backstage/order/index'});break;case 5:Object(wechat["p" /* navigateTo */])({url:'/pages-backstage/user/index'});break;}}},[info]);var handleLogin=Object(react["useCallback"])(function(){if(!info){Object(wechat["p" /* navigateTo */])({url:'/pages-backstage/authorized/index'});}},[info]);Object(useDidMount["a" /* default */])(function(){// getStorageInfoSync().then(() => {});
Object(wechat["q" /* showLoading */])();var info=Object(wechat["l" /* getStorageSync */])('user_info');if(info){setInfo(JSON.parse(info));Object(wechat["n" /* hideLoading */])();// todo 获取今日预约数据
}else{Object(wechat["n" /* hideLoading */])();}});Object(esm["i" /* usePageEvent */])('onShow',function(){// getStorageInfoSync().then(() => {});
Object(wechat["q" /* showLoading */])();var info=Object(wechat["l" /* getStorageSync */])('user_info');if(info){setInfo(JSON.parse(info));Object(wechat["n" /* hideLoading */])();// todo 获取今日预约数据
}else{Object(wechat["n" /* hideLoading */])();}});return/*#__PURE__*/react_default.a.createElement(wechat["g" /* View */],{className:backstagemodules_default.a.app},/*#__PURE__*/react_default.a.createElement(wechat["g" /* View */],{className:backstagemodules_default.a.nav,style:{height:navHeight+statusBarHeight+'px',paddingTop:statusBarHeight+'px'}}),/*#__PURE__*/react_default.a.createElement(wechat["g" /* View */],{className:backstagemodules_default.a.navTitle,style:{height:navHeight+'px',top:statusBarHeight+'px',lineHeight:navHeight+'px'}},/*#__PURE__*/react_default.a.createElement(wechat["f" /* Text */],null,"Welcome to Salon")),/*#__PURE__*/react_default.a.createElement(wechat["g" /* View */],{className:backstagemodules_default.a.info},/*#__PURE__*/react_default.a.createElement(wechat["c" /* Image */],{src:bg}),/*#__PURE__*/react_default.a.createElement(wechat["g" /* View */],{className:backstagemodules_default.a.contentWrapper},/*#__PURE__*/react_default.a.createElement(wechat["g" /* View */],{className:backstagemodules_default.a.content},/*#__PURE__*/react_default.a.createElement(wechat["g" /* View */],{className:backstagemodules_default.a.userInfo,onTap:handleLogin},/*#__PURE__*/react_default.a.createElement(wechat["f" /* Text */],null,info?"\u6B22\u8FCE\u60A8\uFF0C".concat(info.name):'请先登录'))))),/*#__PURE__*/react_default.a.createElement(wechat["g" /* View */],{className:backstagemodules_default.a.function},/*#__PURE__*/react_default.a.createElement(wechat["g" /* View */],{className:backstagemodules_default.a.functionTitle},"\u529F\u80FD"),/*#__PURE__*/react_default.a.createElement(wechat["g" /* View */],{className:backstagemodules_default.a.items},menu.map(function(item){var title=item.title,type=item.type;return/*#__PURE__*/react_default.a.createElement(wechat["g" /* View */],{key:type,onTap:handleTap.bind(null,type),className:backstagemodules_default.a.item,__key:type},/*#__PURE__*/react_default.a.createElement(wechat["f" /* Text */],null,title));}))));});
// CONCATENATED MODULE: ./src/pages/backstage/index.entry.js
__webpack_require__(55);Page(Object(esm["f" /* createPageConfig */])(backstage,'pages/backstage/index'));

/***/ })

},[[54,0,1]]]);