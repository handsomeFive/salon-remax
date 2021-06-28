require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[10],{

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___2e-A7","item":"item___3PWD_","info":"info___kcoCS","content":"content___1bbRP","add":"add___2uKrf","del":"del___23MYg","title":"title___2zxH1","dec":"dec___1bMcO","avatar":"avatar___1hanX","part":"part___39cFk"};

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 90:
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

// EXTERNAL MODULE: ./src/pages-backstage/user/index.css?modules
var usermodules = __webpack_require__(17);
var usermodules_default = /*#__PURE__*/__webpack_require__.n(usermodules);

// CONCATENATED MODULE: ./src/pages-backstage/user/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr&&(typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"]);if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var actions=[{data:'1',text:'查看记录',color:'#faad14'}// { data: '2', text: '删除', color: '#ff4d4f', type: 'warn' },
];/* harmony default export */ var user = (function(props){var _useState=Object(react["useState"])([]),_useState2=_slicedToArray(_useState,2),data=_useState2[0],setData=_useState2[1];var renderFunction=Object(react["useCallback"])(function(data){var nickName=data.nickName,balance=data.balance,avatarUrl=data.avatarUrl;var end=balance>100?/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.add},"\xA5",balance):/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.del},"\xA5",balance);return/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.item,key:data._id,__key:data._id},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.content},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.part},/*#__PURE__*/react_default.a.createElement(wechat_esm["c" /* Image */],{src:avatarUrl,className:usermodules_default.a.avatar}),/*#__PURE__*/react_default.a.createElement(wechat_esm["g" /* Text */],{className:usermodules_default.a.title},nickName)),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.part},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.dec},"\u4F59\u989D\uFF1A"),end)));},[]);var handleTapOption=Object(react["useCallback"])(function(optionValue,item){if(optionValue==='1'){Object(wechat_esm["r" /* navigateTo */])({url:"/pages-backstage/user-order/index?phoneNumber=".concat(item.phoneNumber,"&user=").concat(item.nickName)});}else{}},[data]);Object(useDidMount["a" /* default */])(function(){Object(wechat_esm["x" /* showLoading */])();Object(wechat_esm["v" /* setNavigationBarTitle */])({title:'用户管理'});Object(utils["a" /* request */])('/user/list').then(function(_ref){var list=_ref.list;setData(list);Object(wechat_esm["o" /* hideLoading */])();}).catch(function(){Object(wechat_esm["o" /* hideLoading */])();});});return/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],null,/*#__PURE__*/react_default.a.createElement(List["a" /* default */],{data:data.map(function(item){return _objectSpread(_objectSpread({},item),{},{options:actions});}),onTapOption:handleTapOption,render:renderFunction}));});
// CONCATENATED MODULE: ./src/pages-backstage/user/index.entry.js
__webpack_require__(75);Page(Object(esm["f" /* createPageConfig */])(user,'pages-backstage/user/index'));

/***/ })

},[[74,0,1,2]]]);