// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d3wGw":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "5a1bda1ab8fca702";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
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
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3cYfC":[function(require,module,exports) {
var _mainScss = require("./../styles/main.scss");
require('fslightbox');

},{"./../styles/main.scss":"bo7w8","fslightbox":"ahuU9"}],"bo7w8":[function() {},{}],"ahuU9":[function(require,module,exports) {
!function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n = t();
        for(var o in n)("object" == typeof exports ? exports : e)[o] = n[o];
    }
}(window, function() {
    return (function(e1) {
        var t1 = {
        };
        function n(o) {
            if (t1[o]) return t1[o].exports;
            var r = t1[o] = {
                i: o,
                l: !1,
                exports: {
                }
            };
            return e1[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
        }
        return n.m = e1, n.c = t1, n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            });
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var r in e)n.d(o, r, (function(t) {
                return e[t];
            }).bind(null, r));
            return o;
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t, "a", t), t;
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "", n(n.s = 0);
    })([
        function(e2, t2, n1) {
            "use strict";
            n1.r(t2);
            var o1, r1 = "fslightbox-", i1 = "".concat(r1, "styles"), s1 = "".concat(r1, "cursor-grabbing"), c1 = "".concat(r1, "full-dimension"), a1 = "".concat(r1, "flex-centered"), l1 = "".concat(r1, "open"), u1 = "".concat(r1, "transform-transition"), d1 = "".concat(r1, "absoluted"), p1 = "".concat(r1, "slide-btn"), f1 = "".concat(p1, "-container"), h1 = "".concat(r1, "fade-in"), m = "".concat(r1, "fade-out"), g = h1 + "-strong", v1 = m + "-strong", b = "".concat(r1, "opacity-"), x = "".concat(b, "1"), y = "".concat(r1, "source");
            function S(e3) {
                return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e;
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                })(e3);
            }
            "object" === ("undefined" == typeof document ? "undefined" : S(document)) && ((o1 = document.createElement("style")).className = i1, o1.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(o1));
            function w(e4) {
                var t3, n = e4.props, o = 0, r = {
                };
                this.getSourceTypeFromLocalStorageByUrl = function(e) {
                    return t3[e] ? t3[e] : i(e);
                }, this.handleReceivedSourceTypeForUrl = function(e5, n) {
                    !1 === r[n] && (o--, "invalid" !== e5 ? r[n] = e5 : delete r[n], 0 === o && (!function(e, t) {
                        for(var n in t)e[n] = t[n];
                    }(t3, r), localStorage.setItem("fslightbox-types", JSON.stringify(t3))));
                };
                var i = function(e) {
                    o++, r[e] = !1;
                };
                n.disableLocalStorage ? (this.getSourceTypeFromLocalStorageByUrl = function() {
                }, this.handleReceivedSourceTypeForUrl = function() {
                }) : (t3 = JSON.parse(localStorage.getItem("fslightbox-types"))) || (t3 = {
                }, this.getSourceTypeFromLocalStorageByUrl = i);
            }
            function L(e, t, n, o) {
                var r = e.data, i = e.elements.sources, s = n / o, c = 0;
                this.adjustSize = function() {
                    if ((c = r.maxSourceWidth / s) < r.maxSourceHeight) return n < r.maxSourceWidth && (c = o), a();
                    c = o > r.maxSourceHeight ? r.maxSourceHeight : o, a();
                };
                var a = function() {
                    i[t].style.width = c * s + "px", i[t].style.height = c + "px";
                };
            }
            function C(e6, t) {
                var n2 = this, o2 = e6.collections.sourceSizers, r = e6.elements, i = r.sourceAnimationWrappers, s = r.sourceMainWrappers, c = r.sources, a = e6.resolve;
                function l(e, n) {
                    o2[t] = a(L, [
                        t,
                        e,
                        n
                    ]), o2[t].adjustSize();
                }
                this.runActions = function(e, o) {
                    c[t].classList.add(x), i[t].classList.add(g), s[t].removeChild(s[t].firstChild), l(e, o), n2.runActions = l;
                };
            }
            function F(e7, t4) {
                var n3, o3 = this, r2 = e7.elements.sources, i = e7.props, s = (0, e7.resolve)(C, [
                    t4
                ]);
                this.handleImageLoad = function(e) {
                    var t = e.target, n = t.naturalWidth, o = t.naturalHeight;
                    s.runActions(n, o);
                }, this.handleVideoLoad = function(e) {
                    var t = e.target, o = t.videoWidth, r = t.videoHeight;
                    n3 = !0, s.runActions(o, r);
                }, this.handleNotMetaDatedVideoLoad = function() {
                    n3 || o3.handleYoutubeLoad();
                }, this.handleYoutubeLoad = function() {
                    var e = 1920, t = 1080;
                    i.maxYoutubeDimensions && (e = i.maxYoutubeDimensions.width, t = i.maxYoutubeDimensions.height), s.runActions(e, t);
                }, this.handleCustomLoad = function() {
                    setTimeout(function() {
                        var e = r2[t4];
                        s.runActions(e.offsetWidth, e.offsetHeight);
                    });
                };
            }
            function A(e, t, n) {
                var o = e.elements.sources, r = e.props.customClasses, i = r[t] ? r[t] : "";
                o[t].className = n + " " + i;
            }
            function I(e, t) {
                var n = e.elements.sources, o = e.props.customAttributes;
                for(var r in o[t])n[t].setAttribute(r, o[t][r]);
            }
            function T(e, t) {
                var n = e.collections.sourceLoadHandlers, o = e.elements, r = o.sources, i = o.sourceAnimationWrappers, s = e.props.sources;
                r[t] = document.createElement("img"), A(e, t, y), r[t].src = s[t], r[t].onload = n[t].handleImageLoad, I(e, t), i[t].appendChild(r[t]);
            }
            function E(e8, t) {
                var n = e8.collections.sourceLoadHandlers, o = e8.elements, r = o.sources, i = o.sourceAnimationWrappers, s = e8.props, c = s.sources, a = s.videosPosters;
                r[t] = document.createElement("video"), A(e8, t, y), r[t].src = c[t], r[t].onloadedmetadata = function(e) {
                    n[t].handleVideoLoad(e);
                }, r[t].controls = !0, I(e8, t), a[t] && (r[t].poster = a[t]);
                var l = document.createElement("source");
                l.src = c[t], r[t].appendChild(l), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3000), i[t].appendChild(r[t]);
            }
            function N(e, t) {
                var n = e.collections.sourceLoadHandlers, o = e.elements, i = o.sources, s = o.sourceAnimationWrappers, c = e.props.sources;
                i[t] = document.createElement("iframe"), A(e, t, "".concat(y, " ").concat(r1, "youtube-iframe")), i[t].src = "https://www.youtube.com/embed/".concat(c[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?enablejsapi=1"), i[t].allowFullscreen = !0, I(e, t), s[t].appendChild(i[t]), n[t].handleYoutubeLoad();
            }
            function W(e, t) {
                var n = e.collections.sourceLoadHandlers, o = e.elements, r = o.sources, i = o.sourceAnimationWrappers, s = e.props.sources;
                r[t] = s[t], A(e, t, "".concat(r[t].className, " ").concat(y)), i[t].appendChild(r[t]), n[t].handleCustomLoad();
            }
            function z(e, t) {
                var n = e.elements, o = n.sources, i = n.sourceAnimationWrappers, s = n.sourceMainWrappers;
                e.props.sources;
                o[t] = document.createElement("div"), o[t].className = "".concat(r1, "invalid-file-wrapper ").concat(a1), o[t].innerHTML = "Invalid source", i[t].classList.add(g), i[t].appendChild(o[t]), s[t].removeChild(s[t].firstChild);
            }
            function M(e) {
                var t5 = e.collections, n = t5.sourceLoadHandlers, o = t5.sourcesRenderFunctions, r = e.core.sourceDisplayFacade, i = e.resolve;
                this.runActionsForSourceTypeAndIndex = function(t, s) {
                    var c;
                    switch("invalid" !== t && (n[s] = i(F, [
                        s
                    ])), t){
                        case "image":
                            c = T;
                            break;
                        case "video":
                            c = E;
                            break;
                        case "youtube":
                            c = N;
                            break;
                        case "custom":
                            c = W;
                            break;
                        default:
                            c = z;
                    }
                    o[s] = function() {
                        return c(e, s);
                    }, r.displaySourcesWhichShouldBeDisplayed();
                };
            }
            function P() {
                var e9, t6, n, o = {
                    isUrlYoutubeOne: function(e) {
                        var t = document.createElement("a");
                        return t.href = e, "www.youtube.com" === t.hostname;
                    },
                    getTypeFromResponseContentType: function(e) {
                        return e.slice(0, e.indexOf("/"));
                    }
                };
                function r() {
                    if (4 !== n.readyState) {
                        if (2 === n.readyState) {
                            var e;
                            switch(o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))){
                                case "image":
                                    e = "image";
                                    break;
                                case "video":
                                    e = "video";
                                    break;
                                default:
                                    e = "invalid";
                            }
                            n.onreadystatechange = null, n.abort(), t6(e);
                        }
                    } else t6("invalid");
                }
                this.setUrlToCheck = function(t) {
                    e9 = t;
                }, this.getSourceType = function(i) {
                    if (o.isUrlYoutubeOne(e9)) return i("youtube");
                    t6 = i, (n = new XMLHttpRequest).onreadystatechange = r, n.open("GET", e9, !0), n.send();
                };
            }
            function H(e10, t7, n) {
                var o4 = e10.props, r = o4.types, i = o4.type, s = o4.sources, c = e10.resolve;
                this.getTypeSetByClientForIndex = function(e) {
                    var t;
                    return r && r[e] ? t = r[e] : i && (t = i), t;
                }, this.retrieveTypeWithXhrForIndex = function(e) {
                    var o5 = c(P);
                    o5.setUrlToCheck(s[e]), o5.getSourceType(function(o) {
                        t7.handleReceivedSourceTypeForUrl(o, s[e]), n.runActionsForSourceTypeAndIndex(o, e);
                    });
                };
            }
            function k(e11, t) {
                var n4 = e11.componentsServices.hideSourceLoaderIfNotYetCollection, o6 = e11.elements, r3 = o6.sourceWrappersContainer, i = o6.sourceMainWrappers;
                i[t] = document.createElement("div"), i[t].className = "".concat(d1, " ").concat(c1, " ").concat(a1), i[t].innerHTML = '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>';
                var s = i[t].firstChild;
                n4[t] = function() {
                    i[t].contains(s) && i[t].removeChild(s);
                }, r3.appendChild(i[t]), (function(e, t) {
                    var n = e.elements, o = n.sourceMainWrappers, r = n.sourceAnimationWrappers;
                    r[t] = document.createElement("div"), o[t].appendChild(r[t]);
                })(e11, t);
            }
            function O(e, t, n, o) {
                var i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                i.setAttributeNS(null, "width", t), i.setAttributeNS(null, "height", t), i.setAttributeNS(null, "viewBox", n);
                var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
                return s.setAttributeNS(null, "class", "".concat(r1, "svg-path")), s.setAttributeNS(null, "d", o), i.appendChild(s), e.appendChild(i), i;
            }
            function R(e, t) {
                var n = document.createElement("div");
                return n.className = "".concat(r1, "toolbar-button ").concat(a1), n.title = t, e.appendChild(n), n;
            }
            function D(e12, t8) {
                var n5 = document.createElement("div");
                n5.className = "".concat(r1, "toolbar"), t8.appendChild(n5), (function(e, t) {
                    var n = e.componentsServices, o = e.core.fullscreenToggler, r = e.data, i = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z", s = R(t);
                    s.title = "Enter fullscreen";
                    var c = O(s, "20px", "0 0 18 18", i);
                    n.enterFullscreen = function() {
                        r.isFullscreenOpen = !0, s.title = "Exit fullscreen", c.setAttributeNS(null, "width", "24px"), c.setAttributeNS(null, "height", "24px"), c.setAttributeNS(null, "viewBox", "0 0 950 1024"), c.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z");
                    }, n.exitFullscreen = function() {
                        r.isFullscreenOpen = !1, s.title = "Enter fullscreen", c.setAttributeNS(null, "width", "20px"), c.setAttributeNS(null, "height", "20px"), c.setAttributeNS(null, "viewBox", "0 0 18 18"), c.firstChild.setAttributeNS(null, "d", i);
                    }, s.onclick = function() {
                        r.isFullscreenOpen ? o.exitFullscreen() : o.enterFullscreen();
                    };
                })(e12, n5), (function(e, t) {
                    var n = R(t, "Close");
                    n.onclick = e.core.lightboxCloser.closeLightbox, O(n, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z");
                })(e12, n5);
            }
            function j(e13) {
                var t9 = e13.props.sources, n6 = e13.elements.container, o7 = document.createElement("div");
                o7.className = "".concat(r1, "nav"), n6.appendChild(o7), D(e13, o7), t9.length > 1 && (function(e14, t) {
                    var n = e14.componentsServices, o = e14.props.sources, i = (e14.stageIndexes, document.createElement("div"));
                    i.className = "".concat(r1, "slide-number-container");
                    var s = document.createElement("div");
                    s.className = a1;
                    var c = document.createElement("span");
                    n.setSlideNumber = function(e) {
                        return c.innerHTML = e;
                    };
                    var l = document.createElement("span");
                    l.className = "".concat(r1, "slash");
                    var u = document.createElement("div");
                    u.innerHTML = o.length, i.appendChild(s), s.appendChild(c), s.appendChild(l), s.appendChild(u), t.appendChild(i), setTimeout(function() {
                        s.offsetWidth > 55 && (i.style.justifyContent = "flex-start");
                    });
                })(e13, o7);
            }
            function X(e15, t) {
                var n = this, o = e15.elements.sourceMainWrappers, r = e15.props, i = 0;
                this.byValue = function(e) {
                    return i = e, n;
                }, this.negative = function() {
                    s(-c());
                }, this.zero = function() {
                    s(0);
                }, this.positive = function() {
                    s(c());
                };
                var s = function(e) {
                    o[t].style.transform = "translateX(".concat(e + i, "px)"), i = 0;
                }, c = function() {
                    return (1 + r.slideDistance) * innerWidth;
                };
            }
            function B(e16, t10, n7, o) {
                var r = e16.elements.container, i = n7.charAt(0).toUpperCase() + n7.slice(1), s = document.createElement("div");
                s.className = "".concat(f1, " ").concat(f1, "-").concat(n7), s.title = "".concat(i, " slide"), s.onclick = t10, (function(e, t) {
                    var n = document.createElement("div");
                    n.className = "".concat(p1, " ").concat(a1), O(n, "20px", "0 0 20 20", t), e.appendChild(n);
                })(s, o), r.appendChild(s);
            }
            function U(e, t) {
                var n = e.classList;
                n.contains(t) && n.remove(t);
            }
            function V(e) {
                var t = this, n = e.core, o = n.eventsDispatcher, r = n.fullscreenToggler, i = n.globalEventsController, s = n.scrollbarRecompensor, c = e.data, a = e.elements, u = e.props, d = e.sourcePointerProps;
                this.isLightboxFadingOut = !1, this.runActions = function() {
                    t.isLightboxFadingOut = !0, a.container.classList.add(v1), i.removeListeners(), u.exitFullscreenOnClose && c.isFullscreenOpen && r.exitFullscreen(), setTimeout(function() {
                        t.isLightboxFadingOut = !1, d.isPointering = !1, a.container.classList.remove(v1), document.documentElement.classList.remove(l1), s.removeRecompense(), document.body.removeChild(a.container), o.dispatch("onClose");
                    }, 270);
                };
            }
            function Y(e17) {
                var t11, n, o, r = e17.collections.sourceMainWrappersTransformers, i = e17.componentsServices, s = e17.core, c = s.classFacade, a = s.slideIndexChanger, l = s.sourceDisplayFacade, d = s.stageManager, p = e17.elements.sourceAnimationWrappers, f = e17.stageIndexes, v = (t11 = function() {
                    c.removeFromEachElementClassIfContains("sourceAnimationWrappers", m);
                }, n = 300, o = [], function() {
                    o.push(!0), setTimeout(function() {
                        o.pop(), o.length || t11();
                    }, n);
                });
                a.changeTo = function(e) {
                    f.current = e, d.updateStageIndexes(), i.setSlideNumber(e + 1), l.displaySourcesWhichShouldBeDisplayed();
                }, a.jumpTo = function(e) {
                    var t = f.current;
                    a.changeTo(e), c.removeFromEachElementClassIfContains("sourceMainWrappers", u1), U(p[t], g), U(p[t], h1), p[t].classList.add(m), U(p[e], g), U(p[e], m), p[e].classList.add(h1), v(), r[e].zero(), setTimeout(function() {
                        t !== f.current && r[t].negative();
                    }, 270);
                };
            }
            function _(e18) {
                var t = e18.core, n = t.lightboxCloser, o = t.fullscreenToggler, r = t.slideChangeFacade;
                this.listener = function(e) {
                    switch(e.key){
                        case "Escape":
                            n.closeLightbox();
                            break;
                        case "ArrowLeft":
                            r.changeToPrevious();
                            break;
                        case "ArrowRight":
                            r.changeToNext();
                            break;
                        case "F11":
                            e.preventDefault(), o.enterFullscreen();
                    }
                };
            }
            function q(e19) {
                var t12 = e19.collections.sourceMainWrappersTransformers, n = e19.elements, o = e19.sourcePointerProps, r = e19.stageIndexes;
                function i(e, n) {
                    t12[e].byValue(o.swipedX)[n]();
                }
                this.runActionsForEvent = function(e) {
                    var t, c, a;
                    n.container.contains(n.slideSwipingHoverer) || n.container.appendChild(n.slideSwipingHoverer), t = n.container, c = s1, (a = t.classList).contains(c) || a.add(c), o.swipedX = e.screenX - o.downScreenX, i(r.current, "zero"), void 0 !== r.previous && o.swipedX > 0 ? i(r.previous, "negative") : void 0 !== r.next && o.swipedX < 0 && i(r.next, "positive");
                };
            }
            function J(e20) {
                var t = e20.props.sources, n = e20.resolve, o = e20.sourcePointerProps, r = n(q);
                1 === t.length ? this.listener = function() {
                    o.swipedX = 1;
                } : this.listener = function(e) {
                    o.isPointering && r.runActionsForEvent(e);
                };
            }
            function G(e) {
                var t = e.collections.sourceMainWrappersTransformers, n = e.core.slideIndexChanger, o = e.elements.sourceMainWrappers, r = e.stageIndexes;
                this.runPositiveSwipedXActions = function() {
                    void 0 === r.previous || (i("positive"), n.changeTo(r.previous)), i("zero");
                }, this.runNegativeSwipedXActions = function() {
                    void 0 === r.next || (i("negative"), n.changeTo(r.next)), i("zero");
                };
                var i = function(e) {
                    o[r.current].classList.add(u1), t[r.current][e]();
                };
            }
            function $(e, t) {
                e.contains(t) && e.removeChild(t);
            }
            function K(e) {
                var t = e.core.lightboxCloser, n = e.elements, o = e.resolve, r = e.sourcePointerProps, i = o(G);
                this.runNoSwipeActions = function() {
                    $(n.container, n.slideSwipingHoverer), r.isSourceDownEventTarget || t.closeLightbox(), r.isPointering = !1;
                }, this.runActions = function() {
                    r.swipedX > 0 ? i.runPositiveSwipedXActions() : i.runNegativeSwipedXActions(), $(n.container, n.slideSwipingHoverer), n.container.classList.remove(s1), r.isPointering = !1;
                };
            }
            function Q(e) {
                var t = e.resolve, n = e.sourcePointerProps, o = t(K);
                this.listener = function() {
                    n.isPointering && (n.swipedX ? o.runActions() : o.runNoSwipeActions());
                };
            }
            function Z(e21) {
                var t13, n8, o8;
                n8 = (t13 = e21).core.classFacade, o8 = t13.elements, n8.removeFromEachElementClassIfContains = function(e, t) {
                    for(var n = 0; n < o8[e].length; n++)U(o8[e][n], t);
                }, (function(e) {
                    var t = e.core.eventsDispatcher, n = e.props;
                    t.dispatch = function(e) {
                        n[e] && n[e]();
                    };
                })(e21), (function(e22) {
                    var t = e22.componentsServices, n = e22.core.fullscreenToggler;
                    n.enterFullscreen = function() {
                        t.enterFullscreen();
                        var e = document.documentElement;
                        e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
                    }, n.exitFullscreen = function() {
                        t.exitFullscreen(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
                    };
                })(e21), (function(e) {
                    var t = e.core, n = t.globalEventsController, o = t.windowResizeActioner, r = e.resolve, i = r(_), s = r(J), c = r(Q);
                    n.attachListeners = function() {
                        document.addEventListener("pointermove", s.listener), document.addEventListener("pointerup", c.listener), addEventListener("resize", o.runActions), document.addEventListener("keydown", i.listener);
                    }, n.removeListeners = function() {
                        document.removeEventListener("pointermove", s.listener), document.removeEventListener("pointerup", c.listener), removeEventListener("resize", o.runActions), document.removeEventListener("keydown", i.listener);
                    };
                })(e21), (function(e) {
                    var t = e.core.lightboxCloser, n = (0, e.resolve)(V);
                    t.closeLightbox = function() {
                        n.isLightboxFadingOut || n.runActions();
                    };
                })(e21), ne(e21), (function(e) {
                    var t = e.data, n = e.core.scrollbarRecompensor;
                    function o() {
                        document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px");
                    }
                    n.addRecompense = function() {
                        "complete" === document.readyState ? o() : addEventListener("load", function() {
                            o(), n.addRecompense = o;
                        });
                    }, n.removeRecompense = function() {
                        document.body.style.removeProperty("margin-right");
                    };
                })(e21), (function(e) {
                    var t = e.core, n = t.slideChangeFacade, o = t.slideIndexChanger, r = t.stageManager;
                    e.props.sources.length > 1 ? (n.changeToPrevious = function() {
                        o.jumpTo(r.getPreviousSlideIndex());
                    }, n.changeToNext = function() {
                        o.jumpTo(r.getNextSlideIndex());
                    }) : (n.changeToPrevious = function() {
                    }, n.changeToNext = function() {
                    });
                })(e21), Y(e21), (function(e23) {
                    var t14 = e23.core, n = t14.classFacade, o = t14.sourcesPointerDown, r = e23.elements.sources, i = e23.sourcePointerProps, s = e23.stageIndexes;
                    o.listener = function(e) {
                        "VIDEO" !== e.target.tagName && e.preventDefault(), i.isPointering = !0, i.downScreenX = e.screenX, i.swipedX = 0;
                        var t = r[s.current];
                        t && t.contains(e.target) ? i.isSourceDownEventTarget = !0 : i.isSourceDownEventTarget = !1, n.removeFromEachElementClassIfContains("sourceMainWrappers", u1);
                    };
                })(e21), (function(e) {
                    var t = e.collections.sourcesRenderFunctions, n = e.core.sourceDisplayFacade, o = e.props, r = e.stageIndexes;
                    function i(e) {
                        t[e] && (t[e](), delete t[e]);
                    }
                    n.displaySourcesWhichShouldBeDisplayed = function() {
                        if (o.loadOnlyCurrentSource) i(r.current);
                        else for(var e in r)i(r[e]);
                    };
                })(e21), (function(e24) {
                    var t = e24.stageIndexes, n9 = e24.core.stageManager, o = e24.props.sources.length - 1;
                    n9.getPreviousSlideIndex = function() {
                        return 0 === t.current ? o : t.current - 1;
                    }, n9.getNextSlideIndex = function() {
                        return t.current === o ? 0 : t.current + 1;
                    }, n9.updateStageIndexes = 0 === o ? function() {
                    } : 1 === o ? function() {
                        0 === t.current ? (t.next = 1, delete t.previous) : (t.previous = 0, delete t.next);
                    } : function() {
                        t.previous = n9.getPreviousSlideIndex(), t.next = n9.getNextSlideIndex();
                    }, n9.isSourceInStage = o <= 2 ? function() {
                        return !0;
                    } : function(e) {
                        var n = t.current;
                        if (0 === n && e === o || n === o && 0 === e) return !0;
                        var r = n - e;
                        return -1 === r || 0 === r || 1 === r;
                    };
                })(e21), (function(e25) {
                    var t = e25.collections, n = t.sourceMainWrappersTransformers, o = t.sourceSizers, r = e25.core.windowResizeActioner, i = e25.data, s = e25.elements.sourceMainWrappers, c = e25.props, a = e25.stageIndexes;
                    r.runActions = function() {
                        innerWidth < 992 ? i.maxSourceWidth = innerWidth : i.maxSourceWidth = 0.9 * innerWidth, i.maxSourceHeight = 0.9 * innerHeight;
                        for(var e = 0; e < c.sources.length; e++)U(s[e], u1), e !== a.current && n[e].negative(), o[e] && o[e].adjustSize();
                    };
                })(e21);
            }
            function ee(e26) {
                var t15 = e26.props.disableLocalStorage;
                if (!t15) {
                    var n = localStorage.getItem("fslightbox-scrollbar-width");
                    if (n) return n;
                }
                var o = function() {
                    var e = document.createElement("div"), t = e.style;
                    return t.visibility = "hidden", t.width = "100px", t.msOverflowStyle = "scrollbar", t.overflow = "scroll", e;
                }(), r = function() {
                    var e = document.createElement("div");
                    return e.style.width = "100%", e;
                }();
                document.body.appendChild(o);
                var i = o.offsetWidth;
                o.appendChild(r);
                var s = r.offsetWidth;
                document.body.removeChild(o);
                var c = i - s;
                return t15 || localStorage.setItem("fslightbox-scrollbar-width", c.toString()), c;
            }
            function te(e27) {
                var t16 = e27.core.eventsDispatcher, n10 = e27.data, o9 = e27.elements, i2 = e27.props.sources;
                n10.isInitialized = !0, n10.scrollbarWidth = ee(e27), (function(e) {
                    for(var t = e.collections.sourceMainWrappersTransformers, n = e.props.sources, o = e.resolve, r = 0; r < n.length; r++)t[r] = o(X, [
                        r
                    ]);
                })(e27), Z(e27), o9.container = document.createElement("div"), o9.container.className = "".concat(r1, "container ").concat(c1, " ").concat(g), (function(e) {
                    var t = e.elements;
                    t.slideSwipingHoverer = document.createElement("div"), t.slideSwipingHoverer.className = "".concat(r1, "slide-swiping-hoverer ").concat(c1, " ").concat(d1);
                })(e27), j(e27), (function(e) {
                    var t = e.core.sourcesPointerDown, n = e.elements, o = e.props.sources, r = document.createElement("div");
                    r.className = "".concat(d1, " ").concat(c1), n.container.appendChild(r), r.addEventListener("pointerdown", t.listener), n.sourceWrappersContainer = r;
                    for(var i = 0; i < o.length; i++)k(e, i);
                })(e27), i2.length > 1 && (function(e) {
                    var t = e.core.slideChangeFacade;
                    B(e, t.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), B(e, t.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z");
                })(e27), (function(e) {
                    for(var t = e.props.sources, n = e.resolve, o = n(w), r = n(M), i = n(H, [
                        o,
                        r
                    ]), s = 0; s < t.length; s++)if ("string" == typeof t[s]) {
                        var c = i.getTypeSetByClientForIndex(s);
                        if (c) r.runActionsForSourceTypeAndIndex(c, s);
                        else {
                            var a = o.getSourceTypeFromLocalStorageByUrl(t[s]);
                            a ? r.runActionsForSourceTypeAndIndex(a, s) : i.retrieveTypeWithXhrForIndex(s);
                        }
                    } else r.runActionsForSourceTypeAndIndex("custom", s);
                })(e27), t16.dispatch("onInit");
            }
            function ne(e) {
                var t = e.collections.sourceMainWrappersTransformers, n = e.componentsServices, o10 = e.core, r = o10.eventsDispatcher, i = o10.lightboxOpener, s = o10.globalEventsController, c = o10.scrollbarRecompensor, a = o10.sourceDisplayFacade, u = o10.stageManager, d = o10.windowResizeActioner, p = e.data, f = e.elements, h = e.stageIndexes;
                i.open = function() {
                    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    h.current = o, p.isInitialized ? r.dispatch("onShow") : te(e), u.updateStageIndexes(), a.displaySourcesWhichShouldBeDisplayed(), n.setSlideNumber(o + 1), document.body.appendChild(f.container), document.documentElement.classList.add(l1), c.addRecompense(), s.attachListeners(), d.runActions(), t[h.current].zero(), r.dispatch("onOpen");
                };
            }
            function oe(e28, t17, n11) {
                return (oe = re() ? Reflect.construct : function(e, t, n) {
                    var o = [
                        null
                    ];
                    o.push.apply(o, t);
                    var r = new (Function.bind.apply(e, o));
                    return n && ie(r, n.prototype), r;
                }).apply(null, arguments);
            }
            function re() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                    })), !0;
                } catch (e) {
                    return !1;
                }
            }
            function ie(e29, t18) {
                return (ie = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e29, t18);
            }
            function se(e30) {
                return (function(e) {
                    if (Array.isArray(e)) return ce(e);
                })(e30) || (function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e30) || (function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return ce(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ce(e, t);
                })(e30) || (function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })();
            }
            function ce(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var n = 0, o = new Array(t); n < t; n++)o[n] = e[n];
                return o;
            }
            function ae() {
                for(var e31 = document.getElementsByTagName("a"), t = function(t) {
                    if (!e31[t].hasAttribute("data-fslightbox")) return "continue";
                    var n = e31[t].getAttribute("data-fslightbox"), o = e31[t].getAttribute("href");
                    fsLightboxInstances[n] || (fsLightboxInstances[n] = new FsLightbox);
                    var r4 = null;
                    "#" === o.charAt(0) ? (r4 = document.getElementById(o.substring(1)).cloneNode(!0)).removeAttribute("id") : r4 = o, fsLightboxInstances[n].props.sources.push(r4), fsLightboxInstances[n].elements.a.push(e31[t]);
                    var i = fsLightboxInstances[n].props.sources.length - 1;
                    e31[t].onclick = function(e) {
                        e.preventDefault(), fsLightboxInstances[n].open(i);
                    }, d("types", "data-type"), d("videosPosters", "data-video-poster"), d("customClasses", "data-class"), d("customClasses", "data-custom-class");
                    for(var s = [
                        "href",
                        "data-fslightbox",
                        "data-type",
                        "data-video-poster",
                        "data-class",
                        "data-custom-class"
                    ], c = e31[t].attributes, a = fsLightboxInstances[n].props.customAttributes, l = 0; l < c.length; l++)if (-1 === s.indexOf(c[l].name) && "data-" === c[l].name.substr(0, 5)) {
                        a[i] || (a[i] = {
                        });
                        var u = c[l].name.substr(5);
                        a[i][u] = c[l].value;
                    }
                    function d(o, r) {
                        e31[t].hasAttribute(r) && (fsLightboxInstances[n].props[o][i] = e31[t].getAttribute(r));
                    }
                }, n = 0; n < e31.length; n++)t(n);
                var o11 = Object.keys(fsLightboxInstances);
                window.fsLightbox = fsLightboxInstances[o11[o11.length - 1]];
            }
            window.FsLightbox = function() {
                var e = this;
                this.props = {
                    sources: [],
                    customAttributes: [],
                    customClasses: [],
                    types: [],
                    videosPosters: [],
                    slideDistance: 0.3
                }, this.data = {
                    isInitialized: !1,
                    isFullscreenOpen: !1,
                    maxSourceWidth: 0,
                    maxSourceHeight: 0,
                    scrollbarWidth: 0
                }, this.sourcePointerProps = {
                    downScreenX: null,
                    isPointering: !1,
                    isSourceDownEventTarget: !1,
                    swipedX: 0
                }, this.stageIndexes = {
                }, this.elements = {
                    a: [],
                    container: null,
                    slideSwipingHoverer: null,
                    sourceWrappersContainer: null,
                    sources: [],
                    sourceMainWrappers: [],
                    sourceAnimationWrappers: []
                }, this.componentsServices = {
                    enterFullscreen: null,
                    exitFullscreen: null,
                    hideSourceLoaderIfNotYetCollection: [],
                    setSlideNumber: function() {
                    }
                }, this.resolve = function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return n.unshift(e), oe(t, se(n));
                }, this.collections = {
                    sourceMainWrappersTransformers: [],
                    sourceLoadHandlers: [],
                    sourcesRenderFunctions: [],
                    sourceSizers: []
                }, this.core = {
                    classFacade: {
                    },
                    eventsDispatcher: {
                    },
                    fullscreenToggler: {
                    },
                    globalEventsController: {
                    },
                    lightboxCloser: {
                    },
                    lightboxOpener: {
                    },
                    lightboxUpdater: {
                    },
                    scrollbarRecompensor: {
                    },
                    slideChangeFacade: {
                    },
                    slideIndexChanger: {
                    },
                    sourcesPointerDown: {
                    },
                    sourceDisplayFacade: {
                    },
                    stageManager: {
                    },
                    windowResizeActioner: {
                    }
                }, ne(this), this.open = function(t) {
                    return e.core.lightboxOpener.open(t);
                }, this.close = function() {
                    return e.core.lightboxCloser.closeLightbox();
                };
            }, window.fsLightboxInstances = {
            }, ae(), window.refreshFsLightbox = function() {
                for(var e in fsLightboxInstances){
                    var t = fsLightboxInstances[e].props;
                    fsLightboxInstances[e] = new FsLightbox, fsLightboxInstances[e].props = t, fsLightboxInstances[e].props.sources = [], fsLightboxInstances[e].elements.a = [];
                }
                ae();
            };
        }
    ]);
});

},{}]},["d3wGw","3cYfC"], "3cYfC", "parcelRequireb5b9")

//# sourceMappingURL=about.b8fca702.js.map
