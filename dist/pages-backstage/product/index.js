require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[8],{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"listItem":"listItem___3800L","listItemPart":"listItemPart___2w_8F","addIcon":"addIcon___2OxnC","form":"form___3RhKh","footer":"footer___3lW73","btn":"btn___3DgQX","cancel":"cancel___35Sbq","ok":"ok___3YULj","item":"item____ZujJ"};

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(81);


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 81:
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

// EXTERNAL MODULE: ./node_modules/annar/esm/ling/index.js + 5 modules
var esm_ling = __webpack_require__(93);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};return _extends.apply(this,arguments);}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source,excluded){if(source==null)return{};var target=_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}
// EXTERNAL MODULE: ./node_modules/remax/one.js + 27 modules
var one = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(15);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./node_modules/annar/esm/_util/type.js
// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple=function tuple(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return args;};var tupleNum=function tupleNum(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}return args;};
// EXTERNAL MODULE: ./node_modules/annar/esm/loading/index.js
var esm_loading = __webpack_require__(41);

// EXTERNAL MODULE: ./node_modules/annar/esm/icon/index.js
var esm_icon = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/annar/esm/common/index.js
var common = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/annar/esm/button/index.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){Object(defineProperty["a" /* default */])(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var prefixCls=Object(common["a" /* getPrefixCls */])('btn');var ButtonTypes=tuple('default','primary');var button_AButton=function AButton(props){var _classNames;var type=props.type,size=props.size,className=props.className,style=props.style,children=props.children,onTap=props.onTap,disabled=props.disabled,danger=props.danger,shape=props.shape,block=props.block,_float=props["float"],loading=props.loading,loadingText=props.loadingText,plain=props.plain,hairline=props.hairline,look=props.look,color=props.color,icon=props.icon,ghost=props.ghost,_props$nativeType=props.nativeType,nativeType=_props$nativeType===void 0?'button':_props$nativeType,restProps=_objectWithoutProperties(props,["type","size","className","style","children","onTap","disabled","danger","shape","block","float","loading","loadingText","plain","hairline","look","color","icon","ghost","nativeType"]);var handleTap=function handleTap(e){if(disabled){return;}if(loading){return;}onTap===null||onTap===void 0?void 0:onTap(e);};var renderIcon=function renderIcon(childrenElement){var iconSize='32px';if(size==='small'){iconSize='28px';}if(size==='large'){iconSize='36px';}var iconColor='#1890FF';if(type==='primary'){iconColor='#FDFFFD';}if(plain){if(type==='primary'){iconColor='#1890FF';}if(color){iconColor=color;}}if(typeof icon==='string'){return/*#__PURE__*/react["createElement"](esm_icon["a" /* default */],{type:icon,color:iconColor,size:iconSize,style:{verticalAlign:'-0.05em',marginRight:childrenElement?'6px':undefined}});}if(/*#__PURE__*/react["isValidElement"](icon)){var _icon$props;return _objectSpread(_objectSpread({},icon),{},{props:_objectSpread(_objectSpread({},icon===null||icon===void 0?void 0:icon.props),{},{style:_objectSpread({verticalAlign:'-0.05em',marginRight:childrenElement?'6px':undefined},icon===null||icon===void 0?void 0:(_icon$props=icon.props)===null||_icon$props===void 0?void 0:_icon$props.style)})});}return null;};var classes=classnames_default()(prefixCls,className,(_classNames={},Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-").concat(shape),shape),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-").concat(size),size),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-primary"),type==='primary'),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-ghost"),ghost),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-plain"),plain),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-hairline"),hairline),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-block"),block),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-float"),_float),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-float-").concat(_float),_float),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-danger-default"),danger),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-danger"),type==='primary'&&danger),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-look-").concat(look),look),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-loading"),loading),Object(defineProperty["a" /* default */])(_classNames,"".concat(prefixCls,"-disabled"),disabled||loading),_classNames));var childrenElement=loading&&loadingText?loadingText:children;var iconElement=renderIcon(childrenElement);return/*#__PURE__*/react["createElement"](one["Button"],_extends({className:classes// @ts-ignore
,type:nativeType,disabled:disabled,onTap:handleTap,style:_objectSpread(_objectSpread({},style),{},{color:color,borderColor:color})},restProps),loading?/*#__PURE__*/react["createElement"](one["View"],{className:"".concat(prefixCls,"-loading-icon")},/*#__PURE__*/react["createElement"](esm_loading["a" /* default */],{color:"#FDFFFD",radius:"36px",style:{verticalAlign:'-0.3em'}})):iconElement,/*#__PURE__*/react["createElement"](one["Text"],{className:"".concat(prefixCls,"-text")},childrenElement),/*#__PURE__*/react["createElement"](one["Text"],{className:"".concat(prefixCls,"-mask")}));};/* harmony default export */ var esm_button = (button_AButton);
// EXTERNAL MODULE: ./src/pages-backstage/product/index.css?modules
var productmodules = __webpack_require__(13);
var productmodules_default = /*#__PURE__*/__webpack_require__.n(productmodules);

// EXTERNAL MODULE: ./src/hooks/useDidMount.js
var useDidMount = __webpack_require__(9);

// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(8);

// EXTERNAL MODULE: ./src/components/List/index.js + 2 modules
var List = __webpack_require__(14);

// EXTERNAL MODULE: ./src/components/Modal/index.jsx + 1 modules
var Modal = __webpack_require__(25);

// CONCATENATED MODULE: ./src/pages-backstage/product/index.js
var _excluded=["options"],_excluded2=["_id"];function product_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly){symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});}keys.push.apply(keys,symbols);}return keys;}function product_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){product_ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{product_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function product_objectWithoutProperties(source,excluded){if(source==null)return{};var target=product_objectWithoutPropertiesLoose(source,excluded);var key,i;if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++){key=sourceSymbolKeys[i];if(excluded.indexOf(key)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(source,key))continue;target[key]=source[key];}}return target;}function product_objectWithoutPropertiesLoose(source,excluded){if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];}return target;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr&&(typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"]);if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}var actions=[{data:'1',text:'修改',color:'#faad14'},{data:'2',text:'删除',color:'#ff4d4f',type:'warn'}];/* harmony default export */ var product = (function(){var ling=Object(react["useRef"])();var _useState=Object(react["useState"])([]),_useState2=_slicedToArray(_useState,2),data=_useState2[0],setData=_useState2[1];var _useState3=Object(react["useState"])(null),_useState4=_slicedToArray(_useState3,2),current=_useState4[0],setCurrent=_useState4[1];var _useState5=Object(react["useState"])(false),_useState6=_slicedToArray(_useState5,2),open=_useState6[0],setOpen=_useState6[1];var dataRef=Object(react["useRef"])([]);var createCallback=Object(react["useCallback"])(function(value){var list=dataRef.current.slice();list.push(value);setData(list);},[]);var updateCallback=Object(react["useCallback"])(function(value){var list=dataRef.current.slice();var index=list.findIndex(function(item){return item._id===value._id;});list[index]=value;setData(list);},[]);var handleShiftOpen=Object(react["useCallback"])(function(){setOpen(function(value){return!value;});},[]);var handleTapOption=Object(react["useCallback"])(function(optionValue,_ref){var options=_ref.options,other=product_objectWithoutProperties(_ref,_excluded);if(optionValue==='1'){handleShiftOpen();setCurrent(other);}else{Object(wechat_esm["x" /* showLoading */])();Object(utils["a" /* request */])('/product/delete',{id:other._id}).then(function(){var newData=data.slice();var index=newData.findIndex(function(value){return value._id===other._id;});newData.splice(index,1);setData(newData);ling.current.success('删除成功');Object(wechat_esm["o" /* hideLoading */])();}).catch(function(_ref2){var message=_ref2.message;ling.current.error(message);Object(wechat_esm["o" /* hideLoading */])();});}},[data]);var handleCreate=Object(react["useCallback"])(function(){setCurrent(null);handleShiftOpen();},[]);var handleChangeInput=Object(react["useCallback"])(function(type,event){var result=product_objectSpread(product_objectSpread({},current),{},_defineProperty({},type,event.detail.value));setCurrent(result);},[current]);var handleOk=Object(react["useCallback"])(function(){if(!current||!current.name||!current.price){ling.current.warning('请完成输入');}else{var _id=current._id,other=product_objectWithoutProperties(current,_excluded2);var isCreate=!_id;var path=isCreate?'/product/add':'/product/update';var params=isCreate?other:{id:_id,data:other};Object(wechat_esm["x" /* showLoading */])();Object(utils["a" /* request */])(path,params).then(function(_ref3){var data=_ref3.data;ling.current.success(isCreate?'创建成功':'修改成功');handleShiftOpen();Object(wechat_esm["o" /* hideLoading */])();isCreate&&createCallback(data);!isCreate&&updateCallback(data);}).catch(function(error){ling.current.error(error.message||'操作失败');handleShiftOpen();Object(wechat_esm["o" /* hideLoading */])();});}},[current]);Object(useDidMount["a" /* default */])(function(){Object(wechat_esm["v" /* setNavigationBarTitle */])({title:'产品管理'});Object(wechat_esm["x" /* showLoading */])();Object(utils["a" /* request */])('/product/list').then(function(_ref4){var list=_ref4.list;setData(list);Object(wechat_esm["o" /* hideLoading */])();}).catch(function(_ref5){var message=_ref5.message;Object(wechat_esm["o" /* hideLoading */])();ling.current.error(message);});});Object(react["useEffect"])(function(){dataRef.current=data;},[data]);return/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],null,/*#__PURE__*/react_default.a.createElement(esm_ling["a" /* default */],{ref:ling}),/*#__PURE__*/react_default.a.createElement(List["a" /* default */],{data:data.map(function(item){return product_objectSpread(product_objectSpread({},item),{},{options:actions});}),onTapOption:handleTapOption,render:function render(data){return/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:productmodules_default.a.listItem,key:data._id,__key:data._id},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:productmodules_default.a.listItemPart},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],null,/*#__PURE__*/react_default.a.createElement(wechat_esm["g" /* Text */],null,data.name))),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],null,"\xA5",/*#__PURE__*/react_default.a.createElement(wechat_esm["g" /* Text */],null,data.price)));}}),/*#__PURE__*/react_default.a.createElement(esm_button,{type:"primary",shape:"circle",icon:"add",float:true,size:"superlarge",style:{bottom:'100px',right:'40px',zIndex:100},onTap:handleCreate}),/*#__PURE__*/react_default.a.createElement(Modal["a" /* default */],{open:open,archor:"center",onClose:handleShiftOpen},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:productmodules_default.a.form},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:productmodules_default.a.item},/*#__PURE__*/react_default.a.createElement(wechat_esm["d" /* Input */],{type:"text",placeholder:"\u8BF7\u8F93\u5165\u670D\u52A1\u9879",value:current?current.name:'',onInput:handleChangeInput.bind(null,'name')})),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:productmodules_default.a.item},/*#__PURE__*/react_default.a.createElement(wechat_esm["d" /* Input */],{type:"number",placeholder:"\u8BF7\u8F93\u5165\u4EF7\u683C",value:current?current.price:undefined,onInput:handleChangeInput.bind(null,'price')})),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:productmodules_default.a.footer},/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:productmodules_default.a.btn+' '+productmodules_default.a.cancel,onTap:handleShiftOpen},"\u53D6\u6D88"),/*#__PURE__*/react_default.a.createElement(wechat_esm["h" /* View */],{className:productmodules_default.a.btn+' '+productmodules_default.a.ok,onTap:handleOk},"\u786E\u8BA4")))));});
// CONCATENATED MODULE: ./src/pages-backstage/product/index.entry.js
__webpack_require__(71);Page(Object(esm["f" /* createPageConfig */])(product,'pages-backstage/product/index'));

/***/ })

},[[70,0,1,2]]]);