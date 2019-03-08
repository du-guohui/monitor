global.webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export $wuxActionSheet */
/* unused harmony export $wuxBackdrop */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return $wuxToast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return $wuxLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return $wuxDialog; });
/* unused harmony export $wuxToptips */
/* unused harmony export $wuxGallery */
/* unused harmony export $wuxNotification */
/* unused harmony export $wuxKeyBoard */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return $wuxSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return $wuxCalendar; });
/* unused harmony export $stopWuxRefresher */
// import $wuxCountDown from './countdown/index'
// import $wuxCountUp from './countup/index'

/**
 * 使用选择器选择组件实例节点，返回匹配到的第一个组件实例对象
 * @param {String} selector 节点选择器
 * @param {Object} ctx 页面栈或组件的实例，默认为当前页面栈实例
 */
const getCtx = (selector, ctx = getCurrentPages()[getCurrentPages().length - 1]) => {
    const componentCtx = ctx.selectComponent(selector)

    if (!componentCtx) {
        throw new Error('无法找到对应的组件，请按文档说明使用组件')
    }

    return componentCtx
}

const $wuxActionSheet = (selector = '#wux-actionsheet', ctx) => getCtx(selector, ctx)
const $wuxBackdrop = (selector = '#wux-backdrop', ctx) => getCtx(selector, ctx)
const $wuxToast = (selector = '#wux-toast', ctx) => getCtx(selector, ctx)
const $wuxLoading = (selector = '#wux-loading', ctx) => getCtx(selector, ctx)
const $wuxDialog = (selector = '#wux-dialog', ctx) => getCtx(selector, ctx)
const $wuxToptips = (selector = '#wux-toptips', ctx) => getCtx(selector, ctx)
const $wuxGallery = (selector = '#wux-gallery', ctx) => getCtx(selector, ctx)
const $wuxNotification = (selector = '#wux-notification', ctx) => getCtx(selector, ctx)
const $wuxKeyBoard = (selector = '#wux-keyboard', ctx) => getCtx(selector, ctx)
const $wuxSelect = (selector = '#wux-select', ctx) => getCtx(selector, ctx)
const $wuxCalendar = (selector = '#wux-calendar', ctx) => getCtx(selector, ctx)
const $stopWuxRefresher = (selector = '#wux-refresher', ctx) => getCtx(selector, ctx).finishPullToRefresh()



/***/ }),
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// fix env
try {
  if (!global) global = {};
  global.process = global.process || {};
  global.process.env = global.process.env || {};
  global.App = global.App || App;
  global.Page = global.Page || Page;
  global.Component = global.Component || Component;
  global.getApp = global.getApp || getApp;
} catch (e) {}

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

var _toString = Object.prototype.toString;

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(val);
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      return JSON.stringify(a) === JSON.stringify(b)
    } catch (e) {
      // possible circular reference
      return a === b
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated', 'onLaunch',
  'onLoad',
  'onShow',
  'onReady',
  'onHide',
  'onUnload',
  'onPullDownRefresh',
  'onReachBottom',
  'onShareAppMessage',
  'onPageScroll',
  'onTabItemTap'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

var warn = noop;

var formatComponentName = (null); // work around flow check

/*  */

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = ['mpvue-runtime'].join();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefix has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  // } else if (typeof MutationObserver !== 'undefined' && (
  //   isNative(MutationObserver) ||
  //   // PhantomJS and iOS 7.x
  //   MutationObserver.toString() === '[object MutationObserverConstructor]'
  // )) {
  //   // use MutationObserver where native Promise is not available,
  //   // e.g. PhantomJS IE11, iOS7, Android 4.4
  //   var counter = 1
  //   var observer = new MutationObserver(nextTickHandler)
  //   var textNode = document.createTextNode(String(counter))
  //   observer.observe(textNode, {
  //     characterData: true
  //   })
  //   timerFunc = () => {
  //     counter = (counter + 1) % 2
  //     textNode.data = String(counter)
  //   }
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) {
        try {
          cb.call(ctx);
        } catch (e) {
          handleError(e, ctx, 'nextTick');
        }
      } else if (_resolve) {
        _resolve(ctx);
      }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve, reject) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "production" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "production" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {}
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options) {
  var inject = options.inject;
  if (Array.isArray(inject)) {
    var normalized = options.inject = {};
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = inject[i];
    }
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var mark;
var measure;

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "production" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        (last).text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (comp.__esModule && comp.default) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "production" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && isDef(c.componentOptions)) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      child.data && child.data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;


function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listensers hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data && parentVnode.data.attrs;
  vm.$listeners = listeners;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "production" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function checkOptionType (vm, name) {
  var option = vm.$options[name];
  if (!isPlainObject(option)) {
    warn(
      ("component option \"" + name + "\" should be an object."),
      vm
    );
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "production" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (props && hasOwn(props, key)) {
      "production" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  "production" !== 'production' && checkOptionType(vm, 'computed');
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {}
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  "production" !== 'production' && checkOptionType(vm, 'methods');
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    
  }
}

function initWatch (vm, watch) {
  "production" !== 'production' && checkOptionType(vm, 'watch');
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (false) {
        warn(("Injection \"" + key + "\" not found"), vm);
      }
    }
    return result
  }
}

/*  */

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || {});
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    data: data,
    props: props,
    children: children,
    parent: context,
    listeners: data.on || {},
    injections: resolveInject(Ctor.options.inject, context),
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    vnode.functionalOptions = Ctor.options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // keep listeners
  var listeners = data.on;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "production" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && isUndef(child.ns)) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "production" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "production" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "production" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(ours, existing) : ours;
      }
    }
  }
  return data
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$vnode = vm.$options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs, null, true);
    defineReactive$$1(vm, '$listeners', parentData && parentData.on, null, true);
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
  Vue.prototype._g = bindObjectListeners;
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if (false
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp, Array];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, current, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        if (cachedNode !== current) {
          pruneCacheEntry(cachedNode);
        }
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, this._vnode, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, this._vnode, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.4.1';
Vue$3.mpvueVersion = '1.0.11';

/* globals renderer */



var isReservedTag = makeMap(
  'template,script,style,element,content,slot,link,meta,svg,view,' +
  'a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,' +
  'slider,slider-neighbor,indicator,trisition,trisition-group,canvas,' +
  'list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,' +
  'video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown',
  true
);

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// Elements that you can, intentionally, leave open (and which close themselves)
// more flexable than web
var canBeLeftOpenTag = makeMap(
  'web,spinner,switch,video,textarea,canvas,' +
  'indicator,marquee,countdown',
  true
);

var isUnaryTag = makeMap(
  'embed,img,image,input,link,meta',
  true
);

function mustUseProp () { /* console.log('mustUseProp') */ }
function getTagNamespace () { /* console.log('getTagNamespace') */ }
function isUnknownElement () { /* console.log('isUnknownElement') */ }



function getComKey (vm) {
  return vm && vm.$attrs ? vm.$attrs['mpcomid'] : '0'
}

// 用于小程序的 event type 到 web 的 event
var eventTypeMap = {
  tap: ['tap', 'click'],
  touchstart: ['touchstart'],
  touchmove: ['touchmove'],
  touchcancel: ['touchcancel'],
  touchend: ['touchend'],
  longtap: ['longtap'],
  input: ['input'],
  blur: ['change', 'blur'],
  submit: ['submit'],
  focus: ['focus'],
  scrolltoupper: ['scrolltoupper'],
  scrolltolower: ['scrolltolower'],
  scroll: ['scroll']
};

/*  */

// import { namespaceMap } from 'mp/util/index'

var obj = {};

function createElement$1 (tagName, vnode) {
  return obj
}

function createElementNS (namespace, tagName) {
  return obj
}

function createTextNode (text) {
  return obj
}

function createComment (text) {
  return obj
}

function insertBefore (parentNode, newNode, referenceNode) {}

function removeChild (node, child) {}

function appendChild (node, child) {}

function parentNode (node) {
  return obj
}

function nextSibling (node) {
  return obj
}

function tagName (node) {
  return 'div'
}

function setTextContent (node, text) {
  return obj
}

function setAttribute (node, key, val) {
  return obj
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (false) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (false
            ) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {}
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

// import baseModules from 'core/vdom/modules/index'
// const platformModules = []
// import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
// const modules = platformModules.concat(baseModules)
var modules = [ref];

var corePatch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

function patch () {
  corePatch.apply(this, arguments);
  this.$updateDataToMP();
}

function callHook$1 (vm, hook, params) {
  var handlers = vm.$options[hook];
  if (hook === 'onError' && handlers) {
    handlers = [handlers];
  }

  var ret;
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        ret = handlers[i].call(vm, params);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  // for child
  if (vm.$children.length) {
    vm.$children.forEach(function (v) { return callHook$1(v, hook, params); });
  }

  return ret
}

// mpType 小程序实例的类型，可能的值是 'app', 'page'
// rootVueVM 是 vue 的根组件实例，子组件中访问 this.$root 可得
function getGlobalData (app, rootVueVM) {
  var mp = rootVueVM.$mp;
  if (app && app.globalData) {
    mp.appOptions = app.globalData.appOptions;
  }
}

/**
 * 格式化 properties 属性，并给每个属性加上 observer 方法
 */
function normalizeProperties (vm) {
  var properties = vm.$options.properties || {};
  var res = {};
  var val;
  var loop = function ( key ) {
    val = isPlainObject(properties[key])
      ? properties[key]
      : { type: properties[key] };
    res[key] = {
      type: val.type,
      value: val.value,
      observer: function observer (newVal, oldVal) {
        vm[key] = newVal; // 先修改值再触发原始的 observer，跟 watch 行为保持一致
        if (typeof val.observer === 'function') {
          val.observer.call(vm, newVal, oldVal);
        }
      }
    };
  };

  for (var key in properties) loop( key );
  return res
}

/**
 * 把 properties 中的属性 proxy 到 vm 上
 */
function initMpProps (vm) {
  var mpProps = vm._mpProps = {};
  var keys = Object.keys(vm.$options.properties || {});
  keys.forEach(function (key) {
    if (!(key in vm)) {
      proxy(vm, '_mpProps', key);
      mpProps[key] = undefined; // for observe
    }
  });
  observe(mpProps, true);
}

function initMP (mpType, next) {
  var rootVueVM = this.$root;
  if (!rootVueVM.$mp) {
    rootVueVM.$mp = {};
  }

  var mp = rootVueVM.$mp;

  // Please do not register multiple Pages
  // if (mp.registered) {
  if (mp.status) {
    // 处理子组件的小程序生命周期
    if (mpType === 'app') {
      callHook$1(this, 'onLaunch', mp.appOptions);
    } else {
      callHook$1(this, 'onLoad', mp.query);
      callHook$1(this, 'onReady');
    }
    return next()
  }
  // mp.registered = true

  mp.mpType = mpType;
  mp.status = 'register';

  if (mpType === 'app') {
    global.App({
      // 页面的初始数据
      globalData: {
        appOptions: {}
      },

      handleProxy: function handleProxy (e) {
        return rootVueVM.$handleProxyWithVue(e)
      },

      // Do something initial when launch.
      onLaunch: function onLaunch (options) {
        if ( options === void 0 ) options = {};

        mp.app = this;
        mp.status = 'launch';
        this.globalData.appOptions = mp.appOptions = options;
        callHook$1(rootVueVM, 'onLaunch', options);
        next();
      },

      // Do something when app show.
      onShow: function onShow (options) {
        if ( options === void 0 ) options = {};

        mp.status = 'show';
        this.globalData.appOptions = mp.appOptions = options;
        callHook$1(rootVueVM, 'onShow', options);
      },

      // Do something when app hide.
      onHide: function onHide () {
        mp.status = 'hide';
        callHook$1(rootVueVM, 'onHide');
      },

      onError: function onError (err) {
        callHook$1(rootVueVM, 'onError', err);
      }
    });
  } else if (mpType === 'component') {
    initMpProps(rootVueVM);

    global.Component({
      // 小程序原生的组件属性
      properties: normalizeProperties(rootVueVM),
      // 页面的初始数据
      data: {
        $root: {}
      },
      methods: {
        handleProxy: function handleProxy (e) {
          return rootVueVM.$handleProxyWithVue(e)
        }
      },
      // mp lifecycle for vue
      // 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData
      created: function created () {
        mp.status = 'created';
        mp.page = this;
      },
      // 组件生命周期函数，在组件实例进入页面节点树时执行
      attached: function attached () {
        mp.status = 'attached';
        callHook$1(rootVueVM, 'attached');
      },
      // 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息（使用 SelectorQuery ）
      ready: function ready () {
        mp.status = 'ready';

        callHook$1(rootVueVM, 'onReady');
        next();

        // 只有页面需要 setData
        rootVueVM.$nextTick(function () {
          rootVueVM._initDataToMP();
        });
      },
      // 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行
      moved: function moved () {
        callHook$1(rootVueVM, 'moved');
      },
      // 组件生命周期函数，在组件实例被从页面节点树移除时执行
      detached: function detached () {
        mp.status = 'detached';
        callHook$1(rootVueVM, 'detached');
      }
    });
  } else {
    var app = global.getApp();
    global.Page({
      // 页面的初始数据
      data: {
        $root: {}
      },

      handleProxy: function handleProxy (e) {
        return rootVueVM.$handleProxyWithVue(e)
      },

      // mp lifecycle for vue
      // 生命周期函数--监听页面加载
      onLoad: function onLoad (query) {
        mp.page = this;
        mp.query = query;
        mp.status = 'load';
        getGlobalData(app, rootVueVM);
        callHook$1(rootVueVM, 'onLoad', query);
      },

      // 生命周期函数--监听页面显示
      onShow: function onShow () {
        mp.page = this;
        mp.status = 'show';
        callHook$1(rootVueVM, 'onShow');

        // 只有页面需要 setData
        rootVueVM.$nextTick(function () {
          rootVueVM._initDataToMP();
        });
      },

      // 生命周期函数--监听页面初次渲染完成
      onReady: function onReady () {
        mp.status = 'ready';

        callHook$1(rootVueVM, 'onReady');
        next();
      },

      // 生命周期函数--监听页面隐藏
      onHide: function onHide () {
        mp.status = 'hide';
        callHook$1(rootVueVM, 'onHide');
        mp.page = null;
      },

      // 生命周期函数--监听页面卸载
      onUnload: function onUnload () {
        mp.status = 'unload';
        callHook$1(rootVueVM, 'onUnload');
        mp.page = null;
      },

      // 页面相关事件处理函数--监听用户下拉动作
      onPullDownRefresh: function onPullDownRefresh () {
        callHook$1(rootVueVM, 'onPullDownRefresh');
      },

      // 页面上拉触底事件的处理函数
      onReachBottom: function onReachBottom () {
        callHook$1(rootVueVM, 'onReachBottom');
      },

      // 用户点击右上角分享
      onShareAppMessage: rootVueVM.$options.onShareAppMessage
        ? function (options) { return callHook$1(rootVueVM, 'onShareAppMessage', options); } : null,

      // Do something when page scroll
      onPageScroll: function onPageScroll (options) {
        callHook$1(rootVueVM, 'onPageScroll', options);
      },

      // 当前是 tab 页时，点击 tab 时触发
      onTabItemTap: function onTabItemTap (options) {
        callHook$1(rootVueVM, 'onTabItemTap', options);
      }
    });
  }
}

// 节流方法，性能优化
// 全局的命名约定，为了节省编译的包大小一律采取形象的缩写，说明如下。
// $c === $child
// $k === $comKey

// 新型的被拍平的数据结构
// {
//   $root: {
//     '1-1'{
//       // ... data
//     },
//     '1.2-1': {
//       // ... data1
//     },
//     '1.2-2': {
//       // ... data2
//     }
//   }
// }

function getVmData (vm) {
  // 确保当前 vm 所有数据被同步
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._props || {}),
    Object.keys(vm._mpProps || {}),
    Object.keys(vm._computedWatchers || {})
  );
  return dataKeys.reduce(function (res, key) {
    res[key] = vm[key];
    return res
  }, {})
}

function getParentComKey (vm, res) {
  if ( res === void 0 ) res = [];

  var ref = vm || {};
  var $parent = ref.$parent;
  if (!$parent) { return res }
  res.unshift(getComKey($parent));
  if ($parent.$parent) {
    return getParentComKey($parent, res)
  }
  return res
}

function formatVmData (vm) {
  var $p = getParentComKey(vm).join(',');
  var $k = $p + ($p ? ',' : '') + getComKey(vm);

  // getVmData 这儿获取当前组件内的所有数据，包含 props、computed 的数据
  // 改动 vue.runtime 所获的的核心能力
  var data = Object.assign(getVmData(vm), { $k: $k, $kk: ($k + ","), $p: $p });
  var key = '$root.' + $k;
  var res = {};
  res[key] = data;
  return res
}

function collectVmData (vm, res) {
  if ( res === void 0 ) res = {};

  var vms = vm.$children;
  if (vms && vms.length) {
    vms.forEach(function (v) { return collectVmData(v, res); });
  }
  return Object.assign(res, formatVmData(vm))
}

/**
 * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait
 * 自动合并 data
 *
 * @param  {function}   func      传入函数
 * @param  {number}     wait      表示时间窗口的间隔
 * @param  {object}     options   如果想忽略开始边界上的调用，传入{leading: false}。
 *                                如果想忽略结尾边界上的调用，传入{trailing: false}
 * @return {function}             返回客户调用函数
 */
function throttle (func, wait, options) {
  var context, args, result;
  var timeout = null;
  // 上次执行时间点
  var previous = 0;
  if (!options) { options = {}; }
  // 延迟执行函数
  function later () {
    // 若设定了开始边界不执行选项，上次执行时间始终为0
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) { context = args = null; }
  }
  return function (handle, data) {
    var now = Date.now();
    // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。
    if (!previous && options.leading === false) { previous = now; }
    // 延迟执行时间间隔
    var remaining = wait - (now - previous);
    context = this;
    args = args ? [handle, Object.assign(args[1], data)] : [handle, data];
    // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口
    // remaining大于时间窗口wait，表示客户端系统时间被调整过
    if (remaining <= 0 || remaining > wait) {
      clearTimeout(timeout);
      timeout = null;
      previous = now;
      result = func.apply(context, args);
      if (!timeout) { context = args = null; }
    // 如果延迟执行不存在，且没有设定结尾边界不执行选项
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result
  }
}

// 优化频繁的 setData: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html
var throttleSetData = throttle(function (handle, data) {
  handle(data);
}, 50);

function getPage (vm) {
  var rootVueVM = vm.$root;
  var ref = rootVueVM.$mp || {};
  var mpType = ref.mpType; if ( mpType === void 0 ) mpType = '';
  var page = ref.page;

  // 优化后台态页面进行 setData: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html
  if (mpType === 'app' || !page || typeof page.setData !== 'function') {
    return
  }
  return page
}

// 优化每次 setData 都传递大量新数据
function updateDataToMP () {
  var page = getPage(this);
  if (!page) {
    return
  }

  var data = formatVmData(this);
  throttleSetData(page.setData.bind(page), data);
}

function initDataToMP () {
  var page = getPage(this);
  if (!page) {
    return
  }

  var data = collectVmData(this.$root);
  page.setData(data);
}

function getVM (vm, comkeys) {
  if ( comkeys === void 0 ) comkeys = [];

  var keys = comkeys.slice(1);
  if (!keys.length) { return vm }

  return keys.reduce(function (res, key) {
    var len = res.$children.length;
    for (var i = 0; i < len; i++) {
      var v = res.$children[i];
      var k = getComKey(v);
      if (k === key) {
        res = v;
        return res
      }
    }
    return res
  }, vm)
}

function getHandle (vnode, eventid, eventTypes) {
  if ( eventTypes === void 0 ) eventTypes = [];

  var res = [];
  if (!vnode || !vnode.tag) {
    return res
  }

  var ref = vnode || {};
  var data = ref.data; if ( data === void 0 ) data = {};
  var children = ref.children; if ( children === void 0 ) children = [];
  var componentInstance = ref.componentInstance;
  if (componentInstance) {
    // 增加 slot 情况的处理
    // Object.values 会多增加几行编译后的代码
    Object.keys(componentInstance.$slots).forEach(function (slotKey) {
      var slot = componentInstance.$slots[slotKey];
      var slots = Array.isArray(slot) ? slot : [slot];
      slots.forEach(function (node) {
        res = res.concat(getHandle(node, eventid, eventTypes));
      });
    });
  } else {
    // 避免遍历超出当前组件的 vm
    children.forEach(function (node) {
      res = res.concat(getHandle(node, eventid, eventTypes));
    });
  }

  var attrs = data.attrs;
  var on = data.on;
  if (attrs && on && attrs['eventid'] === eventid) {
    eventTypes.forEach(function (et) {
      var h = on[et];
      if (typeof h === 'function') {
        res.push(h);
      } else if (Array.isArray(h)) {
        res = res.concat(h);
      }
    });
    return res
  }

  return res
}

function getWebEventByMP (e) {
  var type = e.type;
  var timeStamp = e.timeStamp;
  var touches = e.touches;
  var detail = e.detail; if ( detail === void 0 ) detail = {};
  var target = e.target; if ( target === void 0 ) target = {};
  var currentTarget = e.currentTarget; if ( currentTarget === void 0 ) currentTarget = {};
  var x = detail.x;
  var y = detail.y;
  var event = {
    mp: e,
    type: type,
    timeStamp: timeStamp,
    x: x,
    y: y,
    target: Object.assign({}, target, detail),
    currentTarget: currentTarget,
    stopPropagation: noop,
    preventDefault: noop
  };

  if (touches && touches.length) {
    Object.assign(event, touches[0]);
    event.touches = touches;
  }
  return event
}

function handleProxyWithVue (e) {
  var rootVueVM = this.$root;
  var type = e.type;
  var target = e.target; if ( target === void 0 ) target = {};
  var currentTarget = e.currentTarget;
  var ref = currentTarget || target;
  var dataset = ref.dataset; if ( dataset === void 0 ) dataset = {};
  var comkey = dataset.comkey; if ( comkey === void 0 ) comkey = '';
  var eventid = dataset.eventid;
  var vm = getVM(rootVueVM, comkey.split(','));

  if (!vm) {
    return
  }

  var webEventTypes = eventTypeMap[type] || [type];
  var handles = getHandle(vm._vnode, eventid, webEventTypes);

  // TODO, enevt 还需要处理更多
  // https://developer.mozilla.org/zh-CN/docs/Web/API/Event
  if (handles.length) {
    var event = getWebEventByMP(e);
    if (handles.length === 1) {
      var result = handles[0](event);
      return result
    }
    handles.forEach(function (h) { return h(event); });
  } else {
    // TODO, 在初始化时进行判断或直接使用 vue 本身的错误提示
    var ref$1 = rootVueVM.$mp.page;
    var route = ref$1.route;
    console.group(new Date() + ' 事件警告');
    console.warn(("Do not have handler in current page: " + route + ". Please make sure that handler has been defined in " + route + ", or not use handler with 'v-if'"));
    console.groupEnd();
  }
}

// for platforms
// import config from 'core/config'
// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform patch function
Vue$3.prototype.__patch__ = patch;

// public mount method
Vue$3.prototype.$mount = function (el, hydrating) {
  var this$1 = this;

  // el = el && inBrowser ? query(el) : undefined
  // return mountComponent(this, el, hydrating)

  // 初始化小程序生命周期相关
  var options = this.$options;

  if (options && (options.render || options.mpType)) {
    var mpType = options.mpType; if ( mpType === void 0 ) mpType = 'page';
    return this._initMP(mpType, function () {
      return mountComponent(this$1, undefined, undefined)
    })
  } else {
    return mountComponent(this, undefined, undefined)
  }
};

// for mp
Vue$3.prototype._initMP = initMP;

Vue$3.prototype.$updateDataToMP = updateDataToMP;
Vue$3.prototype._initDataToMP = initDataToMP;

Vue$3.prototype.$handleProxyWithVue = handleProxyWithVue;

/*  */

return Vue$3;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(33);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _Vue */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var stringifyPrimitive = function stringifyPrimitive(v) {
  switch (typeof v === 'undefined' ? 'undefined' : _typeof(v)) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

function stringify(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
    return Object.keys(obj).map(function (k) {
      var ks = stringifyPrimitive(k) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function (v) {
          return ks + stringifyPrimitive(v);
        }).join(sep);
      } else {
        return ks + stringifyPrimitive(obj[k]);
      }
    }).filter(Boolean).join(sep);
  }

  if (!name) return '';
  return stringifyPrimitive(name) + eq + stringifyPrimitive(obj);
}

function parseUrl(location) {
  if (typeof location === 'string') return location;

  var path = location.path,
      query = location.query;

  var queryStr = stringify(query);

  if (!queryStr) {
    return path;
  }

  return path + '?' + queryStr;
}

function parseRoute($mp) {
  var _$mp = $mp || {};
  var path = _$mp.page && _$mp.page.route;
  return {
    path: '/' + path,
    params: {},
    query: _$mp.query,
    hash: '',
    fullPath: parseUrl({
      path: '/' + path,
      query: _$mp.query
    }),
    name: path && path.replace(/\/(\w)/g, function ($0, $1) {
      return $1.toUpperCase();
    })
  };
}

function push(location, complete, fail, success) {
  var url = parseUrl(location);
  var params = { url: url, complete: complete, fail: fail, success: success };

  if (location.isTab) {
    wx.switchTab(params);
    return;
  }
  if (location.reLaunch) {
    wx.reLaunch(params);
    return;
  }
  wx.navigateTo(params);
}

function replace(location, complete, fail, success) {
  var url = parseUrl(location);
  wx.redirectTo({ url: url, complete: complete, fail: fail, success: success });
}

function go(delta) {
  wx.navigateBack({ delta: delta });
}

function back() {
  wx.navigateBack();
}

var _Vue = void 0;

var index = {
  install: function install(Vue) {
    if (this.installed && _Vue === Vue) return;
    this.installed = true;

    _Vue = Vue;

    var _router = {
      mode: 'history',
      push: push,
      replace: replace,
      go: go,
      back: back
    };

    Vue.mixin({
      onLoad: function onLoad() {
        var $mp = this.$root.$mp;

        this._route = parseRoute($mp);
      },
      onShow: function onShow() {
        _router.app = this;
        _router.currentRoute = this._route;
      }
    });

    Object.defineProperty(Vue.prototype, '$router', {
      get: function get() {
        return _router;
      }
    });

    Object.defineProperty(Vue.prototype, '$route', {
      get: function get() {
        return this._route;
      }
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = (index);



/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index__ = __webpack_require__(27);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_3_vuex__["a" /* default */].Store({
    state: {
        Loading: false,
        Login: false,
        GatewayList: [],
        Data: {
            Gateway: [],
            Alarm: [],
            Device: [],
            DeviceOl: 0,
            DeviceLength: ''
        }
    },
    mutations: {
        Login: function Login(state) {
            state.Login = true;
        },
        Update: function Update(state, data) {
            var updata = JSON.parse(data);
            if (updata.msg_type == 'device_data') {
                var _data = state.Data.Device;
                for (var i in _data) {
                    var list2 = _data[i].device_list;
                    for (var s in list2) {
                        if (list2[s].devEui == updata.content.devEui) {
                            var news = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(state.Data.Device[i].device_list[s], updata.content);
                            state.Data.Device[i].device_list[s] = news;
                            if (state.Data.Device[i].device_list[s].sht30) {
                                state.Data.Device[i].device_list[s].temperature = state.Data.Device[i].device_list[s].sht30;
                            }
                            state.Data.Device[i].device_list[s].last_upload_date = Number(new Date());
                            state.Data.Device[i].device_list[s].last_upload_date2 = '\u521A\u521A\u66F4\u65B0';
                        }
                    }
                }
            } else if (updata.msg_type == 'alarm_list') {
                var res = updata.content;
                for (var _i in res) {
                    state.Data.Alarm.unshift(res[_i]);
                    state.Data.Alarm[_i].created_at = Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["e" /* Time */])(res[_i].created_at);
                    state.Data.Alarm[_i].created_at2 = Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["f" /* Time2 */])(res[_i].created_at);
                    state.Data.Alarm[_i].updated_at = Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["e" /* Time */])(res[_i].updated_at);
                    if (!state.Data.Alarm[_i].is_recovered && state.Data.Alarm[_i].type == 'offline') {
                        var list = state.Data.Device;
                        for (var _s in list) {
                            var _list = list[_s].device_list;
                            for (var z in _list) {
                                if (state.Data.Alarm[_i].device.devEui == _list[z].devEui) {
                                    if (state.Data.Device[_s].device_list[z].unrecovered_count) {
                                        state.Data.Device[_s].device_list[z].unrecovered_count = state.Data.Device[_s].device_list[z].unrecovered_count + 1;
                                    } else {
                                        state.Data.Device[_s].device_list[z].unrecovered_count = 1;
                                    }
                                    state.Data.Device[_s].device_list[z].last_upload_date2 = '';
                                    state.Data.Device[_s].group.ol = state.Data.Device[_s].group.ol - 1;
                                    state.Data.Device[_s].device_list[z].temperature = '';
                                    state.Data.Device[_s].device_list[z].light = '';
                                    state.Data.Device[_s].device_list[z].humidity = '';
                                }
                            }
                        }
                    }
                }
                state.Data.Alarm.filter(function (item) {
                    return !item.is_recovered;
                }).length > '0' ? wx.showTabBarRedDot({ index: 0 }) : wx.hideTabBarRedDot({ index: 0 });
                state.Data.Alarm.filter(function (item) {
                    return !item.is_recovered;
                }).length > '0' ? wx.setTabBarBadge({ index: 0, text: state.Data.Alarm.filter(function (item) {
                        return !item.is_recovered;
                    }).length.toString() }) : wx.removeTabBarBadge({ index: 0 });
                wx.vibrateLong();
            }
        },
        DeviceList: function DeviceList(state, app) {
            function Group(list, i) {
                state.Data.Device[i].group.ol = list.filter(function (item) {
                    return item.last_upload_date != '';
                }).length;
                state.Data.DeviceOl = Number(state.Data.Device[i].group.ol) + state.Data.DeviceOl;
                state.Data.Device[i].group.err = 0;
                for (var s in list) {
                    var num = Number(new Date()) - Number(list[s].last_upload_date);
                    if (num < 60 * 60 * 1000) {
                        var now = new Date(num);
                        var minute = now.getMinutes();
                        if (minute == '0') {
                            state.Data.Device[i].device_list[s].last_upload_date2 = '\u521A\u521A\u66F4\u65B0';
                        } else {
                            state.Data.Device[i].device_list[s].last_upload_date2 = '\u66F4\u65B0\u4E8E' + minute + '\u5206\u949F\u524D';
                        }
                    }
                    if (state.Data.Device[i].device_list[s].sht30) {
                        state.Data.Device[i].device_list[s].temperature = state.Data.Device[i].device_list[s].sht30;
                    }
                    if (state.Data.Device[i].device_list[s].unrecovered_count) {
                        state.Data.Device[i].group.err = state.Data.Device[i].group.err + state.Data.Device[i].device_list[s].unrecovered_count;
                    }
                    state.Data.DeviceLength = Number(state.Data.DeviceLength) + 1;
                }
            }
            state.Loading = true;
            app.ajax("device/getDeviceListPacketByGroup", { no_fake: true }).then(function (res) {
                state.Data.DeviceOl = 0;
                state.Data.Device = res;
                for (var i in res) {
                    Group(res[i].device_list, i);
                }
                for (var s in state.Data.Device) {
                    if (state.Data.Device[s].group.is_default) {
                        var _ref = [state.Data.Device[0], state.Data.Device[s]];
                        state.Data.Device[s] = _ref[0];
                        state.Data.Device[0] = _ref[1];
                    }
                }
                if (state.Data.DeviceLength == '') {
                    state.Data.DeviceLength = 0;
                }
                state.Loading = false;
                store.commit("AlarmList", app);
            });
        },
        AlarmList: function AlarmList(state, app) {
            state.Loading = true;
            app.ajax("alarm/alarm/").then(function (res) {
                state.Data.Alarm = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(res));
                for (var i in res) {
                    state.Data.Alarm[i].created_at = Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["e" /* Time */])(res[i].created_at);
                    state.Data.Alarm[i].created_at2 = Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["f" /* Time2 */])(res[i].created_at);
                    state.Data.Alarm[i].updated_at = Object(__WEBPACK_IMPORTED_MODULE_4__utils_index__["e" /* Time */])(res[i].updated_at);
                }
                state.Data.Alarm.filter(function (item) {
                    return !item.is_recovered;
                }).length > '0' ? wx.showTabBarRedDot({ index: 0 }) : wx.hideTabBarRedDot({ index: 0 });
                state.Data.Alarm.filter(function (item) {
                    return !item.is_recovered;
                }).length > '0' ? wx.setTabBarBadge({ index: 0, text: state.Data.Alarm.filter(function (item) {
                        return !item.is_recovered;
                    }).length.toString() }) : wx.removeTabBarBadge({ index: 0 });
                state.Loading = false;
            });
        },
        GatewayList: function GatewayList(state, app) {
            state.Loading = true;
            app.ajax("device/getGatewayList").then(function (res) {
                state.Data.Gateway = res.content;
                state.Loading = false;
            });
        }
    }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(40)('wks');
var uid = __webpack_require__(30);
var Symbol = __webpack_require__(7).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(50);
var toPrimitive = __webpack_require__(35);
var dP = Object.defineProperty;

exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var core = __webpack_require__(9);
var ctx = __webpack_require__(20);
var hide = __webpack_require__(15);
var has = __webpack_require__(17);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(22);
module.exports = __webpack_require__(14) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(98), __esModule: true };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(52);
var defined = __webpack_require__(36);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(28);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
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
/* 21 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Special */
/* harmony export (immutable) */ __webpack_exports__["d"] = QRCode;
/* harmony export (immutable) */ __webpack_exports__["g"] = formatDate;
/* harmony export (immutable) */ __webpack_exports__["c"] = ListCh;
/* harmony export (immutable) */ __webpack_exports__["b"] = GatewayCh;
/* harmony export (immutable) */ __webpack_exports__["a"] = ChartData;
/* unused harmony export ChartList */
/* unused harmony export ResType */
/* harmony export (immutable) */ __webpack_exports__["e"] = Time;
/* harmony export (immutable) */ __webpack_exports__["f"] = Time2;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_util__);


function Special(val) {
  // 去掉特殊字符
  val = val.replace(/[\'\"\\\/\b\f\n\r\t\ \  \  ]/g, '');
  val = val.replace(/[\@\#\$\%\^\&\*\(\)\{\}\:\"\L\<\>\?\[\]]/);
  return val;
}

function QRCode(data) {

  function Ven(url) {
    //  验证devEui长度是否为16或32；
    if (url.length == '16' || url.length == '32') {
      return true;
    } else {
      return false;
    }
  }

  if (data.indexOf("gatewayId") != -1) {
    // 网关
    return data;
  } else if (data.indexOf("&") != -1) {
    // 新二维码解析
    var str = data.split("&");
    var list = new Array();
    var devEui = false;
    for (var i in str) {
      // if (str[i].indexOf("null") != -1 || str[i].indexOf("undefined") != -1) {
      if (str[i].indexOf("null") != -1) {} else {
        // 参数空值去除
        if (str[i].split("=")[1] != '') {
          // if (str[i].indexOf("devEui=") != -1 || str[i].indexOf(("deveui").toLowerCase()) != -1) {
          if (str[i].indexOf("devEui=") != -1) {
            devEui = Ven(Special(str[i].split('=')[1]));
          }
          list.push(Special(str[i]));
        }
      }
    }
    return devEui ? list.join("&") : false;
  } else {
    // 旧二维码解析
    var _str = data.split(/[\n	 ]/);
    if (_str.length == '2') {
      //二维码只有换行或空格符
      var appKey = Special(_str[0]);
      var _devEui = Special(_str[1]);
      return Ven(_devEui) ? 'appKey=' + appKey + '&devEui=' + _devEui : false;
    } else if (_str.length > '2') {
      //二维码appKey后面是空格，devEui里面有不规则字符,重组devEui
      var deveui = new Array();
      for (var _i in _str) {
        if (_i > '0') {
          deveui.push(Special(_str[_i]));
        }
      }
      return Ven(deveui.join("")) ? 'appKey=' + _str[0] + '&devEui=' + deveui.join("") : false;
    } else {
      // 都不符合匹配规则跳出
      return false;
    }
  }
}

function formatDate(now) {
  function Completion(s) {
    return s < 10 ? '0' + s : s;
  }
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  return Completion(year) + '-' + Completion(month) + "-" + Completion(date) + " " + Completion(hour) + ":" + Completion(minute) + ":" + Completion(second);
}

function ListCh(data, url) {
  //验证设备是否已添加
  var code = true;
  var key = url.split("&");
  var keys = '';
  for (var i in key) {
    if (key[i].split("=")[0] == 'devEui') {
      keys = key[i].split("=")[1];
    }
  }
  if (keys) {
    for (var s in data) {
      for (var z in data[s].device_list) {
        if (keys == data[s].device_list[z].devEui) {
          return false;
        }
      }
    }
    return code;
  }
}

function GatewayCh(data, url) {
  //验证网关是否已添加
  var code = true;
  var key = url.split("=");
  return data.filter(function (item) {
    return item.mac == key[1];
  }).length == "0";
}

function ChartData(val, time, name) {
  var temperature = val.temperature,
      sht30 = val.sht30,
      humidity = val.humidity,
      light = val.light;

  var arr1 = ChartList(ResType(temperature ? temperature : sht30), time, 'temperature', name);
  var arr2 = ChartList(ResType(humidity ? humidity : ''), time, 'humidity', name);
  var arr3 = ChartList(ResType(light ? light : ''), time, 'light', name);
  var data = arr1.concat(arr2, arr3);
  return data;
}

function ChartList(val, time, type, name) {
  function Filter(data) {
    for (var i in data) {
      if (data[i].value == '') {
        delete data[i].value;
      }
    }
    return data;
  }
  var data = [{
    time: formatDate(new Date(Number(time))),
    value: val[0],
    types: type,
    type: name,
    res: 'avg'
  }, {
    time: formatDate(new Date(Number(time))),
    value: val[1],
    types: type,
    type: name,
    res: 'min'
  }, {
    time: formatDate(new Date(Number(time))),
    value: val[2],
    types: type,
    type: name,
    res: 'max'
  }];
  return Filter(data);
}

function ResType(val) {
  var avg = val.avg,
      min = val.min,
      max = val.max;

  var data = [avg ? avg : "", min ? min : "", max ? max : ""];
  return data;
}

function Time(data) {
  function Completion(s) {
    return s < 10 ? '0' + s : s;
  }
  var date = new Date(Number(new Date(data)) - (wx.getStorageSync("Info") == 'ios' ? Number(8 * 60 * 60 * 1000) : 0));
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  var currentDate = Completion(month) + "-" + Completion(strDate) + " " + Completion(date.getHours()) + ":" + Completion(date.getMinutes());
  return currentDate;
}

function Time2(data) {
  var date = new Date(data);
  return Number(new Date(date)) - (wx.getStorageSync("Info") == 'ios' ? Number(8 * 60 * 60 * 1000) : 0);
}

/* unused harmony default export */ var _unused_webpack_default_export = ({
  QRCode: QRCode,
  Special: Special,
  formatDate: formatDate,
  ListCh: ListCh,
  ChartData: ChartData,
  ResType: ResType,
  Time: Time,
  Time2: Time2,
  GatewayCh: GatewayCh
});

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(51);
var enumBugKeys = __webpack_require__(41);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(10)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(72), __esModule: true };

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16);
var document = __webpack_require__(7).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(16);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(38);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(40)('keys');
var uid = __webpack_require__(30);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(9);
var global = __webpack_require__(7);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(24) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 41 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(36);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(78)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(54)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(28);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_mpvue_cropper_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_3467e155_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_mpvue_cropper_vue__ = __webpack_require__(135);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_mpvue_loader_lib_selector_type_script_index_0_mpvue_cropper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__mpvue_loader_lib_template_compiler_index_id_data_v_3467e155_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_mpvue_loader_lib_selector_type_template_index_0_mpvue_cropper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "node_modules\\mpvue-cropper\\mpvue-cropper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mpvue-cropper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3467e155", Component.options)
  } else {
    hotAPI.reload("data-v-3467e155", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(10);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var core = __webpack_require__(9);
var LIBRARY = __webpack_require__(24);
var wksExt = __webpack_require__(47);
var defineProperty = __webpack_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(191);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(21)(function () {
  return Object.defineProperty(__webpack_require__(34)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(19);
var arrayIndexOf = __webpack_require__(75)(false);
var IE_PROTO = __webpack_require__(39)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(23);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {



/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(55);
var hide = __webpack_require__(15);
var Iterators = __webpack_require__(25);
var $iterCreate = __webpack_require__(79);
var setToStringTag = __webpack_require__(32);
var getPrototypeOf = __webpack_require__(81);
var ITERATOR = __webpack_require__(10)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
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
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
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
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(80);
var enumBugKeys = __webpack_require__(41);
var IE_PROTO = __webpack_require__(39)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(34)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(57).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
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
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(7).document;
module.exports = document && document.documentElement;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(82);
var global = __webpack_require__(7);
var hide = __webpack_require__(15);
var Iterators = __webpack_require__(25);
var TO_STRING_TAG = __webpack_require__(10)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(23);
var TAG = __webpack_require__(10)('toStringTag');
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(25);
var ITERATOR = __webpack_require__(10)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(59);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(25);
module.exports = __webpack_require__(9).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(13);
var aFunction = __webpack_require__(28);
var SPECIES = __webpack_require__(10)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(20);
var invoke = __webpack_require__(88);
var html = __webpack_require__(57);
var cel = __webpack_require__(34);
var global = __webpack_require__(7);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(23)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(13);
var isObject = __webpack_require__(16);
var newPromiseCapability = __webpack_require__(45);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(10)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(111);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) {  true ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.F2 = e() : t.F2 = e() }(this, function () { return function (t) { function e(i) { if (n[i]) return n[i].exports; var r = n[i] = { i: i, l: !1, exports: {} }; return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports } var n = {}; return e.m = t, e.c = n, e.d = function (t, n, i) { e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: i }) }, e.n = function (t) { var n = t && t.__esModule ? function () { return t.default } : function () { return t }; return e.d(n, "a", n), n }, e.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 134) }([function (t, e, n) { var i = n(44), r = { upperFirst: n(45), lowerFirst: n(46), isString: n(15), isNumber: n(13), isBoolean: n(47), isFunction: n(48), isDate: n(34), isArray: n(11), isNil: n(9), isObject: n(17), isPlainObject: n(28), deepMix: n(50), mix: n(20), each: n(4), isObjectValueEqual: function (t, e) { t = Object.assign({}, t), e = Object.assign({}, e); var n = Object.getOwnPropertyNames(t), i = Object.getOwnPropertyNames(e); if (n.length !== i.length) return !1; for (var r = 0, a = n.length; r < a; r++) { var o = n[r]; if (t[o] !== e[o]) return !1 } return !0 }, wrapBehavior: function (t, e) { if (t["_wrap_" + e]) return t["_wrap_" + e]; var n = function (n) { t[e](n) }; return t["_wrap_" + e] = n, n }, getWrapBehavior: function (t, e) { return t["_wrap_" + e] }, parsePadding: function (t) { var e, n, i, a; return r.isNumber(t) || r.isString(t) ? e = i = a = n = t : r.isArray(t) && (e = t[0], n = r.isNil(t[1]) ? t[0] : t[1], i = r.isNil(t[2]) ? t[0] : t[2], a = r.isNil(t[3]) ? n : t[3]), [e, n, i, a] }, directionEnabled: function (t, e) { return void 0 === t || "string" == typeof t && -1 !== t.indexOf(e) } }; r.Array = { merge: function (t) { for (var e = [], n = 0, i = t.length; n < i; n++)e = e.concat(t[n]); return e }, values: function (t, e) { for (var n = [], i = {}, a = 0, o = t.length; a < o; a++) { var s = t[a][e]; r.isNil(s) || (r.isArray(s) ? r.each(s, function (t) { i[t] || (n.push(t), i[t] = !0) }) : i[s] || (n.push(s), i[s] = !0)) } return n }, firstValue: function (t, e) { for (var n = null, i = 0, a = t.length; i < a; i++) { var o = t[i][e]; if (!r.isNil(o)) { n = r.isArray(o) ? o[0] : o; break } } return n }, group: function (t, e, n) { if (void 0 === n && (n = {}), !e) return [t]; var i = r.Array.groupToMap(t, e), a = []; if (1 === e.length && n[e[0]]) { var o = n[e[0]]; r.each(o, function (t) { t = "_" + t, a.push(i[t]) }) } else for (var s in i) a.push(i[s]); return a }, groupToMap: function (t, e) { if (!e) return { 0: t }; for (var n = {}, i = 0, r = t.length; i < r; i++) { var a = t[i], o = function (t) { for (var n = "_", i = 0, r = e.length; i < r; i++)n += t[e[i]] && t[e[i]].toString(); return n }(a); n[o] ? n[o].push(a) : n[o] = [a] } return n }, remove: function (t, e) { if (t) { var n = t.indexOf(e); -1 !== n && t.splice(n, 1) } }, getRange: function (t) { if (!t.length) return { min: 0, max: 0 }; var e = Math.max.apply(null, t); return { min: Math.min.apply(null, t), max: e } } }, r.mix(r, i), t.exports = r }, function (t, e, n) { var i = n(43), r = n(0), a = { version: "3.3.5", scales: {}, widthRatio: { column: .5, rose: .999999, multiplePie: .75 }, lineDash: [4, 4] }; a.setTheme = function (t) { r.deepMix(this, t) }, a.setTheme(i), t.exports = a }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(0), a = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initProperties = function () { this._attrs = { zIndex: 0, visible: !0, destroyed: !1, isShape: !0, attrs: {} } }, n.getType = function () { return this._attrs.type }, n.drawInner = function (t) { var e = this, n = e.get("attrs"); e.createPath(t); var i = t.globalAlpha; if (e.hasFill()) { var a = n.fillOpacity; r.isNil(a) || 1 === a ? t.fill() : (t.globalAlpha = a, t.fill(), t.globalAlpha = i) } if (e.hasStroke() && n.lineWidth > 0) { var o = n.strokeOpacity; r.isNil(o) || 1 === o || (t.globalAlpha = o), t.stroke() } }, n.getBBox = function () { var t = this._attrs.bbox; return t || ((t = this.calculateBox()) && (t.x = t.minX, t.y = t.minY, t.width = t.maxX - t.minX, t.height = t.maxY - t.minY), this._attrs.bbox = t), t }, n.calculateBox = function () { return null }, n.createPath = function () { }, e }(n(25)); t.exports = a }, function (t, e) { t.exports = { create: function () { return [0, 0] }, length: function (t) { var e = t[0], n = t[1]; return Math.sqrt(e * e + n * n) }, normalize: function (t, e) { var n = this.length(e); return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t }, add: function (t, e, n) { return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t }, sub: function (t, e, n) { return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t }, scale: function (t, e, n) { return t[0] = e[0] * n, t[1] = e[1] * n, t }, dot: function (t, e) { return t[0] * e[0] + t[1] * e[1] }, direction: function (t, e) { return t[0] * e[1] - e[0] * t[1] }, angle: function (t, e) { var n = this.dot(t, e) / (this.length(t) * this.length(e)); return Math.acos(n) }, angleTo: function (t, e, n) { var i = this.angle(t, e), r = this.direction(t, e) >= 0; return n ? r ? 2 * Math.PI - i : i : r ? i : 2 * Math.PI - i }, zero: function (t) { return 0 === t[0] && 0 === t[1] }, distance: function (t, e) { var n = e[0] - t[0], i = e[1] - t[1]; return Math.sqrt(n * n + i * i) }, clone: function (t) { return [t[0], t[1]] }, min: function (t, e, n) { return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t }, max: function (t, e, n) { return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t }, transformMat2d: function (t, e, n) { var i = e[0], r = e[1]; return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t } } }, function (t, e, n) { var i = n(17), r = n(11); t.exports = function (t, e) { if (t) if (r(t)) for (var n = 0, a = t.length; n < a && !1 !== e(t[n], n); n++); else if (i(t)) for (var o in t) if (t.hasOwnProperty(o) && !1 === e(t[o], o)) break } }, function (t, e, n) { var i = { Canvas: n(70), Group: n(31), Shape: n(2), Matrix: n(23), Vector2: n(3) }; n(72), n(73), n(74), n(75), n(76), n(77), n(78), n(79), n(80), t.exports = i }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } function r(t) { return a.isArray(t) ? t : a.isString(t) ? t.split("*") : [t] } var a = n(0), o = n(29), s = ["color", "size", "shape"], u = n(1), c = n(54), l = n(8), h = n(22), f = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n.getDefaultCfg = function () { return { type: null, data: null, attrs: {}, scales: {}, container: null, styleOptions: null, chart: null, shapeType: "", generatePoints: !1, attrOptions: {}, sortable: !1, startOnZero: !0, visible: !0, connectNulls: !1 } }, n.init = function () { var t = this; t._initAttrs(); var e = t._processData(); t.get("adjust") && t._adjustData(e), t.set("dataArray", e) }, n._getGroupScales = function () { var t = this, e = []; return a.each(s, function (n) { var i = t.getAttr(n); if (i) { var r = i.scales; a.each(r, function (t) { t && t.isCategory && -1 === e.indexOf(t) && e.push(t) }) } }), e }, n._groupData = function (t) { var e = this, n = e.get("colDefs"), i = e._getGroupScales(); if (i.length) { var r = {}, o = []; return a.each(i, function (t) { var e = t.field; o.push(e), n && n[e] && n[e].values && (r[t.field] = n[e].values) }), a.Array.group(t, o, r) } return [t] }, n._setAttrOptions = function (t, e) { this.get("attrOptions")[t] = e }, n._createAttrOption = function (t, e, n, i) { var r = {}; r.field = e, n ? a.isFunction(n) ? r.callback = n : r.values = n : r.values = i, this._setAttrOptions(t, r) }, n._initAttrs = function () { var t = this, e = t.get("attrs"), n = t.get("attrOptions"), i = t.get("coord"); for (var o in n) if (n.hasOwnProperty(o)) { var s = n[o], u = a.upperFirst(o), l = r(s.field); "position" === o && (s.coord = i); for (var h = [], f = 0, p = l.length; f < p; f++) { var g = l[f], d = t._createScale(g); h.push(d) } if ("position" === o) { var v = h[1]; "polar" === i.type && i.transposed && t.hasAdjust("stack") && v.values.length && v.change({ nice: !1, min: 0, max: Math.max.apply(null, v.values) }) } s.scales = h; var y = new c[u](s); e[o] = y } }, n._createScale = function (t) { var e = this.get("scales"), n = e[t]; return n || (n = this.get("chart").createScale(t), e[t] = n), n }, n._processData = function () { for (var t = this, e = this.get("data"), n = [], i = this._groupData(e), r = 0, a = i.length; r < a; r++) { var o = i[r], s = t._saveOrigin(o); this.hasAdjust("dodge") && t._numberic(s), n.push(s) } return n }, n._saveOrigin = function (t) { for (var e = [], n = 0, i = t.length; n < i; n++) { var r = t[n], a = {}; for (var o in r) a[o] = r[o]; a._origin = r, e.push(a) } return e }, n._numberic = function (t) { for (var e = this.getAttr("position").scales, n = 0, i = t.length; n < i; n++)for (var r = t[n], a = Math.min(2, e.length), o = 0; o < a; o++) { var s = e[o]; if (s.isCategory) { var u = s.field; r[u] = s.translate(r[u]) } } }, n._adjustData = function (t) { var e = this, n = e.get("adjust"); if (n) { var i = a.upperFirst(n.type); if (!h[i]) throw new Error("not support such adjust : " + n); var r = e.getXScale(), o = e.getYScale(), s = a.mix({ xField: r.field, yField: o.field }, n); new h[i](s).processAdjust(t), "Stack" === i && e._updateStackRange(o.field, o, t) } }, n._updateStackRange = function (t, e, n) { for (var i = a.Array.merge(n), r = e.min, o = e.max, s = 0, u = i.length; s < u; s++) { var c = i[s], l = Math.min.apply(null, c[t]), h = Math.max.apply(null, c[t]); l < r && (r = l), h > o && (o = h) } (r < e.min || o > e.max) && e.change({ min: r, max: o }) }, n._sort = function (t) { var e = this, n = e.getXScale(), i = n.field, r = n.type; "identity" !== r && n.values.length > 1 && a.each(t, function (t) { t.sort(function (t, e) { return "timeCat" === r ? n._toTimeStamp(t._origin[i]) - n._toTimeStamp(e._origin[i]) : n.translate(t._origin[i]) - n.translate(e._origin[i]) }) }), e.set("hasSorted", !0), e.set("dataArray", t) }, n.paint = function () { var t = this, e = t.get("dataArray"), n = [], i = t.getShapeFactory(); i.setCoord(t.get("coord")), t._beforeMapping(e); for (var r = 0, a = e.length; r < a; r++) { var o = e[r]; o.length && (o = t._mapping(o), n.push(o), t.draw(o, i)) } t.set("dataArray", n) }, n.getShapeFactory = function () { var t = this.get("shapeFactory"); if (!t) { var e = this.get("shapeType"); t = l.getShapeFactory(e), this.set("shapeFactory", t) } return t }, n._mapping = function (t) { for (var e = this, n = e.get("attrs"), i = e.getYScale().field, r = [], o = 0, s = t.length; o < s; o++) { var u = t[o], c = {}; c._origin = u._origin, c.points = u.points, c._originY = u[i]; for (var l in n) if (n.hasOwnProperty(l)) { var h = n[l], f = h.names, p = e._getAttrValues(h, u); if (f.length > 1) for (var g = 0, d = p.length; g < d; g++) { var v = p[g]; c[f[g]] = a.isArray(v) && 1 === v.length ? v[0] : v } else c[f[0]] = 1 === p.length ? p[0] : p } r.push(c) } return r }, n._getAttrValues = function (t, e) { for (var n = t.scales, i = [], r = 0, a = n.length; r < a; r++) { var o = n[r], s = o.field; "identity" === o.type ? i.push(o.value) : i.push(e[s]) } return t.mapping.apply(t, i) }, n.getAttrValue = function (t, e) { var n = this.getAttr(t), i = null; return n && (i = this._getAttrValues(n, e)[0]), i }, n._beforeMapping = function (t) { var e = this; e.get("sortable") && e._sort(t), e.get("generatePoints") && a.each(t, function (t) { e._generatePoints(t) }) }, n.isInCircle = function () { var t = this.get("coord"); return t && t.isPolar }, n.getCallbackCfg = function (t, e, n) { if (!t) return e; var i = {}, r = t.map(function (t) { return n[t] }); return a.each(e, function (t, e) { a.isFunction(t) ? i[e] = t.apply(null, r) : i[e] = t }), i }, n.getDrawCfg = function (t) { var e = this, n = e.isInCircle(), i = { origin: t, x: t.x, y: t.y, color: t.color, size: t.size, shape: t.shape, isInCircle: n, opacity: t.opacity }, r = e.get("styleOptions"); return r && r.style && (i.style = e.getCallbackCfg(r.fields, r.style, t._origin)), e.get("generatePoints") && (i.points = t.points), n && (i.center = e.get("coord").center), i }, n.draw = function (t, e) { var n = this, i = n.get("container"), r = n.getYScale(); a.each(t, function (t, o) { if (!r || !a.isNil(t._origin[r.field])) { t.index = o; var s = n.getDrawCfg(t), u = t.shape; n.drawShape(u, t, s, i, e) } }) }, n.drawShape = function (t, e, n, i, r) { var o = r.drawShape(t, n, i); o && a.each([].concat(o), function (t) { t.set("origin", e) }) }, n._generatePoints = function (t) { for (var e = this, n = e.getShapeFactory(), i = e.getAttr("shape"), r = 0, a = t.length; r < a; r++) { var o = t[r], s = e.createShapePointsCfg(o), u = i ? e._getAttrValues(i, o) : null, c = n.getShapePoints(u, s); o.points = c } }, n.createShapePointsCfg = function (t) { var e, n = this.getXScale(), i = this.getYScale(), r = this._normalizeValues(t[n.field], n); return e = i ? this._normalizeValues(t[i.field], i) : t.y ? t.y : .1, { x: r, y: e, y0: i ? i.scale(this.getYMinValue()) : void 0 } }, n.getYMinValue = function () { var t = this.getYScale(), e = t.min, n = t.max; return this.get("startOnZero") ? n <= 0 && e <= 0 ? n : e >= 0 ? e : 0 : e }, n._normalizeValues = function (t, e) { var n = []; if (a.isArray(t)) for (var i = 0, r = t.length; i < r; i++) { var o = t[i]; n.push(e.scale(o)) } else n = e.scale(t); return n }, n.getAttr = function (t) { return this.get("attrs")[t] }, n.getXScale = function () { return this.getAttr("position").scales[0] }, n.getYScale = function () { return this.getAttr("position").scales[1] }, n.hasAdjust = function (t) { return this.get("adjust") && this.get("adjust").type === t }, n._getSnap = function (t, e, n) { var i, r = 0, a = this.getYScale().field; if (this.hasAdjust("stack") && t.field === a) { i = [], n.forEach(function (t) { i.push(t._originY) }); for (var o = i.length; r < o && !(i[0][0] > e); r++) { if (i[i.length - 1][1] <= e) { r = i.length - 1; break } if (i[r][0] <= e && i[r][1] > e) break } } else { (i = t.values).sort(function (t, e) { return t - e }); for (var s = i.length; r < s && !((i[0] + i[1]) / 2 > e) && !((i[r - 1] + i[r]) / 2 <= e && (i[r + 1] + i[r]) / 2 > e); r++)if ((i[i.length - 2] + i[i.length - 1]) / 2 <= e) { r = i.length - 1; break } } return i[r] }, n.getSnapRecords = function (t) { var e = this, n = e.get("coord"), i = e.getXScale(), r = e.getYScale(), o = i.field, s = e.get("dataArray"); this.get("hasSorted") || this._sort(s); var u = [], c = n.invertPoint(t), l = c.x; e.isInCircle() && !n.transposed && l > (1 + i.rangeMax()) / 2 && (l = i.rangeMin()); var h = i.invert(l); i.isCategory || (h = e._getSnap(i, h)); var f = []; if (s.forEach(function (t) { t.forEach(function (t) { var n = a.isNil(t._origin) ? t[o] : t._origin[o]; e._isEqual(n, h, i) && f.push(t) }) }), this.hasAdjust("stack") && n.isPolar && n.transposed && 1 === i.values.length) { if (l >= 0 && l <= 1) { var p = r.invert(c.y); p = e._getSnap(r, p, f), f.forEach(function (t) { (a.isArray(p) ? t._originY.toString() === p.toString() : t._originY === p) && u.push(t) }) } } else u = f; return u }, n._isEqual = function (t, e, n) { return "timeCat" === n.type ? n._toTimeStamp(t) === e : e === t }, n.position = function (t) { return this._setAttrOptions("position", { field: t }), this }, n.color = function (t, e) { return this._createAttrOption("color", t, e, u.colors), this }, n.size = function (t, e) { return this._createAttrOption("size", t, e, u.sizes), this }, n.shape = function (t, e) { var n = this.get("type"), i = u.shapes[n] || []; return this._createAttrOption("shape", t, e, i), this }, n.style = function (t, e) { var n = this.get("styleOptions"); n || (n = {}, this.set("styleOptions", n)), a.isObject(t) && (e = t, t = null); var i; return t && (i = r(t)), n.fields = i, n.style = e, this }, n.adjust = function (t) { return a.isString(t) && (t = { type: t }), this.set("adjust", t), this }, n.animate = function (t) { return this.set("animateCfg", t), this }, n.reset = function () { this.set("attrOptions", {}), this.set("adjust", null), this.clearInner() }, n.clearInner = function () { var t = this.get("container"); t && (t.clear(), t.setMatrix([1, 0, 0, 1, 0, 0])), t && t.clear(), this.set("attrs", {}), this.set("groupScales", null), this.set("xDistance", null), this.set("_width", null) }, n.clear = function () { this.clearInner(), this.set("scales", {}) }, n.destroy = function () { this.clear(), t.prototype.destroy.call(this) }, n._display = function (t) { this.set("visible", t); var e = this.get("container"), n = e.get("canvas"); e.set("visible", t), n.draw() }, n.show = function () { this._display(!0) }, n.hide = function () { this._display(!1) }, e }(o); t.exports = f }, function (t, e) { var n = {}.toString; t.exports = function (t, e) { return n.call(t) === "[object " + e + "]" } }, function (t, e, n) { var i = n(0), r = n(1), a = {}, o = { _coord: null, draw: function (t, e) { this.drawShape && this.drawShape(t, e) }, setCoord: function (t) { this._coord = t }, parsePoint: function (t) { var e = this._coord; return e.isPolar && (1 === t.x && (t.x = .9999999), 1 === t.y && (t.y = .9999999)), e.convertPoint(t) }, parsePoints: function (t) { if (!t) return !1; var e = this, n = []; return t.forEach(function (t) { n.push(e.parsePoint(t)) }), n } }, s = { defaultShapeType: null, setCoord: function (t) { this._coord = t }, getShape: function (t) { var e = this; i.isArray(t) && (t = t[0]); var n = e[t] || e[e.defaultShapeType]; return n._coord = e._coord, n }, getShapePoints: function (t, e) { var n = this.getShape(t); return (n.getPoints || n.getShapePoints || this.getDefaultPoints)(e) }, getDefaultPoints: function () { return [] }, drawShape: function (t, e, n) { var i = this.getShape(t); return e.color || (e.color = r.colors[0]), i.draw(e, n) } }; a.registerFactory = function (t, e) { var n = i.upperFirst(t), r = i.mix({}, s, e); return a[n] = r, r.name = t, r }, a.registerShape = function (t, e, n) { var r = i.upperFirst(t), s = a[r], u = i.mix({}, o, n); return s[e] = u, u }, a.registShape = a.registerShape, a.getShapeFactory = function (t) { var e = this; return t = t || "point", e[i.upperFirst(t)] }, t.exports = a }, function (t, e) { t.exports = function (t) { return null === t || void 0 === t } }, function (t, e, n) { function i(t, e, n, i, a) { return { x: r(a, t.x, e.x, n.x, i.x), y: r(a, t.y, e.y, n.y, i.y) } } function r(t, e, n, i, r) { var a = t * t; return e + (3 * -e + t * (3 * e - e * t)) * t + (3 * n + t * (-6 * n + 3 * n * t)) * t + (3 * i - 3 * i * t) * a + r * (a * t) } function a(t) { for (var e = 1 / 0, n = -1 / 0, r = 1 / 0, a = -1 / 0, o = { x: t[0], y: t[1] }, s = { x: t[2], y: t[3] }, u = { x: t[4], y: t[5] }, c = { x: t[6], y: t[7] }, l = 0; l < 100; l++) { var h = i(o, s, u, c, l / 100); h.x < e && (e = h.x), h.x > n && (n = h.x), h.y < r && (r = h.y), h.y > a && (a = h.y) } return { minX: e, minY: r, maxX: n, maxY: a } } var o = n(3), s = o.create(), u = o.create(), c = o.create(); t.exports = { getBBoxFromPoints: function (t, e) { if (0 !== t.length) { for (var n = t[0], i = n.x, r = n.x, a = n.y, o = n.y, s = t.length, u = 1; u < s; u++)n = t[u], i = Math.min(i, n.x), r = Math.max(r, n.x), a = Math.min(a, n.y), o = Math.max(o, n.y); return e = e / 2 || 0, { minX: i - e, minY: a - e, maxX: r + e, maxY: o + e } } }, getBBoxFromLine: function (t, e, n, i, r) { return r = r / 2 || 0, { minX: Math.min(t, n) - r, minY: Math.min(e, i) - r, maxX: Math.max(t, n) + r, maxY: Math.max(e, i) + r } }, getBBoxFromArc: function (t, e, n, i, r, a) { var l = Math.abs(i - r); if (l % Math.PI * 2 < 1e-4 && l > 1e-4) return { minX: t - n, minY: e - n, maxX: t + n, maxY: e + n }; s[0] = Math.cos(i) * n + t, s[1] = Math.sin(i) * n + e, u[0] = Math.cos(r) * n + t, u[1] = Math.sin(r) * n + e; var h = [0, 0], f = [0, 0]; if (o.min(h, s, u), o.max(f, s, u), (i %= 2 * Math.PI) < 0 && (i += 2 * Math.PI), (r %= 2 * Math.PI) < 0 && (r += 2 * Math.PI), i > r && !a ? r += 2 * Math.PI : i < r && a && (i += 2 * Math.PI), a) { var p = r; r = i, i = p } for (var g = 0; g < r; g += Math.PI / 2)g > i && (c[0] = Math.cos(g) * n + t, c[1] = Math.sin(g) * n + e, o.min(h, c, h), o.max(f, c, f)); return { minX: h[0], minY: h[1], maxX: f[0], maxY: f[1] } }, getBBoxFromBezierGroup: function (t, e) { for (var n = 1 / 0, i = -1 / 0, r = 1 / 0, o = -1 / 0, s = 0, u = t.length; s < u; s++) { var c = a(t[s]); c.minX < n && (n = c.minX), c.maxX > i && (i = c.maxX), c.minY < r && (r = c.minY), c.maxY > o && (o = c.maxY) } return e = e / 2 || 0, { minX: n - e, minY: r - e, maxX: i + e, maxY: o + e } } } }, function (t, e, n) { var i = n(7), r = Array.isArray ? Array.isArray : function (t) { return i(t, "Array") }; t.exports = r }, function (t, e, n) { var i = n(0), r = { min: 0, median: .5, max: 1 }, a = function () { function t(t) { this._initDefaultCfg(), i.deepMix(this, t) } var e = t.prototype; return e._initDefaultCfg = function () { }, e._getNormalizedValue = function (t, e) { return i.isNil(r[t]) ? e.scale(t) : r[t] }, e.parsePercentPoint = function (t, e) { var n = parseFloat(e[0]) / 100, i = parseFloat(e[1]) / 100, r = t.start, a = t.end, o = Math.abs(r.x - a.x), s = Math.abs(r.y - a.y); return { x: o * n + Math.min(r.x, a.x), y: s * i + Math.min(r.y, a.y) } }, e.parsePoint = function (t, e) { var n = this, r = n.xScale, a = n.yScales; if (i.isFunction(e) && (e = e(r, a)), i.isString(e[0]) && -1 !== e[0].indexOf("%")) return this.parsePercentPoint(t, e); var o = n._getNormalizedValue(e[0], r), s = n._getNormalizedValue(e[1], a[0]), u = t.convertPoint({ x: o, y: s }); return n.limitInPlot ? o >= 0 && o <= 1 && s >= 0 && s <= 1 ? u : null : u }, e.render = function () { }, e.repaint = function () { this.remove(); var t = this.coord, e = this.container, n = this.canvas; e && !e.isDestroyed() && (this.render(t, e), n.draw()) }, e.remove = function () { var t = this.element; t && t.remove(!0) }, e.changeVisible = function (t) { var e = this; e.visible = t; var n = e.element; n && (n.set ? n.set("visible", t) : n.style.display = t ? "" : "none") }, t }(); t.exports = a }, function (t, e, n) { var i = n(7); t.exports = function (t) { return i(t, "Number") } }, function (t, e, n) { var i = n(20), r = n(4), a = n(17), o = n(9), s = function () { function t(t) { this._initDefaultCfg(), i(this, t), this.init() } var e = t.prototype; return e._initDefaultCfg = function () { this.type = "base", this.formatter = null, this.range = [0, 1], this.ticks = null, this.values = [] }, e.init = function () { }, e.getTicks = function () { var t = this, e = t.ticks, n = []; return r(e, function (e) { var i; i = a(e) ? e : { text: t.getText(e), tickValue: e, value: t.scale(e) }, n.push(i) }), n }, e.getText = function (t, e) { var n = this.formatter; return t = n ? n(t, e) : t, !o(t) && t.toString || (t = ""), t.toString() }, e.rangeMin = function () { return this.range[0] }, e.rangeMax = function () { var t = this.range; return t[t.length - 1] }, e.invert = function (t) { return t }, e.translate = function (t) { return t }, e.scale = function (t) { return t }, e.clone = function () { var t = this, e = t.constructor, n = {}; return r(t, function (e, i) { n[i] = t[i] }), new e(n) }, e.change = function (t) { return this.ticks = null, i(this, t), this.init(), this }, t }(); t.exports = s }, function (t, e, n) { var i = n(7); t.exports = function (t) { return i(t, "String") } }, function (t, e, n) { function i(t, e) { return r(e) ? e : t.invert(t.scale(e)) } var r = n(15), a = n(11), o = n(20), s = n(4), u = function () { function t(t) { this.type = "base", this.name = null, this.method = null, this.values = [], this.scales = [], this.linear = null, o(this, t) } var e = t.prototype; return e._getAttrValue = function (t, e) { var n = this.values; if (t.isCategory && !this.linear) return n[t.translate(e) % n.length]; var i = t.scale(e); return this.getLinearValue(i) }, e.getLinearValue = function (t) { var e = this.values, n = e.length - 1, i = Math.floor(n * t), r = n * t - i, a = e[i]; return a + ((i === n ? a : e[i + 1]) - a) * r }, e.callback = function (t) { var e = this, n = e.scales[0]; return "identity" === n.type ? n.value : e._getAttrValue(n, t) }, e.getNames = function () { for (var t = this.scales, e = this.names, n = Math.min(t.length, e.length), i = [], r = 0; r < n; r++)i.push(e[r]); return i }, e.getFields = function () { var t = this.scales, e = []; return s(t, function (t) { e.push(t.field) }), e }, e.getScale = function (t) { return this.scales[this.names.indexOf(t)] }, e.mapping = function () { for (var t = this.scales, e = this.callback, n = arguments.length, i = new Array(n), r = 0; r < n; r++)i[r] = arguments[r]; var a = i; if (e) { for (var o = 0, s = i.length; o < s; o++)i[o] = this._toOriginParam(i[o], t[o]); a = e.apply(this, i) } return a = [].concat(a) }, e._toOriginParam = function (t, e) { var n = t; if (!e.isLinear) if (a(t)) { n = []; for (var r = 0, o = t.length; r < o; r++)n.push(i(e, t[r])) } else n = i(e, t); return n }, t }(); t.exports = u }, function (t, e) { var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }; t.exports = function (t) { var e = void 0 === t ? "undefined" : n(t); return null !== t && "object" === e || "function" === e } }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } function r(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } function a(t) { var e = t.startAngle, n = t.endAngle; return !(!l.isNil(e) && !l.isNil(n) && n - e < 2 * Math.PI) } function o(t, e) { return t - e } function s(t, e) { var n = !1; return l.each(t, function (t) { var i = [].concat(t.values), r = [].concat(e.values); t.type !== e.type || t.field !== e.field || i.sort(o).toString() !== r.sort(o).toString() || (n = !0) }), n } var u = n(29), c = n(51), l = n(0), h = n(52), f = n(6), p = n(61), g = n(67), d = n(1), v = n(5).Canvas, y = n(26), x = function (t) { function e(e) { var n, i = r(r(n = t.call(this, e) || this)); return l.each(f, function (t, e) { var n = l.lowerFirst(e); i[n] = function (e) { var n = new t(e); return i.addGeom(n), n } }), i._init(), n } i(e, t), e.initPlugins = function () { return { _plugins: [], _cacheId: 0, register: function (t) { var e = this._plugins;[].concat(t).forEach(function (t) { -1 === e.indexOf(t) && e.push(t) }), this._cacheId++ }, unregister: function (t) { var e = this._plugins;[].concat(t).forEach(function (t) { var n = e.indexOf(t); -1 !== n && e.splice(n, 1) }), this._cacheId++ }, clear: function () { this._plugins = [], this._cacheId++ }, count: function () { return this._plugins.length }, getAll: function () { return this._plugins }, notify: function (t, e, n) { var i, r, a, o, s, u = this.descriptors(t), c = u.length; for (i = 0; i < c; ++i)if (r = u[i], a = r.plugin, "function" == typeof (s = a[e]) && (o = [t].concat(n || []), !1 === s.apply(a, o))) return !1; return !0 }, descriptors: function (t) { var e = t._plugins || (t._plugins = {}); if (e.id === this._cacheId) return e.descriptors; var n = [], i = []; return this._plugins.concat(t && t.get("plugins") || []).forEach(function (t) { -1 === n.indexOf(t) && (n.push(t), i.push({ plugin: t })) }), e.descriptors = i, e.id = this._cacheId, i } } }; var n = e.prototype; return n.getDefaultCfg = function () { return { id: null, padding: d.padding, data: null, scales: {}, geoms: null, colDefs: null, pixelRatio: d.pixelRatio, filters: null, appendPadding: d.appendPadding } }, n._syncYScales = function () { var t = this.get("geoms"), e = [], n = [], i = []; l.each(t, function (t) { var r = t.getYScale(); r.isLinear && (e.push(r), n.push(r.min), i.push(r.max)) }), n = Math.min.apply(null, n), i = Math.max.apply(null, i), l.each(e, function (t) { t.change({ min: n }), t.change({ max: i }) }) }, n._getFieldsForLegend = function () { var t = [], e = this.get("geoms"); return l.each(e, function (e) { var n = e.get("attrOptions").color; if (n && n.field && l.isString(n.field)) { var i = n.field.split("*"); l.each(i, function (e) { -1 === t.indexOf(e) && t.push(e) }) } }), t }, n._createScale = function (t, e) { return this.get("scaleController").createScale(t, e) }, n._adjustScale = function () { var t = this, e = t.get("coord"), n = t.getXScale(), i = t.getYScales(), r = []; n && r.push(n), r = r.concat(i); var o = e.isPolar && a(e), s = t.get("scaleController").defs; l.each(r, function (t) { if ((t.isCategory || t.isIdentity) && t.values && (!s[t.field] || !s[t.field].range)) { var n, i = t.values.length; if (1 === i) n = [.5, 1]; else { var r = 0; n = o ? e.transposed ? [(r = 1 / i * d.widthRatio.multiplePie) / 2, 1 - r / 2] : [0, 1 - 1 / i] : [r = 1 / i * 1 / 2, 1 - r] } t.range = n } }); for (var u = this.get("geoms"), c = 0; c < u.length; c++) { var h = u[c]; if ("interval" === h.get("type")) { var f = h.getYScale(), p = f.field, g = f.min, v = f.max, y = f.type; s[p] && s[p].min || "time" === y || (g > 0 ? f.change({ min: 0 }) : v <= 0 && f.change({ max: 0 })) } } }, n._removeGeoms = function () { for (var t = this.get("geoms"); t.length > 0;)t.shift().destroy() }, n._clearGeoms = function () { for (var t = this.get("geoms"), e = 0, n = t.length; e < n; e++)t[e].clear() }, n._clearInner = function () { this.set("scales", {}), this.set("legendItems", null), this._clearGeoms(), e.plugins.notify(this, "clearInner"), this.get("axisController") && this.get("axisController").clear() }, n._execFilter = function (t) { var e = this.get("filters"); return e && (t = t.filter(function (t) { var n = !0; return l.each(e, function (e, i) { if (e && !(n = e(t[i], t))) return !1 }), n })), t }, n._initGeoms = function (t) { for (var e = this.get("coord"), n = this.get("filteredData"), i = this.get("colDefs"), r = 0, a = t.length; r < a; r++) { var o = t[r]; o.set("data", n), o.set("coord", e), o.set("colDefs", i), o.init() } }, n._initCoord = function () { var t = this.get("plotRange"), e = l.mix({ type: "cartesian" }, this.get("coordCfg"), { plot: t }), n = e.type, i = new (0, h[l.upperFirst(n)])(e); this.set("coord", i) }, n._initLayout = function () { var t = this.get("_padding"); t || (t = this.get("margin") || this.get("padding"), t = l.parsePadding(t)); var e = "auto" === t[0] ? 0 : t[0], n = "auto" === t[1] ? 0 : t[1], i = "auto" === t[2] ? 0 : t[2], r = "auto" === t[3] ? 0 : t[3], a = this.get("width"), o = this.get("height"), s = new c({ start: { x: r, y: e }, end: { x: a - n, y: o - i } }); this.set("plotRange", s), this.set("plot", s) }, n._initCanvas = function () { var t = this; try { var n = new v({ el: t.get("el") || t.get("id"), context: t.get("context"), pixelRatio: t.get("pixelRatio"), width: t.get("width"), height: t.get("height"), fontFamily: d.fontFamily }); t.set("canvas", n), t.set("width", n.get("width")), t.set("height", n.get("height")) } catch (t) { throw t } e.plugins.notify(t, "afterCanvasInit"), t._initLayout() }, n._initLayers = function () { var t = this.get("canvas"); this.set("backPlot", t.addGroup()), this.set("middlePlot", t.addGroup({ zIndex: 10 })), this.set("frontPlot", t.addGroup({ zIndex: 20 })) }, n._init = function () { var t = this; t._initCanvas(), t._initLayers(), t.set("geoms", []), t.set("scaleController", new p), t.set("axisController", new g({ frontPlot: t.get("frontPlot").addGroup({ className: "axisContainer" }), backPlot: t.get("backPlot").addGroup({ className: "axisContainer" }), chart: t })), e.plugins.notify(t, "init") }, n.source = function (t, e) { return this.set("data", t), e && this.scale(e), this }, n.scale = function (t, e) { var n = this.get("colDefs") || {}; return l.isObject(t) ? l.mix(n, t) : n[t] = e, this.set("colDefs", n), this.get("scaleController").defs = n, this }, n.axis = function (t, e) { var n = this.get("axisController"); return t ? (n.axisCfg = n.axisCfg || {}, n.axisCfg[t] = e) : n.axisCfg = null, this }, n.coord = function (t, e) { var n; return l.isObject(t) ? n = t : (n = e || {}).type = t || "cartesian", this.set("coordCfg", n), this }, n.filter = function (t, e) { var n = this.get("filters") || {}; n[t] = e, this.set("filters", n) }, n.render = function () { var t = this.get("canvas"), n = this.get("geoms"), i = this.get("data") || [], r = this._execFilter(i); this.set("filteredData", r), this._initCoord(), e.plugins.notify(this, "beforeGeomInit"), this._initGeoms(n), this.get("syncY") && this._syncYScales(), this._adjustScale(), e.plugins.notify(this, "beforeGeomDraw"), this._renderAxis(); var a = this.get("middlePlot"); if (this.get("limitInPlot") && !a.attr("clip")) { var o = this.get("coord"), s = y.getClip(o); s.set("canvas", a.get("canvas")), a.attr("clip", s) } for (var u = 0, c = n.length; u < c; u++)n[u].paint(); return e.plugins.notify(this, "afterGeomDraw"), t.sort(), this.get("frontPlot").sort(), e.plugins.notify(this, "beforeCanvasDraw"), t.draw(), this }, n.clear = function () { return e.plugins.notify(this, "clear"), this._removeGeoms(), this._clearInner(), this.set("filters", null), this.set("isUpdate", !1), this.set("_padding", null), this.get("canvas").draw(), this }, n.repaint = function () { this.set("isUpdate", !0), e.plugins.notify(this, "repaint"), this._clearInner(), this.render() }, n.changeData = function (t) { this.set("data", t), e.plugins.notify(this, "changeData"), this.set("_padding", null), this.repaint() }, n.changeSize = function (t, e) { return t ? this.set("width", t) : t = this.get("width"), e ? this.set("height", e) : e = this.get("height"), this.get("canvas").changeSize(t, e), this._initLayout(), this.repaint(), this }, n.destroy = function () { this.clear(), this.get("canvas").destroy(), e.plugins.notify(this, "afterCanvasDestroyed"), this._interactions && l.each(this._interactions, function (t) { t.destroy() }), t.prototype.destroy.call(this) }, n.getPosition = function (t) { var e = this, n = e.get("coord"), i = e.getXScale(), r = e.getYScales()[0], a = i.field, o = i.scale(t[a]), s = r.field, u = r.scale(t[s]); return n.convertPoint({ x: o, y: u }) }, n.getRecord = function (t) { var e = this, n = e.get("coord"), i = e.getXScale(), r = e.getYScales()[0], a = n.invertPoint(t), o = {}; return o[i.field] = i.invert(a.x), o[r.field] = r.invert(a.y), o }, n.getSnapRecords = function (t) { var e = this.get("geoms")[0], n = []; return e && (n = e.getSnapRecords(t)), n }, n.createScale = function (t) { var e = this.get("data"), n = this.get("filteredData"); n.length && -1 === this._getFieldsForLegend().indexOf(t) && (e = n); var i = this.get("scales"); return i[t] || (i[t] = this._createScale(t, e)), i[t] }, n.addGeom = function (t) { var e = this.get("geoms"), n = this.get("middlePlot"); e.push(t), t.set("chart", this), t.set("container", n.addGroup()) }, n.getXScale = function () { return this.get("geoms")[0].getXScale() }, n.getYScales = function () { var t = this.get("geoms"), e = []; return l.each(t, function (t) { var n = t.getYScale(); -1 === e.indexOf(n) && e.push(n) }), e }, n.getLegendItems = function () { if (this.get("legendItems")) return this.get("legendItems"); var t = {}, e = [], n = this.get("geoms"); return l.each(n, function (n) { var i = n.getAttr("color"); if (i) { var r = i.getScale("color"); if ("identity" !== r.type && !s(e, r)) { e.push(r); var a = r.field, o = r.getTicks(), u = []; l.each(o, function (t) { var e = t.text, n = t.value, a = r.invert(n), o = { fill: i.mapping(a).join("") || d.defaultColor, radius: 3, symbol: "circle", stroke: "#fff" }; u.push({ name: e, dataValue: a, checked: !0, marker: o }) }), t[a] = u } } }), this.set("legendItems", t), t }, n.registerPlugins = function (t) { var n = this, i = n.get("plugins") || []; l.isArray(i) || (i = [i]), [].concat(t).forEach(function (t) { -1 === i.indexOf(t) && (t.init && t.init(n), i.push(t)) }), e.plugins._cacheId++ , n.set("plugins", i) }, n._renderAxis = function () { var t = this.get("axisController"), n = this.getXScale(), i = this.getYScales(), r = this.get("coord"); e.plugins.notify(this, "beforeRenderAxis"), t.createAxis(r, n, i) }, n._isAutoPadding = function () { if (this.get("_padding")) return !1; var t = this.get("padding"); return l.isArray(t) ? -1 !== t.indexOf("auto") : "auto" === t }, n._updateLayout = function (t) { var e = this.get("width"), n = this.get("height"), i = { x: t[3], y: t[0] }, r = { x: e - t[1], y: n - t[2] }, a = this.get("plot"), o = this.get("coord"); a.reset(i, r), o.reset(a) }, e }(u); x.plugins = x.initPlugins(), t.exports = x }, function (t, e, n) { var i = n(0), r = { splitPoints: function (t) { var e = [], n = t.x, r = t.y; return (r = i.isArray(r) ? r : [r]).forEach(function (t, r) { var a = { x: i.isArray(n) ? n[r] : n, y: t }; e.push(a) }), e }, splitArray: function (t, e, n) { if (!t.length) return []; var r, a = [], o = []; return i.each(t, function (t) { r = t._origin ? t._origin[e] : t[e], n ? i.isNil(r) || o.push(t) : i.isArray(r) && i.isNil(r[0]) || i.isNil(r) ? o.length && (a.push(o), o = []) : o.push(t) }), o.length && a.push(o), a } }; t.exports = r }, function (t, e) { function n(t, e) { for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n]) } t.exports = function (t, e, i, r) { return e && n(t, e), i && n(t, i), r && n(t, r), t } }, function (t, e, n) { var i = n(0), r = function () { function t(t) { this._initDefaultCfg(), i.mix(this, t); var e, n; this.plot ? (e = this.plot.bl, n = this.plot.tr, this.start = e, this.end = n) : (e = this.start, n = this.end), this.init(e, n) } var e = t.prototype; return e._initDefaultCfg = function () { }, e.init = function () { }, e.convertPoint = function (t) { return t }, e.invertPoint = function (t) { return t }, e.reset = function (t) { this.plot = t; var e = t.bl, n = t.tr; this.start = e, this.end = n, this.init(e, n) }, t }(); t.exports = r }, function (t, e, n) { var i = n(60), r = function () { function t(t) { this._initDefaultCfg(), i(this, t) } var e = t.prototype; return e._initDefaultCfg = function () { this.adjustNames = ["x", "y"] }, e.processAdjust = function () { }, t }(); t.exports = r }, function (t, e) { var n = { multiply: function (t, e) { return [t[0] * e[0] + t[2] * e[1], t[1] * e[0] + t[3] * e[1], t[0] * e[2] + t[2] * e[3], t[1] * e[2] + t[3] * e[3], t[0] * e[4] + t[2] * e[5] + t[4], t[1] * e[4] + t[3] * e[5] + t[5]] }, scale: function (t, e, n) { return t[0] = e[0] * n[0], t[1] = e[1] * n[0], t[2] = e[2] * n[1], t[3] = e[3] * n[1], t[4] = e[4], t[5] = e[5], t }, rotate: function (t, e, n) { var i = Math.cos(n), r = Math.sin(n), a = e[0] * i + e[2] * r, o = e[1] * i + e[3] * r, s = e[0] * -r + e[2] * i, u = e[1] * -r + e[3] * i; return t[0] = a, t[1] = o, t[2] = s, t[3] = u, t[4] = e[4], t[5] = e[5], t }, translate: function (t, e, n) { return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + e[0] * n[0] + e[2] * n[1], t[5] = e[5] + e[1] * n[0] + e[3] * n[1], t }, transform: function (t, e) { for (var i = [].concat(t), r = 0, a = e.length; r < a; r++) { var o = e[r]; switch (o[0]) { case "t": n.translate(i, i, [o[1], o[2]]); break; case "s": n.scale(i, i, [o[1], o[2]]); break; case "r": n.rotate(i, i, o[1]) } } return i } }; t.exports = n }, function (t, e, n) { var i = n(0), r = n(1), a = n(3), o = function () { function t(t) { this._initDefaultCfg(), i.mix(this, t), this.draw() } var e = t.prototype; return e._initDefaultCfg = function () { this.ticks = [], this.tickLine = {}, this.offsetFactor = 1, this.frontContainer = null, this.backContainer = null, this.gridPoints = [] }, e.draw = function () { var t = this.line, e = this.tickLine, n = this.label, i = this.grid; i && this.drawGrid(i), e && this.drawTicks(e), t && this.drawLine(t), n && this.drawLabels() }, e.drawTicks = function (t) { var e = this, n = e.ticks, r = t.length, a = e.getContainer(t.top); i.each(n, function (n) { var o = e.getOffsetPoint(n.value), s = e.getSidePoint(o, r); a.addShape("line", { className: "axis-tick", attrs: i.mix({ x1: o.x, y1: o.y, x2: s.x, y2: s.y }, t) })._id = e._id + "-ticks" }) }, e.drawLabels = function () { var t = this, e = t.labelOffset, n = t.labels; i.each(n, function (n) { var r = t.getContainer(n.get("top")), a = t.getOffsetPoint(n.get("value")), o = t.getSidePoint(a, e), s = o.x, u = o.y; n.attr(i.mix({ x: s, y: u }, t.getTextAlignInfo(a, e), n.get("textStyle"))), n._id = t._id + "-" + n.attr("text"), r.add(n) }) }, e.drawLine = function () { }, e.drawGrid = function (t) { var e = this, n = e.gridPoints, o = e.ticks, s = t, u = n.length; i.each(n, function (n, c) { if (i.isFunction(t)) { var l = o[c] || {}, h = t(l.text, c, u); s = h ? i.mix({}, r._defaultAxis.grid, h) : null } if (s) { var f, p = s.type, g = n.points, d = e.getContainer(s.top); if ("arc" === p) { var v = e.center, y = e.startAngle, x = e.endAngle, m = a.length([g[0].x - v.x, g[0].y - v.y]); f = d.addShape("Arc", { className: "axis-grid", attrs: i.mix({ x: v.x, y: v.y, startAngle: y, endAngle: x, r: m }, s) }) } else f = d.addShape("Polyline", { className: "axis-grid", attrs: i.mix({ points: g }, s) }); f._id = n._id } }) }, e.getOffsetPoint = function () { }, e.getAxisVector = function () { }, e.getOffsetVector = function (t, e) { var n = this, i = n.getAxisVector(t), r = a.normalize([], i), o = n.offsetFactor, s = [-1 * r[1] * o, r[0] * o]; return a.scale([], s, e) }, e.getSidePoint = function (t, e) { var n = this.getOffsetVector(t, e); return { x: t.x + n[0], y: t.y + n[1] } }, e.getTextAlignInfo = function (t, e) { var n, i, r = this.getOffsetVector(t, e); return n = r[0] > 0 ? "left" : r[0] < 0 ? "right" : "center", i = r[1] > 0 ? "top" : r[1] < 0 ? "bottom" : "middle", { textAlign: n, textBaseline: i } }, e.getContainer = function (t) { var e = this.frontContainer, n = this.backContainer; return t ? e : n }, t }(); t.exports = o }, function (t, e, n) { function i(t) { return 1 === t[0] && 0 === t[1] && 0 === t[2] && 1 === t[3] && 0 === t[4] && 0 === t[5] } var r = n(0), a = n(23), o = n(3), s = n(71), u = { stroke: "strokeStyle", fill: "fillStyle", opacity: "globalAlpha" }, c = ["fillStyle", "font", "globalAlpha", "lineCap", "lineWidth", "lineJoin", "miterLimit", "shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "strokeStyle", "textAlign", "textBaseline", "lineDash", "shadow"], l = ["circle", "sector", "polygon", "rect", "polyline"], h = function () { function t(t) { this._initProperties(), r.mix(this._attrs, t); var e = this._attrs.attrs; e && this.initAttrs(e), this.initTransform() } var e = t.prototype; return e._initProperties = function () { this._attrs = { zIndex: 0, visible: !0, destroyed: !1 } }, e.get = function (t) { return this._attrs[t] }, e.set = function (t, e) { this._attrs[t] = e }, e.isGroup = function () { return this.get("isGroup") }, e.isShape = function () { return this.get("isShape") }, e.initAttrs = function (t) { this.attr(r.mix(this.getDefaultAttrs(), t)) }, e.getDefaultAttrs = function () { return {} }, e._setAttr = function (t, e) { var n = this._attrs.attrs; if ("clip" === t) e = this._setAttrClip(e); else { var i = u[t]; i && (n[i] = e) } n[t] = e }, e._getAttr = function (t) { return this._attrs.attrs[t] }, e._setAttrClip = function (t) { return t && l.indexOf(t._attrs.type) > -1 ? (null === t.get("canvas") && (t = Object.assign({}, t)), t.set("parent", this.get("parent")), t.set("context", this.get("context")), t) : null }, e.attr = function (t, e) { var n = this; if (n.get("destroyed")) return null; var i = arguments.length; if (0 === i) return n._attrs.attrs; if (r.isObject(t)) { this._attrs.bbox = null; for (var a in t) n._setAttr(a, t[a]); return n._afterAttrsSet && n._afterAttrsSet(), n } return 2 === i ? (this._attrs.bbox = null, n._setAttr(t, e), n._afterAttrsSet && n._afterAttrsSet(), n) : n._getAttr(t) }, e.getParent = function () { return this.get("parent") }, e.draw = function (t) { this.get("destroyed") || this.get("visible") && (this.setContext(t), this.drawInner(t), this.restoreContext(t)) }, e.setContext = function (t) { var e = this._attrs.attrs.clip; t.save(), e && (e.resetTransform(t), e.createPath(t), t.clip()), this.resetContext(t), this.resetTransform(t) }, e.restoreContext = function (t) { t.restore() }, e.resetContext = function (t) { var e = this._attrs.attrs; if (!this._attrs.isGroup) for (var n in e) if (c.indexOf(n) > -1) { var i = e[n]; "fillStyle" !== n && "strokeStyle" !== n || (i = s.parseStyle(i, this, t)), "lineDash" === n && t.setLineDash && r.isArray(i) ? t.setLineDash(i) : t[n] = i } }, e.hasFill = function () { return this.get("canFill") && this._attrs.attrs.fillStyle }, e.hasStroke = function () { return this.get("canStroke") && this._attrs.attrs.strokeStyle }, e.drawInner = function () { }, e.show = function () { return this.set("visible", !0), this }, e.hide = function () { return this.set("visible", !1), this }, e.isVisible = function () { return this.get("visible") }, e._removeFromParent = function () { var t = this.get("parent"); if (t) { var e = t.get("children"); r.Array.remove(e, this) } return this }, e.remove = function (t) { t ? this.destroy() : this._removeFromParent() }, e.destroy = function () { if (this.get("destroyed")) return null; this._removeFromParent(), this._attrs = {}, this.set("destroyed", !0) }, e.getBBox = function () { return { minX: 0, maxX: 0, minY: 0, maxY: 0, width: 0, height: 0 } }, e.initTransform = function () { var t = this._attrs.attrs || {}; t.matrix || (t.matrix = [1, 0, 0, 1, 0, 0]), this._attrs.attrs = t }, e.getMatrix = function () { return this._attrs.attrs.matrix }, e.setMatrix = function (t) { this._attrs.attrs.matrix = [t[0], t[1], t[2], t[3], t[4], t[5]] }, e.transform = function (t) { var e = this._attrs.attrs.matrix; return this._attrs.attrs.matrix = a.transform(e, t), this }, e.setTransform = function (t) { return this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0], this.transform(t) }, e.translate = function (t, e) { var n = this._attrs.attrs.matrix; a.translate(n, n, [t, e]) }, e.rotate = function (t) { var e = this._attrs.attrs.matrix; a.rotate(e, e, t) }, e.scale = function (t, e) { var n = this._attrs.attrs.matrix; a.scale(n, n, [t, e]) }, e.moveTo = function (t, e) { var n = this._attrs.x || 0, i = this._attrs.y || 0; this.translate(t - n, e - i), this.set("x", t), this.set("y", e) }, e.apply = function (t) { var e = this._attrs.attrs.matrix; return o.transformMat2d(t, t, e), this }, e.resetTransform = function (t) { var e = this._attrs.attrs.matrix; i(e) || t.transform(e[0], e[1], e[2], e[3], e[4], e[5]) }, e.isDestroyed = function () { return this.get("destroyed") }, t }(); t.exports = h }, function (t, e, n) { var i = n(5).Shape; t.exports = { getClip: function (t) { var e, n = t.start, r = t.end, a = r.x - n.x, o = Math.abs(r.y - n.y); if (t.isPolar) { var s = t.circleRadius, u = t.center, c = t.startAngle, l = t.endAngle; e = new i.Sector({ attrs: { x: u.x, y: u.y, r: s, r0: 0, startAngle: c, endAngle: l } }) } else e = new i.Rect({ attrs: { x: n.x, y: r.y - 10, width: a, height: o + 20 } }); return e.isClip = !0, e }, isPointInPlot: function (t, e) { var n = t.x, i = t.y, r = e.tl, a = e.tr, o = e.br; return n >= r.x && n <= a.x && i >= r.y && i <= o.y } } }, function (t, e, n) { var i = n(9); t.exports = function (t) { return i(t) ? "" : t.toString() } }, function (t, e, n) { var i = n(49), r = n(7); t.exports = function (t) { if (!i(t) || !r(t, "Object")) return !1; if (null === Object.getPrototypeOf(t)) return !0; for (var e = t; null !== Object.getPrototypeOf(e);)e = Object.getPrototypeOf(e); return Object.getPrototypeOf(t) === e } }, function (t, e, n) { var i = n(0), r = function () { function t(t) { var e = {}, n = this.getDefaultCfg(); this._attrs = e, i.mix(e, n, t) } var e = t.prototype; return e.getDefaultCfg = function () { return {} }, e.get = function (t) { return this._attrs[t] }, e.set = function (t, e) { this._attrs[t] = e }, e.destroy = function () { this._attrs = {}, this.destroyed = !0 }, t }(); t.exports = r }, function (t, e, n) { function i(t) { return function (e, n) { var i = t(e, n); return 0 === i ? e[s] - n[s] : i } } var r = n(0), a = n(2), o = {}, s = "_INDEX"; t.exports = { getGroupClass: function () { }, getChildren: function () { return this.get("children") }, addShape: function (t, e) { void 0 === e && (e = {}); var n = this.get("canvas"), i = o[t]; i || (i = r.upperFirst(t), o[t] = i), e.canvas = n, "Text" === i && n && n.get("fontFamily") && (e.attrs.fontFamily = e.attrs.fontFamily || n.get("fontFamily")); var s = new a[i](e); return this.add(s), s }, addGroup: function (t) { var e = this.get("canvas"), n = this.getGroupClass(); (t = r.mix({}, t)).canvas = e, t.parent = this; var i = new n(t); return this.add(i), i }, contain: function (t) { return this.get("children").indexOf(t) > -1 }, sort: function () { for (var t = this.get("children"), e = 0, n = t.length; e < n; e++)t[e][s] = e; return t.sort(i(function (t, e) { return t.get("zIndex") - e.get("zIndex") })), this }, clear: function () { for (var t = this.get("children"); 0 !== t.length;)t[t.length - 1].remove(!0); return this }, add: function (t) { var e = this, n = e.get("children"); r.isArray(t) || (t = [t]); for (var i = 0, a = t.length; i < a; i++) { var o = t[i], s = o.get("parent"); if (s) { var u = s.get("children"); r.Array.remove(u, o) } e._setEvn(o), n.push(o) } return e }, _setEvn: function (t) { var e = this; t._attrs.parent = e, t._attrs.context = e._attrs.context, t._attrs.canvas = e._attrs.canvas; var n = t._attrs.attrs.clip; if (n && (n.set("parent", e), n.set("context", e.get("context"))), t._attrs.isGroup) for (var i = t._attrs.children, r = 0, a = i.length; r < a; r++)t._setEvn(i[r]) } } }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(0), a = n(25), o = n(30), s = n(3), u = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initProperties = function () { this._attrs = { zIndex: 0, visible: !0, destroyed: !1, isGroup: !0, children: [] } }, n.drawInner = function (t) { for (var e = this.get("children"), n = 0, i = e.length; n < i; n++)e[n].draw(t); return this }, n.getBBox = function () { for (var t = 1 / 0, e = -1 / 0, n = 1 / 0, i = -1 / 0, r = this.get("children"), a = 0, o = r.length; a < o; a++) { var u = r[a]; if (u.get("visible")) { var c = u.getBBox(); if (!c) continue; var l = [c.minX, c.minY], h = [c.minX, c.maxY], f = [c.maxX, c.minY], p = [c.maxX, c.maxY], g = u.attr("matrix"); s.transformMat2d(l, l, g), s.transformMat2d(h, h, g), s.transformMat2d(f, f, g), s.transformMat2d(p, p, g), t = Math.min(l[0], h[0], f[0], p[0], t), e = Math.max(l[0], h[0], f[0], p[0], e), n = Math.min(l[1], h[1], f[1], p[1], n), i = Math.max(l[1], h[1], f[1], p[1], i) } } return { minX: t, minY: n, maxX: e, maxY: i, x: t, y: n, width: e - t, height: i - n } }, n.destroy = function () { this.get("destroyed") || (this.clear(), t.prototype.destroy.call(this)) }, e }(a); r.mix(u.prototype, o, { getGroupClass: function () { return u } }), t.exports = u }, function (t, e, n) { function i(t) { var e = { strokeStyle: t.color }; return t.size >= 0 && (e.lineWidth = t.size), a.mix(e, t.style), a.mix({}, u.shape.line, e) } function r(t, e, n, i) { var r = t.points; if (r.length && a.isArray(r[0].y)) { for (var o = [], u = [], c = 0, l = r.length; c < l; c++) { var h = r[c], f = s.splitPoints(h); u.push(f[0]), o.push(f[1]) } return t.isInCircle && (o.push(o[0]), u.push(u[0])), t.isStack ? e.addShape("Polyline", { className: "line", attrs: a.mix({ points: o, smooth: i }, n) }) : [e.addShape("Polyline", { className: "line", attrs: a.mix({ points: o, smooth: i }, n) }), e.addShape("Polyline", { className: "line", attrs: a.mix({ points: u, smooth: i }, n) })] } return t.isInCircle && r.push(r[0]), e.addShape("Polyline", { className: "line", attrs: a.mix({ points: r, smooth: i }, n) }) } var a = n(0), o = n(8), s = n(19), u = n(1), c = o.registerFactory("line", { defaultShapeType: "line" }), l = ["line", "smooth", "dash"]; a.each(l, function (t) { o.registerShape("line", t, { draw: function (e, n) { var a = "smooth" === t, o = i(e); return "dash" === t && (o.lineDash = u.lineDash), r(e, n, o, a) } }) }), t.exports = c }, function (t, e, n) { var i = n(87), r = Array.isArray ? Array.isArray : function (t) { return i(t, "Array") }; t.exports = r }, function (t, e, n) { var i = n(7); t.exports = function (t) { return i(t, "Date") } }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(14), a = n(36), o = n(4), s = n(13), u = n(15), c = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { t.prototype._initDefaultCfg.call(this), this.type = "cat", this.isCategory = !0, this.isRounding = !0 }, n.init = function () { var t = this, e = t.values, n = t.tickCount; if (o(e, function (t, n) { e[n] = t.toString() }), !t.ticks) { var i = e; n && (i = a({ maxCount: n, data: e, isRounding: t.isRounding }).ticks), this.ticks = i } }, n.getText = function (e) { return -1 === this.values.indexOf(e) && s(e) && (e = this.values[Math.round(e)]), t.prototype.getText.call(this, e) }, n.translate = function (t) { var e = this.values.indexOf(t); return -1 === e && s(t) ? e = t : -1 === e && (e = NaN), e }, n.scale = function (t) { var e, n = this.rangeMin(), i = this.rangeMax(); return (u(t) || -1 !== this.values.indexOf(t)) && (t = this.translate(t)), e = this.values.length > 1 ? t / (this.values.length - 1) : t, n + e * (i - n) }, n.invert = function (t) { if (u(t)) return t; var e = this.rangeMin(), n = this.rangeMax(); t < e && (t = e), t > n && (t = n); var i = (t - e) / (n - e), r = Math.round(i * (this.values.length - 1)) % this.values.length; return r = r || 0, this.values[r] }, e }(r); r.Cat = c, t.exports = c }, function (t, e, n) { function i(t) { var e = []; return a(t, function (t) { e = e.concat(t) }), e } function r(t, e) { var n; for (n = e; n > 0 && t % n != 0; n--); if (1 === n) for (n = e; n > 0 && (t - 1) % n != 0; n--); return n } var a = n(4); t.exports = function (t) { var e, n = {}, a = [], o = t.isRounding, s = i(t.data), u = s.length, c = t.maxCount || 8; if (o ? 2 === (e = r(u - 1, c - 1) + 1) ? e = c : e < c - 4 && (e = c - 4) : e = c, !o && u <= e + e / 2) a = [].concat(s); else { for (var l = parseInt(u / (e - 1), 10), h = s.map(function (t, e) { return e % l == 0 ? s.slice(e, e + l) : null }).filter(function (t) { return t }), f = 1, p = h.length; f < p && (o ? f * l < u - l : f < e - 1); f++)a.push(h[f][0]); if (s.length) { a.unshift(s[0]); var g = s[u - 1]; -1 === a.indexOf(g) && a.push(g) } } return n.categories = s, n.ticks = a, n } }, function (t, e) { t.exports = { requestAnimationFrame: "object" == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame : function (t) { return setTimeout(t, 16) } } }, function (t, e, n) { function i(t) { return [t.x, t.y] } function r(t, e, n, r) { var o, s, u, c, l, h, f, p, g = [], d = !!r; if (d) { for (u = [1 / 0, 1 / 0], c = [-1 / 0, -1 / 0], p = 0, f = t.length; p < f; p++)l = i(t[p]), a.min(u, u, l), a.max(c, c, l); a.min(u, u, r[0]), a.max(c, c, r[1]) } for (p = 0, h = t.length; p < h; p++) { if (l = i(t[p]), n) o = i(t[p ? p - 1 : h - 1]), s = i(t[(p + 1) % h]); else { if (0 === p || p === h - 1) { g.push([l[0], l[1]]); continue } o = i(t[p - 1]), s = i(t[p + 1]) } var v = a.sub([], s, o); a.scale(v, v, e); var y = a.distance(l, o), x = a.distance(l, s), m = y + x; 0 !== m && (y /= m, x /= m); var _ = a.scale([], v, -y), S = a.scale([], v, x), b = a.add([], l, _), P = a.add([], l, S); d && (a.max(b, b, u), a.min(b, b, c), a.max(P, P, u), a.min(P, P, c)), g.push([b[0], b[1]]), g.push([P[0], P[1]]) } return n && g.push(g.shift()), g } var a = n(3); t.exports = { smooth: function (t, e, n) { for (var i, a, o, s = !!e, u = r(t, .4, s, n), c = t.length, l = [], h = 0; h < c - 1; h++)i = u[2 * h], a = u[2 * h + 1], o = t[h + 1], l.push(["C", i[0], i[1], a[0], a[1], o.x, o.y]); return s && (i = u[c], a = u[c + 1], o = t[0], l.push(["C", i[0], i[1], a[0], a[1], o.x, o.y])), l } } }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(6), a = n(19), o = n(0); n(32); var s = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n.getDefaultCfg = function () { var e = t.prototype.getDefaultCfg.call(this); return e.type = "path", e.shapeType = "line", e }, n.getDrawCfg = function (e) { var n = t.prototype.getDrawCfg.call(this, e); return n.isStack = this.hasAdjust("stack"), n }, n.draw = function (t, e) { var n = this, i = n.get("container"), r = n.getYScale(), s = n.get("connectNulls"), u = a.splitArray(t, r.field, s), c = this.getDrawCfg(t[0]); c.origin = t, o.each(u, function (r, a) { c.splitedIndex = a, c.points = r, n.drawShape(c.shape, t[0], c, i, e) }) }, e }(r); r.Path = s, t.exports = s }, function (t, e, n) { var i = n(1), r = n(0), a = { getDefalutSize: function () { var t = this.get("defaultSize"); if (!t) { var e = this.get("coord"), n = this.getXScale(), r = this.get("dataArray"), a = n.values.length, o = n.range, s = 1 / a, u = 1; e && e.isPolar ? u = e.transposed && a > 1 ? i.widthRatio.multiplePie : i.widthRatio.rose : (n.isLinear && (s *= o[1] - o[0]), u = i.widthRatio.column), s *= u, this.hasAdjust("dodge") && (s /= r.length), t = s, this.set("defaultSize", t) } return t }, getDimWidth: function (t) { var e = this.get("coord"), n = e.convertPoint({ x: 0, y: 0 }), i = e.convertPoint({ x: "x" === t ? 1 : 0, y: "x" === t ? 0 : 1 }), r = 0; return n && i && (r = Math.sqrt(Math.pow(i.x - n.x, 2) + Math.pow(i.y - n.y, 2))), r }, _getWidth: function () { var t = this.get("_width"); if (!t) { var e = this.get("coord"); t = e && e.isPolar && !e.transposed ? (e.endAngle - e.startAngle) * e.circleRadius : this.getDimWidth("x"), this.set("_width", t) } return t }, _toNormalizedSize: function (t) { return t / this._getWidth() }, _toCoordSize: function (t) { return this._getWidth() * t }, getNormalizedSize: function (t) { var e = this.getAttrValue("size", t); return e = r.isNil(e) ? this.getDefalutSize() : this._toNormalizedSize(e) }, getSize: function (t) { var e = this.getAttrValue("size", t); if (r.isNil(e)) { var n = this.getDefalutSize(); e = this._toCoordSize(n) } return e } }; t.exports = a }, , function (t, e, n) { var i = {}, r = n(1); i.Global = r, i.version = r.version, i.Chart = n(18), i.Shape = n(8), i.G = n(5), i.Util = n(0), i.track = function () { return null }, t.exports = i }, function (t, e, n) { var i = n(0), r = { label: { fill: "#808080", fontSize: 10 }, line: { stroke: "#E8E8E8", lineWidth: 1 }, grid: { type: "line", stroke: "#E8E8E8", lineWidth: 1, lineDash: [2] }, tickLine: null, labelOffset: 7.5 }, a = { fontFamily: '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif', defaultColor: "#1890FF", pixelRatio: 1, padding: "auto", appendPadding: 15, colors: ["#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864"], shapes: { line: ["line", "dash"], point: ["circle", "hollowCircle"] }, sizes: [4, 10], axis: { common: r, bottom: i.mix({}, r, { grid: null }), left: i.mix({}, r, { line: null }), right: i.mix({}, r, { line: null }), circle: i.mix({}, r, { line: null }), radius: i.mix({}, r, { labelOffset: 4 }) }, shape: { line: { lineWidth: 2, lineJoin: "round", lineCap: "round" }, point: { lineWidth: 0, size: 3 }, area: { fillOpacity: .1 } }, _defaultAxis: r }; t.exports = a }, function (t, e) { function n(t, e, n, i, r) { return { type: t, chart: e, native: r || null, x: void 0 !== n ? n : null, y: void 0 !== i ? i : null } } function i(t, e) { var i = t.type, a = {}, o = t.targetTouches; o && o.length > 0 ? (a.x = o[0].clientX, a.y = o[0].clientY) : (a.x = t.clientX, a.y = t.clientY); var s = e.get("canvas"), u = r.getRelativePosition(a, s); return n(i, e, u.x, u.y, t) } var r, a = !!function () { var t = !1; try { var e = Object.defineProperty({}, "passive", { get: function () { t = !0 } }); window.addEventListener("e", null, e) } catch (t) { } return t }() && { passive: !0 }; r = { isWx: "object" == typeof wx && "function" == typeof wx.getSystemInfoSync, isMy: "object" == typeof my && "function" == typeof my.getSystemInfoSync, isNode: void 0 !== t && void 0 !== t.exports, isBrowser: "undefined" != typeof window && void 0 !== window.document && void 0 !== window.sessionStorage, getPixelRatio: function () { return window && window.devicePixelRatio || 1 }, getStyle: function (t, e) { return t.currentStyle ? t.currentStyle[e] : document.defaultView.getComputedStyle(t, null).getPropertyValue(e) }, getWidth: function (t) { var e = this.getStyle(t, "width"); return "auto" === e && (e = t.offsetWidth), parseFloat(e) }, getHeight: function (t) { var e = this.getStyle(t, "height"); return "auto" === e && (e = t.offsetHeight), parseFloat(e) }, getDomById: function (t) { return t ? document.getElementById(t) : null }, getRelativePosition: function (t, e) { var n = e.get("el"), i = n.getBoundingClientRect(), r = i.top, a = i.right, o = i.bottom, s = i.left, u = parseFloat(this.getStyle(n, "padding-left")), c = parseFloat(this.getStyle(n, "padding-top")), l = a - s - u - parseFloat(this.getStyle(n, "padding-right")), h = o - r - c - parseFloat(this.getStyle(n, "padding-bottom")), f = e.get("pixelRatio"); return { x: (t.x - s - u) / l * n.width / f, y: (t.y - r - c) / h * n.height / f } }, addEventListener: function (t, e, n) { r.isBrowser && t.addEventListener(e, n, a) }, removeEventListener: function (t, e, n) { r.isBrowser && t.removeEventListener(e, n, a) }, createEvent: function (t, e) { return i(t, e) }, measureText: function (t, e, n) { return n || (n = document.createElement("canvas").getContext("2d")), n.font = e || "12px sans-serif", n.measureText(t) } }, t.exports = r }, function (t, e, n) { var i = n(27); t.exports = function (t) { var e = i(t); return e.charAt(0).toUpperCase() + e.substring(1) } }, function (t, e, n) { var i = n(27); t.exports = function (t) { var e = i(t); return e.charAt(0).toLowerCase() + e.substring(1) } }, function (t, e, n) { var i = n(7); t.exports = function (t) { return i(t, "Boolean") } }, function (t, e, n) { var i = n(7); t.exports = function (t) { return i(t, "Function") } }, function (t, e) { var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }; t.exports = function (t) { return "object" === (void 0 === t ? "undefined" : n(t)) && null !== t } }, function (t, e, n) { function i(t, e, n, s) { n = n || 0, s = s || o; for (var u in e) if (e.hasOwnProperty(u)) { var c = e[u]; null !== c && r(c) ? (r(t[u]) || (t[u] = {}), n < s ? i(t[u], c, n + 1, s) : t[u] = e[u]) : a(c) ? (t[u] = [], t[u] = t[u].concat(c)) : void 0 !== c && (t[u] = c) } } var r = n(28), a = n(11), o = 5; t.exports = function () { for (var t = new Array(arguments.length), e = t.length, n = 0; n < e; n++)t[n] = arguments[n]; for (var r = t[0], a = 1; a < e; a++)i(r, t[a]); return r } }, function (t, e, n) { var i = n(0), r = function () { function t(t) { i.mix(this, t), this._init() } var e = t.prototype; return e._init = function () { var t = this, e = t.start, n = t.end, i = Math.min(e.x, n.x), r = Math.max(e.x, n.x), a = Math.min(e.y, n.y), o = Math.max(e.y, n.y); this.tl = { x: i, y: a }, this.tr = { x: r, y: a }, this.bl = { x: i, y: o }, this.br = { x: r, y: o }, this.width = r - i, this.height = o - a }, e.reset = function (t, e) { this.start = t, this.end = e, this._init() }, e.isInRange = function (t, e) { i.isObject(t) && (e = t.y, t = t.x); var n = this.tl, r = this.br; return n.x <= t && t <= r.x && n.y <= e && e <= r.y }, t }(); t.exports = r }, function (t, e, n) { var i = n(21); n(53), t.exports = i }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(21), a = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { this.type = "cartesian", this.transposed = !1, this.isRect = !0 }, n.init = function (t, e) { this.x = { start: t.x, end: e.x }, this.y = { start: t.y, end: e.y } }, n.convertPoint = function (t) { var e = this, n = e.transposed, i = n ? "y" : "x", r = n ? "x" : "y", a = e.x, o = e.y; return { x: a.start + (a.end - a.start) * t[i], y: o.start + (o.end - o.start) * t[r] } }, n.invertPoint = function (t) { var e = this, n = e.transposed, i = n ? "y" : "x", r = n ? "x" : "y", a = e.x, o = e.y, s = {}; return s[i] = (t.x - a.start) / (a.end - a.start), s[r] = (t.y - o.start) / (o.end - o.start), s }, e }(r); r.Cartesian = a, r.Rect = a, t.exports = a }, function (t, e, n) { t.exports = { Position: n(55), Shape: n(56), Size: n(57), Color: n(58) } }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(9), a = n(11), o = n(4), s = function (t) { function e(e) { var n; return n = t.call(this, e) || this, n.names = ["x", "y"], n.type = "position", n } return i(e, t), e.prototype.mapping = function (t, e) { var n, i, s, u = this.scales, c = this.coord, l = u[0], h = u[1]; if (r(t) || r(e)) return []; if (a(e) && a(t)) { n = [], i = []; for (var f = 0, p = 0, g = t.length, d = e.length; f < g && p < d; f++ , p++)s = c.convertPoint({ x: l.scale(t[f]), y: h.scale(e[p]) }), n.push(s.x), i.push(s.y) } else if (a(e)) t = l.scale(t), i = [], o(e, function (e) { e = h.scale(e), s = c.convertPoint({ x: t, y: e }), n && n !== s.x ? (a(n) || (n = [n]), n.push(s.x)) : n = s.x, i.push(s.y) }); else if (a(t)) e = h.scale(e), n = [], o(t, function (t) { t = l.scale(t), s = c.convertPoint({ x: t, y: e }), i && i !== s.y ? (a(i) || (i = [i]), i.push(s.y)) : i = s.y, n.push(s.x) }); else { t = l.scale(t), e = h.scale(e); var v = c.convertPoint({ x: t, y: e }); n = v.x, i = v.y } return [n, i] }, e }(n(16)); t.exports = s }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = function (t) { function e(e) { var n; return n = t.call(this, e) || this, n.names = ["shape"], n.type = "shape", n.gradient = null, n } return i(e, t), e.prototype.getLinearValue = function (t) { var e = this.values; return e[Math.round((e.length - 1) * t)] }, e }(n(16)); t.exports = r }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = function (t) { function e(e) { var n; return n = t.call(this, e) || this, n.names = ["size"], n.type = "size", n.gradient = null, n } return i(e, t), e }(n(16)); t.exports = r }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(0), a = n(59), o = function (t) { function e(e) { var n; return n = t.call(this, e) || this, n.names = ["color"], n.type = "color", n.gradient = null, r.isString(n.values) && (n.linear = !0), n } return i(e, t), e.prototype.getLinearValue = function (t) { var e = this.gradient; if (!e) { var n = this.values; e = a.gradient(n), this.gradient = e } return e(t) }, e }(n(16)); t.exports = o }, function (t, e, n) { function i(t, e, n, i) { return t[i] + (e[i] - t[i]) * n } function r(t) { return "#" + a(t[0]) + a(t[1]) + a(t[2]) } function a(t) { return t = Math.round(t), 1 === (t = t.toString(16)).length && (t = "0" + t), t } function o(t, e) { var n = t.length - 1, a = Math.floor(n * e), o = n * e - a, s = t[a], u = a === n ? s : t[a + 1]; return r([i(s, u, o, 0), i(s, u, o, 1), i(s, u, o, 2)]) } function s(t) { var e = []; return e.push(parseInt(t.substr(1, 2), 16)), e.push(parseInt(t.substr(3, 2), 16)), e.push(parseInt(t.substr(5, 2), 16)), e } var u = n(0), c = { black: "#000000", blue: "#0000ff", grey: "#808080", green: "#008000", orange: "#ffa500", pink: "#ffc0cb", purple: "#800080", red: "#ff0000", white: "#ffffff", yellow: "#ffff00" }, l = { toHex: function (t) { if (c[t]) return c[t]; if ("#" === t[0]) { if (7 === t.length) return t; var e = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, n, i) { return "#" + e + e + n + n + i + i }); return c[t] = e, e } var n = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i); return n.shift(), n = r(n), c[t] = n, n }, hex2arr: s, gradient: function (t) { var e = []; return u.isString(t) && (t = t.split("-")), u.each(t, function (t) { -1 === t.indexOf("#") && (t = l.toHex(t)), e.push(s(t)) }), function (t) { return o(e, t) } } }; t.exports = l }, function (t, e) { function n(t, e) { for (var n in e) e.hasOwnProperty(n) && "constructor" !== n && void 0 !== e[n] && (t[n] = e[n]) } t.exports = function (t, e, i, r) { return e && n(t, e), i && n(t, i), r && n(t, r), t } }, function (t, e, n) { var i = n(0), r = n(1), a = n(62), o = { linear: "Linear", cat: "Cat", timeCat: "TimeCat", identity: "Identity" }, s = function () { function t(t) { this.defs = {}, i.mix(this, t) } var e = t.prototype; return e._getDef = function (t) { var e = this.defs, n = null; return (r.scales[t] || e[t]) && (n = i.mix({}, r.scales[t]), i.each(e[t], function (t, e) { i.isNil(t) ? delete n[e] : n[e] = t })), n }, e._getDefaultType = function (t, e, n) { if (n && n.type) return n.type; var r = "linear", a = i.Array.firstValue(e, t); return i.isArray(a) && (a = a[0]), i.isString(a) && (r = "cat"), r }, e._getScaleCfg = function (t, e, n, r) { var a, o = { field: e, values: a = r && r.values ? r.values : i.Array.values(n, e) }; if (!("cat" === t || "timeCat" === t || r && r.min && r.max)) { var s = i.Array.getRange(a), u = s.min, c = s.max; o.min = u, o.max = c, o.nice = !0 } return "cat" !== t && "timeCat" !== t || (o.isRounding = !1), o }, e.createScale = function (t, e) { var n, r = this, s = r._getDef(t); if (!e || !e.length) return s && s.type ? (s.field = t, n = new a[o[s.type]](s)) : n = new a.Identity({ value: t, field: t.toString(), values: [t] }), n; var u = e[0][t]; if (null === u && (u = i.Array.firstValue(e, t)), i.isNumber(t) || i.isNil(u) && !s) n = new a.Identity({ value: t, field: t.toString(), values: [t] }); else { var c = r._getDefaultType(t, e, s), l = r._getScaleCfg(c, t, e, s); s && i.mix(l, s), n = new a[o[c]](l) } return n }, t }(); t.exports = s }, function (t, e, n) { var i = n(14); n(63), n(66), n(35), t.exports = i }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(9), a = n(4), o = n(14), s = n(64), u = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { t.prototype._initDefaultCfg.call(this); var e = this; e.type = "linear", e.isLinear = !0, e.nice = !1, e.min = null, e.minLimit = null, e.max = null, e.maxLimit = null, e.tickCount = null, e.tickInterval = null, e.minTickInterval = null, e.snapArray = null }, n.init = function () { var t = this; if (t.ticks) { var e = t.ticks, n = t.translate(e[0]), i = t.translate(e[e.length - 1]); (r(t.min) || t.min > n) && (t.min = n), (r(t.max) || t.max < i) && (t.max = i) } else t.min = t.translate(t.min), t.max = t.translate(t.max), t.initTicks() }, n.calculateTicks = function () { var t = this.min, e = this.max, n = this.minLimit, i = this.maxLimit, r = this.tickCount, a = this.tickInterval, o = this.minTickInterval, u = this.snapArray; if (1 === r) throw new Error("linear scale'tickCount should not be 1"); if (e < t) throw new Error("max: " + e + " should not be less than min: " + t); return s({ min: t, max: e, minLimit: n, maxLimit: i, minCount: r, maxCount: r, interval: a, minTickInterval: o, snapArray: u }).ticks }, n.initTicks = function () { var t = this, e = t.calculateTicks(); if (t.nice) t.ticks = e, t.min = e[0], t.max = e[e.length - 1]; else { var n = []; a(e, function (e) { e >= t.min && e <= t.max && n.push(e) }), n.length || (n.push(t.min), n.push(t.max)), t.ticks = n } }, n.scale = function (t) { if (r(t)) return NaN; var e = this.max, n = this.min; if (e === n) return 0; var i = (t - n) / (e - n), a = this.rangeMin(); return a + i * (this.rangeMax() - a) }, n.invert = function (t) { var e = (t - this.rangeMin()) / (this.rangeMax() - this.rangeMin()); return this.min + e * (this.max - this.min) }, e }(o); o.Linear = u, t.exports = u }, function (t, e, n) { var i = n(9), r = n(13), a = n(65), o = [0, 1, 1.2, 1.5, 1.6, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10], s = [0, 1, 2, 4, 5, 10]; t.exports = function (t) { var e = t.min, n = t.max, u = t.interval, c = t.minTickInterval, l = [], h = t.minCount || 5, f = t.maxCount || 7, p = h === f, g = i(t.minLimit) ? -1 / 0 : t.minLimit, d = i(t.maxLimit) ? 1 / 0 : t.maxLimit, v = (h + f) / 2, y = v, x = t.snapArray ? t.snapArray : p ? o : s; if (e === g && n === d && p && (u = (n - e) / (y - 1)), i(e) && (e = 0), i(n) && (n = 0), n === e && (0 === e ? n = 1 : e > 0 ? e = 0 : n = 0, n - e < 5 && !u && n - e >= 1 && (u = 1)), i(u)) { var m = (n - e) / (v - 1); u = a.snapFactorTo(m, x, "ceil"), f !== h && ((y = parseInt((n - e) / u, 10)) > f && (y = f), y < h && (y = h), u = a.snapFactorTo((n - e) / (y - 1), x, "floor")) } if (r(c) && u < c && (u = c), t.interval || f !== h) n = Math.min(a.snapMultiple(n, u, "ceil"), d), e = Math.max(a.snapMultiple(e, u, "floor"), g), y = Math.round((n - e) / u), e = a.fixedBase(e, u), n = a.fixedBase(n, u); else { v = parseInt(v, 10); var _, S = (n + e) / 2, b = a.snapMultiple(S, u, "ceil"), P = Math.floor((v - 2) / 2), w = b + P * u; _ = v % 2 == 0 ? b - P * u : b - (P + 1) * u, w < n && (w += u), _ > e && (_ -= u), n = a.fixedBase(w, u), e = a.fixedBase(_, u) } n = Math.min(n, d), e = Math.max(e, g), l.push(e); for (var C = 1; C < y; C++) { var M = a.fixedBase(u * C + e, u); M < n && l.push(M) } return l[l.length - 1] < n && l.push(n), { min: e, max: n, interval: u, count: y, ticks: l } } }, function (t, e) { function n(t) { var e = 1; if (t === 1 / 0 || t === -1 / 0) throw new Error("Not support Infinity!"); if (t < 1) { for (var n = 0; t < 1;)e /= 10, t *= 10, n++; e.toString().length > a && (e = parseFloat(e.toFixed(n))) } else for (; t > 10;)e *= 10, t /= 10; return e } function i(t, e) { var n = t.length; if (0 === n) return NaN; var i = t[0]; if (e < t[0]) return NaN; if (e >= t[n - 1]) return t[n - 1]; for (var r = 1; r < t.length && !(e < t[r]); r++)i = t[r]; return i } function r(t, e) { var n = t.length; if (0 === n) return NaN; var i; if (e > t[n - 1]) return NaN; if (e < t[0]) return t[0]; for (var r = 1; r < t.length; r++)if (e <= t[r]) { i = t[r]; break } return i } var a = 12, o = { snapFactorTo: function (t, e, i) { if (isNaN(t)) return NaN; var r = 1; if (0 !== t) { t < 0 && (r = -1); var s = n(t *= r); r *= s, t /= s } var u = (t = "floor" === i ? o.snapFloor(e, t) : "ceil" === i ? o.snapCeiling(e, t) : o.snapTo(e, t)) * r; return Math.abs(r) < 1 && u.toString().length > a && (u = t / parseInt(1 / r) * (r > 0 ? 1 : -1)), u }, snapMultiple: function (t, e, n) { return ("ceil" === n ? Math.ceil(t / e) : "floor" === n ? Math.floor(t / e) : Math.round(t / e)) * e }, snapTo: function (t, e) { var n = i(t, e), a = r(t, e); if (isNaN(n) || isNaN(a)) { if (t[0] >= e) return t[0]; var o = t[t.length - 1]; if (o <= e) return o } return Math.abs(e - n) < Math.abs(a - e) ? n : a }, snapFloor: function (t, e) { return i(t, e) }, snapCeiling: function (t, e) { return r(t, e) }, fixedBase: function (t, e) { var n = e.toString(), i = n.indexOf("."); if (-1 === i) return Math.round(t); var r = n.substr(i + 1).length; return r > 20 && (r = 20), parseFloat(t.toFixed(r)) } }; t.exports = o }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(14), a = n(13), o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { t.prototype._initDefaultCfg.call(this), this.isIdentity = !0, this.type = "identity", this.value = null }, n.getText = function () { return this.value.toString() }, n.scale = function (t) { return this.value !== t && a(t) ? t : this.range[0] }, n.invert = function () { return this.value }, e }(r); r.Identity = o, t.exports = o }, function (t, e, n) { function i(t) { var e = t.slice(0); if (e.length > 0) { var n = e[0], i = e[e.length - 1]; 0 !== n.value && e.unshift({ value: 0 }), 1 !== i.value && e.push({ value: 1 }) } return e } var r = n(0), a = n(68), o = n(1), s = n(5).Shape, u = function () { function t(t) { this.axisCfg = {}, this.frontPlot = null, this.backPlot = null, this.axes = {}, r.mix(this, t) } var e = t.prototype; return e._isHide = function (t) { var e = this.axisCfg; return !e || !1 === e[t] }, e._getLinePosition = function (t, e, n, i) { var r = "", a = t.field, o = this.axisCfg; return o[a] && o[a].position ? r = o[a].position : "x" === e ? r = i ? "left" : "bottom" : "y" === e && (r = n ? "right" : "left", i && (r = "bottom")), r }, e._getLineCfg = function (t, e, n) { var i, r, a = 1; return "x" === e ? (i = { x: 0, y: 0 }, r = { x: 1, y: 0 }) : "right" === n ? (i = { x: 1, y: 0 }, r = { x: 1, y: 1 }) : (i = { x: 0, y: 0 }, r = { x: 0, y: 1 }, a = -1), t.transposed && (a *= -1), { offsetFactor: a, start: t.convertPoint(i), end: t.convertPoint(r) } }, e._getCircleCfg = function (t) { return { startAngle: t.startAngle, endAngle: t.endAngle, center: t.center, radius: t.circleRadius } }, e._getRadiusCfg = function (t) { var e, n; return t.transposed ? (e = { x: 0, y: 0 }, n = { x: 1, y: 0 }) : (e = { x: 0, y: 0 }, n = { x: 0, y: 1 }), { offsetFactor: -1, start: t.convertPoint(e), end: t.convertPoint(n) } }, e._getAxisCfg = function (t, e, n, i, a) { var u = this, c = this.axisCfg, l = e.getTicks(), h = r.deepMix({ ticks: l, frontContainer: this.frontPlot, backContainer: this.backPlot }, a, c[e.field]), f = [], p = h.label, g = l.length, d = 0, v = 0, y = p; return r.each(l, function (t, e) { if (r.isFunction(p)) { var n = p(t.text, e, g); y = n ? r.mix({}, o._defaultAxis.label, n) : null } if (y) { var i = {}; y.textAlign && (i.textAlign = y.textAlign), y.textBaseline && (i.textBaseline = y.textBaseline); var a = new s.Text({ className: "axis-label", attrs: r.mix({ x: 0, y: 0, text: t.text, fontFamily: u.chart.get("canvas").get("fontFamily") }, y), value: t.value, textStyle: i, top: y.top, context: u.chart.get("canvas").get("context") }); f.push(a); var c = a.getBBox(), l = c.width, h = c.height; d = Math.max(d, l), v = Math.max(v, h) } }), h.labels = f, h.maxWidth = d, h.maxHeight = v, h }, e._createAxis = function (t, e, n, i, r) { void 0 === r && (r = ""); var a, s, u, c = this, l = t.type, h = t.transposed; if ("cartesian" === l || "rect" === l) { var f = c._getLinePosition(e, i, r, h); (u = o.axis[f]).position = f, a = "Line", s = f } else "x" === i && !h || "y" === i && h ? (u = o.axis.circle, a = "Circle", s = "circle") : (u = o.axis.radius, a = "Line", s = "radius"); var p = c._getAxisCfg(t, e, n, i, u); p.type = a, p.dimType = i, p.verticalScale = n, p.index = r, this.axes[s] = p }, e.createAxis = function (t, e, n) { var o = this; e && !o._isHide(e.field) && o._createAxis(t, e, n[0], "x"), r.each(n, function (n, i) { o._isHide(n.field) || o._createAxis(t, n, e, "y", i) }); var s = this.axes, u = o.chart; if (u._isAutoPadding()) { var c = r.parsePadding(u.get("padding")), l = r.parsePadding(u.get("appendPadding")), h = u.get("legendRange") || { top: 0, right: 0, bottom: 0, left: 0 }, f = ["auto" === c[0] ? h.top + 2 * l[0] : c[0], "auto" === c[1] ? h.right + l[1] : c[1], "auto" === c[2] ? h.bottom + l[2] : c[2], "auto" === c[3] ? h.left + l[3] : c[3]]; if (t.isPolar) { var p = s.circle; if (p) { var g = p.maxHeight, d = p.maxWidth, v = p.labelOffset; f[0] += g + v, f[1] += d + v, f[2] += g + v, f[3] += d + v } } else { if (s.right && "auto" === c[1]) { var y = s.right, x = y.maxWidth, m = y.labelOffset; f[1] += x + m } if (s.left && "auto" === c[3]) { var _ = s.left, S = _.maxWidth, b = _.labelOffset; f[3] += S + b } if (s.bottom && "auto" === c[2]) { var P = s.bottom, w = P.maxHeight, C = P.labelOffset; f[2] += w + C } } u.set("_padding", f), u._updateLayout(f) } r.each(s, function (e) { var n, s = e.type, u = e.grid, c = e.verticalScale, l = e.ticks, h = e.dimType, f = e.position, p = e.index; if (t.isPolar ? "Line" === s ? n = o._getRadiusCfg(t) : "Circle" === s && (n = o._getCircleCfg(t)) : n = o._getLineCfg(t, h, f), u && c) { var g = [], d = i(c.getTicks()); r.each(l, function (e) { var n = []; r.each(d, function (i) { var r = "x" === h ? e.value : i.value, a = "x" === h ? i.value : e.value; if (r >= 0 && r <= 1 && a >= 0 && a <= 1) { var o = t.convertPoint({ x: r, y: a }); n.push(o) } }), g.push({ points: n, _id: "axis-" + h + p + "-grid-" + e.tickValue }) }), e.gridPoints = g, t.isPolar && (e.center = t.center, e.startAngle = t.startAngle, e.endAngle = t.endAngle) } n._id = "axis-" + h, r.isNil(p) || (n._id = "axis-" + h + p), new a[s](r.mix(e, n)) }) }, e.clear = function () { this.axes = {}, this.frontPlot.clear(), this.backPlot.clear() }, t }(); t.exports = u }, function (t, e, n) { var i = n(24); n(69), t.exports = i }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(0), a = n(24), o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { t.prototype._initDefaultCfg.call(this), this.start = null, this.end = null }, n.getOffsetPoint = function (t) { var e = this.start, n = this.end; return { x: e.x + (n.x - e.x) * t, y: e.y + (n.y - e.y) * t } }, n.getAxisVector = function () { var t = this.start, e = this.end; return [e.x - t.x, e.y - t.y] }, n.drawLine = function (t) { var e = this.getContainer(t.top), n = this.start, i = this.end; e.addShape("line", { className: "axis-line", attrs: r.mix({ x1: n.x, y1: n.y, x2: i.x, y2: i.y }, t) }) }, e }(a); a.Line = o, t.exports = o }, function (t, e, n) { var i = n(0), r = n(30), a = n(31), o = n(37).requestAnimationFrame, s = function () { function t(t) { this._attrs = i.mix({ type: "canvas", children: [] }, t), this._initPixelRatio(), this._initCanvas() } var e = t.prototype; return e.get = function (t) { return this._attrs[t] }, e.set = function (t, e) { this._attrs[t] = e }, e._initPixelRatio = function () { this.get("pixelRatio") || this.set("pixelRatio", i.getPixelRatio()) }, e.beforeDraw = function () { var t = this._attrs.context, e = this._attrs.el; !i.isWx && !i.isMy && t && t.clearRect(0, 0, e.width, e.height) }, e._initCanvas = function () { var t, e = this, n = e.get("el"), r = e.get("context"); if (!(t = r ? r.canvas : i.isString(n) ? i.getDomById(n) : n)) throw new Error("Please specify the id or el of the chart!"); r && t && !t.getContext && (t.getContext = function () { return r }); var a = e.get("width"); a || (a = i.getWidth(t)); var o = e.get("height"); o || (o = i.getHeight(t)), e.set("canvas", this), e.set("el", t), e.set("context", r || t.getContext("2d")), e.changeSize(a, o) }, e.changeSize = function (t, e) { var n = this.get("pixelRatio"), r = this.get("el"); i.isBrowser && (r.style.width = t + "px", r.style.height = e + "px"), i.isWx || i.isMy || (r.width = t * n, r.height = e * n, 1 !== n && this.get("context").scale(n, n)), this.set("width", t), this.set("height", e) }, e.getWidth = function () { var t = this.get("pixelRatio"); return this.get("width") * t }, e.getHeight = function () { var t = this.get("pixelRatio"); return this.get("height") * t }, e.getPointByClient = function (t, e) { var n = this.get("el"), i = n.getBoundingClientRect(), r = i.right - i.left, a = i.bottom - i.top; return { x: (t - i.left) * (n.width / r), y: (e - i.top) * (n.height / a) } }, e._beginDraw = function () { this._attrs.toDraw = !0 }, e._endDraw = function () { this._attrs.toDraw = !1 }, e.draw = function () { function t() { e.set("animateHandler", o(function () { e.set("animateHandler", void 0), e.get("toDraw") && t() })), e.beforeDraw(); try { for (var n = e._attrs.context, r = e._attrs.children, a = 0, s = r.length; a < s; a++)r[a].draw(n); (i.isWx || i.isMy) && n.draw() } catch (t) { console.warn("error in draw canvas, detail as:"), console.warn(t), e._endDraw() } e._endDraw() } var e = this; e.get("destroyed") || (e.get("animateHandler") ? this._beginDraw() : t()) }, e.destroy = function () { this.get("destroyed") || (this.clear(), this._attrs = {}, this.set("destroyed", !0)) }, e.isDestroyed = function () { return this.get("destroyed") }, t }(); i.mix(s.prototype, r, { getGroupClass: function () { return a } }), t.exports = s }, function (t, e, n) { function i(t, e) { return (t % e + e) % e } function r(t, e) { s.each(t, function (t) { t = t.split(":"), e.addColorStop(Number(t[0]), t[1]) }) } function a(t, e, n) { var a = t.split(" "), o = a[0].slice(2, a[0].length - 1); o = i(parseFloat(o) * Math.PI / 180, 2 * Math.PI); var s, u, c = a.slice(1), l = e.getBBox(), h = l.minX, f = l.minY, p = l.maxX, g = l.maxY; o >= 0 && o < .5 * Math.PI ? (s = { x: h, y: f }, u = { x: p, y: g }) : .5 * Math.PI <= o && o < Math.PI ? (s = { x: p, y: f }, u = { x: h, y: g }) : Math.PI <= o && o < 1.5 * Math.PI ? (s = { x: p, y: g }, u = { x: h, y: f }) : (s = { x: h, y: g }, u = { x: p, y: f }); var d = Math.tan(o), v = d * d, y = (u.x - s.x + d * (u.y - s.y)) / (v + 1) + s.x, x = d * (u.x - s.x + d * (u.y - s.y)) / (v + 1) + s.y, m = n.createLinearGradient(s.x, s.y, y, x); return r(c, m), m } function o(t, e, n) { var i = t.split(" "), a = i[0].slice(2, i[0].length - 1); a = a.split(","); var o = parseFloat(a[0]), s = parseFloat(a[1]), u = parseFloat(a[2]), c = i.slice(1); if (0 === u) return c[c.length - 1].split(":")[1]; var l = e.getBBox(), h = l.width, f = l.height, p = l.minX, g = l.minY, d = Math.sqrt(h * h + f * f) / 2, v = n.createRadialGradient(p + h * o, g + f * s, u * d, p + h / 2, g + f / 2, d); return r(c, v), v } var s = n(0); t.exports = { parseStyle: function (t, e, n) { if ("(" === t[1]) try { var i = t[0]; if ("l" === i) return a(t, e, n); if ("r" === i) return o(t, e, n) } catch (t) { console.error("error in parsing gradient string, please check if there are any extra whitespaces."), console.error(t) } return t } } }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(0), a = n(2), o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initProperties = function () { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "rect" }, n.getDefaultAttrs = function () { return { x: 0, y: 0, width: 0, height: 0, radius: 0, lineWidth: 0 } }, n.createPath = function (t) { var e = this.get("attrs"), n = e.x, i = e.y, a = e.width, o = e.height; t.beginPath(); var s = e.radius; s && a * o ? (s = r.parsePadding(s), t.moveTo(n + s[0], i), t.lineTo(n + a - s[1], i), t.arc(n + a - s[1], i + s[1], s[1], -Math.PI / 2, 0, !1), t.lineTo(n + a, i + o - s[2]), t.arc(n + a - s[2], i + o - s[2], s[2], 0, Math.PI / 2, !1), t.lineTo(n + s[3], i + o), t.arc(n + s[3], i + o - s[3], s[3], Math.PI / 2, Math.PI, !1), t.lineTo(n, i + s[0]), t.arc(n + s[0], i + s[0], s[0], Math.PI, 3 * Math.PI / 2, !1), t.closePath()) : t.rect(n, i, a, o) }, n.calculateBox = function () { var t = this.get("attrs"), e = t.x, n = t.y; return { minX: e, minY: n, maxX: e + t.width, maxY: n + t.height } }, e }(a); a.Rect = o, t.exports = o }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(2), a = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initProperties = function () { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "circle" }, n.getDefaultAttrs = function () { return { x: 0, y: 0, r: 0, lineWidth: 0 } }, n.createPath = function (t) { var e = this.get("attrs"), n = e.x, i = e.y, r = e.r; t.beginPath(), t.arc(n, i, r, 0, 2 * Math.PI, !1), t.closePath() }, n.calculateBox = function () { var t = this.get("attrs"), e = t.x, n = t.y, i = t.r; return { minX: e - i, maxX: e + i, minY: n - i, maxY: n + i } }, e }(r); r.Circle = a, t.exports = a }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(2), a = n(10), o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initProperties = function () { t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.type = "line" }, n.getDefaultAttrs = function () { return { x1: 0, y1: 0, x2: 0, y2: 0, lineWidth: 1 } }, n.createPath = function (t) { var e = this.get("attrs"), n = e.x1, i = e.y1, r = e.x2, a = e.y2; t.beginPath(), t.moveTo(n, i), t.lineTo(r, a) }, n.calculateBox = function () { var t = this.get("attrs"), e = t.x1, n = t.y1, i = t.x2, r = t.y2, o = t.lineWidth; return a.getBBoxFromLine(e, n, i, r, o) }, e }(r); r.Line = o, t.exports = o }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(2), a = n(10), o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initProperties = function () { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "polygon" }, n.getDefaultAttrs = function () { return { points: null, lineWidth: 0 } }, n.createPath = function (t) { var e = this.get("attrs").points; t.beginPath(); for (var n = 0, i = e.length; n < i; n++) { var r = e[n]; 0 === n ? t.moveTo(r.x, r.y) : t.lineTo(r.x, r.y) } t.closePath() }, n.calculateBox = function () { var t = this.get("attrs").points; return a.getBBoxFromPoints(t) }, e }(r); r.Polygon = o, t.exports = o }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } function r(t) { for (var e = [], n = 0, i = t.length; n < i; n++) { var r = t[n]; isNaN(r.x) || isNaN(r.y) || e.push(r) } return e } var a = n(2), o = n(38), s = n(10), u = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initProperties = function () { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "polyline" }, n.getDefaultAttrs = function () { return { points: null, lineWidth: 1, smooth: !1 } }, n.createPath = function (t) { var e = this.get("attrs"), n = e.points, i = e.smooth, a = r(n); if (t.beginPath(), a.length) if (t.moveTo(a[0].x, a[0].y), i) for (var s = [[0, 0], [1, 1]], u = o.smooth(a, !1, s), c = 0, l = u.length; c < l; c++) { var h = u[c]; t.bezierCurveTo(h[1], h[2], h[3], h[4], h[5], h[6]) } else { var f, p; for (f = 1, p = a.length - 1; f < p; f++)t.lineTo(a[f].x, a[f].y); t.lineTo(a[p].x, a[p].y) } }, n.calculateBox = function () { var t = this.get("attrs"), e = t.points, n = t.smooth, i = t.lineWidth, a = r(e); if (n) { for (var u = [], c = [[0, 0], [1, 1]], l = o.smooth(a, !1, c), h = 0, f = l.length; h < f; h++) { var p = l[h]; if (0 === h) u.push([a[0].x, a[0].y, p[1], p[2], p[3], p[4], p[5], p[6]]); else { var g = l[h - 1]; u.push([g[5], g[6], p[1], p[2], p[3], p[4], p[5], p[6]]) } } return s.getBBoxFromBezierGroup(u, i) } return s.getBBoxFromPoints(a, i) }, e }(a); a.Polyline = u, t.exports = u }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(2), a = n(10), o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initProperties = function () { t.prototype._initProperties.call(this), this._attrs.canStroke = !0, this._attrs.canFill = !0, this._attrs.type = "arc" }, n.getDefaultAttrs = function () { return { x: 0, y: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !1, lineWidth: 1 } }, n.createPath = function (t) { var e = this.get("attrs"), n = e.x, i = e.y, r = e.r, a = e.startAngle, o = e.endAngle, s = e.clockwise; t.beginPath(), t.arc(n, i, r, a, o, s) }, n.calculateBox = function () { var t = this.get("attrs"), e = t.x, n = t.y, i = t.r, r = t.startAngle, o = t.endAngle, s = t.clockwise; return a.getBBoxFromArc(e, n, i, r, o, s) }, e }(r); r.Arc = o, t.exports = o }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(2), a = n(10), o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initProperties = function () { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "sector" }, n.getDefaultAttrs = function () { return { x: 0, y: 0, lineWidth: 0, r: 0, r0: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !1 } }, n.createPath = function (t) { var e = this.get("attrs"), n = e.x, i = e.y, r = e.startAngle, a = e.endAngle, o = e.r, s = e.r0, u = e.clockwise; t.beginPath(); var c = Math.cos(r), l = Math.sin(r); t.moveTo(c * s + n, l * s + i), t.lineTo(c * o + n, l * o + i), t.arc(n, i, o, r, a, u), t.lineTo(Math.cos(a) * s + n, Math.sin(a) * s + i), 0 !== s && t.arc(n, i, s, a, r, !u), t.closePath() }, n.calculateBox = function () { var t = this.get("attrs"), e = t.x, n = t.y, i = t.r, r = t.r0, o = t.startAngle, s = t.endAngle, u = t.clockwise, c = a.getBBoxFromArc(e, n, i, o, s, u), l = a.getBBoxFromArc(e, n, r, o, s, u); return { minX: Math.min(c.minX, l.minX), minY: Math.min(c.minY, l.minY), maxX: Math.max(c.maxX, l.maxX), maxY: Math.max(c.maxY, l.maxY) } }, e }(r); r.Sector = o, t.exports = o }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(0), a = n(2), o = 0, s = {}, u = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initProperties = function () { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "text" }, n.getDefaultAttrs = function () { return { lineWidth: 0, lineCount: 1, fontSize: 12, fontFamily: "sans-serif", fontStyle: "normal", fontWeight: "normal", fontVariant: "normal", textAlign: "start", textBaseline: "bottom", lineHeight: null, textArr: null } }, n._getFontStyle = function () { var t = this._attrs.attrs, e = t.fontSize, n = t.fontFamily, i = t.fontWeight; return t.fontStyle + " " + t.fontVariant + " " + i + " " + e + "px " + n }, n._afterAttrsSet = function () { var t = this._attrs.attrs; if (t.font = this._getFontStyle(), t.text) { var e = t.text, n = null, i = 1; r.isString(e) && -1 !== e.indexOf("\n") && (i = (n = e.split("\n")).length), t.lineCount = i, t.textArr = n } this.set("attrs", t) }, n._getTextHeight = function () { var t = this._attrs.attrs; if (t.height) return t.height; var e = t.lineCount, n = 1 * t.fontSize; return e > 1 ? n * e + this._getSpaceingY() * (e - 1) : n }, n._getSpaceingY = function () { var t = this._attrs.attrs, e = t.lineHeight, n = 1 * t.fontSize; return e ? e - n : .14 * n }, n.drawInner = function (t) { var e = this, n = e._attrs.attrs, i = n.text, a = n.x, o = n.y; if (!(r.isNil(i) || isNaN(a) || isNaN(o))) { var s = n.textArr, u = 1 * n.fontSize, c = e._getSpaceingY(); n.rotate && (t.translate(a, o), t.rotate(n.rotate), a = 0, o = 0); var l, h = n.textBaseline; s && (l = e._getTextHeight()); var f; if (e.hasFill()) { var p = n.fillOpacity; if (r.isNil(p) || 1 === p || (t.globalAlpha = p), s) for (var g = 0, d = s.length; g < d; g++) { var v = s[g]; f = o + g * (c + u) - l + u, "middle" === h && (f += l - u - (l - u) / 2), "top" === h && (f += l - u), t.fillText(v, a, f) } else t.fillText(i, a, o) } if (e.hasStroke()) if (s) for (var y = 0, x = s.length; y < x; y++) { var m = s[y]; f = o + y * (c + u) - l + u, "middle" === h && (f += l - u - (l - u) / 2), "top" === h && (f += l - u), t.strokeText(m, a, f) } else t.strokeText(i, a, o) } }, n.calculateBox = function () { var t = this, e = t._attrs.attrs, n = e.x, i = e.y, r = e.textAlign, a = e.textBaseline, o = t._getTextWidth(); if (!o) return { minX: n, minY: i, maxX: n, maxY: i }; var s = t._getTextHeight(), u = { x: n, y: i - s }; return r && ("end" === r || "right" === r ? u.x -= o : "center" === r && (u.x -= o / 2)), a && ("top" === a ? u.y += s : "middle" === a && (u.y += s / 2)), { minX: u.x, minY: u.y, maxX: u.x + o, maxY: u.y + s } }, n._getTextWidth = function () { var t = this._attrs.attrs; if (t.width) return t.width; var e = t.text, n = this.get("context"); if (!r.isNil(e)) { var i = t.font, a = t.textArr, u = e + "" + i; if (s[u]) return s[u]; var c = 0; if (a) for (var l = 0, h = a.length; l < h; l++) { var f = a[l]; c = Math.max(c, r.measureText(f, i, n).width) } else c = r.measureText(e, i, n).width; return o > 5e3 && (o = 0, s = {}), o++ , s[u] = c, c } }, e }(a); a.Text = u, t.exports = u }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(2), a = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initProperties = function () { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.createPath = null, this._attrs.type = "custom" }, n.createPath = function (t) { var e = this.get("createPath"); e && e.call(this, t) }, n.calculateBox = function () { var t = this.get("calculateBox"); return t && t.call(this) }, e }(r); r.Custom = a, t.exports = a }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(39), a = n(6); n(32); var o = function (t) { function e() { return t.apply(this, arguments) || this } return i(e, t), e.prototype.getDefaultCfg = function () { var e = t.prototype.getDefaultCfg.call(this); return e.type = "line", e.sortable = !0, e }, e }(r); a.Line = o, t.exports = o }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } function r(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } var a = n(6), o = n(0), s = n(40); n(83); var u = function (t) { function e(e) { var n; return n = t.call(this, e) || this, o.mix(r(r(n)), s), n } i(e, t); var n = e.prototype; return n.getDefaultCfg = function () { var e = t.prototype.getDefaultCfg.call(this); return e.type = "interval", e.shapeType = "interval", e.generatePoints = !0, e }, n.createShapePointsCfg = function (e) { var n = t.prototype.createShapePointsCfg.call(this, e); return n.size = this.getNormalizedSize(e), n }, n.clearInner = function () { t.prototype.clearInner.call(this), this.set("defaultSize", null) }, e }(a); a.Interval = u, t.exports = u }, function (t, e, n) { function i(t) { var e = t.x, n = t.y, i = t.y0, r = t.size, o = i, s = n; a.isArray(n) && (s = n[1], o = n[0]); var u, c; return a.isArray(e) ? (u = e[0], c = e[1]) : (u = e - r / 2, c = e + r / 2), [{ x: u, y: o }, { x: u, y: s }, { x: c, y: s }, { x: c, y: o }] } function r(t) { for (var e = [], n = [], i = 0, r = t.length; i < r; i++) { var a = t[i]; e.push(a.x), n.push(a.y) } var o = Math.min.apply(null, e), s = Math.min.apply(null, n); return { x: o, y: s, width: Math.max.apply(null, e) - o, height: Math.max.apply(null, n) - s } } var a = n(0), o = n(8), s = n(3), u = n(1), c = o.registerFactory("interval", { defaultShapeType: "rect", getDefaultPoints: function (t) { return i(t) } }); o.registerShape("interval", "rect", { draw: function (t, e) { var n = this.parsePoints(t.points), i = a.mix({ fill: t.color }, u.shape.interval, t.style); if (t.isInCircle) { var o = n.slice(0); this._coord.transposed && (o = [n[0], n[3], n[2], n[1]]); var c = t.center, l = c.x, h = c.y, f = [1, 0], p = [o[0].x - l, o[0].y - h], g = [o[1].x - l, o[1].y - h], d = [o[2].x - l, o[2].y - h], v = s.angleTo(f, g), y = s.angleTo(f, d), x = s.length(p), m = s.length(g); return v >= 1.5 * Math.PI && (v -= 2 * Math.PI), y >= 1.5 * Math.PI && (y -= 2 * Math.PI), e.addShape("Sector", { className: "interval", attrs: a.mix({ x: l, y: h, r: m, r0: x, startAngle: v, endAngle: y }, i) }) } var _ = r(n); return e.addShape("rect", { className: "interval", attrs: a.mix(_, i) }) } }), t.exports = c }, function (t, e, n) { t.exports = { Stack: n(85), Dodge: n(89) } }, function (t, e, n) { var i = n(86); t.exports = i }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(33), a = n(88), o = n(22), s = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { this.xField = null, this.yField = null }, n.processAdjust = function (t) { this.processStack(t) }, n.processStack = function (t) { var e = this, n = e.xField, i = e.yField, o = t.length, s = { positive: {}, negative: {} }; e.reverseOrder && (t = t.slice(0).reverse()); for (var u = 0; u < o; u++)for (var c = t[u], l = 0, h = c.length; l < h; l++) { var f = c[l], p = f[n] || 0, g = f[i], d = p.toString(); if (g = r(g) ? g[1] : g, !a(g)) { var v = g >= 0 ? "positive" : "negative"; s[v][d] || (s[v][d] = 0), f[i] = [s[v][d], g + s[v][d]], s[v][d] += g } } }, e }(o); o.Stack = s, t.exports = s }, function (t, e) { var n = {}.toString; t.exports = function (t, e) { return n.call(t) === "[object " + e + "]" } }, function (t, e) { t.exports = function (t) { return null === t || void 0 === t } }, function (t, e, n) { var i = n(90); t.exports = i }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(22), a = n(91), o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { this.marginRatio = .5, this.dodgeRatio = .5, this.adjustNames = ["x", "y"] }, n.getDodgeOffset = function (t, e, n) { var i = this, r = t.pre, a = t.next, o = a - r, s = o * i.dodgeRatio / n, u = i.marginRatio * s; return (r + a) / 2 + (.5 * (o - n * s - (n - 1) * u) + ((e + 1) * s + e * u) - .5 * s - .5 * o) }, n.processAdjust = function (t) { var e = this, n = t.length, i = e.xField; a(t, function (t, r) { for (var a = 0, o = t.length; a < o; a++) { var s = t[a], u = s[i], c = { pre: 1 === o ? u - 1 : u - .5, next: 1 === o ? u + 1 : u + .5 }, l = e.getDodgeOffset(c, r, n); s[i] = l } }) }, e }(r); r.Dodge = o, t.exports = o }, function (t, e, n) { var i = n(92), r = n(33); t.exports = function (t, e) { if (t) if (r(t)) for (var n = 0, a = t.length; n < a && !1 !== e(t[n], n); n++); else if (i(t)) for (var o in t) if (t.hasOwnProperty(o) && !1 === e(t[o], o)) break } }, function (t, e) { var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }; t.exports = function (t) { var e = void 0 === t ? "undefined" : n(t); return null !== t && "object" === e || "function" === e } }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(21), a = n(3), o = n(23), s = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { this.type = "polar", this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, this.inner = 0, this.innerRadius = 0, this.isPolar = !0, this.transposed = !1, this.center = null, this.radius = null }, n.init = function (t, e) { var n, i, r = this, a = r.inner || r.innerRadius, o = Math.abs(e.x - t.x), s = Math.abs(e.y - t.y); r.startAngle === -Math.PI && 0 === r.endAngle ? (n = Math.min(o / 2, s), i = { x: (t.x + e.x) / 2, y: t.y }) : (n = Math.min(o, s) / 2, i = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 }); var u = r.radius; u > 0 && u <= 1 && (n *= u), this.x = { start: r.startAngle, end: r.endAngle }, this.y = { start: n * a, end: n }, this.center = i, this.circleRadius = n }, n.convertPoint = function (t) { var e = this, n = e.center, i = e.transposed, r = i ? "y" : "x", a = i ? "x" : "y", o = e.x, s = e.y, u = o.start + (o.end - o.start) * t[r], c = s.start + (s.end - s.start) * t[a]; return { x: n.x + Math.cos(u) * c, y: n.y + Math.sin(u) * c } }, n.invertPoint = function (t) { var e = this, n = e.center, i = e.transposed, r = e.x, s = e.y, u = i ? "y" : "x", c = i ? "x" : "y", l = [1, 0, 0, 1, 0, 0]; o.rotate(l, l, r.start); var h = [1, 0]; a.transformMat2d(h, h, l), h = [h[0], h[1]]; var f = [t.x - n.x, t.y - n.y]; if (a.zero(f)) return { x: 0, y: 0 }; var p = a.angleTo(h, f, r.end < r.start); Math.abs(p - 2 * Math.PI) < .001 && (p = 0); var g = a.length(f), d = p / (r.end - r.start); d = r.end - r.start > 0 ? d : -d; var v = (g - s.start) / (s.end - s.start), y = {}; return y[u] = d, y[c] = v, y }, e }(r); r.Polar = s, t.exports = s }, function (t, e, n) { var i = n(15), r = n(34); t.exports = { toTimeStamp: function (t) { return i(t) && (t = t.indexOf("T") > 0 ? new Date(t).getTime() : new Date(t.replace(/-/gi, "/")).getTime()), r(t) && (t = t.getTime()), t } } }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(0), a = { circle: function (t, e, n, i) { i.arc(t, e, n, 0, 2 * Math.PI, !1) }, square: function (t, e, n, i) { i.moveTo(t - n, e - n), i.lineTo(t + n, e - n), i.lineTo(t + n, e + n), i.lineTo(t - n, e + n), i.closePath() } }, o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initProperties = function () { t.prototype._initProperties.call(this), this._attrs.canFill = !0, this._attrs.canStroke = !0, this._attrs.type = "marker" }, n.getDefaultAttrs = function () { return { x: 0, y: 0, lineWidth: 0 } }, n.createPath = function (t) { var e, n = this.get("attrs"), i = n.x, o = n.y, s = n.radius, u = n.symbol || "circle"; e = r.isFunction(u) ? u : a[u], t.beginPath(), e(i, o, s, t, this) }, n.calculateBox = function () { var t = this.get("attrs"), e = t.x, n = t.y, i = t.radius; return { minX: e - i, minY: n - i, maxX: e + i, maxY: n + i } }, e }(n(5).Shape); t.exports = o }, function (t, e, n) { var i = n(0), r = n(5).Group, a = n(95), o = function () { function t(t) { i.deepMix(this, this.getDefaultCfg(), t), this._init(), this._renderTitle(), this._renderItems() } var e = t.prototype; return e.getDefaultCfg = function () { return { showTitle: !1, title: null, items: null, titleGap: 12, itemGap: 10, itemMarginBottom: 12, itemFormatter: null, itemWidth: null, wordSpace: 6, x: 0, y: 0, layout: "horizontal", joinString: ": " } }, e._init = function () { var t = new r({ zIndex: this.zIndex || 0 }); this.container = t; var e = t.addGroup(); this.wrapper = e; var n = e.addGroup({ className: "itemsGroup" }); this.itemsGroup = n, this.parent && this.parent.add(t) }, e._renderTitle = function (t) { t = t || this.title; var e = this.titleShape, n = 0; if (this.showTitle && t) { if (e && !e.get("destroyed")) e.attr("text", t); else { var r = this.wrapper, a = this.titleStyle; e = r.addShape("text", { className: "title", attrs: i.mix({ x: 0, y: 0, text: t }, a) }), this.titleShape = e } n = e.getBBox().height + this.titleGap } this._titleHeight = n }, e._renderItems = function (t) { var e = this; (t = t || e.items) && (e.reversed && t.reverse(), i.each(t, function (t, n) { e._addItem(t, n) }), t.length > 1 && this._adjustItems(), this._renderBackground()) }, e._renderBackground = function () { var t = this.background; if (t) { var e = this.container, n = this.wrapper.getBBox(), r = n.minX, a = n.minY, o = n.width, s = n.height, u = t.padding || [0, 0, 0, 0]; u = i.parsePadding(u); var c = i.mix({ x: r - u[3], y: a - u[0], width: o + u[1] + u[3], height: s + u[0] + u[2] }, t), l = this.backShape; l ? l.attr(c) : l = e.addShape("Rect", { zIndex: -1, attrs: c }), this.backShape = l, e.sort() } }, e._addItem = function (t) { var e = this.itemsGroup.addGroup({ name: t.name, value: t.value, dataValue: t.dataValue, checked: t.checked }), n = this.unCheckStyle, r = this.unCheckColor, o = this.nameStyle, s = this.valueStyle, u = this.wordSpace, c = t.marker, l = t.value, h = 0; if (r && (n.fill = r), c) { var f = c.radius || 3, p = i.mix({ x: f, y: this._titleHeight }, c); !1 === t.checked && i.mix(p, n); var g = new a({ className: "item-marker", attrs: p }); e.add(g), h += g.getBBox().width + u } var d, v = t.name; if (v) { var y = this.joinString || ""; v = l ? v + y : v, d = e.addShape("text", { className: "name", attrs: i.mix({ x: h, y: this._titleHeight, text: this._formatItemValue(v) }, o, !1 === t.checked ? n : null) }) } if (l) { var x = h; d && (x += d.getBBox().width), e.addShape("text", { className: "value", attrs: i.mix({ x: x, y: this._titleHeight, text: l }, s, !1 === t.checked ? n : null) }) } return e }, e._formatItemValue = function (t) { var e = this.itemFormatter; return e && (t = e.call(this, t)), t }, e._getMaxItemWidth = function () { var t = this.itemWidth; if (i.isNumber(t) || i.isNil(t)) return t; if ("auto" === t) { for (var e = this.itemsGroup.get("children"), n = e.length, r = 0, a = 0; a < n; a++) { var o = e[a].getBBox().width; r = Math.max(r, o) } var s = this.maxLength, u = this.itemGap, c = (s - u) / 2, l = (s - 2 * u) / 3; return 2 === n ? Math.max(r, c) : r <= l ? l : r <= c ? c : r } }, e._adjustHorizontal = function () { for (var t, e, n = this.maxLength, i = this.itemsGroup.get("children"), r = this.itemGap, a = this.itemMarginBottom, o = this._titleHeight, s = 0, u = 0, c = this._getMaxItemWidth(), l = [], h = 0, f = i.length; h < f; h++) { var p = i[h], g = p.getBBox(), d = g.height, v = g.width; e = d + a, (t = c || v) - (n - u) > 1e-4 && (s++ , u = 0), p.moveTo(u, s * e), l.push({ x: u, y: s * e + o - d / 2, width: 1.375 * v, height: 1.375 * d }), u += t + r } this.legendHitBoxes = l }, e._adjustVertical = function () { for (var t, e, n = this.maxLength, r = this.itemsGroup, a = this.itemGap, o = this.itemMarginBottom, s = this.itemWidth, u = this._titleHeight, c = r.get("children"), l = 0, h = 0, f = 0, p = [], g = 0, d = c.length; g < d; g++) { var v = c[g], y = v.getBBox(); t = y.width, e = y.height, i.isNumber(s) ? h = s + a : t > h && (h = t + a), n - l < e ? (l = 0, f += h, v.moveTo(f, 0), p.push({ x: f, y: u - e / 2, width: 1.375 * t, height: 1.375 * e })) : (v.moveTo(f, l), p.push({ x: f, y: l - e / 2 + u, width: 1.375 * t, height: 1.375 * e })), l += e + o } this.legendHitBoxes = p }, e._adjustItems = function () { "horizontal" === this.layout ? this._adjustHorizontal() : this._adjustVertical() }, e.moveTo = function (t, e) { this.x = t, this.y = e; var n = this.container; return n && n.moveTo(t, e), this }, e.setItems = function (t) { this.clearItems(), this._renderItems(t) }, e.setTitle = function (t) { this._renderTitle(t) }, e.clearItems = function () { this.itemsGroup.clear() }, e.getWidth = function () { return this.container.getBBox().width }, e.getHeight = function () { return this.container.getBBox().height }, e.show = function () { this.container.show() }, e.hide = function () { this.container.hide() }, e.clear = function () { var t = this.container; t.clear(), t.remove(!0) }, t }(); t.exports = o }, function (t, e, n) { var i = n(0), r = { appear: { duration: 450, easing: "quadraticOut" }, update: { duration: 300, easing: "quadraticOut" }, enter: { duration: 300, easing: "quadraticOut" }, leave: { duration: 350, easing: "quadraticIn" } }, a = { defaultCfg: {}, Action: {}, getAnimation: function (t, e, n) { var r = this.defaultCfg[t]; if (r) { var a = r[n]; if (i.isFunction(a)) return a(e) } return !1 }, getAnimateCfg: function (t, e) { var n = r[e], a = this.defaultCfg[t]; return a && a.cfg && a.cfg[e] ? i.deepMix({}, n, a.cfg[e]) : n }, registerAnimation: function (t, e) { this.Action || (this.Action = {}), this.Action[t] = e } }; t.exports = a }, function (t, e, n) { var i = n(5).Matrix, r = n(0), a = { getCoordInfo: function (t) { var e = t.start, n = t.end; return { start: e, end: n, width: n.x - e.x, height: Math.abs(n.y - e.y) } }, getScaledMatrix: function (t, e, n) { var r; t.apply(e); var a = e[0], o = e[1]; if ("x" === n) { t.transform([["t", a, o], ["s", .01, 1], ["t", -a, -o]]); var s = t.getMatrix(); r = i.transform(s, [["t", a, o], ["s", 100, 1], ["t", -a, -o]]) } else if ("y" === n) { t.transform([["t", a, o], ["s", 1, .01], ["t", -a, -o]]); var u = t.getMatrix(); r = i.transform(u, [["t", a, o], ["s", 1, 100], ["t", -a, -o]]) } else if ("xy" === n) { t.transform([["t", a, o], ["s", .01, .01], ["t", -a, -o]]); var c = t.getMatrix(); r = i.transform(c, [["t", a, o], ["s", 100, 100], ["t", -a, -o]]) } return r }, getAnimateParam: function (t, e, n) { var i = {}; return t.delay && (i.delay = r.isFunction(t.delay) ? t.delay(e, n) : t.delay), i.easing = t.easing, i.duration = t.duration, i.delay = t.delay, i }, doAnimation: function (t, e, n, i) { var r = t._id, o = t.get("index"), s = a.getAnimateParam(n, o, r), u = s.easing, c = s.delay, l = s.duration, h = t.animate().to({ attrs: e, duration: l, delay: c, easing: u }); i && h.onEnd(function () { i() }) } }; t.exports = a }, , function (t, e, n) { var i = n(6); n(101), n(39), n(81), n(103), n(82), n(105), n(107), t.exports = i }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(0), a = n(6); n(102); var o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n.getDefaultCfg = function () { var e = t.prototype.getDefaultCfg.call(this); return e.type = "point", e.shapeType = "point", e.generatePoints = !0, e }, n.draw = function (t, e) { var n = this, i = n.get("container"); r.each(t, function (t) { var a = t.shape, o = n.getDrawCfg(t); if (r.isArray(t.y)) { var s = n.hasAdjust("stack"); r.each(t.y, function (r, u) { o.y = r, s && 0 === u || n.drawShape(a, t, o, i, e) }) } else r.isNil(t.y) || n.drawShape(a, t, o, i, e) }) }, e }(a); a.Point = o, t.exports = o }, function (t, e, n) { function i(t) { var e = { lineWidth: 0, stroke: t.color, fill: t.color }; return t.size && (e.size = t.size), a.mix(e, t.style), a.mix({}, o.shape.point, e) } function r(t, e, n) { if (0 !== t.size) { var r = i(t), o = r.r || r.size, s = t.x, u = a.isArray(t.y) ? t.y : [t.y]; "hollowCircle" === n && (r.lineWidth = 1, r.fill = null); for (var c = 0, l = u.length; c < l; c++)return "rect" === n ? e.addShape("Rect", { className: "point", attrs: a.mix({ x: s - o, y: u[c] - o, width: 2 * o, height: 2 * o }, r) }) : e.addShape("Circle", { className: "point", attrs: a.mix({ x: s, y: u[c], r: o }, r) }) } } var a = n(0), o = n(1), s = n(19), u = n(8), c = ["circle", "hollowCircle", "rect"], l = u.registerFactory("point", { defaultShapeType: "circle", getDefaultPoints: function (t) { return s.splitPoints(t) } }); a.each(c, function (t) { u.registerShape("point", t, { draw: function (e, n) { return r(e, n, t) } }) }), t.exports = l }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(6), a = n(19), o = n(0); n(104); var s = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n.getDefaultCfg = function () { var e = t.prototype.getDefaultCfg.call(this); return e.type = "area", e.shapeType = "area", e.generatePoints = !0, e.sortable = !0, e }, n.draw = function (t, e) { var n = this, i = n.get("container"), r = this.getDrawCfg(t[0]), s = n.getYScale(), u = n.get("connectNulls"), c = a.splitArray(t, s.field, u); r.origin = t, o.each(c, function (a, o) { r.splitedIndex = o; var s = a.map(function (t) { return t.points }); r.points = s, n.drawShape(r.shape, t[0], r, i, e) }) }, e }(r); r.Area = s, t.exports = s }, function (t, e, n) { function i(t, e) { return Math.abs(t - e) < 1e-5 } function r(t) { return !isNaN(t) && !c.isNil(t) } function a(t) { for (var e = [], n = 0, i = t.length; n < i; n++) { var a = t[n]; r(a.x) && r(a.y) && e.push(a) } return e } function o(t, e) { var n = !0; return c.each(t, function (t) { if (!i(t.x, e.x) || !i(t.y, e.y)) return n = !1, !1 }), n } function s(t, e, n, i, r) { var o = t.concat(e); return r ? n.addShape("Custom", { className: "area", attrs: c.mix({ points: o }, i), createPath: function (t) { var e = [[0, 0], [1, 1]], n = a(this._attrs.attrs.points), i = n.length, r = n.slice(0, i / 2), o = n.slice(i / 2, i), s = h.smooth(r, !1, e); t.beginPath(), t.moveTo(r[0].x, r[0].y); for (var u = 0, c = s.length; u < c; u++) { var l = s[u]; t.bezierCurveTo(l[1], l[2], l[3], l[4], l[5], l[6]) } if (o.length) { var f = h.smooth(o, !1, e); t.lineTo(o[0].x, o[0].y); for (var p = 0, g = f.length; p < g; p++) { var d = f[p]; t.bezierCurveTo(d[1], d[2], d[3], d[4], d[5], d[6]) } } t.closePath() }, calculateBox: function () { var t = a(this._attrs.attrs.points); return f.getBBoxFromPoints(t) } }) : n.addShape("Polyline", { className: "area", attrs: c.mix({ points: o }, i) }) } function u(t, e, n) { var i = this, r = t.points, a = [], u = []; c.each(r, function (t) { u.push(t[0]), a.push(t[1]) }); var l = c.mix({ fillStyle: t.color }, p.shape.area, t.style); return u.reverse(), a = i.parsePoints(a), u = i.parsePoints(u), t.isInCircle && (a.push(a[0]), u.unshift(u[u.length - 1]), o(u, t.center) && (u = [])), s(a, u, e, l, n) } var c = n(0), l = n(8), h = n(38), f = n(10), p = n(1), g = l.registerFactory("area", { defaultShapeType: "area", getDefaultPoints: function (t) { var e = t.x, n = t.y, i = t.y0; n = c.isArray(n) ? n : [i, n]; var r = []; return r.push({ x: e, y: n[0] }, { x: e, y: n[1] }), r } }), d = ["area", "smooth"]; c.each(d, function (t) { l.registerShape("area", t, { draw: function (e, n) { var i = "smooth" === t; return u.call(this, e, n, i) } }) }), t.exports = g }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(6), a = n(0); n(106); var o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n.getDefaultCfg = function () { var e = t.prototype.getDefaultCfg.call(this); return e.type = "polygon", e.shapeType = "polygon", e.generatePoints = !0, e }, n.createShapePointsCfg = function (e) { var n, i = t.prototype.createShapePointsCfg.call(this, e), r = this, o = i.x, s = i.y; if (!a.isArray(o) || !a.isArray(s)) { var u = r.getXScale(), c = r.getYScale(), l = .5 / (u.values ? u.values.length : u.ticks.length), h = .5 / (c.values ? c.values.length : c.ticks.length); u.isCategory && c.isCategory ? (o = [o - l, o - l, o + l, o + l], s = [s - h, s + h, s + h, s - h]) : a.isArray(o) ? (o = [(n = o)[0], n[0], n[1], n[1]], s = [s - h / 2, s + h / 2, s + h / 2, s - h / 2]) : a.isArray(s) && (s = [(n = s)[0], n[1], n[1], n[0]], o = [o - l / 2, o - l / 2, o + l / 2, o + l / 2]), i.x = o, i.y = s } return i }, e }(r); r.Polygon = o, t.exports = o }, function (t, e, n) { var i = n(8), r = n(0), a = i.registerFactory("polygon", { defaultShapeType: "polygon", getDefaultPoints: function (t) { for (var e = [], n = t.x, i = t.y, r = 0, a = n.length; r < a; r++)e.push({ x: n[r], y: i[r] }); return e } }); i.registerShape("polygon", "polygon", { draw: function (t, e) { var n = this.parsePoints(t.points), i = r.mix({ fill: t.color, points: n }, t.style); return e.addShape("Polygon", { className: "polygon", attrs: i }) } }), t.exports = a }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } function r(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } var a = n(6), o = n(0), s = n(40); n(108); var u = function (t) { function e(e) { var n; return n = t.call(this, e) || this, o.mix(r(r(n)), s), n } i(e, t); var n = e.prototype; return n.getDefaultCfg = function () { var e = t.prototype.getDefaultCfg.call(this); return e.type = "schema", e.shapeType = "schema", e.generatePoints = !0, e }, n.createShapePointsCfg = function (e) { var n = t.prototype.createShapePointsCfg.call(this, e); return n.size = this.getNormalizedSize(e), n }, n.clearInner = function () { t.prototype.clearInner.call(this), this.set("defaultSize", null) }, e }(a); a.Schema = u, t.exports = u }, function (t, e, n) { function i(t) { var e = t.sort(function (t, e) { return t < e ? 1 : -1 }), n = e.length; if (n < 4) for (var i = e[n - 1], r = 0; r < 4 - n; r++)e.push(i); return e } function r(t, e, n) { var r = i(e); return [{ x: t, y: r[0] }, { x: t, y: r[1] }, { x: t - n / 2, y: r[2] }, { x: t - n / 2, y: r[1] }, { x: t + n / 2, y: r[1] }, { x: t + n / 2, y: r[2] }, { x: t, y: r[2] }, { x: t, y: r[3] }] } var a = n(8), o = n(0), s = a.registerFactory("schema", {}); a.registerShape("schema", "candle", { getPoints: function (t) { return r(t.x, t.y, t.size) }, draw: function (t, e) { var n = this.parsePoints(t.points), i = o.mix({ stroke: t.color, fill: t.color, lineWidth: 1 }, t.style); return e.addShape("Custom", { className: "schema", attrs: i, createPath: function (t) { t.beginPath(), t.moveTo(n[0].x, n[0].y), t.lineTo(n[1].x, n[1].y), t.moveTo(n[2].x, n[2].y); for (var e = 3; e < 6; e++)t.lineTo(n[e].x, n[e].y); t.closePath(), t.moveTo(n[6].x, n[6].y), t.lineTo(n[7].x, n[7].y) } }) } }), t.exports = s }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(0), a = n(24), o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { t.prototype._initDefaultCfg.call(this), this.startAngle = -Math.PI / 2, this.endAngle = 3 * Math.PI / 2, this.radius = null, this.center = null }, n.getOffsetPoint = function (t) { var e = this.startAngle, n = e + (this.endAngle - e) * t; return this._getCirclePoint(n) }, n._getCirclePoint = function (t, e) { var n = this, i = n.center; return e = e || n.radius, { x: i.x + Math.cos(t) * e, y: i.y + Math.sin(t) * e } }, n.getTextAlignInfo = function (t, e) { var n, i = this.getOffsetVector(t, e), r = "middle"; return i[0] > 0 ? n = "left" : i[0] < 0 ? n = "right" : (n = "center", i[1] > 0 ? r = "top" : i[1] < 0 && (r = "bottom")), { textAlign: n, textBaseline: r } }, n.getAxisVector = function (t) { var e = this.center, n = this.offsetFactor; return [(t.y - e.y) * n, -1 * (t.x - e.x) * n] }, n.drawLine = function (t) { var e = this.center, n = this.radius, i = this.startAngle, a = this.endAngle; this.getContainer(t.top).addShape("arc", { className: "axis-line", attrs: r.mix({ x: e.x, y: e.y, r: n, startAngle: i, endAngle: a }, t) }) }, e }(a); a.Circle = o, t.exports = o }, function (t, e, n) { var i = n(111); t.exports = i }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(14), a = n(35), o = n(112), s = n(36), u = n(94), c = n(4), l = n(13), h = n(17), f = n(15), p = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { t.prototype._initDefaultCfg.call(this), this.type = "timeCat", this.sortable = !0, this.tickCount = 5, this.mask = "YYYY-MM-DD" }, n.init = function () { var t = this, e = this.values; c(e, function (n, i) { e[i] = t._toTimeStamp(n) }), this.sortable && e.sort(function (t, e) { return t - e }), t.ticks || (t.ticks = this.calculateTicks()) }, n.calculateTicks = function () { var t = this, e = t.tickCount; return e ? s({ maxCount: e, data: t.values, isRounding: t.isRounding }).ticks : t.values }, n.translate = function (t) { t = this._toTimeStamp(t); var e = this.values.indexOf(t); return -1 === e && (e = l(t) && t < this.values.length ? t : NaN), e }, n.scale = function (t) { var e, n = this.rangeMin(), i = this.rangeMax(), r = this.translate(t); return e = 1 === this.values.length || isNaN(r) ? r : r > -1 ? r / (this.values.length - 1) : 0, n + e * (i - n) }, n.getText = function (t) { var e = "", n = this.translate(t); e = n > -1 ? this.values[n] : t; var i = this.formatter; return e = parseInt(e, 10), e = i ? i(e) : o.format(e, this.mask) }, n.getTicks = function () { var t = this, e = this.ticks, n = []; return c(e, function (e) { var i; i = h(e) ? e : { text: f(e) ? e : t.getText(e), value: t.scale(e), tickValue: e }, n.push(i) }), n }, n._toTimeStamp = function (t) { return u.toTimeStamp(t) }, e }(a); r.TimeCat = p, t.exports = p }, function (t, e, n) { var i; !function (r) { "use strict"; function a(t, e) { for (var n = [], i = 0, r = t.length; i < r; i++)n.push(t[i].substr(0, e)); return n } function o(t) { return function (e, n, i) { var r = i[t].indexOf(n.charAt(0).toUpperCase() + n.substr(1).toLowerCase()); ~r && (e.month = r) } } function s(t, e) { for (t = String(t), e = e || 2; t.length < e;)t = "0" + t; return t } var u = {}, c = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g, l = /\d\d?/, h = /\d{3}/, f = /\d{4}/, p = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, g = /\[([^]*?)\]/gm, d = function () { }, v = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], y = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], x = a(y, 3), m = a(v, 3); u.i18n = { dayNamesShort: m, dayNames: v, monthNamesShort: x, monthNames: y, amPm: ["am", "pm"], DoFn: function (t) { return t + ["th", "st", "nd", "rd"][t % 10 > 3 ? 0 : (t - t % 10 != 10) * t % 10] } }; var _ = { D: function (t) { return t.getDate() }, DD: function (t) { return s(t.getDate()) }, Do: function (t, e) { return e.DoFn(t.getDate()) }, d: function (t) { return t.getDay() }, dd: function (t) { return s(t.getDay()) }, ddd: function (t, e) { return e.dayNamesShort[t.getDay()] }, dddd: function (t, e) { return e.dayNames[t.getDay()] }, M: function (t) { return t.getMonth() + 1 }, MM: function (t) { return s(t.getMonth() + 1) }, MMM: function (t, e) { return e.monthNamesShort[t.getMonth()] }, MMMM: function (t, e) { return e.monthNames[t.getMonth()] }, YY: function (t) { return String(t.getFullYear()).substr(2) }, YYYY: function (t) { return s(t.getFullYear(), 4) }, h: function (t) { return t.getHours() % 12 || 12 }, hh: function (t) { return s(t.getHours() % 12 || 12) }, H: function (t) { return t.getHours() }, HH: function (t) { return s(t.getHours()) }, m: function (t) { return t.getMinutes() }, mm: function (t) { return s(t.getMinutes()) }, s: function (t) { return t.getSeconds() }, ss: function (t) { return s(t.getSeconds()) }, S: function (t) { return Math.round(t.getMilliseconds() / 100) }, SS: function (t) { return s(Math.round(t.getMilliseconds() / 10), 2) }, SSS: function (t) { return s(t.getMilliseconds(), 3) }, a: function (t, e) { return t.getHours() < 12 ? e.amPm[0] : e.amPm[1] }, A: function (t, e) { return t.getHours() < 12 ? e.amPm[0].toUpperCase() : e.amPm[1].toUpperCase() }, ZZ: function (t) { var e = t.getTimezoneOffset(); return (e > 0 ? "-" : "+") + s(100 * Math.floor(Math.abs(e) / 60) + Math.abs(e) % 60, 4) } }, S = { D: [l, function (t, e) { t.day = e }], Do: [new RegExp(l.source + p.source), function (t, e) { t.day = parseInt(e, 10) }], M: [l, function (t, e) { t.month = e - 1 }], YY: [l, function (t, e) { var n = +("" + (new Date).getFullYear()).substr(0, 2); t.year = "" + (e > 68 ? n - 1 : n) + e }], h: [l, function (t, e) { t.hour = e }], m: [l, function (t, e) { t.minute = e }], s: [l, function (t, e) { t.second = e }], YYYY: [f, function (t, e) { t.year = e }], S: [/\d/, function (t, e) { t.millisecond = 100 * e }], SS: [/\d{2}/, function (t, e) { t.millisecond = 10 * e }], SSS: [h, function (t, e) { t.millisecond = e }], d: [l, d], ddd: [p, d], MMM: [p, o("monthNamesShort")], MMMM: [p, o("monthNames")], a: [p, function (t, e, n) { var i = e.toLowerCase(); i === n.amPm[0] ? t.isPm = !1 : i === n.amPm[1] && (t.isPm = !0) }], ZZ: [/([\+\-]\d\d:?\d\d|Z)/, function (t, e) { "Z" === e && (e = "+00:00"); var n, i = (e + "").match(/([\+\-]|\d\d)/gi); i && (n = 60 * i[1] + parseInt(i[2], 10), t.timezoneOffset = "+" === i[0] ? n : -n) }] }; S.dd = S.d, S.dddd = S.ddd, S.DD = S.D, S.mm = S.m, S.hh = S.H = S.HH = S.h, S.MM = S.M, S.ss = S.s, S.A = S.a, u.masks = { default: "ddd MMM DD YYYY HH:mm:ss", shortDate: "M/D/YY", mediumDate: "MMM D, YYYY", longDate: "MMMM D, YYYY", fullDate: "dddd, MMMM D, YYYY", shortTime: "HH:mm", mediumTime: "HH:mm:ss", longTime: "HH:mm:ss.SSS" }, u.format = function (t, e, n) { var i = n || u.i18n; if ("number" == typeof t && (t = new Date(t)), "[object Date]" !== Object.prototype.toString.call(t) || isNaN(t.getTime())) throw new Error("Invalid Date in fecha.format"); var r = []; return e = (e = u.masks[e] || e || u.masks.default).replace(g, function (t, e) { return r.push(e), "??" }), (e = e.replace(c, function (e) { return e in _ ? _[e](t, i) : e.slice(1, e.length - 1) })).replace(/\?\?/g, function () { return r.shift() }) }, u.parse = function (t, e, n) { var i = n || u.i18n; if ("string" != typeof e) throw new Error("Invalid format in fecha.parse"); if (e = u.masks[e] || e, t.length > 1e3) return !1; var r = !0, a = {}; if (e.replace(c, function (e) { if (S[e]) { var n = S[e], o = t.search(n[0]); ~o ? t.replace(n[0], function (e) { return n[1](a, e, i), t = t.substr(o + e.length), e }) : r = !1 } return S[e] ? "" : e.slice(1, e.length - 1) }), !r) return !1; var o = new Date; !0 === a.isPm && null != a.hour && 12 != +a.hour ? a.hour = +a.hour + 12 : !1 === a.isPm && 12 == +a.hour && (a.hour = 0); var s; return null != a.timezoneOffset ? (a.minute = +(a.minute || 0) - +a.timezoneOffset, s = new Date(Date.UTC(a.year || o.getFullYear(), a.month || 0, a.day || 1, a.hour || 0, a.minute || 0, a.second || 0, a.millisecond || 0))) : s = new Date(a.year || o.getFullYear(), a.month || 0, a.day || 1, a.hour || 0, a.minute || 0, a.second || 0, a.millisecond || 0), s }, void 0 !== t && t.exports ? t.exports = u : void 0 !== (i = function () { return u }.call(e, n, e, t)) && (t.exports = i) }() }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(0), a = n(12), o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { this.type = "arc", this.start = [], this.end = [], this.style = { stroke: "#999", lineWidth: 1 } }, n.render = function (t, e) { var n = this, i = n.parsePoint(t, n.start), a = n.parsePoint(t, n.end); if (i && a) { var o = t.center, s = Math.sqrt((i.x - o.x) * (i.x - o.x) + (i.y - o.y) * (i.y - o.y)), u = Math.atan2(i.y - o.y, i.x - o.x), c = Math.atan2(a.y - o.y, a.x - o.x), l = e.addShape("arc", { className: "guide-arc", attrs: r.mix({ x: o.x, y: o.y, r: s, startAngle: u, endAngle: c }, n.style) }); return n.element = l, l } }, e }(a); a.Arc = o, t.exports = o }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } function r(t, e, n, i) { var r = []; return "left" === t && "top" === e ? (r[0] = 0, r[1] = 0) : "right" === t && "top" === e ? (r[0] = -n, r[1] = 0) : "left" === t && "bottom" === e ? (r[0] = 0, r[1] = Math.floor(-i)) : "right" === t && "bottom" === e ? (r[0] = Math.floor(-n), r[1] = Math.floor(-i)) : "right" === t && "middle" === e ? (r[0] = Math.floor(-n), r[1] = Math.floor(-i / 2)) : "left" === t && "middle" === e ? (r[0] = 0, r[1] = Math.floor(-i / 2)) : "center" === t && "bottom" === e ? (r[0] = Math.floor(-n / 2), r[1] = Math.floor(-i)) : "center" === t && "top" === e ? (r[0] = Math.floor(-n / 2), r[1] = 0) : (r[0] = Math.floor(-n / 2), r[1] = Math.floor(-i / 2)), r } function a(t, e) { for (var n in e) e.hasOwnProperty(n) && (t.style[n] = e[n]); return t } function o(t) { var e = document.createElement("div"); return t = t.replace(/(^\s*)|(\s*$)/g, ""), e.innerHTML = "" + t, e.childNodes[0] } var s = n(0), u = n(12), c = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { this.type = "html", this.position = null, this.alignX = "center", this.alignY = "middle", this.offsetX = null, this.offsetY = null, this.html = null }, n.render = function (t, e) { var n = this, i = n.parsePoint(t, n.position); if (i) { var u = o(n.html); u = a(u, { position: "absolute", top: Math.floor(i.y) + "px", left: Math.floor(i.x) + "px", visibility: "hidden" }); var c = e.get("canvas").get("el"), l = c.parentNode; l = a(l, { position: "relative" }); var h = o('<div class="guideWapper" style="position: absolute;top: 0; left: 0;"></div>'); l.appendChild(h), h.appendChild(u); var f = c.offsetTop, p = c.offsetLeft, g = n.alignX, d = n.alignY, v = n.offsetX, y = n.offsetY, x = r(g, d, s.getWidth(u), s.getHeight(u)); i.x = i.x + x[0] + p, i.y = i.y + x[1] + f, v && (i.x += v), y && (i.y += y), a(u, { top: Math.floor(i.y) + "px", left: Math.floor(i.x) + "px", visibility: "visible" }), n.element = h } }, n.remove = function () { var t = this.element; t && t.parentNode && t.parentNode.removeChild(t) }, e }(u); u.Html = c, t.exports = c }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(0), a = n(12), o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { this.type = "line", this.start = [], this.end = [], this.style = { stroke: "#000", lineWidth: 1 } }, n.render = function (t, e) { var n = []; if (n[0] = this.parsePoint(t, this.start), n[1] = this.parsePoint(t, this.end), n[0] && n[1]) { var i = e.addShape("Line", { className: "guide-line", attrs: r.mix({ x1: n[0].x, y1: n[0].y, x2: n[1].x, y2: n[1].y }, this.style) }); return this.element = i, i } }, e }(a); a.Line = o, t.exports = o }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(0), a = n(12), o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { this.type = "rect", this.start = [], this.end = [], this.style = { fill: "#CCD7EB", opacity: .4 } }, n.render = function (t, e) { var n = this.parsePoint(t, this.start), i = this.parsePoint(t, this.end); if (n && i) { var a = e.addShape("rect", { className: "guide-rect", attrs: r.mix({ x: Math.min(n.x, i.x), y: Math.min(n.y, i.y), width: Math.abs(i.x - n.x), height: Math.abs(n.y - i.y) }, this.style) }); return this.element = a, a } }, e }(a); a.Rect = o, t.exports = o }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(0), a = n(12), o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { this.type = "text", this.position = null, this.content = null, this.style = { fill: "#000" }, this.offsetX = 0, this.offsetY = 0 }, n.render = function (t, e) { var n = this.position, i = this.parsePoint(t, n); if (i) { var a = this.content, o = this.style, s = this.offsetX, u = this.offsetY; s && (i.x += s), u && (i.y += u); var c = e.addShape("text", { className: "guide-text", attrs: r.mix({ x: i.x, y: i.y, text: a }, o) }); return this.element = c, c } }, e }(a); a.Text = o, t.exports = o }, function (t, e, n) { function i(t, e) { t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e } var r = n(0), a = n(12), o = function (t) { function e() { return t.apply(this, arguments) || this } i(e, t); var n = e.prototype; return n._initDefaultCfg = function () { this.type = "tag", this.position = null, this.content = null, this.direct = "tl", this.autoAdjust = !0, this.offsetX = 0, this.offsetY = 0, this.side = 4, this.background = { padding: 5, radius: 2, fill: "#1890FF" }, this.textStyle = { fontSize: 12, fill: "#fff", textAlign: "center", textBaseline: "middle" }, this.withPoint = !0, this.pointStyle = { fill: "#1890FF", r: 3, lineWidth: 1, stroke: "#fff" } }, n._getDirect = function (t, e, n, i) { var r = this.direct, a = this.side, o = t.get("canvas"), s = o.get("width"), u = o.get("height"), c = e.x, l = e.y, h = r[0], f = r[1]; "t" === h && l - a - i < 0 ? h = "b" : "b" === h && l + a + i > u && (h = "t"); var p = "c" === h ? a : 0; return "l" === f && c - p - n < 0 ? f = "r" : "r" === f && c + p + n > s ? f = "l" : "c" === f && (n / 2 + c + p > s ? f = "l" : c - n / 2 - p < 0 && (f = "r")), r = h + f }, n.render = function (t, e) { var n = this.parsePoint(t, this.position); if (n) { var i = this.content, a = this.background, o = this.textStyle, s = [], u = e.addGroup({ className: "guide-tag" }); if (this.withPoint) { var c = u.addShape("Circle", { className: "guide-tag-point", attrs: r.mix({ x: n.x, y: n.y }, this.pointStyle) }); s.push(c) } var l = u.addGroup(), h = l.addShape("text", { className: "guide-tag-text", zIndex: 1, attrs: r.mix({ x: 0, y: 0, text: i }, o) }); s.push(h); var f = h.getBBox(), p = r.parsePadding(a.padding), g = f.width + p[1] + p[3], d = f.height + p[0] + p[2], v = f.minY - p[0], y = f.minX - p[3], x = l.addShape("rect", { className: "guide-tag-bg", zIndex: -1, attrs: r.mix({ x: y, y: v, width: g, height: d }, a) }); s.push(x); var m, _ = this.autoAdjust ? this._getDirect(e, n, g, d) : this.direct, S = this.side, b = n.x + this.offsetX, P = n.y + this.offsetY, w = r.parsePadding(a.radius); "tl" === _ ? (m = [{ x: g + y - S - 1, y: d + v - 1 }, { x: g + y, y: d + v - 1 }, { x: g + y, y: d + S + v }], w[2] = 0, b -= g, P = P - S - d) : "cl" === _ ? (m = [{ x: g + y - 1, y: (d - S) / 2 + v - 1 }, { x: g + y - 1, y: (d + S) / 2 + v + 1 }, { x: g + S + y, y: d / 2 + v }], b = b - g - S, P -= d / 2) : "bl" === _ ? (m = [{ x: g + y, y: -S + v }, { x: g + y - S - 1, y: v + 1 }, { x: g + y, y: v + 1 }], w[1] = 0, b -= g, P += S) : "bc" === _ ? (m = [{ x: g / 2 + y, y: -S + v }, { x: (g - S) / 2 + y - 1, y: v + 1 }, { x: (g + S) / 2 + y + 1, y: v + 1 }], b -= g / 2, P += S) : "br" === _ ? (m = [{ x: y, y: v - S }, { x: y, y: v + 1 }, { x: y + S + 1, y: v + 1 }], w[0] = 0, P += S) : "cr" === _ ? (m = [{ x: y - S, y: d / 2 + v }, { x: y + 1, y: (d - S) / 2 + v - 1 }, { x: y + 1, y: (d + S) / 2 + v + 1 }], b += S, P -= d / 2) : "tr" === _ ? (m = [{ x: y, y: d + S + v }, { x: y, y: d + v - 1 }, { x: S + y + 1, y: d + v - 1 }], w[3] = 0, P = P - d - S) : "tc" === _ && (m = [{ x: (g - S) / 2 + y - 1, y: d + v - 1 }, { x: (g + S) / 2 + y + 1, y: d + v - 1 }, { x: g / 2 + y, y: d + S + v }], b -= g / 2, P = P - d - S); var C = l.addShape("Polygon", { className: "guide-tag-side", zIndex: 0, attrs: { points: m, fill: a.fill } }); return s.push(C), x.attr("radius", w), l.moveTo(b - y, P - v), l.sort(), this.element = u, s } }, e }(a); a.Tag = o, t.exports = o }, function (t, e, n) { function i(t) { var e = t.getAttr("color"); if (e) { var n = e.getScale(e.type); if (n.isLinear) return n } var i = t.getXScale(), r = t.getYScale(); return r || i } function r(t, e) { var n, r, a = t._getGroupScales(); if (a.length && l.each(a, function (t) { return r = t, !1 }), r) { var o = r.field; n = r.getText(e[o]) } else { var s = i(t); n = s.alias || s.field } return n } function a(t, e) { var n = i(t); return n.getText(e[n.field]) } function o(t, e) { var n = t.getAttr("position").getFields()[0], i = t.get("scales")[n]; return i.getText(e[i.field]) } function s(t, e) { var n = -1; return l.each(t, function (t, i) { if (t.title === e.title && t.name === e.name && t.value === e.value && t.color === e.color) return n = i, !1 }), n } function u(t) { var e = []; return l.each(t, function (t) { var n = s(e, t); -1 === n ? e.push(t) : e[n] = t }), e } function c(t, e) { return JSON.stringify(t) === JSON.stringify(e) } var l = n(0), h = n(1), f = n(120), p = n(26); h.tooltip = l.deepMix({ triggerOn: ["touchstart", "touchmove"], alwaysShow: !1, showTitle: !1, showCrosshairs: !1, crosshairsStyle: { stroke: "rgba(0, 0, 0, 0.25)", lineWidth: 1 }, showTooltipMarker: !0, background: { radius: 1, fill: "rgba(0, 0, 0, 0.65)", padding: [3, 5] }, titleStyle: { fontSize: 12, fill: "#fff", textAlign: "start", textBaseline: "top" }, nameStyle: { fontSize: 12, fill: "rgba(255, 255, 255, 0.65)", textAlign: "start", textBaseline: "middle" }, valueStyle: { fontSize: 12, fill: "#fff", textAlign: "start", textBaseline: "middle" }, showItemMarker: !0, itemMarkerStyle: { radius: 3, symbol: "circle", lineWidth: 1, stroke: "#fff" }, layout: "horizontal", snap: !1 }, h.tooltip || {}); var g = function () { function t(t) { this.enable = !0, this.cfg = {}, this.tooltip = null, this.chart = null, this.timeStamp = 0, l.mix(this, t); var e = this.chart; this.canvasDom = e.get("canvas").get("el") } var e = t.prototype; return e._setCrosshairsCfg = function () { var t = this.chart, e = l.mix({}, h.tooltip), n = t.get("geoms"), i = []; l.each(n, function (t) { var e = t.get("type"); -1 === i.indexOf(e) && i.push(e) }); var r = t.get("coord").type; return !n.length || "cartesian" !== r && "rect" !== r || 1 === i.length && -1 !== ["line", "area", "path", "point"].indexOf(i[0]) && l.mix(e, { showCrosshairs: !0 }), e }, e._getMaxLength = function (t) { void 0 === t && (t = {}); var e = t, n = e.layout, i = e.plotRange; return "horizontal" === n ? i.br.x - i.bl.x : i.bl.y - i.tr.y }, e.render = function () { var t = this; if (!t.tooltip) { var e = t.chart, n = e.get("canvas"), i = e.get("frontPlot").addGroup({ className: "tooltipContainer", zIndex: 10 }), r = e.get("backPlot").addGroup({ className: "tooltipContainer" }), a = e.get("plotRange"), o = e.get("coord"), s = t._setCrosshairsCfg(), u = t.cfg; (u = l.deepMix({ plotRange: a, frontPlot: i, backPlot: r, canvas: n, fixed: o.transposed || o.isPolar }, s, u)).maxLength = t._getMaxLength(u), this.cfg = u; var c = new f(u); t.tooltip = c, t.bindEvents() } }, e.clear = function () { var t = this.tooltip; t && t.destroy(), this.tooltip = null, this.prePoint = null, this._lastActive = null, this.unBindEvents() }, e._getTooltipMarkerStyle = function (t) { void 0 === t && (t = {}); var e = t, n = e.type, i = e.items, r = this.cfg; if ("rect" === n) { var a, o, s, u, c = this.chart, h = c.get("plotRange"), f = h.tl, p = h.br, g = c.get("coord"), d = i[0], v = i[i.length - 1], y = d.width; g.transposed ? (a = f.x, o = v.y - .75 * y, s = p.x - f.x, u = d.y - v.y + 1.5 * y) : (a = d.x - .75 * y, o = f.y, s = v.x - d.x + 1.5 * y, u = p.y - f.y), t.style = l.mix({ x: a, y: o, width: s, height: u, fill: "#CCD6EC", opacity: .3 }, r.tooltipMarkerStyle) } else t.style = l.mix({ radius: 4, fill: "#fff", lineWidth: 2 }, r.tooltipMarkerStyle); return t }, e._setTooltip = function (t, e, n) { void 0 === n && (n = {}); var i = this._lastActive, r = this.tooltip, a = this.cfg; e = u(e); var o = this.chart, s = o.get("coord"), h = o.getYScales()[0], f = a.snap; if (!1 === f && h.isLinear) { var g, d, v = s.invertPoint(t), y = o.get("plotRange"); p.isPointInPlot(t, y) && (s.transposed ? (g = h.invert(v.x), d = t.x, r.setXTipContent(g), r.setXTipPosition(d), r.setYCrosshairPosition(d)) : (g = h.invert(v.y), d = t.y, r.setYTipContent(g), r.setYTipPosition(d), r.setXCrosshairPosition(d))) } if (a.onShow && a.onShow({ x: t.x, y: t.y, tooltip: r, items: e, tooltipMarkerCfg: n }), c(i, e)) !1 === f && (l.directionEnabled(a.crosshairsType, "y") || a.showYTip) && this.chart.get("canvas").draw(); else { this._lastActive = e; var x = a.onChange; x && x({ x: t.x, y: t.y, tooltip: r, items: e, tooltipMarkerCfg: n }); var m = e[0], _ = m.title || m.name, S = m.x; if (e.length > 1 && (S = (e[0].x + e[e.length - 1].x) / 2), r.setContent(_, e, s.transposed), r.setPosition(e, t), s.transposed) { var b = m.y; e.length > 1 && (b = (e[0].y + e[e.length - 1].y) / 2), r.setYTipContent(_), r.setYTipPosition(b), r.setXCrosshairPosition(b), f && (r.setXTipContent(m.value), r.setXTipPosition(S), r.setYCrosshairPosition(S)) } else r.setXTipContent(_), r.setXTipPosition(S), r.setYCrosshairPosition(S), f && (r.setYTipContent(m.value), r.setYTipPosition(m.y), r.setXCrosshairPosition(m.y)); var P = n.items; a.showTooltipMarker && P.length ? (n = this._getTooltipMarkerStyle(n), r.setMarkers(n)) : r.clearMarkers(), r.show() } }, e.showTooltip = function (t) { var e, n, i = this, s = i.chart, u = [], c = [], f = i.cfg; f.showItemMarker && (n = f.itemMarkerStyle); var p = s.get("geoms"), g = s.get("coord"); if (l.each(p, function (i) { if (i.get("visible")) { var s = i.get("type"), f = i.getSnapRecords(t); l.each(f, function (t) { if (t.x && t.y) { var f = t.x, p = t.y, d = t._origin, v = t.color, y = { x: f, y: l.isArray(p) ? p[1] : p, color: v || h.defaultColor, origin: d, name: r(i, d), value: a(i, d), title: o(i, d) }; n && (y.marker = l.mix({ fill: v || h.defaultColor }, n)), c.push(y), -1 !== ["line", "area", "path"].indexOf(s) ? (e = "circle", u.push(y)) : "interval" !== s || "cartesian" !== g.type && "rect" !== g.type || (e = "rect", y.width = i.getSize(t._origin), u.push(y)) } }) } }), c.length) { var d = { items: u, type: e }; i._setTooltip(t, c, d) } else i.hideTooltip() }, e.hideTooltip = function () { var t = this.cfg; this._lastActive = null; var e = this.tooltip; e && (e.hide(), t.onHide && t.onHide({ tooltip: e }), this.chart.get("canvas").draw()) }, e.handleShowEvent = function (t) { var e = this.chart; if (this.enable && !e.get("_closeTooltip")) { var n = e.get("plotRange"), i = l.createEvent(t, e); if (p.isPointInPlot(i, n) || this.cfg.alwaysShow) { var r = this.timeStamp, a = +new Date; a - r > 16 && (this.showTooltip(i), this.timeStamp = a) } else this.hideTooltip() } }, e.handleHideEvent = function () { var t = this.chart; this.enable && !t.get("_closeTooltip") && this.hideTooltip() }, e.handleDocEvent = function (t) { var e = this.chart; if (this.enable && !e.get("_closeTooltip")) { var n = this.canvasDom; t.target !== n && this.hideTooltip() } }, e._handleEvent = function (t, e, n) { var i = this.canvasDom; l.each([].concat(t), function (t) { "bind" === n ? l.addEventListener(i, t, e) : l.removeEventListener(i, t, e) }) }, e.bindEvents = function () { var t = this.cfg, e = t.triggerOn, n = t.triggerOff, i = t.alwaysShow, r = l.wrapBehavior(this, "handleShowEvent"), a = l.wrapBehavior(this, "handleHideEvent"); if (e && this._handleEvent(e, r, "bind"), n && this._handleEvent(n, a, "bind"), !i) { var o = l.wrapBehavior(this, "handleDocEvent"); l.isBrowser && l.addEventListener(document, "touchstart", o) } }, e.unBindEvents = function () { var t = this.cfg, e = t.triggerOn, n = t.triggerOff, i = t.alwaysShow, r = l.getWrapBehavior(this, "handleShowEvent"), a = l.getWrapBehavior(this, "handleHideEvent"); if (e && this._handleEvent(e, r, "unBind"), n && this._handleEvent(n, a, "unBind"), !i) { var o = l.getWrapBehavior(this, "handleDocEvent"); l.isBrowser && l.removeEventListener(document, "touchstart", o) } }, t }(); t.exports = { init: function (t) { var e = new g({ chart: t }); t.set("tooltipController", e), t.tooltip = function (t, n) { return l.isObject(t) && (n = t, t = !0), e.enable = t, n && (e.cfg = n), this } }, afterGeomDraw: function (t) { var e = t.get("tooltipController"); e.render(), t.showTooltip = function (t) { return e.showTooltip(t), this }, t.hideTooltip = function () { return e.hideTooltip(), this } }, clearInner: function (t) { t.get("tooltipController").clear() } } }, function (t, e, n) { var i = n(0), r = n(95), a = n(96), o = n(121), s = function () { function t(t) { i.deepMix(this, this.getDefaultCfg(), t); var e = this.frontPlot; if (!this.custom) { var n = new a(i.mix({ parent: e, zIndex: 3 }, t)); this.container = n; var r = this.fixed, s = this.background; r || (this.tooltipArrow = e.addShape("Polygon", { className: "tooltip-arrow", visible: !1, zIndex: 2, attrs: i.mix({ points: [] }, s) })) } if (this.showXTip) { var u = this.xTipBackground, c = new o({ className: "xTip", background: u, visible: !1 }); e.add(c.container), this.xTipBox = c } if (this.showYTip) { var l = this.yTipBackground, h = new o({ className: "yTip", background: l, visible: !1 }); e.add(h.container), this.yTipBox = h } this.showCrosshairs && this._renderCrosshairs(), e.sort() } var e = t.prototype; return e.getDefaultCfg = function () { return { showCrosshairs: !1, crosshairsStyle: { stroke: "rgba(0, 0, 0, 0.25)", lineWidth: 1 }, crosshairsType: "y", showXTip: !1, showYTip: !1, xTip: null, xTipBackground: { radius: 1, fill: "rgba(0, 0, 0, 0.65)", padding: [3, 5] }, yTip: null, yTipBackground: { radius: 1, fill: "rgba(0, 0, 0, 0.65)", padding: [3, 5] }, background: null, layout: "horizontal", offsetX: 0, offsetY: 0 } }, e.setContent = function (t, e) { if (this.title = t, this.items = e, !this.custom) { var n = this.container; n.setTitle(t), n.setItems(e) } }, e.setYTipContent = function (t) { var e = this.yTip; t = i.isFunction(e) ? e(t) : i.mix({ text: t }, e), this.yTipBox && this.yTipBox.updateContent(t) }, e.setYTipPosition = function (t) { var e = this.plotRange, n = this.crosshairsShapeX; if (this.showYTip) { var i = this.yTipBox, r = i.getHeight(), a = i.getWidth(), o = e.tl.x - a, s = t - r / 2; s <= e.tl.y && (s = e.tl.y), s + r >= e.br.y && (s = e.br.y - r), o < 0 && (o = e.tl.x, n && n.attr("x1", e.tl.x + a)), i.updatePosition(o, s) } }, e.setXTipContent = function (t) { var e = this.xTip; t = i.isFunction(e) ? e(t) : i.mix({ text: t }, e), this.xTipBox && this.xTipBox.updateContent(t) }, e.setXTipPosition = function (t) { var e = this.showXTip, n = this.canvas, i = this.plotRange, r = this.xTipBox, a = this.crosshairsShapeY; if (e) { var o = n.get("height"), s = r.getWidth(), u = r.getHeight(), c = t - s / 2, l = i.br.y; c <= i.tl.x && (c = i.tl.x), c + s >= i.tr.x && (c = i.tr.x - s), o - l < u && (l -= u), r.updatePosition(c, l), a && a.attr("y1", l) } }, e.setXCrosshairPosition = function (t) { this.crosshairsShapeX && this.crosshairsShapeX.moveTo(0, t) }, e.setYCrosshairPosition = function (t) { this.crosshairsShapeY && this.crosshairsShapeY.moveTo(t, 0) }, e.setPosition = function (t) { var e = this.container, n = this.plotRange, r = this.offsetX, a = this.offsetY, o = this.fixed, s = this.tooltipArrow; if (e) { var u = e.container.getBBox(), c = u.minX, l = u.minY, h = u.width, f = u.height, p = n.tl, g = n.tr, d = 0, v = p.y - f - 4 + a; if (o) d = (p.x + g.x) / 2 - h / 2 + r; else { var y; if (y = t.length > 1 ? (t[0].x + t[t.length - 1].x) / 2 : t[0].x, (d = y - h / 2 + r) < p.x && (d = p.x), d + h > g.x && (d = g.x - h), s) { s.attr("points", [{ x: y - 3, y: p.y - 4 + a }, { x: y + 3, y: p.y - 4 + a }, { x: y, y: p.y + a }]); var x = e.backShape, m = i.parsePadding(x.attr("radius")); y === p.x ? (m[3] = 0, s.attr("points", [{ x: p.x, y: p.y + a }, { x: p.x, y: p.y - 4 + a }, { x: p.x + 4, y: p.y - 4 + a }])) : y === g.x && (m[2] = 0, s.attr("points", [{ x: g.x, y: p.y + a }, { x: g.x - 4, y: p.y - 4 + a }, { x: g.x, y: p.y - 4 + a }])), x.attr("radius", m) } } e.moveTo(d - c, v - l) } }, e.setMarkers = function (t) { void 0 === t && (t = {}); var e = this, n = t, a = n.items, o = n.style, s = n.type, u = e._getMarkerGroup(s); if ("circle" === s) for (var c = 0, l = a.length; c < l; c++) { var h = a[c], f = new r({ className: "tooltip-circle-marker", attrs: i.mix({ x: h.x, y: h.y, stroke: h.color }, o) }); u.add(f) } else u.addShape("rect", { className: "tooltip-rect-marker", attrs: o }) }, e.clearMarkers = function () { var t = this.markerGroup; t && t.clear() }, e.show = function () { var t = this.crosshairsShapeX, e = this.crosshairsShapeY, n = this.markerGroup, i = this.container, r = this.tooltipArrow, a = this.xTipBox, o = this.yTipBox, s = this.canvas; t && t.show(), e && e.show(), n && n.show(), i && i.show(), r && r.show(), a && a.show(), o && o.show(), s.draw() }, e.hide = function () { var t = this.crosshairsShapeX, e = this.crosshairsShapeY, n = this.markerGroup, i = this.container, r = this.tooltipArrow, a = this.xTipBox, o = this.yTipBox; t && t.hide(), e && e.hide(), n && n.hide(), i && i.hide(), r && r.hide(), a && a.hide(), o && o.hide() }, e.destroy = function () { var t = this.crosshairsShapeX, e = this.crosshairsShapeY, n = this.markerGroup, i = this.container, r = this.tooltipArrow, a = this.xTipBox, o = this.yTipBox; t && t.remove(!0), e && e.remove(!0), n && n.remove(!0), r && r.remove(!0), i && i.clear(), a && a.clear(), o && o.clear(), this.destroyed = !0 }, e._getMarkerGroup = function (t) { var e = this.markerGroup; return e ? e.clear() : ("circle" === t ? (e = this.frontPlot.addGroup({ zIndex: 1 }), this.frontPlot.sort()) : e = this.backPlot.addGroup(), this.markerGroup = e), e }, e._renderCrosshairs = function () { var t = this.crosshairsType, e = this.crosshairsStyle, n = this.frontPlot, r = this.plotRange, a = r.tl, o = r.br; i.directionEnabled(t, "x") && (this.crosshairsShapeX = n.addShape("Line", { className: "tooltip-crosshairs-x", zIndex: 0, visible: !1, attrs: i.mix({ x1: a.x, y1: 0, x2: o.x, y2: 0 }, e) })), i.directionEnabled(t, "y") && (this.crosshairsShapeY = n.addShape("Line", { className: "tooltip-crosshairs-y", zIndex: 0, visible: !1, attrs: i.mix({ x1: 0, y1: o.y, x2: 0, y2: a.y }, e) })) }, t }(); t.exports = s }, function (t, e, n) { var i = n(0), r = n(5).Group, a = function () { function t(t) { i.deepMix(this, this.getDefaultCfg(), t), this._init(); var e = this.content, n = this.x, r = this.y; i.isNil(e) || this.updateContent(e), this.updatePosition(n, r) } var e = t.prototype; return e.getDefaultCfg = function () { return { x: 0, y: 0, content: "", textStyle: { fontSize: 12, fill: "#fff", textAlign: "center", textBaseline: "middle" }, background: { radius: 1, fill: "rgba(0, 0, 0, 0.65)", padding: [3, 5] }, width: 0, height: 0, className: "" } }, e._init = function () { var t = this.content, e = this.textStyle, n = this.background, a = this.className, o = this.visible, s = new r({ className: a, zIndex: 0, visible: o }), u = s.addShape("Text", { className: a + "-text", zIndex: 1, attrs: i.mix({ text: t, x: 0, y: 0 }, e) }), c = s.addShape("Rect", { className: a + "-bg", zIndex: -1, attrs: i.mix({ x: 0, y: 0, width: 0, height: 0 }, n) }); s.sort(), this.container = s, this.textShape = u, this.backgroundShape = c }, e._getBBox = function () { var t = this.textShape, e = this.background, n = t.getBBox(), r = i.parsePadding(e.padding), a = n.width + r[1] + r[3], o = n.height + r[0] + r[2]; return { x: n.minX - r[3], y: n.minY - r[0], width: a, height: o } }, e.updateContent = function (t) { var e = this.textShape, n = this.backgroundShape; if (!i.isNil(t)) { i.isObject(t) || (t = { text: t }), e.attr(t); var r = this._getBBox(), a = r.x, o = r.y, s = r.width, u = r.height, c = this.width || s, l = this.height || u; n.attr({ x: a, y: o, width: c, height: l }), this._width = c, this._height = l, this.content = t.text } }, e.updatePosition = function (t, e) { var n = this.container, i = this._getBBox(), r = i.x, a = i.y; n.moveTo(t - r, e - a), this.x = t - r, this.y = e - a }, e.getWidth = function () { return this._width }, e.getHeight = function () { return this._height }, e.show = function () { this.container.show() }, e.hide = function () { this.container.hide() }, e.clear = function () { var t = this.container; t.clear(), t.remove(!0), this.container = null, this.textShape = null, this.backgroundShape = null }, t }(); t.exports = a }, function (t, e, n) { var i = n(0), r = n(12), a = n(1); a.guide = i.deepMix({ line: { style: { stroke: "#a3a3a3", lineWidth: 1 }, top: !0 }, text: { style: { fill: "#787878", textAlign: "center", textBaseline: "middle" }, offsetX: 0, offsetY: 0, top: !0 }, rect: { style: { fill: "#fafafa" }, top: !1 }, arc: { style: { stroke: "#a3a3a3" }, top: !0 }, html: { offsetX: 0, offsetY: 0, alignX: "center", alignY: "middle" }, tag: { top: !0, offsetX: 0, offsetY: 0, side: 4, background: { padding: 5, radius: 2, fill: "#1890FF" }, textStyle: { fontSize: 12, fill: "#fff", textAlign: "center", textBaseline: "middle" } }, point: { top: !0, offsetX: 0, offsetY: 0, style: { fill: "#fff", r: 3, lineWidth: 2, stroke: "#1890ff" } } }, a.guide || {}); var o = function () { function t(t) { this.guides = [], this.xScale = null, this.yScales = null, this.guideShapes = [], i.mix(this, t) } var e = t.prototype; return e._toString = function (t) { return i.isFunction(t) && (t = t(this.xScale, this.yScales)), t = t.toString() }, e._getId = function (t, e) { var n = e.id; if (!n) { var i = e.type; n = "arc" === i || "line" === i || "rect" === i ? this._toString(e.start) + "-" + this._toString(e.end) : this._toString(e.position) } return n }, e.paint = function (t) { var e = this, n = e.chart, r = e.guides, a = e.xScale, o = e.yScales, s = []; i.each(r, function (i, r) { i.xScale = a, i.yScales = o; var u; "regionFilter" === i.type ? i.chart = n : u = i.top ? e.frontPlot : e.backPlot, i.coord = t, i.container = u, i.canvas = n.get("canvas"); var c = i.render(t, u); if (c) { var l = e._getId(c, i);[].concat(c).forEach(function (t) { t._id = t.get("className") + "-" + l, t.set("index", r), s.push(t) }) } }), e.guideShapes = s }, e.clear = function () { return this.reset(), this.guides = [], this }, e.reset = function () { var t = this.guides; i.each(t, function (t) { t.remove() }) }, e._createGuide = function (t, e) { var n = i.upperFirst(t), o = new r[n](i.deepMix({}, a.guide[t], e)); return this.guides.push(o), o }, e.line = function (t) { return void 0 === t && (t = {}), this._createGuide("line", t) }, e.text = function (t) { return void 0 === t && (t = {}), this._createGuide("text", t) }, e.arc = function (t) { return void 0 === t && (t = {}), this._createGuide("arc", t) }, e.html = function (t) { return void 0 === t && (t = {}), this._createGuide("html", t) }, e.rect = function (t) { return void 0 === t && (t = {}), this._createGuide("rect", t) }, e.tag = function (t) { return void 0 === t && (t = {}), this._createGuide("tag", t) }, e.point = function (t) { return void 0 === t && (t = {}), this._createGuide("point", t) }, e.regionFilter = function (t) { return void 0 === t && (t = {}), this._createGuide("regionFilter", t) }, t }(); t.exports = { init: function (t) { var e = new o({ frontPlot: t.get("frontPlot").addGroup({ zIndex: 20, className: "guideContainer" }), backPlot: t.get("backPlot").addGroup({ className: "guideContainer" }) }); t.set("guideController", e), t.guide = function () { return e } }, afterGeomDraw: function (t) { var e = t.get("guideController"); if (e.guides.length) { var n = t.getXScale(), i = t.getYScales(), r = t.get("coord"); e.xScale = n, e.yScales = i, e.chart = t, e.paint(r) } }, clear: function (t) { t.get("guideController").clear() }, repaint: function (t) { t.get("guideController").reset() } } }, function (t, e, n) { function i(t, e) { var n = 0; switch (e = r.parsePadding(e), t) { case "top": n = e[0]; break; case "right": n = e[1]; break; case "bottom": n = e[2]; break; case "left": n = e[3] }return n } var r = n(0), a = n(96), o = n(1), s = { itemMarginBottom: 12, itemGap: 10, showTitle: !1, titleStyle: { fontSize: 12, fill: "#808080", textAlign: "start", textBaseline: "top" }, nameStyle: { fill: "#808080", fontSize: 12, textAlign: "start", textBaseline: "middle" }, valueStyle: { fill: "#000000", fontSize: 12, textAlign: "start", textBaseline: "middle" }, unCheckStyle: { fill: "#bfbfbf" }, itemWidth: "auto", wordSpace: 6, selectedMode: "multiple" }; o.legend = r.deepMix({ common: s, right: r.mix({ position: "right", layout: "vertical" }, s), left: r.mix({ position: "left", layout: "vertical" }, s), top: r.mix({ position: "top", layout: "horizontal" }, s), bottom: r.mix({ position: "bottom", layout: "horizontal" }, s) }, o.legend || {}); var u = function () { function t(t) { this.legendCfg = {}, this.enable = !0, this.position = "top", r.mix(this, t); var e = this.chart; this.canvasDom = e.get("canvas").get("el"), this.clear() } var e = t.prototype; return e.addLegend = function (t, e, n) { var i = this, r = i.legendCfg, a = t.field, o = r[a]; if (!1 === o) return null; if (o && o.custom) i.addCustomLegend(a); else { var s = r.position || i.position; o && o.position && (s = o.position), t.isCategory && i._addCategoryLegend(t, e, s, n) } }, e.addCustomLegend = function (t) { var e = this, n = e.legendCfg; t && n[t] && (n = n[t]); var i = n.position || e.position, s = e.legends; s[i] = s[i] || []; var u = n.items; if (!u) return null; var c = e.container; r.each(u, function (t) { r.isPlainObject(t.marker) ? t.marker.radius = t.marker.radius || 3 : t.marker = { symbol: t.marker || "circle", fill: t.fill, radius: 3 }, t.checked = !!r.isNil(t.checked) || t.checked, t.name = t.name || t.value }); var l = new a(r.deepMix({}, o.legend[i], n, { maxLength: e._getMaxLength(i), items: u, parent: c })); s[i].push(l) }, e.clear = function () { var t = this.legends; r.each(t, function (t) { r.each(t, function (t) { t.clear() }) }), this.legends = {}, this.unBindEvents() }, e._isFiltered = function (t, e, n) { var i = !1; return r.each(e, function (e) { if (i = i || t.getText(e) === t.getText(n)) return !1 }), i }, e._getMaxLength = function (t) { var e = this.chart, n = r.parsePadding(e.get("appendPadding")); return "right" === t || "left" === t ? e.get("height") - (n[0] + n[2]) : e.get("width") - (n[1] + n[3]) }, e._addCategoryLegend = function (t, e, n, i) { var s = this, u = s.legendCfg, c = s.legends, l = s.container, h = s.chart, f = t.field; c[n] = c[n] || []; var p = "circle"; u[f] && u[f].marker ? p = u[f].marker : u.marker && (p = u.marker), r.each(e, function (e) { r.isPlainObject(p) ? r.mix(e.marker, p) : e.marker.symbol = p, i && (e.checked = s._isFiltered(t, i, e.dataValue)) }), h.get("legendItems")[f] = e; var g = r.deepMix({}, o.legend[n], u[f] || u, { maxLength: s._getMaxLength(n), items: e, field: f, filterVals: i, parent: l }); g.showTitle && r.deepMix(g, { title: t.alias || t.field }); var d = new a(g); return c[n].push(d), d }, e._alignLegend = function (t, e, n) { var i = this, a = i.plotRange, o = a.tl, s = a.bl, u = i.chart, c = t.offsetX || 0, l = t.offsetY || 0, h = u.get("width"), f = u.get("height"), p = r.parsePadding(u.get("appendPadding")), g = t.getHeight(), d = t.getWidth(), v = 0, y = 0; if ("left" === n || "right" === n) { var x = t.verticalAlign || "middle", m = Math.abs(o.y - s.y); v = "left" === n ? p[3] : h - d - p[1], y = (m - g) / 2 + o.y, "top" === x ? y = o.y : "bottom" === x && (y = s.y - g), e && (y = e.get("y") - g - 12) } else { var _ = t.align || "left"; if (v = p[3], "center" === _ ? v = h / 2 - d / 2 : "right" === _ && (v = h - (d + p[1])), y = "top" === n ? p[0] + Math.abs(t.container.getBBox().minY) : f - g, e) { var S = e.getWidth(); v = e.x + S + 12 } } "bottom" === n && l > 0 && (l = 0), "right" === n && c > 0 && (c = 0), t.moveTo(v + c, y + l) }, e.alignLegends = function () { var t = this, e = t.legends; return r.each(e, function (e, n) { r.each(e, function (i, r) { var a = e[r - 1]; t._alignLegend(i, a, n) }) }), t }, e.handleEvent = function (t) { var e = this, n = e.chart, i = r.createEvent(t, n), a = function (t, n) { var i = null, a = e.legends; return r.each(a, function (e) { r.each(e, function (e) { var a = e.itemsGroup, o = e.legendHitBoxes, s = a.get("children"); if (s.length) { var u = e.x, c = e.y; r.each(o, function (r, a) { if (t >= r.x + u && t <= r.x + r.width + u && n >= r.y + c && n <= r.height + r.y + c) return i = { clickedItem: s[a], clickedLegend: e }, !1 }) } }) }), i }(i.x, i.y); if (a && !1 !== a.clickedLegend.clickable) { var o = a.clickedItem, s = a.clickedLegend; if (s.onClick) t.clickedItem = o, s.onClick(t); else if (!s.custom) { var u = o.get("checked"), c = o.get("dataValue"), l = s.filterVals, h = s.field; "single" === s.selectedMode ? n.filter(h, function (t) { return t === c }) : (u ? r.Array.remove(l, c) : l.push(c), n.filter(h, function (t) { return -1 !== l.indexOf(t) })), n.repaint() } } }, e.bindEvents = function () { var t = this.legendCfg.triggerOn || "touchstart", e = r.wrapBehavior(this, "handleEvent"); r.addEventListener(this.canvasDom, t, e) }, e.unBindEvents = function () { var t = this.legendCfg.triggerOn || "touchstart", e = r.getWrapBehavior(this, "handleEvent"); r.removeEventListener(this.canvasDom, t, e) }, t }(); t.exports = { init: function (t) { var e = new u({ container: t.get("backPlot"), plotRange: t.get("plotRange"), chart: t }); t.set("legendController", e), t.legend = function (t, n) { var i = e.legendCfg; return e.enable = !0, r.isBoolean(t) ? (e.enable = t, i = n || {}) : r.isObject(t) ? i = t : i[t] = n, e.legendCfg = i, this } }, beforeGeomDraw: function (t) { var e = t.get("legendController"); if (!e.enable) return null; var n = e.legendCfg; if (n && n.custom) e.addCustomLegend(); else { var a = t.getLegendItems(), o = t.get("scales"), s = t.get("filters"); r.each(a, function (t, n) { var i, r = o[n], a = r.values; i = s && s[n] ? a.filter(s[n]) : a.slice(0), e.addLegend(r, t, i) }) } n && !1 !== n.clickable && e.bindEvents(); var u = e.legends, c = { top: 0, right: 0, bottom: 0, left: 0 }; r.each(u, function (e, n) { var a = 0; r.each(e, function (t) { var e = t.getWidth(), i = t.getHeight(); "top" === n || "bottom" === n ? (a = Math.max(a, i), t.offsetY > 0 && (a += t.offsetY)) : (a = Math.max(a, e), t.offsetX > 0 && (a += t.offsetX)) }), c[n] = a + i(n, t.get("appendPadding")) }), t.set("legendRange", c) }, afterGeomDraw: function (t) { t.get("legendController").alignLegends() }, clearInner: function (t) { t.get("legendController").clear(), t.set("legendRange", null) } } }, function (t, e, n) { function i(t, e) { var n = {}; for (var i in e) f.isNumber(t[i]) && t[i] !== e[i] ? n[i] = e[i] : f.isArray(t[i]) && JSON.stringify(t[i]) !== JSON.stringify(e[i]) && (n[i] = e[i]); return n } function r(t, e, n) { var i, r = t.get("type"), a = "geom" + n + "-" + r, o = t.getXScale(), s = t.getYScale(), u = o.field || "x", c = s.field || "y", l = e[c]; i = o.isIdentity ? o.value : e[u], a += "interval" === r || "schema" === r ? "-" + i : "line" === r || "area" === r || "path" === r ? "-" + r : o.isCategory ? "-" + i : "-" + i + "-" + l; var h = t._getGroupScales(); return f.each(h, function (t) { var n = t.field; "identity" !== t.type && (a += "-" + e[n]) }), a } function a(t, e, n) { var i = []; return f.each(t, function (t, a) { var o = t.get("container").get("children"), s = t.get("type"), u = f.isNil(t.get("animateCfg")) ? l(s, e) : t.get("animateCfg"); !1 !== u && f.each(o, function (e, o) { e.get("className") === s && (e._id = r(t, e.get("origin")._origin, a), e.set("coord", n), e.set("animateCfg", u), e.set("index", o), i.push(e)) }), t.set("shapes", o) }), i } function o(t) { for (var e = {}, n = 0, i = t.length; n < i; n++) { var r = t[n]; if (r._id && !r.isClip) { var a = r._id; e[a] = { _id: a, type: r.get("type"), attrs: f.mix({}, r._attrs.attrs), className: r.get("className"), geomType: r.get("className"), index: r.get("index"), coord: r.get("coord"), animateCfg: r.get("animateCfg") } } } return e } function s(t, e, n, i) { return f.isFunction(i) ? i : f.isString(i) ? v.Action[i] : v.getAnimation(t, e, n) } function u(t, e, n) { if (!1 === n || f.isObject(n) && !1 === n[e]) return !1; var i = v.getAnimateCfg(t, e); return n && n[e] ? f.deepMix({}, i, n[e]) : i } function c(t, e, n) { var r, a, o = [], c = []; f.each(e, function (e) { var n = t[e._id]; n ? (e.set("cacheShape", n), o.push(e), delete t[e._id]) : c.push(e) }), f.each(t, function (t) { var e = t.className, i = t.coord, o = t._id, c = t.attrs, l = t.index, h = t.type; if (!1 === (a = u(e, "leave", t.animateCfg))) return !0; if (r = s(e, i, "leave", a.animation), f.isFunction(r)) { var p = n.addShape(h, { attrs: c, index: l, canvas: n, className: e }); p._id = o, r(p, a, i) } }), f.each(o, function (t) { var e = t.get("className"); if (!1 === (a = u(e, "update", t.get("animateCfg")))) return !0; var n = t.get("coord"), o = t.get("cacheShape").attrs, c = i(o, t._attrs.attrs); Object.keys(c).length && (r = s(e, n, "update", a.animation), f.isFunction(r) ? r(t, a, n) : (t.attr(o), t.animate().to({ attrs: c, duration: a.duration, easing: a.easing, delay: a.delay }).onEnd(function () { t.set("cacheShape", null) }))) }), f.each(c, function (t) { var e = t.get("className"), n = t.get("coord"); if (!1 === (a = u(e, "enter", t.get("animateCfg")))) return !0; if (r = s(e, n, "enter", a.animation), f.isFunction(r)) if ("interval" === e && n.isPolar && n.transposed) { var i = t.get("index"), c = o[i - 1]; r(t, a, c) } else r(t, a, n) }) } function l(t, e) { if (!t) return null; var n = e.get("animate"); return t.indexOf("guide-tag") > -1 && (t = "guide-tag"), f.isObject(n) ? n[t] : !1 !== n && null } var h, f = n(0), p = n(25), g = n(125), d = n(126), v = n(97), y = n(128), x = n(129), m = n(18); p.prototype.animate = function () { var t = f.mix({}, this.get("attrs")); return new d(this, t, h) }, m.prototype.animate = function (t) { return this.set("animate", t), this }, v.Action = y, v.defaultCfg = { interval: { enter: function (t) { return t.isPolar && t.transposed ? function (t) { t.set("zIndex", -1), t.get("parent").sort() } : y.fadeIn } }, area: { enter: function (t) { return t.isPolar ? null : y.fadeIn } }, line: { enter: function (t) { return t.isPolar ? null : y.fadeIn } }, path: { enter: function (t) { return t.isPolar ? null : y.fadeIn } } }; var _ = { line: function (t) { return t.isPolar ? x.groupScaleInXY : x.groupWaveIn }, area: function (t) { return t.isPolar ? x.groupScaleInXY : x.groupWaveIn }, path: function (t) { return t.isPolar ? x.groupScaleInXY : x.groupWaveIn }, point: function () { return x.shapesScaleInXY }, interval: function (t) { var e; return t.isPolar ? (e = x.groupScaleInXY, t.transposed && (e = x.groupWaveIn)) : e = t.transposed ? x.groupScaleInX : x.groupScaleInY, e }, schema: function () { return x.groupWaveIn } }; t.exports = { afterCanvasInit: function () { (h = new g).play() }, beforeCanvasDraw: function (t) { if (!1 !== t.get("animate")) { var e = t.get("isUpdate"), n = t.get("canvas"), i = t.get("coord"), r = t.get("geoms"), h = n.get("caches") || []; 0 === h.length && (e = !1); var p = a(r, t, i), g = t.get("axisController"), d = g.frontPlot, y = g.backPlot, m = d.get("children").concat(y.get("children")), S = []; t.get("guideController") && (S = t.get("guideController").guideShapes); var b = []; if (m.concat(S).forEach(function (e) { var n = l(e.get("className"), t); e.set("coord", i), e.set("animateCfg", n), b.push(e), p.push(e) }), n.set("caches", o(p)), e) c(h, p, n); else { var P, w; f.each(r, function (e) { var n = e.get("type"), r = f.isNil(e.get("animateCfg")) ? l(n, t) : e.get("animateCfg"); if (!1 !== r) if (P = u(n, "appear", r), w = s(n, i, "appear", P.animation), f.isFunction(w)) { var a = e.get("shapes"); f.each(a, function (t) { w(t, P, i) }) } else if (_[n]) { w = x[P.animation] || _[n](i); var o = e.getYScale(), c = i.convertPoint({ x: 0, y: o.scale(e.getYMinValue()) }), h = e.get("container"); w && w(h, P, i, c) } }), f.each(b, function (t) { var e = t.get("animateCfg"), n = t.get("className"); if (e && e.appear) { var r = v.getAnimateCfg(n, "appear"), a = f.deepMix({}, r, e.appear), o = s(n, i, "appear", a.animation); f.isFunction(o) && o(t, a, i) } }) } } }, afterCanvasDestroyed: function () { h.stop() } } }, function (t, e, n) { var i = n(37).requestAnimationFrame, r = "object" == typeof performance && performance.now ? performance : Date, a = function () { function t() { this.anims = [], this.time = null, this.playing = !1, this.canvas = [] } var e = t.prototype; return e.play = function () { function t() { e.playing && (i(t), e.update()) } var e = this; e.time = r.now(), e.playing = !0, i(t) }, e.stop = function () { this.playing = !1, this.time = null, this.canvas = [] }, e.update = function () { var t = r.now(); this.canvas = []; for (var e = 0; e < this.anims.length; e++) { var n = this.anims[e]; if (!(t < n.startTime || n.hasEnded)) { var i = n.shape; if (i.get("destroyed")) this.anims.splice(e, 1), e--; else { var a = n.startState, o = n.endState, s = n.interpolate, u = n.duration; t >= n.startTime && !n.hasStarted && (n.hasStarted = !0, n.onStart && n.onStart()); var c = (t - n.startTime) / u; if (c = Math.max(0, Math.min(c, 1)), c = n.easing(c), n.onFrame) n.onFrame(c); else for (var l in s) { var h = (0, s[l])(c), f = void 0; if ("points" === l) { f = []; for (var p = Math.max(a.points.length, o.points.length), g = 0; g < p; g += 2)f.push({ x: h[g], y: h[g + 1] }) } else f = h; i._attrs.attrs[l] = f, i._attrs.bbox = null } var d = i.get("canvas"); -1 === this.canvas.indexOf(d) && this.canvas.push(d), n.onUpdate && n.onUpdate(c), t >= n.endTime && !n.hasEnded && (n.hasEnded = !0, n.onEnd && n.onEnd()), 1 === c && (this.anims.splice(e, 1), e--) } } } this.canvas.map(function (t) { return t.draw(), t }), this.time = r.now() }, t }(); t.exports = a }, function (t, e, n) { function i(t) { for (var e = [], n = 0, i = t.length; n < i; n++)t[n] && (e.push(t[n].x), e.push(t[n].y)); return e } function r(t, e) { return t = +t, e -= t, function (n) { return t + e * n } } function a(t, e) { var n, i = e ? e.length : 0, a = t ? Math.min(i, t.length) : 0, o = new Array(a), s = new Array(i); for (n = 0; n < a; ++n)o[n] = r(t[n], e[n]); for (; n < i; ++n)s[n] = e[n]; return function (t) { for (n = 0; n < a; ++n)s[n] = o[n](t); return s } } var o = n(127), s = function () { function t(t, e, n) { this.hasStarted = !1, this.hasEnded = !1, this.shape = t, this.source = e, this.timeline = n, this.animate = null } var e = t.prototype; return e.to = function (t) { void 0 === t && (t = {}); var e, n = t.delay || 0, s = t.attrs || {}, u = t.duration || 1e3; e = "function" == typeof t.easing ? t.easing : o[t.easing] || o.linear; var c = { shape: this.shape, startTime: this.timeline.time + n, duration: u, easing: e }, l = {}; for (var h in s) { var f = this.source[h], p = s[h]; "points" === h ? (f = i(f), p = i(p), l.points = a(f, p), this.source.points = f, s.points = p) : "matrix" === h ? l.matrix = a(f, p) : l[h] = r(f, p) } return c.interpolate = l, c.startState = this.source, c.endState = s, c.endTime = c.startTime + u, this.timeline.anims.push(c), this.animate = c, this }, e.onFrame = function (t) { return this.animate && (this.animate.onFrame = function (e) { t(e) }), this }, e.onStart = function (t) { return this.animate && (this.animate.onStart = function () { t() }), this }, e.onUpdate = function (t) { return this.animate && (this.animate.onUpdate = function (e) { t(e) }), this }, e.onEnd = function (t) { return this.animate && (this.animate.onEnd = function () { t() }), this }, t }(); t.exports = s }, function (t, e) { var n = { linear: function (t) { return t }, quadraticIn: function (t) { return t * t }, quadraticOut: function (t) { return t * (2 - t) }, quadraticInOut: function (t) { return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1) }, cubicIn: function (t) { return t * t * t }, cubicOut: function (t) { return --t * t * t + 1 }, cubicInOut: function (t) { return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2) }, elasticIn: function (t) { var e, n = .1, i = .4; return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), !n || n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i)) }, elasticOut: function (t) { var e, n = .1, i = .4; return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), !n || n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / i) + 1) }, elasticInOut: function (t) { var e, n = .1, i = .4; return 0 === t ? 0 : 1 === t ? 1 : (i || (i = .3), !n || n < 1 ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / i) * .5 + 1) }, backIn: function (t) { var e = 1.70158; return t * t * ((e + 1) * t - e) }, backOut: function (t) { var e = 1.70158; return (t -= 1) * t * ((e + 1) * t + e) + 1 }, backInOut: function (t) { var e = 2.5949095; return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2) }, bounceIn: function (t) { return 1 - n.bounceOut(1 - t) }, bounceOut: function (t) { return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }, bounceInOut: function (t) { return t < .5 ? .5 * n.bounceIn(2 * t) : .5 * n.bounceOut(2 * t - 1) + .5 } }; t.exports = n }, function (t, e, n) { var i = n(0), r = n(98); t.exports = { fadeIn: function (t, e) { var n = i.isNil(t.attr("fillOpacity")) ? 1 : t.attr("fillOpacity"), a = i.isNil(t.attr("strokeOpacity")) ? 1 : t.attr("strokeOpacity"); t.attr("fillOpacity", 0), t.attr("strokeOpacity", 0); var o = { fillOpacity: n, strokeOpacity: a }; r.doAnimation(t, o, e) } } }, function (t, e, n) { function i(t, e, n, i, r) { var o, u, c = a.getCoordInfo(n), l = c.start, h = c.end, f = c.width, p = c.height, g = new s.Rect({ attrs: { x: l.x, y: h.y, width: f, height: p } }); "y" === r ? (o = l.x + f / 2, u = i.y < l.y ? i.y : l.y) : "x" === r ? (o = i.x > l.x ? i.x : l.x, u = l.y + p / 2) : "xy" === r && (n.isPolar ? (o = n.center.x, u = n.center.y) : (o = (l.x + h.x) / 2, u = (l.y + h.y) / 2)); var d = a.getScaledMatrix(g, [o, u], r); g.isClip = !0, g.endState = { matrix: d }, g.set("canvas", t.get("canvas")), t.attr("clip", g); a.doAnimation(g, g.endState, e, function () { t.attr("clip", null), g.remove(!0) }) } function r(t, e, n) { for (var i, r, o, s = t.get("children"), u = 0, c = s.length; u < c; u++) { var l = s[u], h = l.getBBox(); i = (h.minX + h.maxX) / 2, r = (h.minY + h.maxY) / 2, o = a.getScaledMatrix(l, [i, r], n), a.doAnimation(l, { matrix: o }, e) } } var a = n(98), o = n(26), s = n(5).Shape; t.exports = { groupWaveIn: function (t, e, n) { var i = o.getClip(n); i.set("canvas", t.get("canvas")), t.attr("clip", i); var r = {}; if (n.isPolar) { var s = n.startAngle, u = n.endAngle; r.endAngle = u, i.attr("endAngle", s) } else { var c = n.start, l = n.end, h = Math.abs(c.x - l.x), f = Math.abs(c.y - l.y); n.isTransposed ? (i.attr("height", 0), r.height = f) : (i.attr("width", 0), r.width = h) } a.doAnimation(i, r, e, function () { t.attr("clip", null), i.remove(!0) }) }, groupScaleInX: function (t, e, n, r) { i(t, e, n, r, "x") }, groupScaleInY: function (t, e, n, r) { i(t, e, n, r, "y") }, groupScaleInXY: function (t, e, n, r) { i(t, e, n, r, "xy") }, shapesScaleInX: function (t, e) { r(t, e, "x") }, shapesScaleInY: function (t, e) { r(t, e, "y") }, shapesScaleInXY: function (t, e) { r(t, e, "xy") } } }, , , , , function (t, e, n) { var i = n(42); n(100), n(84), n(93), n(109), n(110), n(113), n(114), n(115), n(116), n(117), n(118); var r = n(119), a = n(122), o = n(123), s = n(124); i.Animate = n(97), i.Chart.plugins.register([r, o, a, s]), t.exports = i }]) });

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(51);
var hiddenKeys = __webpack_require__(41).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 71 */,
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73);
module.exports = __webpack_require__(9).Object.assign;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(12);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(74) });


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(29);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(31);
var toObject = __webpack_require__(43);
var IObject = __webpack_require__(52);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(21)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(19);
var toLength = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(76);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53);
__webpack_require__(44);
__webpack_require__(58);
__webpack_require__(85);
__webpack_require__(93);
__webpack_require__(94);
module.exports = __webpack_require__(9).Promise;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);
var defined = __webpack_require__(36);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(56);
var descriptor = __webpack_require__(22);
var setToStringTag = __webpack_require__(32);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(15)(IteratorPrototype, __webpack_require__(10)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(29);

module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(43);
var IE_PROTO = __webpack_require__(39)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(83);
var step = __webpack_require__(84);
var Iterators = __webpack_require__(25);
var toIObject = __webpack_require__(19);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(54)(Array, 'Array', function (iterated, kind) {
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
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var global = __webpack_require__(7);
var ctx = __webpack_require__(20);
var classof = __webpack_require__(59);
var $export = __webpack_require__(12);
var isObject = __webpack_require__(16);
var aFunction = __webpack_require__(28);
var anInstance = __webpack_require__(86);
var forOf = __webpack_require__(87);
var speciesConstructor = __webpack_require__(63);
var task = __webpack_require__(64).set;
var microtask = __webpack_require__(89)();
var newPromiseCapabilityModule = __webpack_require__(45);
var perform = __webpack_require__(65);
var userAgent = __webpack_require__(90);
var promiseResolve = __webpack_require__(66);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(10)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(91)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(32)($Promise, PROMISE);
__webpack_require__(92)(PROMISE);
Wrapper = __webpack_require__(9)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(67)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(20);
var call = __webpack_require__(60);
var isArrayIter = __webpack_require__(61);
var anObject = __webpack_require__(13);
var toLength = __webpack_require__(37);
var getIterFn = __webpack_require__(62);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 88 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var macrotask = __webpack_require__(64).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(23)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(7);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(15);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(7);
var core = __webpack_require__(9);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(14);
var SPECIES = __webpack_require__(10)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(12);
var core = __webpack_require__(9);
var global = __webpack_require__(7);
var speciesConstructor = __webpack_require__(63);
var promiseResolve = __webpack_require__(66);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(12);
var newPromiseCapability = __webpack_require__(45);
var perform = __webpack_require__(65);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(9);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Store */
/* unused harmony export install */
/* unused harmony export mapState */
/* unused harmony export mapMutations */
/* unused harmony export mapGetters */
/* unused harmony export mapActions */
/* unused harmony export createNamespacedHelpers */
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    "development" !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ("development" !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ("development" !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["a"] = (index_esm);


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = Object({"NODE_ENV":"development"}).NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(102);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(107);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26), __webpack_require__(101)))

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function isBuffer(arg) {
  return arg instanceof Buffer;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(103).Buffer))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(104)
var ieee754 = __webpack_require__(105)
var isArray = __webpack_require__(106)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 105 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 106 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 107 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(112), __esModule: true };

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(113);
var $Object = __webpack_require__(9).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(12);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(14), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_we_cropper__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_we_cropper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_we_cropper__);


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



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'mpvue-cropper',
  props: {
    option: {
      type: Object
    }
  },
  data: function data() {
    return {
      _wecropper: null
    };
  },

  computed: {
    _canvasId: function _canvasId() {
      return this.option.id;
    },
    _targetId: function _targetId() {
      return this.option.targetId;
    },
    _width: function _width() {
      return this.option.width;
    },
    _height: function _height() {
      return this.option.height;
    },
    _pixelRatio: function _pixelRatio() {
      return this.option.pixelRatio;
    }
  },
  methods: {
    touchstart: function touchstart($event) {
      this._wecropper.touchStart($event.mp);
    },
    touchmove: function touchmove($event) {
      this._wecropper.touchMove($event.mp);
    },
    touchend: function touchend($event) {
      this._wecropper.touchEnd($event.mp);
    },
    pushOrigin: function pushOrigin(src) {
      this._wecropper.pushOrign(src);
    },
    updateCanvas: function updateCanvas() {
      this._wecropper.updateCanvas();
    },
    getCropperBase64: function getCropperBase64() {
      var _this = this;

      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this._wecropper.getCropperImage(function (src) {
          src ? resolve(src) : reject();
        });
      });
    },
    getCropperImage: function getCropperImage() {
      var _this2 = this;

      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this2._wecropper.getCropperImage(function (src) {
          src ? resolve(src) : reject();
        });
      });
    },
    init: function init() {
      var _this3 = this;

      this._wecropper = new __WEBPACK_IMPORTED_MODULE_2_we_cropper___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this.option, {
        id: this._canvasId,
        targetId: this._targetId,
        pixelRatio: this._pixelRatio
      })).on('ready', function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this3.$emit.apply(_this3, ['ready'].concat(args));
      }).on('beforeImageLoad', function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        _this3.$emit.apply(_this3, ['beforeImageLoad'].concat(args));
      }).on('imageLoad', function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        _this3.$emit.apply(_this3, ['imageLoad'].concat(args));
      }).on('beforeDraw', function () {
        for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        _this3.$emit.apply(_this3, ['beforeDraw'].concat(args));
      });
    }
  },
  onLoad: function onLoad() {
    if (!this.option) {
      return console.warn('[mpvue-cropper] 请传入option参数\n参数配置见文档：https://we-plugin.github.io/we-cropper/#/api');
    }
    this.init();
  }
});

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * we-cropper v1.3.4
 * (c) 2019 dlhandsome
 * @license MIT
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.WeCropper = factory());
}(this, (function () { 'use strict';

var device = void 0;
var TOUCH_STATE = ['touchstarted', 'touchmoved', 'touchended'];

function firstLetterUpper (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function setTouchState (instance) {
  var arg = [], len = arguments.length - 1;
  while ( len-- > 0 ) arg[ len ] = arguments[ len + 1 ];

  TOUCH_STATE.forEach(function (key, i) {
    if (arg[i] !== undefined) {
      instance[key] = arg[i];
    }
  });
}

function validator (instance, o) {
  Object.defineProperties(instance, o);
}

function	getDevice () {
  if (!device) {
    device = wx.getSystemInfoSync();
  }
  return device
}

var tmp = {};

var ref = getDevice();
var pixelRatio = ref.pixelRatio;

var DEFAULT = {
  id: {
    default: 'cropper',
    get: function get () {
      return tmp.id
    },
    set: function set (value) {
      if (typeof (value) !== 'string') {
        console.error(("id：" + value + " is invalid"));
      }
      tmp.id = value;
    }
  },
  width: {
    default: 750,
    get: function get () {
      return tmp.width
    },
    set: function set (value) {
      if (typeof (value) !== 'number') {
        console.error(("width：" + value + " is invalid"));
      }
      tmp.width = value;
    }
  },
  height: {
    default: 750,
    get: function get () {
      return tmp.height
    },
    set: function set (value) {
      if (typeof (value) !== 'number') {
        console.error(("height：" + value + " is invalid"));
      }
      tmp.height = value;
    }
  },
  pixelRatio: {
    default: pixelRatio,
    get: function get () {
      return tmp.pixelRatio
    },
    set: function set (value) {
      if (typeof (value) !== 'number') {
        console.error(("pixelRatio：" + value + " is invalid"));
      }
      tmp.pixelRatio = value;
    }
  },
  scale: {
    default: 2.5,
    get: function get () {
      return tmp.scale
    },
    set: function set (value) {
      if (typeof (value) !== 'number') {
        console.error(("scale：" + value + " is invalid"));
      }
      tmp.scale = value;
    }
  },
  zoom: {
    default: 5,
    get: function get () {
      return tmp.zoom
    },
    set: function set (value) {
      if (typeof (value) !== 'number') {
        console.error(("zoom：" + value + " is invalid"));
      } else if (value < 0 || value > 10) {
        console.error("zoom should be ranged in 0 ~ 10");
      }
      tmp.zoom = value;
    }
  },
  src: {
    default: '',
    get: function get () {
      return tmp.src
    },
    set: function set (value) {
      if (typeof (value) !== 'string') {
        console.error(("src：" + value + " is invalid"));
      }
      tmp.src = value;
    }
  },
  cut: {
    default: {},
    get: function get () {
      return tmp.cut
    },
    set: function set (value) {
      if (typeof (value) !== 'object') {
        console.error(("cut：" + value + " is invalid"));
      }
      tmp.cut = value;
    }
  },
  boundStyle: {
    default: {},
    get: function get () {
      return tmp.boundStyle
    },
    set: function set (value) {
      if (typeof (value) !== 'object') {
        console.error(("boundStyle：" + value + " is invalid"));
      }
      tmp.boundStyle = value;
    }
  },
  onReady: {
    default: null,
    get: function get () {
      return tmp.ready
    },
    set: function set (value) {
      tmp.ready = value;
    }
  },
  onBeforeImageLoad: {
    default: null,
    get: function get () {
      return tmp.beforeImageLoad
    },
    set: function set (value) {
      tmp.beforeImageLoad = value;
    }
  },
  onImageLoad: {
    default: null,
    get: function get () {
      return tmp.imageLoad
    },
    set: function set (value) {
      tmp.imageLoad = value;
    }
  },
  onBeforeDraw: {
    default: null,
    get: function get () {
      return tmp.beforeDraw
    },
    set: function set (value) {
      tmp.beforeDraw = value;
    }
  }
};

var ref$1 = getDevice();
var windowWidth = ref$1.windowWidth;

function prepare () {
  var self = this;

  // v1.4.0 版本中将不再自动绑定we-cropper实例
  self.attachPage = function () {
    var pages = getCurrentPages();
    // 获取到当前page上下文
    var pageContext = pages[pages.length - 1];
    // 把this依附在Page上下文的wecropper属性上，便于在page钩子函数中访问
    Object.defineProperty(pageContext, 'wecropper', {
      get: function get () {
        console.warn(
          'Instance will not be automatically bound to the page after v1.4.0\n\n' +
          'Please use a custom instance name instead\n\n' +
          'Example: \n' +
          'this.mycropper = new WeCropper(options)\n\n' +
          '// ...\n' +
          'this.mycropper.getCropperImage()'
        );
        return self
      }
    });
  };

  self.createCtx = function () {
    var id = self.id;
    var targetId = self.targetId;

    if (id) {
      self.ctx = self.ctx || wx.createCanvasContext(id);
      self.targetCtx = self.targetCtx || wx.createCanvasContext(targetId);
    } else {
      console.error("constructor: create canvas context failed, 'id' must be valuable");
    }
  };

  self.deviceRadio = windowWidth / 750;
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var tools = createCommonjsModule(function (module, exports) {
/**
 * String type check
 */
exports.isStr = function (v) { return typeof v === 'string'; };
/**
 * Number type check
 */
exports.isNum = function (v) { return typeof v === 'number'; };
/**
 * Array type check
 */
exports.isArr = Array.isArray;
/**
 * undefined type check
 */
exports.isUndef = function (v) { return v === undefined; };

exports.isTrue = function (v) { return v === true; };

exports.isFalse = function (v) { return v === false; };
/**
 * Function type check
 */
exports.isFunc = function (v) { return typeof v === 'function'; };
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
exports.isObj = exports.isObject = function (obj) {
  return obj !== null && typeof obj === 'object'
};

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var _toString = Object.prototype.toString;
exports.isPlainObject = function (obj) {
  return _toString.call(obj) === '[object Object]'
};

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
exports.hasOwn = function (obj, key) {
  return hasOwnProperty.call(obj, key)
};

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
exports.noop = function (a, b, c) {};

/**
 * Check if val is a valid array index.
 */
exports.isValidArrayIndex = function (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
};
});

var tools_7 = tools.isFunc;
var tools_10 = tools.isPlainObject;

var EVENT_TYPE = ['ready', 'beforeImageLoad', 'beforeDraw', 'imageLoad'];

function observer () {
  var self = this;

  self.on = function (event, fn) {
    if (EVENT_TYPE.indexOf(event) > -1) {
      if (tools_7(fn)) {
        event === 'ready'
          ? fn(self)
          : self[("on" + (firstLetterUpper(event)))] = fn;
      }
    } else {
      console.error(("event: " + event + " is invalid"));
    }
    return self
  };
}

function wxPromise (fn) {
  return function (obj) {
    if ( obj === void 0 ) obj = {};

    return new Promise(function (resolve, reject) {
      obj.success = function (res) {
        resolve(res);
      };
      obj.fail = function (err) {
        reject(err);
      };
      fn(obj);
    })
  }
}

function draw (ctx, reserve) {
  if ( reserve === void 0 ) reserve = false;

  return new Promise(function (resolve) {
    ctx.draw(reserve, resolve);
  })
}

var getImageInfo = wxPromise(wx.getImageInfo);

var canvasToTempFilePath = wxPromise(wx.canvasToTempFilePath);

var base64 = createCommonjsModule(function (module, exports) {
/*! http://mths.be/base64 v0.1.0 by @mathias | MIT license */
(function(root) {

	// Detect free variables `exports`.
	var freeExports = 'object' == 'object' && exports;

	// Detect free variable `module`.
	var freeModule = 'object' == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code, and use
	// it as `root`.
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var InvalidCharacterError = function(message) {
		this.message = message;
	};
	InvalidCharacterError.prototype = new Error;
	InvalidCharacterError.prototype.name = 'InvalidCharacterError';

	var error = function(message) {
		// Note: the error messages used throughout this file match those used by
		// the native `atob`/`btoa` implementation in Chromium.
		throw new InvalidCharacterError(message);
	};

	var TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	// http://whatwg.org/html/common-microsyntaxes.html#space-character
	var REGEX_SPACE_CHARACTERS = /[\t\n\f\r ]/g;

	// `decode` is designed to be fully compatible with `atob` as described in the
	// HTML Standard. http://whatwg.org/html/webappapis.html#dom-windowbase64-atob
	// The optimized base64-decoding algorithm used is based on @atk’s excellent
	// implementation. https://gist.github.com/atk/1020396
	var decode = function(input) {
		input = String(input)
			.replace(REGEX_SPACE_CHARACTERS, '');
		var length = input.length;
		if (length % 4 == 0) {
			input = input.replace(/==?$/, '');
			length = input.length;
		}
		if (
			length % 4 == 1 ||
			// http://whatwg.org/C#alphanumeric-ascii-characters
			/[^+a-zA-Z0-9/]/.test(input)
		) {
			error(
				'Invalid character: the string to be decoded is not correctly encoded.'
			);
		}
		var bitCounter = 0;
		var bitStorage;
		var buffer;
		var output = '';
		var position = -1;
		while (++position < length) {
			buffer = TABLE.indexOf(input.charAt(position));
			bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
			// Unless this is the first of a group of 4 characters…
			if (bitCounter++ % 4) {
				// …convert the first 8 bits to a single ASCII character.
				output += String.fromCharCode(
					0xFF & bitStorage >> (-2 * bitCounter & 6)
				);
			}
		}
		return output;
	};

	// `encode` is designed to be fully compatible with `btoa` as described in the
	// HTML Standard: http://whatwg.org/html/webappapis.html#dom-windowbase64-btoa
	var encode = function(input) {
		input = String(input);
		if (/[^\0-\xFF]/.test(input)) {
			// Note: no need to special-case astral symbols here, as surrogates are
			// matched, and the input is supposed to only contain ASCII anyway.
			error(
				'The string to be encoded contains characters outside of the ' +
				'Latin1 range.'
			);
		}
		var padding = input.length % 3;
		var output = '';
		var position = -1;
		var a;
		var b;
		var c;
		var buffer;
		// Make sure any padding is handled outside of the loop.
		var length = input.length - padding;

		while (++position < length) {
			// Read three bytes, i.e. 24 bits.
			a = input.charCodeAt(position) << 16;
			b = input.charCodeAt(++position) << 8;
			c = input.charCodeAt(++position);
			buffer = a + b + c;
			// Turn the 24 bits into four chunks of 6 bits each, and append the
			// matching character for each of them to the output.
			output += (
				TABLE.charAt(buffer >> 18 & 0x3F) +
				TABLE.charAt(buffer >> 12 & 0x3F) +
				TABLE.charAt(buffer >> 6 & 0x3F) +
				TABLE.charAt(buffer & 0x3F)
			);
		}

		if (padding == 2) {
			a = input.charCodeAt(position) << 8;
			b = input.charCodeAt(++position);
			buffer = a + b;
			output += (
				TABLE.charAt(buffer >> 10) +
				TABLE.charAt((buffer >> 4) & 0x3F) +
				TABLE.charAt((buffer << 2) & 0x3F) +
				'='
			);
		} else if (padding == 1) {
			buffer = input.charCodeAt(position);
			output += (
				TABLE.charAt(buffer >> 2) +
				TABLE.charAt((buffer << 4) & 0x3F) +
				'=='
			);
		}

		return output;
	};

	var base64 = {
		'encode': encode,
		'decode': decode,
		'version': '0.1.0'
	};

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		false
	) {
		undefined(function() {
			return base64;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = base64;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (var key in base64) {
				base64.hasOwnProperty(key) && (freeExports[key] = base64[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.base64 = base64;
	}

}(commonjsGlobal));
});

function makeURI (strData, type) {
  return 'data:' + type + ';base64,' + strData
}

function fixType (type) {
  type = type.toLowerCase().replace(/jpg/i, 'jpeg');
  var r = type.match(/png|jpeg|bmp|gif/)[0];
  return 'image/' + r
}

function encodeData (data) {
  var str = '';
  if (typeof data === 'string') {
    str = data;
  } else {
    for (var i = 0; i < data.length; i++) {
      str += String.fromCharCode(data[i]);
    }
  }
  return base64.encode(str)
}

/**
 * 获取图像区域隐含的像素数据
 * @param canvasId canvas标识
 * @param x 将要被提取的图像数据矩形区域的左上角 x 坐标
 * @param y 将要被提取的图像数据矩形区域的左上角 y 坐标
 * @param width 将要被提取的图像数据矩形区域的宽度
 * @param height 将要被提取的图像数据矩形区域的高度
 * @param done 完成回调
 */
function getImageData (canvasId, x, y, width, height, done) {
  wx.canvasGetImageData({
    canvasId: canvasId,
    x: x,
    y: y,
    width: width,
    height: height,
    success: function success (res) {
      done(res);
    },
    fail: function fail (res) {
      done(null);
      console.error('canvasGetImageData error: ' + res);
    }
  });
}

/**
 * 生成bmp格式图片
 * 按照规则生成图片响应头和响应体
 * @param oData 用来描述 canvas 区域隐含的像素数据 { data, width, height } = oData
 * @returns {*} base64字符串
 */
function genBitmapImage (oData) {
  //
  // BITMAPFILEHEADER: http://msdn.microsoft.com/en-us/library/windows/desktop/dd183374(v=vs.85).aspx
  // BITMAPINFOHEADER: http://msdn.microsoft.com/en-us/library/dd183376.aspx
  //
  var biWidth = oData.width;
  var biHeight	= oData.height;
  var biSizeImage = biWidth * biHeight * 3;
  var bfSize = biSizeImage + 54; // total header size = 54 bytes

  //
  //  typedef struct tagBITMAPFILEHEADER {
  //  	WORD bfType;
  //  	DWORD bfSize;
  //  	WORD bfReserved1;
  //  	WORD bfReserved2;
  //  	DWORD bfOffBits;
  //  } BITMAPFILEHEADER;
  //
  var BITMAPFILEHEADER = [
    // WORD bfType -- The file type signature; must be "BM"
    0x42, 0x4D,
    // DWORD bfSize -- The size, in bytes, of the bitmap file
    bfSize & 0xff, bfSize >> 8 & 0xff, bfSize >> 16 & 0xff, bfSize >> 24 & 0xff,
    // WORD bfReserved1 -- Reserved; must be zero
    0, 0,
    // WORD bfReserved2 -- Reserved; must be zero
    0, 0,
    // DWORD bfOffBits -- The offset, in bytes, from the beginning of the BITMAPFILEHEADER structure to the bitmap bits.
    54, 0, 0, 0
  ];

  //
  //  typedef struct tagBITMAPINFOHEADER {
  //  	DWORD biSize;
  //  	LONG  biWidth;
  //  	LONG  biHeight;
  //  	WORD  biPlanes;
  //  	WORD  biBitCount;
  //  	DWORD biCompression;
  //  	DWORD biSizeImage;
  //  	LONG  biXPelsPerMeter;
  //  	LONG  biYPelsPerMeter;
  //  	DWORD biClrUsed;
  //  	DWORD biClrImportant;
  //  } BITMAPINFOHEADER, *PBITMAPINFOHEADER;
  //
  var BITMAPINFOHEADER = [
    // DWORD biSize -- The number of bytes required by the structure
    40, 0, 0, 0,
    // LONG biWidth -- The width of the bitmap, in pixels
    biWidth & 0xff, biWidth >> 8 & 0xff, biWidth >> 16 & 0xff, biWidth >> 24 & 0xff,
    // LONG biHeight -- The height of the bitmap, in pixels
    biHeight & 0xff, biHeight >> 8 & 0xff, biHeight >> 16 & 0xff, biHeight >> 24 & 0xff,
    // WORD biPlanes -- The number of planes for the target device. This value must be set to 1
    1, 0,
    // WORD biBitCount -- The number of bits-per-pixel, 24 bits-per-pixel -- the bitmap
    // has a maximum of 2^24 colors (16777216, Truecolor)
    24, 0,
    // DWORD biCompression -- The type of compression, BI_RGB (code 0) -- uncompressed
    0, 0, 0, 0,
    // DWORD biSizeImage -- The size, in bytes, of the image. This may be set to zero for BI_RGB bitmaps
    biSizeImage & 0xff, biSizeImage >> 8 & 0xff, biSizeImage >> 16 & 0xff, biSizeImage >> 24 & 0xff,
    // LONG biXPelsPerMeter, unused
    0, 0, 0, 0,
    // LONG biYPelsPerMeter, unused
    0, 0, 0, 0,
    // DWORD biClrUsed, the number of color indexes of palette, unused
    0, 0, 0, 0,
    // DWORD biClrImportant, unused
    0, 0, 0, 0
  ];

  var iPadding = (4 - ((biWidth * 3) % 4)) % 4;

  var aImgData = oData.data;

  var strPixelData = '';
  var biWidth4 = biWidth << 2;
  var y = biHeight;
  var fromCharCode = String.fromCharCode;

  do {
    var iOffsetY = biWidth4 * (y - 1);
    var strPixelRow = '';
    for (var x = 0; x < biWidth; x++) {
      var iOffsetX = x << 2;
      strPixelRow += fromCharCode(aImgData[iOffsetY + iOffsetX + 2]) +
        fromCharCode(aImgData[iOffsetY + iOffsetX + 1]) +
        fromCharCode(aImgData[iOffsetY + iOffsetX]);
    }

    for (var c = 0; c < iPadding; c++) {
      strPixelRow += String.fromCharCode(0);
    }

    strPixelData += strPixelRow;
  } while (--y)

  var strEncoded = encodeData(BITMAPFILEHEADER.concat(BITMAPINFOHEADER)) + encodeData(strPixelData);

  return strEncoded
}

/**
 * 转换为图片base64
 * @param canvasId canvas标识
 * @param x 将要被提取的图像数据矩形区域的左上角 x 坐标
 * @param y 将要被提取的图像数据矩形区域的左上角 y 坐标
 * @param width 将要被提取的图像数据矩形区域的宽度
 * @param height 将要被提取的图像数据矩形区域的高度
 * @param type 转换图片类型
 * @param done 完成回调
 */
function convertToImage (canvasId, x, y, width, height, type, done) {
  if ( done === void 0 ) done = function () {};

  if (type === undefined) { type = 'png'; }
  type = fixType(type);
  if (/bmp/.test(type)) {
    getImageData(canvasId, x, y, width, height, function (data) {
      var strData = genBitmapImage(data);
      tools_7(done) && done(makeURI(strData, 'image/' + type));
    });
  } else {
    console.error('暂不支持生成\'' + type + '\'类型的base64图片');
  }
}

var CanvasToBase64 = {
  convertToImage: convertToImage,
  // convertToPNG: function (width, height, done) {
  //   return convertToImage(width, height, 'png', done)
  // },
  // convertToJPEG: function (width, height, done) {
  //   return convertToImage(width, height, 'jpeg', done)
  // },
  // convertToGIF: function (width, height, done) {
  //   return convertToImage(width, height, 'gif', done)
  // },
  convertToBMP: function (ref, done) {
    if ( ref === void 0 ) ref = {};
    var canvasId = ref.canvasId;
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;
    if ( done === void 0 ) done = function () {};

    return convertToImage(canvasId, x, y, width, height, 'bmp', done)
  }
};

function methods () {
  var self = this;

  var boundWidth = self.width; // 裁剪框默认宽度，即整个画布宽度
  var boundHeight = self.height; // 裁剪框默认高度，即整个画布高度

  var id = self.id;
  var targetId = self.targetId;
  var pixelRatio = self.pixelRatio;

  var ref = self.cut;
  var x = ref.x; if ( x === void 0 ) x = 0;
  var y = ref.y; if ( y === void 0 ) y = 0;
  var width = ref.width; if ( width === void 0 ) width = boundWidth;
  var height = ref.height; if ( height === void 0 ) height = boundHeight;

  self.updateCanvas = function (done) {
    if (self.croperTarget) {
      //  画布绘制图片
      self.ctx.drawImage(
        self.croperTarget,
        self.imgLeft,
        self.imgTop,
        self.scaleWidth,
        self.scaleHeight
      );
    }
    tools_7(self.onBeforeDraw) && self.onBeforeDraw(self.ctx, self);

    self.setBoundStyle(self.boundStyle); //	设置边界样式

    self.ctx.draw(false, done);
    return self
  };

  self.pushOrign = function (src) {
    self.src = src;

    tools_7(self.onBeforeImageLoad) && self.onBeforeImageLoad(self.ctx, self);

    return getImageInfo({ src: src })
      .then(function (res) {
        var innerAspectRadio = res.width / res.height;
        var customAspectRadio = width / height;

        self.croperTarget = res.path;

        if (innerAspectRadio < customAspectRadio) {
          self.rectX = x;
          self.baseWidth = width;
          self.baseHeight = width / innerAspectRadio;
          self.rectY = y - Math.abs((height - self.baseHeight) / 2);
        } else {
          self.rectY = y;
          self.baseWidth = height * innerAspectRadio;
          self.baseHeight = height;
          self.rectX = x - Math.abs((width - self.baseWidth) / 2);
        }

        self.imgLeft = self.rectX;
        self.imgTop = self.rectY;
        self.scaleWidth = self.baseWidth;
        self.scaleHeight = self.baseHeight;

        self.update();

        return new Promise(function (resolve) {
          self.updateCanvas(resolve);
        })
      })
      .then(function () {
        tools_7(self.onImageLoad) && self.onImageLoad(self.ctx, self);
      })
  };

  self.getCropperBase64 = function (done) {
    if ( done === void 0 ) done = function () {};

    CanvasToBase64.convertToBMP({
      canvasId: id,
      x: x,
      y: y,
      width: width,
      height: height
    }, done);
  };

  self.getCropperImage = function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var customOptions = args[0];
    var fn = args[args.length - 1];

    var canvasOptions = {
      canvasId: id,
      x: x,
      y: y,
      width: width,
      height: height
    };

    var task = function () { return Promise.resolve(); };

    if (
      tools_10(customOptions) &&
      customOptions.original
    ) {
      // original mode
      task = function () {
        self.targetCtx.drawImage(
          self.croperTarget,
          self.imgLeft * pixelRatio,
          self.imgTop * pixelRatio,
          self.scaleWidth * pixelRatio,
          self.scaleHeight * pixelRatio
        );

        canvasOptions = {
          canvasId: targetId,
          x: x * pixelRatio,
          y: y * pixelRatio,
          width: width * pixelRatio,
          height: height * pixelRatio
        };

        return draw(self.targetCtx)
      };
    }

    return task()
      .then(function () {
        if (tools_10(customOptions)) {
          canvasOptions = Object.assign({}, canvasOptions, customOptions);
        }
        return canvasToTempFilePath(canvasOptions)
      })
      .then(function (res) {
        var tempFilePath = res.tempFilePath;

        tools_7(fn) && fn.call(self, tempFilePath);
        return tempFilePath
      })
      .catch(function () {
        tools_7(fn) && fn.call(self, null);
      })
  };
}

/**
 * 获取最新缩放值
 * @param oldScale 上一次触摸结束后的缩放值
 * @param oldDistance 上一次触摸结束后的双指距离
 * @param zoom 缩放系数
 * @param touch0 第一指touch对象
 * @param touch1 第二指touch对象
 * @returns {*}
 */
var getNewScale = function (oldScale, oldDistance, zoom, touch0, touch1) {
  var xMove, yMove, newDistance;
  // 计算二指最新距离
  xMove = Math.round(touch1.x - touch0.x);
  yMove = Math.round(touch1.y - touch0.y);
  newDistance = Math.round(Math.sqrt(xMove * xMove + yMove * yMove));

  return oldScale + 0.001 * zoom * (newDistance - oldDistance)
};

function update () {
  var self = this;

  if (!self.src) { return }

  self.__oneTouchStart = function (touch) {
    self.touchX0 = Math.round(touch.x);
    self.touchY0 = Math.round(touch.y);
  };

  self.__oneTouchMove = function (touch) {
    var xMove, yMove;
    // 计算单指移动的距离
    if (self.touchended) {
      return self.updateCanvas()
    }
    xMove = Math.round(touch.x - self.touchX0);
    yMove = Math.round(touch.y - self.touchY0);

    var imgLeft = Math.round(self.rectX + xMove);
    var imgTop = Math.round(self.rectY + yMove);

    self.outsideBound(imgLeft, imgTop);

    self.updateCanvas();
  };

  self.__twoTouchStart = function (touch0, touch1) {
    var xMove, yMove, oldDistance;

    self.touchX1 = Math.round(self.rectX + self.scaleWidth / 2);
    self.touchY1 = Math.round(self.rectY + self.scaleHeight / 2);

    // 计算两指距离
    xMove = Math.round(touch1.x - touch0.x);
    yMove = Math.round(touch1.y - touch0.y);
    oldDistance = Math.round(Math.sqrt(xMove * xMove + yMove * yMove));

    self.oldDistance = oldDistance;
  };

  self.__twoTouchMove = function (touch0, touch1) {
    var oldScale = self.oldScale;
    var oldDistance = self.oldDistance;
    var scale = self.scale;
    var zoom = self.zoom;

    self.newScale = getNewScale(oldScale, oldDistance, zoom, touch0, touch1);

    //  设定缩放范围
    self.newScale <= 1 && (self.newScale = 1);
    self.newScale >= scale && (self.newScale = scale);

    self.scaleWidth = Math.round(self.newScale * self.baseWidth);
    self.scaleHeight = Math.round(self.newScale * self.baseHeight);
    var imgLeft = Math.round(self.touchX1 - self.scaleWidth / 2);
    var imgTop = Math.round(self.touchY1 - self.scaleHeight / 2);

    self.outsideBound(imgLeft, imgTop);

    self.updateCanvas();
  };

  self.__xtouchEnd = function () {
    self.oldScale = self.newScale;
    self.rectX = self.imgLeft;
    self.rectY = self.imgTop;
  };
}

var handle = {
  //  图片手势初始监测
  touchStart: function touchStart (e) {
    var self = this;
    var ref = e.touches;
    var touch0 = ref[0];
    var touch1 = ref[1];

    if (!self.src) { return }

    setTouchState(self, true, null, null);

    // 计算第一个触摸点的位置，并参照改点进行缩放
    self.__oneTouchStart(touch0);

    // 两指手势触发
    if (e.touches.length >= 2) {
      self.__twoTouchStart(touch0, touch1);
    }
  },

  //  图片手势动态缩放
  touchMove: function touchMove (e) {
    var self = this;
    var ref = e.touches;
    var touch0 = ref[0];
    var touch1 = ref[1];

    if (!self.src) { return }

    setTouchState(self, null, true);

    // 单指手势时触发
    if (e.touches.length === 1) {
      self.__oneTouchMove(touch0);
    }
    // 两指手势触发
    if (e.touches.length >= 2) {
      self.__twoTouchMove(touch0, touch1);
    }
  },

  touchEnd: function touchEnd (e) {
    var self = this;

    if (!self.src) { return }

    setTouchState(self, false, false, true);
    self.__xtouchEnd();
  }
};

function cut () {
  var self = this;
  var boundWidth = self.width; // 裁剪框默认宽度，即整个画布宽度
  var boundHeight = self.height;
  // 裁剪框默认高度，即整个画布高度
  var ref = self.cut;
  var x = ref.x; if ( x === void 0 ) x = 0;
  var y = ref.y; if ( y === void 0 ) y = 0;
  var width = ref.width; if ( width === void 0 ) width = boundWidth;
  var height = ref.height; if ( height === void 0 ) height = boundHeight;

  /**
	 * 设置边界
	 * @param imgLeft 图片左上角横坐标值
	 * @param imgTop 图片左上角纵坐标值
	 */
  self.outsideBound = function (imgLeft, imgTop) {
    self.imgLeft = imgLeft >= x
      ? x
      : self.scaleWidth + imgLeft - x <= width
        ? x + width - self.scaleWidth
        :	imgLeft;

    self.imgTop = imgTop >= y
      ? y
      : self.scaleHeight + imgTop - y <= height
        ? y + height - self.scaleHeight
        : imgTop;
  };

  /**
	 * 设置边界样式
	 * @param color	边界颜色
	 */
  self.setBoundStyle = function (ref) {
    if ( ref === void 0 ) ref = {};
    var color = ref.color; if ( color === void 0 ) color = '#04b00f';
    var mask = ref.mask; if ( mask === void 0 ) mask = 'rgba(0, 0, 0, 0.3)';
    var lineWidth = ref.lineWidth; if ( lineWidth === void 0 ) lineWidth = 1;

    var boundOption = [
      {
        start: { x: x - lineWidth, y: y + 10 - lineWidth },
        step1: { x: x - lineWidth, y: y - lineWidth },
        step2: { x: x + 10 - lineWidth, y: y - lineWidth }
      },
      {
        start: { x: x - lineWidth, y: y + height - 10 + lineWidth },
        step1: { x: x - lineWidth, y: y + height + lineWidth },
        step2: { x: x + 10 - lineWidth, y: y + height + lineWidth }
      },
      {
        start: { x: x + width - 10 + lineWidth, y: y - lineWidth },
        step1: { x: x + width + lineWidth, y: y - lineWidth },
        step2: { x: x + width + lineWidth, y: y + 10 - lineWidth }
      },
      {
        start: { x: x + width + lineWidth, y: y + height - 10 + lineWidth },
        step1: { x: x + width + lineWidth, y: y + height + lineWidth },
        step2: { x: x + width - 10 + lineWidth, y: y + height + lineWidth }
      }
    ];

    // 绘制半透明层
    self.ctx.beginPath();
    self.ctx.setFillStyle(mask);
    self.ctx.fillRect(0, 0, x, boundHeight);
    self.ctx.fillRect(x, 0, width, y);
    self.ctx.fillRect(x, y + height, width, boundHeight - y - height);
    self.ctx.fillRect(x + width, 0, boundWidth - x - width, boundHeight);
    self.ctx.fill();

    boundOption.forEach(function (op) {
      self.ctx.beginPath();
      self.ctx.setStrokeStyle(color);
      self.ctx.setLineWidth(lineWidth);
      self.ctx.moveTo(op.start.x, op.start.y);
      self.ctx.lineTo(op.step1.x, op.step1.y);
      self.ctx.lineTo(op.step2.x, op.step2.y);
      self.ctx.stroke();
    });
  };
}

var version = "1.3.4";

var WeCropper = function WeCropper (params) {
  var self = this;
  var _default = {};

  validator(self, DEFAULT);

  Object.keys(DEFAULT).forEach(function (key) {
    _default[key] = DEFAULT[key].default;
  });
  Object.assign(self, _default, params);

  self.prepare();
  self.attachPage();
  self.createCtx();
  self.observer();
  self.cutt();
  self.methods();
  self.init();
  self.update();

  return self
};

WeCropper.prototype.init = function init () {
  var self = this;
  var src = self.src;

  self.version = version;

  typeof self.onReady === 'function' && self.onReady(self.ctx, self);

  if (src) {
    self.pushOrign(src);
  } else {
    self.updateCanvas();
  }
  setTouchState(self, false, false, false);

  self.oldScale = 1;
  self.newScale = 1;

  return self
};

Object.assign(WeCropper.prototype, handle);

WeCropper.prototype.prepare = prepare;
WeCropper.prototype.observer = observer;
WeCropper.prototype.methods = methods;
WeCropper.prototype.cutt = cut;
WeCropper.prototype.update = update;

return WeCropper;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26)))

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm._canvasId) ? _c('canvas', {
    style: ({
      width: _vm._width + 'px',
      height: _vm._height + 'px',
      background: 'rgba(0, 0, 0, .8)'
    }),
    attrs: {
      "canvasId": _vm._canvasId,
      "disable-scroll": "",
      "eventid": '0'
    },
    on: {
      "touchstart": _vm.touchstart,
      "touchmove": _vm.touchmove,
      "touchend": _vm.touchend
    }
  }) : _vm._e(), _vm._v(" "), (_vm._targetId) ? _c('canvas', {
    style: ({
      position: 'fixed',
      top: -_vm._width * _vm._pixelRatio + 'px',
      left: -_vm._height * _vm._pixelRatio + 'px',
      width: _vm._width * _vm._pixelRatio + 'px',
      height: _vm._height * _vm._pixelRatio + 'px'
    }),
    attrs: {
      "canvas-id": _vm._targetId,
      "disable-scroll": ""
    }
  }) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3467e155", esExports)
  }
}

/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(141);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(143);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(142), __esModule: true };

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(58);
module.exports = __webpack_require__(47).f('iterator');


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(144), __esModule: true };

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(145);
__webpack_require__(53);
__webpack_require__(151);
__webpack_require__(152);
module.exports = __webpack_require__(9).Symbol;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(7);
var has = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(14);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(55);
var META = __webpack_require__(146).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(40);
var setToStringTag = __webpack_require__(32);
var uid = __webpack_require__(30);
var wks = __webpack_require__(10);
var wksExt = __webpack_require__(47);
var wksDefine = __webpack_require__(48);
var enumKeys = __webpack_require__(147);
var isArray = __webpack_require__(148);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(16);
var toIObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(35);
var createDesc = __webpack_require__(22);
var _create = __webpack_require__(56);
var gOPNExt = __webpack_require__(149);
var $GOPD = __webpack_require__(150);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(29);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(70).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(31).f = $propertyIsEnumerable;
  __webpack_require__(42).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(24)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(15)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(30)('meta');
var isObject = __webpack_require__(16);
var has = __webpack_require__(17);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(21)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(29);
var gOPS = __webpack_require__(42);
var pIE = __webpack_require__(31);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(23);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(19);
var gOPN = __webpack_require__(70).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(31);
var createDesc = __webpack_require__(22);
var toIObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(35);
var has = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(50);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('asyncIterator');


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)('observable');


/***/ }),
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(192), __esModule: true };

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(193);
module.exports = __webpack_require__(9).Array.from;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(20);
var $export = __webpack_require__(12);
var toObject = __webpack_require__(43);
var call = __webpack_require__(60);
var isArrayIter = __webpack_require__(61);
var toLength = __webpack_require__(37);
var createProperty = __webpack_require__(194);
var getIterFn = __webpack_require__(62);

$export($export.S + $export.F * !__webpack_require__(67)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(11);
var createDesc = __webpack_require__(22);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_index_index__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_index_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "navigationBarTitleText": "报警信息",
  "usingComponents": {
    "wux-row": "/static/wux/row/index",
    "wux-col": "/static/wux/col/index",
    "wux-card": "/static/wux/card/index",
    "wux-calendar": "/static/wux/calendar/index",
    "wux-loading": "/static/wux/loading/index",
    "wux-filterbar": "/static/wux/filterbar/index"
  }
});

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_list_index__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_list_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "navigationBarTitleText": "设备列表",
  "usingComponents": {
    "wux-toast": "/static/wux/toast/index",
    "wux-row": "/static/wux/row/index",
    "wux-col": "/static/wux/col/index",
    "wux-grids": "/static/wux/grids/index",
    "wux-grid": "/static/wux/grid/index",
    "wux-icon": "/static/wux/icon/index",
    "wux-search-bar": "/static/wux/search-bar/index",
    "wux-accordion-group": "/static/wux/accordion-group/index",
    "wux-accordion": "/static/wux/accordion/index",
    "wux-loading": "/static/wux/loading/index",
    "wux-popup": "/static/wux/popup/index"
  }
});

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_statistics_index__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_statistics_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "navigationBarTitleText": "统计分析",
  "usingComponents": {
    "wux-row": "/static/wux/row/index",
    "wux-col": "/static/wux/col/index",
    "wux-icon": "/static/wux/icon/index",
    "wux-select": "/static/wux/select/index",
    "ff-canvas": "/static/f2-canvas/f2-canvas",
    "wux-loading": "/static/wux/loading/index"
  }
});

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_device_index__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_device_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "disableScroll": true,
  "usingComponents": {
    "wux-toast": "/static/wux/toast/index",
    "wux-row": "/static/wux/row/index",
    "wux-col": "/static/wux/col/index",
    "wux-icon": "/static/wux/icon/index",
    "wux-button": "/static/wux/button/index",
    "wux-input": "/static/wux/input/index",
    "wux-image": "/static/wux/image/index",
    "wux-dialog": "/static/wux/dialog/index",
    "wux-select": "/static/wux/select/index",
    "wux-loading": "/static/wux/loading/index",
    "wux-slider": "/static/wux/slider/index",
    "wux-switch": "/static/wux/switch/index"
  }
});

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_detail_index__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_detail_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "navigationBarTitleText": "设备详情",
  "usingComponents": {
    "wux-row": "/static/wux/row/index",
    "wux-col": "/static/wux/col/index",
    "ff-canvas": "/static/f2-canvas/f2-canvas",
    "wux-cell-group": "/static/wux/cell-group/index",
    "wux-cell": "/static/wux/cell/index",
    "wux-loading": "/static/wux/loading/index"
  }
});

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_detailAlarm_index__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_detailAlarm_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "navigationBarTitleText": "报警信息",
  "usingComponents": {
    "wux-card": "/static/wux/card/index",
    "wux-calendar": "/static/wux/calendar/index",
    "wux-loading": "/static/wux/loading/index"
  }
});

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_my_index__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_my_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "disableScroll": true,
  "navigationBarTitleText": "我的",
  "usingComponents": {
    "wux-cell-group": "/static/wux/cell-group/index",
    "wux-cell": "/static/wux/cell/index",
    "wux-loading": "/static/wux/loading/index"
  }
});

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_index__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_login_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "disableScroll": true,
  "navigationBarTitleText": "登录",
  "usingComponents": {
    "wux-button": "/static/wux/button/index",
    "wux-loading": "/static/wux/loading/index"
  }
});

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_products_index__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_products_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "navigationBarTitleText": "产品介绍"
});

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_UnitedData_index__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_UnitedData_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "navigationBarTitleText": "企业介绍"
});

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_system_index__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_system_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "navigationBarTitleText": "系统介绍"
});

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_GatewayList_index__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_GatewayList_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "navigationBarTitleText": "网关管理",
  "usingComponents": {
    "wux-cell-group": "/static/wux/cell-group/index",
    "wux-cell": "/static/wux/cell/index",
    "wux-icon": "/static/wux/icon/index",
    "wux-toast": "/static/wux/toast/index",
    "wux-loading": "/static/wux/loading/index"
  }
});

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_GroupSetting_index__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_GroupSetting_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "navigationBarTitleText": "区域管理",
  "usingComponents": {
    "wux-cell-group": "/static/wux/cell-group/index",
    "wux-cell": "/static/wux/cell/index",
    "wux-icon": "/static/wux/icon/index",
    "wux-popup": "/static/wux/popup/index",
    "wux-button": "/static/wux/button/index",
    "wux-input": "/static/wux/input/index",
    "wux-toast": "/static/wux/toast/index",
    "wux-loading": "/static/wux/loading/index",
    "wux-dialog": "/static/wux/dialog/index",
    "van-swipe-cell": "/static/vant/swipe-cell/index"
  }
});

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_GroupList_index__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_GroupList_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "navigationBarTitleText": "区域设置",
  "usingComponents": {
    "wux-cell-group": "/static/wux/cell-group/index",
    "wux-cell": "/static/wux/cell/index",
    "wux-checkbox-group": "/static/wux/checkbox-group/index",
    "wux-checkbox": "/static/wux/checkbox/index",
    "wux-button": "/static/wux/button/index",
    "wux-dialog": "/static/wux/dialog/index",
    "wux-toast": "/static/wux/toast/index",
    "wux-input": "/static/wux/input/index",
    "wux-slider": "/static/wux/slider/index",
    "wux-switch": "/static/wux/switch/index",
    "wux-loading": "/static/wux/loading/index"
  }
});

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_GroupList2_index__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_GroupList2_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "navigationBarTitleText": "新建区域",
  "usingComponents": {
    "wux-cell-group": "/static/wux/cell-group/index",
    "wux-cell": "/static/wux/cell/index",
    "wux-checkbox-group": "/static/wux/checkbox-group/index",
    "wux-checkbox": "/static/wux/checkbox/index",
    "wux-button": "/static/wux/button/index",
    "wux-dialog": "/static/wux/dialog/index",
    "wux-toast": "/static/wux/toast/index",
    "wux-input": "/static/wux/input/index",
    "wux-slider": "/static/wux/slider/index",
    "wux-switch": "/static/wux/switch/index",
    "wux-loading": "/static/wux/loading/index"
  }
});

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_ShareList_index__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_ShareList_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "navigationBarTitleText": "设备分享",
  "usingComponents": {
    "wux-cell-group": "/static/wux/cell-group/index",
    "wux-cell": "/static/wux/cell/index",
    "wux-checkbox-group": "/static/wux/checkbox-group/index",
    "wux-checkbox": "/static/wux/checkbox/index",
    "wux-button": "/static/wux/button/index",
    "wux-dialog": "/static/wux/dialog/index",
    "wux-toast": "/static/wux/toast/index",
    "wux-loading": "/static/wux/loading/index"
  }
});

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_share_index__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_D_git_monitor_static_wux_styles_index_wxss__);








__WEBPACK_IMPORTED_MODULE_2_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_mpvue_router_patch__["a" /* default */]);





__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.$url = 'http://172.16.0.167:18003'; //线上接口

// Vue.prototype.$url = 'http://172.16.0.167:5000'//测试接口

// Vue.prototype.$wss = 'ws://172.16.0.167:5005'//测试接口

// Vue.prototype.$url = 'https://nhjk.uniteddata.com'//线上接口

// Vue.prototype.$wss = 'wss://nhjk.uniteddata.com/wss'//线上接口

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.ajax = function (url, data, method) {
  var _this = this;

  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {

    wx.request({

      url: _this.$url + '/' + url,

      data: data,

      method: method ? method : 'GET',

      header: {

        'Authorization': wx.getStorageSync('Authorization'),

        'Content-Type': 'application/x-www-form-urlencoded'

      },

      success: function success(res) {

        // console.log(res.data);

        resolve(res.data);
      },
      fail: function fail(err) {

        reject(err);
      }
    });
  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.prototype.Toast = function (type, text) {

  Object(__WEBPACK_IMPORTED_MODULE_5_D_git_monitor_static_wux_index__["e" /* $wuxToast */])().show({

    type: type,

    duration: 1500,

    color: "#ffffff",

    text: text

  });
};

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.filter('Rounding', function (value) {

  value = Number(value);

  return value.toFixed(0);
});

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.config.productionTip = false;

var app = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_3__pages_share_index__["a" /* default */]));

app.$mount();

/* harmony default export */ __webpack_exports__["default"] = ({
  "usingComponents": {
    "wux-loading": "/static/wux/loading/index"
  }
});

/***/ }),
/* 225 */,
/* 226 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(228);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })
]);
//# sourceMappingURL=vendor.js.map