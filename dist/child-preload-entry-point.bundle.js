var sandboxedRenderer;(()=>{var __webpack_modules__={6920:()=>{eval(`(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {}).SENTRY_RELEASE={id:"Slack@4.33.73"};//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjkyMC5qcyIsIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbmRib3hlZFJlbmRlcmVyLy4vbm9kZV9tb2R1bGVzL0BzZW50cnkvd2VicGFjay1wbHVnaW4vc3JjL3NlbnRyeS13ZWJwYWNrLm1vZHVsZS5qcz9kMDZmIl0sInNvdXJjZXNDb250ZW50IjpbIih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHt9KS5TRU5UUllfUkVMRUFTRT17aWQ6XCJTbGFja0A0LjMzLjczXCJ9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///6920
`)},6874:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";eval(`// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./src/common/constants/url.ts
const SLACK_PROTOCOL = "slack:";
const url_SLACK_COMMERICAL_DOMAINS = [
  { domain: "slack.eu", matchSubDomains: true },
  { domain: "slack.com", matchSubDomains: true }
];
const url_SLACK_GOV_DOMAINS = [
  { domain: "slack-gov.com", matchSubDomains: true },
  { domain: "slack-gov-dev.com", matchSubDomains: true }
];
const SLACK_URL_COMMERICAL_BLOCKED_DOMAINS = [
  { domain: "files.slack.eu", matchSubDomains: false },
  { domain: "files.slack.com", matchSubDomains: false }
];
const SLACK_URL_GOV_BLOCKED_DOMAINS = [
  { domain: "files.slack-gov.com", matchSubDomains: false },
  { domain: "files.slack-gov-dev.com", matchSubDomains: false }
];
const url_SLACK_COMMERCIAL_DOWNLOAD_DOMAINS = [
  { domain: "slack.eu", matchSubDomains: true },
  { domain: "slack.com", matchSubDomains: true },
  { domain: "slack-files.eu", matchSubDomains: true },
  { domain: "slack-files.com", matchSubDomains: true }
];
const url_SLACK_GOV_DOWNLOAD_DOMAINS = [
  { domain: "slack-gov.com", matchSubDomains: true },
  { domain: "slack-gov-dev.com", matchSubDomains: true },
  { domain: "slack-files-gov.com", matchSubDomains: true },
  { domain: "slack-files-gov-dev.com", matchSubDomains: true }
];
const SLACK_IMAGE_DOMAINS = [
  { domain: "slack-edge.com", matchSubDomains: true },
  { domain: "slack-imgs.com", matchSubDomains: true },
  { domain: "slack-imgs-gov.com", matchSubDomains: true },
  { domain: "slack-imgs-gov-dev.com", matchSubDomains: true },
  { domain: "slack-edge-gov.com", matchSubDomains: true }
];
const MAGIC_LOGIN_REGEX = /magic-login/;
const CHROMIUM_BLANK_PAGE_URL = "chrome-error://chromewebdata";
const isEmptyWindowURL = (url) => url && url.protocol === "about:" && url.pathname === "blank" && url.hash !== "#blocked";
const isAboutBlockedWindowURL = (url) => url && url.protocol === "about:" && url.pathname === "blank" && url.hash === "#blocked";
const SPELLCHECK_DICTIONARIES_URL = "https://spellcheck.slack-edge.com/dictionaries_v2/";
const SPELLCHECK_DICTIONARIES_GOV_SLACK_URL = "https://spellcheck.slack-edge-gov.com/dictionaries_v2/";
const SENTRY_DSN_URL = "https://fd30fe469dbf4aec9db40548e5acf91e@slack.com/apps/sentryproxy/5277886";
const SENTRY_DSN_GOV_SLACK_URL = "https://fd30fe469dbf4aec9db40548e5acf91e@slack-gov.com/apps/sentryproxy/5277886";
const PRIVILEGED_URL_SCHEMES = (/* unused pure expression or super */ null && (["slack-webapp-dev"]));
const FIRST_EXPERIENCE_PATH = "/ssb/first";
const SIGN_IN_PATHS = (/* unused pure expression or super */ null && (["/ssb/signin", "/ssb/signin_redirect"]));
const ASSIGN_DEV_ENVIRONMENT_REGEX = /devEnv=(dev\\d*|staging|qa\\d*)/;
const DEFAULT_ALLOWED_URL_SCHEMES = (/* unused pure expression or super */ null && ([
  "http:",
  "https:",
  "mailto:",
  "skype:",
  "chrome-devtools:",
  "devtools:",
  "spotify:",
  "live:",
  "callto:",
  "tel:",
  "im:",
  "sip:",
  "sips:",
  "slack:"
]));
if (false) {}
const IGNORE_CONNECTION_LIMIT_DOMAINS_DEFAULT = [
  "slack.com",
  "slack-msgs.com",
  "slackb.com"
];
const IGNORE_CONNECTION_LIMIT_DOMAINS_GOVSLACK = [
  ...IGNORE_CONNECTION_LIMIT_DOMAINS_DEFAULT,
  "slack-gov.com"
];
const IGNORE_CONNECTION_LIMIT_DOMAINS_GOVSLACK_DEV = [
  ...IGNORE_CONNECTION_LIMIT_DOMAINS_DEFAULT,
  "slack-gov-dev.com"
];
const HOSTNAME_SPECIFIC_PROTOCOLS = (/* unused pure expression or super */ null && (["ftp:", "sftp:", "ssh:", "smb:"]));

;// CONCATENATED MODULE: ./node_modules/lodash-es/_freeGlobal.js
/** Detect free variable \`global\` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ const _freeGlobal = (freeGlobal);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_root.js


/** Detect free variable \`self\`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

/* harmony default export */ const _root = (root);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root.Symbol;

/* harmony default export */ const _Symbol = (Symbol);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [\`toStringTag\`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of \`baseGetTag\` which ignores \`Symbol.toStringTag\` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw \`toStringTag\`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ const _getRawTag = (getRawTag);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [\`toStringTag\`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts \`value\` to a string using \`Object.prototype.toString\`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ const _objectToString = (objectToString);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** \`Object#toString\` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of \`getTag\` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the \`toStringTag\`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ const _baseGetTag = (baseGetTag);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isObject.js
/**
 * Checks if \`value\` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of \`Object\`. (e.g. arrays, functions, objects, regexes, \`new Number(0)\`, and \`new String('')\`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is an object, else \`false\`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ const lodash_es_isObject = (isObject);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isFunction.js



/** \`Object#toString\` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if \`value\` is classified as a \`Function\` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is a function, else \`false\`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!lodash_es_isObject(value)) {
    return false;
  }
  // The use of \`Object#toString\` avoids issues with the \`typeof\` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ const lodash_es_isFunction = (isFunction);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_coreJsData.js


/** Used to detect overreaching core-js shims. */
var coreJsData = _root["__core-js_shared__"];

/* harmony default export */ const _coreJsData = (coreJsData);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isMasked.js


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if \`func\` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns \`true\` if \`func\` is masked, else \`false\`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ const _isMasked = (isMasked);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_toSource.js
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts \`func\` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ const _toSource = (toSource);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_baseIsNative.js





/**
 * Used to match \`RegExp\`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\\[object .+?Constructor\\]$/;

/** Used for built-in method references. */
var _baseIsNative_funcProto = Function.prototype,
    _baseIsNative_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var _baseIsNative_funcToString = _baseIsNative_funcProto.toString;

/** Used to check objects for own properties. */
var _baseIsNative_hasOwnProperty = _baseIsNative_objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  _baseIsNative_funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of \`_.isNative\` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is a native function,
 *  else \`false\`.
 */
function baseIsNative(value) {
  if (!lodash_es_isObject(value) || _isMasked(value)) {
    return false;
  }
  var pattern = lodash_es_isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

/* harmony default export */ const _baseIsNative = (baseIsNative);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getValue.js
/**
 * Gets the value at \`key\` of \`object\`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ const _getValue = (getValue);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getNative.js



/**
 * Gets the native function at \`key\` of \`object\`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else \`undefined\`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

/* harmony default export */ const _getNative = (getNative);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_nativeCreate.js


/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

/* harmony default export */ const _nativeCreate = (nativeCreate);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashClear.js


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

/* harmony default export */ const _hashClear = (hashClear);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashDelete.js
/**
 * Removes \`key\` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns \`true\` if the entry was removed, else \`false\`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const _hashDelete = (hashDelete);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashGet.js


/** Used to stand-in for \`undefined\` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var _hashGet_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashGet_hasOwnProperty = _hashGet_objectProto.hasOwnProperty;

/**
 * Gets the hash value for \`key\`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return _hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ const _hashGet = (hashGet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashHas.js


/** Used for built-in method references. */
var _hashHas_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashHas_hasOwnProperty = _hashHas_objectProto.hasOwnProperty;

/**
 * Checks if a hash value for \`key\` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns \`true\` if an entry for \`key\` exists, else \`false\`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : _hashHas_hasOwnProperty.call(data, key);
}

/* harmony default export */ const _hashHas = (hashHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_hashSet.js


/** Used to stand-in for \`undefined\` hash values. */
var _hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash \`key\` to \`value\`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? _hashSet_HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ const _hashSet = (hashSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Hash.js






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to \`Hash\`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

/* harmony default export */ const _Hash = (Hash);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheClear.js
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ const _listCacheClear = (listCacheClear);

;// CONCATENATED MODULE: ./node_modules/lodash-es/eq.js
/**
 * Performs a
 * [\`SameValueZero\`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns \`true\` if the values are equivalent, else \`false\`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ const lodash_es_eq = (eq);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_assocIndexOf.js


/**
 * Gets the index at which the \`key\` is found in \`array\` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else \`-1\`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (lodash_es_eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ const _assocIndexOf = (assocIndexOf);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheDelete.js


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes \`key\` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns \`true\` if the entry was removed, else \`false\`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ const _listCacheDelete = (listCacheDelete);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheGet.js


/**
 * Gets the list cache value for \`key\`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ const _listCacheGet = (listCacheGet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheHas.js


/**
 * Checks if a list cache value for \`key\` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns \`true\` if an entry for \`key\` exists, else \`false\`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

/* harmony default export */ const _listCacheHas = (listCacheHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_listCacheSet.js


/**
 * Sets the list cache \`key\` to \`value\`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ const _listCacheSet = (listCacheSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_ListCache.js






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to \`ListCache\`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

/* harmony default export */ const _ListCache = (ListCache);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_Map.js



/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

/* harmony default export */ const _Map = (Map);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheClear.js




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

/* harmony default export */ const _mapCacheClear = (mapCacheClear);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_isKeyable.js
/**
 * Checks if \`value\` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is suitable, else \`false\`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ const _isKeyable = (isKeyable);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_getMapData.js


/**
 * Gets the data for \`map\`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ const _getMapData = (getMapData);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheDelete.js


/**
 * Removes \`key\` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns \`true\` if the entry was removed, else \`false\`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ const _mapCacheDelete = (mapCacheDelete);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheGet.js


/**
 * Gets the map value for \`key\`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

/* harmony default export */ const _mapCacheGet = (mapCacheGet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheHas.js


/**
 * Checks if a map value for \`key\` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns \`true\` if an entry for \`key\` exists, else \`false\`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

/* harmony default export */ const _mapCacheHas = (mapCacheHas);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_mapCacheSet.js


/**
 * Sets the map \`key\` to \`value\`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ const _mapCacheSet = (mapCacheSet);

;// CONCATENATED MODULE: ./node_modules/lodash-es/_MapCache.js






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to \`MapCache\`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

/* harmony default export */ const _MapCache = (MapCache);

;// CONCATENATED MODULE: ./node_modules/lodash-es/memoize.js


/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of \`func\`. If \`resolver\` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The \`func\`
 * is invoked with the \`this\` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the \`cache\` property on the memoized
 * function. Its creation may be customized by replacing the \`_.memoize.Cache\`
 * constructor with one whose instances implement the
 * [\`Map\`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of \`clear\`, \`delete\`, \`get\`, \`has\`, and \`set\`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace \`_.memoize.Cache\`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose \`MapCache\`.
memoize.Cache = _MapCache;

/* harmony default export */ const lodash_es_memoize = (memoize);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isArray.js
/**
 * Checks if \`value\` is classified as an \`Array\` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is an array, else \`false\`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ const lodash_es_isArray = (isArray);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if \`value\` is object-like. A value is object-like if it's not \`null\`
 * and has a \`typeof\` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is object-like, else \`false\`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ const lodash_es_isObjectLike = (isObjectLike);

;// CONCATENATED MODULE: ./node_modules/lodash-es/isString.js




/** \`Object#toString\` result references. */
var stringTag = '[object String]';

/**
 * Checks if \`value\` is classified as a \`String\` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns \`true\` if \`value\` is a string, else \`false\`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!lodash_es_isArray(value) && lodash_es_isObjectLike(value) && _baseGetTag(value) == stringTag);
}

/* harmony default export */ const lodash_es_isString = (isString);

;// CONCATENATED MODULE: ./src/common/constants/client-feature-mode.ts
var client_feature_mode_ClientEnvironment = /* @__PURE__ */ ((ClientEnvironment2) => {
  ClientEnvironment2[ClientEnvironment2["NORMAL"] = 1e3] = "NORMAL";
  ClientEnvironment2[ClientEnvironment2["RESTRICTED"] = 1001] = "RESTRICTED";
  return ClientEnvironment2;
})(client_feature_mode_ClientEnvironment || {});


;// CONCATENATED MODULE: ./src/common/url/url-utils.ts











var AppAction = /* @__PURE__ */ ((AppAction2) => {
  AppAction2["QUIT_APP"] = "QUIT_APP";
  AppAction2["RESET_WINDOW"] = "RESET_WINDOW";
  AppAction2["REVEAL_LOGS"] = "REVEAL_LOGS";
  return AppAction2;
})(AppAction || {});
const platformUrlSlugMap = {
  darwin: "mac",
  linux: "linux",
  win32: "windows"
};
const getBaseDomain = lodash_es_memoize(
  (options) => {
    const { clientEnvironment } = options;
    const devEnv = options.devEnv ? validateDevEnvironment(options.devEnv) : void 0;
    switch (clientEnvironment) {
      case client_feature_mode_ClientEnvironment.NORMAL:
        return \`\${devEnv ? \`\${devEnv}.\` : ""}slack.com\`;
      case client_feature_mode_ClientEnvironment.RESTRICTED:
        if (devEnv) {
          return \`\${devEnv !== "dev" ? \`\${devEnv}.\` : ""}slack-gov-dev.com\`;
        }
        return "slack-gov.com";
    }
    throw new Error("Unexpected mode specified");
  }
);
const getBaseUrl = lodash_es_memoize(
  (options) => {
    const { workspace } = options;
    const sub = workspace ? \`\${workspace}.\` : "";
    return \`https://\${sub}\${getBaseDomain(options)}\`;
  }
);
function getReleaseNotesUrl({
  releaseChannel,
  clientEnvironment,
  locale
}) {
  let releaseNotesUrl = \`https://www.\${getBaseDomain({ clientEnvironment })}\`;
  if (locale !== DEFAULT_LOCALE) {
    releaseNotesUrl += \`/intl/\${locale.toLowerCase()}\`;
  }
  releaseNotesUrl += "/release-notes";
  const platformUrlSlug = platformUrlSlugMap["win32"] || "windows";
  releaseNotesUrl += \`/\${platformUrlSlug}\`;
  releaseNotesUrl += releaseChannel === ReleaseChannel.BETA ? releaseChannel : "";
  return releaseNotesUrl;
}
function getHelpCenterURL(clientEnvironment, locale) {
  let helpCenterUrl = getBaseUrl({ clientEnvironment });
  if (locale !== DEFAULT_LOCALE) {
    helpCenterUrl += \`/intl/\${locale.toLowerCase()}\`;
  }
  helpCenterUrl += "/help";
  return helpCenterUrl;
}
function getReportIssueURL(state, reportCrash) {
  const selectedWorkspace = getSelectedWorkspace(state);
  const baseURL = getBaseUrl({
    ...state.environment,
    workspace: selectedWorkspace?.domain
  });
  const helpRequestURL = new URL(\`\${baseURL}/help/requests/new\`);
  return \`\${helpRequestURL}\${reportCrash ? \`?crash_report=1\` : ""}\`;
}
function getApiBaseURLForBaseDomain(baseDomain) {
  return \`\${baseSlackURLForBaseDomain(baseDomain)}/api/\`;
}
function getApiBaseURL(options) {
  return \`\${baseSlackURL(options)}/api/\`;
}
function baseSlackURL(options) {
  return baseSlackURLForBaseDomain(getBaseDomain(options));
}
function baseSlackURLForBaseDomain(baseDomain) {
  return \`https://app.\${baseDomain}\`;
}
function isGantryWindowURL(url, mode) {
  return isSlackURL(url, mode) && url.hostname.startsWith("app.");
}
function isSlackGovURL(url) {
  return doesUrlMatchDomainSets(url, url_SLACK_GOV_DOMAINS) && !doesUrlMatchDomainSets(url, SLACK_URL_GOV_BLOCKED_DOMAINS);
}
function isSlackCommercialURL(url) {
  return doesUrlMatchDomainSets(url, url_SLACK_COMMERICAL_DOMAINS) && !doesUrlMatchDomainSets(url, SLACK_URL_COMMERICAL_BLOCKED_DOMAINS);
}
function isSlackURL(url, mode) {
  if (!url)
    return false;
  switch (mode) {
    case client_feature_mode_ClientEnvironment.NORMAL:
      return isSlackCommercialURL(url);
    case client_feature_mode_ClientEnvironment.RESTRICTED:
      return isSlackCommercialURL(url) || isSlackGovURL(url);
    default:
      return false;
  }
}
function getTeamSubdomain(url, mode) {
  if (!isSlackURL(url, mode))
    return void 0;
  for (const domainRef of [...SLACK_COMMERICAL_DOMAINS, ...SLACK_GOV_DOMAINS]) {
    if (domainRef.matchSubDomains && url.host.endsWith(\`.\${domainRef.domain}\`)) {
      return url.host.split(\`.\${domainRef.domain}\`).shift();
    }
  }
  return void 0;
}
function getTeamSubdomainForAnyEnvironment(url) {
  return findMap(
    Object.values(ClientEnvironment).filter(isNotString),
    (env) => getTeamSubdomain(url, env)
  );
}
function doesUrlMatchDomainSets(url, ...domainSets) {
  for (const domainSet of domainSets) {
    for (const domainRef of domainSet) {
      if (url.host === domainRef.domain)
        return true;
      if (domainRef.matchSubDomains && url.host.endsWith(\`.\${domainRef.domain}\`))
        return true;
    }
  }
  return false;
}
function nullishUrl(href) {
  try {
    return new URL(href);
  } catch {
    return null;
  }
}
function isSlackDownloadURL(url, mode) {
  if (!url)
    return false;
  switch (mode) {
    case ClientEnvironment.NORMAL:
      return doesUrlMatchDomainSets(url, SLACK_COMMERCIAL_DOWNLOAD_DOMAINS);
    case ClientEnvironment.RESTRICTED:
      return doesUrlMatchDomainSets(
        url,
        SLACK_COMMERCIAL_DOWNLOAD_DOMAINS,
        SLACK_GOV_DOWNLOAD_DOMAINS
      );
    default:
      return false;
  }
  throw new Error(\`not a valid mode: \${mode}\`);
}
function isNotString(value) {
  return !lodash_es_isString(value);
}
function isSlackURLForAnyEnvironment(url) {
  return Object.values(client_feature_mode_ClientEnvironment).filter(isNotString).some((mode) => isSlackURL(url, mode));
}
function parseSettingsLinkURL(linkURL) {
  const parsedUrl = typeof linkURL === "string" ? new URL(linkURL) : null;
  const params = parsedUrl ? searchParamsEntries(parsedUrl.searchParams) : null;
  let query = params?.update ?? "{}";
  if (query && !(query.startsWith("{") && query.endsWith("}"))) {
    query = \`{\${query}}\`;
  }
  query = replaceSmartQuotes(query);
  query = query.replace(/(['"])?([a-zA-Z0-9_-]+)(['"])?:/g, '"$2": ');
  const qm = query.match(/.*: (['"])?([a-zA-Z_-]*)(['"])?/);
  const isBool = qm && qm[2] && (qm[2] === "true" || qm[2] === "false");
  const isString2 = qm && qm[2] && /[\\w]|[\\w-]*/.test(qm[2]) && !isBool;
  const isQuoted = qm && qm[1] === '"' && qm[3] === '"';
  if (isString2 && !isQuoted) {
    query = (query || "{}").replace(/(.*): (['"])?([a-zA-Z0-9_-]+)(['"])?/g, '$1: "$3"');
  }
  return query;
}
function parseActionLinkURL(linkURL) {
  const parsedUrl = typeof linkURL === "string" ? new URL(linkURL) : null;
  const params = parsedUrl ? searchParamsEntries(parsedUrl.searchParams) : null;
  if (parsedUrl?.host === "app" && params?.action) {
    switch (params.action.toLowerCase()) {
      case "quit":
        return "QUIT_APP" /* QUIT_APP */;
      case "reset-window":
        return "RESET_WINDOW" /* RESET_WINDOW */;
      case "reveal-logs":
        return "REVEAL_LOGS" /* REVEAL_LOGS */;
      default:
        return null;
    }
  } else {
    return null;
  }
}
function validateDevEnvironment(devEnv) {
  const alphaNumericMatch = devEnv.match(/([A-Za-z0-9])*/i);
  const isValid = alphaNumericMatch && devEnv === alphaNumericMatch[0];
  if (isValid)
    return devEnv;
  return void 0;
}
function sanitizeTeamURL(input) {
  try {
    const teamUrl = new URL(input);
    const { protocol, searchParams } = teamUrl;
    if (!doesUrlMatchDomainSets(teamUrl, SLACK_COMMERICAL_DOMAINS, SLACK_GOV_DOMAINS)) {
      logger.warn(\`sanitizeTeamURL: \${input} did not meet host requirements\`);
      return null;
    }
    if (protocol !== "https:") {
      logger.warn(\`sanitizeTeamURL: \${input} did not meet protocol requirements\`);
      return null;
    }
    if (searchParams.has("redir")) {
      logger.warn(\`sanitizeTeamURL: \${input} contained redir parameter, which will be deleted\`);
      searchParams.delete("redir");
    }
    return teamUrl.toString();
  } catch (error) {
    logger.error(\`sanitizeTeamURL: could not validate url\`, {
      input,
      error
    });
    return null;
  }
}
function redactTeamSubdomain(input = "", mode) {
  const url = nullishUrl(input);
  if (!url)
    return url;
  if (isGantryWindowURL(url, mode))
    return url.toString();
  if (isSlackURLForAnyEnvironment(url)) {
    const teamName = getTeamSubdomain(url, mode);
    const redactedHost = teamName ? url.host.split(teamName).join(REDACTED_STRING) : url.host;
    return url.toString().split(url.host).join(redactedHost);
  }
  return input;
}
function redactTeamSubdomainForAnyEnvironment(input) {
  return Object.values(ClientEnvironment).filter(isNotString).reduce((url, mode) => redactTeamSubdomain(url, mode), input);
}

;// CONCATENATED MODULE: external "require('electron')"
const external_require_electron_namespaceObject = require('electron');
;// CONCATENATED MODULE: ./src/common/constants/ipc-channel-names.ts
var DownloadChannel = /* @__PURE__ */ ((DownloadChannel2) => {
  DownloadChannel2["StartEvent"] = "SLACK_START_DOWNLOAD";
  DownloadChannel2["DoneEvent"] = "SLACK_DOWNLOAD_DONE";
  return DownloadChannel2;
})(DownloadChannel || {});
var MagicLoginChannel = /* @__PURE__ */ ((MagicLoginChannel2) => {
  MagicLoginChannel2["Response"] = "SLACK_MAGIC_LOGIN_RESPONSE";
  return MagicLoginChannel2;
})(MagicLoginChannel || {});
var PrqChannel = /* @__PURE__ */ ((PrqChannel2) => {
  PrqChannel2["TeamBooted"] = "SLACK_PRQ_TEAM_BOOTED";
  return PrqChannel2;
})(PrqChannel || {});
var WindowCreatorChannel = /* @__PURE__ */ ((WindowCreatorChannel2) => {
  WindowCreatorChannel2["WindowIdRequest"] = "SLACK_WINDOW_ID_REQUEST";
  return WindowCreatorChannel2;
})(WindowCreatorChannel || {});
var WebContentsChannel = /* @__PURE__ */ ((WebContentsChannel2) => {
  WebContentsChannel2["DidFinishLoading"] = "SLACK_DID_FINISH_LOADING";
  WebContentsChannel2["PreloadError"] = "SLACK_PRELOAD_ERROR";
  return WebContentsChannel2;
})(WebContentsChannel || {});
var OverlayChannel = /* @__PURE__ */ ((OverlayChannel2) => {
  OverlayChannel2["SetIcon"] = "SLACK_SET_OVERLAY_ICON";
  return OverlayChannel2;
})(OverlayChannel || {});
var ipc_channel_names_IpcRendererMessage = /* @__PURE__ */ ((IpcRendererMessage2) => {
  IpcRendererMessage2["ADD_NEW_TEAMS"] = "ADD_NEW_TEAMS";
  IpcRendererMessage2["ASK_FOR_MEDIA_ACCESS"] = "ASK_FOR_MEDIA_ACCESS";
  IpcRendererMessage2["BOUNCE_DOCK"] = "SLACK_BOUNCE_DOCK";
  IpcRendererMessage2["CLEAR_CACHE_AND_RESTART_APP"] = "CLEAR_CACHE_AND_RESTART_APP";
  IpcRendererMessage2["CLEAR_SESSION_CACHE"] = "SLACK_CLEAR_SESSION_CACHE";
  IpcRendererMessage2["CLICK_NOTIFICATION"] = "CLICK_NOTIFICATION";
  IpcRendererMessage2["CLOSE_WINDOW"] = "CLOSE_WINDOW";
  IpcRendererMessage2["EXTEND_MENU"] = "EXTEND_MENU";
  IpcRendererMessage2["GET_ALL_DISPLAYS"] = "GET_ALL_DISPLAYS";
  IpcRendererMessage2["GET_APP_METRICS"] = "SLACK_GET_APP_MEMORY_USAGE";
  IpcRendererMessage2["GET_APPLICATION_NAME_FOR_PROTOCOL"] = "GET_APPLICATION_NAME_FOR_PROTOCOL";
  IpcRendererMessage2["GET_AVAILABLE_LANGUAGES"] = "SLACK_GET_AVAILABLE_LANGUAGES";
  IpcRendererMessage2["GET_CHROMIUM_FEATURE_OVERRIDES"] = "GET_CHROMIUM_FEATURE_OVERRIDES";
  IpcRendererMessage2["GET_CURRENT_COMMAND_LINE_SWITCHES"] = "GET_CURRENT_COMMAND_LINE_SWITCHES";
  IpcRendererMessage2["GET_CURRENT_LANGUAGES"] = "SLACK_GET_CURRENT_LANGUAGES";
  IpcRendererMessage2["GET_CURSOR_SCREEN_POINT"] = "GET_CURSOR_SCREEN_POINT";
  IpcRendererMessage2["GET_DISPLAY_NEAREST_POINT"] = "GET_DISPLAY_NEAREST_POINT";
  IpcRendererMessage2["GET_DOM_COUNTERS"] = "GET_DOM_COUNTERS";
  IpcRendererMessage2["GET_FEATURE_FRAGMENT_ENABLED"] = "SLACK_GET_FEATURE_FRAGMENT_ENABLED";
  IpcRendererMessage2["GET_GLOBAL_SHORTCUTS_REGISTERED"] = "SLACK_GET_GLOBAL_SHORTCUTS_REGISTERED";
  IpcRendererMessage2["GET_IS_LAUNCH_ENFORCED"] = "GET_IS_LAUNCH_ENFORCED";
  IpcRendererMessage2["GET_IS_RUNNING_UNDER_ROSETTA_TRANSLATION"] = "GET_IS_RUNNING_UNDER_ROSETTA_TRANSLATION";
  IpcRendererMessage2["GET_LOCALE_RESOURCE"] = "SLACK_GET_LOCALE_RESOURCE";
  IpcRendererMessage2["GET_MEDIA_ACCESS_STATUS"] = "GET_MEDIA_ACCESS_STATUS";
  IpcRendererMessage2["GET_NOTIFICATION_WARNINGS"] = "SLACK_GET_NOTIFICATION_WARNINGS";
  IpcRendererMessage2["GET_RECENT_FILES"] = "SLACK_GET_RECENT_FILES";
  IpcRendererMessage2["GET_REDUX_STATE"] = "SLACK_GET_REDUX_STATE";
  IpcRendererMessage2["GET_SCREEN_PREVIEW_THUMBNAILS"] = "GET_SCREEN_PREVIEW_THUMBNAILS";
  IpcRendererMessage2["GET_VIRTUAL_CAMERAS"] = "GET_VIRTUAL_CAMERAS";
  IpcRendererMessage2["HANDLE_DEEP_LINK"] = "HANDLE_DEEP_LINK";
  IpcRendererMessage2["LOAD_LOCALE"] = "SLACK_LOAD_LOCALE";
  IpcRendererMessage2["MAXIMIZE_WINDOW"] = "MAXIMIZE_WINDOW";
  IpcRendererMessage2["MINIMIZE_WINDOW"] = "MINIMIZE_WINDOW";
  IpcRendererMessage2["NOTIFY"] = "SLACK_NOTIFY";
  IpcRendererMessage2["NOTIFY_GLOBAL_SHORTCUTS_TRIGGER"] = "SLACK_NOTIFY_GLOBAL_SHORTCUTS_TRIGGER";
  IpcRendererMessage2["NOTIFY_WATCHED_FILE_CHANGED"] = "NOTIFY_WATCHED_FILE_CHANGED";
  IpcRendererMessage2["SHOW_DOWNLOAD_FOLDER_CHOOSER"] = "SLACK_SHOW_DOWNLOAD_FOLDER_CHOOSER";
  IpcRendererMessage2["RESET_DOWNLOAD_FOLDER"] = "SLACK_RESET_DOWNLOAD_FOLDER";
  IpcRendererMessage2["OPEN_GPU_INFO"] = "SLACK_OPEN_GPU_INFO";
  IpcRendererMessage2["OPEN_MESSAGE_BOX"] = "SLACK_OPEN_MESSAGE_BOX";
  IpcRendererMessage2["PERFORMANCE_DISABLE"] = "PERFORMANCE_DISABLE";
  IpcRendererMessage2["PERFORMANCE_ENABLE"] = "PERFORMANCE_ENABLE";
  IpcRendererMessage2["PERFORMANCE_GET_METRICS"] = "PERFORMANCE_GET_METRICS";
  IpcRendererMessage2["POPUP_APP_MENU"] = "POPUP_APP_MENU";
  IpcRendererMessage2["POWER_SAVE_BLOCKER_START"] = "SLACK_POWER_SAVE_BLOCKER_START";
  IpcRendererMessage2["POWER_SAVE_BLOCKER_IS_STARTED"] = "SLACK_POWER_SAVE_BLOCKER_IS_STARTED";
  IpcRendererMessage2["PREPARE_AND_REVEAL_LOGS"] = "PREPARE_AND_REVEAL_LOGS";
  IpcRendererMessage2["READ_SYSTEM_TEXT_PREFERENCES"] = "READ_SYSTEM_TEXT_PREFERENCES";
  IpcRendererMessage2["REDUX_UPDATE_FROM_WEBAPP"] = "REDUX_UPDATE_FROM_WEBAPP";
  IpcRendererMessage2["REMOVE_DOWNLOADS"] = "REMOVE_DOWNLOADS";
  IpcRendererMessage2["REMOVE_NOTIFICATION"] = "REMOVE_NOTIFICATION";
  IpcRendererMessage2["REMOVE_TEAMS"] = "REMOVE_TEAMS";
  IpcRendererMessage2["REQUEST_EMULATION_THROTTLE"] = "SLACK_REQUEST_EMULATION_THROTTLE";
  IpcRendererMessage2["RESTART_WITH_NET_LOG"] = "RESTART_WITH_NET_LOG";
  IpcRendererMessage2["SELECT_NEXT_WORKSPACE"] = "SELECT_NEXT_WORKSPACE";
  IpcRendererMessage2["SELECT_PREVIOUS_WORKSPACE"] = "SELECT_PREVIOUS_WORKSPACE";
  IpcRendererMessage2["SELECTED_WORKSPACE_CHANGED"] = "SELECTED_WORKSPACE_CHANGED";
  IpcRendererMessage2["SET_COMMAND_LINE_SWITCHES"] = "SET_COMMAND_LINE_SWITCHES";
  IpcRendererMessage2["SET_CONTEXT_MENU_ITEM"] = "SET_CONTEXT_MENU_ITEM";
  IpcRendererMessage2["SET_CURRENT_LANGUAGES"] = "SLACK_SET_CURRENT_LANGUAGES";
  IpcRendererMessage2["SET_FULL_SCREEN"] = "SET_FULL_SCREEN";
  IpcRendererMessage2["SET_NETWORK_STATUS"] = "SET_NETWORK_STATUS";
  IpcRendererMessage2["SET_NOTIFICATIONS_WINDOW_SHAPE"] = "SET_NOTIFICATIONS_WINDOW_SHAPE";
  IpcRendererMessage2["SET_UPDATE_STATUS"] = "SET_UPDATE_STATUS";
  IpcRendererMessage2["SET_WINDOW_FRAME"] = "SET_WINDOW_FRAME";
  IpcRendererMessage2["SHOULD_PLAY_SOUND"] = "SLACK_SHOULD_PLAY_SOUND";
  IpcRendererMessage2["SHOW_SETTINGS_EDITOR"] = "SHOW_SETTINGS_EDITOR";
  IpcRendererMessage2["SLACK_DEBUG_CHECK_FEATURE_ENABLED"] = "SLACK_DEBUG_CHECK_FEATURE_ENABLED";
  IpcRendererMessage2["SQUIRREL_MAC_SET_DIRECT_CONTENTS_WRITE_ENABLED"] = "SQUIRREL_MAC_SET_DIRECT_CONTENTS_WRITE_ENABLED";
  IpcRendererMessage2["START_DIAGNOSTICS_TRACE"] = "SLACK_START_DIAGNOSTICS_TRACE";
  IpcRendererMessage2["START_DOWNLOAD"] = "START_DOWNLOAD";
  IpcRendererMessage2["START_NET_LOG"] = "START_NET_LOG";
  IpcRendererMessage2["STOP_DIAGNOSTICS_TRACE"] = "SLACK_STOP_DIAGNOSTICS_TRACE";
  IpcRendererMessage2["STORE_ENTERPRISE_ID_PAIR"] = "STORE_ENTERPRISE_ID_PAIR";
  IpcRendererMessage2["STORE_USER_WORKSPACES"] = "STORE_USER_WORKSPACES";
  IpcRendererMessage2["SUBMIT_CREDENTIALS"] = "SUBMIT_CREDENTIALS";
  IpcRendererMessage2["SYNC_WORKSPACES"] = "SYNC_WORKSPACES";
  IpcRendererMessage2["TITLEBAR_DOUBLE_CLICK"] = "TITLEBAR_DOUBLE_CLICK";
  IpcRendererMessage2["TOGGLE_DEV_TOOLS"] = "TOGGLE_DEV_TOOLS";
  IpcRendererMessage2["TOGGLE_FEATURE_FRAGMENT"] = "TOGGLE_FEATURE_FRAGMENT";
  IpcRendererMessage2["TOGGLE_GLOBAL_SHORTCUTS_HANDLER"] = "SLACK_TOGGLE_GLOBAL_SHORTCUTS_HANDLER";
  IpcRendererMessage2["TRIGGER_DOWNLOAD_SHELL_ACTION"] = "TRIGGER_DOWNLOAD_SHELL_ACTION";
  IpcRendererMessage2["UNMAXIMIZE_WINDOW"] = "UNMAXIMIZE_WINDOW";
  IpcRendererMessage2["UPDATE_DOWNLOAD"] = "UPDATE_DOWNLOAD";
  IpcRendererMessage2["UPDATE_SETTINGS"] = "UPDATE_SETTINGS";
  IpcRendererMessage2["UPLOAD_APP_LOGS_ARCHIVE"] = "SLACK_UPLOAD_APP_LOGS_ARCHIVE";
  IpcRendererMessage2["UPLOAD_RECENT_FILE"] = "SLACK_UPLOAD_RECENT_FILE";
  IpcRendererMessage2["WAIT_AUTH_COOKIE_CHANGE"] = "SLACK_WAIT_AUTH_COOKIE_CHANGE";
  IpcRendererMessage2["WRITE_IMAGE_TO_CLIPBOARD"] = "WRITE_IMAGE_TO_CLIPBOARD";
  IpcRendererMessage2["WRITE_STRING_TO_CLIPBOARD"] = "WRITE_STRING_TO_CLIPBOARD";
  IpcRendererMessage2["ZOOM_IN"] = "ZOOM_IN";
  return IpcRendererMessage2;
})(ipc_channel_names_IpcRendererMessage || {});
var IpcMainMessage = /* @__PURE__ */ ((IpcMainMessage2) => {
  IpcMainMessage2["CLOSE_CALL"] = "CLOSE_CALL";
  IpcMainMessage2["CUSTOM_MENU_ITEM_CLICKED"] = "CUSTOM_MENU_ITEM_CLICKED";
  IpcMainMessage2["FORWARD_DEEP_LINK"] = "FORWARD_DEEP_LINK";
  IpcMainMessage2["RELOAD_DOCUMENT"] = "RELOAD_DOCUMENT";
  IpcMainMessage2["SHOW_WEBAPP_DIALOG"] = "SHOW_WEBAPP_DIALOG";
  IpcMainMessage2["SLEEP_AND_WAKE"] = "SLEEP_AND_WAKE";
  IpcMainMessage2["START_SEARCH"] = "START_SEARCH";
  IpcMainMessage2["TEXT_PREFERENCES_CHANGED"] = "TEXT_PREFERENCES_CHANGED";
  IpcMainMessage2["TICKLE_MESSAGE_SERVER"] = "TICKLE_MESSAGE_SERVER";
  IpcMainMessage2["WORKSPACE_SELECTION"] = "WORKSPACE_SELECTION";
  return IpcMainMessage2;
})(IpcMainMessage || {});
var ContextMenuChannel = /* @__PURE__ */ ((ContextMenuChannel2) => {
  ContextMenuChannel2["Click"] = "SLACK_CONTEXT_MENU_CLICK";
  ContextMenuChannel2["Close"] = "SLACK_CONTEXT_MENU_CLOSE";
  return ContextMenuChannel2;
})(ContextMenuChannel || {});
var ServiceWorkerManager = /* @__PURE__ */ ((ServiceWorkerManager2) => {
  ServiceWorkerManager2["RESTART_SELF"] = "SLACK_SERVICE_WORKER_MANAGER_RESTART_SELF";
  return ServiceWorkerManager2;
})(ServiceWorkerManager || {});
var WindowChannel = /* @__PURE__ */ ((WindowChannel2) => {
  WindowChannel2["EXEC_BROWSERWINDOW_METHOD"] = "EXEC_BROWSERWINDOW_METHOD";
  WindowChannel2["GET_WINDOW_ID"] = "GET_WINDOW_ID";
  WindowChannel2["BRING_TO_FOREGROUND"] = "BRING_TO_FOREGROUND";
  WindowChannel2["REGISTER_EVENT_LISTENER"] = "REGISTER_EVENT_LISTENER";
  WindowChannel2["UNREGISTER_EVENT_LISTENER"] = "UNREGISTER_EVENT_LISTENER";
  WindowChannel2["WINDOW_EVENT"] = "WINDOW_EVENT";
  WindowChannel2["BROWSER_WINDOW_SET_TITLE_BAR_OVERLAY"] = "BROWSER_WINDOW_SET_TITLE_BAR_OVERLAY";
  return WindowChannel2;
})(WindowChannel || {});
var CallsChannel = /* @__PURE__ */ ((CallsChannel2) => {
  CallsChannel2["CALLS_SCREEN_SHARE_CREATE_BORDER_WINDOW"] = "CALLS_SCREEN_SHARE_CREATE_BORDER_WINDOW";
  CallsChannel2["CALLS_SCREEN_SHARE_SHOW_BORDER"] = "CALLS_SCREEN_SHARE_SHOW_BORDER";
  CallsChannel2["CALLS_SCREEN_SHARE_HIDE_BORDER"] = "CALLS_SCREEN_SHARE_HIDE_BORDER";
  CallsChannel2["CALLS_SCREEN_SHARE_SET_WINDOW_OR_SCREEN_ID"] = "CALLS_SCREEN_SHARE_SET_WINDOW_OR_SCREEN_ID";
  CallsChannel2["CALLS_SCREEN_SHARE_SET_BORDER_WIDTH"] = "CALLS_SCREEN_SHARE_SET_BORDER_WIDTH";
  CallsChannel2["CALLS_SCREEN_SHARE_SET_BORDER_COLOR"] = "CALLS_SCREEN_SHARE_SET_BORDER_COLOR";
  CallsChannel2["CALLS_SCREEN_SHARE_SET_TIMER_INTERVAL_MS"] = "CALLS_SCREEN_SHARE_SET_TIMER_INTERVAL_MS";
  CallsChannel2["CALLS_SCREEN_SHARE_GET_WINDOW_POSITION_AND_DIMENSIONS"] = "CALLS_SCREEN_SHARE_GET_WINDOW_POSITION_AND_DIMENSIONS";
  return CallsChannel2;
})(CallsChannel || {});
var PrototypeChannel = /* @__PURE__ */ ((PrototypeChannel2) => {
  PrototypeChannel2["MULTI_WINDOW_PROTOTYPE_SHOW_OVERLAY"] = "MULTI_WINDOW_PROTOTYPE_SHOW_OVERLAY";
  PrototypeChannel2["MULTI_WINDOW_PROTOTYPE_HIDE_OVERLAY"] = "MULTI_WINDOW_PROTOTYPE_HIDE_OVERLAY";
  return PrototypeChannel2;
})(PrototypeChannel || {});

;// CONCATENATED MODULE: ./src/preload/ipc-to-main.ts

const ipcInvoke = (channel, ...args) => ipcRenderer.invoke(channel, ...args);
const ipc_to_main_ipcSend = (channel, ...args) => external_require_electron_namespaceObject.ipcRenderer.send(channel, ...args);
const ipcSendSync = (channel, ...args) => ipcRenderer.sendSync(channel, ...args);

;// CONCATENATED MODULE: ./src/preload/bootstrap-util/post-dom-tasks.ts



const HAS_RAN_PRELOAD_KEY = "hasRanPreloadScript";
function setupTouchscreenEvents() {
  swipe(
    document.body,
    (direction) => {
      switch (direction) {
        case "left":
          window.history.go(-1);
          break;
        case "right":
          window.history.go(1);
          break;
      }
    },
    { pointers: 2 }
  );
  swipe(
    document.body,
    (direction) => {
      switch (direction) {
        case "left":
          ipcSend(IpcRendererMessage.SELECT_PREVIOUS_WORKSPACE);
          break;
        case "right":
          ipcSend(IpcRendererMessage.SELECT_NEXT_WORKSPACE);
          break;
      }
    },
    { pointers: 3 }
  );
}
function setupKeyDownHandlers() {
  document.body.addEventListener(
    "keydown",
    (e) => {
      if (e.code === "Equal" && !e.shiftKey && !e.altKey && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        ipc_to_main_ipcSend(ipc_channel_names_IpcRendererMessage.ZOOM_IN);
      }
    },
    true
  );
}
function canAccessLocalStorage() {
  return window.location.protocol !== "data:" && window.location.protocol !== "about:" && window.location.protocol !== "chrome-error:";
}
function shouldRestartServiceWorker() {
  return canAccessLocalStorage() && !!sessionStorage.getItem(HAS_RAN_PRELOAD_KEY);
}


;// CONCATENATED MODULE: ./src/preload/child-preload-entry-point.ts



function shouldRunPreload() {
  try {
    const url = new URL(location.href);
    if (isEmptyWindowURL(url) && window.opener) {
      const openerUrl = new URL(opener.location.href);
      return isSlackURLForAnyEnvironment(openerUrl);
    } else if (url.protocol === "blob:" && window.opener) {
      const blobUrl = new URL(url.pathname);
      return isSlackURLForAnyEnvironment(blobUrl);
    }
  } catch (e) {
    console.error(e);
  }
  return false;
}
function registerZoomFactorCSSProperty() {
  const update = () => {
    if (document.body)
      document.body.style.setProperty("--zoom-factor", external_require_electron_namespaceObject.webFrame.getZoomFactor().toString());
  };
  window.addEventListener("resize", update);
  update();
}
if (shouldRunPreload()) {
  process.on("document-start", () => {
    setTimeout(() => {
      registerZoomFactorCSSProperty();
      setupKeyDownHandlers();
    }, 0);
  });
}
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNjg3NC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBR0E7QUFVQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFNQTtBQVdBO0FBRUE7QUFTQTtBQUNBO0FBcUJBO0FBR0E7QUFPQTtBQUdBO0FBQ0E7QUFFQTtBQU1BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUVBOzs7QUN2S0E7QUFDQTtBQUNBO0FBQ0E7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN4QkE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUtBOzs7QUNWQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBUUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBRUE7QUFJQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFNQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBS0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUlBO0FBS0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBS0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBRUE7QUFLQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBT0E7QUFFQTtBQUdBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBT0E7QUFDQTtBQUdBOzs7QUNoYkE7O0FDT0E7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQVVBO0FBQ0E7QUFEQTtBQUFBO0FBT0E7QUFDQTtBQURBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFBQTtBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFRQTtBQUNBO0FBREE7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzRkE7QUFBQTtBQWlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBS0E7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFGQTtBQUFBOzs7QUNwTUE7QUFFQTtBQUtBO0FBTUE7OztBQ2RBO0FBRUE7QUFDQTtBQUVBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUtBO0FBTUE7QUFDQTtBQUNBO0FBT0E7OztBQ3ZGQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NhbmRib3hlZFJlbmRlcmVyLy4vc3JjL2NvbW1vbi9jb25zdGFudHMvdXJsLnRzP2E1YmIiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzPzViYTIiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19yb290LmpzPzE4NGUiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanM/ZDEyMiIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFJhd1RhZy5qcz8wYTI0Iiwid2VicGFjazovL3NhbmRib3hlZFJlbmRlcmVyLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb2JqZWN0VG9TdHJpbmcuanM/N2NjZSIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VHZXRUYWcuanM/N2Y0YyIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3QuanM/MzkwYyIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNGdW5jdGlvbi5qcz9mNDY4Iiwid2VicGFjazovL3NhbmRib3hlZFJlbmRlcmVyLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fY29yZUpzRGF0YS5qcz8wYzg1Iiwid2VicGFjazovL3NhbmRib3hlZFJlbmRlcmVyLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faXNNYXNrZWQuanM/OGQxZCIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3RvU291cmNlLmpzP2M1ZmYiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlSXNOYXRpdmUuanM/NWI3NSIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldFZhbHVlLmpzPzYxOGIiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXROYXRpdmUuanM/YTRlMiIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX25hdGl2ZUNyZWF0ZS5qcz8yODZjIiwid2VicGFjazovL3NhbmRib3hlZFJlbmRlcmVyLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9faGFzaENsZWFyLmpzPzFmODMiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19oYXNoRGVsZXRlLmpzPzdkOWMiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19oYXNoR2V0LmpzP2U2NjgiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19oYXNoSGFzLmpzPzJlOTgiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19oYXNoU2V0LmpzPzAwOWIiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19IYXNoLmpzPzZiMTYiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVDbGVhci5qcz8zNWJlIiwid2VicGFjazovL3NhbmRib3hlZFJlbmRlcmVyLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9lcS5qcz9lMmUyIiwid2VicGFjazovL3NhbmRib3hlZFJlbmRlcmVyLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYXNzb2NJbmRleE9mLmpzP2UwODIiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVEZWxldGUuanM/MzVlMCIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2xpc3RDYWNoZUdldC5qcz80N2JjIiwid2VicGFjazovL3NhbmRib3hlZFJlbmRlcmVyLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbGlzdENhY2hlSGFzLmpzPzhlNjEiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19saXN0Q2FjaGVTZXQuanM/MDUyYiIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX0xpc3RDYWNoZS5qcz83ZTFlIiwid2VicGFjazovL3NhbmRib3hlZFJlbmRlcmVyLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fTWFwLmpzPzc4ZjgiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZUNsZWFyLmpzPzEyNTgiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19pc0tleWFibGUuanM/MjFjZCIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2dldE1hcERhdGEuanM/MjA0MyIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX21hcENhY2hlRGVsZXRlLmpzPzUwNTUiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19tYXBDYWNoZUdldC5qcz9jMDg0Iiwid2VicGFjazovL3NhbmRib3hlZFJlbmRlcmVyLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fbWFwQ2FjaGVIYXMuanM/NWM4OSIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX21hcENhY2hlU2V0LmpzPzZhYTciLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19NYXBDYWNoZS5qcz83YmJhIiwid2VicGFjazovL3NhbmRib3hlZFJlbmRlcmVyLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9tZW1vaXplLmpzP2FjYTQiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzQXJyYXkuanM/ZDEyZiIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3RMaWtlLmpzP2E5MjgiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzU3RyaW5nLmpzPzZjODgiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9zcmMvY29tbW9uL2NvbnN0YW50cy9jbGllbnQtZmVhdHVyZS1tb2RlLnRzPzA4MTEiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9zcmMvY29tbW9uL3VybC91cmwtdXRpbHMudHM/ZTk1ZSIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci9leHRlcm5hbCB2YXIgXCJyZXF1aXJlKCdlbGVjdHJvbicpXCI/NTc2NCIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL3NyYy9jb21tb24vY29uc3RhbnRzL2lwYy1jaGFubmVsLW5hbWVzLnRzPzFhOWIiLCJ3ZWJwYWNrOi8vc2FuZGJveGVkUmVuZGVyZXIvLi9zcmMvcHJlbG9hZC9pcGMtdG8tbWFpbi50cz9mMDBlIiwid2VicGFjazovL3NhbmRib3hlZFJlbmRlcmVyLy4vc3JjL3ByZWxvYWQvYm9vdHN0cmFwLXV0aWwvcG9zdC1kb20tdGFza3MudHM/YWM3ZiIsIndlYnBhY2s6Ly9zYW5kYm94ZWRSZW5kZXJlci8uL3NyYy9wcmVsb2FkL2NoaWxkLXByZWxvYWQtZW50cnktcG9pbnQudHM/YWFjMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhlIHByZWZpeCBmb3IgbGlua3Mgb3VyIGFwcCBoYW5kbGVzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNMQUNLX1BST1RPQ09MID0gJ3NsYWNrOic7XHJcblxyXG4vKipcclxuICogVGVzdHMgd2hldGhlciBvciBub3QgYSBVUkwgYmVsb25ncyB0byBTbGFjay5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9tYWluUmVmZXJlbmNlIHtcclxuICBkb21haW46IHN0cmluZztcclxuICBtYXRjaFN1YkRvbWFpbnM/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU0xBQ0tfQ09NTUVSSUNBTF9ET01BSU5TOiBBcnJheTxEb21haW5SZWZlcmVuY2U+ID0gW1xyXG4gIHsgZG9tYWluOiAnc2xhY2suZXUnLCBtYXRjaFN1YkRvbWFpbnM6IHRydWUgfSxcclxuICB7IGRvbWFpbjogJ3NsYWNrLmNvbScsIG1hdGNoU3ViRG9tYWluczogdHJ1ZSB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNMQUNLX0dPVl9ET01BSU5TOiBBcnJheTxEb21haW5SZWZlcmVuY2U+ID0gW1xyXG4gIHsgZG9tYWluOiAnc2xhY2stZ292LmNvbScsIG1hdGNoU3ViRG9tYWluczogdHJ1ZSB9LFxyXG4gIHsgZG9tYWluOiAnc2xhY2stZ292LWRldi5jb20nLCBtYXRjaFN1YkRvbWFpbnM6IHRydWUgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTTEFDS19VUkxfQ09NTUVSSUNBTF9CTE9DS0VEX0RPTUFJTlM6IEFycmF5PERvbWFpblJlZmVyZW5jZT4gPSBbXHJcbiAgeyBkb21haW46ICdmaWxlcy5zbGFjay5ldScsIG1hdGNoU3ViRG9tYWluczogZmFsc2UgfSxcclxuICB7IGRvbWFpbjogJ2ZpbGVzLnNsYWNrLmNvbScsIG1hdGNoU3ViRG9tYWluczogZmFsc2UgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTTEFDS19VUkxfR09WX0JMT0NLRURfRE9NQUlOUzogQXJyYXk8RG9tYWluUmVmZXJlbmNlPiA9IFtcclxuICB7IGRvbWFpbjogJ2ZpbGVzLnNsYWNrLWdvdi5jb20nLCBtYXRjaFN1YkRvbWFpbnM6IGZhbHNlIH0sXHJcbiAgeyBkb21haW46ICdmaWxlcy5zbGFjay1nb3YtZGV2LmNvbScsIG1hdGNoU3ViRG9tYWluczogZmFsc2UgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTTEFDS19DT01NRVJDSUFMX0RPV05MT0FEX0RPTUFJTlM6IEFycmF5PERvbWFpblJlZmVyZW5jZT4gPSBbXHJcbiAgeyBkb21haW46ICdzbGFjay5ldScsIG1hdGNoU3ViRG9tYWluczogdHJ1ZSB9LFxyXG4gIHsgZG9tYWluOiAnc2xhY2suY29tJywgbWF0Y2hTdWJEb21haW5zOiB0cnVlIH0sXHJcbiAgeyBkb21haW46ICdzbGFjay1maWxlcy5ldScsIG1hdGNoU3ViRG9tYWluczogdHJ1ZSB9LFxyXG4gIHsgZG9tYWluOiAnc2xhY2stZmlsZXMuY29tJywgbWF0Y2hTdWJEb21haW5zOiB0cnVlIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgU0xBQ0tfR09WX0RPV05MT0FEX0RPTUFJTlM6IEFycmF5PERvbWFpblJlZmVyZW5jZT4gPSBbXHJcbiAgeyBkb21haW46ICdzbGFjay1nb3YuY29tJywgbWF0Y2hTdWJEb21haW5zOiB0cnVlIH0sXHJcbiAgeyBkb21haW46ICdzbGFjay1nb3YtZGV2LmNvbScsIG1hdGNoU3ViRG9tYWluczogdHJ1ZSB9LFxyXG4gIHsgZG9tYWluOiAnc2xhY2stZmlsZXMtZ292LmNvbScsIG1hdGNoU3ViRG9tYWluczogdHJ1ZSB9LFxyXG4gIHsgZG9tYWluOiAnc2xhY2stZmlsZXMtZ292LWRldi5jb20nLCBtYXRjaFN1YkRvbWFpbnM6IHRydWUgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBTTEFDS19JTUFHRV9ET01BSU5TOiBBcnJheTxEb21haW5SZWZlcmVuY2U+ID0gW1xyXG4gIHsgZG9tYWluOiAnc2xhY2stZWRnZS5jb20nLCBtYXRjaFN1YkRvbWFpbnM6IHRydWUgfSxcclxuICB7IGRvbWFpbjogJ3NsYWNrLWltZ3MuY29tJywgbWF0Y2hTdWJEb21haW5zOiB0cnVlIH0sXHJcbiAgeyBkb21haW46ICdzbGFjay1pbWdzLWdvdi5jb20nLCBtYXRjaFN1YkRvbWFpbnM6IHRydWUgfSxcclxuICB7IGRvbWFpbjogJ3NsYWNrLWltZ3MtZ292LWRldi5jb20nLCBtYXRjaFN1YkRvbWFpbnM6IHRydWUgfSxcclxuICB7IGRvbWFpbjogJ3NsYWNrLWVkZ2UtZ292LmNvbScsIG1hdGNoU3ViRG9tYWluczogdHJ1ZSB9LFxyXG5dO1xyXG5cclxuLyoqXHJcbiAqIFRlc3RzIHdoZXRoZXIgb3Igbm90IGEgVVJMIGNvbnRhaW5zIHRoZSBtYWdpYy1sb2dpbiBzbmlwcGV0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IE1BR0lDX0xPR0lOX1JFR0VYID0gL21hZ2ljLWxvZ2luLztcclxuXHJcbi8qKlxyXG4gKiBTb21ldGltZXMgd2hlbiBuZXR3b3JrIGNoYW5nZXMgd2UgZW5kIHVwIG5hdmlnYXRpbmcgdG8gYSBibGFuayBwYWdlIHdpdGhcclxuICogdGhpcyBVUkwuIFdlJ2xsIGZpbHRlciB0aGVzZSBvdXQgYW5kIHJlbG9hZCBhdXRvbWF0aWNhbGx5LCBsaWtlIENocm9tZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBDSFJPTUlVTV9CTEFOS19QQUdFX1VSTCA9ICdjaHJvbWUtZXJyb3I6Ly9jaHJvbWV3ZWJkYXRhJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYWJvdXQ6YmxhbmsgVVJMLlxyXG4gKlxyXG4gKiBJZiBpdCBpcyAjYmxvY2tlZCB3ZSByZXR1cm4gZmFsc2Ugc28gdGhhdCBpdCBnZXRzIGRyb3BwZWRcclxuICogI2Jsb2NrZWQgb2NjdXJzIHdoZW4gYSBwYWdlIGF0dGVtcHRzIHRvIG9wZW4gZWl0aGVyIGFuIGludmFsaWQgVVJMIG9yIGEgVVJMIHRoYXRcclxuICogdGhlIGNoaWxkIHByb2Nlc3MgcG9saWN5IHJlamVjdHMuICBFLmcuIGNyb3NzLW9yaWdpbiBibG9ic1xyXG4gKlxyXG4gKiBSZWY6IGh0dHBzOi8vc291cmNlLmNocm9taXVtLm9yZy9jaHJvbWl1bS9jaHJvbWl1bS9zcmMvKy9tYWluOmNvbnRlbnQvYnJvd3Nlci9yZW5kZXJlcl9ob3N0L3JlbmRlcl9wcm9jZXNzX2hvc3RfaW1wbC5jYztsPTQwODEtNDA5NTtkcmM9NWJjYWEyNDkzNjgxMWQ5NzVlMjk3ZDhkMTg3N2Y5NDhiYzQ0MTRjMzticHY9MTticHQ9MVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlzRW1wdHlXaW5kb3dVUkwgPSAodXJsOiBVUkwgfCBudWxsKSA9PlxyXG4gIHVybCAmJiB1cmwucHJvdG9jb2wgPT09ICdhYm91dDonICYmIHVybC5wYXRobmFtZSA9PT0gJ2JsYW5rJyAmJiB1cmwuaGFzaCAhPT0gJyNibG9ja2VkJztcclxuZXhwb3J0IGNvbnN0IGlzQWJvdXRCbG9ja2VkV2luZG93VVJMID0gKHVybDogVVJMIHwgbnVsbCkgPT5cclxuICB1cmwgJiYgdXJsLnByb3RvY29sID09PSAnYWJvdXQ6JyAmJiB1cmwucGF0aG5hbWUgPT09ICdibGFuaycgJiYgdXJsLmhhc2ggPT09ICcjYmxvY2tlZCc7XHJcblxyXG4vKipcclxuICogTWFwcyB0byB0aGUgaHR0cHM6Ly9zMy5jb25zb2xlLmF3cy5hbWF6b24uY29tL3MzL2J1Y2tldHMvc2xhY2stc3BlbGxjaGVja1xyXG4gKiBidWNrZXQuIFdlIGhvc3QgdGhlc2Ugb3Vyc2VsdmVzIHRvIGF2b2lkIGEgZGVwZW5kZW5jeSBvbiBDaHJvbWl1bSdzIENETi5cclxuICpcclxuICogQG5vdGUgUHJlc2VydmUgdGhlIHRyYWlsaW5nIHNsYXNoXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU1BFTExDSEVDS19ESUNUSU9OQVJJRVNfVVJMID0gJ2h0dHBzOi8vc3BlbGxjaGVjay5zbGFjay1lZGdlLmNvbS9kaWN0aW9uYXJpZXNfdjIvJztcclxuZXhwb3J0IGNvbnN0IFNQRUxMQ0hFQ0tfRElDVElPTkFSSUVTX0dPVl9TTEFDS19VUkwgPVxyXG4gICdodHRwczovL3NwZWxsY2hlY2suc2xhY2stZWRnZS1nb3YuY29tL2RpY3Rpb25hcmllc192Mi8nO1xyXG5cclxuLyoqXHJcbiAqIFVzZWQgd2hlbiBpbml0aWFsaXppbmcgU2VudHJ5LiBUaGUgRFNOIFVSTCB0YWtlcyB0aGUgZm9sbG93aW5nIGZvcm1hdDpcclxuICpcclxuICoge3NjaGVtYX06Ly97c2VudHJ5IGtleX1Ae2hvc3Qgd2l0aCBwb3J0fS97dXJsIHBhdGggcHJlZml4fS97cHJvamVjdCBJRH1cclxuICpcclxuICogVGhpcyBpcyBhIERTTiByYXRoZXIgdGhhbiBhIHdlYiBVUkwuIENyYXNoIG1pbmlkdW1wcyBhcmUgcG9zdGVkIHRvIHRoZVxyXG4gKiB0aGUgZm9sbG93aW5nIFVSTDpcclxuICpcclxuICoge3NjaGVtYX06Ly97aG9zdCB3aXRoIHBvcnR9L3t1cmwgcGF0aCBwcmVmaXh9L2FwaS97cHJvamVjdCBJRH0vbWluaWR1bXA/c2VudHJ5X2tleT17c2VudHJ5IGtleX1cclxuICpcclxuICogVGhlIFwidXJsIHBhdGggcHJlZml4XCIgY29tcG9uZW50IG1heSBiZSByZW1vdmVkIGluIGZ1dHVyZSB2ZXJzaW9ucyBvZiB0aGVcclxuICogU2VudHJ5IFNESy4gVGhpcyB3aWxsIGJlIGEgcHJvYmxlbSBmb3IgU2xhY2ssIHNpbmNlIHdlIHByb3h5IGNyYXNoIGR1bXBzXHJcbiAqIHRocm91Z2ggd2ViYXBwIGFuZCByZXF1aXJlIGEgcGF0aCBwcmVmaXggKHJhdGhlciB0aGFuIHN1YmRvbWFpbikgdG9cclxuICogZGlmZmVyZW50aWF0ZSBjcmFzaCBkdW1wcyBmcm9tIG90aGVyIHdlYmFwcCByb3V0ZXMuIFNlZSB0aGlzIHRocmVhZCBmb3IgbW9yZTpcclxuICogaHR0cHM6Ly9zbGFjay1wZGUuc2xhY2suY29tL2FyY2hpdmVzL0NSS0ZKOEM4TS9wMTYwMDcwOTUzOTAxMjMwMFxyXG4gKlxyXG4gKiBAbGluayBodHRwczovL3NlbnRyeS5pby9zZXR0aW5ncy90aW55c3BlY2svcHJvamVjdHMvc2xhY2stZGVza3RvcC9rZXlzL1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFNFTlRSWV9EU05fVVJMID1cclxuICAnaHR0cHM6Ly9mZDMwZmU0NjlkYmY0YWVjOWRiNDA1NDhlNWFjZjkxZUBzbGFjay5jb20vYXBwcy9zZW50cnlwcm94eS81Mjc3ODg2JztcclxuXHJcbmV4cG9ydCBjb25zdCBTRU5UUllfRFNOX0dPVl9TTEFDS19VUkwgPVxyXG4gICdodHRwczovL2ZkMzBmZTQ2OWRiZjRhZWM5ZGI0MDU0OGU1YWNmOTFlQHNsYWNrLWdvdi5jb20vYXBwcy9zZW50cnlwcm94eS81Mjc3ODg2JztcclxuXHJcbi8qKlxyXG4gKiBUaGVzZSBhcmUgcHJpdmlsZWdlZCBwcm90b2NvbHMgd2UgcmVnaXN0ZXIgdGhhdCBieXBhc3MgQ29udGVudCBTZWN1cml0eVxyXG4gKiBQb2xpY3kgYW5kIGNhbm5vdCB0cmlnZ2VyIG1peGVkIGNvbnRlbnQgd2FybmluZ3MuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUFJJVklMRUdFRF9VUkxfU0NIRU1FUyA9IFsnc2xhY2std2ViYXBwLWRldiddO1xyXG5cclxuLy8gUGF0aHMgdG8gYWRkIHRlYW1zIG9uIFNsYWNrLmNvbVxyXG5leHBvcnQgY29uc3QgRklSU1RfRVhQRVJJRU5DRV9QQVRIID0gJy9zc2IvZmlyc3QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9JTl9QQVRIUyA9IFsnL3NzYi9zaWduaW4nLCAnL3NzYi9zaWduaW5fcmVkaXJlY3QnXTtcclxuXHJcbmV4cG9ydCBjb25zdCBBU1NJR05fREVWX0VOVklST05NRU5UX1JFR0VYID0gL2RldkVudj0oZGV2XFxkKnxzdGFnaW5nfHFhXFxkKikvO1xyXG5cclxuLyoqXHJcbiAqIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGEgcHJvdG9jb2wgbGluayBpbiB0aGUgYXBwLCB3ZSdsbCBzaG93IGEgcGVybWlzc2lvbnNcclxuICogZGlhbG9nIGZvciBhbnkgc2NoZW1lIG5vdCBpbiB0aGlzIGxpc3QuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9BTExPV0VEX1VSTF9TQ0hFTUVTID0gW1xyXG4gICdodHRwOicsXHJcbiAgJ2h0dHBzOicsXHJcbiAgJ21haWx0bzonLFxyXG4gICdza3lwZTonLFxyXG4gICdjaHJvbWUtZGV2dG9vbHM6JyxcclxuICAnZGV2dG9vbHM6JyxcclxuICAnc3BvdGlmeTonLFxyXG4gICdsaXZlOicsXHJcbiAgJ2NhbGx0bzonLFxyXG4gICd0ZWw6JyxcclxuICAnaW06JyxcclxuICAnc2lwOicsXHJcbiAgJ3NpcHM6JyxcclxuICAnc2xhY2s6JyxcclxuXTtcclxuXHJcbmlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnZGFyd2luJykge1xyXG4gIERFRkFVTFRfQUxMT1dFRF9VUkxfU0NIRU1FUy5wdXNoKCd4LWFwcGxlLnN5c3RlbXByZWZlcmVuY2VzOicpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSUdOT1JFX0NPTk5FQ1RJT05fTElNSVRfRE9NQUlOU19ERUZBVUxUID0gW1xyXG4gICdzbGFjay5jb20nLFxyXG4gICdzbGFjay1tc2dzLmNvbScsXHJcbiAgJ3NsYWNrYi5jb20nLFxyXG5dIGFzIGNvbnN0O1xyXG5cclxuZXhwb3J0IGNvbnN0IElHTk9SRV9DT05ORUNUSU9OX0xJTUlUX0RPTUFJTlNfR09WU0xBQ0sgPSBbXHJcbiAgLi4uSUdOT1JFX0NPTk5FQ1RJT05fTElNSVRfRE9NQUlOU19ERUZBVUxULFxyXG4gICdzbGFjay1nb3YuY29tJyxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBJR05PUkVfQ09OTkVDVElPTl9MSU1JVF9ET01BSU5TX0dPVlNMQUNLX0RFViA9IFtcclxuICAuLi5JR05PUkVfQ09OTkVDVElPTl9MSU1JVF9ET01BSU5TX0RFRkFVTFQsXHJcbiAgJ3NsYWNrLWdvdi1kZXYuY29tJyxcclxuXSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBIT1NUTkFNRV9TUEVDSUZJQ19QUk9UT0NPTFMgPSBbJ2Z0cDonLCAnc2Z0cDonLCAnc3NoOicsICdzbWI6J10gYXMgY29uc3Q7XHJcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG4iLCJpbXBvcnQgZnJlZUdsb2JhbCBmcm9tICcuL19mcmVlR2xvYmFsLmpzJztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5leHBvcnQgZGVmYXVsdCByb290O1xuIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG4iLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG9iamVjdFRvU3RyaW5nO1xuIiwiaW1wb3J0IFN5bWJvbCBmcm9tICcuL19TeW1ib2wuanMnO1xuaW1wb3J0IGdldFJhd1RhZyBmcm9tICcuL19nZXRSYXdUYWcuanMnO1xuaW1wb3J0IG9iamVjdFRvU3RyaW5nIGZyb20gJy4vX29iamVjdFRvU3RyaW5nLmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRUYWc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3Q7XG4iLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0LmpzJztcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNGdW5jdGlvbjtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5leHBvcnQgZGVmYXVsdCBjb3JlSnNEYXRhO1xuIiwiaW1wb3J0IGNvcmVKc0RhdGEgZnJvbSAnLi9fY29yZUpzRGF0YS5qcyc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzTWFza2VkO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b1NvdXJjZTtcbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbi5qcyc7XG5pbXBvcnQgaXNNYXNrZWQgZnJvbSAnLi9faXNNYXNrZWQuanMnO1xuaW1wb3J0IGlzT2JqZWN0IGZyb20gJy4vaXNPYmplY3QuanMnO1xuaW1wb3J0IHRvU291cmNlIGZyb20gJy4vX3RvU291cmNlLmpzJztcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUlzTmF0aXZlO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFZhbHVlO1xuIiwiaW1wb3J0IGJhc2VJc05hdGl2ZSBmcm9tICcuL19iYXNlSXNOYXRpdmUuanMnO1xuaW1wb3J0IGdldFZhbHVlIGZyb20gJy4vX2dldFZhbHVlLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0TmF0aXZlO1xuIiwiaW1wb3J0IGdldE5hdGl2ZSBmcm9tICcuL19nZXROYXRpdmUuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5leHBvcnQgZGVmYXVsdCBuYXRpdmVDcmVhdGU7XG4iLCJpbXBvcnQgbmF0aXZlQ3JlYXRlIGZyb20gJy4vX25hdGl2ZUNyZWF0ZS5qcyc7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBoYXNoRGVsZXRlO1xuIiwiaW1wb3J0IG5hdGl2ZUNyZWF0ZSBmcm9tICcuL19uYXRpdmVDcmVhdGUuanMnO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhc2hHZXQ7XG4iLCJpbXBvcnQgbmF0aXZlQ3JlYXRlIGZyb20gJy4vX25hdGl2ZUNyZWF0ZS5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFzaEhhcztcbiIsImltcG9ydCBuYXRpdmVDcmVhdGUgZnJvbSAnLi9fbmF0aXZlQ3JlYXRlLmpzJztcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhc2hTZXQ7XG4iLCJpbXBvcnQgaGFzaENsZWFyIGZyb20gJy4vX2hhc2hDbGVhci5qcyc7XG5pbXBvcnQgaGFzaERlbGV0ZSBmcm9tICcuL19oYXNoRGVsZXRlLmpzJztcbmltcG9ydCBoYXNoR2V0IGZyb20gJy4vX2hhc2hHZXQuanMnO1xuaW1wb3J0IGhhc2hIYXMgZnJvbSAnLi9faGFzaEhhcy5qcyc7XG5pbXBvcnQgaGFzaFNldCBmcm9tICcuL19oYXNoU2V0LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbmV4cG9ydCBkZWZhdWx0IEhhc2g7XG4iLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxpc3RDYWNoZUNsZWFyO1xuIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVxO1xuIiwiaW1wb3J0IGVxIGZyb20gJy4vZXEuanMnO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3NvY0luZGV4T2Y7XG4iLCJpbXBvcnQgYXNzb2NJbmRleE9mIGZyb20gJy4vX2Fzc29jSW5kZXhPZi5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENhY2hlRGVsZXRlO1xuIiwiaW1wb3J0IGFzc29jSW5kZXhPZiBmcm9tICcuL19hc3NvY0luZGV4T2YuanMnO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0Q2FjaGVHZXQ7XG4iLCJpbXBvcnQgYXNzb2NJbmRleE9mIGZyb20gJy4vX2Fzc29jSW5kZXhPZi5qcyc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsaXN0Q2FjaGVIYXM7XG4iLCJpbXBvcnQgYXNzb2NJbmRleE9mIGZyb20gJy4vX2Fzc29jSW5kZXhPZi5qcyc7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgbGlzdENhY2hlU2V0O1xuIiwiaW1wb3J0IGxpc3RDYWNoZUNsZWFyIGZyb20gJy4vX2xpc3RDYWNoZUNsZWFyLmpzJztcbmltcG9ydCBsaXN0Q2FjaGVEZWxldGUgZnJvbSAnLi9fbGlzdENhY2hlRGVsZXRlLmpzJztcbmltcG9ydCBsaXN0Q2FjaGVHZXQgZnJvbSAnLi9fbGlzdENhY2hlR2V0LmpzJztcbmltcG9ydCBsaXN0Q2FjaGVIYXMgZnJvbSAnLi9fbGlzdENhY2hlSGFzLmpzJztcbmltcG9ydCBsaXN0Q2FjaGVTZXQgZnJvbSAnLi9fbGlzdENhY2hlU2V0LmpzJztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0Q2FjaGU7XG4iLCJpbXBvcnQgZ2V0TmF0aXZlIGZyb20gJy4vX2dldE5hdGl2ZS5qcyc7XG5pbXBvcnQgcm9vdCBmcm9tICcuL19yb290LmpzJztcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcDtcbiIsImltcG9ydCBIYXNoIGZyb20gJy4vX0hhc2guanMnO1xuaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL19MaXN0Q2FjaGUuanMnO1xuaW1wb3J0IE1hcCBmcm9tICcuL19NYXAuanMnO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlQ2xlYXI7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzS2V5YWJsZTtcbiIsImltcG9ydCBpc0tleWFibGUgZnJvbSAnLi9faXNLZXlhYmxlLmpzJztcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRNYXBEYXRhO1xuIiwiaW1wb3J0IGdldE1hcERhdGEgZnJvbSAnLi9fZ2V0TWFwRGF0YS5qcyc7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYXBDYWNoZURlbGV0ZTtcbiIsImltcG9ydCBnZXRNYXBEYXRhIGZyb20gJy4vX2dldE1hcERhdGEuanMnO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlR2V0O1xuIiwiaW1wb3J0IGdldE1hcERhdGEgZnJvbSAnLi9fZ2V0TWFwRGF0YS5qcyc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1hcENhY2hlSGFzO1xuIiwiaW1wb3J0IGdldE1hcERhdGEgZnJvbSAnLi9fZ2V0TWFwRGF0YS5qcyc7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFwQ2FjaGVTZXQ7XG4iLCJpbXBvcnQgbWFwQ2FjaGVDbGVhciBmcm9tICcuL19tYXBDYWNoZUNsZWFyLmpzJztcbmltcG9ydCBtYXBDYWNoZURlbGV0ZSBmcm9tICcuL19tYXBDYWNoZURlbGV0ZS5qcyc7XG5pbXBvcnQgbWFwQ2FjaGVHZXQgZnJvbSAnLi9fbWFwQ2FjaGVHZXQuanMnO1xuaW1wb3J0IG1hcENhY2hlSGFzIGZyb20gJy4vX21hcENhY2hlSGFzLmpzJztcbmltcG9ydCBtYXBDYWNoZVNldCBmcm9tICcuL19tYXBDYWNoZVNldC5qcyc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5leHBvcnQgZGVmYXVsdCBNYXBDYWNoZTtcbiIsImltcG9ydCBNYXBDYWNoZSBmcm9tICcuL19NYXBDYWNoZS5qcyc7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5leHBvcnQgZGVmYXVsdCBpc0FycmF5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcbiIsImltcG9ydCBiYXNlR2V0VGFnIGZyb20gJy4vX2Jhc2VHZXRUYWcuanMnO1xuaW1wb3J0IGlzQXJyYXkgZnJvbSAnLi9pc0FycmF5LmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTdHJpbmdgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzdHJpbmcsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N0cmluZygnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N0cmluZygxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHxcbiAgICAoIWlzQXJyYXkodmFsdWUpICYmIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3RyaW5nVGFnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaXNTdHJpbmc7XG4iLCIvKipcclxuICogTGlzdCBvZiBtb2RlcyB0aGF0IGRldGVybWluZSB3aGF0IGZlYXR1cmVzIHRoZSBjbGllbnQgY2FuIHN1cHBvcnQuXHJcbiAqXHJcbiAqIFVubGlrZSBzZXNzaW9uIG1vZGUsIHdlIHdpbGwgbm90IGFibGUgdG8gY2hhbmdlIHRoaXMgc3RhdGUgd2l0aG91dCByZXN0YXJ0aW5nIHRoZSBhcHAuXHJcbiAqL1xyXG5lbnVtIENsaWVudEVudmlyb25tZW50IHtcclxuICBOT1JNQUwgPSAxMDAwLFxyXG4gIFJFU1RSSUNURUQgPSAxMDAxLFxyXG59XHJcblxyXG5leHBvcnQgeyBDbGllbnRFbnZpcm9ubWVudCB9O1xyXG4iLCJpbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAZGVza3RvcC9sb2dnZXInO1xyXG5pbXBvcnQgeyBpc1N0cmluZywgbWVtb2l6ZSB9IGZyb20gJ2xvZGFzaC1lcyc7XHJcblxyXG5pbXBvcnQgeyBDbGllbnRFbnZpcm9ubWVudCB9IGZyb20gJy4uL2NvbnN0YW50cy9jbGllbnQtZmVhdHVyZS1tb2RlJztcclxuaW1wb3J0IHsgREVGQVVMVF9MT0NBTEUsIExvY2FsZVR5cGUgfSBmcm9tICcuLi9jb25zdGFudHMvbG9jYWxlLXR5cGUnO1xyXG5pbXBvcnQgeyBSRURBQ1RFRF9TVFJJTkcgfSBmcm9tICcuLi9jb25zdGFudHMvbG9nZ2luZyc7XHJcbmltcG9ydCB7IFJlbGVhc2VDaGFubmVsIH0gZnJvbSAnLi4vY29uc3RhbnRzL3JlbGVhc2UtY2hhbm5lbHMnO1xyXG5pbXBvcnQge1xyXG4gIERvbWFpblJlZmVyZW5jZSxcclxuICBTTEFDS19DT01NRVJDSUFMX0RPV05MT0FEX0RPTUFJTlMsXHJcbiAgU0xBQ0tfQ09NTUVSSUNBTF9ET01BSU5TLFxyXG4gIFNMQUNLX0dPVl9ET01BSU5TLFxyXG4gIFNMQUNLX0dPVl9ET1dOTE9BRF9ET01BSU5TLFxyXG4gIFNMQUNLX1VSTF9DT01NRVJJQ0FMX0JMT0NLRURfRE9NQUlOUyxcclxuICBTTEFDS19VUkxfR09WX0JMT0NLRURfRE9NQUlOUyxcclxufSBmcm9tICcuLi9jb25zdGFudHMvdXJsJztcclxuaW1wb3J0IHsgRW52aXJvbm1lbnRTdGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvcmVkdXgvZW52aXJvbm1lbnQtc3RhdGUnO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3Jvb3Qtc3RhdGUnO1xyXG5pbXBvcnQgeyBnZXRTZWxlY3RlZFdvcmtzcGFjZSB9IGZyb20gJy4uL3JlZHV4L3NlbGVjdG9ycy93b3Jrc3BhY2VzLXNlbGVjdG9ycyc7XHJcbmltcG9ydCB7IGZpbmRNYXAgfSBmcm9tICcuLi91dGlscy9maW5kLW1hcCc7XHJcbmltcG9ydCB7IHJlcGxhY2VTbWFydFF1b3RlcyB9IGZyb20gJy4uL3V0aWxzL3JlcGxhY2Utc21hcnQtcXVvdGVzJztcclxuaW1wb3J0IHsgc2VhcmNoUGFyYW1zRW50cmllcyB9IGZyb20gJy4vc2VhcmNoLXBhcmFtcy1lbnRyaWVzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGVlcExpbmtRdWVyeUFyZ3Mge1xyXG4gIGNoYW5uZWxJZDogc3RyaW5nO1xyXG4gIHRlYW1JZDogc3RyaW5nO1xyXG4gIG1lc3NhZ2VUczogc3RyaW5nO1xyXG4gIHRocmVhZFRzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIEFwcEFjdGlvbiB7XHJcbiAgUVVJVF9BUFAgPSAnUVVJVF9BUFAnLFxyXG4gIFJFU0VUX1dJTkRPVyA9ICdSRVNFVF9XSU5ET1cnLFxyXG4gIFJFVkVBTF9MT0dTID0gJ1JFVkVBTF9MT0dTJyxcclxufVxyXG5cclxudHlwZSBVcmxPcHRpb25zID0gUGljazxFbnZpcm9ubWVudFN0YXRlLCAnY2xpZW50RW52aXJvbm1lbnQnIHwgJ2RldkVudic+O1xyXG5cclxuY29uc3QgcGxhdGZvcm1VcmxTbHVnTWFwID0ge1xyXG4gIGRhcndpbjogJ21hYycsXHJcbiAgbGludXg6ICdsaW51eCcsXHJcbiAgd2luMzI6ICd3aW5kb3dzJyxcclxufSBhcyBjb25zdDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCYXNlRG9tYWluOiAob3B0aW9uczoge1xyXG4gIGNsaWVudEVudmlyb25tZW50OiBDbGllbnRFbnZpcm9ubWVudDtcclxuICBkZXZFbnY/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbn0pID0+IHN0cmluZyA9IG1lbW9pemUoXHJcbiAgKG9wdGlvbnM6IHsgY2xpZW50RW52aXJvbm1lbnQ6IENsaWVudEVudmlyb25tZW50OyBkZXZFbnY/OiBzdHJpbmcgfCB1bmRlZmluZWQgfSkgPT4ge1xyXG4gICAgY29uc3QgeyBjbGllbnRFbnZpcm9ubWVudCB9ID0gb3B0aW9ucztcclxuICAgIGNvbnN0IGRldkVudiA9IG9wdGlvbnMuZGV2RW52ID8gdmFsaWRhdGVEZXZFbnZpcm9ubWVudChvcHRpb25zLmRldkVudikgOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgc3dpdGNoIChjbGllbnRFbnZpcm9ubWVudCkge1xyXG4gICAgICBjYXNlIENsaWVudEVudmlyb25tZW50Lk5PUk1BTDpcclxuICAgICAgICByZXR1cm4gYCR7ZGV2RW52ID8gYCR7ZGV2RW52fS5gIDogJyd9c2xhY2suY29tYDtcclxuICAgICAgY2FzZSBDbGllbnRFbnZpcm9ubWVudC5SRVNUUklDVEVEOlxyXG4gICAgICAgIGlmIChkZXZFbnYpIHtcclxuICAgICAgICAgIC8vIE9ubHkgbnVtYmVyZWQgZGV2IGluc3RhbmNlcyBoYXZlIHRoZSBkZXZYIHByZWZpeC5cclxuICAgICAgICAgIHJldHVybiBgJHtkZXZFbnYgIT09ICdkZXYnID8gYCR7ZGV2RW52fS5gIDogJyd9c2xhY2stZ292LWRldi5jb21gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJ3NsYWNrLWdvdi5jb20nO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBtb2RlIHNwZWNpZmllZCcpO1xyXG4gIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCYXNlVXJsOiAob3B0aW9uczoge1xyXG4gIGNsaWVudEVudmlyb25tZW50OiBDbGllbnRFbnZpcm9ubWVudDtcclxuICB3b3Jrc3BhY2U/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgZGV2RW52Pzogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG59KSA9PiBzdHJpbmcgPSBtZW1vaXplKFxyXG4gIChvcHRpb25zOiB7XHJcbiAgICBjbGllbnRFbnZpcm9ubWVudDogQ2xpZW50RW52aXJvbm1lbnQ7XHJcbiAgICB3b3Jrc3BhY2U/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgICBkZXZFbnY/OiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcbiAgfSkgPT4ge1xyXG4gICAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IG9wdGlvbnM7XHJcbiAgICBjb25zdCBzdWIgPSB3b3Jrc3BhY2UgPyBgJHt3b3Jrc3BhY2V9LmAgOiAnJztcclxuICAgIHJldHVybiBgaHR0cHM6Ly8ke3N1Yn0ke2dldEJhc2VEb21haW4ob3B0aW9ucyl9YDtcclxuICB9XHJcbik7XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgcmVsZWFzZSBub3RlcyBVUkwgZm9yIHRoZSBjdXJyZW50IHBsYXRmb3JtIGFuZFxyXG4gKiByZWxlYXNlIGNoYW5uZWwuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVsZWFzZU5vdGVzVXJsKHtcclxuICByZWxlYXNlQ2hhbm5lbCxcclxuICBjbGllbnRFbnZpcm9ubWVudCxcclxuICBsb2NhbGUsXHJcbn06IHtcclxuICByZWxlYXNlQ2hhbm5lbDogUmVsZWFzZUNoYW5uZWw7XHJcbiAgbG9jYWxlOiBMb2NhbGVUeXBlO1xyXG4gIGNsaWVudEVudmlyb25tZW50OiBDbGllbnRFbnZpcm9ubWVudDtcclxufSk6IHN0cmluZyB7XHJcbiAgbGV0IHJlbGVhc2VOb3Rlc1VybCA9IGBodHRwczovL3d3dy4ke2dldEJhc2VEb21haW4oeyBjbGllbnRFbnZpcm9ubWVudCB9KX1gO1xyXG5cclxuICBpZiAobG9jYWxlICE9PSBERUZBVUxUX0xPQ0FMRSkge1xyXG4gICAgcmVsZWFzZU5vdGVzVXJsICs9IGAvaW50bC8ke2xvY2FsZS50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgfVxyXG5cclxuICByZWxlYXNlTm90ZXNVcmwgKz0gJy9yZWxlYXNlLW5vdGVzJztcclxuXHJcbiAgY29uc3QgcGxhdGZvcm1VcmxTbHVnID0gcGxhdGZvcm1VcmxTbHVnTWFwW3Byb2Nlc3MucGxhdGZvcm1dIHx8ICd3aW5kb3dzJztcclxuXHJcbiAgcmVsZWFzZU5vdGVzVXJsICs9IGAvJHtwbGF0Zm9ybVVybFNsdWd9YDtcclxuXHJcbiAgLy8gTm9uZSBvZiB0aGUgb3RoZXIgcHJlcmVsZWFzZSBjaGFubmVscyBoYXZlIHJlbGVhc2Ugbm90ZXNcclxuICByZWxlYXNlTm90ZXNVcmwgKz0gcmVsZWFzZUNoYW5uZWwgPT09IFJlbGVhc2VDaGFubmVsLkJFVEEgPyByZWxlYXNlQ2hhbm5lbCA6ICcnO1xyXG5cclxuICByZXR1cm4gcmVsZWFzZU5vdGVzVXJsO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgSGVscCBDZW50ZXIgVVJMIGZvciB0aGUgdXNlcidzIGN1cnJlbnQgbG9jYWxlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhlbHBDZW50ZXJVUkwoY2xpZW50RW52aXJvbm1lbnQ6IENsaWVudEVudmlyb25tZW50LCBsb2NhbGU6IExvY2FsZVR5cGUpOiBzdHJpbmcge1xyXG4gIGxldCBoZWxwQ2VudGVyVXJsID0gZ2V0QmFzZVVybCh7IGNsaWVudEVudmlyb25tZW50IH0pO1xyXG5cclxuICBpZiAobG9jYWxlICE9PSBERUZBVUxUX0xPQ0FMRSkge1xyXG4gICAgaGVscENlbnRlclVybCArPSBgL2ludGwvJHtsb2NhbGUudG9Mb3dlckNhc2UoKX1gO1xyXG4gIH1cclxuXHJcbiAgaGVscENlbnRlclVybCArPSAnL2hlbHAnO1xyXG5cclxuICByZXR1cm4gaGVscENlbnRlclVybDtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnN0cnVjdHMgYSBVUkwgdG8gaGVscC9yZXF1ZXN0cy9uZXcgYmFzZWQgb24gdGhlIHNlbGVjdGVkIHdvcmtzcGFjZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXBvcnRJc3N1ZVVSTChcclxuICBzdGF0ZTogUGljazxSb290U3RhdGUsICdlbnZpcm9ubWVudCcgfCAnd29ya3NwYWNlcycgfCAnd29ya3NwYWNlc01ldGEnPixcclxuICByZXBvcnRDcmFzaDogYm9vbGVhblxyXG4pIHtcclxuICBjb25zdCBzZWxlY3RlZFdvcmtzcGFjZSA9IGdldFNlbGVjdGVkV29ya3NwYWNlKHN0YXRlKTtcclxuICBjb25zdCBiYXNlVVJMID0gZ2V0QmFzZVVybCh7XHJcbiAgICAuLi5zdGF0ZS5lbnZpcm9ubWVudCxcclxuICAgIHdvcmtzcGFjZTogc2VsZWN0ZWRXb3Jrc3BhY2U/LmRvbWFpbixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGVscFJlcXVlc3RVUkwgPSBuZXcgVVJMKGAke2Jhc2VVUkx9L2hlbHAvcmVxdWVzdHMvbmV3YCk7XHJcbiAgcmV0dXJuIGAke2hlbHBSZXF1ZXN0VVJMfSR7cmVwb3J0Q3Jhc2ggPyBgP2NyYXNoX3JlcG9ydD0xYCA6ICcnfWA7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBhcHByb3ByaWF0ZSBob3N0IFVSTCBmb3IgQVBJIHJlcXVlc3RzIGFjY29yZGluZyB0byB0aGUgcHJvdmlkZWRcclxuICogYmFzZSBkb21haW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBpQmFzZVVSTEZvckJhc2VEb21haW4oYmFzZURvbWFpbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gYCR7YmFzZVNsYWNrVVJMRm9yQmFzZURvbWFpbihiYXNlRG9tYWluKX0vYXBpL2A7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZXRzIHRoZSBhcHByb3ByaWF0ZSBob3N0IFVSTCBmb3IgQVBJIHJlcXVlc3RzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFwaUJhc2VVUkwob3B0aW9uczogVXJsT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGAke2Jhc2VTbGFja1VSTChvcHRpb25zKX0vYXBpL2A7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBTbGFjayBVUkwgcHJlZml4LCB3aXRoIG9wdGlvbmFsIGRldiBlbnZpcm9ubWVudC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBiYXNlU2xhY2tVUkwob3B0aW9uczogVXJsT3B0aW9ucykge1xyXG4gIHJldHVybiBiYXNlU2xhY2tVUkxGb3JCYXNlRG9tYWluKGdldEJhc2VEb21haW4ob3B0aW9ucykpO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgU2xhY2sgVVJMIHByZWZpeCBhY2NvcmRpbmcgdG8gdGhlIHByb3ZpZGVkIGJhc2UgZG9tYWluLlxyXG4gKi9cclxuZnVuY3Rpb24gYmFzZVNsYWNrVVJMRm9yQmFzZURvbWFpbihiYXNlRG9tYWluOiBzdHJpbmcpIHtcclxuICByZXR1cm4gYGh0dHBzOi8vYXBwLiR7YmFzZURvbWFpbn1gO1xyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gVVJMIGJlbG9uZ3MgdG8gYSBHYW50cnkgd2luZG93LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzR2FudHJ5V2luZG93VVJMKHVybDogVVJMLCBtb2RlOiBDbGllbnRFbnZpcm9ubWVudCkge1xyXG4gIC8vIFRPRE86IENoZWNrIGlmIHRoaXMgaXMgYSBnYW50cnkgaG9zdG5hbWUgYmV0dGVyLCBlbnN1cmUgdGhlIHN1YmRvbWFpbiBpcyBhcHAuIG9yIGFwcC5kZXZYWFggZXhhY3RseVxyXG4gIC8vIHRoaXMgY3VycmVudGx5IG1hdGNoZXMgYXBwLmZvby5ibGFoLnNsYWNrLmNvbSB3aGljaCBpc24ndCBiYWQgaW4gaXQgb2YgaXRzZWxmIGJ1dCBpc24ndCBpZGVhbFxyXG4gIHJldHVybiBpc1NsYWNrVVJMKHVybCwgbW9kZSkgJiYgdXJsLmhvc3RuYW1lLnN0YXJ0c1dpdGgoJ2FwcC4nKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2xhY2tHb3ZVUkwodXJsOiBVUkwpIHtcclxuICByZXR1cm4gKFxyXG4gICAgZG9lc1VybE1hdGNoRG9tYWluU2V0cyh1cmwsIFNMQUNLX0dPVl9ET01BSU5TKSAmJlxyXG4gICAgIWRvZXNVcmxNYXRjaERvbWFpblNldHModXJsLCBTTEFDS19VUkxfR09WX0JMT0NLRURfRE9NQUlOUylcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTbGFja0NvbW1lcmNpYWxVUkwodXJsOiBVUkwpIHtcclxuICByZXR1cm4gKFxyXG4gICAgZG9lc1VybE1hdGNoRG9tYWluU2V0cyh1cmwsIFNMQUNLX0NPTU1FUklDQUxfRE9NQUlOUykgJiZcclxuICAgICFkb2VzVXJsTWF0Y2hEb21haW5TZXRzKHVybCwgU0xBQ0tfVVJMX0NPTU1FUklDQUxfQkxPQ0tFRF9ET01BSU5TKVxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBnaXZlbiB1cmwgbGl2ZXMgb24gc2xhY2sqLmNvbS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NsYWNrVVJMKHVybDogVVJMIHwgbnVsbCwgbW9kZTogQ2xpZW50RW52aXJvbm1lbnQpIHtcclxuICBpZiAoIXVybCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICBzd2l0Y2ggKG1vZGUpIHtcclxuICAgIGNhc2UgQ2xpZW50RW52aXJvbm1lbnQuTk9STUFMOlxyXG4gICAgICByZXR1cm4gaXNTbGFja0NvbW1lcmNpYWxVUkwodXJsKTtcclxuICAgIGNhc2UgQ2xpZW50RW52aXJvbm1lbnQuUkVTVFJJQ1RFRDpcclxuICAgICAgcmV0dXJuIGlzU2xhY2tDb21tZXJjaWFsVVJMKHVybCkgfHwgaXNTbGFja0dvdlVSTCh1cmwpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEV4dHJhY3RzIHRoZSBzdWJkb21haW4gZnJvbSBhIFNsYWNrIFVSTFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlYW1TdWJkb21haW4odXJsOiBVUkwsIG1vZGU6IENsaWVudEVudmlyb25tZW50KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICBpZiAoIWlzU2xhY2tVUkwodXJsLCBtb2RlKSkgcmV0dXJuIHVuZGVmaW5lZDtcclxuXHJcbiAgZm9yIChjb25zdCBkb21haW5SZWYgb2YgWy4uLlNMQUNLX0NPTU1FUklDQUxfRE9NQUlOUywgLi4uU0xBQ0tfR09WX0RPTUFJTlNdKSB7XHJcbiAgICBpZiAoZG9tYWluUmVmLm1hdGNoU3ViRG9tYWlucyAmJiB1cmwuaG9zdC5lbmRzV2l0aChgLiR7ZG9tYWluUmVmLmRvbWFpbn1gKSkge1xyXG4gICAgICByZXR1cm4gdXJsLmhvc3Quc3BsaXQoYC4ke2RvbWFpblJlZi5kb21haW59YCkuc2hpZnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaWtlIGBnZXRUZWFtU3ViZG9tYWluYCBidXQgcmV0dXJucyB0aGUgZmlyc3QgbWF0Y2hpbmcgZm9yIGFueSBlbnZpcm9ubWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlYW1TdWJkb21haW5Gb3JBbnlFbnZpcm9ubWVudCh1cmw6IFVSTCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgcmV0dXJuIGZpbmRNYXAoT2JqZWN0LnZhbHVlcyhDbGllbnRFbnZpcm9ubWVudCkuZmlsdGVyKGlzTm90U3RyaW5nKSwgKGVudikgPT5cclxuICAgIGdldFRlYW1TdWJkb21haW4odXJsLCBlbnYpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRvZXNVcmxNYXRjaERvbWFpblNldHModXJsOiBVUkwsIC4uLmRvbWFpblNldHM6IEFycmF5PEFycmF5PERvbWFpblJlZmVyZW5jZT4+KSB7XHJcbiAgZm9yIChjb25zdCBkb21haW5TZXQgb2YgZG9tYWluU2V0cykge1xyXG4gICAgZm9yIChjb25zdCBkb21haW5SZWYgb2YgZG9tYWluU2V0KSB7XHJcbiAgICAgIGlmICh1cmwuaG9zdCA9PT0gZG9tYWluUmVmLmRvbWFpbikgcmV0dXJuIHRydWU7XHJcbiAgICAgIGlmIChkb21haW5SZWYubWF0Y2hTdWJEb21haW5zICYmIHVybC5ob3N0LmVuZHNXaXRoKGAuJHtkb21haW5SZWYuZG9tYWlufWApKSByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG51bGxpc2hVcmwoaHJlZjogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBuZXcgVVJMKGhyZWYpO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgLy8gV2UgY2FuJ3QgbG9nIHRoZSBlcnJvciBoZXJlIGFzIGl0IG1heSBjb250YWluIGEgc2Vuc2l0aXZlIFVSTFxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgZ2l2ZW4gVVJMIGlzIHZhbGlkIGZvciBkb3dubG9hZGluZyBmcm9tLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2xhY2tEb3dubG9hZFVSTCh1cmw6IFVSTCB8IG51bGwsIG1vZGU6IENsaWVudEVudmlyb25tZW50KSB7XHJcbiAgaWYgKCF1cmwpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICBjYXNlIENsaWVudEVudmlyb25tZW50Lk5PUk1BTDpcclxuICAgICAgcmV0dXJuIGRvZXNVcmxNYXRjaERvbWFpblNldHModXJsLCBTTEFDS19DT01NRVJDSUFMX0RPV05MT0FEX0RPTUFJTlMpO1xyXG4gICAgY2FzZSBDbGllbnRFbnZpcm9ubWVudC5SRVNUUklDVEVEOlxyXG4gICAgICByZXR1cm4gZG9lc1VybE1hdGNoRG9tYWluU2V0cyhcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgU0xBQ0tfQ09NTUVSQ0lBTF9ET1dOTE9BRF9ET01BSU5TLFxyXG4gICAgICAgIFNMQUNLX0dPVl9ET1dOTE9BRF9ET01BSU5TXHJcbiAgICAgICk7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0aHJvdyBuZXcgRXJyb3IoYG5vdCBhIHZhbGlkIG1vZGU6ICR7bW9kZX1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOb3RTdHJpbmc8VD4odmFsdWU6IFQgfCBzdHJpbmcpOiB2YWx1ZSBpcyBUIHtcclxuICByZXR1cm4gIWlzU3RyaW5nKHZhbHVlKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGdpdmVuIGhvc3RuYW1lIGxpdmVzIG9uIHNsYWNrKi5jb20uIE9ubHkgdXNlIHRoaXNcclxuICogaWYgeW91IGRvbid0IHlldCBoYXZlIGFjY2VzcyB0byB0aGUgYGVudmlyb25tZW50YCBzdGF0ZSB0byBwZXJmb3JtIGZ1bGxcclxuICogdmVyaWZpY2F0aW9uIHZpYSBgaXNTbGFja1VSTGAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNTbGFja1VSTEZvckFueUVudmlyb25tZW50KHVybDogVVJMKSB7XHJcbiAgLy8gSXRlcmF0aW5nIG92ZXIgYW4gZW51bSBnaXZlcyB5b3UgdGhlIG5hbWUgc3RyaW5ncyBhcyB3ZWxsOyBmaWx0ZXIgdGhlbSBvdXQuXHJcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoQ2xpZW50RW52aXJvbm1lbnQpXHJcbiAgICAuZmlsdGVyKGlzTm90U3RyaW5nKVxyXG4gICAgLnNvbWUoKG1vZGUpID0+IGlzU2xhY2tVUkwodXJsLCBtb2RlKSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgYSBzZXR0aW5ncyBsaW5rIFVSTCBhbmQgcmV0dXJucyB0aGUgSlNPTiBibG9iIHRoYXQgY2FuIGJlIHVzZWQgYXMgYVxyXG4gKiBzZXR0aW5ncyBwYXlsb2FkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGlua1VSTCAgVGhlIFVSTFxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSAgICAgICAgQSBzdHJpbmcgb2YgSlNPTiBleHRyYWN0ZWQgZnJvbSB0aGUgVVJMXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VTZXR0aW5nc0xpbmtVUkwobGlua1VSTDogc3RyaW5nKSB7XHJcbiAgY29uc3QgcGFyc2VkVXJsID0gdHlwZW9mIGxpbmtVUkwgPT09ICdzdHJpbmcnID8gbmV3IFVSTChsaW5rVVJMKSA6IG51bGw7XHJcbiAgY29uc3QgcGFyYW1zID0gcGFyc2VkVXJsID8gc2VhcmNoUGFyYW1zRW50cmllcyhwYXJzZWRVcmwuc2VhcmNoUGFyYW1zKSA6IG51bGw7XHJcbiAgbGV0IHF1ZXJ5OiBzdHJpbmcgPSBwYXJhbXM/LnVwZGF0ZSA/PyAne30nO1xyXG5cclxuICAvLyBVUkwgZW5jb2RpbmcgY2FuIG1lc3Mgd2l0aCBjaGFyYWN0ZXJzIGxpa2Uge30sIHdlJ3JlIG1vcmUgZm9yZ2l2aW5nXHJcbiAgaWYgKHF1ZXJ5ICYmICEocXVlcnkuc3RhcnRzV2l0aCgneycpICYmIHF1ZXJ5LmVuZHNXaXRoKCd9JykpKSB7XHJcbiAgICBxdWVyeSA9IGB7JHtxdWVyeX19YDtcclxuICB9XHJcblxyXG4gIC8vIFJlcGxhY2Ugc21hcnQgcXVvdGVzIGluIGNhc2UgVVJMIHdhcyBtYW51YWxseSB0eXBlZCBvbiBhIE1hY1xyXG4gIHF1ZXJ5ID0gcmVwbGFjZVNtYXJ0UXVvdGVzKHF1ZXJ5KTtcclxuXHJcbiAgcXVlcnkgPSBxdWVyeS5yZXBsYWNlKC8oWydcIl0pPyhbYS16QS1aMC05Xy1dKykoWydcIl0pPzovZywgJ1wiJDJcIjogJyk7XHJcbiAgY29uc3QgcW0gPSBxdWVyeS5tYXRjaCgvLio6IChbJ1wiXSk/KFthLXpBLVpfLV0qKShbJ1wiXSk/Lyk7XHJcbiAgY29uc3QgaXNCb29sID0gcW0gJiYgcW1bMl0gJiYgKHFtWzJdID09PSAndHJ1ZScgfHwgcW1bMl0gPT09ICdmYWxzZScpO1xyXG4gIGNvbnN0IGlzU3RyaW5nID0gcW0gJiYgcW1bMl0gJiYgL1tcXHddfFtcXHctXSovLnRlc3QocW1bMl0pICYmICFpc0Jvb2w7XHJcbiAgY29uc3QgaXNRdW90ZWQgPSBxbSAmJiBxbVsxXSA9PT0gJ1wiJyAmJiBxbVszXSA9PT0gJ1wiJztcclxuXHJcbiAgaWYgKGlzU3RyaW5nICYmICFpc1F1b3RlZCkge1xyXG4gICAgcXVlcnkgPSAocXVlcnkgfHwgJ3t9JykucmVwbGFjZSgvKC4qKTogKFsnXCJdKT8oW2EtekEtWjAtOV8tXSspKFsnXCJdKT8vZywgJyQxOiBcIiQzXCInKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBxdWVyeTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyBhbiBhcHAgYWN0aW9uIGxpbmsgVVJMIGFuZCByZXR1cm5zIHRoZSBhY3Rpb25cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmtVUkwgIFRoZSBVUkxcclxuICogQHJldHVybnMge0FwcEFjdGlvbn0gQW4gYWN0aW9uIG9yIHVuZGVmaW5lZCBpZiBhY3Rpb24gaXMgdW5rbm93blxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQWN0aW9uTGlua1VSTChsaW5rVVJMOiBzdHJpbmcpIHtcclxuICBjb25zdCBwYXJzZWRVcmwgPSB0eXBlb2YgbGlua1VSTCA9PT0gJ3N0cmluZycgPyBuZXcgVVJMKGxpbmtVUkwpIDogbnVsbDtcclxuICBjb25zdCBwYXJhbXMgPSBwYXJzZWRVcmwgPyBzZWFyY2hQYXJhbXNFbnRyaWVzKHBhcnNlZFVybC5zZWFyY2hQYXJhbXMpIDogbnVsbDtcclxuXHJcbiAgaWYgKHBhcnNlZFVybD8uaG9zdCA9PT0gJ2FwcCcgJiYgcGFyYW1zPy5hY3Rpb24pIHtcclxuICAgIHN3aXRjaCAocGFyYW1zLmFjdGlvbi50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgIGNhc2UgJ3F1aXQnOlxyXG4gICAgICAgIHJldHVybiBBcHBBY3Rpb24uUVVJVF9BUFA7XHJcbiAgICAgIGNhc2UgJ3Jlc2V0LXdpbmRvdyc6XHJcbiAgICAgICAgcmV0dXJuIEFwcEFjdGlvbi5SRVNFVF9XSU5ET1c7XHJcbiAgICAgIGNhc2UgJ3JldmVhbC1sb2dzJzpcclxuICAgICAgICByZXR1cm4gQXBwQWN0aW9uLlJFVkVBTF9MT0dTO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXZSd2ZSBzZWVuIGNsZXZlciB0ZXN0ZXJzIHJlcGxhY2UgZGV2RW52IHdpdGggc3RyaW5nIHRlcm1pbmF0aW5nIHNlcXVlbmNlc1xyXG4gKiBhbmQgc3VwcGx5IHRoZWlyIG93biBVUkwuIENvbWJhdCB0aGlzIGJ5IG9ubHkgYWNjZXB0aW5nIGFscGhhbnVtZXJpYyB2YWx1ZXMuXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZURldkVudmlyb25tZW50KGRldkVudjogc3RyaW5nKSB7XHJcbiAgY29uc3QgYWxwaGFOdW1lcmljTWF0Y2ggPSBkZXZFbnYubWF0Y2goLyhbQS1aYS16MC05XSkqL2kpO1xyXG4gIGNvbnN0IGlzVmFsaWQgPSBhbHBoYU51bWVyaWNNYXRjaCAmJiBkZXZFbnYgPT09IGFscGhhTnVtZXJpY01hdGNoWzBdO1xyXG4gIGlmIChpc1ZhbGlkKSByZXR1cm4gZGV2RW52O1xyXG5cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG4vKipcclxuICogVmFsaWRhdGUgYW5kIHNhbml0aXplIGEgdGVhbV91cmwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBpbnB1dFxyXG4gKiBAcmV0dXJucyB7KHN0cmluZyB8IGZhbHNlKX1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZVRlYW1VUkwoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB0ZWFtVXJsID0gbmV3IFVSTChpbnB1dCk7XHJcbiAgICBjb25zdCB7IHByb3RvY29sLCBzZWFyY2hQYXJhbXMgfSA9IHRlYW1Vcmw7XHJcblxyXG4gICAgLy8gQ2hlY2sgdGhhdCB0aGUgaG9zdCBlbmRzIHdpdGggYC5zbGFjayouY29tYFxyXG4gICAgaWYgKCFkb2VzVXJsTWF0Y2hEb21haW5TZXRzKHRlYW1VcmwsIFNMQUNLX0NPTU1FUklDQUxfRE9NQUlOUywgU0xBQ0tfR09WX0RPTUFJTlMpKSB7XHJcbiAgICAgIGxvZ2dlci53YXJuKGBzYW5pdGl6ZVRlYW1VUkw6ICR7aW5wdXR9IGRpZCBub3QgbWVldCBob3N0IHJlcXVpcmVtZW50c2ApO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDaGVjayB0aGF0IHRoZSBwcm90b2NvbCBpcyBodHRwc1xyXG4gICAgaWYgKHByb3RvY29sICE9PSAnaHR0cHM6Jykge1xyXG4gICAgICBsb2dnZXIud2Fybihgc2FuaXRpemVUZWFtVVJMOiAke2lucHV0fSBkaWQgbm90IG1lZXQgcHJvdG9jb2wgcmVxdWlyZW1lbnRzYCk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzZWFyY2hQYXJhbXMuaGFzKCdyZWRpcicpKSB7XHJcbiAgICAgIGxvZ2dlci53YXJuKGBzYW5pdGl6ZVRlYW1VUkw6ICR7aW5wdXR9IGNvbnRhaW5lZCByZWRpciBwYXJhbWV0ZXIsIHdoaWNoIHdpbGwgYmUgZGVsZXRlZGApO1xyXG4gICAgICBzZWFyY2hQYXJhbXMuZGVsZXRlKCdyZWRpcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0ZWFtVXJsLnRvU3RyaW5nKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGxvZ2dlci5lcnJvcihgc2FuaXRpemVUZWFtVVJMOiBjb3VsZCBub3QgdmFsaWRhdGUgdXJsYCwge1xyXG4gICAgICBpbnB1dCxcclxuICAgICAgZXJyb3IsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlZGFjdHMgdGhlIHRlYW0gc3ViZG9tYWluIGZyb20gYSBzbGFjayBVUkxcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZWRhY3RUZWFtU3ViZG9tYWluKGlucHV0OiBzdHJpbmcgPSAnJywgbW9kZTogQ2xpZW50RW52aXJvbm1lbnQpOiBzdHJpbmcgfCBudWxsIHtcclxuICBjb25zdCB1cmwgPSBudWxsaXNoVXJsKGlucHV0KTtcclxuICBpZiAoIXVybCkgcmV0dXJuIHVybDtcclxuXHJcbiAgaWYgKGlzR2FudHJ5V2luZG93VVJMKHVybCwgbW9kZSkpIHJldHVybiB1cmwudG9TdHJpbmcoKTtcclxuXHJcbiAgaWYgKGlzU2xhY2tVUkxGb3JBbnlFbnZpcm9ubWVudCh1cmwpKSB7XHJcbiAgICBjb25zdCB0ZWFtTmFtZSA9IGdldFRlYW1TdWJkb21haW4odXJsLCBtb2RlKTtcclxuICAgIGNvbnN0IHJlZGFjdGVkSG9zdCA9IHRlYW1OYW1lID8gdXJsLmhvc3Quc3BsaXQodGVhbU5hbWUpLmpvaW4oUkVEQUNURURfU1RSSU5HKSA6IHVybC5ob3N0O1xyXG4gICAgcmV0dXJuIHVybC50b1N0cmluZygpLnNwbGl0KHVybC5ob3N0KS5qb2luKHJlZGFjdGVkSG9zdCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW5wdXQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZWRhY3RzIHRoZSB0ZWFtIHN1YmRvbWFpbiBmcm9tIGEgc2xhY2sgVVJMIGZvciBhbnkgZW52aXJvbm1lbnQuIE9ubHkgdXNlXHJcbiAqIHRoaXMgaWYgeW91IGRvbid0IHlldCBoYXZlIGFjY2VzcyB0byB0aGUgYGVudmlyb25tZW50YCBzdGF0ZSB0byBwZXJmb3JtIGZ1bGxcclxuICogdmVyaWZpY2F0aW9uIHZpYSBgcmVkYWN0VGVhbVN1YmRvbWFpbmAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVkYWN0VGVhbVN1YmRvbWFpbkZvckFueUVudmlyb25tZW50KGlucHV0OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcclxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhDbGllbnRFbnZpcm9ubWVudClcclxuICAgIC5maWx0ZXIoaXNOb3RTdHJpbmcpXHJcbiAgICAucmVkdWNlKCh1cmwsIG1vZGUpID0+IHJlZGFjdFRlYW1TdWJkb21haW4odXJsLCBtb2RlKSwgaW5wdXQpO1xyXG59XHJcbiIsImNvbnN0IF9fV0VCUEFDS19OQU1FU1BBQ0VfT0JKRUNUX18gPSByZXF1aXJlKCdlbGVjdHJvbicpOyIsIi8qKlxyXG4gKiBQbGVhc2UgZG8gbm90IGltcG9ydCBhbnl0aGluZyBpbiB0aGlzIGZpbGUuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIENoYW5uZWwgbmFtZSBkZWZpbml0aW9uIGZvciB0aGUgRHJhZyAmIERyb3AgbGlzdGVuZXJcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIERvd25sb2FkQ2hhbm5lbCB7XHJcbiAgU3RhcnRFdmVudCA9ICdTTEFDS19TVEFSVF9ET1dOTE9BRCcsXHJcbiAgRG9uZUV2ZW50ID0gJ1NMQUNLX0RPV05MT0FEX0RPTkUnLFxyXG59XHJcblxyXG4vKipcclxuICogQ2hhbm5lbCBuYW1lIGRlZmluaXRpb24gZm9yIE1hZ2ljIExvZ2luc1xyXG4gKlxyXG4gKiBXYXJuaW5nOiBzcmMvbWFnaWMtbG9naW4vcHJlbG9hZC5qcyBkb2VzIG5vdCBpbXBvcnQgdGhpcyBzdHJpbmdcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbnVtIE1hZ2ljTG9naW5DaGFubmVsIHtcclxuICBSZXNwb25zZSA9ICdTTEFDS19NQUdJQ19MT0dJTl9SRVNQT05TRScsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGFubmVsIG5hbWVzIGZvciB0aGUgUFJRIEV2ZW50IFJlcG9ydGVyXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBQcnFDaGFubmVsIHtcclxuICBUZWFtQm9vdGVkID0gJ1NMQUNLX1BSUV9URUFNX0JPT1RFRCcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDaGFubmVsIG5hbWVzIHVzZWQgYnkgdGhlIFdpbmRvdyBDcmVhdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBXaW5kb3dDcmVhdG9yQ2hhbm5lbCB7XHJcbiAgV2luZG93SWRSZXF1ZXN0ID0gJ1NMQUNLX1dJTkRPV19JRF9SRVFVRVNUJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIENoYW5uZWwgbmFtZXMgdXNlZCBieSB0aGUgU2lnbmluIEVwaWNzIGFuZCB0aGUgV2ViQ29udGVudHNcclxuICogTGlmZSBDeWNsZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gV2ViQ29udGVudHNDaGFubmVsIHtcclxuICBEaWRGaW5pc2hMb2FkaW5nID0gJ1NMQUNLX0RJRF9GSU5JU0hfTE9BRElORycsXHJcbiAgUHJlbG9hZEVycm9yID0gJ1NMQUNLX1BSRUxPQURfRVJST1InLFxyXG59XHJcblxyXG4vKipcclxuICogQ2hhbm5lbCBuYW1lcyB1c2VkIGJ5IHRoZSBFcGljcyByZXNwb25zaWJsZSBmb3IgaWNvbiBvdmVybGF5c1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVudW0gT3ZlcmxheUNoYW5uZWwge1xyXG4gIFNldEljb24gPSAnU0xBQ0tfU0VUX09WRVJMQVlfSUNPTicsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBVc2VkIGJ5IHRoZSByZW5kZXJlciBwcm9jZXNzIHRvIGludm9rZSB3b3JrIGluIHRoZSBtYWluIHByb2Nlc3MuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBJcGNSZW5kZXJlck1lc3NhZ2Uge1xyXG4gIEFERF9ORVdfVEVBTVMgPSAnQUREX05FV19URUFNUycsXHJcbiAgQVNLX0ZPUl9NRURJQV9BQ0NFU1MgPSAnQVNLX0ZPUl9NRURJQV9BQ0NFU1MnLFxyXG4gIEJPVU5DRV9ET0NLID0gJ1NMQUNLX0JPVU5DRV9ET0NLJyxcclxuICBDTEVBUl9DQUNIRV9BTkRfUkVTVEFSVF9BUFAgPSAnQ0xFQVJfQ0FDSEVfQU5EX1JFU1RBUlRfQVBQJyxcclxuICBDTEVBUl9TRVNTSU9OX0NBQ0hFID0gJ1NMQUNLX0NMRUFSX1NFU1NJT05fQ0FDSEUnLFxyXG4gIENMSUNLX05PVElGSUNBVElPTiA9ICdDTElDS19OT1RJRklDQVRJT04nLFxyXG4gIENMT1NFX1dJTkRPVyA9ICdDTE9TRV9XSU5ET1cnLFxyXG4gIEVYVEVORF9NRU5VID0gJ0VYVEVORF9NRU5VJyxcclxuICBHRVRfQUxMX0RJU1BMQVlTID0gJ0dFVF9BTExfRElTUExBWVMnLFxyXG4gIEdFVF9BUFBfTUVUUklDUyA9ICdTTEFDS19HRVRfQVBQX01FTU9SWV9VU0FHRScsXHJcbiAgR0VUX0FQUExJQ0FUSU9OX05BTUVfRk9SX1BST1RPQ09MID0gJ0dFVF9BUFBMSUNBVElPTl9OQU1FX0ZPUl9QUk9UT0NPTCcsXHJcbiAgR0VUX0FWQUlMQUJMRV9MQU5HVUFHRVMgPSAnU0xBQ0tfR0VUX0FWQUlMQUJMRV9MQU5HVUFHRVMnLFxyXG4gIEdFVF9DSFJPTUlVTV9GRUFUVVJFX09WRVJSSURFUyA9ICdHRVRfQ0hST01JVU1fRkVBVFVSRV9PVkVSUklERVMnLFxyXG4gIEdFVF9DVVJSRU5UX0NPTU1BTkRfTElORV9TV0lUQ0hFUyA9ICdHRVRfQ1VSUkVOVF9DT01NQU5EX0xJTkVfU1dJVENIRVMnLFxyXG4gIEdFVF9DVVJSRU5UX0xBTkdVQUdFUyA9ICdTTEFDS19HRVRfQ1VSUkVOVF9MQU5HVUFHRVMnLFxyXG4gIEdFVF9DVVJTT1JfU0NSRUVOX1BPSU5UID0gJ0dFVF9DVVJTT1JfU0NSRUVOX1BPSU5UJyxcclxuICBHRVRfRElTUExBWV9ORUFSRVNUX1BPSU5UID0gJ0dFVF9ESVNQTEFZX05FQVJFU1RfUE9JTlQnLFxyXG4gIEdFVF9ET01fQ09VTlRFUlMgPSAnR0VUX0RPTV9DT1VOVEVSUycsXHJcbiAgR0VUX0ZFQVRVUkVfRlJBR01FTlRfRU5BQkxFRCA9ICdTTEFDS19HRVRfRkVBVFVSRV9GUkFHTUVOVF9FTkFCTEVEJyxcclxuICBHRVRfR0xPQkFMX1NIT1JUQ1VUU19SRUdJU1RFUkVEID0gJ1NMQUNLX0dFVF9HTE9CQUxfU0hPUlRDVVRTX1JFR0lTVEVSRUQnLFxyXG4gIEdFVF9JU19MQVVOQ0hfRU5GT1JDRUQgPSAnR0VUX0lTX0xBVU5DSF9FTkZPUkNFRCcsXHJcbiAgR0VUX0lTX1JVTk5JTkdfVU5ERVJfUk9TRVRUQV9UUkFOU0xBVElPTiA9ICdHRVRfSVNfUlVOTklOR19VTkRFUl9ST1NFVFRBX1RSQU5TTEFUSU9OJyxcclxuICBHRVRfTE9DQUxFX1JFU09VUkNFID0gJ1NMQUNLX0dFVF9MT0NBTEVfUkVTT1VSQ0UnLFxyXG4gIEdFVF9NRURJQV9BQ0NFU1NfU1RBVFVTID0gJ0dFVF9NRURJQV9BQ0NFU1NfU1RBVFVTJyxcclxuICBHRVRfTk9USUZJQ0FUSU9OX1dBUk5JTkdTID0gJ1NMQUNLX0dFVF9OT1RJRklDQVRJT05fV0FSTklOR1MnLFxyXG4gIEdFVF9SRUNFTlRfRklMRVMgPSAnU0xBQ0tfR0VUX1JFQ0VOVF9GSUxFUycsXHJcbiAgR0VUX1JFRFVYX1NUQVRFID0gJ1NMQUNLX0dFVF9SRURVWF9TVEFURScsXHJcbiAgR0VUX1NDUkVFTl9QUkVWSUVXX1RIVU1CTkFJTFMgPSAnR0VUX1NDUkVFTl9QUkVWSUVXX1RIVU1CTkFJTFMnLFxyXG4gIEdFVF9WSVJUVUFMX0NBTUVSQVMgPSAnR0VUX1ZJUlRVQUxfQ0FNRVJBUycsXHJcbiAgSEFORExFX0RFRVBfTElOSyA9ICdIQU5ETEVfREVFUF9MSU5LJyxcclxuICBMT0FEX0xPQ0FMRSA9ICdTTEFDS19MT0FEX0xPQ0FMRScsXHJcbiAgTUFYSU1JWkVfV0lORE9XID0gJ01BWElNSVpFX1dJTkRPVycsXHJcbiAgTUlOSU1JWkVfV0lORE9XID0gJ01JTklNSVpFX1dJTkRPVycsXHJcbiAgTk9USUZZID0gJ1NMQUNLX05PVElGWScsXHJcbiAgTk9USUZZX0dMT0JBTF9TSE9SVENVVFNfVFJJR0dFUiA9ICdTTEFDS19OT1RJRllfR0xPQkFMX1NIT1JUQ1VUU19UUklHR0VSJyxcclxuICBOT1RJRllfV0FUQ0hFRF9GSUxFX0NIQU5HRUQgPSAnTk9USUZZX1dBVENIRURfRklMRV9DSEFOR0VEJyxcclxuICBTSE9XX0RPV05MT0FEX0ZPTERFUl9DSE9PU0VSID0gJ1NMQUNLX1NIT1dfRE9XTkxPQURfRk9MREVSX0NIT09TRVInLFxyXG4gIFJFU0VUX0RPV05MT0FEX0ZPTERFUiA9ICdTTEFDS19SRVNFVF9ET1dOTE9BRF9GT0xERVInLFxyXG4gIE9QRU5fR1BVX0lORk8gPSAnU0xBQ0tfT1BFTl9HUFVfSU5GTycsXHJcbiAgT1BFTl9NRVNTQUdFX0JPWCA9ICdTTEFDS19PUEVOX01FU1NBR0VfQk9YJyxcclxuICBQRVJGT1JNQU5DRV9ESVNBQkxFID0gJ1BFUkZPUk1BTkNFX0RJU0FCTEUnLFxyXG4gIFBFUkZPUk1BTkNFX0VOQUJMRSA9ICdQRVJGT1JNQU5DRV9FTkFCTEUnLFxyXG4gIFBFUkZPUk1BTkNFX0dFVF9NRVRSSUNTID0gJ1BFUkZPUk1BTkNFX0dFVF9NRVRSSUNTJyxcclxuICBQT1BVUF9BUFBfTUVOVSA9ICdQT1BVUF9BUFBfTUVOVScsXHJcbiAgUE9XRVJfU0FWRV9CTE9DS0VSX1NUQVJUID0gJ1NMQUNLX1BPV0VSX1NBVkVfQkxPQ0tFUl9TVEFSVCcsXHJcbiAgUE9XRVJfU0FWRV9CTE9DS0VSX0lTX1NUQVJURUQgPSAnU0xBQ0tfUE9XRVJfU0FWRV9CTE9DS0VSX0lTX1NUQVJURUQnLFxyXG4gIFBSRVBBUkVfQU5EX1JFVkVBTF9MT0dTID0gJ1BSRVBBUkVfQU5EX1JFVkVBTF9MT0dTJyxcclxuICBSRUFEX1NZU1RFTV9URVhUX1BSRUZFUkVOQ0VTID0gJ1JFQURfU1lTVEVNX1RFWFRfUFJFRkVSRU5DRVMnLFxyXG4gIFJFRFVYX1VQREFURV9GUk9NX1dFQkFQUCA9ICdSRURVWF9VUERBVEVfRlJPTV9XRUJBUFAnLFxyXG4gIFJFTU9WRV9ET1dOTE9BRFMgPSAnUkVNT1ZFX0RPV05MT0FEUycsXHJcbiAgUkVNT1ZFX05PVElGSUNBVElPTiA9ICdSRU1PVkVfTk9USUZJQ0FUSU9OJyxcclxuICBSRU1PVkVfVEVBTVMgPSAnUkVNT1ZFX1RFQU1TJyxcclxuICBSRVFVRVNUX0VNVUxBVElPTl9USFJPVFRMRSA9ICdTTEFDS19SRVFVRVNUX0VNVUxBVElPTl9USFJPVFRMRScsXHJcbiAgUkVTVEFSVF9XSVRIX05FVF9MT0cgPSAnUkVTVEFSVF9XSVRIX05FVF9MT0cnLFxyXG4gIFNFTEVDVF9ORVhUX1dPUktTUEFDRSA9ICdTRUxFQ1RfTkVYVF9XT1JLU1BBQ0UnLFxyXG4gIFNFTEVDVF9QUkVWSU9VU19XT1JLU1BBQ0UgPSAnU0VMRUNUX1BSRVZJT1VTX1dPUktTUEFDRScsXHJcbiAgU0VMRUNURURfV09SS1NQQUNFX0NIQU5HRUQgPSAnU0VMRUNURURfV09SS1NQQUNFX0NIQU5HRUQnLFxyXG4gIFNFVF9DT01NQU5EX0xJTkVfU1dJVENIRVMgPSAnU0VUX0NPTU1BTkRfTElORV9TV0lUQ0hFUycsXHJcbiAgU0VUX0NPTlRFWFRfTUVOVV9JVEVNID0gJ1NFVF9DT05URVhUX01FTlVfSVRFTScsXHJcbiAgU0VUX0NVUlJFTlRfTEFOR1VBR0VTID0gJ1NMQUNLX1NFVF9DVVJSRU5UX0xBTkdVQUdFUycsXHJcbiAgU0VUX0ZVTExfU0NSRUVOID0gJ1NFVF9GVUxMX1NDUkVFTicsXHJcbiAgU0VUX05FVFdPUktfU1RBVFVTID0gJ1NFVF9ORVRXT1JLX1NUQVRVUycsXHJcbiAgU0VUX05PVElGSUNBVElPTlNfV0lORE9XX1NIQVBFID0gJ1NFVF9OT1RJRklDQVRJT05TX1dJTkRPV19TSEFQRScsXHJcbiAgU0VUX1VQREFURV9TVEFUVVMgPSAnU0VUX1VQREFURV9TVEFUVVMnLFxyXG4gIFNFVF9XSU5ET1dfRlJBTUUgPSAnU0VUX1dJTkRPV19GUkFNRScsXHJcbiAgU0hPVUxEX1BMQVlfU09VTkQgPSAnU0xBQ0tfU0hPVUxEX1BMQVlfU09VTkQnLFxyXG4gIFNIT1dfU0VUVElOR1NfRURJVE9SID0gJ1NIT1dfU0VUVElOR1NfRURJVE9SJyxcclxuICBTTEFDS19ERUJVR19DSEVDS19GRUFUVVJFX0VOQUJMRUQgPSAnU0xBQ0tfREVCVUdfQ0hFQ0tfRkVBVFVSRV9FTkFCTEVEJyxcclxuICBTUVVJUlJFTF9NQUNfU0VUX0RJUkVDVF9DT05URU5UU19XUklURV9FTkFCTEVEID0gJ1NRVUlSUkVMX01BQ19TRVRfRElSRUNUX0NPTlRFTlRTX1dSSVRFX0VOQUJMRUQnLFxyXG4gIFNUQVJUX0RJQUdOT1NUSUNTX1RSQUNFID0gJ1NMQUNLX1NUQVJUX0RJQUdOT1NUSUNTX1RSQUNFJyxcclxuICBTVEFSVF9ET1dOTE9BRCA9ICdTVEFSVF9ET1dOTE9BRCcsXHJcbiAgU1RBUlRfTkVUX0xPRyA9ICdTVEFSVF9ORVRfTE9HJyxcclxuICBTVE9QX0RJQUdOT1NUSUNTX1RSQUNFID0gJ1NMQUNLX1NUT1BfRElBR05PU1RJQ1NfVFJBQ0UnLFxyXG4gIFNUT1JFX0VOVEVSUFJJU0VfSURfUEFJUiA9ICdTVE9SRV9FTlRFUlBSSVNFX0lEX1BBSVInLFxyXG4gIFNUT1JFX1VTRVJfV09SS1NQQUNFUyA9ICdTVE9SRV9VU0VSX1dPUktTUEFDRVMnLFxyXG4gIFNVQk1JVF9DUkVERU5USUFMUyA9ICdTVUJNSVRfQ1JFREVOVElBTFMnLFxyXG4gIFNZTkNfV09SS1NQQUNFUyA9ICdTWU5DX1dPUktTUEFDRVMnLFxyXG4gIFRJVExFQkFSX0RPVUJMRV9DTElDSyA9ICdUSVRMRUJBUl9ET1VCTEVfQ0xJQ0snLFxyXG4gIFRPR0dMRV9ERVZfVE9PTFMgPSAnVE9HR0xFX0RFVl9UT09MUycsXHJcbiAgVE9HR0xFX0ZFQVRVUkVfRlJBR01FTlQgPSAnVE9HR0xFX0ZFQVRVUkVfRlJBR01FTlQnLFxyXG4gIFRPR0dMRV9HTE9CQUxfU0hPUlRDVVRTX0hBTkRMRVIgPSAnU0xBQ0tfVE9HR0xFX0dMT0JBTF9TSE9SVENVVFNfSEFORExFUicsXHJcbiAgVFJJR0dFUl9ET1dOTE9BRF9TSEVMTF9BQ1RJT04gPSAnVFJJR0dFUl9ET1dOTE9BRF9TSEVMTF9BQ1RJT04nLFxyXG4gIFVOTUFYSU1JWkVfV0lORE9XID0gJ1VOTUFYSU1JWkVfV0lORE9XJyxcclxuICBVUERBVEVfRE9XTkxPQUQgPSAnVVBEQVRFX0RPV05MT0FEJyxcclxuICBVUERBVEVfU0VUVElOR1MgPSAnVVBEQVRFX1NFVFRJTkdTJyxcclxuICBVUExPQURfQVBQX0xPR1NfQVJDSElWRSA9ICdTTEFDS19VUExPQURfQVBQX0xPR1NfQVJDSElWRScsXHJcbiAgVVBMT0FEX1JFQ0VOVF9GSUxFID0gJ1NMQUNLX1VQTE9BRF9SRUNFTlRfRklMRScsXHJcbiAgV0FJVF9BVVRIX0NPT0tJRV9DSEFOR0UgPSAnU0xBQ0tfV0FJVF9BVVRIX0NPT0tJRV9DSEFOR0UnLFxyXG4gIFdSSVRFX0lNQUdFX1RPX0NMSVBCT0FSRCA9ICdXUklURV9JTUFHRV9UT19DTElQQk9BUkQnLFxyXG4gIFdSSVRFX1NUUklOR19UT19DTElQQk9BUkQgPSAnV1JJVEVfU1RSSU5HX1RPX0NMSVBCT0FSRCcsXHJcbiAgWk9PTV9JTiA9ICdaT09NX0lOJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIFVzZWQgYnkgdGhlIG1haW4gcHJvY2VzcyB0byBpbnZva2Ugd29yayBpbiB0aGUgcmVuZGVyZXIgKHRoYXQgaXMsIHRoZSB3ZWJhcHApLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gSXBjTWFpbk1lc3NhZ2Uge1xyXG4gIENMT1NFX0NBTEwgPSAnQ0xPU0VfQ0FMTCcsXHJcbiAgQ1VTVE9NX01FTlVfSVRFTV9DTElDS0VEID0gJ0NVU1RPTV9NRU5VX0lURU1fQ0xJQ0tFRCcsXHJcbiAgRk9SV0FSRF9ERUVQX0xJTksgPSAnRk9SV0FSRF9ERUVQX0xJTksnLFxyXG4gIFJFTE9BRF9ET0NVTUVOVCA9ICdSRUxPQURfRE9DVU1FTlQnLFxyXG4gIFNIT1dfV0VCQVBQX0RJQUxPRyA9ICdTSE9XX1dFQkFQUF9ESUFMT0cnLFxyXG4gIFNMRUVQX0FORF9XQUtFID0gJ1NMRUVQX0FORF9XQUtFJyxcclxuICBTVEFSVF9TRUFSQ0ggPSAnU1RBUlRfU0VBUkNIJyxcclxuICBURVhUX1BSRUZFUkVOQ0VTX0NIQU5HRUQgPSAnVEVYVF9QUkVGRVJFTkNFU19DSEFOR0VEJyxcclxuICBUSUNLTEVfTUVTU0FHRV9TRVJWRVIgPSAnVElDS0xFX01FU1NBR0VfU0VSVkVSJyxcclxuICBXT1JLU1BBQ0VfU0VMRUNUSU9OID0gJ1dPUktTUEFDRV9TRUxFQ1RJT04nLFxyXG59XHJcblxyXG4vKipcclxuICogQ2hhbm5lbCBuYW1lcyB1c2VkIGJ5IHRoZSBjb250ZXh0IG1lbnVzIGNyZWF0ZWQgYnkgd2ViYXBwXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW51bSBDb250ZXh0TWVudUNoYW5uZWwge1xyXG4gIENsaWNrID0gJ1NMQUNLX0NPTlRFWFRfTUVOVV9DTElDSycsXHJcbiAgQ2xvc2UgPSAnU0xBQ0tfQ09OVEVYVF9NRU5VX0NMT1NFJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVudW0gU2VydmljZVdvcmtlck1hbmFnZXIge1xyXG4gIFJFU1RBUlRfU0VMRiA9ICdTTEFDS19TRVJWSUNFX1dPUktFUl9NQU5BR0VSX1JFU1RBUlRfU0VMRicsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFdpbmRvd0NoYW5uZWwge1xyXG4gIEVYRUNfQlJPV1NFUldJTkRPV19NRVRIT0QgPSAnRVhFQ19CUk9XU0VSV0lORE9XX01FVEhPRCcsXHJcbiAgR0VUX1dJTkRPV19JRCA9ICdHRVRfV0lORE9XX0lEJyxcclxuICBCUklOR19UT19GT1JFR1JPVU5EID0gJ0JSSU5HX1RPX0ZPUkVHUk9VTkQnLFxyXG4gIFJFR0lTVEVSX0VWRU5UX0xJU1RFTkVSID0gJ1JFR0lTVEVSX0VWRU5UX0xJU1RFTkVSJyxcclxuICBVTlJFR0lTVEVSX0VWRU5UX0xJU1RFTkVSID0gJ1VOUkVHSVNURVJfRVZFTlRfTElTVEVORVInLFxyXG4gIFdJTkRPV19FVkVOVCA9ICdXSU5ET1dfRVZFTlQnLFxyXG4gIEJST1dTRVJfV0lORE9XX1NFVF9USVRMRV9CQVJfT1ZFUkxBWSA9ICdCUk9XU0VSX1dJTkRPV19TRVRfVElUTEVfQkFSX09WRVJMQVknLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZW51bSBDYWxsc0NoYW5uZWwge1xyXG4gIENBTExTX1NDUkVFTl9TSEFSRV9DUkVBVEVfQk9SREVSX1dJTkRPVyA9ICdDQUxMU19TQ1JFRU5fU0hBUkVfQ1JFQVRFX0JPUkRFUl9XSU5ET1cnLFxyXG4gIENBTExTX1NDUkVFTl9TSEFSRV9TSE9XX0JPUkRFUiA9ICdDQUxMU19TQ1JFRU5fU0hBUkVfU0hPV19CT1JERVInLFxyXG4gIENBTExTX1NDUkVFTl9TSEFSRV9ISURFX0JPUkRFUiA9ICdDQUxMU19TQ1JFRU5fU0hBUkVfSElERV9CT1JERVInLFxyXG4gIENBTExTX1NDUkVFTl9TSEFSRV9TRVRfV0lORE9XX09SX1NDUkVFTl9JRCA9ICdDQUxMU19TQ1JFRU5fU0hBUkVfU0VUX1dJTkRPV19PUl9TQ1JFRU5fSUQnLFxyXG4gIENBTExTX1NDUkVFTl9TSEFSRV9TRVRfQk9SREVSX1dJRFRIID0gJ0NBTExTX1NDUkVFTl9TSEFSRV9TRVRfQk9SREVSX1dJRFRIJyxcclxuICBDQUxMU19TQ1JFRU5fU0hBUkVfU0VUX0JPUkRFUl9DT0xPUiA9ICdDQUxMU19TQ1JFRU5fU0hBUkVfU0VUX0JPUkRFUl9DT0xPUicsXHJcbiAgQ0FMTFNfU0NSRUVOX1NIQVJFX1NFVF9USU1FUl9JTlRFUlZBTF9NUyA9ICdDQUxMU19TQ1JFRU5fU0hBUkVfU0VUX1RJTUVSX0lOVEVSVkFMX01TJyxcclxuICBDQUxMU19TQ1JFRU5fU0hBUkVfR0VUX1dJTkRPV19QT1NJVElPTl9BTkRfRElNRU5TSU9OUyA9ICdDQUxMU19TQ1JFRU5fU0hBUkVfR0VUX1dJTkRPV19QT1NJVElPTl9BTkRfRElNRU5TSU9OUycsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBlbnVtIFByb3RvdHlwZUNoYW5uZWwge1xyXG4gIE1VTFRJX1dJTkRPV19QUk9UT1RZUEVfU0hPV19PVkVSTEFZID0gJ01VTFRJX1dJTkRPV19QUk9UT1RZUEVfU0hPV19PVkVSTEFZJyxcclxuICBNVUxUSV9XSU5ET1dfUFJPVE9UWVBFX0hJREVfT1ZFUkxBWSA9ICdNVUxUSV9XSU5ET1dfUFJPVE9UWVBFX0hJREVfT1ZFUkxBWScsXHJcbn1cclxuIiwiaW1wb3J0IHsgSXBjUmVuZGVyZXJJbnRlcmZhY2VBcmdzLCBSZW5kZXJlckFyZ3NGb3JDaGFubmVsIH0gZnJvbSAnQGRlc2t0b3AvY29tbW9uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBpcGNSZW5kZXJlciB9IGZyb20gJ2VsZWN0cm9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBpcGNJbnZva2U6IDxDIGV4dGVuZHMga2V5b2YgSXBjUmVuZGVyZXJJbnRlcmZhY2VBcmdzPihcclxuICBjaGFubmVsOiBDLFxyXG4gIC4uLmFyZ3M6IFJlbmRlcmVyQXJnc0ZvckNoYW5uZWw8Qz5cclxuKSA9PiBQcm9taXNlPGFueT4gPSAoY2hhbm5lbCwgLi4uYXJncykgPT4gaXBjUmVuZGVyZXIuaW52b2tlKGNoYW5uZWwsIC4uLmFyZ3MpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlwY1NlbmQ6IDxDIGV4dGVuZHMga2V5b2YgSXBjUmVuZGVyZXJJbnRlcmZhY2VBcmdzPihcclxuICBjaGFubmVsOiBDLFxyXG4gIC4uLmFyZ3M6IFJlbmRlcmVyQXJnc0ZvckNoYW5uZWw8Qz5cclxuKSA9PiB2b2lkID0gKGNoYW5uZWwsIC4uLmFyZ3MpID0+IGlwY1JlbmRlcmVyLnNlbmQoY2hhbm5lbCwgLi4uYXJncyk7XHJcblxyXG4vLyBOZXZlciB1c2UgdGhpc1xyXG5leHBvcnQgY29uc3QgaXBjU2VuZFN5bmM6IDxDIGV4dGVuZHMga2V5b2YgSXBjUmVuZGVyZXJJbnRlcmZhY2VBcmdzPihcclxuICBjaGFubmVsOiBDLFxyXG4gIC4uLmFyZ3M6IFJlbmRlcmVyQXJnc0ZvckNoYW5uZWw8Qz5cclxuKSA9PiBhbnkgPSAoY2hhbm5lbCwgLi4uYXJncykgPT4gaXBjUmVuZGVyZXIuc2VuZFN5bmMoY2hhbm5lbCwgLi4uYXJncyk7XHJcbiIsImltcG9ydCB7IElwY1JlbmRlcmVyTWVzc2FnZSB9IGZyb20gJ0BkZXNrdG9wL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBpcGNTZW5kIH0gZnJvbSAnLi4vaXBjLXRvLW1haW4nO1xyXG5pbXBvcnQgeyBzd2lwZSB9IGZyb20gJy4vc3dpcGUnO1xyXG5cclxuY29uc3QgSEFTX1JBTl9QUkVMT0FEX0tFWSA9ICdoYXNSYW5QcmVsb2FkU2NyaXB0JztcclxuXHJcbi8qKlxyXG4gKiBTZXRzIHVwIGV2ZW50IGhhbmRsZXJzIGZvciBzd2lwaW5nIHRvIGdvIGJhY2sgYW5kIGZvcndhcmQgaW4gaGlzdG9yeSB3aXRoIGFcclxuICogdHdvLWZpbmdlciBzd2lwZSBsZWZ0IC8gcmlnaHQsIGFuZCBzd2l0Y2hpbmcgYmV0d2VlbiB0ZWFtcyB3aXRoIGFcclxuICogdGhyZWUtZmluZ2VyIHN3aXBlIGxlZnQgLyByaWdodC5cclxuICovXHJcbmZ1bmN0aW9uIHNldHVwVG91Y2hzY3JlZW5FdmVudHMoKSB7XHJcbiAgc3dpcGUoXHJcbiAgICBkb2N1bWVudC5ib2R5LFxyXG4gICAgKGRpcmVjdGlvbikgPT4ge1xyXG4gICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgIGNhc2UgJ2xlZnQnOlxyXG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkuZ28oLTEpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkuZ28oMSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHsgcG9pbnRlcnM6IDIgfVxyXG4gICk7XHJcblxyXG4gIHN3aXBlKFxyXG4gICAgZG9jdW1lbnQuYm9keSxcclxuICAgIChkaXJlY3Rpb24pID0+IHtcclxuICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgIGlwY1NlbmQoSXBjUmVuZGVyZXJNZXNzYWdlLlNFTEVDVF9QUkVWSU9VU19XT1JLU1BBQ0UpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgaXBjU2VuZChJcGNSZW5kZXJlck1lc3NhZ2UuU0VMRUNUX05FWFRfV09SS1NQQUNFKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgeyBwb2ludGVyczogMyB9XHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldHMgdXAgYSB3b3JrYXJvdW5kIGZvciB0aGUgQ3RybCtQbHVzIGFjY2VsZXJhdG9yIG5vdCB3b3JraW5nIHByb3Blcmx5XHJcbiAqIGluIEVsZWN0cm9uIG9uIFdpbmRvd3MvTGludXguXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9lbGVjdHJvbi9lbGVjdHJvbi9pc3N1ZXMvMjk5OTZcclxuICogVE9ETzogUmVtb3ZlIHRoaXMgY29kZSBhbmQgYXNzb2NpYXRlZCBab29tIEluIElQQyBoYW5kbGVycyB3aGVuIHRoZSBpc3N1ZSBpcyByZXNvbHZlZFxyXG4gKi9cclxuZnVuY3Rpb24gc2V0dXBLZXlEb3duSGFuZGxlcnMoKSB7XHJcbiAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgJ2tleWRvd24nLFxyXG4gICAgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0VxdWFsJyAmJiAhZS5zaGlmdEtleSAmJiAhZS5hbHRLZXkgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlwY1NlbmQoSXBjUmVuZGVyZXJNZXNzYWdlLlpPT01fSU4pO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgdHJ1ZVxyXG4gICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFdmVuIHRvdWNoaW5nIGxvY2FsU3RvcmFnZSBpbiBhIGRhdGEgVVJJIHdpbGwgdGhyb3cgZXJyb3JzLlxyXG4gKi9cclxuZnVuY3Rpb24gY2FuQWNjZXNzTG9jYWxTdG9yYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgIT09ICdkYXRhOicgJiZcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCAhPT0gJ2Fib3V0OicgJiZcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCAhPT0gJ2Nocm9tZS1lcnJvcjonXHJcbiAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFdlIG9ubHkgd2FudCB0byByZXN0YXJ0IHRoZSBzZXJ2aWNlIHdvcmtlciBhZnRlciBhIHJlbG9hZCwgbm90IG9uIHRoZVxyXG4gKiBpbml0aWFsIGxvYWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBzaG91bGRSZXN0YXJ0U2VydmljZVdvcmtlcigpIHtcclxuICByZXR1cm4gY2FuQWNjZXNzTG9jYWxTdG9yYWdlKCkgJiYgISFzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKEhBU19SQU5fUFJFTE9BRF9LRVkpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNhbkFjY2Vzc0xvY2FsU3RvcmFnZSxcclxuICBIQVNfUkFOX1BSRUxPQURfS0VZLFxyXG4gIHNldHVwS2V5RG93bkhhbmRsZXJzLFxyXG4gIHNldHVwVG91Y2hzY3JlZW5FdmVudHMsXHJcbiAgc2hvdWxkUmVzdGFydFNlcnZpY2VXb3JrZXIsXHJcbn07XHJcbiIsImltcG9ydCB7IGlzRW1wdHlXaW5kb3dVUkwsIGlzU2xhY2tVUkxGb3JBbnlFbnZpcm9ubWVudCB9IGZyb20gJ0BkZXNrdG9wL2NvbW1vbic7XHJcbmltcG9ydCB7IHdlYkZyYW1lIH0gZnJvbSAnZWxlY3Ryb24nO1xyXG5cclxuaW1wb3J0IHsgc2V0dXBLZXlEb3duSGFuZGxlcnMgfSBmcm9tICcuL2Jvb3RzdHJhcC11dGlsL3Bvc3QtZG9tLXRhc2tzJztcclxuXHJcbmZ1bmN0aW9uIHNob3VsZFJ1blByZWxvYWQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobG9jYXRpb24uaHJlZik7XHJcblxyXG4gICAgaWYgKGlzRW1wdHlXaW5kb3dVUkwodXJsKSAmJiB3aW5kb3cub3BlbmVyKSB7XHJcbiAgICAgIGNvbnN0IG9wZW5lclVybCA9IG5ldyBVUkwob3BlbmVyLmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICByZXR1cm4gaXNTbGFja1VSTEZvckFueUVudmlyb25tZW50KG9wZW5lclVybCk7XHJcbiAgICB9IGVsc2UgaWYgKHVybC5wcm90b2NvbCA9PT0gJ2Jsb2I6JyAmJiB3aW5kb3cub3BlbmVyKSB7XHJcbiAgICAgIGNvbnN0IGJsb2JVcmwgPSBuZXcgVVJMKHVybC5wYXRobmFtZSk7XHJcbiAgICAgIHJldHVybiBpc1NsYWNrVVJMRm9yQW55RW52aXJvbm1lbnQoYmxvYlVybCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5lcnJvcihlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJlZ2lzdGVycyBhIGAtLXpvb20tZmFjdG9yYCBDU1MgcHJvcGVydHkgd2hpY2ggY2FuIGJlIHVzZWQgdG8gY2FsY3VsYXRlXHJcbiAqIGFuIGFjY3VyYXRlIFdDTyB0aXRsZSBiYXIgaGVpZ2h0IHdoZW4gem9vbSBpcyBub3QgMTAwJS5cclxuICovXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyWm9vbUZhY3RvckNTU1Byb3BlcnR5KCkge1xyXG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcclxuICAgIGlmIChkb2N1bWVudC5ib2R5KVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnNldFByb3BlcnR5KCctLXpvb20tZmFjdG9yJywgd2ViRnJhbWUuZ2V0Wm9vbUZhY3RvcigpLnRvU3RyaW5nKCkpO1xyXG4gIH07XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGUpO1xyXG5cclxuICB1cGRhdGUoKTtcclxufVxyXG5cclxuaWYgKHNob3VsZFJ1blByZWxvYWQoKSkge1xyXG4gIHByb2Nlc3Mub24oJ2RvY3VtZW50LXN0YXJ0JywgKCkgPT4ge1xyXG4gICAgLy8gRGVmZXIgdXBkYXRlIHRvIHdhaXQgZm9yIGRvY3VtZW50LmJvZHkgYW5kIHRvIGF2b2lkIGEgY3Jhc2ggaW4gQmxpbmsuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgcmVnaXN0ZXJab29tRmFjdG9yQ1NTUHJvcGVydHkoKTtcclxuICAgICAgc2V0dXBLZXlEb3duSGFuZGxlcnMoKTtcclxuICAgIH0sIDApO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
//# sourceURL=webpack-internal:///6874
`)}},__webpack_require__={};__webpack_require__.r=n=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},__webpack_modules__[6920](0,{},__webpack_require__);var __webpack_exports__={};__webpack_modules__[6874](0,__webpack_exports__,__webpack_require__),sandboxedRenderer=__webpack_exports__})();
