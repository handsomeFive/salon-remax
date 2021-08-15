require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[12],{

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"app":"app___2e-A7","item":"item___3PWD_","info":"info___kcoCS","content":"content___1bbRP","add":"add___2uKrf","del":"del___23MYg","title":"title___2zxH1","dec":"dec___1bMcO","avatar":"avatar___1hanX","part":"part___39cFk","form":"form___1GF1H","formItem":"formItem___1GI-L","phone":"phone___3G-HG","footer":"footer___45yvg","btn":"btn___1rKmS","cancel":"cancel___1-65B","ok":"ok___kywdl","search":"search___1iZ6R"};

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@remax/runtime/esm/index.js + 25 modules
var esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@remax/wechat/esm/index.js + 53 modules
var wechat_esm = __webpack_require__(2);

// EXTERNAL MODULE: ./src/hooks/useDidMount.js
var useDidMount = __webpack_require__(10);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(7);

// EXTERNAL MODULE: ./src/components/List/index.js + 2 modules
var List = __webpack_require__(14);

// EXTERNAL MODULE: ./src/components/Modal/index.jsx + 1 modules
var Modal = __webpack_require__(26);

// EXTERNAL MODULE: ./src/pages-backstage/user/index.css?modules
var usermodules = __webpack_require__(9);
var usermodules_default = /*#__PURE__*/__webpack_require__.n(usermodules);

// EXTERNAL MODULE: ./node_modules/annar/esm/ling/index.js + 1 modules
var esm_ling = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/remax/one.js + 27 modules
var one = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(13);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./node_modules/annar/esm/icon/index.js
var icon = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/annar/esm/common/index.js
var common = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/annar/esm/search-bar/index.js
var prefixCls=Object(common["a" /* getPrefixCls */])('search_bar');var showBtn=false;var search_bar_SearchBar=function SearchBar(props){var _classNames,_classNames3,_classNames4;var value=props.value,placeholder=props.placeholder,onInput=props.onInput,onClear=props.onClear,onFocus=props.onFocus,onBlur=props.onBlur,onActionClick=props.onActionClick,onSubmit=props.onSubmit,inputStyle=props.inputStyle,shape=props.shape,_props$type=props.type,type=_props$type===void 0?'text':_props$type,_props$confirmType=props.confirmType,confirmType=_props$confirmType===void 0?'search':_props$confirmType,style=props.style,focus=props.focus,_props$actionName=props.actionName,actionName=_props$actionName===void 0?'取消':_props$actionName,keepShowActionButton=props.keepShowActionButton,hideActionButton=props.hideActionButton,size=props.size;var _useState=Object(react["useState"])(false),_useState2=Object(slicedToArray["a" /* default */])(_useState,2),isFocus=_useState2[0],setIsFocus=_useState2[1];var handleFocus=function handleFocus(e){onFocus===null||onFocus===void 0?void 0:onFocus(e);setIsFocus(true);};var handleBlur=function handleBlur(e){onBlur===null||onBlur===void 0?void 0:onBlur(e);setIsFocus(false);};var handleInput=function handleInput(e){onInput===null||onInput===void 0?void 0:onInput(e.target.value);};var handleClear=function handleClear(){onClear===null||onClear===void 0?void 0:onClear(value);};var handleActionClick=function handleActionClick(){showBtn=false;onActionClick===null||onActionClick===void 0?void 0:onActionClick();};var handleConfirm=function handleConfirm(e){onSubmit===null||onSubmit===void 0?void 0:onSubmit(e.target.value);};var active=isFocus||value||focus;if(active&&!showBtn){showBtn=true;}var iconSize='32px';if(size==='large'){iconSize='36px';}if(size==='small'){iconSize='28px';}return/*#__PURE__*/react["createElement"](one["View"],{className:classnames_default()((_classNames={},Object(defineProperty["a" /* default */])(_classNames,prefixCls,true),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-large"),size==='large'),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-small"),size==='small'),_classNames)),style:style},/*#__PURE__*/react["createElement"](one["View"],{className:classnames_default()("".concat(prefixCls,"-input"),Object(defineProperty["a" /* default */])({},"".concat(prefixCls,"-input-").concat(shape),shape)),style:inputStyle},/*#__PURE__*/react["createElement"](one["View"],{className:classnames_default()((_classNames3={},Object(defineProperty["a" /* default */])(_classNames3,"".concat(prefixCls,"-input-synthetic"),true),Object(defineProperty["a" /* default */])(_classNames3,"".concat(prefixCls,"-input-is_left"),active),_classNames3))},/*#__PURE__*/react["createElement"](one["View"],{className:"".concat(prefixCls,"-input-synthetic-icon")},/*#__PURE__*/react["createElement"](icon["a" /* default */],{type:"search",size:iconSize,color:"#999"})),/*#__PURE__*/react["createElement"](one["View"],{className:"".concat(prefixCls,"-input-synthetic-placeholder"),style:{visibility:active?'hidden':'visible'}},placeholder)),/*#__PURE__*/react["createElement"](one["Input"],{className:"".concat(prefixCls,"-input-value")// @ts-ignore
,type:type,confirmType:confirmType,value:value,onFocus:handleFocus,onBlur:handleBlur,onInput:handleInput,onConfirm:handleConfirm,focus:focus}),/*#__PURE__*/react["createElement"](one["View"],{className:"".concat(prefixCls,"-input-clear"),onTap:handleClear},/*#__PURE__*/react["createElement"](icon["a" /* default */],{type:"roundclosefill",size:"".concat(iconSize,"px"),color:"#999",style:{visibility:value?'visible':'hidden'}}))),!hideActionButton?/*#__PURE__*/react["createElement"](one["View"],{className:classnames_default()((_classNames4={},Object(defineProperty["a" /* default */])(_classNames4,"".concat(prefixCls,"-action_button"),true),Object(defineProperty["a" /* default */])(_classNames4,"".concat(prefixCls,"-show_action_button"),keepShowActionButton?true:active),_classNames4)),onTap:handleActionClick},actionName):null);};/* harmony default export */ var search_bar = (search_bar_SearchBar);
// CONCATENATED MODULE: ./src/pages-backstage/user/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr&&(typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"]);if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var actions=[{data:'1',text:'查看记录',color:'#faad14'},{data:'2',text:'编号',color:'#ff4d4f',type:'warn'}];/* harmony default export */ var user = (function(props){var ling=Object(react["useRef"])();var _useState=Object(react["useState"])([]),_useState2=_slicedToArray(_useState,2),data=_useState2[0],setData=_useState2[1];var _useState3=Object(react["useState"])(false),_useState4=_slicedToArray(_useState3,2),open=_useState4[0],setOpen=_useState4[1];var _useState5=Object(react["useState"])(''),_useState6=_slicedToArray(_useState5,2),alternativeName=_useState6[0],setAlternativeName=_useState6[1];var _useState7=Object(react["useState"])(''),_useState8=_slicedToArray(_useState7,2),currentId=_useState8[0],setCurrentId=_useState8[1];var _useState9=Object(react["useState"])(''),_useState10=_slicedToArray(_useState9,2),search=_useState10[0],setSearch=_useState10[1];var renderFunction=Object(react["useCallback"])(function(data){var nickName=data.nickName,alternativeName=data.alternativeName,balance=data.balance,avatarUrl=data.avatarUrl;var end=balance>100?/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.add},"\xA5",balance):/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.del},"\xA5",balance);return/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.item,key:data._id,__key:data._id},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.content},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.part},/*#__PURE__*/react_default.a.createElement(wechat_esm["c" /* Image */],{src:avatarUrl,className:usermodules_default.a.avatar}),/*#__PURE__*/react_default.a.createElement(wechat_esm["g" /* Text */],{className:usermodules_default.a.title},alternativeName?"".concat(alternativeName,"(").concat(nickName,")"):nickName)),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.part},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.dec},"\u4F59\u989D\uFF1A"),end)));},[]);var handleTapOption=Object(react["useCallback"])(function(optionValue,item){if(optionValue==='1'){Object(wechat_esm["r" /* navigateTo */])({url:"/pages-backstage/user-order/index?phoneNumber=".concat(item.phoneNumber,"&user=").concat(item.nickName)});}else{var _alternativeName=item.alternativeName,_id=item._id;_alternativeName&&setAlternativeName(_alternativeName);setCurrentId(_id);setOpen(true);}},[data]);var handleCloseUpdate=Object(react["useCallback"])(function(){setOpen(false);setCurrentId('');setAlternativeName('');},[]);var handleChangeSearch=Object(react["useCallback"])(function(search){setSearch(search);},[]);var handleSearch=Object(react["useCallback"])(function(key){Object(wechat_esm["x" /* showLoading */])();var param=typeof key!=='undefined'?{search:key}:{search:search};Object(utils["a" /* request */])('/user/list',param).then(function(_ref){var list=_ref.list;setData(list);Object(wechat_esm["o" /* hideLoading */])();}).catch(function(){Object(wechat_esm["o" /* hideLoading */])();});},[search]);var handleClearSearch=Object(react["useCallback"])(function(){setSearch('');if(search){handleSearch('');}},[search]);var handleUpgrade=Object(react["useCallback"])(function(){Object(wechat_esm["x" /* showLoading */])();Object(utils["a" /* request */])('/user/nickName',{_id:currentId,alternativeName:alternativeName}).then(function(_ref2){var result=_ref2.data;var copy=data.slice();var index=copy.findIndex(function(item){return item._id===currentId;});if(index>-1){copy[index]=result;setData(copy);}Object(wechat_esm["o" /* hideLoading */])();setCurrentId('');setAlternativeName('');setOpen(false);}).catch(function(_ref3){var message=_ref3.message;ling.current.error(message);Object(wechat_esm["o" /* hideLoading */])();});},[data,currentId,alternativeName]);Object(useDidMount["a" /* default */])(function(){Object(wechat_esm["v" /* setNavigationBarTitle */])({title:'用户管理'});handleSearch();});return/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],null,/*#__PURE__*/react_default.a.createElement(esm_ling["a" /* default */],{ref:ling}),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.search},/*#__PURE__*/react_default.a.createElement(search_bar,{placeholder:"\u8BF7\u8F93\u5165\u5FAE\u4FE1\u540D\u6216\u7F16\u53F7",value:search,onInput:handleChangeSearch,onClear:handleClearSearch,onSubmit:handleSearch})),/*#__PURE__*/react_default.a.createElement(List["a" /* default */],{data:data.map(function(item){return _objectSpread(_objectSpread({},item),{},{options:actions});}),onTapOption:handleTapOption,render:renderFunction}),/*#__PURE__*/react_default.a.createElement(Modal["a" /* default */],{open:open,archor:"center",onClose:handleCloseUpdate},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.form},/*#__PURE__*/react_default.a.createElement(wechat_esm["g" /* Text */],{className:usermodules_default.a.formItem},"\u7ED9\u7528\u6237\u4E00\u4E2A\u7279\u6B8A\u7F16\u53F7\uFF0C\u65B9\u4FBF\u67E5\u627E\u53CA\u64CD\u4F5C"),/*#__PURE__*/react_default.a.createElement(wechat_esm["d" /* Input */],{value:alternativeName,className:usermodules_default.a.phone,type:"text",placeholder:"\u8BF7\u8F93\u5165\u7F16\u53F7",onInput:function onInput(_ref4){var detail=_ref4.detail;return setAlternativeName(detail.value.trim());}}),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.footer},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.btn+' '+usermodules_default.a.cancel,onTap:handleCloseUpdate},"\u53D6\u6D88"),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:usermodules_default.a.btn+' '+usermodules_default.a.ok,onTap:handleUpgrade},"\u786E\u8BA4")))));});
// CONCATENATED MODULE: ./src/pages-backstage/user/index.entry.js
__webpack_require__(80);Page(Object(esm["f" /* createPageConfig */])(user,'pages-backstage/user/index'));

/***/ })

},[[79,0,1,2]]]);