/*!
 * form-create 可视化表单设计器
 * @form-create/designer v1.0.7
 * (c) 2021-2022 xaboy
 * Github https://github.com/xaboy/form-create-designer
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('@/imgs/icon-radio.svg'), require('@/imgs/icon-radio-active.svg'), require('@/imgs/icon-time.svg'), require('@/imgs/icon-time-active.svg'), require('@/imgs/icon-date.svg'), require('@/imgs/icon-date-active.svg'), require('@/imgs/icon-name.svg'), require('@/imgs/icon-name-active.svg'), require('@/imgs/icon-weixin.svg'), require('@/imgs/icon-weixin-active.svg'), require('@/imgs/icon-phone.svg'), require('@/imgs/icon-phone-active.svg'), require('@/imgs/icon-sex.svg'), require('@/imgs/icon-sex-active.svg'), require('@/imgs/icon-email.svg'), require('@/imgs/icon-email-active.svg'), require('@/imgs/icon-address.svg'), require('@/imgs/icon-business.svg'), require('@/imgs/icon-business-active.svg'), require('@/imgs/icon-text.svg'), require('@/imgs/icon-text-active.svg'), require('@/imgs/icon-textarea.svg'), require('@/imgs/icon-textarea-active.svg'), require('@/imgs/icon-select.svg'), require('@/imgs/icon-select-active.svg'), require('@/imgs/icon-select-more.svg'), require('@/imgs/icon-select-more-active.svg'), require('@/imgs/icon-checkbox.svg'), require('@/imgs/icon-checkbox-active.svg'), require('@/imgs/icon-img.svg'), require('@/imgs/icon-img-active.svg'), require('@/imgs/icon-upload-img.svg'), require('@/utils/addressData'), require('@/imgs/banner.png'), require('@/imgs/click-item.svg'), require('@/imgs/select-item.svg')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', '@/imgs/icon-radio.svg', '@/imgs/icon-radio-active.svg', '@/imgs/icon-time.svg', '@/imgs/icon-time-active.svg', '@/imgs/icon-date.svg', '@/imgs/icon-date-active.svg', '@/imgs/icon-name.svg', '@/imgs/icon-name-active.svg', '@/imgs/icon-weixin.svg', '@/imgs/icon-weixin-active.svg', '@/imgs/icon-phone.svg', '@/imgs/icon-phone-active.svg', '@/imgs/icon-sex.svg', '@/imgs/icon-sex-active.svg', '@/imgs/icon-email.svg', '@/imgs/icon-email-active.svg', '@/imgs/icon-address.svg', '@/imgs/icon-business.svg', '@/imgs/icon-business-active.svg', '@/imgs/icon-text.svg', '@/imgs/icon-text-active.svg', '@/imgs/icon-textarea.svg', '@/imgs/icon-textarea-active.svg', '@/imgs/icon-select.svg', '@/imgs/icon-select-active.svg', '@/imgs/icon-select-more.svg', '@/imgs/icon-select-more-active.svg', '@/imgs/icon-checkbox.svg', '@/imgs/icon-checkbox-active.svg', '@/imgs/icon-img.svg', '@/imgs/icon-img-active.svg', '@/imgs/icon-upload-img.svg', '@/utils/addressData', '@/imgs/banner.png', '@/imgs/click-item.svg', '@/imgs/select-item.svg'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FcDesigner = {}, global.Vue, global.Icon, global.activeIcon, global.Icon$1, global.activeIcon$1, global.Icon$2, global.activeIcon$2, global.Icon$3, global.activeIcon$3, global.Icon$4, global.activeIcon$4, global.Icon$5, global.activeIcon$5, global.Icon$6, global.activeIcon$6, global.Icon$7, global.activeIcon$7, global.Icon$8, global.Icon$9, global.activeIcon$8, global.Icon$a, global.activeIcon$9, global.Icon$b, global.activeIcon$a, global.Icon$c, global.activeIcon$b, global.Icon$d, global.activeIcon$c, global.Icon$e, global.activeIcon$d, global.Icon$f, global.activeIcon$e, global.Icon$g, global.addressData, null, global.__$_require_imgs_click_item_svg__, global.__$_require_imgs_select_item_svg__));
}(this, (function (exports, Vue, Icon, activeIcon, Icon$1, activeIcon$1, Icon$2, activeIcon$2, Icon$3, activeIcon$3, Icon$4, activeIcon$4, Icon$5, activeIcon$5, Icon$6, activeIcon$6, Icon$7, activeIcon$7, Icon$8, Icon$9, activeIcon$8, Icon$a, activeIcon$9, Icon$b, activeIcon$a, Icon$c, activeIcon$b, Icon$d, activeIcon$c, Icon$e, activeIcon$d, Icon$f, activeIcon$e, Icon$g, addressData, banner_png, __$_require_imgs_click_item_svg__, __$_require_imgs_select_item_svg__) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Vue__default = /*#__PURE__*/_interopDefaultLegacy(Vue);
  var Icon__default = /*#__PURE__*/_interopDefaultLegacy(Icon);
  var activeIcon__default = /*#__PURE__*/_interopDefaultLegacy(activeIcon);
  var Icon__default$1 = /*#__PURE__*/_interopDefaultLegacy(Icon$1);
  var activeIcon__default$1 = /*#__PURE__*/_interopDefaultLegacy(activeIcon$1);
  var Icon__default$2 = /*#__PURE__*/_interopDefaultLegacy(Icon$2);
  var activeIcon__default$2 = /*#__PURE__*/_interopDefaultLegacy(activeIcon$2);
  var Icon__default$3 = /*#__PURE__*/_interopDefaultLegacy(Icon$3);
  var activeIcon__default$3 = /*#__PURE__*/_interopDefaultLegacy(activeIcon$3);
  var Icon__default$4 = /*#__PURE__*/_interopDefaultLegacy(Icon$4);
  var activeIcon__default$4 = /*#__PURE__*/_interopDefaultLegacy(activeIcon$4);
  var Icon__default$5 = /*#__PURE__*/_interopDefaultLegacy(Icon$5);
  var activeIcon__default$5 = /*#__PURE__*/_interopDefaultLegacy(activeIcon$5);
  var Icon__default$6 = /*#__PURE__*/_interopDefaultLegacy(Icon$6);
  var activeIcon__default$6 = /*#__PURE__*/_interopDefaultLegacy(activeIcon$6);
  var Icon__default$7 = /*#__PURE__*/_interopDefaultLegacy(Icon$7);
  var activeIcon__default$7 = /*#__PURE__*/_interopDefaultLegacy(activeIcon$7);
  var Icon__default$8 = /*#__PURE__*/_interopDefaultLegacy(Icon$8);
  var Icon__default$9 = /*#__PURE__*/_interopDefaultLegacy(Icon$9);
  var activeIcon__default$8 = /*#__PURE__*/_interopDefaultLegacy(activeIcon$8);
  var Icon__default$a = /*#__PURE__*/_interopDefaultLegacy(Icon$a);
  var activeIcon__default$9 = /*#__PURE__*/_interopDefaultLegacy(activeIcon$9);
  var Icon__default$b = /*#__PURE__*/_interopDefaultLegacy(Icon$b);
  var activeIcon__default$a = /*#__PURE__*/_interopDefaultLegacy(activeIcon$a);
  var Icon__default$c = /*#__PURE__*/_interopDefaultLegacy(Icon$c);
  var activeIcon__default$b = /*#__PURE__*/_interopDefaultLegacy(activeIcon$b);
  var Icon__default$d = /*#__PURE__*/_interopDefaultLegacy(Icon$d);
  var activeIcon__default$c = /*#__PURE__*/_interopDefaultLegacy(activeIcon$c);
  var Icon__default$e = /*#__PURE__*/_interopDefaultLegacy(Icon$e);
  var activeIcon__default$d = /*#__PURE__*/_interopDefaultLegacy(activeIcon$d);
  var Icon__default$f = /*#__PURE__*/_interopDefaultLegacy(Icon$f);
  var activeIcon__default$e = /*#__PURE__*/_interopDefaultLegacy(activeIcon$e);
  var Icon__default$g = /*#__PURE__*/_interopDefaultLegacy(Icon$g);
  var addressData__default = /*#__PURE__*/_interopDefaultLegacy(addressData);
  var __$_require_imgs_click_item_svg____default = /*#__PURE__*/_interopDefaultLegacy(__$_require_imgs_click_item_svg__);
  var __$_require_imgs_select_item_svg____default = /*#__PURE__*/_interopDefaultLegacy(__$_require_imgs_select_item_svg__);

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty$1(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray$1(arr) {
    return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread$1();
  }

  function _arrayWithoutHoles$1(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray$1(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread$1() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function form() {
    return [{
      type: 'radio',
      field: 'labelPosition',
      value: 'left',
      title: '标签位置',
      options: [{
        value: 'right',
        label: 'right'
      }, {
        value: 'left',
        label: 'left'
      }, {
        value: 'top',
        label: 'top'
      }]
    }, {
      type: 'radio',
      field: 'size',
      value: 'mini',
      title: '表单尺寸',
      options: [{
        value: 'medium',
        label: 'medium'
      }, {
        value: 'small',
        label: 'small'
      }, {
        value: 'mini',
        label: 'mini'
      }]
    }, {
      type: 'input',
      field: 'labelWidth',
      value: '125px',
      title: '标签宽度'
    }, {
      type: 'switch',
      field: 'hideRequiredAsterisk',
      value: false,
      title: '隐藏必填字段的标签旁边的红色星号'
    }, {
      type: 'switch',
      field: 'showMessage',
      value: true,
      title: '显示校验错误信息'
    }, {
      type: 'switch',
      field: 'inlineMessage',
      value: false,
      title: '以行内形式展示校验信息'
    }, {
      type: 'switch',
      field: 'formCreateSubmitBtn',
      value: true,
      title: '是否显示表单提交按钮'
    }, {
      type: 'switch',
      field: 'formCreateResetBtn',
      value: false,
      title: '是否显示表单重置按钮'
    }];
  }

  function field() {
    return [{
      type: 'input',
      field: 'field',
      value: '',
      title: '字段 ID',
      hidden: true
    }, {
      type: 'input',
      field: 'title',
      value: '',
      title: '字段名称'
    }, {
      type: 'input',
      field: 'info',
      value: '',
      title: '提示信息',
      hidden: true
    }, {
      type: 'Struct',
      field: '_control',
      value: [],
      title: '联动数据',
      hidden: true,
      props: {
        defaultValue: [],
        validate: function validate(val) {
          if (!Array.isArray(val)) { return false; }
          if (!val.length) { return true; }
          return !val.some(function (_ref) {
            var rule = _ref.rule;
            return !Array.isArray(rule);
          });
        }
      }
    }, {
      type: 'col',
      hidden: true,
      props: {
        span: 24
      },
      children: [{
        type: 'el-button',
        props: {
          type: 'primary',
          size: 'mini',
          icon: 'el-icon-delete'
        },
        inject: true,
        on: {
          click: function click(_ref2) {
            var $f = _ref2.$f;
            var rule = $f.activeRule;

            if (rule) {
              rule.__fc__.updateKey();

              rule.value = undefined;

              rule.__fc__.$api.sync(rule);
            }
          }
        },
        "native": true,
        children: ['清空值']
      }, {
        type: 'el-button',
        props: {
          type: 'success',
          size: 'mini',
          icon: 'el-icon-refresh'
        },
        inject: true,
        on: {
          click: function click(_ref3) {
            var $f = _ref3.$f;
            var rule = $f.activeRule;

            if (rule) {
              rule.__fc__.updateKey(true);

              rule.__fc__.$api.sync(rule);
            }
          }
        },
        "native": true,
        children: ['刷新']
      }]
    }];
  }

  function validate() {
    return [{
      type: 'validate',
      field: 'validate',
      value: []
    }];
  }

  function $set(target, field, value) {
      Vue__default['default'].set(target, field, value);
  }

  var is = {
      type: function type(arg, type$1) {
          return Object.prototype.toString.call(arg) === '[object ' + type$1 + ']'
      },
      Undef: function Undef(v) {
          return v === undefined || v === null
      },
      Element: function Element(arg) {
          return typeof arg === 'object' && arg !== null && arg.nodeType === 1 && !is.Object(arg)
      },
      trueArray: function trueArray(data) {
          return Array.isArray(data) && data.length > 0;
      }
  };

  ['Date', 'Object', 'Function', 'String', 'Boolean', 'Array', 'Number'].forEach(function (t) {
      is[t] = function (arg) {
          return is.type(arg, t);
      };
  });

  function hasProperty(rule, k) {
      return ({}).hasOwnProperty.call(rule, k)
  }

  function deepExtend(origin, target, mode) {
      if ( target === void 0 ) target = {};

      var isArr = false;
      for (var key in target) {
          if (Object.prototype.hasOwnProperty.call(target, key)) {
              var clone = target[key];
              if ((isArr = Array.isArray(clone)) || is.Object(clone)) {
                  var nst = origin[key] === undefined;
                  if (isArr) {
                      isArr = false;
                      nst && $set(origin, key, []);
                  } else if (clone._clone && mode !== undefined) {
                      if (mode) {
                          clone = clone.getRule();
                          nst && $set(origin, key, {});
                      } else {
                          $set(origin, key, clone._clone());
                          continue;
                      }
                  } else {
                      nst && $set(origin, key, {});
                  }
                  origin[key] = deepExtend(origin[key], clone, mode);
              } else {
                  $set(origin, key, clone);
                  if (!is.Undef(clone)) {
                      if (clone.__json !== undefined) {
                          origin[key].__json = clone.__json;
                      }
                      if (clone.__origin !== undefined) {
                          origin[key].__origin = clone.__origin;
                      }
                  }
              }
          }
      }
      return (mode !== undefined && Array.isArray(origin)) ? origin.filter(function (v) { return !v || !v.__ctrl; }) : origin
  }

  function deepCopy(value) {
      return deepExtend({}, {value: value}).value;
  }

  function lower(str) {
      return str.replace(str[0], str[0].toLowerCase());
  }

  var id$1 = 0;

  function uniqueId() {
      return Math.random().toString(36).substr(3, 3) + Number(("" + (Date.now()) + (++id$1))).toString(36);
  }

  var label$z = "单项选择";
  var name$B = "radio";
  var radio = {
    icon: Icon__default['default'],
    activeIcon: activeIcon__default['default'],
    label: label$z,
    name: name$B,
    rule: function rule() {
      return {
        type: 'cu-radio',
        field: uniqueId(),
        title: label$z,
        info: "",
        effect: {
          fetch: "",
          required: false
        },
        props: {
          options: [{
            value: "选项1",
            label: "选项1"
          }, {
            value: "选项2",
            label: "选项2"
          }],
          value: ''
        }
      };
    },
    props: function props() {
      return [{
        type: 'options-item',
        form: 'props',
        field: 'options',
        title: '选项'
      }];
    }
  };

  function format(type, msg, rule) {
      return ("[form-create " + type + "]: " + msg + (rule ? ('\n\nrule: ' + JSON.stringify(rule.getRule ? rule.getRule() : rule)) : ''))
  }

  function err(msg, rule) {
      console.error(format('err', msg, rule));
  }

  var PREFIX = '[[FORM-CREATE-PREFIX-';
  var SUFFIX = '-FORM-CREATE-SUFFIX]]';

  var $T = '$FN:';
  var $TX = '$FNX:';
  var FUNCTION = 'function';

  function makeFn(fn) {
      return eval('(' + FUNCTION + '(){return ' + fn + ' })()')
  }

  function parseFn(fn, mode) {
      if (fn && is.String(fn) && fn.length > 4) {
          var v = fn.trim();
          var flag = false;
          try {
              if (v.indexOf(SUFFIX) > 0 && v.indexOf(PREFIX) === 0) {
                  v = v.replace(SUFFIX, '').replace(PREFIX, '');
                  flag = true;
              } else if (v.indexOf($T) === 0) {
                  v = v.replace($T, '');
                  flag = true;
              } else if (v.indexOf($TX) === 0) {
                  v = makeFn('function($inject){' + v.replace($TX, '') + '}');
                  v.__json = fn;
                  v.__inject = true;
                  return v;
              } else if (!mode && v.indexOf(FUNCTION) === 0 && v !== FUNCTION) {
                  flag = true;
              }
              if (!flag) { return fn; }
              var val = makeFn((v.indexOf(FUNCTION) === -1 && v.indexOf('(') !== 0) ? (FUNCTION + ' ' + v) : v);
              val.__json = fn;
              return val;
          } catch (e) {
              err(("解析失败:" + v + "\n\nerr: " + e));
              return undefined;
          }
      }
      return fn;
  }

  function makeRequiredRule() {
    return {
      type: 'Required',
      field: 'formCreate$required',
      title: '是否必填'
    };
  }
  function makeOptionsRule(to, flag) {
    var options = [{
      'label': 'JSON数据',
      'value': 0
    }, {
      'label': '接口数据',
      'value': 1
    }];
    var control = [{
      value: 0,
      rule: [{
        type: 'Struct',
        field: 'formCreate' + upper(to).replace('.', '>'),
        props: {
          defaultValue: []
        }
      }]
    }, {
      value: 1,
      rule: [{
        type: 'Fetch',
        field: 'formCreateEffect>fetch',
        props: {
          to: to
        }
      }]
    }];

    if (flag !== false) {
      options.splice(0, 0, {
        'label': '静态数据',
        'value': 2
      });
      control.push({
        value: 2,
        rule: [{
          type: 'TableOptions',
          field: 'formCreate' + upper(to).replace('.', '>'),
          props: {
            defaultValue: []
          }
        }]
      });
    }

    return {
      type: 'radio',
      title: '选项数据',
      field: '_optionType',
      value: flag !== false ? 2 : 0,
      options: options,
      props: {
        type: 'button'
      },
      control: control
    };
  }
  function upper(str) {
    return str.replace(str[0], str[0].toLocaleUpperCase());
  }
  var toJSON = function toJSON(val) {
    var type = /object ([a-zA-Z]*)/.exec(Object.prototype.toString.call(val));

    if (type && _toJSON[type[1].toLowerCase()]) {
      return _toJSON[type[1].toLowerCase()](val);
    } else {
      return val;
    }
  };
  var _toJSON = {
    object: function object(val) {
      var json = [];

      for (var i in val) {
        if (!hasProperty(val, i)) { continue; }
        json.push(toJSON(i) + ': ' + (val[i] != null ? toJSON(val[i]) : 'null'));
      }

      return '{\n ' + json.join(',\n ') + '\n}';
    },
    array: function array(val) {
      for (var i = 0, json = []; i < val.length; i++) {
        json[i] = val[i] != null ? toJSON(val[i]) : 'null';
      }

      return '[' + json.join(', ') + ']';
    },
    string: function string(val) {
      var tmp = val.split('');

      for (var i = 0; i < tmp.length; i++) {
        var c = tmp[i];
        c >= ' ' ? c === '\\' ? tmp[i] = '\\\\' : c === '"' ? tmp[i] = '\\"' : 0 : tmp[i] = c === '\n' ? '\\n' : c === '\r' ? '\\r' : c === '\t' ? '\\t' : c === '\b' ? '\\b' : c === '\f' ? '\\f' : (c = c.charCodeAt(), "\\u00" + (c > 15 ? 1 : 0) + c % 16);
      }

      return '"' + tmp.join('') + '"';
    }
  };
  var deepParseFn = function deepParseFn(target) {
    for (var key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        var data = target[key];

        if (Array.isArray(data) || is.Object(data)) {
          deepParseFn(data);
        }

        if (is.String(data)) {
          target[key] = parseFn(data);
        }
      }
    }

    return target;
  };

  var label$y = '输入框';
  var name$A = 'input';
  var input = {
    icon: 'icon-input',
    label: label$y,
    name: name$A,
    rule: function rule() {
      return {
        type: name$A,
        field: uniqueId(),
        title: label$y,
        info: '',
        props: {}
      };
    },
    props: function props() {
      return [makeRequiredRule(), {
        type: 'select',
        field: 'type',
        title: '类型',
        options: [{
          label: 'text',
          value: 'text'
        }, {
          label: 'textarea',
          value: 'textarea'
        }, {
          label: 'number',
          value: 'number'
        }, {
          label: 'password',
          value: 'password'
        }]
      }, {
        type: 'inputNumber',
        field: 'maxlength',
        title: '最大输入长度'
      }, {
        type: 'inputNumber',
        field: 'minlength',
        title: '最小输入长度'
      }, {
        type: 'switch',
        field: 'showWordLimit',
        title: '是否显示输入字数统计'
      }, {
        type: 'input',
        field: 'placeholder',
        title: '输入框占位文本'
      }, {
        type: 'switch',
        field: 'clearable',
        title: '是否可清空'
      }, {
        type: 'switch',
        field: 'showPassword',
        title: '是否显示切换密码图标'
      }, {
        type: 'switch',
        field: 'disabled',
        title: '禁用'
      }, {
        type: 'input',
        field: 'prefixIcon',
        title: '输入框头部图标'
      }, {
        type: 'input',
        field: 'suffixIcon',
        title: '输入框尾部图标'
      }, {
        type: 'inputNumber',
        field: 'rows',
        info: '只对 type="textarea" 有效',
        title: '输入框行数'
      }, {
        type: 'select',
        field: 'autocomplete',
        title: '自动补全',
        options: [{
          label: 'on',
          value: 'on'
        }, {
          label: 'off',
          value: 'off'
        }]
      }, {
        type: 'switch',
        field: 'readonly',
        title: '是否只读'
      }, {
        type: 'select',
        field: 'resize',
        title: '控制是否能被用户缩放',
        options: [{
          label: 'none',
          value: 'none'
        }, {
          label: 'both',
          value: 'both'
        }, {
          label: 'horizontal',
          value: 'horizontal'
        }, {
          label: 'vertical',
          value: 'vertical'
        }]
      }, {
        type: 'switch',
        field: 'autofocus',
        title: '自动获取焦点'
      }];
    }
  };

  var label$x = '计数器';
  var name$z = 'inputNumber';
  var number = {
    icon: 'icon-number',
    label: label$x,
    name: name$z,
    rule: function rule() {
      return {
        type: name$z,
        field: uniqueId(),
        title: label$x,
        info: '',
        props: {}
      };
    },
    props: function props() {
      return [makeRequiredRule(), {
        type: 'inputNumber',
        field: 'min',
        title: '设置计数器允许的最小值'
      }, {
        type: 'inputNumber',
        field: 'max',
        title: '设置计数器允许的最大值'
      }, {
        type: 'inputNumber',
        field: 'step',
        title: '计数器步长'
      }, {
        type: 'switch',
        field: 'stepStrictly',
        title: '是否只能输入 step 的倍数'
      }, {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用计数器'
      }, {
        type: 'switch',
        field: 'controls',
        title: '是否使用控制按钮',
        value: true
      }, {
        type: 'select',
        field: 'controlsPosition',
        title: '控制按钮位置',
        options: [{
          label: 'default',
          value: 'default'
        }, {
          label: 'right',
          value: 'right'
        }]
      }, {
        type: 'input',
        field: 'placeholder',
        title: '输入框默认 placeholder'
      }];
    }
  };

  var label$w = '开关';
  var name$y = 'switch';
  var _switch = {
    icon: 'icon-switch',
    label: label$w,
    name: name$y,
    rule: function rule() {
      return {
        type: name$y,
        field: uniqueId(),
        title: label$w,
        info: '',
        props: {}
      };
    },
    props: function props() {
      return [makeRequiredRule(), {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用'
      }, {
        type: 'inputNumber',
        field: 'width',
        title: '宽度（px）'
      }, {
        type: 'input',
        field: 'activeText',
        title: 'switch 打开时的文字描述'
      }, {
        type: 'input',
        field: 'inactiveText',
        title: 'switch 关闭时的文字描述'
      }, {
        type: 'input',
        field: 'activeValue',
        title: 'switch 打开时的值'
      }, {
        type: 'input',
        field: 'inactiveValue',
        title: 'switch 关闭时的值'
      }, {
        type: 'input',
        field: 'activeColor',
        title: 'switch 打开时的背景色'
      }, {
        type: 'input',
        field: 'inactiveColor',
        title: 'switch 关闭时的背景色'
      }];
    }
  };

  var label$v = '滑块';
  var name$x = 'slider';
  var slider = {
    icon: 'icon-slider',
    label: label$v,
    name: name$x,
    rule: function rule() {
      return {
        type: name$x,
        field: uniqueId(),
        title: label$v,
        info: '',
        props: {}
      };
    },
    props: function props() {
      return [makeRequiredRule(), {
        type: 'inputNumber',
        field: 'min',
        title: '最小值'
      }, {
        type: 'inputNumber',
        field: 'max',
        title: '最大值'
      }, {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用'
      }, {
        type: 'inputNumber',
        field: 'step',
        title: '步长'
      }, {
        type: 'switch',
        field: 'showInput',
        title: '是否显示输入框，仅在非范围选择时有效'
      }, {
        type: 'switch',
        field: 'showInputControls',
        title: '在显示输入框的情况下，是否显示输入框的控制按钮',
        value: true
      }, {
        type: 'switch',
        field: 'showStops',
        title: '是否显示间断点'
      }, {
        type: 'switch',
        field: 'range',
        title: '是否为范围选择'
      }, {
        type: 'switch',
        field: 'vertical',
        title: '是否竖向模式'
      }, {
        type: 'input',
        field: 'height',
        title: 'Slider 高度，竖向模式时必填'
      }];
    }
  };

  var label$u = '时间';
  var name$w = 'timePicker';
  var time = {
    icon: Icon__default$1['default'],
    activeIcon: activeIcon__default$1['default'],
    label: label$u,
    name: name$w,
    rule: function rule() {
      return {
        type: name$w,
        field: uniqueId(),
        title: label$u,
        info: '',
        props: {
          placeholder: ""
        },
        effect: {
          required: false
        }
      };
    },
    props: function props() {
      return [{
        type: 'input-item',
        form: 'props',
        field: 'placeholder',
        title: '框内默认提示'
      }];
    }
  };

  var label$t = '日期';
  var name$v = 'datePicker';
  var date = {
    icon: Icon__default$2['default'],
    activeIcon: activeIcon__default$2['default'],
    label: label$t,
    name: name$v,
    rule: function rule() {
      return {
        type: name$v,
        field: uniqueId(),
        title: label$t,
        info: '',
        props: {
          placeholder: ""
        },
        effect: {
          required: false
        }
      };
    },
    props: function props() {
      return [{
        type: 'input-item',
        form: 'props',
        field: 'placeholder',
        title: '框内默认提示'
      }];
    }
  };

  var label$s = '评分';
  var name$u = 'rate';
  var rate = {
    icon: 'icon-rate',
    label: label$s,
    name: name$u,
    rule: function rule() {
      return {
        type: name$u,
        field: uniqueId(),
        title: label$s,
        info: '',
        props: {}
      };
    },
    props: function props() {
      return [makeRequiredRule(), {
        type: 'inputNumber',
        field: 'max',
        title: '最大分值'
      }, {
        type: 'switch',
        field: 'disabled',
        title: '是否为只读'
      }, {
        type: 'switch',
        field: 'allowHalf',
        title: '是否允许半选'
      }, {
        type: 'input',
        field: 'voidColor',
        title: '未选中 icon 的颜色'
      }, {
        type: 'input',
        field: 'disabledVoidColor',
        title: '只读时未选中 icon 的颜色'
      }, {
        type: 'input',
        field: 'voidIconClass',
        title: '未选中 icon 的类名'
      }, {
        type: 'input',
        field: 'disabledVoidIconClass',
        title: '只读时未选中 icon 的类名'
      }, {
        type: 'switch',
        field: 'showScore',
        title: '是否显示当前分数，show-score 和 show-text 不能同时为真'
      }, {
        type: 'input',
        field: 'textColor',
        title: '辅助文字的颜色'
      }, {
        type: 'input',
        field: 'scoreTemplate',
        title: '分数显示模板'
      }];
    }
  };

  var label$r = '颜色选择器';
  var name$t = 'colorPicker';
  var color = {
    icon: 'icon-color',
    label: label$r,
    name: name$t,
    rule: function rule() {
      return {
        type: name$t,
        field: uniqueId(),
        title: label$r,
        info: '',
        props: {}
      };
    },
    props: function props() {
      return [makeRequiredRule(), {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用'
      }, {
        type: 'switch',
        field: 'showAlpha',
        title: '是否支持透明度选择'
      }, {
        type: 'select',
        field: 'colorFormat',
        title: '颜色的格式',
        options: [{
          label: 'hsl',
          value: 'hsl'
        }, {
          label: 'hsv',
          value: 'hsv'
        }, {
          label: 'hex',
          value: 'hex'
        }, {
          label: 'rgb',
          value: 'rgb'
        }]
      }];
    }
  };

  var label$q = '栅格布局';
  var name$s = 'row';
  var row = {
    icon: 'icon-row',
    label: label$q,
    name: name$s,
    mask: false,
    rule: function rule() {
      return {
        type: 'FcRow',
        props: {},
        children: []
      };
    },
    children: 'col',
    props: function props() {
      return [{
        type: 'inputNumber',
        field: 'gutter',
        title: '栅格间隔'
      }, {
        type: 'switch',
        field: 'type',
        title: 'flex布局模式',
        props: {
          activeValue: 'flex',
          inactiveValue: 'default'
        }
      }, {
        type: 'select',
        field: 'justify',
        title: 'flex 布局下的水平排列方式',
        options: [{
          label: 'start',
          value: 'start'
        }, {
          label: 'end',
          value: 'end'
        }, {
          label: 'center',
          value: 'center'
        }, {
          label: 'space-around',
          value: 'space-around'
        }, {
          label: 'space-between',
          value: 'space-between'
        }]
      }, {
        type: 'select',
        field: 'align',
        title: 'flex 布局下的垂直排列方式',
        options: [{
          label: 'top',
          value: 'top'
        }, {
          label: 'middle',
          value: 'middle'
        }, {
          label: 'bottom',
          value: 'bottom'
        }]
      }];
    }
  };

  var name$r = 'col';
  var col = {
    name: name$r,
    drag: true,
    dragBtn: false,
    inside: true,
    mask: false,
    rule: function rule() {
      return {
        type: name$r,
        props: {
          span: 12
        },
        children: []
      };
    },
    props: function props() {
      return [{
        type: 'slider',
        field: 'span',
        title: '栅格占据的列数',
        value: 12,
        props: {
          min: 0,
          max: 24
        }
      }, {
        type: 'slider',
        field: 'offset',
        title: '栅格左侧的间隔格数',
        props: {
          min: 0,
          max: 24
        }
      }, {
        type: 'slider',
        field: 'push',
        title: '栅格向右移动格数',
        props: {
          min: 0,
          max: 24
        }
      }, {
        type: 'slider',
        field: 'pull',
        title: '栅格向左移动格数',
        props: {
          min: 0,
          max: 24
        }
      }];
    }
  };

  var label$p = '标签页';
  var name$q = 'tab-pane';
  var tabPane = {
    label: label$p,
    name: name$q,
    inside: true,
    drag: true,
    dragBtn: false,
    mask: false,
    rule: function rule() {
      return {
        type: 'el-tab-pane',
        props: {
          label: '新标签页'
        },
        children: []
      };
    },
    props: function props() {
      return [{
        type: 'input',
        field: 'label',
        title: '选项卡标题'
      }, {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用'
      }, {
        type: 'input',
        field: 'name',
        title: '与选项卡绑定值 value 对应的标识符，表示选项卡别名'
      }, {
        type: 'switch',
        field: 'lazy',
        title: '标签是否延迟渲染'
      }];
    }
  };

  var label$o = '分割线';
  var name$p = 'el-divider';
  var divider = {
    icon: 'icon-divider',
    label: label$o,
    name: name$p,
    rule: function rule() {
      return {
        type: name$p,
        props: {},
        wrap: {
          show: false
        },
        "native": false,
        children: ['']
      };
    },
    props: function props() {
      return [{
        type: 'select',
        field: 'direction',
        title: '设置分割线方向',
        options: [{
          label: 'horizontal',
          value: 'horizontal'
        }, {
          label: 'vertical',
          value: 'vertical'
        }]
      }, {
        type: 'input',
        field: 'formCreateChild',
        title: '设置分割线文案'
      }, {
        type: 'select',
        field: 'contentPosition',
        title: '设置分割线文案的位置',
        options: [{
          label: 'left',
          value: 'left'
        }, {
          label: 'right',
          value: 'right'
        }, {
          label: 'center',
          value: 'center'
        }]
      }];
    }
  };

  var label$n = '级联选择器';
  var name$o = 'cascader';
  var cascader = {
    icon: 'icon-cascader',
    label: label$n,
    name: name$o,
    rule: function rule() {
      return {
        type: name$o,
        field: uniqueId(),
        title: label$n,
        info: '',
        effect: {
          fetch: ''
        },
        props: {
          options: [{
            value: 'zhinan',
            label: '指南',
            children: [{
              value: 'shejiyuanze',
              label: '设计原则',
              children: [{
                value: 'yizhi',
                label: '一致'
              }, {
                value: 'fankui',
                label: '反馈'
              }, {
                value: 'xiaolv',
                label: '效率'
              }, {
                value: 'kekong',
                label: '可控'
              }]
            }, {
              value: 'daohang',
              label: '导航',
              children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              }, {
                value: 'dingbudaohang',
                label: '顶部导航'
              }]
            }]
          }, {
            value: 'zujian',
            label: '组件',
            children: [{
              value: 'basic',
              label: 'Basic',
              children: [{
                value: 'layout',
                label: 'Layout 布局'
              }, {
                value: 'color',
                label: 'Color 色彩'
              }, {
                value: 'typography',
                label: 'Typography 字体'
              }, {
                value: 'icon',
                label: 'Icon 图标'
              }, {
                value: 'button',
                label: 'Button 按钮'
              }]
            }, {
              value: 'form',
              label: 'Form',
              children: [{
                value: 'radio',
                label: 'Radio 单选框'
              }, {
                value: 'checkbox',
                label: 'Checkbox 多选框'
              }, {
                value: 'input',
                label: 'Input 输入框'
              }, {
                value: 'input-number',
                label: 'InputNumber 计数器'
              }, {
                value: 'select',
                label: 'Select 选择器'
              }, {
                value: 'cascader',
                label: 'Cascader 级联选择器'
              }, {
                value: 'switch',
                label: 'Switch 开关'
              }, {
                value: 'slider',
                label: 'Slider 滑块'
              }, {
                value: 'time-picker',
                label: 'TimePicker 时间选择器'
              }, {
                value: 'date-picker',
                label: 'DatePicker 日期选择器'
              }, {
                value: 'datetime-picker',
                label: 'DateTimePicker 日期时间选择器'
              }, {
                value: 'upload',
                label: 'Upload 上传'
              }, {
                value: 'rate',
                label: 'Rate 评分'
              }, {
                value: 'form',
                label: 'Form 表单'
              }]
            }]
          }]
        }
      };
    },
    props: function props() {
      return [makeRequiredRule(), makeOptionsRule('props.options', false), {
        type: 'Object',
        field: 'props',
        title: '配置选项',
        props: {
          rule: [{
            type: 'select',
            field: 'expandTrigger',
            title: '次级菜单的展开方式',
            options: [{
              label: 'click',
              value: 'click'
            }, {
              label: 'hover',
              value: 'hover'
            }]
          }, {
            type: 'switch',
            field: 'multiple',
            title: '是否多选'
          }, {
            type: 'switch',
            field: 'checkStrictly',
            title: '是否严格的遵守父子节点不互相关联'
          }, {
            type: 'switch',
            field: 'emitPath',
            title: '在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值',
            value: true
          }, {
            type: 'input',
            field: 'value',
            title: '指定选项的值为选项对象的某个属性值'
          }, {
            type: 'input',
            field: 'label',
            title: '指定选项标签为选项对象的某个属性值'
          }, {
            type: 'input',
            field: 'children',
            title: '指定选项的子选项为选项对象的某个属性值'
          }, {
            type: 'input',
            field: 'disabled',
            title: '指定选项的禁用为选项对象的某个属性值'
          }, {
            type: 'input',
            field: 'leaf',
            title: '指定选项的叶子节点的标志位为选项对象的某个属性值'
          }]
        }
      }, {
        type: 'select',
        field: 'size',
        title: '尺寸',
        options: [{
          label: 'medium',
          value: 'medium'
        }, {
          label: 'small',
          value: 'small'
        }, {
          label: 'mini',
          value: 'mini'
        }]
      }, {
        type: 'input',
        field: 'placeholder',
        title: '输入框占位文本'
      }, {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用'
      }, {
        type: 'switch',
        field: 'clearable',
        title: '是否支持清空选项'
      }, {
        type: 'switch',
        field: 'showAllLevels',
        title: '输入框中是否显示选中值的完整路径',
        value: true
      }, {
        type: 'switch',
        field: 'collapseTags',
        title: '多选模式下是否折叠Tag'
      }, {
        type: 'input',
        field: 'separator',
        title: '选项分隔符'
      }];
    }
  };

  var label$m = '上传';
  var name$n = 'upload';
  var upload = {
    icon: 'icon-upload',
    label: label$m,
    name: name$n,
    rule: function rule() {
      return {
        type: name$n,
        field: uniqueId(),
        title: label$m,
        info: '',
        props: {
          action: '',
          onSuccess: function onSuccess(res, file) {
            file.url = res.data.url;
          }
        }
      };
    },
    props: function props() {
      return [makeRequiredRule(), {
        type: 'select',
        field: 'uploadType',
        title: '上传类型',
        value: 'image',
        options: [{
          label: '图片',
          value: 'image'
        }, {
          label: '文件',
          value: 'file'
        }]
      }, {
        type: 'input',
        field: 'action',
        title: '上传的地址(必填)'
      }, {
        type: 'Struct',
        field: 'headers',
        title: '设置上传的请求头部',
        props: {
          defaultValue: {}
        }
      }, {
        type: 'switch',
        field: 'multiple',
        title: '是否支持多选文件'
      }, {
        type: 'Struct',
        field: 'data',
        title: '上传时附带的额外参数',
        props: {
          defaultValue: {}
        }
      }, {
        type: 'input',
        field: 'name',
        title: '上传的文件字段名'
      }, {
        type: 'switch',
        field: 'withCredentials',
        title: '支持发送 cookie 凭证信息'
      }, {
        type: 'input',
        field: 'accept',
        title: '接受上传的文件类型（thumbnail-mode 模式下此参数无效）'
      }, {
        type: 'switch',
        field: 'autoUpload',
        title: '是否在选取文件后立即进行上传',
        value: true
      }, {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用'
      }, {
        type: 'inputNumber',
        field: 'limit',
        title: '最大允许上传个数'
      }];
    }
  };

  var label$l = '穿梭框';
  var name$m = 'el-transfer';

  var generateData = function generateData(_) {
    var data = [];

    for (var i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: "\u5907\u9009\u9879 ".concat(i),
        disabled: i % 4 === 0
      });
    }

    return data;
  };

  var transfer = {
    icon: 'icon-transfer',
    label: label$l,
    name: name$m,
    rule: function rule() {
      return {
        type: name$m,
        field: uniqueId(),
        title: label$l,
        info: '',
        props: {
          data: generateData()
        }
      };
    },
    props: function props() {
      return [{
        type: 'Struct',
        field: 'data',
        title: 'Transfer 的数据源',
        props: {
          defaultValue: []
        }
      }, {
        type: 'switch',
        field: 'filterable',
        title: '是否可搜索'
      }, {
        type: 'input',
        field: 'filterPlaceholder',
        title: '搜索框占位符'
      }, {
        type: 'select',
        field: 'targetOrder',
        title: '右侧列表元素的排序策略',
        info: '若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前',
        options: [{
          label: 'original',
          value: 'original'
        }, {
          label: 'push',
          value: 'push'
        }, {
          label: 'unshift',
          value: 'unshift'
        }]
      }, {
        type: 'Struct',
        field: 'titles',
        title: '自定义列表标题',
        props: {
          defaultValue: []
        }
      }, {
        type: 'Struct',
        field: 'buttonTexts',
        title: '自定义按钮文案',
        props: {
          defaultValue: []
        }
      }, {
        type: 'Struct',
        field: 'format',
        title: '列表顶部勾选状态文案',
        props: {
          defaultValue: {}
        }
      }, {
        type: 'Struct',
        field: 'props',
        title: '数据源的字段别名',
        props: {
          defaultValue: {}
        }
      }, {
        type: 'Struct',
        field: 'leftDefaultChecked',
        title: '初始状态下左侧列表的已勾选项的 key 数组',
        props: {
          defaultValue: []
        }
      }, {
        type: 'Struct',
        field: 'rightDefaultChecked',
        title: '初始状态下右侧列表的已勾选项的 key 数组',
        props: {
          defaultValue: []
        }
      }];
    }
  };

  var label$k = '树形控件';
  var name$l = 'tree';
  var tree = {
    icon: 'icon-tree',
    label: label$k,
    name: name$l,
    rule: function rule() {
      return {
        type: name$l,
        field: uniqueId(),
        title: label$k,
        info: '',
        effect: {
          fetch: ''
        },
        props: {
          props: {
            label: 'label'
          },
          showCheckbox: true,
          nodeKey: 'id',
          data: [{
            id: 1,
            label: '一级 1',
            children: [{
              id: 4,
              label: '二级 1-1',
              children: [{
                id: 9,
                label: '三级 1-1-1'
              }, {
                id: 10,
                label: '三级 1-1-2'
              }]
            }]
          }, {
            id: 2,
            label: '一级 2',
            children: [{
              id: 5,
              label: '二级 2-1'
            }, {
              id: 6,
              label: '二级 2-2'
            }]
          }, {
            id: 3,
            label: '一级 3',
            children: [{
              id: 7,
              label: '二级 3-1'
            }, {
              id: 8,
              label: '二级 3-2'
            }]
          }]
        }
      };
    },
    props: function props() {
      return [makeRequiredRule(), makeOptionsRule('props.data', false), {
        type: 'input',
        field: 'emptyText',
        title: '内容为空的时候展示的文本'
      }, {
        type: 'Struct',
        field: 'props',
        title: '配置选项，具体看下表',
        props: {
          defaultValue: {}
        }
      }, {
        type: 'switch',
        field: 'renderAfterExpand',
        title: '是否在第一次展开某个树节点后才渲染其子节点',
        value: true
      }, {
        type: 'switch',
        field: 'defaultExpandAll',
        title: '是否默认展开所有节点'
      }, {
        type: 'switch',
        field: 'expandOnClickNode',
        title: '是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。',
        value: true
      }, {
        type: 'switch',
        field: 'checkOnClickNode',
        title: '是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。'
      }, {
        type: 'switch',
        field: 'autoExpandParent',
        title: '展开子节点的时候是否自动展开父节点',
        value: true
      }, {
        type: 'switch',
        field: 'checkStrictly',
        title: '在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false'
      }, {
        type: 'switch',
        field: 'accordion',
        title: '是否每次只打开一个同级树节点展开'
      }, {
        type: 'inputNumber',
        field: 'indent',
        title: '相邻级节点间的水平缩进，单位为像素'
      }, {
        type: 'input',
        field: 'iconClass',
        title: '自定义树节点的图标'
      }, {
        type: 'input',
        field: 'nodeKey',
        title: '每个树节点用来作为唯一标识的属性，整棵树应该是唯一的'
      }];
    }
  };

  var label$j = '提示';
  var name$k = 'el-alert';
  var alert = {
    icon: 'icon-alert',
    label: label$j,
    name: name$k,
    rule: function rule() {
      return {
        type: name$k,
        props: {
          title: '提示',
          description: 'form-create',
          type: 'success',
          effect: 'dark'
        },
        children: []
      };
    },
    props: function props() {
      return [{
        type: 'input',
        field: 'title',
        title: '标题'
      }, {
        type: 'select',
        field: 'type',
        title: '主题',
        options: [{
          label: 'success',
          value: 'success'
        }, {
          label: 'warning',
          value: 'warning'
        }, {
          label: 'info',
          value: 'info'
        }, {
          label: 'error',
          value: 'error'
        }]
      }, {
        type: 'input',
        field: 'description',
        title: '辅助性文字'
      }, {
        type: 'switch',
        field: 'closable',
        title: '是否可关闭',
        value: true
      }, {
        type: 'switch',
        field: 'center',
        title: '文字是否居中',
        value: true
      }, {
        type: 'input',
        field: 'closeText',
        title: '关闭按钮自定义文本'
      }, {
        type: 'switch',
        field: 'showIcon',
        title: '是否显示图标'
      }, {
        type: 'select',
        field: 'effect',
        title: '选择提供的主题',
        options: [{
          label: 'light',
          value: 'light'
        }, {
          label: 'dark',
          value: 'dark'
        }]
      }];
    }
  };

  var label$i = '文字';
  var name$j = 'span';
  var span = {
    icon: 'icon-span',
    label: label$i,
    name: name$j,
    rule: function rule() {
      return {
        type: name$j,
        title: '文字',
        "native": false,
        children: ['这是一段文字']
      };
    },
    props: function props() {
      return [{
        type: 'input',
        field: 'formCreateTitle',
        title: 'title'
      }, {
        type: 'input',
        field: 'formCreateChild',
        title: '内容',
        props: {
          type: 'textarea'
        }
      }];
    }
  };

  var label$h = '间距';
  var name$i = 'div';
  var space = {
    icon: 'icon-space',
    label: label$h,
    name: name$i,
    rule: function rule() {
      return {
        type: name$i,
        wrap: {
          show: false
        },
        "native": false,
        style: {
          width: '100%',
          height: '20px'
        },
        children: []
      };
    },
    props: function props() {
      return [{
        type: 'object',
        field: 'formCreateStyle',
        "native": true,
        props: {
          rule: [{
            type: 'input',
            field: 'height',
            title: 'height'
          }]
        }
      }];
    }
  };

  var label$g = '标签页';
  var name$h = 'tab';
  var tab = {
    icon: 'icon-tab',
    label: label$g,
    name: name$h,
    children: 'tab-pane',
    mask: false,
    rule: function rule() {
      return {
        type: 'el-tabs',
        children: []
      };
    },
    props: function props() {
      return [{
        type: 'select',
        field: 'type',
        title: '风格类型',
        options: [{
          label: 'default',
          value: 'default'
        }, {
          label: 'card',
          value: 'card'
        }, {
          label: 'border-card',
          value: 'border-card'
        }]
      }, {
        type: 'switch',
        field: 'closable',
        title: '标签是否可关闭'
      }, {
        type: 'select',
        field: 'tabPosition',
        title: '选项卡所在位置',
        options: [{
          label: 'top',
          value: 'top'
        }, {
          label: 'right',
          value: 'right'
        }, {
          label: 'left',
          value: 'left'
        }]
      }, {
        type: 'switch',
        field: 'stretch',
        title: '标签的宽度是否自撑开'
      }];
    }
  };

  var label$f = '按钮';
  var name$g = 'el-button';
  var button = {
    icon: 'icon-button',
    label: label$f,
    name: name$g,
    mask: false,
    rule: function rule() {
      return {
        type: name$g,
        props: {},
        children: ['按钮']
      };
    },
    props: function props() {
      return [{
        type: 'input',
        field: 'formCreateChild',
        title: '内容'
      }, {
        type: 'select',
        field: 'size',
        title: '尺寸',
        options: [{
          label: 'medium',
          value: 'medium'
        }, {
          label: 'small',
          value: 'small'
        }, {
          label: 'mini',
          value: 'mini'
        }]
      }, {
        type: 'select',
        field: 'type',
        title: '类型',
        options: [{
          label: 'primary',
          value: 'primary'
        }, {
          label: 'success',
          value: 'success'
        }, {
          label: 'warning',
          value: 'warning'
        }, {
          label: 'danger',
          value: 'danger'
        }, {
          label: 'info',
          value: 'info'
        }, {
          label: 'text',
          value: 'text'
        }]
      }, {
        type: 'switch',
        field: 'plain',
        title: '是否朴素按钮'
      }, {
        type: 'switch',
        field: 'round',
        title: '是否圆角按钮'
      }, {
        type: 'switch',
        field: 'circle',
        title: '是否圆形按钮'
      }, {
        type: 'switch',
        field: 'loading',
        title: '是否加载中状态'
      }, {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用状态'
      }, {
        type: 'input',
        field: 'icon',
        title: '图标类名'
      }];
    }
  };

  var label$e = '富文本框';
  var name$f = 'fc-editor';
  var editor = {
    icon: 'icon-editor',
    label: label$e,
    name: name$f,
    rule: function rule() {
      return {
        type: name$f,
        field: uniqueId(),
        title: label$e,
        info: '',
        props: {}
      };
    },
    props: function props() {
      return [makeRequiredRule(), {
        type: 'switch',
        field: 'disabled',
        title: '是否禁用'
      }];
    }
  };

  var label$d = "姓名";
  var name$d = "name";
  var name$e = {
    icon: Icon__default$3['default'],
    activeIcon: activeIcon__default$3['default'],
    label: label$d,
    name: name$d,
    rule: function rule() {
      return {
        type: 'input',
        field: uniqueId(),
        title: label$d,
        info: "",
        props: {
          placeholder: "",
          wordLimit: {
            maxlength: '',
            minlength: ''
          },
          'prefix-icon': 'el-icon-my-name'
        },
        effect: {
          required: false
        }
      };
    },
    props: function props() {
      return [{
        type: 'input-item',
        form: 'props',
        field: 'placeholder',
        title: '框内默认提示'
      }, {
        type: 'word-limit-item',
        form: 'props',
        field: 'wordLimit',
        title: '字数限制'
      }];
    }
  };

  var label$c = "微信";
  var name$c = "weixin";
  var weixin = {
    icon: Icon__default$4['default'],
    activeIcon: activeIcon__default$4['default'],
    label: label$c,
    name: name$c,
    rule: function rule() {
      return {
        type: 'input',
        field: uniqueId(),
        title: label$c,
        info: "",
        props: {
          placeholder: "",
          wordLimit: {
            maxlength: '',
            minlength: ''
          },
          'prefix-icon': 'el-icon-my-weixin'
        },
        effect: {
          required: false
        }
      };
    },
    props: function props() {
      return [{
        type: 'input-item',
        from: 'props',
        field: 'placeholder',
        title: '框内默认提示'
      }];
    }
  };

  var label$b = "电话";
  var name$b = "phone";
  var phone = {
    icon: Icon__default$5['default'],
    activeIcon: activeIcon__default$5['default'],
    label: label$b,
    name: name$b,
    rule: function rule() {
      return {
        type: 'input',
        field: uniqueId(),
        title: label$b,
        info: "",
        props: {
          placeholder: "请输入电话",
          wordLimit: {
            maxlength: '',
            minlength: ''
          },
          'prefix-icon': 'el-icon-my-phone'
        },
        effect: {
          required: false
        }
      };
    },
    props: function props() {
      return [{
        type: 'input-item',
        from: 'props',
        field: 'placeholder',
        title: '框内默认提示'
      }];
    }
  };

  var label$a = "性别";
  var name$a = "sex";
  var sex = {
    icon: Icon__default$6['default'],
    activeIcon: activeIcon__default$6['default'],
    label: label$a,
    name: name$a,
    rule: function rule() {
      return {
        type: 'radio',
        field: uniqueId(),
        title: label$a,
        info: "",
        effect: {
          required: false,
          fetch: ""
        },
        props: {},
        options: [{
          value: "男",
          label: "男"
        }, {
          value: "女",
          label: "女"
        }]
      };
    },
    props: function props() {
      return [];
    }
  };

  var label$9 = "邮箱";
  var name$9 = "email";
  var email = {
    icon: Icon__default$7['default'],
    activeIcon: activeIcon__default$7['default'],
    label: label$9,
    name: name$9,
    rule: function rule() {
      return {
        type: 'input',
        field: uniqueId(),
        title: label$9,
        info: "",
        props: {
          address: [],
          'prefix-icon': 'el-icon-my-email'
        },
        effect: {
          required: false
        }
      };
    },
    props: function props() {
      return [{
        type: 'input-item',
        from: 'props',
        field: 'placeholder',
        title: '框内默认提示'
      }];
    }
  };

  var label$8 = "地址";
  var name$8 = "address";
  var address = {
    icon: Icon__default$8['default'],
    label: label$8,
    name: name$8,
    mask: false,
    rule: function rule() {
      return {
        type: 'cu-address',
        field: 'address',
        title: label$8,
        value: ['北京', '西城'],
        info: "",
        effect: {
          required: true,
          fetch: ""
        },
        options: [],
        address: [],
        props: {
          address: ['北京', '西城']
        }
      };
    },
    props: function props() {
      return [{
        type: 'address-item',
        form: 'props',
        field: 'address',
        title: '默认值'
      }];
    }
  };

  var label$7 = "企业";
  var name$7 = "business";
  var business = {
    icon: Icon__default$9['default'],
    activeIcon: activeIcon__default$8['default'],
    label: label$7,
    name: name$7,
    rule: function rule() {
      return {
        type: 'input',
        field: uniqueId(),
        title: label$7,
        info: "",
        props: {
          placeholder: "",
          'prefix-icon': 'el-icon-my-business'
        },
        effect: {
          required: false
        }
      };
    },
    props: function props() {
      return [{
        type: 'input-item',
        from: 'props',
        field: 'placeholder',
        title: '框内默认提示'
      }];
    }
  };

  var label$6 = "单行文字";
  var name$6 = "text";
  var text = {
    icon: Icon__default$a['default'],
    activeIcon: activeIcon__default$9['default'],
    label: label$6,
    name: name$6,
    rule: function rule() {
      return {
        type: 'input',
        field: uniqueId(),
        title: '未命名',
        info: "",
        props: {
          placeholder: "",
          wordLimit: {
            maxlength: '',
            minlength: ''
          }
        },
        effect: {
          required: false
        }
      };
    },
    props: function props() {
      return [{
        type: 'input-item',
        form: 'props',
        field: 'placeholder',
        title: '框内默认提示'
      }, {
        type: 'word-limit-item',
        form: 'props',
        field: 'wordLimit',
        title: '字数限制'
      }];
    }
  };

  var label$5 = "多行文字";
  var name$5 = "textarea";
  var textarea = {
    icon: Icon__default$b['default'],
    activeIcon: activeIcon__default$a['default'],
    label: label$5,
    name: name$5,
    rule: function rule() {
      return {
        type: 'input',
        field: uniqueId(),
        title: '未命名',
        info: "",
        props: {
          type: 'textarea',
          rows: 4,
          placeholder: "请输入",
          wordLimit: {
            maxlength: '',
            minlength: ''
          }
        },
        effect: {
          required: false
        }
      };
    },
    props: function props() {
      return [{
        type: 'input-item',
        form: 'props',
        field: 'placeholder',
        title: '框内默认提示'
      }, {
        type: 'word-limit-item',
        form: 'props',
        field: 'wordLimit',
        title: '字数限制'
      }];
    }
  };

  var label$4 = "下拉单选";
  var name$4 = "select";
  var select = {
    icon: Icon__default$c['default'],
    activeIcon: activeIcon__default$b['default'],
    label: label$4,
    name: name$4,
    rule: function rule() {
      return {
        type: name$4,
        field: uniqueId(),
        title: '未命名',
        info: "",
        effect: {
          fetch: "",
          required: false
        },
        props: {
          clearable: true
        },
        options: [{
          value: "选项1",
          label: "选项1"
        }, {
          value: "选项2",
          label: "选项2"
        }, {
          value: "选项3",
          label: "选项3"
        }]
      };
    },
    props: function props() {
      return [{
        type: 'options-item',
        form: 'base',
        field: 'options',
        title: '选项'
      }];
    }
  };

  var label$3 = "下拉多选";
  var name$3 = "selectMore";
  var selectMore = {
    icon: Icon__default$d['default'],
    activeIcon: activeIcon__default$c['default'],
    label: label$3,
    name: name$3,
    rule: function rule() {
      return {
        type: 'select',
        field: uniqueId(),
        title: '未命名',
        info: "",
        effect: {
          fetch: "",
          required: false
        },
        props: {
          clearable: true,
          multiple: true
        },
        options: [{
          value: "选项1",
          label: "选项1"
        }, {
          value: "选项2",
          label: "选项2"
        }, {
          value: "选项3",
          label: "选项3"
        }]
      };
    },
    props: function props() {
      return [{
        type: 'options-item',
        form: 'base',
        field: 'options',
        title: '选项'
      }];
    }
  };

  var label$2 = "多项选择";
  var name$2 = "checkbox";
  var checkbox = {
    icon: Icon__default$e['default'],
    activeIcon: activeIcon__default$d['default'],
    label: label$2,
    name: name$2,
    rule: function rule() {
      return {
        type: 'cu-checkbox',
        field: uniqueId(),
        title: label$2,
        info: "",
        effect: {
          fetch: "",
          required: false
        },
        props: {
          options: [{
            value: "选项1",
            label: "选项1"
          }, {
            value: "选项2",
            label: "选项2"
          }],
          value: ''
        }
      };
    },
    props: function props() {
      return [{
        type: 'options-item',
        form: 'props',
        field: 'options',
        title: '选项'
      }];
    }
  };

  var label$1 = "图片";
  var name$1 = "image";
  var image = {
    icon: Icon__default$f['default'],
    activeIcon: activeIcon__default$e['default'],
    label: label$1,
    name: name$1,
    rule: function rule() {
      return {
        type: 'upload-image',
        field: uniqueId(),
        title: label$1,
        info: "",
        effect: {
          required: false
        },
        props: {
          src: 'https://oss-huadong1.oss-cn-hangzhou.aliyuncs.com/wechatapp/customer_service/admin/2022/08/03/799235908_2022_08_03_16_29_37nvl3e.jpg'
        }
      };
    },
    props: function props() {
      return [{
        type: 'change-image',
        form: 'props',
        field: 'src',
        title: '图片'
      }];
    }
  };

  var label = "上传图片";
  var name = "uploadImg";
  var uploadImg = {
    icon: Icon__default$g['default'],
    label: label,
    name: name,
    rule: function rule() {
      return {
        type: 'cu-upload-img',
        field: uniqueId(),
        title: label,
        info: "",
        value: [],
        props: {
          limits: 1
        },
        effect: {
          required: false
        }
      };
    },
    props: function props() {
      return [{
        type: 'limit-item',
        from: 'props',
        field: 'limits',
        title: '图片数量限制'
      }];
    }
  };

  var _ruleList;
  var ruleList = (_ruleList = {}, _defineProperty$1(_ruleList, radio.name, radio), _defineProperty$1(_ruleList, input.name, input), _defineProperty$1(_ruleList, number.name, number), _defineProperty$1(_ruleList, _switch.name, _switch), _defineProperty$1(_ruleList, slider.name, slider), _defineProperty$1(_ruleList, time.name, time), _defineProperty$1(_ruleList, date.name, date), _defineProperty$1(_ruleList, rate.name, rate), _defineProperty$1(_ruleList, color.name, color), _defineProperty$1(_ruleList, row.name, row), _defineProperty$1(_ruleList, col.name, col), _defineProperty$1(_ruleList, tab.name, tab), _defineProperty$1(_ruleList, tabPane.name, tabPane), _defineProperty$1(_ruleList, divider.name, divider), _defineProperty$1(_ruleList, cascader.name, cascader), _defineProperty$1(_ruleList, upload.name, upload), _defineProperty$1(_ruleList, transfer.name, transfer), _defineProperty$1(_ruleList, tree.name, tree), _defineProperty$1(_ruleList, alert.name, alert), _defineProperty$1(_ruleList, span.name, span), _defineProperty$1(_ruleList, space.name, space), _defineProperty$1(_ruleList, button.name, button), _defineProperty$1(_ruleList, editor.name, editor), _defineProperty$1(_ruleList, name$e.name, name$e), _defineProperty$1(_ruleList, weixin.name, weixin), _defineProperty$1(_ruleList, phone.name, phone), _defineProperty$1(_ruleList, sex.name, sex), _defineProperty$1(_ruleList, email.name, email), _defineProperty$1(_ruleList, address.name, address), _defineProperty$1(_ruleList, business.name, business), _defineProperty$1(_ruleList, text.name, text), _defineProperty$1(_ruleList, textarea.name, textarea), _defineProperty$1(_ruleList, select.name, select), _defineProperty$1(_ruleList, selectMore.name, selectMore), _defineProperty$1(_ruleList, checkbox.name, checkbox), _defineProperty$1(_ruleList, image.name, image), _defineProperty$1(_ruleList, uploadImg.name, uploadImg), _ruleList);

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function getAugmentedNamespace(n) {
  	if (n.__esModule) return n;
  	var a = Object.defineProperty({}, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  function createCommonjsModule(fn) {
    var module = { exports: {} };
  	return fn(module, module.exports), module.exports;
  }

  /**!
   * Sortable 1.10.2
   * @author	RubaXa   <trash@rubaxa.org>
   * @author	owenm    <owen23355@gmail.com>
   * @license MIT
   */
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      var arguments$1 = arguments;

      for (var i = 1; i < arguments.length; i++) {
        var source = arguments$1[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectSpread(target) {
    var arguments$1 = arguments;

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments$1[i] != null ? arguments$1[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) { return {}; }
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) { continue; }
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) { return {}; }

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) { continue; }
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) { continue; }
        target[key] = source[key];
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; }

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") { return Array.from(iter); }
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var version = "1.10.2";

  function userAgent(pattern) {
    if (typeof window !== 'undefined' && window.navigator) {
      return !!
      /*@__PURE__*/
      navigator.userAgent.match(pattern);
    }
  }

  var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
  var Edge = userAgent(/Edge/i);
  var FireFox = userAgent(/firefox/i);
  var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
  var IOS = userAgent(/iP(ad|od|hone)/i);
  var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

  var captureMode = {
    capture: false,
    passive: false
  };

  function on(el, event, fn) {
    el.addEventListener(event, fn, !IE11OrLess && captureMode);
  }

  function off(el, event, fn) {
    el.removeEventListener(event, fn, !IE11OrLess && captureMode);
  }

  function matches(
  /**HTMLElement*/
  el,
  /**String*/
  selector) {
    if (!selector) { return; }
    selector[0] === '>' && (selector = selector.substring(1));

    if (el) {
      try {
        if (el.matches) {
          return el.matches(selector);
        } else if (el.msMatchesSelector) {
          return el.msMatchesSelector(selector);
        } else if (el.webkitMatchesSelector) {
          return el.webkitMatchesSelector(selector);
        }
      } catch (_) {
        return false;
      }
    }

    return false;
  }

  function getParentOrHost(el) {
    return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
  }

  function closest(
  /**HTMLElement*/
  el,
  /**String*/
  selector,
  /**HTMLElement*/
  ctx, includeCTX) {
    if (el) {
      ctx = ctx || document;

      do {
        if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
          return el;
        }

        if (el === ctx) { break; }
        /* jshint boss:true */
      } while (el = getParentOrHost(el));
    }

    return null;
  }

  var R_SPACE = /\s+/g;

  function toggleClass(el, name, state) {
    if (el && name) {
      if (el.classList) {
        el.classList[state ? 'add' : 'remove'](name);
      } else {
        var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
        el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
      }
    }
  }

  function css(el, prop, val) {
    var style = el && el.style;

    if (style) {
      if (val === void 0) {
        if (document.defaultView && document.defaultView.getComputedStyle) {
          val = document.defaultView.getComputedStyle(el, '');
        } else if (el.currentStyle) {
          val = el.currentStyle;
        }

        return prop === void 0 ? val : val[prop];
      } else {
        if (!(prop in style) && prop.indexOf('webkit') === -1) {
          prop = '-webkit-' + prop;
        }

        style[prop] = val + (typeof val === 'string' ? '' : 'px');
      }
    }
  }

  function matrix(el, selfOnly) {
    var appliedTransforms = '';

    if (typeof el === 'string') {
      appliedTransforms = el;
    } else {
      do {
        var transform = css(el, 'transform');

        if (transform && transform !== 'none') {
          appliedTransforms = transform + ' ' + appliedTransforms;
        }
        /* jshint boss:true */

      } while (!selfOnly && (el = el.parentNode));
    }

    var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    /*jshint -W056 */

    return matrixFn && new matrixFn(appliedTransforms);
  }

  function find(ctx, tagName, iterator) {
    if (ctx) {
      var list = ctx.getElementsByTagName(tagName),
          i = 0,
          n = list.length;

      if (iterator) {
        for (; i < n; i++) {
          iterator(list[i], i);
        }
      }

      return list;
    }

    return [];
  }

  function getWindowScrollingElement() {
    var scrollingElement = document.scrollingElement;

    if (scrollingElement) {
      return scrollingElement;
    } else {
      return document.documentElement;
    }
  }
  /**
   * Returns the "bounding client rect" of given element
   * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
   * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
   * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
   * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
   * @param  {[HTMLElement]} container              The parent the element will be placed in
   * @return {Object}                               The boundingClientRect of el, with specified adjustments
   */


  function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
    if (!el.getBoundingClientRect && el !== window) { return; }
    var elRect, top, left, bottom, right, height, width;

    if (el !== window && el !== getWindowScrollingElement()) {
      elRect = el.getBoundingClientRect();
      top = elRect.top;
      left = elRect.left;
      bottom = elRect.bottom;
      right = elRect.right;
      height = elRect.height;
      width = elRect.width;
    } else {
      top = 0;
      left = 0;
      bottom = window.innerHeight;
      right = window.innerWidth;
      height = window.innerHeight;
      width = window.innerWidth;
    }

    if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
      // Adjust for translate()
      container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
      // Not needed on <= IE11

      if (!IE11OrLess) {
        do {
          if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
            var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

            top -= containerRect.top + parseInt(css(container, 'border-top-width'));
            left -= containerRect.left + parseInt(css(container, 'border-left-width'));
            bottom = top + elRect.height;
            right = left + elRect.width;
            break;
          }
          /* jshint boss:true */

        } while (container = container.parentNode);
      }
    }

    if (undoScale && el !== window) {
      // Adjust for scale()
      var elMatrix = matrix(container || el),
          scaleX = elMatrix && elMatrix.a,
          scaleY = elMatrix && elMatrix.d;

      if (elMatrix) {
        top /= scaleY;
        left /= scaleX;
        width /= scaleX;
        height /= scaleY;
        bottom = top + height;
        right = left + width;
      }
    }

    return {
      top: top,
      left: left,
      bottom: bottom,
      right: right,
      width: width,
      height: height
    };
  }
  /**
   * Checks if a side of an element is scrolled past a side of its parents
   * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
   * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
   * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
   * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
   */


  function isScrolledPast(el, elSide, parentSide) {
    var parent = getParentAutoScrollElement(el, true),
        elSideVal = getRect(el)[elSide];
    /* jshint boss:true */

    while (parent) {
      var parentSideVal = getRect(parent)[parentSide],
          visible = void 0;

      if (parentSide === 'top' || parentSide === 'left') {
        visible = elSideVal >= parentSideVal;
      } else {
        visible = elSideVal <= parentSideVal;
      }

      if (!visible) { return parent; }
      if (parent === getWindowScrollingElement()) { break; }
      parent = getParentAutoScrollElement(parent, false);
    }

    return false;
  }
  /**
   * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
   * and non-draggable elements
   * @param  {HTMLElement} el       The parent element
   * @param  {Number} childNum      The index of the child
   * @param  {Object} options       Parent Sortable's options
   * @return {HTMLElement}          The child at index childNum, or null if not found
   */


  function getChild(el, childNum, options) {
    var currentChild = 0,
        i = 0,
        children = el.children;

    while (i < children.length) {
      if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
        if (currentChild === childNum) {
          return children[i];
        }

        currentChild++;
      }

      i++;
    }

    return null;
  }
  /**
   * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
   * @param  {HTMLElement} el       Parent element
   * @param  {selector} selector    Any other elements that should be ignored
   * @return {HTMLElement}          The last child, ignoring ghostEl
   */


  function lastChild(el, selector) {
    var last = el.lastElementChild;

    while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
      last = last.previousElementSibling;
    }

    return last || null;
  }
  /**
   * Returns the index of an element within its parent for a selected set of
   * elements
   * @param  {HTMLElement} el
   * @param  {selector} selector
   * @return {number}
   */


  function index(el, selector) {
    var index = 0;

    if (!el || !el.parentNode) {
      return -1;
    }
    /* jshint boss:true */


    while (el = el.previousElementSibling) {
      if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
        index++;
      }
    }

    return index;
  }
  /**
   * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
   * The value is returned in real pixels.
   * @param  {HTMLElement} el
   * @return {Array}             Offsets in the format of [left, top]
   */


  function getRelativeScrollOffset(el) {
    var offsetLeft = 0,
        offsetTop = 0,
        winScroller = getWindowScrollingElement();

    if (el) {
      do {
        var elMatrix = matrix(el),
            scaleX = elMatrix.a,
            scaleY = elMatrix.d;
        offsetLeft += el.scrollLeft * scaleX;
        offsetTop += el.scrollTop * scaleY;
      } while (el !== winScroller && (el = el.parentNode));
    }

    return [offsetLeft, offsetTop];
  }
  /**
   * Returns the index of the object within the given array
   * @param  {Array} arr   Array that may or may not hold the object
   * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
   * @return {Number}      The index of the object in the array, or -1
   */


  function indexOfObject(arr, obj) {
    for (var i in arr) {
      if (!arr.hasOwnProperty(i)) { continue; }

      for (var key in obj) {
        if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) { return Number(i); }
      }
    }

    return -1;
  }

  function getParentAutoScrollElement(el, includeSelf) {
    // skip to window
    if (!el || !el.getBoundingClientRect) { return getWindowScrollingElement(); }
    var elem = el;
    var gotSelf = false;

    do {
      // we don't need to get elem css if it isn't even overflowing in the first place (performance)
      if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
        var elemCSS = css(elem);

        if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
          if (!elem.getBoundingClientRect || elem === document.body) { return getWindowScrollingElement(); }
          if (gotSelf || includeSelf) { return elem; }
          gotSelf = true;
        }
      }
      /* jshint boss:true */

    } while (elem = elem.parentNode);

    return getWindowScrollingElement();
  }

  function extend(dst, src) {
    if (dst && src) {
      for (var key in src) {
        if (src.hasOwnProperty(key)) {
          dst[key] = src[key];
        }
      }
    }

    return dst;
  }

  function isRectEqual(rect1, rect2) {
    return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
  }

  var _throttleTimeout;

  function throttle(callback, ms) {
    return function () {
      if (!_throttleTimeout) {
        var args = arguments,
            _this = this;

        if (args.length === 1) {
          callback.call(_this, args[0]);
        } else {
          callback.apply(_this, args);
        }

        _throttleTimeout = setTimeout(function () {
          _throttleTimeout = void 0;
        }, ms);
      }
    };
  }

  function cancelThrottle() {
    clearTimeout(_throttleTimeout);
    _throttleTimeout = void 0;
  }

  function scrollBy(el, x, y) {
    el.scrollLeft += x;
    el.scrollTop += y;
  }

  function clone(el) {
    var Polymer = window.Polymer;
    var $ = window.jQuery || window.Zepto;

    if (Polymer && Polymer.dom) {
      return Polymer.dom(el).cloneNode(true);
    } else if ($) {
      return $(el).clone(true)[0];
    } else {
      return el.cloneNode(true);
    }
  }

  function setRect(el, rect) {
    css(el, 'position', 'absolute');
    css(el, 'top', rect.top);
    css(el, 'left', rect.left);
    css(el, 'width', rect.width);
    css(el, 'height', rect.height);
  }

  function unsetRect(el) {
    css(el, 'position', '');
    css(el, 'top', '');
    css(el, 'left', '');
    css(el, 'width', '');
    css(el, 'height', '');
  }

  var expando = 'Sortable' + new Date().getTime();

  function AnimationStateManager() {
    var animationStates = [],
        animationCallbackId;
    return {
      captureAnimationState: function captureAnimationState() {
        animationStates = [];
        if (!this.options.animation) { return; }
        var children = [].slice.call(this.el.children);
        children.forEach(function (child) {
          if (css(child, 'display') === 'none' || child === Sortable.ghost) { return; }
          animationStates.push({
            target: child,
            rect: getRect(child)
          });

          var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


          if (child.thisAnimationDuration) {
            var childMatrix = matrix(child, true);

            if (childMatrix) {
              fromRect.top -= childMatrix.f;
              fromRect.left -= childMatrix.e;
            }
          }

          child.fromRect = fromRect;
        });
      },
      addAnimationState: function addAnimationState(state) {
        animationStates.push(state);
      },
      removeAnimationState: function removeAnimationState(target) {
        animationStates.splice(indexOfObject(animationStates, {
          target: target
        }), 1);
      },
      animateAll: function animateAll(callback) {
        var _this = this;

        if (!this.options.animation) {
          clearTimeout(animationCallbackId);
          if (typeof callback === 'function') { callback(); }
          return;
        }

        var animating = false,
            animationTime = 0;
        animationStates.forEach(function (state) {
          var time = 0,
              target = state.target,
              fromRect = target.fromRect,
              toRect = getRect(target),
              prevFromRect = target.prevFromRect,
              prevToRect = target.prevToRect,
              animatingRect = state.rect,
              targetMatrix = matrix(target, true);

          if (targetMatrix) {
            // Compensate for current animation
            toRect.top -= targetMatrix.f;
            toRect.left -= targetMatrix.e;
          }

          target.toRect = toRect;

          if (target.thisAnimationDuration) {
            // Could also check if animatingRect is between fromRect and toRect
            if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
            (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
              // If returning to same place as started from animation and on same axis
              time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
            }
          } // if fromRect != toRect: animate


          if (!isRectEqual(toRect, fromRect)) {
            target.prevFromRect = fromRect;
            target.prevToRect = toRect;

            if (!time) {
              time = _this.options.animation;
            }

            _this.animate(target, animatingRect, toRect, time);
          }

          if (time) {
            animating = true;
            animationTime = Math.max(animationTime, time);
            clearTimeout(target.animationResetTimer);
            target.animationResetTimer = setTimeout(function () {
              target.animationTime = 0;
              target.prevFromRect = null;
              target.fromRect = null;
              target.prevToRect = null;
              target.thisAnimationDuration = null;
            }, time);
            target.thisAnimationDuration = time;
          }
        });
        clearTimeout(animationCallbackId);

        if (!animating) {
          if (typeof callback === 'function') { callback(); }
        } else {
          animationCallbackId = setTimeout(function () {
            if (typeof callback === 'function') { callback(); }
          }, animationTime);
        }

        animationStates = [];
      },
      animate: function animate(target, currentRect, toRect, duration) {
        if (duration) {
          css(target, 'transition', '');
          css(target, 'transform', '');
          var elMatrix = matrix(this.el),
              scaleX = elMatrix && elMatrix.a,
              scaleY = elMatrix && elMatrix.d,
              translateX = (currentRect.left - toRect.left) / (scaleX || 1),
              translateY = (currentRect.top - toRect.top) / (scaleY || 1);
          target.animatingX = !!translateX;
          target.animatingY = !!translateY;
          css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
          repaint(target); // repaint

          css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
          css(target, 'transform', 'translate3d(0,0,0)');
          typeof target.animated === 'number' && clearTimeout(target.animated);
          target.animated = setTimeout(function () {
            css(target, 'transition', '');
            css(target, 'transform', '');
            target.animated = false;
            target.animatingX = false;
            target.animatingY = false;
          }, duration);
        }
      }
    };
  }

  function repaint(target) {
    return target.offsetWidth;
  }

  function calculateRealTime(animatingRect, fromRect, toRect, options) {
    return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
  }

  var plugins = [];
  var defaults = {
    initializeByDefault: true
  };
  var PluginManager = {
    mount: function mount(plugin) {
      // Set default static properties
      for (var option in defaults) {
        if (defaults.hasOwnProperty(option) && !(option in plugin)) {
          plugin[option] = defaults[option];
        }
      }

      plugins.push(plugin);
    },
    pluginEvent: function pluginEvent(eventName, sortable, evt) {
      var _this = this;

      this.eventCanceled = false;

      evt.cancel = function () {
        _this.eventCanceled = true;
      };

      var eventNameGlobal = eventName + 'Global';
      plugins.forEach(function (plugin) {
        if (!sortable[plugin.pluginName]) { return; } // Fire global events if it exists in this sortable

        if (sortable[plugin.pluginName][eventNameGlobal]) {
          sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
            sortable: sortable
          }, evt));
        } // Only fire plugin event if plugin is enabled in this sortable,
        // and plugin has event defined


        if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
          sortable[plugin.pluginName][eventName](_objectSpread({
            sortable: sortable
          }, evt));
        }
      });
    },
    initializePlugins: function initializePlugins(sortable, el, defaults, options) {
      plugins.forEach(function (plugin) {
        var pluginName = plugin.pluginName;
        if (!sortable.options[pluginName] && !plugin.initializeByDefault) { return; }
        var initialized = new plugin(sortable, el, sortable.options);
        initialized.sortable = sortable;
        initialized.options = sortable.options;
        sortable[pluginName] = initialized; // Add default options from plugin

        _extends(defaults, initialized.defaults);
      });

      for (var option in sortable.options) {
        if (!sortable.options.hasOwnProperty(option)) { continue; }
        var modified = this.modifyOption(sortable, option, sortable.options[option]);

        if (typeof modified !== 'undefined') {
          sortable.options[option] = modified;
        }
      }
    },
    getEventProperties: function getEventProperties(name, sortable) {
      var eventProperties = {};
      plugins.forEach(function (plugin) {
        if (typeof plugin.eventProperties !== 'function') { return; }

        _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
      });
      return eventProperties;
    },
    modifyOption: function modifyOption(sortable, name, value) {
      var modifiedValue;
      plugins.forEach(function (plugin) {
        // Plugin must exist on the Sortable
        if (!sortable[plugin.pluginName]) { return; } // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

        if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
          modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
        }
      });
      return modifiedValue;
    }
  };

  function dispatchEvent(_ref) {
    var sortable = _ref.sortable,
        rootEl = _ref.rootEl,
        name = _ref.name,
        targetEl = _ref.targetEl,
        cloneEl = _ref.cloneEl,
        toEl = _ref.toEl,
        fromEl = _ref.fromEl,
        oldIndex = _ref.oldIndex,
        newIndex = _ref.newIndex,
        oldDraggableIndex = _ref.oldDraggableIndex,
        newDraggableIndex = _ref.newDraggableIndex,
        originalEvent = _ref.originalEvent,
        putSortable = _ref.putSortable,
        extraEventProperties = _ref.extraEventProperties;
    sortable = sortable || rootEl && rootEl[expando];
    if (!sortable) { return; }
    var evt,
        options = sortable.options,
        onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

    if (window.CustomEvent && !IE11OrLess && !Edge) {
      evt = new CustomEvent(name, {
        bubbles: true,
        cancelable: true
      });
    } else {
      evt = document.createEvent('Event');
      evt.initEvent(name, true, true);
    }

    evt.to = toEl || rootEl;
    evt.from = fromEl || rootEl;
    evt.item = targetEl || rootEl;
    evt.clone = cloneEl;
    evt.oldIndex = oldIndex;
    evt.newIndex = newIndex;
    evt.oldDraggableIndex = oldDraggableIndex;
    evt.newDraggableIndex = newDraggableIndex;
    evt.originalEvent = originalEvent;
    evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

    var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

    for (var option in allEventProperties) {
      evt[option] = allEventProperties[option];
    }

    if (rootEl) {
      rootEl.dispatchEvent(evt);
    }

    if (options[onName]) {
      options[onName].call(sortable, evt);
    }
  }

  var pluginEvent = function pluginEvent(eventName, sortable) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        originalEvent = _ref.evt,
        data = _objectWithoutProperties(_ref, ["evt"]);

    PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
      dragEl: dragEl,
      parentEl: parentEl,
      ghostEl: ghostEl,
      rootEl: rootEl,
      nextEl: nextEl,
      lastDownEl: lastDownEl,
      cloneEl: cloneEl,
      cloneHidden: cloneHidden,
      dragStarted: moved,
      putSortable: putSortable,
      activeSortable: Sortable.active,
      originalEvent: originalEvent,
      oldIndex: oldIndex,
      oldDraggableIndex: oldDraggableIndex,
      newIndex: newIndex,
      newDraggableIndex: newDraggableIndex,
      hideGhostForTarget: _hideGhostForTarget,
      unhideGhostForTarget: _unhideGhostForTarget,
      cloneNowHidden: function cloneNowHidden() {
        cloneHidden = true;
      },
      cloneNowShown: function cloneNowShown() {
        cloneHidden = false;
      },
      dispatchSortableEvent: function dispatchSortableEvent(name) {
        _dispatchEvent({
          sortable: sortable,
          name: name,
          originalEvent: originalEvent
        });
      }
    }, data));
  };

  function _dispatchEvent(info) {
    dispatchEvent(_objectSpread({
      putSortable: putSortable,
      cloneEl: cloneEl,
      targetEl: dragEl,
      rootEl: rootEl,
      oldIndex: oldIndex,
      oldDraggableIndex: oldDraggableIndex,
      newIndex: newIndex,
      newDraggableIndex: newDraggableIndex
    }, info));
  }

  var dragEl,
      parentEl,
      ghostEl,
      rootEl,
      nextEl,
      lastDownEl,
      cloneEl,
      cloneHidden,
      oldIndex,
      newIndex,
      oldDraggableIndex,
      newDraggableIndex,
      activeGroup,
      putSortable,
      awaitingDragStarted = false,
      ignoreNextClick = false,
      sortables = [],
      tapEvt,
      touchEvt,
      lastDx,
      lastDy,
      tapDistanceLeft,
      tapDistanceTop,
      moved,
      lastTarget,
      lastDirection,
      pastFirstInvertThresh = false,
      isCircumstantialInvert = false,
      targetMoveDistance,
      // For positioning ghost absolutely
  ghostRelativeParent,
      ghostRelativeParentInitialScroll = [],
      // (left, top)
  _silent = false,
      savedInputChecked = [];
  /** @const */

  var documentExists = typeof document !== 'undefined',
      PositionGhostAbsolutely = IOS,
      CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
      // This will not pass for IE9, because IE9 DnD only works on anchors
  supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
      supportCssPointerEvents = function () {
    if (!documentExists) { return; } // false when <= IE11

    if (IE11OrLess) {
      return false;
    }

    var el = document.createElement('x');
    el.style.cssText = 'pointer-events:auto';
    return el.style.pointerEvents === 'auto';
  }(),
      _detectDirection = function _detectDirection(el, options) {
    var elCSS = css(el),
        elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
        child1 = getChild(el, 0, options),
        child2 = getChild(el, 1, options),
        firstChildCSS = child1 && css(child1),
        secondChildCSS = child2 && css(child2),
        firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
        secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

    if (elCSS.display === 'flex') {
      return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
    }

    if (elCSS.display === 'grid') {
      return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
    }

    if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
      var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
      return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
    }

    return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
  },
      _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
    var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
        dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
        dragElOppLength = vertical ? dragRect.width : dragRect.height,
        targetS1Opp = vertical ? targetRect.left : targetRect.top,
        targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
        targetOppLength = vertical ? targetRect.width : targetRect.height;
    return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
  },

  /**
   * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
   * @param  {Number} x      X position
   * @param  {Number} y      Y position
   * @return {HTMLElement}   Element of the first found nearest Sortable
   */
  _detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
    var ret;
    sortables.some(function (sortable) {
      if (lastChild(sortable)) { return; }
      var rect = getRect(sortable),
          threshold = sortable[expando].options.emptyInsertThreshold,
          insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
          insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

      if (threshold && insideHorizontally && insideVertically) {
        return ret = sortable;
      }
    });
    return ret;
  },
      _prepareGroup = function _prepareGroup(options) {
    function toFn(value, pull) {
      return function (to, from, dragEl, evt) {
        var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

        if (value == null && (pull || sameGroup)) {
          // Default pull value
          // Default pull and put value if same group
          return true;
        } else if (value == null || value === false) {
          return false;
        } else if (pull && value === 'clone') {
          return value;
        } else if (typeof value === 'function') {
          return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
        } else {
          var otherGroup = (pull ? to : from).options.group.name;
          return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
        }
      };
    }

    var group = {};
    var originalGroup = options.group;

    if (!originalGroup || _typeof(originalGroup) != 'object') {
      originalGroup = {
        name: originalGroup
      };
    }

    group.name = originalGroup.name;
    group.checkPull = toFn(originalGroup.pull, true);
    group.checkPut = toFn(originalGroup.put);
    group.revertClone = originalGroup.revertClone;
    options.group = group;
  },
      _hideGhostForTarget = function _hideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', 'none');
    }
  },
      _unhideGhostForTarget = function _unhideGhostForTarget() {
    if (!supportCssPointerEvents && ghostEl) {
      css(ghostEl, 'display', '');
    }
  }; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


  if (documentExists) {
    document.addEventListener('click', function (evt) {
      if (ignoreNextClick) {
        evt.preventDefault();
        evt.stopPropagation && evt.stopPropagation();
        evt.stopImmediatePropagation && evt.stopImmediatePropagation();
        ignoreNextClick = false;
        return false;
      }
    }, true);
  }

  var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
    if (dragEl) {
      evt = evt.touches ? evt.touches[0] : evt;

      var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

      if (nearest) {
        // Create imitation event
        var event = {};

        for (var i in evt) {
          if (evt.hasOwnProperty(i)) {
            event[i] = evt[i];
          }
        }

        event.target = event.rootEl = nearest;
        event.preventDefault = void 0;
        event.stopPropagation = void 0;

        nearest[expando]._onDragOver(event);
      }
    }
  };

  var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
    if (dragEl) {
      dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
    }
  };
  /**
   * @class  Sortable
   * @param  {HTMLElement}  el
   * @param  {Object}       [options]
   */


  function Sortable(el, options) {
    if (!(el && el.nodeType && el.nodeType === 1)) {
      throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
    }

    this.el = el; // root element

    this.options = options = _extends({}, options); // Export instance

    el[expando] = this;
    var defaults = {
      group: null,
      sort: true,
      disabled: false,
      store: null,
      handle: null,
      draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
      swapThreshold: 1,
      // percentage; 0 <= x <= 1
      invertSwap: false,
      // invert always
      invertedSwapThreshold: null,
      // will be set to same as swapThreshold if default
      removeCloneOnHide: true,
      direction: function direction() {
        return _detectDirection(el, this.options);
      },
      ghostClass: 'sortable-ghost',
      chosenClass: 'sortable-chosen',
      dragClass: 'sortable-drag',
      ignore: 'a, img',
      filter: null,
      preventOnFilter: true,
      animation: 0,
      easing: null,
      setData: function setData(dataTransfer, dragEl) {
        dataTransfer.setData('Text', dragEl.textContent);
      },
      dropBubble: false,
      dragoverBubble: false,
      dataIdAttr: 'data-id',
      delay: 0,
      delayOnTouchOnly: false,
      touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
      forceFallback: false,
      fallbackClass: 'sortable-fallback',
      fallbackOnBody: false,
      fallbackTolerance: 0,
      fallbackOffset: {
        x: 0,
        y: 0
      },
      supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
      emptyInsertThreshold: 5
    };
    PluginManager.initializePlugins(this, el, defaults); // Set default options

    for (var name in defaults) {
      !(name in options) && (options[name] = defaults[name]);
    }

    _prepareGroup(options); // Bind all private methods


    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    } // Setup drag mode


    this.nativeDraggable = options.forceFallback ? false : supportDraggable;

    if (this.nativeDraggable) {
      // Touch start threshold cannot be greater than the native dragstart threshold
      this.options.touchStartThreshold = 1;
    } // Bind events


    if (options.supportPointer) {
      on(el, 'pointerdown', this._onTapStart);
    } else {
      on(el, 'mousedown', this._onTapStart);
      on(el, 'touchstart', this._onTapStart);
    }

    if (this.nativeDraggable) {
      on(el, 'dragover', this);
      on(el, 'dragenter', this);
    }

    sortables.push(this.el); // Restore sorting

    options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

    _extends(this, AnimationStateManager());
  }

  Sortable.prototype =
  /** @lends Sortable.prototype */
  {
    constructor: Sortable,
    _isOutsideThisEl: function _isOutsideThisEl(target) {
      if (!this.el.contains(target) && target !== this.el) {
        lastTarget = null;
      }
    },
    _getDirection: function _getDirection(evt, target) {
      return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
    },
    _onTapStart: function _onTapStart(
    /** Event|TouchEvent */
    evt) {
      if (!evt.cancelable) { return; }

      var _this = this,
          el = this.el,
          options = this.options,
          preventOnFilter = options.preventOnFilter,
          type = evt.type,
          touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
          target = (touch || evt).target,
          originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
          filter = options.filter;

      _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


      if (dragEl) {
        return;
      }

      if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
        return; // only left button and enabled
      } // cancel dnd if original target is content editable


      if (originalTarget.isContentEditable) {
        return;
      }

      target = closest(target, options.draggable, el, false);

      if (target && target.animated) {
        return;
      }

      if (lastDownEl === target) {
        // Ignoring duplicate `down`
        return;
      } // Get the index of the dragged element within its parent


      oldIndex = index(target);
      oldDraggableIndex = index(target, options.draggable); // Check filter

      if (typeof filter === 'function') {
        if (filter.call(this, evt, target, this)) {
          _dispatchEvent({
            sortable: _this,
            rootEl: originalTarget,
            name: 'filter',
            targetEl: target,
            toEl: el,
            fromEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          preventOnFilter && evt.cancelable && evt.preventDefault();
          return; // cancel dnd
        }
      } else if (filter) {
        filter = filter.split(',').some(function (criteria) {
          criteria = closest(originalTarget, criteria.trim(), el, false);

          if (criteria) {
            _dispatchEvent({
              sortable: _this,
              rootEl: criteria,
              name: 'filter',
              targetEl: target,
              fromEl: el,
              toEl: el
            });

            pluginEvent('filter', _this, {
              evt: evt
            });
            return true;
          }
        });

        if (filter) {
          preventOnFilter && evt.cancelable && evt.preventDefault();
          return; // cancel dnd
        }
      }

      if (options.handle && !closest(originalTarget, options.handle, el, false)) {
        return;
      } // Prepare `dragstart`


      this._prepareDragStart(evt, touch, target);
    },
    _prepareDragStart: function _prepareDragStart(
    /** Event */
    evt,
    /** Touch */
    touch,
    /** HTMLElement */
    target) {
      var _this = this,
          el = _this.el,
          options = _this.options,
          ownerDocument = el.ownerDocument,
          dragStartFn;

      if (target && !dragEl && target.parentNode === el) {
        var dragRect = getRect(target);
        rootEl = el;
        dragEl = target;
        parentEl = dragEl.parentNode;
        nextEl = dragEl.nextSibling;
        lastDownEl = target;
        activeGroup = options.group;
        Sortable.dragged = dragEl;
        tapEvt = {
          target: dragEl,
          clientX: (touch || evt).clientX,
          clientY: (touch || evt).clientY
        };
        tapDistanceLeft = tapEvt.clientX - dragRect.left;
        tapDistanceTop = tapEvt.clientY - dragRect.top;
        this._lastX = (touch || evt).clientX;
        this._lastY = (touch || evt).clientY;
        dragEl.style['will-change'] = 'all';

        dragStartFn = function dragStartFn() {
          pluginEvent('delayEnded', _this, {
            evt: evt
          });

          if (Sortable.eventCanceled) {
            _this._onDrop();

            return;
          } // Delayed drag has been triggered
          // we can re-enable the events: touchmove/mousemove


          _this._disableDelayedDragEvents();

          if (!FireFox && _this.nativeDraggable) {
            dragEl.draggable = true;
          } // Bind the events: dragstart/dragend


          _this._triggerDragStart(evt, touch); // Drag start event


          _dispatchEvent({
            sortable: _this,
            name: 'choose',
            originalEvent: evt
          }); // Chosen item


          toggleClass(dragEl, options.chosenClass, true);
        }; // Disable "draggable"


        options.ignore.split(',').forEach(function (criteria) {
          find(dragEl, criteria.trim(), _disableDraggable);
        });
        on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
        on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
        on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
        on(ownerDocument, 'mouseup', _this._onDrop);
        on(ownerDocument, 'touchend', _this._onDrop);
        on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

        if (FireFox && this.nativeDraggable) {
          this.options.touchStartThreshold = 4;
          dragEl.draggable = true;
        }

        pluginEvent('delayStart', this, {
          evt: evt
        }); // Delay is impossible for native DnD in Edge or IE

        if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
          if (Sortable.eventCanceled) {
            this._onDrop();

            return;
          } // If the user moves the pointer or let go the click or touch
          // before the delay has been reached:
          // disable the delayed drag


          on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
          on(ownerDocument, 'touchend', _this._disableDelayedDrag);
          on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
          on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
          on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
          options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
          _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
        } else {
          dragStartFn();
        }
      }
    },
    _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
    /** TouchEvent|PointerEvent **/
    e) {
      var touch = e.touches ? e.touches[0] : e;

      if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
        this._disableDelayedDrag();
      }
    },
    _disableDelayedDrag: function _disableDelayedDrag() {
      dragEl && _disableDraggable(dragEl);
      clearTimeout(this._dragStartTimer);

      this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function _disableDelayedDragEvents() {
      var ownerDocument = this.el.ownerDocument;
      off(ownerDocument, 'mouseup', this._disableDelayedDrag);
      off(ownerDocument, 'touchend', this._disableDelayedDrag);
      off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
      off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
      off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
      off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function _triggerDragStart(
    /** Event */
    evt,
    /** Touch */
    touch) {
      touch = touch || evt.pointerType == 'touch' && evt;

      if (!this.nativeDraggable || touch) {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._onTouchMove);
        } else if (touch) {
          on(document, 'touchmove', this._onTouchMove);
        } else {
          on(document, 'mousemove', this._onTouchMove);
        }
      } else {
        on(dragEl, 'dragend', this);
        on(rootEl, 'dragstart', this._onDragStart);
      }

      try {
        if (document.selection) {
          // Timeout neccessary for IE9
          _nextTick(function () {
            document.selection.empty();
          });
        } else {
          window.getSelection().removeAllRanges();
        }
      } catch (err) {}
    },
    _dragStarted: function _dragStarted(fallback, evt) {

      awaitingDragStarted = false;

      if (rootEl && dragEl) {
        pluginEvent('dragStarted', this, {
          evt: evt
        });

        if (this.nativeDraggable) {
          on(document, 'dragover', _checkOutsideTargetEl);
        }

        var options = this.options; // Apply effect

        !fallback && toggleClass(dragEl, options.dragClass, false);
        toggleClass(dragEl, options.ghostClass, true);
        Sortable.active = this;
        fallback && this._appendGhost(); // Drag start event

        _dispatchEvent({
          sortable: this,
          name: 'start',
          originalEvent: evt
        });
      } else {
        this._nulling();
      }
    },
    _emulateDragOver: function _emulateDragOver() {
      if (touchEvt) {
        this._lastX = touchEvt.clientX;
        this._lastY = touchEvt.clientY;

        _hideGhostForTarget();

        var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        var parent = target;

        while (target && target.shadowRoot) {
          target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
          if (target === parent) { break; }
          parent = target;
        }

        dragEl.parentNode[expando]._isOutsideThisEl(target);

        if (parent) {
          do {
            if (parent[expando]) {
              var inserted = void 0;
              inserted = parent[expando]._onDragOver({
                clientX: touchEvt.clientX,
                clientY: touchEvt.clientY,
                target: target,
                rootEl: parent
              });

              if (inserted && !this.options.dragoverBubble) {
                break;
              }
            }

            target = parent; // store last element
          }
          /* jshint boss:true */
          while (parent = parent.parentNode);
        }

        _unhideGhostForTarget();
      }
    },
    _onTouchMove: function _onTouchMove(
    /**TouchEvent*/
    evt) {
      if (tapEvt) {
        var options = this.options,
            fallbackTolerance = options.fallbackTolerance,
            fallbackOffset = options.fallbackOffset,
            touch = evt.touches ? evt.touches[0] : evt,
            ghostMatrix = ghostEl && matrix(ghostEl, true),
            scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
            scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
            relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
            dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
            dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

        if (!Sortable.active && !awaitingDragStarted) {
          if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
            return;
          }

          this._onDragStart(evt, true);
        }

        if (ghostEl) {
          if (ghostMatrix) {
            ghostMatrix.e += dx - (lastDx || 0);
            ghostMatrix.f += dy - (lastDy || 0);
          } else {
            ghostMatrix = {
              a: 1,
              b: 0,
              c: 0,
              d: 1,
              e: dx,
              f: dy
            };
          }

          var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
          css(ghostEl, 'webkitTransform', cssMatrix);
          css(ghostEl, 'mozTransform', cssMatrix);
          css(ghostEl, 'msTransform', cssMatrix);
          css(ghostEl, 'transform', cssMatrix);
          lastDx = dx;
          lastDy = dy;
          touchEvt = touch;
        }

        evt.cancelable && evt.preventDefault();
      }
    },
    _appendGhost: function _appendGhost() {
      // Bug if using scale(): https://stackoverflow.com/questions/2637058
      // Not being adjusted for
      if (!ghostEl) {
        var container = this.options.fallbackOnBody ? document.body : rootEl,
            rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
            options = this.options; // Position absolutely

        if (PositionGhostAbsolutely) {
          // Get relatively positioned parent
          ghostRelativeParent = container;

          while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
            ghostRelativeParent = ghostRelativeParent.parentNode;
          }

          if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
            if (ghostRelativeParent === document) { ghostRelativeParent = getWindowScrollingElement(); }
            rect.top += ghostRelativeParent.scrollTop;
            rect.left += ghostRelativeParent.scrollLeft;
          } else {
            ghostRelativeParent = getWindowScrollingElement();
          }

          ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
        }

        ghostEl = dragEl.cloneNode(true);
        toggleClass(ghostEl, options.ghostClass, false);
        toggleClass(ghostEl, options.fallbackClass, true);
        toggleClass(ghostEl, options.dragClass, true);
        css(ghostEl, 'transition', '');
        css(ghostEl, 'transform', '');
        css(ghostEl, 'box-sizing', 'border-box');
        css(ghostEl, 'margin', 0);
        css(ghostEl, 'top', rect.top);
        css(ghostEl, 'left', rect.left);
        css(ghostEl, 'width', rect.width);
        css(ghostEl, 'height', rect.height);
        css(ghostEl, 'opacity', '0.8');
        css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
        css(ghostEl, 'zIndex', '100000');
        css(ghostEl, 'pointerEvents', 'none');
        Sortable.ghost = ghostEl;
        container.appendChild(ghostEl); // Set transform-origin

        css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
      }
    },
    _onDragStart: function _onDragStart(
    /**Event*/
    evt,
    /**boolean*/
    fallback) {
      var _this = this;

      var dataTransfer = evt.dataTransfer;
      var options = _this.options;
      pluginEvent('dragStart', this, {
        evt: evt
      });

      if (Sortable.eventCanceled) {
        this._onDrop();

        return;
      }

      pluginEvent('setupClone', this);

      if (!Sortable.eventCanceled) {
        cloneEl = clone(dragEl);
        cloneEl.draggable = false;
        cloneEl.style['will-change'] = '';

        this._hideClone();

        toggleClass(cloneEl, this.options.chosenClass, false);
        Sortable.clone = cloneEl;
      } // #1143: IFrame support workaround


      _this.cloneId = _nextTick(function () {
        pluginEvent('clone', _this);
        if (Sortable.eventCanceled) { return; }

        if (!_this.options.removeCloneOnHide) {
          rootEl.insertBefore(cloneEl, dragEl);
        }

        _this._hideClone();

        _dispatchEvent({
          sortable: _this,
          name: 'clone'
        });
      });
      !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

      if (fallback) {
        ignoreNextClick = true;
        _this._loopId = setInterval(_this._emulateDragOver, 50);
      } else {
        // Undo what was set in _prepareDragStart before drag started
        off(document, 'mouseup', _this._onDrop);
        off(document, 'touchend', _this._onDrop);
        off(document, 'touchcancel', _this._onDrop);

        if (dataTransfer) {
          dataTransfer.effectAllowed = 'move';
          options.setData && options.setData.call(_this, dataTransfer, dragEl);
        }

        on(document, 'drop', _this); // #1276 fix:

        css(dragEl, 'transform', 'translateZ(0)');
      }

      awaitingDragStarted = true;
      _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
      on(document, 'selectstart', _this);
      moved = true;

      if (Safari) {
        css(document.body, 'user-select', 'none');
      }
    },
    // Returns true - if no further action is needed (either inserted or another condition)
    _onDragOver: function _onDragOver(
    /**Event*/
    evt) {
      var el = this.el,
          target = evt.target,
          dragRect,
          targetRect,
          revert,
          options = this.options,
          group = options.group,
          activeSortable = Sortable.active,
          isOwner = activeGroup === group,
          canSort = options.sort,
          fromSortable = putSortable || activeSortable,
          vertical,
          _this = this,
          completedFired = false;

      if (_silent) { return; }

      function dragOverEvent(name, extra) {
        pluginEvent(name, _this, _objectSpread({
          evt: evt,
          isOwner: isOwner,
          axis: vertical ? 'vertical' : 'horizontal',
          revert: revert,
          dragRect: dragRect,
          targetRect: targetRect,
          canSort: canSort,
          fromSortable: fromSortable,
          target: target,
          completed: completed,
          onMove: function onMove(target, after) {
            return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
          },
          changed: changed
        }, extra));
      } // Capture animation state


      function capture() {
        dragOverEvent('dragOverAnimationCapture');

        _this.captureAnimationState();

        if (_this !== fromSortable) {
          fromSortable.captureAnimationState();
        }
      } // Return invocation when dragEl is inserted (or completed)


      function completed(insertion) {
        dragOverEvent('dragOverCompleted', {
          insertion: insertion
        });

        if (insertion) {
          // Clones must be hidden before folding animation to capture dragRectAbsolute properly
          if (isOwner) {
            activeSortable._hideClone();
          } else {
            activeSortable._showClone(_this);
          }

          if (_this !== fromSortable) {
            // Set ghost class to new sortable's ghost class
            toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
            toggleClass(dragEl, options.ghostClass, true);
          }

          if (putSortable !== _this && _this !== Sortable.active) {
            putSortable = _this;
          } else if (_this === Sortable.active && putSortable) {
            putSortable = null;
          } // Animation


          if (fromSortable === _this) {
            _this._ignoreWhileAnimating = target;
          }

          _this.animateAll(function () {
            dragOverEvent('dragOverAnimationComplete');
            _this._ignoreWhileAnimating = null;
          });

          if (_this !== fromSortable) {
            fromSortable.animateAll();
            fromSortable._ignoreWhileAnimating = null;
          }
        } // Null lastTarget if it is not inside a previously swapped element


        if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
          lastTarget = null;
        } // no bubbling and not fallback


        if (!options.dragoverBubble && !evt.rootEl && target !== document) {
          dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


          !insertion && nearestEmptyInsertDetectEvent(evt);
        }

        !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
        return completedFired = true;
      } // Call when dragEl has been inserted


      function changed() {
        newIndex = index(dragEl);
        newDraggableIndex = index(dragEl, options.draggable);

        _dispatchEvent({
          sortable: _this,
          name: 'change',
          toEl: el,
          newIndex: newIndex,
          newDraggableIndex: newDraggableIndex,
          originalEvent: evt
        });
      }

      if (evt.preventDefault !== void 0) {
        evt.cancelable && evt.preventDefault();
      }

      target = closest(target, options.draggable, el, true);
      dragOverEvent('dragOver');
      if (Sortable.eventCanceled) { return completedFired; }

      if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
        return completed(false);
      }

      ignoreNextClick = false;

      if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
      : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
        vertical = this._getDirection(evt, target) === 'vertical';
        dragRect = getRect(dragEl);
        dragOverEvent('dragOverValid');
        if (Sortable.eventCanceled) { return completedFired; }

        if (revert) {
          parentEl = rootEl; // actualization

          capture();

          this._hideClone();

          dragOverEvent('revert');

          if (!Sortable.eventCanceled) {
            if (nextEl) {
              rootEl.insertBefore(dragEl, nextEl);
            } else {
              rootEl.appendChild(dragEl);
            }
          }

          return completed(true);
        }

        var elLastChild = lastChild(el, options.draggable);

        if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
          // If already at end of list: Do not insert
          if (elLastChild === dragEl) {
            return completed(false);
          } // assign target only if condition is true


          if (elLastChild && el === evt.target) {
            target = elLastChild;
          }

          if (target) {
            targetRect = getRect(target);
          }

          if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
            capture();
            el.appendChild(dragEl);
            parentEl = el; // actualization

            changed();
            return completed(true);
          }
        } else if (target.parentNode === el) {
          targetRect = getRect(target);
          var direction = 0,
              targetBeforeFirstSwap,
              differentLevel = dragEl.parentNode !== el,
              differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
              side1 = vertical ? 'top' : 'left',
              scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
              scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

          if (lastTarget !== target) {
            targetBeforeFirstSwap = targetRect[side1];
            pastFirstInvertThresh = false;
            isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
          }

          direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
          var sibling;

          if (direction !== 0) {
            // Check if target is beside dragEl in respective direction (ignoring hidden elements)
            var dragIndex = index(dragEl);

            do {
              dragIndex -= direction;
              sibling = parentEl.children[dragIndex];
            } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
          } // If dragEl is already beside target: Do not insert


          if (direction === 0 || sibling === target) {
            return completed(false);
          }

          lastTarget = target;
          lastDirection = direction;
          var nextSibling = target.nextElementSibling,
              after = false;
          after = direction === 1;

          var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

          if (moveVector !== false) {
            if (moveVector === 1 || moveVector === -1) {
              after = moveVector === 1;
            }

            _silent = true;
            setTimeout(_unsilent, 30);
            capture();

            if (after && !nextSibling) {
              el.appendChild(dragEl);
            } else {
              target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
            } // Undo chrome's scroll adjustment (has no effect on other browsers)


            if (scrolledPastTop) {
              scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
            }

            parentEl = dragEl.parentNode; // actualization
            // must be done before animation

            if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
              targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
            }

            changed();
            return completed(true);
          }
        }

        if (el.contains(dragEl)) {
          return completed(false);
        }
      }

      return false;
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function _offMoveEvents() {
      off(document, 'mousemove', this._onTouchMove);
      off(document, 'touchmove', this._onTouchMove);
      off(document, 'pointermove', this._onTouchMove);
      off(document, 'dragover', nearestEmptyInsertDetectEvent);
      off(document, 'mousemove', nearestEmptyInsertDetectEvent);
      off(document, 'touchmove', nearestEmptyInsertDetectEvent);
    },
    _offUpEvents: function _offUpEvents() {
      var ownerDocument = this.el.ownerDocument;
      off(ownerDocument, 'mouseup', this._onDrop);
      off(ownerDocument, 'touchend', this._onDrop);
      off(ownerDocument, 'pointerup', this._onDrop);
      off(ownerDocument, 'touchcancel', this._onDrop);
      off(document, 'selectstart', this);
    },
    _onDrop: function _onDrop(
    /**Event*/
    evt) {
      var el = this.el,
          options = this.options; // Get the index of the dragged element within its parent

      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      pluginEvent('drop', this, {
        evt: evt
      });
      parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      if (Sortable.eventCanceled) {
        this._nulling();

        return;
      }

      awaitingDragStarted = false;
      isCircumstantialInvert = false;
      pastFirstInvertThresh = false;
      clearInterval(this._loopId);
      clearTimeout(this._dragStartTimer);

      _cancelNextTick(this.cloneId);

      _cancelNextTick(this._dragStartId); // Unbind events


      if (this.nativeDraggable) {
        off(document, 'drop', this);
        off(el, 'dragstart', this._onDragStart);
      }

      this._offMoveEvents();

      this._offUpEvents();

      if (Safari) {
        css(document.body, 'user-select', '');
      }

      css(dragEl, 'transform', '');

      if (evt) {
        if (moved) {
          evt.cancelable && evt.preventDefault();
          !options.dropBubble && evt.stopPropagation();
        }

        ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

        if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
          // Remove clone(s)
          cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
        }

        if (dragEl) {
          if (this.nativeDraggable) {
            off(dragEl, 'dragend', this);
          }

          _disableDraggable(dragEl);

          dragEl.style['will-change'] = ''; // Remove classes
          // ghostClass is added in dragStarted

          if (moved && !awaitingDragStarted) {
            toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
          }

          toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

          _dispatchEvent({
            sortable: this,
            name: 'unchoose',
            toEl: parentEl,
            newIndex: null,
            newDraggableIndex: null,
            originalEvent: evt
          });

          if (rootEl !== parentEl) {
            if (newIndex >= 0) {
              // Add event
              _dispatchEvent({
                rootEl: parentEl,
                name: 'add',
                toEl: parentEl,
                fromEl: rootEl,
                originalEvent: evt
              }); // Remove event


              _dispatchEvent({
                sortable: this,
                name: 'remove',
                toEl: parentEl,
                originalEvent: evt
              }); // drag from one list and drop into another


              _dispatchEvent({
                rootEl: parentEl,
                name: 'sort',
                toEl: parentEl,
                fromEl: rootEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }

            putSortable && putSortable.save();
          } else {
            if (newIndex !== oldIndex) {
              if (newIndex >= 0) {
                // drag & drop within the same list
                _dispatchEvent({
                  sortable: this,
                  name: 'update',
                  toEl: parentEl,
                  originalEvent: evt
                });

                _dispatchEvent({
                  sortable: this,
                  name: 'sort',
                  toEl: parentEl,
                  originalEvent: evt
                });
              }
            }
          }

          if (Sortable.active) {
            /* jshint eqnull:true */
            if (newIndex == null || newIndex === -1) {
              newIndex = oldIndex;
              newDraggableIndex = oldDraggableIndex;
            }

            _dispatchEvent({
              sortable: this,
              name: 'end',
              toEl: parentEl,
              originalEvent: evt
            }); // Save sorting


            this.save();
          }
        }
      }

      this._nulling();
    },
    _nulling: function _nulling() {
      pluginEvent('nulling', this);
      rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
      savedInputChecked.forEach(function (el) {
        el.checked = true;
      });
      savedInputChecked.length = lastDx = lastDy = 0;
    },
    handleEvent: function handleEvent(
    /**Event*/
    evt) {
      switch (evt.type) {
        case 'drop':
        case 'dragend':
          this._onDrop(evt);

          break;

        case 'dragenter':
        case 'dragover':
          if (dragEl) {
            this._onDragOver(evt);

            _globalDragOver(evt);
          }

          break;

        case 'selectstart':
          evt.preventDefault();
          break;
      }
    },

    /**
     * Serializes the item into an array of string.
     * @returns {String[]}
     */
    toArray: function toArray() {
      var order = [],
          el,
          children = this.el.children,
          i = 0,
          n = children.length,
          options = this.options;

      for (; i < n; i++) {
        el = children[i];

        if (closest(el, options.draggable, this.el, false)) {
          order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
        }
      }

      return order;
    },

    /**
     * Sorts the elements according to the array.
     * @param  {String[]}  order  order of the items
     */
    sort: function sort(order) {
      var items = {},
          rootEl = this.el;
      this.toArray().forEach(function (id, i) {
        var el = rootEl.children[i];

        if (closest(el, this.options.draggable, rootEl, false)) {
          items[id] = el;
        }
      }, this);
      order.forEach(function (id) {
        if (items[id]) {
          rootEl.removeChild(items[id]);
          rootEl.appendChild(items[id]);
        }
      });
    },

    /**
     * Save the current sorting
     */
    save: function save() {
      var store = this.options.store;
      store && store.set && store.set(this);
    },

    /**
     * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
     * @param   {HTMLElement}  el
     * @param   {String}       [selector]  default: `options.draggable`
     * @returns {HTMLElement|null}
     */
    closest: function closest$1(el, selector) {
      return closest(el, selector || this.options.draggable, this.el, false);
    },

    /**
     * Set/get option
     * @param   {string} name
     * @param   {*}      [value]
     * @returns {*}
     */
    option: function option(name, value) {
      var options = this.options;

      if (value === void 0) {
        return options[name];
      } else {
        var modifiedValue = PluginManager.modifyOption(this, name, value);

        if (typeof modifiedValue !== 'undefined') {
          options[name] = modifiedValue;
        } else {
          options[name] = value;
        }

        if (name === 'group') {
          _prepareGroup(options);
        }
      }
    },

    /**
     * Destroy
     */
    destroy: function destroy() {
      pluginEvent('destroy', this);
      var el = this.el;
      el[expando] = null;
      off(el, 'mousedown', this._onTapStart);
      off(el, 'touchstart', this._onTapStart);
      off(el, 'pointerdown', this._onTapStart);

      if (this.nativeDraggable) {
        off(el, 'dragover', this);
        off(el, 'dragenter', this);
      } // Remove draggable attributes


      Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
        el.removeAttribute('draggable');
      });

      this._onDrop();

      this._disableDelayedDragEvents();

      sortables.splice(sortables.indexOf(this.el), 1);
      this.el = el = null;
    },
    _hideClone: function _hideClone() {
      if (!cloneHidden) {
        pluginEvent('hideClone', this);
        if (Sortable.eventCanceled) { return; }
        css(cloneEl, 'display', 'none');

        if (this.options.removeCloneOnHide && cloneEl.parentNode) {
          cloneEl.parentNode.removeChild(cloneEl);
        }

        cloneHidden = true;
      }
    },
    _showClone: function _showClone(putSortable) {
      if (putSortable.lastPutMode !== 'clone') {
        this._hideClone();

        return;
      }

      if (cloneHidden) {
        pluginEvent('showClone', this);
        if (Sortable.eventCanceled) { return; } // show clone at dragEl or original position

        if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
          rootEl.insertBefore(cloneEl, dragEl);
        } else if (nextEl) {
          rootEl.insertBefore(cloneEl, nextEl);
        } else {
          rootEl.appendChild(cloneEl);
        }

        if (this.options.group.revertClone) {
          this.animate(dragEl, cloneEl);
        }

        css(cloneEl, 'display', '');
        cloneHidden = false;
      }
    }
  };

  function _globalDragOver(
  /**Event*/
  evt) {
    if (evt.dataTransfer) {
      evt.dataTransfer.dropEffect = 'move';
    }

    evt.cancelable && evt.preventDefault();
  }

  function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
    var evt,
        sortable = fromEl[expando],
        onMoveFn = sortable.options.onMove,
        retVal; // Support for new CustomEvent feature

    if (window.CustomEvent && !IE11OrLess && !Edge) {
      evt = new CustomEvent('move', {
        bubbles: true,
        cancelable: true
      });
    } else {
      evt = document.createEvent('Event');
      evt.initEvent('move', true, true);
    }

    evt.to = toEl;
    evt.from = fromEl;
    evt.dragged = dragEl;
    evt.draggedRect = dragRect;
    evt.related = targetEl || toEl;
    evt.relatedRect = targetRect || getRect(toEl);
    evt.willInsertAfter = willInsertAfter;
    evt.originalEvent = originalEvent;
    fromEl.dispatchEvent(evt);

    if (onMoveFn) {
      retVal = onMoveFn.call(sortable, evt, originalEvent);
    }

    return retVal;
  }

  function _disableDraggable(el) {
    el.draggable = false;
  }

  function _unsilent() {
    _silent = false;
  }

  function _ghostIsLast(evt, vertical, sortable) {
    var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
    var spacer = 10;
    return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
  }

  function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
    var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
        targetLength = vertical ? targetRect.height : targetRect.width,
        targetS1 = vertical ? targetRect.top : targetRect.left,
        targetS2 = vertical ? targetRect.bottom : targetRect.right,
        invert = false;

    if (!invertSwap) {
      // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
      if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
        // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
        // check if past first invert threshold on side opposite of lastDirection
        if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
          // past first invert threshold, do not restrict inverted threshold to dragEl shadow
          pastFirstInvertThresh = true;
        }

        if (!pastFirstInvertThresh) {
          // dragEl shadow (target move distance shadow)
          if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
          : mouseOnAxis > targetS2 - targetMoveDistance) {
            return -lastDirection;
          }
        } else {
          invert = true;
        }
      } else {
        // Regular
        if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
          return _getInsertDirection(target);
        }
      }
    }

    invert = invert || invertSwap;

    if (invert) {
      // Invert of regular
      if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
        return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
      }
    }

    return 0;
  }
  /**
   * Gets the direction dragEl must be swapped relative to target in order to make it
   * seem that dragEl has been "inserted" into that element's position
   * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
   * @return {Number}                   Direction dragEl must be swapped
   */


  function _getInsertDirection(target) {
    if (index(dragEl) < index(target)) {
      return 1;
    } else {
      return -1;
    }
  }
  /**
   * Generate id
   * @param   {HTMLElement} el
   * @returns {String}
   * @private
   */


  function _generateId(el) {
    var str = el.tagName + el.className + el.src + el.href + el.textContent,
        i = str.length,
        sum = 0;

    while (i--) {
      sum += str.charCodeAt(i);
    }

    return sum.toString(36);
  }

  function _saveInputCheckedState(root) {
    savedInputChecked.length = 0;
    var inputs = root.getElementsByTagName('input');
    var idx = inputs.length;

    while (idx--) {
      var el = inputs[idx];
      el.checked && savedInputChecked.push(el);
    }
  }

  function _nextTick(fn) {
    return setTimeout(fn, 0);
  }

  function _cancelNextTick(id) {
    return clearTimeout(id);
  } // Fixed #973:


  if (documentExists) {
    on(document, 'touchmove', function (evt) {
      if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
        evt.preventDefault();
      }
    });
  } // Export utils


  Sortable.utils = {
    on: on,
    off: off,
    css: css,
    find: find,
    is: function is(el, selector) {
      return !!closest(el, selector, el, false);
    },
    extend: extend,
    throttle: throttle,
    closest: closest,
    toggleClass: toggleClass,
    clone: clone,
    index: index,
    nextTick: _nextTick,
    cancelNextTick: _cancelNextTick,
    detectDirection: _detectDirection,
    getChild: getChild
  };
  /**
   * Get the Sortable instance of an element
   * @param  {HTMLElement} element The element
   * @return {Sortable|undefined}         The instance of Sortable
   */

  Sortable.get = function (element) {
    return element[expando];
  };
  /**
   * Mount a plugin to Sortable
   * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
   */


  Sortable.mount = function () {
    var arguments$1 = arguments;

    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments$1[_key];
    }

    if (plugins[0].constructor === Array) { plugins = plugins[0]; }
    plugins.forEach(function (plugin) {
      if (!plugin.prototype || !plugin.prototype.constructor) {
        throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
      }

      if (plugin.utils) { Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils); }
      PluginManager.mount(plugin);
    });
  };
  /**
   * Create sortable instance
   * @param {HTMLElement}  el
   * @param {Object}      [options]
   */


  Sortable.create = function (el, options) {
    return new Sortable(el, options);
  }; // Export


  Sortable.version = version;

  var autoScrolls = [],
      scrollEl,
      scrollRootEl,
      scrolling = false,
      lastAutoScrollX,
      lastAutoScrollY,
      touchEvt$1,
      pointerElemChangedInterval;

  function AutoScrollPlugin() {
    function AutoScroll() {
      this.defaults = {
        scroll: true,
        scrollSensitivity: 30,
        scrollSpeed: 10,
        bubbleScroll: true
      }; // Bind all private methods

      for (var fn in this) {
        if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
          this[fn] = this[fn].bind(this);
        }
      }
    }

    AutoScroll.prototype = {
      dragStarted: function dragStarted(_ref) {
        var originalEvent = _ref.originalEvent;

        if (this.sortable.nativeDraggable) {
          on(document, 'dragover', this._handleAutoScroll);
        } else {
          if (this.options.supportPointer) {
            on(document, 'pointermove', this._handleFallbackAutoScroll);
          } else if (originalEvent.touches) {
            on(document, 'touchmove', this._handleFallbackAutoScroll);
          } else {
            on(document, 'mousemove', this._handleFallbackAutoScroll);
          }
        }
      },
      dragOverCompleted: function dragOverCompleted(_ref2) {
        var originalEvent = _ref2.originalEvent;

        // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
        if (!this.options.dragOverBubble && !originalEvent.rootEl) {
          this._handleAutoScroll(originalEvent);
        }
      },
      drop: function drop() {
        if (this.sortable.nativeDraggable) {
          off(document, 'dragover', this._handleAutoScroll);
        } else {
          off(document, 'pointermove', this._handleFallbackAutoScroll);
          off(document, 'touchmove', this._handleFallbackAutoScroll);
          off(document, 'mousemove', this._handleFallbackAutoScroll);
        }

        clearPointerElemChangedInterval();
        clearAutoScrolls();
        cancelThrottle();
      },
      nulling: function nulling() {
        touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
        autoScrolls.length = 0;
      },
      _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
        this._handleAutoScroll(evt, true);
      },
      _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
        var _this = this;

        var x = (evt.touches ? evt.touches[0] : evt).clientX,
            y = (evt.touches ? evt.touches[0] : evt).clientY,
            elem = document.elementFromPoint(x, y);
        touchEvt$1 = evt; // IE does not seem to have native autoscroll,
        // Edge's autoscroll seems too conditional,
        // MACOS Safari does not have autoscroll,
        // Firefox and Chrome are good

        if (fallback || Edge || IE11OrLess || Safari) {
          autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

          var ogElemScroller = getParentAutoScrollElement(elem, true);

          if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
            pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

            pointerElemChangedInterval = setInterval(function () {
              var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

              if (newElem !== ogElemScroller) {
                ogElemScroller = newElem;
                clearAutoScrolls();
              }

              autoScroll(evt, _this.options, newElem, fallback);
            }, 10);
            lastAutoScrollX = x;
            lastAutoScrollY = y;
          }
        } else {
          // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
          if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
            clearAutoScrolls();
            return;
          }

          autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
        }
      }
    };
    return _extends(AutoScroll, {
      pluginName: 'scroll',
      initializeByDefault: true
    });
  }

  function clearAutoScrolls() {
    autoScrolls.forEach(function (autoScroll) {
      clearInterval(autoScroll.pid);
    });
    autoScrolls = [];
  }

  function clearPointerElemChangedInterval() {
    clearInterval(pointerElemChangedInterval);
  }

  var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
    // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
    if (!options.scroll) { return; }
    var x = (evt.touches ? evt.touches[0] : evt).clientX,
        y = (evt.touches ? evt.touches[0] : evt).clientY,
        sens = options.scrollSensitivity,
        speed = options.scrollSpeed,
        winScroller = getWindowScrollingElement();
    var scrollThisInstance = false,
        scrollCustomFn; // New scroll root, set scrollEl

    if (scrollRootEl !== rootEl) {
      scrollRootEl = rootEl;
      clearAutoScrolls();
      scrollEl = options.scroll;
      scrollCustomFn = options.scrollFn;

      if (scrollEl === true) {
        scrollEl = getParentAutoScrollElement(rootEl, true);
      }
    }

    var layersOut = 0;
    var currentParent = scrollEl;

    do {
      var el = currentParent,
          rect = getRect(el),
          top = rect.top,
          bottom = rect.bottom,
          left = rect.left,
          right = rect.right,
          width = rect.width,
          height = rect.height,
          canScrollX = void 0,
          canScrollY = void 0,
          scrollWidth = el.scrollWidth,
          scrollHeight = el.scrollHeight,
          elCSS = css(el),
          scrollPosX = el.scrollLeft,
          scrollPosY = el.scrollTop;

      if (el === winScroller) {
        canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
        canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
      } else {
        canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
        canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
      }

      var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
      var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

      if (!autoScrolls[layersOut]) {
        for (var i = 0; i <= layersOut; i++) {
          if (!autoScrolls[i]) {
            autoScrolls[i] = {};
          }
        }
      }

      if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
        autoScrolls[layersOut].el = el;
        autoScrolls[layersOut].vx = vx;
        autoScrolls[layersOut].vy = vy;
        clearInterval(autoScrolls[layersOut].pid);

        if (vx != 0 || vy != 0) {
          scrollThisInstance = true;
          /* jshint loopfunc:true */

          autoScrolls[layersOut].pid = setInterval(function () {
            // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
            if (isFallback && this.layer === 0) {
              Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

            }

            var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
            var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

            if (typeof scrollCustomFn === 'function') {
              if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
                return;
              }
            }

            scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
          }.bind({
            layer: layersOut
          }), 24);
        }
      }

      layersOut++;
    } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

    scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
  }, 30);

  var drop = function drop(_ref) {
    var originalEvent = _ref.originalEvent,
        putSortable = _ref.putSortable,
        dragEl = _ref.dragEl,
        activeSortable = _ref.activeSortable,
        dispatchSortableEvent = _ref.dispatchSortableEvent,
        hideGhostForTarget = _ref.hideGhostForTarget,
        unhideGhostForTarget = _ref.unhideGhostForTarget;
    if (!originalEvent) { return; }
    var toSortable = putSortable || activeSortable;
    hideGhostForTarget();
    var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
    var target = document.elementFromPoint(touch.clientX, touch.clientY);
    unhideGhostForTarget();

    if (toSortable && !toSortable.el.contains(target)) {
      dispatchSortableEvent('spill');
      this.onSpill({
        dragEl: dragEl,
        putSortable: putSortable
      });
    }
  };

  function Revert() {}

  Revert.prototype = {
    startIndex: null,
    dragStart: function dragStart(_ref2) {
      var oldDraggableIndex = _ref2.oldDraggableIndex;
      this.startIndex = oldDraggableIndex;
    },
    onSpill: function onSpill(_ref3) {
      var dragEl = _ref3.dragEl,
          putSortable = _ref3.putSortable;
      this.sortable.captureAnimationState();

      if (putSortable) {
        putSortable.captureAnimationState();
      }

      var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

      if (nextSibling) {
        this.sortable.el.insertBefore(dragEl, nextSibling);
      } else {
        this.sortable.el.appendChild(dragEl);
      }

      this.sortable.animateAll();

      if (putSortable) {
        putSortable.animateAll();
      }
    },
    drop: drop
  };

  _extends(Revert, {
    pluginName: 'revertOnSpill'
  });

  function Remove() {}

  Remove.prototype = {
    onSpill: function onSpill(_ref4) {
      var dragEl = _ref4.dragEl,
          putSortable = _ref4.putSortable;
      var parentSortable = putSortable || this.sortable;
      parentSortable.captureAnimationState();
      dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
      parentSortable.animateAll();
    },
    drop: drop
  };

  _extends(Remove, {
    pluginName: 'removeOnSpill'
  });

  var lastSwapEl;

  function SwapPlugin() {
    function Swap() {
      this.defaults = {
        swapClass: 'sortable-swap-highlight'
      };
    }

    Swap.prototype = {
      dragStart: function dragStart(_ref) {
        var dragEl = _ref.dragEl;
        lastSwapEl = dragEl;
      },
      dragOverValid: function dragOverValid(_ref2) {
        var completed = _ref2.completed,
            target = _ref2.target,
            onMove = _ref2.onMove,
            activeSortable = _ref2.activeSortable,
            changed = _ref2.changed,
            cancel = _ref2.cancel;
        if (!activeSortable.options.swap) { return; }
        var el = this.sortable.el,
            options = this.options;

        if (target && target !== el) {
          var prevSwapEl = lastSwapEl;

          if (onMove(target) !== false) {
            toggleClass(target, options.swapClass, true);
            lastSwapEl = target;
          } else {
            lastSwapEl = null;
          }

          if (prevSwapEl && prevSwapEl !== lastSwapEl) {
            toggleClass(prevSwapEl, options.swapClass, false);
          }
        }

        changed();
        completed(true);
        cancel();
      },
      drop: function drop(_ref3) {
        var activeSortable = _ref3.activeSortable,
            putSortable = _ref3.putSortable,
            dragEl = _ref3.dragEl;
        var toSortable = putSortable || this.sortable;
        var options = this.options;
        lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

        if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
          if (dragEl !== lastSwapEl) {
            toSortable.captureAnimationState();
            if (toSortable !== activeSortable) { activeSortable.captureAnimationState(); }
            swapNodes(dragEl, lastSwapEl);
            toSortable.animateAll();
            if (toSortable !== activeSortable) { activeSortable.animateAll(); }
          }
        }
      },
      nulling: function nulling() {
        lastSwapEl = null;
      }
    };
    return _extends(Swap, {
      pluginName: 'swap',
      eventProperties: function eventProperties() {
        return {
          swapItem: lastSwapEl
        };
      }
    });
  }

  function swapNodes(n1, n2) {
    var p1 = n1.parentNode,
        p2 = n2.parentNode,
        i1,
        i2;
    if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) { return; }
    i1 = index(n1);
    i2 = index(n2);

    if (p1.isEqualNode(p2) && i1 < i2) {
      i2++;
    }

    p1.insertBefore(n2, p1.children[i1]);
    p2.insertBefore(n1, p2.children[i2]);
  }

  var multiDragElements = [],
      multiDragClones = [],
      lastMultiDragSelect,
      // for selection with modifier key down (SHIFT)
  multiDragSortable,
      initialFolding = false,
      // Initial multi-drag fold when drag started
  folding = false,
      // Folding any other time
  dragStarted = false,
      dragEl$1,
      clonesFromRect,
      clonesHidden;

  function MultiDragPlugin() {
    function MultiDrag(sortable) {
      // Bind all private methods
      for (var fn in this) {
        if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
          this[fn] = this[fn].bind(this);
        }
      }

      if (sortable.options.supportPointer) {
        on(document, 'pointerup', this._deselectMultiDrag);
      } else {
        on(document, 'mouseup', this._deselectMultiDrag);
        on(document, 'touchend', this._deselectMultiDrag);
      }

      on(document, 'keydown', this._checkKeyDown);
      on(document, 'keyup', this._checkKeyUp);
      this.defaults = {
        selectedClass: 'sortable-selected',
        multiDragKey: null,
        setData: function setData(dataTransfer, dragEl) {
          var data = '';

          if (multiDragElements.length && multiDragSortable === sortable) {
            multiDragElements.forEach(function (multiDragElement, i) {
              data += (!i ? '' : ', ') + multiDragElement.textContent;
            });
          } else {
            data = dragEl.textContent;
          }

          dataTransfer.setData('Text', data);
        }
      };
    }

    MultiDrag.prototype = {
      multiDragKeyDown: false,
      isMultiDrag: false,
      delayStartGlobal: function delayStartGlobal(_ref) {
        var dragged = _ref.dragEl;
        dragEl$1 = dragged;
      },
      delayEnded: function delayEnded() {
        this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
      },
      setupClone: function setupClone(_ref2) {
        var sortable = _ref2.sortable,
            cancel = _ref2.cancel;
        if (!this.isMultiDrag) { return; }

        for (var i = 0; i < multiDragElements.length; i++) {
          multiDragClones.push(clone(multiDragElements[i]));
          multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
          multiDragClones[i].draggable = false;
          multiDragClones[i].style['will-change'] = '';
          toggleClass(multiDragClones[i], this.options.selectedClass, false);
          multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
        }

        sortable._hideClone();

        cancel();
      },
      clone: function clone(_ref3) {
        var sortable = _ref3.sortable,
            rootEl = _ref3.rootEl,
            dispatchSortableEvent = _ref3.dispatchSortableEvent,
            cancel = _ref3.cancel;
        if (!this.isMultiDrag) { return; }

        if (!this.options.removeCloneOnHide) {
          if (multiDragElements.length && multiDragSortable === sortable) {
            insertMultiDragClones(true, rootEl);
            dispatchSortableEvent('clone');
            cancel();
          }
        }
      },
      showClone: function showClone(_ref4) {
        var cloneNowShown = _ref4.cloneNowShown,
            rootEl = _ref4.rootEl,
            cancel = _ref4.cancel;
        if (!this.isMultiDrag) { return; }
        insertMultiDragClones(false, rootEl);
        multiDragClones.forEach(function (clone) {
          css(clone, 'display', '');
        });
        cloneNowShown();
        clonesHidden = false;
        cancel();
      },
      hideClone: function hideClone(_ref5) {
        var _this = this;

        _ref5.sortable;
            var cloneNowHidden = _ref5.cloneNowHidden,
            cancel = _ref5.cancel;
        if (!this.isMultiDrag) { return; }
        multiDragClones.forEach(function (clone) {
          css(clone, 'display', 'none');

          if (_this.options.removeCloneOnHide && clone.parentNode) {
            clone.parentNode.removeChild(clone);
          }
        });
        cloneNowHidden();
        clonesHidden = true;
        cancel();
      },
      dragStartGlobal: function dragStartGlobal(_ref6) {
        _ref6.sortable;

        if (!this.isMultiDrag && multiDragSortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();
        }

        multiDragElements.forEach(function (multiDragElement) {
          multiDragElement.sortableIndex = index(multiDragElement);
        }); // Sort multi-drag elements

        multiDragElements = multiDragElements.sort(function (a, b) {
          return a.sortableIndex - b.sortableIndex;
        });
        dragStarted = true;
      },
      dragStarted: function dragStarted(_ref7) {
        var _this2 = this;

        var sortable = _ref7.sortable;
        if (!this.isMultiDrag) { return; }

        if (this.options.sort) {
          // Capture rects,
          // hide multi drag elements (by positioning them absolute),
          // set multi drag elements rects to dragRect,
          // show multi drag elements,
          // animate to rects,
          // unset rects & remove from DOM
          sortable.captureAnimationState();

          if (this.options.animation) {
            multiDragElements.forEach(function (multiDragElement) {
              if (multiDragElement === dragEl$1) { return; }
              css(multiDragElement, 'position', 'absolute');
            });
            var dragRect = getRect(dragEl$1, false, true, true);
            multiDragElements.forEach(function (multiDragElement) {
              if (multiDragElement === dragEl$1) { return; }
              setRect(multiDragElement, dragRect);
            });
            folding = true;
            initialFolding = true;
          }
        }

        sortable.animateAll(function () {
          folding = false;
          initialFolding = false;

          if (_this2.options.animation) {
            multiDragElements.forEach(function (multiDragElement) {
              unsetRect(multiDragElement);
            });
          } // Remove all auxiliary multidrag items from el, if sorting enabled


          if (_this2.options.sort) {
            removeMultiDragElements();
          }
        });
      },
      dragOver: function dragOver(_ref8) {
        var target = _ref8.target,
            completed = _ref8.completed,
            cancel = _ref8.cancel;

        if (folding && ~multiDragElements.indexOf(target)) {
          completed(false);
          cancel();
        }
      },
      revert: function revert(_ref9) {
        var fromSortable = _ref9.fromSortable,
            rootEl = _ref9.rootEl,
            sortable = _ref9.sortable,
            dragRect = _ref9.dragRect;

        if (multiDragElements.length > 1) {
          // Setup unfold animation
          multiDragElements.forEach(function (multiDragElement) {
            sortable.addAnimationState({
              target: multiDragElement,
              rect: folding ? getRect(multiDragElement) : dragRect
            });
            unsetRect(multiDragElement);
            multiDragElement.fromRect = dragRect;
            fromSortable.removeAnimationState(multiDragElement);
          });
          folding = false;
          insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
        }
      },
      dragOverCompleted: function dragOverCompleted(_ref10) {
        var sortable = _ref10.sortable,
            isOwner = _ref10.isOwner,
            insertion = _ref10.insertion,
            activeSortable = _ref10.activeSortable,
            parentEl = _ref10.parentEl,
            putSortable = _ref10.putSortable;
        var options = this.options;

        if (insertion) {
          // Clones must be hidden before folding animation to capture dragRectAbsolute properly
          if (isOwner) {
            activeSortable._hideClone();
          }

          initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

          if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
            // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
            var dragRectAbsolute = getRect(dragEl$1, false, true, true);
            multiDragElements.forEach(function (multiDragElement) {
              if (multiDragElement === dragEl$1) { return; }
              setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
              // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

              parentEl.appendChild(multiDragElement);
            });
            folding = true;
          } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


          if (!isOwner) {
            // Only remove if not folding (folding will remove them anyways)
            if (!folding) {
              removeMultiDragElements();
            }

            if (multiDragElements.length > 1) {
              var clonesHiddenBefore = clonesHidden;

              activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


              if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
                multiDragClones.forEach(function (clone) {
                  activeSortable.addAnimationState({
                    target: clone,
                    rect: clonesFromRect
                  });
                  clone.fromRect = clonesFromRect;
                  clone.thisAnimationDuration = null;
                });
              }
            } else {
              activeSortable._showClone(sortable);
            }
          }
        }
      },
      dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
        var dragRect = _ref11.dragRect,
            isOwner = _ref11.isOwner,
            activeSortable = _ref11.activeSortable;
        multiDragElements.forEach(function (multiDragElement) {
          multiDragElement.thisAnimationDuration = null;
        });

        if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
          clonesFromRect = _extends({}, dragRect);
          var dragMatrix = matrix(dragEl$1, true);
          clonesFromRect.top -= dragMatrix.f;
          clonesFromRect.left -= dragMatrix.e;
        }
      },
      dragOverAnimationComplete: function dragOverAnimationComplete() {
        if (folding) {
          folding = false;
          removeMultiDragElements();
        }
      },
      drop: function drop(_ref12) {
        var evt = _ref12.originalEvent,
            rootEl = _ref12.rootEl,
            parentEl = _ref12.parentEl,
            sortable = _ref12.sortable,
            dispatchSortableEvent = _ref12.dispatchSortableEvent,
            oldIndex = _ref12.oldIndex,
            putSortable = _ref12.putSortable;
        var toSortable = putSortable || this.sortable;
        if (!evt) { return; }
        var options = this.options,
            children = parentEl.children; // Multi-drag selection

        if (!dragStarted) {
          if (options.multiDragKey && !this.multiDragKeyDown) {
            this._deselectMultiDrag();
          }

          toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

          if (!~multiDragElements.indexOf(dragEl$1)) {
            multiDragElements.push(dragEl$1);
            dispatchEvent({
              sortable: sortable,
              rootEl: rootEl,
              name: 'select',
              targetEl: dragEl$1,
              originalEvt: evt
            }); // Modifier activated, select from last to dragEl

            if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
              var lastIndex = index(lastMultiDragSelect),
                  currentIndex = index(dragEl$1);

              if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
                // Must include lastMultiDragSelect (select it), in case modified selection from no selection
                // (but previous selection existed)
                var n, i;

                if (currentIndex > lastIndex) {
                  i = lastIndex;
                  n = currentIndex;
                } else {
                  i = currentIndex;
                  n = lastIndex + 1;
                }

                for (; i < n; i++) {
                  if (~multiDragElements.indexOf(children[i])) { continue; }
                  toggleClass(children[i], options.selectedClass, true);
                  multiDragElements.push(children[i]);
                  dispatchEvent({
                    sortable: sortable,
                    rootEl: rootEl,
                    name: 'select',
                    targetEl: children[i],
                    originalEvt: evt
                  });
                }
              }
            } else {
              lastMultiDragSelect = dragEl$1;
            }

            multiDragSortable = toSortable;
          } else {
            multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
            lastMultiDragSelect = null;
            dispatchEvent({
              sortable: sortable,
              rootEl: rootEl,
              name: 'deselect',
              targetEl: dragEl$1,
              originalEvt: evt
            });
          }
        } // Multi-drag drop


        if (dragStarted && this.isMultiDrag) {
          // Do not "unfold" after around dragEl if reverted
          if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
            var dragRect = getRect(dragEl$1),
                multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
            if (!initialFolding && options.animation) { dragEl$1.thisAnimationDuration = null; }
            toSortable.captureAnimationState();

            if (!initialFolding) {
              if (options.animation) {
                dragEl$1.fromRect = dragRect;
                multiDragElements.forEach(function (multiDragElement) {
                  multiDragElement.thisAnimationDuration = null;

                  if (multiDragElement !== dragEl$1) {
                    var rect = folding ? getRect(multiDragElement) : dragRect;
                    multiDragElement.fromRect = rect; // Prepare unfold animation

                    toSortable.addAnimationState({
                      target: multiDragElement,
                      rect: rect
                    });
                  }
                });
              } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
              // properly they must all be removed


              removeMultiDragElements();
              multiDragElements.forEach(function (multiDragElement) {
                if (children[multiDragIndex]) {
                  parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
                } else {
                  parentEl.appendChild(multiDragElement);
                }

                multiDragIndex++;
              }); // If initial folding is done, the elements may have changed position because they are now
              // unfolding around dragEl, even though dragEl may not have his index changed, so update event
              // must be fired here as Sortable will not.

              if (oldIndex === index(dragEl$1)) {
                var update = false;
                multiDragElements.forEach(function (multiDragElement) {
                  if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                    update = true;
                    return;
                  }
                });

                if (update) {
                  dispatchSortableEvent('update');
                }
              }
            } // Must be done after capturing individual rects (scroll bar)


            multiDragElements.forEach(function (multiDragElement) {
              unsetRect(multiDragElement);
            });
            toSortable.animateAll();
          }

          multiDragSortable = toSortable;
        } // Remove clones if necessary


        if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
          multiDragClones.forEach(function (clone) {
            clone.parentNode && clone.parentNode.removeChild(clone);
          });
        }
      },
      nullingGlobal: function nullingGlobal() {
        this.isMultiDrag = dragStarted = false;
        multiDragClones.length = 0;
      },
      destroyGlobal: function destroyGlobal() {
        this._deselectMultiDrag();

        off(document, 'pointerup', this._deselectMultiDrag);
        off(document, 'mouseup', this._deselectMultiDrag);
        off(document, 'touchend', this._deselectMultiDrag);
        off(document, 'keydown', this._checkKeyDown);
        off(document, 'keyup', this._checkKeyUp);
      },
      _deselectMultiDrag: function _deselectMultiDrag(evt) {
        if (typeof dragStarted !== "undefined" && dragStarted) { return; } // Only deselect if selection is in this sortable

        if (multiDragSortable !== this.sortable) { return; } // Only deselect if target is not item in this sortable

        if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) { return; } // Only deselect if left click

        if (evt && evt.button !== 0) { return; }

        while (multiDragElements.length) {
          var el = multiDragElements[0];
          toggleClass(el, this.options.selectedClass, false);
          multiDragElements.shift();
          dispatchEvent({
            sortable: this.sortable,
            rootEl: this.sortable.el,
            name: 'deselect',
            targetEl: el,
            originalEvt: evt
          });
        }
      },
      _checkKeyDown: function _checkKeyDown(evt) {
        if (evt.key === this.options.multiDragKey) {
          this.multiDragKeyDown = true;
        }
      },
      _checkKeyUp: function _checkKeyUp(evt) {
        if (evt.key === this.options.multiDragKey) {
          this.multiDragKeyDown = false;
        }
      }
    };
    return _extends(MultiDrag, {
      // Static methods & properties
      pluginName: 'multiDrag',
      utils: {
        /**
         * Selects the provided multi-drag item
         * @param  {HTMLElement} el    The element to be selected
         */
        select: function select(el) {
          var sortable = el.parentNode[expando];
          if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) { return; }

          if (multiDragSortable && multiDragSortable !== sortable) {
            multiDragSortable.multiDrag._deselectMultiDrag();

            multiDragSortable = sortable;
          }

          toggleClass(el, sortable.options.selectedClass, true);
          multiDragElements.push(el);
        },

        /**
         * Deselects the provided multi-drag item
         * @param  {HTMLElement} el    The element to be deselected
         */
        deselect: function deselect(el) {
          var sortable = el.parentNode[expando],
              index = multiDragElements.indexOf(el);
          if (!sortable || !sortable.options.multiDrag || !~index) { return; }
          toggleClass(el, sortable.options.selectedClass, false);
          multiDragElements.splice(index, 1);
        }
      },
      eventProperties: function eventProperties() {
        var _this3 = this;

        var oldIndicies = [],
            newIndicies = [];
        multiDragElements.forEach(function (multiDragElement) {
          oldIndicies.push({
            multiDragElement: multiDragElement,
            index: multiDragElement.sortableIndex
          }); // multiDragElements will already be sorted if folding

          var newIndex;

          if (folding && multiDragElement !== dragEl$1) {
            newIndex = -1;
          } else if (folding) {
            newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
          } else {
            newIndex = index(multiDragElement);
          }

          newIndicies.push({
            multiDragElement: multiDragElement,
            index: newIndex
          });
        });
        return {
          items: _toConsumableArray(multiDragElements),
          clones: [].concat(multiDragClones),
          oldIndicies: oldIndicies,
          newIndicies: newIndicies
        };
      },
      optionListeners: {
        multiDragKey: function multiDragKey(key) {
          key = key.toLowerCase();

          if (key === 'ctrl') {
            key = 'Control';
          } else if (key.length > 1) {
            key = key.charAt(0).toUpperCase() + key.substr(1);
          }

          return key;
        }
      }
    });
  }

  function insertMultiDragElements(clonesInserted, rootEl) {
    multiDragElements.forEach(function (multiDragElement, i) {
      var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

      if (target) {
        rootEl.insertBefore(multiDragElement, target);
      } else {
        rootEl.appendChild(multiDragElement);
      }
    });
  }
  /**
   * Insert multi-drag clones
   * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
   * @param  {HTMLElement} rootEl
   */


  function insertMultiDragClones(elementsInserted, rootEl) {
    multiDragClones.forEach(function (clone, i) {
      var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

      if (target) {
        rootEl.insertBefore(clone, target);
      } else {
        rootEl.appendChild(clone);
      }
    });
  }

  function removeMultiDragElements() {
    multiDragElements.forEach(function (multiDragElement) {
      if (multiDragElement === dragEl$1) { return; }
      multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
    });
  }

  Sortable.mount(new AutoScrollPlugin());
  Sortable.mount(Remove, Revert);

  var sortable_esm = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': Sortable,
    MultiDrag: MultiDragPlugin,
    Sortable: Sortable,
    Swap: SwapPlugin
  });

  var require$$0 = /*@__PURE__*/getAugmentedNamespace(sortable_esm);

  var vuedraggable_umd = createCommonjsModule(function (module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
  	{ module.exports = factory(require$$0); }
  })((typeof self !== 'undefined' ? self : commonjsGlobal), function(__WEBPACK_EXTERNAL_MODULE_a352__) {
  return /******/ (function(modules) { // webpackBootstrap
  /******/ 	// The module cache
  /******/ 	var installedModules = {};
  /******/
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/
  /******/ 		// Check if module is in cache
  /******/ 		if(installedModules[moduleId]) {
  /******/ 			return installedModules[moduleId].exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = installedModules[moduleId] = {
  /******/ 			i: moduleId,
  /******/ 			l: false,
  /******/ 			exports: {}
  /******/ 		};
  /******/
  /******/ 		// Execute the module function
  /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
  /******/
  /******/ 		// Flag the module as loaded
  /******/ 		module.l = true;
  /******/
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/
  /******/
  /******/ 	// expose the modules object (__webpack_modules__)
  /******/ 	__webpack_require__.m = modules;
  /******/
  /******/ 	// expose the module cache
  /******/ 	__webpack_require__.c = installedModules;
  /******/
  /******/ 	// define getter function for harmony exports
  /******/ 	__webpack_require__.d = function(exports, name, getter) {
  /******/ 		if(!__webpack_require__.o(exports, name)) {
  /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
  /******/ 		}
  /******/ 	};
  /******/
  /******/ 	// define __esModule on exports
  /******/ 	__webpack_require__.r = function(exports) {
  /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 		}
  /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 	};
  /******/
  /******/ 	// create a fake namespace object
  /******/ 	// mode & 1: value is a module id, require it
  /******/ 	// mode & 2: merge all properties of value into the ns
  /******/ 	// mode & 4: return value when already ns object
  /******/ 	// mode & 8|1: behave like require
  /******/ 	__webpack_require__.t = function(value, mode) {
  /******/ 		if(mode & 1) { value = __webpack_require__(value); }
  /******/ 		if(mode & 8) { return value; }
  /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) { return value; }
  /******/ 		var ns = Object.create(null);
  /******/ 		__webpack_require__.r(ns);
  /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
  /******/ 		if(mode & 2 && typeof value != 'string') { for(var key in value) { __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key)); } }
  /******/ 		return ns;
  /******/ 	};
  /******/
  /******/ 	// getDefaultExport function for compatibility with non-harmony modules
  /******/ 	__webpack_require__.n = function(module) {
  /******/ 		var getter = module && module.__esModule ?
  /******/ 			function getDefault() { return module['default']; } :
  /******/ 			function getModuleExports() { return module; };
  /******/ 		__webpack_require__.d(getter, 'a', getter);
  /******/ 		return getter;
  /******/ 	};
  /******/
  /******/ 	// Object.prototype.hasOwnProperty.call
  /******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /******/
  /******/ 	// __webpack_public_path__
  /******/ 	__webpack_require__.p = "";
  /******/
  /******/
  /******/ 	// Load entry module and return exports
  /******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
  /******/ })
  /************************************************************************/
  /******/ ({

  /***/ "01f9":
  /***/ (function(module, exports, __webpack_require__) {

  var LIBRARY = __webpack_require__("2d00");
  var $export = __webpack_require__("5ca1");
  var redefine = __webpack_require__("2aba");
  var hide = __webpack_require__("32e9");
  var Iterators = __webpack_require__("84f2");
  var $iterCreate = __webpack_require__("41a0");
  var setToStringTag = __webpack_require__("7f20");
  var getPrototypeOf = __webpack_require__("38fd");
  var ITERATOR = __webpack_require__("2b4c")('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () { return this; };

  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) { return proto[kind]; }
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') { hide(IteratorPrototype, ITERATOR, returnThis); }
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    // Plug for library
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) { for (key in methods) {
        if (!(key in proto)) { redefine(proto, key, methods[key]); }
      } } else { $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods); }
    }
    return methods;
  };


  /***/ }),

  /***/ "02f4":
  /***/ (function(module, exports, __webpack_require__) {

  var toInteger = __webpack_require__("4588");
  var defined = __webpack_require__("be13");
  // true  -> String#at
  // false -> String#codePointAt
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that));
      var i = toInteger(pos);
      var l = s.length;
      var a, b;
      if (i < 0 || i >= l) { return TO_STRING ? '' : undefined; }
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
        ? TO_STRING ? s.charAt(i) : a
        : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };


  /***/ }),

  /***/ "0390":
  /***/ (function(module, exports, __webpack_require__) {

  var at = __webpack_require__("02f4")(true);

   // `AdvanceStringIndex` abstract operation
  // https://tc39.github.io/ecma262/#sec-advancestringindex
  module.exports = function (S, index, unicode) {
    return index + (unicode ? at(S, index).length : 1);
  };


  /***/ }),

  /***/ "0bfb":
  /***/ (function(module, exports, __webpack_require__) {

  // 21.2.5.3 get RegExp.prototype.flags
  var anObject = __webpack_require__("cb7c");
  module.exports = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) { result += 'g'; }
    if (that.ignoreCase) { result += 'i'; }
    if (that.multiline) { result += 'm'; }
    if (that.unicode) { result += 'u'; }
    if (that.sticky) { result += 'y'; }
    return result;
  };


  /***/ }),

  /***/ "0d58":
  /***/ (function(module, exports, __webpack_require__) {

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  var $keys = __webpack_require__("ce10");
  var enumBugKeys = __webpack_require__("e11e");

  module.exports = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys);
  };


  /***/ }),

  /***/ "1495":
  /***/ (function(module, exports, __webpack_require__) {

  var dP = __webpack_require__("86cc");
  var anObject = __webpack_require__("cb7c");
  var getKeys = __webpack_require__("0d58");

  module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = getKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) { dP.f(O, P = keys[i++], Properties[P]); }
    return O;
  };


  /***/ }),

  /***/ "214f":
  /***/ (function(module, exports, __webpack_require__) {

  __webpack_require__("b0c5");
  var redefine = __webpack_require__("2aba");
  var hide = __webpack_require__("32e9");
  var fails = __webpack_require__("79e5");
  var defined = __webpack_require__("be13");
  var wks = __webpack_require__("2b4c");
  var regexpExec = __webpack_require__("520a");

  var SPECIES = wks('species');

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;
    re.exec = function () {
      var result = [];
      result.groups = { a: '7' };
      return result;
    };
    return ''.replace(re, '$<a>') !== '7';
  });

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
    // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () { return originalExec.apply(this, arguments); };
    var result = 'ab'.split(re);
    return result.length === 2 && result[0] === 'a' && result[1] === 'b';
  })();

  module.exports = function (KEY, length, exec) {
    var SYMBOL = wks(KEY);

    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () { return 7; };
      return ''[KEY](O) != 7;
    });

    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;
      re.exec = function () { execCalled = true; return null; };
      if (KEY === 'split') {
        // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES] = function () { return re; };
      }
      re[SYMBOL]('');
      return !execCalled;
    }) : undefined;

    if (
      !DELEGATES_TO_SYMBOL ||
      !DELEGATES_TO_EXEC ||
      (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
      (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
    ) {
      var nativeRegExpMethod = /./[SYMBOL];
      var fns = exec(
        defined,
        SYMBOL,
        ''[KEY],
        function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
          if (regexp.exec === regexpExec) {
            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
              // The native String method already delegates to @@method (this
              // polyfilled function), leasing to infinite recursion.
              // We avoid it by directly calling the native @@method method.
              return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
            }
            return { done: true, value: nativeMethod.call(str, regexp, arg2) };
          }
          return { done: false };
        }
      );
      var strfn = fns[0];
      var rxfn = fns[1];

      redefine(String.prototype, KEY, strfn);
      hide(RegExp.prototype, SYMBOL, length == 2
        // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
        // 21.2.5.11 RegExp.prototype[@@split](string, limit)
        ? function (string, arg) { return rxfn.call(string, this, arg); }
        // 21.2.5.6 RegExp.prototype[@@match](string)
        // 21.2.5.9 RegExp.prototype[@@search](string)
        : function (string) { return rxfn.call(string, this); }
      );
    }
  };


  /***/ }),

  /***/ "230e":
  /***/ (function(module, exports, __webpack_require__) {

  var isObject = __webpack_require__("d3f4");
  var document = __webpack_require__("7726").document;
  // typeof document.createElement is 'object' in old IE
  var is = isObject(document) && isObject(document.createElement);
  module.exports = function (it) {
    return is ? document.createElement(it) : {};
  };


  /***/ }),

  /***/ "23c6":
  /***/ (function(module, exports, __webpack_require__) {

  // getting tag from 19.1.3.6 Object.prototype.toString()
  var cof = __webpack_require__("2d95");
  var TAG = __webpack_require__("2b4c")('toStringTag');
  // ES3 wrong here
  var ARG = cof(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };

  module.exports = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
      // builtinTag case
      : ARG ? cof(O)
      // ES3 arguments fallback
      : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };


  /***/ }),

  /***/ "2621":
  /***/ (function(module, exports) {

  exports.f = Object.getOwnPropertySymbols;


  /***/ }),

  /***/ "2aba":
  /***/ (function(module, exports, __webpack_require__) {

  var global = __webpack_require__("7726");
  var hide = __webpack_require__("32e9");
  var has = __webpack_require__("69a8");
  var SRC = __webpack_require__("ca5a")('src');
  var $toString = __webpack_require__("fa5b");
  var TO_STRING = 'toString';
  var TPL = ('' + $toString).split(TO_STRING);

  __webpack_require__("8378").inspectSource = function (it) {
    return $toString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) { has(val, 'name') || hide(val, 'name', key); }
    if (O[key] === val) { return; }
    if (isFunction) { has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key))); }
    if (O === global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      hide(O, key, val);
    }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });


  /***/ }),

  /***/ "2aeb":
  /***/ (function(module, exports, __webpack_require__) {

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  var anObject = __webpack_require__("cb7c");
  var dPs = __webpack_require__("1495");
  var enumBugKeys = __webpack_require__("e11e");
  var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = __webpack_require__("230e")('iframe');
    var i = enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    __webpack_require__("fab2").appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) { delete createDict[PROTOTYPE][enumBugKeys[i]]; }
    return createDict();
  };

  module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else { result = createDict(); }
    return Properties === undefined ? result : dPs(result, Properties);
  };


  /***/ }),

  /***/ "2b4c":
  /***/ (function(module, exports, __webpack_require__) {

  var store = __webpack_require__("5537")('wks');
  var uid = __webpack_require__("ca5a");
  var Symbol = __webpack_require__("7726").Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
  };

  $exports.store = store;


  /***/ }),

  /***/ "2d00":
  /***/ (function(module, exports) {

  module.exports = false;


  /***/ }),

  /***/ "2d95":
  /***/ (function(module, exports) {

  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };


  /***/ }),

  /***/ "2fdb":
  /***/ (function(module, exports, __webpack_require__) {
  // 21.1.3.7 String.prototype.includes(searchString, position = 0)

  var $export = __webpack_require__("5ca1");
  var context = __webpack_require__("d2c8");
  var INCLUDES = 'includes';

  $export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~context(this, searchString, INCLUDES)
        .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });


  /***/ }),

  /***/ "32e9":
  /***/ (function(module, exports, __webpack_require__) {

  var dP = __webpack_require__("86cc");
  var createDesc = __webpack_require__("4630");
  module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
    return dP.f(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };


  /***/ }),

  /***/ "38fd":
  /***/ (function(module, exports, __webpack_require__) {

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  var has = __webpack_require__("69a8");
  var toObject = __webpack_require__("4bf8");
  var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
  var ObjectProto = Object.prototype;

  module.exports = Object.getPrototypeOf || function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) { return O[IE_PROTO]; }
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto : null;
  };


  /***/ }),

  /***/ "41a0":
  /***/ (function(module, exports, __webpack_require__) {

  var create = __webpack_require__("2aeb");
  var descriptor = __webpack_require__("4630");
  var setToStringTag = __webpack_require__("7f20");
  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  __webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };


  /***/ }),

  /***/ "456d":
  /***/ (function(module, exports, __webpack_require__) {

  // 19.1.2.14 Object.keys(O)
  var toObject = __webpack_require__("4bf8");
  var $keys = __webpack_require__("0d58");

  __webpack_require__("5eda")('keys', function () {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });


  /***/ }),

  /***/ "4588":
  /***/ (function(module, exports) {

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };


  /***/ }),

  /***/ "4630":
  /***/ (function(module, exports) {

  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };


  /***/ }),

  /***/ "4bf8":
  /***/ (function(module, exports, __webpack_require__) {

  // 7.1.13 ToObject(argument)
  var defined = __webpack_require__("be13");
  module.exports = function (it) {
    return Object(defined(it));
  };


  /***/ }),

  /***/ "5147":
  /***/ (function(module, exports, __webpack_require__) {

  var MATCH = __webpack_require__("2b4c")('match');
  module.exports = function (KEY) {
    var re = /./;
    try {
      '/./'[KEY](re);
    } catch (e) {
      try {
        re[MATCH] = false;
        return !'/./'[KEY](re);
      } catch (f) { /* empty */ }
    } return true;
  };


  /***/ }),

  /***/ "520a":
  /***/ (function(module, exports, __webpack_require__) {


  var regexpFlags = __webpack_require__("0bfb");

  var nativeExec = RegExp.prototype.exec;
  // This always refers to the native implementation, because the
  // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
  // which loads this file before patching the method.
  var nativeReplace = String.prototype.replace;

  var patchedExec = nativeExec;

  var LAST_INDEX = 'lastIndex';

  var UPDATES_LAST_INDEX_WRONG = (function () {
    var re1 = /a/,
        re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
  })();

  // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
      }
      if (UPDATES_LAST_INDEX_WRONG) { lastIndex = re[LAST_INDEX]; }

      match = nativeExec.call(re, str);

      if (UPDATES_LAST_INDEX_WRONG && match) {
        re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        // eslint-disable-next-line no-loop-func
        nativeReplace.call(match[0], reCopy, function () {
          var arguments$1 = arguments;

          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments$1[i] === undefined) { match[i] = undefined; }
          }
        });
      }

      return match;
    };
  }

  module.exports = patchedExec;


  /***/ }),

  /***/ "52a7":
  /***/ (function(module, exports) {

  exports.f = {}.propertyIsEnumerable;


  /***/ }),

  /***/ "5537":
  /***/ (function(module, exports, __webpack_require__) {

  var core = __webpack_require__("8378");
  var global = __webpack_require__("7726");
  var SHARED = '__core-js_shared__';
  var store = global[SHARED] || (global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: core.version,
    mode: __webpack_require__("2d00") ? 'pure' : 'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });


  /***/ }),

  /***/ "5ca1":
  /***/ (function(module, exports, __webpack_require__) {

  var global = __webpack_require__("7726");
  var core = __webpack_require__("8378");
  var hide = __webpack_require__("32e9");
  var redefine = __webpack_require__("2aba");
  var ctx = __webpack_require__("9b43");
  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) { source = name; }
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      // extend global
      if (target) { redefine(target, key, out, type & $export.U); }
      // export
      if (exports[key] != out) { hide(exports, key, exp); }
      if (IS_PROTO && expProto[key] != out) { expProto[key] = out; }
    }
  };
  global.core = core;
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  module.exports = $export;


  /***/ }),

  /***/ "5eda":
  /***/ (function(module, exports, __webpack_require__) {

  // most Object methods by ES6 should accept primitives
  var $export = __webpack_require__("5ca1");
  var core = __webpack_require__("8378");
  var fails = __webpack_require__("79e5");
  module.exports = function (KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY];
    var exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
  };


  /***/ }),

  /***/ "5f1b":
  /***/ (function(module, exports, __webpack_require__) {


  var classof = __webpack_require__("23c6");
  var builtinExec = RegExp.prototype.exec;

   // `RegExpExec` abstract operation
  // https://tc39.github.io/ecma262/#sec-regexpexec
  module.exports = function (R, S) {
    var exec = R.exec;
    if (typeof exec === 'function') {
      var result = exec.call(R, S);
      if (typeof result !== 'object') {
        throw new TypeError('RegExp exec method returned something other than an Object or null');
      }
      return result;
    }
    if (classof(R) !== 'RegExp') {
      throw new TypeError('RegExp#exec called on incompatible receiver');
    }
    return builtinExec.call(R, S);
  };


  /***/ }),

  /***/ "613b":
  /***/ (function(module, exports, __webpack_require__) {

  var shared = __webpack_require__("5537")('keys');
  var uid = __webpack_require__("ca5a");
  module.exports = function (key) {
    return shared[key] || (shared[key] = uid(key));
  };


  /***/ }),

  /***/ "626a":
  /***/ (function(module, exports, __webpack_require__) {

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var cof = __webpack_require__("2d95");
  // eslint-disable-next-line no-prototype-builtins
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };


  /***/ }),

  /***/ "6762":
  /***/ (function(module, exports, __webpack_require__) {

  // https://github.com/tc39/Array.prototype.includes
  var $export = __webpack_require__("5ca1");
  var $includes = __webpack_require__("c366")(true);

  $export($export.P, 'Array', {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  __webpack_require__("9c6c")('includes');


  /***/ }),

  /***/ "6821":
  /***/ (function(module, exports, __webpack_require__) {

  // to indexed object, toObject with fallback for non-array-like ES3 strings
  var IObject = __webpack_require__("626a");
  var defined = __webpack_require__("be13");
  module.exports = function (it) {
    return IObject(defined(it));
  };


  /***/ }),

  /***/ "69a8":
  /***/ (function(module, exports) {

  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };


  /***/ }),

  /***/ "6a99":
  /***/ (function(module, exports, __webpack_require__) {

  // 7.1.1 ToPrimitive(input [, PreferredType])
  var isObject = __webpack_require__("d3f4");
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  module.exports = function (it, S) {
    if (!isObject(it)) { return it; }
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) { return val; }
    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) { return val; }
    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) { return val; }
    throw TypeError("Can't convert object to primitive value");
  };


  /***/ }),

  /***/ "7333":
  /***/ (function(module, exports, __webpack_require__) {

  // 19.1.2.1 Object.assign(target, source, ...)
  var getKeys = __webpack_require__("0d58");
  var gOPS = __webpack_require__("2621");
  var pIE = __webpack_require__("52a7");
  var toObject = __webpack_require__("4bf8");
  var IObject = __webpack_require__("626a");
  var $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  module.exports = !$assign || __webpack_require__("79e5")(function () {
    var A = {};
    var B = {};
    // eslint-disable-next-line no-undef
    var S = Symbol();
    var K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) { B[k] = k; });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) {
    var arguments$1 = arguments;
   // eslint-disable-line no-unused-vars
    var T = toObject(target);
    var aLen = arguments.length;
    var index = 1;
    var getSymbols = gOPS.f;
    var isEnum = pIE.f;
    while (aLen > index) {
      var S = IObject(arguments$1[index++]);
      var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) { if (isEnum.call(S, key = keys[j++])) { T[key] = S[key]; } }
    } return T;
  } : $assign;


  /***/ }),

  /***/ "7726":
  /***/ (function(module, exports) {

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') { __g = global; } // eslint-disable-line no-undef


  /***/ }),

  /***/ "77f1":
  /***/ (function(module, exports, __webpack_require__) {

  var toInteger = __webpack_require__("4588");
  var max = Math.max;
  var min = Math.min;
  module.exports = function (index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };


  /***/ }),

  /***/ "79e5":
  /***/ (function(module, exports) {

  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };


  /***/ }),

  /***/ "7f20":
  /***/ (function(module, exports, __webpack_require__) {

  var def = __webpack_require__("86cc").f;
  var has = __webpack_require__("69a8");
  var TAG = __webpack_require__("2b4c")('toStringTag');

  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) { def(it, TAG, { configurable: true, value: tag }); }
  };


  /***/ }),

  /***/ "8378":
  /***/ (function(module, exports) {

  var core = module.exports = { version: '2.6.5' };
  if (typeof __e == 'number') { __e = core; } // eslint-disable-line no-undef


  /***/ }),

  /***/ "84f2":
  /***/ (function(module, exports) {

  module.exports = {};


  /***/ }),

  /***/ "86cc":
  /***/ (function(module, exports, __webpack_require__) {

  var anObject = __webpack_require__("cb7c");
  var IE8_DOM_DEFINE = __webpack_require__("c69a");
  var toPrimitive = __webpack_require__("6a99");
  var dP = Object.defineProperty;

  exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) { try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ } }
    if ('get' in Attributes || 'set' in Attributes) { throw TypeError('Accessors not supported!'); }
    if ('value' in Attributes) { O[P] = Attributes.value; }
    return O;
  };


  /***/ }),

  /***/ "9b43":
  /***/ (function(module, exports, __webpack_require__) {

  // optional / simple context binding
  var aFunction = __webpack_require__("d8e8");
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) { return fn; }
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };


  /***/ }),

  /***/ "9c6c":
  /***/ (function(module, exports, __webpack_require__) {

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
  var ArrayProto = Array.prototype;
  if (ArrayProto[UNSCOPABLES] == undefined) { __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {}); }
  module.exports = function (key) {
    ArrayProto[UNSCOPABLES][key] = true;
  };


  /***/ }),

  /***/ "9def":
  /***/ (function(module, exports, __webpack_require__) {

  // 7.1.15 ToLength
  var toInteger = __webpack_require__("4588");
  var min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };


  /***/ }),

  /***/ "9e1e":
  /***/ (function(module, exports, __webpack_require__) {

  // Thank's IE8 for his funny defineProperty
  module.exports = !__webpack_require__("79e5")(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });


  /***/ }),

  /***/ "a352":
  /***/ (function(module, exports) {

  module.exports = __WEBPACK_EXTERNAL_MODULE_a352__;

  /***/ }),

  /***/ "a481":
  /***/ (function(module, exports, __webpack_require__) {


  var anObject = __webpack_require__("cb7c");
  var toObject = __webpack_require__("4bf8");
  var toLength = __webpack_require__("9def");
  var toInteger = __webpack_require__("4588");
  var advanceStringIndex = __webpack_require__("0390");
  var regExpExec = __webpack_require__("5f1b");
  var max = Math.max;
  var min = Math.min;
  var floor = Math.floor;
  var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  };

  // @@replace logic
  __webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
    return [
      // `String.prototype.replace` method
      // https://tc39.github.io/ecma262/#sec-string.prototype.replace
      function replace(searchValue, replaceValue) {
        var O = defined(this);
        var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
        return fn !== undefined
          ? fn.call(searchValue, O, replaceValue)
          : $replace.call(String(O), searchValue, replaceValue);
      },
      // `RegExp.prototype[@@replace]` method
      // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
      function (regexp, replaceValue) {
        var res = maybeCallNative($replace, regexp, this, replaceValue);
        if (res.done) { return res.value; }

        var rx = anObject(regexp);
        var S = String(this);
        var functionalReplace = typeof replaceValue === 'function';
        if (!functionalReplace) { replaceValue = String(replaceValue); }
        var global = rx.global;
        if (global) {
          var fullUnicode = rx.unicode;
          rx.lastIndex = 0;
        }
        var results = [];
        while (true) {
          var result = regExpExec(rx, S);
          if (result === null) { break; }
          results.push(result);
          if (!global) { break; }
          var matchStr = String(result[0]);
          if (matchStr === '') { rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode); }
        }
        var accumulatedResult = '';
        var nextSourcePosition = 0;
        for (var i = 0; i < results.length; i++) {
          result = results[i];
          var matched = String(result[0]);
          var position = max(min(toInteger(result.index), S.length), 0);
          var captures = [];
          // NOTE: This is equivalent to
          //   captures = result.slice(1).map(maybeToString)
          // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
          // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
          // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
          for (var j = 1; j < result.length; j++) { captures.push(maybeToString(result[j])); }
          var namedCaptures = result.groups;
          if (functionalReplace) {
            var replacerArgs = [matched].concat(captures, position, S);
            if (namedCaptures !== undefined) { replacerArgs.push(namedCaptures); }
            var replacement = String(replaceValue.apply(undefined, replacerArgs));
          } else {
            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
          }
          if (position >= nextSourcePosition) {
            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
            nextSourcePosition = position + matched.length;
          }
        }
        return accumulatedResult + S.slice(nextSourcePosition);
      }
    ];

      // https://tc39.github.io/ecma262/#sec-getsubstitution
    function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
      var tailPos = position + matched.length;
      var m = captures.length;
      var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
      if (namedCaptures !== undefined) {
        namedCaptures = toObject(namedCaptures);
        symbols = SUBSTITUTION_SYMBOLS;
      }
      return $replace.call(replacement, symbols, function (match, ch) {
        var capture;
        switch (ch.charAt(0)) {
          case '$': return '$';
          case '&': return matched;
          case '`': return str.slice(0, position);
          case "'": return str.slice(tailPos);
          case '<':
            capture = namedCaptures[ch.slice(1, -1)];
            break;
          default: // \d\d?
            var n = +ch;
            if (n === 0) { return match; }
            if (n > m) {
              var f = floor(n / 10);
              if (f === 0) { return match; }
              if (f <= m) { return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1); }
              return match;
            }
            capture = captures[n - 1];
        }
        return capture === undefined ? '' : capture;
      });
    }
  });


  /***/ }),

  /***/ "aae3":
  /***/ (function(module, exports, __webpack_require__) {

  // 7.2.8 IsRegExp(argument)
  var isObject = __webpack_require__("d3f4");
  var cof = __webpack_require__("2d95");
  var MATCH = __webpack_require__("2b4c")('match');
  module.exports = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
  };


  /***/ }),

  /***/ "ac6a":
  /***/ (function(module, exports, __webpack_require__) {

  var $iterators = __webpack_require__("cadf");
  var getKeys = __webpack_require__("0d58");
  var redefine = __webpack_require__("2aba");
  var global = __webpack_require__("7726");
  var hide = __webpack_require__("32e9");
  var Iterators = __webpack_require__("84f2");
  var wks = __webpack_require__("2b4c");
  var ITERATOR = wks('iterator');
  var TO_STRING_TAG = wks('toStringTag');
  var ArrayValues = Iterators.Array;

  var DOMIterables = {
    CSSRuleList: true, // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true, // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true, // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
    var NAME = collections[i];
    var explicit = DOMIterables[NAME];
    var Collection = global[NAME];
    var proto = Collection && Collection.prototype;
    var key;
    if (proto) {
      if (!proto[ITERATOR]) { hide(proto, ITERATOR, ArrayValues); }
      if (!proto[TO_STRING_TAG]) { hide(proto, TO_STRING_TAG, NAME); }
      Iterators[NAME] = ArrayValues;
      if (explicit) { for (key in $iterators) { if (!proto[key]) { redefine(proto, key, $iterators[key], true); } } }
    }
  }


  /***/ }),

  /***/ "b0c5":
  /***/ (function(module, exports, __webpack_require__) {

  var regexpExec = __webpack_require__("520a");
  __webpack_require__("5ca1")({
    target: 'RegExp',
    proto: true,
    forced: regexpExec !== /./.exec
  }, {
    exec: regexpExec
  });


  /***/ }),

  /***/ "be13":
  /***/ (function(module, exports) {

  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) { throw TypeError("Can't call method on  " + it); }
    return it;
  };


  /***/ }),

  /***/ "c366":
  /***/ (function(module, exports, __webpack_require__) {

  // false -> Array#indexOf
  // true  -> Array#includes
  var toIObject = __webpack_require__("6821");
  var toLength = __webpack_require__("9def");
  var toAbsoluteIndex = __webpack_require__("77f1");
  module.exports = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) { while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) { return true; }
      // Array#indexOf ignores holes, Array#includes - not
      } } else { for (;length > index; index++) { if (IS_INCLUDES || index in O) {
        if (O[index] === el) { return IS_INCLUDES || index || 0; }
      } } } return !IS_INCLUDES && -1;
    };
  };


  /***/ }),

  /***/ "c649":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  /* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return insertNodeAt; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return console; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeNode; });
  /* harmony import */ __webpack_require__("a481");


  function getConsole() {
    if (typeof window !== "undefined") {
      return window.console;
    }

    return global.console;
  }

  var console = getConsole();

  function cached(fn) {
    var cache = Object.create(null);
    return function cachedFn(str) {
      var hit = cache[str];
      return hit || (cache[str] = fn(str));
    };
  }

  var regex = /-(\w)/g;
  var camelize = cached(function (str) {
    return str.replace(regex, function (_, c) {
      return c ? c.toUpperCase() : "";
    });
  });

  function removeNode(node) {
    if (node.parentElement !== null) {
      node.parentElement.removeChild(node);
    }
  }

  function insertNodeAt(fatherNode, node, position) {
    var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
    fatherNode.insertBefore(node, refNode);
  }


  /* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")));

  /***/ }),

  /***/ "c69a":
  /***/ (function(module, exports, __webpack_require__) {

  module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
    return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
  });


  /***/ }),

  /***/ "c8ba":
  /***/ (function(module, exports) {

  var g;

  // This works in non-strict mode
  g = (function() {
  	return this;
  })();

  try {
  	// This works if eval is allowed (see CSP)
  	g = g || new Function("return this")();
  } catch (e) {
  	// This works if the window reference is available
  	if (typeof window === "object") { g = window; }
  }

  // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}

  module.exports = g;


  /***/ }),

  /***/ "ca5a":
  /***/ (function(module, exports) {

  var id = 0;
  var px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };


  /***/ }),

  /***/ "cadf":
  /***/ (function(module, exports, __webpack_require__) {

  var addToUnscopables = __webpack_require__("9c6c");
  var step = __webpack_require__("d53b");
  var Iterators = __webpack_require__("84f2");
  var toIObject = __webpack_require__("6821");

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') { return step(0, index); }
    if (kind == 'values') { return step(0, O[index]); }
    return step(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators.Arguments = Iterators.Array;

  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');


  /***/ }),

  /***/ "cb7c":
  /***/ (function(module, exports, __webpack_require__) {

  var isObject = __webpack_require__("d3f4");
  module.exports = function (it) {
    if (!isObject(it)) { throw TypeError(it + ' is not an object!'); }
    return it;
  };


  /***/ }),

  /***/ "ce10":
  /***/ (function(module, exports, __webpack_require__) {

  var has = __webpack_require__("69a8");
  var toIObject = __webpack_require__("6821");
  var arrayIndexOf = __webpack_require__("c366")(false);
  var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

  module.exports = function (object, names) {
    var O = toIObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) { if (key != IE_PROTO) { has(O, key) && result.push(key); } }
    // Don't enum bug & hidden keys
    while (names.length > i) { if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    } }
    return result;
  };


  /***/ }),

  /***/ "d2c8":
  /***/ (function(module, exports, __webpack_require__) {

  // helper for String#{startsWith, endsWith, includes}
  var isRegExp = __webpack_require__("aae3");
  var defined = __webpack_require__("be13");

  module.exports = function (that, searchString, NAME) {
    if (isRegExp(searchString)) { throw TypeError('String#' + NAME + " doesn't accept regex!"); }
    return String(defined(that));
  };


  /***/ }),

  /***/ "d3f4":
  /***/ (function(module, exports) {

  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };


  /***/ }),

  /***/ "d53b":
  /***/ (function(module, exports) {

  module.exports = function (done, value) {
    return { value: value, done: !!done };
  };


  /***/ }),

  /***/ "d8e8":
  /***/ (function(module, exports) {

  module.exports = function (it) {
    if (typeof it != 'function') { throw TypeError(it + ' is not a function!'); }
    return it;
  };


  /***/ }),

  /***/ "e11e":
  /***/ (function(module, exports) {

  // IE 8- don't enum bug keys
  module.exports = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');


  /***/ }),

  /***/ "f559":
  /***/ (function(module, exports, __webpack_require__) {
  // 21.1.3.18 String.prototype.startsWith(searchString [, position ])

  var $export = __webpack_require__("5ca1");
  var toLength = __webpack_require__("9def");
  var context = __webpack_require__("d2c8");
  var STARTS_WITH = 'startsWith';
  var $startsWith = ''[STARTS_WITH];

  $export($export.P + $export.F * __webpack_require__("5147")(STARTS_WITH), 'String', {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = context(this, searchString, STARTS_WITH);
      var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = String(searchString);
      return $startsWith
        ? $startsWith.call(that, search, index)
        : that.slice(index, index + search.length) === search;
    }
  });


  /***/ }),

  /***/ "f6fd":
  /***/ (function(module, exports) {

  // document.currentScript polyfill by Adam Miller

  // MIT license

  (function(document){
    var currentScript = "currentScript",
        scripts = document.getElementsByTagName('script'); // Live NodeList collection

    // If browser needs currentScript polyfill, add get currentScript() to the document object
    if (!(currentScript in document)) {
      Object.defineProperty(document, currentScript, {
        get: function(){

          // IE 6-10 supports script readyState
          // IE 10+ support stack trace
          try { throw new Error(); }
          catch (err) {

            // Find the second match for the "at" string to get file src url from stack.
            // Specifically works with the format of stack traces in IE.
            var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

            // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
            for(i in scripts){
              if(scripts[i].src == res || scripts[i].readyState == "interactive"){
                return scripts[i];
              }
            }

            // If no match, return null
            return null;
          }
        }
      });
    }
  })(document);


  /***/ }),

  /***/ "f751":
  /***/ (function(module, exports, __webpack_require__) {

  // 19.1.3.1 Object.assign(target, source)
  var $export = __webpack_require__("5ca1");

  $export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


  /***/ }),

  /***/ "fa5b":
  /***/ (function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


  /***/ }),

  /***/ "fab2":
  /***/ (function(module, exports, __webpack_require__) {

  var document = __webpack_require__("7726").document;
  module.exports = document && document.documentElement;


  /***/ }),

  /***/ "fb15":
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  // ESM COMPAT FLAG
  __webpack_require__.r(__webpack_exports__);

  // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
  // This file is imported into lib/wc client bundles.

  if (typeof window !== 'undefined') {
    {
      __webpack_require__("f6fd");
    }

    var setPublicPath_i;
    if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
      __webpack_require__.p = setPublicPath_i[1]; // eslint-disable-line
    }
  }

  // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
  __webpack_require__("f751");

  // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
  __webpack_require__("f559");

  // EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
  __webpack_require__("ac6a");

  // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
  __webpack_require__("cadf");

  // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
  __webpack_require__("456d");

  // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) { return arr; }
  }
  // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) { return; }
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) { break; }
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) { _i["return"](); }
      } finally {
        if (_d) { throw _e; }
      }
    }

    return _arr;
  }
  // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) { len = arr.length; }

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
  // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) { return; }
    if (typeof o === "string") { return _arrayLikeToArray(o, minLen); }
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) { n = o.constructor.name; }
    if (n === "Map" || n === "Set") { return Array.from(o); }
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) { return _arrayLikeToArray(o, minLen); }
  }
  // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  // EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
  __webpack_require__("6762");

  // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
  __webpack_require__("2fdb");

  // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) { return _arrayLikeToArray(arr); }
  }
  // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) { return Array.from(iter); }
  }
  // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  // CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  // EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
  var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
  var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

  // EXTERNAL MODULE: ./src/util/helper.js
  var helper = __webpack_require__("c649");

  // CONCATENATED MODULE: ./src/vuedraggable.js












  function buildAttribute(object, propName, value) {
    if (value === undefined) {
      return object;
    }

    object = object || {};
    object[propName] = value;
    return object;
  }

  function computeVmIndex(vnodes, element) {
    return vnodes.map(function (elt) {
      return elt.elm;
    }).indexOf(element);
  }

  function _computeIndexes(slots, children, isTransition, footerOffset) {
    if (!slots) {
      return [];
    }

    var elmFromNodes = slots.map(function (elt) {
      return elt.elm;
    });
    var footerIndex = children.length - footerOffset;

    var rawIndexes = _toConsumableArray(children).map(function (elt, idx) {
      return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
    });

    return isTransition ? rawIndexes.filter(function (ind) {
      return ind !== -1;
    }) : rawIndexes;
  }

  function emit(evtName, evtData) {
    var _this = this;

    this.$nextTick(function () {
      return _this.$emit(evtName.toLowerCase(), evtData);
    });
  }

  function delegateAndEmit(evtName) {
    var _this2 = this;

    return function (evtData) {
      if (_this2.realList !== null) {
        _this2["onDrag" + evtName](evtData);
      }

      emit.call(_this2, evtName, evtData);
    };
  }

  function isTransitionName(name) {
    return ["transition-group", "TransitionGroup"].includes(name);
  }

  function vuedraggable_isTransition(slots) {
    if (!slots || slots.length !== 1) {
      return false;
    }

    var _slots = _slicedToArray(slots, 1),
        componentOptions = _slots[0].componentOptions;

    if (!componentOptions) {
      return false;
    }

    return isTransitionName(componentOptions.tag);
  }

  function getSlot(slot, scopedSlot, key) {
    return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
  }

  function computeChildrenAndOffsets(children, slot, scopedSlot) {
    var headerOffset = 0;
    var footerOffset = 0;
    var header = getSlot(slot, scopedSlot, "header");

    if (header) {
      headerOffset = header.length;
      children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
    }

    var footer = getSlot(slot, scopedSlot, "footer");

    if (footer) {
      footerOffset = footer.length;
      children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
    }

    return {
      children: children,
      headerOffset: headerOffset,
      footerOffset: footerOffset
    };
  }

  function getComponentAttributes($attrs, componentData) {
    var attributes = null;

    var update = function update(name, value) {
      attributes = buildAttribute(attributes, name, value);
    };

    var attrs = Object.keys($attrs).filter(function (key) {
      return key === "id" || key.startsWith("data-");
    }).reduce(function (res, key) {
      res[key] = $attrs[key];
      return res;
    }, {});
    update("attrs", attrs);

    if (!componentData) {
      return attributes;
    }

    var on = componentData.on,
        props = componentData.props,
        componentDataAttrs = componentData.attrs;
    update("on", on);
    update("props", props);
    Object.assign(attributes.attrs, componentDataAttrs);
    return attributes;
  }

  var eventsListened = ["Start", "Add", "Remove", "Update", "End"];
  var eventsToEmit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
  var readonlyProperties = ["Move"].concat(eventsListened, eventsToEmit).map(function (evt) {
    return "on" + evt;
  });
  var draggingElement = null;
  var props = {
    options: Object,
    list: {
      type: Array,
      required: false,
      default: null
    },
    value: {
      type: Array,
      required: false,
      default: null
    },
    noTransitionOnDrag: {
      type: Boolean,
      default: false
    },
    clone: {
      type: Function,
      default: function _default(original) {
        return original;
      }
    },
    element: {
      type: String,
      default: "div"
    },
    tag: {
      type: String,
      default: null
    },
    move: {
      type: Function,
      default: null
    },
    componentData: {
      type: Object,
      required: false,
      default: null
    }
  };
  var draggableComponent = {
    name: "draggable",
    inheritAttrs: false,
    props: props,
    data: function data() {
      return {
        transitionMode: false,
        noneFunctionalComponentMode: false
      };
    },
    render: function render(h) {
      var slots = this.$slots.default;
      this.transitionMode = vuedraggable_isTransition(slots);

      var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots),
          children = _computeChildrenAndOf.children,
          headerOffset = _computeChildrenAndOf.headerOffset,
          footerOffset = _computeChildrenAndOf.footerOffset;

      this.headerOffset = headerOffset;
      this.footerOffset = footerOffset;
      var attributes = getComponentAttributes(this.$attrs, this.componentData);
      return h(this.getTag(), attributes, children);
    },
    created: function created() {
      if (this.list !== null && this.value !== null) {
        helper["b" /* console */].error("Value and list props are mutually exclusive! Please set one or another.");
      }

      if (this.element !== "div") {
        helper["b" /* console */].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
      }

      if (this.options !== undefined) {
        helper["b" /* console */].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
      }
    },
    mounted: function mounted() {
      var _this3 = this;

      this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();

      if (this.noneFunctionalComponentMode && this.transitionMode) {
        throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
      }

      var optionsAdded = {};
      eventsListened.forEach(function (elt) {
        optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
      });
      eventsToEmit.forEach(function (elt) {
        optionsAdded["on" + elt] = emit.bind(_this3, elt);
      });
      var attributes = Object.keys(this.$attrs).reduce(function (res, key) {
        res[Object(helper["a" /* camelize */])(key)] = _this3.$attrs[key];
        return res;
      }, {});
      var options = Object.assign({}, this.options, attributes, optionsAdded, {
        onMove: function onMove(evt, originalEvent) {
          return _this3.onDragMove(evt, originalEvent);
        }
      });
      !("draggable" in options) && (options.draggable = ">*");
      this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
      this.computeIndexes();
    },
    beforeDestroy: function beforeDestroy() {
      if (this._sortable !== undefined) { this._sortable.destroy(); }
    },
    computed: {
      rootContainer: function rootContainer() {
        return this.transitionMode ? this.$el.children[0] : this.$el;
      },
      realList: function realList() {
        return this.list ? this.list : this.value;
      }
    },
    watch: {
      options: {
        handler: function handler(newOptionValue) {
          this.updateOptions(newOptionValue);
        },
        deep: true
      },
      $attrs: {
        handler: function handler(newOptionValue) {
          this.updateOptions(newOptionValue);
        },
        deep: true
      },
      realList: function realList() {
        this.computeIndexes();
      }
    },
    methods: {
      getIsFunctional: function getIsFunctional() {
        var fnOptions = this._vnode.fnOptions;
        return fnOptions && fnOptions.functional;
      },
      getTag: function getTag() {
        return this.tag || this.element;
      },
      updateOptions: function updateOptions(newOptionValue) {
        for (var property in newOptionValue) {
          var value = Object(helper["a" /* camelize */])(property);

          if (readonlyProperties.indexOf(value) === -1) {
            this._sortable.option(value, newOptionValue[property]);
          }
        }
      },
      getChildrenNodes: function getChildrenNodes() {
        if (this.noneFunctionalComponentMode) {
          return this.$children[0].$slots.default;
        }

        var rawNodes = this.$slots.default;
        return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
      },
      computeIndexes: function computeIndexes() {
        var _this4 = this;

        this.$nextTick(function () {
          _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
        });
      },
      getUnderlyingVm: function getUnderlyingVm(htmlElt) {
        var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);

        if (index === -1) {
          //Edge case during move callback: related element might be
          //an element different from collection
          return null;
        }

        var element = this.realList[index];
        return {
          index: index,
          element: element
        };
      },
      getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
        var vue = _ref.__vue__;

        if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
          if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) { return vue.$children[0]; }
          return vue;
        }

        return vue.$parent;
      },
      emitChanges: function emitChanges(evt) {
        var _this5 = this;

        this.$nextTick(function () {
          _this5.$emit("change", evt);
        });
      },
      alterList: function alterList(onList) {
        if (this.list) {
          onList(this.list);
          return;
        }

        var newList = _toConsumableArray(this.value);

        onList(newList);
        this.$emit("input", newList);
      },
      spliceList: function spliceList() {
        var _arguments = arguments;

        var spliceList = function spliceList(list) {
          return list.splice.apply(list, _toConsumableArray(_arguments));
        };

        this.alterList(spliceList);
      },
      updatePosition: function updatePosition(oldIndex, newIndex) {
        var updatePosition = function updatePosition(list) {
          return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
        };

        this.alterList(updatePosition);
      },
      getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
        var to = _ref2.to,
            related = _ref2.related;
        var component = this.getUnderlyingPotencialDraggableComponent(to);

        if (!component) {
          return {
            component: component
          };
        }

        var list = component.realList;
        var context = {
          list: list,
          component: component
        };

        if (to !== related && list && component.getUnderlyingVm) {
          var destination = component.getUnderlyingVm(related);

          if (destination) {
            return Object.assign(destination, context);
          }
        }

        return context;
      },
      getVmIndex: function getVmIndex(domIndex) {
        var indexes = this.visibleIndexes;
        var numberIndexes = indexes.length;
        return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
      },
      getComponent: function getComponent() {
        return this.$slots.default[0].componentInstance;
      },
      resetTransitionData: function resetTransitionData(index) {
        if (!this.noTransitionOnDrag || !this.transitionMode) {
          return;
        }

        var nodes = this.getChildrenNodes();
        nodes[index].data = null;
        var transitionContainer = this.getComponent();
        transitionContainer.children = [];
        transitionContainer.kept = undefined;
      },
      onDragStart: function onDragStart(evt) {
        this.context = this.getUnderlyingVm(evt.item);
        evt.item._underlying_vm_ = this.clone(this.context.element);
        draggingElement = evt.item;
      },
      onDragAdd: function onDragAdd(evt) {
        var element = evt.item._underlying_vm_;

        if (element === undefined) {
          return;
        }

        Object(helper["d" /* removeNode */])(evt.item);
        var newIndex = this.getVmIndex(evt.newIndex);
        this.spliceList(newIndex, 0, element);
        this.computeIndexes();
        var added = {
          element: element,
          newIndex: newIndex
        };
        this.emitChanges({
          added: added
        });
      },
      onDragRemove: function onDragRemove(evt) {
        Object(helper["c" /* insertNodeAt */])(this.rootContainer, evt.item, evt.oldIndex);

        if (evt.pullMode === "clone") {
          Object(helper["d" /* removeNode */])(evt.clone);
          return;
        }

        var oldIndex = this.context.index;
        this.spliceList(oldIndex, 1);
        var removed = {
          element: this.context.element,
          oldIndex: oldIndex
        };
        this.resetTransitionData(oldIndex);
        this.emitChanges({
          removed: removed
        });
      },
      onDragUpdate: function onDragUpdate(evt) {
        Object(helper["d" /* removeNode */])(evt.item);
        Object(helper["c" /* insertNodeAt */])(evt.from, evt.item, evt.oldIndex);
        var oldIndex = this.context.index;
        var newIndex = this.getVmIndex(evt.newIndex);
        this.updatePosition(oldIndex, newIndex);
        var moved = {
          element: this.context.element,
          oldIndex: oldIndex,
          newIndex: newIndex
        };
        this.emitChanges({
          moved: moved
        });
      },
      updateProperty: function updateProperty(evt, propertyName) {
        evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
      },
      computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
        if (!relatedContext.element) {
          return 0;
        }

        var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
          return el.style["display"] !== "none";
        });

        var currentDOMIndex = domChildren.indexOf(evt.related);
        var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
        var draggedInList = domChildren.indexOf(draggingElement) !== -1;
        return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
      },
      onDragMove: function onDragMove(evt, originalEvent) {
        var onMove = this.move;

        if (!onMove || !this.realList) {
          return true;
        }

        var relatedContext = this.getRelatedContextFromMoveEvent(evt);
        var draggedContext = this.context;
        var futureIndex = this.computeFutureIndex(relatedContext, evt);
        Object.assign(draggedContext, {
          futureIndex: futureIndex
        });
        var sendEvt = Object.assign({}, evt, {
          relatedContext: relatedContext,
          draggedContext: draggedContext
        });
        return onMove(sendEvt, originalEvent);
      },
      onDragEnd: function onDragEnd() {
        this.computeIndexes();
        draggingElement = null;
      }
    }
  };

  if (typeof window !== "undefined" && "Vue" in window) {
    window.Vue.component("draggable", draggableComponent);
  }

  /* harmony default export */ var vuedraggable = (draggableComponent);
  // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


  /* harmony default export */ __webpack_exports__["default"] = (vuedraggable);



  /***/ })

  /******/ })["default"];
  });
  //# sourceMappingURL=vuedraggable.umd.js.map
  });

  var draggable = /*@__PURE__*/getDefaultExportFromCjs(vuedraggable_umd);

  function createMenu() {
    return [{
      name: 'main',
      title: '选项',
      list: [name$e, phone, weixin, sex, email, business]
    }, {
      name: 'aide',
      title: '通用字段',
      list: [text, textarea, select, selectMore, radio, checkbox, time, date]
    }, {
      name: 'layout',
      title: '展示信息',
      list: [image]
    }];
  }

  /*!
   * @form-create/element-ui v2.5.19
   * (c) 2018-2022 xaboy
   * Github https://github.com/xaboy/form-create
   * Released under the MIT License.
   */

  var formCreate_min = createCommonjsModule(function (module, exports) {
  !function(e,t){t(exports,require("vue"));}(commonjsGlobal,function(exports,Vue){function _extends(){return (_extends=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++){ for(var r in t=arguments[n]){ Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]); } }return e}).apply(this,arguments)}Vue=Vue&&Object.prototype.hasOwnProperty.call(Vue,"default")?Vue.default:Vue;var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(e){return e.reduce(function(e,t){for(var n in t){ if(e[n]){ if(-1!==normalMerge.indexOf(n)){ e[n]=_extends({},e[n],t[n]); }else if(-1!==toArrayMerge.indexOf(n)){var r=e[n]instanceof Array?e[n]:[e[n]],i=t[n]instanceof Array?t[n]:[t[n]];e[n]=r.concat(i);}else if(-1!==functionalMerge.indexOf(n)){ for(var o in t[n]){ if(e[n][o]){var a=e[n][o]instanceof Array?e[n][o]:[e[n][o]],s=t[n][o]instanceof Array?t[n][o]:[t[n][o]];e[n][o]=a.concat(s);}else { e[n][o]=t[n][o]; } } }else if("hook"==n){ for(var u in t[n]){ e[n][u]=e[n][u]?mergeFn(e[n][u],t[n][u]):t[n][u]; } }else { e[n]=t[n]; } }else { e[n]=t[n]; } }return e},{})},mergeFn=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments);}},helper=mergeJsxProps;function _typeof(e){return (_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t)){ throw new TypeError("Cannot call a class as a function") }}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r);}return n}function _objectSpread2(e){
  var arguments$1 = arguments;
  for(var t=1;t<arguments.length;t++){var n=null!=arguments$1[t]?arguments$1[t]:{};t%2?ownKeys(Object(n),!0).forEach(function(t){_defineProperty(e,t,n[t]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));});}return e}function _inherits(e,t){if("function"!=typeof t&&null!==t){ throw new TypeError("Super expression must either be null or a function"); }e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t);}function _getPrototypeOf(e){return (_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return (_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct){ return !1; }if(Reflect.construct.sham){ return !1; }if("function"==typeof Proxy){ return !0; }try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return !1}}function _assertThisInitialized(e){if(void 0===e){ throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); }return e}function _possibleConstructorReturn(e,t){return !t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,i);}else { n=r.apply(this,arguments); }return _possibleConstructorReturn(this,n)}}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e)){ return _arrayLikeToArray(e) }}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){ return Array.from(e) }}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e){ return _arrayLikeToArray(e,t); }var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++){ r[n]=e[n]; }return r}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function getSlot(e,t){return Object.keys(e).reduce(function(n,r){return t&&-1!==t.indexOf(r)||n.push(e[r]),n},[])}var NAME="fcCheckbox",Checkbox={name:NAME,props:{formCreateInject:{type:Object,required:!0},value:{type:Array,default:function(){return []}},type:String},watch:{"formCreateInject.options":{handler:function(){this.update();},deep:!0},value:function(){this.update();}},data:function(){return {trueValue:[]}},methods:{options:function(){var e=this.formCreateInject.options;return Array.isArray(e)?e:[]},onInput:function(e){this.$emit("input",this.options().filter(function(t){return -1!==e.indexOf(t.label)}).map(function(e){return e.value}).filter(function(e){return void 0!==e}));},update:function(){var e=this;this.trueValue=this.value?this.options().filter(function(t){return -1!==e.value.indexOf(t.value)}).map(function(e){return e.label}):[];}},created:function(){this.update();},render:function(){var e=this,t=arguments[0];return t("ElCheckboxGroup",helper([{},this.formCreateInject.prop,{attrs:{value:this.trueValue},on:{input:this.onInput}}]),[this.options().map(function(n,r){var i=_objectSpread2({},n),o="button"===e.type?"ElCheckboxButton":"ElCheckbox";return delete i.value,t(o,{props:_objectSpread2({},i),key:o+r+n.value})}),getSlot(this.$slots)])}};function toArray(e){return Array.isArray(e)?e:[null,void 0,""].indexOf(e)>-1?[]:[e]}function styleInject(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e));}}var css_248z="._fc-frame .fc-files img {\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n}\n\n._fc-frame .fc-upload-btn {\n    border: 1px dashed #c0ccda;\n    cursor: pointer;\n}\n\n._fc-frame .fc-upload-cover {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, .6);\n    -webkit-transition: opacity .3s;\n    -o-transition: opacity .3s;\n    transition: opacity .3s;\n}\n\n._fc-frame .fc-upload-cover i {\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n\n._fc-frame .fc-files:hover .fc-upload-cover {\n    opacity: 1;\n}\n\n._fc-frame .el-upload {\n    display: block;\n}\n\n._fc-frame .fc-upload-btn, .fc-files {\n    display: inline-block;\n    width: 58px;\n    height: 58px;\n    text-align: center;\n    line-height: 58px;\n    border: 1px solid #c0ccda;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);\n    margin-right: 4px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n";styleInject(css_248z);var NAME$1="fcFrame",Frame={name:NAME$1,props:{formCreateInject:{type:Object,required:!0},type:{type:String,default:"input"},field:String,helper:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},src:{type:String,required:!0},icon:{type:String,default:"el-icon-upload2"},width:{type:String,default:"500px"},height:{type:String,default:"370px"},maxLength:{type:Number,default:0},okBtnText:{type:String,default:"确定"},closeBtnText:{type:String,default:"关闭"},modalTitle:String,handleIcon:{type:[String,Boolean],default:void 0},title:String,allowRemove:{type:Boolean,default:!0},onOpen:{type:Function,default:function(){}},onOk:{type:Function,default:function(){}},onCancel:{type:Function,default:function(){}},onLoad:{type:Function,default:function(){}},onBeforeRemove:{type:Function,default:function(){}},onRemove:{type:Function,default:function(){}},onHandle:{type:Function,default:function(e){this.previewImage=this.getSrc(e),this.previewVisible=!0;}},modal:{type:Object,default:function(){return {}}},srcKey:{type:[String,Number]},value:[Array,String,Number,Object],previewMask:void 0,footer:{type:Boolean,default:!0},reload:{type:Boolean,default:!0},closeBtn:{type:Boolean,default:!0},okBtn:{type:Boolean,default:!0}},data:function(){return {fileList:toArray(this.value),previewVisible:!1,frameVisible:!1,previewImage:""}},watch:{value:function(e){this.fileList=toArray(e);},fileList:function(e){var t=1===this.maxLength?e[0]||"":e;this.$emit("input",t),this.$emit("change",t);},src:function(e){this.modalVm&&(this.modalVm.src=e);}},methods:{key:function(e){return e},closeModel:function(e){this.$emit(e?"$close":"$ok"),this.reload&&(this.$off("$ok"),this.$off("$close")),this.frameVisible=!1;},handleCancel:function(){this.previewVisible=!1;},showModel:function(){this.disabled||!1===this.onOpen()||(this.frameVisible=!0);},makeInput:function(){var e=this,t=this.$createElement,n={type:"text",value:this.fileList.map(function(t){return e.getSrc(t)}).toString(),readonly:!0};return t("ElInput",helper([{},{props:n},{key:this.key("input")}]),[this.fileList.length?t("i",{slot:"suffix",class:"el-input__icon el-icon-circle-close",on:{click:function(){return e.fileList=[]}}}):null,t("ElButton",helper([{attrs:{icon:this.icon}},{on:{click:function(){return e.showModel()}}},{slot:"append"}]))])},makeGroup:function(e){var t=this.$createElement;return (!this.maxLength||this.fileList.length<this.maxLength)&&e.push(this.makeBtn()),t("div",{key:this.key("group")},_toConsumableArray(e))},makeItem:function(e,t){return (0, this.$createElement)("div",{class:"fc-files",key:this.key("file"+e)},_toConsumableArray(t))},valid:function(e){var t=this.formCreateInject.field||this.field;if(t&&e!==t){ throw new Error("[frame]无效的字段值") }},makeIcons:function(e,t){var n=this.$createElement;if(!1!==this.handleIcon||!0===this.allowRemove){var r=[];return ("file"!==this.type&&!1!==this.handleIcon||"file"===this.type&&this.handleIcon)&&r.push(this.makeHandleIcon(e,t)),this.allowRemove&&r.push(this.makeRemoveIcon(e,t)),n("div",{class:"fc-upload-cover",key:this.key("uc")},[r])}},makeHandleIcon:function(e,t){var n=this;return (0, this.$createElement)("i",{class:!0===this.handleIcon||void 0===this.handleIcon?"el-icon-view":this.handleIcon,on:{click:function(){return n.handleClick(e)}},key:this.key("hi"+t)})},makeRemoveIcon:function(e,t){var n=this;return (0, this.$createElement)("i",{class:"el-icon-delete",on:{click:function(){return n.handleRemove(e)}},key:this.key("ri"+t)})},makeFiles:function(){var e=this,t=this.$createElement;return this.makeGroup(this.fileList.map(function(n,r){return e.makeItem(r,[t("i",{class:"el-icon-tickets",on:{click:function(){return e.handleClick(n)}}}),e.makeIcons(n,r)])}))},makeImages:function(){var e=this,t=this.$createElement;return this.makeGroup(this.fileList.map(function(n,r){return e.makeItem(r,[t("img",{attrs:{src:e.getSrc(n)}}),e.makeIcons(n,r)])}))},makeBtn:function(){var e=this,t=this.$createElement;return t("div",{class:"fc-upload-btn",on:{click:function(){return e.showModel()}},key:this.key("btn")},[t("i",{class:this.icon})])},handleClick:function(e){return this.onHandle(e)},handleRemove:function(e){this.disabled||!1!==this.onBeforeRemove(e)&&(this.fileList.splice(this.fileList.indexOf(e),1),this.onRemove(e));},getSrc:function(e){return this.srcKey?e[this.srcKey]:e},frameLoad:function(e){var t=this;this.onLoad(e);try{!0===this.helper&&(e.form_create_helper={api:this.formCreateInject.api,close:function(e){t.valid(e),t.closeModel();},set:function(e,n){t.valid(e),t.disabled||t.$emit("input",n);},get:function(e){return t.valid(e),t.value},onOk:function(e){return t.$on("$ok",e)},onClose:function(e){return t.$on("$close",e)}});}catch(e$1){console.log(e$1);}},makeFooter:function(){var e=this,t=this.$createElement,n=this.$props,r=n.okBtnText,i=n.closeBtnText,o=n.closeBtn,a=n.okBtn;if(n.footer){ return t("div",{slot:"footer"},[o?t("ElButton",{on:{click:function(){return !1!==e.onCancel()&&(e.frameVisible=!1)}}},[i]):null,a?t("ElButton",{attrs:{type:"primary"},on:{click:function(){return !1!==e.onOk()&&e.closeModel()}}},[r]):null]) }}},render:function(){var e,t=this,n=arguments[0],r=this.type;e="input"===r?this.makeInput():"image"===r?this.makeImages():this.makeFiles();var i=this.$props,o=i.width,a=void 0===o?"30%":o,s=i.height,u=i.src,c=i.title,l=i.modalTitle;return this.$nextTick(function(){t.$refs.frame&&t.frameLoad(t.$refs.frame.contentWindow||{});}),n("div",{class:"_fc-frame"},[e,n("el-dialog",{attrs:{appendToBody:!0,modal:this.previewMask,title:l,visible:this.previewVisible},on:{close:this.handleCancel}},[n("img",{style:"width: 100%",attrs:{src:this.previewImage}})]),n("el-dialog",helper([{attrs:{appendToBody:!0}},_objectSpread2({width:a,title:c},this.modal),{attrs:{visible:this.frameVisible},on:{close:function(){return t.closeModel(!0)}}}]),[this.frameVisible||!this.reload?n("iframe",{ref:"frame",attrs:{src:u,frameBorder:"0"},style:{height:s,border:"0 none",width:"100%"}}):null,this.makeFooter()])])},mounted:function(){this.$on("fc.closeModal",this.closeModal);}},NAME$2="fcRadio",Radio={name:NAME$2,props:{formCreateInject:{type:Object,required:!0},value:{},type:String},watch:{"formCreateInject.options":{handler:function(){this.update();},deep:!0},value:function(){this.update();}},data:function(){return {trueValue:[]}},methods:{options:function(){var e=this.formCreateInject.options;return Array.isArray(e)?e:[]},onInput:function(e){this.$emit("input",this.options().filter(function(t){return t.label===e}).reduce(function(e,t){return t.value},""));},update:function(){var e=this;this.trueValue=this.options().filter(function(t){return t.value===e.value}).reduce(function(e,t){return t.label},"");}},created:function(){this.update();},render:function(){var e=this,t=arguments[0];return t("ElRadioGroup",helper([{},this.formCreateInject.prop,{attrs:{value:this.trueValue},on:{input:this.onInput}}]),[this.options().map(function(n,r){var i=_objectSpread2({},n),o="button"===e.type?"ElRadioButton":"ElRadio";return delete i.value,t(o,{props:_objectSpread2({},i),key:o+r+n.value})}),getSlot(this.$slots)])}},is={type:function(e,t){return Object.prototype.toString.call(e)==="[object "+t+"]"},Undef:function(e){return null==e},Element:function(e){return "object"===_typeof(e)&&null!==e&&1===e.nodeType&&!is.Object(e)},trueArray:function(e){return Array.isArray(e)&&e.length>0},Function:function(e){var t=this.getType(e);return "Function"===t||"AsyncFunction"===t},getType:function(e){var t=Object.prototype.toString.call(e);return /^\[object (.*)\]$/.exec(t)[1]},empty:function(e){return null==e||(!(!Array.isArray(e)||!Array.isArray(e)||e.length)||"string"==typeof e&&!e)}};function hasProperty(e,t){return {}.hasOwnProperty.call(e,t)}["Date","Object","String","Boolean","Array","Number"].forEach(function(e){is[e]=function(t){return is.type(t,e)};});var NAME$3="fcSelect",Select={name:NAME$3,functional:!0,props:{formCreateInject:{type:Object,required:!0}},render:function(e,t){var n=t.props.formCreateInject.options;return e("ElSelect",helper([{},t.data]),[(Array.isArray(n)?n:[]).map(function(t,n){var r=t.slot;return e("ElOption",{props:_objectSpread2({},t),key:""+n+t.value},[r?e("template",{slot:t.slotName||"default"},[is.Function(r)?t.slot(e):r]):null])}),t.children])}},NAME$4="fcTree",Tree={name:NAME$4,formCreateParser:{mergeProp:function(e){var t=e.prop.props;t.nodeKey||(t.nodeKey="id"),t.props||(t.props={label:"title"});}},props:{formCreateInject:{type:Object,required:!0},type:{type:String,default:"checked"},value:{type:[Array,String,Number],default:function(){return []}}},watch:{value:function(){this.setValue();}},methods:{onChange:function(){this.updateValue();},updateValue:function(){var e;this.$refs.tree&&(e="selected"===this.type.toLocaleLowerCase()?this.$refs.tree.getCurrentKey():this.$refs.tree.getCheckedKeys(),this.$emit("input",e));},setValue:function(){"selected"===this.type.toLocaleLowerCase()?this.$refs.tree.setCurrentKey(this.value):this.$refs.tree.setCheckedKeys(toArray(this.value));}},render:function(){var e=this;return (0, arguments[0])("ElTree",helper([{},this.formCreateInject.prop,{ref:"tree",on:{check:function(){return e.updateValue()},"node-click":function(){return e.updateValue()}}}]),[getSlot(this.$slots)])},mounted:function(){this.setValue();}},css_248z$1="._fc-upload .fc-files img {\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n}\n\n._fc-upload .fc-upload-btn {\n    border: 1px dashed #c0ccda;\n    cursor: pointer;\n}\n\n._fc-upload .fc-upload-cover {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, .6);\n    -webkit-transition: opacity .3s;\n    -o-transition: opacity .3s;\n    transition: opacity .3s;\n}\n\n._fc-upload .fc-upload-cover i {\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n\n._fc-upload .fc-files:hover .fc-upload-cover {\n    opacity: 1;\n}\n\n._fc-upload .el-upload {\n    display: block;\n}\n\n._fc-upload .fc-upload-btn, ._fc-upload .fc-files {\n    display: inline-block;\n    width: 58px;\n    height: 58px;\n    text-align: center;\n    line-height: 58px;\n    border: 1px solid #c0ccda;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);\n    margin-right: 4px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n";function parseFile(e,t){return {url:e,name:getFileName(e),uid:t}}function getFileName(e){return (""+e).split("/").pop()}styleInject(css_248z$1);var NAME$5="fcUpload",Upload={name:NAME$5,props:{formCreateInject:{type:Object,required:!0},onHandle:{type:Function,default:function(e){this.previewImage=e.url,this.previewVisible=!0;}},uploadType:{type:String,default:"file"},limit:{type:Number,default:0},allowRemove:{type:Boolean,default:!0},previewMask:void 0,modalTitle:String,handleIcon:{type:[String,Boolean],default:function(){}},value:[Array,String]},data:function(){return {uploadList:[],previewVisible:!1,previewImage:"",cacheFiles:[]}},created:function(){void 0===this.formCreateInject.prop.props.showFileList&&(this.formCreateInject.prop.props.showFileList=!1),this.formCreateInject.prop.props.fileList=toArray(this.value).map(parseFile);},watch:{value:function(e){this.$refs.upload.uploadFiles.every(function(e){return !e.status||"success"===e.status})&&(this.$refs.upload.uploadFiles=toArray(e).map(parseFile),this.uploadList=this.$refs.upload.uploadFiles);},limit:function(e,t){1!==t&&1!==e||this.update();}},methods:{key:function(e){return e},isDisabled:function(){return !0===this.formCreateInject.prop.props.disabled},onRemove:function(e){this.isDisabled()||this.$refs.upload.handleRemove(e);},handleClick:function(e){this.onHandle(e);},makeItem:function(e,t){var n=this.$createElement;return "image"===this.uploadType?n("img",{attrs:{src:e.url},key:this.key("img"+t)}):n("i",{class:"el-icon-tickets",key:this.key("i"+t)})},makeRemoveIcon:function(e,t){var n=this;return (0, this.$createElement)("i",{class:"el-icon-delete",on:{click:function(){return n.onRemove(e)}},key:this.key("ri"+t)})},makeHandleIcon:function(e,t){var n=this;return (0, this.$createElement)("i",{class:!0===this.handleIcon||void 0===this.handleIcon?"el-icon-view":this.handleIcon,on:{click:function(){return n.handleClick(e)}},key:this.key("hi"+t)})},makeProgress:function(e,t){return (0, this.$createElement)("ElProgress",helper([{},{props:{percentage:e.percentage,type:"circle",width:52}},{style:"margin-top:2px;",key:this.key("pg"+t)}]))},makeIcons:function(e,t){var n=this.$createElement,r=[];if(this.allowRemove||!1!==this.handleIcon){ return ("file"!==this.uploadType&&!1!==this.handleIcon||"file"===this.uploadType&&this.handleIcon)&&r.push(this.makeHandleIcon(e,t)),this.allowRemove&&r.push(this.makeRemoveIcon(e,t)),n("div",{class:"fc-upload-cover"},[r]) }},makeFiles:function(){var e=this,t=this.$createElement;return this.uploadList.map(function(n,r){return e.$scopedSlots.fileList?e.$scopedSlots.fileList({file:n,index:r,vm:e}):t("div",{key:e.key(r),class:"fc-files"},[void 0!==n.percentage&&"success"!==n.status?e.makeProgress(n,r):[e.makeItem(n,r),e.makeIcons(n,r)]])})},makeUpload:function(){var e=this.$createElement,t=!this.limit||this.limit>this.uploadList.length;return e("ElUpload",helper([{},this.formCreateInject.prop,{ref:"upload",style:{display:"inline-block"},key:this.key("upload")}]),[t?e("template",{slot:"default"},[this.$slots.default||e("div",{class:"fc-upload-btn"},[e("i",{class:"el-icon-upload2"})])]):null,getSlot(this.$slots,["default"])])},update:function(){var e=this.$refs.upload.uploadFiles.map(function(e){return e.url}).filter(function(e){return void 0!==e});this.cacheFiles.length!==e.length&&(this.cacheFiles=_toConsumableArray(e),this.$emit("input",1===this.limit?e[0]||"":e));},handleCancel:function(){this.previewVisible=!1;}},render:function(){var e=arguments[0];return this.$refs.upload&&(void 0===this.formCreateInject.prop.props.showFileList&&(this.formCreateInject.prop.props.showFileList=this.$refs.upload.showFileList),this.formCreateInject.prop.props.fileList=this.$refs.upload.fileList),e("div",{class:"_fc-upload"},[[this.formCreateInject.prop.props.showFileList?[]:this.makeFiles(),this.makeUpload()],e("el-dialog",{attrs:{appendToBody:!0,modal:this.previewMask,title:this.modalTitle,visible:this.previewVisible},on:{close:this.handleCancel}},[e("img",{attrs:{alt:"example",src:this.previewImage},style:"width: 100%"})])])},mounted:function(){var e=this;this.uploadList=this.$refs.upload.uploadFiles,this.$watch(function(){return e.$refs.upload.uploadFiles},function(){e.update();},{deep:!0});}};function $set(e,t,n){Vue.set(e,t,n);}function $del(e,t){Vue.delete(e,t);}function deepExtend(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=!1;for(var i in t){ if(Object.prototype.hasOwnProperty.call(t,i)){var o=t[i];if((r=Array.isArray(o))||is.Object(o)){var a=void 0===e[i];if(r){ r=!1,a&&$set(e,i,[]); }else if(o._clone&&void 0!==n){if(!n){$set(e,i,o._clone());continue}o=o.getRule(),a&&$set(e,i,{});}else { a&&$set(e,i,{}); }e[i]=deepExtend(e[i],o,n);}else { $set(e,i,o),is.Undef(o)||(is.Undef(o.__json)||(e[i].__json=o.__json),is.Undef(o.__origin)||(e[i].__origin=o.__origin)); }} }return void 0!==n&&Array.isArray(e)?e.filter(function(e){return !e||!e.__ctrl}):e}function deepCopy(e){return deepExtend({},{value:e}).value}var _extends$1=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++){ for(var r in t=arguments[n]){ Object.prototype.hasOwnProperty.call(t,r)&&$set(e,r,t[r]); } }return e};function extend(){return _extends$1.apply(this,arguments)}var NAME$6="fcGroup",Group={name:NAME$6,props:{field:String,rule:[Array,Object],rules:Array,expand:Number,options:Object,formCreateInject:{type:Object,required:!0},button:{type:Boolean,default:!0},max:{type:Number,default:0},min:{type:Number,default:0},value:{type:Array,default:function(){return []}},defaultValue:Object,disabled:{type:Boolean,default:!1},syncDisabled:{type:Boolean,default:!0},fontSize:{type:Number,default:28},onBeforeRemove:{type:Function,default:function(){}},onBeforeAdd:{type:Function,default:function(){}}},data:function(){return {len:0,cacheRule:{},cacheValue:{},type:void 0}},computed:{formRule:function(){return this.rule?Array.isArray(this.rule)?this.rule:[this.rule]:this.rules?this.rules:[]}},watch:{disabled:function(e){if(this.syncDisabled){var t=this.cacheRule;Object.keys(t).forEach(function(n){t[n].$f.disabled(e);});}},expand:function(e){var t=e-this.value.length;t>0&&this.expandRule(t);},value:function(e){var t=this;e=e||[];var n=Object.keys(this.cacheRule),r=n.length,i=r-e.length;if(i<0){for(var o=i;o<0;o++){ this.addRule(e.length+o); }for(var a=0;a<r;a++){ this.setValue(n[a],e[a]); }}else {if(i>0){for(var s=0;s<i;s++){ this.removeRule(n[r-s-1]); }this.subForm();}e.forEach(function(r,i){t.setValue(n[i],e[i]);});}}},methods:{_value:function(e){return e&&hasProperty(e,this.field)?e[this.field]:e},cache:function(e,t){this.cacheValue[e]=JSON.stringify(t);},input:function(e){this.$emit("input",e),this.$emit("change",e);},formData:function(e,t){var n=this,r=this.cacheRule,i=Object.keys(r);if(i.filter(function(e){return r[e].$f}).length===i.length){var o=i.map(function(r){var i=e===r?t:_objectSpread2({},n.cacheRule[r].$f.form),o=n.field?i[n.field]||null:i;return n.cache(r,o),o});this.input(o);}},setValue:function(e,t){var n=this.field,r=this.cacheRule[e].$f;n&&(t=_defineProperty({},n,this._value(t))),this.cacheValue[e]!==JSON.stringify(n?t[n]:t)&&(this.cache(e,t),r.coverValue(t||{}));},addRule:function(e,t){var n=this,r=this.formCreateInject.form.copyRules(this.formRule),i=this.options?_objectSpread2({},this.options):{submitBtn:!1,resetBtn:!1};if(this.defaultValue){i.formData||(i.formData={});var o=deepCopy(this.defaultValue);extend(i.formData,this.field?_defineProperty({},this.field,o):o);}this.$set(this.cacheRule,++this.len,{rule:r,options:i}),t&&this.$nextTick(function(){return n.$emit("add",r,Object.keys(n.cacheRule).length-1)});},add$f:function(e,t,n){var r=this;this.cacheRule[t].$f=n,this.subForm(),this.formData(t,n.formData()),this.$nextTick(function(){r.syncDisabled&&n.disabled(r.disabled),r.$emit("itemMounted",n,Object.keys(r.cacheRule).indexOf(t));});},subForm:function(){var e=this;this.formCreateInject.subForm(Object.keys(this.cacheRule).map(function(t){return e.cacheRule[t].$f}));},removeRule:function(e,t){var n=this,r=Object.keys(this.cacheRule).indexOf(e);this.$delete(this.cacheRule,e),this.$delete(this.cacheValue,e),t&&this.$nextTick(function(){return n.$emit("remove",r)});},add:function(e){this.disabled||!1===this.onBeforeAdd(this.value)||this.addRule(e,!0);},del:function(e,t){this.disabled||!1===this.onBeforeRemove(this.value,e)||(this.removeRule(t,!0),this.subForm(),this.value.splice(e,1),this.input(this.value));},addIcon:function(e){return (0, this.$createElement)("i",{key:"a".concat(e),class:"el-icon-circle-plus-outline",style:"font-size:".concat(this.fontSize,"px;cursor:").concat(this.disabled?"not-allowed;color:#c9cdd4":"pointer",";"),on:{click:this.add}})},delIcon:function(e,t){var n=this;return (0, this.$createElement)("i",{key:"d".concat(t),class:"el-icon-remove-outline",style:"font-size:".concat(this.fontSize,"px;cursor:").concat(this.disabled?"not-allowed;color:#c9cdd4":"pointer;color:#606266",";"),on:{click:function(){return n.del(e,t)}}})},makeIcon:function(e,t,n){var r=this;return this.$scopedSlots.button?this.$scopedSlots.button({total:e,index:t,vm:this,key:n,del:function(){return r.del(t,n)},add:this.add}):0===t?[0!==this.max&&e>=this.max?null:this.addIcon(n),0===this.min||e>this.min?this.delIcon(t,n):null]:t>=this.min?this.delIcon(t,n):void 0},emitEvent:function(e,t,n,r){this.$emit.apply(this,[e].concat(_toConsumableArray(t),[this.cacheRule[r].$f,n]));},expandRule:function(e){for(var t=0;t<e;t++){ this.value.push(this.field?null:{}); }}},created:function(){this.type=this.formCreateInject.form.$form();var e=(this.expand||0)-this.value.length;e>0&&this.expandRule(e);for(var t=0;t<this.value.length;t++){ this.addRule(t); }},render:function(){var e=this,t=arguments[0],n=Object.keys(this.cacheRule),r=this.button,i=this.type;return 0===n.length?this.$scopedSlots.default?this.$scopedSlots.default({vm:this,add:this.add}):t("i",{key:"a_def",class:"el-icon-circle-plus-outline",style:"font-size:".concat(this.fontSize,"px;vertical-align:middle;color:").concat(this.disabled?"#c9cdd4;cursor: not-allowed":"#606266;cursor:pointer",";"),on:{click:this.add}}):t("div",{key:"con"},[n.map(function(o,a){var s=e.cacheRule[o],u=s.rule,c=s.options;return t("ElRow",{attrs:{align:"middle",type:"flex"},key:o,style:"border-bottom:1px dashed #DCDFE6;margin-bottom:10px;"},[t("ElCol",{attrs:{span:r?20:24}},[t("ElFormItem",[t(i,helper([{key:o},{on:{"update:value":function(t){return e.formData(o,t)},"emit-event":function(t){
  var arguments$1 = arguments;
  for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++){ r[i-1]=arguments$1[i]; }return e.emitEvent(t,r,a,o)},input:function(t){return e.add$f(a,o,t)}}},{attrs:{value:e.field?_defineProperty({},e.field,e._value(e.value[a])):e.value[a],rule:u,option:c,extendOption:!0}}]))])]),r?t("ElCol",{attrs:{span:2,pull:1,push:1}},[e.makeIcon(n.length,a,o)]):null])})])}},NAME$7="fcSubForm",Sub={name:NAME$7,props:{rule:Array,options:Object,formCreateInject:{type:Object,required:!0},value:{type:Object,default:function(){return {}}},disabled:{type:Boolean,default:!1},syncDisabled:{type:Boolean,default:!0}},data:function(){return {cacheRule:{},cacheValue:{},type:void 0}},watch:{disabled:function(e){this.syncDisabled&&this.cacheRule.$f.disabled(e);},value:function(e){this.setValue(e);}},methods:{formData:function(e){this.cacheValue=JSON.stringify(e),this.$emit("input",e),this.$emit("change",e);},setValue:function(e){var t=JSON.stringify(e);this.cacheValue!==t&&(this.cacheValue=t,this.cacheRule.$f.coverValue(e||{}));},addRule:function(){var e=this.options?this.options:{submitBtn:!1,resetBtn:!1};e.formData=_objectSpread2({},this.value||{}),this.cacheRule={rule:this.rule,options:e};},add$f:function(e){var t=this;this.cacheRule.$f=e,this.subForm(),this.$nextTick(function(){t.syncDisabled&&e.disabled(t.disabled),t.$emit("itemMounted",e);});},subForm:function(){this.formCreateInject.subForm(this.cacheRule.$f);},emitEvent:function(e){
  var arguments$1 = arguments;
  for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++){ n[r-1]=arguments$1[r]; }this.$emit.apply(this,[e].concat(n));}},created:function(){this.addRule(),this.type=this.formCreateInject.form.$form();},render:function(){var e=arguments[0],t=this.cacheRule,n=t.rule,r=t.options;return e(this.type,helper([{},{on:{"update:value":this.formData,"emit-event":this.emitEvent,input:this.add$f}},{attrs:{rule:n,option:r,extendOption:!0}}]))}},components=[Checkbox,Frame,Radio,Select,Tree,Upload,Group,Sub],NAME$8="FormCreate";function $FormCreate(e){return {name:NAME$8,componentName:NAME$8,model:{prop:"api"},provide:function(){return {$pfc:this}},inject:{$pfc:{default:null}},props:{rule:{type:Array,required:!0},option:{type:Object,default:function(){return {}}},extendOption:Boolean,value:Object,api:Object,name:String},data:function(){return {formData:void 0,destroyed:!1,validate:{},$f:void 0,isShow:!0,unique:1,renderRule:_toConsumableArray(this.rule||[]),ctxInject:{},updateValue:""}},render:function(){return this.formCreate.render()},methods:{_refresh:function(){++this.unique;},_renderRule:function(){this.renderRule=_toConsumableArray(this.rule||[]);},_updateValue:function(e){this.destroyed||(this.updateValue=JSON.stringify(e),this.$emit("update:value",e));}},watch:{value:{handler:function(e){JSON.stringify(e)!==this.updateValue&&this.$f.setValue(e);},deep:!0},option:{handler:function(e){this.formCreate.initOptions(e),this.$f.refresh();},deep:!0},rule:function(e){var t=this;e.length===this.renderRule.length&&e.every(function(e){return t.renderRule.indexOf(e)>-1})||(this.formCreate.$handle.reloadRule(e),this._renderRule());}},beforeCreate:function(){var t=this,n=this.$options.propsData,r=n.rule,i=n.option;this.formCreate=new e(this,r,i),Object.keys(this.formCreate.prop).forEach(function(e){extend(t.$options[e],t.formCreate.prop[e]);}),this.$emit("beforeCreate",this.formCreate.api());}}}var normalMerge$1=["attrs","props","domProps","scopedSlots"],toArrayMerge$1=["class","style","directives"],functionalMerge$1=["on","nativeOn"],mergeProps=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=[].concat(normalMerge$1,_toConsumableArray(r.normal||[])),o=[].concat(toArrayMerge$1,_toConsumableArray(r.array||[])),a=[].concat(functionalMerge$1,_toConsumableArray(r.functional||[])),s=r.props||[];return t.reduce(function(t,n){for(var r in n){ if(t[r]){ if(s.indexOf(r)>-1){ t[r]=e([n[r]],t[r]); }else if(i.indexOf(r)>-1){ t[r]=_objectSpread2(_objectSpread2({},t[r]),n[r]); }else if(o.indexOf(r)>-1){var u=t[r]instanceof Array?t[r]:[t[r]],c=n[r]instanceof Array?n[r]:[n[r]];t[r]=[].concat(_toConsumableArray(u),_toConsumableArray(c));}else if(a.indexOf(r)>-1){ for(var l in n[r]){ if(t[r][l]){var f=t[r][l]instanceof Array?t[r][l]:[t[r][l]],d=n[r][l]instanceof Array?n[r][l]:[n[r][l]];t[r][l]=[].concat(_toConsumableArray(f),_toConsumableArray(d));}else { t[r][l]=n[r][l]; } } }else if("hook"===r){ for(var p in n[r]){ t[r][p]?t[r][p]=mergeFn$1(t[r][p],n[r][p]):t[r][p]=n[r][p]; } }else { t[r]=n[r]; } }else { i.indexOf(r)>-1||a.indexOf(r)>-1||s.indexOf(r)>-1?t[r]=_objectSpread2({},n[r]):o.indexOf(r)>-1?t[r]=n[r]instanceof Array?_toConsumableArray(n[r]):"object"===_typeof(n[r])?_objectSpread2({},n[r]):n[r]:t[r]=n[r]; } }return t},n)},mergeFn$1=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments);}},keyAttrs=["type","slot","emitPrefix","value","name","native","hidden","display","inject","options","emit","nativeEmit","link","prefix","suffix","update","sync","optionsTo","key"],arrayAttrs=["validate","children","control"],normalAttrs=["effect","deep"];function attrs(){return [].concat(keyAttrs,_toConsumableArray(normalMerge$1),_toConsumableArray(toArrayMerge$1),_toConsumableArray(functionalMerge$1),arrayAttrs,normalAttrs)}function format(e,t,n){return "[form-create ".concat(e,"]: ").concat(t)+(n?"\n\nrule: "+JSON.stringify(n.getRule?n.getRule():n):"")}function tip(e,t){console.warn(format("tip",e,t));}function err(e,t){console.error(format("err",e,t));}function logError(e){err(e.toString()),console.error(e);}var PREFIX="[[FORM-CREATE-PREFIX-",SUFFIX="-FORM-CREATE-SUFFIX]]",$T="$FN:",$TX="$FNX:",FUNCTION="function";function toJson(e,t){return JSON.stringify(deepExtend([],e,!0),function(e,t){if(!t||!0!==t._isVue){if(_typeof(t)!==FUNCTION){ return t; }if(t.__json){ return t.__json; }if(t.__origin&&(t=t.__origin),!t.__emit){ return PREFIX+t+SUFFIX }}},t)}function makeFn(fn){return eval("("+FUNCTION+"(){return "+fn+" })()")}function parseFn(e,t){if(e&&is.String(e)&&e.length>4){var n=e.trim(),r=!1;try{if(n.indexOf(SUFFIX)>0&&0===n.indexOf(PREFIX)){ n=n.replace(SUFFIX,"").replace(PREFIX,""),r=!0; }else if(0===n.indexOf($T)){ n=n.replace($T,""),r=!0; }else {if(0===n.indexOf($TX)){ return (n=makeFn("function($inject){"+n.replace($TX,"")+"}")).__json=e,n.__inject=!0,n; }t||0!==n.indexOf(FUNCTION)||n===FUNCTION||(r=!0);}if(!r){ return e; }var i=makeFn(-1===n.indexOf(FUNCTION)&&0!==n.indexOf("(")?FUNCTION+" "+n:n);return i.__json=e,i}catch(e$1){return void err("解析失败:".concat(n,"\n\nerr: ").concat(e$1))}}return e}function parseJson(e,t){return JSON.parse(e,function(e,n){return is.Undef(n)||!n.indexOf?n:parseFn(n,t)})}function enumerable(e,t){return {value:e,enumerable:!1,configurable:!1,writable:!!t}}function copyRule(e){return copyRules([e])[0]}function copyRules(e,t){return deepExtend([],_toConsumableArray(e),t||!1)}function mergeRule(e,t){return mergeProps(Array.isArray(t)?t:[t],e,{array:arrayAttrs,normal:normalAttrs}),e}function getRule(e){return is.Function(e.getRule)?e.getRule():e}function mergeGlobal(e,t){return e?(Object.keys(t||{}).forEach(function(n){t[n]&&(e[n]=mergeRule(e[n]||{},t[n]));}),e):t}function funcProxy(e,t){Object.defineProperties(e,Object.keys(t).reduce(function(e,n){return e[n]={get:function(){return t[n]()}},e},{}));}function byCtx(e){return e.__fc__||(e.__origin__?e.__origin__.__fc__:null)}function invoke(e,t){try{t=e();}catch(e$1){logError(e$1);}return t}function baseRule(){return {props:{},on:{},options:[],children:[],hidden:!1,display:!0,value:void 0}}function creatorFactory(e,t){return function(n,r,i){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=new Creator(e,n,r,i,o);return t&&(is.Function(t)?t(a):a.props(t)),a}}function Creator(e,t,n,r,i){this._data=extend(baseRule(),{type:e,title:t,field:n,value:r,props:i||{}}),this.event=this.on;}function appendProto(e){e.forEach(function(e){Creator.prototype[e]=function(t){return mergeRule(this._data,_defineProperty({},e,arguments.length<2?t:_defineProperty({},t,arguments[1]))),this};});}extend(Creator.prototype,{getRule:function(){return this._data},setProp:function(e,t){return $set(this._data,e,t),this},_clone:function(){var e=new this.constructor;return e._data=copyRule(this._data),e}}),appendProto(attrs());var commonMaker=creatorFactory("");function create(e,t,n){var r=commonMaker("",t);return r._data.type=e,r._data.title=n,r}function createTmp(e,t,n,r){var i=commonMaker("",n);return i._data.type="template",i._data.template=e,i._data.title=r,i._data.vm=t,i}function makerFactory(){return {create:create,createTmp:createTmp,template:createTmp,factory:creatorFactory}}function copy(e){return deepCopy(e)}function Api(e){function t(t){return is.Undef(t)?t=e.fields():Array.isArray(t)||(t=[t]),t}function n(n,r,i){t(n).forEach(function(t){e.getCtxs(t).forEach(function(t){$set(t.rule,r,i),e.$render.clearCache(t);});});}function r(){var t=e.subForm;return Object.keys(t).reduce(function(e,n){var r=t[n];return r?(Array.isArray(r)?e.push.apply(e,_toConsumableArray(r)):e.push(r),e):e},[])}var i={get config(){return e.options},get options(){return e.options},get form(){return e.form},get rule(){return e.rules},get parent(){return e.vm.$pfc&&e.vm.$pfc.$f},get children(){return r()},formData:function(n){return t(n).reduce(function(t,n){var r=e.getFieldCtx(n);return r?(t[r.field]=copy(r.rule.value),t):t},copy(e.appendData))},getValue:function(t){var n=e.getFieldCtx(t);if(n){ return copy(n.rule.value) }},coverValue:function(t){e.deferSyncValue(function(){i.fields().forEach(function(n){var r=e.fieldCtx[n];if(!r){ return e.appendData[n]=t[n]; }var i=hasProperty(t,n);r.forEach(function(e){e.rule.value=i?t[n]:void 0;});});});},setValue:function(t){var n=t;arguments.length>=2&&(n=_defineProperty({},t,arguments[1])),e.deferSyncValue(function(){Object.keys(n).forEach(function(t){var r=e.fieldCtx[t];if(!r){ return e.appendData[t]=n[t]; }r.forEach(function(e){e.rule.value=n[t];});});});},removeField:function(t){var n=e.getCtx(t);return e.deferSyncValue(function(){e.getCtxs(t).forEach(function(e){e.rm();});},!0),n?n.origin:void 0},removeRule:function(e){var t=e&&byCtx(e);if(t){ return t.rm(),t.origin }},destroy:function(){e.vm.$el.parentNode&&e.vm.$el.parentNode.removeChild(e.vm.$el),e.vm.$destroy();},fields:function(){return e.fields()},append:function(t,n,r){var i,o=e.sort.length-1,a=e.getCtx(n);a?r?(i=a.rule.children,o=a.rule.children.length-1):(o=a.root.indexOf(a.origin),i=a.root):i=e.rules,i.splice(o+1,0,t);},prepend:function(t,n,r){var i,o=0,a=e.getCtx(n);a?r?i=a.rule.children:(o=a.root.indexOf(a.origin),i=a.root):i=e.rules,i.splice(o,0,t);},hidden:function(t,r){n(r,"hidden",!!t),e.refresh();},hiddenStatus:function(t){var n=e.getCtx(t);if(n){ return !!n.rule.hidden }},display:function(t,r){n(r,"display",!!t),e.refresh();},displayStatus:function(t){var n=e.getCtx(t);if(n){ return !!n.rule.display }},disabled:function(n,r){t(r).forEach(function(t){e.getCtxs(t).forEach(function(e){e.rule.props&&$set(e.rule.props,"disabled",!!n);});}),e.refresh();},all:function(t){return Object.keys(e.ctxs).map(function(n){var r=e.ctxs[n];return t?r.origin:r.rule})},model:function(t){return e.fields().reduce(function(n,r){var i=e.fieldCtx[r][0];return n[r]=t?i.origin:i.rule,n},{})},component:function(t){return Object.keys(e.nameCtx).reduce(function(n,r){var i=e.nameCtx[r].map(function(e){return t?e.origin:e.rule});return n[r]=1===i.length?i[0]:i,n},{})},bind:function(){return i.form},reload:function(t){e.reloadRule(t);},updateOptions:function(t){e.fc.updateOptions(t),i.refresh();},onSubmit:function(e){i.updateOptions({onSubmit:e});},sync:function(t){if(Array.isArray(t)){ t.forEach(function(e){return i.sync(e)}); }else {var n=is.Object(t)?byCtx(t):e.getCtxs(t);n&&((n=Array.isArray(n)?n:[n]).forEach(function(t){if(!t.deleted){var n=e.subForm[t.id];n&&(Array.isArray(n)?n.forEach(function(e){e.refresh();}):n&&n.refresh()),e.$render.clearCache(t);}}),e.refresh());}},refresh:function(){r().forEach(function(e){e.refresh();}),e.$render.clearCacheAll(),e.refresh();},refreshOptions:function(){e.$manager.updateOptions(e.options),i.refresh();},hideForm:function(t){$set(e.vm,"isShow",!t);},changeStatus:function(){return e.changeStatus},clearChangeStatus:function(){e.changeStatus=!1;},updateRule:function(t,n){e.getCtxs(t).forEach(function(e){extend(e.rule,n);});},updateRules:function(e){Object.keys(e).forEach(function(t){i.updateRule(t,e[t]);});},mergeRule:function(t,n){e.getCtxs(t).forEach(function(e){mergeRule(e.rule,n);});},mergeRules:function(e){Object.keys(e).forEach(function(t){i.mergeRule(t,e[t]);});},getRule:function(t,n){var r=e.getCtx(t);if(r){ return n?r.origin:r.rule }},updateValidate:function(e,t,r){r?i.mergeRule(e,{validate:t}):n(e,"validate",t);},updateValidates:function(e,t){Object.keys(e).forEach(function(n){i.updateValidate(n,e[n],t);});},refreshValidate:function(){e.vm.validate={},i.refresh();},resetFields:function(n){t(n).forEach(function(t){e.getCtxs(t).forEach(function(t){e.$render.clearCache(t),t.rule.value=copy(t.defaultValue),e.refreshControl(t);});});},method:function(e,t){var n=i.el(e);if(!n||!n[t]){ throw new Error(format("err","".concat(t,"方法不存在"))); }return function(){return n[t].apply(n,arguments)}},exec:function(e,t){
  var arguments$1 = arguments;
  for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++){ r[o-2]=arguments$1[o]; }return invoke(function(){return i.method(e,t).apply(void 0,r)})},toJson:function(e){return toJson(i.rule,e)},trigger:function(e,t){
  var arguments$1 = arguments;
  for(var n=i.el(e),r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++){ o[a-2]=arguments$1[a]; }n&&n.$emit.apply(n,[t].concat(o));},el:function(t){var n=e.getCtx(t);if(n){ return n.el||e.vm.$refs[n.ref] }},closeModal:function(e){var t=i.el(e);t&&t.$emit&&t.$emit("close-modal");},getSubForm:function(t){var n=e.getCtx(t);return n?e.subForm[n.id]:void 0},nextTick:function(t){e.bus.$once("next-tick",t),e.refresh();},nextRefresh:function(t){e.nextRefresh(),t&&invoke(t);},emit:function(t){
  var arguments$1 = arguments;
  for(var n,r=arguments.length,i=new Array(r>1?r-1:0),o=1;o<r;o++){ i[o-1]=arguments$1[o]; }(n=e.vm).$emit.apply(n,[t].concat(i));},helper:{tidyFields:t,props:n}};return ["on","once","off","set"].forEach(function(t){i[t]=function(){var n;(n=e.vm)["$".concat(t)].apply(n,arguments);};}),i.changeValue=i.changeField=i.setValue,i}function useCache(e){extend(e.prototype,{initCache:function(){this.clearCacheAll();},clearCache:function(e){if(this.cache[e.id]){(!0===this.cache[e.id].use||this.cache[e.id].parent)&&this.$handle.refresh();var t=this.cache[e.id].parent;this.cache[e.id]=null,t&&this.clearCache(t);}else { e.parent&&this.clearCache(e.parent); }},clearCacheAll:function(){this.cache={};},setCache:function(e,t,n){this.cache[e.id]={vnode:t,use:!1,parent:n,slot:e.rule.slot};},getCache:function(e){var t=this.cache[e.id];return t.use=!0,t.vnode}});}function toCase(e){return lower(e.replace(/(-[a-z])/g,function(e){return e.replace("-","").toLocaleUpperCase()}))}function lower(e){return e.replace(e[0],e[0].toLowerCase())}function toString(e){return null==e?"":"object"===_typeof(e)?JSON.stringify(e,null,2):String(e)}function toLine(e){var t=e.replace(/([A-Z])/g,"-$1").toLocaleLowerCase();return 0===t.indexOf("-")&&(t=t.substr(1)),t}var id=0;function uniqueId(){return Math.random().toString(36).substr(3,3)+Number("".concat(Date.now()).concat(++id)).toString(36)}function deepSet(e,t,n){var r,i=e;return (t||"").split(".").forEach(function(e){r&&(i[r]&&"object"==_typeof(i[r])||(i[r]={}),i=i[r]),r=e;}),i[r]=n,i}function useRender(e){extend(e.prototype,{initRender:function(){this.tempList={},this.clearOrgChildren();},initOrgChildren:function(){var e=this.$handle.ctxs;this.orgChildren=Object.keys(e).reduce(function(t,n){if(!1!==e[n].parser.loadChildren){var r=e[n].rule.children;t[n]=is.trueArray(r)?_toConsumableArray(r):[];}return t},{});},clearOrgChildren:function(){this.orgChildren={};},getTypeSlot:function(e){var t="type-"+toLine(e);return function n(r){if(r){var i=r.$scopedSlots[t]||r.$scopedSlots["type-"+e];return i||n(r.$pfc)}}(this.vm)},render:function(){var e=this;if(this.vm.isShow){var t;this.$h=this.vm.$createElement,this.$manager.beforeRender();var n=function(){return e.renderList()};return n.renderSlot=function(t){return e.renderList(t)},n.renderName=function(t){return e.renderId(t)},n.renderField=function(t){return e.renderId(t,"field")},t=this.vm.$scopedSlots.container?[this.vm.$scopedSlots.container(n)]:n(),this.$manager.render(t)}},renderList:function(e){var t=this;return this.sort.map(function(n){return e?t.renderSlot(t.$handle.ctxs[n],e):t.renderCtx(t.$handle.ctxs[n])}).filter(function(e){return void 0!==e})},makeVm:function(e){var t=this,n=e.vm;return n?is.Function(n)?invoke(function(){return e.vm(t.$handle.getInjectData(e))}):n._isVue?n:new _vue(n):new _vue},mergeGlobal:function(e){var t=this.$handle.options.global;t&&(e.cacheConfig||(e.cacheConfig=t[e.originType]||t[e.type]||t[e.trueType]||{}),e.prop=mergeRule({},[t["*"],e.cacheConfig,e.prop]));},setOptions:function(e){e.prop.optionsTo&&e.prop.options&&deepSet(e.prop,e.prop.optionsTo,e.prop.options);},deepSet:function(e){var t=e.rule.deep;t&&Object.keys(t).sort(function(e,t){return e.length<t.length?-1:1}).forEach(function(n){deepSet(e.prop,n,t[n]);});},setTempProps:function(e,t){if(e.$props){var n=t.prop,r=Object.keys(e.$props),i=this.injectProp(t),o=Object.keys(i);r.forEach(function(t){hasProperty(n.props,t)?e.$props[t]=n.props[t]:o.indexOf(t)>-1&&(e.$props[t]=i[t]);});var a=e.$options.model&&e.$options.model.prop||"value";r.indexOf(a)>-1&&(e.$props[a]=n.value);}},renderTemp:function(e){var t=this;if(!_vue.compile){ return tip("当前使用的Vue构建版本不支持compile,无法使用template功能"),[]; }var n=e.prop,r=e.id,i=e.key;if(!this.tempList[r]){e.el||(e.el=this.makeVm(n),this.vm.$nextTick(function(){return e.parser.mounted(e)}));var o=e.el;e.input&&o.$on(o.$options.model&&o.$options.model.event||"input",function(n){t.onInput(e,n);}),this.tempList[r]={vm:o,template:_vue.compile(n.template)};}var a=this.tempList[r],s=a.vm,u=a.template;this.setTempProps(s,e);var c=u.render.call(s);return is.Undef(c.data)&&(c.data={}),c.key=i,c.data.ref=e.ref,c.data.key=i,c},parseSide:function(e){return is.Object(e)?mergeRule({},e):e},renderSides:function(e,t,n){var r=t[n?"rule":"prop"];return [this.renderRule(this.parseSide(r.prefix)),e,this.renderRule(this.parseSide(r.suffix))]},renderSlot:function(e,t){return e.rule.slot===t?this.renderCtx(e):void 0},renderId:function(e,t){var n=this,r=this.$handle["field"===t?"fieldCtx":"nameCtx"][e];return r?r.map(function(e){return n.renderCtx(e,e.parent)}):void 0},renderCtx:function(e,t){if("hidden"!==e.type){var n=e.rule,r=this.options.preview||!1;if(!this.cache[e.id]||this.cache[e.id].slot!==n.slot){var i,o=!0,a=e.trueType,s=!(is.Undef(n.display)||n.display);if("template"!==a||n.template){ if("fcFragment"===a){ i=this.renderChildren(e); }else {e.initProp(),this.mergeGlobal(e),this.$manager.tidyRule(e),this.deepSet(e),this.setOptions(e),this.ctxProp(e);var u=e.prop;if(u.props.formCreateInject=this.injectProp(e),u.hidden){ return void this.setCache(e,void 0,t); }if("template"===a&&u.template){ i=this.renderTemp(e),o=!1; }else {var c=[];e.parser.renderChildren?c=e.parser.renderChildren(e):!1!==e.parser.loadChildren&&(c=this.renderChildren(e));var l=this.getTypeSlot(e.type);i=l?l({rule:n,prop:u,preview:r,children:c,api:this.$handle.api,model:u.model||{}}):r?e.parser.preview(c,e):e.parser.render(c,e);}i=this.renderSides(i,e),!e.input&&is.Undef(u.native)||!0===u.native||(i=this.$manager.makeWrap(e,i)),s&&(i=this.display(i)),i=this.item(e,i);} }else { i=this.renderSides(this.renderChildren(e),e,!0),s&&this.display(i),i=this.item(e,i); }return o&&this.setCache(e,i,t),i}return this.getCache(e)}},display:function(e){var t=this;if(Array.isArray(e)){var n=[];return e.forEach(function(e){if(Array.isArray(e)){ return t.display(e); }t.none(e)&&n.push(e);}),n}return this.none(e)},none:function(e){if(e&&e.data){ return Array.isArray(e.data.style)?e.data.style.push({display:"none"}):e.data.style=[e.data.style,{display:"none"}],e }},item:function(e,t){return this.$h("fcFragment",{slot:e.rule.slot,key:e.key},[t])},injectProp:function(e){var t=this;this.vm.ctxInject[e.id]||$set(this.vm.ctxInject,e.id,{api:this.$handle.api,form:this.fc.create,subForm:function(n){t.$handle.addSubForm(e,n);},options:[],children:[],prop:{},preview:!1,field:e.field,rule:e.rule});var n,r=this.vm.ctxInject[e.id];return extend(r,{preview:this.options.preview||!1,options:e.prop.options,children:e.rule.children,prop:(n=_objectSpread2({},e.prop),n.on=n.on?_objectSpread2({},n.on):{},delete n.model,n)}),r},ctxProp:function(e,t){var n=this,r=e.ref,i=e.key,o=e.rule;this.$manager.mergeProp(e,t),e.parser.mergeProp(e,t);var a=[{ref:r,key:o.key||"".concat(i,"fc"),slot:void 0,on:{"hook:mounted":function(){n.onMounted(e);},"fc.sub-form":function(t){n.$handle.addSubForm(e,t);}}}];return !t&&e.input&&(e.prop.model={value:this.$handle.getFormData(e),callback:function(t){n.onInput(e,t);},expression:"formData.".concat(e.id)}),mergeProps(a,e.prop),e.prop},onMounted:function(e){e.el=this.vm.$refs[e.ref],e.el&&((e.el.$el||e.el).__rule__=e.rule),e.parser.mounted(e),this.$handle.effect(e,"mounted");},onInput:function(e,t){this.$handle.onInput(e,t);},renderChildren:function(e){var t=this,n=e.rule.children,r=this.orgChildren[e.id],i=function(e){return !is.String(e)&&e.__fc__&&!t.$handle.ctxs[e.__fc__.id]};return !is.trueArray(n)&&r?(this.$handle.deferSyncValue(function(){r.forEach(function(e){e&&i(e)&&t.$handle.rmCtx(e.__fc__);});}),this.orgChildren[e.id]=[],[]):(r&&this.$handle.deferSyncValue(function(){r.forEach(function(e){e&&-1===n.indexOf(e)&&i(e)&&t.$handle.rmCtx(e.__fc__);});}),n.map(function(r){if(r){ return is.String(r)?r:r.__fc__?t.renderCtx(r.__fc__,e):void(r.type&&t.vm.$nextTick(function(){t.$handle.loadChildren(n,e),t.$handle.refresh();})) }}))},defaultRender:function(e,t){var n=e.prop;return this.vNode[e.type]?this.vNode[e.type](n,t):this.vNode[e.originType]?this.vNode[e.originType](n,t):this.vNode.make(lower(e.originType),n,t)},renderRule:function(e,t,n){var r=this;if(e){if(is.String(e)){ return e; }var i;if(n){ i=e.type; }else if(i=e.is,e.type){i=toCase(e.type);var o=this.vNode.aliasMap[i];o&&(i=toCase(o));}if(i){var a=[[t]];return is.trueArray(e.children)&&a.push(e.children.map(function(e){return r.renderRule(e)})),this.$h(i,_objectSpread2({},e),a)}}}});}function Render(e){extend(this,{$handle:e,fc:e.fc,vm:e.vm,$manager:e.$manager,vNode:new e.fc.CreateNode(e.vm)}),funcProxy(this,{options:function(){return e.options},sort:function(){return e.sort}}),this.initCache(),this.initRender();}function useInject(e){extend(e.prototype,{parseInjectEvent:function(e,t){var n=e.inject||this.options.injectEvent;return this.parseEventLst(e,t,n)},parseEventLst:function(e,t,n,r){var i=this;return Object.keys(t).forEach(function(o){var a=i.parseEvent(e,t[o],n,r);a&&(t[o]=a);}),t},parseEvent:function(e,t,n,r){if(is.Function(t)&&(!1!==n&&!is.Undef(n)||t.__inject)){ return this.inject(e,t,n); }if(!r&&Array.isArray(t)&&t[0]&&(is.String(t[0])||is.Function(t[0]))){ return this.parseEventLst(e,t,n,!0); }if(is.String(t)){var i=parseFn(t);if(i&&t!==i){ return i.__inject?this.parseEvent(e,i,n,!0):i }}},parseEmit:function(e,t){var n=this,r={},i=e.rule,o=i.emitPrefix,a=i.field,s=i.name,u=i.inject,c=i[t?"emit":"nativeEmit"]||[];if(is.trueArray(c)){var l=o||a||s;l&&(t||(l="native-".concat(l)),c.forEach(function(e){if(e){var t;is.Object(e)&&(t=e.inject,e=e.name);var o=toLine("".concat(l,"-").concat(e)),a=function(){
  var arguments$1 = arguments;
  for(var e,t,r=arguments.length,i=new Array(r),a=0;a<r;a++){ i[a]=arguments$1[a]; }(e=n.vm).$emit.apply(e,[o].concat(i)),(t=n.vm).$emit.apply(t,["emit-event",o].concat(i));};if(a.__emit=!0,t||!1!==u){var s=t||u||n.options.injectEvent;r[e]=is.Undef(s)?a:n.inject(i,a,s);}else { r[e]=a; }}}));}return e.computed[t?"on":"nativeOn"]=r,r},getInjectData:function(e,t){var n=this.vm.$options.propsData,r=n.option,i=n.rule;return {api:this.api,$f:this.api,rule:i,self:e.__origin__,option:r,inject:t}},inject:function(e,t,n){if(t.__origin){if(this.watching&&!this.loading){ return t; }t=t.__origin;}var r=this,i=function(){
  var arguments$1 = arguments;
  for(var i=r.getInjectData(e,n),o=arguments.length,a=new Array(o),s=0;s<o;s++){ a[s]=arguments$1[s]; }return i.args=[].concat(a),a.unshift(i),t.apply(this,a)};return i.__origin=t,i.__json=t.__json,i}});}useCache(Render),useRender(Render);var EVENT=["hook:updated","hook:mounted"];function usePage(e){extend(e.prototype,{usePage:function(){var e=this,t=this.options.page;if(t){var n=25,r=getLimit(this.rules);is.Object(t)&&(t.first&&(n=parseInt(t.first,10)||n),t.limit&&(r=parseInt(t.limit,10)||r)),extend(this,{first:n,limit:r,pageEnd:this.rules.length<=n}),this.bus.$on("page-end",function(){return e.vm.$emit("page-end",e.api)}),this.pageLoad();}},pageLoad:function(){var e=this;this.vm.$on(EVENT,function t(){e.pageEnd?(e.vm.$off(EVENT,t),e.bus.$emit("page-end")):(e.first+=e.limit,e.pageEnd=e.rules.length<=e.first,e.loadRule(),e.refresh());});}});}function getLimit(e){return e.length<31?31:Math.ceil(e.length/3)}function useRender$1(e){extend(e.prototype,{clearNextTick:function(){this.nextTick&&clearTimeout(this.nextTick),this.nextTick=null;},bindNextTick:function(e){var t=this;this.clearNextTick(),this.nextTick=setTimeout(function(){e(),t.nextTick=null;},10);},render:function(){return ++this.loadedId,this.vm.unique>0?this.$render.render():(this.vm.unique=1,[])}});}function bind(e){Object.defineProperties(e.origin,{__fc__:enumerable(e,!0)});}function RuleContext(e,t){var n=uniqueId();extend(this,{id:n,ref:n,wrapRef:n+"fi",rule:t,origin:t.__origin__||t,name:t.name,watch:[],linkOn:[],root:[],ctrlRule:[],parent:null,cacheConfig:null,prop:_objectSpread2({},t),computed:{},payload:{},input:!!t.field,el:void 0,defaultValue:t.field?deepCopy(t.value):void 0,field:t.field||void 0}),this.updateType(),this.updateKey(),bind(this),this.update(e,!0);}function useLoader(e){extend(e.prototype,{nextRefresh:function(e){var t=this,n=this.loadedId;this.vm.$nextTick(function(){n===t.loadedId&&(e?e():t.refresh());});},parseRule:function(e){var t=this,n=getRule(e);return Object.defineProperties(n,{__origin__:enumerable(e,!0)}),fullRule(n),this.appendValue(n),n.options=Array.isArray(n.options)?n.options:[],[n,n.prefix,n.suffix].forEach(function(e){e&&t.loadFn(e,n);}),this.loadCtrl(n),n.update&&(n.update=parseFn(n.update)),n},loadFn:function(e,t){var n=this;["on","props","nativeOn","deep"].forEach(function(r){e[r]&&n.parseInjectEvent(t,e[r]);});},loadCtrl:function(e){e.control&&e.control.forEach(function(e){e.handle&&(e.handle=parseFn(e.handle));});},syncProp:function(e){var t=this,n=e.rule;is.trueArray(n.sync)&&mergeProps([{on:n.sync.reduce(function(e,r){return e["update:".concat(r)]=function(e){n.props[r]=e,t.vm.$emit("sync",r,e,n,t.fapi);},e},{})}],e.computed);},loadRule:function(){var e=this;this.cycleLoad=!1,this.loading=!0,this.pageEnd&&this.bus.$emit("load-start"),this.deferSyncValue(function(){if(e._loadRule(e.rules),e.loading=!1,e.cycleLoad&&e.pageEnd){ return e.loadRule(); }e.pageEnd&&e.bus.$emit("load-end"),e.vm._renderRule(),e.$render.initOrgChildren(),e.syncForm();});},loadChildren:function(e,t){if(this.cycleLoad=!1,this.loading=!0,this.bus.$emit("load-start"),this._loadRule(e,t),this.loading=!1,this.cycleLoad){ return this.loadRule(); }this.bus.$emit("load-end"),this.syncForm(),this.$render.clearCache(t);},_loadRule:function(e,t){var n=this,r=function(e,t){is.trueArray(e)&&n._loadRule(e,t);};e.map(function(i,o){if((!t||!is.String(i)&&!is.Undef(i))&&(n.pageEnd||t||!(o>=n.first))){if(!is.Object(i)||!getRule(i).type){ return err("未定义生成规则的 type 字段",i); }if(i.__fc__&&i.__fc__.root===e&&n.ctxs[i.__fc__.id]){ return r(i.__fc__.rule.children,i.__fc__),i.__fc__; }var a,s=getRule(i),u=function(){return !(!s.field||!n.fieldCtx[s.field]||n.fieldCtx[s.field][0]===i.__fc__)};n.ruleEffect(s,"init",{repeat:u()}),u()&&n.vm.$emit("repeat-field",i,n.api);var c=!1,l=!!i.__fc__;if(l){var f=!(a=i.__fc__).check(n);if(a.deleted){if(f){if(isCtrl(a)){ return; }a.update(n);}}else if(f){if(isCtrl(a)){ return; }e[o]=i=i._clone?i._clone():copyRule(i),a=null,c=!0;}}if(a?(a.originType!==a.rule.type&&(a.updateType(),n.bindParser(a)),n.appendValue(a.rule)):(a=new RuleContext(n,n.parseRule(i)),n.bindParser(a)),[!1,!0].forEach(function(e){return n.parseEmit(a,e)}),n.syncProp(a),a.parent=t||null,a.root=e,n.setCtx(a),!c&&!l&&n.effect(a,"load"),!1===a.parser.loadChildren||r(a.rule.children,a),!t){var d=function t(r){var i=e[r-1];if(!i||!i.__fc__){ return r>0?t(r-1):-1; }var o=n.sort.indexOf(i.__fc__.id);return o>-1?o:t(r-1)}(o);d>-1||!o?n.sort.splice(d+1,0,a.id):n.sort.push(a.id);}var p=a.rule;return a.updated||(a.updated=!0,is.Function(p.update)&&n.bus.$once("load-end",function(){n.refreshUpdate(a,p.value);}),n.effect(a,"loaded")),a.input&&Object.defineProperty(p,"value",n.valueHandle(a)),n.refreshControl(a)&&(n.cycleLoad=!0),a}});},refreshControl:function(e){return e.input&&e.rule.control&&this.useCtrl(e)},useCtrl:function(e){var t=this,n=getCtrl(e),r=[],i=this.api;if(!n.length){ return !1; }for(var o=function(t){var o=n[t],a=o.handle||function(e){return e===o.value};if(!is.trueArray(o.rule)){ return "continue"; }var s=_objectSpread2(_objectSpread2({},o),{},{valid:invoke(function(){return a(e.rule.value,i)}),ctrl:findCtrl(e,o.rule),isHidden:is.String(o.rule[0])});if(s.valid&&s.ctrl||!s.valid&&!s.ctrl&&!s.isHidden){ return "continue"; }r.push(s);},a=0;a<n.length;a++){ o(a); }if(!r.length){ return !1; }var s=!1;return this.deferSyncValue(function(){r.reverse().forEach(function(n){var r=n.isHidden,o=n.valid,a=n.rule,u=n.prepend,c=n.append,l=n.child,f=n.ctrl;if(r){ return o?e.ctrlRule.push({__ctrl:!0,children:a,valid:o}):e.ctrlRule.splice(e.ctrlRule.indexOf(f),1),void t.vm.$nextTick(function(){t.api.hidden(!o,a);}); }if(o){s=!0;var d={type:"fcFragment",native:!0,__ctrl:!0,children:a};e.ctrlRule.push(d),t.bus.$once("load-start",function(){u?i.prepend(d,u,l):c||l?i.append(d,c||e.id,l):e.root.splice(e.root.indexOf(e.origin)+1,0,d);});}else {e.ctrlRule.splice(e.ctrlRule.indexOf(f),1);var p=byCtx(f);p&&p.rm();}});}),this.vm.$emit("control",e.origin,this.api),this.effect(e,"control"),s},reloadRule:function(e){return this._reloadRule(e)},_reloadRule:function(e){var t=this;e||(e=this.rules);var n=_objectSpread2({},this.ctxs);this.clearNextTick(),this.$render.clearOrgChildren(),this.initData(e),this.fc.rules=e,this.bus.$once("load-end",function(){Object.keys(n).filter(function(e){return void 0===t.ctxs[e]}).forEach(function(e){return t.rmCtx(n[e])}),t.$render.clearCacheAll();}),this.reloading=!0,this.loadRule(),this.reloading=!1,this.refresh(),this.bus.$off("next-tick",this.nextReload),this.bus.$once("next-tick",this.nextReload),this.vm.$emit("update",this.api);},refresh:function(){this.vm._refresh();}});}function fullRule(e){var t=baseRule();return Object.keys(t).forEach(function(n){hasProperty(e,n)||(e[n]=t[n]);}),e}function getCtrl(e){var t=e.rule.control||[];return is.Object(t)?[t]:t}function findCtrl(e,t){for(var n=0;n<e.ctrlRule.length;n++){var r=e.ctrlRule[n];if(r.children===t){ return r }}}function isCtrl(e){return !!e.rule.__ctrl}function useInput(e){extend(e.prototype,{getValue:function(e){return is.Undef(e.cacheValue)&&(e.cacheValue=e.parser.toValue(this.getFormData(e),e)),e.cacheValue},setValue:function(e,t,n,r){e.deleted||(e.cacheValue=t,this.changeStatus=!0,this.nextRefresh(),this.$render.clearCache(e),this.setFormData(e,n),this.syncValue(),this.valueChange(e,t),this.vm.$emit("change",e.field,t,e.origin,this.api,r||!1),this.effect(e,"value"));},onInput:function(e,t){var n;e.input&&(this.isQuote(e,n=e.parser.toValue(t,e))||this.isChange(e,n))&&this.setValue(e,n,t);},setFormData:function(e,t){$set(this.formData,e.id,null===t?void 0:t);},getFormData:function(e){return this.formData[e.id]},validate:function(){var e=this;return toEmpty(this.vm.validate),this.fields().forEach(function(t){e.fieldCtx[t].forEach(function(t){e.vm.validate[t.id]=toArray(t.rule.validate);});}),this.vm.validate},syncForm:function(){var e=this;toEmpty(this.form),Object.defineProperties(this.form,this.fields().reduce(function(t,n){var r=e.getFieldCtx(n),i=e.valueHandle(r);return i.configurable=!0,t[n]=i,t},Object.keys(this.appendData).reduce(function(t,n){return t[n]={enumerable:!0,configurable:!0,get:function(){return e.appendData[n]},set:function(t){e.appendData[n]=t;}},t},{}))),this.syncValue();},valueHandle:function(e){var t=this;return {enumerable:!0,get:function(){return t.getValue(e)},set:function(n){t.isChange(e,n)&&t.setValue(e,n,e.parser.toFormValue(n,e),!0);}}},appendValue:function(e){e.field&&hasProperty(this.appendData,e.field)&&(e.value=this.appendData[e.field],delete this.appendData[e.field]);},addSubForm:function(e,t){e.input&&(this.subForm[e.id]=t);},deferSyncValue:function(e,t){this.deferSyncFn||(this.deferSyncFn=e),this.deferSyncFn.sync||(this.deferSyncFn.sync=t),invoke(e),this.deferSyncFn===e&&(this.deferSyncFn=null,e.sync&&this.syncValue());},syncValue:function(){if(this.deferSyncFn){ return this.deferSyncFn.sync=!0; }this.vm._updateValue(_objectSpread2({},this.form));},isChange:function(e,t){return JSON.stringify(e.rule.value,strFn)!==JSON.stringify(t,strFn)},isQuote:function(e,t){return (is.Object(t)||Array.isArray(t))&&t===e.rule.value},refreshUpdate:function(e,t){var n=this;if(is.Function(e.rule.update)){var r=invoke(function(){return e.rule.update(t,e.origin,n.api)});if(void 0===r){ return; }e.rule.hidden=!0===r;}},valueChange:function(e,t){this.refreshRule(e,t),this.bus.$emit("change-"+e.field,t);},refreshRule:function(e,t){this.refreshControl(e)&&(this.$render.clearCacheAll(),this.loadRule(),this.vm.$emit("update",this.api),this.refresh()),this.refreshUpdate(e,t);},appendLink:function(e){var t=this,n=e.rule.link;is.trueArray(n)&&n.forEach(function(n){var r=function(){return t.refreshRule(e,e.rule.value)};t.bus.$on("change-"+n,r),e.linkOn.push(function(){return t.bus.$off("change-"+n,r)});});},fields:function(){return Object.keys(this.fieldCtx)}});}function strFn(e,t){return "function"==typeof t?""+t:t}function toEmpty(e){Object.keys(e).forEach(function(t){return delete e[t]});}extend(RuleContext.prototype,{effectData:function(e){return this.payload[e]||(this.payload[e]={}),this.payload[e]},clearEffectData:function(e){delete this.payload[e];},updateKey:function(e){this.key=uniqueId(),e&&this.parent&&this.parent.updateKey(e);},updateType:function(){this.originType=this.rule.type,this.type=toCase(this.rule.type);},setParser:function(e){this.parser=e,e.init(this);},initProp:function(){var e=this,t=_objectSpread2({},this.rule);delete t.children,this.prop=mergeProps([t].concat(_toConsumableArray(Object.keys(this.payload).map(function(t){return e.payload[t]})),[this.computed]));},check:function(e){return this.vm===e.vm},unwatch:function(){this.watch.forEach(function(e){return e()}),this.watch=[];},unlink:function(){this.linkOn.forEach(function(e){return e()}),this.linkOn=[];},link:function(){this.unlink(),this.$handle.appendLink(this);},watchTo:function(){this.$handle.watchCtx(this);},delete:function(){this.unwatch(),this.unlink(),this.rmCtrl(),extend(this,{deleted:!0,prop:_objectSpread2({},this.rule),computed:{},el:void 0,$handle:void 0,$render:void 0,$api:void 0,vm:void 0,vNode:void 0,parent:null,cacheConfig:null});},rmCtrl:function(){this.ctrlRule.forEach(function(e){return e.__fc__&&e.__fc__.rm()}),this.ctrlRule=[];},rm:function(){var e=this,t=function(){var t=e.root.indexOf(e.origin);t>-1&&(e.root.splice(t,1),e.$handle&&e.$handle.refresh());};this.deleted?t():this.$handle.noWatch(function(){e.$handle.deferSyncValue(function(){e.rmCtrl(),t(),e.$handle.rmCtx(e),extend(e,{root:[]});},e.input);});},update:function(e,t){extend(this,{deleted:!1,$handle:e,$render:e.$render,$api:e.api,vm:e.vm,trueType:e.getType(this.originType),vNode:e.$render.vNode,updated:!1}),!t&&this.unwatch(),this.watchTo(),this.link();}});var BaseParser={init:function(e){},toFormValue:function(e,t){return e},toValue:function(e,t){return e},mounted:function(e){},render:function(e,t){return t.$render.defaultRender(t,e)},preview:function(e,t){return t.$render.defaultRender(t,e)},mergeProp:function(e){}};function useContext(e){extend(e.prototype,{getCtx:function(e){return this.getFieldCtx(e)||this.getNameCtx(e)[0]||this.ctxs[e]},getCtxs:function(e){return this.fieldCtx[e]||this.nameCtx[e]||(this.ctxs[e]?[this.ctxs[e]]:[])},setIdCtx:function(e,t,n){var r="".concat(n,"Ctx");this[r][t]?this[r][t].push(e):this[r][t]=[e];},rmIdCtx:function(e,t,n){var r="".concat(n,"Ctx"),i=this[r][t];if(!i){ return !1; }var o=i.splice(i.indexOf(e)>>>0,1).length>0;return i.length||delete this[r][t],o},getFieldCtx:function(e){return (this.fieldCtx[e]||[])[0]},getNameCtx:function(e){return this.nameCtx[e]||[]},setCtx:function(e){var t=e.id,n=e.field,r=e.name,i=e.rule;this.ctxs[t]=e,r&&this.setIdCtx(e,r,"name"),e.input&&(this.setIdCtx(e,n,"field"),this.setFormData(e,e.parser.toFormValue(i.value,e)),this.isMounted&&!this.reloading&&this.vm.$emit("change",e.field,i.value,e.origin,this.api));},getParser:function(e){var t=this.fc.parsers;return t[e.originType]||t[toCase(e.type)]||t[e.trueType]||BaseParser},bindParser:function(e){e.setParser(this.getParser(e));},getType:function(e){var t=this.fc.CreateNode.aliasMap,n=t[e]||t[toCase(e)]||e;return toCase(n)},noWatch:function(e){this.noWatchFn||(this.noWatchFn=e),invoke(e),this.noWatchFn===e&&(this.noWatchFn=null);},watchCtx:function(e){var t=this,n=this.vm,r=["field","value","vm","template","name","config","control","inject","sync","payload","optionsTo","update"];Object.keys(e.rule).filter(function(e){return "_"!==e[0]&&"$"!==e[0]&&-1===r.indexOf(e)}).forEach(function(r){var i="children"===r;e.watch.push(n.$watch(function(){return e.rule[r]},function(n,o){if(!(t.loading||t.noWatchFn||t.reloading)){if(i&&!1===e.parser.loadChildren){ return t.$render.clearCache(e),void t.nextRefresh(); }if(t.watching=!0,"link"!==r){if(["props","on","nativeOn","deep"].indexOf(r)>-1){ t.parseInjectEvent(e.rule,n||{}),"props"===r&&e.input&&t.setFormData(e,e.parser.toFormValue(e.rule.value,e)); }else if(["emit","nativeEmit"].indexOf(r)>-1){ t.parseEmit(e,"emit"===r); }else if(["prefix","suffix"].indexOf(r)>-1){ n&&t.loadFn(n,e.rule); }else if("type"===r){ e.updateType(),t.bindParser(e); }else if("children"===r){var a=is.trueArray(n);t.deferSyncValue(function(){n!==o&&(t.rmSub(o),t.$render.initOrgChildren()),a&&t.loadChildren(n,e),t.vm.$emit("update",t.api);});}t.$render.clearCache(e),t.watching=!1;}else { e.link(); }}},{deep:!i,sync:i}));}),this.watchEffect(e);},rmSub:function(e){var t=this;is.trueArray(e)&&e.forEach(function(e){e&&e.__fc__&&t.rmCtx(e.__fc__);});},rmCtx:function(e){var t=this;if(!e.deleted){var n=e.id,r=e.field,i=e.input,o=e.name;e.input&&Object.defineProperty(e.rule,"value",{value:e.rule.value,writable:!0}),$del(this.ctxs,n),$del(this.$render.tempList,n),$del(this.$render.orgChildren,n),$del(this.vm.ctxInject,n),$del(this.formData,n),$del(this.subForm,n),$del(e,"cacheValue"),i&&this.rmIdCtx(e,r,"field"),o&&this.rmIdCtx(e,o,"name"),this.deferSyncValue(function(){t.reloading||(!1!==e.parser.loadChildren&&is.trueArray(e.rule.children)&&e.rule.children.forEach(function(e){return e.__fc__&&t.rmCtx(e.__fc__)}),e.root===t.rules&&t.vm._renderRule());},i);var a=this.sort.indexOf(n);return a>-1&&this.sort.splice(a,1),this.$render.clearCache(e),e.delete(),this.effect(e,"deleted"),i&&!this.fieldCtx[r]&&this.vm.$emit("removeField",r,e.rule,this.api),e.rule.__ctrl||this.vm.$emit("removeRule",e.rule,this.api),e}}});}function useLifecycle(e){extend(e.prototype,{mounted:function(){var e=this,t=function(){e.isMounted=!0,e.lifecycle("mounted");};this.pageEnd?t():this.bus.$once("page-end",t);},lifecycle:function(e){var t=this,n=this.options[e];is.Function(n)&&invoke(function(){return n(t.api)}),this.vm.$emit(e,this.api);}});}function useEffect(e){extend(e.prototype,{useProvider:function(){var e=this,t=this.fc.providers;Object.keys(t).forEach(function(n){var r=t[n];r._c=getComponent(r),e.onEffect(r),e.providers[n]=r;});},onEffect:function(e){var t=this,n=[];(e._c||["*"]).forEach(function(r){var i="*"===r?"*":t.getType(r);n.indexOf(i)>-1||(n.push(i),t.bus.$on("p:".concat(e.name,":").concat(i,":").concat(e.input?1:0),function(t,n){e[t]&&e[t].apply(e,_toConsumableArray(n));}));}),e._used=n;},watchEffect:function(e){var t=this,n=this.vm,r={};Object.keys(e.rule.effect||{}).forEach(function(t){r[t]=function(){return e.rule.effect[t]};}),Object.keys(e.rule).forEach(function(t){"$"===t[0]&&(r[t.substr(1)]=function(){return e.rule[t]});}),Object.keys(r||{}).forEach(function(i){e.watch.push(n.$watch(r[i],function(n){t.effect(e,"watch",_defineProperty({},i,n));},{deep:!0}));});},ruleEffect:function(e,t,n){this.emitEffect({rule:e,input:!!e.field,type:this.getType(e.type)},t,n);},effect:function(e,t,n){this.emitEffect({rule:e.rule,input:e.input,type:e.trueType,ctx:e,custom:n},t);},getEffect:function(e,t){return hasProperty(e,"$"+t)?e["$"+t]:hasProperty(e,"effect")&&hasProperty(e.effect,t)?e.effect[t]:void 0},emitEffect:function(e,t,n){var r=this,i=e.ctx,o=e.rule,a=e.input,s=e.type,u=e.custom;if(s&&"fcFragment"!==s){var c=u||Object.keys(o).reduce(function(e,t){return "$"===t[0]&&(e[t.substr(1)]=o[t]),e},_objectSpread2({},o.effect||{}));Object.keys(c).forEach(function(e){var u=r.providers[e];if(u&&(!u.input||a)){var l;if(u._c){if(!(u._used.indexOf(s)>-1)){ return; }l=s;}else { l="*"; }var f=_objectSpread2({value:c[e],getValue:function(){return r.getEffect(o,e)}},n||{});i&&(f.getProp=function(){return i.effectData(e)},f.clearProp=function(){return i.clearEffectData(e)},f.mergeProp=function(e){return mergeProps([e],f.getProp())}),r.bus.$emit("p:".concat(e,":").concat(l,":").concat(u.input?1:0),t,[f,o,r.api]);}});}}});}function unique(e){return e.filter(function(e,t,n){return n.indexOf(e,0)===t})}function getComponent(e){var t=e.components;return Array.isArray(t)?unique(t.filter(function(e){return "*"!==e})):!!is.String(t)&&[t]}function Handler(e){var t=this;extend(this,{fc:e,vm:e.vm,watching:!1,loading:!1,reloading:!1,noWatchFn:null,deferSyncFn:null,isMounted:!1,formData:{},subForm:{},form:{},appendData:{},providers:{},cycleLoad:null,loadedId:1,nextTick:null,changeStatus:!1,pageEnd:!0,nextReload:function(){t.lifecycle("reload");}}),funcProxy(this,{options:function(){return e.options},bus:function(){return e.bus}}),this.initData(e.rules),this.$manager=new e.manager(this),this.$render=new Render(this),this.api=e.extendApi(Api(this),this);}function getError(e,t,n){var r="fail to ".concat(e," ").concat(n.status,"'"),i=new Error(r);return i.status=n.status,i.url=e,i}function getBody(e){var t=e.responseText||e.response;if(!t){ return t; }try{return JSON.parse(t)}catch(e$1){return t}}function fetch(e){if("undefined"!=typeof XMLHttpRequest){var t,n=new XMLHttpRequest,r=e.action;n.onerror=function(t){e.onError(t);},n.onload=function(){if(n.status<200||n.status>=300){ return e.onError(getError(r,e,n),getBody(n)); }e.onSuccess(getBody(n));},n.open(e.method||"get",r,!0),e.data&&("json"!==(e.dataType||"").toLowerCase()?(t=new FormData,Object.keys(e.data).map(function(n){t.append(n,e.data[n]);})):(t=JSON.stringify(e.data),n.setRequestHeader("content-type","application/json"))),e.withCredentials&&"withCredentials"in n&&(n.withCredentials=!0);var i=e.headers||{};Object.keys(i).forEach(function(e){null!==i[e]&&n.setRequestHeader(e,i[e]);}),n.send(t);}}extend(Handler.prototype,{initData:function(e){extend(this,{ctxs:{},fieldCtx:{},nameCtx:{},sort:[],rules:e});},init:function(){this.appendData=_objectSpread2(_objectSpread2(_objectSpread2({},this.fc.options.formData||{}),this.vm.value||{}),this.appendData),this.useProvider(),this.usePage(),this.loadRule(),this.$manager.__init(),this.vm.$set(this.vm,"formData",this.formData);}}),useInject(Handler),usePage(Handler),useRender$1(Handler),useLoader(Handler),useInput(Handler),useContext(Handler),useLifecycle(Handler),useEffect(Handler);var NAME$9="fcFragment",fragment={name:NAME$9,functional:!0,props:["vnode"],render:function(e,t){return t.props.vnode?t.props.vnode:t.children}};function parseProp(e){return is.String(e)?{domProps:{innerHTML:e}}:e}function CreateNodeFactory(){var e={};function t(e){e&&this.setVm(e);}return extend(t.prototype,{setVm:function(e){this.vm=e,this.$h=e.$createElement;},make:function(e,t,n){Vue.config.isReservedTag(e)&&t.nativeOn&&delete t.nativeOn;var r=this.$h(e,parseProp(t),n||[]);return r.context=this.vm,r},aliasMap:e}),extend(t,{aliasMap:e,alias:function(t,n){e[t]=n;},use:function(e){Object.keys(e).forEach(function(n){var r=toLine(n),i=toString(n).toLocaleLowerCase(),o=e[n];[n,r,i].forEach(function(e){t.alias(n,o),t.prototype[e]=function(e,t){return this.make(o,e,t)};});});}}),t}function createManager(e){var t=function(e){_inherits(n,Manager);var t=_createSuper(n);function n(){return _classCallCheck(this,n),t.apply(this,arguments)}return n}();return Object.assign(t.prototype,e),t}function Manager(e){extend(this,{$handle:e,vm:e.vm,options:{},ref:"fcForm",mergeOptionsRule:{normal:["form","row","info","submitBtn","resetBtn"]}}),this.updateKey(),this.init();}extend(Manager.prototype,{__init:function(){var e=this;this.$render=this.$handle.$render,this.$r=function(){var t;return (t=e.$render).renderRule.apply(t,arguments)};},updateKey:function(){this.key=uniqueId();},init:function(){},update:function(){},beforeRender:function(){},form:function(){return this.vm.$refs[this.ref]},mergeOptions:function(e,t){var n=this;return mergeProps(e.map(function(e){return n.tidyOptions(e)}),t,this.mergeOptionsRule)},updateOptions:function(e){this.options=this.mergeOptions([e],this.getDefaultOptions()),this.update();},tidyOptions:function(e){return e},tidyRule:function(e){},mergeProp:function(e){},getDefaultOptions:function(){return {}},render:function(e){}});var $fetch={name:"fetch",loaded:function(){run.apply(void 0,arguments);},watch:function(e,t,n){run(e,t,n)||(e.clearProp(),n.sync(t));}},$required={name:"required",load:function(e,t,n){var r=parseVa(e.getValue());if(!1===r.required){ e.clearProp(); }else {var i=_objectSpread2(_objectSpread2({},r),{},{required:!0,validator:function(e,t,n){is.empty(t)?n(i.message):n();}});i.message||(i.message=t.title+" is required"),e.getProp().validate=[i];}n.sync(t);},watch:function(){$required.load.apply($required,arguments);}};function parseVa(e){return is.Boolean(e)?{required:e}:is.String(e)?{message:e}:is.Object(e)?e:{}}function parseOpt(e){return is.String(e)&&(e={action:e,to:"options"}),e}function run(e,t,n){var r=e.value;if(is.Function(r)&&(r=r(t,n)),!(r=parseOpt(r))||!r.action){ return !1; }r.to||(r.to="options");var i=r.onError,o=function(){if(!e.getValue()){ return e.clearProp(),n.sync(t),!0 }},a=function(i){void 0===i?(e.clearProp(),n.sync(t)):deepSet(e.getProp(),r.to,i);};return invoke(function(){return fetch(_objectSpread2(_objectSpread2({},r),{},{onSuccess:function(e){o()||(a((r.parse||function(e){return e.data})(e,t,n)),n.sync(t));},onError:function(e){a(void 0),o()||(i||function(e){return err(e.message||"fetch fail "+r.action)})(e,t,n);}}))}),!0}var $provider={fetch:$fetch,required:$required},name="html",html={name:name,loadChildren:!1,render:function(e,t){return t.prop.domProps||(t.prop.domProps={}),t.prop.domProps.innerHTML=e,t.vNode.make(t.prop.props.tag||"div",t.prop)},renderChildren:function(e){return Array.isArray(e.rule.children)?e.rule.children.filter(function(e){return is.String(e)}).join(""):""}},_vue="undefined"!=typeof window&&window.Vue?window.Vue:Vue;function _parseProp(e,t){var n;return 2===arguments.length?t=(n=arguments[1])[e]:n=arguments[2],{id:t,prop:n}}function nameProp(){return _parseProp.apply(void 0,["name"].concat(Array.prototype.slice.call(arguments)))}function _getEl(e){return e&&e.el?is.Element(e.el)?e.el:document.querySelector(e.el):window.document.body}function mountForm(e,t){var n=new _vue({data:function(){return {rule:e,option:t||{}}},render:function(e){return e("FormCreate",{ref:"fc",props:this.$data})}});return n.$mount(),n}function exportAttrs(e){var t=e.key||[],n=e.array||[],r=e.normal||[];keyAttrs.push.apply(keyAttrs,_toConsumableArray(t)),arrayAttrs.push.apply(arrayAttrs,_toConsumableArray(n)),normalAttrs.push.apply(normalAttrs,_toConsumableArray(r)),appendProto([].concat(_toConsumableArray(t),_toConsumableArray(n),_toConsumableArray(r)));}var id$1=1,instance={};function FormCreateFactory(e){var t=_defineProperty({},fragment.name,fragment),n={},r={},i=_objectSpread2({},$provider),o=makerFactory(),a={global:{}},s={},u=CreateNodeFactory();function c(e){return instance[e]}function l(){var e=nameProp.apply(void 0,arguments);e.id&&e.prop&&(r[e.id]=e.prop);}function f(){var e=nameProp.apply(void 0,arguments);e.id&&e.prop&&(i[e.id]=_objectSpread2(_objectSpread2({},e.prop),{},{name:e.id}));}function d(e){u.use(e);}function p(){var e=nameProp.apply(void 0,arguments);if(e.id&&e.prop){var t=toCase(e.id),r=e.prop,i=!0===r.merge?n[t]:void 0;n[t]=_objectSpread2(_objectSpread2({},i||BaseParser),r),o[t]=creatorFactory(t),r.maker&&extend(o,r.maker);}}function h(e,n){var r;if(is.String(e)){if(r=toCase(e),["form-create","formcreate"].indexOf(r)>-1){ return m(); }if(void 0===n){ return t[r] }}else { r=toCase(e.name),n=e; }r&&n&&(t[r]=n,n.formCreateParser&&p(r,n.formCreateParser));}function m(){return _vue.extend($FormCreate($))}function y(){return _vue.extend(fragment)}function v(e,t){return is.Function(e.install)?e.install(g,t):is.Function(e)&&e(g,t),this}function g(e,t,n){var r=mountForm(e,t||{}),i=r.$refs.fc.formCreate;return i.$parent=n,_getEl(i.options).appendChild(r.$el),i.api()}function b(a){var u=_objectSpread2({},e);return a?u.inherit={components:t,parsers:n,directives:r,providers:i,maker:o,data:s}:delete u.inherit,FormCreateFactory(u)}function $(o,a,s){extend(this,{id:id$1++,vm:o,create:g,manager:createManager(e.manager),parsers:n,providers:i,rules:Array.isArray(a)?a:[],name:o.$options.propsData.name,prop:{components:t,directives:r},CreateNode:u,bus:new _vue,unwatch:null,extendApi:e.extendApi||function(e){return e}}),this.init(),this.initOptions(s||{}),this.name&&(instance[this.name]=this.api());}function _(t){extend(t,{version:e.version,ui:e.ui,data:s,maker:o,component:h,directive:l,register:f,$vnode:y,parser:p,use:v,factory:b,componentAlias:d,copyRule:copyRule,copyRules:copyRules,fetch:fetch,$form:m,parseFn:parseFn,parseJson:parseJson,toJson:toJson,getApi:c,init:function(e){var t=mountForm(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),n=t.$refs.fc.formCreate;return {mount:function(e){return e&&is.Element(e)&&(n.options.el=e),_getEl(n.options).appendChild(t.$el),n.api()},remove:function(){t.$el.parentNode&&t.$el.parentNode.removeChild(t.$el);},destroy:function(){this.remove(),t.$destroy();},$f:n.api()}}});}if(exportAttrs(e.attrs||{}),extend($.prototype,{init:function(){var e=this,t=this.vm,n=new Handler(this);this.$handle=n,t.$f=n.api,t.$emit("input",n.api),t.$on("hook:created",function(){e.isSub()&&(e.unwatch=t.$watch(function(){return t.$pfc.option},function(){e.initOptions(e.options),t.$f.refresh();},{deep:!0}),e.initOptions(e.options)),e.created();}),t.$on("hook:mounted",function(){e.mounted();}),t.$on("hook:beforeDestroy",function(){t.destroyed=!0,e.unwatch&&e.unwatch(),n.reloadRule([]),e.name&&delete instance[e.name];}),t.$on("hook:updated",function(){n.bindNextTick(function(){return e.bus.$emit("next-tick",n.api)});});},isSub:function(){return this.vm.$pfc&&this.vm.extendOption},initOptions:function(e){this.options=_objectSpread2({formData:{},submitBtn:{},resetBtn:{}},deepCopy(a)),this.isSub()&&this.mergeOptions(this.options,this.vm.$pfc.$f.config||{},!0),this.updateOptions(e);},mergeOptions:function(e,t,n){return t=deepCopy(t),n&&["page","onSubmit","mounted","reload","formData","el"].forEach(function(e){delete t[e];}),t.global&&(e.global=mergeGlobal(e.global,t.global),delete t.global),this.$handle.$manager.mergeOptions([t],e),e},updateOptions:function(e){this.mergeOptions(this.options,e),this.$handle.$manager.updateOptions(this.options);},created:function(){this.$handle.init(),this.vm.$emit("created",this.api());},api:function(){return this.$handle.api},render:function(){return this.$handle.render()},mounted:function(){this.$handle.mounted();}}),_(g),extend(g,{create:g,install:function(e,t){if(a=_objectSpread2(_objectSpread2({},a),t||{}),!0!==e._installedFormCreate){e._installedFormCreate=!0,_vue=e;var n=function(e){return g(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},this)};_(n),e.prototype.$formCreate=n,e.component("FormCreate",m()),e.component("FcFragment",y());}}}),u.use({fragment:"fcFragment"}),p(html),e.install&&g.use(e),e.inherit){var x=e.inherit;x.components&&extend(t,x.components),x.parsers&&extend(n,x.parsers),x.directives&&extend(r,x.directives),x.providers&&extend(i,x.providers),x.maker&&extend(o,x.maker),x.data&&extend(s,x.data);}return g}var DEFAULT_FORMATS={date:"yyyy-MM-dd",month:"yyyy-MM",datetime:"yyyy-MM-dd HH:mm:ss",timerange:"HH:mm:ss",daterange:"yyyy-MM-dd",monthrange:"yyyy-MM",datetimerange:"yyyy-MM-dd HH:mm:ss",year:"yyyy"},name$1="datePicker",datePicker={name:name$1,maker:["year","month","date","dates","week","datetime","datetimeRange","dateRange","monthRange"].reduce(function(e,t){return e[t]=creatorFactory(name$1,{type:t.toLowerCase()}),e},{}),mergeProp:function(e){var t=e.prop.props;t.valueFormat||(t.valueFormat=DEFAULT_FORMATS[t.type]||DEFAULT_FORMATS.date);}},name$2="hidden",hidden={name:name$2,maker:_defineProperty({},name$2,function(e,t){return creatorFactory(name$2)("",e,t)}),render:function(){return []}},name$3="input",input={name:name$3,maker:function(){var e=["password","url","email","text","textarea"].reduce(function(e,t){return e[t]=creatorFactory(name$3,{type:t}),e},{});return e.idate=creatorFactory(name$3,{type:"date"}),e}(),mergeProp:function(e){var t=e.prop.props;t&&t.autosize&&t.autosize.minRows&&(t.rows=t.autosize.minRows||2);}},name$4="slider",slider={name:name$4,maker:{sliderRange:creatorFactory(name$4,{range:!0})},toFormValue:function(e,t){var n=Array.isArray(e),r=t.prop.props,i=r.min||0;return !0===r.range?n?e:[i,parseFloat(e)||i]:n?parseFloat(e[0])||i:parseFloat(e)}},name$5="timePicker",timePicker={name:name$5,maker:{time:creatorFactory(name$5,function(e){return e.props.isRange=!1}),timeRange:creatorFactory(name$5,function(e){return e.props.isRange=!0})},mergeProp:function(e){var t=e.prop.props;t.valueFormat||(t.valueFormat="HH:mm:ss");}},row={name:"FcRow",render:function(e,t){return t.vNode.col({props:{span:24}},[t.vNode.row(t.prop,e)])}},name$6="select",select={name:name$6,toFormValue:function(e,t){return t.prop.props.multiple&&!Array.isArray(e)?toArray(e):e}},parsers=[datePicker,hidden,input,slider,timePicker,row,select],PRE="el",alias={button:PRE+"Button",icon:"i",slider:PRE+"Slider",rate:PRE+"Rate",upload:"fcUpload",cascader:PRE+"Cascader",popover:PRE+"Popover",tooltip:PRE+"Tooltip",colorPicker:PRE+"ColorPicker",timePicker:PRE+"TimePicker",timeSelect:PRE+"TimeSelect",datePicker:PRE+"DatePicker",switch:PRE+"Switch",select:"fcSelect",checkbox:"fcCheckbox",radio:"fcRadio",inputNumber:PRE+"InputNumber",number:PRE+"InputNumber",input:PRE+"Input",formItem:PRE+"FormItem",form:PRE+"Form",frame:"fcFrame",col:PRE+"Col",row:PRE+"Row",tree:"fcTree",autoComplete:PRE+"Autocomplete",auto:PRE+"Autocomplete",group:"fcGroup",object:"fcSubForm",subForm:"fcSubForm"};function getConfig(){return {form:{inline:!1,labelPosition:"right",labelWidth:"125px",disabled:!1,size:void 0},row:{show:!0,gutter:0},submitBtn:{type:"primary",loading:!1,disabled:!1,innerText:"提交",show:!0,col:void 0,click:void 0},resetBtn:{type:"default",loading:!1,disabled:!1,icon:"el-icon-refresh",innerText:"重置",show:!1,col:void 0,click:void 0}}}function isTooltip(e){return "tooltip"===e.type}var upperCaseReg=/[A-Z]/;function isAttr(e,t){return !upperCaseReg.test(e)&&(is.String(t)||is.Number(t))}function tidy(e,t){var n;hasProperty(e,t)&&(is.String(e[t])&&(e[t]=(_defineProperty(n={},t,e[t]),_defineProperty(n,"show",!0),n)));}function isFalse(e){return !1===e}function tidyBool(e,t){hasProperty(e,t)&&!is.Object(e[t])&&(e[t]={show:!!e[t]});}var manager={validate:function(e){this.form().validate(e);},validateField:function(e,t){this.form().validateField(e,t);},clearValidateState:function(e){var t=this.vm.$refs[e.wrapRef];t&&(t.validateMessage="",t.validateState="");},tidyOptions:function(e){return ["submitBtn","resetBtn","row","info","wrap","col"].forEach(function(t){tidyBool(e,t);}),e},tidyRule:function(e){var t=e.prop;return tidy(t,"title"),tidy(t,"info"),t},mergeProp:function(e){var t=e.prop.props;e.prop=mergeProps([{attrs:Object.keys(t).reduce(function(e,n){return isAttr(n,t[n])&&(e[n]=t[n]),e},{}),info:this.options.info||{},wrap:this.options.wrap||{},col:this.options.col||{}},e.prop],{info:{trigger:"hover",placement:"top-start",icon:"el-icon-warning"},title:{},col:{span:24},wrap:{}},{normal:["title","info","col","wrap"]});},getDefaultOptions:function(){return getConfig()},update:function(){var e=this.options.form;this.rule={props:_objectSpread2({},e),nativeOn:{submit:function(e){e.preventDefault();}},class:[e.className,e.class,"form-create"],style:e.style,type:"form"};},beforeRender:function(){var e=this.key,t=this.ref,n=this.$handle;extend(this.rule,{key:e,ref:t}),extend(this.rule.props,{model:n.formData,rules:n.validate()});},render:function(e){return e.length&&e.push(this.makeFormBtn()),this.$r(this.rule,isFalse(this.options.row.show)?e:[this.makeRow(e)])},makeWrap:function(e,t){var n=e.prop,r="".concat(this.key).concat(e.key),i=n.col,o=this.isTitle(n),a=i.labelWidth||o?i.labelWidth:0,s=this.rule.props,u=s.inline,c=s.col,l=isFalse(n.wrap.show)?t:this.$r(mergeProps([n.wrap,{props:_objectSpread2(_objectSpread2({labelWidth:void 0===a?a:toString(a),label:o?n.title.title:void 0},n.wrap||{}),{},{prop:e.id,rules:n.validate}),class:n.className,key:"".concat(r,"fi"),ref:e.wrapRef,type:"formItem"}]),[t,o?this.makeInfo(n,r):null]);return !0===u||isFalse(c)||isFalse(i.show)?l:this.makeCol(n,r,[l])},isTitle:function(e){if(!1===this.options.form.title){ return !1; }var t=e.title;return !(!t.title&&!t.native||isFalse(t.show))},makeInfo:function(e,t){var n=e.title,r=e.info,i=isTooltip(r),o=this.options.form,a=[(n.title||"")+(o.labelSuffix||o["label-suffix"]||"")];if(!isFalse(r.show)&&(r.info||r.native)&&!isFalse(r.icon)){var s={type:r.type||"popover",props:_objectSpread2({},r),key:"".concat(t,"pop"),slot:"label"};r.info&&!hasProperty(s.props,"content")&&(s.props.content=r.info),a["left"!==r.align?"unshift":"push"](this.$r(mergeProps([r,s]),[this.$r({type:"i",slot:i?"default":"reference",class:!0===r.icon?"el-icon-warning":r.icon,key:"".concat(t,"i")})]));}return this.$r(mergeProps([n,{props:n,slot:n.slot||"label",key:"".concat(t,"tit"),type:n.type||"span"}]),a)},makeCol:function(e,t,n){var r=e.col;return this.$r({class:r.class,type:"col",props:r||{span:24},key:"".concat(t,"col")},n)},makeRow:function(e){var t=this.options.row||{};return this.$r({type:"row",props:t,class:t.class,key:"".concat(this.key,"row")},e)},makeFormBtn:function(){var e=[];if(isFalse(this.options.submitBtn.show)||e.push(this.makeSubmitBtn()),isFalse(this.options.resetBtn.show)||e.push(this.makeResetBtn()),e.length){var t=this.$r({type:"formItem",key:"".concat(this.key,"fb")},e);return !0===this.rule.props.inline?t:this.$r({type:"col",props:{span:24},key:"".concat(this.key,"fc")},[t])}},makeResetBtn:function(){var e=this,t=this.options.resetBtn;return this.$r({type:"button",props:t,style:{width:t.width},on:{click:function(){var n=e.$handle.api;t.click?t.click(n):n.resetFields();}},key:"".concat(this.key,"b2")},[t.innerText])},makeSubmitBtn:function(){var e=this,t=this.options.submitBtn;return this.$r({type:"button",props:t,style:{width:t.width},on:{click:function(){var n=e.$handle.api;t.click?t.click(n):n.submit();}},key:"".concat(this.key,"b1")},[t.innerText])}},maker={};function useAlias(e){["group","tree","switch","upload","autoComplete","checkbox","cascader","colorPicker","datePicker","frame","inputNumber","radio","rate"].forEach(function(t){e[t]=creatorFactory(t);}),e.auto=e.autoComplete,e.number=e.inputNumber,e.color=e.colorPicker;}function useSelect(e){e.selectMultiple=creatorFactory("select",_defineProperty({},"multiple",!0)),e.selectOne=creatorFactory("select",_defineProperty({},"multiple",!1));}function useTree(e){var t={treeSelected:"selected",treeChecked:"checked"};Object.keys(t).reduce(function(e,n){return e[n]=creatorFactory("tree",{type:t[n]}),e},e);}function useUpload(e){var t={image:["image",0],file:["file",0],uploadFileOne:["file",1],uploadImageOne:["image",1]};Object.keys(t).reduce(function(e,n){return e[n]=creatorFactory("upload",function(e){return e.props({uploadType:t[n][0],maxLength:t[n][1]})}),e},e),e.uploadImage=e.image,e.uploadFile=e.file;}function useFrame(e){var t={frameInputs:["input",0],frameFiles:["file",0],frameImages:["image",0],frameInputOne:["input",1],frameFileOne:["file",1],frameImageOne:["image",1]};return Object.keys(t).reduce(function(e,n){return e[n]=creatorFactory("frame",function(e){return e.props({type:t[n][0],maxLength:t[n][1]})}),e},e),e.frameInput=e.frameInputs,e.frameFile=e.frameFiles,e.frameImage=e.frameImages,e}useAlias(maker),useSelect(maker),useTree(maker),useUpload(maker),useFrame(maker);var css_248z$2=".form-create .form-create .el-form-item {\n    margin-bottom: 22px;\n}\n\n.form-create .form-create .el-form-item .el-form-item {\n    margin-bottom: 0px;\n}\n";function tidyBtnProp(e,t){return is.Boolean(e)?e={show:e}:is.Undef(e)||is.Object(e)||(e={show:t}),e}function extendApi(e,t){return extend(e,{validate:function(n){var r,i=e.children,o=i.length,a=function(){t.$manager.validate(function(){
  var arguments$1 = arguments;
  for(var e=arguments.length,t=new Array(e),i=0;i<e;i++){ t[i]=arguments$1[i]; }t[0]&&r||(r=t),n&&n.apply(void 0,_toConsumableArray(r));});};i.forEach(function(e){e.validate(function(){
  var arguments$1 = arguments;
  for(var e=arguments.length,t=new Array(e),n=0;n<e;n++){ t[n]=arguments$1[n]; }return function(e){setTimeout(function(){e[0]||r||(r=e),--o||a();});}(t)});}),o||a();},validateField:function(e,n){var r=t.getFieldCtx(e);if(r){var i,o=t.subForm[r.id],a=0,s=function(){t.$manager.validateField(r.id,function(){
  var arguments$1 = arguments;
  for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){ t[r]=arguments$1[r]; }if(t[0]){ i=t; }else if(i){ return n&&n("子表单验证未通过",i[1]); }n&&n.apply(void 0,_toConsumableArray(i||t));});};o&&toArray(o).forEach(function(e){a++,e.validate(function(){
  var arguments$1 = arguments;
  for(var e=arguments.length,t=new Array(e),n=0;n<e;n++){ t[n]=arguments$1[n]; }return function(e){setTimeout(function(){e[0]||i||(i=e),--a||s();});}(t)});}),a||s();}},clearValidateState:function(n){var r=this,i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.helper.tidyFields(n).forEach(function(e){i&&r.clearSubValidateState(e),t.getCtxs(e).forEach(function(e){t.$manager.clearValidateState(e);});});},clearSubValidateState:function(n){e.helper.tidyFields(n).forEach(function(e){t.getCtxs(e).forEach(function(e){var n=t.subForm[e.id];n&&(Array.isArray(n)?n.forEach(function(e){e.clearValidateState();}):n&&n.clearValidateState());});});},btn:{loading:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.submitBtnProps({loading:!!t});},disabled:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.submitBtnProps({disabled:!!t});},show:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.submitBtnProps({show:!!t});}},resetBtn:{loading:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.resetBtnProps({loading:!!t});},disabled:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.resetBtnProps({disabled:!!t});},show:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.resetBtnProps({show:!!t});}},submitBtnProps:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=tidyBtnProp(t.options.submitBtn,!0);extend(r,n),t.options.submitBtn=r,e.refreshOptions();},resetBtnProps:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=tidyBtnProp(t.options.resetBtn,!1);extend(r,n),t.options.resetBtn=r,e.refreshOptions();},submit:function(n,r){var i=arguments,o=this;e.validate(function(a){if(a){var s=e.formData();is.Function(n)?invoke(function(){return n(s,o)}):(is.Function(t.options.onSubmit)&&invoke(function(){return t.options.onSubmit(s,o)}),t.vm.$emit("submit",s,o));}else { is.Function(r)&&invoke(function(){return r.apply(void 0,[o].concat(_toConsumableArray(i)))}); }});}}),e}function install(e){e.componentAlias(alias),components.forEach(function(t){e.component(t.name,t);}),parsers.forEach(function(t){e.parser(t);}),Object.keys(maker).forEach(function(t){e.maker[t]=maker[t];});}function elmFormCreate(){return FormCreateFactory({ui:"".concat("element-ui"),version:"".concat("2.5.19"),manager:manager,extendApi:extendApi,install:install,attrs:{normal:["col","wrap"],array:["className"],key:["title","info"]}})}styleInject(css_248z$2);var FormCreate=elmFormCreate();"undefined"!=typeof window&&(window.formCreate=FormCreate,window.Vue&&FormCreate.install(window.Vue));var maker$1=FormCreate.maker;exports.default=FormCreate,exports.maker=maker$1,Object.defineProperty(exports,"__esModule",{value:!0});});
  //# sourceMappingURL=form-create.min.js.map
  });

  var formCreate = /*@__PURE__*/getDefaultExportFromCjs(formCreate_min);

  var viewForm = formCreate;
  var designerForm = formCreate.factory();

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$j = {
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: {
        type: Object,
        "default": function _default() {
          return {
            banner: "",
            title: "",
            remarks: ""
          };
        }
      }
    },
    data: function data() {
      return {};
    },
    methods: {
      handleTitle: function handleTitle(val) {
        var value = _objectSpread2({}, this.value);

        value.title = val;
        this.change(value);
      },
      handleRemarks: function handleRemarks(val) {
        var value = _objectSpread2({}, this.value);

        value.remarks = val;
        this.change(value);
      },
      change: function change(value) {
        this.$emit('change', value);
      }
    }
  };

  function styleInject(css, ref) {
    if ( ref === void 0 ) { ref = {}; }
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$l = ".page-info-form .banner-img[data-v-1fb7d040]{width:100%}.page-info-form[data-v-1fb7d040]{border:1px dashed rgba(0,0,0,.25);border-bottom:none}.page-info-form .banner[data-v-1fb7d040],.page-info-form .banner img[data-v-1fb7d040]{max-height:240px}.title-box[data-v-1fb7d040]{margin-top:30px;margin-bottom:4px;padding:0 32px}.remarks[data-v-1fb7d040]{padding:0 32px}";
  styleInject(css_248z$l);

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      var options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      var hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              var originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              var existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  /* script */
  var __vue_script__$j = script$j;
  /* template */

  var __vue_render__$i = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "page-info-form page-info-form-banner"
    }, [_c("div", {
      staticClass: "banner"
    }, [_c("img", {
      staticClass: "banner-img",
      attrs: {
        src: _vm.value.banner,
        alt: "",
        srcset: ""
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "title-box"
    }, [_c("el-input", {
      staticClass: "page-title",
      attrs: {
        placeholder: "请输入",
        maxlength: 10,
        value: _vm.value.title
      },
      on: {
        input: _vm.handleTitle
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "remarks"
    }, [_c("el-input", {
      attrs: {
        type: "textarea",
        rows: 4,
        placeholder: "请输入内容",
        value: _vm.value.remarks,
        maxlength: 200
      },
      on: {
        input: _vm.handleRemarks
      }
    })], 1)]);
  };

  var __vue_staticRenderFns__$i = [];
  __vue_render__$i._withStripped = true;
  /* style */

  var __vue_inject_styles__$j = undefined;
  /* scoped */

  var __vue_scope_id__$j = "data-v-1fb7d040";
  /* module identifier */

  var __vue_module_identifier__$j = undefined;
  /* functional template */

  var __vue_is_functional_template__$j = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$j = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$i,
    staticRenderFns: __vue_staticRenderFns__$i
  }, __vue_inject_styles__$j, __vue_script__$j, __vue_scope_id__$j, __vue_is_functional_template__$j, __vue_module_identifier__$j, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$i = {
    components: {},
    props: {
      src: {
        type: String
      }
    },
    data: function data() {
      return {
        contentImgLink: []
      };
    },
    computed: {
      config: function config() {}
    },
    watch: {},
    created: function created() {},
    methods: {
      handleUp: function handleUp(url) {
        this.$emit("change", url);
      },
      beforeAvatarUpload: function beforeAvatarUpload(file) {
        //上传文件类型限制
        var isJPG = file.type.indexOf("image") > -1;
        var isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error("仅支持上传图片!");
        }

        if (!isLt2M) {
          this.$message.error("上传头像图片大小不能超过 2MB!");
        }

        return isJPG && isLt2M;
      },
      handleRemove: function handleRemove(res) {

        if (res.res == 0) {
          this.handleUp(res.data.image_url);
        } else {
          this.$message.error("上传失败");
        }
      }
    }
  };

  var css_248z$k = ".config-from-box[data-v-0aa927b0]{width:100%}.config-from-box .from-label[data-v-0aa927b0]{line-height:55px;padding-left:16px;font-size:16px;font-weight:600;color:rgba(0,0,0,.85);border-bottom:1px solid rgba(0,0,0,.06)}.config-from-box .thumbnail[data-v-0aa927b0]{width:100%}.tip[data-v-0aa927b0]{margin-top:5px;font-size:14px;font-weight:400;color:rgba(0,0,0,.45)}";
  styleInject(css_248z$k);

  /* script */
  var __vue_script__$i = script$i;
  /* template */

  var __vue_render__$h = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "config-from-box"
    }, [_c("div", {
      staticClass: "from-label"
    }, [_vm._v("页眉")]), _vm._v(" "), _c("div", {
      staticClass: "setting-body"
    }, [_c("div", {
      staticClass: "config-item"
    }, [_c("div", {
      staticClass: "item-title"
    }, [_c("span", {
      staticClass: "title-text"
    }, [_vm._v("图片")]), _vm._v(" "), _c("div", [_c("el-upload", {
      staticClass: "avatar-uploader",
      attrs: {
        action: "/app/uploadImage",
        "show-file-list": false,
        "before-upload": _vm.beforeAvatarUpload,
        "on-success": function onSuccess(res) {
          return _vm.handleRemove(res);
        }
      },
      on: {
        change: function change($event) {
          return _vm.handchange($event);
        }
      }
    }, [_c("el-button", {
      staticStyle: {
        color: "#828ee8"
      },
      attrs: {
        size: "mini",
        type: "text"
      }
    }, [_vm._v("更换图片")])], 1)], 1)]), _vm._v(" "), _c("div", {
      staticClass: "item-body"
    }, [_c("img", {
      staticClass: "thumbnail",
      attrs: {
        src: _vm.src,
        alt: "",
        srcset: ""
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "tip"
    }, [_vm._v("建议图片尺寸750*224，500k以内")])])])])]);
  };

  var __vue_staticRenderFns__$h = [];
  __vue_render__$h._withStripped = true;
  /* style */

  var __vue_inject_styles__$i = undefined;
  /* scoped */

  var __vue_scope_id__$i = "data-v-0aa927b0";
  /* module identifier */

  var __vue_module_identifier__$i = undefined;
  /* functional template */

  var __vue_is_functional_template__$i = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$i = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$h,
    staticRenderFns: __vue_staticRenderFns__$h
  }, __vue_inject_styles__$i, __vue_script__$i, __vue_scope_id__$i, __vue_is_functional_template__$i, __vue_module_identifier__$i, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script$h = {
    props: {
      title: {
        type: [String, Number]
      },
      mode: {
        type: String,
        "default": 'horizontal' // horizontal / vertical

      }
    }
  };

  var css_248z$j = ".config-item{padding:15px;border-bottom:1px solid rgba(0,0,0,.06)}.config-item .item-title{display:flex;justify-content:space-between;align-items:center;line-height:22px}.config-item .item-title .title-text{font-size:14px;font-weight:600;color:rgba(0,0,0,.85)}.config-item.horizontal .item-title{margin-bottom:8px}.config-item.vertical{display:flex;justify-content:space-between;align-items:center}";
  styleInject(css_248z$j);

  /* script */
  var __vue_script__$h = script$h;
  /* template */

  var __vue_render__$g = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "config-item",
      "class": [_vm.mode]
    }, [_c("div", {
      staticClass: "item-title"
    }, [_c("span", {
      staticClass: "title-text"
    }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("div", [_vm._t("action")], 2)]), _vm._v(" "), _c("div", {
      staticClass: "item-body"
    }, [_vm._t("default")], 2)]);
  };

  var __vue_staticRenderFns__$g = [];
  __vue_render__$g._withStripped = true;
  /* style */

  var __vue_inject_styles__$h = undefined;
  /* scoped */

  var __vue_scope_id__$h = undefined;
  /* module identifier */

  var __vue_module_identifier__$h = undefined;
  /* functional template */

  var __vue_is_functional_template__$h = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$h = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$g,
    staticRenderFns: __vue_staticRenderFns__$g
  }, __vue_inject_styles__$h, __vue_script__$h, __vue_scope_id__$h, __vue_is_functional_template__$h, __vue_module_identifier__$h, false, undefined, undefined, undefined);

  //
  var script$g = {
    name: 'TitleTtem',
    components: {
      ConfigItem: __vue_component__$h
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      name: {
        type: [String, Number]
      },
      title: {
        type: [String, Number],
        "default": '标题'
      },
      value: {
        type: [String, Number]
      },
      placeholder: {
        type: [String, Number],
        "default": '请输入内容'
      }
    },
    data: function data() {
      return {
        defauleValue: ''
      };
    },
    watch: {
      value: function value(val) {
        this.defauleValue = val;
      }
    },
    created: function created() {
      this.defauleValue = this.value;
    },
    methods: {
      onInput: function onInput() {
        this.$emit('change', {
          name: this.name,
          value: this.defauleValue
        });
      }
    }
  };

  var css_248z$i = "";
  styleInject(css_248z$i);

  /* script */
  var __vue_script__$g = script$g;
  /* template */

  var __vue_render__$f = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("config-item", {
      attrs: {
        title: _vm.title
      }
    }, [_c("el-input", {
      attrs: {
        size: "medium",
        placeholder: _vm.placeholder
      },
      on: {
        input: _vm.onInput
      },
      model: {
        value: _vm.defauleValue,
        callback: function callback($$v) {
          _vm.defauleValue = $$v;
        },
        expression: "defauleValue"
      }
    })], 1);
  };

  var __vue_staticRenderFns__$f = [];
  __vue_render__$f._withStripped = true;
  /* style */

  var __vue_inject_styles__$g = undefined;
  /* scoped */

  var __vue_scope_id__$g = undefined;
  /* module identifier */

  var __vue_module_identifier__$g = undefined;
  /* functional template */

  var __vue_is_functional_template__$g = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$g = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$f,
    staticRenderFns: __vue_staticRenderFns__$f
  }, __vue_inject_styles__$g, __vue_script__$g, __vue_scope_id__$g, __vue_is_functional_template__$g, __vue_module_identifier__$g, false, undefined, undefined, undefined);

  //
  var script$f = {
    name: 'TitleTtem',
    components: {
      ConfigItem: __vue_component__$h
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      name: {
        type: [String, Number]
      },
      title: {
        type: [String, Number]
      },
      value: {
        type: [String, Number]
      },
      placeholder: {
        type: [String, Number],
        "default": '请输入内容'
      }
    },
    data: function data() {
      return {
        defauleValue: ''
      };
    },
    watch: {
      value: {
        handler: function handler(val) {
          this.defauleValue = val;
        }
      }
    },
    created: function created() {
      this.defauleValue = this.value;
    },
    methods: {
      onInput: function onInput() {
        this.$emit('change', {
          name: this.name,
          value: this.defauleValue
        });
      }
    }
  };

  var css_248z$h = "";
  styleInject(css_248z$h);

  /* script */
  var __vue_script__$f = script$f;
  /* template */

  var __vue_render__$e = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("config-item", {
      attrs: {
        title: _vm.title
      }
    }, [_c("el-input", {
      attrs: {
        size: "medium",
        placeholder: _vm.placeholder
      },
      on: {
        input: _vm.onInput
      },
      model: {
        value: _vm.defauleValue,
        callback: function callback($$v) {
          _vm.defauleValue = $$v;
        },
        expression: "defauleValue"
      }
    })], 1);
  };

  var __vue_staticRenderFns__$e = [];
  __vue_render__$e._withStripped = true;
  /* style */

  var __vue_inject_styles__$f = undefined;
  /* scoped */

  var __vue_scope_id__$f = undefined;
  /* module identifier */

  var __vue_module_identifier__$f = undefined;
  /* functional template */

  var __vue_is_functional_template__$f = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$f = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$e,
    staticRenderFns: __vue_staticRenderFns__$e
  }, __vue_inject_styles__$f, __vue_script__$f, __vue_scope_id__$f, __vue_is_functional_template__$f, __vue_module_identifier__$f, false, undefined, undefined, undefined);

  //
  var script$e = {
    name: "TitleTtem",
    components: {
      ConfigItem: __vue_component__$h
    },
    model: {
      prop: "value",
      event: "change"
    },
    props: {
      value: {
        type: Boolean
      }
    },
    data: function data() {
      return {
        defauleValue: false
      };
    },
    watch: {
      value: function value(val) {
        this.defauleValue = val;
      }
    },
    created: function created() {
      this.defauleValue = this.value;
    },
    methods: {
      onChange: function onChange() {
        this.$emit("change", this.defauleValue);
      }
    }
  };

  var css_248z$g = "";
  styleInject(css_248z$g);

  /* script */
  var __vue_script__$e = script$e;
  /* template */

  var __vue_render__$d = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("config-item", {
      attrs: {
        title: "必填",
        mode: "vertical"
      }
    }, [_c("div", [_c("el-switch", {
      attrs: {
        "active-color": "#828EE8",
        "inactive-color": "rgb(191 191 191)"
      },
      on: {
        change: _vm.onChange
      },
      model: {
        value: _vm.defauleValue,
        callback: function callback($$v) {
          _vm.defauleValue = $$v;
        },
        expression: "defauleValue"
      }
    })], 1)]);
  };

  var __vue_staticRenderFns__$d = [];
  __vue_render__$d._withStripped = true;
  /* style */

  var __vue_inject_styles__$e = undefined;
  /* scoped */

  var __vue_scope_id__$e = undefined;
  /* module identifier */

  var __vue_module_identifier__$e = undefined;
  /* functional template */

  var __vue_is_functional_template__$e = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$e = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$d,
    staticRenderFns: __vue_staticRenderFns__$d
  }, __vue_inject_styles__$e, __vue_script__$e, __vue_scope_id__$e, __vue_is_functional_template__$e, __vue_module_identifier__$e, false, undefined, undefined, undefined);

  //
  var script$d = {
    name: "WordLimitItem",
    components: {
      ConfigItem: __vue_component__$h
    },
    model: {
      prop: "value",
      event: "change"
    },
    props: {
      name: {
        type: [String, Number]
      },
      title: {
        type: [String, Number]
      },
      value: {
        type: Object,
        "default": {
          maxlength: "",
          minlength: ""
        }
      }
    },
    data: function data() {
      return {
        defauleValue: {
          maxlength: "",
          minlength: ""
        }
      };
    },
    watch: {
      value: {
        deep: true,
        immediate: true,
        handler: function handler(val) {
          this.defauleValue = val;
        }
      },
      "defauleValue.minlength": {
        handler: function handler(val) {
          if (val > 0) {
            if (this.defauleValue.maxlength > 0) {
              if (val > this.defauleValue.maxlength) {
                this.defauleValue.minlength = this.defauleValue.maxlength;
                this.onInput();
              }
            }
          } else {
            if (val == 0) {
              this.defauleValue.minlength = "";
              this.onInput();
            } else {
              this.defauleValue.minlength = val.replace(/\D/g, "");
              this.onInput();
            }
          }
        }
      },
      "defauleValue.maxlength": {
        handler: function handler(val) {
          if (val > 0) {
            if (this.defauleValue.minlength > 0) {
              if (val < this.defauleValue.minlength) {
                this.defauleValue.maxlength = this.defauleValue.minlength;
                this.onInput();
              }
            }
          } else {
            if (val == 0) {
              this.defauleValue.minlength = "";
              this.onInput();
            } else {
              this.defauleValue.minlength = val.replace(/\D/g, "");
              this.onInput();
            }
          }
        }
      }
    },
    created: function created() {},
    methods: {
      onInput: function onInput() {
        this.$emit("change", {
          name: this.name,
          value: this.defauleValue
        });
        this.$emit("change", {
          name: "maxlength",
          value: this.defauleValue.maxlength
        });
        this.$emit("change", {
          name: "minlength",
          value: this.defauleValue.minlength
        });
      }
    }
  };

  var css_248z$f = ".word-limit-item{display:flex;align-items:center;margin-bottom:10px;font-weight:400;color:rgba(0,0,0,.65);font-size:14px}.word-limit-item:last-child{margin-bottom:0}.word-limit-item .limit-input{flex:1;margin:0 8px}";
  styleInject(css_248z$f);

  /* script */
  var __vue_script__$d = script$d;
  /* template */

  var __vue_render__$c = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("config-item", {
      attrs: {
        title: _vm.title
      }
    }, [_c("div", {
      staticClass: "word-limit-item"
    }, [_c("span", [_vm._v("最少填")]), _vm._v(" "), _c("el-input", {
      staticClass: "limit-input",
      attrs: {
        size: "medium",
        placeholder: "不填写默认无限制"
      },
      on: {
        input: _vm.onInput
      },
      model: {
        value: _vm.defauleValue.minlength,
        callback: function callback($$v) {
          _vm.$set(_vm.defauleValue, "minlength", _vm._n($$v));
        },
        expression: "defauleValue.minlength"
      }
    }), _vm._v(" "), _c("span", [_vm._v("个字")])], 1), _vm._v(" "), _c("div", {
      staticClass: "word-limit-item"
    }, [_c("span", [_vm._v("最多填")]), _vm._v(" "), _c("el-input", {
      staticClass: "limit-input",
      attrs: {
        size: "medium",
        placeholder: "不填写默认无限制"
      },
      on: {
        input: _vm.onInput
      },
      model: {
        value: _vm.defauleValue.maxlength,
        callback: function callback($$v) {
          _vm.$set(_vm.defauleValue, "maxlength", _vm._n($$v));
        },
        expression: "defauleValue.maxlength"
      }
    }), _vm._v(" "), _c("span", [_vm._v("个字")])], 1)]);
  };

  var __vue_staticRenderFns__$c = [];
  __vue_render__$c._withStripped = true;
  /* style */

  var __vue_inject_styles__$d = undefined;
  /* scoped */

  var __vue_scope_id__$d = undefined;
  /* module identifier */

  var __vue_module_identifier__$d = undefined;
  /* functional template */

  var __vue_is_functional_template__$d = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$d = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$c,
    staticRenderFns: __vue_staticRenderFns__$c
  }, __vue_inject_styles__$d, __vue_script__$d, __vue_scope_id__$d, __vue_is_functional_template__$d, __vue_module_identifier__$d, false, undefined, undefined, undefined);

  //
  var script$c = {
    name: "TitleTtem",
    components: {
      ConfigItem: __vue_component__$h
    },
    model: {
      prop: "value",
      event: "change"
    },
    props: {
      name: {
        type: [String, Number]
      },
      title: {
        type: [String, Number]
      },
      value: {
        type: Array
      }
    },
    data: function data() {
      return {
        defauleValue: []
      };
    },
    watch: {
      value: {
        handler: function handler(val) {
          this.defauleValue = val;
        }
      }
    },
    created: function created() {
      this.defauleValue = this.value;
    },
    methods: {
      change: function change() {
        this.$emit("change", {
          name: this.name,
          value: this.defauleValue
        });
      },
      onInput: function onInput() {
        this.defauleValue.forEach(function (item) {
          item.value = item.label;
        }); // this.change();
      },
      handleUp: function handleUp(index) {
        if (index == 0) {
          return;
        }

        this.defauleValue[index] = this.defauleValue.splice(index - 1, 1, this.defauleValue[index])[0];
      },
      handleDown: function handleDown(index) {
        if (index == this.defauleValue.length - 1) {
          return;
        }

        this.defauleValue[index] = this.defauleValue.splice(index + 1, 1, this.defauleValue[index])[0];
      },
      handleAdd: function handleAdd() {
        this.defauleValue.push({
          value: "",
          label: ""
        });
      },
      handleDel: function handleDel(index) {
        this.defauleValue.splice(index, 1);
      }
    }
  };

  var css_248z$e = ".options-box .option-item{display:flex;align-items:center;margin-bottom:10px}.options-box .option-item:last-child{margin-bottom:0}.options-box .action-btn{display:inline-block;margin:0 5px;width:16px;height:16px;background:red}.options-box .option-input{flex:1}.options-box .add-btn{font-size:14px;cursor:pointer}.option-items i{margin-left:8px;font-size:18px;color:#bfbfbf;cursor:pointer}.option-items i:hover{color:#828ee8}.option-items i:last-of-type:hover{color:#fb363f}.option-items .option-item:first-of-type .el-icon-caret-top,.option-items .option-item:last-of-type .el-icon-caret-bottom{color:#e5e5e5}.action-add-container{display:flex;align-items:center;cursor:pointer;color:rgba(0,0,0,.45)}.action-add-container .el-icon-circle-plus-outline{margin-right:4px;color:rgba(0,0,0,.45)}.action-add-container .el-icon-circle-plus-outline:hover,.action-add-container:hover{color:#828ee8}";
  styleInject(css_248z$e);

  /* script */
  var __vue_script__$c = script$c;
  /* template */

  var __vue_render__$b = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("config-item", {
      staticClass: "options-box",
      attrs: {
        title: _vm.title
      }
    }, [_c("template", {
      slot: "action"
    }, [_c("span", {
      staticClass: "action-add-container"
    }, [_c("i", {
      staticClass: "el-icon-circle-plus-outline"
    }), _vm._v(" "), _c("span", {
      staticClass: "add-btn",
      on: {
        click: _vm.handleAdd
      }
    }, [_vm._v("添加")])])]), _vm._v(" "), _c("div", {
      staticClass: "option-items"
    }, _vm._l(_vm.defauleValue, function (option, index) {
      return _c("div", {
        key: index,
        staticClass: "option-item"
      }, [_c("el-input", {
        staticClass: "option-input",
        attrs: {
          size: "medium",
          placeholder: "请输入内容"
        },
        on: {
          input: _vm.onInput
        },
        model: {
          value: option.label,
          callback: function callback($$v) {
            _vm.$set(option, "label", $$v);
          },
          expression: "option.label"
        }
      }), _vm._v(" "), _c("i", {
        staticClass: "el-icon-caret-top",
        on: {
          click: function click($event) {
            return _vm.handleUp(index);
          }
        }
      }), _vm._v(" "), _c("i", {
        staticClass: "el-icon-caret-bottom",
        on: {
          click: function click($event) {
            return _vm.handleDown(index);
          }
        }
      }), _vm._v(" "), _c("i", {
        staticClass: "el-icon-delete",
        on: {
          click: function click($event) {
            return _vm.handleDel(index);
          }
        }
      })], 1);
    }), 0)], 2);
  };

  var __vue_staticRenderFns__$b = [];
  __vue_render__$b._withStripped = true;
  /* style */

  var __vue_inject_styles__$c = undefined;
  /* scoped */

  var __vue_scope_id__$c = undefined;
  /* module identifier */

  var __vue_module_identifier__$c = undefined;
  /* functional template */

  var __vue_is_functional_template__$c = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$c = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$b,
    staticRenderFns: __vue_staticRenderFns__$b
  }, __vue_inject_styles__$c, __vue_script__$c, __vue_scope_id__$c, __vue_is_functional_template__$c, __vue_module_identifier__$c, false, undefined, undefined, undefined);

  //
  var script$b = {
    name: 'addressItem',
    components: {
      ConfigItem: __vue_component__$h
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      name: {
        type: [String, Number]
      },
      title: {
        type: [String, Number]
      },
      value: {
        type: [Array]
      },
      placeholder: {
        type: [String, Number],
        "default": '请输入内容'
      }
    },
    data: function data() {
      return {
        defauleValue: [],
        addressData: addressData__default['default']
      };
    },
    watch: {
      value: {
        handler: function handler(val) {
          this.defauleValue = val;
        }
      }
    },
    created: function created() {
      this.defauleValue = this.value;
    },
    methods: {
      onInput: function onInput() {
        this.$emit('change', {
          name: this.name,
          value: this.defauleValue
        });
      }
    }
  };

  var css_248z$d = "";
  styleInject(css_248z$d);

  /* script */
  var __vue_script__$b = script$b;
  /* template */

  var __vue_render__$a = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("config-item", {
      attrs: {
        title: _vm.title
      }
    }, [_c("el-cascader", {
      attrs: {
        clearable: "",
        placeholder: "省/市/区",
        props: {
          expandTrigger: "hover",
          value: "areaName",
          label: "areaName",
          children: "child"
        },
        options: _vm.addressData
      },
      on: {
        change: _vm.onInput
      },
      model: {
        value: _vm.defauleValue,
        callback: function callback($$v) {
          _vm.defauleValue = $$v;
        },
        expression: "defauleValue"
      }
    })], 1);
  };

  var __vue_staticRenderFns__$a = [];
  __vue_render__$a._withStripped = true;
  /* style */

  var __vue_inject_styles__$b = undefined;
  /* scoped */

  var __vue_scope_id__$b = undefined;
  /* module identifier */

  var __vue_module_identifier__$b = undefined;
  /* functional template */

  var __vue_is_functional_template__$b = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$b = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$a,
    staticRenderFns: __vue_staticRenderFns__$a
  }, __vue_inject_styles__$b, __vue_script__$b, __vue_scope_id__$b, __vue_is_functional_template__$b, __vue_module_identifier__$b, false, undefined, undefined, undefined);

  //
  var script$a = {
    name: "imageTtem",
    components: {
      ConfigItem: __vue_component__$h
    },
    model: {
      prop: "value",
      event: "change"
    },
    props: {
      name: {
        type: [String, Number]
      },
      title: {
        type: [String, Number]
      },
      value: {
        type: [String, Number]
      }
    },
    data: function data() {
      return {
        defauleValue: ""
      };
    },
    watch: {
      value: {
        handler: function handler(val) {
          this.defauleValue = val;
        }
      }
    },
    created: function created() {
      this.defauleValue = this.value;
    },
    methods: {
      handleUp: function handleUp(url) {
        this.$emit("change", {
          name: this.name,
          value: url
        });
      },
      beforeAvatarUpload: function beforeAvatarUpload(file) {
        //上传文件类型限制
        var isJPG = file.type.indexOf("image") > -1;
        var isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error("仅支持上传图片!");
        }

        if (!isLt2M) {
          this.$message.error("上传头像图片大小不能超过 2MB!");
        }

        return isJPG && isLt2M;
      },
      handleRemove: function handleRemove(res) {

        if (res.res == 0) {
          this.handleUp(res.data.image_url);
        } else {
          this.$message.error("上传失败");
        }
      }
    }
  };

  var css_248z$c = ".default-image[data-v-020daf2c]{width:266px;height:148px}.default-image img[data-v-020daf2c]{width:100%;height:100%}";
  styleInject(css_248z$c);

  /* script */
  var __vue_script__$a = script$a;
  /* template */

  var __vue_render__$9 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("config-item", {
      attrs: {
        title: _vm.title
      }
    }, [_c("div", {
      attrs: {
        slot: "action"
      },
      slot: "action"
    }, [_c("el-upload", {
      staticClass: "avatar-uploader",
      attrs: {
        action: "/app/uploadImage",
        "show-file-list": false,
        "before-upload": _vm.beforeAvatarUpload,
        "on-success": function onSuccess(res) {
          return _vm.handleRemove(res);
        }
      },
      on: {
        change: function change($event) {
          return _vm.handchange($event);
        }
      }
    }, [_c("el-button", {
      staticStyle: {
        color: "#828ee8"
      },
      attrs: {
        size: "mini",
        type: "text"
      }
    }, [_vm._v("更换图片")])], 1)], 1), _vm._v(" "), _c("div", {
      staticClass: "default-image"
    }, [_c("img", {
      attrs: {
        src: _vm.defauleValue,
        alt: ""
      }
    })])]);
  };

  var __vue_staticRenderFns__$9 = [];
  __vue_render__$9._withStripped = true;
  /* style */

  var __vue_inject_styles__$a = undefined;
  /* scoped */

  var __vue_scope_id__$a = "data-v-020daf2c";
  /* module identifier */

  var __vue_module_identifier__$a = undefined;
  /* functional template */

  var __vue_is_functional_template__$a = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$a = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$9,
    staticRenderFns: __vue_staticRenderFns__$9
  }, __vue_inject_styles__$a, __vue_script__$a, __vue_scope_id__$a, __vue_is_functional_template__$a, __vue_module_identifier__$a, false, undefined, undefined, undefined);

  //
  var script$9 = {
    name: "LimitItem",
    components: {
      ConfigItem: __vue_component__$h
    },
    model: {
      prop: "value",
      event: "change"
    },
    props: {
      name: {
        type: [String, Number]
      },
      title: {
        type: [String]
      },
      value: {
        type: [Number]
      },
      placeholder: {
        type: [String]
      }
    },
    data: function data() {
      return {
        defauleValue: 1,
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      };
    },
    mounted: function mounted() {
      this.defauleValue = this.value;
    },
    methods: {
      changes: function changes(val) {
        this.$emit("change", {
          name: this.name,
          value: this.defauleValue
        });
      }
    }
  };

  var css_248z$b = ".el-select[data-v-1d64728d]{width:100%}";
  styleInject(css_248z$b);

  /* script */
  var __vue_script__$9 = script$9;
  /* template */

  var __vue_render__$8 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("config-item", {
      attrs: {
        title: _vm.title
      }
    }, [_c("el-select", {
      attrs: {
        placeholder: "请选择"
      },
      on: {
        change: _vm.changes
      },
      model: {
        value: _vm.defauleValue,
        callback: function callback($$v) {
          _vm.defauleValue = $$v;
        },
        expression: "defauleValue"
      }
    }, _vm._l(_vm.arr, function (item) {
      return _c("el-option", {
        key: item,
        attrs: {
          label: item,
          value: item
        }
      });
    }), 1)], 1);
  };

  var __vue_staticRenderFns__$8 = [];
  __vue_render__$8._withStripped = true;
  /* style */

  var __vue_inject_styles__$9 = undefined;
  /* scoped */

  var __vue_scope_id__$9 = "data-v-1d64728d";
  /* module identifier */

  var __vue_module_identifier__$9 = undefined;
  /* functional template */

  var __vue_is_functional_template__$9 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$9 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$8,
    staticRenderFns: __vue_staticRenderFns__$8
  }, __vue_inject_styles__$9, __vue_script__$9, __vue_scope_id__$9, __vue_is_functional_template__$9, __vue_module_identifier__$9, false, undefined, undefined, undefined);

  //
  var script$8 = {
    components: {
      InputItem: __vue_component__$f,
      TitleItem: __vue_component__$g,
      RrequiredItem: __vue_component__$e,
      WordLimitItem: __vue_component__$d,
      OptionsItem: __vue_component__$c,
      AddressItem: __vue_component__$b,
      ChangeImage: __vue_component__$a,
      LimitItem: __vue_component__$9
    },
    props: {
      activeRule: {
        type: Object
      },
      baseForm: {
        type: Object
      },
      propsForm: {
        type: Object
      }
    },
    data: function data() {
      return {
        title: "",
        required: false,
        propsRule: []
      };
    },
    computed: {
      config: function config() {
        return this.activeRule.config.config;
      },
      showRequire: function showRequire() {
        if (this.activeRule.config.config.name == 'image') {
          return false;
        } else {
          return true;
        }
      }
    },
    watch: {
      activeRule: {
        deep: true,
        immediate: true,
        handler: function handler(val) {
          if (val) {
            this.title = val.title;

            if (val.effect && val.effect.required) {
              this.required = true;
            } else {
              this.required = false;
            }
          }
        }
      },
      propsForm: {
        deep: true,
        immediate: true,
        handler: function handler(val) {
          this.propsRule = val.rule;
        }
      }
    },
    created: function created() {},
    methods: {
      baseChange: function baseChange(field) {
        this.$emit("baseChange", field.name, field.value, {}, this.baseForm.api);
      },
      propChange: function propChange(field) {
        if (field.name == 'minlength' && field.value > 0) {
          this.setRrequired(true);
          this.required = true;
        }

        this.$emit("propChange", field.name, field.value, {}, this.propsForm.api);
      },
      setRrequired: function setRrequired(val) {
        this.$emit("propChange", "formCreateEffect>required", val, {}, this.propsForm.api);
      }
    }
  };

  var css_248z$a = ".config-from-box{width:100%}.config-from-box .from-label{line-height:55px;padding-left:16px;font-size:16px;font-weight:600;color:rgba(0,0,0,.85);border-bottom:1px solid rgba(0,0,0,.06)}";
  styleInject(css_248z$a);

  /* script */
  var __vue_script__$8 = script$8;
  /* template */

  var __vue_render__$7 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "config-from-box"
    }, [_c("div", {
      staticClass: "from-label"
    }, [_vm._v(_vm._s(_vm.config.label))]), _vm._v(" "), _c("TitleItem", {
      attrs: {
        name: "title",
        value: _vm.title
      },
      on: {
        change: _vm.baseChange
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "props-list"
    }, [_vm._l(_vm.propsRule, function (item) {
      return [item.form == "base" ? _c(item.type, {
        key: item.field,
        tag: "component",
        attrs: {
          title: item.title,
          name: item.field,
          value: _vm.activeRule[item.field]
        },
        on: {
          change: _vm.baseChange
        }
      }) : _c(item.type, {
        key: item.field,
        tag: "component",
        attrs: {
          title: item.title,
          name: item.field,
          value: _vm.activeRule.props[item.field]
        },
        on: {
          change: _vm.propChange
        }
      })];
    })], 2), _vm._v(" "), _vm.showRequire ? _c("RrequiredItem", {
      attrs: {
        value: _vm.required
      },
      on: {
        change: _vm.setRrequired
      }
    }) : _vm._e()], 1);
  };

  var __vue_staticRenderFns__$7 = [];
  __vue_render__$7._withStripped = true;
  /* style */

  var __vue_inject_styles__$8 = undefined;
  /* scoped */

  var __vue_scope_id__$8 = undefined;
  /* module identifier */

  var __vue_module_identifier__$8 = undefined;
  /* functional template */

  var __vue_is_functional_template__$8 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$8 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$7,
    staticRenderFns: __vue_staticRenderFns__$7
  }, __vue_inject_styles__$8, __vue_script__$8, __vue_scope_id__$8, __vue_is_functional_template__$8, __vue_module_identifier__$8, false, undefined, undefined, undefined);

  var script$7 = _defineProperty$1({
    name: 'FcDesigner',
    components: {
      draggable: draggable,
      ViewForm: viewForm.$form(),
      PageInfoForm: __vue_component__$j,
      BannerConfig: __vue_component__$i,
      FormConfig: __vue_component__$8
    },
    props: ['menu', 'height', 'config', 'mask'],
    computed: {
      height_: function height_() {
        var h = this.height;
        if (!h) { return '100%'; }
        return is.Number(h) ? "".concat(h, "px") : h;
      }
    },
    provide: function provide() {
      return {
        fcx: {
          active: null
        },
        designer: this
      };
    },
    data: function data() {
      var _this = this;

      var children = [];
      return {
        FormCreate: designerForm.$form(),
        cacheProps: {},
        moveRule: null,
        addRule: null,
        added: null,
        activeTab: 'form',
        activeRule: null,
        children: children,
        menuList: this.menu || createMenu(),
        showBaseRule: false,
        visible: {
          preview: false
        },
        preview: {
          state: false,
          rule: [],
          option: {}
        },
        pageInfoForm: {
          banner: 'https://oss-huadong1.oss-cn-hangzhou.aliyuncs.com/wechatapp/customer_service/admin/2022/08/03/797989530_2022_08_03_15_45_27l3m58.jpg',
          title: '未命名表单',
          remarks: '感谢您能抽出几分钟时间来参加本次答题，现在我们就马上开始吧'
        },
        configType: 'form',
        // banner form
        dragForm: {
          rule: this.makeDragRule(children),
          api: {}
        },
        form: {
          rule: form(),
          option: {
            form: {
              labelPosition: 'top',
              size: 'medium'
            },
            submitBtn: false
          },
          value: {
            form: {
              inline: false,
              hideRequiredAsterisk: false,
              labelPosition: 'top',
              size: 'medium',
              labelWidth: '125px',
              formCreateSubmitBtn: true,
              formCreateResetBtn: false
            },
            submitBtn: false
          }
        },
        baseForm: {
          rule: field(),
          api: {},
          options: {
            form: {
              labelPosition: 'top',
              size: 'mini'
            },
            submitBtn: false,
            mounted: function mounted(fapi) {
              fapi.activeRule = _this.activeRule;
              fapi.setValue(fapi.options.formData || {});
            }
          }
        },
        validateForm: {
          rule: validate(),
          api: {},
          options: {
            form: {
              labelPosition: 'top',
              size: 'mini'
            },
            submitBtn: false,
            mounted: function mounted(fapi) {
              fapi.activeRule = _this.activeRule;
              fapi.setValue(fapi.options.formData || {});
            }
          }
        },
        propsForm: {
          rule: [],
          api: {},
          options: {
            form: {
              labelPosition: 'top',
              size: 'mini'
            },
            submitBtn: false,
            mounted: function mounted(fapi) {
              fapi.activeRule = _this.activeRule;
              fapi.setValue(fapi.options.formData || {});
            }
          }
        }
      };
    },
    watch: {
      'preview.state': function previewState(n) {
        var _this2 = this;

        if (!n) {
          this.$nextTick(function () {
            _this2.preview.rule = _this2.preview.option = null;
          });
        }
      }
    },
    created: function created() {},
    methods: {
      testData: function testData() {},
      setPageInfoFormData: function setPageInfoFormData(data) {
        this.pageInfoForm.banner = data.banner;
        this.pageInfoForm.title = data.title;
        this.pageInfoForm.remarks = data.remarks;
      },
      showBannerConfig: function showBannerConfig() {
        this.configType = 'banner';
      },
      shwoFormConfig: function shwoFormConfig() {
        this.configType = 'form';
      },
      handleBanner: function handleBanner(val) {
        this.pageInfoForm.banner = val;
      },
      addMenu: function addMenu(config) {
        var _this3 = this;

        if (!config.name || !config.list) { return; }
        var flag = true;
        this.menuList.forEach(function (v, i) {
          if (v.name === config.name) {
            _this3.$set(_this3.menuList, i, config);

            flag = false;
          }
        });

        if (flag) {
          this.menuList.push(config);
        }
      },
      removeMenu: function removeMenu(name) {
        var _this4 = this;

        _toConsumableArray$1(this.menuList).forEach(function (v, i) {
          if (v.name === name) {
            _this4.menuList.splice(i, 1);
          }
        });
      },
      setMenuItem: function setMenuItem(name, list) {
        this.menuList.forEach(function (v) {
          if (v.name === name) {
            v.list = list;
          }
        });
      },
      appendMenuItem: function appendMenuItem(name, item) {
        this.menuList.forEach(function (v) {
          if (v.name === name) {
            v.list.push(item);
          }
        });
      },
      removeMenuItem: function removeMenuItem(item) {
        this.menuList.forEach(function (v) {
          var idx;

          if (is.String(item)) {
            _toConsumableArray$1(v.list).forEach(function (menu, idx) {
              if (menu.name === item) {
                v.list.splice(idx, 1);
              }
            });
          } else {
            if ((idx = v.list.indexOf(item)) > -1) {
              v.list.splice(idx, 1);
            }
          }
        });
      },
      addComponent: function addComponent(data) {
        if (Array.isArray(data)) {
          data.forEach(function (v) {
            ruleList[v.name] = v;
          });
        } else {
          ruleList[data.name] = data;
        }
      },
      dragStart: function dragStart(children) {
        this.moveRule = children;
        this.added = false;
      },
      dragUnchoose: function dragUnchoose(children, evt) {
        this.addRule = {
          children: children,
          oldIndex: evt.oldIndex
        };
      },
      getParent: function getParent(rule) {
        var parent = rule.__fc__.parent.rule;
        var config = parent.config;

        if (config && config.config.inside) {
          rule = parent;
          parent = parent.__fc__.parent.rule;
        }

        return {
          root: parent,
          parent: rule
        };
      },
      makeDrag: function makeDrag(group, tag, children, on, subRule) {
        return {
          type: 'DragBox',
          wrap: {
            show: false
          },
          col: {
            show: false
          },
          inject: true,
          props: {
            rule: {
              props: {
                tag: 'el-col'
              },
              attrs: {
                group: group === true ? 'default' : group,
                ghostClass: 'ghost',
                animation: 150,
                handle: '._fc-drag-btn',
                emptyInsertThreshold: 0,
                direction: 'vertical'
              }
            },
            subRule: subRule || {
              props: {
                name: 'fade',
                tag: 'div'
              }
            },
            tag: tag
          },
          children: children,
          on: on
        };
      },
      clearDragRule: function clearDragRule() {
        this.setRule([]);
      },
      makeDragRule: function makeDragRule(children) {
        var _this5 = this;

        return [this.makeDrag(true, 'draggable', children, {
          add: function add(inject, evt) {
            return _this5.dragAdd(children, evt);
          },
          end: function end(inject, evt) {
            return _this5.dragEnd(children, evt);
          },
          start: function start(inject, evt) {
            return _this5.dragStart(children, evt);
          },
          unchoose: function unchoose(inject, evt) {
            return _this5.dragUnchoose(children, evt);
          }
        }, {
          props: {
            name: 'fade',
            tag: 'div'
          }
        })];
      },
      previewFc: function previewFc() {
        this.preview.state = true;
        this.preview.rule = this.getRule();
        this.preview.option = this.getOption();
      },
      getPageData: function getPageData() {
        var formRule = this.parseRule(deepCopy(this.dragForm.api.rule[0].children));

        var pageData = _objectSpread2(_objectSpread2({}, this.pageInfoForm), {}, {
          formRule: formRule
        });

        return pageData;
      },
      getRule: function getRule() {
        return this.parseRule(deepCopy(this.dragForm.api.rule[0].children));
      },
      getJson: function getJson() {
        return designerForm.toJson(this.getRule());
      },
      getOption: function getOption() {
        var option = deepCopy(this.form.value);
        option.submitBtn = option.form.formCreateSubmitBtn;
        option.resetBtn = option.form.formCreateResetBtn;
        delete option.form.formCreateSubmitBtn;
        delete option.form.formCreateResetBtn;
        return option;
      },
      setRule: function setRule(rules) {
        var children = this.loadRule(is.String(rules) ? designerForm.parseJson(rules) : rules);
        this.children = children;
        this.clearActiveRule();
        this.dragForm.rule = this.makeDragRule(children);
      },
      clearActiveRule: function clearActiveRule() {
        this.activeRule = null; // this.activeTab = 'form';
        // this.configType = 'banner';
      },
      setOption: function setOption(data) {
        var option = _objectSpread2({}, data);

        option.form.formCreateSubmitBtn = !!option.submitBtn;
        option.form.formCreateResetBtn = !!option.resetBtn;
        option.submitBtn = false;
        delete option.resetBtn;
        this.form.value = option;
      },
      loadRule: function loadRule(rules) {
        var _this6 = this;

        var loadRule = [];
        rules.forEach(function (rule) {
          if (is.String(rule)) {
            return loadRule.push(rule);
          }

          var config = ruleList[rule._fc_drag_tag] || ruleList[rule.type];
          var _children = rule.children;
          rule.children = [];

          if (rule.control) {
            rule._control = rule.control;
            delete rule.control;
          }

          if (config) {
            rule = _this6.makeRule(config, rule);

            if (_children) {
              var _children2;

              var children = rule.children[0].children;

              if (config.drag) {
                children = children[0].children;
              }

              (_children2 = children).push.apply(_children2, _toConsumableArray$1(_this6.loadRule(_children)));
            }
          } else if (_children) {
            rule.children = _this6.loadRule(_children);
          }

          loadRule.push(rule);
        });
        return loadRule;
      },
      parseRule: function parseRule(children) {
        var _this7 = this;

        return _toConsumableArray$1(children).reduce(function (initial, rule) {
          if (is.String(rule)) {
            initial.push(rule);
            return initial;
          } else if (rule.type === 'DragBox') {
            initial.push.apply(initial, _toConsumableArray$1(_this7.parseRule(rule.children)));
            return initial;
          } else if (rule.type === 'DragTool') {
            rule = rule.children[0];

            if (rule.type === 'DragBox') {
              initial.push.apply(initial, _toConsumableArray$1(_this7.parseRule(rule.children)));
              return initial;
            }
          }

          if (!rule) { return initial; }
          rule = _objectSpread2({}, rule);

          if (rule.children.length) {
            rule.children = _this7.parseRule(rule.children);
          }

          delete rule._id;

          if (rule.config) {
            delete rule.config.config;
          }

          if (rule.effect) {
            delete rule.effect._fc;
            delete rule.effect._fc_tool;
          }

          if (rule._control) {
            rule.control = rule._control;
            delete rule._control;
          }

          Object.keys(rule).filter(function (k) {
            return Array.isArray(rule[k]) && rule[k].length === 0 || is.Object(rule[k]) && Object.keys(rule[k]).length === 0;
          }).forEach(function (k) {
            delete rule[k];
          });
          initial.push(rule);
          return initial;
        }, []);
      },
      baseChange: function baseChange(field, value, _, fapi) {
        if (this.activeRule && fapi[this.activeRule._id] === this.activeRule) {
          this.$set(this.activeRule, field, value);
        }
      },
      propRemoveField: function propRemoveField(field, _, fapi) {
        if (this.activeRule && fapi[this.activeRule._id] === this.activeRule) {
          this.dragForm.api.sync(this.activeRule);

          if (field.indexOf('formCreate') === 0) {
            field = field.replace('formCreate', '');
            if (!field) { return; }
            field = lower(field);

            if (field.indexOf('effect') === 0 && field.indexOf('>') > -1) {
              this.$delete(this.activeRule.effect, field.split('>')[1]);
            } else if (field.indexOf('props') === 0 && field.indexOf('>') > -1) {
              this.$delete(this.activeRule.props, field.split('>')[1]);
            } else if (field === 'child') {
              this.$delete(this.activeRule.children, 0);
            } else if (field) {
              this.$set(this.activeRule, field, undefined);
            }
          } else {
            this.$delete(this.activeRule.props, field);
          }
        }
      },
      propChange: function propChange(field, value, _, fapi) {
        if (this.activeRule && fapi[this.activeRule._id] === this.activeRule) {
          if (field.indexOf('formCreate') === 0) {
            field = field.replace('formCreate', '');
            if (!field) { return; }
            field = lower(field);

            if (field.indexOf('effect') === 0 && field.indexOf('>') > -1) {
              this.$set(this.activeRule.effect, field.split('>')[1], value);
            } else if (field.indexOf('props') === 0 && field.indexOf('>') > -1) {
              this.$set(this.activeRule.props, field.split('>')[1], value);
            } else if (field === 'child') {
              this.$set(this.activeRule.children, 0, value);
            } else {
              this.$set(this.activeRule, field, value);
            }
          } else {
            this.$set(this.activeRule.props, field, value);
          }
        }
      },
      validateChange: function validateChange(formData) {
        var _this8 = this;

        if (!this.activeRule || this.validateForm.api[this.activeRule._id] !== this.activeRule) { return; }
        this.activeRule.validate = formData.validate || [];
        this.dragForm.api.refreshValidate();
        this.dragForm.api.nextTick(function () {
          _this8.dragForm.api.clearValidateState(_this8.activeRule.field);
        });
      },
      toolActive: function toolActive(rule) {
        var _this9 = this;

        if (this.activeRule) {
          delete this.propsForm.api[this.activeRule._id];
          delete this.baseForm.api[this.activeRule._id];
          delete this.validateForm.api[this.activeRule._id];
        }

        this.activeRule = rule;
        this.$nextTick(function () {
          _this9.activeTab = 'props';

          _this9.$nextTick(function () {
            _this9.propsForm.api[_this9.activeRule._id] = _this9.activeRule;
            _this9.baseForm.api[_this9.activeRule._id] = _this9.activeRule;
            _this9.validateForm.api[_this9.activeRule._id] = _this9.activeRule;
          });
        });

        if (!this.cacheProps[rule._id]) {
          this.cacheProps[rule._id] = rule.config.config.props(rule);
        }

        this.propsForm.rule = this.cacheProps[rule._id];

        var formData = _objectSpread2(_objectSpread2({}, rule.props), {}, {
          formCreateChild: rule.children[0]
        });

        Object.keys(rule).forEach(function (k) {
          if (['effect', 'config', 'payload', 'id', 'type'].indexOf(k) < 0) { formData['formCreate' + upper(k)] = rule[k]; }
        });
        ['props', 'effect'].forEach(function (name) {
          rule[name] && Object.keys(rule[name]).forEach(function (k) {
            formData['formCreate' + upper(name) + '>' + k] = rule[name][k];
          });
        });
        this.propsForm.options.formData = formData;
        this.showBaseRule = hasProperty(rule, 'field') && rule.input !== false;

        if (this.showBaseRule) {
          this.baseForm.options.formData = {
            field: rule.field,
            title: rule.title || '',
            info: rule.info,
            _control: rule._control
          };
          this.validateForm.options.formData = {
            validate: rule.validate ? _toConsumableArray$1(rule.validate) : []
          };
        }
      },
      dragAdd: function dragAdd(children, evt) {
        var newIndex = evt.newIndex;
        var menu = evt.item._underlying_vm_;

        if (!menu) {
          if (this.addRule) {
            var rule = this.addRule.children.splice(this.addRule.oldIndex, 1);
            children.splice(newIndex, 0, rule[0]);
          }
        } else {
          var _rule2 = this.makeRule(ruleList[menu.name]);

          children.splice(newIndex, 0, _rule2);
        } // 拖拽后选中此拖拽的组件


        setTimeout(function () {
          var dragItems = document.getElementsByClassName('drag-tool')[newIndex];
          dragItems.click();
        }, 300);
        this.added = true;
      },
      dragEnd: function dragEnd(children, _ref) {
        var newIndex = _ref.newIndex,
            oldIndex = _ref.oldIndex;

        if (!this.added && !(this.moveRule === children && newIndex === oldIndex)) {
          var rule = this.moveRule.splice(oldIndex, 1);
          children.splice(newIndex, 0, rule[0]);
        }

        this.moveRule = null;
        this.addRule = null;
        this.added = false;
      },
      makeRule: function makeRule(config, _rule) {
        var _this10 = this;

        var that = this;

        var rule = _rule || config.rule();

        rule.config = {
          config: config
        };
        if (!rule.effect) { rule.effect = {}; }
        rule.effect._fc = true;
        rule._fc_drag_tag = config.name;
        var drag;

        if (config.drag) {
          var children = [];
          rule.children.push(drag = this.makeDrag(config.drag, rule.type, children, {
            end: function end(inject, evt) {
              return _this10.dragEnd(inject.self.children, evt);
            },
            add: function add(inject, evt) {
              return _this10.dragAdd(inject.self.children, evt);
            },
            start: function start(inject, evt) {
              return _this10.dragStart(inject.self.children, evt);
            },
            unchoose: function unchoose(inject, evt) {
              return _this10.dragUnchoose(inject.self.children, evt);
            }
          }));
        }

        if (config.children && !_rule) {
          var child = this.makeRule(ruleList[config.children]);
          (drag || rule).children.push(child);
        }

        var mask = this.mask !== undefined ? this.mask !== false : config.mask !== false;

        if (config.inside) {
          rule.children = [{
            type: 'DragTool',
            props: {
              dragBtn: config.dragBtn !== false,
              children: config.children,
              mask: mask
            },
            effect: {
              _fc_tool: true
            },
            inject: true,
            on: {
              "delete": function _delete(_ref2) {
                var self = _ref2.self;

                var parent = _this10.getParent(self).parent;

                parent.__fc__.rm();

                _this10.$emit('delete', parent);

                _this10.clearActiveRule();
              },
              add: function add(_ref3) {
                var self = _ref3.self;

                var top = _this10.getParent(self);

                _this10.$emit('add', top.parent);

                top.root.children.splice(top.root.children.indexOf(top.parent) + 1, 0, _this10.makeRule(top.parent.config.config));
              },
              addChild: function addChild(_ref4) {
                var self = _ref4.self;

                var top = _this10.getParent(self);

                var config = top.parent.config.config;
                var item = ruleList[config.children];
                if (!item) { return; }
                (!config.drag ? top.parent : top.parent.children[0]).children[0].children.push(_this10.makeRule(item));
              },
              copy: function copy(_ref5) {
                var self = _ref5.self;

                var top = _this10.getParent(self);

                _this10.$emit('copy', top.parent);

                top.root.children.splice(top.root.children.indexOf(top.parent) + 1, 0, designerForm.copyRule(top.parent));
              },
              active: function active(_ref6) {
                var self = _ref6.self;

                var top = _this10.getParent(self);

                _this10.$emit('active', top.parent);

                _this10.toolActive(top.parent);
              },
              click: function click() {
                that.shwoFormConfig();
              }
            },
            children: rule.children
          }];
          return rule;
        } else {
          return {
            type: 'DragTool',
            props: {
              dragBtn: config.dragBtn !== false,
              children: config.children,
              mask: mask
            },
            effect: {
              _fc_tool: true
            },
            inject: true,
            on: {
              "delete": function _delete(_ref7) {
                var self = _ref7.self;
                _this10.configType = 'banner'; // 解决删除规则问题

                setTimeout(function () {
                  _this10.configType = 'banner';
                }, 500);

                _this10.showBannerConfig(); // this.$emit('delete', self.children[0]);


                self.__fc__.rm(); // this.clearActiveRule();

              },
              add: function add(_ref8) {
                var self = _ref8.self;

                _this10.$emit('add', self.children[0]);

                var top = _this10.getParent(self);

                top.root.children.splice(top.root.children.indexOf(top.parent) + 1, 0, _this10.makeRule(self.children[0].config.config));
              },
              addChild: function addChild(_ref9) {
                var self = _ref9.self;
                var config = self.children[0].config.config;
                var item = ruleList[config.children];
                if (!item) { return; }
                (!config.drag ? self : self.children[0]).children[0].children.push(_this10.makeRule(item));
              },
              copy: function copy(_ref10) {
                var self = _ref10.self;

                _this10.$emit('copy', self.children[0]);

                var top = _this10.getParent(self);

                top.root.children.splice(top.root.children.indexOf(top.parent) + 1, 0, designerForm.copyRule(top.parent));
              },
              active: function active(_ref11) {
                var self = _ref11.self;

                _this10.$emit('active', self.children[0]);

                _this10.toolActive(self.children[0]);
              },
              click: function click() {
                that.shwoFormConfig();
              }
            },
            children: [rule]
          };
        }
      },
      handleMouseenter: function handleMouseenter(e, data) {
        e.target.children[0].src = data.activeIcon ? data.activeIcon : data.icon;
      },
      handleMouseleave: function handleMouseleave(e, data) {
        e.target.children[0].src = data.icon;
      },
      handTest: function handTest() {// console.log(this.menuList)
      }
    }
  }, "created", function created() {
    document.body.ondrop = function (e) {
      e.preventDefault();
      e.stopPropagation();
    };
  });

  var css_248z$9 = "";
  styleInject(css_248z$9);

  var css_248z$8 = "._fc-designer{height:100%;min-height:500px;overflow:hidden;cursor:default;position:relative}._fc-designer>.el-main{position:absolute;top:0;bottom:0;left:0;right:0;padding:0}._fc-m .form-create ._fc-l-item{background:#2e73ff;width:100%;height:10px;overflow:hidden;transition:all .3s ease}._fc-l{box-shadow:12px 4px 32px 0 rgba(0,0,0,.04);background:#f5f5f5}._fc-l,._fc-m,._fc-r{border-top:1px solid #ececec;box-sizing:border-box}._fc-l-group{padding:0 16px 0 24px}._fc-l-title{font-size:14px;line-height:22px;margin-top:24px}._fc-l-item,._fc-l-title{font-weight:400;color:rgba(0,0,0,.65);margin-bottom:8px}._fc-l-item{display:inline-block;background:#fff;width:100px;height:36px;transition:all .2s ease;cursor:pointer;margin-right:8px;line-height:34px;padding-left:8px;box-sizing:border-box;border:1px solid rgba(0,0,0,.15)}._fc-l-item i{font-size:21px;display:inline-block}._fc-l-item ._fc-l-name{font-size:12px}._fc-l-item ._fc-l-icon img{vertical-align:text-bottom;margin-right:4px}._fc-l-item:hover{background:#fff;border-radius:2px 2px 2px 2px;border:1px solid #828ee8;color:#828ee8;box-sizing:border-box}._fc-m-tools{height:40px;align-items:center;display:flex;justify-content:flex-end;border:1px solid #ececec;border-top:0}._fc-m-tools button.el-button{padding:5px 14px;display:flex;align-items:center}._fc-m-tools .fc-icon{font-size:14px;margin-right:2px}._fc-r .el-tabs__nav-wrap:after{height:1px;background-color:#ececec}._fc-r ._fc-r-tabs{display:flex;padding:0;border-bottom:1px solid #ececec}._fc-r ._fc-r-tab{height:40px;box-sizing:border-box;line-height:40px;display:inline-block;list-style:none;font-size:14px;font-weight:600;color:#303133;position:relative;flex:1;text-align:center}._fc-r ._fc-r-tab.active{color:#409eff;border-bottom:2px solid #409eff}.drag-box{min-height:60px}._fc-m-drag{padding-bottom:35px;padding-top:30px;border:1px dashed rgba(0,0,0,.25);border-top:none;border-bottom:none}._fc-m-drag .el-form{min-height:200px}._fc-m-drag,.draggable-drag{background:#fff;position:relative}._fc-m-drag>form,._fc-m-drag>form>.el-row,.draggable-drag{height:100%}._fc-designer .canvas-warp{height:100%;display:flex;flex-flow:column nowrap;background:#fff;max-width:800px;margin:0 auto}.no-rule-wrap .el-row{display:flex}.no-rule-wrap .draggable-drag{border:1px dashed rgba(0,0,0,.25);margin-left:35px;margin-right:35px}.no-rule-wrap{position:relative}.no-rule-wrap-text{display:none}.no-rule-wrap .no-rule-wrap-text{display:inline-block;position:absolute;left:40%;z-index:100;top:80px;color:rgba(0,0,0,.65)}.no-rule-wrap .no-rule-wrap-text img{vertical-align:-2px}.footer-btn{text-align:center;background:#fff;box-shadow:0 -4px 8px 0 rgba(0,0,0,.04);border-top:1px solid #eee;padding:10px 0}.footer-btn .text-span{height:48px;width:300px;border-radius:28px 28px 28px 28px;background:#828ee8;display:inline-block;line-height:48px;cursor:pointer;color:#eee;font-weight:400}.main-box-designer{background:#f0f2f5;padding:40px;margin-bottom:60px}.main-box-designer .el-date-editor,.main-box-designer .el-select{width:100%}.left-main-title{padding-top:16px;padding-left:24px;color:rgba(0,0,0,.85);font-weight:600;font-size:16px}.empty-item-right{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:rgba(0,0,0,.45);font-weight:400;font-size:14px}.empty-item-right .right-item-text{line-height:22px}";
  styleInject(css_248z$8);

  /* script */
  var __vue_script__$7 = script$7;

  var __vue_render__$6 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("ElContainer", {
      staticClass: "_fc-designer",
      style: "height:" + _vm.height_
    }, [_c("ElMain", [_c("ElContainer", {
      staticStyle: {
        height: "100%"
      }
    }, [_c("el-aside", {
      staticClass: "_fc-l",
      attrs: {
        width: "276px"
      }
    }, [_c("div", [_c("div", {
      staticClass: "left-main-title"
    }, [_vm._v("添加字段")]), _vm._v(" "), _vm._l(_vm.menuList, function (item, index) {
      return [_c("div", {
        key: index,
        staticClass: "_fc-l-group"
      }, [_c("h4", {
        staticClass: "_fc-l-title"
      }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c("draggable", {
        attrs: {
          group: {
            name: "default",
            pull: "clone",
            put: false
          },
          sort: false,
          list: item.list
        }
      }, _vm._l(item.list, function (data, index) {
        return _c("div", {
          key: index,
          staticClass: "_fc-l-item"
        }, [_c("div", {
          staticClass: "_fc-l-icon",
          on: {
            mouseenter: function mouseenter($event) {
              return _vm.handleMouseenter($event, data);
            },
            mouseleave: function mouseleave($event) {
              return _vm.handleMouseleave($event, data);
            }
          }
        }, [_c("img", {
          attrs: {
            src: data.icon,
            alt: ""
          }
        }), _vm._v(" "), _c("span", {
          staticClass: "_fc-l-name"
        }, [_vm._v(_vm._s(data.label))])])]);
      }), 0)], 1)];
    })], 2)]), _vm._v(" "), _c("ElContainer", {
      staticClass: "_fc-m"
    }, [_c("ElMain", {
      staticClass: "main-box-designer"
    }, [_c("div", {
      staticClass: "canvas-warp"
    }, [_c("div", {
      on: {
        click: _vm.showBannerConfig
      }
    }, [_c("PageInfoForm", {
      model: {
        value: _vm.pageInfoForm,
        callback: function callback($$v) {
          _vm.pageInfoForm = $$v;
        },
        expression: "pageInfoForm"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "_fc-m-drag",
      "class": {
        "no-rule-wrap": _vm.dragForm.rule[0].children.length == 0
      }
    }, [_c("span", {
      staticClass: "no-rule-wrap-text"
    }, [_c("img", {
      attrs: {
        src: __$_require_imgs_click_item_svg____default['default'],
        alt: ""
      }
    }), _vm._v("\n                                拖拽题目到此区域\n                            ")]), _vm._v(" "), _c(_vm.FormCreate, {
      tag: "component",
      attrs: {
        rule: _vm.dragForm.rule,
        option: _vm.form.value
      },
      nativeOn: {
        click: function click($event) {
          return _vm.shwoFormConfig($event);
        }
      },
      model: {
        value: _vm.dragForm.api,
        callback: function callback($$v) {
          _vm.$set(_vm.dragForm, "api", $$v);
        },
        expression: "dragForm.api"
      }
    })], 1), _vm._v(" "), _c("div", {
      staticClass: "footer-btn"
    }, [_c("span", {
      staticClass: "text-span",
      on: {
        click: _vm.testData
      }
    }, [_vm._v("提 交")])])])])], 1), _vm._v(" "), _c("ElAside", {
      staticClass: "_fc-r",
      attrs: {
        width: "300px"
      }
    }, [_c("ElContainer", {
      staticStyle: {
        height: "100%"
      }
    }, [_vm.configType == "banner" ? _c("div", [_c("BannerConfig", {
      attrs: {
        src: _vm.pageInfoForm.banner
      },
      on: {
        change: _vm.handleBanner
      }
    })], 1) : _vm._e(), _vm._v(" "), _vm.configType == "form" ? _c("div", {
      staticStyle: {
        width: "100%"
      }
    }, [_vm.showBaseRule && _vm.dragForm.rule[0].children.length > 0 ? _c("FormConfig", {
      attrs: {
        activeRule: _vm.activeRule,
        baseForm: _vm.baseForm,
        propsForm: _vm.propsForm
      },
      on: {
        baseChange: _vm.baseChange,
        propChange: _vm.propChange
      }
    }) : _c("div", {
      staticClass: "empty-item-right"
    }, [_c("div", [_c("img", {
      attrs: {
        src: __$_require_imgs_select_item_svg____default['default'],
        alt: ""
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "right-item-text"
    }, [_vm._v("没有选定的题目")]), _vm._v(" "), _c("div", {
      staticClass: "right-item-text"
    }, [_vm._v("请添加或者选择一个题目")])])], 1) : _vm._e()])], 1), _vm._v(" "), _c("ElDialog", {
      attrs: {
        visible: _vm.preview.state,
        width: "800px",
        "append-to-body": ""
      },
      on: {
        "update:visible": function updateVisible($event) {
          return _vm.$set(_vm.preview, "state", $event);
        }
      }
    }, [_vm.preview.state ? _c("ViewForm", {
      attrs: {
        rule: _vm.preview.rule,
        option: _vm.preview.option
      }
    }) : _vm._e()], 1)], 1)], 1)], 1);
  };

  var __vue_staticRenderFns__$6 = [];
  __vue_render__$6._withStripped = true;
  /* style */

  var __vue_inject_styles__$7 = undefined;
  /* scoped */

  var __vue_scope_id__$7 = undefined;
  /* module identifier */

  var __vue_module_identifier__$7 = undefined;
  /* functional template */

  var __vue_is_functional_template__$7 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$7 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$6,
    staticRenderFns: __vue_staticRenderFns__$6
  }, __vue_inject_styles__$7, __vue_script__$7, __vue_scope_id__$7, __vue_is_functional_template__$7, __vue_module_identifier__$7, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var id = 1;
  var script$6 = {
    name: 'DragTool',
    inject: ['fcx'],
    props: ['dragBtn', 'children', 'unique', 'mask'],
    data: function data() {
      return {
        id: this.unique || id++,
        state: this.fcx
      };
    },
    methods: {
      active: function active() {
        this.$emit('click');
        if (this.state.active === this.id) { return; }
        this.state.active = this.id;
        this.$emit('active');
      }
    },
    beforeDestroy: function beforeDestroy() {
      this.state = {};
    }
  };

  var css_248z$7 = ".drag-tool{position:relative;min-height:20px;box-sizing:border-box;overflow:hidden;word-wrap:break-word;word-break:break-all;margin:8px 0;padding:2px 32px 0}.drag-tool .drag-tool{margin:5px}.drag-tool+.drag-tool{margin-top:5px}.drag-tool .el-form-item{padding-top:20px}.drag-tool .el-form-item__label{font-size:16px;height:24px;font-weight:600;color:rgba(0,0,0,.85);line-height:24px;margin-bottom:8px}.drag-tool.active{background:#f2f4fd}.drag-tool .el-form-item__content{margin-bottom:8px}.drag-tool.active>div>.drag-btn{display:flex}.drag-tool .drag-btn{display:none}.drag-r{right:32px;top:20px}.drag-l,.drag-r{position:absolute;z-index:1904}.drag-l{top:0;left:0;right:0}.drag-btn{height:18px;width:18px;text-align:center;line-height:20px;padding-bottom:1px;float:left;cursor:pointer;justify-content:center;color:#8e8b91}._fc-drag-btn{width:100%;background:#f2f4fd;color:#000}.drag-btn+.drag-btn{margin-left:2px}.drag-btn-danger .el-icon-delete:hover{color:#f30}.drag-btn i{font-size:18px;line-height:20px}.drag-btn i:hover{color:#828ee8}.drag-mask{z-index:1900;position:absolute;top:0;left:0;right:0;bottom:0}";
  styleInject(css_248z$7);

  /* script */
  var __vue_script__$6 = script$6;
  /* template */

  var __vue_render__$5 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "drag-tool",
      "class": {
        active: _vm.state.active === _vm.id
      },
      on: {
        click: function click($event) {
          $event.stopPropagation();
          return _vm.active($event);
        }
      }
    }, [_vm.mask ? _c("div", {
      staticClass: "drag-mask"
    }) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "drag-l"
    }, [_vm.state.active === _vm.id && _vm.dragBtn !== false ? _c("div", {
      staticClass: "drag-btn _fc-drag-btn",
      staticStyle: {
        cursor: "move"
      }
    }, [_c("i", {
      staticClass: "fc-icon icon-move"
    })]) : _vm._e()]), _vm._v(" "), _c("div", {
      staticClass: "drag-r"
    }, [_c("div", {
      staticClass: "drag-btn",
      on: {
        click: function click($event) {
          return _vm.$emit("copy");
        }
      }
    }, [_c("i", {
      staticClass: "el-icon-document-copy"
    })]), _vm._v(" "), _vm.children ? _c("div", {
      staticClass: "drag-btn",
      on: {
        click: function click($event) {
          return _vm.$emit("addChild");
        }
      }
    }, [_c("i", {
      staticClass: "fc-icon icon-add-child"
    })]) : _vm._e(), _vm._v(" "), _c("div", {
      staticClass: "drag-btn drag-btn-danger",
      on: {
        click: function click($event) {
          return _vm.$emit("delete");
        }
      }
    }, [_c("i", {
      staticClass: "el-icon-delete"
    })])]), _vm._v(" "), _vm._t("default")], 2);
  };

  var __vue_staticRenderFns__$5 = [];
  __vue_render__$5._withStripped = true;
  /* style */

  var __vue_inject_styles__$6 = undefined;
  /* scoped */

  var __vue_scope_id__$6 = undefined;
  /* module identifier */

  var __vue_module_identifier__$6 = undefined;
  /* functional template */

  var __vue_is_functional_template__$6 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$6 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$5,
    staticRenderFns: __vue_staticRenderFns__$5
  }, __vue_inject_styles__$6, __vue_script__$6, __vue_scope_id__$6, __vue_is_functional_template__$6, __vue_module_identifier__$6, false, undefined, undefined, undefined);

  var css_248z$6 = ".CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor-mark{background-color:rgba(20,255,20,.5)}.cm-animate-fat-cursor,.cm-fat-cursor-mark{-webkit-animation:blink 1.06s steps(1) infinite;-moz-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite}.cm-animate-fat-cursor{width:auto;border:0;background-color:#7e7}@-moz-keyframes blink{50%{background-color:transparent}}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:0;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-50px;margin-right:-50px;padding-bottom:50px;height:100%;outline:none;position:relative}.CodeMirror-sizer{position:relative;border-right:50px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none;outline:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-50px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{-moz-box-sizing:content-box;box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:\"\"}span.CodeMirror-selectedtext{background:none}";
  styleInject(css_248z$6);

  var codemirror = createCommonjsModule(function (module, exports) {
  // CodeMirror, copyright (c) by Marijn Haverbeke and others
  // Distributed under an MIT license: https://codemirror.net/LICENSE

  // This is CodeMirror (https://codemirror.net), a code editor
  // implemented in JavaScript on top of the browser's DOM.
  //
  // You can find some technical background for some of the code below
  // at http://marijnhaverbeke.nl/blog/#cm-internals .

  (function (global, factory) {
    module.exports = factory() ;
  }(commonjsGlobal, (function () {
    // Kludges for bugs and behavior differences that can't be feature
    // detected are enabled based on userAgent etc sniffing.
    var userAgent = navigator.userAgent;
    var platform = navigator.platform;

    var gecko = /gecko\/\d/i.test(userAgent);
    var ie_upto10 = /MSIE \d/.test(userAgent);
    var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
    var edge = /Edge\/(\d+)/.exec(userAgent);
    var ie = ie_upto10 || ie_11up || edge;
    var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
    var webkit = !edge && /WebKit\//.test(userAgent);
    var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
    var chrome = !edge && /Chrome\//.test(userAgent);
    var presto = /Opera\//.test(userAgent);
    var safari = /Apple Computer/.test(navigator.vendor);
    var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
    var phantom = /PhantomJS/.test(userAgent);

    var ios = safari && (/Mobile\/\w+/.test(userAgent) || navigator.maxTouchPoints > 2);
    var android = /Android/.test(userAgent);
    // This is woefully incomplete. Suggestions for alternative methods welcome.
    var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
    var mac = ios || /Mac/.test(platform);
    var chromeOS = /\bCrOS\b/.test(userAgent);
    var windows = /win/i.test(platform);

    var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
    if (presto_version) { presto_version = Number(presto_version[1]); }
    if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
    // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
    var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
    var captureRightClick = gecko || (ie && ie_version >= 9);

    function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

    var rmClass = function(node, cls) {
      var current = node.className;
      var match = classTest(cls).exec(current);
      if (match) {
        var after = current.slice(match.index + match[0].length);
        node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
      }
    };

    function removeChildren(e) {
      for (var count = e.childNodes.length; count > 0; --count)
        { e.removeChild(e.firstChild); }
      return e
    }

    function removeChildrenAndAdd(parent, e) {
      return removeChildren(parent).appendChild(e)
    }

    function elt(tag, content, className, style) {
      var e = document.createElement(tag);
      if (className) { e.className = className; }
      if (style) { e.style.cssText = style; }
      if (typeof content == "string") { e.appendChild(document.createTextNode(content)); }
      else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]); } }
      return e
    }
    // wrapper for elt, which removes the elt from the accessibility tree
    function eltP(tag, content, className, style) {
      var e = elt(tag, content, className, style);
      e.setAttribute("role", "presentation");
      return e
    }

    var range;
    if (document.createRange) { range = function(node, start, end, endNode) {
      var r = document.createRange();
      r.setEnd(endNode || node, end);
      r.setStart(node, start);
      return r
    }; }
    else { range = function(node, start, end) {
      var r = document.body.createTextRange();
      try { r.moveToElementText(node.parentNode); }
      catch(e) { return r }
      r.collapse(true);
      r.moveEnd("character", end);
      r.moveStart("character", start);
      return r
    }; }

    function contains(parent, child) {
      if (child.nodeType == 3) // Android browser always returns false when child is a textnode
        { child = child.parentNode; }
      if (parent.contains)
        { return parent.contains(child) }
      do {
        if (child.nodeType == 11) { child = child.host; }
        if (child == parent) { return true }
      } while (child = child.parentNode)
    }

    function activeElt() {
      // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
      // IE < 10 will throw when accessed while the page is loading or in an iframe.
      // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
      var activeElement;
      try {
        activeElement = document.activeElement;
      } catch(e) {
        activeElement = document.body || null;
      }
      while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
        { activeElement = activeElement.shadowRoot.activeElement; }
      return activeElement
    }

    function addClass(node, cls) {
      var current = node.className;
      if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls; }
    }
    function joinClasses(a, b) {
      var as = a.split(" ");
      for (var i = 0; i < as.length; i++)
        { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i]; } }
      return b
    }

    var selectInput = function(node) { node.select(); };
    if (ios) // Mobile Safari apparently has a bug where select() is broken.
      { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; }; }
    else if (ie) // Suppress mysterious IE10 errors
      { selectInput = function(node) { try { node.select(); } catch(_e) {} }; }

    function bind(f) {
      var args = Array.prototype.slice.call(arguments, 1);
      return function(){return f.apply(null, args)}
    }

    function copyObj(obj, target, overwrite) {
      if (!target) { target = {}; }
      for (var prop in obj)
        { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
          { target[prop] = obj[prop]; } }
      return target
    }

    // Counts the column offset in a string, taking tabs into account.
    // Used mostly to find indentation.
    function countColumn(string, end, tabSize, startIndex, startValue) {
      if (end == null) {
        end = string.search(/[^\s\u00a0]/);
        if (end == -1) { end = string.length; }
      }
      for (var i = startIndex || 0, n = startValue || 0;;) {
        var nextTab = string.indexOf("\t", i);
        if (nextTab < 0 || nextTab >= end)
          { return n + (end - i) }
        n += nextTab - i;
        n += tabSize - (n % tabSize);
        i = nextTab + 1;
      }
    }

    var Delayed = function() {
      this.id = null;
      this.f = null;
      this.time = 0;
      this.handler = bind(this.onTimeout, this);
    };
    Delayed.prototype.onTimeout = function (self) {
      self.id = 0;
      if (self.time <= +new Date) {
        self.f();
      } else {
        setTimeout(self.handler, self.time - +new Date);
      }
    };
    Delayed.prototype.set = function (ms, f) {
      this.f = f;
      var time = +new Date + ms;
      if (!this.id || time < this.time) {
        clearTimeout(this.id);
        this.id = setTimeout(this.handler, ms);
        this.time = time;
      }
    };

    function indexOf(array, elt) {
      for (var i = 0; i < array.length; ++i)
        { if (array[i] == elt) { return i } }
      return -1
    }

    // Number of pixels added to scroller and sizer to hide scrollbar
    var scrollerGap = 50;

    // Returned or thrown by various protocols to signal 'I'm not
    // handling this'.
    var Pass = {toString: function(){return "CodeMirror.Pass"}};

    // Reused option objects for setSelection & friends
    var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

    // The inverse of countColumn -- find the offset that corresponds to
    // a particular column.
    function findColumn(string, goal, tabSize) {
      for (var pos = 0, col = 0;;) {
        var nextTab = string.indexOf("\t", pos);
        if (nextTab == -1) { nextTab = string.length; }
        var skipped = nextTab - pos;
        if (nextTab == string.length || col + skipped >= goal)
          { return pos + Math.min(skipped, goal - col) }
        col += nextTab - pos;
        col += tabSize - (col % tabSize);
        pos = nextTab + 1;
        if (col >= goal) { return pos }
      }
    }

    var spaceStrs = [""];
    function spaceStr(n) {
      while (spaceStrs.length <= n)
        { spaceStrs.push(lst(spaceStrs) + " "); }
      return spaceStrs[n]
    }

    function lst(arr) { return arr[arr.length-1] }

    function map(array, f) {
      var out = [];
      for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i); }
      return out
    }

    function insertSorted(array, value, score) {
      var pos = 0, priority = score(value);
      while (pos < array.length && score(array[pos]) <= priority) { pos++; }
      array.splice(pos, 0, value);
    }

    function nothing() {}

    function createObj(base, props) {
      var inst;
      if (Object.create) {
        inst = Object.create(base);
      } else {
        nothing.prototype = base;
        inst = new nothing();
      }
      if (props) { copyObj(props, inst); }
      return inst
    }

    var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    function isWordCharBasic(ch) {
      return /\w/.test(ch) || ch > "\x80" &&
        (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
    }
    function isWordChar(ch, helper) {
      if (!helper) { return isWordCharBasic(ch) }
      if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
      return helper.test(ch)
    }

    function isEmpty(obj) {
      for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
      return true
    }

    // Extending unicode characters. A series of a non-extending char +
    // any number of extending chars is treated as a single unit as far
    // as editing and measuring is concerned. This is not fully correct,
    // since some scripts/fonts/browsers also treat other configurations
    // of code points as a group.
    var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
    function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

    // Returns a number from the range [`0`; `str.length`] unless `pos` is outside that range.
    function skipExtendingChars(str, pos, dir) {
      while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) { pos += dir; }
      return pos
    }

    // Returns the value from the range [`from`; `to`] that satisfies
    // `pred` and is closest to `from`. Assumes that at least `to`
    // satisfies `pred`. Supports `from` being greater than `to`.
    function findFirst(pred, from, to) {
      // At any point we are certain `to` satisfies `pred`, don't know
      // whether `from` does.
      var dir = from > to ? -1 : 1;
      for (;;) {
        if (from == to) { return from }
        var midF = (from + to) / 2, mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF);
        if (mid == from) { return pred(mid) ? from : to }
        if (pred(mid)) { to = mid; }
        else { from = mid + dir; }
      }
    }

    // BIDI HELPERS

    function iterateBidiSections(order, from, to, f) {
      if (!order) { return f(from, to, "ltr", 0) }
      var found = false;
      for (var i = 0; i < order.length; ++i) {
        var part = order[i];
        if (part.from < to && part.to > from || from == to && part.to == from) {
          f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i);
          found = true;
        }
      }
      if (!found) { f(from, to, "ltr"); }
    }

    var bidiOther = null;
    function getBidiPartAt(order, ch, sticky) {
      var found;
      bidiOther = null;
      for (var i = 0; i < order.length; ++i) {
        var cur = order[i];
        if (cur.from < ch && cur.to > ch) { return i }
        if (cur.to == ch) {
          if (cur.from != cur.to && sticky == "before") { found = i; }
          else { bidiOther = i; }
        }
        if (cur.from == ch) {
          if (cur.from != cur.to && sticky != "before") { found = i; }
          else { bidiOther = i; }
        }
      }
      return found != null ? found : bidiOther
    }

    // Bidirectional ordering algorithm
    // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
    // that this (partially) implements.

    // One-char codes used for character types:
    // L (L):   Left-to-Right
    // R (R):   Right-to-Left
    // r (AL):  Right-to-Left Arabic
    // 1 (EN):  European Number
    // + (ES):  European Number Separator
    // % (ET):  European Number Terminator
    // n (AN):  Arabic Number
    // , (CS):  Common Number Separator
    // m (NSM): Non-Spacing Mark
    // b (BN):  Boundary Neutral
    // s (B):   Paragraph Separator
    // t (S):   Segment Separator
    // w (WS):  Whitespace
    // N (ON):  Other Neutrals

    // Returns null if characters are ordered as they appear
    // (left-to-right), or an array of sections ({from, to, level}
    // objects) in the order in which they occur visually.
    var bidiOrdering = (function() {
      // Character types for codepoints 0 to 0xff
      var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
      // Character types for codepoints 0x600 to 0x6f9
      var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
      function charType(code) {
        if (code <= 0xf7) { return lowTypes.charAt(code) }
        else if (0x590 <= code && code <= 0x5f4) { return "R" }
        else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
        else if (0x6ee <= code && code <= 0x8ac) { return "r" }
        else if (0x2000 <= code && code <= 0x200b) { return "w" }
        else if (code == 0x200c) { return "b" }
        else { return "L" }
      }

      var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
      var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;

      function BidiSpan(level, from, to) {
        this.level = level;
        this.from = from; this.to = to;
      }

      return function(str, direction) {
        var outerType = direction == "ltr" ? "L" : "R";

        if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) { return false }
        var len = str.length, types = [];
        for (var i = 0; i < len; ++i)
          { types.push(charType(str.charCodeAt(i))); }

        // W1. Examine each non-spacing mark (NSM) in the level run, and
        // change the type of the NSM to the type of the previous
        // character. If the NSM is at the start of the level run, it will
        // get the type of sor.
        for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
          var type = types[i$1];
          if (type == "m") { types[i$1] = prev; }
          else { prev = type; }
        }

        // W2. Search backwards from each instance of a European number
        // until the first strong type (R, L, AL, or sor) is found. If an
        // AL is found, change the type of the European number to Arabic
        // number.
        // W3. Change all ALs to R.
        for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
          var type$1 = types[i$2];
          if (type$1 == "1" && cur == "r") { types[i$2] = "n"; }
          else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R"; } }
        }

        // W4. A single European separator between two European numbers
        // changes to a European number. A single common separator between
        // two numbers of the same type changes to that type.
        for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
          var type$2 = types[i$3];
          if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1"; }
          else if (type$2 == "," && prev$1 == types[i$3+1] &&
                   (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1; }
          prev$1 = type$2;
        }

        // W5. A sequence of European terminators adjacent to European
        // numbers changes to all European numbers.
        // W6. Otherwise, separators and terminators change to Other
        // Neutral.
        for (var i$4 = 0; i$4 < len; ++i$4) {
          var type$3 = types[i$4];
          if (type$3 == ",") { types[i$4] = "N"; }
          else if (type$3 == "%") {
            var end = (void 0);
            for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
            var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
            for (var j = i$4; j < end; ++j) { types[j] = replace; }
            i$4 = end - 1;
          }
        }

        // W7. Search backwards from each instance of a European number
        // until the first strong type (R, L, or sor) is found. If an L is
        // found, then change the type of the European number to L.
        for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
          var type$4 = types[i$5];
          if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L"; }
          else if (isStrong.test(type$4)) { cur$1 = type$4; }
        }

        // N1. A sequence of neutrals takes the direction of the
        // surrounding strong text if the text on both sides has the same
        // direction. European and Arabic numbers act as if they were R in
        // terms of their influence on neutrals. Start-of-level-run (sor)
        // and end-of-level-run (eor) are used at level run boundaries.
        // N2. Any remaining neutrals take the embedding direction.
        for (var i$6 = 0; i$6 < len; ++i$6) {
          if (isNeutral.test(types[i$6])) {
            var end$1 = (void 0);
            for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
            var before = (i$6 ? types[i$6-1] : outerType) == "L";
            var after = (end$1 < len ? types[end$1] : outerType) == "L";
            var replace$1 = before == after ? (before ? "L" : "R") : outerType;
            for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1; }
            i$6 = end$1 - 1;
          }
        }

        // Here we depart from the documented algorithm, in order to avoid
        // building up an actual levels array. Since there are only three
        // levels (0, 1, 2) in an implementation that doesn't take
        // explicit embedding into account, we can build up the order on
        // the fly, without following the level-based algorithm.
        var order = [], m;
        for (var i$7 = 0; i$7 < len;) {
          if (countsAsLeft.test(types[i$7])) {
            var start = i$7;
            for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
            order.push(new BidiSpan(0, start, i$7));
          } else {
            var pos = i$7, at = order.length, isRTL = direction == "rtl" ? 1 : 0;
            for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
            for (var j$2 = pos; j$2 < i$7;) {
              if (countsAsNum.test(types[j$2])) {
                if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)); at += isRTL; }
                var nstart = j$2;
                for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
                order.splice(at, 0, new BidiSpan(2, nstart, j$2));
                at += isRTL;
                pos = j$2;
              } else { ++j$2; }
            }
            if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)); }
          }
        }
        if (direction == "ltr") {
          if (order[0].level == 1 && (m = str.match(/^\s+/))) {
            order[0].from = m[0].length;
            order.unshift(new BidiSpan(0, 0, m[0].length));
          }
          if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
            lst(order).to -= m[0].length;
            order.push(new BidiSpan(0, len - m[0].length, len));
          }
        }

        return direction == "rtl" ? order.reverse() : order
      }
    })();

    // Get the bidi ordering for the given line (and cache it). Returns
    // false for lines that are fully left-to-right, and an array of
    // BidiSpan objects otherwise.
    function getOrder(line, direction) {
      var order = line.order;
      if (order == null) { order = line.order = bidiOrdering(line.text, direction); }
      return order
    }

    // EVENT HANDLING

    // Lightweight event framework. on/off also work on DOM nodes,
    // registering native DOM handlers.

    var noHandlers = [];

    var on = function(emitter, type, f) {
      if (emitter.addEventListener) {
        emitter.addEventListener(type, f, false);
      } else if (emitter.attachEvent) {
        emitter.attachEvent("on" + type, f);
      } else {
        var map = emitter._handlers || (emitter._handlers = {});
        map[type] = (map[type] || noHandlers).concat(f);
      }
    };

    function getHandlers(emitter, type) {
      return emitter._handlers && emitter._handlers[type] || noHandlers
    }

    function off(emitter, type, f) {
      if (emitter.removeEventListener) {
        emitter.removeEventListener(type, f, false);
      } else if (emitter.detachEvent) {
        emitter.detachEvent("on" + type, f);
      } else {
        var map = emitter._handlers, arr = map && map[type];
        if (arr) {
          var index = indexOf(arr, f);
          if (index > -1)
            { map[type] = arr.slice(0, index).concat(arr.slice(index + 1)); }
        }
      }
    }

    function signal(emitter, type /*, values...*/) {
      var handlers = getHandlers(emitter, type);
      if (!handlers.length) { return }
      var args = Array.prototype.slice.call(arguments, 2);
      for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args); }
    }

    // The DOM events that CodeMirror handles can be overridden by
    // registering a (non-DOM) handler on the editor for the event name,
    // and preventDefault-ing the event in that handler.
    function signalDOMEvent(cm, e, override) {
      if (typeof e == "string")
        { e = {type: e, preventDefault: function() { this.defaultPrevented = true; }}; }
      signal(cm, override || e.type, cm, e);
      return e_defaultPrevented(e) || e.codemirrorIgnore
    }

    function signalCursorActivity(cm) {
      var arr = cm._handlers && cm._handlers.cursorActivity;
      if (!arr) { return }
      var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
      for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
        { set.push(arr[i]); } }
    }

    function hasHandler(emitter, type) {
      return getHandlers(emitter, type).length > 0
    }

    // Add on and off methods to a constructor's prototype, to make
    // registering events on such objects more convenient.
    function eventMixin(ctor) {
      ctor.prototype.on = function(type, f) {on(this, type, f);};
      ctor.prototype.off = function(type, f) {off(this, type, f);};
    }

    // Due to the fact that we still support jurassic IE versions, some
    // compatibility wrappers are needed.

    function e_preventDefault(e) {
      if (e.preventDefault) { e.preventDefault(); }
      else { e.returnValue = false; }
    }
    function e_stopPropagation(e) {
      if (e.stopPropagation) { e.stopPropagation(); }
      else { e.cancelBubble = true; }
    }
    function e_defaultPrevented(e) {
      return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
    }
    function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}

    function e_target(e) {return e.target || e.srcElement}
    function e_button(e) {
      var b = e.which;
      if (b == null) {
        if (e.button & 1) { b = 1; }
        else if (e.button & 2) { b = 3; }
        else if (e.button & 4) { b = 2; }
      }
      if (mac && e.ctrlKey && b == 1) { b = 3; }
      return b
    }

    // Detect drag-and-drop
    var dragAndDrop = function() {
      // There is *some* kind of drag-and-drop support in IE6-8, but I
      // couldn't get it to work yet.
      if (ie && ie_version < 9) { return false }
      var div = elt('div');
      return "draggable" in div || "dragDrop" in div
    }();

    var zwspSupported;
    function zeroWidthElement(measure) {
      if (zwspSupported == null) {
        var test = elt("span", "\u200b");
        removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
        if (measure.firstChild.offsetHeight != 0)
          { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8); }
      }
      var node = zwspSupported ? elt("span", "\u200b") :
        elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
      node.setAttribute("cm-text", "");
      return node
    }

    // Feature-detect IE's crummy client rect reporting for bidi text
    var badBidiRects;
    function hasBadBidiRects(measure) {
      if (badBidiRects != null) { return badBidiRects }
      var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
      var r0 = range(txt, 0, 1).getBoundingClientRect();
      var r1 = range(txt, 1, 2).getBoundingClientRect();
      removeChildren(measure);
      if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
      return badBidiRects = (r1.right - r0.right < 3)
    }

    // See if "".split is the broken IE version, if so, provide an
    // alternative way to split lines.
    var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
      var pos = 0, result = [], l = string.length;
      while (pos <= l) {
        var nl = string.indexOf("\n", pos);
        if (nl == -1) { nl = string.length; }
        var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
        var rt = line.indexOf("\r");
        if (rt != -1) {
          result.push(line.slice(0, rt));
          pos += rt + 1;
        } else {
          result.push(line);
          pos = nl + 1;
        }
      }
      return result
    } : function (string) { return string.split(/\r\n?|\n/); };

    var hasSelection = window.getSelection ? function (te) {
      try { return te.selectionStart != te.selectionEnd }
      catch(e) { return false }
    } : function (te) {
      var range;
      try {range = te.ownerDocument.selection.createRange();}
      catch(e) {}
      if (!range || range.parentElement() != te) { return false }
      return range.compareEndPoints("StartToEnd", range) != 0
    };

    var hasCopyEvent = (function () {
      var e = elt("div");
      if ("oncopy" in e) { return true }
      e.setAttribute("oncopy", "return;");
      return typeof e.oncopy == "function"
    })();

    var badZoomedRects = null;
    function hasBadZoomedRects(measure) {
      if (badZoomedRects != null) { return badZoomedRects }
      var node = removeChildrenAndAdd(measure, elt("span", "x"));
      var normal = node.getBoundingClientRect();
      var fromRange = range(node, 0, 1).getBoundingClientRect();
      return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
    }

    // Known modes, by name and by MIME
    var modes = {}, mimeModes = {};

    // Extra arguments are stored as the mode's dependencies, which is
    // used by (legacy) mechanisms like loadmode.js to automatically
    // load a mode. (Preferred mechanism is the require/define calls.)
    function defineMode(name, mode) {
      if (arguments.length > 2)
        { mode.dependencies = Array.prototype.slice.call(arguments, 2); }
      modes[name] = mode;
    }

    function defineMIME(mime, spec) {
      mimeModes[mime] = spec;
    }

    // Given a MIME type, a {name, ...options} config object, or a name
    // string, return a mode config object.
    function resolveMode(spec) {
      if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
        spec = mimeModes[spec];
      } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
        var found = mimeModes[spec.name];
        if (typeof found == "string") { found = {name: found}; }
        spec = createObj(found, spec);
        spec.name = found.name;
      } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
        return resolveMode("application/xml")
      } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
        return resolveMode("application/json")
      }
      if (typeof spec == "string") { return {name: spec} }
      else { return spec || {name: "null"} }
    }

    // Given a mode spec (anything that resolveMode accepts), find and
    // initialize an actual mode object.
    function getMode(options, spec) {
      spec = resolveMode(spec);
      var mfactory = modes[spec.name];
      if (!mfactory) { return getMode(options, "text/plain") }
      var modeObj = mfactory(options, spec);
      if (modeExtensions.hasOwnProperty(spec.name)) {
        var exts = modeExtensions[spec.name];
        for (var prop in exts) {
          if (!exts.hasOwnProperty(prop)) { continue }
          if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop]; }
          modeObj[prop] = exts[prop];
        }
      }
      modeObj.name = spec.name;
      if (spec.helperType) { modeObj.helperType = spec.helperType; }
      if (spec.modeProps) { for (var prop$1 in spec.modeProps)
        { modeObj[prop$1] = spec.modeProps[prop$1]; } }

      return modeObj
    }

    // This can be used to attach properties to mode objects from
    // outside the actual mode definition.
    var modeExtensions = {};
    function extendMode(mode, properties) {
      var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
      copyObj(properties, exts);
    }

    function copyState(mode, state) {
      if (state === true) { return state }
      if (mode.copyState) { return mode.copyState(state) }
      var nstate = {};
      for (var n in state) {
        var val = state[n];
        if (val instanceof Array) { val = val.concat([]); }
        nstate[n] = val;
      }
      return nstate
    }

    // Given a mode and a state (for that mode), find the inner mode and
    // state at the position that the state refers to.
    function innerMode(mode, state) {
      var info;
      while (mode.innerMode) {
        info = mode.innerMode(state);
        if (!info || info.mode == mode) { break }
        state = info.state;
        mode = info.mode;
      }
      return info || {mode: mode, state: state}
    }

    function startState(mode, a1, a2) {
      return mode.startState ? mode.startState(a1, a2) : true
    }

    // STRING STREAM

    // Fed to the mode parsers, provides helper functions to make
    // parsers more succinct.

    var StringStream = function(string, tabSize, lineOracle) {
      this.pos = this.start = 0;
      this.string = string;
      this.tabSize = tabSize || 8;
      this.lastColumnPos = this.lastColumnValue = 0;
      this.lineStart = 0;
      this.lineOracle = lineOracle;
    };

    StringStream.prototype.eol = function () {return this.pos >= this.string.length};
    StringStream.prototype.sol = function () {return this.pos == this.lineStart};
    StringStream.prototype.peek = function () {return this.string.charAt(this.pos) || undefined};
    StringStream.prototype.next = function () {
      if (this.pos < this.string.length)
        { return this.string.charAt(this.pos++) }
    };
    StringStream.prototype.eat = function (match) {
      var ch = this.string.charAt(this.pos);
      var ok;
      if (typeof match == "string") { ok = ch == match; }
      else { ok = ch && (match.test ? match.test(ch) : match(ch)); }
      if (ok) {++this.pos; return ch}
    };
    StringStream.prototype.eatWhile = function (match) {
      var start = this.pos;
      while (this.eat(match)){}
      return this.pos > start
    };
    StringStream.prototype.eatSpace = function () {
      var start = this.pos;
      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this.pos; }
      return this.pos > start
    };
    StringStream.prototype.skipToEnd = function () {this.pos = this.string.length;};
    StringStream.prototype.skipTo = function (ch) {
      var found = this.string.indexOf(ch, this.pos);
      if (found > -1) {this.pos = found; return true}
    };
    StringStream.prototype.backUp = function (n) {this.pos -= n;};
    StringStream.prototype.column = function () {
      if (this.lastColumnPos < this.start) {
        this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
        this.lastColumnPos = this.start;
      }
      return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
    };
    StringStream.prototype.indentation = function () {
      return countColumn(this.string, null, this.tabSize) -
        (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
    };
    StringStream.prototype.match = function (pattern, consume, caseInsensitive) {
      if (typeof pattern == "string") {
        var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; };
        var substr = this.string.substr(this.pos, pattern.length);
        if (cased(substr) == cased(pattern)) {
          if (consume !== false) { this.pos += pattern.length; }
          return true
        }
      } else {
        var match = this.string.slice(this.pos).match(pattern);
        if (match && match.index > 0) { return null }
        if (match && consume !== false) { this.pos += match[0].length; }
        return match
      }
    };
    StringStream.prototype.current = function (){return this.string.slice(this.start, this.pos)};
    StringStream.prototype.hideFirstChars = function (n, inner) {
      this.lineStart += n;
      try { return inner() }
      finally { this.lineStart -= n; }
    };
    StringStream.prototype.lookAhead = function (n) {
      var oracle = this.lineOracle;
      return oracle && oracle.lookAhead(n)
    };
    StringStream.prototype.baseToken = function () {
      var oracle = this.lineOracle;
      return oracle && oracle.baseToken(this.pos)
    };

    // Find the line object corresponding to the given line number.
    function getLine(doc, n) {
      n -= doc.first;
      if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
      var chunk = doc;
      while (!chunk.lines) {
        for (var i = 0;; ++i) {
          var child = chunk.children[i], sz = child.chunkSize();
          if (n < sz) { chunk = child; break }
          n -= sz;
        }
      }
      return chunk.lines[n]
    }

    // Get the part of a document between two positions, as an array of
    // strings.
    function getBetween(doc, start, end) {
      var out = [], n = start.line;
      doc.iter(start.line, end.line + 1, function (line) {
        var text = line.text;
        if (n == end.line) { text = text.slice(0, end.ch); }
        if (n == start.line) { text = text.slice(start.ch); }
        out.push(text);
        ++n;
      });
      return out
    }
    // Get the lines between from and to, as array of strings.
    function getLines(doc, from, to) {
      var out = [];
      doc.iter(from, to, function (line) { out.push(line.text); }); // iter aborts when callback returns truthy value
      return out
    }

    // Update the height of a line, propagating the height change
    // upwards to parent nodes.
    function updateLineHeight(line, height) {
      var diff = height - line.height;
      if (diff) { for (var n = line; n; n = n.parent) { n.height += diff; } }
    }

    // Given a line object, find its line number by walking up through
    // its parent links.
    function lineNo(line) {
      if (line.parent == null) { return null }
      var cur = line.parent, no = indexOf(cur.lines, line);
      for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
        for (var i = 0;; ++i) {
          if (chunk.children[i] == cur) { break }
          no += chunk.children[i].chunkSize();
        }
      }
      return no + cur.first
    }

    // Find the line at the given vertical position, using the height
    // information in the document tree.
    function lineAtHeight(chunk, h) {
      var n = chunk.first;
      outer: do {
        for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
          var child = chunk.children[i$1], ch = child.height;
          if (h < ch) { chunk = child; continue outer }
          h -= ch;
          n += child.chunkSize();
        }
        return n
      } while (!chunk.lines)
      var i = 0;
      for (; i < chunk.lines.length; ++i) {
        var line = chunk.lines[i], lh = line.height;
        if (h < lh) { break }
        h -= lh;
      }
      return n + i
    }

    function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

    function lineNumberFor(options, i) {
      return String(options.lineNumberFormatter(i + options.firstLineNumber))
    }

    // A Pos instance represents a position within the text.
    function Pos(line, ch, sticky) {
      if ( sticky === void 0 ) { sticky = null; }

      if (!(this instanceof Pos)) { return new Pos(line, ch, sticky) }
      this.line = line;
      this.ch = ch;
      this.sticky = sticky;
    }

    // Compare two positions, return 0 if they are the same, a negative
    // number when a is less, and a positive number otherwise.
    function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

    function equalCursorPos(a, b) { return a.sticky == b.sticky && cmp(a, b) == 0 }

    function copyPos(x) {return Pos(x.line, x.ch)}
    function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
    function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

    // Most of the external API clips given positions to make sure they
    // actually exist within the document.
    function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
    function clipPos(doc, pos) {
      if (pos.line < doc.first) { return Pos(doc.first, 0) }
      var last = doc.first + doc.size - 1;
      if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
      return clipToLen(pos, getLine(doc, pos.line).text.length)
    }
    function clipToLen(pos, linelen) {
      var ch = pos.ch;
      if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
      else if (ch < 0) { return Pos(pos.line, 0) }
      else { return pos }
    }
    function clipPosArray(doc, array) {
      var out = [];
      for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]); }
      return out
    }

    var SavedContext = function(state, lookAhead) {
      this.state = state;
      this.lookAhead = lookAhead;
    };

    var Context = function(doc, state, line, lookAhead) {
      this.state = state;
      this.doc = doc;
      this.line = line;
      this.maxLookAhead = lookAhead || 0;
      this.baseTokens = null;
      this.baseTokenPos = 1;
    };

    Context.prototype.lookAhead = function (n) {
      var line = this.doc.getLine(this.line + n);
      if (line != null && n > this.maxLookAhead) { this.maxLookAhead = n; }
      return line
    };

    Context.prototype.baseToken = function (n) {
      if (!this.baseTokens) { return null }
      while (this.baseTokens[this.baseTokenPos] <= n)
        { this.baseTokenPos += 2; }
      var type = this.baseTokens[this.baseTokenPos + 1];
      return {type: type && type.replace(/( |^)overlay .*/, ""),
              size: this.baseTokens[this.baseTokenPos] - n}
    };

    Context.prototype.nextLine = function () {
      this.line++;
      if (this.maxLookAhead > 0) { this.maxLookAhead--; }
    };

    Context.fromSaved = function (doc, saved, line) {
      if (saved instanceof SavedContext)
        { return new Context(doc, copyState(doc.mode, saved.state), line, saved.lookAhead) }
      else
        { return new Context(doc, copyState(doc.mode, saved), line) }
    };

    Context.prototype.save = function (copy) {
      var state = copy !== false ? copyState(this.doc.mode, this.state) : this.state;
      return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state
    };


    // Compute a style array (an array starting with a mode generation
    // -- for invalidation -- followed by pairs of end positions and
    // style strings), which is used to highlight the tokens on the
    // line.
    function highlightLine(cm, line, context, forceToEnd) {
      // A styles array always starts with a number identifying the
      // mode/overlays that it is based on (for easy invalidation).
      var st = [cm.state.modeGen], lineClasses = {};
      // Compute the base array of styles
      runMode(cm, line.text, cm.doc.mode, context, function (end, style) { return st.push(end, style); },
              lineClasses, forceToEnd);
      var state = context.state;

      // Run overlays, adjust style array.
      var loop = function ( o ) {
        context.baseTokens = st;
        var overlay = cm.state.overlays[o], i = 1, at = 0;
        context.state = true;
        runMode(cm, line.text, overlay.mode, context, function (end, style) {
          var start = i;
          // Ensure there's a token end at the current position, and that i points at it
          while (at < end) {
            var i_end = st[i];
            if (i_end > end)
              { st.splice(i, 1, end, st[i+1], i_end); }
            i += 2;
            at = Math.min(end, i_end);
          }
          if (!style) { return }
          if (overlay.opaque) {
            st.splice(start, i - start, end, "overlay " + style);
            i = start + 2;
          } else {
            for (; start < i; start += 2) {
              var cur = st[start+1];
              st[start+1] = (cur ? cur + " " : "") + "overlay " + style;
            }
          }
        }, lineClasses);
        context.state = state;
        context.baseTokens = null;
        context.baseTokenPos = 1;
      };

      for (var o = 0; o < cm.state.overlays.length; ++o) { loop( o ); }

      return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
    }

    function getLineStyles(cm, line, updateFrontier) {
      if (!line.styles || line.styles[0] != cm.state.modeGen) {
        var context = getContextBefore(cm, lineNo(line));
        var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
        var result = highlightLine(cm, line, context);
        if (resetState) { context.state = resetState; }
        line.stateAfter = context.save(!resetState);
        line.styles = result.styles;
        if (result.classes) { line.styleClasses = result.classes; }
        else if (line.styleClasses) { line.styleClasses = null; }
        if (updateFrontier === cm.doc.highlightFrontier)
          { cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier); }
      }
      return line.styles
    }

    function getContextBefore(cm, n, precise) {
      var doc = cm.doc, display = cm.display;
      if (!doc.mode.startState) { return new Context(doc, true, n) }
      var start = findStartLine(cm, n, precise);
      var saved = start > doc.first && getLine(doc, start - 1).stateAfter;
      var context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, startState(doc.mode), start);

      doc.iter(start, n, function (line) {
        processLine(cm, line.text, context);
        var pos = context.line;
        line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
        context.nextLine();
      });
      if (precise) { doc.modeFrontier = context.line; }
      return context
    }

    // Lightweight form of highlight -- proceed over this line and
    // update state, but don't save a style array. Used for lines that
    // aren't currently visible.
    function processLine(cm, text, context, startAt) {
      var mode = cm.doc.mode;
      var stream = new StringStream(text, cm.options.tabSize, context);
      stream.start = stream.pos = startAt || 0;
      if (text == "") { callBlankLine(mode, context.state); }
      while (!stream.eol()) {
        readToken(mode, stream, context.state);
        stream.start = stream.pos;
      }
    }

    function callBlankLine(mode, state) {
      if (mode.blankLine) { return mode.blankLine(state) }
      if (!mode.innerMode) { return }
      var inner = innerMode(mode, state);
      if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
    }

    function readToken(mode, stream, state, inner) {
      for (var i = 0; i < 10; i++) {
        if (inner) { inner[0] = innerMode(mode, state).mode; }
        var style = mode.token(stream, state);
        if (stream.pos > stream.start) { return style }
      }
      throw new Error("Mode " + mode.name + " failed to advance stream.")
    }

    var Token = function(stream, type, state) {
      this.start = stream.start; this.end = stream.pos;
      this.string = stream.current();
      this.type = type || null;
      this.state = state;
    };

    // Utility for getTokenAt and getLineTokens
    function takeToken(cm, pos, precise, asArray) {
      var doc = cm.doc, mode = doc.mode, style;
      pos = clipPos(doc, pos);
      var line = getLine(doc, pos.line), context = getContextBefore(cm, pos.line, precise);
      var stream = new StringStream(line.text, cm.options.tabSize, context), tokens;
      if (asArray) { tokens = []; }
      while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
        stream.start = stream.pos;
        style = readToken(mode, stream, context.state);
        if (asArray) { tokens.push(new Token(stream, style, copyState(doc.mode, context.state))); }
      }
      return asArray ? tokens : new Token(stream, style, context.state)
    }

    function extractLineClasses(type, output) {
      if (type) { for (;;) {
        var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
        if (!lineClass) { break }
        type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
        var prop = lineClass[1] ? "bgClass" : "textClass";
        if (output[prop] == null)
          { output[prop] = lineClass[2]; }
        else if (!(new RegExp("(?:^|\\s)" + lineClass[2] + "(?:$|\\s)")).test(output[prop]))
          { output[prop] += " " + lineClass[2]; }
      } }
      return type
    }

    // Run the given mode's parser over a line, calling f for each token.
    function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
      var flattenSpans = mode.flattenSpans;
      if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans; }
      var curStart = 0, curStyle = null;
      var stream = new StringStream(text, cm.options.tabSize, context), style;
      var inner = cm.options.addModeClass && [null];
      if (text == "") { extractLineClasses(callBlankLine(mode, context.state), lineClasses); }
      while (!stream.eol()) {
        if (stream.pos > cm.options.maxHighlightLength) {
          flattenSpans = false;
          if (forceToEnd) { processLine(cm, text, context, stream.pos); }
          stream.pos = text.length;
          style = null;
        } else {
          style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses);
        }
        if (inner) {
          var mName = inner[0].name;
          if (mName) { style = "m-" + (style ? mName + " " + style : mName); }
        }
        if (!flattenSpans || curStyle != style) {
          while (curStart < stream.start) {
            curStart = Math.min(stream.start, curStart + 5000);
            f(curStart, curStyle);
          }
          curStyle = style;
        }
        stream.start = stream.pos;
      }
      while (curStart < stream.pos) {
        // Webkit seems to refuse to render text nodes longer than 57444
        // characters, and returns inaccurate measurements in nodes
        // starting around 5000 chars.
        var pos = Math.min(stream.pos, curStart + 5000);
        f(pos, curStyle);
        curStart = pos;
      }
    }

    // Finds the line to start with when starting a parse. Tries to
    // find a line with a stateAfter, so that it can start with a
    // valid state. If that fails, it returns the line with the
    // smallest indentation, which tends to need the least context to
    // parse correctly.
    function findStartLine(cm, n, precise) {
      var minindent, minline, doc = cm.doc;
      var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
      for (var search = n; search > lim; --search) {
        if (search <= doc.first) { return doc.first }
        var line = getLine(doc, search - 1), after = line.stateAfter;
        if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier))
          { return search }
        var indented = countColumn(line.text, null, cm.options.tabSize);
        if (minline == null || minindent > indented) {
          minline = search - 1;
          minindent = indented;
        }
      }
      return minline
    }

    function retreatFrontier(doc, n) {
      doc.modeFrontier = Math.min(doc.modeFrontier, n);
      if (doc.highlightFrontier < n - 10) { return }
      var start = doc.first;
      for (var line = n - 1; line > start; line--) {
        var saved = getLine(doc, line).stateAfter;
        // change is on 3
        // state on line 1 looked ahead 2 -- so saw 3
        // test 1 + 2 < 3 should cover this
        if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
          start = line + 1;
          break
        }
      }
      doc.highlightFrontier = Math.min(doc.highlightFrontier, start);
    }

    // Optimize some code when these features are not used.
    var sawReadOnlySpans = false, sawCollapsedSpans = false;

    function seeReadOnlySpans() {
      sawReadOnlySpans = true;
    }

    function seeCollapsedSpans() {
      sawCollapsedSpans = true;
    }

    // TEXTMARKER SPANS

    function MarkedSpan(marker, from, to) {
      this.marker = marker;
      this.from = from; this.to = to;
    }

    // Search an array of spans for a span matching the given marker.
    function getMarkedSpanFor(spans, marker) {
      if (spans) { for (var i = 0; i < spans.length; ++i) {
        var span = spans[i];
        if (span.marker == marker) { return span }
      } }
    }
    // Remove a span from an array, returning undefined if no spans are
    // left (we don't store arrays for lines without spans).
    function removeMarkedSpan(spans, span) {
      var r;
      for (var i = 0; i < spans.length; ++i)
        { if (spans[i] != span) { (r || (r = [])).push(spans[i]); } }
      return r
    }
    // Add a span to a line.
    function addMarkedSpan(line, span) {
      line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
      span.marker.attachLine(line);
    }

    // Used for the algorithm that adjusts markers for a change in the
    // document. These functions cut an array of spans at a given
    // character position, returning an array of remaining chunks (or
    // undefined if nothing remains).
    function markedSpansBefore(old, startCh, isInsert) {
      var nw;
      if (old) { for (var i = 0; i < old.length; ++i) {
        var span = old[i], marker = span.marker;
        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
        if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
          var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh)
          ;(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
        }
      } }
      return nw
    }
    function markedSpansAfter(old, endCh, isInsert) {
      var nw;
      if (old) { for (var i = 0; i < old.length; ++i) {
        var span = old[i], marker = span.marker;
        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
        if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
          var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh)
          ;(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
                                                span.to == null ? null : span.to - endCh));
        }
      } }
      return nw
    }

    // Given a change object, compute the new set of marker spans that
    // cover the line in which the change took place. Removes spans
    // entirely within the change, reconnects spans belonging to the
    // same marker that appear on both sides of the change, and cuts off
    // spans partially within the change. Returns an array of span
    // arrays with one element for each line in (after) the change.
    function stretchSpansOverChange(doc, change) {
      if (change.full) { return null }
      var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
      var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
      if (!oldFirst && !oldLast) { return null }

      var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
      // Get the spans that 'stick out' on both sides
      var first = markedSpansBefore(oldFirst, startCh, isInsert);
      var last = markedSpansAfter(oldLast, endCh, isInsert);

      // Next, merge those two ends
      var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
      if (first) {
        // Fix up .to properties of first
        for (var i = 0; i < first.length; ++i) {
          var span = first[i];
          if (span.to == null) {
            var found = getMarkedSpanFor(last, span.marker);
            if (!found) { span.to = startCh; }
            else if (sameLine) { span.to = found.to == null ? null : found.to + offset; }
          }
        }
      }
      if (last) {
        // Fix up .from in last (or move them into first in case of sameLine)
        for (var i$1 = 0; i$1 < last.length; ++i$1) {
          var span$1 = last[i$1];
          if (span$1.to != null) { span$1.to += offset; }
          if (span$1.from == null) {
            var found$1 = getMarkedSpanFor(first, span$1.marker);
            if (!found$1) {
              span$1.from = offset;
              if (sameLine) { (first || (first = [])).push(span$1); }
            }
          } else {
            span$1.from += offset;
            if (sameLine) { (first || (first = [])).push(span$1); }
          }
        }
      }
      // Make sure we didn't create any zero-length spans
      if (first) { first = clearEmptySpans(first); }
      if (last && last != first) { last = clearEmptySpans(last); }

      var newMarkers = [first];
      if (!sameLine) {
        // Fill gap with whole-line-spans
        var gap = change.text.length - 2, gapMarkers;
        if (gap > 0 && first)
          { for (var i$2 = 0; i$2 < first.length; ++i$2)
            { if (first[i$2].to == null)
              { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)); } } }
        for (var i$3 = 0; i$3 < gap; ++i$3)
          { newMarkers.push(gapMarkers); }
        newMarkers.push(last);
      }
      return newMarkers
    }

    // Remove spans that are empty and don't have a clearWhenEmpty
    // option of false.
    function clearEmptySpans(spans) {
      for (var i = 0; i < spans.length; ++i) {
        var span = spans[i];
        if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
          { spans.splice(i--, 1); }
      }
      if (!spans.length) { return null }
      return spans
    }

    // Used to 'clip' out readOnly ranges when making a change.
    function removeReadOnlyRanges(doc, from, to) {
      var markers = null;
      doc.iter(from.line, to.line + 1, function (line) {
        if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
          var mark = line.markedSpans[i].marker;
          if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
            { (markers || (markers = [])).push(mark); }
        } }
      });
      if (!markers) { return null }
      var parts = [{from: from, to: to}];
      for (var i = 0; i < markers.length; ++i) {
        var mk = markers[i], m = mk.find(0);
        for (var j = 0; j < parts.length; ++j) {
          var p = parts[j];
          if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
          var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
          if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
            { newParts.push({from: p.from, to: m.from}); }
          if (dto > 0 || !mk.inclusiveRight && !dto)
            { newParts.push({from: m.to, to: p.to}); }
          parts.splice.apply(parts, newParts);
          j += newParts.length - 3;
        }
      }
      return parts
    }

    // Connect or disconnect spans from a line.
    function detachMarkedSpans(line) {
      var spans = line.markedSpans;
      if (!spans) { return }
      for (var i = 0; i < spans.length; ++i)
        { spans[i].marker.detachLine(line); }
      line.markedSpans = null;
    }
    function attachMarkedSpans(line, spans) {
      if (!spans) { return }
      for (var i = 0; i < spans.length; ++i)
        { spans[i].marker.attachLine(line); }
      line.markedSpans = spans;
    }

    // Helpers used when computing which overlapping collapsed span
    // counts as the larger one.
    function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
    function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

    // Returns a number indicating which of two overlapping collapsed
    // spans is larger (and thus includes the other). Falls back to
    // comparing ids when the spans cover exactly the same range.
    function compareCollapsedMarkers(a, b) {
      var lenDiff = a.lines.length - b.lines.length;
      if (lenDiff != 0) { return lenDiff }
      var aPos = a.find(), bPos = b.find();
      var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
      if (fromCmp) { return -fromCmp }
      var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
      if (toCmp) { return toCmp }
      return b.id - a.id
    }

    // Find out whether a line ends or starts in a collapsed span. If
    // so, return the marker for that span.
    function collapsedSpanAtSide(line, start) {
      var sps = sawCollapsedSpans && line.markedSpans, found;
      if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
        sp = sps[i];
        if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
            (!found || compareCollapsedMarkers(found, sp.marker) < 0))
          { found = sp.marker; }
      } }
      return found
    }
    function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
    function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

    function collapsedSpanAround(line, ch) {
      var sps = sawCollapsedSpans && line.markedSpans, found;
      if (sps) { for (var i = 0; i < sps.length; ++i) {
        var sp = sps[i];
        if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) &&
            (!found || compareCollapsedMarkers(found, sp.marker) < 0)) { found = sp.marker; }
      } }
      return found
    }

    // Test whether there exists a collapsed span that partially
    // overlaps (covers the start or end, but not both) of a new span.
    // Such overlap is not allowed.
    function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
      var line = getLine(doc, lineNo);
      var sps = sawCollapsedSpans && line.markedSpans;
      if (sps) { for (var i = 0; i < sps.length; ++i) {
        var sp = sps[i];
        if (!sp.marker.collapsed) { continue }
        var found = sp.marker.find(0);
        var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
        var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
        if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
        if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
            fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
          { return true }
      } }
    }

    // A visual line is a line as drawn on the screen. Folding, for
    // example, can cause multiple logical lines to appear on the same
    // visual line. This finds the start of the visual line that the
    // given line is part of (usually that is the line itself).
    function visualLine(line) {
      var merged;
      while (merged = collapsedSpanAtStart(line))
        { line = merged.find(-1, true).line; }
      return line
    }

    function visualLineEnd(line) {
      var merged;
      while (merged = collapsedSpanAtEnd(line))
        { line = merged.find(1, true).line; }
      return line
    }

    // Returns an array of logical lines that continue the visual line
    // started by the argument, or undefined if there are no such lines.
    function visualLineContinued(line) {
      var merged, lines;
      while (merged = collapsedSpanAtEnd(line)) {
        line = merged.find(1, true).line
        ;(lines || (lines = [])).push(line);
      }
      return lines
    }

    // Get the line number of the start of the visual line that the
    // given line number is part of.
    function visualLineNo(doc, lineN) {
      var line = getLine(doc, lineN), vis = visualLine(line);
      if (line == vis) { return lineN }
      return lineNo(vis)
    }

    // Get the line number of the start of the next visual line after
    // the given line.
    function visualLineEndNo(doc, lineN) {
      if (lineN > doc.lastLine()) { return lineN }
      var line = getLine(doc, lineN), merged;
      if (!lineIsHidden(doc, line)) { return lineN }
      while (merged = collapsedSpanAtEnd(line))
        { line = merged.find(1, true).line; }
      return lineNo(line) + 1
    }

    // Compute whether a line is hidden. Lines count as hidden when they
    // are part of a visual line that starts with another line, or when
    // they are entirely covered by collapsed, non-widget span.
    function lineIsHidden(doc, line) {
      var sps = sawCollapsedSpans && line.markedSpans;
      if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
        sp = sps[i];
        if (!sp.marker.collapsed) { continue }
        if (sp.from == null) { return true }
        if (sp.marker.widgetNode) { continue }
        if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
          { return true }
      } }
    }
    function lineIsHiddenInner(doc, line, span) {
      if (span.to == null) {
        var end = span.marker.find(1, true);
        return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
      }
      if (span.marker.inclusiveRight && span.to == line.text.length)
        { return true }
      for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
        sp = line.markedSpans[i];
        if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
            (sp.to == null || sp.to != span.from) &&
            (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
            lineIsHiddenInner(doc, line, sp)) { return true }
      }
    }

    // Find the height above the given line.
    function heightAtLine(lineObj) {
      lineObj = visualLine(lineObj);

      var h = 0, chunk = lineObj.parent;
      for (var i = 0; i < chunk.lines.length; ++i) {
        var line = chunk.lines[i];
        if (line == lineObj) { break }
        else { h += line.height; }
      }
      for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
        for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
          var cur = p.children[i$1];
          if (cur == chunk) { break }
          else { h += cur.height; }
        }
      }
      return h
    }

    // Compute the character length of a line, taking into account
    // collapsed ranges (see markText) that might hide parts, and join
    // other lines onto it.
    function lineLength(line) {
      if (line.height == 0) { return 0 }
      var len = line.text.length, merged, cur = line;
      while (merged = collapsedSpanAtStart(cur)) {
        var found = merged.find(0, true);
        cur = found.from.line;
        len += found.from.ch - found.to.ch;
      }
      cur = line;
      while (merged = collapsedSpanAtEnd(cur)) {
        var found$1 = merged.find(0, true);
        len -= cur.text.length - found$1.from.ch;
        cur = found$1.to.line;
        len += cur.text.length - found$1.to.ch;
      }
      return len
    }

    // Find the longest line in the document.
    function findMaxLine(cm) {
      var d = cm.display, doc = cm.doc;
      d.maxLine = getLine(doc, doc.first);
      d.maxLineLength = lineLength(d.maxLine);
      d.maxLineChanged = true;
      doc.iter(function (line) {
        var len = lineLength(line);
        if (len > d.maxLineLength) {
          d.maxLineLength = len;
          d.maxLine = line;
        }
      });
    }

    // LINE DATA STRUCTURE

    // Line objects. These hold state related to a line, including
    // highlighting info (the styles array).
    var Line = function(text, markedSpans, estimateHeight) {
      this.text = text;
      attachMarkedSpans(this, markedSpans);
      this.height = estimateHeight ? estimateHeight(this) : 1;
    };

    Line.prototype.lineNo = function () { return lineNo(this) };
    eventMixin(Line);

    // Change the content (text, markers) of a line. Automatically
    // invalidates cached information and tries to re-estimate the
    // line's height.
    function updateLine(line, text, markedSpans, estimateHeight) {
      line.text = text;
      if (line.stateAfter) { line.stateAfter = null; }
      if (line.styles) { line.styles = null; }
      if (line.order != null) { line.order = null; }
      detachMarkedSpans(line);
      attachMarkedSpans(line, markedSpans);
      var estHeight = estimateHeight ? estimateHeight(line) : 1;
      if (estHeight != line.height) { updateLineHeight(line, estHeight); }
    }

    // Detach a line from the document tree and its markers.
    function cleanUpLine(line) {
      line.parent = null;
      detachMarkedSpans(line);
    }

    // Convert a style as returned by a mode (either null, or a string
    // containing one or more styles) to a CSS style. This is cached,
    // and also looks for line-wide styles.
    var styleToClassCache = {}, styleToClassCacheWithMode = {};
    function interpretTokenStyle(style, options) {
      if (!style || /^\s*$/.test(style)) { return null }
      var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
      return cache[style] ||
        (cache[style] = style.replace(/\S+/g, "cm-$&"))
    }

    // Render the DOM representation of the text of a line. Also builds
    // up a 'line map', which points at the DOM nodes that represent
    // specific stretches of text, and is used by the measuring code.
    // The returned object contains the DOM node, this map, and
    // information about line-wide styles that were set by the mode.
    function buildLineContent(cm, lineView) {
      // The padding-right forces the element to have a 'border', which
      // is needed on Webkit to be able to get line-level bounding
      // rectangles for it (in measureChar).
      var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
      var builder = {pre: eltP("pre", [content], "CodeMirror-line"), content: content,
                     col: 0, pos: 0, cm: cm,
                     trailingSpace: false,
                     splitSpaces: cm.getOption("lineWrapping")};
      lineView.measure = {};

      // Iterate over the logical lines that make up this visual line.
      for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
        var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0);
        builder.pos = 0;
        builder.addToken = buildToken;
        // Optionally wire in some hacks into the token-rendering
        // algorithm, to deal with browser quirks.
        if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction)))
          { builder.addToken = buildTokenBadBidi(builder.addToken, order); }
        builder.map = [];
        var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
        insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
        if (line.styleClasses) {
          if (line.styleClasses.bgClass)
            { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || ""); }
          if (line.styleClasses.textClass)
            { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || ""); }
        }

        // Ensure at least a single node is present, for measuring.
        if (builder.map.length == 0)
          { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))); }

        // Store the map and a cache object for the current logical line
        if (i == 0) {
          lineView.measure.map = builder.map;
          lineView.measure.cache = {};
        } else {
    (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
          ;(lineView.measure.caches || (lineView.measure.caches = [])).push({});
        }
      }

      // See issue #2901
      if (webkit) {
        var last = builder.content.lastChild;
        if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
          { builder.content.className = "cm-tab-wrap-hack"; }
      }

      signal(cm, "renderLine", cm, lineView.line, builder.pre);
      if (builder.pre.className)
        { builder.textClass = joinClasses(builder.pre.className, builder.textClass || ""); }

      return builder
    }

    function defaultSpecialCharPlaceholder(ch) {
      var token = elt("span", "\u2022", "cm-invalidchar");
      token.title = "\\u" + ch.charCodeAt(0).toString(16);
      token.setAttribute("aria-label", token.title);
      return token
    }

    // Build up the DOM representation for a single token, and add it to
    // the line map. Takes care to render special characters separately.
    function buildToken(builder, text, style, startStyle, endStyle, css, attributes) {
      if (!text) { return }
      var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text;
      var special = builder.cm.state.specialChars, mustWrap = false;
      var content;
      if (!special.test(text)) {
        builder.col += text.length;
        content = document.createTextNode(displayText);
        builder.map.push(builder.pos, builder.pos + text.length, content);
        if (ie && ie_version < 9) { mustWrap = true; }
        builder.pos += text.length;
      } else {
        content = document.createDocumentFragment();
        var pos = 0;
        while (true) {
          special.lastIndex = pos;
          var m = special.exec(text);
          var skipped = m ? m.index - pos : text.length - pos;
          if (skipped) {
            var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
            if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])); }
            else { content.appendChild(txt); }
            builder.map.push(builder.pos, builder.pos + skipped, txt);
            builder.col += skipped;
            builder.pos += skipped;
          }
          if (!m) { break }
          pos += skipped + 1;
          var txt$1 = (void 0);
          if (m[0] == "\t") {
            var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
            txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
            txt$1.setAttribute("role", "presentation");
            txt$1.setAttribute("cm-text", "\t");
            builder.col += tabWidth;
          } else if (m[0] == "\r" || m[0] == "\n") {
            txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
            txt$1.setAttribute("cm-text", m[0]);
            builder.col += 1;
          } else {
            txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
            txt$1.setAttribute("cm-text", m[0]);
            if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])); }
            else { content.appendChild(txt$1); }
            builder.col += 1;
          }
          builder.map.push(builder.pos, builder.pos + 1, txt$1);
          builder.pos++;
        }
      }
      builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32;
      if (style || startStyle || endStyle || mustWrap || css || attributes) {
        var fullStyle = style || "";
        if (startStyle) { fullStyle += startStyle; }
        if (endStyle) { fullStyle += endStyle; }
        var token = elt("span", [content], fullStyle, css);
        if (attributes) {
          for (var attr in attributes) { if (attributes.hasOwnProperty(attr) && attr != "style" && attr != "class")
            { token.setAttribute(attr, attributes[attr]); } }
        }
        return builder.content.appendChild(token)
      }
      builder.content.appendChild(content);
    }

    // Change some spaces to NBSP to prevent the browser from collapsing
    // trailing spaces at the end of a line when rendering text (issue #1362).
    function splitSpaces(text, trailingBefore) {
      if (text.length > 1 && !/  /.test(text)) { return text }
      var spaceBefore = trailingBefore, result = "";
      for (var i = 0; i < text.length; i++) {
        var ch = text.charAt(i);
        if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
          { ch = "\u00a0"; }
        result += ch;
        spaceBefore = ch == " ";
      }
      return result
    }

    // Work around nonsense dimensions being reported for stretches of
    // right-to-left text.
    function buildTokenBadBidi(inner, order) {
      return function (builder, text, style, startStyle, endStyle, css, attributes) {
        style = style ? style + " cm-force-border" : "cm-force-border";
        var start = builder.pos, end = start + text.length;
        for (;;) {
          // Find the part that overlaps with the start of this text
          var part = (void 0);
          for (var i = 0; i < order.length; i++) {
            part = order[i];
            if (part.to > start && part.from <= start) { break }
          }
          if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, css, attributes) }
          inner(builder, text.slice(0, part.to - start), style, startStyle, null, css, attributes);
          startStyle = null;
          text = text.slice(part.to - start);
          start = part.to;
        }
      }
    }

    function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
      var widget = !ignoreWidget && marker.widgetNode;
      if (widget) { builder.map.push(builder.pos, builder.pos + size, widget); }
      if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
        if (!widget)
          { widget = builder.content.appendChild(document.createElement("span")); }
        widget.setAttribute("cm-marker", marker.id);
      }
      if (widget) {
        builder.cm.display.input.setUneditable(widget);
        builder.content.appendChild(widget);
      }
      builder.pos += size;
      builder.trailingSpace = false;
    }

    // Outputs a number of spans to make up a line, taking highlighting
    // and marked text into account.
    function insertLineContent(line, builder, styles) {
      var spans = line.markedSpans, allText = line.text, at = 0;
      if (!spans) {
        for (var i$1 = 1; i$1 < styles.length; i$1+=2)
          { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)); }
        return
      }

      var len = allText.length, pos = 0, i = 1, text = "", style, css;
      var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, collapsed, attributes;
      for (;;) {
        if (nextChange == pos) { // Update current marker set
          spanStyle = spanEndStyle = spanStartStyle = css = "";
          attributes = null;
          collapsed = null; nextChange = Infinity;
          var foundBookmarks = [], endStyles = (void 0);
          for (var j = 0; j < spans.length; ++j) {
            var sp = spans[j], m = sp.marker;
            if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
              foundBookmarks.push(m);
            } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
              if (sp.to != null && sp.to != pos && nextChange > sp.to) {
                nextChange = sp.to;
                spanEndStyle = "";
              }
              if (m.className) { spanStyle += " " + m.className; }
              if (m.css) { css = (css ? css + ";" : "") + m.css; }
              if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle; }
              if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to); }
              // support for the old title property
              // https://github.com/codemirror/CodeMirror/pull/5673
              if (m.title) { (attributes || (attributes = {})).title = m.title; }
              if (m.attributes) {
                for (var attr in m.attributes)
                  { (attributes || (attributes = {}))[attr] = m.attributes[attr]; }
              }
              if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
                { collapsed = sp; }
            } else if (sp.from > pos && nextChange > sp.from) {
              nextChange = sp.from;
            }
          }
          if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
            { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1]; } } }

          if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
            { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]); } }
          if (collapsed && (collapsed.from || 0) == pos) {
            buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                               collapsed.marker, collapsed.from == null);
            if (collapsed.to == null) { return }
            if (collapsed.to == pos) { collapsed = false; }
          }
        }
        if (pos >= len) { break }

        var upto = Math.min(len, nextChange);
        while (true) {
          if (text) {
            var end = pos + text.length;
            if (!collapsed) {
              var tokenText = end > upto ? text.slice(0, upto - pos) : text;
              builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                               spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", css, attributes);
            }
            if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
            pos = end;
            spanStartStyle = "";
          }
          text = allText.slice(at, at = styles[i++]);
          style = interpretTokenStyle(styles[i++], builder.cm.options);
        }
      }
    }


    // These objects are used to represent the visible (currently drawn)
    // part of the document. A LineView may correspond to multiple
    // logical lines, if those are connected by collapsed ranges.
    function LineView(doc, line, lineN) {
      // The starting line
      this.line = line;
      // Continuing lines, if any
      this.rest = visualLineContinued(line);
      // Number of logical lines in this visual line
      this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
      this.node = this.text = null;
      this.hidden = lineIsHidden(doc, line);
    }

    // Create a range of LineView objects for the given lines.
    function buildViewArray(cm, from, to) {
      var array = [], nextPos;
      for (var pos = from; pos < to; pos = nextPos) {
        var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
        nextPos = pos + view.size;
        array.push(view);
      }
      return array
    }

    var operationGroup = null;

    function pushOperation(op) {
      if (operationGroup) {
        operationGroup.ops.push(op);
      } else {
        op.ownsGroup = operationGroup = {
          ops: [op],
          delayedCallbacks: []
        };
      }
    }

    function fireCallbacksForOps(group) {
      // Calls delayed callbacks and cursorActivity handlers until no
      // new ones appear
      var callbacks = group.delayedCallbacks, i = 0;
      do {
        for (; i < callbacks.length; i++)
          { callbacks[i].call(null); }
        for (var j = 0; j < group.ops.length; j++) {
          var op = group.ops[j];
          if (op.cursorActivityHandlers)
            { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
              { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm); } }
        }
      } while (i < callbacks.length)
    }

    function finishOperation(op, endCb) {
      var group = op.ownsGroup;
      if (!group) { return }

      try { fireCallbacksForOps(group); }
      finally {
        operationGroup = null;
        endCb(group);
      }
    }

    var orphanDelayedCallbacks = null;

    // Often, we want to signal events at a point where we are in the
    // middle of some work, but don't want the handler to start calling
    // other methods on the editor, which might be in an inconsistent
    // state or simply not expect any other events to happen.
    // signalLater looks whether there are any handlers, and schedules
    // them to be executed when the last operation ends, or, if no
    // operation is active, when a timeout fires.
    function signalLater(emitter, type /*, values...*/) {
      var arr = getHandlers(emitter, type);
      if (!arr.length) { return }
      var args = Array.prototype.slice.call(arguments, 2), list;
      if (operationGroup) {
        list = operationGroup.delayedCallbacks;
      } else if (orphanDelayedCallbacks) {
        list = orphanDelayedCallbacks;
      } else {
        list = orphanDelayedCallbacks = [];
        setTimeout(fireOrphanDelayed, 0);
      }
      var loop = function ( i ) {
        list.push(function () { return arr[i].apply(null, args); });
      };

      for (var i = 0; i < arr.length; ++i)
        { loop( i ); }
    }

    function fireOrphanDelayed() {
      var delayed = orphanDelayedCallbacks;
      orphanDelayedCallbacks = null;
      for (var i = 0; i < delayed.length; ++i) { delayed[i](); }
    }

    // When an aspect of a line changes, a string is added to
    // lineView.changes. This updates the relevant part of the line's
    // DOM structure.
    function updateLineForChanges(cm, lineView, lineN, dims) {
      for (var j = 0; j < lineView.changes.length; j++) {
        var type = lineView.changes[j];
        if (type == "text") { updateLineText(cm, lineView); }
        else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims); }
        else if (type == "class") { updateLineClasses(cm, lineView); }
        else if (type == "widget") { updateLineWidgets(cm, lineView, dims); }
      }
      lineView.changes = null;
    }

    // Lines with gutter elements, widgets or a background class need to
    // be wrapped, and have the extra elements added to the wrapper div
    function ensureLineWrapped(lineView) {
      if (lineView.node == lineView.text) {
        lineView.node = elt("div", null, null, "position: relative");
        if (lineView.text.parentNode)
          { lineView.text.parentNode.replaceChild(lineView.node, lineView.text); }
        lineView.node.appendChild(lineView.text);
        if (ie && ie_version < 8) { lineView.node.style.zIndex = 2; }
      }
      return lineView.node
    }

    function updateLineBackground(cm, lineView) {
      var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
      if (cls) { cls += " CodeMirror-linebackground"; }
      if (lineView.background) {
        if (cls) { lineView.background.className = cls; }
        else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
      } else if (cls) {
        var wrap = ensureLineWrapped(lineView);
        lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
        cm.display.input.setUneditable(lineView.background);
      }
    }

    // Wrapper around buildLineContent which will reuse the structure
    // in display.externalMeasured when possible.
    function getLineContent(cm, lineView) {
      var ext = cm.display.externalMeasured;
      if (ext && ext.line == lineView.line) {
        cm.display.externalMeasured = null;
        lineView.measure = ext.measure;
        return ext.built
      }
      return buildLineContent(cm, lineView)
    }

    // Redraw the line's text. Interacts with the background and text
    // classes because the mode may output tokens that influence these
    // classes.
    function updateLineText(cm, lineView) {
      var cls = lineView.text.className;
      var built = getLineContent(cm, lineView);
      if (lineView.text == lineView.node) { lineView.node = built.pre; }
      lineView.text.parentNode.replaceChild(built.pre, lineView.text);
      lineView.text = built.pre;
      if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
        lineView.bgClass = built.bgClass;
        lineView.textClass = built.textClass;
        updateLineClasses(cm, lineView);
      } else if (cls) {
        lineView.text.className = cls;
      }
    }

    function updateLineClasses(cm, lineView) {
      updateLineBackground(cm, lineView);
      if (lineView.line.wrapClass)
        { ensureLineWrapped(lineView).className = lineView.line.wrapClass; }
      else if (lineView.node != lineView.text)
        { lineView.node.className = ""; }
      var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
      lineView.text.className = textClass || "";
    }

    function updateLineGutter(cm, lineView, lineN, dims) {
      if (lineView.gutter) {
        lineView.node.removeChild(lineView.gutter);
        lineView.gutter = null;
      }
      if (lineView.gutterBackground) {
        lineView.node.removeChild(lineView.gutterBackground);
        lineView.gutterBackground = null;
      }
      if (lineView.line.gutterClass) {
        var wrap = ensureLineWrapped(lineView);
        lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
                                        ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"));
        cm.display.input.setUneditable(lineView.gutterBackground);
        wrap.insertBefore(lineView.gutterBackground, lineView.text);
      }
      var markers = lineView.line.gutterMarkers;
      if (cm.options.lineNumbers || markers) {
        var wrap$1 = ensureLineWrapped(lineView);
        var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"));
        cm.display.input.setUneditable(gutterWrap);
        wrap$1.insertBefore(gutterWrap, lineView.text);
        if (lineView.line.gutterClass)
          { gutterWrap.className += " " + lineView.line.gutterClass; }
        if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
          { lineView.lineNumber = gutterWrap.appendChild(
            elt("div", lineNumberFor(cm.options, lineN),
                "CodeMirror-linenumber CodeMirror-gutter-elt",
                ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))); }
        if (markers) { for (var k = 0; k < cm.display.gutterSpecs.length; ++k) {
          var id = cm.display.gutterSpecs[k].className, found = markers.hasOwnProperty(id) && markers[id];
          if (found)
            { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
                                       ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))); }
        } }
      }
    }

    function updateLineWidgets(cm, lineView, dims) {
      if (lineView.alignable) { lineView.alignable = null; }
      var isWidget = classTest("CodeMirror-linewidget");
      for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
        next = node.nextSibling;
        if (isWidget.test(node.className)) { lineView.node.removeChild(node); }
      }
      insertLineWidgets(cm, lineView, dims);
    }

    // Build a line's DOM representation from scratch
    function buildLineElement(cm, lineView, lineN, dims) {
      var built = getLineContent(cm, lineView);
      lineView.text = lineView.node = built.pre;
      if (built.bgClass) { lineView.bgClass = built.bgClass; }
      if (built.textClass) { lineView.textClass = built.textClass; }

      updateLineClasses(cm, lineView);
      updateLineGutter(cm, lineView, lineN, dims);
      insertLineWidgets(cm, lineView, dims);
      return lineView.node
    }

    // A lineView may contain multiple logical lines (when merged by
    // collapsed spans). The widgets for all of them need to be drawn.
    function insertLineWidgets(cm, lineView, dims) {
      insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
      if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
        { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false); } }
    }

    function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
      if (!line.widgets) { return }
      var wrap = ensureLineWrapped(lineView);
      for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
        var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget" + (widget.className ? " " + widget.className : ""));
        if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true"); }
        positionLineWidget(widget, node, lineView, dims);
        cm.display.input.setUneditable(node);
        if (allowAbove && widget.above)
          { wrap.insertBefore(node, lineView.gutter || lineView.text); }
        else
          { wrap.appendChild(node); }
        signalLater(widget, "redraw");
      }
    }

    function positionLineWidget(widget, node, lineView, dims) {
      if (widget.noHScroll) {
    (lineView.alignable || (lineView.alignable = [])).push(node);
        var width = dims.wrapperWidth;
        node.style.left = dims.fixedPos + "px";
        if (!widget.coverGutter) {
          width -= dims.gutterTotalWidth;
          node.style.paddingLeft = dims.gutterTotalWidth + "px";
        }
        node.style.width = width + "px";
      }
      if (widget.coverGutter) {
        node.style.zIndex = 5;
        node.style.position = "relative";
        if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px"; }
      }
    }

    function widgetHeight(widget) {
      if (widget.height != null) { return widget.height }
      var cm = widget.doc.cm;
      if (!cm) { return 0 }
      if (!contains(document.body, widget.node)) {
        var parentStyle = "position: relative;";
        if (widget.coverGutter)
          { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;"; }
        if (widget.noHScroll)
          { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;"; }
        removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
      }
      return widget.height = widget.node.parentNode.offsetHeight
    }

    // Return true when the given mouse event happened in a widget
    function eventInWidget(display, e) {
      for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
        if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
            (n.parentNode == display.sizer && n != display.mover))
          { return true }
      }
    }

    // POSITION MEASUREMENT

    function paddingTop(display) {return display.lineSpace.offsetTop}
    function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
    function paddingH(display) {
      if (display.cachedPaddingH) { return display.cachedPaddingH }
      var e = removeChildrenAndAdd(display.measure, elt("pre", "x", "CodeMirror-line-like"));
      var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
      var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
      if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data; }
      return data
    }

    function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
    function displayWidth(cm) {
      return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
    }
    function displayHeight(cm) {
      return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
    }

    // Ensure the lineView.wrapping.heights array is populated. This is
    // an array of bottom offsets for the lines that make up a drawn
    // line. When lineWrapping is on, there might be more than one
    // height.
    function ensureLineHeights(cm, lineView, rect) {
      var wrapping = cm.options.lineWrapping;
      var curWidth = wrapping && displayWidth(cm);
      if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
        var heights = lineView.measure.heights = [];
        if (wrapping) {
          lineView.measure.width = curWidth;
          var rects = lineView.text.firstChild.getClientRects();
          for (var i = 0; i < rects.length - 1; i++) {
            var cur = rects[i], next = rects[i + 1];
            if (Math.abs(cur.bottom - next.bottom) > 2)
              { heights.push((cur.bottom + next.top) / 2 - rect.top); }
          }
        }
        heights.push(rect.bottom - rect.top);
      }
    }

    // Find a line map (mapping character offsets to text nodes) and a
    // measurement cache for the given line number. (A line view might
    // contain multiple lines when collapsed ranges are present.)
    function mapFromLineView(lineView, line, lineN) {
      if (lineView.line == line)
        { return {map: lineView.measure.map, cache: lineView.measure.cache} }
      for (var i = 0; i < lineView.rest.length; i++)
        { if (lineView.rest[i] == line)
          { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
      for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
        { if (lineNo(lineView.rest[i$1]) > lineN)
          { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
    }

    // Render a line into the hidden node display.externalMeasured. Used
    // when measurement is needed for a line that's not in the viewport.
    function updateExternalMeasurement(cm, line) {
      line = visualLine(line);
      var lineN = lineNo(line);
      var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
      view.lineN = lineN;
      var built = view.built = buildLineContent(cm, view);
      view.text = built.pre;
      removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
      return view
    }

    // Get a {top, bottom, left, right} box (in line-local coordinates)
    // for a given character.
    function measureChar(cm, line, ch, bias) {
      return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
    }

    // Find a line view that corresponds to the given line number.
    function findViewForLine(cm, lineN) {
      if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
        { return cm.display.view[findViewIndex(cm, lineN)] }
      var ext = cm.display.externalMeasured;
      if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
        { return ext }
    }

    // Measurement can be split in two steps, the set-up work that
    // applies to the whole line, and the measurement of the actual
    // character. Functions like coordsChar, that need to do a lot of
    // measurements in a row, can thus ensure that the set-up work is
    // only done once.
    function prepareMeasureForLine(cm, line) {
      var lineN = lineNo(line);
      var view = findViewForLine(cm, lineN);
      if (view && !view.text) {
        view = null;
      } else if (view && view.changes) {
        updateLineForChanges(cm, view, lineN, getDimensions(cm));
        cm.curOp.forceUpdate = true;
      }
      if (!view)
        { view = updateExternalMeasurement(cm, line); }

      var info = mapFromLineView(view, line, lineN);
      return {
        line: line, view: view, rect: null,
        map: info.map, cache: info.cache, before: info.before,
        hasHeights: false
      }
    }

    // Given a prepared measurement object, measures the position of an
    // actual character (or fetches it from the cache).
    function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
      if (prepared.before) { ch = -1; }
      var key = ch + (bias || ""), found;
      if (prepared.cache.hasOwnProperty(key)) {
        found = prepared.cache[key];
      } else {
        if (!prepared.rect)
          { prepared.rect = prepared.view.text.getBoundingClientRect(); }
        if (!prepared.hasHeights) {
          ensureLineHeights(cm, prepared.view, prepared.rect);
          prepared.hasHeights = true;
        }
        found = measureCharInner(cm, prepared, ch, bias);
        if (!found.bogus) { prepared.cache[key] = found; }
      }
      return {left: found.left, right: found.right,
              top: varHeight ? found.rtop : found.top,
              bottom: varHeight ? found.rbottom : found.bottom}
    }

    var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

    function nodeAndOffsetInLineMap(map, ch, bias) {
      var node, start, end, collapse, mStart, mEnd;
      // First, search the line map for the text node corresponding to,
      // or closest to, the target character.
      for (var i = 0; i < map.length; i += 3) {
        mStart = map[i];
        mEnd = map[i + 1];
        if (ch < mStart) {
          start = 0; end = 1;
          collapse = "left";
        } else if (ch < mEnd) {
          start = ch - mStart;
          end = start + 1;
        } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
          end = mEnd - mStart;
          start = end - 1;
          if (ch >= mEnd) { collapse = "right"; }
        }
        if (start != null) {
          node = map[i + 2];
          if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
            { collapse = bias; }
          if (bias == "left" && start == 0)
            { while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
              node = map[(i -= 3) + 2];
              collapse = "left";
            } }
          if (bias == "right" && start == mEnd - mStart)
            { while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
              node = map[(i += 3) + 2];
              collapse = "right";
            } }
          break
        }
      }
      return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
    }

    function getUsefulRect(rects, bias) {
      var rect = nullRect;
      if (bias == "left") { for (var i = 0; i < rects.length; i++) {
        if ((rect = rects[i]).left != rect.right) { break }
      } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
        if ((rect = rects[i$1]).left != rect.right) { break }
      } }
      return rect
    }

    function measureCharInner(cm, prepared, ch, bias) {
      var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
      var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

      var rect;
      if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
        for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
          while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start; }
          while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end; }
          if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
            { rect = node.parentNode.getBoundingClientRect(); }
          else
            { rect = getUsefulRect(range(node, start, end).getClientRects(), bias); }
          if (rect.left || rect.right || start == 0) { break }
          end = start;
          start = start - 1;
          collapse = "right";
        }
        if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect); }
      } else { // If it is a widget, simply get the box for the whole widget.
        if (start > 0) { collapse = bias = "right"; }
        var rects;
        if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
          { rect = rects[bias == "right" ? rects.length - 1 : 0]; }
        else
          { rect = node.getBoundingClientRect(); }
      }
      if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
        var rSpan = node.parentNode.getClientRects()[0];
        if (rSpan)
          { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom}; }
        else
          { rect = nullRect; }
      }

      var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
      var mid = (rtop + rbot) / 2;
      var heights = prepared.view.measure.heights;
      var i = 0;
      for (; i < heights.length - 1; i++)
        { if (mid < heights[i]) { break } }
      var top = i ? heights[i - 1] : 0, bot = heights[i];
      var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
                    right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
                    top: top, bottom: bot};
      if (!rect.left && !rect.right) { result.bogus = true; }
      if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

      return result
    }

    // Work around problem with bounding client rects on ranges being
    // returned incorrectly when zoomed on IE10 and below.
    function maybeUpdateRectForZooming(measure, rect) {
      if (!window.screen || screen.logicalXDPI == null ||
          screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
        { return rect }
      var scaleX = screen.logicalXDPI / screen.deviceXDPI;
      var scaleY = screen.logicalYDPI / screen.deviceYDPI;
      return {left: rect.left * scaleX, right: rect.right * scaleX,
              top: rect.top * scaleY, bottom: rect.bottom * scaleY}
    }

    function clearLineMeasurementCacheFor(lineView) {
      if (lineView.measure) {
        lineView.measure.cache = {};
        lineView.measure.heights = null;
        if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
          { lineView.measure.caches[i] = {}; } }
      }
    }

    function clearLineMeasurementCache(cm) {
      cm.display.externalMeasure = null;
      removeChildren(cm.display.lineMeasure);
      for (var i = 0; i < cm.display.view.length; i++)
        { clearLineMeasurementCacheFor(cm.display.view[i]); }
    }

    function clearCaches(cm) {
      clearLineMeasurementCache(cm);
      cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
      if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true; }
      cm.display.lineNumChars = null;
    }

    function pageScrollX() {
      // Work around https://bugs.chromium.org/p/chromium/issues/detail?id=489206
      // which causes page_Offset and bounding client rects to use
      // different reference viewports and invalidate our calculations.
      if (chrome && android) { return -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) }
      return window.pageXOffset || (document.documentElement || document.body).scrollLeft
    }
    function pageScrollY() {
      if (chrome && android) { return -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) }
      return window.pageYOffset || (document.documentElement || document.body).scrollTop
    }

    function widgetTopHeight(lineObj) {
      var height = 0;
      if (lineObj.widgets) { for (var i = 0; i < lineObj.widgets.length; ++i) { if (lineObj.widgets[i].above)
        { height += widgetHeight(lineObj.widgets[i]); } } }
      return height
    }

    // Converts a {top, bottom, left, right} box from line-local
    // coordinates into another coordinate system. Context may be one of
    // "line", "div" (display.lineDiv), "local"./null (editor), "window",
    // or "page".
    function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
      if (!includeWidgets) {
        var height = widgetTopHeight(lineObj);
        rect.top += height; rect.bottom += height;
      }
      if (context == "line") { return rect }
      if (!context) { context = "local"; }
      var yOff = heightAtLine(lineObj);
      if (context == "local") { yOff += paddingTop(cm.display); }
      else { yOff -= cm.display.viewOffset; }
      if (context == "page" || context == "window") {
        var lOff = cm.display.lineSpace.getBoundingClientRect();
        yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
        var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
        rect.left += xOff; rect.right += xOff;
      }
      rect.top += yOff; rect.bottom += yOff;
      return rect
    }

    // Coverts a box from "div" coords to another coordinate system.
    // Context may be "window", "page", "div", or "local"./null.
    function fromCoordSystem(cm, coords, context) {
      if (context == "div") { return coords }
      var left = coords.left, top = coords.top;
      // First move into "page" coordinate system
      if (context == "page") {
        left -= pageScrollX();
        top -= pageScrollY();
      } else if (context == "local" || !context) {
        var localBox = cm.display.sizer.getBoundingClientRect();
        left += localBox.left;
        top += localBox.top;
      }

      var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
      return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
    }

    function charCoords(cm, pos, context, lineObj, bias) {
      if (!lineObj) { lineObj = getLine(cm.doc, pos.line); }
      return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
    }

    // Returns a box for a given cursor position, which may have an
    // 'other' property containing the position of the secondary cursor
    // on a bidi boundary.
    // A cursor Pos(line, char, "before") is on the same visual line as `char - 1`
    // and after `char - 1` in writing order of `char - 1`
    // A cursor Pos(line, char, "after") is on the same visual line as `char`
    // and before `char` in writing order of `char`
    // Examples (upper-case letters are RTL, lower-case are LTR):
    //     Pos(0, 1, ...)
    //     before   after
    // ab     a|b     a|b
    // aB     a|B     aB|
    // Ab     |Ab     A|b
    // AB     B|A     B|A
    // Every position after the last character on a line is considered to stick
    // to the last character on the line.
    function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
      lineObj = lineObj || getLine(cm.doc, pos.line);
      if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
      function get(ch, right) {
        var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
        if (right) { m.left = m.right; } else { m.right = m.left; }
        return intoCoordSystem(cm, lineObj, m, context)
      }
      var order = getOrder(lineObj, cm.doc.direction), ch = pos.ch, sticky = pos.sticky;
      if (ch >= lineObj.text.length) {
        ch = lineObj.text.length;
        sticky = "before";
      } else if (ch <= 0) {
        ch = 0;
        sticky = "after";
      }
      if (!order) { return get(sticky == "before" ? ch - 1 : ch, sticky == "before") }

      function getBidi(ch, partPos, invert) {
        var part = order[partPos], right = part.level == 1;
        return get(invert ? ch - 1 : ch, right != invert)
      }
      var partPos = getBidiPartAt(order, ch, sticky);
      var other = bidiOther;
      var val = getBidi(ch, partPos, sticky == "before");
      if (other != null) { val.other = getBidi(ch, other, sticky != "before"); }
      return val
    }

    // Used to cheaply estimate the coordinates for a position. Used for
    // intermediate scroll updates.
    function estimateCoords(cm, pos) {
      var left = 0;
      pos = clipPos(cm.doc, pos);
      if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch; }
      var lineObj = getLine(cm.doc, pos.line);
      var top = heightAtLine(lineObj) + paddingTop(cm.display);
      return {left: left, right: left, top: top, bottom: top + lineObj.height}
    }

    // Positions returned by coordsChar contain some extra information.
    // xRel is the relative x position of the input coordinates compared
    // to the found position (so xRel > 0 means the coordinates are to
    // the right of the character position, for example). When outside
    // is true, that means the coordinates lie outside the line's
    // vertical range.
    function PosWithInfo(line, ch, sticky, outside, xRel) {
      var pos = Pos(line, ch, sticky);
      pos.xRel = xRel;
      if (outside) { pos.outside = outside; }
      return pos
    }

    // Compute the character position closest to the given coordinates.
    // Input must be lineSpace-local ("div" coordinate system).
    function coordsChar(cm, x, y) {
      var doc = cm.doc;
      y += cm.display.viewOffset;
      if (y < 0) { return PosWithInfo(doc.first, 0, null, -1, -1) }
      var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
      if (lineN > last)
        { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, null, 1, 1) }
      if (x < 0) { x = 0; }

      var lineObj = getLine(doc, lineN);
      for (;;) {
        var found = coordsCharInner(cm, lineObj, lineN, x, y);
        var collapsed = collapsedSpanAround(lineObj, found.ch + (found.xRel > 0 || found.outside > 0 ? 1 : 0));
        if (!collapsed) { return found }
        var rangeEnd = collapsed.find(1);
        if (rangeEnd.line == lineN) { return rangeEnd }
        lineObj = getLine(doc, lineN = rangeEnd.line);
      }
    }

    function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
      y -= widgetTopHeight(lineObj);
      var end = lineObj.text.length;
      var begin = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y; }, end, 0);
      end = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch).top > y; }, begin, end);
      return {begin: begin, end: end}
    }

    function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
      if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
      var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
      return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop)
    }

    // Returns true if the given side of a box is after the given
    // coordinates, in top-to-bottom, left-to-right order.
    function boxIsAfter(box, x, y, left) {
      return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x
    }

    function coordsCharInner(cm, lineObj, lineNo, x, y) {
      // Move y into line-local coordinate space
      y -= heightAtLine(lineObj);
      var preparedMeasure = prepareMeasureForLine(cm, lineObj);
      // When directly calling `measureCharPrepared`, we have to adjust
      // for the widgets at this line.
      var widgetHeight = widgetTopHeight(lineObj);
      var begin = 0, end = lineObj.text.length, ltr = true;

      var order = getOrder(lineObj, cm.doc.direction);
      // If the line isn't plain left-to-right text, first figure out
      // which bidi section the coordinates fall into.
      if (order) {
        var part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)
                     (cm, lineObj, lineNo, preparedMeasure, order, x, y);
        ltr = part.level != 1;
        // The awkward -1 offsets are needed because findFirst (called
        // on these below) will treat its first bound as inclusive,
        // second as exclusive, but we want to actually address the
        // characters in the part's range
        begin = ltr ? part.from : part.to - 1;
        end = ltr ? part.to : part.from - 1;
      }

      // A binary search to find the first character whose bounding box
      // starts after the coordinates. If we run across any whose box wrap
      // the coordinates, store that.
      var chAround = null, boxAround = null;
      var ch = findFirst(function (ch) {
        var box = measureCharPrepared(cm, preparedMeasure, ch);
        box.top += widgetHeight; box.bottom += widgetHeight;
        if (!boxIsAfter(box, x, y, false)) { return false }
        if (box.top <= y && box.left <= x) {
          chAround = ch;
          boxAround = box;
        }
        return true
      }, begin, end);

      var baseX, sticky, outside = false;
      // If a box around the coordinates was found, use that
      if (boxAround) {
        // Distinguish coordinates nearer to the left or right side of the box
        var atLeft = x - boxAround.left < boxAround.right - x, atStart = atLeft == ltr;
        ch = chAround + (atStart ? 0 : 1);
        sticky = atStart ? "after" : "before";
        baseX = atLeft ? boxAround.left : boxAround.right;
      } else {
        // (Adjust for extended bound, if necessary.)
        if (!ltr && (ch == end || ch == begin)) { ch++; }
        // To determine which side to associate with, get the box to the
        // left of the character and compare it's vertical position to the
        // coordinates
        sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" :
          (measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight <= y) == ltr ?
          "after" : "before";
        // Now get accurate coordinates for this place, in order to get a
        // base X position
        var coords = cursorCoords(cm, Pos(lineNo, ch, sticky), "line", lineObj, preparedMeasure);
        baseX = coords.left;
        outside = y < coords.top ? -1 : y >= coords.bottom ? 1 : 0;
      }

      ch = skipExtendingChars(lineObj.text, ch, 1);
      return PosWithInfo(lineNo, ch, sticky, outside, x - baseX)
    }

    function coordsBidiPart(cm, lineObj, lineNo, preparedMeasure, order, x, y) {
      // Bidi parts are sorted left-to-right, and in a non-line-wrapping
      // situation, we can take this ordering to correspond to the visual
      // ordering. This finds the first part whose end is after the given
      // coordinates.
      var index = findFirst(function (i) {
        var part = order[i], ltr = part.level != 1;
        return boxIsAfter(cursorCoords(cm, Pos(lineNo, ltr ? part.to : part.from, ltr ? "before" : "after"),
                                       "line", lineObj, preparedMeasure), x, y, true)
      }, 0, order.length - 1);
      var part = order[index];
      // If this isn't the first part, the part's start is also after
      // the coordinates, and the coordinates aren't on the same line as
      // that start, move one part back.
      if (index > 0) {
        var ltr = part.level != 1;
        var start = cursorCoords(cm, Pos(lineNo, ltr ? part.from : part.to, ltr ? "after" : "before"),
                                 "line", lineObj, preparedMeasure);
        if (boxIsAfter(start, x, y, true) && start.top > y)
          { part = order[index - 1]; }
      }
      return part
    }

    function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
      // In a wrapped line, rtl text on wrapping boundaries can do things
      // that don't correspond to the ordering in our `order` array at
      // all, so a binary search doesn't work, and we want to return a
      // part that only spans one line so that the binary search in
      // coordsCharInner is safe. As such, we first find the extent of the
      // wrapped line, and then do a flat search in which we discard any
      // spans that aren't on the line.
      var ref = wrappedLineExtent(cm, lineObj, preparedMeasure, y);
      var begin = ref.begin;
      var end = ref.end;
      if (/\s/.test(lineObj.text.charAt(end - 1))) { end--; }
      var part = null, closestDist = null;
      for (var i = 0; i < order.length; i++) {
        var p = order[i];
        if (p.from >= end || p.to <= begin) { continue }
        var ltr = p.level != 1;
        var endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right;
        // Weigh against spans ending before this, so that they are only
        // picked if nothing ends after
        var dist = endX < x ? x - endX + 1e9 : endX - x;
        if (!part || closestDist > dist) {
          part = p;
          closestDist = dist;
        }
      }
      if (!part) { part = order[order.length - 1]; }
      // Clip the part to the wrapped line.
      if (part.from < begin) { part = {from: begin, to: part.to, level: part.level}; }
      if (part.to > end) { part = {from: part.from, to: end, level: part.level}; }
      return part
    }

    var measureText;
    // Compute the default text height.
    function textHeight(display) {
      if (display.cachedTextHeight != null) { return display.cachedTextHeight }
      if (measureText == null) {
        measureText = elt("pre", null, "CodeMirror-line-like");
        // Measure a bunch of lines, for browsers that compute
        // fractional heights.
        for (var i = 0; i < 49; ++i) {
          measureText.appendChild(document.createTextNode("x"));
          measureText.appendChild(elt("br"));
        }
        measureText.appendChild(document.createTextNode("x"));
      }
      removeChildrenAndAdd(display.measure, measureText);
      var height = measureText.offsetHeight / 50;
      if (height > 3) { display.cachedTextHeight = height; }
      removeChildren(display.measure);
      return height || 1
    }

    // Compute the default character width.
    function charWidth(display) {
      if (display.cachedCharWidth != null) { return display.cachedCharWidth }
      var anchor = elt("span", "xxxxxxxxxx");
      var pre = elt("pre", [anchor], "CodeMirror-line-like");
      removeChildrenAndAdd(display.measure, pre);
      var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
      if (width > 2) { display.cachedCharWidth = width; }
      return width || 10
    }

    // Do a bulk-read of the DOM positions and sizes needed to draw the
    // view, so that we don't interleave reading and writing to the DOM.
    function getDimensions(cm) {
      var d = cm.display, left = {}, width = {};
      var gutterLeft = d.gutters.clientLeft;
      for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
        var id = cm.display.gutterSpecs[i].className;
        left[id] = n.offsetLeft + n.clientLeft + gutterLeft;
        width[id] = n.clientWidth;
      }
      return {fixedPos: compensateForHScroll(d),
              gutterTotalWidth: d.gutters.offsetWidth,
              gutterLeft: left,
              gutterWidth: width,
              wrapperWidth: d.wrapper.clientWidth}
    }

    // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
    // but using getBoundingClientRect to get a sub-pixel-accurate
    // result.
    function compensateForHScroll(display) {
      return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
    }

    // Returns a function that estimates the height of a line, to use as
    // first approximation until the line becomes visible (and is thus
    // properly measurable).
    function estimateHeight(cm) {
      var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
      var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
      return function (line) {
        if (lineIsHidden(cm.doc, line)) { return 0 }

        var widgetsHeight = 0;
        if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
          if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height; }
        } }

        if (wrapping)
          { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
        else
          { return widgetsHeight + th }
      }
    }

    function estimateLineHeights(cm) {
      var doc = cm.doc, est = estimateHeight(cm);
      doc.iter(function (line) {
        var estHeight = est(line);
        if (estHeight != line.height) { updateLineHeight(line, estHeight); }
      });
    }

    // Given a mouse event, find the corresponding position. If liberal
    // is false, it checks whether a gutter or scrollbar was clicked,
    // and returns null if it was. forRect is used by rectangular
    // selections, and tries to estimate a character position even for
    // coordinates beyond the right of the text.
    function posFromMouse(cm, e, liberal, forRect) {
      var display = cm.display;
      if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

      var x, y, space = display.lineSpace.getBoundingClientRect();
      // Fails unpredictably on IE[67] when mouse is dragged around quickly.
      try { x = e.clientX - space.left; y = e.clientY - space.top; }
      catch (e$1) { return null }
      var coords = coordsChar(cm, x, y), line;
      if (forRect && coords.xRel > 0 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
        var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
        coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
      }
      return coords
    }

    // Find the view element corresponding to a given line. Return null
    // when the line isn't visible.
    function findViewIndex(cm, n) {
      if (n >= cm.display.viewTo) { return null }
      n -= cm.display.viewFrom;
      if (n < 0) { return null }
      var view = cm.display.view;
      for (var i = 0; i < view.length; i++) {
        n -= view[i].size;
        if (n < 0) { return i }
      }
    }

    // Updates the display.view data structure for a given change to the
    // document. From and to are in pre-change coordinates. Lendiff is
    // the amount of lines added or subtracted by the change. This is
    // used for changes that span multiple lines, or change the way
    // lines are divided into visual lines. regLineChange (below)
    // registers single-line changes.
    function regChange(cm, from, to, lendiff) {
      if (from == null) { from = cm.doc.first; }
      if (to == null) { to = cm.doc.first + cm.doc.size; }
      if (!lendiff) { lendiff = 0; }

      var display = cm.display;
      if (lendiff && to < display.viewTo &&
          (display.updateLineNumbers == null || display.updateLineNumbers > from))
        { display.updateLineNumbers = from; }

      cm.curOp.viewChanged = true;

      if (from >= display.viewTo) { // Change after
        if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
          { resetView(cm); }
      } else if (to <= display.viewFrom) { // Change before
        if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
          resetView(cm);
        } else {
          display.viewFrom += lendiff;
          display.viewTo += lendiff;
        }
      } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
        resetView(cm);
      } else if (from <= display.viewFrom) { // Top overlap
        var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
        if (cut) {
          display.view = display.view.slice(cut.index);
          display.viewFrom = cut.lineN;
          display.viewTo += lendiff;
        } else {
          resetView(cm);
        }
      } else if (to >= display.viewTo) { // Bottom overlap
        var cut$1 = viewCuttingPoint(cm, from, from, -1);
        if (cut$1) {
          display.view = display.view.slice(0, cut$1.index);
          display.viewTo = cut$1.lineN;
        } else {
          resetView(cm);
        }
      } else { // Gap in the middle
        var cutTop = viewCuttingPoint(cm, from, from, -1);
        var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
        if (cutTop && cutBot) {
          display.view = display.view.slice(0, cutTop.index)
            .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
            .concat(display.view.slice(cutBot.index));
          display.viewTo += lendiff;
        } else {
          resetView(cm);
        }
      }

      var ext = display.externalMeasured;
      if (ext) {
        if (to < ext.lineN)
          { ext.lineN += lendiff; }
        else if (from < ext.lineN + ext.size)
          { display.externalMeasured = null; }
      }
    }

    // Register a change to a single line. Type must be one of "text",
    // "gutter", "class", "widget"
    function regLineChange(cm, line, type) {
      cm.curOp.viewChanged = true;
      var display = cm.display, ext = cm.display.externalMeasured;
      if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
        { display.externalMeasured = null; }

      if (line < display.viewFrom || line >= display.viewTo) { return }
      var lineView = display.view[findViewIndex(cm, line)];
      if (lineView.node == null) { return }
      var arr = lineView.changes || (lineView.changes = []);
      if (indexOf(arr, type) == -1) { arr.push(type); }
    }

    // Clear the view.
    function resetView(cm) {
      cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
      cm.display.view = [];
      cm.display.viewOffset = 0;
    }

    function viewCuttingPoint(cm, oldN, newN, dir) {
      var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
      if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
        { return {index: index, lineN: newN} }
      var n = cm.display.viewFrom;
      for (var i = 0; i < index; i++)
        { n += view[i].size; }
      if (n != oldN) {
        if (dir > 0) {
          if (index == view.length - 1) { return null }
          diff = (n + view[index].size) - oldN;
          index++;
        } else {
          diff = n - oldN;
        }
        oldN += diff; newN += diff;
      }
      while (visualLineNo(cm.doc, newN) != newN) {
        if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
        newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
        index += dir;
      }
      return {index: index, lineN: newN}
    }

    // Force the view to cover a given range, adding empty view element
    // or clipping off existing ones as needed.
    function adjustView(cm, from, to) {
      var display = cm.display, view = display.view;
      if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
        display.view = buildViewArray(cm, from, to);
        display.viewFrom = from;
      } else {
        if (display.viewFrom > from)
          { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view); }
        else if (display.viewFrom < from)
          { display.view = display.view.slice(findViewIndex(cm, from)); }
        display.viewFrom = from;
        if (display.viewTo < to)
          { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)); }
        else if (display.viewTo > to)
          { display.view = display.view.slice(0, findViewIndex(cm, to)); }
      }
      display.viewTo = to;
    }

    // Count the number of lines in the view whose DOM representation is
    // out of date (or nonexistent).
    function countDirtyView(cm) {
      var view = cm.display.view, dirty = 0;
      for (var i = 0; i < view.length; i++) {
        var lineView = view[i];
        if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty; }
      }
      return dirty
    }

    function updateSelection(cm) {
      cm.display.input.showSelection(cm.display.input.prepareSelection());
    }

    function prepareSelection(cm, primary) {
      if ( primary === void 0 ) { primary = true; }

      var doc = cm.doc, result = {};
      var curFragment = result.cursors = document.createDocumentFragment();
      var selFragment = result.selection = document.createDocumentFragment();

      for (var i = 0; i < doc.sel.ranges.length; i++) {
        if (!primary && i == doc.sel.primIndex) { continue }
        var range = doc.sel.ranges[i];
        if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) { continue }
        var collapsed = range.empty();
        if (collapsed || cm.options.showCursorWhenSelecting)
          { drawSelectionCursor(cm, range.head, curFragment); }
        if (!collapsed)
          { drawSelectionRange(cm, range, selFragment); }
      }
      return result
    }

    // Draws a cursor for the given range
    function drawSelectionCursor(cm, head, output) {
      var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

      var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
      cursor.style.left = pos.left + "px";
      cursor.style.top = pos.top + "px";
      cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

      if (pos.other) {
        // Secondary cursor, shown when on a 'jump' in bi-directional text
        var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
        otherCursor.style.display = "";
        otherCursor.style.left = pos.other.left + "px";
        otherCursor.style.top = pos.other.top + "px";
        otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
      }
    }

    function cmpCoords(a, b) { return a.top - b.top || a.left - b.left }

    // Draws the given range as a highlighted selection
    function drawSelectionRange(cm, range, output) {
      var display = cm.display, doc = cm.doc;
      var fragment = document.createDocumentFragment();
      var padding = paddingH(cm.display), leftSide = padding.left;
      var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
      var docLTR = doc.direction == "ltr";

      function add(left, top, width, bottom) {
        if (top < 0) { top = 0; }
        top = Math.round(top);
        bottom = Math.round(bottom);
        fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")));
      }

      function drawForLine(line, fromArg, toArg) {
        var lineObj = getLine(doc, line);
        var lineLen = lineObj.text.length;
        var start, end;
        function coords(ch, bias) {
          return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
        }

        function wrapX(pos, dir, side) {
          var extent = wrappedLineExtentChar(cm, lineObj, null, pos);
          var prop = (dir == "ltr") == (side == "after") ? "left" : "right";
          var ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1);
          return coords(ch, prop)[prop]
        }

        var order = getOrder(lineObj, doc.direction);
        iterateBidiSections(order, fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir, i) {
          var ltr = dir == "ltr";
          var fromPos = coords(from, ltr ? "left" : "right");
          var toPos = coords(to - 1, ltr ? "right" : "left");

          var openStart = fromArg == null && from == 0, openEnd = toArg == null && to == lineLen;
          var first = i == 0, last = !order || i == order.length - 1;
          if (toPos.top - fromPos.top <= 3) { // Single line
            var openLeft = (docLTR ? openStart : openEnd) && first;
            var openRight = (docLTR ? openEnd : openStart) && last;
            var left = openLeft ? leftSide : (ltr ? fromPos : toPos).left;
            var right = openRight ? rightSide : (ltr ? toPos : fromPos).right;
            add(left, fromPos.top, right - left, fromPos.bottom);
          } else { // Multiple lines
            var topLeft, topRight, botLeft, botRight;
            if (ltr) {
              topLeft = docLTR && openStart && first ? leftSide : fromPos.left;
              topRight = docLTR ? rightSide : wrapX(from, dir, "before");
              botLeft = docLTR ? leftSide : wrapX(to, dir, "after");
              botRight = docLTR && openEnd && last ? rightSide : toPos.right;
            } else {
              topLeft = !docLTR ? leftSide : wrapX(from, dir, "before");
              topRight = !docLTR && openStart && first ? rightSide : fromPos.right;
              botLeft = !docLTR && openEnd && last ? leftSide : toPos.left;
              botRight = !docLTR ? rightSide : wrapX(to, dir, "after");
            }
            add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom);
            if (fromPos.bottom < toPos.top) { add(leftSide, fromPos.bottom, null, toPos.top); }
            add(botLeft, toPos.top, botRight - botLeft, toPos.bottom);
          }

          if (!start || cmpCoords(fromPos, start) < 0) { start = fromPos; }
          if (cmpCoords(toPos, start) < 0) { start = toPos; }
          if (!end || cmpCoords(fromPos, end) < 0) { end = fromPos; }
          if (cmpCoords(toPos, end) < 0) { end = toPos; }
        });
        return {start: start, end: end}
      }

      var sFrom = range.from(), sTo = range.to();
      if (sFrom.line == sTo.line) {
        drawForLine(sFrom.line, sFrom.ch, sTo.ch);
      } else {
        var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
        var singleVLine = visualLine(fromLine) == visualLine(toLine);
        var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
        var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
        if (singleVLine) {
          if (leftEnd.top < rightStart.top - 2) {
            add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
            add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
          } else {
            add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
          }
        }
        if (leftEnd.bottom < rightStart.top)
          { add(leftSide, leftEnd.bottom, null, rightStart.top); }
      }

      output.appendChild(fragment);
    }

    // Cursor-blinking
    function restartBlink(cm) {
      if (!cm.state.focused) { return }
      var display = cm.display;
      clearInterval(display.blinker);
      var on = true;
      display.cursorDiv.style.visibility = "";
      if (cm.options.cursorBlinkRate > 0)
        { display.blinker = setInterval(function () {
          if (!cm.hasFocus()) { onBlur(cm); }
          display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden";
        }, cm.options.cursorBlinkRate); }
      else if (cm.options.cursorBlinkRate < 0)
        { display.cursorDiv.style.visibility = "hidden"; }
    }

    function ensureFocus(cm) {
      if (!cm.hasFocus()) {
        cm.display.input.focus();
        if (!cm.state.focused) { onFocus(cm); }
      }
    }

    function delayBlurEvent(cm) {
      cm.state.delayingBlurEvent = true;
      setTimeout(function () { if (cm.state.delayingBlurEvent) {
        cm.state.delayingBlurEvent = false;
        if (cm.state.focused) { onBlur(cm); }
      } }, 100);
    }

    function onFocus(cm, e) {
      if (cm.state.delayingBlurEvent && !cm.state.draggingText) { cm.state.delayingBlurEvent = false; }

      if (cm.options.readOnly == "nocursor") { return }
      if (!cm.state.focused) {
        signal(cm, "focus", cm, e);
        cm.state.focused = true;
        addClass(cm.display.wrapper, "CodeMirror-focused");
        // This test prevents this from firing when a context
        // menu is closed (since the input reset would kill the
        // select-all detection hack)
        if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
          cm.display.input.reset();
          if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20); } // Issue #1730
        }
        cm.display.input.receivedFocus();
      }
      restartBlink(cm);
    }
    function onBlur(cm, e) {
      if (cm.state.delayingBlurEvent) { return }

      if (cm.state.focused) {
        signal(cm, "blur", cm, e);
        cm.state.focused = false;
        rmClass(cm.display.wrapper, "CodeMirror-focused");
      }
      clearInterval(cm.display.blinker);
      setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false; } }, 150);
    }

    // Read the actual heights of the rendered lines, and update their
    // stored heights to match.
    function updateHeightsInViewport(cm) {
      var display = cm.display;
      var prevBottom = display.lineDiv.offsetTop;
      for (var i = 0; i < display.view.length; i++) {
        var cur = display.view[i], wrapping = cm.options.lineWrapping;
        var height = (void 0), width = 0;
        if (cur.hidden) { continue }
        if (ie && ie_version < 8) {
          var bot = cur.node.offsetTop + cur.node.offsetHeight;
          height = bot - prevBottom;
          prevBottom = bot;
        } else {
          var box = cur.node.getBoundingClientRect();
          height = box.bottom - box.top;
          // Check that lines don't extend past the right of the current
          // editor width
          if (!wrapping && cur.text.firstChild)
            { width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1; }
        }
        var diff = cur.line.height - height;
        if (diff > .005 || diff < -.005) {
          updateLineHeight(cur.line, height);
          updateWidgetHeight(cur.line);
          if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
            { updateWidgetHeight(cur.rest[j]); } }
        }
        if (width > cm.display.sizerWidth) {
          var chWidth = Math.ceil(width / charWidth(cm.display));
          if (chWidth > cm.display.maxLineLength) {
            cm.display.maxLineLength = chWidth;
            cm.display.maxLine = cur.line;
            cm.display.maxLineChanged = true;
          }
        }
      }
    }

    // Read and store the height of line widgets associated with the
    // given line.
    function updateWidgetHeight(line) {
      if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i) {
        var w = line.widgets[i], parent = w.node.parentNode;
        if (parent) { w.height = parent.offsetHeight; }
      } }
    }

    // Compute the lines that are visible in a given viewport (defaults
    // the the current scroll position). viewport may contain top,
    // height, and ensure (see op.scrollToPos) properties.
    function visibleLines(display, doc, viewport) {
      var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
      top = Math.floor(top - paddingTop(display));
      var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

      var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
      // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
      // forces those lines into the viewport (if possible).
      if (viewport && viewport.ensure) {
        var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
        if (ensureFrom < from) {
          from = ensureFrom;
          to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
        } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
          from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
          to = ensureTo;
        }
      }
      return {from: from, to: Math.max(to, from + 1)}
    }

    // SCROLLING THINGS INTO VIEW

    // If an editor sits on the top or bottom of the window, partially
    // scrolled out of view, this ensures that the cursor is visible.
    function maybeScrollWindow(cm, rect) {
      if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

      var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
      if (rect.top + box.top < 0) { doScroll = true; }
      else if (rect.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) { doScroll = false; }
      if (doScroll != null && !phantom) {
        var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (rect.left) + "px; width: " + (Math.max(2, rect.right - rect.left)) + "px;"));
        cm.display.lineSpace.appendChild(scrollNode);
        scrollNode.scrollIntoView(doScroll);
        cm.display.lineSpace.removeChild(scrollNode);
      }
    }

    // Scroll a given position into view (immediately), verifying that
    // it actually became visible (as line heights are accurately
    // measured, the position of something may 'drift' during drawing).
    function scrollPosIntoView(cm, pos, end, margin) {
      if (margin == null) { margin = 0; }
      var rect;
      if (!cm.options.lineWrapping && pos == end) {
        // Set pos and end to the cursor positions around the character pos sticks to
        // If pos.sticky == "before", that is around pos.ch - 1, otherwise around pos.ch
        // If pos == Pos(_, 0, "before"), pos and end are unchanged
        pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
        end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
      }
      for (var limit = 0; limit < 5; limit++) {
        var changed = false;
        var coords = cursorCoords(cm, pos);
        var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
        rect = {left: Math.min(coords.left, endCoords.left),
                top: Math.min(coords.top, endCoords.top) - margin,
                right: Math.max(coords.left, endCoords.left),
                bottom: Math.max(coords.bottom, endCoords.bottom) + margin};
        var scrollPos = calculateScrollPos(cm, rect);
        var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
        if (scrollPos.scrollTop != null) {
          updateScrollTop(cm, scrollPos.scrollTop);
          if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true; }
        }
        if (scrollPos.scrollLeft != null) {
          setScrollLeft(cm, scrollPos.scrollLeft);
          if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true; }
        }
        if (!changed) { break }
      }
      return rect
    }

    // Scroll a given set of coordinates into view (immediately).
    function scrollIntoView(cm, rect) {
      var scrollPos = calculateScrollPos(cm, rect);
      if (scrollPos.scrollTop != null) { updateScrollTop(cm, scrollPos.scrollTop); }
      if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft); }
    }

    // Calculate a new scroll position needed to scroll the given
    // rectangle into view. Returns an object with scrollTop and
    // scrollLeft properties. When these are undefined, the
    // vertical/horizontal position does not need to be adjusted.
    function calculateScrollPos(cm, rect) {
      var display = cm.display, snapMargin = textHeight(cm.display);
      if (rect.top < 0) { rect.top = 0; }
      var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
      var screen = displayHeight(cm), result = {};
      if (rect.bottom - rect.top > screen) { rect.bottom = rect.top + screen; }
      var docBottom = cm.doc.height + paddingVert(display);
      var atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin;
      if (rect.top < screentop) {
        result.scrollTop = atTop ? 0 : rect.top;
      } else if (rect.bottom > screentop + screen) {
        var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen);
        if (newTop != screentop) { result.scrollTop = newTop; }
      }

      var gutterSpace = cm.options.fixedGutter ? 0 : display.gutters.offsetWidth;
      var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft - gutterSpace;
      var screenw = displayWidth(cm) - display.gutters.offsetWidth;
      var tooWide = rect.right - rect.left > screenw;
      if (tooWide) { rect.right = rect.left + screenw; }
      if (rect.left < 10)
        { result.scrollLeft = 0; }
      else if (rect.left < screenleft)
        { result.scrollLeft = Math.max(0, rect.left + gutterSpace - (tooWide ? 0 : 10)); }
      else if (rect.right > screenw + screenleft - 3)
        { result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw; }
      return result
    }

    // Store a relative adjustment to the scroll position in the current
    // operation (to be applied when the operation finishes).
    function addToScrollTop(cm, top) {
      if (top == null) { return }
      resolveScrollToPos(cm);
      cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
    }

    // Make sure that at the end of the operation the current cursor is
    // shown.
    function ensureCursorVisible(cm) {
      resolveScrollToPos(cm);
      var cur = cm.getCursor();
      cm.curOp.scrollToPos = {from: cur, to: cur, margin: cm.options.cursorScrollMargin};
    }

    function scrollToCoords(cm, x, y) {
      if (x != null || y != null) { resolveScrollToPos(cm); }
      if (x != null) { cm.curOp.scrollLeft = x; }
      if (y != null) { cm.curOp.scrollTop = y; }
    }

    function scrollToRange(cm, range) {
      resolveScrollToPos(cm);
      cm.curOp.scrollToPos = range;
    }

    // When an operation has its scrollToPos property set, and another
    // scroll action is applied before the end of the operation, this
    // 'simulates' scrolling that position into view in a cheap way, so
    // that the effect of intermediate scroll commands is not ignored.
    function resolveScrollToPos(cm) {
      var range = cm.curOp.scrollToPos;
      if (range) {
        cm.curOp.scrollToPos = null;
        var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
        scrollToCoordsRange(cm, from, to, range.margin);
      }
    }

    function scrollToCoordsRange(cm, from, to, margin) {
      var sPos = calculateScrollPos(cm, {
        left: Math.min(from.left, to.left),
        top: Math.min(from.top, to.top) - margin,
        right: Math.max(from.right, to.right),
        bottom: Math.max(from.bottom, to.bottom) + margin
      });
      scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
    }

    // Sync the scrollable area and scrollbars, ensure the viewport
    // covers the visible area.
    function updateScrollTop(cm, val) {
      if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
      if (!gecko) { updateDisplaySimple(cm, {top: val}); }
      setScrollTop(cm, val, true);
      if (gecko) { updateDisplaySimple(cm); }
      startWorker(cm, 100);
    }

    function setScrollTop(cm, val, forceScroll) {
      val = Math.max(0, Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val));
      if (cm.display.scroller.scrollTop == val && !forceScroll) { return }
      cm.doc.scrollTop = val;
      cm.display.scrollbars.setScrollTop(val);
      if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val; }
    }

    // Sync scroller and scrollbar, ensure the gutter elements are
    // aligned.
    function setScrollLeft(cm, val, isScroller, forceScroll) {
      val = Math.max(0, Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth));
      if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) { return }
      cm.doc.scrollLeft = val;
      alignHorizontally(cm);
      if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val; }
      cm.display.scrollbars.setScrollLeft(val);
    }

    // SCROLLBARS

    // Prepare DOM reads needed to update the scrollbars. Done in one
    // shot to minimize update/measure roundtrips.
    function measureForScrollbars(cm) {
      var d = cm.display, gutterW = d.gutters.offsetWidth;
      var docH = Math.round(cm.doc.height + paddingVert(cm.display));
      return {
        clientHeight: d.scroller.clientHeight,
        viewHeight: d.wrapper.clientHeight,
        scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
        viewWidth: d.wrapper.clientWidth,
        barLeft: cm.options.fixedGutter ? gutterW : 0,
        docHeight: docH,
        scrollHeight: docH + scrollGap(cm) + d.barHeight,
        nativeBarWidth: d.nativeBarWidth,
        gutterWidth: gutterW
      }
    }

    var NativeScrollbars = function(place, scroll, cm) {
      this.cm = cm;
      var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
      var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
      vert.tabIndex = horiz.tabIndex = -1;
      place(vert); place(horiz);

      on(vert, "scroll", function () {
        if (vert.clientHeight) { scroll(vert.scrollTop, "vertical"); }
      });
      on(horiz, "scroll", function () {
        if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal"); }
      });

      this.checkedZeroWidth = false;
      // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
      if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px"; }
    };

    NativeScrollbars.prototype.update = function (measure) {
      var needsH = measure.scrollWidth > measure.clientWidth + 1;
      var needsV = measure.scrollHeight > measure.clientHeight + 1;
      var sWidth = measure.nativeBarWidth;

      if (needsV) {
        this.vert.style.display = "block";
        this.vert.style.bottom = needsH ? sWidth + "px" : "0";
        var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
        // A bug in IE8 can cause this value to be negative, so guard it.
        this.vert.firstChild.style.height =
          Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
      } else {
        this.vert.style.display = "";
        this.vert.firstChild.style.height = "0";
      }

      if (needsH) {
        this.horiz.style.display = "block";
        this.horiz.style.right = needsV ? sWidth + "px" : "0";
        this.horiz.style.left = measure.barLeft + "px";
        var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
        this.horiz.firstChild.style.width =
          Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
      } else {
        this.horiz.style.display = "";
        this.horiz.firstChild.style.width = "0";
      }

      if (!this.checkedZeroWidth && measure.clientHeight > 0) {
        if (sWidth == 0) { this.zeroWidthHack(); }
        this.checkedZeroWidth = true;
      }

      return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
    };

    NativeScrollbars.prototype.setScrollLeft = function (pos) {
      if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos; }
      if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz"); }
    };

    NativeScrollbars.prototype.setScrollTop = function (pos) {
      if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos; }
      if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert, "vert"); }
    };

    NativeScrollbars.prototype.zeroWidthHack = function () {
      var w = mac && !mac_geMountainLion ? "12px" : "18px";
      this.horiz.style.height = this.vert.style.width = w;
      this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
      this.disableHoriz = new Delayed;
      this.disableVert = new Delayed;
    };

    NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay, type) {
      bar.style.pointerEvents = "auto";
      function maybeDisable() {
        // To find out whether the scrollbar is still visible, we
        // check whether the element under the pixel in the bottom
        // right corner of the scrollbar box is the scrollbar box
        // itself (when the bar is still visible) or its filler child
        // (when the bar is hidden). If it is still visible, we keep
        // it enabled, if it's hidden, we disable pointer events.
        var box = bar.getBoundingClientRect();
        var elt = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2)
            : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);
        if (elt != bar) { bar.style.pointerEvents = "none"; }
        else { delay.set(1000, maybeDisable); }
      }
      delay.set(1000, maybeDisable);
    };

    NativeScrollbars.prototype.clear = function () {
      var parent = this.horiz.parentNode;
      parent.removeChild(this.horiz);
      parent.removeChild(this.vert);
    };

    var NullScrollbars = function () {};

    NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
    NullScrollbars.prototype.setScrollLeft = function () {};
    NullScrollbars.prototype.setScrollTop = function () {};
    NullScrollbars.prototype.clear = function () {};

    function updateScrollbars(cm, measure) {
      if (!measure) { measure = measureForScrollbars(cm); }
      var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
      updateScrollbarsInner(cm, measure);
      for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
        if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
          { updateHeightsInViewport(cm); }
        updateScrollbarsInner(cm, measureForScrollbars(cm));
        startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
      }
    }

    // Re-synchronize the fake scrollbars with the actual size of the
    // content.
    function updateScrollbarsInner(cm, measure) {
      var d = cm.display;
      var sizes = d.scrollbars.update(measure);

      d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
      d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
      d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";

      if (sizes.right && sizes.bottom) {
        d.scrollbarFiller.style.display = "block";
        d.scrollbarFiller.style.height = sizes.bottom + "px";
        d.scrollbarFiller.style.width = sizes.right + "px";
      } else { d.scrollbarFiller.style.display = ""; }
      if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
        d.gutterFiller.style.display = "block";
        d.gutterFiller.style.height = sizes.bottom + "px";
        d.gutterFiller.style.width = measure.gutterWidth + "px";
      } else { d.gutterFiller.style.display = ""; }
    }

    var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

    function initScrollbars(cm) {
      if (cm.display.scrollbars) {
        cm.display.scrollbars.clear();
        if (cm.display.scrollbars.addClass)
          { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
      }

      cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
        cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
        // Prevent clicks in the scrollbars from killing focus
        on(node, "mousedown", function () {
          if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0); }
        });
        node.setAttribute("cm-not-content", "true");
      }, function (pos, axis) {
        if (axis == "horizontal") { setScrollLeft(cm, pos); }
        else { updateScrollTop(cm, pos); }
      }, cm);
      if (cm.display.scrollbars.addClass)
        { addClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
    }

    // Operations are used to wrap a series of changes to the editor
    // state in such a way that each change won't have to update the
    // cursor and display (which would be awkward, slow, and
    // error-prone). Instead, display updates are batched and then all
    // combined and executed at once.

    var nextOpId = 0;
    // Start a new operation.
    function startOperation(cm) {
      cm.curOp = {
        cm: cm,
        viewChanged: false,      // Flag that indicates that lines might need to be redrawn
        startHeight: cm.doc.height, // Used to detect need to update scrollbar
        forceUpdate: false,      // Used to force a redraw
        updateInput: 0,       // Whether to reset the input textarea
        typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
        changeObjs: null,        // Accumulated changes, for firing change events
        cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
        cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
        selectionChanged: false, // Whether the selection needs to be redrawn
        updateMaxLine: false,    // Set when the widest line needs to be determined anew
        scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
        scrollToPos: null,       // Used to scroll to a specific position
        focus: false,
        id: ++nextOpId           // Unique ID
      };
      pushOperation(cm.curOp);
    }

    // Finish an operation, updating the display and signalling delayed events
    function endOperation(cm) {
      var op = cm.curOp;
      if (op) { finishOperation(op, function (group) {
        for (var i = 0; i < group.ops.length; i++)
          { group.ops[i].cm.curOp = null; }
        endOperations(group);
      }); }
    }

    // The DOM updates done when an operation finishes are batched so
    // that the minimum number of relayouts are required.
    function endOperations(group) {
      var ops = group.ops;
      for (var i = 0; i < ops.length; i++) // Read DOM
        { endOperation_R1(ops[i]); }
      for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
        { endOperation_W1(ops[i$1]); }
      for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
        { endOperation_R2(ops[i$2]); }
      for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
        { endOperation_W2(ops[i$3]); }
      for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
        { endOperation_finish(ops[i$4]); }
    }

    function endOperation_R1(op) {
      var cm = op.cm, display = cm.display;
      maybeClipScrollbars(cm);
      if (op.updateMaxLine) { findMaxLine(cm); }

      op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
        op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                           op.scrollToPos.to.line >= display.viewTo) ||
        display.maxLineChanged && cm.options.lineWrapping;
      op.update = op.mustUpdate &&
        new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
    }

    function endOperation_W1(op) {
      op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
    }

    function endOperation_R2(op) {
      var cm = op.cm, display = cm.display;
      if (op.updatedDisplay) { updateHeightsInViewport(cm); }

      op.barMeasure = measureForScrollbars(cm);

      // If the max line changed since it was last measured, measure it,
      // and ensure the document's width matches it.
      // updateDisplay_W2 will use these properties to do the actual resizing
      if (display.maxLineChanged && !cm.options.lineWrapping) {
        op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
        cm.display.sizerWidth = op.adjustWidthTo;
        op.barMeasure.scrollWidth =
          Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
        op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
      }

      if (op.updatedDisplay || op.selectionChanged)
        { op.preparedSelection = display.input.prepareSelection(); }
    }

    function endOperation_W2(op) {
      var cm = op.cm;

      if (op.adjustWidthTo != null) {
        cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
        if (op.maxScrollLeft < cm.doc.scrollLeft)
          { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true); }
        cm.display.maxLineChanged = false;
      }

      var takeFocus = op.focus && op.focus == activeElt();
      if (op.preparedSelection)
        { cm.display.input.showSelection(op.preparedSelection, takeFocus); }
      if (op.updatedDisplay || op.startHeight != cm.doc.height)
        { updateScrollbars(cm, op.barMeasure); }
      if (op.updatedDisplay)
        { setDocumentHeight(cm, op.barMeasure); }

      if (op.selectionChanged) { restartBlink(cm); }

      if (cm.state.focused && op.updateInput)
        { cm.display.input.reset(op.typing); }
      if (takeFocus) { ensureFocus(op.cm); }
    }

    function endOperation_finish(op) {
      var cm = op.cm, display = cm.display, doc = cm.doc;

      if (op.updatedDisplay) { postUpdateDisplay(cm, op.update); }

      // Abort mouse wheel delta measurement, when scrolling explicitly
      if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
        { display.wheelStartX = display.wheelStartY = null; }

      // Propagate the scroll position to the actual DOM scroller
      if (op.scrollTop != null) { setScrollTop(cm, op.scrollTop, op.forceScroll); }

      if (op.scrollLeft != null) { setScrollLeft(cm, op.scrollLeft, true, true); }
      // If we need to scroll a specific position into view, do so.
      if (op.scrollToPos) {
        var rect = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
                                     clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
        maybeScrollWindow(cm, rect);
      }

      // Fire events for markers that are hidden/unidden by editing or
      // undoing
      var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
      if (hidden) { for (var i = 0; i < hidden.length; ++i)
        { if (!hidden[i].lines.length) { signal(hidden[i], "hide"); } } }
      if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
        { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide"); } } }

      if (display.wrapper.offsetHeight)
        { doc.scrollTop = cm.display.scroller.scrollTop; }

      // Fire change events, and delayed event handlers
      if (op.changeObjs)
        { signal(cm, "changes", cm, op.changeObjs); }
      if (op.update)
        { op.update.finish(); }
    }

    // Run the given function in an operation
    function runInOp(cm, f) {
      if (cm.curOp) { return f() }
      startOperation(cm);
      try { return f() }
      finally { endOperation(cm); }
    }
    // Wraps a function in an operation. Returns the wrapped function.
    function operation(cm, f) {
      return function() {
        if (cm.curOp) { return f.apply(cm, arguments) }
        startOperation(cm);
        try { return f.apply(cm, arguments) }
        finally { endOperation(cm); }
      }
    }
    // Used to add methods to editor and doc instances, wrapping them in
    // operations.
    function methodOp(f) {
      return function() {
        if (this.curOp) { return f.apply(this, arguments) }
        startOperation(this);
        try { return f.apply(this, arguments) }
        finally { endOperation(this); }
      }
    }
    function docMethodOp(f) {
      return function() {
        var cm = this.cm;
        if (!cm || cm.curOp) { return f.apply(this, arguments) }
        startOperation(cm);
        try { return f.apply(this, arguments) }
        finally { endOperation(cm); }
      }
    }

    // HIGHLIGHT WORKER

    function startWorker(cm, time) {
      if (cm.doc.highlightFrontier < cm.display.viewTo)
        { cm.state.highlight.set(time, bind(highlightWorker, cm)); }
    }

    function highlightWorker(cm) {
      var doc = cm.doc;
      if (doc.highlightFrontier >= cm.display.viewTo) { return }
      var end = +new Date + cm.options.workTime;
      var context = getContextBefore(cm, doc.highlightFrontier);
      var changedLines = [];

      doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
        if (context.line >= cm.display.viewFrom) { // Visible
          var oldStyles = line.styles;
          var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc.mode, context.state) : null;
          var highlighted = highlightLine(cm, line, context, true);
          if (resetState) { context.state = resetState; }
          line.styles = highlighted.styles;
          var oldCls = line.styleClasses, newCls = highlighted.classes;
          if (newCls) { line.styleClasses = newCls; }
          else if (oldCls) { line.styleClasses = null; }
          var ischange = !oldStyles || oldStyles.length != line.styles.length ||
            oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
          for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i]; }
          if (ischange) { changedLines.push(context.line); }
          line.stateAfter = context.save();
          context.nextLine();
        } else {
          if (line.text.length <= cm.options.maxHighlightLength)
            { processLine(cm, line.text, context); }
          line.stateAfter = context.line % 5 == 0 ? context.save() : null;
          context.nextLine();
        }
        if (+new Date > end) {
          startWorker(cm, cm.options.workDelay);
          return true
        }
      });
      doc.highlightFrontier = context.line;
      doc.modeFrontier = Math.max(doc.modeFrontier, context.line);
      if (changedLines.length) { runInOp(cm, function () {
        for (var i = 0; i < changedLines.length; i++)
          { regLineChange(cm, changedLines[i], "text"); }
      }); }
    }

    // DISPLAY DRAWING

    var DisplayUpdate = function(cm, viewport, force) {
      var display = cm.display;

      this.viewport = viewport;
      // Store some values that we'll need later (but don't want to force a relayout for)
      this.visible = visibleLines(display, cm.doc, viewport);
      this.editorIsHidden = !display.wrapper.offsetWidth;
      this.wrapperHeight = display.wrapper.clientHeight;
      this.wrapperWidth = display.wrapper.clientWidth;
      this.oldDisplayWidth = displayWidth(cm);
      this.force = force;
      this.dims = getDimensions(cm);
      this.events = [];
    };

    DisplayUpdate.prototype.signal = function (emitter, type) {
      if (hasHandler(emitter, type))
        { this.events.push(arguments); }
    };
    DisplayUpdate.prototype.finish = function () {
      for (var i = 0; i < this.events.length; i++)
        { signal.apply(null, this.events[i]); }
    };

    function maybeClipScrollbars(cm) {
      var display = cm.display;
      if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
        display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
        display.heightForcer.style.height = scrollGap(cm) + "px";
        display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
        display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
        display.scrollbarsClipped = true;
      }
    }

    function selectionSnapshot(cm) {
      if (cm.hasFocus()) { return null }
      var active = activeElt();
      if (!active || !contains(cm.display.lineDiv, active)) { return null }
      var result = {activeElt: active};
      if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
          result.anchorNode = sel.anchorNode;
          result.anchorOffset = sel.anchorOffset;
          result.focusNode = sel.focusNode;
          result.focusOffset = sel.focusOffset;
        }
      }
      return result
    }

    function restoreSelection(snapshot) {
      if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt()) { return }
      snapshot.activeElt.focus();
      if (!/^(INPUT|TEXTAREA)$/.test(snapshot.activeElt.nodeName) &&
          snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
        var sel = window.getSelection(), range = document.createRange();
        range.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);
        sel.extend(snapshot.focusNode, snapshot.focusOffset);
      }
    }

    // Does the actual updating of the line display. Bails out
    // (returning false) when there is nothing to be done and forced is
    // false.
    function updateDisplayIfNeeded(cm, update) {
      var display = cm.display, doc = cm.doc;

      if (update.editorIsHidden) {
        resetView(cm);
        return false
      }

      // Bail out if the visible area is already rendered and nothing changed.
      if (!update.force &&
          update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
          (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
          display.renderedView == display.view && countDirtyView(cm) == 0)
        { return false }

      if (maybeUpdateLineNumberWidth(cm)) {
        resetView(cm);
        update.dims = getDimensions(cm);
      }

      // Compute a suitable new viewport (from & to)
      var end = doc.first + doc.size;
      var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
      var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
      if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom); }
      if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo); }
      if (sawCollapsedSpans) {
        from = visualLineNo(cm.doc, from);
        to = visualLineEndNo(cm.doc, to);
      }

      var different = from != display.viewFrom || to != display.viewTo ||
        display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
      adjustView(cm, from, to);

      display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
      // Position the mover div to align with the current scroll position
      cm.display.mover.style.top = display.viewOffset + "px";

      var toUpdate = countDirtyView(cm);
      if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
          (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
        { return false }

      // For big changes, we hide the enclosing element during the
      // update, since that speeds up the operations on most browsers.
      var selSnapshot = selectionSnapshot(cm);
      if (toUpdate > 4) { display.lineDiv.style.display = "none"; }
      patchDisplay(cm, display.updateLineNumbers, update.dims);
      if (toUpdate > 4) { display.lineDiv.style.display = ""; }
      display.renderedView = display.view;
      // There might have been a widget with a focused element that got
      // hidden or updated, if so re-focus it.
      restoreSelection(selSnapshot);

      // Prevent selection and cursors from interfering with the scroll
      // width and height.
      removeChildren(display.cursorDiv);
      removeChildren(display.selectionDiv);
      display.gutters.style.height = display.sizer.style.minHeight = 0;

      if (different) {
        display.lastWrapHeight = update.wrapperHeight;
        display.lastWrapWidth = update.wrapperWidth;
        startWorker(cm, 400);
      }

      display.updateLineNumbers = null;

      return true
    }

    function postUpdateDisplay(cm, update) {
      var viewport = update.viewport;

      for (var first = true;; first = false) {
        if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
          // Clip forced viewport to actual scrollable area.
          if (viewport && viewport.top != null)
            { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)}; }
          // Updated line heights might result in the drawn area not
          // actually covering the viewport. Keep looping until it does.
          update.visible = visibleLines(cm.display, cm.doc, viewport);
          if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
            { break }
        } else if (first) {
          update.visible = visibleLines(cm.display, cm.doc, viewport);
        }
        if (!updateDisplayIfNeeded(cm, update)) { break }
        updateHeightsInViewport(cm);
        var barMeasure = measureForScrollbars(cm);
        updateSelection(cm);
        updateScrollbars(cm, barMeasure);
        setDocumentHeight(cm, barMeasure);
        update.force = false;
      }

      update.signal(cm, "update", cm);
      if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
        update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
        cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
      }
    }

    function updateDisplaySimple(cm, viewport) {
      var update = new DisplayUpdate(cm, viewport);
      if (updateDisplayIfNeeded(cm, update)) {
        updateHeightsInViewport(cm);
        postUpdateDisplay(cm, update);
        var barMeasure = measureForScrollbars(cm);
        updateSelection(cm);
        updateScrollbars(cm, barMeasure);
        setDocumentHeight(cm, barMeasure);
        update.finish();
      }
    }

    // Sync the actual display DOM structure with display.view, removing
    // nodes for lines that are no longer in view, and creating the ones
    // that are not there yet, and updating the ones that are out of
    // date.
    function patchDisplay(cm, updateNumbersFrom, dims) {
      var display = cm.display, lineNumbers = cm.options.lineNumbers;
      var container = display.lineDiv, cur = container.firstChild;

      function rm(node) {
        var next = node.nextSibling;
        // Works around a throw-scroll bug in OS X Webkit
        if (webkit && mac && cm.display.currentWheelTarget == node)
          { node.style.display = "none"; }
        else
          { node.parentNode.removeChild(node); }
        return next
      }

      var view = display.view, lineN = display.viewFrom;
      // Loop over the elements in the view, syncing cur (the DOM nodes
      // in display.lineDiv) with the view as we go.
      for (var i = 0; i < view.length; i++) {
        var lineView = view[i];
        if (lineView.hidden) ; else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
          var node = buildLineElement(cm, lineView, lineN, dims);
          container.insertBefore(node, cur);
        } else { // Already drawn
          while (cur != lineView.node) { cur = rm(cur); }
          var updateNumber = lineNumbers && updateNumbersFrom != null &&
            updateNumbersFrom <= lineN && lineView.lineNumber;
          if (lineView.changes) {
            if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false; }
            updateLineForChanges(cm, lineView, lineN, dims);
          }
          if (updateNumber) {
            removeChildren(lineView.lineNumber);
            lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
          }
          cur = lineView.node.nextSibling;
        }
        lineN += lineView.size;
      }
      while (cur) { cur = rm(cur); }
    }

    function updateGutterSpace(display) {
      var width = display.gutters.offsetWidth;
      display.sizer.style.marginLeft = width + "px";
    }

    function setDocumentHeight(cm, measure) {
      cm.display.sizer.style.minHeight = measure.docHeight + "px";
      cm.display.heightForcer.style.top = measure.docHeight + "px";
      cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px";
    }

    // Re-align line numbers and gutter marks to compensate for
    // horizontal scrolling.
    function alignHorizontally(cm) {
      var display = cm.display, view = display.view;
      if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
      var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
      var gutterW = display.gutters.offsetWidth, left = comp + "px";
      for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
        if (cm.options.fixedGutter) {
          if (view[i].gutter)
            { view[i].gutter.style.left = left; }
          if (view[i].gutterBackground)
            { view[i].gutterBackground.style.left = left; }
        }
        var align = view[i].alignable;
        if (align) { for (var j = 0; j < align.length; j++)
          { align[j].style.left = left; } }
      } }
      if (cm.options.fixedGutter)
        { display.gutters.style.left = (comp + gutterW) + "px"; }
    }

    // Used to ensure that the line number gutter is still the right
    // size for the current document size. Returns true when an update
    // is needed.
    function maybeUpdateLineNumberWidth(cm) {
      if (!cm.options.lineNumbers) { return false }
      var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
      if (last.length != display.lineNumChars) {
        var test = display.measure.appendChild(elt("div", [elt("div", last)],
                                                   "CodeMirror-linenumber CodeMirror-gutter-elt"));
        var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
        display.lineGutter.style.width = "";
        display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
        display.lineNumWidth = display.lineNumInnerWidth + padding;
        display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
        display.lineGutter.style.width = display.lineNumWidth + "px";
        updateGutterSpace(cm.display);
        return true
      }
      return false
    }

    function getGutters(gutters, lineNumbers) {
      var result = [], sawLineNumbers = false;
      for (var i = 0; i < gutters.length; i++) {
        var name = gutters[i], style = null;
        if (typeof name != "string") { style = name.style; name = name.className; }
        if (name == "CodeMirror-linenumbers") {
          if (!lineNumbers) { continue }
          else { sawLineNumbers = true; }
        }
        result.push({className: name, style: style});
      }
      if (lineNumbers && !sawLineNumbers) { result.push({className: "CodeMirror-linenumbers", style: null}); }
      return result
    }

    // Rebuild the gutter elements, ensure the margin to the left of the
    // code matches their width.
    function renderGutters(display) {
      var gutters = display.gutters, specs = display.gutterSpecs;
      removeChildren(gutters);
      display.lineGutter = null;
      for (var i = 0; i < specs.length; ++i) {
        var ref = specs[i];
        var className = ref.className;
        var style = ref.style;
        var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + className));
        if (style) { gElt.style.cssText = style; }
        if (className == "CodeMirror-linenumbers") {
          display.lineGutter = gElt;
          gElt.style.width = (display.lineNumWidth || 1) + "px";
        }
      }
      gutters.style.display = specs.length ? "" : "none";
      updateGutterSpace(display);
    }

    function updateGutters(cm) {
      renderGutters(cm.display);
      regChange(cm);
      alignHorizontally(cm);
    }

    // The display handles the DOM integration, both for input reading
    // and content drawing. It holds references to DOM nodes and
    // display-related state.

    function Display(place, doc, input, options) {
      var d = this;
      this.input = input;

      // Covers bottom-right square when both scrollbars are present.
      d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
      d.scrollbarFiller.setAttribute("cm-not-content", "true");
      // Covers bottom of gutter when coverGutterNextToScrollbar is on
      // and h scrollbar is present.
      d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
      d.gutterFiller.setAttribute("cm-not-content", "true");
      // Will contain the actual code, positioned to cover the viewport.
      d.lineDiv = eltP("div", null, "CodeMirror-code");
      // Elements are added to these to represent selection and cursors.
      d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
      d.cursorDiv = elt("div", null, "CodeMirror-cursors");
      // A visibility: hidden element used to find the size of things.
      d.measure = elt("div", null, "CodeMirror-measure");
      // When lines outside of the viewport are measured, they are drawn in this.
      d.lineMeasure = elt("div", null, "CodeMirror-measure");
      // Wraps everything that needs to exist inside the vertically-padded coordinate system
      d.lineSpace = eltP("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
                        null, "position: relative; outline: none");
      var lines = eltP("div", [d.lineSpace], "CodeMirror-lines");
      // Moved around its parent to cover visible view.
      d.mover = elt("div", [lines], null, "position: relative");
      // Set to the height of the document, allowing scrolling.
      d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
      d.sizerWidth = null;
      // Behavior of elts with overflow: auto and padding is
      // inconsistent across browsers. This is used to ensure the
      // scrollable area is big enough.
      d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
      // Will contain the gutters, if any.
      d.gutters = elt("div", null, "CodeMirror-gutters");
      d.lineGutter = null;
      // Actual scrollable element.
      d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
      d.scroller.setAttribute("tabIndex", "-1");
      // The element in which the editor lives.
      d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

      // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
      if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
      if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true; }

      if (place) {
        if (place.appendChild) { place.appendChild(d.wrapper); }
        else { place(d.wrapper); }
      }

      // Current rendered range (may be bigger than the view window).
      d.viewFrom = d.viewTo = doc.first;
      d.reportedViewFrom = d.reportedViewTo = doc.first;
      // Information about the rendered lines.
      d.view = [];
      d.renderedView = null;
      // Holds info about a single rendered line when it was rendered
      // for measurement, while not in view.
      d.externalMeasured = null;
      // Empty space (in pixels) above the view
      d.viewOffset = 0;
      d.lastWrapHeight = d.lastWrapWidth = 0;
      d.updateLineNumbers = null;

      d.nativeBarWidth = d.barHeight = d.barWidth = 0;
      d.scrollbarsClipped = false;

      // Used to only resize the line number gutter when necessary (when
      // the amount of lines crosses a boundary that makes its width change)
      d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
      // Set to true when a non-horizontal-scrolling line widget is
      // added. As an optimization, line widget aligning is skipped when
      // this is false.
      d.alignWidgets = false;

      d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

      // Tracks the maximum line length so that the horizontal scrollbar
      // can be kept static when scrolling.
      d.maxLine = null;
      d.maxLineLength = 0;
      d.maxLineChanged = false;

      // Used for measuring wheel scrolling granularity
      d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

      // True when shift is held down.
      d.shift = false;

      // Used to track whether anything happened since the context menu
      // was opened.
      d.selForContextMenu = null;

      d.activeTouch = null;

      d.gutterSpecs = getGutters(options.gutters, options.lineNumbers);
      renderGutters(d);

      input.init(d);
    }

    // Since the delta values reported on mouse wheel events are
    // unstandardized between browsers and even browser versions, and
    // generally horribly unpredictable, this code starts by measuring
    // the scroll effect that the first few mouse wheel events have,
    // and, from that, detects the way it can convert deltas to pixel
    // offsets afterwards.
    //
    // The reason we want to know the amount a wheel event will scroll
    // is that it gives us a chance to update the display before the
    // actual scrolling happens, reducing flickering.

    var wheelSamples = 0, wheelPixelsPerUnit = null;
    // Fill in a browser-detected starting value on browsers where we
    // know one. These don't have to be accurate -- the result of them
    // being wrong would just be a slight flicker on the first wheel
    // scroll (if it is large enough).
    if (ie) { wheelPixelsPerUnit = -.53; }
    else if (gecko) { wheelPixelsPerUnit = 15; }
    else if (chrome) { wheelPixelsPerUnit = -.7; }
    else if (safari) { wheelPixelsPerUnit = -1/3; }

    function wheelEventDelta(e) {
      var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
      if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail; }
      if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail; }
      else if (dy == null) { dy = e.wheelDelta; }
      return {x: dx, y: dy}
    }
    function wheelEventPixels(e) {
      var delta = wheelEventDelta(e);
      delta.x *= wheelPixelsPerUnit;
      delta.y *= wheelPixelsPerUnit;
      return delta
    }

    function onScrollWheel(cm, e) {
      var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;

      var display = cm.display, scroll = display.scroller;
      // Quit if there's nothing to scroll here
      var canScrollX = scroll.scrollWidth > scroll.clientWidth;
      var canScrollY = scroll.scrollHeight > scroll.clientHeight;
      if (!(dx && canScrollX || dy && canScrollY)) { return }

      // Webkit browsers on OS X abort momentum scrolls when the target
      // of the scroll event is removed from the scrollable element.
      // This hack (see related code in patchDisplay) makes sure the
      // element is kept around.
      if (dy && mac && webkit) {
        outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
          for (var i = 0; i < view.length; i++) {
            if (view[i].node == cur) {
              cm.display.currentWheelTarget = cur;
              break outer
            }
          }
        }
      }

      // On some browsers, horizontal scrolling will cause redraws to
      // happen before the gutter has been realigned, causing it to
      // wriggle around in a most unseemly way. When we have an
      // estimated pixels/delta value, we just handle horizontal
      // scrolling entirely here. It'll be slightly off from native, but
      // better than glitching out.
      if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
        if (dy && canScrollY)
          { updateScrollTop(cm, Math.max(0, scroll.scrollTop + dy * wheelPixelsPerUnit)); }
        setScrollLeft(cm, Math.max(0, scroll.scrollLeft + dx * wheelPixelsPerUnit));
        // Only prevent default scrolling if vertical scrolling is
        // actually possible. Otherwise, it causes vertical scroll
        // jitter on OSX trackpads when deltaX is small and deltaY
        // is large (issue #3579)
        if (!dy || (dy && canScrollY))
          { e_preventDefault(e); }
        display.wheelStartX = null; // Abort measurement, if in progress
        return
      }

      // 'Project' the visible viewport to cover the area that is being
      // scrolled into view (if we know enough to estimate it).
      if (dy && wheelPixelsPerUnit != null) {
        var pixels = dy * wheelPixelsPerUnit;
        var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
        if (pixels < 0) { top = Math.max(0, top + pixels - 50); }
        else { bot = Math.min(cm.doc.height, bot + pixels + 50); }
        updateDisplaySimple(cm, {top: top, bottom: bot});
      }

      if (wheelSamples < 20) {
        if (display.wheelStartX == null) {
          display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
          display.wheelDX = dx; display.wheelDY = dy;
          setTimeout(function () {
            if (display.wheelStartX == null) { return }
            var movedX = scroll.scrollLeft - display.wheelStartX;
            var movedY = scroll.scrollTop - display.wheelStartY;
            var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
              (movedX && display.wheelDX && movedX / display.wheelDX);
            display.wheelStartX = display.wheelStartY = null;
            if (!sample) { return }
            wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
            ++wheelSamples;
          }, 200);
        } else {
          display.wheelDX += dx; display.wheelDY += dy;
        }
      }
    }

    // Selection objects are immutable. A new one is created every time
    // the selection changes. A selection is one or more non-overlapping
    // (and non-touching) ranges, sorted, and an integer that indicates
    // which one is the primary selection (the one that's scrolled into
    // view, that getCursor returns, etc).
    var Selection = function(ranges, primIndex) {
      this.ranges = ranges;
      this.primIndex = primIndex;
    };

    Selection.prototype.primary = function () { return this.ranges[this.primIndex] };

    Selection.prototype.equals = function (other) {
      if (other == this) { return true }
      if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
      for (var i = 0; i < this.ranges.length; i++) {
        var here = this.ranges[i], there = other.ranges[i];
        if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) { return false }
      }
      return true
    };

    Selection.prototype.deepCopy = function () {
      var out = [];
      for (var i = 0; i < this.ranges.length; i++)
        { out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head)); }
      return new Selection(out, this.primIndex)
    };

    Selection.prototype.somethingSelected = function () {
      for (var i = 0; i < this.ranges.length; i++)
        { if (!this.ranges[i].empty()) { return true } }
      return false
    };

    Selection.prototype.contains = function (pos, end) {
      if (!end) { end = pos; }
      for (var i = 0; i < this.ranges.length; i++) {
        var range = this.ranges[i];
        if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
          { return i }
      }
      return -1
    };

    var Range = function(anchor, head) {
      this.anchor = anchor; this.head = head;
    };

    Range.prototype.from = function () { return minPos(this.anchor, this.head) };
    Range.prototype.to = function () { return maxPos(this.anchor, this.head) };
    Range.prototype.empty = function () { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch };

    // Take an unsorted, potentially overlapping set of ranges, and
    // build a selection out of it. 'Consumes' ranges array (modifying
    // it).
    function normalizeSelection(cm, ranges, primIndex) {
      var mayTouch = cm && cm.options.selectionsMayTouch;
      var prim = ranges[primIndex];
      ranges.sort(function (a, b) { return cmp(a.from(), b.from()); });
      primIndex = indexOf(ranges, prim);
      for (var i = 1; i < ranges.length; i++) {
        var cur = ranges[i], prev = ranges[i - 1];
        var diff = cmp(prev.to(), cur.from());
        if (mayTouch && !cur.empty() ? diff > 0 : diff >= 0) {
          var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
          var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
          if (i <= primIndex) { --primIndex; }
          ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
        }
      }
      return new Selection(ranges, primIndex)
    }

    function simpleSelection(anchor, head) {
      return new Selection([new Range(anchor, head || anchor)], 0)
    }

    // Compute the position of the end of a change (its 'to' property
    // refers to the pre-change end).
    function changeEnd(change) {
      if (!change.text) { return change.to }
      return Pos(change.from.line + change.text.length - 1,
                 lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
    }

    // Adjust a position to refer to the post-change position of the
    // same text, or the end of the change if the change covers it.
    function adjustForChange(pos, change) {
      if (cmp(pos, change.from) < 0) { return pos }
      if (cmp(pos, change.to) <= 0) { return changeEnd(change) }

      var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
      if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch; }
      return Pos(line, ch)
    }

    function computeSelAfterChange(doc, change) {
      var out = [];
      for (var i = 0; i < doc.sel.ranges.length; i++) {
        var range = doc.sel.ranges[i];
        out.push(new Range(adjustForChange(range.anchor, change),
                           adjustForChange(range.head, change)));
      }
      return normalizeSelection(doc.cm, out, doc.sel.primIndex)
    }

    function offsetPos(pos, old, nw) {
      if (pos.line == old.line)
        { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
      else
        { return Pos(nw.line + (pos.line - old.line), pos.ch) }
    }

    // Used by replaceSelections to allow moving the selection to the
    // start or around the replaced test. Hint may be "start" or "around".
    function computeReplacedSel(doc, changes, hint) {
      var out = [];
      var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
      for (var i = 0; i < changes.length; i++) {
        var change = changes[i];
        var from = offsetPos(change.from, oldPrev, newPrev);
        var to = offsetPos(changeEnd(change), oldPrev, newPrev);
        oldPrev = change.to;
        newPrev = to;
        if (hint == "around") {
          var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
          out[i] = new Range(inv ? to : from, inv ? from : to);
        } else {
          out[i] = new Range(from, from);
        }
      }
      return new Selection(out, doc.sel.primIndex)
    }

    // Used to get the editor into a consistent state again when options change.

    function loadMode(cm) {
      cm.doc.mode = getMode(cm.options, cm.doc.modeOption);
      resetModeState(cm);
    }

    function resetModeState(cm) {
      cm.doc.iter(function (line) {
        if (line.stateAfter) { line.stateAfter = null; }
        if (line.styles) { line.styles = null; }
      });
      cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first;
      startWorker(cm, 100);
      cm.state.modeGen++;
      if (cm.curOp) { regChange(cm); }
    }

    // DOCUMENT DATA STRUCTURE

    // By default, updates that start and end at the beginning of a line
    // are treated specially, in order to make the association of line
    // widgets and marker elements with the text behave more intuitive.
    function isWholeLineUpdate(doc, change) {
      return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
        (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
    }

    // Perform a change on the document data structure.
    function updateDoc(doc, change, markedSpans, estimateHeight) {
      function spansFor(n) {return markedSpans ? markedSpans[n] : null}
      function update(line, text, spans) {
        updateLine(line, text, spans, estimateHeight);
        signalLater(line, "change", line, change);
      }
      function linesFor(start, end) {
        var result = [];
        for (var i = start; i < end; ++i)
          { result.push(new Line(text[i], spansFor(i), estimateHeight)); }
        return result
      }

      var from = change.from, to = change.to, text = change.text;
      var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
      var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

      // Adjust the line structure
      if (change.full) {
        doc.insert(0, linesFor(0, text.length));
        doc.remove(text.length, doc.size - text.length);
      } else if (isWholeLineUpdate(doc, change)) {
        // This is a whole-line replace. Treated specially to make
        // sure line objects move the way they are supposed to.
        var added = linesFor(0, text.length - 1);
        update(lastLine, lastLine.text, lastSpans);
        if (nlines) { doc.remove(from.line, nlines); }
        if (added.length) { doc.insert(from.line, added); }
      } else if (firstLine == lastLine) {
        if (text.length == 1) {
          update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
        } else {
          var added$1 = linesFor(1, text.length - 1);
          added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
          update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
          doc.insert(from.line + 1, added$1);
        }
      } else if (text.length == 1) {
        update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
        doc.remove(from.line + 1, nlines);
      } else {
        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
        update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
        var added$2 = linesFor(1, text.length - 1);
        if (nlines > 1) { doc.remove(from.line + 1, nlines - 1); }
        doc.insert(from.line + 1, added$2);
      }

      signalLater(doc, "change", doc, change);
    }

    // Call f for all linked documents.
    function linkedDocs(doc, f, sharedHistOnly) {
      function propagate(doc, skip, sharedHist) {
        if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
          var rel = doc.linked[i];
          if (rel.doc == skip) { continue }
          var shared = sharedHist && rel.sharedHist;
          if (sharedHistOnly && !shared) { continue }
          f(rel.doc, shared);
          propagate(rel.doc, doc, shared);
        } }
      }
      propagate(doc, null, true);
    }

    // Attach a document to an editor.
    function attachDoc(cm, doc) {
      if (doc.cm) { throw new Error("This document is already in use.") }
      cm.doc = doc;
      doc.cm = cm;
      estimateLineHeights(cm);
      loadMode(cm);
      setDirectionClass(cm);
      if (!cm.options.lineWrapping) { findMaxLine(cm); }
      cm.options.mode = doc.modeOption;
      regChange(cm);
    }

    function setDirectionClass(cm) {
    (cm.doc.direction == "rtl" ? addClass : rmClass)(cm.display.lineDiv, "CodeMirror-rtl");
    }

    function directionChanged(cm) {
      runInOp(cm, function () {
        setDirectionClass(cm);
        regChange(cm);
      });
    }

    function History(prev) {
      // Arrays of change events and selections. Doing something adds an
      // event to done and clears undo. Undoing moves events from done
      // to undone, redoing moves them in the other direction.
      this.done = []; this.undone = [];
      this.undoDepth = prev ? prev.undoDepth : Infinity;
      // Used to track when changes can be merged into a single undo
      // event
      this.lastModTime = this.lastSelTime = 0;
      this.lastOp = this.lastSelOp = null;
      this.lastOrigin = this.lastSelOrigin = null;
      // Used by the isClean() method
      this.generation = this.maxGeneration = prev ? prev.maxGeneration : 1;
    }

    // Create a history change event from an updateDoc-style change
    // object.
    function historyChangeFromChange(doc, change) {
      var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
      attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
      linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true);
      return histChange
    }

    // Pop all selection events off the end of a history array. Stop at
    // a change event.
    function clearSelectionEvents(array) {
      while (array.length) {
        var last = lst(array);
        if (last.ranges) { array.pop(); }
        else { break }
      }
    }

    // Find the top change event in the history. Pop off selection
    // events that are in the way.
    function lastChangeEvent(hist, force) {
      if (force) {
        clearSelectionEvents(hist.done);
        return lst(hist.done)
      } else if (hist.done.length && !lst(hist.done).ranges) {
        return lst(hist.done)
      } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
        hist.done.pop();
        return lst(hist.done)
      }
    }

    // Register a change in the history. Merges changes that are within
    // a single operation, or are close together with an origin that
    // allows merging (starting with "+") into a single event.
    function addChangeToHistory(doc, change, selAfter, opId) {
      var hist = doc.history;
      hist.undone.length = 0;
      var time = +new Date, cur;
      var last;

      if ((hist.lastOp == opId ||
           hist.lastOrigin == change.origin && change.origin &&
           ((change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc.cm ? doc.cm.options.historyEventDelay : 500)) ||
            change.origin.charAt(0) == "*")) &&
          (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
        // Merge this change into the last event
        last = lst(cur.changes);
        if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
          // Optimized case for simple insertion -- don't want to add
          // new changesets for every character typed
          last.to = changeEnd(change);
        } else {
          // Add new sub-event
          cur.changes.push(historyChangeFromChange(doc, change));
        }
      } else {
        // Can not be merged, start a new event.
        var before = lst(hist.done);
        if (!before || !before.ranges)
          { pushSelectionToHistory(doc.sel, hist.done); }
        cur = {changes: [historyChangeFromChange(doc, change)],
               generation: hist.generation};
        hist.done.push(cur);
        while (hist.done.length > hist.undoDepth) {
          hist.done.shift();
          if (!hist.done[0].ranges) { hist.done.shift(); }
        }
      }
      hist.done.push(selAfter);
      hist.generation = ++hist.maxGeneration;
      hist.lastModTime = hist.lastSelTime = time;
      hist.lastOp = hist.lastSelOp = opId;
      hist.lastOrigin = hist.lastSelOrigin = change.origin;

      if (!last) { signal(doc, "historyAdded"); }
    }

    function selectionEventCanBeMerged(doc, origin, prev, sel) {
      var ch = origin.charAt(0);
      return ch == "*" ||
        ch == "+" &&
        prev.ranges.length == sel.ranges.length &&
        prev.somethingSelected() == sel.somethingSelected() &&
        new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
    }

    // Called whenever the selection changes, sets the new selection as
    // the pending selection in the history, and pushes the old pending
    // selection into the 'done' array when it was significantly
    // different (in number of selected ranges, emptiness, or time).
    function addSelectionToHistory(doc, sel, opId, options) {
      var hist = doc.history, origin = options && options.origin;

      // A new event is started when the previous origin does not match
      // the current, or the origins don't allow matching. Origins
      // starting with * are always merged, those starting with + are
      // merged when similar and close together in time.
      if (opId == hist.lastSelOp ||
          (origin && hist.lastSelOrigin == origin &&
           (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
            selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
        { hist.done[hist.done.length - 1] = sel; }
      else
        { pushSelectionToHistory(sel, hist.done); }

      hist.lastSelTime = +new Date;
      hist.lastSelOrigin = origin;
      hist.lastSelOp = opId;
      if (options && options.clearRedo !== false)
        { clearSelectionEvents(hist.undone); }
    }

    function pushSelectionToHistory(sel, dest) {
      var top = lst(dest);
      if (!(top && top.ranges && top.equals(sel)))
        { dest.push(sel); }
    }

    // Used to store marked span information in the history.
    function attachLocalSpans(doc, change, from, to) {
      var existing = change["spans_" + doc.id], n = 0;
      doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
        if (line.markedSpans)
          { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans; }
        ++n;
      });
    }

    // When un/re-doing restores text containing marked spans, those
    // that have been explicitly cleared should not be restored.
    function removeClearedSpans(spans) {
      if (!spans) { return null }
      var out;
      for (var i = 0; i < spans.length; ++i) {
        if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i); } }
        else if (out) { out.push(spans[i]); }
      }
      return !out ? spans : out.length ? out : null
    }

    // Retrieve and filter the old marked spans stored in a change event.
    function getOldSpans(doc, change) {
      var found = change["spans_" + doc.id];
      if (!found) { return null }
      var nw = [];
      for (var i = 0; i < change.text.length; ++i)
        { nw.push(removeClearedSpans(found[i])); }
      return nw
    }

    // Used for un/re-doing changes from the history. Combines the
    // result of computing the existing spans with the set of spans that
    // existed in the history (so that deleting around a span and then
    // undoing brings back the span).
    function mergeOldSpans(doc, change) {
      var old = getOldSpans(doc, change);
      var stretched = stretchSpansOverChange(doc, change);
      if (!old) { return stretched }
      if (!stretched) { return old }

      for (var i = 0; i < old.length; ++i) {
        var oldCur = old[i], stretchCur = stretched[i];
        if (oldCur && stretchCur) {
          spans: for (var j = 0; j < stretchCur.length; ++j) {
            var span = stretchCur[j];
            for (var k = 0; k < oldCur.length; ++k)
              { if (oldCur[k].marker == span.marker) { continue spans } }
            oldCur.push(span);
          }
        } else if (stretchCur) {
          old[i] = stretchCur;
        }
      }
      return old
    }

    // Used both to provide a JSON-safe object in .getHistory, and, when
    // detaching a document, to split the history in two
    function copyHistoryArray(events, newGroup, instantiateSel) {
      var copy = [];
      for (var i = 0; i < events.length; ++i) {
        var event = events[i];
        if (event.ranges) {
          copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
          continue
        }
        var changes = event.changes, newChanges = [];
        copy.push({changes: newChanges});
        for (var j = 0; j < changes.length; ++j) {
          var change = changes[j], m = (void 0);
          newChanges.push({from: change.from, to: change.to, text: change.text});
          if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
            if (indexOf(newGroup, Number(m[1])) > -1) {
              lst(newChanges)[prop] = change[prop];
              delete change[prop];
            }
          } } }
        }
      }
      return copy
    }

    // The 'scroll' parameter given to many of these indicated whether
    // the new cursor position should be scrolled into view after
    // modifying the selection.

    // If shift is held or the extend flag is set, extends a range to
    // include a given position (and optionally a second position).
    // Otherwise, simply returns the range between the given positions.
    // Used for cursor motion and such.
    function extendRange(range, head, other, extend) {
      if (extend) {
        var anchor = range.anchor;
        if (other) {
          var posBefore = cmp(head, anchor) < 0;
          if (posBefore != (cmp(other, anchor) < 0)) {
            anchor = head;
            head = other;
          } else if (posBefore != (cmp(head, other) < 0)) {
            head = other;
          }
        }
        return new Range(anchor, head)
      } else {
        return new Range(other || head, head)
      }
    }

    // Extend the primary selection range, discard the rest.
    function extendSelection(doc, head, other, options, extend) {
      if (extend == null) { extend = doc.cm && (doc.cm.display.shift || doc.extend); }
      setSelection(doc, new Selection([extendRange(doc.sel.primary(), head, other, extend)], 0), options);
    }

    // Extend all selections (pos is an array of selections with length
    // equal the number of selections)
    function extendSelections(doc, heads, options) {
      var out = [];
      var extend = doc.cm && (doc.cm.display.shift || doc.extend);
      for (var i = 0; i < doc.sel.ranges.length; i++)
        { out[i] = extendRange(doc.sel.ranges[i], heads[i], null, extend); }
      var newSel = normalizeSelection(doc.cm, out, doc.sel.primIndex);
      setSelection(doc, newSel, options);
    }

    // Updates a single range in the selection.
    function replaceOneSelection(doc, i, range, options) {
      var ranges = doc.sel.ranges.slice(0);
      ranges[i] = range;
      setSelection(doc, normalizeSelection(doc.cm, ranges, doc.sel.primIndex), options);
    }

    // Reset the selection to a single range.
    function setSimpleSelection(doc, anchor, head, options) {
      setSelection(doc, simpleSelection(anchor, head), options);
    }

    // Give beforeSelectionChange handlers a change to influence a
    // selection update.
    function filterSelectionChange(doc, sel, options) {
      var obj = {
        ranges: sel.ranges,
        update: function(ranges) {
          this.ranges = [];
          for (var i = 0; i < ranges.length; i++)
            { this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
                                       clipPos(doc, ranges[i].head)); }
        },
        origin: options && options.origin
      };
      signal(doc, "beforeSelectionChange", doc, obj);
      if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj); }
      if (obj.ranges != sel.ranges) { return normalizeSelection(doc.cm, obj.ranges, obj.ranges.length - 1) }
      else { return sel }
    }

    function setSelectionReplaceHistory(doc, sel, options) {
      var done = doc.history.done, last = lst(done);
      if (last && last.ranges) {
        done[done.length - 1] = sel;
        setSelectionNoUndo(doc, sel, options);
      } else {
        setSelection(doc, sel, options);
      }
    }

    // Set a new selection.
    function setSelection(doc, sel, options) {
      setSelectionNoUndo(doc, sel, options);
      addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
    }

    function setSelectionNoUndo(doc, sel, options) {
      if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
        { sel = filterSelectionChange(doc, sel, options); }

      var bias = options && options.bias ||
        (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
      setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

      if (!(options && options.scroll === false) && doc.cm && doc.cm.getOption("readOnly") != "nocursor")
        { ensureCursorVisible(doc.cm); }
    }

    function setSelectionInner(doc, sel) {
      if (sel.equals(doc.sel)) { return }

      doc.sel = sel;

      if (doc.cm) {
        doc.cm.curOp.updateInput = 1;
        doc.cm.curOp.selectionChanged = true;
        signalCursorActivity(doc.cm);
      }
      signalLater(doc, "cursorActivity", doc);
    }

    // Verify that the selection does not partially select any atomic
    // marked ranges.
    function reCheckSelection(doc) {
      setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false));
    }

    // Return a selection that does not partially select any atomic
    // ranges.
    function skipAtomicInSelection(doc, sel, bias, mayClear) {
      var out;
      for (var i = 0; i < sel.ranges.length; i++) {
        var range = sel.ranges[i];
        var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
        var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
        var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear);
        if (out || newAnchor != range.anchor || newHead != range.head) {
          if (!out) { out = sel.ranges.slice(0, i); }
          out[i] = new Range(newAnchor, newHead);
        }
      }
      return out ? normalizeSelection(doc.cm, out, sel.primIndex) : sel
    }

    function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
      var line = getLine(doc, pos.line);
      if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
        var sp = line.markedSpans[i], m = sp.marker;

        // Determine if we should prevent the cursor being placed to the left/right of an atomic marker
        // Historically this was determined using the inclusiveLeft/Right option, but the new way to control it
        // is with selectLeft/Right
        var preventCursorLeft = ("selectLeft" in m) ? !m.selectLeft : m.inclusiveLeft;
        var preventCursorRight = ("selectRight" in m) ? !m.selectRight : m.inclusiveRight;

        if ((sp.from == null || (preventCursorLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
            (sp.to == null || (preventCursorRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
          if (mayClear) {
            signal(m, "beforeCursorEnter");
            if (m.explicitlyCleared) {
              if (!line.markedSpans) { break }
              else {--i; continue}
            }
          }
          if (!m.atomic) { continue }

          if (oldPos) {
            var near = m.find(dir < 0 ? 1 : -1), diff = (void 0);
            if (dir < 0 ? preventCursorRight : preventCursorLeft)
              { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null); }
            if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
              { return skipAtomicInner(doc, near, pos, dir, mayClear) }
          }

          var far = m.find(dir < 0 ? -1 : 1);
          if (dir < 0 ? preventCursorLeft : preventCursorRight)
            { far = movePos(doc, far, dir, far.line == pos.line ? line : null); }
          return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
        }
      } }
      return pos
    }

    // Ensure a given position is not inside an atomic range.
    function skipAtomic(doc, pos, oldPos, bias, mayClear) {
      var dir = bias || 1;
      var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
          (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
          skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
          (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
      if (!found) {
        doc.cantEdit = true;
        return Pos(doc.first, 0)
      }
      return found
    }

    function movePos(doc, pos, dir, line) {
      if (dir < 0 && pos.ch == 0) {
        if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
        else { return null }
      } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
        if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
        else { return null }
      } else {
        return new Pos(pos.line, pos.ch + dir)
      }
    }

    function selectAll(cm) {
      cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
    }

    // UPDATING

    // Allow "beforeChange" event handlers to influence a change
    function filterChange(doc, change, update) {
      var obj = {
        canceled: false,
        from: change.from,
        to: change.to,
        text: change.text,
        origin: change.origin,
        cancel: function () { return obj.canceled = true; }
      };
      if (update) { obj.update = function (from, to, text, origin) {
        if (from) { obj.from = clipPos(doc, from); }
        if (to) { obj.to = clipPos(doc, to); }
        if (text) { obj.text = text; }
        if (origin !== undefined) { obj.origin = origin; }
      }; }
      signal(doc, "beforeChange", doc, obj);
      if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj); }

      if (obj.canceled) {
        if (doc.cm) { doc.cm.curOp.updateInput = 2; }
        return null
      }
      return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
    }

    // Apply a change to a document, and add it to the document's
    // history, and propagating it to all linked documents.
    function makeChange(doc, change, ignoreReadOnly) {
      if (doc.cm) {
        if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
        if (doc.cm.state.suppressEdits) { return }
      }

      if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
        change = filterChange(doc, change, true);
        if (!change) { return }
      }

      // Possibly split or suppress the update based on the presence
      // of read-only spans in its range.
      var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
      if (split) {
        for (var i = split.length - 1; i >= 0; --i)
          { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text, origin: change.origin}); }
      } else {
        makeChangeInner(doc, change);
      }
    }

    function makeChangeInner(doc, change) {
      if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
      var selAfter = computeSelAfterChange(doc, change);
      addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

      makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
      var rebased = [];

      linkedDocs(doc, function (doc, sharedHist) {
        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
          rebaseHist(doc.history, change);
          rebased.push(doc.history);
        }
        makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
      });
    }

    // Revert a change stored in a document's history.
    function makeChangeFromHistory(doc, type, allowSelectionOnly) {
      var suppress = doc.cm && doc.cm.state.suppressEdits;
      if (suppress && !allowSelectionOnly) { return }

      var hist = doc.history, event, selAfter = doc.sel;
      var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

      // Verify that there is a useable event (so that ctrl-z won't
      // needlessly clear selection events)
      var i = 0;
      for (; i < source.length; i++) {
        event = source[i];
        if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
          { break }
      }
      if (i == source.length) { return }
      hist.lastOrigin = hist.lastSelOrigin = null;

      for (;;) {
        event = source.pop();
        if (event.ranges) {
          pushSelectionToHistory(event, dest);
          if (allowSelectionOnly && !event.equals(doc.sel)) {
            setSelection(doc, event, {clearRedo: false});
            return
          }
          selAfter = event;
        } else if (suppress) {
          source.push(event);
          return
        } else { break }
      }

      // Build up a reverse change object to add to the opposite history
      // stack (redo when undoing, and vice versa).
      var antiChanges = [];
      pushSelectionToHistory(selAfter, dest);
      dest.push({changes: antiChanges, generation: hist.generation});
      hist.generation = event.generation || ++hist.maxGeneration;

      var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

      var loop = function ( i ) {
        var change = event.changes[i];
        change.origin = type;
        if (filter && !filterChange(doc, change, false)) {
          source.length = 0;
          return {}
        }

        antiChanges.push(historyChangeFromChange(doc, change));

        var after = i ? computeSelAfterChange(doc, change) : lst(source);
        makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
        if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}); }
        var rebased = [];

        // Propagate to the linked documents
        linkedDocs(doc, function (doc, sharedHist) {
          if (!sharedHist && indexOf(rebased, doc.history) == -1) {
            rebaseHist(doc.history, change);
            rebased.push(doc.history);
          }
          makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
        });
      };

      for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
        var returned = loop( i$1 );

        if ( returned ) { return returned.v; }
      }
    }

    // Sub-views need their line numbers shifted when text is added
    // above or below them in the parent document.
    function shiftDoc(doc, distance) {
      if (distance == 0) { return }
      doc.first += distance;
      doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
        Pos(range.anchor.line + distance, range.anchor.ch),
        Pos(range.head.line + distance, range.head.ch)
      ); }), doc.sel.primIndex);
      if (doc.cm) {
        regChange(doc.cm, doc.first, doc.first - distance, distance);
        for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
          { regLineChange(doc.cm, l, "gutter"); }
      }
    }

    // More lower-level change function, handling only a single document
    // (not linked ones).
    function makeChangeSingleDoc(doc, change, selAfter, spans) {
      if (doc.cm && !doc.cm.curOp)
        { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }

      if (change.to.line < doc.first) {
        shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
        return
      }
      if (change.from.line > doc.lastLine()) { return }

      // Clip the change to the size of this doc
      if (change.from.line < doc.first) {
        var shift = change.text.length - 1 - (doc.first - change.from.line);
        shiftDoc(doc, shift);
        change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
                  text: [lst(change.text)], origin: change.origin};
      }
      var last = doc.lastLine();
      if (change.to.line > last) {
        change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
                  text: [change.text[0]], origin: change.origin};
      }

      change.removed = getBetween(doc, change.from, change.to);

      if (!selAfter) { selAfter = computeSelAfterChange(doc, change); }
      if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans); }
      else { updateDoc(doc, change, spans); }
      setSelectionNoUndo(doc, selAfter, sel_dontScroll);

      if (doc.cantEdit && skipAtomic(doc, Pos(doc.firstLine(), 0)))
        { doc.cantEdit = false; }
    }

    // Handle the interaction of a change to a document with the editor
    // that this document is part of.
    function makeChangeSingleDocInEditor(cm, change, spans) {
      var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

      var recomputeMaxLength = false, checkWidthStart = from.line;
      if (!cm.options.lineWrapping) {
        checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
        doc.iter(checkWidthStart, to.line + 1, function (line) {
          if (line == display.maxLine) {
            recomputeMaxLength = true;
            return true
          }
        });
      }

      if (doc.sel.contains(change.from, change.to) > -1)
        { signalCursorActivity(cm); }

      updateDoc(doc, change, spans, estimateHeight(cm));

      if (!cm.options.lineWrapping) {
        doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
          var len = lineLength(line);
          if (len > display.maxLineLength) {
            display.maxLine = line;
            display.maxLineLength = len;
            display.maxLineChanged = true;
            recomputeMaxLength = false;
          }
        });
        if (recomputeMaxLength) { cm.curOp.updateMaxLine = true; }
      }

      retreatFrontier(doc, from.line);
      startWorker(cm, 400);

      var lendiff = change.text.length - (to.line - from.line) - 1;
      // Remember that these lines changed, for updating the display
      if (change.full)
        { regChange(cm); }
      else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
        { regLineChange(cm, from.line, "text"); }
      else
        { regChange(cm, from.line, to.line + 1, lendiff); }

      var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
      if (changeHandler || changesHandler) {
        var obj = {
          from: from, to: to,
          text: change.text,
          removed: change.removed,
          origin: change.origin
        };
        if (changeHandler) { signalLater(cm, "change", cm, obj); }
        if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj); }
      }
      cm.display.selForContextMenu = null;
    }

    function replaceRange(doc, code, from, to, origin) {
      var assign;

      if (!to) { to = from; }
      if (cmp(to, from) < 0) { (assign = [to, from], from = assign[0], to = assign[1]); }
      if (typeof code == "string") { code = doc.splitLines(code); }
      makeChange(doc, {from: from, to: to, text: code, origin: origin});
    }

    // Rebasing/resetting history to deal with externally-sourced changes

    function rebaseHistSelSingle(pos, from, to, diff) {
      if (to < pos.line) {
        pos.line += diff;
      } else if (from < pos.line) {
        pos.line = from;
        pos.ch = 0;
      }
    }

    // Tries to rebase an array of history events given a change in the
    // document. If the change touches the same lines as the event, the
    // event, and everything 'behind' it, is discarded. If the change is
    // before the event, the event's positions are updated. Uses a
    // copy-on-write scheme for the positions, to avoid having to
    // reallocate them all on every rebase, but also avoid problems with
    // shared position objects being unsafely updated.
    function rebaseHistArray(array, from, to, diff) {
      for (var i = 0; i < array.length; ++i) {
        var sub = array[i], ok = true;
        if (sub.ranges) {
          if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
          for (var j = 0; j < sub.ranges.length; j++) {
            rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
            rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
          }
          continue
        }
        for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
          var cur = sub.changes[j$1];
          if (to < cur.from.line) {
            cur.from = Pos(cur.from.line + diff, cur.from.ch);
            cur.to = Pos(cur.to.line + diff, cur.to.ch);
          } else if (from <= cur.to.line) {
            ok = false;
            break
          }
        }
        if (!ok) {
          array.splice(0, i + 1);
          i = 0;
        }
      }
    }

    function rebaseHist(hist, change) {
      var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
      rebaseHistArray(hist.done, from, to, diff);
      rebaseHistArray(hist.undone, from, to, diff);
    }

    // Utility for applying a change to a line by handle or number,
    // returning the number and optionally registering the line as
    // changed.
    function changeLine(doc, handle, changeType, op) {
      var no = handle, line = handle;
      if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)); }
      else { no = lineNo(handle); }
      if (no == null) { return null }
      if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType); }
      return line
    }

    // The document is represented as a BTree consisting of leaves, with
    // chunk of lines in them, and branches, with up to ten leaves or
    // other branch nodes below them. The top node is always a branch
    // node, and is the document object itself (meaning it has
    // additional methods and properties).
    //
    // All nodes have parent links. The tree is used both to go from
    // line numbers to line objects, and to go from objects to numbers.
    // It also indexes by height, and is used to convert between height
    // and line object, and to find the total height of the document.
    //
    // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

    function LeafChunk(lines) {
      this.lines = lines;
      this.parent = null;
      var height = 0;
      for (var i = 0; i < lines.length; ++i) {
        lines[i].parent = this;
        height += lines[i].height;
      }
      this.height = height;
    }

    LeafChunk.prototype = {
      chunkSize: function() { return this.lines.length },

      // Remove the n lines at offset 'at'.
      removeInner: function(at, n) {
        for (var i = at, e = at + n; i < e; ++i) {
          var line = this.lines[i];
          this.height -= line.height;
          cleanUpLine(line);
          signalLater(line, "delete");
        }
        this.lines.splice(at, n);
      },

      // Helper used to collapse a small branch into a single leaf.
      collapse: function(lines) {
        lines.push.apply(lines, this.lines);
      },

      // Insert the given array of lines at offset 'at', count them as
      // having the given height.
      insertInner: function(at, lines, height) {
        this.height += height;
        this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
        for (var i = 0; i < lines.length; ++i) { lines[i].parent = this; }
      },

      // Used to iterate over a part of the tree.
      iterN: function(at, n, op) {
        for (var e = at + n; at < e; ++at)
          { if (op(this.lines[at])) { return true } }
      }
    };

    function BranchChunk(children) {
      this.children = children;
      var size = 0, height = 0;
      for (var i = 0; i < children.length; ++i) {
        var ch = children[i];
        size += ch.chunkSize(); height += ch.height;
        ch.parent = this;
      }
      this.size = size;
      this.height = height;
      this.parent = null;
    }

    BranchChunk.prototype = {
      chunkSize: function() { return this.size },

      removeInner: function(at, n) {
        this.size -= n;
        for (var i = 0; i < this.children.length; ++i) {
          var child = this.children[i], sz = child.chunkSize();
          if (at < sz) {
            var rm = Math.min(n, sz - at), oldHeight = child.height;
            child.removeInner(at, rm);
            this.height -= oldHeight - child.height;
            if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
            if ((n -= rm) == 0) { break }
            at = 0;
          } else { at -= sz; }
        }
        // If the result is smaller than 25 lines, ensure that it is a
        // single leaf node.
        if (this.size - n < 25 &&
            (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
          var lines = [];
          this.collapse(lines);
          this.children = [new LeafChunk(lines)];
          this.children[0].parent = this;
        }
      },

      collapse: function(lines) {
        for (var i = 0; i < this.children.length; ++i) { this.children[i].collapse(lines); }
      },

      insertInner: function(at, lines, height) {
        this.size += lines.length;
        this.height += height;
        for (var i = 0; i < this.children.length; ++i) {
          var child = this.children[i], sz = child.chunkSize();
          if (at <= sz) {
            child.insertInner(at, lines, height);
            if (child.lines && child.lines.length > 50) {
              // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
              // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
              var remaining = child.lines.length % 25 + 25;
              for (var pos = remaining; pos < child.lines.length;) {
                var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
                child.height -= leaf.height;
                this.children.splice(++i, 0, leaf);
                leaf.parent = this;
              }
              child.lines = child.lines.slice(0, remaining);
              this.maybeSpill();
            }
            break
          }
          at -= sz;
        }
      },

      // When a node has grown, check whether it should be split.
      maybeSpill: function() {
        if (this.children.length <= 10) { return }
        var me = this;
        do {
          var spilled = me.children.splice(me.children.length - 5, 5);
          var sibling = new BranchChunk(spilled);
          if (!me.parent) { // Become the parent node
            var copy = new BranchChunk(me.children);
            copy.parent = me;
            me.children = [copy, sibling];
            me = copy;
         } else {
            me.size -= sibling.size;
            me.height -= sibling.height;
            var myIndex = indexOf(me.parent.children, me);
            me.parent.children.splice(myIndex + 1, 0, sibling);
          }
          sibling.parent = me.parent;
        } while (me.children.length > 10)
        me.parent.maybeSpill();
      },

      iterN: function(at, n, op) {
        for (var i = 0; i < this.children.length; ++i) {
          var child = this.children[i], sz = child.chunkSize();
          if (at < sz) {
            var used = Math.min(n, sz - at);
            if (child.iterN(at, used, op)) { return true }
            if ((n -= used) == 0) { break }
            at = 0;
          } else { at -= sz; }
        }
      }
    };

    // Line widgets are block elements displayed above or below a line.

    var LineWidget = function(doc, node, options) {
      if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
        { this[opt] = options[opt]; } } }
      this.doc = doc;
      this.node = node;
    };

    LineWidget.prototype.clear = function () {
      var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
      if (no == null || !ws) { return }
      for (var i = 0; i < ws.length; ++i) { if (ws[i] == this) { ws.splice(i--, 1); } }
      if (!ws.length) { line.widgets = null; }
      var height = widgetHeight(this);
      updateLineHeight(line, Math.max(0, line.height - height));
      if (cm) {
        runInOp(cm, function () {
          adjustScrollWhenAboveVisible(cm, line, -height);
          regLineChange(cm, no, "widget");
        });
        signalLater(cm, "lineWidgetCleared", cm, this, no);
      }
    };

    LineWidget.prototype.changed = function () {
        var this$1 = this;

      var oldH = this.height, cm = this.doc.cm, line = this.line;
      this.height = null;
      var diff = widgetHeight(this) - oldH;
      if (!diff) { return }
      if (!lineIsHidden(this.doc, line)) { updateLineHeight(line, line.height + diff); }
      if (cm) {
        runInOp(cm, function () {
          cm.curOp.forceUpdate = true;
          adjustScrollWhenAboveVisible(cm, line, diff);
          signalLater(cm, "lineWidgetChanged", cm, this$1, lineNo(line));
        });
      }
    };
    eventMixin(LineWidget);

    function adjustScrollWhenAboveVisible(cm, line, diff) {
      if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
        { addToScrollTop(cm, diff); }
    }

    function addLineWidget(doc, handle, node, options) {
      var widget = new LineWidget(doc, node, options);
      var cm = doc.cm;
      if (cm && widget.noHScroll) { cm.display.alignWidgets = true; }
      changeLine(doc, handle, "widget", function (line) {
        var widgets = line.widgets || (line.widgets = []);
        if (widget.insertAt == null) { widgets.push(widget); }
        else { widgets.splice(Math.min(widgets.length, Math.max(0, widget.insertAt)), 0, widget); }
        widget.line = line;
        if (cm && !lineIsHidden(doc, line)) {
          var aboveVisible = heightAtLine(line) < doc.scrollTop;
          updateLineHeight(line, line.height + widgetHeight(widget));
          if (aboveVisible) { addToScrollTop(cm, widget.height); }
          cm.curOp.forceUpdate = true;
        }
        return true
      });
      if (cm) { signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle)); }
      return widget
    }

    // TEXTMARKERS

    // Created with markText and setBookmark methods. A TextMarker is a
    // handle that can be used to clear or find a marked position in the
    // document. Line objects hold arrays (markedSpans) containing
    // {from, to, marker} object pointing to such marker objects, and
    // indicating that such a marker is present on that line. Multiple
    // lines may point to the same marker when it spans across lines.
    // The spans will have null for their from/to properties when the
    // marker continues beyond the start/end of the line. Markers have
    // links back to the lines they currently touch.

    // Collapsed markers have unique ids, in order to be able to order
    // them, which is needed for uniquely determining an outer marker
    // when they overlap (they may nest, but not partially overlap).
    var nextMarkerId = 0;

    var TextMarker = function(doc, type) {
      this.lines = [];
      this.type = type;
      this.doc = doc;
      this.id = ++nextMarkerId;
    };

    // Clear the marker.
    TextMarker.prototype.clear = function () {
      if (this.explicitlyCleared) { return }
      var cm = this.doc.cm, withOp = cm && !cm.curOp;
      if (withOp) { startOperation(cm); }
      if (hasHandler(this, "clear")) {
        var found = this.find();
        if (found) { signalLater(this, "clear", found.from, found.to); }
      }
      var min = null, max = null;
      for (var i = 0; i < this.lines.length; ++i) {
        var line = this.lines[i];
        var span = getMarkedSpanFor(line.markedSpans, this);
        if (cm && !this.collapsed) { regLineChange(cm, lineNo(line), "text"); }
        else if (cm) {
          if (span.to != null) { max = lineNo(line); }
          if (span.from != null) { min = lineNo(line); }
        }
        line.markedSpans = removeMarkedSpan(line.markedSpans, span);
        if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
          { updateLineHeight(line, textHeight(cm.display)); }
      }
      if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
        var visual = visualLine(this.lines[i$1]), len = lineLength(visual);
        if (len > cm.display.maxLineLength) {
          cm.display.maxLine = visual;
          cm.display.maxLineLength = len;
          cm.display.maxLineChanged = true;
        }
      } }

      if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1); }
      this.lines.length = 0;
      this.explicitlyCleared = true;
      if (this.atomic && this.doc.cantEdit) {
        this.doc.cantEdit = false;
        if (cm) { reCheckSelection(cm.doc); }
      }
      if (cm) { signalLater(cm, "markerCleared", cm, this, min, max); }
      if (withOp) { endOperation(cm); }
      if (this.parent) { this.parent.clear(); }
    };

    // Find the position of the marker in the document. Returns a {from,
    // to} object by default. Side can be passed to get a specific side
    // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
    // Pos objects returned contain a line object, rather than a line
    // number (used to prevent looking up the same line twice).
    TextMarker.prototype.find = function (side, lineObj) {
      if (side == null && this.type == "bookmark") { side = 1; }
      var from, to;
      for (var i = 0; i < this.lines.length; ++i) {
        var line = this.lines[i];
        var span = getMarkedSpanFor(line.markedSpans, this);
        if (span.from != null) {
          from = Pos(lineObj ? line : lineNo(line), span.from);
          if (side == -1) { return from }
        }
        if (span.to != null) {
          to = Pos(lineObj ? line : lineNo(line), span.to);
          if (side == 1) { return to }
        }
      }
      return from && {from: from, to: to}
    };

    // Signals that the marker's widget changed, and surrounding layout
    // should be recomputed.
    TextMarker.prototype.changed = function () {
        var this$1 = this;

      var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
      if (!pos || !cm) { return }
      runInOp(cm, function () {
        var line = pos.line, lineN = lineNo(pos.line);
        var view = findViewForLine(cm, lineN);
        if (view) {
          clearLineMeasurementCacheFor(view);
          cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
        }
        cm.curOp.updateMaxLine = true;
        if (!lineIsHidden(widget.doc, line) && widget.height != null) {
          var oldHeight = widget.height;
          widget.height = null;
          var dHeight = widgetHeight(widget) - oldHeight;
          if (dHeight)
            { updateLineHeight(line, line.height + dHeight); }
        }
        signalLater(cm, "markerChanged", cm, this$1);
      });
    };

    TextMarker.prototype.attachLine = function (line) {
      if (!this.lines.length && this.doc.cm) {
        var op = this.doc.cm.curOp;
        if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
          { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this); }
      }
      this.lines.push(line);
    };

    TextMarker.prototype.detachLine = function (line) {
      this.lines.splice(indexOf(this.lines, line), 1);
      if (!this.lines.length && this.doc.cm) {
        var op = this.doc.cm.curOp
        ;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
      }
    };
    eventMixin(TextMarker);

    // Create a marker, wire it up to the right lines, and
    function markText(doc, from, to, options, type) {
      // Shared markers (across linked documents) are handled separately
      // (markTextShared will call out to this again, once per
      // document).
      if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
      // Ensure we are in an operation.
      if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }

      var marker = new TextMarker(doc, type), diff = cmp(from, to);
      if (options) { copyObj(options, marker, false); }
      // Don't connect empty markers unless clearWhenEmpty is false
      if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
        { return marker }
      if (marker.replacedWith) {
        // Showing up as a widget implies collapsed (widget replaces text)
        marker.collapsed = true;
        marker.widgetNode = eltP("span", [marker.replacedWith], "CodeMirror-widget");
        if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true"); }
        if (options.insertLeft) { marker.widgetNode.insertLeft = true; }
      }
      if (marker.collapsed) {
        if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
            from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
          { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
        seeCollapsedSpans();
      }

      if (marker.addToHistory)
        { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN); }

      var curLine = from.line, cm = doc.cm, updateMaxLine;
      doc.iter(curLine, to.line + 1, function (line) {
        if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
          { updateMaxLine = true; }
        if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0); }
        addMarkedSpan(line, new MarkedSpan(marker,
                                           curLine == from.line ? from.ch : null,
                                           curLine == to.line ? to.ch : null));
        ++curLine;
      });
      // lineIsHidden depends on the presence of the spans, so needs a second pass
      if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
        if (lineIsHidden(doc, line)) { updateLineHeight(line, 0); }
      }); }

      if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }); }

      if (marker.readOnly) {
        seeReadOnlySpans();
        if (doc.history.done.length || doc.history.undone.length)
          { doc.clearHistory(); }
      }
      if (marker.collapsed) {
        marker.id = ++nextMarkerId;
        marker.atomic = true;
      }
      if (cm) {
        // Sync editor state
        if (updateMaxLine) { cm.curOp.updateMaxLine = true; }
        if (marker.collapsed)
          { regChange(cm, from.line, to.line + 1); }
        else if (marker.className || marker.startStyle || marker.endStyle || marker.css ||
                 marker.attributes || marker.title)
          { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text"); } }
        if (marker.atomic) { reCheckSelection(cm.doc); }
        signalLater(cm, "markerAdded", cm, marker);
      }
      return marker
    }

    // SHARED TEXTMARKERS

    // A shared marker spans multiple linked documents. It is
    // implemented as a meta-marker-object controlling multiple normal
    // markers.
    var SharedTextMarker = function(markers, primary) {
      this.markers = markers;
      this.primary = primary;
      for (var i = 0; i < markers.length; ++i)
        { markers[i].parent = this; }
    };

    SharedTextMarker.prototype.clear = function () {
      if (this.explicitlyCleared) { return }
      this.explicitlyCleared = true;
      for (var i = 0; i < this.markers.length; ++i)
        { this.markers[i].clear(); }
      signalLater(this, "clear");
    };

    SharedTextMarker.prototype.find = function (side, lineObj) {
      return this.primary.find(side, lineObj)
    };
    eventMixin(SharedTextMarker);

    function markTextShared(doc, from, to, options, type) {
      options = copyObj(options);
      options.shared = false;
      var markers = [markText(doc, from, to, options, type)], primary = markers[0];
      var widget = options.widgetNode;
      linkedDocs(doc, function (doc) {
        if (widget) { options.widgetNode = widget.cloneNode(true); }
        markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
        for (var i = 0; i < doc.linked.length; ++i)
          { if (doc.linked[i].isParent) { return } }
        primary = lst(markers);
      });
      return new SharedTextMarker(markers, primary)
    }

    function findSharedMarkers(doc) {
      return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
    }

    function copySharedMarkers(doc, markers) {
      for (var i = 0; i < markers.length; i++) {
        var marker = markers[i], pos = marker.find();
        var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
        if (cmp(mFrom, mTo)) {
          var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
          marker.markers.push(subMark);
          subMark.parent = marker;
        }
      }
    }

    function detachSharedMarkers(markers) {
      var loop = function ( i ) {
        var marker = markers[i], linked = [marker.primary.doc];
        linkedDocs(marker.primary.doc, function (d) { return linked.push(d); });
        for (var j = 0; j < marker.markers.length; j++) {
          var subMarker = marker.markers[j];
          if (indexOf(linked, subMarker.doc) == -1) {
            subMarker.parent = null;
            marker.markers.splice(j--, 1);
          }
        }
      };

      for (var i = 0; i < markers.length; i++) { loop( i ); }
    }

    var nextDocId = 0;
    var Doc = function(text, mode, firstLine, lineSep, direction) {
      if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep, direction) }
      if (firstLine == null) { firstLine = 0; }

      BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
      this.first = firstLine;
      this.scrollTop = this.scrollLeft = 0;
      this.cantEdit = false;
      this.cleanGeneration = 1;
      this.modeFrontier = this.highlightFrontier = firstLine;
      var start = Pos(firstLine, 0);
      this.sel = simpleSelection(start);
      this.history = new History(null);
      this.id = ++nextDocId;
      this.modeOption = mode;
      this.lineSep = lineSep;
      this.direction = (direction == "rtl") ? "rtl" : "ltr";
      this.extend = false;

      if (typeof text == "string") { text = this.splitLines(text); }
      updateDoc(this, {from: start, to: start, text: text});
      setSelection(this, simpleSelection(start), sel_dontScroll);
    };

    Doc.prototype = createObj(BranchChunk.prototype, {
      constructor: Doc,
      // Iterate over the document. Supports two forms -- with only one
      // argument, it calls that for each line in the document. With
      // three, it iterates over the range given by the first two (with
      // the second being non-inclusive).
      iter: function(from, to, op) {
        if (op) { this.iterN(from - this.first, to - from, op); }
        else { this.iterN(this.first, this.first + this.size, from); }
      },

      // Non-public interface for adding and removing lines.
      insert: function(at, lines) {
        var height = 0;
        for (var i = 0; i < lines.length; ++i) { height += lines[i].height; }
        this.insertInner(at - this.first, lines, height);
      },
      remove: function(at, n) { this.removeInner(at - this.first, n); },

      // From here, the methods are part of the public interface. Most
      // are also available from CodeMirror (editor) instances.

      getValue: function(lineSep) {
        var lines = getLines(this, this.first, this.first + this.size);
        if (lineSep === false) { return lines }
        return lines.join(lineSep || this.lineSeparator())
      },
      setValue: docMethodOp(function(code) {
        var top = Pos(this.first, 0), last = this.first + this.size - 1;
        makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
                          text: this.splitLines(code), origin: "setValue", full: true}, true);
        if (this.cm) { scrollToCoords(this.cm, 0, 0); }
        setSelection(this, simpleSelection(top), sel_dontScroll);
      }),
      replaceRange: function(code, from, to, origin) {
        from = clipPos(this, from);
        to = to ? clipPos(this, to) : from;
        replaceRange(this, code, from, to, origin);
      },
      getRange: function(from, to, lineSep) {
        var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
        if (lineSep === false) { return lines }
        return lines.join(lineSep || this.lineSeparator())
      },

      getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},

      getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
      getLineNumber: function(line) {return lineNo(line)},

      getLineHandleVisualStart: function(line) {
        if (typeof line == "number") { line = getLine(this, line); }
        return visualLine(line)
      },

      lineCount: function() {return this.size},
      firstLine: function() {return this.first},
      lastLine: function() {return this.first + this.size - 1},

      clipPos: function(pos) {return clipPos(this, pos)},

      getCursor: function(start) {
        var range = this.sel.primary(), pos;
        if (start == null || start == "head") { pos = range.head; }
        else if (start == "anchor") { pos = range.anchor; }
        else if (start == "end" || start == "to" || start === false) { pos = range.to(); }
        else { pos = range.from(); }
        return pos
      },
      listSelections: function() { return this.sel.ranges },
      somethingSelected: function() {return this.sel.somethingSelected()},

      setCursor: docMethodOp(function(line, ch, options) {
        setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
      }),
      setSelection: docMethodOp(function(anchor, head, options) {
        setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
      }),
      extendSelection: docMethodOp(function(head, other, options) {
        extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
      }),
      extendSelections: docMethodOp(function(heads, options) {
        extendSelections(this, clipPosArray(this, heads), options);
      }),
      extendSelectionsBy: docMethodOp(function(f, options) {
        var heads = map(this.sel.ranges, f);
        extendSelections(this, clipPosArray(this, heads), options);
      }),
      setSelections: docMethodOp(function(ranges, primary, options) {
        if (!ranges.length) { return }
        var out = [];
        for (var i = 0; i < ranges.length; i++)
          { out[i] = new Range(clipPos(this, ranges[i].anchor),
                             clipPos(this, ranges[i].head || ranges[i].anchor)); }
        if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex); }
        setSelection(this, normalizeSelection(this.cm, out, primary), options);
      }),
      addSelection: docMethodOp(function(anchor, head, options) {
        var ranges = this.sel.ranges.slice(0);
        ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
        setSelection(this, normalizeSelection(this.cm, ranges, ranges.length - 1), options);
      }),

      getSelection: function(lineSep) {
        var ranges = this.sel.ranges, lines;
        for (var i = 0; i < ranges.length; i++) {
          var sel = getBetween(this, ranges[i].from(), ranges[i].to());
          lines = lines ? lines.concat(sel) : sel;
        }
        if (lineSep === false) { return lines }
        else { return lines.join(lineSep || this.lineSeparator()) }
      },
      getSelections: function(lineSep) {
        var parts = [], ranges = this.sel.ranges;
        for (var i = 0; i < ranges.length; i++) {
          var sel = getBetween(this, ranges[i].from(), ranges[i].to());
          if (lineSep !== false) { sel = sel.join(lineSep || this.lineSeparator()); }
          parts[i] = sel;
        }
        return parts
      },
      replaceSelection: function(code, collapse, origin) {
        var dup = [];
        for (var i = 0; i < this.sel.ranges.length; i++)
          { dup[i] = code; }
        this.replaceSelections(dup, collapse, origin || "+input");
      },
      replaceSelections: docMethodOp(function(code, collapse, origin) {
        var changes = [], sel = this.sel;
        for (var i = 0; i < sel.ranges.length; i++) {
          var range = sel.ranges[i];
          changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin};
        }
        var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
        for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
          { makeChange(this, changes[i$1]); }
        if (newSel) { setSelectionReplaceHistory(this, newSel); }
        else if (this.cm) { ensureCursorVisible(this.cm); }
      }),
      undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
      redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
      undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
      redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

      setExtending: function(val) {this.extend = val;},
      getExtending: function() {return this.extend},

      historySize: function() {
        var hist = this.history, done = 0, undone = 0;
        for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done; } }
        for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone; } }
        return {undo: done, redo: undone}
      },
      clearHistory: function() {
        var this$1 = this;

        this.history = new History(this.history);
        linkedDocs(this, function (doc) { return doc.history = this$1.history; }, true);
      },

      markClean: function() {
        this.cleanGeneration = this.changeGeneration(true);
      },
      changeGeneration: function(forceSplit) {
        if (forceSplit)
          { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null; }
        return this.history.generation
      },
      isClean: function (gen) {
        return this.history.generation == (gen || this.cleanGeneration)
      },

      getHistory: function() {
        return {done: copyHistoryArray(this.history.done),
                undone: copyHistoryArray(this.history.undone)}
      },
      setHistory: function(histData) {
        var hist = this.history = new History(this.history);
        hist.done = copyHistoryArray(histData.done.slice(0), null, true);
        hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
      },

      setGutterMarker: docMethodOp(function(line, gutterID, value) {
        return changeLine(this, line, "gutter", function (line) {
          var markers = line.gutterMarkers || (line.gutterMarkers = {});
          markers[gutterID] = value;
          if (!value && isEmpty(markers)) { line.gutterMarkers = null; }
          return true
        })
      }),

      clearGutter: docMethodOp(function(gutterID) {
        var this$1 = this;

        this.iter(function (line) {
          if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
            changeLine(this$1, line, "gutter", function () {
              line.gutterMarkers[gutterID] = null;
              if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null; }
              return true
            });
          }
        });
      }),

      lineInfo: function(line) {
        var n;
        if (typeof line == "number") {
          if (!isLine(this, line)) { return null }
          n = line;
          line = getLine(this, line);
          if (!line) { return null }
        } else {
          n = lineNo(line);
          if (n == null) { return null }
        }
        return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
                textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
                widgets: line.widgets}
      },

      addLineClass: docMethodOp(function(handle, where, cls) {
        return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
          var prop = where == "text" ? "textClass"
                   : where == "background" ? "bgClass"
                   : where == "gutter" ? "gutterClass" : "wrapClass";
          if (!line[prop]) { line[prop] = cls; }
          else if (classTest(cls).test(line[prop])) { return false }
          else { line[prop] += " " + cls; }
          return true
        })
      }),
      removeLineClass: docMethodOp(function(handle, where, cls) {
        return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
          var prop = where == "text" ? "textClass"
                   : where == "background" ? "bgClass"
                   : where == "gutter" ? "gutterClass" : "wrapClass";
          var cur = line[prop];
          if (!cur) { return false }
          else if (cls == null) { line[prop] = null; }
          else {
            var found = cur.match(classTest(cls));
            if (!found) { return false }
            var end = found.index + found[0].length;
            line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
          }
          return true
        })
      }),

      addLineWidget: docMethodOp(function(handle, node, options) {
        return addLineWidget(this, handle, node, options)
      }),
      removeLineWidget: function(widget) { widget.clear(); },

      markText: function(from, to, options) {
        return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
      },
      setBookmark: function(pos, options) {
        var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                        insertLeft: options && options.insertLeft,
                        clearWhenEmpty: false, shared: options && options.shared,
                        handleMouseEvents: options && options.handleMouseEvents};
        pos = clipPos(this, pos);
        return markText(this, pos, pos, realOpts, "bookmark")
      },
      findMarksAt: function(pos) {
        pos = clipPos(this, pos);
        var markers = [], spans = getLine(this, pos.line).markedSpans;
        if (spans) { for (var i = 0; i < spans.length; ++i) {
          var span = spans[i];
          if ((span.from == null || span.from <= pos.ch) &&
              (span.to == null || span.to >= pos.ch))
            { markers.push(span.marker.parent || span.marker); }
        } }
        return markers
      },
      findMarks: function(from, to, filter) {
        from = clipPos(this, from); to = clipPos(this, to);
        var found = [], lineNo = from.line;
        this.iter(from.line, to.line + 1, function (line) {
          var spans = line.markedSpans;
          if (spans) { for (var i = 0; i < spans.length; i++) {
            var span = spans[i];
            if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
                  span.from == null && lineNo != from.line ||
                  span.from != null && lineNo == to.line && span.from >= to.ch) &&
                (!filter || filter(span.marker)))
              { found.push(span.marker.parent || span.marker); }
          } }
          ++lineNo;
        });
        return found
      },
      getAllMarks: function() {
        var markers = [];
        this.iter(function (line) {
          var sps = line.markedSpans;
          if (sps) { for (var i = 0; i < sps.length; ++i)
            { if (sps[i].from != null) { markers.push(sps[i].marker); } } }
        });
        return markers
      },

      posFromIndex: function(off) {
        var ch, lineNo = this.first, sepSize = this.lineSeparator().length;
        this.iter(function (line) {
          var sz = line.text.length + sepSize;
          if (sz > off) { ch = off; return true }
          off -= sz;
          ++lineNo;
        });
        return clipPos(this, Pos(lineNo, ch))
      },
      indexFromPos: function (coords) {
        coords = clipPos(this, coords);
        var index = coords.ch;
        if (coords.line < this.first || coords.ch < 0) { return 0 }
        var sepSize = this.lineSeparator().length;
        this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
          index += line.text.length + sepSize;
        });
        return index
      },

      copy: function(copyHistory) {
        var doc = new Doc(getLines(this, this.first, this.first + this.size),
                          this.modeOption, this.first, this.lineSep, this.direction);
        doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
        doc.sel = this.sel;
        doc.extend = false;
        if (copyHistory) {
          doc.history.undoDepth = this.history.undoDepth;
          doc.setHistory(this.getHistory());
        }
        return doc
      },

      linkedDoc: function(options) {
        if (!options) { options = {}; }
        var from = this.first, to = this.first + this.size;
        if (options.from != null && options.from > from) { from = options.from; }
        if (options.to != null && options.to < to) { to = options.to; }
        var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction);
        if (options.sharedHist) { copy.history = this.history
        ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
        copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
        copySharedMarkers(copy, findSharedMarkers(this));
        return copy
      },
      unlinkDoc: function(other) {
        if (other instanceof CodeMirror) { other = other.doc; }
        if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
          var link = this.linked[i];
          if (link.doc != other) { continue }
          this.linked.splice(i, 1);
          other.unlinkDoc(this);
          detachSharedMarkers(findSharedMarkers(this));
          break
        } }
        // If the histories were shared, split them again
        if (other.history == this.history) {
          var splitIds = [other.id];
          linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true);
          other.history = new History(null);
          other.history.done = copyHistoryArray(this.history.done, splitIds);
          other.history.undone = copyHistoryArray(this.history.undone, splitIds);
        }
      },
      iterLinkedDocs: function(f) {linkedDocs(this, f);},

      getMode: function() {return this.mode},
      getEditor: function() {return this.cm},

      splitLines: function(str) {
        if (this.lineSep) { return str.split(this.lineSep) }
        return splitLinesAuto(str)
      },
      lineSeparator: function() { return this.lineSep || "\n" },

      setDirection: docMethodOp(function (dir) {
        if (dir != "rtl") { dir = "ltr"; }
        if (dir == this.direction) { return }
        this.direction = dir;
        this.iter(function (line) { return line.order = null; });
        if (this.cm) { directionChanged(this.cm); }
      })
    });

    // Public alias.
    Doc.prototype.eachLine = Doc.prototype.iter;

    // Kludge to work around strange IE behavior where it'll sometimes
    // re-fire a series of drag-related events right after the drop (#1551)
    var lastDrop = 0;

    function onDrop(e) {
      var cm = this;
      clearDragCursor(cm);
      if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
        { return }
      e_preventDefault(e);
      if (ie) { lastDrop = +new Date; }
      var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
      if (!pos || cm.isReadOnly()) { return }
      // Might be a file drop, in which case we simply extract the text
      // and insert it.
      if (files && files.length && window.FileReader && window.File) {
        var n = files.length, text = Array(n), read = 0;
        var markAsReadAndPasteIfAllFilesAreRead = function () {
          if (++read == n) {
            operation(cm, function () {
              pos = clipPos(cm.doc, pos);
              var change = {from: pos, to: pos,
                            text: cm.doc.splitLines(
                                text.filter(function (t) { return t != null; }).join(cm.doc.lineSeparator())),
                            origin: "paste"};
              makeChange(cm.doc, change);
              setSelectionReplaceHistory(cm.doc, simpleSelection(clipPos(cm.doc, pos), clipPos(cm.doc, changeEnd(change))));
            })();
          }
        };
        var readTextFromFile = function (file, i) {
          if (cm.options.allowDropFileTypes &&
              indexOf(cm.options.allowDropFileTypes, file.type) == -1) {
            markAsReadAndPasteIfAllFilesAreRead();
            return
          }
          var reader = new FileReader;
          reader.onerror = function () { return markAsReadAndPasteIfAllFilesAreRead(); };
          reader.onload = function () {
            var content = reader.result;
            if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) {
              markAsReadAndPasteIfAllFilesAreRead();
              return
            }
            text[i] = content;
            markAsReadAndPasteIfAllFilesAreRead();
          };
          reader.readAsText(file);
        };
        for (var i = 0; i < files.length; i++) { readTextFromFile(files[i], i); }
      } else { // Normal drop
        // Don't do a replace if the drop happened inside of the selected text.
        if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
          cm.state.draggingText(e);
          // Ensure the editor is re-focused
          setTimeout(function () { return cm.display.input.focus(); }, 20);
          return
        }
        try {
          var text$1 = e.dataTransfer.getData("Text");
          if (text$1) {
            var selected;
            if (cm.state.draggingText && !cm.state.draggingText.copy)
              { selected = cm.listSelections(); }
            setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
            if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
              { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag"); } }
            cm.replaceSelection(text$1, "around", "paste");
            cm.display.input.focus();
          }
        }
        catch(e$1){}
      }
    }

    function onDragStart(cm, e) {
      if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
      if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }

      e.dataTransfer.setData("Text", cm.getSelection());
      e.dataTransfer.effectAllowed = "copyMove";

      // Use dummy image instead of default browsers image.
      // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
      if (e.dataTransfer.setDragImage && !safari) {
        var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
        img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
        if (presto) {
          img.width = img.height = 1;
          cm.display.wrapper.appendChild(img);
          // Force a relayout, or Opera won't use our image for some obscure reason
          img._top = img.offsetTop;
        }
        e.dataTransfer.setDragImage(img, 0, 0);
        if (presto) { img.parentNode.removeChild(img); }
      }
    }

    function onDragOver(cm, e) {
      var pos = posFromMouse(cm, e);
      if (!pos) { return }
      var frag = document.createDocumentFragment();
      drawSelectionCursor(cm, pos, frag);
      if (!cm.display.dragCursor) {
        cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
        cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
      }
      removeChildrenAndAdd(cm.display.dragCursor, frag);
    }

    function clearDragCursor(cm) {
      if (cm.display.dragCursor) {
        cm.display.lineSpace.removeChild(cm.display.dragCursor);
        cm.display.dragCursor = null;
      }
    }

    // These must be handled carefully, because naively registering a
    // handler for each editor will cause the editors to never be
    // garbage collected.

    function forEachCodeMirror(f) {
      if (!document.getElementsByClassName) { return }
      var byClass = document.getElementsByClassName("CodeMirror"), editors = [];
      for (var i = 0; i < byClass.length; i++) {
        var cm = byClass[i].CodeMirror;
        if (cm) { editors.push(cm); }
      }
      if (editors.length) { editors[0].operation(function () {
        for (var i = 0; i < editors.length; i++) { f(editors[i]); }
      }); }
    }

    var globalsRegistered = false;
    function ensureGlobalHandlers() {
      if (globalsRegistered) { return }
      registerGlobalHandlers();
      globalsRegistered = true;
    }
    function registerGlobalHandlers() {
      // When the window resizes, we need to refresh active editors.
      var resizeTimer;
      on(window, "resize", function () {
        if (resizeTimer == null) { resizeTimer = setTimeout(function () {
          resizeTimer = null;
          forEachCodeMirror(onResize);
        }, 100); }
      });
      // When the window loses focus, we want to show the editor as blurred
      on(window, "blur", function () { return forEachCodeMirror(onBlur); });
    }
    // Called when the window resizes
    function onResize(cm) {
      var d = cm.display;
      // Might be a text scaling operation, clear size caches.
      d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
      d.scrollbarsClipped = false;
      cm.setSize();
    }

    var keyNames = {
      3: "Pause", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
      19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
      36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
      46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
      106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 145: "ScrollLock",
      173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
      221: "]", 222: "'", 224: "Mod", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
      63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
    };

    // Number keys
    for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i); }
    // Alphabetic keys
    for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1); }
    // Function keys
    for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2; }

    var keyMap = {};

    keyMap.basic = {
      "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
      "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
      "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
      "Tab": "defaultTab", "Shift-Tab": "indentAuto",
      "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
      "Esc": "singleSelection"
    };
    // Note that the save and find-related commands aren't defined by
    // default. User code or addons can define them. Unknown commands
    // are simply ignored.
    keyMap.pcDefault = {
      "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
      "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
      "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
      "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
      "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
      "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
      "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
      "fallthrough": "basic"
    };
    // Very basic readline/emacs-style bindings, which are standard on Mac.
    keyMap.emacsy = {
      "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
      "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
      "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
      "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars",
      "Ctrl-O": "openLine"
    };
    keyMap.macDefault = {
      "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
      "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
      "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
      "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
      "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
      "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
      "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
      "fallthrough": ["basic", "emacsy"]
    };
    keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

    // KEYMAP DISPATCH

    function normalizeKeyName(name) {
      var parts = name.split(/-(?!$)/);
      name = parts[parts.length - 1];
      var alt, ctrl, shift, cmd;
      for (var i = 0; i < parts.length - 1; i++) {
        var mod = parts[i];
        if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true; }
        else if (/^a(lt)?$/i.test(mod)) { alt = true; }
        else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true; }
        else if (/^s(hift)?$/i.test(mod)) { shift = true; }
        else { throw new Error("Unrecognized modifier name: " + mod) }
      }
      if (alt) { name = "Alt-" + name; }
      if (ctrl) { name = "Ctrl-" + name; }
      if (cmd) { name = "Cmd-" + name; }
      if (shift) { name = "Shift-" + name; }
      return name
    }

    // This is a kludge to keep keymaps mostly working as raw objects
    // (backwards compatibility) while at the same time support features
    // like normalization and multi-stroke key bindings. It compiles a
    // new normalized keymap, and then updates the old object to reflect
    // this.
    function normalizeKeyMap(keymap) {
      var copy = {};
      for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
        var value = keymap[keyname];
        if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
        if (value == "...") { delete keymap[keyname]; continue }

        var keys = map(keyname.split(" "), normalizeKeyName);
        for (var i = 0; i < keys.length; i++) {
          var val = (void 0), name = (void 0);
          if (i == keys.length - 1) {
            name = keys.join(" ");
            val = value;
          } else {
            name = keys.slice(0, i + 1).join(" ");
            val = "...";
          }
          var prev = copy[name];
          if (!prev) { copy[name] = val; }
          else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
        }
        delete keymap[keyname];
      } }
      for (var prop in copy) { keymap[prop] = copy[prop]; }
      return keymap
    }

    function lookupKey(key, map, handle, context) {
      map = getKeyMap(map);
      var found = map.call ? map.call(key, context) : map[key];
      if (found === false) { return "nothing" }
      if (found === "...") { return "multi" }
      if (found != null && handle(found)) { return "handled" }

      if (map.fallthrough) {
        if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
          { return lookupKey(key, map.fallthrough, handle, context) }
        for (var i = 0; i < map.fallthrough.length; i++) {
          var result = lookupKey(key, map.fallthrough[i], handle, context);
          if (result) { return result }
        }
      }
    }

    // Modifier key presses don't count as 'real' key presses for the
    // purpose of keymap fallthrough.
    function isModifierKey(value) {
      var name = typeof value == "string" ? value : keyNames[value.keyCode];
      return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
    }

    function addModifierNames(name, event, noShift) {
      var base = name;
      if (event.altKey && base != "Alt") { name = "Alt-" + name; }
      if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name; }
      if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Mod") { name = "Cmd-" + name; }
      if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name; }
      return name
    }

    // Look up the name of a key as indicated by an event object.
    function keyName(event, noShift) {
      if (presto && event.keyCode == 34 && event["char"]) { return false }
      var name = keyNames[event.keyCode];
      if (name == null || event.altGraphKey) { return false }
      // Ctrl-ScrollLock has keyCode 3, same as Ctrl-Pause,
      // so we'll use event.code when available (Chrome 48+, FF 38+, Safari 10.1+)
      if (event.keyCode == 3 && event.code) { name = event.code; }
      return addModifierNames(name, event, noShift)
    }

    function getKeyMap(val) {
      return typeof val == "string" ? keyMap[val] : val
    }

    // Helper for deleting text near the selection(s), used to implement
    // backspace, delete, and similar functionality.
    function deleteNearSelection(cm, compute) {
      var ranges = cm.doc.sel.ranges, kill = [];
      // Build up a set of ranges to kill first, merging overlapping
      // ranges.
      for (var i = 0; i < ranges.length; i++) {
        var toKill = compute(ranges[i]);
        while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
          var replaced = kill.pop();
          if (cmp(replaced.from, toKill.from) < 0) {
            toKill.from = replaced.from;
            break
          }
        }
        kill.push(toKill);
      }
      // Next, remove those actual ranges.
      runInOp(cm, function () {
        for (var i = kill.length - 1; i >= 0; i--)
          { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete"); }
        ensureCursorVisible(cm);
      });
    }

    function moveCharLogically(line, ch, dir) {
      var target = skipExtendingChars(line.text, ch + dir, dir);
      return target < 0 || target > line.text.length ? null : target
    }

    function moveLogically(line, start, dir) {
      var ch = moveCharLogically(line, start.ch, dir);
      return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before")
    }

    function endOfLine(visually, cm, lineObj, lineNo, dir) {
      if (visually) {
        if (cm.doc.direction == "rtl") { dir = -dir; }
        var order = getOrder(lineObj, cm.doc.direction);
        if (order) {
          var part = dir < 0 ? lst(order) : order[0];
          var moveInStorageOrder = (dir < 0) == (part.level == 1);
          var sticky = moveInStorageOrder ? "after" : "before";
          var ch;
          // With a wrapped rtl chunk (possibly spanning multiple bidi parts),
          // it could be that the last bidi part is not on the last visual line,
          // since visual lines contain content order-consecutive chunks.
          // Thus, in rtl, we are looking for the first (content-order) character
          // in the rtl chunk that is on the last line (that is, the same line
          // as the last (content-order) character).
          if (part.level > 0 || cm.doc.direction == "rtl") {
            var prep = prepareMeasureForLine(cm, lineObj);
            ch = dir < 0 ? lineObj.text.length - 1 : 0;
            var targetTop = measureCharPrepared(cm, prep, ch).top;
            ch = findFirst(function (ch) { return measureCharPrepared(cm, prep, ch).top == targetTop; }, (dir < 0) == (part.level == 1) ? part.from : part.to - 1, ch);
            if (sticky == "before") { ch = moveCharLogically(lineObj, ch, 1); }
          } else { ch = dir < 0 ? part.to : part.from; }
          return new Pos(lineNo, ch, sticky)
        }
      }
      return new Pos(lineNo, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after")
    }

    function moveVisually(cm, line, start, dir) {
      var bidi = getOrder(line, cm.doc.direction);
      if (!bidi) { return moveLogically(line, start, dir) }
      if (start.ch >= line.text.length) {
        start.ch = line.text.length;
        start.sticky = "before";
      } else if (start.ch <= 0) {
        start.ch = 0;
        start.sticky = "after";
      }
      var partPos = getBidiPartAt(bidi, start.ch, start.sticky), part = bidi[partPos];
      if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
        // Case 1: We move within an ltr part in an ltr editor. Even with wrapped lines,
        // nothing interesting happens.
        return moveLogically(line, start, dir)
      }

      var mv = function (pos, dir) { return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir); };
      var prep;
      var getWrappedLineExtent = function (ch) {
        if (!cm.options.lineWrapping) { return {begin: 0, end: line.text.length} }
        prep = prep || prepareMeasureForLine(cm, line);
        return wrappedLineExtentChar(cm, line, prep, ch)
      };
      var wrappedLineExtent = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch);

      if (cm.doc.direction == "rtl" || part.level == 1) {
        var moveInStorageOrder = (part.level == 1) == (dir < 0);
        var ch = mv(start, moveInStorageOrder ? 1 : -1);
        if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent.begin : ch <= part.to && ch <= wrappedLineExtent.end)) {
          // Case 2: We move within an rtl part or in an rtl editor on the same visual line
          var sticky = moveInStorageOrder ? "before" : "after";
          return new Pos(start.line, ch, sticky)
        }
      }

      // Case 3: Could not move within this bidi part in this visual line, so leave
      // the current bidi part

      var searchInVisualLine = function (partPos, dir, wrappedLineExtent) {
        var getRes = function (ch, moveInStorageOrder) { return moveInStorageOrder
          ? new Pos(start.line, mv(ch, 1), "before")
          : new Pos(start.line, ch, "after"); };

        for (; partPos >= 0 && partPos < bidi.length; partPos += dir) {
          var part = bidi[partPos];
          var moveInStorageOrder = (dir > 0) == (part.level != 1);
          var ch = moveInStorageOrder ? wrappedLineExtent.begin : mv(wrappedLineExtent.end, -1);
          if (part.from <= ch && ch < part.to) { return getRes(ch, moveInStorageOrder) }
          ch = moveInStorageOrder ? part.from : mv(part.to, -1);
          if (wrappedLineExtent.begin <= ch && ch < wrappedLineExtent.end) { return getRes(ch, moveInStorageOrder) }
        }
      };

      // Case 3a: Look for other bidi parts on the same visual line
      var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent);
      if (res) { return res }

      // Case 3b: Look for other bidi parts on the next visual line
      var nextCh = dir > 0 ? wrappedLineExtent.end : mv(wrappedLineExtent.begin, -1);
      if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
        res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh));
        if (res) { return res }
      }

      // Case 4: Nowhere to move
      return null
    }

    // Commands are parameter-less actions that can be performed on an
    // editor, mostly used for keybindings.
    var commands = {
      selectAll: selectAll,
      singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
      killLine: function (cm) { return deleteNearSelection(cm, function (range) {
        if (range.empty()) {
          var len = getLine(cm.doc, range.head.line).text.length;
          if (range.head.ch == len && range.head.line < cm.lastLine())
            { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
          else
            { return {from: range.head, to: Pos(range.head.line, len)} }
        } else {
          return {from: range.from(), to: range.to()}
        }
      }); },
      deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
        from: Pos(range.from().line, 0),
        to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
      }); }); },
      delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
        from: Pos(range.from().line, 0), to: range.from()
      }); }); },
      delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
        var top = cm.charCoords(range.head, "div").top + 5;
        var leftPos = cm.coordsChar({left: 0, top: top}, "div");
        return {from: leftPos, to: range.from()}
      }); },
      delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
        var top = cm.charCoords(range.head, "div").top + 5;
        var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
        return {from: range.from(), to: rightPos }
      }); },
      undo: function (cm) { return cm.undo(); },
      redo: function (cm) { return cm.redo(); },
      undoSelection: function (cm) { return cm.undoSelection(); },
      redoSelection: function (cm) { return cm.redoSelection(); },
      goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
      goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
      goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
        {origin: "+move", bias: 1}
      ); },
      goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
        {origin: "+move", bias: 1}
      ); },
      goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
        {origin: "+move", bias: -1}
      ); },
      goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
        var top = cm.cursorCoords(range.head, "div").top + 5;
        return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
      }, sel_move); },
      goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
        var top = cm.cursorCoords(range.head, "div").top + 5;
        return cm.coordsChar({left: 0, top: top}, "div")
      }, sel_move); },
      goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
        var top = cm.cursorCoords(range.head, "div").top + 5;
        var pos = cm.coordsChar({left: 0, top: top}, "div");
        if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
        return pos
      }, sel_move); },
      goLineUp: function (cm) { return cm.moveV(-1, "line"); },
      goLineDown: function (cm) { return cm.moveV(1, "line"); },
      goPageUp: function (cm) { return cm.moveV(-1, "page"); },
      goPageDown: function (cm) { return cm.moveV(1, "page"); },
      goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
      goCharRight: function (cm) { return cm.moveH(1, "char"); },
      goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
      goColumnRight: function (cm) { return cm.moveH(1, "column"); },
      goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
      goGroupRight: function (cm) { return cm.moveH(1, "group"); },
      goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
      goWordRight: function (cm) { return cm.moveH(1, "word"); },
      delCharBefore: function (cm) { return cm.deleteH(-1, "codepoint"); },
      delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
      delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
      delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
      delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
      delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
      indentAuto: function (cm) { return cm.indentSelection("smart"); },
      indentMore: function (cm) { return cm.indentSelection("add"); },
      indentLess: function (cm) { return cm.indentSelection("subtract"); },
      insertTab: function (cm) { return cm.replaceSelection("\t"); },
      insertSoftTab: function (cm) {
        var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
        for (var i = 0; i < ranges.length; i++) {
          var pos = ranges[i].from();
          var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
          spaces.push(spaceStr(tabSize - col % tabSize));
        }
        cm.replaceSelections(spaces);
      },
      defaultTab: function (cm) {
        if (cm.somethingSelected()) { cm.indentSelection("add"); }
        else { cm.execCommand("insertTab"); }
      },
      // Swap the two chars left and right of each selection's head.
      // Move cursor behind the two swapped characters afterwards.
      //
      // Doesn't consider line feeds a character.
      // Doesn't scan more than one line above to find a character.
      // Doesn't do anything on an empty line.
      // Doesn't do anything with non-empty selections.
      transposeChars: function (cm) { return runInOp(cm, function () {
        var ranges = cm.listSelections(), newSel = [];
        for (var i = 0; i < ranges.length; i++) {
          if (!ranges[i].empty()) { continue }
          var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
          if (line) {
            if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1); }
            if (cur.ch > 0) {
              cur = new Pos(cur.line, cur.ch + 1);
              cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                              Pos(cur.line, cur.ch - 2), cur, "+transpose");
            } else if (cur.line > cm.doc.first) {
              var prev = getLine(cm.doc, cur.line - 1).text;
              if (prev) {
                cur = new Pos(cur.line, 1);
                cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
                                prev.charAt(prev.length - 1),
                                Pos(cur.line - 1, prev.length - 1), cur, "+transpose");
              }
            }
          }
          newSel.push(new Range(cur, cur));
        }
        cm.setSelections(newSel);
      }); },
      newlineAndIndent: function (cm) { return runInOp(cm, function () {
        var sels = cm.listSelections();
        for (var i = sels.length - 1; i >= 0; i--)
          { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input"); }
        sels = cm.listSelections();
        for (var i$1 = 0; i$1 < sels.length; i$1++)
          { cm.indentLine(sels[i$1].from().line, null, true); }
        ensureCursorVisible(cm);
      }); },
      openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
      toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
    };


    function lineStart(cm, lineN) {
      var line = getLine(cm.doc, lineN);
      var visual = visualLine(line);
      if (visual != line) { lineN = lineNo(visual); }
      return endOfLine(true, cm, visual, lineN, 1)
    }
    function lineEnd(cm, lineN) {
      var line = getLine(cm.doc, lineN);
      var visual = visualLineEnd(line);
      if (visual != line) { lineN = lineNo(visual); }
      return endOfLine(true, cm, line, lineN, -1)
    }
    function lineStartSmart(cm, pos) {
      var start = lineStart(cm, pos.line);
      var line = getLine(cm.doc, start.line);
      var order = getOrder(line, cm.doc.direction);
      if (!order || order[0].level == 0) {
        var firstNonWS = Math.max(start.ch, line.text.search(/\S/));
        var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
        return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky)
      }
      return start
    }

    // Run a handler that was bound to a key.
    function doHandleBinding(cm, bound, dropShift) {
      if (typeof bound == "string") {
        bound = commands[bound];
        if (!bound) { return false }
      }
      // Ensure previous input has been read, so that the handler sees a
      // consistent view of the document
      cm.display.input.ensurePolled();
      var prevShift = cm.display.shift, done = false;
      try {
        if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
        if (dropShift) { cm.display.shift = false; }
        done = bound(cm) != Pass;
      } finally {
        cm.display.shift = prevShift;
        cm.state.suppressEdits = false;
      }
      return done
    }

    function lookupKeyForEditor(cm, name, handle) {
      for (var i = 0; i < cm.state.keyMaps.length; i++) {
        var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
        if (result) { return result }
      }
      return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
        || lookupKey(name, cm.options.keyMap, handle, cm)
    }

    // Note that, despite the name, this function is also used to check
    // for bound mouse clicks.

    var stopSeq = new Delayed;

    function dispatchKey(cm, name, e, handle) {
      var seq = cm.state.keySeq;
      if (seq) {
        if (isModifierKey(name)) { return "handled" }
        if (/\'$/.test(name))
          { cm.state.keySeq = null; }
        else
          { stopSeq.set(50, function () {
            if (cm.state.keySeq == seq) {
              cm.state.keySeq = null;
              cm.display.input.reset();
            }
          }); }
        if (dispatchKeyInner(cm, seq + " " + name, e, handle)) { return true }
      }
      return dispatchKeyInner(cm, name, e, handle)
    }

    function dispatchKeyInner(cm, name, e, handle) {
      var result = lookupKeyForEditor(cm, name, handle);

      if (result == "multi")
        { cm.state.keySeq = name; }
      if (result == "handled")
        { signalLater(cm, "keyHandled", cm, name, e); }

      if (result == "handled" || result == "multi") {
        e_preventDefault(e);
        restartBlink(cm);
      }

      return !!result
    }

    // Handle a key from the keydown event.
    function handleKeyBinding(cm, e) {
      var name = keyName(e, true);
      if (!name) { return false }

      if (e.shiftKey && !cm.state.keySeq) {
        // First try to resolve full name (including 'Shift-'). Failing
        // that, see if there is a cursor-motion command (starting with
        // 'go') bound to the keyname without 'Shift-'.
        return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
            || dispatchKey(cm, name, e, function (b) {
                 if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
                   { return doHandleBinding(cm, b) }
               })
      } else {
        return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
      }
    }

    // Handle a key from the keypress event
    function handleCharBinding(cm, e, ch) {
      return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
    }

    var lastStoppedKey = null;
    function onKeyDown(e) {
      var cm = this;
      if (e.target && e.target != cm.display.input.getField()) { return }
      cm.curOp.focus = activeElt();
      if (signalDOMEvent(cm, e)) { return }
      // IE does strange things with escape.
      if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false; }
      var code = e.keyCode;
      cm.display.shift = code == 16 || e.shiftKey;
      var handled = handleKeyBinding(cm, e);
      if (presto) {
        lastStoppedKey = handled ? code : null;
        // Opera has no cut event... we try to at least catch the key combo
        if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
          { cm.replaceSelection("", null, "cut"); }
      }
      if (gecko && !mac && !handled && code == 46 && e.shiftKey && !e.ctrlKey && document.execCommand)
        { document.execCommand("cut"); }

      // Turn mouse into crosshair when Alt is held on Mac.
      if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
        { showCrossHair(cm); }
    }

    function showCrossHair(cm) {
      var lineDiv = cm.display.lineDiv;
      addClass(lineDiv, "CodeMirror-crosshair");

      function up(e) {
        if (e.keyCode == 18 || !e.altKey) {
          rmClass(lineDiv, "CodeMirror-crosshair");
          off(document, "keyup", up);
          off(document, "mouseover", up);
        }
      }
      on(document, "keyup", up);
      on(document, "mouseover", up);
    }

    function onKeyUp(e) {
      if (e.keyCode == 16) { this.doc.sel.shift = false; }
      signalDOMEvent(this, e);
    }

    function onKeyPress(e) {
      var cm = this;
      if (e.target && e.target != cm.display.input.getField()) { return }
      if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
      var keyCode = e.keyCode, charCode = e.charCode;
      if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
      if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
      var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
      // Some browsers fire keypress events for backspace
      if (ch == "\x08") { return }
      if (handleCharBinding(cm, e, ch)) { return }
      cm.display.input.onKeyPress(e);
    }

    var DOUBLECLICK_DELAY = 400;

    var PastClick = function(time, pos, button) {
      this.time = time;
      this.pos = pos;
      this.button = button;
    };

    PastClick.prototype.compare = function (time, pos, button) {
      return this.time + DOUBLECLICK_DELAY > time &&
        cmp(pos, this.pos) == 0 && button == this.button
    };

    var lastClick, lastDoubleClick;
    function clickRepeat(pos, button) {
      var now = +new Date;
      if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
        lastClick = lastDoubleClick = null;
        return "triple"
      } else if (lastClick && lastClick.compare(now, pos, button)) {
        lastDoubleClick = new PastClick(now, pos, button);
        lastClick = null;
        return "double"
      } else {
        lastClick = new PastClick(now, pos, button);
        lastDoubleClick = null;
        return "single"
      }
    }

    // A mouse down can be a single click, double click, triple click,
    // start of selection drag, start of text drag, new cursor
    // (ctrl-click), rectangle drag (alt-drag), or xwin
    // middle-click-paste. Or it might be a click on something we should
    // not interfere with, such as a scrollbar or widget.
    function onMouseDown(e) {
      var cm = this, display = cm.display;
      if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
      display.input.ensurePolled();
      display.shift = e.shiftKey;

      if (eventInWidget(display, e)) {
        if (!webkit) {
          // Briefly turn off draggability, to allow widgets to do
          // normal dragging things.
          display.scroller.draggable = false;
          setTimeout(function () { return display.scroller.draggable = true; }, 100);
        }
        return
      }
      if (clickInGutter(cm, e)) { return }
      var pos = posFromMouse(cm, e), button = e_button(e), repeat = pos ? clickRepeat(pos, button) : "single";
      window.focus();

      // #3261: make sure, that we're not starting a second selection
      if (button == 1 && cm.state.selectingText)
        { cm.state.selectingText(e); }

      if (pos && handleMappedButton(cm, button, pos, repeat, e)) { return }

      if (button == 1) {
        if (pos) { leftButtonDown(cm, pos, repeat, e); }
        else if (e_target(e) == display.scroller) { e_preventDefault(e); }
      } else if (button == 2) {
        if (pos) { extendSelection(cm.doc, pos); }
        setTimeout(function () { return display.input.focus(); }, 20);
      } else if (button == 3) {
        if (captureRightClick) { cm.display.input.onContextMenu(e); }
        else { delayBlurEvent(cm); }
      }
    }

    function handleMappedButton(cm, button, pos, repeat, event) {
      var name = "Click";
      if (repeat == "double") { name = "Double" + name; }
      else if (repeat == "triple") { name = "Triple" + name; }
      name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name;

      return dispatchKey(cm,  addModifierNames(name, event), event, function (bound) {
        if (typeof bound == "string") { bound = commands[bound]; }
        if (!bound) { return false }
        var done = false;
        try {
          if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
          done = bound(cm, pos) != Pass;
        } finally {
          cm.state.suppressEdits = false;
        }
        return done
      })
    }

    function configureMouse(cm, repeat, event) {
      var option = cm.getOption("configureMouse");
      var value = option ? option(cm, repeat, event) : {};
      if (value.unit == null) {
        var rect = chromeOS ? event.shiftKey && event.metaKey : event.altKey;
        value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line";
      }
      if (value.extend == null || cm.doc.extend) { value.extend = cm.doc.extend || event.shiftKey; }
      if (value.addNew == null) { value.addNew = mac ? event.metaKey : event.ctrlKey; }
      if (value.moveOnDrag == null) { value.moveOnDrag = !(mac ? event.altKey : event.ctrlKey); }
      return value
    }

    function leftButtonDown(cm, pos, repeat, event) {
      if (ie) { setTimeout(bind(ensureFocus, cm), 0); }
      else { cm.curOp.focus = activeElt(); }

      var behavior = configureMouse(cm, repeat, event);

      var sel = cm.doc.sel, contained;
      if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
          repeat == "single" && (contained = sel.contains(pos)) > -1 &&
          (cmp((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) &&
          (cmp(contained.to(), pos) > 0 || pos.xRel < 0))
        { leftButtonStartDrag(cm, event, pos, behavior); }
      else
        { leftButtonSelect(cm, event, pos, behavior); }
    }

    // Start a text drag. When it ends, see if any dragging actually
    // happen, and treat as a click if it didn't.
    function leftButtonStartDrag(cm, event, pos, behavior) {
      var display = cm.display, moved = false;
      var dragEnd = operation(cm, function (e) {
        if (webkit) { display.scroller.draggable = false; }
        cm.state.draggingText = false;
        if (cm.state.delayingBlurEvent) {
          if (cm.hasFocus()) { cm.state.delayingBlurEvent = false; }
          else { delayBlurEvent(cm); }
        }
        off(display.wrapper.ownerDocument, "mouseup", dragEnd);
        off(display.wrapper.ownerDocument, "mousemove", mouseMove);
        off(display.scroller, "dragstart", dragStart);
        off(display.scroller, "drop", dragEnd);
        if (!moved) {
          e_preventDefault(e);
          if (!behavior.addNew)
            { extendSelection(cm.doc, pos, null, null, behavior.extend); }
          // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
          if ((webkit && !safari) || ie && ie_version == 9)
            { setTimeout(function () {display.wrapper.ownerDocument.body.focus({preventScroll: true}); display.input.focus();}, 20); }
          else
            { display.input.focus(); }
        }
      });
      var mouseMove = function(e2) {
        moved = moved || Math.abs(event.clientX - e2.clientX) + Math.abs(event.clientY - e2.clientY) >= 10;
      };
      var dragStart = function () { return moved = true; };
      // Let the drag handler handle this.
      if (webkit) { display.scroller.draggable = true; }
      cm.state.draggingText = dragEnd;
      dragEnd.copy = !behavior.moveOnDrag;
      on(display.wrapper.ownerDocument, "mouseup", dragEnd);
      on(display.wrapper.ownerDocument, "mousemove", mouseMove);
      on(display.scroller, "dragstart", dragStart);
      on(display.scroller, "drop", dragEnd);

      cm.state.delayingBlurEvent = true;
      setTimeout(function () { return display.input.focus(); }, 20);
      // IE's approach to draggable
      if (display.scroller.dragDrop) { display.scroller.dragDrop(); }
    }

    function rangeForUnit(cm, pos, unit) {
      if (unit == "char") { return new Range(pos, pos) }
      if (unit == "word") { return cm.findWordAt(pos) }
      if (unit == "line") { return new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
      var result = unit(cm, pos);
      return new Range(result.from, result.to)
    }

    // Normal selection, as opposed to text dragging.
    function leftButtonSelect(cm, event, start, behavior) {
      if (ie) { delayBlurEvent(cm); }
      var display = cm.display, doc = cm.doc;
      e_preventDefault(event);

      var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
      if (behavior.addNew && !behavior.extend) {
        ourIndex = doc.sel.contains(start);
        if (ourIndex > -1)
          { ourRange = ranges[ourIndex]; }
        else
          { ourRange = new Range(start, start); }
      } else {
        ourRange = doc.sel.primary();
        ourIndex = doc.sel.primIndex;
      }

      if (behavior.unit == "rectangle") {
        if (!behavior.addNew) { ourRange = new Range(start, start); }
        start = posFromMouse(cm, event, true, true);
        ourIndex = -1;
      } else {
        var range = rangeForUnit(cm, start, behavior.unit);
        if (behavior.extend)
          { ourRange = extendRange(ourRange, range.anchor, range.head, behavior.extend); }
        else
          { ourRange = range; }
      }

      if (!behavior.addNew) {
        ourIndex = 0;
        setSelection(doc, new Selection([ourRange], 0), sel_mouse);
        startSel = doc.sel;
      } else if (ourIndex == -1) {
        ourIndex = ranges.length;
        setSelection(doc, normalizeSelection(cm, ranges.concat([ourRange]), ourIndex),
                     {scroll: false, origin: "*mouse"});
      } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
        setSelection(doc, normalizeSelection(cm, ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
                     {scroll: false, origin: "*mouse"});
        startSel = doc.sel;
      } else {
        replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
      }

      var lastPos = start;
      function extendTo(pos) {
        if (cmp(lastPos, pos) == 0) { return }
        lastPos = pos;

        if (behavior.unit == "rectangle") {
          var ranges = [], tabSize = cm.options.tabSize;
          var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
          var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
          var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
          for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
               line <= end; line++) {
            var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
            if (left == right)
              { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))); }
            else if (text.length > leftPos)
              { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))); }
          }
          if (!ranges.length) { ranges.push(new Range(start, start)); }
          setSelection(doc, normalizeSelection(cm, startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
                       {origin: "*mouse", scroll: false});
          cm.scrollIntoView(pos);
        } else {
          var oldRange = ourRange;
          var range = rangeForUnit(cm, pos, behavior.unit);
          var anchor = oldRange.anchor, head;
          if (cmp(range.anchor, anchor) > 0) {
            head = range.head;
            anchor = minPos(oldRange.from(), range.anchor);
          } else {
            head = range.anchor;
            anchor = maxPos(oldRange.to(), range.head);
          }
          var ranges$1 = startSel.ranges.slice(0);
          ranges$1[ourIndex] = bidiSimplify(cm, new Range(clipPos(doc, anchor), head));
          setSelection(doc, normalizeSelection(cm, ranges$1, ourIndex), sel_mouse);
        }
      }

      var editorSize = display.wrapper.getBoundingClientRect();
      // Used to ensure timeout re-tries don't fire when another extend
      // happened in the meantime (clearTimeout isn't reliable -- at
      // least on Chrome, the timeouts still happen even when cleared,
      // if the clear happens after their scheduled firing time).
      var counter = 0;

      function extend(e) {
        var curCount = ++counter;
        var cur = posFromMouse(cm, e, true, behavior.unit == "rectangle");
        if (!cur) { return }
        if (cmp(cur, lastPos) != 0) {
          cm.curOp.focus = activeElt();
          extendTo(cur);
          var visible = visibleLines(display, doc);
          if (cur.line >= visible.to || cur.line < visible.from)
            { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e); }}), 150); }
        } else {
          var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
          if (outside) { setTimeout(operation(cm, function () {
            if (counter != curCount) { return }
            display.scroller.scrollTop += outside;
            extend(e);
          }), 50); }
        }
      }

      function done(e) {
        cm.state.selectingText = false;
        counter = Infinity;
        // If e is null or undefined we interpret this as someone trying
        // to explicitly cancel the selection rather than the user
        // letting go of the mouse button.
        if (e) {
          e_preventDefault(e);
          display.input.focus();
        }
        off(display.wrapper.ownerDocument, "mousemove", move);
        off(display.wrapper.ownerDocument, "mouseup", up);
        doc.history.lastSelOrigin = null;
      }

      var move = operation(cm, function (e) {
        if (e.buttons === 0 || !e_button(e)) { done(e); }
        else { extend(e); }
      });
      var up = operation(cm, done);
      cm.state.selectingText = up;
      on(display.wrapper.ownerDocument, "mousemove", move);
      on(display.wrapper.ownerDocument, "mouseup", up);
    }

    // Used when mouse-selecting to adjust the anchor to the proper side
    // of a bidi jump depending on the visual position of the head.
    function bidiSimplify(cm, range) {
      var anchor = range.anchor;
      var head = range.head;
      var anchorLine = getLine(cm.doc, anchor.line);
      if (cmp(anchor, head) == 0 && anchor.sticky == head.sticky) { return range }
      var order = getOrder(anchorLine);
      if (!order) { return range }
      var index = getBidiPartAt(order, anchor.ch, anchor.sticky), part = order[index];
      if (part.from != anchor.ch && part.to != anchor.ch) { return range }
      var boundary = index + ((part.from == anchor.ch) == (part.level != 1) ? 0 : 1);
      if (boundary == 0 || boundary == order.length) { return range }

      // Compute the relative visual position of the head compared to the
      // anchor (<0 is to the left, >0 to the right)
      var leftSide;
      if (head.line != anchor.line) {
        leftSide = (head.line - anchor.line) * (cm.doc.direction == "ltr" ? 1 : -1) > 0;
      } else {
        var headIndex = getBidiPartAt(order, head.ch, head.sticky);
        var dir = headIndex - index || (head.ch - anchor.ch) * (part.level == 1 ? -1 : 1);
        if (headIndex == boundary - 1 || headIndex == boundary)
          { leftSide = dir < 0; }
        else
          { leftSide = dir > 0; }
      }

      var usePart = order[boundary + (leftSide ? -1 : 0)];
      var from = leftSide == (usePart.level == 1);
      var ch = from ? usePart.from : usePart.to, sticky = from ? "after" : "before";
      return anchor.ch == ch && anchor.sticky == sticky ? range : new Range(new Pos(anchor.line, ch, sticky), head)
    }


    // Determines whether an event happened in the gutter, and fires the
    // handlers for the corresponding event.
    function gutterEvent(cm, e, type, prevent) {
      var mX, mY;
      if (e.touches) {
        mX = e.touches[0].clientX;
        mY = e.touches[0].clientY;
      } else {
        try { mX = e.clientX; mY = e.clientY; }
        catch(e$1) { return false }
      }
      if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
      if (prevent) { e_preventDefault(e); }

      var display = cm.display;
      var lineBox = display.lineDiv.getBoundingClientRect();

      if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
      mY -= lineBox.top - display.viewOffset;

      for (var i = 0; i < cm.display.gutterSpecs.length; ++i) {
        var g = display.gutters.childNodes[i];
        if (g && g.getBoundingClientRect().right >= mX) {
          var line = lineAtHeight(cm.doc, mY);
          var gutter = cm.display.gutterSpecs[i];
          signal(cm, type, cm, line, gutter.className, e);
          return e_defaultPrevented(e)
        }
      }
    }

    function clickInGutter(cm, e) {
      return gutterEvent(cm, e, "gutterClick", true)
    }

    // CONTEXT MENU HANDLING

    // To make the context menu work, we need to briefly unhide the
    // textarea (making it as unobtrusive as possible) to let the
    // right-click take effect on it.
    function onContextMenu(cm, e) {
      if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
      if (signalDOMEvent(cm, e, "contextmenu")) { return }
      if (!captureRightClick) { cm.display.input.onContextMenu(e); }
    }

    function contextMenuInGutter(cm, e) {
      if (!hasHandler(cm, "gutterContextMenu")) { return false }
      return gutterEvent(cm, e, "gutterContextMenu", false)
    }

    function themeChanged(cm) {
      cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
        cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
      clearCaches(cm);
    }

    var Init = {toString: function(){return "CodeMirror.Init"}};

    var defaults = {};
    var optionHandlers = {};

    function defineOptions(CodeMirror) {
      var optionHandlers = CodeMirror.optionHandlers;

      function option(name, deflt, handle, notOnInit) {
        CodeMirror.defaults[name] = deflt;
        if (handle) { optionHandlers[name] =
          notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old); }} : handle; }
      }

      CodeMirror.defineOption = option;

      // Passed to option handlers when there is no old value.
      CodeMirror.Init = Init;

      // These two are, on init, called from the constructor because they
      // have to be initialized before the editor can start at all.
      option("value", "", function (cm, val) { return cm.setValue(val); }, true);
      option("mode", null, function (cm, val) {
        cm.doc.modeOption = val;
        loadMode(cm);
      }, true);

      option("indentUnit", 2, loadMode, true);
      option("indentWithTabs", false);
      option("smartIndent", true);
      option("tabSize", 4, function (cm) {
        resetModeState(cm);
        clearCaches(cm);
        regChange(cm);
      }, true);

      option("lineSeparator", null, function (cm, val) {
        cm.doc.lineSep = val;
        if (!val) { return }
        var newBreaks = [], lineNo = cm.doc.first;
        cm.doc.iter(function (line) {
          for (var pos = 0;;) {
            var found = line.text.indexOf(val, pos);
            if (found == -1) { break }
            pos = found + val.length;
            newBreaks.push(Pos(lineNo, found));
          }
          lineNo++;
        });
        for (var i = newBreaks.length - 1; i >= 0; i--)
          { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)); }
      });
      option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (cm, val, old) {
        cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
        if (old != Init) { cm.refresh(); }
      });
      option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true);
      option("electricChars", true);
      option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
        throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
      }, true);
      option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true);
      option("autocorrect", false, function (cm, val) { return cm.getInputField().autocorrect = val; }, true);
      option("autocapitalize", false, function (cm, val) { return cm.getInputField().autocapitalize = val; }, true);
      option("rtlMoveVisually", !windows);
      option("wholeLineUpdateBefore", true);

      option("theme", "default", function (cm) {
        themeChanged(cm);
        updateGutters(cm);
      }, true);
      option("keyMap", "default", function (cm, val, old) {
        var next = getKeyMap(val);
        var prev = old != Init && getKeyMap(old);
        if (prev && prev.detach) { prev.detach(cm, next); }
        if (next.attach) { next.attach(cm, prev || null); }
      });
      option("extraKeys", null);
      option("configureMouse", null);

      option("lineWrapping", false, wrappingChanged, true);
      option("gutters", [], function (cm, val) {
        cm.display.gutterSpecs = getGutters(val, cm.options.lineNumbers);
        updateGutters(cm);
      }, true);
      option("fixedGutter", true, function (cm, val) {
        cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
        cm.refresh();
      }, true);
      option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true);
      option("scrollbarStyle", "native", function (cm) {
        initScrollbars(cm);
        updateScrollbars(cm);
        cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
        cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
      }, true);
      option("lineNumbers", false, function (cm, val) {
        cm.display.gutterSpecs = getGutters(cm.options.gutters, val);
        updateGutters(cm);
      }, true);
      option("firstLineNumber", 1, updateGutters, true);
      option("lineNumberFormatter", function (integer) { return integer; }, updateGutters, true);
      option("showCursorWhenSelecting", false, updateSelection, true);

      option("resetSelectionOnContextMenu", true);
      option("lineWiseCopyCut", true);
      option("pasteLinesPerSelection", true);
      option("selectionsMayTouch", false);

      option("readOnly", false, function (cm, val) {
        if (val == "nocursor") {
          onBlur(cm);
          cm.display.input.blur();
        }
        cm.display.input.readOnlyChanged(val);
      });

      option("screenReaderLabel", null, function (cm, val) {
        val = (val === '') ? null : val;
        cm.display.input.screenReaderLabelChanged(val);
      });

      option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset(); }}, true);
      option("dragDrop", true, dragDropChanged);
      option("allowDropFileTypes", null);

      option("cursorBlinkRate", 530);
      option("cursorScrollMargin", 0);
      option("cursorHeight", 1, updateSelection, true);
      option("singleCursorHeightPerLine", true, updateSelection, true);
      option("workTime", 100);
      option("workDelay", 100);
      option("flattenSpans", true, resetModeState, true);
      option("addModeClass", false, resetModeState, true);
      option("pollInterval", 100);
      option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; });
      option("historyEventDelay", 1250);
      option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true);
      option("maxHighlightLength", 10000, resetModeState, true);
      option("moveInputWithCursor", true, function (cm, val) {
        if (!val) { cm.display.input.resetPosition(); }
      });

      option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; });
      option("autofocus", null);
      option("direction", "ltr", function (cm, val) { return cm.doc.setDirection(val); }, true);
      option("phrases", null);
    }

    function dragDropChanged(cm, value, old) {
      var wasOn = old && old != Init;
      if (!value != !wasOn) {
        var funcs = cm.display.dragFunctions;
        var toggle = value ? on : off;
        toggle(cm.display.scroller, "dragstart", funcs.start);
        toggle(cm.display.scroller, "dragenter", funcs.enter);
        toggle(cm.display.scroller, "dragover", funcs.over);
        toggle(cm.display.scroller, "dragleave", funcs.leave);
        toggle(cm.display.scroller, "drop", funcs.drop);
      }
    }

    function wrappingChanged(cm) {
      if (cm.options.lineWrapping) {
        addClass(cm.display.wrapper, "CodeMirror-wrap");
        cm.display.sizer.style.minWidth = "";
        cm.display.sizerWidth = null;
      } else {
        rmClass(cm.display.wrapper, "CodeMirror-wrap");
        findMaxLine(cm);
      }
      estimateLineHeights(cm);
      regChange(cm);
      clearCaches(cm);
      setTimeout(function () { return updateScrollbars(cm); }, 100);
    }

    // A CodeMirror instance represents an editor. This is the object
    // that user code is usually dealing with.

    function CodeMirror(place, options) {
      var this$1 = this;

      if (!(this instanceof CodeMirror)) { return new CodeMirror(place, options) }

      this.options = options = options ? copyObj(options) : {};
      // Determine effective options based on given values and defaults.
      copyObj(defaults, options, false);

      var doc = options.value;
      if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator, options.direction); }
      else if (options.mode) { doc.modeOption = options.mode; }
      this.doc = doc;

      var input = new CodeMirror.inputStyles[options.inputStyle](this);
      var display = this.display = new Display(place, doc, input, options);
      display.wrapper.CodeMirror = this;
      themeChanged(this);
      if (options.lineWrapping)
        { this.display.wrapper.className += " CodeMirror-wrap"; }
      initScrollbars(this);

      this.state = {
        keyMaps: [],  // stores maps added by addKeyMap
        overlays: [], // highlighting overlays, as added by addOverlay
        modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
        overwrite: false,
        delayingBlurEvent: false,
        focused: false,
        suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
        pasteIncoming: -1, cutIncoming: -1, // help recognize paste/cut edits in input.poll
        selectingText: false,
        draggingText: false,
        highlight: new Delayed(), // stores highlight worker timeout
        keySeq: null,  // Unfinished key sequence
        specialChars: null
      };

      if (options.autofocus && !mobile) { display.input.focus(); }

      // Override magic textarea content restore that IE sometimes does
      // on our hidden textarea on reload
      if (ie && ie_version < 11) { setTimeout(function () { return this$1.display.input.reset(true); }, 20); }

      registerEventHandlers(this);
      ensureGlobalHandlers();

      startOperation(this);
      this.curOp.forceUpdate = true;
      attachDoc(this, doc);

      if ((options.autofocus && !mobile) || this.hasFocus())
        { setTimeout(function () {
          if (this$1.hasFocus() && !this$1.state.focused) { onFocus(this$1); }
        }, 20); }
      else
        { onBlur(this); }

      for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
        { optionHandlers[opt](this, options[opt], Init); } }
      maybeUpdateLineNumberWidth(this);
      if (options.finishInit) { options.finishInit(this); }
      for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this); }
      endOperation(this);
      // Suppress optimizelegibility in Webkit, since it breaks text
      // measuring on line wrapping boundaries.
      if (webkit && options.lineWrapping &&
          getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
        { display.lineDiv.style.textRendering = "auto"; }
    }

    // The default configuration options.
    CodeMirror.defaults = defaults;
    // Functions to run when options are changed.
    CodeMirror.optionHandlers = optionHandlers;

    // Attach the necessary event handlers when initializing the editor
    function registerEventHandlers(cm) {
      var d = cm.display;
      on(d.scroller, "mousedown", operation(cm, onMouseDown));
      // Older IE's will not fire a second mousedown for a double click
      if (ie && ie_version < 11)
        { on(d.scroller, "dblclick", operation(cm, function (e) {
          if (signalDOMEvent(cm, e)) { return }
          var pos = posFromMouse(cm, e);
          if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
          e_preventDefault(e);
          var word = cm.findWordAt(pos);
          extendSelection(cm.doc, word.anchor, word.head);
        })); }
      else
        { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }); }
      // Some browsers fire contextmenu *after* opening the menu, at
      // which point we can't mess with it anymore. Context menu is
      // handled in onMouseDown for these browsers.
      on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); });
      on(d.input.getField(), "contextmenu", function (e) {
        if (!d.scroller.contains(e.target)) { onContextMenu(cm, e); }
      });

      // Used to suppress mouse event handling when a touch happens
      var touchFinished, prevTouch = {end: 0};
      function finishTouch() {
        if (d.activeTouch) {
          touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000);
          prevTouch = d.activeTouch;
          prevTouch.end = +new Date;
        }
      }
      function isMouseLikeTouchEvent(e) {
        if (e.touches.length != 1) { return false }
        var touch = e.touches[0];
        return touch.radiusX <= 1 && touch.radiusY <= 1
      }
      function farAway(touch, other) {
        if (other.left == null) { return true }
        var dx = other.left - touch.left, dy = other.top - touch.top;
        return dx * dx + dy * dy > 20 * 20
      }
      on(d.scroller, "touchstart", function (e) {
        if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e) && !clickInGutter(cm, e)) {
          d.input.ensurePolled();
          clearTimeout(touchFinished);
          var now = +new Date;
          d.activeTouch = {start: now, moved: false,
                           prev: now - prevTouch.end <= 300 ? prevTouch : null};
          if (e.touches.length == 1) {
            d.activeTouch.left = e.touches[0].pageX;
            d.activeTouch.top = e.touches[0].pageY;
          }
        }
      });
      on(d.scroller, "touchmove", function () {
        if (d.activeTouch) { d.activeTouch.moved = true; }
      });
      on(d.scroller, "touchend", function (e) {
        var touch = d.activeTouch;
        if (touch && !eventInWidget(d, e) && touch.left != null &&
            !touch.moved && new Date - touch.start < 300) {
          var pos = cm.coordsChar(d.activeTouch, "page"), range;
          if (!touch.prev || farAway(touch, touch.prev)) // Single tap
            { range = new Range(pos, pos); }
          else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
            { range = cm.findWordAt(pos); }
          else // Triple tap
            { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))); }
          cm.setSelection(range.anchor, range.head);
          cm.focus();
          e_preventDefault(e);
        }
        finishTouch();
      });
      on(d.scroller, "touchcancel", finishTouch);

      // Sync scrolling between fake scrollbars and real scrollable
      // area, ensure viewport is updated when scrolling.
      on(d.scroller, "scroll", function () {
        if (d.scroller.clientHeight) {
          updateScrollTop(cm, d.scroller.scrollTop);
          setScrollLeft(cm, d.scroller.scrollLeft, true);
          signal(cm, "scroll", cm);
        }
      });

      // Listen to wheel events in order to try and update the viewport on time.
      on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); });
      on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); });

      // Prevent wrapper from ever scrolling
      on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

      d.dragFunctions = {
        enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e); }},
        over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
        start: function (e) { return onDragStart(cm, e); },
        drop: operation(cm, onDrop),
        leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm); }}
      };

      var inp = d.input.getField();
      on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); });
      on(inp, "keydown", operation(cm, onKeyDown));
      on(inp, "keypress", operation(cm, onKeyPress));
      on(inp, "focus", function (e) { return onFocus(cm, e); });
      on(inp, "blur", function (e) { return onBlur(cm, e); });
    }

    var initHooks = [];
    CodeMirror.defineInitHook = function (f) { return initHooks.push(f); };

    // Indent the given line. The how parameter can be "smart",
    // "add"/null, "subtract", or "prev". When aggressive is false
    // (typically set to true for forced single-line indents), empty
    // lines are not indented, and places where the mode returns Pass
    // are left alone.
    function indentLine(cm, n, how, aggressive) {
      var doc = cm.doc, state;
      if (how == null) { how = "add"; }
      if (how == "smart") {
        // Fall back to "prev" when the mode doesn't have an indentation
        // method.
        if (!doc.mode.indent) { how = "prev"; }
        else { state = getContextBefore(cm, n).state; }
      }

      var tabSize = cm.options.tabSize;
      var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
      if (line.stateAfter) { line.stateAfter = null; }
      var curSpaceString = line.text.match(/^\s*/)[0], indentation;
      if (!aggressive && !/\S/.test(line.text)) {
        indentation = 0;
        how = "not";
      } else if (how == "smart") {
        indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
        if (indentation == Pass || indentation > 150) {
          if (!aggressive) { return }
          how = "prev";
        }
      }
      if (how == "prev") {
        if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize); }
        else { indentation = 0; }
      } else if (how == "add") {
        indentation = curSpace + cm.options.indentUnit;
      } else if (how == "subtract") {
        indentation = curSpace - cm.options.indentUnit;
      } else if (typeof how == "number") {
        indentation = curSpace + how;
      }
      indentation = Math.max(0, indentation);

      var indentString = "", pos = 0;
      if (cm.options.indentWithTabs)
        { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";} }
      if (pos < indentation) { indentString += spaceStr(indentation - pos); }

      if (indentString != curSpaceString) {
        replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
        line.stateAfter = null;
        return true
      } else {
        // Ensure that, if the cursor was in the whitespace at the start
        // of the line, it is moved to the end of that space.
        for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
          var range = doc.sel.ranges[i$1];
          if (range.head.line == n && range.head.ch < curSpaceString.length) {
            var pos$1 = Pos(n, curSpaceString.length);
            replaceOneSelection(doc, i$1, new Range(pos$1, pos$1));
            break
          }
        }
      }
    }

    // This will be set to a {lineWise: bool, text: [string]} object, so
    // that, when pasting, we know what kind of selections the copied
    // text was made out of.
    var lastCopied = null;

    function setLastCopied(newLastCopied) {
      lastCopied = newLastCopied;
    }

    function applyTextInput(cm, inserted, deleted, sel, origin) {
      var doc = cm.doc;
      cm.display.shift = false;
      if (!sel) { sel = doc.sel; }

      var recent = +new Date - 200;
      var paste = origin == "paste" || cm.state.pasteIncoming > recent;
      var textLines = splitLinesAuto(inserted), multiPaste = null;
      // When pasting N lines into N selections, insert one line per selection
      if (paste && sel.ranges.length > 1) {
        if (lastCopied && lastCopied.text.join("\n") == inserted) {
          if (sel.ranges.length % lastCopied.text.length == 0) {
            multiPaste = [];
            for (var i = 0; i < lastCopied.text.length; i++)
              { multiPaste.push(doc.splitLines(lastCopied.text[i])); }
          }
        } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
          multiPaste = map(textLines, function (l) { return [l]; });
        }
      }

      var updateInput = cm.curOp.updateInput;
      // Normal behavior is to insert the new text into every selection
      for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
        var range = sel.ranges[i$1];
        var from = range.from(), to = range.to();
        if (range.empty()) {
          if (deleted && deleted > 0) // Handle deletion
            { from = Pos(from.line, from.ch - deleted); }
          else if (cm.state.overwrite && !paste) // Handle overwrite
            { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)); }
          else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == textLines.join("\n"))
            { from = to = Pos(from.line, 0); }
        }
        var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
                           origin: origin || (paste ? "paste" : cm.state.cutIncoming > recent ? "cut" : "+input")};
        makeChange(cm.doc, changeEvent);
        signalLater(cm, "inputRead", cm, changeEvent);
      }
      if (inserted && !paste)
        { triggerElectric(cm, inserted); }

      ensureCursorVisible(cm);
      if (cm.curOp.updateInput < 2) { cm.curOp.updateInput = updateInput; }
      cm.curOp.typing = true;
      cm.state.pasteIncoming = cm.state.cutIncoming = -1;
    }

    function handlePaste(e, cm) {
      var pasted = e.clipboardData && e.clipboardData.getData("Text");
      if (pasted) {
        e.preventDefault();
        if (!cm.isReadOnly() && !cm.options.disableInput)
          { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }); }
        return true
      }
    }

    function triggerElectric(cm, inserted) {
      // When an 'electric' character is inserted, immediately trigger a reindent
      if (!cm.options.electricChars || !cm.options.smartIndent) { return }
      var sel = cm.doc.sel;

      for (var i = sel.ranges.length - 1; i >= 0; i--) {
        var range = sel.ranges[i];
        if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) { continue }
        var mode = cm.getModeAt(range.head);
        var indented = false;
        if (mode.electricChars) {
          for (var j = 0; j < mode.electricChars.length; j++)
            { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
              indented = indentLine(cm, range.head.line, "smart");
              break
            } }
        } else if (mode.electricInput) {
          if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
            { indented = indentLine(cm, range.head.line, "smart"); }
        }
        if (indented) { signalLater(cm, "electricInput", cm, range.head.line); }
      }
    }

    function copyableRanges(cm) {
      var text = [], ranges = [];
      for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
        var line = cm.doc.sel.ranges[i].head.line;
        var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
        ranges.push(lineRange);
        text.push(cm.getRange(lineRange.anchor, lineRange.head));
      }
      return {text: text, ranges: ranges}
    }

    function disableBrowserMagic(field, spellcheck, autocorrect, autocapitalize) {
      field.setAttribute("autocorrect", autocorrect ? "" : "off");
      field.setAttribute("autocapitalize", autocapitalize ? "" : "off");
      field.setAttribute("spellcheck", !!spellcheck);
    }

    function hiddenTextarea() {
      var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none");
      var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
      // The textarea is kept positioned near the cursor to prevent the
      // fact that it'll be scrolled into view on input from scrolling
      // our fake cursor out of view. On webkit, when wrap=off, paste is
      // very slow. So make the area wide instead.
      if (webkit) { te.style.width = "1000px"; }
      else { te.setAttribute("wrap", "off"); }
      // If border: 0; -- iOS fails to open keyboard (issue #1287)
      if (ios) { te.style.border = "1px solid black"; }
      disableBrowserMagic(te);
      return div
    }

    // The publicly visible API. Note that methodOp(f) means
    // 'wrap f in an operation, performed on its `this` parameter'.

    // This is not the complete set of editor methods. Most of the
    // methods defined on the Doc type are also injected into
    // CodeMirror.prototype, for backwards compatibility and
    // convenience.

    function addEditorMethods(CodeMirror) {
      var optionHandlers = CodeMirror.optionHandlers;

      var helpers = CodeMirror.helpers = {};

      CodeMirror.prototype = {
        constructor: CodeMirror,
        focus: function(){window.focus(); this.display.input.focus();},

        setOption: function(option, value) {
          var options = this.options, old = options[option];
          if (options[option] == value && option != "mode") { return }
          options[option] = value;
          if (optionHandlers.hasOwnProperty(option))
            { operation(this, optionHandlers[option])(this, value, old); }
          signal(this, "optionChange", this, option);
        },

        getOption: function(option) {return this.options[option]},
        getDoc: function() {return this.doc},

        addKeyMap: function(map, bottom) {
          this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
        },
        removeKeyMap: function(map) {
          var maps = this.state.keyMaps;
          for (var i = 0; i < maps.length; ++i)
            { if (maps[i] == map || maps[i].name == map) {
              maps.splice(i, 1);
              return true
            } }
        },

        addOverlay: methodOp(function(spec, options) {
          var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
          if (mode.startState) { throw new Error("Overlays may not be stateful.") }
          insertSorted(this.state.overlays,
                       {mode: mode, modeSpec: spec, opaque: options && options.opaque,
                        priority: (options && options.priority) || 0},
                       function (overlay) { return overlay.priority; });
          this.state.modeGen++;
          regChange(this);
        }),
        removeOverlay: methodOp(function(spec) {
          var overlays = this.state.overlays;
          for (var i = 0; i < overlays.length; ++i) {
            var cur = overlays[i].modeSpec;
            if (cur == spec || typeof spec == "string" && cur.name == spec) {
              overlays.splice(i, 1);
              this.state.modeGen++;
              regChange(this);
              return
            }
          }
        }),

        indentLine: methodOp(function(n, dir, aggressive) {
          if (typeof dir != "string" && typeof dir != "number") {
            if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev"; }
            else { dir = dir ? "add" : "subtract"; }
          }
          if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive); }
        }),
        indentSelection: methodOp(function(how) {
          var ranges = this.doc.sel.ranges, end = -1;
          for (var i = 0; i < ranges.length; i++) {
            var range = ranges[i];
            if (!range.empty()) {
              var from = range.from(), to = range.to();
              var start = Math.max(end, from.line);
              end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
              for (var j = start; j < end; ++j)
                { indentLine(this, j, how); }
              var newRanges = this.doc.sel.ranges;
              if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
                { replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll); }
            } else if (range.head.line > end) {
              indentLine(this, range.head.line, how, true);
              end = range.head.line;
              if (i == this.doc.sel.primIndex) { ensureCursorVisible(this); }
            }
          }
        }),

        // Fetch the parser token for a given character. Useful for hacks
        // that want to inspect the mode state (say, for completion).
        getTokenAt: function(pos, precise) {
          return takeToken(this, pos, precise)
        },

        getLineTokens: function(line, precise) {
          return takeToken(this, Pos(line), precise, true)
        },

        getTokenTypeAt: function(pos) {
          pos = clipPos(this.doc, pos);
          var styles = getLineStyles(this, getLine(this.doc, pos.line));
          var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
          var type;
          if (ch == 0) { type = styles[2]; }
          else { for (;;) {
            var mid = (before + after) >> 1;
            if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid; }
            else if (styles[mid * 2 + 1] < ch) { before = mid + 1; }
            else { type = styles[mid * 2 + 2]; break }
          } }
          var cut = type ? type.indexOf("overlay ") : -1;
          return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
        },

        getModeAt: function(pos) {
          var mode = this.doc.mode;
          if (!mode.innerMode) { return mode }
          return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
        },

        getHelper: function(pos, type) {
          return this.getHelpers(pos, type)[0]
        },

        getHelpers: function(pos, type) {
          var found = [];
          if (!helpers.hasOwnProperty(type)) { return found }
          var help = helpers[type], mode = this.getModeAt(pos);
          if (typeof mode[type] == "string") {
            if (help[mode[type]]) { found.push(help[mode[type]]); }
          } else if (mode[type]) {
            for (var i = 0; i < mode[type].length; i++) {
              var val = help[mode[type][i]];
              if (val) { found.push(val); }
            }
          } else if (mode.helperType && help[mode.helperType]) {
            found.push(help[mode.helperType]);
          } else if (help[mode.name]) {
            found.push(help[mode.name]);
          }
          for (var i$1 = 0; i$1 < help._global.length; i$1++) {
            var cur = help._global[i$1];
            if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
              { found.push(cur.val); }
          }
          return found
        },

        getStateAfter: function(line, precise) {
          var doc = this.doc;
          line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
          return getContextBefore(this, line + 1, precise).state
        },

        cursorCoords: function(start, mode) {
          var pos, range = this.doc.sel.primary();
          if (start == null) { pos = range.head; }
          else if (typeof start == "object") { pos = clipPos(this.doc, start); }
          else { pos = start ? range.from() : range.to(); }
          return cursorCoords(this, pos, mode || "page")
        },

        charCoords: function(pos, mode) {
          return charCoords(this, clipPos(this.doc, pos), mode || "page")
        },

        coordsChar: function(coords, mode) {
          coords = fromCoordSystem(this, coords, mode || "page");
          return coordsChar(this, coords.left, coords.top)
        },

        lineAtHeight: function(height, mode) {
          height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
          return lineAtHeight(this.doc, height + this.display.viewOffset)
        },
        heightAtLine: function(line, mode, includeWidgets) {
          var end = false, lineObj;
          if (typeof line == "number") {
            var last = this.doc.first + this.doc.size - 1;
            if (line < this.doc.first) { line = this.doc.first; }
            else if (line > last) { line = last; end = true; }
            lineObj = getLine(this.doc, line);
          } else {
            lineObj = line;
          }
          return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets || end).top +
            (end ? this.doc.height - heightAtLine(lineObj) : 0)
        },

        defaultTextHeight: function() { return textHeight(this.display) },
        defaultCharWidth: function() { return charWidth(this.display) },

        getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

        addWidget: function(pos, node, scroll, vert, horiz) {
          var display = this.display;
          pos = cursorCoords(this, clipPos(this.doc, pos));
          var top = pos.bottom, left = pos.left;
          node.style.position = "absolute";
          node.setAttribute("cm-ignore-events", "true");
          this.display.input.setUneditable(node);
          display.sizer.appendChild(node);
          if (vert == "over") {
            top = pos.top;
          } else if (vert == "above" || vert == "near") {
            var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
            hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
            // Default to positioning above (if specified and possible); otherwise default to positioning below
            if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
              { top = pos.top - node.offsetHeight; }
            else if (pos.bottom + node.offsetHeight <= vspace)
              { top = pos.bottom; }
            if (left + node.offsetWidth > hspace)
              { left = hspace - node.offsetWidth; }
          }
          node.style.top = top + "px";
          node.style.left = node.style.right = "";
          if (horiz == "right") {
            left = display.sizer.clientWidth - node.offsetWidth;
            node.style.right = "0px";
          } else {
            if (horiz == "left") { left = 0; }
            else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2; }
            node.style.left = left + "px";
          }
          if (scroll)
            { scrollIntoView(this, {left: left, top: top, right: left + node.offsetWidth, bottom: top + node.offsetHeight}); }
        },

        triggerOnKeyDown: methodOp(onKeyDown),
        triggerOnKeyPress: methodOp(onKeyPress),
        triggerOnKeyUp: onKeyUp,
        triggerOnMouseDown: methodOp(onMouseDown),

        execCommand: function(cmd) {
          if (commands.hasOwnProperty(cmd))
            { return commands[cmd].call(null, this) }
        },

        triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),

        findPosH: function(from, amount, unit, visually) {
          var dir = 1;
          if (amount < 0) { dir = -1; amount = -amount; }
          var cur = clipPos(this.doc, from);
          for (var i = 0; i < amount; ++i) {
            cur = findPosH(this.doc, cur, dir, unit, visually);
            if (cur.hitSide) { break }
          }
          return cur
        },

        moveH: methodOp(function(dir, unit) {
          var this$1 = this;

          this.extendSelectionsBy(function (range) {
            if (this$1.display.shift || this$1.doc.extend || range.empty())
              { return findPosH(this$1.doc, range.head, dir, unit, this$1.options.rtlMoveVisually) }
            else
              { return dir < 0 ? range.from() : range.to() }
          }, sel_move);
        }),

        deleteH: methodOp(function(dir, unit) {
          var sel = this.doc.sel, doc = this.doc;
          if (sel.somethingSelected())
            { doc.replaceSelection("", null, "+delete"); }
          else
            { deleteNearSelection(this, function (range) {
              var other = findPosH(doc, range.head, dir, unit, false);
              return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other}
            }); }
        }),

        findPosV: function(from, amount, unit, goalColumn) {
          var dir = 1, x = goalColumn;
          if (amount < 0) { dir = -1; amount = -amount; }
          var cur = clipPos(this.doc, from);
          for (var i = 0; i < amount; ++i) {
            var coords = cursorCoords(this, cur, "div");
            if (x == null) { x = coords.left; }
            else { coords.left = x; }
            cur = findPosV(this, coords, dir, unit);
            if (cur.hitSide) { break }
          }
          return cur
        },

        moveV: methodOp(function(dir, unit) {
          var this$1 = this;

          var doc = this.doc, goals = [];
          var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected();
          doc.extendSelectionsBy(function (range) {
            if (collapse)
              { return dir < 0 ? range.from() : range.to() }
            var headPos = cursorCoords(this$1, range.head, "div");
            if (range.goalColumn != null) { headPos.left = range.goalColumn; }
            goals.push(headPos.left);
            var pos = findPosV(this$1, headPos, dir, unit);
            if (unit == "page" && range == doc.sel.primary())
              { addToScrollTop(this$1, charCoords(this$1, pos, "div").top - headPos.top); }
            return pos
          }, sel_move);
          if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
            { doc.sel.ranges[i].goalColumn = goals[i]; } }
        }),

        // Find the word at the given position (as returned by coordsChar).
        findWordAt: function(pos) {
          var doc = this.doc, line = getLine(doc, pos.line).text;
          var start = pos.ch, end = pos.ch;
          if (line) {
            var helper = this.getHelper(pos, "wordChars");
            if ((pos.sticky == "before" || end == line.length) && start) { --start; } else { ++end; }
            var startChar = line.charAt(start);
            var check = isWordChar(startChar, helper)
              ? function (ch) { return isWordChar(ch, helper); }
              : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
              : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); };
            while (start > 0 && check(line.charAt(start - 1))) { --start; }
            while (end < line.length && check(line.charAt(end))) { ++end; }
          }
          return new Range(Pos(pos.line, start), Pos(pos.line, end))
        },

        toggleOverwrite: function(value) {
          if (value != null && value == this.state.overwrite) { return }
          if (this.state.overwrite = !this.state.overwrite)
            { addClass(this.display.cursorDiv, "CodeMirror-overwrite"); }
          else
            { rmClass(this.display.cursorDiv, "CodeMirror-overwrite"); }

          signal(this, "overwriteToggle", this, this.state.overwrite);
        },
        hasFocus: function() { return this.display.input.getField() == activeElt() },
        isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

        scrollTo: methodOp(function (x, y) { scrollToCoords(this, x, y); }),
        getScrollInfo: function() {
          var scroller = this.display.scroller;
          return {left: scroller.scrollLeft, top: scroller.scrollTop,
                  height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
                  width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
                  clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
        },

        scrollIntoView: methodOp(function(range, margin) {
          if (range == null) {
            range = {from: this.doc.sel.primary().head, to: null};
            if (margin == null) { margin = this.options.cursorScrollMargin; }
          } else if (typeof range == "number") {
            range = {from: Pos(range, 0), to: null};
          } else if (range.from == null) {
            range = {from: range, to: null};
          }
          if (!range.to) { range.to = range.from; }
          range.margin = margin || 0;

          if (range.from.line != null) {
            scrollToRange(this, range);
          } else {
            scrollToCoordsRange(this, range.from, range.to, range.margin);
          }
        }),

        setSize: methodOp(function(width, height) {
          var this$1 = this;

          var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; };
          if (width != null) { this.display.wrapper.style.width = interpret(width); }
          if (height != null) { this.display.wrapper.style.height = interpret(height); }
          if (this.options.lineWrapping) { clearLineMeasurementCache(this); }
          var lineNo = this.display.viewFrom;
          this.doc.iter(lineNo, this.display.viewTo, function (line) {
            if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
              { if (line.widgets[i].noHScroll) { regLineChange(this$1, lineNo, "widget"); break } } }
            ++lineNo;
          });
          this.curOp.forceUpdate = true;
          signal(this, "refresh", this);
        }),

        operation: function(f){return runInOp(this, f)},
        startOperation: function(){return startOperation(this)},
        endOperation: function(){return endOperation(this)},

        refresh: methodOp(function() {
          var oldHeight = this.display.cachedTextHeight;
          regChange(this);
          this.curOp.forceUpdate = true;
          clearCaches(this);
          scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop);
          updateGutterSpace(this.display);
          if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5 || this.options.lineWrapping)
            { estimateLineHeights(this); }
          signal(this, "refresh", this);
        }),

        swapDoc: methodOp(function(doc) {
          var old = this.doc;
          old.cm = null;
          // Cancel the current text selection if any (#5821)
          if (this.state.selectingText) { this.state.selectingText(); }
          attachDoc(this, doc);
          clearCaches(this);
          this.display.input.reset();
          scrollToCoords(this, doc.scrollLeft, doc.scrollTop);
          this.curOp.forceScroll = true;
          signalLater(this, "swapDoc", this, old);
          return old
        }),

        phrase: function(phraseText) {
          var phrases = this.options.phrases;
          return phrases && Object.prototype.hasOwnProperty.call(phrases, phraseText) ? phrases[phraseText] : phraseText
        },

        getInputField: function(){return this.display.input.getField()},
        getWrapperElement: function(){return this.display.wrapper},
        getScrollerElement: function(){return this.display.scroller},
        getGutterElement: function(){return this.display.gutters}
      };
      eventMixin(CodeMirror);

      CodeMirror.registerHelper = function(type, name, value) {
        if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []}; }
        helpers[type][name] = value;
      };
      CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
        CodeMirror.registerHelper(type, name, value);
        helpers[type]._global.push({pred: predicate, val: value});
      };
    }

    // Used for horizontal relative motion. Dir is -1 or 1 (left or
    // right), unit can be "codepoint", "char", "column" (like char, but
    // doesn't cross line boundaries), "word" (across next word), or
    // "group" (to the start of next group of word or
    // non-word-non-whitespace chars). The visually param controls
    // whether, in right-to-left text, direction 1 means to move towards
    // the next index in the string, or towards the character to the right
    // of the current position. The resulting position will have a
    // hitSide=true property if it reached the end of the document.
    function findPosH(doc, pos, dir, unit, visually) {
      var oldPos = pos;
      var origDir = dir;
      var lineObj = getLine(doc, pos.line);
      var lineDir = visually && doc.direction == "rtl" ? -dir : dir;
      function findNextLine() {
        var l = pos.line + lineDir;
        if (l < doc.first || l >= doc.first + doc.size) { return false }
        pos = new Pos(l, pos.ch, pos.sticky);
        return lineObj = getLine(doc, l)
      }
      function moveOnce(boundToLine) {
        var next;
        if (unit == "codepoint") {
          var ch = lineObj.text.charCodeAt(pos.ch + (dir > 0 ? 0 : -1));
          if (isNaN(ch)) {
            next = null;
          } else {
            var astral = dir > 0 ? ch >= 0xD800 && ch < 0xDC00 : ch >= 0xDC00 && ch < 0xDFFF;
            next = new Pos(pos.line, Math.max(0, Math.min(lineObj.text.length, pos.ch + dir * (astral ? 2 : 1))), -dir);
          }
        } else if (visually) {
          next = moveVisually(doc.cm, lineObj, pos, dir);
        } else {
          next = moveLogically(lineObj, pos, dir);
        }
        if (next == null) {
          if (!boundToLine && findNextLine())
            { pos = endOfLine(visually, doc.cm, lineObj, pos.line, lineDir); }
          else
            { return false }
        } else {
          pos = next;
        }
        return true
      }

      if (unit == "char" || unit == "codepoint") {
        moveOnce();
      } else if (unit == "column") {
        moveOnce(true);
      } else if (unit == "word" || unit == "group") {
        var sawType = null, group = unit == "group";
        var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
        for (var first = true;; first = false) {
          if (dir < 0 && !moveOnce(!first)) { break }
          var cur = lineObj.text.charAt(pos.ch) || "\n";
          var type = isWordChar(cur, helper) ? "w"
            : group && cur == "\n" ? "n"
            : !group || /\s/.test(cur) ? null
            : "p";
          if (group && !first && !type) { type = "s"; }
          if (sawType && sawType != type) {
            if (dir < 0) {dir = 1; moveOnce(); pos.sticky = "after";}
            break
          }

          if (type) { sawType = type; }
          if (dir > 0 && !moveOnce(!first)) { break }
        }
      }
      var result = skipAtomic(doc, pos, oldPos, origDir, true);
      if (equalCursorPos(oldPos, result)) { result.hitSide = true; }
      return result
    }

    // For relative vertical movement. Dir may be -1 or 1. Unit can be
    // "page" or "line". The resulting position will have a hitSide=true
    // property if it reached the end of the document.
    function findPosV(cm, pos, dir, unit) {
      var doc = cm.doc, x = pos.left, y;
      if (unit == "page") {
        var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
        var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3);
        y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;

      } else if (unit == "line") {
        y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
      }
      var target;
      for (;;) {
        target = coordsChar(cm, x, y);
        if (!target.outside) { break }
        if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
        y += dir * 5;
      }
      return target
    }

    // CONTENTEDITABLE INPUT STYLE

    var ContentEditableInput = function(cm) {
      this.cm = cm;
      this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
      this.polling = new Delayed();
      this.composing = null;
      this.gracePeriod = false;
      this.readDOMTimeout = null;
    };

    ContentEditableInput.prototype.init = function (display) {
        var this$1 = this;

      var input = this, cm = input.cm;
      var div = input.div = display.lineDiv;
      div.contentEditable = true;
      disableBrowserMagic(div, cm.options.spellcheck, cm.options.autocorrect, cm.options.autocapitalize);

      function belongsToInput(e) {
        for (var t = e.target; t; t = t.parentNode) {
          if (t == div) { return true }
          if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) { break }
        }
        return false
      }

      on(div, "paste", function (e) {
        if (!belongsToInput(e) || signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
        // IE doesn't fire input events, so we schedule a read for the pasted content in this way
        if (ie_version <= 11) { setTimeout(operation(cm, function () { return this$1.updateFromDOM(); }), 20); }
      });

      on(div, "compositionstart", function (e) {
        this$1.composing = {data: e.data, done: false};
      });
      on(div, "compositionupdate", function (e) {
        if (!this$1.composing) { this$1.composing = {data: e.data, done: false}; }
      });
      on(div, "compositionend", function (e) {
        if (this$1.composing) {
          if (e.data != this$1.composing.data) { this$1.readFromDOMSoon(); }
          this$1.composing.done = true;
        }
      });

      on(div, "touchstart", function () { return input.forceCompositionEnd(); });

      on(div, "input", function () {
        if (!this$1.composing) { this$1.readFromDOMSoon(); }
      });

      function onCopyCut(e) {
        if (!belongsToInput(e) || signalDOMEvent(cm, e)) { return }
        if (cm.somethingSelected()) {
          setLastCopied({lineWise: false, text: cm.getSelections()});
          if (e.type == "cut") { cm.replaceSelection("", null, "cut"); }
        } else if (!cm.options.lineWiseCopyCut) {
          return
        } else {
          var ranges = copyableRanges(cm);
          setLastCopied({lineWise: true, text: ranges.text});
          if (e.type == "cut") {
            cm.operation(function () {
              cm.setSelections(ranges.ranges, 0, sel_dontScroll);
              cm.replaceSelection("", null, "cut");
            });
          }
        }
        if (e.clipboardData) {
          e.clipboardData.clearData();
          var content = lastCopied.text.join("\n");
          // iOS exposes the clipboard API, but seems to discard content inserted into it
          e.clipboardData.setData("Text", content);
          if (e.clipboardData.getData("Text") == content) {
            e.preventDefault();
            return
          }
        }
        // Old-fashioned briefly-focus-a-textarea hack
        var kludge = hiddenTextarea(), te = kludge.firstChild;
        cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
        te.value = lastCopied.text.join("\n");
        var hadFocus = document.activeElement;
        selectInput(te);
        setTimeout(function () {
          cm.display.lineSpace.removeChild(kludge);
          hadFocus.focus();
          if (hadFocus == div) { input.showPrimarySelection(); }
        }, 50);
      }
      on(div, "copy", onCopyCut);
      on(div, "cut", onCopyCut);
    };

    ContentEditableInput.prototype.screenReaderLabelChanged = function (label) {
      // Label for screenreaders, accessibility
      if(label) {
        this.div.setAttribute('aria-label', label);
      } else {
        this.div.removeAttribute('aria-label');
      }
    };

    ContentEditableInput.prototype.prepareSelection = function () {
      var result = prepareSelection(this.cm, false);
      result.focus = document.activeElement == this.div;
      return result
    };

    ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
      if (!info || !this.cm.display.view.length) { return }
      if (info.focus || takeFocus) { this.showPrimarySelection(); }
      this.showMultipleSelections(info);
    };

    ContentEditableInput.prototype.getSelection = function () {
      return this.cm.display.wrapper.ownerDocument.getSelection()
    };

    ContentEditableInput.prototype.showPrimarySelection = function () {
      var sel = this.getSelection(), cm = this.cm, prim = cm.doc.sel.primary();
      var from = prim.from(), to = prim.to();

      if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
        sel.removeAllRanges();
        return
      }

      var curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
      var curFocus = domToPos(cm, sel.focusNode, sel.focusOffset);
      if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
          cmp(minPos(curAnchor, curFocus), from) == 0 &&
          cmp(maxPos(curAnchor, curFocus), to) == 0)
        { return }

      var view = cm.display.view;
      var start = (from.line >= cm.display.viewFrom && posToDOM(cm, from)) ||
          {node: view[0].measure.map[2], offset: 0};
      var end = to.line < cm.display.viewTo && posToDOM(cm, to);
      if (!end) {
        var measure = view[view.length - 1].measure;
        var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
        end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]};
      }

      if (!start || !end) {
        sel.removeAllRanges();
        return
      }

      var old = sel.rangeCount && sel.getRangeAt(0), rng;
      try { rng = range(start.node, start.offset, end.offset, end.node); }
      catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
      if (rng) {
        if (!gecko && cm.state.focused) {
          sel.collapse(start.node, start.offset);
          if (!rng.collapsed) {
            sel.removeAllRanges();
            sel.addRange(rng);
          }
        } else {
          sel.removeAllRanges();
          sel.addRange(rng);
        }
        if (old && sel.anchorNode == null) { sel.addRange(old); }
        else if (gecko) { this.startGracePeriod(); }
      }
      this.rememberSelection();
    };

    ContentEditableInput.prototype.startGracePeriod = function () {
        var this$1 = this;

      clearTimeout(this.gracePeriod);
      this.gracePeriod = setTimeout(function () {
        this$1.gracePeriod = false;
        if (this$1.selectionChanged())
          { this$1.cm.operation(function () { return this$1.cm.curOp.selectionChanged = true; }); }
      }, 20);
    };

    ContentEditableInput.prototype.showMultipleSelections = function (info) {
      removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
      removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
    };

    ContentEditableInput.prototype.rememberSelection = function () {
      var sel = this.getSelection();
      this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
      this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
    };

    ContentEditableInput.prototype.selectionInEditor = function () {
      var sel = this.getSelection();
      if (!sel.rangeCount) { return false }
      var node = sel.getRangeAt(0).commonAncestorContainer;
      return contains(this.div, node)
    };

    ContentEditableInput.prototype.focus = function () {
      if (this.cm.options.readOnly != "nocursor") {
        if (!this.selectionInEditor() || document.activeElement != this.div)
          { this.showSelection(this.prepareSelection(), true); }
        this.div.focus();
      }
    };
    ContentEditableInput.prototype.blur = function () { this.div.blur(); };
    ContentEditableInput.prototype.getField = function () { return this.div };

    ContentEditableInput.prototype.supportsTouch = function () { return true };

    ContentEditableInput.prototype.receivedFocus = function () {
      var input = this;
      if (this.selectionInEditor())
        { this.pollSelection(); }
      else
        { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }); }

      function poll() {
        if (input.cm.state.focused) {
          input.pollSelection();
          input.polling.set(input.cm.options.pollInterval, poll);
        }
      }
      this.polling.set(this.cm.options.pollInterval, poll);
    };

    ContentEditableInput.prototype.selectionChanged = function () {
      var sel = this.getSelection();
      return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
        sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
    };

    ContentEditableInput.prototype.pollSelection = function () {
      if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) { return }
      var sel = this.getSelection(), cm = this.cm;
      // On Android Chrome (version 56, at least), backspacing into an
      // uneditable block element will put the cursor in that element,
      // and then, because it's not editable, hide the virtual keyboard.
      // Because Android doesn't allow us to actually detect backspace
      // presses in a sane way, this code checks for when that happens
      // and simulates a backspace press in this case.
      if (android && chrome && this.cm.display.gutterSpecs.length && isInGutter(sel.anchorNode)) {
        this.cm.triggerOnKeyDown({type: "keydown", keyCode: 8, preventDefault: Math.abs});
        this.blur();
        this.focus();
        return
      }
      if (this.composing) { return }
      this.rememberSelection();
      var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
      var head = domToPos(cm, sel.focusNode, sel.focusOffset);
      if (anchor && head) { runInOp(cm, function () {
        setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
        if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true; }
      }); }
    };

    ContentEditableInput.prototype.pollContent = function () {
      if (this.readDOMTimeout != null) {
        clearTimeout(this.readDOMTimeout);
        this.readDOMTimeout = null;
      }

      var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
      var from = sel.from(), to = sel.to();
      if (from.ch == 0 && from.line > cm.firstLine())
        { from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length); }
      if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine())
        { to = Pos(to.line + 1, 0); }
      if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }

      var fromIndex, fromLine, fromNode;
      if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
        fromLine = lineNo(display.view[0].line);
        fromNode = display.view[0].node;
      } else {
        fromLine = lineNo(display.view[fromIndex].line);
        fromNode = display.view[fromIndex - 1].node.nextSibling;
      }
      var toIndex = findViewIndex(cm, to.line);
      var toLine, toNode;
      if (toIndex == display.view.length - 1) {
        toLine = display.viewTo - 1;
        toNode = display.lineDiv.lastChild;
      } else {
        toLine = lineNo(display.view[toIndex + 1].line) - 1;
        toNode = display.view[toIndex + 1].node.previousSibling;
      }

      if (!fromNode) { return false }
      var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
      var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
      while (newText.length > 1 && oldText.length > 1) {
        if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
        else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
        else { break }
      }

      var cutFront = 0, cutEnd = 0;
      var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
      while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
        { ++cutFront; }
      var newBot = lst(newText), oldBot = lst(oldText);
      var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
                               oldBot.length - (oldText.length == 1 ? cutFront : 0));
      while (cutEnd < maxCutEnd &&
             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
        { ++cutEnd; }
      // Try to move start of change to start of selection if ambiguous
      if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
        while (cutFront && cutFront > from.ch &&
               newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
          cutFront--;
          cutEnd++;
        }
      }

      newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "");
      newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "");

      var chFrom = Pos(fromLine, cutFront);
      var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
      if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
        replaceRange(cm.doc, newText, chFrom, chTo, "+input");
        return true
      }
    };

    ContentEditableInput.prototype.ensurePolled = function () {
      this.forceCompositionEnd();
    };
    ContentEditableInput.prototype.reset = function () {
      this.forceCompositionEnd();
    };
    ContentEditableInput.prototype.forceCompositionEnd = function () {
      if (!this.composing) { return }
      clearTimeout(this.readDOMTimeout);
      this.composing = null;
      this.updateFromDOM();
      this.div.blur();
      this.div.focus();
    };
    ContentEditableInput.prototype.readFromDOMSoon = function () {
        var this$1 = this;

      if (this.readDOMTimeout != null) { return }
      this.readDOMTimeout = setTimeout(function () {
        this$1.readDOMTimeout = null;
        if (this$1.composing) {
          if (this$1.composing.done) { this$1.composing = null; }
          else { return }
        }
        this$1.updateFromDOM();
      }, 80);
    };

    ContentEditableInput.prototype.updateFromDOM = function () {
        var this$1 = this;

      if (this.cm.isReadOnly() || !this.pollContent())
        { runInOp(this.cm, function () { return regChange(this$1.cm); }); }
    };

    ContentEditableInput.prototype.setUneditable = function (node) {
      node.contentEditable = "false";
    };

    ContentEditableInput.prototype.onKeyPress = function (e) {
      if (e.charCode == 0 || this.composing) { return }
      e.preventDefault();
      if (!this.cm.isReadOnly())
        { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0); }
    };

    ContentEditableInput.prototype.readOnlyChanged = function (val) {
      this.div.contentEditable = String(val != "nocursor");
    };

    ContentEditableInput.prototype.onContextMenu = function () {};
    ContentEditableInput.prototype.resetPosition = function () {};

    ContentEditableInput.prototype.needsContentAttribute = true;

    function posToDOM(cm, pos) {
      var view = findViewForLine(cm, pos.line);
      if (!view || view.hidden) { return null }
      var line = getLine(cm.doc, pos.line);
      var info = mapFromLineView(view, line, pos.line);

      var order = getOrder(line, cm.doc.direction), side = "left";
      if (order) {
        var partPos = getBidiPartAt(order, pos.ch);
        side = partPos % 2 ? "right" : "left";
      }
      var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
      result.offset = result.collapse == "right" ? result.end : result.start;
      return result
    }

    function isInGutter(node) {
      for (var scan = node; scan; scan = scan.parentNode)
        { if (/CodeMirror-gutter-wrapper/.test(scan.className)) { return true } }
      return false
    }

    function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }

    function domTextBetween(cm, from, to, fromLine, toLine) {
      var text = "", closing = false, lineSep = cm.doc.lineSeparator(), extraLinebreak = false;
      function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
      function close() {
        if (closing) {
          text += lineSep;
          if (extraLinebreak) { text += lineSep; }
          closing = extraLinebreak = false;
        }
      }
      function addText(str) {
        if (str) {
          close();
          text += str;
        }
      }
      function walk(node) {
        if (node.nodeType == 1) {
          var cmText = node.getAttribute("cm-text");
          if (cmText) {
            addText(cmText);
            return
          }
          var markerID = node.getAttribute("cm-marker"), range;
          if (markerID) {
            var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
            if (found.length && (range = found[0].find(0)))
              { addText(getBetween(cm.doc, range.from, range.to).join(lineSep)); }
            return
          }
          if (node.getAttribute("contenteditable") == "false") { return }
          var isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName);
          if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) { return }

          if (isBlock) { close(); }
          for (var i = 0; i < node.childNodes.length; i++)
            { walk(node.childNodes[i]); }

          if (/^(pre|p)$/i.test(node.nodeName)) { extraLinebreak = true; }
          if (isBlock) { closing = true; }
        } else if (node.nodeType == 3) {
          addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
        }
      }
      for (;;) {
        walk(from);
        if (from == to) { break }
        from = from.nextSibling;
        extraLinebreak = false;
      }
      return text
    }

    function domToPos(cm, node, offset) {
      var lineNode;
      if (node == cm.display.lineDiv) {
        lineNode = cm.display.lineDiv.childNodes[offset];
        if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
        node = null; offset = 0;
      } else {
        for (lineNode = node;; lineNode = lineNode.parentNode) {
          if (!lineNode || lineNode == cm.display.lineDiv) { return null }
          if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
        }
      }
      for (var i = 0; i < cm.display.view.length; i++) {
        var lineView = cm.display.view[i];
        if (lineView.node == lineNode)
          { return locateNodeInLineView(lineView, node, offset) }
      }
    }

    function locateNodeInLineView(lineView, node, offset) {
      var wrapper = lineView.text.firstChild, bad = false;
      if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
      if (node == wrapper) {
        bad = true;
        node = wrapper.childNodes[offset];
        offset = 0;
        if (!node) {
          var line = lineView.rest ? lst(lineView.rest) : lineView.line;
          return badPos(Pos(lineNo(line), line.text.length), bad)
        }
      }

      var textNode = node.nodeType == 3 ? node : null, topNode = node;
      if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
        textNode = node.firstChild;
        if (offset) { offset = textNode.nodeValue.length; }
      }
      while (topNode.parentNode != wrapper) { topNode = topNode.parentNode; }
      var measure = lineView.measure, maps = measure.maps;

      function find(textNode, topNode, offset) {
        for (var i = -1; i < (maps ? maps.length : 0); i++) {
          var map = i < 0 ? measure.map : maps[i];
          for (var j = 0; j < map.length; j += 3) {
            var curNode = map[j + 2];
            if (curNode == textNode || curNode == topNode) {
              var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
              var ch = map[j] + offset;
              if (offset < 0 || curNode != textNode) { ch = map[j + (offset ? 1 : 0)]; }
              return Pos(line, ch)
            }
          }
        }
      }
      var found = find(textNode, topNode, offset);
      if (found) { return badPos(found, bad) }

      // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
      for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
        found = find(after, after.firstChild, 0);
        if (found)
          { return badPos(Pos(found.line, found.ch - dist), bad) }
        else
          { dist += after.textContent.length; }
      }
      for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
        found = find(before, before.firstChild, -1);
        if (found)
          { return badPos(Pos(found.line, found.ch + dist$1), bad) }
        else
          { dist$1 += before.textContent.length; }
      }
    }

    // TEXTAREA INPUT STYLE

    var TextareaInput = function(cm) {
      this.cm = cm;
      // See input.poll and input.reset
      this.prevInput = "";

      // Flag that indicates whether we expect input to appear real soon
      // now (after some event like 'keypress' or 'input') and are
      // polling intensively.
      this.pollingFast = false;
      // Self-resetting timeout for the poller
      this.polling = new Delayed();
      // Used to work around IE issue with selection being forgotten when focus moves away from textarea
      this.hasSelection = false;
      this.composing = null;
    };

    TextareaInput.prototype.init = function (display) {
        var this$1 = this;

      var input = this, cm = this.cm;
      this.createField(display);
      var te = this.textarea;

      display.wrapper.insertBefore(this.wrapper, display.wrapper.firstChild);

      // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
      if (ios) { te.style.width = "0px"; }

      on(te, "input", function () {
        if (ie && ie_version >= 9 && this$1.hasSelection) { this$1.hasSelection = null; }
        input.poll();
      });

      on(te, "paste", function (e) {
        if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }

        cm.state.pasteIncoming = +new Date;
        input.fastPoll();
      });

      function prepareCopyCut(e) {
        if (signalDOMEvent(cm, e)) { return }
        if (cm.somethingSelected()) {
          setLastCopied({lineWise: false, text: cm.getSelections()});
        } else if (!cm.options.lineWiseCopyCut) {
          return
        } else {
          var ranges = copyableRanges(cm);
          setLastCopied({lineWise: true, text: ranges.text});
          if (e.type == "cut") {
            cm.setSelections(ranges.ranges, null, sel_dontScroll);
          } else {
            input.prevInput = "";
            te.value = ranges.text.join("\n");
            selectInput(te);
          }
        }
        if (e.type == "cut") { cm.state.cutIncoming = +new Date; }
      }
      on(te, "cut", prepareCopyCut);
      on(te, "copy", prepareCopyCut);

      on(display.scroller, "paste", function (e) {
        if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
        if (!te.dispatchEvent) {
          cm.state.pasteIncoming = +new Date;
          input.focus();
          return
        }

        // Pass the `paste` event to the textarea so it's handled by its event listener.
        var event = new Event("paste");
        event.clipboardData = e.clipboardData;
        te.dispatchEvent(event);
      });

      // Prevent normal selection in the editor (we handle our own)
      on(display.lineSpace, "selectstart", function (e) {
        if (!eventInWidget(display, e)) { e_preventDefault(e); }
      });

      on(te, "compositionstart", function () {
        var start = cm.getCursor("from");
        if (input.composing) { input.composing.range.clear(); }
        input.composing = {
          start: start,
          range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
        };
      });
      on(te, "compositionend", function () {
        if (input.composing) {
          input.poll();
          input.composing.range.clear();
          input.composing = null;
        }
      });
    };

    TextareaInput.prototype.createField = function (_display) {
      // Wraps and hides input textarea
      this.wrapper = hiddenTextarea();
      // The semihidden textarea that is focused when the editor is
      // focused, and receives input.
      this.textarea = this.wrapper.firstChild;
    };

    TextareaInput.prototype.screenReaderLabelChanged = function (label) {
      // Label for screenreaders, accessibility
      if(label) {
        this.textarea.setAttribute('aria-label', label);
      } else {
        this.textarea.removeAttribute('aria-label');
      }
    };

    TextareaInput.prototype.prepareSelection = function () {
      // Redraw the selection and/or cursor
      var cm = this.cm, display = cm.display, doc = cm.doc;
      var result = prepareSelection(cm);

      // Move the hidden textarea near the cursor to prevent scrolling artifacts
      if (cm.options.moveInputWithCursor) {
        var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
        var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
        result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                            headPos.top + lineOff.top - wrapOff.top));
        result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                             headPos.left + lineOff.left - wrapOff.left));
      }

      return result
    };

    TextareaInput.prototype.showSelection = function (drawn) {
      var cm = this.cm, display = cm.display;
      removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
      removeChildrenAndAdd(display.selectionDiv, drawn.selection);
      if (drawn.teTop != null) {
        this.wrapper.style.top = drawn.teTop + "px";
        this.wrapper.style.left = drawn.teLeft + "px";
      }
    };

    // Reset the input to correspond to the selection (or to be empty,
    // when not typing and nothing is selected)
    TextareaInput.prototype.reset = function (typing) {
      if (this.contextMenuPending || this.composing) { return }
      var cm = this.cm;
      if (cm.somethingSelected()) {
        this.prevInput = "";
        var content = cm.getSelection();
        this.textarea.value = content;
        if (cm.state.focused) { selectInput(this.textarea); }
        if (ie && ie_version >= 9) { this.hasSelection = content; }
      } else if (!typing) {
        this.prevInput = this.textarea.value = "";
        if (ie && ie_version >= 9) { this.hasSelection = null; }
      }
    };

    TextareaInput.prototype.getField = function () { return this.textarea };

    TextareaInput.prototype.supportsTouch = function () { return false };

    TextareaInput.prototype.focus = function () {
      if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
        try { this.textarea.focus(); }
        catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
      }
    };

    TextareaInput.prototype.blur = function () { this.textarea.blur(); };

    TextareaInput.prototype.resetPosition = function () {
      this.wrapper.style.top = this.wrapper.style.left = 0;
    };

    TextareaInput.prototype.receivedFocus = function () { this.slowPoll(); };

    // Poll for input changes, using the normal rate of polling. This
    // runs as long as the editor is focused.
    TextareaInput.prototype.slowPoll = function () {
        var this$1 = this;

      if (this.pollingFast) { return }
      this.polling.set(this.cm.options.pollInterval, function () {
        this$1.poll();
        if (this$1.cm.state.focused) { this$1.slowPoll(); }
      });
    };

    // When an event has just come in that is likely to add or change
    // something in the input textarea, we poll faster, to ensure that
    // the change appears on the screen quickly.
    TextareaInput.prototype.fastPoll = function () {
      var missed = false, input = this;
      input.pollingFast = true;
      function p() {
        var changed = input.poll();
        if (!changed && !missed) {missed = true; input.polling.set(60, p);}
        else {input.pollingFast = false; input.slowPoll();}
      }
      input.polling.set(20, p);
    };

    // Read input from the textarea, and update the document to match.
    // When something is selected, it is present in the textarea, and
    // selected (unless it is huge, in which case a placeholder is
    // used). When nothing is selected, the cursor sits after previously
    // seen text (can be empty), which is stored in prevInput (we must
    // not reset the textarea when typing, because that breaks IME).
    TextareaInput.prototype.poll = function () {
        var this$1 = this;

      var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
      // Since this is called a *lot*, try to bail out as cheaply as
      // possible when it is clear that nothing happened. hasSelection
      // will be the case when there is a lot of text in the textarea,
      // in which case reading its value would be expensive.
      if (this.contextMenuPending || !cm.state.focused ||
          (hasSelection(input) && !prevInput && !this.composing) ||
          cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
        { return false }

      var text = input.value;
      // If nothing changed, bail.
      if (text == prevInput && !cm.somethingSelected()) { return false }
      // Work around nonsensical selection resetting in IE9/10, and
      // inexplicable appearance of private area unicode characters on
      // some key combos in Mac (#2689).
      if (ie && ie_version >= 9 && this.hasSelection === text ||
          mac && /[\uf700-\uf7ff]/.test(text)) {
        cm.display.input.reset();
        return false
      }

      if (cm.doc.sel == cm.display.selForContextMenu) {
        var first = text.charCodeAt(0);
        if (first == 0x200b && !prevInput) { prevInput = "\u200b"; }
        if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
      }
      // Find the part of the input that is actually new
      var same = 0, l = Math.min(prevInput.length, text.length);
      while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same; }

      runInOp(cm, function () {
        applyTextInput(cm, text.slice(same), prevInput.length - same,
                       null, this$1.composing ? "*compose" : null);

        // Don't leave long text in the textarea, since it makes further polling slow
        if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1.prevInput = ""; }
        else { this$1.prevInput = text; }

        if (this$1.composing) {
          this$1.composing.range.clear();
          this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"),
                                             {className: "CodeMirror-composing"});
        }
      });
      return true
    };

    TextareaInput.prototype.ensurePolled = function () {
      if (this.pollingFast && this.poll()) { this.pollingFast = false; }
    };

    TextareaInput.prototype.onKeyPress = function () {
      if (ie && ie_version >= 9) { this.hasSelection = null; }
      this.fastPoll();
    };

    TextareaInput.prototype.onContextMenu = function (e) {
      var input = this, cm = input.cm, display = cm.display, te = input.textarea;
      if (input.contextMenuPending) { input.contextMenuPending(); }
      var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
      if (!pos || presto) { return } // Opera is difficult.

      // Reset the current text selection only if the click is done outside of the selection
      // and 'resetSelectionOnContextMenu' option is true.
      var reset = cm.options.resetSelectionOnContextMenu;
      if (reset && cm.doc.sel.contains(pos) == -1)
        { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll); }

      var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
      var wrapperBox = input.wrapper.offsetParent.getBoundingClientRect();
      input.wrapper.style.cssText = "position: static";
      te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
      var oldScrollY;
      if (webkit) { oldScrollY = window.scrollY; } // Work around Chrome issue (#2712)
      display.input.focus();
      if (webkit) { window.scrollTo(null, oldScrollY); }
      display.input.reset();
      // Adds "Select all" to context menu in FF
      if (!cm.somethingSelected()) { te.value = input.prevInput = " "; }
      input.contextMenuPending = rehide;
      display.selForContextMenu = cm.doc.sel;
      clearTimeout(display.detectingSelectAll);

      // Select-all will be greyed out if there's nothing to select, so
      // this adds a zero-width space so that we can later check whether
      // it got selected.
      function prepareSelectAllHack() {
        if (te.selectionStart != null) {
          var selected = cm.somethingSelected();
          var extval = "\u200b" + (selected ? te.value : "");
          te.value = "\u21da"; // Used to catch context-menu undo
          te.value = extval;
          input.prevInput = selected ? "" : "\u200b";
          te.selectionStart = 1; te.selectionEnd = extval.length;
          // Re-set this, in case some other handler touched the
          // selection in the meantime.
          display.selForContextMenu = cm.doc.sel;
        }
      }
      function rehide() {
        if (input.contextMenuPending != rehide) { return }
        input.contextMenuPending = false;
        input.wrapper.style.cssText = oldWrapperCSS;
        te.style.cssText = oldCSS;
        if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos); }

        // Try to detect the user choosing select-all
        if (te.selectionStart != null) {
          if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack(); }
          var i = 0, poll = function () {
            if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
                te.selectionEnd > 0 && input.prevInput == "\u200b") {
              operation(cm, selectAll)(cm);
            } else if (i++ < 10) {
              display.detectingSelectAll = setTimeout(poll, 500);
            } else {
              display.selForContextMenu = null;
              display.input.reset();
            }
          };
          display.detectingSelectAll = setTimeout(poll, 200);
        }
      }

      if (ie && ie_version >= 9) { prepareSelectAllHack(); }
      if (captureRightClick) {
        e_stop(e);
        var mouseup = function () {
          off(window, "mouseup", mouseup);
          setTimeout(rehide, 20);
        };
        on(window, "mouseup", mouseup);
      } else {
        setTimeout(rehide, 50);
      }
    };

    TextareaInput.prototype.readOnlyChanged = function (val) {
      if (!val) { this.reset(); }
      this.textarea.disabled = val == "nocursor";
      this.textarea.readOnly = !!val;
    };

    TextareaInput.prototype.setUneditable = function () {};

    TextareaInput.prototype.needsContentAttribute = false;

    function fromTextArea(textarea, options) {
      options = options ? copyObj(options) : {};
      options.value = textarea.value;
      if (!options.tabindex && textarea.tabIndex)
        { options.tabindex = textarea.tabIndex; }
      if (!options.placeholder && textarea.placeholder)
        { options.placeholder = textarea.placeholder; }
      // Set autofocus to true if this textarea is focused, or if it has
      // autofocus and no other element is focused.
      if (options.autofocus == null) {
        var hasFocus = activeElt();
        options.autofocus = hasFocus == textarea ||
          textarea.getAttribute("autofocus") != null && hasFocus == document.body;
      }

      function save() {textarea.value = cm.getValue();}

      var realSubmit;
      if (textarea.form) {
        on(textarea.form, "submit", save);
        // Deplorable hack to make the submit method do the right thing.
        if (!options.leaveSubmitMethodAlone) {
          var form = textarea.form;
          realSubmit = form.submit;
          try {
            var wrappedSubmit = form.submit = function () {
              save();
              form.submit = realSubmit;
              form.submit();
              form.submit = wrappedSubmit;
            };
          } catch(e) {}
        }
      }

      options.finishInit = function (cm) {
        cm.save = save;
        cm.getTextArea = function () { return textarea; };
        cm.toTextArea = function () {
          cm.toTextArea = isNaN; // Prevent this from being ran twice
          save();
          textarea.parentNode.removeChild(cm.getWrapperElement());
          textarea.style.display = "";
          if (textarea.form) {
            off(textarea.form, "submit", save);
            if (!options.leaveSubmitMethodAlone && typeof textarea.form.submit == "function")
              { textarea.form.submit = realSubmit; }
          }
        };
      };

      textarea.style.display = "none";
      var cm = CodeMirror(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
        options);
      return cm
    }

    function addLegacyProps(CodeMirror) {
      CodeMirror.off = off;
      CodeMirror.on = on;
      CodeMirror.wheelEventPixels = wheelEventPixels;
      CodeMirror.Doc = Doc;
      CodeMirror.splitLines = splitLinesAuto;
      CodeMirror.countColumn = countColumn;
      CodeMirror.findColumn = findColumn;
      CodeMirror.isWordChar = isWordCharBasic;
      CodeMirror.Pass = Pass;
      CodeMirror.signal = signal;
      CodeMirror.Line = Line;
      CodeMirror.changeEnd = changeEnd;
      CodeMirror.scrollbarModel = scrollbarModel;
      CodeMirror.Pos = Pos;
      CodeMirror.cmpPos = cmp;
      CodeMirror.modes = modes;
      CodeMirror.mimeModes = mimeModes;
      CodeMirror.resolveMode = resolveMode;
      CodeMirror.getMode = getMode;
      CodeMirror.modeExtensions = modeExtensions;
      CodeMirror.extendMode = extendMode;
      CodeMirror.copyState = copyState;
      CodeMirror.startState = startState;
      CodeMirror.innerMode = innerMode;
      CodeMirror.commands = commands;
      CodeMirror.keyMap = keyMap;
      CodeMirror.keyName = keyName;
      CodeMirror.isModifierKey = isModifierKey;
      CodeMirror.lookupKey = lookupKey;
      CodeMirror.normalizeKeyMap = normalizeKeyMap;
      CodeMirror.StringStream = StringStream;
      CodeMirror.SharedTextMarker = SharedTextMarker;
      CodeMirror.TextMarker = TextMarker;
      CodeMirror.LineWidget = LineWidget;
      CodeMirror.e_preventDefault = e_preventDefault;
      CodeMirror.e_stopPropagation = e_stopPropagation;
      CodeMirror.e_stop = e_stop;
      CodeMirror.addClass = addClass;
      CodeMirror.contains = contains;
      CodeMirror.rmClass = rmClass;
      CodeMirror.keyNames = keyNames;
    }

    // EDITOR CONSTRUCTOR

    defineOptions(CodeMirror);

    addEditorMethods(CodeMirror);

    // Set up methods on CodeMirror's prototype to redirect to the editor's document.
    var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
    for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
      { CodeMirror.prototype[prop] = (function(method) {
        return function() {return method.apply(this.doc, arguments)}
      })(Doc.prototype[prop]); } }

    eventMixin(Doc);
    CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};

    // Extra arguments are stored as the mode's dependencies, which is
    // used by (legacy) mechanisms like loadmode.js to automatically
    // load a mode. (Preferred mechanism is the require/define calls.)
    CodeMirror.defineMode = function(name/*, mode, …*/) {
      if (!CodeMirror.defaults.mode && name != "null") { CodeMirror.defaults.mode = name; }
      defineMode.apply(this, arguments);
    };

    CodeMirror.defineMIME = defineMIME;

    // Minimal default mode.
    CodeMirror.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); });
    CodeMirror.defineMIME("text/plain", "null");

    // EXTENSIONS

    CodeMirror.defineExtension = function (name, func) {
      CodeMirror.prototype[name] = func;
    };
    CodeMirror.defineDocExtension = function (name, func) {
      Doc.prototype[name] = func;
    };

    CodeMirror.fromTextArea = fromTextArea;

    addLegacyProps(CodeMirror);

    CodeMirror.version = "5.60.0";

    return CodeMirror;

  })));
  });

  createCommonjsModule(function (module, exports) {
  // CodeMirror, copyright (c) by Marijn Haverbeke and others
  // Distributed under an MIT license: https://codemirror.net/LICENSE

  (function(mod) {
    { mod(codemirror); }
  })(function(CodeMirror) {

  CodeMirror.defineMode("javascript", function(config, parserConfig) {
    var indentUnit = config.indentUnit;
    var statementIndent = parserConfig.statementIndent;
    var jsonldMode = parserConfig.jsonld;
    var jsonMode = parserConfig.json || jsonldMode;
    var isTS = parserConfig.typescript;
    var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

    // Tokenizer

    var keywords = function(){
      function kw(type) {return {type: type, style: "keyword"};}
      var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
      var operator = kw("operator"), atom = {type: "atom", style: "atom"};

      return {
        "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
        "return": D, "break": D, "continue": D, "new": kw("new"), "delete": C, "void": C, "throw": C,
        "debugger": kw("debugger"), "var": kw("var"), "const": kw("var"), "let": kw("var"),
        "function": kw("function"), "catch": kw("catch"),
        "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
        "in": operator, "typeof": operator, "instanceof": operator,
        "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
        "this": kw("this"), "class": kw("class"), "super": kw("atom"),
        "yield": C, "export": kw("export"), "import": kw("import"), "extends": C,
        "await": C
      };
    }();

    var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
    var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

    function readRegexp(stream) {
      var escaped = false, next, inSet = false;
      while ((next = stream.next()) != null) {
        if (!escaped) {
          if (next == "/" && !inSet) { return; }
          if (next == "[") { inSet = true; }
          else if (inSet && next == "]") { inSet = false; }
        }
        escaped = !escaped && next == "\\";
      }
    }

    // Used as scratch variables to communicate multiple values without
    // consing up tons of objects.
    var type, content;
    function ret(tp, style, cont) {
      type = tp; content = cont;
      return style;
    }
    function tokenBase(stream, state) {
      var ch = stream.next();
      if (ch == '"' || ch == "'") {
        state.tokenize = tokenString(ch);
        return state.tokenize(stream, state);
      } else if (ch == "." && stream.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
        return ret("number", "number");
      } else if (ch == "." && stream.match("..")) {
        return ret("spread", "meta");
      } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
        return ret(ch);
      } else if (ch == "=" && stream.eat(">")) {
        return ret("=>", "operator");
      } else if (ch == "0" && stream.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) {
        return ret("number", "number");
      } else if (/\d/.test(ch)) {
        stream.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
        return ret("number", "number");
      } else if (ch == "/") {
        if (stream.eat("*")) {
          state.tokenize = tokenComment;
          return tokenComment(stream, state);
        } else if (stream.eat("/")) {
          stream.skipToEnd();
          return ret("comment", "comment");
        } else if (expressionAllowed(stream, state, 1)) {
          readRegexp(stream);
          stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
          return ret("regexp", "string-2");
        } else {
          stream.eat("=");
          return ret("operator", "operator", stream.current());
        }
      } else if (ch == "`") {
        state.tokenize = tokenQuasi;
        return tokenQuasi(stream, state);
      } else if (ch == "#" && stream.peek() == "!") {
        stream.skipToEnd();
        return ret("meta", "meta");
      } else if (ch == "#" && stream.eatWhile(wordRE)) {
        return ret("variable", "property")
      } else if (ch == "<" && stream.match("!--") ||
                 (ch == "-" && stream.match("->") && !/\S/.test(stream.string.slice(0, stream.start)))) {
        stream.skipToEnd();
        return ret("comment", "comment")
      } else if (isOperatorChar.test(ch)) {
        if (ch != ">" || !state.lexical || state.lexical.type != ">") {
          if (stream.eat("=")) {
            if (ch == "!" || ch == "=") { stream.eat("="); }
          } else if (/[<>*+\-|&?]/.test(ch)) {
            stream.eat(ch);
            if (ch == ">") { stream.eat(ch); }
          }
        }
        if (ch == "?" && stream.eat(".")) { return ret(".") }
        return ret("operator", "operator", stream.current());
      } else if (wordRE.test(ch)) {
        stream.eatWhile(wordRE);
        var word = stream.current();
        if (state.lastType != ".") {
          if (keywords.propertyIsEnumerable(word)) {
            var kw = keywords[word];
            return ret(kw.type, kw.style, word)
          }
          if (word == "async" && stream.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false))
            { return ret("async", "keyword", word) }
        }
        return ret("variable", "variable", word)
      }
    }

    function tokenString(quote) {
      return function(stream, state) {
        var escaped = false, next;
        if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
          state.tokenize = tokenBase;
          return ret("jsonld-keyword", "meta");
        }
        while ((next = stream.next()) != null) {
          if (next == quote && !escaped) { break; }
          escaped = !escaped && next == "\\";
        }
        if (!escaped) { state.tokenize = tokenBase; }
        return ret("string", "string");
      };
    }

    function tokenComment(stream, state) {
      var maybeEnd = false, ch;
      while (ch = stream.next()) {
        if (ch == "/" && maybeEnd) {
          state.tokenize = tokenBase;
          break;
        }
        maybeEnd = (ch == "*");
      }
      return ret("comment", "comment");
    }

    function tokenQuasi(stream, state) {
      var escaped = false, next;
      while ((next = stream.next()) != null) {
        if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
          state.tokenize = tokenBase;
          break;
        }
        escaped = !escaped && next == "\\";
      }
      return ret("quasi", "string-2", stream.current());
    }

    var brackets = "([{}])";
    // This is a crude lookahead trick to try and notice that we're
    // parsing the argument patterns for a fat-arrow function before we
    // actually hit the arrow token. It only works if the arrow is on
    // the same line as the arguments and there's no strange noise
    // (comments) in between. Fallback is to only notice when we hit the
    // arrow, and not declare the arguments as locals for the arrow
    // body.
    function findFatArrow(stream, state) {
      if (state.fatArrowAt) { state.fatArrowAt = null; }
      var arrow = stream.string.indexOf("=>", stream.start);
      if (arrow < 0) { return; }

      if (isTS) { // Try to skip TypeScript return type declarations after the arguments
        var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow));
        if (m) { arrow = m.index; }
      }

      var depth = 0, sawSomething = false;
      for (var pos = arrow - 1; pos >= 0; --pos) {
        var ch = stream.string.charAt(pos);
        var bracket = brackets.indexOf(ch);
        if (bracket >= 0 && bracket < 3) {
          if (!depth) { ++pos; break; }
          if (--depth == 0) { if (ch == "(") { sawSomething = true; } break; }
        } else if (bracket >= 3 && bracket < 6) {
          ++depth;
        } else if (wordRE.test(ch)) {
          sawSomething = true;
        } else if (/["'\/`]/.test(ch)) {
          for (;; --pos) {
            if (pos == 0) { return }
            var next = stream.string.charAt(pos - 1);
            if (next == ch && stream.string.charAt(pos - 2) != "\\") { pos--; break }
          }
        } else if (sawSomething && !depth) {
          ++pos;
          break;
        }
      }
      if (sawSomething && !depth) { state.fatArrowAt = pos; }
    }

    // Parser

    var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true,
                       "regexp": true, "this": true, "import": true, "jsonld-keyword": true};

    function JSLexical(indented, column, type, align, prev, info) {
      this.indented = indented;
      this.column = column;
      this.type = type;
      this.prev = prev;
      this.info = info;
      if (align != null) { this.align = align; }
    }

    function inScope(state, varname) {
      for (var v = state.localVars; v; v = v.next)
        { if (v.name == varname) { return true; } }
      for (var cx = state.context; cx; cx = cx.prev) {
        for (var v = cx.vars; v; v = v.next)
          { if (v.name == varname) { return true; } }
      }
    }

    function parseJS(state, style, type, content, stream) {
      var cc = state.cc;
      // Communicate our context to the combinators.
      // (Less wasteful than consing up a hundred closures on every call.)
      cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

      if (!state.lexical.hasOwnProperty("align"))
        { state.lexical.align = true; }

      while(true) {
        var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
        if (combinator(type, content)) {
          while(cc.length && cc[cc.length - 1].lex)
            { cc.pop()(); }
          if (cx.marked) { return cx.marked; }
          if (type == "variable" && inScope(state, content)) { return "variable-2"; }
          return style;
        }
      }
    }

    // Combinator utils

    var cx = {state: null, column: null, marked: null, cc: null};
    function pass() {
      var arguments$1 = arguments;

      for (var i = arguments.length - 1; i >= 0; i--) { cx.cc.push(arguments$1[i]); }
    }
    function cont() {
      pass.apply(null, arguments);
      return true;
    }
    function inList(name, list) {
      for (var v = list; v; v = v.next) { if (v.name == name) { return true } }
      return false;
    }
    function register(varname) {
      var state = cx.state;
      cx.marked = "def";
      if (state.context) {
        if (state.lexical.info == "var" && state.context && state.context.block) {
          // FIXME function decls are also not block scoped
          var newContext = registerVarScoped(varname, state.context);
          if (newContext != null) {
            state.context = newContext;
            return
          }
        } else if (!inList(varname, state.localVars)) {
          state.localVars = new Var(varname, state.localVars);
          return
        }
      }
      // Fall through means this is global
      if (parserConfig.globalVars && !inList(varname, state.globalVars))
        { state.globalVars = new Var(varname, state.globalVars); }
    }
    function registerVarScoped(varname, context) {
      if (!context) {
        return null
      } else if (context.block) {
        var inner = registerVarScoped(varname, context.prev);
        if (!inner) { return null }
        if (inner == context.prev) { return context }
        return new Context(inner, context.vars, true)
      } else if (inList(varname, context.vars)) {
        return context
      } else {
        return new Context(context.prev, new Var(varname, context.vars), false)
      }
    }

    function isModifier(name) {
      return name == "public" || name == "private" || name == "protected" || name == "abstract" || name == "readonly"
    }

    // Combinators

    function Context(prev, vars, block) { this.prev = prev; this.vars = vars; this.block = block; }
    function Var(name, next) { this.name = name; this.next = next; }

    var defaultVars = new Var("this", new Var("arguments", null));
    function pushcontext() {
      cx.state.context = new Context(cx.state.context, cx.state.localVars, false);
      cx.state.localVars = defaultVars;
    }
    function pushblockcontext() {
      cx.state.context = new Context(cx.state.context, cx.state.localVars, true);
      cx.state.localVars = null;
    }
    function popcontext() {
      cx.state.localVars = cx.state.context.vars;
      cx.state.context = cx.state.context.prev;
    }
    popcontext.lex = true;
    function pushlex(type, info) {
      var result = function() {
        var state = cx.state, indent = state.indented;
        if (state.lexical.type == "stat") { indent = state.lexical.indented; }
        else { for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
          { indent = outer.indented; } }
        state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
      };
      result.lex = true;
      return result;
    }
    function poplex() {
      var state = cx.state;
      if (state.lexical.prev) {
        if (state.lexical.type == ")")
          { state.indented = state.lexical.indented; }
        state.lexical = state.lexical.prev;
      }
    }
    poplex.lex = true;

    function expect(wanted) {
      function exp(type) {
        if (type == wanted) { return cont(); }
        else if (wanted == ";" || type == "}" || type == ")" || type == "]") { return pass(); }
        else { return cont(exp); }
      }    return exp;
    }

    function statement(type, value) {
      if (type == "var") { return cont(pushlex("vardef", value), vardef, expect(";"), poplex); }
      if (type == "keyword a") { return cont(pushlex("form"), parenExpr, statement, poplex); }
      if (type == "keyword b") { return cont(pushlex("form"), statement, poplex); }
      if (type == "keyword d") { return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect(";"), poplex); }
      if (type == "debugger") { return cont(expect(";")); }
      if (type == "{") { return cont(pushlex("}"), pushblockcontext, block, poplex, popcontext); }
      if (type == ";") { return cont(); }
      if (type == "if") {
        if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
          { cx.state.cc.pop()(); }
        return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
      }
      if (type == "function") { return cont(functiondef); }
      if (type == "for") { return cont(pushlex("form"), forspec, statement, poplex); }
      if (type == "class" || (isTS && value == "interface")) {
        cx.marked = "keyword";
        return cont(pushlex("form", type == "class" ? type : value), className, poplex)
      }
      if (type == "variable") {
        if (isTS && value == "declare") {
          cx.marked = "keyword";
          return cont(statement)
        } else if (isTS && (value == "module" || value == "enum" || value == "type") && cx.stream.match(/^\s*\w/, false)) {
          cx.marked = "keyword";
          if (value == "enum") { return cont(enumdef); }
          else if (value == "type") { return cont(typename, expect("operator"), typeexpr, expect(";")); }
          else { return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex) }
        } else if (isTS && value == "namespace") {
          cx.marked = "keyword";
          return cont(pushlex("form"), expression, statement, poplex)
        } else if (isTS && value == "abstract") {
          cx.marked = "keyword";
          return cont(statement)
        } else {
          return cont(pushlex("stat"), maybelabel);
        }
      }
      if (type == "switch") { return cont(pushlex("form"), parenExpr, expect("{"), pushlex("}", "switch"), pushblockcontext,
                                        block, poplex, poplex, popcontext); }
      if (type == "case") { return cont(expression, expect(":")); }
      if (type == "default") { return cont(expect(":")); }
      if (type == "catch") { return cont(pushlex("form"), pushcontext, maybeCatchBinding, statement, poplex, popcontext); }
      if (type == "export") { return cont(pushlex("stat"), afterExport, poplex); }
      if (type == "import") { return cont(pushlex("stat"), afterImport, poplex); }
      if (type == "async") { return cont(statement) }
      if (value == "@") { return cont(expression, statement) }
      return pass(pushlex("stat"), expression, expect(";"), poplex);
    }
    function maybeCatchBinding(type) {
      if (type == "(") { return cont(funarg, expect(")")) }
    }
    function expression(type, value) {
      return expressionInner(type, value, false);
    }
    function expressionNoComma(type, value) {
      return expressionInner(type, value, true);
    }
    function parenExpr(type) {
      if (type != "(") { return pass() }
      return cont(pushlex(")"), maybeexpression, expect(")"), poplex)
    }
    function expressionInner(type, value, noComma) {
      if (cx.state.fatArrowAt == cx.stream.start) {
        var body = noComma ? arrowBodyNoComma : arrowBody;
        if (type == "(") { return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect("=>"), body, popcontext); }
        else if (type == "variable") { return pass(pushcontext, pattern, expect("=>"), body, popcontext); }
      }

      var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
      if (atomicTypes.hasOwnProperty(type)) { return cont(maybeop); }
      if (type == "function") { return cont(functiondef, maybeop); }
      if (type == "class" || (isTS && value == "interface")) { cx.marked = "keyword"; return cont(pushlex("form"), classExpression, poplex); }
      if (type == "keyword c" || type == "async") { return cont(noComma ? expressionNoComma : expression); }
      if (type == "(") { return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop); }
      if (type == "operator" || type == "spread") { return cont(noComma ? expressionNoComma : expression); }
      if (type == "[") { return cont(pushlex("]"), arrayLiteral, poplex, maybeop); }
      if (type == "{") { return contCommasep(objprop, "}", null, maybeop); }
      if (type == "quasi") { return pass(quasi, maybeop); }
      if (type == "new") { return cont(maybeTarget(noComma)); }
      return cont();
    }
    function maybeexpression(type) {
      if (type.match(/[;\}\)\],]/)) { return pass(); }
      return pass(expression);
    }

    function maybeoperatorComma(type, value) {
      if (type == ",") { return cont(maybeexpression); }
      return maybeoperatorNoComma(type, value, false);
    }
    function maybeoperatorNoComma(type, value, noComma) {
      var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
      var expr = noComma == false ? expression : expressionNoComma;
      if (type == "=>") { return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext); }
      if (type == "operator") {
        if (/\+\+|--/.test(value) || isTS && value == "!") { return cont(me); }
        if (isTS && value == "<" && cx.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false))
          { return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, me); }
        if (value == "?") { return cont(expression, expect(":"), expr); }
        return cont(expr);
      }
      if (type == "quasi") { return pass(quasi, me); }
      if (type == ";") { return; }
      if (type == "(") { return contCommasep(expressionNoComma, ")", "call", me); }
      if (type == ".") { return cont(property, me); }
      if (type == "[") { return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me); }
      if (isTS && value == "as") { cx.marked = "keyword"; return cont(typeexpr, me) }
      if (type == "regexp") {
        cx.state.lastType = cx.marked = "operator";
        cx.stream.backUp(cx.stream.pos - cx.stream.start - 1);
        return cont(expr)
      }
    }
    function quasi(type, value) {
      if (type != "quasi") { return pass(); }
      if (value.slice(value.length - 2) != "${") { return cont(quasi); }
      return cont(expression, continueQuasi);
    }
    function continueQuasi(type) {
      if (type == "}") {
        cx.marked = "string-2";
        cx.state.tokenize = tokenQuasi;
        return cont(quasi);
      }
    }
    function arrowBody(type) {
      findFatArrow(cx.stream, cx.state);
      return pass(type == "{" ? statement : expression);
    }
    function arrowBodyNoComma(type) {
      findFatArrow(cx.stream, cx.state);
      return pass(type == "{" ? statement : expressionNoComma);
    }
    function maybeTarget(noComma) {
      return function(type) {
        if (type == ".") { return cont(noComma ? targetNoComma : target); }
        else if (type == "variable" && isTS) { return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma) }
        else { return pass(noComma ? expressionNoComma : expression); }
      };
    }
    function target(_, value) {
      if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
    }
    function targetNoComma(_, value) {
      if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
    }
    function maybelabel(type) {
      if (type == ":") { return cont(poplex, statement); }
      return pass(maybeoperatorComma, expect(";"), poplex);
    }
    function property(type) {
      if (type == "variable") {cx.marked = "property"; return cont();}
    }
    function objprop(type, value) {
      if (type == "async") {
        cx.marked = "property";
        return cont(objprop);
      } else if (type == "variable" || cx.style == "keyword") {
        cx.marked = "property";
        if (value == "get" || value == "set") { return cont(getterSetter); }
        var m; // Work around fat-arrow-detection complication for detecting typescript typed arrow params
        if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false)))
          { cx.state.fatArrowAt = cx.stream.pos + m[0].length; }
        return cont(afterprop);
      } else if (type == "number" || type == "string") {
        cx.marked = jsonldMode ? "property" : (cx.style + " property");
        return cont(afterprop);
      } else if (type == "jsonld-keyword") {
        return cont(afterprop);
      } else if (isTS && isModifier(value)) {
        cx.marked = "keyword";
        return cont(objprop)
      } else if (type == "[") {
        return cont(expression, maybetype, expect("]"), afterprop);
      } else if (type == "spread") {
        return cont(expressionNoComma, afterprop);
      } else if (value == "*") {
        cx.marked = "keyword";
        return cont(objprop);
      } else if (type == ":") {
        return pass(afterprop)
      }
    }
    function getterSetter(type) {
      if (type != "variable") { return pass(afterprop); }
      cx.marked = "property";
      return cont(functiondef);
    }
    function afterprop(type) {
      if (type == ":") { return cont(expressionNoComma); }
      if (type == "(") { return pass(functiondef); }
    }
    function commasep(what, end, sep) {
      function proceed(type, value) {
        if (sep ? sep.indexOf(type) > -1 : type == ",") {
          var lex = cx.state.lexical;
          if (lex.info == "call") { lex.pos = (lex.pos || 0) + 1; }
          return cont(function(type, value) {
            if (type == end || value == end) { return pass() }
            return pass(what)
          }, proceed);
        }
        if (type == end || value == end) { return cont(); }
        if (sep && sep.indexOf(";") > -1) { return pass(what) }
        return cont(expect(end));
      }
      return function(type, value) {
        if (type == end || value == end) { return cont(); }
        return pass(what, proceed);
      };
    }
    function contCommasep(what, end, info) {
      var arguments$1 = arguments;

      for (var i = 3; i < arguments.length; i++)
        { cx.cc.push(arguments$1[i]); }
      return cont(pushlex(end, info), commasep(what, end), poplex);
    }
    function block(type) {
      if (type == "}") { return cont(); }
      return pass(statement, block);
    }
    function maybetype(type, value) {
      if (isTS) {
        if (type == ":") { return cont(typeexpr); }
        if (value == "?") { return cont(maybetype); }
      }
    }
    function maybetypeOrIn(type, value) {
      if (isTS && (type == ":" || value == "in")) { return cont(typeexpr) }
    }
    function mayberettype(type) {
      if (isTS && type == ":") {
        if (cx.stream.match(/^\s*\w+\s+is\b/, false)) { return cont(expression, isKW, typeexpr) }
        else { return cont(typeexpr) }
      }
    }
    function isKW(_, value) {
      if (value == "is") {
        cx.marked = "keyword";
        return cont()
      }
    }
    function typeexpr(type, value) {
      if (value == "keyof" || value == "typeof" || value == "infer" || value == "readonly") {
        cx.marked = "keyword";
        return cont(value == "typeof" ? expressionNoComma : typeexpr)
      }
      if (type == "variable" || value == "void") {
        cx.marked = "type";
        return cont(afterType)
      }
      if (value == "|" || value == "&") { return cont(typeexpr) }
      if (type == "string" || type == "number" || type == "atom") { return cont(afterType); }
      if (type == "[") { return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType) }
      if (type == "{") { return cont(pushlex("}"), typeprops, poplex, afterType) }
      if (type == "(") { return cont(commasep(typearg, ")"), maybeReturnType, afterType) }
      if (type == "<") { return cont(commasep(typeexpr, ">"), typeexpr) }
    }
    function maybeReturnType(type) {
      if (type == "=>") { return cont(typeexpr) }
    }
    function typeprops(type) {
      if (type.match(/[\}\)\]]/)) { return cont() }
      if (type == "," || type == ";") { return cont(typeprops) }
      return pass(typeprop, typeprops)
    }
    function typeprop(type, value) {
      if (type == "variable" || cx.style == "keyword") {
        cx.marked = "property";
        return cont(typeprop)
      } else if (value == "?" || type == "number" || type == "string") {
        return cont(typeprop)
      } else if (type == ":") {
        return cont(typeexpr)
      } else if (type == "[") {
        return cont(expect("variable"), maybetypeOrIn, expect("]"), typeprop)
      } else if (type == "(") {
        return pass(functiondecl, typeprop)
      } else if (!type.match(/[;\}\)\],]/)) {
        return cont()
      }
    }
    function typearg(type, value) {
      if (type == "variable" && cx.stream.match(/^\s*[?:]/, false) || value == "?") { return cont(typearg) }
      if (type == ":") { return cont(typeexpr) }
      if (type == "spread") { return cont(typearg) }
      return pass(typeexpr)
    }
    function afterType(type, value) {
      if (value == "<") { return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType) }
      if (value == "|" || type == "." || value == "&") { return cont(typeexpr) }
      if (type == "[") { return cont(typeexpr, expect("]"), afterType) }
      if (value == "extends" || value == "implements") { cx.marked = "keyword"; return cont(typeexpr) }
      if (value == "?") { return cont(typeexpr, expect(":"), typeexpr) }
    }
    function maybeTypeArgs(_, value) {
      if (value == "<") { return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType) }
    }
    function typeparam() {
      return pass(typeexpr, maybeTypeDefault)
    }
    function maybeTypeDefault(_, value) {
      if (value == "=") { return cont(typeexpr) }
    }
    function vardef(_, value) {
      if (value == "enum") {cx.marked = "keyword"; return cont(enumdef)}
      return pass(pattern, maybetype, maybeAssign, vardefCont);
    }
    function pattern(type, value) {
      if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(pattern) }
      if (type == "variable") { register(value); return cont(); }
      if (type == "spread") { return cont(pattern); }
      if (type == "[") { return contCommasep(eltpattern, "]"); }
      if (type == "{") { return contCommasep(proppattern, "}"); }
    }
    function proppattern(type, value) {
      if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
        register(value);
        return cont(maybeAssign);
      }
      if (type == "variable") { cx.marked = "property"; }
      if (type == "spread") { return cont(pattern); }
      if (type == "}") { return pass(); }
      if (type == "[") { return cont(expression, expect(']'), expect(':'), proppattern); }
      return cont(expect(":"), pattern, maybeAssign);
    }
    function eltpattern() {
      return pass(pattern, maybeAssign)
    }
    function maybeAssign(_type, value) {
      if (value == "=") { return cont(expressionNoComma); }
    }
    function vardefCont(type) {
      if (type == ",") { return cont(vardef); }
    }
    function maybeelse(type, value) {
      if (type == "keyword b" && value == "else") { return cont(pushlex("form", "else"), statement, poplex); }
    }
    function forspec(type, value) {
      if (value == "await") { return cont(forspec); }
      if (type == "(") { return cont(pushlex(")"), forspec1, poplex); }
    }
    function forspec1(type) {
      if (type == "var") { return cont(vardef, forspec2); }
      if (type == "variable") { return cont(forspec2); }
      return pass(forspec2)
    }
    function forspec2(type, value) {
      if (type == ")") { return cont() }
      if (type == ";") { return cont(forspec2) }
      if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression, forspec2) }
      return pass(expression, forspec2)
    }
    function functiondef(type, value) {
      if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
      if (type == "variable") {register(value); return cont(functiondef);}
      if (type == "(") { return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, statement, popcontext); }
      if (isTS && value == "<") { return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondef) }
    }
    function functiondecl(type, value) {
      if (value == "*") {cx.marked = "keyword"; return cont(functiondecl);}
      if (type == "variable") {register(value); return cont(functiondecl);}
      if (type == "(") { return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, popcontext); }
      if (isTS && value == "<") { return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondecl) }
    }
    function typename(type, value) {
      if (type == "keyword" || type == "variable") {
        cx.marked = "type";
        return cont(typename)
      } else if (value == "<") {
        return cont(pushlex(">"), commasep(typeparam, ">"), poplex)
      }
    }
    function funarg(type, value) {
      if (value == "@") { cont(expression, funarg); }
      if (type == "spread") { return cont(funarg); }
      if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(funarg); }
      if (isTS && type == "this") { return cont(maybetype, maybeAssign) }
      return pass(pattern, maybetype, maybeAssign);
    }
    function classExpression(type, value) {
      // Class expressions may have an optional name.
      if (type == "variable") { return className(type, value); }
      return classNameAfter(type, value);
    }
    function className(type, value) {
      if (type == "variable") {register(value); return cont(classNameAfter);}
    }
    function classNameAfter(type, value) {
      if (value == "<") { return cont(pushlex(">"), commasep(typeparam, ">"), poplex, classNameAfter) }
      if (value == "extends" || value == "implements" || (isTS && type == ",")) {
        if (value == "implements") { cx.marked = "keyword"; }
        return cont(isTS ? typeexpr : expression, classNameAfter);
      }
      if (type == "{") { return cont(pushlex("}"), classBody, poplex); }
    }
    function classBody(type, value) {
      if (type == "async" ||
          (type == "variable" &&
           (value == "static" || value == "get" || value == "set" || (isTS && isModifier(value))) &&
           cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false))) {
        cx.marked = "keyword";
        return cont(classBody);
      }
      if (type == "variable" || cx.style == "keyword") {
        cx.marked = "property";
        return cont(classfield, classBody);
      }
      if (type == "number" || type == "string") { return cont(classfield, classBody); }
      if (type == "[")
        { return cont(expression, maybetype, expect("]"), classfield, classBody) }
      if (value == "*") {
        cx.marked = "keyword";
        return cont(classBody);
      }
      if (isTS && type == "(") { return pass(functiondecl, classBody) }
      if (type == ";" || type == ",") { return cont(classBody); }
      if (type == "}") { return cont(); }
      if (value == "@") { return cont(expression, classBody) }
    }
    function classfield(type, value) {
      if (value == "?") { return cont(classfield) }
      if (type == ":") { return cont(typeexpr, maybeAssign) }
      if (value == "=") { return cont(expressionNoComma) }
      var context = cx.state.lexical.prev, isInterface = context && context.info == "interface";
      return pass(isInterface ? functiondecl : functiondef)
    }
    function afterExport(type, value) {
      if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
      if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
      if (type == "{") { return cont(commasep(exportField, "}"), maybeFrom, expect(";")); }
      return pass(statement);
    }
    function exportField(type, value) {
      if (value == "as") { cx.marked = "keyword"; return cont(expect("variable")); }
      if (type == "variable") { return pass(expressionNoComma, exportField); }
    }
    function afterImport(type) {
      if (type == "string") { return cont(); }
      if (type == "(") { return pass(expression); }
      if (type == ".") { return pass(maybeoperatorComma); }
      return pass(importSpec, maybeMoreImports, maybeFrom);
    }
    function importSpec(type, value) {
      if (type == "{") { return contCommasep(importSpec, "}"); }
      if (type == "variable") { register(value); }
      if (value == "*") { cx.marked = "keyword"; }
      return cont(maybeAs);
    }
    function maybeMoreImports(type) {
      if (type == ",") { return cont(importSpec, maybeMoreImports) }
    }
    function maybeAs(_type, value) {
      if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
    }
    function maybeFrom(_type, value) {
      if (value == "from") { cx.marked = "keyword"; return cont(expression); }
    }
    function arrayLiteral(type) {
      if (type == "]") { return cont(); }
      return pass(commasep(expressionNoComma, "]"));
    }
    function enumdef() {
      return pass(pushlex("form"), pattern, expect("{"), pushlex("}"), commasep(enummember, "}"), poplex, poplex)
    }
    function enummember() {
      return pass(pattern, maybeAssign);
    }

    function isContinuedStatement(state, textAfter) {
      return state.lastType == "operator" || state.lastType == "," ||
        isOperatorChar.test(textAfter.charAt(0)) ||
        /[,.]/.test(textAfter.charAt(0));
    }

    function expressionAllowed(stream, state, backUp) {
      return state.tokenize == tokenBase &&
        /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
        (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
    }

    // Interface

    return {
      startState: function(basecolumn) {
        var state = {
          tokenize: tokenBase,
          lastType: "sof",
          cc: [],
          lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
          localVars: parserConfig.localVars,
          context: parserConfig.localVars && new Context(null, null, false),
          indented: basecolumn || 0
        };
        if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
          { state.globalVars = parserConfig.globalVars; }
        return state;
      },

      token: function(stream, state) {
        if (stream.sol()) {
          if (!state.lexical.hasOwnProperty("align"))
            { state.lexical.align = false; }
          state.indented = stream.indentation();
          findFatArrow(stream, state);
        }
        if (state.tokenize != tokenComment && stream.eatSpace()) { return null; }
        var style = state.tokenize(stream, state);
        if (type == "comment") { return style; }
        state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
        return parseJS(state, style, type, content, stream);
      },

      indent: function(state, textAfter) {
        if (state.tokenize == tokenComment || state.tokenize == tokenQuasi) { return CodeMirror.Pass; }
        if (state.tokenize != tokenBase) { return 0; }
        var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top;
        // Kludge to prevent 'maybelse' from blocking lexical scope pops
        if (!/^\s*else\b/.test(textAfter)) { for (var i = state.cc.length - 1; i >= 0; --i) {
          var c = state.cc[i];
          if (c == poplex) { lexical = lexical.prev; }
          else if (c != maybeelse) { break; }
        } }
        while ((lexical.type == "stat" || lexical.type == "form") &&
               (firstChar == "}" || ((top = state.cc[state.cc.length - 1]) &&
                                     (top == maybeoperatorComma || top == maybeoperatorNoComma) &&
                                     !/^[,\.=+\-*:?[\(]/.test(textAfter))))
          { lexical = lexical.prev; }
        if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
          { lexical = lexical.prev; }
        var type = lexical.type, closing = firstChar == type;

        if (type == "vardef") { return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info.length + 1 : 0); }
        else if (type == "form" && firstChar == "{") { return lexical.indented; }
        else if (type == "form") { return lexical.indented + indentUnit; }
        else if (type == "stat")
          { return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0); }
        else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
          { return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit); }
        else if (lexical.align) { return lexical.column + (closing ? 0 : 1); }
        else { return lexical.indented + (closing ? 0 : indentUnit); }
      },

      electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
      blockCommentStart: jsonMode ? null : "/*",
      blockCommentEnd: jsonMode ? null : "*/",
      blockCommentContinue: jsonMode ? null : " * ",
      lineComment: jsonMode ? null : "//",
      fold: "brace",
      closeBrackets: "()[]{}''\"\"``",

      helperType: jsonMode ? "json" : "javascript",
      jsonldMode: jsonldMode,
      jsonMode: jsonMode,

      expressionAllowed: expressionAllowed,

      skipExpression: function(state) {
        var top = state.cc[state.cc.length - 1];
        if (top == expression || top == expressionNoComma) { state.cc.pop(); }
      }
    };
  });

  CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

  CodeMirror.defineMIME("text/javascript", "javascript");
  CodeMirror.defineMIME("text/ecmascript", "javascript");
  CodeMirror.defineMIME("application/javascript", "javascript");
  CodeMirror.defineMIME("application/x-javascript", "javascript");
  CodeMirror.defineMIME("application/ecmascript", "javascript");
  CodeMirror.defineMIME("application/json", { name: "javascript", json: true });
  CodeMirror.defineMIME("application/x-json", { name: "javascript", json: true });
  CodeMirror.defineMIME("application/manifest+json", { name: "javascript", json: true });
  CodeMirror.defineMIME("application/ld+json", { name: "javascript", jsonld: true });
  CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
  CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

  });
  });

  //
  var script$5 = {
    name: 'Struct',
    props: {
      value: [Object, Array],
      title: {
        type: String,
        "default": '编辑数据'
      },
      defaultValue: {
        require: false
      },
      validate: Function
    },
    data: function data() {
      return {
        editor: null,
        visible: false,
        err: false,
        oldVal: null
      };
    },
    watch: {
      value: function value() {
        this.load();
      },
      visible: function visible(n) {
        if (n) {
          this.load();
        } else {
          this.err = false;
        }
      }
    },
    methods: {
      load: function load() {
        var _this = this;

        var val = toJSON(this.value ? deepParseFn(deepCopy(this.value)) : this.defaultValue);
        this.oldVal = val;
        this.$nextTick(function () {
          _this.editor = codemirror(_this.$refs.editor, {
            lineNumbers: true,
            mode: 'javascript',
            gutters: ['CodeMirror-lint-markers'],
            lint: true,
            line: true,
            tabSize: 2,
            lineWrapping: true,
            value: val || ''
          });
        });
      },
      onOk: function onOk() {
        if (this.err) { return; }
        var str = this.editor.getValue();
        var val;

        try {
          val = eval('(function (){return ' + str + '}())');
        } catch (e) {
          this.err = " (".concat(e, ")");
          return;
        }

        if (this.validate && false === this.validate(val)) {
          this.err = true;
          return;
        }

        this.visible = false;

        if (toJSON(val) !== this.oldVal) {
          this.$emit('input', val);
        }
      }
    }
  };

  var css_248z$5 = "._fc_struct .CodeMirror{height:450px}._fc_struct .CodeMirror-line{line-height:16px!important;font-size:13px!important}.CodeMirror-lint-tooltip{z-index:2021!important}._fc_struct .el-dialog__body{padding:0 20px}._fc_err{color:red;float:left;text-align:left;width:65%}";
  styleInject(css_248z$5);

  /* script */
  var __vue_script__$5 = script$5;
  /* template */

  var __vue_render__$4 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "_fc_struct"
    }, [_c("ElButton", {
      staticStyle: {
        width: "100%"
      },
      on: {
        click: function click($event) {
          _vm.visible = true;
        }
      }
    }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("ElDialog", {
      attrs: {
        title: _vm.title,
        visible: _vm.visible,
        "close-on-click-modal": false,
        "append-to-body": ""
      },
      on: {
        "update:visible": function updateVisible($event) {
          _vm.visible = $event;
        }
      }
    }, [_vm.visible ? _c("div", {
      ref: "editor"
    }) : _vm._e(), _vm._v(" "), _c("span", {
      staticClass: "dialog-footer",
      attrs: {
        slot: "footer"
      },
      slot: "footer"
    }, [_vm.err ? _c("span", {
      staticClass: "_fc_err"
    }, [_vm._v("\n                输入内容格式有误" + _vm._s(_vm.err !== true ? _vm.err : ""))]) : _vm._e(), _vm._v(" "), _c("ElButton", {
      attrs: {
        size: "small"
      },
      on: {
        click: function click($event) {
          _vm.visible = false;
        }
      }
    }, [_vm._v("取 消")]), _vm._v(" "), _c("ElButton", {
      attrs: {
        type: "primary",
        size: "small"
      },
      on: {
        click: _vm.onOk
      }
    }, [_vm._v("确 定")])], 1)])], 1);
  };

  var __vue_staticRenderFns__$4 = [];
  __vue_render__$4._withStripped = true;
  /* style */

  var __vue_inject_styles__$5 = undefined;
  /* scoped */

  var __vue_scope_id__$5 = undefined;
  /* module identifier */

  var __vue_module_identifier__$5 = undefined;
  /* functional template */

  var __vue_is_functional_template__$5 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$5 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$4,
    staticRenderFns: __vue_staticRenderFns__$4
  }, __vue_inject_styles__$5, __vue_script__$5, __vue_scope_id__$5, __vue_is_functional_template__$5, __vue_module_identifier__$5, false, undefined, undefined, undefined);

  function debounce(fn, wait) {
      var timeout = null;
      return function () {
          var this$1 = this;
          var arg = [], len = arguments.length;
          while ( len-- ) arg[ len ] = arguments[ len ];

          if (timeout !== null)
              { clearTimeout(timeout); }
          timeout = setTimeout(function () { return fn.call.apply(fn, [ this$1 ].concat( arg )); }, wait);
      }
  }

  var script$4 = {
    name: 'Fetch',
    props: {
      value: [Object, String],
      to: String
    },
    computed: {
      formValue: function formValue() {
        var val = this.value;
        if (!val) { return {}; }

        if (is.String(val)) {
          return {
            action: val
          };
        }

        if (!val._parse && val.parse) {
          return _objectSpread2(_objectSpread2({}, val), {}, {
            _parse: '' + val.parse
          });
        } else if (is.Function(val._parse)) {
          return _objectSpread2(_objectSpread2({}, val), {}, {
            _parse: '' + val._parse
          });
        }

        return val;
      }
    },
    data: function data() {
      var _this = this;

      return {
        FormCreate: designerForm.$form(),
        api: {},
        fetch: {},
        option: {
          form: {
            labelPosition: 'right',
            size: 'mini',
            labelWidth: '90px'
          },
          submitBtn: false
        },
        rule: [{
          type: 'input',
          field: 'action',
          title: '接口: ',
          validate: [{
            required: true,
            message: '请数据接口'
          }]
        }, {
          type: 'select',
          field: 'method',
          title: '请求方式: ',
          value: 'GET',
          options: [{
            label: 'GET',
            value: 'GET'
          }, {
            label: 'POST',
            value: 'POST'
          }],
          control: [{
            value: 'POST',
            rule: [{
              type: 'select',
              field: 'dataType',
              title: '提交方式: ',
              value: 'FormData',
              options: [{
                label: 'FormData',
                value: 'FormData'
              }, {
                label: 'JSON',
                value: 'JSON'
              }]
            }]
          }]
        }, {
          type: 'Struct',
          field: 'data',
          title: '附带数据: ',
          value: {},
          props: {
            defaultValue: {}
          }
        }, {
          type: 'Struct',
          field: 'headers',
          title: 'header信息: ',
          value: {},
          props: {
            defaultValue: {}
          }
        }, {
          type: 'input',
          field: '_parse',
          title: '解析函数',
          info: '解析接口数据，返回组件所需的数据结构',
          value: 'function (res){\n   return res.data;\n}',
          props: {
            type: 'textarea',
            rows: 8
          },
          validate: [{
            validator: function validator(_, v, cb) {
              if (!v) { return cb(); }

              try {
                _this.parseFn(v);
              } catch (e) {
                return cb(false);
              }

              cb();
            },
            message: '请输入正确的解析函数'
          }]
        }]
      };
    },
    methods: {
      parseFn: function parseFn(v) {
        return eval("(function(){return ".concat(v, " })()"));
      },
      _input: function _input() {
        var _this2 = this;

        this.api.submit(function (formData) {
          formData.to = _this2.to || 'options';
          if (formData._parse) { formData.parse = _this2.parseFn(formData._parse); }

          _this2.$emit('input', formData);
        });
      },
      input: debounce(function () {
        this._input();
      }, 1000)
    },
    mounted: function mounted() {
      this._input();
    }
  };

  var css_248z$4 = "._fc_fetch .el-form-item__label{float:left;display:inline-block;text-align:right;padding-right:5px}._fc_fetch{background-color:#bfdaf7;padding:10px}";
  styleInject(css_248z$4);

  /* script */
  var __vue_script__$4 = script$4;
  /* template */

  var __vue_render__$3 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "_fc_fetch"
    }, [_c(_vm.FormCreate, {
      tag: "component",
      attrs: {
        value: _vm.formValue,
        rule: _vm.rule,
        option: _vm.option
      },
      on: {
        change: _vm.input
      },
      model: {
        value: _vm.api,
        callback: function callback($$v) {
          _vm.api = $$v;
        },
        expression: "api"
      }
    })], 1);
  };

  var __vue_staticRenderFns__$3 = [];
  __vue_render__$3._withStripped = true;
  /* style */

  var __vue_inject_styles__$4 = undefined;
  /* scoped */

  var __vue_scope_id__$4 = undefined;
  /* module identifier */

  var __vue_module_identifier__$4 = undefined;
  /* functional template */

  var __vue_is_functional_template__$4 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$4 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$3,
    staticRenderFns: __vue_staticRenderFns__$3
  }, __vue_inject_styles__$4, __vue_script__$4, __vue_scope_id__$4, __vue_is_functional_template__$4, __vue_module_identifier__$4, false, undefined, undefined, undefined);

  var script$3 = {
    name: 'Validate',
    inject: ['designer'],
    props: {
      value: Array
    },
    watch: {
      value: function value(n) {
        this.formValue = this.parseValue(n);
      }
    },
    data: function data() {
      var _this = this;

      return {
        FormCreate: designerForm.$form(),
        formValue: {},
        option: {
          form: {
            labelPosition: 'top',
            size: 'mini',
            labelWidth: '90px'
          },
          submitBtn: false,
          formData: this.parseValue(this.value)
        },
        rule: [{
          type: 'select',
          field: 'type',
          value: undefined,
          title: '字段类型',
          options: [{
            value: undefined,
            label: '请选择'
          }, {
            value: 'string',
            label: 'String'
          }, {
            value: 'array',
            label: 'Array'
          }, {
            value: 'number',
            label: 'Number'
          }, {
            value: 'integer',
            label: 'Integer'
          }, {
            value: 'float',
            label: 'Float'
          }, {
            value: 'object',
            label: 'Object'
          }, {
            value: 'date',
            label: 'Date'
          }, {
            value: 'url',
            label: 'url'
          }, {
            value: 'hex',
            label: 'hex'
          }, {
            value: 'email',
            label: 'email'
          }],
          control: [{
            handle: function handle(v) {
              return !!v;
            },
            rule: [{
              type: 'group',
              field: 'validate',
              props: {
                expand: 1,
                rules: [{
                  type: 'select',
                  title: '触发方式',
                  field: 'trigger',
                  value: 'change',
                  options: [{
                    label: 'change',
                    value: 'change'
                  }, {
                    label: 'submit',
                    value: 'submit'
                  }, {
                    label: 'blur',
                    value: 'blur'
                  }]
                }, {
                  type: 'select',
                  title: '验证方式',
                  field: 'mode',
                  options: [{
                    value: 'required',
                    label: '必填'
                  }, {
                    value: 'pattern',
                    label: '正则表达式'
                  }, {
                    value: 'min',
                    label: '最小值'
                  }, {
                    value: 'max',
                    label: '最大值'
                  }, {
                    value: 'len',
                    label: '长度'
                  }],
                  value: 'required',
                  control: [{
                    value: 'required',
                    rule: [{
                      type: 'hidden',
                      field: 'required',
                      value: true
                    }]
                  }, {
                    value: 'pattern',
                    rule: [{
                      type: 'input',
                      field: 'pattern',
                      title: '正则表达式'
                    }]
                  }, {
                    value: 'min',
                    rule: [{
                      type: 'inputNumber',
                      field: 'min',
                      title: '最小值'
                    }]
                  }, {
                    value: 'max',
                    rule: [{
                      type: 'inputNumber',
                      field: 'max',
                      title: '最大值'
                    }]
                  }, {
                    value: 'len',
                    rule: [{
                      type: 'inputNumber',
                      field: 'len',
                      title: '长度'
                    }]
                  }]
                }, {
                  type: 'input',
                  title: '错误信息',
                  field: 'message',
                  value: '',
                  children: [{
                    type: 'span',
                    slot: 'append',
                    inject: true,
                    "class": 'append-msg',
                    on: {
                      click: function click(inject) {
                        if (_this.designer.activeRule) {
                          var msg = '请输入';

                          if (inject.api.form.mode !== 'required') {
                            msg += '正确的';
                          }

                          msg += _this.designer.activeRule.title;
                          inject.api.setValue('message', msg);
                        }
                      }
                    },
                    children: ['自动获取']
                  }]
                }]
              },
              value: []
            }]
          }]
        }]
      };
    },
    methods: {
      onInput: function onInput(formData) {
        var val = [];
        var validate = formData.validate,
            type = formData.type;

        if (type && !validate.length) {
          return;
        } else if (type) {
          validate.forEach(function (v) {
            v.type = type;
          });
          val = _toConsumableArray$1(validate);
        }

        this.$emit('input', val);
      },
      parseValue: function parseValue(n) {
        var val = {
          validate: n ? _toConsumableArray$1(n) : [],
          type: n.length ? n[0].type : undefined
        };
        val.validate.forEach(function (v) {
          if (!v.mode) {
            Object.keys(v).forEach(function (k) {
              if (['message', 'type', 'trigger', 'mode'].indexOf(k) < 0) {
                v.mode = k;
              }
            });
          }
        });
        return val;
      }
    }
  };

  var css_248z$3 = "._fc-validate .append-msg{cursor:pointer}._fc-validate .el-input-group__append{padding:0 10px}";
  styleInject(css_248z$3);

  /* script */
  var __vue_script__$3 = script$3;
  /* template */

  var __vue_render__$2 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(_vm.FormCreate, {
      tag: "component",
      staticClass: "_fc-validate",
      attrs: {
        rule: _vm.rule,
        option: _vm.option,
        value: _vm.formValue
      },
      on: {
        "update:value": _vm.onInput
      }
    });
  };

  var __vue_staticRenderFns__$2 = [];
  __vue_render__$2._withStripped = true;
  /* style */

  var __vue_inject_styles__$3 = undefined;
  /* scoped */

  var __vue_scope_id__$3 = undefined;
  /* module identifier */

  var __vue_module_identifier__$3 = undefined;
  /* functional template */

  var __vue_is_functional_template__$3 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$3 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$2,
    staticRenderFns: __vue_staticRenderFns__$2
  }, __vue_inject_styles__$3, __vue_script__$3, __vue_scope_id__$3, __vue_is_functional_template__$3, __vue_module_identifier__$3, false, undefined, undefined, undefined);

  var script$2 = {
    name: 'DragBox',
    props: ['rule', 'subRule', 'tag'],
    components: {
      draggable: draggable
    },
    functional: true,
    render: function render(h, context) {
      var subRule = context.props.rule || {};

      var _class = context.props.tag + '-drag drag-box';

      if (!context.children.length) {
        _class += ' ' + context.props.tag + '-holder';
      }

      subRule["class"] = _class;
      return h('draggable', _objectSpread2(_objectSpread2({}, context.props.rule), {}, {
        on: context.listeners
      }), context.children);
    }
  };

  /* script */
  var __vue_script__$2 = script$2;
  /* template */

  /* style */

  var __vue_inject_styles__$2 = undefined;
  /* scoped */

  var __vue_scope_id__$2 = undefined;
  /* module identifier */

  var __vue_module_identifier__$2 = undefined;
  /* functional template */

  var __vue_is_functional_template__$2 = undefined;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$2 = /*#__PURE__*/normalizeComponent({}, __vue_inject_styles__$2, __vue_script__$2, __vue_scope_id__$2, __vue_is_functional_template__$2, __vue_module_identifier__$2, false, undefined, undefined, undefined);

  //
  var script$1 = {
    name: 'Required',
    props: {
      value: {}
    },
    watch: {
      required: function required() {
        this.update();
      },
      requiredMsg: function requiredMsg() {
        this.update();
      },
      value: function value(n) {
        var flag = is.String(n);
        this.required = n === undefined ? false : flag ? true : !!n;
        this.requiredMsg = flag ? n : '';
      }
    },
    data: function data() {
      var flag = is.String(this.value);
      return {
        required: this.value === undefined ? false : flag ? true : !!this.value,
        requiredMsg: flag ? this.value : ''
      };
    },
    methods: {
      update: function update() {
        var val;

        if (this.required === false) {
          val = false;
        } else {
          val = this.requiredMsg;
        }

        this.$emit('input', val);
      }
    }
  };

  var css_248z$2 = "._fc-required{display:flex;align-items:center}._fc-required .el-input{margin-left:15px}._fc-required .el-switch{height:28px}";
  styleInject(css_248z$2);

  /* script */
  var __vue_script__$1 = script$1;
  /* template */

  var __vue_render__$1 = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "_fc-required"
    }, [_c("ElSwitch", {
      model: {
        value: _vm.required,
        callback: function callback($$v) {
          _vm.required = $$v;
        },
        expression: "required"
      }
    }), _vm._v(" "), _vm.required ? _c("ElInput", {
      attrs: {
        placeholder: "请输入提示语"
      },
      model: {
        value: _vm.requiredMsg,
        callback: function callback($$v) {
          _vm.requiredMsg = $$v;
        },
        expression: "requiredMsg"
      }
    }) : _vm._e()], 1);
  };

  var __vue_staticRenderFns__$1 = [];
  __vue_render__$1._withStripped = true;
  /* style */

  var __vue_inject_styles__$1 = undefined;
  /* scoped */

  var __vue_scope_id__$1 = undefined;
  /* module identifier */

  var __vue_module_identifier__$1 = undefined;
  /* functional template */

  var __vue_is_functional_template__$1 = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__$1 = /*#__PURE__*/normalizeComponent({
    render: __vue_render__$1,
    staticRenderFns: __vue_staticRenderFns__$1
  }, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, undefined, undefined, undefined);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script = {
    name: 'TableOptions',
    props: {
      value: [Object, Array, String]
    },
    data: function data() {
      return {
        column: [{
          label: 'label',
          key: 'label'
        }, {
          label: 'value',
          key: 'value'
        }]
      };
    },
    created: function created() {
      if (!Array.isArray(this.value)) {
        this.$emit('input', []);
      }
    },
    methods: {
      onInput: function onInput(item) {
        if (item.label && item.value) {
          this.input();
        }
      },
      input: function input() {
        this.$emit('input', this.value);
      },
      add: function add() {
        this.value.push(this.column.reduce(function (initial, v) {
          initial[v.key] = '';
          return initial;
        }, {}));
      },
      del: function del(idx) {
        this.value.splice(idx, 1);
        this.input(this.value);
      }
    }
  };

  var css_248z$1 = "";
  styleInject(css_248z$1);

  /* script */
  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", [_c("el-table", {
      staticStyle: {
        width: "100%"
      },
      attrs: {
        data: _vm.value,
        border: "",
        size: "mini"
      }
    }, [_vm._l(_vm.column, function (col, idx) {
      return [_c("el-table-column", {
        key: col.label + idx,
        attrs: {
          label: col.label
        },
        scopedSlots: _vm._u([{
          key: "default",
          fn: function fn(scope) {
            return [_c("el-input", {
              attrs: {
                size: "mini",
                value: scope.row[col.key] || ""
              },
              on: {
                input: function input(n) {
                  return scope.row[col.key] = n, _vm.onInput(scope.row);
                }
              }
            })];
          }
        }], null, true)
      })];
    }), _vm._v(" "), _c("el-table-column", {
      attrs: {
        "min-width": "35",
        align: "center",
        fixed: "right",
        label: "操作"
      },
      scopedSlots: _vm._u([{
        key: "default",
        fn: function fn(scope) {
          return [_c("i", {
            staticClass: "el-icon-delete",
            on: {
              click: function click($event) {
                return _vm.del(scope.$index);
              }
            }
          })];
        }
      }])
    })], 2), _vm._v(" "), _c("el-button", {
      attrs: {
        type: "text",
        icon: "el-icon-plus"
      },
      on: {
        click: _vm.add
      }
    }, [_vm._v("添加")])], 1);
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;
  /* style */

  var __vue_inject_styles__ = undefined;
  /* scoped */

  var __vue_scope_id__ = "data-v-55cf983e";
  /* module identifier */

  var __vue_module_identifier__ = undefined;
  /* functional template */

  var __vue_is_functional_template__ = false;
  /* style inject */

  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = /*#__PURE__*/normalizeComponent({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

  /*!
   * @form-create/component-wangeditor v2.5.15
   * (c) 2018-2021 xaboy
   * Github https://github.com/xaboy/form-create with @form-create/component-wangeditor
   * Released under the MIT License.
   */

  var dist = createCommonjsModule(function (module, exports) {
  !function(e,t){module.exports=t();}(commonjsGlobal,function(){var e,t,n=(function(e,t){var n;n=function(){return function(e){var t={};function n(o){if(t[o]){ return t[o].exports; }var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t){ return e; }if(4&t&&"object"==typeof e&&e&&e.__esModule){ return e; }var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e){ for(var r in e){ n.d(o,r,function(t){return e[t]}.bind(null,r)); } }return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=135)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0;},function(e,t,n){e.exports=n(136);},function(e,t,n){n.r(t),n.d(t,"__extends",function(){return r}),n.d(t,"__assign",function(){return i}),n.d(t,"__rest",function(){return a}),n.d(t,"__decorate",function(){return l}),n.d(t,"__param",function(){return u}),n.d(t,"__metadata",function(){return c}),n.d(t,"__awaiter",function(){return s}),n.d(t,"__generator",function(){return f}),n.d(t,"__createBinding",function(){return d}),n.d(t,"__exportStar",function(){return p}),n.d(t,"__values",function(){return v}),n.d(t,"__read",function(){return h}),n.d(t,"__spread",function(){return A}),n.d(t,"__spreadArrays",function(){return m}),n.d(t,"__spreadArray",function(){return g}),n.d(t,"__await",function(){return y}),n.d(t,"__asyncGenerator",function(){return w}),n.d(t,"__asyncDelegator",function(){return x}),n.d(t,"__asyncValues",function(){return _}),n.d(t,"__makeTemplateObject",function(){return E}),n.d(t,"__importStar",function(){return C}),n.d(t,"__importDefault",function(){return S}),n.d(t,"__classPrivateFieldGet",function(){return D}),n.d(t,"__classPrivateFieldSet",function(){return N});var o=function(e,t){return (o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t;}||function(e,t){for(var n in t){ Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]); }})(e,t)};function r(e,t){if("function"!=typeof t&&null!==t){ throw new TypeError("Class extends value "+String(t)+" is not a constructor or null"); }function n(){this.constructor=e;}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n);}var i=function(){return (i=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++){ for(var r in t=arguments[n]){ Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]); } }return e}).apply(this,arguments)};function a(e,t){var n={};for(var o in e){ Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]); }if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++){ t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]); }}return n}function l(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate){ a=Reflect.decorate(e,t,n,o); }else { for(var l=e.length-1;l>=0;l--){ (r=e[l])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a); } }return i>3&&a&&Object.defineProperty(t,n,a),a}function u(e,t){return function(n,o){t(n,o,e);}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata){ return Reflect.metadata(e,t) }}function s(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{u(o.next(e));}catch(e$1){i(e$1);}}function l(e){try{u(o.throw(e));}catch(e$1){i(e$1);}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t);})).then(a,l);}u((o=o.apply(e,t||[])).next());})}function f(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0]){ throw r[1]; }return r[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(n){ throw new TypeError("Generator is already executing."); }for(;a;){ try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done){ return r; }switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a);}catch(e$1){i=[6,e$1],o=0;}finally{n=r=0;} }if(5&i[0]){ throw i[1]; }return {value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}var d=Object.create?function(e,t,n,o){void 0===o&&(o=n),Object.defineProperty(e,o,{enumerable:!0,get:function(){return t[n]}});}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n];};function p(e,t){for(var n in e){ "default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n); }}function v(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],o=0;if(n){ return n.call(e); }if(e&&"number"==typeof e.length){ return {next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}}; }throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function h(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n){ return e; }var o,r,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(o=i.next()).done;){ a.push(o.value); }}catch(e$1){r={error:e$1};}finally{try{o&&!o.done&&(n=i.return)&&n.call(i);}finally{if(r){ throw r.error }}}return a}function A(){
  var arguments$1 = arguments;
  for(var e=[],t=0;t<arguments.length;t++){ e=e.concat(h(arguments$1[t])); }return e}function m(){
  var arguments$1 = arguments;
  for(var e=0,t=0,n=arguments.length;t<n;t++){ e+=arguments$1[t].length; }var o=Array(e),r=0;for(t=0;t<n;t++){ for(var i=arguments[t],a=0,l=i.length;a<l;a++,r++){ o[r]=i[a]; } }return o}function g(e,t){for(var n=0,o=t.length,r=e.length;n<o;n++,r++){ e[r]=t[n]; }return e}function y(e){return this instanceof y?(this.v=e,this):new y(e)}function w(e,t,n){if(!Symbol.asyncIterator){ throw new TypeError("Symbol.asyncIterator is not defined."); }var o,r=n.apply(e,t||[]),i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(e){r[e]&&(o[e]=function(t){return new Promise(function(n,o){i.push([e,t,n,o])>1||l(e,t);})});}function l(e,t){try{(n=r[e](t)).value instanceof y?Promise.resolve(n.value.v).then(u,c):s(i[0][2],n);}catch(e$1){s(i[0][3],e$1);}var n;}function u(e){l("next",e);}function c(e){l("throw",e);}function s(e,t){e(t),i.shift(),i.length&&l(i[0][0],i[0][1]);}}function x(e){var t,n;return t={},o("next"),o("throw",function(e){throw e}),o("return"),t[Symbol.iterator]=function(){return this},t;function o(o,r){t[o]=e[o]?function(t){return (n=!n)?{value:y(e[o](t)),done:"return"===o}:r?r(t):t}:r;}}function _(e){if(!Symbol.asyncIterator){ throw new TypeError("Symbol.asyncIterator is not defined."); }var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=v(e),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(n){t[n]=e[n]&&function(t){return new Promise(function(o,r){(function(e,t,n,o){Promise.resolve(o).then(function(t){e({value:t,done:n});},t);})(o,r,(t=e[n](t)).done,t.value);})};}}function E(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var b=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t});}:function(e,t){e.default=t;};function C(e){if(e&&e.__esModule){ return e; }var t={};if(null!=e){ for(var n in e){ "default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n); } }return b(t,e),t}function S(e){return e&&e.__esModule?e:{default:e}}function D(e,t){if(!t.has(e)){ throw new TypeError("attempted to get private field on non-instance"); }return t.get(e)}function N(e,t,n){if(!t.has(e)){ throw new TypeError("attempted to set private field on non-instance"); }return t.set(e,n),n}},function(e,t,n){var o=n(0),r=o(n(1)),i=o(n(90)),a=o(n(4)),l=o(n(25)),u=o(n(19)),c=o(n(116)),s=o(n(26)),f=o(n(92)),d=o(n(72)),p=o(n(73)),v=o(n(53));(0, r.default)(t,"__esModule",{value:!0}),t.DomElement=void 0;var h=n(2),A=n(6),m=[];function g(e){var t=[],n=[];return t=(0, i.default)(e)?e:e.split(";"),(0, a.default)(t).call(t,function(e){var t,o=(0, l.default)(t=e.split(":")).call(t,function(e){return (0, u.default)(e).call(e)});2===o.length&&n.push(o[0]+":"+o[1]);}),n}var y=function(){function e(t){if(this.elems=[],this.length=this.elems.length,this.dataSource=new c.default,t){if(t instanceof e){ return t; }var n=[],o=t instanceof Node?t.nodeType:-1;if(this.selector=t,1===o||9===o){ n=[t]; }else if(function(e){return !!e&&(e instanceof HTMLCollection||e instanceof NodeList)}(t)){ n=A.toArray(t); }else if(t instanceof Array){ n=t; }else if("string"==typeof t){var r,i=(0, u.default)(r=t.replace("/\n/mg","")).call(r);n=0===(0, s.default)(i).call(i,"<")?function(e){var t=document.createElement("div");t.innerHTML=e;var n=t.children;return A.toArray(n)}(i):function(e){var t=document.querySelectorAll(e);return A.toArray(t)}(i);}var a=n.length;if(!a){ return this; }for(var l=0;l<a;l++){ this.elems.push(n[l]); }this.length=a;}}return (0, r.default)(e.prototype,"id",{get:function(){return this.elems[0].id},enumerable:!1,configurable:!0}),e.prototype.forEach=function(e){for(var t=0;t<this.length;t++){var n=this.elems[t];if(!1===e.call(n,n,t)){ break }}return this},e.prototype.clone=function(e){var t;void 0===e&&(e=!1);var n=[];return (0, a.default)(t=this.elems).call(t,function(t){n.push(t.cloneNode(!!e));}),w(n)},e.prototype.get=function(e){void 0===e&&(e=0);var t=this.length;return e>=t&&(e%=t),w(this.elems[e])},e.prototype.first=function(){return this.get(0)},e.prototype.last=function(){var e=this.length;return this.get(e-1)},e.prototype.on=function(e,t,n){var o;return e?("function"==typeof t&&(n=t,t=""),(0, a.default)(o=this).call(o,function(o){if(t){var r=function(e){var o=e.target;o.matches(t)&&n.call(o,e);};o.addEventListener(e,r),m.push({elem:o,selector:t,fn:n,agentFn:r});}else { o.addEventListener(e,n); }})):this},e.prototype.off=function(e,t,n){var o;return e?("function"==typeof t&&(n=t,t=""),(0, a.default)(o=this).call(o,function(o){if(t){for(var r=-1,i=0;i<m.length;i++){var a=m[i];if(a.selector===t&&a.fn===n&&a.elem===o){r=i;break}}if(-1!==r){var l=(0, f.default)(m).call(m,r,1)[0].agentFn;o.removeEventListener(e,l);}}else { o.removeEventListener(e,n); }})):this},e.prototype.attr=function(e,t){var n;return null==t?this.elems[0].getAttribute(e)||"":(0, a.default)(n=this).call(n,function(n){n.setAttribute(e,t);})},e.prototype.removeAttr=function(e){var t;(0, a.default)(t=this).call(t,function(t){t.removeAttribute(e);});},e.prototype.addClass=function(e){var t;return e?(0, a.default)(t=this).call(t,function(t){if(t.className){var n=t.className.split(/\s/);n=(0, d.default)(n).call(n,function(e){return !!(0, u.default)(e).call(e)}),(0, s.default)(n).call(n,e)<0&&n.push(e),t.className=n.join(" ");}else { t.className=e; }}):this},e.prototype.removeClass=function(e){var t;return e?(0, a.default)(t=this).call(t,function(t){if(t.className){var n=t.className.split(/\s/);n=(0, d.default)(n).call(n,function(t){return !(!(t=(0, u.default)(t).call(t))||t===e)}),t.className=n.join(" ");}}):this},e.prototype.hasClass=function(e){if(!e){ return !1; }var t=this.elems[0];if(!t.className){ return !1; }var n=t.className.split(/\s/);return (0, p.default)(n).call(n,e)},e.prototype.css=function(e,t){var n,o;return o=""==t?"":e+":"+t+";",(0, a.default)(n=this).call(n,function(t){var n,r=(0, u.default)(n=t.getAttribute("style")||"").call(n);if(r){var i=g(r);i=(0, l.default)(i).call(i,function(t){return 0===(0, s.default)(t).call(t,e)?o:t}),""!=o&&(0, s.default)(i).call(i,o)<0&&i.push(o),""==o&&(i=g(i)),t.setAttribute("style",i.join("; "));}else { t.setAttribute("style",o); }})},e.prototype.getBoundingClientRect=function(){return this.elems[0].getBoundingClientRect()},e.prototype.show=function(){return this.css("display","block")},e.prototype.hide=function(){return this.css("display","none")},e.prototype.children=function(){var e=this.elems[0];return e?w(e.children):null},e.prototype.childNodes=function(){var e=this.elems[0];return e?w(e.childNodes):null},e.prototype.replaceChildAll=function(e){for(var t=this.getNode(),n=this.elems[0];n.hasChildNodes();){ t.firstChild&&n.removeChild(t.firstChild); }this.append(e);},e.prototype.append=function(e){var t;return (0, a.default)(t=this).call(t,function(t){(0, a.default)(e).call(e,function(e){t.appendChild(e);});})},e.prototype.remove=function(){var e;return (0, a.default)(e=this).call(e,function(e){if(e.remove){ e.remove(); }else {var t=e.parentElement;t&&t.removeChild(e);}})},e.prototype.isContain=function(e){var t=this.elems[0],n=e.elems[0];return t.contains(n)},e.prototype.getNodeName=function(){return this.elems[0].nodeName},e.prototype.getNode=function(e){return void 0===e&&(e=0),this.elems[e]},e.prototype.find=function(e){return w(this.elems[0].querySelectorAll(e))},e.prototype.text=function(e){var t;return e?(0, a.default)(t=this).call(t,function(t){t.innerHTML=e;}):this.elems[0].innerHTML.replace(/<[^>]+>/g,function(){return ""})},e.prototype.html=function(e){var t=this.elems[0];return e?(t.innerHTML=e,this):t.innerHTML},e.prototype.val=function(){var e,t=this.elems[0];return (0, u.default)(e=t.value).call(e)},e.prototype.focus=function(){var e;return (0, a.default)(e=this).call(e,function(e){e.focus();})},e.prototype.prev=function(){return w(this.elems[0].previousElementSibling)},e.prototype.next=function(){return w(this.elems[0].nextElementSibling)},e.prototype.getNextSibling=function(){return w(this.elems[0].nextSibling)},e.prototype.parent=function(){return w(this.elems[0].parentElement)},e.prototype.parentUntil=function(e,t){var n=t||this.elems[0];if("BODY"===n.nodeName){ return null; }var o=n.parentElement;return null===o?null:o.matches(e)?w(o):this.parentUntil(e,o)},e.prototype.parentUntilEditor=function(e,t,n){var o=n||this.elems[0];if(w(o).equal(t.$textContainerElem)||w(o).equal(t.$toolbarElem)){ return null; }var r=o.parentElement;return null===r?null:r.matches(e)?w(r):this.parentUntilEditor(e,t,r)},e.prototype.equal=function(t){return t instanceof e?this.elems[0]===t.elems[0]:t instanceof HTMLElement&&this.elems[0]===t},e.prototype.insertBefore=function(e){var t,n=w(e).elems[0];return n?(0, a.default)(t=this).call(t,function(e){n.parentNode.insertBefore(e,n);}):this},e.prototype.insertAfter=function(e){var t,n=w(e).elems[0],o=n&&n.nextSibling;return n?(0, a.default)(t=this).call(t,function(e){var t=n.parentNode;o?t.insertBefore(e,o):t.appendChild(e);}):this},e.prototype.data=function(e,t){if(null==t){ return this.dataSource.get(e); }this.dataSource.set(e,t);},e.prototype.getNodeTop=function(e){if(this.length<1){ return this; }var t=this.parent();return e.$textElem.equal(this)||e.$textElem.equal(t)?this:(t.prior=this,t.getNodeTop(e))},e.prototype.getOffsetData=function(){var e=this.elems[0];return {top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight,parent:e.offsetParent}},e.prototype.scrollTop=function(e){this.elems[0].scrollTo({top:e});},e}();function w(){
  var arguments$1 = arguments;
  for(var e=[],t=0;t<arguments.length;t++){ e[t]=arguments$1[t]; }return new((0, v.default)(y).apply(y,h.__spreadArray([void 0],e)))}t.DomElement=y,t.default=w;},function(e,t,n){e.exports=n(180);},function(e,t,n){var o=n(8),r=n(74).f,i=n(101),a=n(12),l=n(47),u=n(17),c=n(16),s=function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t.prototype=e.prototype,t};e.exports=function(e,t){var n,f,d,p,v,h,A,m,g=e.target,y=e.global,w=e.stat,x=e.proto,_=y?o:w?o[g]:(o[g]||{}).prototype,E=y?a:a[g]||(a[g]={}),b=E.prototype;for(d in t){ n=!i(y?d:g+(w?".":"#")+d,e.forced)&&_&&c(_,d),v=E[d],n&&(h=e.noTargetGet?(m=r(_,d))&&m.value:_[d]),p=n&&h?h:t[d],n&&typeof v==typeof p||(A=e.bind&&n?l(p,o):e.wrap&&n?s(p):x&&"function"==typeof p?l(Function.call,p):p,(e.sham||p&&p.sham||v&&v.sham)&&u(A,"sham",!0),E[d]=A,x&&(c(a,f=g+"Prototype")||u(a,f,{}),a[f][d]=p,e.real&&b&&!b[d]&&u(b,d,p))); }};},function(e,t,n){var o=n(0),r=o(n(94)),i=o(n(1)),a=o(n(257)),l=o(n(43)),u=o(n(54)),c=o(n(90)),s=o(n(25));(0, i.default)(t,"__esModule",{value:!0}),t.hexToRgb=t.getRandomCode=t.toArray=t.deepClone=t.isFunction=t.debounce=t.throttle=t.arrForEach=t.forEach=t.replaceSpecialSymbol=t.replaceHtmlSymbol=t.getRandom=t.UA=void 0;var f=n(2),d=function(){function e(){this._ua=navigator.userAgent;var e=this._ua.match(/(Edge?)\/(\d+)/);this.isOldEdge=!!(e&&"Edge"==e[1]&&(0, a.default)(e[2])<19),this.isFirefox=!(!/Firefox\/\d+/.test(this._ua)||/Seamonkey\/\d+/.test(this._ua));}return e.prototype.isIE=function(){return "ActiveXObject"in window},e.prototype.isWebkit=function(){return /webkit/i.test(this._ua)},e}();t.UA=new d,t.getRandom=function(e){var t;return void 0===e&&(e=""),e+(0, l.default)(t=Math.random().toString()).call(t,2)},t.replaceHtmlSymbol=function(e){return e.replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;").replace(/(\r\n|\r|\n)/g,"<br/>")},t.replaceSpecialSymbol=function(e){return e.replace(/&lt;/gm,"<").replace(/&gt;/gm,">").replace(/&quot;/gm,'"')},t.forEach=function(e,t){for(var n in e){ if(Object.prototype.hasOwnProperty.call(e,n)&&!1===t(n,e[n])){ break } }},t.arrForEach=function(e,t){var n,o,r=e.length||0;for(n=0;n<r&&(o=e[n],!1!==t.call(e,o,n));n++){ }},t.throttle=function(e,t){void 0===t&&(t=200);var n=!1;return function(){
  var arguments$1 = arguments;
  for(var o=this,r=[],i=0;i<arguments.length;i++){ r[i]=arguments$1[i]; }n||(n=!0,(0, u.default)(function(){n=!1,e.call.apply(e,f.__spreadArray([o],r));},t));}},t.debounce=function(e,t){void 0===t&&(t=200);var n=0;return function(){
  var arguments$1 = arguments;
  for(var o=this,r=[],i=0;i<arguments.length;i++){ r[i]=arguments$1[i]; }n&&window.clearTimeout(n),n=(0, u.default)(function(){n=0,e.call.apply(e,f.__spreadArray([o],r));},t);}},t.isFunction=function(e){return "function"==typeof e},t.deepClone=function e(t){if("object"!==(0, r.default)(t)||"function"==typeof t||null===t){ return t; }var n;for(var o in (0, c.default)(t)&&(n=[]),(0, c.default)(t)||(n={}),t){ Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=e(t[o])); }return n},t.toArray=function(e){return (0, l.default)(Array.prototype).call(e)},t.getRandomCode=function(){var e;return (0, l.default)(e=Math.random().toString(36)).call(e,-5)},t.hexToRgb=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(null==t){ return null; }var n=(0, s.default)(t).call(t,function(e){return (0, a.default)(e,16)});return "rgb("+n[1]+", "+n[2]+", "+n[3]+")"};},function(e,t,n){(0, n(0)(n(1)).default)(t,"__esModule",{value:!0}),t.EMPTY_P_REGEX=t.EMPTY_P_LAST_REGEX=t.EMPTY_P=t.urlRegex=t.EMPTY_FN=void 0,t.EMPTY_FN=function(){},t.urlRegex=/^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/,t.EMPTY_P='<p data-we-empty-p=""><br></p>',t.EMPTY_P_LAST_REGEX=/<p data-we-empty-p=""><br\/?><\/p>$/gim,t.EMPTY_P_REGEX=/<p data-we-empty-p="">/gim;},function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")();}).call(this,n(139));},function(e,t,n){var o=n(8),r=n(78),i=n(16),a=n(59),l=n(83),u=n(105),c=r("wks"),s=o.Symbol,f=u?s:s&&s.withoutSetter||a;e.exports=function(e){return i(c,e)&&(l||"string"==typeof c[e])||(l&&i(s,e)?c[e]=s[e]:c[e]=f("Symbol."+e)),c[e]};},function(e,t,n){var o=n(12),r=n(16),i=n(95),a=n(18).f;e.exports=function(e){var t=o.Symbol||(o.Symbol={});r(t,e)||a(t,e,{value:i.f(e)});};},function(e,t){e.exports=function(e){try{return !!e()}catch(e$1){return !0}};},function(e,t){e.exports={};},function(e,t){e.exports=function(e){return "object"==typeof e?null!==e:"function"==typeof e};},function(e,t,n){var o=n(12);e.exports=function(e){return o[e+"Prototype"]};},function(e,t,n){var o=n(11);e.exports=!o(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)};},function(e,t,n){var o=n(15),r=n(18),i=n(35);e.exports=o?function(e,t,n){return r.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e};},function(e,t,n){var o=n(15),r=n(100),i=n(24),a=n(57),l=Object.defineProperty;t.f=o?l:function(e,t,n){if(i(e),t=a(t,!0),i(n),r){ try{return l(e,t,n)}catch(e$1){} }if("get"in n||"set"in n){ throw TypeError("Accessors not supported"); }return "value"in n&&(e[t]=n.value),e};},function(e,t,n){e.exports=n(192);},function(e,t,n){var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement){ try{n=n.contentDocument.head;}catch(e$1){n=null;} }e[t]=n;}return e[t]}}(),a=[];function l(e){for(var t=-1,n=0;n<a.length;n++){ if(a[n].identifier===e){t=n;break} }return t}function u(e,t){for(var n={},o=[],r=0;r<e.length;r++){var i=e[r],u=t.base?i[0]+t.base:i[0],c=n[u]||0,s="".concat(u," ").concat(c);n[u]=c+1;var f=l(s),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:s,updater:h(d,t),references:1}),o.push(s);}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r);}if(Object.keys(o).forEach(function(e){t.setAttribute(e,o[e]);}),"function"==typeof e.insert){ e.insert(t); }else {var a=i(e.insert||"head");if(!a){ throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."); }a.appendChild(t);}return t}var s,f=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet){ e.styleSheet.cssText=f(t,r); }else {var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i);}}var p=null,v=0;function h(e,t){var n,o,r;if(t.singleton){var i=v++;n=p||(p=c(t)),o=d.bind(null,n,i,!1),r=d.bind(null,n,i,!0);}else { n=c(t),o=function(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet){ e.styleSheet.cssText=o; }else {for(;e.firstChild;){ e.removeChild(e.firstChild); }e.appendChild(document.createTextNode(o));}}.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode){ return !1; }e.parentNode.removeChild(e);}(n);}; }return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap){ return; }o(e=t);}else { r(); }}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=u(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=l(n[o]);a[r].references--;}for(var i=u(e,t),c=0;c<n.length;c++){var s=l(n[c]);0===a[s].references&&(a[s].updater(),a.splice(s,1));}n=i;}}};},function(e,t,n){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o){ return n; }if(t&&"function"==typeof btoa){var r=(a=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(u," */")),i=o.sources.map(function(e){return "/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")});return [n].concat(i).concat([r]).join("\n")}var a,l,u;return [n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n}).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o){ for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0);} }for(var l=0;l<e.length;l++){var u=[].concat(e[l]);o&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u));}},t};},function(e,t,n){(0, n(0)(n(1)).default)(t,"__esModule",{value:!0});var o=n(2),r=function(e){function t(t,n){return e.call(this,t,n)||this}return o.__extends(t,e),t}(o.__importDefault(n(96)).default);t.default=r;},function(e,t,n){var o=n(0),r=o(n(1)),i=o(n(4)),a=o(n(54));(0, r.default)(t,"__esModule",{value:!0});var l=n(2),u=l.__importDefault(n(3)),c=l.__importDefault(n(96)),s=l.__importDefault(n(128)),f=function(e){function t(t,n,o){var r=e.call(this,t,n)||this;o.title=n.i18next.t("menus.dropListMenu."+o.title);var l,c="zh-CN"===n.config.lang?"":"w-e-drop-list-tl";""!==c&&"list"===o.type&&(0, i.default)(l=o.list).call(l,function(e){var t=e.$elem,n=u.default(t.children());if(n.length>0){var o=null==n?void 0:n.getNodeName();o&&"I"===o&&t.addClass(c);}});var f=new s.default(r,o);return r.dropList=f,t.on("click",function(){var e;null!=n.selection.getRange()&&(t.css("z-index",n.zIndex.get("menu")),(0, i.default)(e=n.txt.eventHooks.dropListMenuHoverEvents).call(e,function(e){return e()}),f.show());}).on("mouseleave",function(){t.css("z-index","auto"),f.hideTimeoutId=(0, a.default)(function(){f.hide();});}),r}return l.__extends(t,e),t}(c.default);t.default=f;},function(e,t,n){var o=n(13);e.exports=function(e){if(!o(e)){ throw TypeError(String(e)+" is not an object"); }return e};},function(e,t,n){e.exports=n(188);},function(e,t,n){e.exports=n(201);},function(e,t,n){var o=n(75),r=n(46);e.exports=function(e){return o(r(e))};},function(e,t,n){var o=n(12),r=n(8),i=function(e){return "function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(o[e])||i(r[e]):o[e]&&o[e][t]||r[e]&&r[e][t]};},function(e,t,n){var o=n(47),r=n(75),i=n(36),a=n(38),l=n(89),u=[].push,c=function(e){var t=1==e,n=2==e,c=3==e,s=4==e,f=6==e,d=7==e,p=5==e||f;return function(v,h,A,m){for(var g,y,w=i(v),x=r(w),_=o(h,A,3),E=a(x.length),b=0,C=m||l,S=t?C(v,E):n||d?C(v,0):void 0;E>b;b++){ if((p||b in x)&&(y=_(g=x[b],b,w),e)){ if(t){ S[b]=y; }else if(y){ switch(e){case 3:return !0;case 5:return g;case 6:return b;case 2:u.call(S,g);} }else { switch(e){case 4:return !1;case 7:u.call(S,g);} } } }return f?-1:c||s?s:S}};e.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)};},function(e,t,n){e.exports=n(286);},function(e,t,n){var o=n(0),r=o(n(1)),i=o(n(4)),a=o(n(30)),l=o(n(125));(0, r.default)(t,"__esModule",{value:!0});var u=n(2),c=u.__importDefault(n(3)),s=n(7),f=function(){function e(t,n){this.menu=t,this.conf=n,this.$container=c.default('<div class="w-e-panel-container"></div>');var o=t.editor;o.txt.eventHooks.clickEvents.push(e.hideCurAllPanels),o.txt.eventHooks.toolbarClickEvents.push(e.hideCurAllPanels),o.txt.eventHooks.dropListMenuHoverEvents.push(e.hideCurAllPanels);}return e.prototype.create=function(){var t=this,n=this.menu;if(!e.createdMenus.has(n)){var o=this.conf,r=this.$container,l=o.width||300,f=n.editor.$toolbarElem.getBoundingClientRect(),d=n.$elem.getBoundingClientRect(),p=f.height+f.top-d.top,v=(f.width-l)/2+f.left-d.left;r.css("width",l+"px").css("margin-top",p+"px").css("margin-left",v+"px").css("z-index",n.editor.zIndex.get("panel"));var h=c.default('<i class="w-e-icon-close w-e-panel-close"></i>');r.append(h),h.on("click",function(){t.remove();});var A=c.default('<ul class="w-e-panel-tab-title"></ul>'),m=c.default('<div class="w-e-panel-tab-content"></div>');r.append(A).append(m);var g=o.height;g&&m.css("height",g+"px").css("overflow-y","auto");var y=o.tabs||[],w=[],x=[];(0, i.default)(y).call(y,function(e,t){if(e){var n=e.title||"",o=e.tpl||"",r=c.default('<li class="w-e-item">'+n+"</li>");A.append(r);var a=c.default(o);m.append(a),w.push(r),x.push(a),0===t?(r.data("active",!0),r.addClass("w-e-active")):a.hide(),r.on("click",function(){r.data("active")||((0, i.default)(w).call(w,function(e){e.data("active",!1),e.removeClass("w-e-active");}),(0, i.default)(x).call(x,function(e){e.hide();}),r.data("active",!0),r.addClass("w-e-active"),a.show());});}}),r.on("click",function(e){e.stopPropagation();}),n.$elem.append(r),(0, i.default)(y).call(y,function(e,n){if(e){var o=e.events||[];(0, i.default)(o).call(o,function(e){var o=e.selector,r=e.type,i=e.fn||s.EMPTY_FN,l=x[n];(0, a.default)(l).call(l,o).on(r,function(e){return u.__awaiter(t,void 0,void 0,function(){return u.__generator(this,function(t){switch(t.label){case 0:return e.stopPropagation(),[4,i(e)];case 1:return t.sent()&&this.remove(),[2]}})})});});}});var _=(0, a.default)(r).call(r,"input[type=text],textarea");_.length&&_.get(0).focus(),e.hideCurAllPanels(),n.setPanel(this),e.createdMenus.add(n);}},e.prototype.remove=function(){var t=this.menu,n=this.$container;n&&n.remove(),e.createdMenus.delete(t);},e.hideCurAllPanels=function(){var t;0!==e.createdMenus.size&&(0, i.default)(t=e.createdMenus).call(t,function(e){var t=e.panel;t&&t.remove();});},e.createdMenus=new l.default,e}();t.default=f;},function(e,t){e.exports=function(e){if("function"!=typeof e){ throw TypeError(String(e)+" is not a function"); }return e};},function(e,t,n){(0, n(0)(n(1)).default)(t,"__esModule",{value:!0});var o=n(2),r=function(e){function t(t,n){return e.call(this,t,n)||this}return o.__extends(t,e),t.prototype.setPanel=function(e){this.panel=e;},t}(o.__importDefault(n(96)).default);t.default=r;},function(e,t,n){var o=n(0),r=o(n(1)),i=o(n(4)),a=o(n(53));(0, r.default)(t,"__esModule",{value:!0});var l=n(2).__importDefault(n(3)),u=function(){function e(e,t,n){this.editor=e,this.$targetElem=t,this.conf=n,this._show=!1,this._isInsertTextContainer=!1;var o=l.default("<div></div>");o.addClass("w-e-tooltip"),this.$container=o;}return e.prototype.getPositionData=function(){var e=this.$container,t=0,n=0,o=document.documentElement.scrollTop,r=this.$targetElem.getBoundingClientRect(),i=this.editor.$textElem.getBoundingClientRect(),a=this.$targetElem.getOffsetData(),u=l.default(a.parent),c=this.editor.$textElem.elems[0].scrollTop;if(this._isInsertTextContainer=u.equal(this.editor.$textContainerElem),this._isInsertTextContainer){var s=u.getBoundingClientRect().height,f=a.top,d=a.left,p=a.height,v=f-c;v>25?(t=v-20-15,e.addClass("w-e-tooltip-up")):v+p+20<s?(t=v+p+10,e.addClass("w-e-tooltip-down")):(t=(v>0?v:0)+20+10,e.addClass("w-e-tooltip-down")),n=d<0?0:d;}else { r.top<20?(t=r.bottom+o+5,e.addClass("w-e-tooltip-down")):r.top-i.top<20?(t=r.bottom+o+5,e.addClass("w-e-tooltip-down")):(t=r.top+o-20-15,e.addClass("w-e-tooltip-up")),n=r.left<0?0:r.left; }return {top:t,left:n}},e.prototype.appendMenus=function(){var e=this,t=this.conf,n=this.editor,o=this.$targetElem,r=this.$container;(0, i.default)(t).call(t,function(t,i){var a=t.$elem,u=l.default("<div></div>");u.addClass("w-e-tooltip-item-wrapper "),u.append(a),r.append(u),a.on("click",function(r){r.preventDefault(),t.onClick(n,o)&&e.remove();});});},e.prototype.create=function(){var e,t,n=this.editor,o=this.$container;this.appendMenus();var r=this.getPositionData(),i=r.top,u=r.left;o.css("top",i+"px"),o.css("left",u+"px"),o.css("z-index",n.zIndex.get("tooltip")),this._isInsertTextContainer?this.editor.$textContainerElem.append(o):l.default("body").append(o),this._show=!0,n.beforeDestroy((0, a.default)(e=this.remove).call(e,this)),n.txt.eventHooks.onBlurEvents.push((0, a.default)(t=this.remove).call(t,this));},e.prototype.remove=function(){this.$container.remove(),this._show=!1;},(0, r.default)(e.prototype,"isShow",{get:function(){return this._show},enumerable:!1,configurable:!0}),e}();t.default=u;},function(e,t){e.exports=function(e,t){return {enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};},function(e,t,n){var o=n(46);e.exports=function(e){return Object(o(e))};},function(e,t){e.exports=!0;},function(e,t,n){var o=n(62),r=Math.min;e.exports=function(e){return e>0?r(o(e),9007199254740991):0};},function(e,t,n){var o=n(24),r=n(163),i=n(38),a=n(47),l=n(164),u=n(165),c=function(e,t){this.stopped=e,this.result=t;};e.exports=function(e,t,n){var s,f,d,p,v,h,A,m=n&&n.that,g=!(!n||!n.AS_ENTRIES),y=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),x=a(t,m,1+g+w),_=function(e){return s&&u(s),new c(!0,e)},E=function(e){return g?(o(e),w?x(e[0],e[1],_):x(e[0],e[1])):w?x(e,_):x(e)};if(y){ s=e; }else {if("function"!=typeof(f=l(e))){ throw TypeError("Target is not iterable"); }if(r(f)){for(d=0,p=i(e.length);p>d;d++){ if((v=E(e[d]))&&v instanceof c){ return v; } }return new c(!1)}s=f.call(e);}for(h=s.next;!(A=h.call(s)).done;){try{v=E(A.value);}catch(e$1){throw u(s),e$1}if("object"==typeof v&&v&&v instanceof c){ return v }}return new c(!1)};},function(e,t){e.exports={};},function(e,t,n){var o=n(84),r=n(18).f,i=n(17),a=n(16),l=n(167),u=n(9)("toStringTag");e.exports=function(e,t,n,c){if(e){var s=n?e:e.prototype;a(s,u)||r(s,u,{configurable:!0,value:t}),c&&!o&&i(s,"toString",l);}};},function(e,t,n){var o,r,i,a=n(172),l=n(8),u=n(13),c=n(17),s=n(16),f=n(79),d=n(58),p=n(48),v=l.WeakMap;if(a){var h=f.state||(f.state=new v),A=h.get,m=h.has,g=h.set;o=function(e,t){return t.facade=e,g.call(h,e,t),t},r=function(e){return A.call(h,e)||{}},i=function(e){return m.call(h,e)};}else {var y=d("state");p[y]=!0,o=function(e,t){return t.facade=e,c(e,y,t),t},r=function(e){return s(e,y)?e[y]:{}},i=function(e){return s(e,y)};}e.exports={set:o,get:r,has:i,enforce:function(e){return i(e)?r(e):o(e,{})},getterFor:function(e){return function(t){var n;if(!u(t)||(n=r(t)).type!==e){ throw TypeError("Incompatible receiver, "+e+" required"); }return n}}};},function(e,t,n){e.exports=n(262);},function(e,t,n){var o=n(0),r=o(n(1)),i=o(n(4));(0, r.default)(t,"__esModule",{value:!0}),t.createElementFragment=t.createDocumentFragment=t.createElement=t.insertBefore=t.getEndPoint=t.getStartPoint=t.updateRange=t.filterSelectionNodes=void 0;var a=n(2),l=n(132),u=a.__importDefault(n(3));function c(e){return document.createElement(e)}t.filterSelectionNodes=function(e){var t=[];return (0, i.default)(e).call(e,function(e){var n=e.getNodeName();if(n!==l.ListType.OrderedList&&n!==l.ListType.UnorderedList){ t.push(e); }else if(e.prior){ t.push(e.prior); }else {var o=e.children();null==o||(0, i.default)(o).call(o,function(e){t.push(u.default(e));});}}),t},t.updateRange=function(e,t,n){var o=e.selection,r=document.createRange();t.length>1?(r.setStart(t.elems[0],0),r.setEnd(t.elems[t.length-1],t.elems[t.length-1].childNodes.length)):r.selectNodeContents(t.elems[0]),n&&r.collapse(!1),o.saveRange(r),o.restoreSelection();},t.getStartPoint=function(e){var t;return e.prior?e.prior:u.default(null===(t=e.children())||void 0===t?void 0:t.elems[0])},t.getEndPoint=function(e){var t;return e.prior?e.prior:u.default(null===(t=e.children())||void 0===t?void 0:t.last().elems[0])},t.insertBefore=function(e,t,n){void 0===n&&(n=null),e.parent().elems[0].insertBefore(t,n);},t.createElement=c,t.createDocumentFragment=function(){return document.createDocumentFragment()},t.createElementFragment=function(e,t,n){return void 0===n&&(n="li"),(0, i.default)(e).call(e,function(e){var o=c(n);o.innerHTML=e.html(),t.append(o),e.remove();}),t};},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)};},function(e,t){e.exports=function(e){if(null==e){ throw TypeError("Can't call method on "+e); }return e};},function(e,t,n){var o=n(32);e.exports=function(e,t,n){if(o(e),void 0===t){ return e; }switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}};},function(e,t){e.exports={};},function(e,t,n){var o=n(17);e.exports=function(e,t,n,r){r&&r.enumerable?e[t]=n:o(e,t,n);};},function(e,t,n){n(178);var o=n(179),r=n(8),i=n(66),a=n(17),l=n(40),u=n(9)("toStringTag");for(var c in o){var s=r[c],f=s&&s.prototype;f&&i(f)!==u&&a(f,u,c),l[c]=l.Array;}},function(e,t,n){var o=n(45);e.exports=Array.isArray||function(e){return "Array"==o(e)};},function(e,t,n){var o=n(11),r=n(9),i=n(64),a=r("species");e.exports=function(e){return i>=51||!o(function(){var t=[];return (t.constructor={})[a]=function(){return {foo:1}},1!==t[e](Boolean).foo})};},function(e,t,n){e.exports=n(222);},function(e,t,n){e.exports=n(266);},function(e,t,n){(0, n(0)(n(1)).default)(t,"__esModule",{value:!0}),t.ListHandle=void 0;var o=n(2).__importDefault(n(370)),r=function(){return function(e){this.options=e,this.selectionRangeElem=new o.default;}}();t.ListHandle=r;},function(e,t,n){var o={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!o.call({1:2},1);t.f=i?function(e){var t=r(this,e);return !!t&&t.enumerable}:o;},function(e,t,n){var o=n(13);e.exports=function(e,t){if(!o(e)){ return e; }var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e))){ return r; }if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e))){ return r; }if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e))){ return r; }throw TypeError("Can't convert object to primitive value")};},function(e,t,n){var o=n(78),r=n(59),i=o("keys");e.exports=function(e){return i[e]||(i[e]=r(e))};},function(e,t){var n=0,o=Math.random();e.exports=function(e){return "Symbol("+String(void 0===e?"":e)+")_"+(++n+o).toString(36)};},function(e,t,n){var o,r=n(24),i=n(162),a=n(82),l=n(48),u=n(104),c=n(76),s=n(58),f=s("IE_PROTO"),d=function(){},p=function(e){return "<script>"+e+"<\/script>"},v=function(){try{o=document.domain&&new ActiveXObject("htmlfile");}catch(e$1){}var e,t;v=o?function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t}(o):((t=c("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F);for(var n=a.length;n--;){ delete v.prototype[a[n]]; }return v()};l[f]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(d.prototype=r(e),n=new d,d.prototype=null,n[f]=e):n=v(),void 0===t?n:i(n,t)};},function(e,t,n){var o=n(103),r=n(82);e.exports=Object.keys||function(e){return o(e,r)};},function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)};},function(e,t,n){var o=n(45),r=n(8);e.exports="process"==o(r.process);},function(e,t,n){var o,r,i=n(8),a=n(65),l=i.process,u=l&&l.versions,c=u&&u.v8;c?r=(o=c.split("."))[0]+o[1]:a&&(!(o=a.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=a.match(/Chrome\/(\d+)/))&&(r=o[1]),e.exports=r&&+r;},function(e,t,n){var o=n(28);e.exports=o("navigator","userAgent")||"";},function(e,t,n){var o=n(84),r=n(45),i=n(9)("toStringTag"),a="Arguments"==r(function(){return arguments}());e.exports=o?r:function(e){var t,n,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e$1){}}(t=Object(e),i))?n:a?r(t):"Object"==(o=r(t))&&"function"==typeof t.callee?"Arguments":o};},function(e,t){},function(e,t,n){var o=n(32),r=function(e){var t,n;this.promise=new e(function(e,o){if(void 0!==t||void 0!==n){ throw TypeError("Bad Promise constructor"); }t=e,n=o;}),this.resolve=o(t),this.reject=o(n);};e.exports.f=function(e){return new r(e)};},function(e,t,n){var o=n(176).charAt,r=n(42),i=n(87),a=r.set,l=r.getterFor("String Iterator");i(String,"String",function(e){a(this,{type:"String Iterator",string:String(e),index:0});},function(){var e,t=l(this),n=t.string,r=t.index;return r>=n.length?{value:void 0,done:!0}:(e=o(n,r),t.index+=e.length,{value:e,done:!1})});},function(e,t,n){var o=n(11);e.exports=function(e,t){var n=[][e];return !!n&&o(function(){n.call(null,t||function(){throw 1},1);})};},function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff";},function(e,t,n){e.exports=n(209);},function(e,t,n){e.exports=n(213);},function(e,t,n){var o=n(15),r=n(56),i=n(35),a=n(27),l=n(57),u=n(16),c=n(100),s=Object.getOwnPropertyDescriptor;t.f=o?s:function(e,t){if(e=a(e),t=l(t,!0),c){ try{return s(e,t)}catch(e$1){} }if(u(e,t)){ return i(!r.f.call(e,t),e[t]) }};},function(e,t,n){var o=n(11),r=n(45),i="".split;e.exports=o(function(){return !Object("z").propertyIsEnumerable(0)})?function(e){return "String"==r(e)?i.call(e,""):Object(e)}:Object;},function(e,t,n){var o=n(8),r=n(13),i=o.document,a=r(i)&&r(i.createElement);e.exports=function(e){return a?i.createElement(e):{}};},function(e,t,n){var o=n(16),r=n(36),i=n(58),a=n(160),l=i("IE_PROTO"),u=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){return e=r(e),o(e,l)?e[l]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?u:null};},function(e,t,n){var o=n(37),r=n(79);(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.9.1",mode:o?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});},function(e,t,n){var o=n(8),r=n(159),i=o["__core-js_shared__"]||r("__core-js_shared__",{});e.exports=i;},function(e,t,n){var o=n(27),r=n(38),i=n(81),a=function(e){return function(t,n,a){var l,u=o(t),c=r(u.length),s=i(a,c);if(e&&n!=n){for(;c>s;){ if((l=u[s++])!=l){ return !0 } }}else { for(;c>s;s++){ if((e||s in u)&&u[s]===n){ return e||s||0; } } }return !e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)};},function(e,t,n){var o=n(62),r=Math.max,i=Math.min;e.exports=function(e,t){var n=o(e);return n<0?r(n+t,0):i(n,t)};},function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];},function(e,t,n){var o=n(63),r=n(64),i=n(11);e.exports=!!Object.getOwnPropertySymbols&&!i(function(){return !Symbol.sham&&(o?38===r:r>37&&r<41)});},function(e,t,n){var o={};o[n(9)("toStringTag")]="z",e.exports="[object z]"===String(o);},function(e,t){e.exports=function(e,t,n){if(!(e instanceof t)){ throw TypeError("Incorrect "+(n?n+" ":"")+"invocation"); }return e};},function(e,t){e.exports=function(e){try{return {error:!1,value:e()}}catch(e$1){return {error:!0,value:e$1}}};},function(e,t,n){var o=n(5),r=n(177),i=n(77),a=n(102),l=n(41),u=n(17),c=n(49),s=n(9),f=n(37),d=n(40),p=n(114),v=p.IteratorPrototype,h=p.BUGGY_SAFARI_ITERATORS,A=s("iterator"),m=function(){return this};e.exports=function(e,t,n,s,p,g,y){r(n,t,s);var w,x,_,E=function(e){if(e===p&&N){ return N; }if(!h&&e in S){ return S[e]; }switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},b=t+" Iterator",C=!1,S=e.prototype,D=S[A]||S["@@iterator"]||p&&S[p],N=!h&&D||E(p),M="Array"==t&&S.entries||D;if(M&&(w=i(M.call(new e)),v!==Object.prototype&&w.next&&(f||i(w)===v||(a?a(w,v):"function"!=typeof w[A]&&u(w,A,m)),l(w,b,!0,!0),f&&(d[b]=m))),"values"==p&&D&&"values"!==D.name&&(C=!0,N=function(){return D.call(this)}),f&&!y||S[A]===N||u(S,A,N),d[t]=N,p){ if(x={values:E("values"),keys:g?N:E("keys"),entries:E("entries")},y){ for(_ in x){ !h&&!C&&_ in S||c(S,_,x[_]); } }else { o({target:t,proto:!0,forced:h||C},x); } }return x};},function(e,t){e.exports=function(){};},function(e,t,n){var o=n(13),r=n(51),i=n(9)("species");e.exports=function(e,t){var n;return r(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!r(n.prototype)?o(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)};},function(e,t,n){e.exports=n(185);},function(e,t,n){var o=n(46),r="["+n(71)+"]",i=RegExp("^"+r+r+"*"),a=RegExp(r+r+"*$"),l=function(e){return function(t){var n=String(o(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(a,"")),n}};e.exports={start:l(1),end:l(2),trim:l(3)};},function(e,t,n){e.exports=n(205);},function(e,t,n){var o=n(57),r=n(18),i=n(35);e.exports=function(e,t,n){var a=o(t);a in e?r.f(e,a,i(0,n)):e[a]=n;};},function(e,t,n){var o=n(227),r=n(254);function i(t){return "function"==typeof o&&"symbol"==typeof r?(e.exports=i=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=i=function(e){return e&&"function"==typeof o&&e.constructor===o&&e!==o.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),i(t)}e.exports=i,e.exports.default=e.exports,e.exports.__esModule=!0;},function(e,t,n){var o=n(9);t.f=o;},function(e,t,n){var o=n(0),r=o(n(1)),i=o(n(4));(0, r.default)(t,"__esModule",{value:!0});var a=n(2).__importDefault(n(31)),l=function(){function e(e,t){var n=this;this.$elem=e,this.editor=t,this._active=!1,e.on("click",function(e){var o;a.default.hideCurAllPanels(),(0, i.default)(o=t.txt.eventHooks.menuClickEvents).call(o,function(e){return e()}),e.stopPropagation(),null!=t.selection.getRange()&&n.clickHandler(e);});}return e.prototype.clickHandler=function(e){},e.prototype.active=function(){this._active=!0,this.$elem.addClass("w-e-active");},e.prototype.unActive=function(){this._active=!1,this.$elem.removeClass("w-e-active");},(0, r.default)(e.prototype,"isActive",{get:function(){return this._active},enumerable:!1,configurable:!0}),e}();t.default=l;},function(e,t,n){var o=n(0),r=o(n(1)),i=o(n(53)),a=o(n(4)),l=o(n(26));(0, r.default)(t,"__esModule",{value:!0});var u=n(2),c=n(6),s=u.__importDefault(n(130)),f=u.__importDefault(n(131)),d=function(){function e(e){this.editor=e;}return e.prototype.insertImg=function(e,t,n){var o=this.editor,r=o.config,i=function(e,t){return void 0===t&&(t="validate."),o.i18next.t(t+e)},a=t?'alt="'+t+'" ':"",l=n?'data-href="'+encodeURIComponent(n)+'" ':"";o.cmd.do("insertHTML",'<img src="'+e+'" '+a+l+'style="max-width:100%;"/>'),r.linkImgCallback(e,t,n);var u=document.createElement("img");u.onload=function(){u=null;},u.onerror=function(){r.customAlert(i("插入图片错误"),"error","wangEditor: "+i("插入图片错误")+"，"+i("图片链接")+' "'+e+'"，'+i("下载链接失败")),u=null;},u.onabort=function(){return u=null},u.src=e;},e.prototype.uploadImg=function(e){var t=this;if(e.length){var n=this.editor,o=n.config,r=function(e){return n.i18next.t("validate."+e)},u=o.uploadImgServer,d=o.uploadImgShowBase64,p=o.uploadImgMaxSize,v=p/1024/1024,h=o.uploadImgMaxLength,A=o.uploadFileName,m=o.uploadImgParams,g=o.uploadImgParamsWithUrl,y=o.uploadImgHeaders,w=o.uploadImgHooks,x=o.uploadImgTimeout,_=o.withCredentials,E=o.customUploadImg;if(E||u||d){var b=[],C=[];if(c.arrForEach(e,function(e){var t=e.name,o=e.size;if(t&&o){var i=n.config.uploadImgAccept.join("|");!1!==new RegExp(".("+i+")$","i").test(t)?p<o?C.push("【"+t+"】"+r("大于")+" "+v+"M"):b.push(e):C.push("【"+t+"】"+r("不是图片"));}}),C.length){ o.customAlert(r("图片验证未通过")+": \n"+C.join("\n"),"warning"); }else if(0!==b.length){ if(b.length>h){ o.customAlert(r("一次最多上传")+h+r("张图片"),"warning"); }else if(E&&"function"==typeof E){var S;E(b,(0, i.default)(S=this.insertImg).call(S,this));}else {var D=new FormData;if((0, a.default)(b).call(b,function(e,t){var n=A||e.name;b.length>1&&(n+=t+1),D.append(n,e);}),u){var N=u.split("#");u=N[0];var M=N[1]||"";(0, a.default)(c).call(c,m,function(e,t){g&&((0, l.default)(u).call(u,"?")>0?u+="&":u+="?",u=u+e+"="+t),D.append(e,t);}),M&&(u+="#"+M);var k=s.default(u,{timeout:x,formData:D,headers:y,withCredentials:!!_,beforeSend:function(e){if(w.before){ return w.before(e,n,b) }},onTimeout:function(e){o.customAlert(r("上传图片超时"),"error"),w.timeout&&w.timeout(e,n);},onProgress:function(e,t){var o=new f.default(n);t.lengthComputable&&(e=t.loaded/t.total,o.show(e));},onError:function(e){o.customAlert(r("上传图片错误"),"error",r("上传图片错误")+"，"+r("服务器返回状态")+": "+e.status),w.error&&w.error(e,n);},onFail:function(e,t){o.customAlert(r("上传图片失败"),"error",r("上传图片返回结果错误")+"，"+r("返回结果")+": "+t),w.fail&&w.fail(e,n,t);},onSuccess:function(e,l){if(w.customInsert){var u;w.customInsert((0, i.default)(u=t.insertImg).call(u,t),l,n);}else {if("0"!=l.errno){ return o.customAlert(r("上传图片失败"),"error",r("上传图片返回结果错误")+"，"+r("返回结果")+" errno="+l.errno),void(w.fail&&w.fail(e,n,l)); }var c=l.data;(0, a.default)(c).call(c,function(e){"string"==typeof e?t.insertImg(e):t.insertImg(e.url,e.alt,e.href);}),w.success&&w.success(e,n,l);}}});"string"==typeof k&&o.customAlert(k,"error");}else { d&&c.arrForEach(e,function(e){var n=t,o=new FileReader;o.readAsDataURL(e),o.onload=function(){if(this.result){var e=this.result.toString();n.insertImg(e,e);}};}); }} }else { o.customAlert(r("传入的文件不合法"),"warning"); }}}},e}();t.default=d;},function(e,t,n){var o=n(0),r=o(n(1)),i=o(n(403)),a=o(n(4)),l=o(n(43));function u(e){return !!e.length&&"w-e-todo"===e.attr("class")}function c(e,t){return 3===e.nodeType?e.nodeValue===t.nodeValue:e.contains(t)}function s(e,t,n){void 0===n&&(n=!0);var o=e.nodeValue,r=null==o?void 0:(0, l.default)(o).call(o,0,t);if(o=null==o?void 0:(0, l.default)(o).call(o,t),!n){var i=o;o=r,r=i;}return e.nodeValue=r,o}(0, r.default)(t,"__esModule",{value:!0}),t.dealTextNode=t.isAllTodo=t.isTodo=t.getCursorNextNode=void 0,t.isTodo=u,t.isAllTodo=function(e){var t=e.selection.getSelectionRangeTopNodes();if(0!==t.length){ return (0, i.default)(t).call(t,function(e){return u(e)}) }},t.getCursorNextNode=function e(t,n,o){var r;if(t.hasChildNodes()){var i=t.cloneNode(),l=!1;""===n.nodeValue&&(l=!0);var u=[];return (0, a.default)(r=t.childNodes).call(r,function(t){if(!c(t,n)&&l&&(i.appendChild(t.cloneNode(!0)),"BR"!==t.nodeName&&u.push(t)),c(t,n)){if(1===t.nodeType){var r=e(t,n,o);r&&""!==r.textContent&&(null==i||i.appendChild(r));}if(3===t.nodeType&&n.isEqualNode(t)){var a=s(t,o);i.textContent=a;}l=!0;}}),(0, a.default)(u).call(u,function(e){e.remove();}),i}},t.dealTextNode=s;},function(e,t,n){var o=n(0)(n(1));(0, o.default)(t,"__esModule",{value:!0});var r=n(423),i=function(){function e(e){this.maxSize=e,this.isRe=!1,this.data=new r.CeilStack(e),this.revokeData=new r.CeilStack(e);}return (0, o.default)(e.prototype,"size",{get:function(){return [this.data.size,this.revokeData.size]},enumerable:!1,configurable:!0}),e.prototype.resetMaxSize=function(e){this.data.resetMax(e),this.revokeData.resetMax(e);},e.prototype.save=function(e){return this.isRe&&(this.revokeData.clear(),this.isRe=!1),this.data.instack(e),this},e.prototype.revoke=function(e){!this.isRe&&(this.isRe=!0);var t=this.data.outstack();return !!t&&(this.revokeData.instack(t),e(t),!0)},e.prototype.restore=function(e){!this.isRe&&(this.isRe=!0);var t=this.revokeData.outstack();return !!t&&(this.data.instack(t),e(t),!0)},e}();t.default=i;},function(e,t,n){var o=n(15),r=n(11),i=n(76);e.exports=!o&&!r(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a});},function(e,t,n){var o=n(11),r=/#|\.prototype\./,i=function(e,t){var n=l[a(e)];return n==c||n!=u&&("function"==typeof t?o(t):!!t)},a=i.normalize=function(e){return String(e).replace(r,".").toLowerCase()},l=i.data={},u=i.NATIVE="N",c=i.POLYFILL="P";e.exports=i;},function(e,t,n){var o=n(24),r=n(161);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array;}catch(e$1){}return function(n,i){return o(n),r(i),t?e.call(n,i):n.__proto__=i,n}}():void 0);},function(e,t,n){var o=n(16),r=n(27),i=n(80).indexOf,a=n(48);e.exports=function(e,t){var n,l=r(e),u=0,c=[];for(n in l){ !o(a,n)&&o(l,n)&&c.push(n); }for(;t.length>u;){ o(l,n=t[u++])&&(~i(c,n)||c.push(n)); }return c};},function(e,t,n){var o=n(28);e.exports=o("document","documentElement");},function(e,t,n){var o=n(83);e.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;},function(e,t,n){var o=n(8);e.exports=o.Promise;},function(e,t,n){var o=n(49);e.exports=function(e,t,n){for(var r in t){ n&&n.unsafe&&e[r]?e[r]=t[r]:o(e,r,t[r],n); }return e};},function(e,t,n){var o=n(28),r=n(18),i=n(9),a=n(15),l=i("species");e.exports=function(e){var t=o(e),n=r.f;a&&t&&!t[l]&&n(t,l,{configurable:!0,get:function(){return this}});};},function(e,t,n){var o=n(79),r=Function.toString;"function"!=typeof o.inspectSource&&(o.inspectSource=function(e){return r.call(e)}),e.exports=o.inspectSource;},function(e,t,n){var o=n(24),r=n(32),i=n(9)("species");e.exports=function(e,t){var n,a=o(e).constructor;return void 0===a||null==(n=o(a)[i])?t:r(n)};},function(e,t,n){var o,r,i,a=n(8),l=n(11),u=n(47),c=n(104),s=n(76),f=n(112),d=n(63),p=a.location,v=a.setImmediate,h=a.clearImmediate,A=a.process,m=a.MessageChannel,g=a.Dispatch,y=0,w={},x=function(e){if(w.hasOwnProperty(e)){var t=w[e];delete w[e],t();}},_=function(e){return function(){x(e);}},E=function(e){x(e.data);},b=function(e){a.postMessage(e+"",p.protocol+"//"+p.host);};v&&h||(v=function(e){
  var arguments$1 = arguments;
  var arguments$1 = arguments;
  var n,o,s,p,v,h,A=l(this),m=a(A.length),g=r(e,m),y=arguments.length;if(0===y?n=o=0:1===y?(n=0,o=m-g):(n=y-2,o=d(f(i(t),0),m-g)),m+n-o>9007199254740991){ throw TypeError("Maximum allowed length exceeded"); }for(s=u(A,o),p=0;p<o;p++){ (v=g+p)in A&&c(s,p,A[v]); }if(s.length=o,n<o){for(p=g;p<m-o;p++){ h=p+n,(v=p+o)in A?A[h]=A[v]:delete A[h]; }for(p=m;p>m-o+n;p--){ delete A[p-1]; }}else if(n>o){ for(p=m-o;p>g;p--){ h=p+n-1,(v=p+o-1)in A?A[h]=A[v]:delete A[h]; } }for(p=0;p<n;p++){ A[p+g]=arguments$1[p+2]; }return A.length=m-o+n,s}});},function(e,t,n){var o=n(210);e.exports=o;},function(e,t,n){var o=n(211),r=Array.prototype;e.exports=function(e){var t=e.filter;return e===r||e instanceof Array&&t===r.filter?o:t};},function(e,t,n){n(212);var o=n(14);e.exports=o("Array").filter;},function(e,t,n){var o=n(5),r=n(29).filter;o({target:"Array",proto:!0,forced:!n(52)("filter")},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}});},function(e,t,n){var o=n(214);e.exports=o;},function(e,t,n){var o=n(215),r=n(217),i=Array.prototype,a=String.prototype;e.exports=function(e){var t=e.includes;return e===i||e instanceof Array&&t===i.includes?o:"string"==typeof e||e===a||e instanceof String&&t===a.includes?r:t};},function(e,t,n){n(216);var o=n(14);e.exports=o("Array").includes;},function(e,t,n){var o=n(5),r=n(80).includes,i=n(88);o({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes");},function(e,t,n){n(218);var o=n(14);e.exports=o("String").includes;},function(e,t,n){var o=n(5),r=n(219),i=n(46);o({target:"String",proto:!0,forced:!n(221)("includes")},{includes:function(e){return !!~String(i(this)).indexOf(r(e),arguments.length>1?arguments[1]:void 0)}});},function(e,t,n){var o=n(220);e.exports=function(e){if(o(e)){ throw TypeError("The method doesn't accept regular expressions"); }return e};},function(e,t,n){var o=n(13),r=n(45),i=n(9)("match");e.exports=function(e){var t;return o(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==r(e))};},function(e,t,n){var o=n(9)("match");e.exports=function(e){var t=/./;try{"/./"[e](t);}catch(n){try{return t[o]=!1,"/./"[e](t)}catch(e$1){}}return !1};},function(e,t,n){var o=n(223);e.exports=o;},function(e,t,n){var o=n(224),r=Function.prototype;e.exports=function(e){var t=e.bind;return e===r||e instanceof Function&&t===r.bind?o:t};},function(e,t,n){n(225);var o=n(14);e.exports=o("Function").bind;},function(e,t,n){n(5)({target:"Function",proto:!0},{bind:n(226)});},function(e,t,n){var o=n(32),r=n(13),i=[].slice,a={};e.exports=Function.bind||function(e){var t=o(this),n=i.call(arguments,1),l=function(){var o=n.concat(i.call(arguments));return this instanceof l?function(e,t,n){if(!(t in a)){for(var o=[],r=0;r<t;r++){ o[r]="a["+r+"]"; }a[t]=Function("C,a","return new C("+o.join(",")+")");}return a[t](e,n)}(t,o.length,o):t.apply(e,o)};return r(t.prototype)&&(l.prototype=t.prototype),l};},function(e,t,n){e.exports=n(228);},function(e,t,n){var o=n(229);n(249),n(250),n(251),n(252),n(253),e.exports=o;},function(e,t,n){n(230),n(67),n(231),n(233),n(234),n(235),n(236),n(122),n(237),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(248);var o=n(12);e.exports=o.Symbol;},function(e,t,n){var o=n(5),r=n(11),i=n(51),a=n(13),l=n(36),u=n(38),c=n(93),s=n(89),f=n(52),d=n(9),p=n(64),v=d("isConcatSpreadable"),h=p>=51||!r(function(){var e=[];return e[v]=!1,e.concat()[0]!==e}),A=f("concat"),m=function(e){if(!a(e)){ return !1; }var t=e[v];return void 0!==t?!!t:i(e)};o({target:"Array",proto:!0,forced:!h||!A},{concat:function(e){
  var arguments$1 = arguments;
  var t,n,o,r,i,a=l(this),f=s(a,0),d=0;for(t=-1,o=arguments.length;t<o;t++){ if(i=-1===t?a:arguments$1[t],m(i)){if(d+(r=u(i.length))>9007199254740991){ throw TypeError("Maximum allowed index exceeded"); }for(n=0;n<r;n++,d++){ n in i&&c(f,d,i[n]); }}else {if(d>=9007199254740991){ throw TypeError("Maximum allowed index exceeded"); }c(f,d++,i);} }return f.length=d,f}});},function(e,t,n){var o=n(5),r=n(8),i=n(28),a=n(37),l=n(15),u=n(83),c=n(105),s=n(11),f=n(16),d=n(51),p=n(13),v=n(24),h=n(36),A=n(27),m=n(57),g=n(35),y=n(60),w=n(61),x=n(120),_=n(232),E=n(121),b=n(74),C=n(18),S=n(56),D=n(17),N=n(49),M=n(78),k=n(58),T=n(48),B=n(59),I=n(9),R=n(95),P=n(10),H=n(41),F=n(42),L=n(29).forEach,Q=k("hidden"),O=I("toPrimitive"),U=F.set,j=F.getterFor("Symbol"),Y=Object.prototype,z=r.Symbol,$=i("JSON","stringify"),V=b.f,G=C.f,J=_.f,K=S.f,W=M("symbols"),q=M("op-symbols"),X=M("string-to-symbol-registry"),Z=M("symbol-to-string-registry"),ee=M("wks"),te=r.QObject,ne=!te||!te.prototype||!te.prototype.findChild,oe=l&&s(function(){return 7!=y(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a})?function(e,t,n){var o=V(Y,t);o&&delete Y[t],G(e,t,n),o&&e!==Y&&G(Y,t,o);}:G,re=function(e,t){var n=W[e]=y(z.prototype);return U(n,{type:"Symbol",tag:e,description:t}),l||(n.description=t),n},ie=c?function(e){return "symbol"==typeof e}:function(e){return Object(e)instanceof z},ae=function(e,t,n){e===Y&&ae(q,t,n),v(e);var o=m(t,!0);return v(n),f(W,o)?(n.enumerable?(f(e,Q)&&e[Q][o]&&(e[Q][o]=!1),n=y(n,{enumerable:g(0,!1)})):(f(e,Q)||G(e,Q,g(1,{})),e[Q][o]=!0),oe(e,o,n)):G(e,o,n)},le=function(e,t){v(e);var n=A(t),o=w(n).concat(fe(n));return L(o,function(t){l&&!ue.call(n,t)||ae(e,t,n[t]);}),e},ue=function(e){var t=m(e,!0),n=K.call(this,t);return !(this===Y&&f(W,t)&&!f(q,t))&&(!(n||!f(this,t)||!f(W,t)||f(this,Q)&&this[Q][t])||n)},ce=function(e,t){var n=A(e),o=m(t,!0);if(n!==Y||!f(W,o)||f(q,o)){var r=V(n,o);return !r||!f(W,o)||f(n,Q)&&n[Q][o]||(r.enumerable=!0),r}},se=function(e){var t=J(A(e)),n=[];return L(t,function(e){f(W,e)||f(T,e)||n.push(e);}),n},fe=function(e){var t=e===Y,n=J(t?q:A(e)),o=[];return L(n,function(e){!f(W,e)||t&&!f(Y,e)||o.push(W[e]);}),o};(u||(N((z=function(){if(this instanceof z){ throw TypeError("Symbol is not a constructor"); }var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=B(e),n=function(e){this===Y&&n.call(q,e),f(this,Q)&&f(this[Q],t)&&(this[Q][t]=!1),oe(this,t,g(1,e));};return l&&ne&&oe(Y,t,{configurable:!0,set:n}),re(t,e)}).prototype,"toString",function(){return j(this).tag}),N(z,"withoutSetter",function(e){return re(B(e),e)}),S.f=ue,C.f=ae,b.f=ce,x.f=_.f=se,E.f=fe,R.f=function(e){return re(I(e),e)},l&&(G(z.prototype,"description",{configurable:!0,get:function(){return j(this).description}}),a||N(Y,"propertyIsEnumerable",ue,{unsafe:!0}))),o({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:z}),L(w(ee),function(e){P(e);}),o({target:"Symbol",stat:!0,forced:!u},{for:function(e){var t=String(e);if(f(X,t)){ return X[t]; }var n=z(t);return X[t]=n,Z[n]=t,n},keyFor:function(e){if(!ie(e)){ throw TypeError(e+" is not a symbol"); }if(f(Z,e)){ return Z[e] }},useSetter:function(){ne=!0;},useSimple:function(){ne=!1;}}),o({target:"Object",stat:!0,forced:!u,sham:!l},{create:function(e,t){return void 0===t?y(e):le(y(e),t)},defineProperty:ae,defineProperties:le,getOwnPropertyDescriptor:ce}),o({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:se,getOwnPropertySymbols:fe}),o({target:"Object",stat:!0,forced:s(function(){E.f(1);})},{getOwnPropertySymbols:function(e){return E.f(h(e))}}),$)&&o({target:"JSON",stat:!0,forced:!u||s(function(){var e=z();return "[null]"!=$([e])||"{}"!=$({a:e})||"{}"!=$(Object(e))})},{stringify:function(e,t,n){
  var arguments$1 = arguments;
  //# sourceMappingURL=index.js.map
  });

  var FcEditor = /*@__PURE__*/getDefaultExportFromCjs(dist);

  var css_248z = "@font-face{font-family:fc-icon;src:url(\"data:font/woff;base64,d09GRgABAAAAABVIAAsAAAAAIgwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY95kmJY21hcAAAAYAAAAEVAAADLrSidCRnbHlmAAACmAAAD74AABiY14gyPGhlYWQAABJYAAAALgAAADYcO5CZaGhlYQAAEogAAAAeAAAAJAfeBAJobXR4AAASqAAAABIAAAB8fGIAAGxvY2EAABK8AAAAQAAAAEBgbGZebWF4cAAAEvwAAAAdAAAAIAEzALZuYW1lAAATHAAAAUUAAAJtPlT+fXBvc3QAABRkAAAA4gAAAULN3M8heJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWacwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeFzyfwtzwv4EhhrmBoQEozAiSAwDydAzseJzt0kdOQ0EQhOH/OZFMTib5BCw4GpYRRgKZHC0yB2HFleoYUONiwSEY6bM0I3U/ubuAJlC3XWtA9UVFOZ9+rcbvdabH7w2ufJ9jkhot9XSggU400sf3N2hffR3qWEM9lvufU7lmgSVWWGPP9w022WKbHbruXXPfJi0m3HfKX5qhzawrKuZdtei6ZVeuunadjpu1+D/t8lMd/d66Zfrh2aJeeMqoH543OghPHh2Gd4AGMe5zHCUROglvCA2jJESnUZKjs/D+0Hl4k+givFN0Gd4uuoqSKF2HN45uovwz3YZTgO7CeUD3UVKph3BG0CicFvQYzg16CicIPYezhF7CqUKv4Xyht3DS0Hs4c+gj6PwAdVJxugAAAHicdTgLkBTlmf/3/9OP7Z7u6d7pnp6Z3ZnZmWZ7WJbdHXdeHggcLN4JaBFQHhE5SFCIRDfokSzxcWpSxGARAaGwSKQOAz7iXa4K75LgA59V1J13VrBMQsRIikqZWPjgEqty5yXd3Pd3z8wuSmp3vu/r7//+R3/vvwkQcuE8+w5TiEsIzIXmMJSLOkh5cGz85WF2i+kicxjmAD2z6EZKb1wULEQMM8vwufnWtfVnF62ndP2iZ2vLLMOCk3T12NhqgNVjM69M/ftVtzpDdeAcCpcNaDMyTxNCGOHgGfoA0UieDOLerV2L4XbCXBjNU0unpWFaa4A7F2peuYrDOtCng59u2cfYvi1wWYj91/OLr118RV/fFRGCs3sq9Xplz/VbKZ2gO+i+LVv2MrZ3y5Z9t+f7+uYsXr54TqHAUfCCd8udt3jsa6s+v5UfRwnPtI3+iThkJplD5pNFZBm5jmwiW8l9eEKuEyvlFPNgm5YoFVErJp7W4aoxW0c3uf7w15+HHFiiWyx5c1CD1aKNf4Lt2m7drRcdt+xKbtMpS81GShLxD6enbEsSB6HuVBvNuVD3ysMwCHZ1lD/h23tlF/4p4TDbgIH+SqXfPzatAlCZ9sYbyATboEsjHLxeGGBwpDuVNoLT3Q6kDfCC0/j72/n5+WAuKZnLzdKSkXzhvXwOQOxKqDpTLLOwslCxRYGCKMSVSlOJC7IoiIrVpH/CRe8zUgwq/cH2aE96NeKZyPePRpvCP6BAbEbuadxuRTKVMZZ3p6av/GPPE0/0vFKpvDKxYsUE5JKmqopUkhU7l1BeWQ4ii4sJgcV2xhjTDI2J6Iyx0Abj9CP0iavIF8hdqHe35NUaoR/WW95pc79soDMMAnLqOFLkxtEBuGi1iDqrc+2VGuhLsyEak/rrtcZoCm0ocqPUvJIomTpf3SmNgFdrNkYLkNLpCK4pWgWcpQNLP6/phvq8ZgIkVf9khHt6AAy1p38EYKSfVkIcXMkFYbncDdAtv6emKLW63isMAwyWgp2VxSNgpGUnlQFBFTQzryjbHSe7oGdIFCElN+W0IW0XRVmDm4y0ilucjXY6q5uQ0XTc5ky021l3OPghX0ndojqqohrIuw2NcfITd3jYfVHTTeVFNZlUg48Fqj+v7MqMpbPZalcPFaWqzIyCvFM0jS5ChI6eE6SA3v5X5JpWDE7xZIaPbS/nCmZuSbRSs2G0Ua95Erp954FxF0Vnx2GnalopZJrM9M+UawC1Mi2FGLjDnDFsjmkJ8ea9qmGoexXTVDrUIcUwlOB9/nibkTLohzh/6jr+N6cswN39PZQyVE3/Nhg2LqQl0HCcQqcMTvClYVYn32wO3zdJhvBd0RPM6P3qJvqMUDSL/RhpeUgAS0DJdqsuegXmoQJtsmo6D5BP+/udQsGhm/39dHOw/1SXbTCZfcAouKokbUT9pmS24hT9sOD4+6MZdLNTaPj7X/8EB5NKLDjPgEnfkG1DZhs/IaG/XwjYNxglKmYdl4ygaVDjqPAw2ZWj5BumxuZf4FPy2Fux2FuPRfDB47HY8QcjOL6X0r3jCIXd46swG25dxeHtNBIWTh9+7K2RjvCDx5ewh8a/8hBjD31ly57LWsIcctXRUH/3M4a6W0ZIP0aMJGLoYJKaBwhQc/Mo5jnUah4KNE/FBGY0UcKjpqpOqtkYQbmGN0K9UoKWdEgVUM/oJ/Mg5dCXTefAAdPRs2rSoMVthirI0zJPXq0OZNS0rBp00ZOZkq6Z23JiMimmbRaLCaIa60/cr6jKyTViWlxzUhaBCQfUafE4HE8sSyvXXKPIoj6UOXKbMZTKFFjuQCojyYKlHsix4tCQddvhzKAB4iwGIAjmf+n3KrYw7QVVfbm/S1WFB7t/HFdj6+QZRAzfexM9F8aJS6pkNplHSLJVBHh+5+HhRIHDMw96k1cWzKrpYLav1nnG57BaBwQm/iR8PEtn9Q0O9vknCoOYIAqKBqApdJaqaar/bvXV7c81luIPCpsffXTz5u3b6TkU8k/wKXRWYXAUhf0TXJjOwqnbghvgyMwdf1iR//YfVhSCY014uvlEs22zzfQYetZ09PimaY02TQeDs4aeLZXQRKLlpAQxB8W6V5JsrG2YOD04eM0oXCNZCWmiSxFU9jVZTsBrGX83jAJk6KEMxChZH/wwk4Fr10sJS9odA8Z2y5akHoPM449nMi9lUPClDG4vtfLM70g36SUeuYwsIMvJF3n8OVyFUzOM0Mo+VRPaldRkKTykx1N8AXj7wQsBz+E89dthGm80q1F+d6XouS3gMmmgkEjA5TP88zMuB8RU988n+dGSz8HnIyJ4+x5RnCPIALLwR1GWxbMRffYv0PS3ec2zfb+1IENcxWX8/8Pl6Hr/ENJURNo/CG8KQoXGhBvEGFuOM3v4KnlR3imLPdFayNklC72CHIJ2Tr6OngpzFO+KLg/zVNvRJvMU1j6MLRDLngCNPFgS15FXYxc99KVyuZR/nEM65h8Pf24+0RVL+O/kE0kwYHGXkewKftxldkkXYJGCCSr4iWJ0yfQXkxNTuap/PEfdXFKxdf+dXDIRx3kUi0jwTBcWcxPz+t8o+KwEzypU7jJDm1/4X3aYpUkO68oCsgR7qLVkI76gWHbRql53Y5rDbZbi6cFDgE+SWK6mmpWaN5c6aNBmo8wlxWiQ8YoyTEVMfui8WLg7hPMZAt7J5NnGe2LrGq9C9wMrFkJ6QfMuA48vCArIfYdif5/TleJIjgmbBitJOm/Rtv9esby5kt7yhezMLPRM721w0Du9ZxfH2ZmZf2zhpS2+CLHU3drDkDza96Ule5TYt8aGqBCz4lklPZBYVE2O2cPVAYOymFu5NX7v3OvzV191frc4DsNWT8/0HsjezXFv7xURmmP19pZ7e/dGqFWnxlt1auDS9meuyXuYuum22p08iO4oq2RdN+sf4pBu8L9LNx680+wx79RMU4Oq1o02EuiHHYn1WXeW/134l+BkKFBBUfwnF9UkEy1YJjU8hc6sPB2dS2s845fDGiSF9QgJTIFYJlNSFHalMFopGbtjbW103R3f4qgycsdYu+Jgkfo5pPuSDIE9wtscM8sB/Sm0xTkaqYzW2vJYrY4Ztm3g72ZT+5ifF0GrV9xMX0CtdWO8zMC8bBbN/uJkaS+bNYc3fXaksGTYAJr8kPUTdMIfp0/JcYC47K9EfEYz4nFD+yBucJ4Rpw/6p6k3gqNHIil6g5Xnm/vHOKRXTdKt2F1BnyJdaDeutct4lUhZUtFr1hrJKlIup4odyu1QEsqhgZF6jd5cLPoPF8FMIHEzYtomft/GHRH6VJiQ9fgFEhJx/WLkwyjCdu+zqdXrNSarV6Qhr/GZ6uU0eb5NWTz3hq0x2tmzphYtOliaWrSCgWeOiUmRyfLrsim8hhktqVDs3WZ0ShxtlgbrF9etH504IYHAZEd5W6LCKcQKSJS2au4O+jJSGupyALPIleiDksMrabJZ5oWVtW5d4b3AbHjMwnYfT4/Z3+7HMXy/1OxWHZk6BueXLFm/3rr66nXrXtyf8wD6e/bnXKBut7pfUfar8MnDvdO8LAIAz1AeVvCfzmvM6veCQ7MQwhlwc76fm4YTKcu5/jOKQiVFmQ9e9hLsyXsl7z0NUsIO4krsoNaSm8lX8Vb5A7RGGDTtyoVW6e/cUTBbcm6K91UW3g0jMXRhQZRat6LwTpMDkXt9lCawIk6h+ztTeaW8NC1hf9K6FIVn4DfXcHt7ihDeSl8FzUbj7dJ0tKAngm5rE9yau0T/yxOKriu78MnWgB4SVU6qExq+m38cjvLBYClnTaFhaFd7knoJ6mQl3O0VvqZeSfOxDYqGHqfQ4xP8CA9Fuw2I0ZwJfjrw1/JZym7OOTL1iAd0S8f/dXzY1u6M0PqLmKde7eGyIx2QfhW3xiUocBNGfvll+ptWjHvYrV/Oo2m0HeWT8d7h9Q+HFrNE9hniR3Sv6/q3utBtXIKi0zFN11z3dxE6FyF6vA6QTWj+WeAE3na0iPEcengJ/4OPPk20zv3P9J0w/m8gt5C7yXf4bW8ub6jCaxs6UKoZlpJU+7NFXQj5xXo1unijF+Bj635XLdpRvmgvINnFetHmA5zX8KZ4EnefeqssTPKESX/mTBt+DU8mbDsRrE7Y1OqVBZjgjVGwA3ul7wW/TNjBe45hAVjGF7mYE5dxMUxQ08NJv0xYELwLaTtkUCt4Uxb+h89HENyLrRL2F7P582y6Z3KEDuMKG/gCGxLW7Zx5OQf7LMPZx0e6bbt7A195oRTHzXFrDpxfOOGUuBW80pkDfovAXT7ucAmRO/W8gJHfJGNkKVlDvoSxT8BFrUaa431LDj71HUmwedczB4otXEVBwOov8EtWGP/1MIrtkC5PoWsNoRO49amhjnWaVTaEBTf4WXfWXJkuAhTTdANi1uf/FhsAGDKz3Rv9nXTcf4jeFphV1QDo4fDfOMhyIP5rmzSCn1V5oCCpP1HlMcdHmE5/kuZlMR1BKDn+ydZWlWyhYemmqVsR3LjR/w84uFHXeiChZeEinNUPmjZGOl4/Wvii+3IOK36D9ybhh8PwRpzU6TCtzaWjeYpFDaZ2JMlWwuS6CK/M7e5i8cjX7//639VG1yNaWwM2Gvxmsis5tJe/AYIkm3pt9vcO1yCcEU4cm38HPG4q73LZdxUzOIO6RTWSsKe/8Ge2lcWITfpJncwJv7OUvUHA2xe/EEZh1DTxfshtFH2NCCMiGX3eaj875SZaEu/Nn+bTY0sTzo60/rnnroNiBv4TFb0yyMhCXpRCsBt9P8cvHzmMg90ztfRCR585ayqT7rrRBOPGIf/nmWIxQweH/I9EGQVggksEO6Y8fK/JtdK8SKD1feCCz+5j/I278A1NTAdmGbsxdp9/GM43/cN0j3/LOPXGkVobyf+ZPYJ6sXjf1s+/BDS4Wkz8lSTsbEVHcMPg8Moct9ONB58wmd2F1hCWgbxAhmWCwKiNhL8lfAZLp7/HoP0VY48IMQG2dnUFO5XYV0F+6il+7TqdsKzEabl15l+zR1kf+tL0T/kRt0VYE8v1qYXW4RWRkqPnBOHc0aPvx2IfKEl9WzLXDRN6skN1s77W8PtHj54LbtKT26LR3jbR6snupS+F3336oq/LU3rqzkmQ4MeoNSg5jN769qOH3hZib31//iqAVfMXrKR01V8XBwcXDA7Sl+Q3Nt30piy/edOmNx6m1y9cuAZgzcKF1y+FoYVD+E/4t/4j7FfsBjI79EGecurV0QZ2eCXs9LBdsl1MRYnw62cqzDiYkpDktkEr1KtoBSRr7NRBUb+wWhaFe2Jq7B5BklcFmvSIIDwiaciWkB1vsUETD8bggbbMwVjs4KVlYgdFDYJV0QD5fyJtOt8AAHicY2BkYGAAYu+uxoJ4fpuvDNwsDCBwp0/ND0H/X8LCwBwD5HIwMIFEAQ3oCUMAAHicY2BkYGBu+N/AEMOSxAAELAwMjAyoQB4AULcC6gAAeJxjYWBgYKEFTiKsBgAs4gDfAAAAAAAAADwAhgFIAfwCdALAAxQDkAPuBDAExgUqBcgGCgZeBqQG8gdKB7IIlgjyCbAKWAqwCyQLPAt+C7wL9gxMeJxjYGRgYJBnWMXAxQACTEDMBWb/B/MZAB0PAeoAAAB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxtT9lywyAQQ6kxjnvfd5Mf2I/CsJ0wxYbB2Gn/vjB9rV72kLSaFRvxh178jx02OEEDiRYKHbbocYoznOMCl7jCNW5wizvc4wGPeMIzXvCKN7zjAzvsRU/aWjIH562i+eiyOTSU9aBoWHIOU0tuikveFgmbryF8t5S0dUGWklnRtIwDJ0VL9EHbItOz0ZZTS3PUhlsywYck61Ruac8pN5TCsSPrVmerdWbPpiTkpKf5s27Yuhwq46tCFoZZki2BpXdjibXFUycT4o8iN8ZQ75ZXOoqJV8dHSWNYWYhfJs5MYQAA\")}.fc-icon{font-family:fc-icon!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-add-child:before{content:\"\\e789\"}.icon-switch:before{content:\"\\e77c\"}.icon-tab:before{content:\"\\e77b\"}.icon-button:before{content:\"\\e77e\"}.icon-input:before{content:\"\\e77f\"}.icon-checkbox:before{content:\"\\e780\"}.icon-radio:before{content:\"\\e781\"}.icon-rate:before{content:\"\\e782\"}.icon-number:before{content:\"\\e783\"}.icon-upload:before{content:\"\\e784\"}.icon-cascader:before{content:\"\\e785\"}.icon-space:before{content:\"\\e786\"}.icon-color:before{content:\"\\e787\"}.icon-span:before{content:\"\\e788\"}.icon-alert:before{content:\"\\e78a\"}.icon-row:before{content:\"\\e78b\"}.icon-divider:before{content:\"\\e78d\"}.icon-select:before{content:\"\\e78e\"}.icon-transfer:before{content:\"\\e78f\"}.icon-editor:before{content:\"\\e790\"}.icon-slider:before{content:\"\\e791\"}.icon-tree:before{content:\"\\e792\"}.icon-date:before{content:\"\\e793\"}.icon-time:before{content:\"\\e794\"}.icon-delete:before{content:\"\\e770\"}.icon-copy:before{content:\"\\e771\"}.icon-import:before{content:\"\\e773\"}.icon-add:before{content:\"\\e774\"}.icon-preview:before{content:\"\\e776\"}.icon-move:before{content:\"\\e777\"}";
  styleInject(css_248z);

  designerForm.component('draggable', draggable);
  designerForm.component('DragTool', __vue_component__$6);
  designerForm.component('DragBox', __vue_component__$2);
  designerForm.component('Validate', __vue_component__$3);
  designerForm.component('Struct', __vue_component__$5);
  designerForm.component('Fetch', __vue_component__$4);
  designerForm.component('Required', __vue_component__$1);
  designerForm.component('TableOptions', __vue_component__);
  designerForm.component('FcEditor', FcEditor);
  viewForm.component('FcEditor', FcEditor);
  designerForm.register('_fc', {
    init: function init(fc, rule) {
      rule._id = uniqueId();
      if (fc.repeat) { rule.field = uniqueId(); }

      if (fc.value) {
        rule.effect._fc = false;
      }
    }
  });
  designerForm.register('_fc_tool', {
    init: function init(_, rule) {
      rule.props.unique = uniqueId();
    }
  });

  __vue_component__$7.install = function (Vue) {
    Vue.component('FcDesigner', __vue_component__$7);
  };

  __vue_component__$7.makeOptionsRule = makeOptionsRule;

  exports.default = __vue_component__$7;
  exports.designerForm = designerForm;
  exports.formCreate = viewForm;

  Object.defineProperty(exports, '__esModule', { value: true });

})));