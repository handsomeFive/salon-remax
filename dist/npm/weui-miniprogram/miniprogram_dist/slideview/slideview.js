require('./../../../../runtime.js');
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["npm/weui-miniprogram/miniprogram_dist/slideview/slideview"],{

/***/ "./node_modules/weui-miniprogram/miniprogram_dist/slideview/slideview.entry.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/weui-miniprogram/miniprogram_dist/slideview/slideview.entry.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

__webpack_require__(/*! ./slideview.wxss */ "./node_modules/weui-miniprogram/miniprogram_dist/slideview/slideview.wxss");

module.exports =
/******/
function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/

  /******/
  // The require function

  /******/

  function __webpack_require__(moduleId) {
    /******/

    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/
    // Create a new module (and put it into the cache)

    /******/


    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,

      /******/
      l: false,

      /******/
      exports: {}
      /******/

    };
    /******/

    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/

    /******/
    // Flag the module as loaded

    /******/

    module.l = true;
    /******/

    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/

  /******/

  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __webpack_require__.m = modules;
  /******/

  /******/
  // expose the module cache

  /******/

  __webpack_require__.c = installedModules;
  /******/

  /******/
  // define getter function for harmony exports

  /******/

  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/

  };
  /******/

  /******/
  // define __esModule on exports

  /******/


  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/


    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/

  /******/
  // create a fake namespace object

  /******/
  // mode & 1: value is a module id, require it

  /******/
  // mode & 2: merge all properties of value into the ns

  /******/
  // mode & 4: return value when already ns object

  /******/
  // mode & 8|1: behave like require

  /******/


  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/

    if (mode & 8) return value;
    /******/

    if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
    /******/

    var ns = Object.create(null);
    /******/

    __webpack_require__.r(ns);
    /******/


    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/

    if (mode & 2 && typeof value != 'string') for (var key in value) {
      __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    }
    /******/

    return ns;
    /******/
  };
  /******/

  /******/
  // getDefaultExport function for compatibility with non-harmony modules

  /******/


  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
    /******/
    function getDefault() {
      return module['default'];
    } :
    /******/
    function getModuleExports() {
      return module;
    };
    /******/

    __webpack_require__.d(getter, 'a', getter);
    /******/


    return getter;
    /******/
  };
  /******/

  /******/
  // Object.prototype.hasOwnProperty.call

  /******/


  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/

  /******/
  // __webpack_public_path__

  /******/


  __webpack_require__.p = "";
  /******/

  /******/

  /******/
  // Load entry module and return exports

  /******/

  return __webpack_require__(__webpack_require__.s = 18);
  /******/
}(
/************************************************************************/

/******/
{
  /***/
  18:
  /***/
  function _(module, exports, __webpack_require__) {
    "use strict";

    Component({
      /**
       * 组件的属性列表
       */
      options: {
        addGlobalClass: true,
        multipleSlots: true
      },
      properties: {
        extClass: {
          type: String,
          value: ''
        },
        buttons: {
          type: Array,
          value: [],
          // type, data, text, src, extClass
          observer: function observer() {
            this.addClassNameForButton();
          }
        },
        disable: {
          type: Boolean,
          value: false
        },
        icon: {
          // 是否是icon
          type: Boolean,
          value: false
        },
        show: {
          type: Boolean,
          value: false
        },
        duration: {
          type: Number,
          value: 350 // 动画市场，单位ms

        },
        throttle: {
          type: Number,
          value: 40
        },
        rebounce: {
          type: Number,
          value: 0 // 回弹距离

        }
      },

      /**
       * 组件的初始数据
       */
      data: {
        size: null
      },

      /**
       * 组件的方法列表
       */
      ready: function ready() {
        // @ts-ignore
        this.updateRight();
        this.addClassNameForButton();
      },
      methods: {
        updateRight: function updateRight() {
          var _this = this;

          // 获取右侧滑动显示区域的宽度
          var data = this.data;
          var query = wx.createSelectorQuery().in(this);
          query.select('.left').boundingClientRect(function (res) {
            var btnQuery = wx.createSelectorQuery().in(_this);
            btnQuery.selectAll('.btn').boundingClientRect(function (rects) {
              _this.setData({
                size: {
                  buttons: rects,
                  button: res,
                  show: data.show,
                  disable: data.disable,
                  throttle: data.throttle,
                  rebounce: data.rebounce
                }
              });
            }).exec();
          }).exec();
        },
        addClassNameForButton: function addClassNameForButton() {
          // @ts-ignore
          var _this$data = this.data,
              buttons = _this$data.buttons,
              icon = _this$data.icon;
          buttons.forEach(function (btn) {
            if (icon) {
              btn.className = '';
            } else if (btn.type === 'warn') {
              btn.className = 'weui-slideview__btn-group_warn';
            } else {
              btn.className = 'weui-slideview__btn-group_default';
            }
          });
          this.setData({
            buttons: buttons
          });
        },
        buttonTapByWxs: function buttonTapByWxs(data) {
          this.triggerEvent('buttontap', data, {});
        },
        hide: function hide() {
          this.triggerEvent('hide', {}, {});
        },
        show: function show() {
          this.triggerEvent('show', {}, {});
        },
        transitionEnd: function transitionEnd() {}
      }
    });
    /***/
  }
  /******/

});

/***/ }),

/***/ "./node_modules/weui-miniprogram/miniprogram_dist/slideview/slideview.wxss":
/*!*********************************************************************************!*\
  !*** ./node_modules/weui-miniprogram/miniprogram_dist/slideview/slideview.wxss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* istanbul ignore next */
// extracted by mini-css-extract-plugin

/***/ })

},[["./node_modules/weui-miniprogram/miniprogram_dist/slideview/slideview.entry.js","runtime"]]]);