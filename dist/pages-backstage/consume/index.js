require('./../../runtime.js');
require('./../../remax-vendors.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[6],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"body":"body___3ACuv","item":"item___1gMzO","label":"label___2lVj9","scan":"scan___3oehA"};

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/remax/esm/index.js + 1 modules
var remax_esm = __webpack_require__(29);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@remax/wechat/esm/index.js + 53 modules
var wechat_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/annar/esm/icon/index.js
var icon = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/annar/esm/ling/index.js + 5 modules
var esm_ling = __webpack_require__(93);

// EXTERNAL MODULE: ./src/pages-backstage/consume/index.css?modules
var consumemodules = __webpack_require__(11);
var consumemodules_default = /*#__PURE__*/__webpack_require__.n(consumemodules);

// EXTERNAL MODULE: ./src/hooks/useDidMount.js
var useDidMount = __webpack_require__(9);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(8);

// CONCATENATED MODULE: ./src/pages-backstage/consume/index.js
function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr&&(typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"]);if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}/* harmony default export */ var pages_backstage_consume = (function(){var _useQuery=Object(remax_esm["b" /* useQuery */])(),type=_useQuery.type;var ling=Object(react["useRef"])();var _useState=Object(react["useState"])(),_useState2=_slicedToArray(_useState,2),number=_useState2[0],setNumber=_useState2[1];// 会员号
var _useState3=Object(react["useState"])(),_useState4=_slicedToArray(_useState3,2),spend=_useState4[0],setSpend=_useState4[1];// 充值金额
var _useState5=Object(react["useState"])(),_useState6=_slicedToArray(_useState5,2),presenter=_useState6[0],setPresenter=_useState6[1];// 赠送金额
var _useState7=Object(react["useState"])(),_useState8=_slicedToArray(_useState7,2),current=_useState8[0],setCurrent=_useState8[1];//
var _useState9=Object(react["useState"])([]),_useState10=_slicedToArray(_useState9,2),product=_useState10[0],setProduct=_useState10[1];var _useState11=Object(react["useState"])(false),_useState12=_slicedToArray(_useState11,2),loading=_useState12[0],setLoading=_useState12[1];var handleSelectProduct=Object(react["useCallback"])(function(event){setCurrent(event.detail.value);},[]);var handleChangeInput=Object(react["useCallback"])(function(type,event){var value=event.detail.value;var handle={number:setNumber,spend:setSpend,presenter:setPresenter}[type];handle(value);},[]);var handleCreate=Object(react["useCallback"])(function(){if(!number){ling.current.error('请输入手机号');return;}else if(type==='1'&&!spend){ling.current.error('请输入充值金额');return;}else if(type==='1'&&Number(spend)<0){ling.current.error('充值金额不能小于0');return;}else if(type==='2'&&!current){ling.current.error('请选择消费产品');return;}var path=type==='1'?'/order/recharge':'/order/consume';var data={phoneNumber:number};if(type==='1'){// 充值
data.recharge=Number(spend)+(presenter?Number(presenter):0);data.presenter=Number(presenter);data.payment=Number(spend);}else{// 消费
data.cost=Number(product[current].price);data.product=product[current];}Object(wechat_esm["x" /* showLoading */])();setLoading(true);Object(utils["a" /* request */])(path,data).then(function(){Object(wechat_esm["o" /* hideLoading */])();setLoading(false);ling.current.success(type==='1'?'充值成功':'消费成功');}).catch(function(error){Object(wechat_esm["o" /* hideLoading */])();setLoading(false);ling.current.error(error.message||'操作失败');});},[type,number,spend,presenter,current,product]);var handleScan=Object(react["useCallback"])(function(){Object(wechat_esm["u" /* scanCode */])({success:function success(res){var _JSON$parse=JSON.parse(res.result||'{}'),phoneNumber=_JSON$parse.phoneNumber;if(phoneNumber){setNumber(phoneNumber+'');}else{ling.current.error('无效的二维码');}}});},[]);var consume=Object(react["useMemo"])(function(){return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:consumemodules_default.a.item},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:consumemodules_default.a.label},/*#__PURE__*/react_default.a.createElement(wechat_esm["g" /* Text */],null,"\u4F1A\u5458\u53F7"),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:consumemodules_default.a.scan,onTap:handleScan},/*#__PURE__*/react_default.a.createElement(icon["a" /* default */],{type:"scan",size:"40px"}))),/*#__PURE__*/react_default.a.createElement(wechat_esm["d" /* Input */],{value:number,type:"number",onInput:handleChangeInput.bind(null,'number'),placeholder:"\u8BF7\u8F93\u5165\u4F1A\u5458\u53F7\u6216\u626B\u63CF"})),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:consumemodules_default.a.item},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:consumemodules_default.a.label},"\u4EA7\u54C1"),/*#__PURE__*/react_default.a.createElement(wechat_esm["e" /* Picker */],{value:current,mode:"selector",range:product,rangeKey:"name",onChange:handleSelectProduct},/*#__PURE__*/react_default.a.createElement(wechat_esm["d" /* Input */],{value:current?product[current].name+' / ¥'+product[current].price:'',placeholder:"\u8BF7\u9009\u62E9\u6D88\u8D39\u7684\u4EA7\u54C1",disabled:true}))));},[current,product,number]);var recharge=Object(react["useMemo"])(function(){return/*#__PURE__*/react_default.a.createElement(react_default.a.Fragment,null,/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:consumemodules_default.a.item},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:consumemodules_default.a.label},/*#__PURE__*/react_default.a.createElement(wechat_esm["g" /* Text */],null,"\u4F1A\u5458\u53F7"),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:consumemodules_default.a.scan,onTap:handleScan},/*#__PURE__*/react_default.a.createElement(icon["a" /* default */],{size:"40px",type:"scan"}))),/*#__PURE__*/react_default.a.createElement(wechat_esm["d" /* Input */],{type:"number",value:number,onInput:handleChangeInput.bind(null,'number'),placeholder:"\u8BF7\u8F93\u5165\u4F1A\u5458\u53F7\u6216\u626B\u63CF"})),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:consumemodules_default.a.item},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:consumemodules_default.a.label},"\u5145\u503C\u91D1\u989D"),/*#__PURE__*/react_default.a.createElement(wechat_esm["d" /* Input */],{type:"number",value:spend,onInput:handleChangeInput.bind(null,'spend'),placeholder:"\u8BF7\u8F93\u5165\u5145\u503C\u91D1\u989D"})),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:consumemodules_default.a.item},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:consumemodules_default.a.label},"\u8D60\u9001\u91D1\u989D"),/*#__PURE__*/react_default.a.createElement(wechat_esm["d" /* Input */],{type:"number",value:presenter,onInput:handleChangeInput.bind(null,'presenter'),placeholder:"\u8BF7\u8F93\u5165\u8D60\u9001\u91D1\u989D"})));},[number]);Object(useDidMount["a" /* default */])(function(){Object(wechat_esm["v" /* setNavigationBarTitle */])({title:type==='1'?'充值中心':'消费中心'});if(type==='2'){Object(utils["a" /* request */])('/product/list').then(function(_ref){var list=_ref.list;setProduct(list);});}});return/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:consumemodules_default.a.body},/*#__PURE__*/react_default.a.createElement(esm_ling["a" /* default */],{ref:ling}),type==='1'?recharge:consume,/*#__PURE__*/react_default.a.createElement(wechat_esm["a" /* Button */],{type:"primary",onTap:handleCreate,loading:loading,disabled:loading},"\u786E\u8BA4"));});
// CONCATENATED MODULE: ./src/pages-backstage/consume/index.entry.js
__webpack_require__(69);Page(Object(esm["f" /* createPageConfig */])(pages_backstage_consume,'pages-backstage/consume/index'));

/***/ })

},[[68,0,1]]]);