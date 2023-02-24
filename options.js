"use strict";
(() => {
  var jn = Object.create;
  var zr = Object.defineProperty;
  var Pn = Object.getOwnPropertyDescriptor;
  var Bn = Object.getOwnPropertyNames;
  var Dn = Object.getPrototypeOf,
    Ln = Object.prototype.hasOwnProperty;
  var On = (t, e) => () => (
    e || t((e = { exports: {} }).exports, e), e.exports
  );
  var In = (t, e, r, o) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let n of Bn(e))
        !Ln.call(t, n) &&
          n !== r &&
          zr(t, n, {
            get: () => e[n],
            enumerable: !(o = Pn(e, n)) || o.enumerable,
          });
    return t;
  };
  var Mn = (t, e, r) => (
    (r = t != null ? jn(Dn(t)) : {}),
    In(
      e || !t || !t.__esModule
        ? zr(r, "default", { value: t, enumerable: !0 })
        : r,
      t
    )
  );
  var xn = On((jr, _n) => {
    (function (t, e) {
      if (typeof define == "function" && define.amd)
        define("webextension-polyfill", ["module"], e);
      else if (typeof jr < "u") e(_n);
      else {
        var r = { exports: {} };
        e(r), (t.browser = r.exports);
      }
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : jr,
      function (t) {
        "use strict";
        if (!globalThis.chrome?.runtime?.id)
          throw new Error(
            "This script should only be loaded in a browser extension."
          );
        if (
          typeof globalThis.browser > "u" ||
          Object.getPrototypeOf(globalThis.browser) !== Object.prototype
        ) {
          let e = "The message port closed before a response was received.",
            r = (o) => {
              let n = {
                alarms: {
                  clear: { minArgs: 0, maxArgs: 1 },
                  clearAll: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                },
                bookmarks: {
                  create: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getChildren: { minArgs: 1, maxArgs: 1 },
                  getRecent: { minArgs: 1, maxArgs: 1 },
                  getSubTree: { minArgs: 1, maxArgs: 1 },
                  getTree: { minArgs: 0, maxArgs: 0 },
                  move: { minArgs: 2, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeTree: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                browserAction: {
                  disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                  getBadgeText: { minArgs: 1, maxArgs: 1 },
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  openPopup: { minArgs: 0, maxArgs: 0 },
                  setBadgeBackgroundColor: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setBadgeText: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                },
                browsingData: {
                  remove: { minArgs: 2, maxArgs: 2 },
                  removeCache: { minArgs: 1, maxArgs: 1 },
                  removeCookies: { minArgs: 1, maxArgs: 1 },
                  removeDownloads: { minArgs: 1, maxArgs: 1 },
                  removeFormData: { minArgs: 1, maxArgs: 1 },
                  removeHistory: { minArgs: 1, maxArgs: 1 },
                  removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                  removePasswords: { minArgs: 1, maxArgs: 1 },
                  removePluginData: { minArgs: 1, maxArgs: 1 },
                  settings: { minArgs: 0, maxArgs: 0 },
                },
                commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                contextMenus: {
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeAll: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                cookies: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 1, maxArgs: 1 },
                  getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                devtools: {
                  inspectedWindow: {
                    eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                  },
                  panels: {
                    create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                    elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                  },
                },
                downloads: {
                  cancel: { minArgs: 1, maxArgs: 1 },
                  download: { minArgs: 1, maxArgs: 1 },
                  erase: { minArgs: 1, maxArgs: 1 },
                  getFileIcon: { minArgs: 1, maxArgs: 2 },
                  open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  pause: { minArgs: 1, maxArgs: 1 },
                  removeFile: { minArgs: 1, maxArgs: 1 },
                  resume: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                extension: {
                  isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                  isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                },
                history: {
                  addUrl: { minArgs: 1, maxArgs: 1 },
                  deleteAll: { minArgs: 0, maxArgs: 0 },
                  deleteRange: { minArgs: 1, maxArgs: 1 },
                  deleteUrl: { minArgs: 1, maxArgs: 1 },
                  getVisits: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                },
                i18n: {
                  detectLanguage: { minArgs: 1, maxArgs: 1 },
                  getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                },
                identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                management: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getSelf: { minArgs: 0, maxArgs: 0 },
                  setEnabled: { minArgs: 2, maxArgs: 2 },
                  uninstallSelf: { minArgs: 0, maxArgs: 1 },
                },
                notifications: {
                  clear: { minArgs: 1, maxArgs: 1 },
                  create: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                pageAction: {
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                permissions: {
                  contains: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  request: { minArgs: 1, maxArgs: 1 },
                },
                runtime: {
                  getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                  getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                  openOptionsPage: { minArgs: 0, maxArgs: 0 },
                  requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                  sendMessage: { minArgs: 1, maxArgs: 3 },
                  sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                  setUninstallURL: { minArgs: 1, maxArgs: 1 },
                },
                sessions: {
                  getDevices: { minArgs: 0, maxArgs: 1 },
                  getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                  restore: { minArgs: 0, maxArgs: 1 },
                },
                storage: {
                  local: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                  managed: {
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  },
                  sync: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                },
                tabs: {
                  captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                  create: { minArgs: 1, maxArgs: 1 },
                  detectLanguage: { minArgs: 0, maxArgs: 1 },
                  discard: { minArgs: 0, maxArgs: 1 },
                  duplicate: { minArgs: 1, maxArgs: 1 },
                  executeScript: { minArgs: 1, maxArgs: 2 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 0 },
                  getZoom: { minArgs: 0, maxArgs: 1 },
                  getZoomSettings: { minArgs: 0, maxArgs: 1 },
                  goBack: { minArgs: 0, maxArgs: 1 },
                  goForward: { minArgs: 0, maxArgs: 1 },
                  highlight: { minArgs: 1, maxArgs: 1 },
                  insertCSS: { minArgs: 1, maxArgs: 2 },
                  move: { minArgs: 2, maxArgs: 2 },
                  query: { minArgs: 1, maxArgs: 1 },
                  reload: { minArgs: 0, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeCSS: { minArgs: 1, maxArgs: 2 },
                  sendMessage: { minArgs: 2, maxArgs: 3 },
                  setZoom: { minArgs: 1, maxArgs: 2 },
                  setZoomSettings: { minArgs: 1, maxArgs: 2 },
                  update: { minArgs: 1, maxArgs: 2 },
                },
                topSites: { get: { minArgs: 0, maxArgs: 0 } },
                webNavigation: {
                  getAllFrames: { minArgs: 1, maxArgs: 1 },
                  getFrame: { minArgs: 1, maxArgs: 1 },
                },
                webRequest: {
                  handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                },
                windows: {
                  create: { minArgs: 0, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 1 },
                  getLastFocused: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
              };
              if (Object.keys(n).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class s extends WeakMap {
                constructor(x, S = void 0) {
                  super(S), (this.createItem = x);
                }
                get(x) {
                  return (
                    this.has(x) || this.set(x, this.createItem(x)), super.get(x)
                  );
                }
              }
              let i = (_) =>
                  _ && typeof _ == "object" && typeof _.then == "function",
                l =
                  (_, x) =>
                  (...S) => {
                    o.runtime.lastError
                      ? _.reject(new Error(o.runtime.lastError.message))
                      : x.singleCallbackArg ||
                        (S.length <= 1 && x.singleCallbackArg !== !1)
                      ? _.resolve(S[0])
                      : _.resolve(S);
                  },
                c = (_) => (_ == 1 ? "argument" : "arguments"),
                m = (_, x) =>
                  function (k, ...w) {
                    if (w.length < x.minArgs)
                      throw new Error(
                        `Expected at least ${x.minArgs} ${c(
                          x.minArgs
                        )} for ${_}(), got ${w.length}`
                      );
                    if (w.length > x.maxArgs)
                      throw new Error(
                        `Expected at most ${x.maxArgs} ${c(
                          x.maxArgs
                        )} for ${_}(), got ${w.length}`
                      );
                    return new Promise((D, I) => {
                      if (x.fallbackToNoCallback)
                        try {
                          k[_](...w, l({ resolve: D, reject: I }, x));
                        } catch (C) {
                          console.warn(
                            `${_} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            C
                          ),
                            k[_](...w),
                            (x.fallbackToNoCallback = !1),
                            (x.noCallback = !0),
                            D();
                        }
                      else
                        x.noCallback
                          ? (k[_](...w), D())
                          : k[_](...w, l({ resolve: D, reject: I }, x));
                    });
                  },
                a = (_, x, S) =>
                  new Proxy(x, {
                    apply(k, w, D) {
                      return S.call(w, _, ...D);
                    },
                  }),
                f = Function.call.bind(Object.prototype.hasOwnProperty),
                u = (_, x = {}, S = {}) => {
                  let k = Object.create(null),
                    w = {
                      has(I, C) {
                        return C in _ || C in k;
                      },
                      get(I, C, P) {
                        if (C in k) return k[C];
                        if (!(C in _)) return;
                        let L = _[C];
                        if (typeof L == "function")
                          if (typeof x[C] == "function") L = a(_, _[C], x[C]);
                          else if (f(S, C)) {
                            let B = m(C, S[C]);
                            L = a(_, _[C], B);
                          } else L = L.bind(_);
                        else if (
                          typeof L == "object" &&
                          L !== null &&
                          (f(x, C) || f(S, C))
                        )
                          L = u(L, x[C], S[C]);
                        else if (f(S, "*")) L = u(L, x[C], S["*"]);
                        else
                          return (
                            Object.defineProperty(k, C, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return _[C];
                              },
                              set(B) {
                                _[C] = B;
                              },
                            }),
                            L
                          );
                        return (k[C] = L), L;
                      },
                      set(I, C, P, L) {
                        return C in k ? (k[C] = P) : (_[C] = P), !0;
                      },
                      defineProperty(I, C, P) {
                        return Reflect.defineProperty(k, C, P);
                      },
                      deleteProperty(I, C) {
                        return Reflect.deleteProperty(k, C);
                      },
                    },
                    D = Object.create(_);
                  return new Proxy(D, w);
                },
                p = (_) => ({
                  addListener(x, S, ...k) {
                    x.addListener(_.get(S), ...k);
                  },
                  hasListener(x, S) {
                    return x.hasListener(_.get(S));
                  },
                  removeListener(x, S) {
                    x.removeListener(_.get(S));
                  },
                }),
                g = new s((_) =>
                  typeof _ != "function"
                    ? _
                    : function (S) {
                        let k = u(
                          S,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        _(k);
                      }
                ),
                y = new s((_) =>
                  typeof _ != "function"
                    ? _
                    : function (S, k, w) {
                        let D = !1,
                          I,
                          C = new Promise((K) => {
                            I = function (q) {
                              (D = !0), K(q);
                            };
                          }),
                          P;
                        try {
                          P = _(S, k, I);
                        } catch (K) {
                          P = Promise.reject(K);
                        }
                        let L = P !== !0 && i(P);
                        if (P !== !0 && !L && !D) return !1;
                        let B = (K) => {
                          K.then(
                            (q) => {
                              w(q);
                            },
                            (q) => {
                              let $;
                              q &&
                              (q instanceof Error ||
                                typeof q.message == "string")
                                ? ($ = q.message)
                                : ($ = "An unexpected error occurred"),
                                w({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: $,
                                });
                            }
                          ).catch((q) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              q
                            );
                          });
                        };
                        return B(L ? P : C), !0;
                      }
                ),
                h = ({ reject: _, resolve: x }, S) => {
                  o.runtime.lastError
                    ? o.runtime.lastError.message === e
                      ? x()
                      : _(new Error(o.runtime.lastError.message))
                    : S && S.__mozWebExtensionPolyfillReject__
                    ? _(new Error(S.message))
                    : x(S);
                },
                A = (_, x, S, ...k) => {
                  if (k.length < x.minArgs)
                    throw new Error(
                      `Expected at least ${x.minArgs} ${c(
                        x.minArgs
                      )} for ${_}(), got ${k.length}`
                    );
                  if (k.length > x.maxArgs)
                    throw new Error(
                      `Expected at most ${x.maxArgs} ${c(
                        x.maxArgs
                      )} for ${_}(), got ${k.length}`
                    );
                  return new Promise((w, D) => {
                    let I = h.bind(null, { resolve: w, reject: D });
                    k.push(I), S.sendMessage(...k);
                  });
                },
                E = {
                  devtools: { network: { onRequestFinished: p(g) } },
                  runtime: {
                    onMessage: p(y),
                    onMessageExternal: p(y),
                    sendMessage: A.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: A.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                v = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (n.privacy = {
                  network: { "*": v },
                  services: { "*": v },
                  websites: { "*": v },
                }),
                u(o, E, n)
              );
            };
          t.exports = r(chrome);
        } else t.exports = globalThis.browser;
      }
    );
  });
  var ze,
    b,
    $r,
    Un,
    Me,
    Hr,
    Jr,
    st = {},
    Zr = [],
    Fn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function le(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function Vr(t) {
    var e = t.parentNode;
    e && e.removeChild(t);
  }
  function te(t, e, r) {
    var o,
      n,
      s,
      i = {};
    for (s in e)
      s == "key" ? (o = e[s]) : s == "ref" ? (n = e[s]) : (i[s] = e[s]);
    if (
      (arguments.length > 2 &&
        (i.children = arguments.length > 3 ? ze.call(arguments, 2) : r),
      typeof t == "function" && t.defaultProps != null)
    )
      for (s in t.defaultProps) i[s] === void 0 && (i[s] = t.defaultProps[s]);
    return Ue(t, i, o, n, null);
  }
  function Ue(t, e, r, o, n) {
    var s = {
      type: t,
      props: e,
      key: r,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: n ?? ++$r,
    };
    return n == null && b.vnode != null && b.vnode(s), s;
  }
  function Mt() {
    return { current: null };
  }
  function re(t) {
    return t.children;
  }
  function X(t, e) {
    (this.props = t), (this.context = e);
  }
  function Fe(t, e) {
    if (e == null) return t.__ ? Fe(t.__, t.__.__k.indexOf(t) + 1) : null;
    for (var r; e < t.__k.length; e++)
      if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
    return typeof t.type == "function" ? Fe(t) : null;
  }
  function Kr(t) {
    var e, r;
    if ((t = t.__) != null && t.__c != null) {
      for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
        if ((r = t.__k[e]) != null && r.__e != null) {
          t.__e = t.__c.base = r.__e;
          break;
        }
      return Kr(t);
    }
  }
  function It(t) {
    ((!t.__d && (t.__d = !0) && Me.push(t) && !it.__r++) ||
      Hr !== b.debounceRendering) &&
      ((Hr = b.debounceRendering) || setTimeout)(it);
  }
  function it() {
    for (var t; (it.__r = Me.length); )
      (t = Me.sort(function (e, r) {
        return e.__v.__b - r.__v.__b;
      })),
        (Me = []),
        t.some(function (e) {
          var r, o, n, s, i, l;
          e.__d &&
            ((i = (s = (r = e).__v).__e),
            (l = r.__P) &&
              ((o = []),
              ((n = le({}, s)).__v = s.__v + 1),
              Ut(
                l,
                s,
                n,
                r.__n,
                l.ownerSVGElement !== void 0,
                s.__h != null ? [i] : null,
                o,
                i ?? Fe(s),
                s.__h
              ),
              eo(o, s),
              s.__e != i && Kr(s)));
        });
  }
  function Qr(t, e, r, o, n, s, i, l, c, m) {
    var a,
      f,
      u,
      p,
      g,
      y,
      h,
      A = (o && o.__k) || Zr,
      E = A.length;
    for (r.__k = [], a = 0; a < e.length; a++)
      if (
        (p = r.__k[a] =
          (p = e[a]) == null || typeof p == "boolean"
            ? null
            : typeof p == "string" ||
              typeof p == "number" ||
              typeof p == "bigint"
            ? Ue(null, p, null, null, p)
            : Array.isArray(p)
            ? Ue(re, { children: p }, null, null, null)
            : p.__b > 0
            ? Ue(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v)
            : p) != null
      ) {
        if (
          ((p.__ = r),
          (p.__b = r.__b + 1),
          (u = A[a]) === null || (u && p.key == u.key && p.type === u.type))
        )
          A[a] = void 0;
        else
          for (f = 0; f < E; f++) {
            if ((u = A[f]) && p.key == u.key && p.type === u.type) {
              A[f] = void 0;
              break;
            }
            u = null;
          }
        Ut(t, p, (u = u || st), n, s, i, l, c, m),
          (g = p.__e),
          (f = p.ref) &&
            u.ref != f &&
            (h || (h = []),
            u.ref && h.push(u.ref, null, p),
            h.push(f, p.__c || g, p)),
          g != null
            ? (y == null && (y = g),
              typeof p.type == "function" && p.__k === u.__k
                ? (p.__d = c = Xr(p, c, t))
                : (c = Yr(t, p, u, A, g, c)),
              typeof r.type == "function" && (r.__d = c))
            : c && u.__e == c && c.parentNode != t && (c = Fe(u));
      }
    for (r.__e = y, a = E; a--; ) A[a] != null && ro(A[a], A[a]);
    if (h) for (a = 0; a < h.length; a++) to(h[a], h[++a], h[++a]);
  }
  function Xr(t, e, r) {
    for (var o, n = t.__k, s = 0; n && s < n.length; s++)
      (o = n[s]) &&
        ((o.__ = t),
        (e =
          typeof o.type == "function"
            ? Xr(o, e, r)
            : Yr(r, o, o, n, o.__e, e)));
    return e;
  }
  function ae(t, e) {
    return (
      (e = e || []),
      t == null ||
        typeof t == "boolean" ||
        (Array.isArray(t)
          ? t.some(function (r) {
              ae(r, e);
            })
          : e.push(t)),
      e
    );
  }
  function Yr(t, e, r, o, n, s) {
    var i, l, c;
    if (e.__d !== void 0) (i = e.__d), (e.__d = void 0);
    else if (r == null || n != s || n.parentNode == null)
      e: if (s == null || s.parentNode !== t) t.appendChild(n), (i = null);
      else {
        for (l = s, c = 0; (l = l.nextSibling) && c < o.length; c += 1)
          if (l == n) break e;
        t.insertBefore(n, s), (i = s);
      }
    return i !== void 0 ? i : n.nextSibling;
  }
  function zn(t, e, r, o, n) {
    var s;
    for (s in r)
      s === "children" || s === "key" || s in e || lt(t, s, null, r[s], o);
    for (s in e)
      (n && typeof e[s] != "function") ||
        s === "children" ||
        s === "key" ||
        s === "value" ||
        s === "checked" ||
        r[s] === e[s] ||
        lt(t, s, e[s], r[s], o);
  }
  function Wr(t, e, r) {
    e[0] === "-"
      ? t.setProperty(e, r)
      : (t[e] =
          r == null ? "" : typeof r != "number" || Fn.test(e) ? r : r + "px");
  }
  function lt(t, e, r, o, n) {
    var s;
    e: if (e === "style")
      if (typeof r == "string") t.style.cssText = r;
      else {
        if ((typeof o == "string" && (t.style.cssText = o = ""), o))
          for (e in o) (r && e in r) || Wr(t.style, e, "");
        if (r) for (e in r) (o && r[e] === o[e]) || Wr(t.style, e, r[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      (s = e !== (e = e.replace(/Capture$/, ""))),
        (e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2)),
        t.l || (t.l = {}),
        (t.l[e + s] = r),
        r
          ? o || t.addEventListener(e, s ? qr : Gr, s)
          : t.removeEventListener(e, s ? qr : Gr, s);
    else if (e !== "dangerouslySetInnerHTML") {
      if (n) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        e !== "href" &&
        e !== "list" &&
        e !== "form" &&
        e !== "tabIndex" &&
        e !== "download" &&
        e in t
      )
        try {
          t[e] = r ?? "";
          break e;
        } catch {}
      typeof r == "function" ||
        (r == null || (r === !1 && e.indexOf("-") == -1)
          ? t.removeAttribute(e)
          : t.setAttribute(e, r));
    }
  }
  function Gr(t) {
    this.l[t.type + !1](b.event ? b.event(t) : t);
  }
  function qr(t) {
    this.l[t.type + !0](b.event ? b.event(t) : t);
  }
  function Ut(t, e, r, o, n, s, i, l, c) {
    var m,
      a,
      f,
      u,
      p,
      g,
      y,
      h,
      A,
      E,
      v,
      _,
      x,
      S,
      k,
      w = e.type;
    if (e.constructor !== void 0) return null;
    r.__h != null &&
      ((c = r.__h), (l = e.__e = r.__e), (e.__h = null), (s = [l])),
      (m = b.__b) && m(e);
    try {
      e: if (typeof w == "function") {
        if (
          ((h = e.props),
          (A = (m = w.contextType) && o[m.__c]),
          (E = m ? (A ? A.props.value : m.__) : o),
          r.__c
            ? (y = (a = e.__c = r.__c).__ = a.__E)
            : ("prototype" in w && w.prototype.render
                ? (e.__c = a = new w(h, E))
                : ((e.__c = a = new X(h, E)),
                  (a.constructor = w),
                  (a.render = Wn)),
              A && A.sub(a),
              (a.props = h),
              a.state || (a.state = {}),
              (a.context = E),
              (a.__n = o),
              (f = a.__d = !0),
              (a.__h = []),
              (a._sb = [])),
          a.__s == null && (a.__s = a.state),
          w.getDerivedStateFromProps != null &&
            (a.__s == a.state && (a.__s = le({}, a.__s)),
            le(a.__s, w.getDerivedStateFromProps(h, a.__s))),
          (u = a.props),
          (p = a.state),
          f)
        )
          w.getDerivedStateFromProps == null &&
            a.componentWillMount != null &&
            a.componentWillMount(),
            a.componentDidMount != null && a.__h.push(a.componentDidMount);
        else {
          if (
            (w.getDerivedStateFromProps == null &&
              h !== u &&
              a.componentWillReceiveProps != null &&
              a.componentWillReceiveProps(h, E),
            (!a.__e &&
              a.shouldComponentUpdate != null &&
              a.shouldComponentUpdate(h, a.__s, E) === !1) ||
              e.__v === r.__v)
          ) {
            for (
              a.props = h,
                a.state = a.__s,
                e.__v !== r.__v && (a.__d = !1),
                a.__v = e,
                e.__e = r.__e,
                e.__k = r.__k,
                e.__k.forEach(function (D) {
                  D && (D.__ = e);
                }),
                v = 0;
              v < a._sb.length;
              v++
            )
              a.__h.push(a._sb[v]);
            (a._sb = []), a.__h.length && i.push(a);
            break e;
          }
          a.componentWillUpdate != null && a.componentWillUpdate(h, a.__s, E),
            a.componentDidUpdate != null &&
              a.__h.push(function () {
                a.componentDidUpdate(u, p, g);
              });
        }
        if (
          ((a.context = E),
          (a.props = h),
          (a.__v = e),
          (a.__P = t),
          (_ = b.__r),
          (x = 0),
          "prototype" in w && w.prototype.render)
        ) {
          for (
            a.state = a.__s,
              a.__d = !1,
              _ && _(e),
              m = a.render(a.props, a.state, a.context),
              S = 0;
            S < a._sb.length;
            S++
          )
            a.__h.push(a._sb[S]);
          a._sb = [];
        } else
          do
            (a.__d = !1),
              _ && _(e),
              (m = a.render(a.props, a.state, a.context)),
              (a.state = a.__s);
          while (a.__d && ++x < 25);
        (a.state = a.__s),
          a.getChildContext != null && (o = le(le({}, o), a.getChildContext())),
          f ||
            a.getSnapshotBeforeUpdate == null ||
            (g = a.getSnapshotBeforeUpdate(u, p)),
          (k =
            m != null && m.type === re && m.key == null ? m.props.children : m),
          Qr(t, Array.isArray(k) ? k : [k], e, r, o, n, s, i, l, c),
          (a.base = e.__e),
          (e.__h = null),
          a.__h.length && i.push(a),
          y && (a.__E = a.__ = null),
          (a.__e = !1);
      } else
        s == null && e.__v === r.__v
          ? ((e.__k = r.__k), (e.__e = r.__e))
          : (e.__e = Hn(r.__e, e, r, o, n, s, i, c));
      (m = b.diffed) && m(e);
    } catch (D) {
      (e.__v = null),
        (c || s != null) &&
          ((e.__e = l), (e.__h = !!c), (s[s.indexOf(l)] = null)),
        b.__e(D, e, r);
    }
  }
  function eo(t, e) {
    b.__c && b.__c(e, t),
      t.some(function (r) {
        try {
          (t = r.__h),
            (r.__h = []),
            t.some(function (o) {
              o.call(r);
            });
        } catch (o) {
          b.__e(o, r.__v);
        }
      });
  }
  function Hn(t, e, r, o, n, s, i, l) {
    var c,
      m,
      a,
      f = r.props,
      u = e.props,
      p = e.type,
      g = 0;
    if ((p === "svg" && (n = !0), s != null)) {
      for (; g < s.length; g++)
        if (
          (c = s[g]) &&
          "setAttribute" in c == !!p &&
          (p ? c.localName === p : c.nodeType === 3)
        ) {
          (t = c), (s[g] = null);
          break;
        }
    }
    if (t == null) {
      if (p === null) return document.createTextNode(u);
      (t = n
        ? document.createElementNS("http://www.w3.org/2000/svg", p)
        : document.createElement(p, u.is && u)),
        (s = null),
        (l = !1);
    }
    if (p === null) f === u || (l && t.data === u) || (t.data = u);
    else {
      if (
        ((s = s && ze.call(t.childNodes)),
        (m = (f = r.props || st).dangerouslySetInnerHTML),
        (a = u.dangerouslySetInnerHTML),
        !l)
      ) {
        if (s != null)
          for (f = {}, g = 0; g < t.attributes.length; g++)
            f[t.attributes[g].name] = t.attributes[g].value;
        (a || m) &&
          ((a && ((m && a.__html == m.__html) || a.__html === t.innerHTML)) ||
            (t.innerHTML = (a && a.__html) || ""));
      }
      if ((zn(t, u, f, n, l), a)) e.__k = [];
      else if (
        ((g = e.props.children),
        Qr(
          t,
          Array.isArray(g) ? g : [g],
          e,
          r,
          o,
          n && p !== "foreignObject",
          s,
          i,
          s ? s[0] : r.__k && Fe(r, 0),
          l
        ),
        s != null)
      )
        for (g = s.length; g--; ) s[g] != null && Vr(s[g]);
      l ||
        ("value" in u &&
          (g = u.value) !== void 0 &&
          (g !== t.value ||
            (p === "progress" && !g) ||
            (p === "option" && g !== f.value)) &&
          lt(t, "value", g, f.value, !1),
        "checked" in u &&
          (g = u.checked) !== void 0 &&
          g !== t.checked &&
          lt(t, "checked", g, f.checked, !1));
    }
    return t;
  }
  function to(t, e, r) {
    try {
      typeof t == "function" ? t(e) : (t.current = e);
    } catch (o) {
      b.__e(o, r);
    }
  }
  function ro(t, e, r) {
    var o, n;
    if (
      (b.unmount && b.unmount(t),
      (o = t.ref) && ((o.current && o.current !== t.__e) || to(o, null, e)),
      (o = t.__c) != null)
    ) {
      if (o.componentWillUnmount)
        try {
          o.componentWillUnmount();
        } catch (s) {
          b.__e(s, e);
        }
      (o.base = o.__P = null), (t.__c = void 0);
    }
    if ((o = t.__k))
      for (n = 0; n < o.length; n++)
        o[n] && ro(o[n], e, r || typeof t.type != "function");
    r || t.__e == null || Vr(t.__e), (t.__ = t.__e = t.__d = void 0);
  }
  function Wn(t, e, r) {
    return this.constructor(t, r);
  }
  function me(t, e, r) {
    var o, n, s;
    b.__ && b.__(t, e),
      (n = (o = typeof r == "function") ? null : (r && r.__k) || e.__k),
      (s = []),
      Ut(
        e,
        (t = ((!o && r) || e).__k = te(re, null, [t])),
        n || st,
        st,
        e.ownerSVGElement !== void 0,
        !o && r ? [r] : n ? null : e.firstChild ? ze.call(e.childNodes) : null,
        s,
        !o && r ? r : n ? n.__e : e.firstChild,
        o
      ),
      eo(s, t);
  }
  function Ft(t, e) {
    me(t, e, Ft);
  }
  function oo(t, e, r) {
    var o,
      n,
      s,
      i = le({}, t.props);
    for (s in e)
      s == "key" ? (o = e[s]) : s == "ref" ? (n = e[s]) : (i[s] = e[s]);
    return (
      arguments.length > 2 &&
        (i.children = arguments.length > 3 ? ze.call(arguments, 2) : r),
      Ue(t.type, i, o || t.key, n || t.ref, null)
    );
  }
  function zt(t, e) {
    var r = {
      __c: (e = "__cC" + Jr++),
      __: t,
      Consumer: function (o, n) {
        return o.children(n);
      },
      Provider: function (o) {
        var n, s;
        return (
          this.getChildContext ||
            ((n = []),
            ((s = {})[e] = this),
            (this.getChildContext = function () {
              return s;
            }),
            (this.shouldComponentUpdate = function (i) {
              this.props.value !== i.value && n.some(It);
            }),
            (this.sub = function (i) {
              n.push(i);
              var l = i.componentWillUnmount;
              i.componentWillUnmount = function () {
                n.splice(n.indexOf(i), 1), l && l.call(i);
              };
            })),
          o.children
        );
      },
    };
    return (r.Provider.__ = r.Consumer.contextType = r);
  }
  (ze = Zr.slice),
    (b = {
      __e: function (t, e, r, o) {
        for (var n, s, i; (e = e.__); )
          if ((n = e.__c) && !n.__)
            try {
              if (
                ((s = n.constructor) &&
                  s.getDerivedStateFromError != null &&
                  (n.setState(s.getDerivedStateFromError(t)), (i = n.__d)),
                n.componentDidCatch != null &&
                  (n.componentDidCatch(t, o || {}), (i = n.__d)),
                i)
              )
                return (n.__E = n);
            } catch (l) {
              t = l;
            }
        throw t;
      },
    }),
    ($r = 0),
    (Un = function (t) {
      return t != null && t.constructor === void 0;
    }),
    (X.prototype.setState = function (t, e) {
      var r;
      (r =
        this.__s != null && this.__s !== this.state
          ? this.__s
          : (this.__s = le({}, this.state))),
        typeof t == "function" && (t = t(le({}, r), this.props)),
        t && le(r, t),
        t != null && this.__v && (e && this._sb.push(e), It(this));
    }),
    (X.prototype.forceUpdate = function (t) {
      this.__v && ((this.__e = !0), t && this.__h.push(t), It(this));
    }),
    (X.prototype.render = re),
    (Me = []),
    (it.__r = 0),
    (Jr = 0);
  function N() {
    return (
      (N = Object.assign
        ? Object.assign.bind()
        : function (t) {
            for (var e = 1; e < arguments.length; e++) {
              var r = arguments[e];
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
            }
            return t;
          }),
      N.apply(this, arguments)
    );
  }
  function Ht(t) {
    if (Array.isArray(t)) return t;
  }
  function Wt(t, e) {
    var r =
      t == null
        ? null
        : (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
    if (r != null) {
      var o,
        n,
        s,
        i,
        l = [],
        c = !0,
        m = !1;
      try {
        if (((s = (r = r.call(t)).next), e === 0)) {
          if (Object(r) !== r) return;
          c = !1;
        } else
          for (
            ;
            !(c = (o = s.call(r)).done) && (l.push(o.value), l.length !== e);
            c = !0
          );
      } catch (a) {
        (m = !0), (n = a);
      } finally {
        try {
          if (!c && r.return != null && ((i = r.return()), Object(i) !== i))
            return;
        } finally {
          if (m) throw n;
        }
      }
      return l;
    }
  }
  function ut(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
    return o;
  }
  function Gt(t, e) {
    if (!!t) {
      if (typeof t == "string") return ut(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (
        (r === "Object" && t.constructor && (r = t.constructor.name),
        r === "Map" || r === "Set")
      )
        return Array.from(t);
      if (
        r === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return ut(t, e);
    }
  }
  function qt() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function O(t, e) {
    return Ht(t) || Wt(t, e) || Gt(t, e) || qt();
  }
  function $t(t, e) {
    if (t == null) return {};
    var r = {},
      o = Object.keys(t),
      n,
      s;
    for (s = 0; s < o.length; s++)
      (n = o[s]), !(e.indexOf(n) >= 0) && (r[n] = t[n]);
    return r;
  }
  function W(t, e) {
    if (t == null) return {};
    var r = $t(t, e),
      o,
      n;
    if (Object.getOwnPropertySymbols) {
      var s = Object.getOwnPropertySymbols(t);
      for (n = 0; n < s.length; n++)
        (o = s[n]),
          !(e.indexOf(o) >= 0) &&
            (!Object.prototype.propertyIsEnumerable.call(t, o) ||
              (r[o] = t[o]));
    }
    return r;
  }
  var _e,
    H,
    Jt,
    ao,
    Ce = 0,
    fo = [],
    ct = [],
    no = b.__b,
    so = b.__r,
    io = b.diffed,
    lo = b.__c,
    uo = b.unmount;
  function Te(t, e) {
    b.__h && b.__h(H, t, Ce || e), (Ce = 0);
    var r = H.__H || (H.__H = { __: [], __h: [] });
    return t >= r.__.length && r.__.push({ __V: ct }), r.__[t];
  }
  function M(t) {
    return (Ce = 1), Vt(ho, t);
  }
  function Vt(t, e, r) {
    var o = Te(_e++, 2);
    if (
      ((o.t = t),
      !o.__c &&
        ((o.__ = [
          r ? r(e) : ho(void 0, e),
          function (s) {
            var i = o.__N ? o.__N[0] : o.__[0],
              l = o.t(i, s);
            i !== l && ((o.__N = [l, o.__[1]]), o.__c.setState({}));
          },
        ]),
        (o.__c = H),
        !H.u))
    ) {
      H.u = !0;
      var n = H.shouldComponentUpdate;
      H.shouldComponentUpdate = function (s, i, l) {
        if (!o.__c.__H) return !0;
        var c = o.__c.__H.__.filter(function (a) {
          return a.__c;
        });
        if (
          c.every(function (a) {
            return !a.__N;
          })
        )
          return !n || n.call(this, s, i, l);
        var m = !1;
        return (
          c.forEach(function (a) {
            if (a.__N) {
              var f = a.__[0];
              (a.__ = a.__N), (a.__N = void 0), f !== a.__[0] && (m = !0);
            }
          }),
          !(!m && o.__c.props === s) && (!n || n.call(this, s, i, l))
        );
      };
    }
    return o.__N || o.__;
  }
  function U(t, e) {
    var r = Te(_e++, 3);
    !b.__s && Kt(r.__H, e) && ((r.__ = t), (r.i = e), H.__H.__h.push(r));
  }
  function He(t, e) {
    var r = Te(_e++, 4);
    !b.__s && Kt(r.__H, e) && ((r.__ = t), (r.i = e), H.__h.push(r));
  }
  function pe(t) {
    return (
      (Ce = 5),
      j(function () {
        return { current: t };
      }, [])
    );
  }
  function mt(t, e, r) {
    (Ce = 6),
      He(
        function () {
          return typeof t == "function"
            ? (t(e()),
              function () {
                return t(null);
              })
            : t
            ? ((t.current = e()),
              function () {
                return (t.current = null);
              })
            : void 0;
        },
        r == null ? r : r.concat(t)
      );
  }
  function j(t, e) {
    var r = Te(_e++, 7);
    return Kt(r.__H, e) ? ((r.__V = t()), (r.i = e), (r.__h = t), r.__V) : r.__;
  }
  function We(t, e) {
    return (
      (Ce = 8),
      j(function () {
        return t;
      }, e)
    );
  }
  function mo(t) {
    var e = H.context[t.__c],
      r = Te(_e++, 9);
    return (
      (r.c = t),
      e ? (r.__ == null && ((r.__ = !0), e.sub(H)), e.props.value) : t.__
    );
  }
  function po(t, e) {
    b.useDebugValue && b.useDebugValue(e ? e(t) : t);
  }
  function go() {
    var t = Te(_e++, 11);
    if (!t.__) {
      for (var e = H.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
      var r = e.__m || (e.__m = [0, 0]);
      t.__ = "P" + r[0] + "-" + r[1]++;
    }
    return t.__;
  }
  function Gn() {
    for (var t; (t = fo.shift()); )
      if (t.__P && t.__H)
        try {
          t.__H.__h.forEach(ft), t.__H.__h.forEach(Zt), (t.__H.__h = []);
        } catch (e) {
          (t.__H.__h = []), b.__e(e, t.__v);
        }
  }
  (b.__b = function (t) {
    (H = null), no && no(t);
  }),
    (b.__r = function (t) {
      so && so(t), (_e = 0);
      var e = (H = t.__c).__H;
      e &&
        (Jt === H
          ? ((e.__h = []),
            (H.__h = []),
            e.__.forEach(function (r) {
              r.__N && (r.__ = r.__N), (r.__V = ct), (r.__N = r.i = void 0);
            }))
          : (e.__h.forEach(ft), e.__h.forEach(Zt), (e.__h = []))),
        (Jt = H);
    }),
    (b.diffed = function (t) {
      io && io(t);
      var e = t.__c;
      e &&
        e.__H &&
        (e.__H.__h.length &&
          ((fo.push(e) !== 1 && ao === b.requestAnimationFrame) ||
            ((ao = b.requestAnimationFrame) || qn)(Gn)),
        e.__H.__.forEach(function (r) {
          r.i && (r.__H = r.i),
            r.__V !== ct && (r.__ = r.__V),
            (r.i = void 0),
            (r.__V = ct);
        })),
        (Jt = H = null);
    }),
    (b.__c = function (t, e) {
      e.some(function (r) {
        try {
          r.__h.forEach(ft),
            (r.__h = r.__h.filter(function (o) {
              return !o.__ || Zt(o);
            }));
        } catch (o) {
          e.some(function (n) {
            n.__h && (n.__h = []);
          }),
            (e = []),
            b.__e(o, r.__v);
        }
      }),
        lo && lo(t, e);
    }),
    (b.unmount = function (t) {
      uo && uo(t);
      var e,
        r = t.__c;
      r &&
        r.__H &&
        (r.__H.__.forEach(function (o) {
          try {
            ft(o);
          } catch (n) {
            e = n;
          }
        }),
        (r.__H = void 0),
        e && b.__e(e, r.__v));
    });
  var co = typeof requestAnimationFrame == "function";
  function qn(t) {
    var e,
      r = function () {
        clearTimeout(o), co && cancelAnimationFrame(e), setTimeout(t);
      },
      o = setTimeout(r, 100);
    co && (e = requestAnimationFrame(r));
  }
  function ft(t) {
    var e = H,
      r = t.__c;
    typeof r == "function" && ((t.__c = void 0), r()), (H = e);
  }
  function Zt(t) {
    var e = H;
    (t.__c = t.__()), (H = e);
  }
  function Kt(t, e) {
    return (
      !t ||
      t.length !== e.length ||
      e.some(function (r, o) {
        return r !== t[o];
      })
    );
  }
  function ho(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ko(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function Xt(t, e) {
    for (var r in t) if (r !== "__source" && !(r in e)) return !0;
    for (var o in e) if (o !== "__source" && t[o] !== e[o]) return !0;
    return !1;
  }
  function Qt(t, e) {
    return (t === e && (t !== 0 || 1 / t == 1 / e)) || (t != t && e != e);
  }
  function Yt(t) {
    this.props = t;
  }
  function $n(t, e) {
    function r(n) {
      var s = this.props.ref,
        i = s == n.ref;
      return (
        !i && s && (s.call ? s(null) : (s.current = null)),
        e ? !e(this.props, n) || !i : Xt(this.props, n)
      );
    }
    function o(n) {
      return (this.shouldComponentUpdate = r), te(t, n);
    }
    return (
      (o.displayName = "Memo(" + (t.displayName || t.name) + ")"),
      (o.prototype.isReactComponent = !0),
      (o.__f = !0),
      o
    );
  }
  ((Yt.prototype = new X()).isPureReactComponent = !0),
    (Yt.prototype.shouldComponentUpdate = function (t, e) {
      return Xt(this.props, t) || Xt(this.state, e);
    });
  var _o = b.__b;
  b.__b = function (t) {
    t.type && t.type.__f && t.ref && ((t.props.ref = t.ref), (t.ref = null)),
      _o && _o(t);
  };
  var Jn =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
    3911;
  function er(t) {
    function e(r) {
      var o = ko({}, r);
      return delete o.ref, t(o, r.ref || null);
    }
    return (
      (e.$$typeof = Jn),
      (e.render = e),
      (e.prototype.isReactComponent = e.__f = !0),
      (e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")"),
      e
    );
  }
  var xo = function (t, e) {
      return t == null ? null : ae(ae(t).map(e));
    },
    Zn = {
      map: xo,
      forEach: xo,
      count: function (t) {
        return t ? ae(t).length : 0;
      },
      only: function (t) {
        var e = ae(t);
        if (e.length !== 1) throw "Children.only";
        return e[0];
      },
      toArray: ae,
    },
    Vn = b.__e;
  b.__e = function (t, e, r, o) {
    if (t.then) {
      for (var n, s = e; (s = s.__); )
        if ((n = s.__c) && n.__c)
          return (
            e.__e == null && ((e.__e = r.__e), (e.__k = r.__k)), n.__c(t, e)
          );
    }
    Vn(t, e, r, o);
  };
  var vo = b.unmount;
  function Co(t, e, r) {
    return (
      t &&
        (t.__c &&
          t.__c.__H &&
          (t.__c.__H.__.forEach(function (o) {
            typeof o.__c == "function" && o.__c();
          }),
          (t.__c.__H = null)),
        (t = ko({}, t)).__c != null &&
          (t.__c.__P === r && (t.__c.__P = e), (t.__c = null)),
        (t.__k =
          t.__k &&
          t.__k.map(function (o) {
            return Co(o, e, r);
          }))),
      t
    );
  }
  function To(t, e, r) {
    return (
      t &&
        ((t.__v = null),
        (t.__k =
          t.__k &&
          t.__k.map(function (o) {
            return To(o, e, r);
          })),
        t.__c &&
          t.__c.__P === e &&
          (t.__e && r.insertBefore(t.__e, t.__d),
          (t.__c.__e = !0),
          (t.__c.__P = r))),
      t
    );
  }
  function pt() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function Ro(t) {
    var e = t.__.__c;
    return e && e.__a && e.__a(t);
  }
  function Kn(t) {
    var e, r, o;
    function n(s) {
      if (
        (e ||
          (e = t()).then(
            function (i) {
              r = i.default || i;
            },
            function (i) {
              o = i;
            }
          ),
        o)
      )
        throw o;
      if (!r) throw e;
      return te(r, s);
    }
    return (n.displayName = "Lazy"), (n.__f = !0), n;
  }
  function Ge() {
    (this.u = null), (this.o = null);
  }
  (b.unmount = function (t) {
    var e = t.__c;
    e && e.__R && e.__R(), e && t.__h === !0 && (t.type = null), vo && vo(t);
  }),
    ((pt.prototype = new X()).__c = function (t, e) {
      var r = e.__c,
        o = this;
      o.t == null && (o.t = []), o.t.push(r);
      var n = Ro(o.__v),
        s = !1,
        i = function () {
          s || ((s = !0), (r.__R = null), n ? n(l) : l());
        };
      r.__R = i;
      var l = function () {
          if (!--o.__u) {
            if (o.state.__a) {
              var m = o.state.__a;
              o.__v.__k[0] = To(m, m.__c.__P, m.__c.__O);
            }
            var a;
            for (o.setState({ __a: (o.__b = null) }); (a = o.t.pop()); )
              a.forceUpdate();
          }
        },
        c = e.__h === !0;
      o.__u++ || c || o.setState({ __a: (o.__b = o.__v.__k[0]) }), t.then(i, i);
    }),
    (pt.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (pt.prototype.render = function (t, e) {
      if (this.__b) {
        if (this.__v.__k) {
          var r = document.createElement("div"),
            o = this.__v.__k[0].__c;
          this.__v.__k[0] = Co(this.__b, r, (o.__O = o.__P));
        }
        this.__b = null;
      }
      var n = e.__a && te(re, null, t.fallback);
      return n && (n.__h = null), [te(re, null, e.__a ? null : t.children), n];
    });
  var yo = function (t, e, r) {
    if (
      (++r[1] === r[0] && t.o.delete(e),
      t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.o.size))
    )
      for (r = t.u; r; ) {
        for (; r.length > 3; ) r.pop()();
        if (r[1] < r[0]) break;
        t.u = r = r[2];
      }
  };
  function Qn(t) {
    return (
      (this.getChildContext = function () {
        return t.context;
      }),
      t.children
    );
  }
  function Xn(t) {
    var e = this,
      r = t.i;
    (e.componentWillUnmount = function () {
      me(null, e.l), (e.l = null), (e.i = null);
    }),
      e.i && e.i !== r && e.componentWillUnmount(),
      t.__v
        ? (e.l ||
            ((e.i = r),
            (e.l = {
              nodeType: 1,
              parentNode: r,
              childNodes: [],
              appendChild: function (o) {
                this.childNodes.push(o), e.i.appendChild(o);
              },
              insertBefore: function (o, n) {
                this.childNodes.push(o), e.i.appendChild(o);
              },
              removeChild: function (o) {
                this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1),
                  e.i.removeChild(o);
              },
            })),
          me(te(Qn, { context: e.context }, t.__v), e.l))
        : e.l && e.componentWillUnmount();
  }
  function tr(t, e) {
    var r = te(Xn, { __v: t, i: e });
    return (r.containerInfo = e), r;
  }
  ((Ge.prototype = new X()).__a = function (t) {
    var e = this,
      r = Ro(e.__v),
      o = e.o.get(t);
    return (
      o[0]++,
      function (n) {
        var s = function () {
          e.props.revealOrder ? (o.push(n), yo(e, t, o)) : n();
        };
        r ? r(s) : s();
      }
    );
  }),
    (Ge.prototype.render = function (t) {
      (this.u = null), (this.o = new Map());
      var e = ae(t.children);
      t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
      for (var r = e.length; r--; ) this.o.set(e[r], (this.u = [1, 0, this.u]));
      return t.children;
    }),
    (Ge.prototype.componentDidUpdate = Ge.prototype.componentDidMount =
      function () {
        var t = this;
        this.o.forEach(function (e, r) {
          yo(t, r, e);
        });
      });
  var Eo =
      (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
      60103,
    Yn =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    es = typeof document < "u",
    ts = function (t) {
      return (
        typeof Symbol < "u" && typeof Symbol() == "symbol"
          ? /fil|che|rad/i
          : /fil|che|ra/i
      ).test(t);
    };
  function rs(t, e, r) {
    return (
      e.__k == null && (e.textContent = ""),
      me(t, e),
      typeof r == "function" && r(),
      t ? t.__c : null
    );
  }
  function os(t, e, r) {
    return Ft(t, e), typeof r == "function" && r(), t ? t.__c : null;
  }
  (X.prototype.isReactComponent = {}),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ].forEach(function (t) {
      Object.defineProperty(X.prototype, t, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + t];
        },
        set: function (e) {
          Object.defineProperty(this, t, {
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    });
  var bo = b.event;
  function as() {}
  function ns() {
    return this.cancelBubble;
  }
  function ss() {
    return this.defaultPrevented;
  }
  b.event = function (t) {
    return (
      bo && (t = bo(t)),
      (t.persist = as),
      (t.isPropagationStopped = ns),
      (t.isDefaultPrevented = ss),
      (t.nativeEvent = t)
    );
  };
  var No,
    wo = {
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    Ao = b.vnode;
  b.vnode = function (t) {
    var e = t.type,
      r = t.props,
      o = r;
    if (typeof e == "string") {
      var n = e.indexOf("-") === -1;
      for (var s in ((o = {}), r)) {
        var i = r[s];
        (es && s === "children" && e === "noscript") ||
          (s === "value" && "defaultValue" in r && i == null) ||
          (s === "defaultValue" && "value" in r && r.value == null
            ? (s = "value")
            : s === "download" && i === !0
            ? (i = "")
            : /ondoubleclick/i.test(s)
            ? (s = "ondblclick")
            : /^onchange(textarea|input)/i.test(s + e) && !ts(r.type)
            ? (s = "oninput")
            : /^onfocus$/i.test(s)
            ? (s = "onfocusin")
            : /^onblur$/i.test(s)
            ? (s = "onfocusout")
            : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s)
            ? (s = s.toLowerCase())
            : n && Yn.test(s)
            ? (s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase())
            : i === null && (i = void 0),
          /^oninput$/i.test(s) &&
            ((s = s.toLowerCase()), o[s] && (s = "oninputCapture")),
          (o[s] = i));
      }
      e == "select" &&
        o.multiple &&
        Array.isArray(o.value) &&
        (o.value = ae(r.children).forEach(function (l) {
          l.props.selected = o.value.indexOf(l.props.value) != -1;
        })),
        e == "select" &&
          o.defaultValue != null &&
          (o.value = ae(r.children).forEach(function (l) {
            l.props.selected = o.multiple
              ? o.defaultValue.indexOf(l.props.value) != -1
              : o.defaultValue == l.props.value;
          })),
        (t.props = o),
        r.class != r.className &&
          ((wo.enumerable = "className" in r),
          r.className != null && (o.class = r.className),
          Object.defineProperty(o, "className", wo));
    }
    (t.$$typeof = Eo), Ao && Ao(t);
  };
  var So = b.__r;
  b.__r = function (t) {
    So && So(t), (No = t.__c);
  };
  var is = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function (t) {
          return No.__n[t.__c].props.value;
        },
      },
    },
  };
  function ls(t) {
    return te.bind(null, t);
  }
  function jo(t) {
    return !!t && t.$$typeof === Eo;
  }
  function us(t) {
    return jo(t) ? oo.apply(null, arguments) : t;
  }
  function cs(t) {
    return !!t.__k && (me(null, t), !0);
  }
  function fs(t) {
    return (t && (t.base || (t.nodeType === 1 && t))) || null;
  }
  var ms = function (t, e) {
      return t(e);
    },
    ps = function (t, e) {
      return t(e);
    },
    ds = re;
  function Po(t) {
    t();
  }
  function gs(t) {
    return t;
  }
  function hs() {
    return [!1, Po];
  }
  var _s = He;
  function xs(t, e) {
    var r = e(),
      o = M({ h: { __: r, v: e } }),
      n = o[0].h,
      s = o[1];
    return (
      He(
        function () {
          (n.__ = r), (n.v = e), Qt(n.__, e()) || s({ h: n });
        },
        [t, r, e]
      ),
      U(
        function () {
          return (
            Qt(n.__, n.v()) || s({ h: n }),
            t(function () {
              Qt(n.__, n.v()) || s({ h: n });
            })
          );
        },
        [t]
      ),
      r
    );
  }
  var d = {
    useState: M,
    useId: go,
    useReducer: Vt,
    useEffect: U,
    useLayoutEffect: He,
    useInsertionEffect: _s,
    useTransition: hs,
    useDeferredValue: gs,
    useSyncExternalStore: xs,
    startTransition: Po,
    useRef: pe,
    useImperativeHandle: mt,
    useMemo: j,
    useCallback: We,
    useContext: mo,
    useDebugValue: po,
    version: "17.0.2",
    Children: Zn,
    render: rs,
    hydrate: os,
    unmountComponentAtNode: cs,
    createPortal: tr,
    createElement: te,
    createContext: zt,
    createFactory: ls,
    cloneElement: us,
    createRef: Mt,
    Fragment: re,
    isValidElement: jo,
    findDOMNode: fs,
    Component: X,
    PureComponent: Yt,
    memo: $n,
    forwardRef: er,
    flushSync: ps,
    unstable_batchedUpdates: ms,
    StrictMode: ds,
    Suspense: pt,
    SuspenseList: Ge,
    lazy: Kn,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: is,
  };
  var xe = {},
    Bo = {};
  function vs(t) {
    for (var e = 5381, r = t.length; r; ) e = (e * 33) ^ t.charCodeAt(--r);
    return e >>> 0;
  }
  var ys = vs,
    Do = {};
  (function (t) {
    (t.__esModule = !0), (t.default = void 0);
    function e(l, c) {
      for (var m = 0; m < c.length; m++) {
        var a = c[m];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(l, a.key, a);
      }
    }
    function r(l, c, m) {
      return c && e(l.prototype, c), m && e(l, m), l;
    }
    var o = typeof process < "u" && process.env && !0,
      n = function (c) {
        return Object.prototype.toString.call(c) === "[object String]";
      },
      s = (function () {
        function l(m) {
          var a = m === void 0 ? {} : m,
            f = a.name,
            u = f === void 0 ? "stylesheet" : f,
            p = a.optimizeForSpeed,
            g = p === void 0 ? o : p,
            y = a.isBrowser,
            h = y === void 0 ? typeof window < "u" : y;
          i(n(u), "`name` must be a string"),
            (this._name = u),
            (this._deletedRulePlaceholder = "#" + u + "-deleted-rule____{}"),
            i(typeof g == "boolean", "`optimizeForSpeed` must be a boolean"),
            (this._optimizeForSpeed = g),
            (this._isBrowser = h),
            (this._serverSheet = void 0),
            (this._tags = []),
            (this._injected = !1),
            (this._rulesCount = 0);
          var A =
            this._isBrowser &&
            document.querySelector('meta[property="csp-nonce"]');
          this._nonce = A ? A.getAttribute("content") : null;
        }
        var c = l.prototype;
        return (
          (c.setOptimizeForSpeed = function (a) {
            i(typeof a == "boolean", "`setOptimizeForSpeed` accepts a boolean"),
              i(
                this._rulesCount === 0,
                "optimizeForSpeed cannot be when rules have already been inserted"
              ),
              this.flush(),
              (this._optimizeForSpeed = a),
              this.inject();
          }),
          (c.isOptimizeForSpeed = function () {
            return this._optimizeForSpeed;
          }),
          (c.inject = function () {
            var a = this;
            if (
              (i(!this._injected, "sheet already injected"),
              (this._injected = !0),
              this._isBrowser && this._optimizeForSpeed)
            ) {
              (this._tags[0] = this.makeStyleTag(this._name)),
                (this._optimizeForSpeed = "insertRule" in this.getSheet()),
                this._optimizeForSpeed ||
                  (o ||
                    console.warn(
                      "StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."
                    ),
                  this.flush(),
                  (this._injected = !0));
              return;
            }
            this._serverSheet = {
              cssRules: [],
              insertRule: function (u, p) {
                return (
                  typeof p == "number"
                    ? (a._serverSheet.cssRules[p] = { cssText: u })
                    : a._serverSheet.cssRules.push({ cssText: u }),
                  p
                );
              },
              deleteRule: function (u) {
                a._serverSheet.cssRules[u] = null;
              },
            };
          }),
          (c.getSheetForTag = function (a) {
            if (a.sheet) return a.sheet;
            for (var f = 0; f < document.styleSheets.length; f++)
              if (document.styleSheets[f].ownerNode === a)
                return document.styleSheets[f];
          }),
          (c.getSheet = function () {
            return this.getSheetForTag(this._tags[this._tags.length - 1]);
          }),
          (c.insertRule = function (a, f) {
            if (
              (i(n(a), "`insertRule` accepts only strings"), !this._isBrowser)
            )
              return (
                typeof f != "number" && (f = this._serverSheet.cssRules.length),
                this._serverSheet.insertRule(a, f),
                this._rulesCount++
              );
            if (this._optimizeForSpeed) {
              var u = this.getSheet();
              typeof f != "number" && (f = u.cssRules.length);
              try {
                u.insertRule(a, f);
              } catch {
                return (
                  o ||
                    console.warn(
                      `StyleSheet: illegal rule: 

` +
                        a +
                        `

See https://stackoverflow.com/q/20007992 for more info`
                    ),
                  -1
                );
              }
            } else {
              var p = this._tags[f];
              this._tags.push(this.makeStyleTag(this._name, a, p));
            }
            return this._rulesCount++;
          }),
          (c.replaceRule = function (a, f) {
            if (this._optimizeForSpeed || !this._isBrowser) {
              var u = this._isBrowser ? this.getSheet() : this._serverSheet;
              if (
                (f.trim() || (f = this._deletedRulePlaceholder), !u.cssRules[a])
              )
                return a;
              u.deleteRule(a);
              try {
                u.insertRule(f, a);
              } catch {
                o ||
                  console.warn(
                    `StyleSheet: illegal rule: 

` +
                      f +
                      `

See https://stackoverflow.com/q/20007992 for more info`
                  ),
                  u.insertRule(this._deletedRulePlaceholder, a);
              }
            } else {
              var p = this._tags[a];
              i(p, "old rule at index `" + a + "` not found"),
                (p.textContent = f);
            }
            return a;
          }),
          (c.deleteRule = function (a) {
            if (!this._isBrowser) {
              this._serverSheet.deleteRule(a);
              return;
            }
            if (this._optimizeForSpeed) this.replaceRule(a, "");
            else {
              var f = this._tags[a];
              i(f, "rule at index `" + a + "` not found"),
                f.parentNode.removeChild(f),
                (this._tags[a] = null);
            }
          }),
          (c.flush = function () {
            (this._injected = !1),
              (this._rulesCount = 0),
              this._isBrowser
                ? (this._tags.forEach(function (a) {
                    return a && a.parentNode.removeChild(a);
                  }),
                  (this._tags = []))
                : (this._serverSheet.cssRules = []);
          }),
          (c.cssRules = function () {
            var a = this;
            return this._isBrowser
              ? this._tags.reduce(function (f, u) {
                  return (
                    u
                      ? (f = f.concat(
                          Array.prototype.map.call(
                            a.getSheetForTag(u).cssRules,
                            function (p) {
                              return p.cssText === a._deletedRulePlaceholder
                                ? null
                                : p;
                            }
                          )
                        ))
                      : f.push(null),
                    f
                  );
                }, [])
              : this._serverSheet.cssRules;
          }),
          (c.makeStyleTag = function (a, f, u) {
            f &&
              i(n(f), "makeStyleTag acceps only strings as second parameter");
            var p = document.createElement("style");
            this._nonce && p.setAttribute("nonce", this._nonce),
              (p.type = "text/css"),
              p.setAttribute("data-" + a, ""),
              f && p.appendChild(document.createTextNode(f));
            var g = document.head || document.getElementsByTagName("head")[0];
            return u ? g.insertBefore(p, u) : g.appendChild(p), p;
          }),
          r(l, [
            {
              key: "length",
              get: function () {
                return this._rulesCount;
              },
            },
          ]),
          l
        );
      })();
    t.default = s;
    function i(l, c) {
      if (!l) throw new Error("StyleSheet: " + c + ".");
    }
  })(Do);
  (function (t) {
    (t.__esModule = !0), (t.default = void 0);
    var e = o(ys),
      r = o(Do);
    function o(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var n = function (c) {
        return c.replace(/\/style/gi, "\\/style");
      },
      s = (function () {
        function l(m) {
          var a = m === void 0 ? {} : m,
            f = a.styleSheet,
            u = f === void 0 ? null : f,
            p = a.optimizeForSpeed,
            g = p === void 0 ? !1 : p,
            y = a.isBrowser,
            h = y === void 0 ? typeof window < "u" : y;
          (this._sheet =
            u || new r.default({ name: "styled-jsx", optimizeForSpeed: g })),
            this._sheet.inject(),
            u &&
              typeof g == "boolean" &&
              (this._sheet.setOptimizeForSpeed(g),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
            (this._isBrowser = h),
            (this._fromServer = void 0),
            (this._indices = {}),
            (this._instancesCounts = {}),
            (this.computeId = this.createComputeId()),
            (this.computeSelector = this.createComputeSelector());
        }
        var c = l.prototype;
        return (
          (c.add = function (a) {
            var f = this;
            this._optimizeForSpeed === void 0 &&
              ((this._optimizeForSpeed = Array.isArray(a.children)),
              this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),
              (this._optimizeForSpeed = this._sheet.isOptimizeForSpeed())),
              this._isBrowser &&
                !this._fromServer &&
                ((this._fromServer = this.selectFromServer()),
                (this._instancesCounts = Object.keys(this._fromServer).reduce(
                  function (h, A) {
                    return (h[A] = 0), h;
                  },
                  {}
                )));
            var u = this.getIdAndRules(a),
              p = u.styleId,
              g = u.rules;
            if (p in this._instancesCounts) {
              this._instancesCounts[p] += 1;
              return;
            }
            var y = g
              .map(function (h) {
                return f._sheet.insertRule(h);
              })
              .filter(function (h) {
                return h !== -1;
              });
            (this._indices[p] = y), (this._instancesCounts[p] = 1);
          }),
          (c.remove = function (a) {
            var f = this,
              u = this.getIdAndRules(a),
              p = u.styleId;
            if (
              (i(p in this._instancesCounts, "styleId: `" + p + "` not found"),
              (this._instancesCounts[p] -= 1),
              this._instancesCounts[p] < 1)
            ) {
              var g = this._fromServer && this._fromServer[p];
              g
                ? (g.parentNode.removeChild(g), delete this._fromServer[p])
                : (this._indices[p].forEach(function (y) {
                    return f._sheet.deleteRule(y);
                  }),
                  delete this._indices[p]),
                delete this._instancesCounts[p];
            }
          }),
          (c.update = function (a, f) {
            this.add(f), this.remove(a);
          }),
          (c.flush = function () {
            this._sheet.flush(),
              this._sheet.inject(),
              (this._fromServer = void 0),
              (this._indices = {}),
              (this._instancesCounts = {}),
              (this.computeId = this.createComputeId()),
              (this.computeSelector = this.createComputeSelector());
          }),
          (c.cssRules = function () {
            var a = this,
              f = this._fromServer
                ? Object.keys(this._fromServer).map(function (p) {
                    return [p, a._fromServer[p]];
                  })
                : [],
              u = this._sheet.cssRules();
            return f.concat(
              Object.keys(this._indices)
                .map(function (p) {
                  return [
                    p,
                    a._indices[p]
                      .map(function (g) {
                        return u[g].cssText;
                      })
                      .join(
                        a._optimizeForSpeed
                          ? ""
                          : `
`
                      ),
                  ];
                })
                .filter(function (p) {
                  return Boolean(p[1]);
                })
            );
          }),
          (c.createComputeId = function () {
            var a = {};
            return function (f, u) {
              if (!u) return "jsx-" + f;
              var p = String(u),
                g = f + p;
              return (
                a[g] || (a[g] = "jsx-" + (0, e.default)(f + "-" + p)), a[g]
              );
            };
          }),
          (c.createComputeSelector = function (a) {
            a === void 0 && (a = /__jsx-style-dynamic-selector/g);
            var f = {};
            return function (u, p) {
              this._isBrowser || (p = n(p));
              var g = u + p;
              return f[g] || (f[g] = p.replace(a, u)), f[g];
            };
          }),
          (c.getIdAndRules = function (a) {
            var f = this,
              u = a.children,
              p = a.dynamic,
              g = a.id;
            if (p) {
              var y = this.computeId(g, p);
              return {
                styleId: y,
                rules: Array.isArray(u)
                  ? u.map(function (h) {
                      return f.computeSelector(y, h);
                    })
                  : [this.computeSelector(y, u)],
              };
            }
            return {
              styleId: this.computeId(g),
              rules: Array.isArray(u) ? u : [u],
            };
          }),
          (c.selectFromServer = function () {
            var a = Array.prototype.slice.call(
              document.querySelectorAll('[id^="__jsx-"]')
            );
            return a.reduce(function (f, u) {
              var p = u.id.slice(2);
              return (f[p] = u), f;
            }, {});
          }),
          l
        );
      })();
    t.default = s;
    function i(l, c) {
      if (!l) throw new Error("StyleSheetRegistry: " + c + ".");
    }
  })(Bo);
  (function (t) {
    (t.__esModule = !0), (t.default = s), (t.flush = i);
    var e = d,
      r = o(Bo);
    function o(l) {
      return l && l.__esModule ? l : { default: l };
    }
    var n = new r.default();
    function s(l) {
      return typeof window > "u"
        ? (n.add(l), null)
        : ((0, e.useLayoutEffect)(
            function () {
              return (
                n.add(l),
                function () {
                  n.remove(l);
                }
              );
            },
            [l.id, String(l.dynamic)]
          ),
          null);
    }
    s.dynamic = function (l) {
      return l
        .map(function (c) {
          var m = c[0],
            a = c[1];
          return n.computeId(m, a);
        })
        .join(" ");
    };
    function i() {
      var l = n.cssRules();
      return n.flush(), l;
    }
  })(xe);
  var Lo = xe.default || xe;
  Lo.flush = xe.flush;
  var dt = {};
  (function (t) {
    (t.__esModule = !0), (t.default = n), (t.flushToHTML = s);
    var e = o(d),
      r = xe.default || xe;
    r.flush = xe.flush;
    function o(i) {
      return i && i.__esModule ? i : { default: i };
    }
    function n(i) {
      return (
        i === void 0 && (i = {}),
        (0, r.flush)().map(function (l) {
          var c = l[0],
            m = l[1];
          return e.default.createElement("style", {
            id: "__" + c,
            key: "__" + c,
            nonce: i.nonce ? i.nonce : void 0,
            dangerouslySetInnerHTML: { __html: m },
          });
        })
      );
    }
    function s(i) {
      return (
        i === void 0 && (i = {}),
        (0, r.flush)().reduce(function (l, c) {
          var m = c[0],
            a = c[1];
          return (
            (l +=
              '<style id="__' +
              m +
              '"' +
              (i.nonce ? ' nonce="' + i.nonce + '"' : "") +
              ">" +
              a +
              "</style>"),
            l
          );
        }, "")
      );
    }
  })(dt);
  var gt = dt.default || dt;
  gt.flushToHTML = dt.flushToHTML;
  var T = Lo;
  function ve(t) {
    return (
      (ve =
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                typeof Symbol == "function" &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      ve(t)
    );
  }
  var ht = {
      sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      mono: "Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace",
      prism:
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,"Liberation Mono", "Courier New", monospace',
    },
    Re = {
      xs: { min: "0", max: "650px" },
      sm: { min: "650px", max: "900px" },
      md: { min: "900px", max: "1280px" },
      lg: { min: "1280px", max: "1920px" },
      xl: { min: "1920px", max: "10000px" },
    },
    _t = {
      gap: "16pt",
      gapNegative: "-16pt",
      gapHalf: "8pt",
      gapHalfNegative: "-8pt",
      gapQuarter: "4pt",
      gapQuarterNegative: "-4pt",
      pageMargin: "16pt",
      pageWidth: "750pt",
      pageWidthWithMargin: "782pt",
      breakpointMobile: Re.xs.max,
      breakpointTablet: Re.sm.max,
      radius: "6px",
      unit: "16px",
    };
  var bs = {
      accents_1: "#fafafa",
      accents_2: "#eaeaea",
      accents_3: "#999",
      accents_4: "#888",
      accents_5: "#666",
      accents_6: "#444",
      accents_7: "#333",
      accents_8: "#111",
      background: "#fff",
      foreground: "#000",
      selection: "#79ffe1",
      secondary: "#666",
      code: "#f81ce5",
      border: "#eaeaea",
      error: "#e00",
      errorLight: "#ff1a1a",
      errorLighter: "#f7d4d6",
      errorDark: "#c50000",
      success: "#0070f3",
      successLight: "#3291ff",
      successLighter: "#d3e5ff",
      successDark: "#0761d1",
      warning: "#f5a623",
      warningLight: "#f7b955",
      warningLighter: "#ffefcf",
      warningDark: "#ab570a",
      cyan: "#50e3c2",
      cyanLighter: "#aaffec",
      cyanLight: "#79ffe1",
      cyanDark: "#29bc9b",
      violet: "#7928ca",
      violetLighter: "#e3d7fc",
      violetLight: "#8a63d2",
      violetDark: "#4c2889",
      purple: "#f81ce5",
      alert: "#ff0080",
      magenta: "#eb367f",
      link: "#0070f3",
    },
    ws = {
      linkStyle: "none",
      linkHoverStyle: "none",
      dropdownBoxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.02)",
      scrollerStart: "rgba(255, 255, 255, 1)",
      scrollerEnd: "rgba(255, 255, 255, 0)",
      shadowSmall: "0 5px 10px rgba(0, 0, 0, 0.12)",
      shadowMedium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      shadowLarge: "0 30px 60px rgba(0, 0, 0, 0.12)",
      portalOpacity: 0.25,
    },
    As = ht,
    Ss = Re,
    ks = _t,
    Cs = {
      type: "light",
      font: As,
      layout: ks,
      palette: bs,
      breakpoints: Ss,
      expressiveness: ws,
    },
    xt = Cs;
  var Ts = {
      accents_1: "#111",
      accents_2: "#333",
      accents_3: "#444",
      accents_4: "#666",
      accents_5: "#888",
      accents_6: "#999",
      accents_7: "#eaeaea",
      accents_8: "#fafafa",
      background: "#000",
      foreground: "#fff",
      selection: "#f81ce5",
      secondary: "#888",
      code: "#79ffe1",
      border: "#333",
      error: "#e00",
      errorLighter: "#f7d4d6",
      errorLight: "#ff1a1a",
      errorDark: "#c50000",
      success: "#0070f3",
      successLighter: "#d3e5ff",
      successLight: "#3291ff",
      successDark: "#0761d1",
      warning: "#f5a623",
      warningLighter: "#ffefcf",
      warningLight: "#f7b955",
      warningDark: "#ab570a",
      cyan: "#50e3c2",
      cyanLighter: "#aaffec",
      cyanLight: "#79ffe1",
      cyanDark: "#29bc9b",
      violet: "#7928ca",
      violetLighter: "#e3d7fc",
      violetLight: "#8a63d2",
      violetDark: "#4c2889",
      purple: "#f81ce5",
      alert: "#ff0080",
      magenta: "#eb367f",
      link: "#3291ff",
    },
    Rs = {
      linkStyle: "none",
      linkHoverStyle: "none",
      dropdownBoxShadow: "0 0 0 1px #333",
      scrollerStart: "rgba(255, 255, 255, 1)",
      scrollerEnd: "rgba(255, 255, 255, 0)",
      shadowSmall: "0 0 0 1px #333",
      shadowMedium: "0 0 0 1px #333",
      shadowLarge: "0 0 0 1px #333",
      portalOpacity: 0.75,
    },
    Es = ht,
    Ns = Re,
    js = _t,
    Ps = {
      type: "dark",
      font: Es,
      layout: js,
      palette: Ts,
      breakpoints: Ns,
      expressiveness: Rs,
    },
    rr = Ps;
  var vt = function (e) {
      return e && ve(e) === "object";
    },
    Bs = function t(e, r) {
      if (!vt(r) || !vt(e)) return e;
      for (var o = Object.keys(e), n = {}, s = 0, i = o; s < i.length; s++) {
        var l = i[s],
          c = e[l],
          m = r[l];
        Array.isArray(c) && Array.isArray(m)
          ? (n[l] = m.concat(c))
          : vt(c) && vt(m)
          ? (n[l] = t(c, N({}, m)))
          : m
          ? (n[l] = m)
          : (n[l] = c);
      }
      return n;
    },
    Oo = function () {
      return [xt, rr];
    },
    Ds = function () {
      return xt;
    },
    yt = function (e) {
      if (!e) return !1;
      var r = Oo(),
        o = r.find(function (n) {
          return n.type === e;
        });
      return !o;
    },
    Ls = function (e) {
      if (!e) return !1;
      var r = typeof e == "string",
        o = r ? e : e.type;
      return !yt(o);
    },
    Os = function () {
      var e =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      return !!e.find(function (r) {
        return yt(r.type);
      });
    },
    or = function (e, r) {
      if (!yt(r.type)) throw new Error("Duplicate or unavailable theme type");
      return Bs(e, r);
    },
    Is = function (e) {
      return or(rr, e);
    },
    Ms = function (e) {
      return or(xt, e);
    },
    Us = {
      isPresetTheme: Ls,
      isAvailableThemeType: yt,
      hasUserCustomTheme: Os,
      getPresets: Oo,
      getPresetStaticTheme: Ds,
      create: or,
      createFromDark: Is,
      createFromLight: Ms,
    },
    bt = Us;
  var ye = bt;
  var Fs = ye.getPresetStaticTheme(),
    ar = d.createContext(Fs),
    Io = function () {
      return d.useContext(ar);
    };
  var G = Io;
  var zs = function (e) {
      for (var r = Object.keys(e), o = r.length, n = "", s = 0; s < o; s++) {
        var i = r[s],
          l = e[r[s]];
        !l || (n = n ? "".concat(n, " ").concat(String(i)) : String(i));
      }
      return n;
    },
    Hs = function (e) {
      return ve(e) === "object" && !Array.isArray(e);
    },
    Ws = function () {
      var e = arguments.length,
        r = "";
      if (e === 0) return r;
      for (var o = 0; o < e; o++) {
        var n = o < 0 || arguments.length <= o ? void 0 : arguments[o];
        !n ||
          (Hs(n)
            ? (r += " ".concat(zs(n)))
            : (r += " ".concat(String(n).trim())));
      }
      return r.trim();
    },
    Mo = Ws;
  var Z = Mo;
  var Uo = [
      "width",
      "height",
      "padding",
      "margin",
      "w",
      "h",
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "paddingBottom",
      "pl",
      "pr",
      "pt",
      "pb",
      "marginLeft",
      "marginRight",
      "marginTop",
      "marginBottom",
      "ml",
      "mr",
      "mt",
      "mb",
      "px",
      "py",
      "mx",
      "my",
      "font",
      "unit",
      "scale",
    ],
    V = function (e) {
      return "".concat(e);
    },
    Gs = {
      getScaleProps: function () {},
      getAllScaleProps: function () {
        return {};
      },
      SCALES: {
        pl: V,
        pr: V,
        pb: V,
        pt: V,
        px: V,
        py: V,
        mb: V,
        ml: V,
        mr: V,
        mt: V,
        mx: V,
        my: V,
        width: V,
        height: V,
        font: V,
      },
      unit: "16px",
    },
    nr = d.createContext(Gs),
    Fo = function () {
      return d.useContext(nr);
    };
  var zo = function () {
    return Math.random().toString(32).slice(2, 10);
  };
  var Ho = function (e, r) {
    var o = [],
      n = d.Children.map(e, function (i) {
        return d.isValidElement(i) && i.type === r ? (o.push(i), null) : i;
      }),
      s = o.length >= 0 ? o : void 0;
    return [n, s];
  };
  var Wo = function () {
    return Boolean(
      typeof window < "u" && window.document && window.document.createElement
    );
  };
  var Go = function (e) {
    return e !== void 0 && !Number.isNaN(+e);
  };
  function $o(t, e) {
    var r = (typeof Symbol < "u" && t[Symbol.iterator]) || t["@@iterator"];
    if (!r) {
      if (
        Array.isArray(t) ||
        (r = qs(t)) ||
        (e && t && typeof t.length == "number")
      ) {
        r && (t = r);
        var o = 0,
          n = function () {};
        return {
          s: n,
          n: function () {
            return o >= t.length ? { done: !0 } : { done: !1, value: t[o++] };
          },
          e: function (m) {
            throw m;
          },
          f: n,
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var s = !0,
      i = !1,
      l;
    return {
      s: function () {
        r = r.call(t);
      },
      n: function () {
        var m = r.next();
        return (s = m.done), m;
      },
      e: function (m) {
        (i = !0), (l = m);
      },
      f: function () {
        try {
          !s && r.return != null && r.return();
        } finally {
          if (i) throw l;
        }
      },
    };
  }
  function qs(t, e) {
    if (!!t) {
      if (typeof t == "string") return qo(t, e);
      var r = Object.prototype.toString.call(t).slice(8, -1);
      if (
        (r === "Object" && t.constructor && (r = t.constructor.name),
        r === "Map" || r === "Set")
      )
        return Array.from(t);
      if (
        r === "Arguments" ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return qo(t, e);
    }
  }
  function qo(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
    return o;
  }
  var Jo = function (e) {
      var r = function (n) {
        if (!Array.isArray(n)) return e[n];
        var s = void 0,
          i = $o(n),
          l;
        try {
          for (i.s(); !(l = i.n()).done; ) {
            var c = l.value,
              m = e[c];
            typeof m < "u" && (s = m);
          }
        } catch (a) {
          i.e(a);
        } finally {
          i.f();
        }
        return s;
      };
      return r;
    },
    Zo = function (e) {
      var r = function () {
        var n = {},
          s = $o(Uo),
          i;
        try {
          for (s.s(); !(i = s.n()).done; ) {
            var l = i.value,
              c = e[l];
            typeof c < "u" && (n[l] = c);
          }
        } catch (m) {
          s.e(m);
        } finally {
          s.f();
        }
        return n;
      };
      return r;
    };
  var $s = ["children"],
    Js = [
      "paddingLeft",
      "pl",
      "paddingRight",
      "pr",
      "paddingTop",
      "pt",
      "paddingBottom",
      "pb",
      "marginTop",
      "mt",
      "marginRight",
      "mr",
      "marginBottom",
      "mb",
      "marginLeft",
      "ml",
      "px",
      "py",
      "mx",
      "my",
      "width",
      "height",
      "font",
      "w",
      "h",
      "margin",
      "padding",
      "unit",
      "scale",
    ],
    Zs = function (e) {
      if (e === 1) return e;
      var r = Math.abs((e - 1) / 2);
      return e > 1 ? 1 + r : 1 - r;
    },
    Vs = function (e) {
      var r = er(function (o, n) {
        var s,
          i,
          l,
          c,
          m,
          a,
          f,
          u,
          p,
          g,
          y,
          h,
          A,
          E,
          v,
          _,
          x,
          S,
          k,
          w,
          D,
          I,
          C,
          P,
          L,
          B,
          K,
          q,
          $,
          se,
          oe,
          ge,
          ie = o.children,
          R = W(o, $s),
          Qe = G(),
          ue = Qe.layout,
          ee = R.paddingLeft,
          Xe = R.pl,
          be = R.paddingRight,
          Ye = R.pr,
          we = R.paddingTop,
          Ae = R.pt,
          ce = R.paddingBottom,
          et = R.pb,
          fe = R.marginTop,
          tt = R.mt,
          he = R.marginRight,
          Lr = R.mr,
          rt = R.marginBottom,
          Or = R.mb,
          ot = R.marginLeft,
          Ir = R.ml,
          De = R.px,
          Le = R.py,
          Oe = R.mx,
          Ie = R.my,
          Bt = R.width,
          Dt = R.height,
          Sn = R.font,
          kn = R.w,
          Cn = R.h,
          Se = R.margin,
          ke = R.padding,
          Mr = R.unit,
          Lt = Mr === void 0 ? ue.unit : Mr,
          Ur = R.scale,
          Tn = Ur === void 0 ? 1 : Ur,
          Rn = W(R, Js),
          J = function (at) {
            return function (Ot, nt) {
              Ot === 0 && ((Ot = 1), (nt = nt || 0));
              var Fr = Zs(Tn) * Ot;
              if (typeof at > "u")
                return typeof nt < "u"
                  ? "".concat(nt)
                  : "calc(".concat(Fr, " * ").concat(Lt, ")");
              if (!Go(at)) return "".concat(at);
              var Nn = Fr * Number(at);
              return "calc(".concat(Nn, " * ").concat(Lt, ")");
            };
          },
          En = {
            unit: Lt,
            SCALES: {
              pt: J(
                (s = (i = we ?? Ae) !== null && i !== void 0 ? i : Le) !==
                  null && s !== void 0
                  ? s
                  : ke
              ),
              pr: J(
                (l = (c = be ?? Ye) !== null && c !== void 0 ? c : De) !==
                  null && l !== void 0
                  ? l
                  : ke
              ),
              pb: J(
                (m = (a = ce ?? et) !== null && a !== void 0 ? a : Le) !==
                  null && m !== void 0
                  ? m
                  : ke
              ),
              pl: J(
                (f = (u = ee ?? Xe) !== null && u !== void 0 ? u : De) !==
                  null && f !== void 0
                  ? f
                  : ke
              ),
              px: J(
                (p =
                  (g =
                    (y = (h = De ?? ee) !== null && h !== void 0 ? h : be) !==
                      null && y !== void 0
                      ? y
                      : Xe) !== null && g !== void 0
                    ? g
                    : Ye) !== null && p !== void 0
                  ? p
                  : ke
              ),
              py: J(
                (A =
                  (E =
                    (v = (_ = Le ?? we) !== null && _ !== void 0 ? _ : ce) !==
                      null && v !== void 0
                      ? v
                      : Ae) !== null && E !== void 0
                    ? E
                    : et) !== null && A !== void 0
                  ? A
                  : ke
              ),
              mt: J(
                (x = (S = fe ?? tt) !== null && S !== void 0 ? S : Ie) !==
                  null && x !== void 0
                  ? x
                  : Se
              ),
              mr: J(
                (k = (w = he ?? Lr) !== null && w !== void 0 ? w : Oe) !==
                  null && k !== void 0
                  ? k
                  : Se
              ),
              mb: J(
                (D = (I = rt ?? Or) !== null && I !== void 0 ? I : Ie) !==
                  null && D !== void 0
                  ? D
                  : Se
              ),
              ml: J(
                (C = (P = ot ?? Ir) !== null && P !== void 0 ? P : Oe) !==
                  null && C !== void 0
                  ? C
                  : Se
              ),
              mx: J(
                (L =
                  (B =
                    (K = (q = Oe ?? ot) !== null && q !== void 0 ? q : he) !==
                      null && K !== void 0
                      ? K
                      : Ir) !== null && B !== void 0
                    ? B
                    : Lr) !== null && L !== void 0
                  ? L
                  : Se
              ),
              my: J(
                ($ =
                  (se =
                    (oe =
                      (ge = Ie ?? fe) !== null && ge !== void 0 ? ge : rt) !==
                      null && oe !== void 0
                      ? oe
                      : tt) !== null && se !== void 0
                    ? se
                    : Or) !== null && $ !== void 0
                  ? $
                  : Se
              ),
              width: J(Bt ?? kn),
              height: J(Dt ?? Cn),
              font: J(Sn),
            },
            getScaleProps: Jo(R),
            getAllScaleProps: Zo(R),
          };
        return d.createElement(
          nr.Provider,
          { value: En },
          d.createElement(e, N({}, Rn, { ref: n }), ie)
        );
      });
      return (r.displayName = "Scale".concat(e.displayName || "Wrapper")), r;
    },
    Q = Vs;
  var Y = Fo;
  var ne = function () {
    for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
      r[o] = arguments[o];
    return r;
  };
  var cf = ne(
      "default",
      "secondary",
      "success",
      "warning",
      "error",
      "abort",
      "secondary-light",
      "success-light",
      "warning-light",
      "error-light"
    ),
    ff = ne("default", "secondary", "success", "warning", "error"),
    mf = ne(
      "default",
      "secondary",
      "success",
      "warning",
      "error",
      "dark",
      "lite"
    ),
    pf = ne(
      "default",
      "secondary",
      "success",
      "warning",
      "error",
      "dark",
      "lite",
      "alert",
      "purple",
      "violet",
      "cyan"
    ),
    df = ne("default", "silent", "prevent"),
    gf = ne("hover", "click"),
    hf = ne(
      "top",
      "topStart",
      "topEnd",
      "left",
      "leftStart",
      "leftEnd",
      "bottom",
      "bottomStart",
      "bottomEnd",
      "right",
      "rightStart",
      "rightEnd"
    ),
    _f = ne("start", "center", "end", "left", "right");
  var Ks = function () {
      var e = M(!1),
        r = O(e, 2),
        o = r[0],
        n = r[1];
      return (
        U(function () {
          n(Wo());
        }, []),
        { isBrowser: o, isServer: !o }
      );
    },
    Vo = Ks;
  var Ko = function (e) {
      var r = document.createElement("div");
      return r.setAttribute("id", e), r;
    },
    Qs = function () {
      var e =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : zo(),
        r = arguments.length > 1 ? arguments[1] : void 0,
        o = "geist-ui-".concat(e),
        n = Vo(),
        s = n.isBrowser,
        i = M(s ? Ko(o) : null),
        l = O(i, 2),
        c = l[0],
        m = l[1];
      return (
        U(function () {
          var a = r ? r() : null,
            f = a || document.body,
            u = f.querySelector("#".concat(o)),
            p = u || Ko(o);
          u || f.appendChild(p), m(p);
        }, []),
        c
      );
    },
    Qo = Qs;
  var Xs = [
      "children",
      "className",
      "visible",
      "enterTime",
      "leaveTime",
      "clearTime",
      "name",
    ],
    Ys = {
      visible: !1,
      enterTime: 60,
      leaveTime: 60,
      clearTime: 60,
      className: "",
      name: "transition",
    },
    sr = function (e) {
      var r = e.children,
        o = e.className,
        n = e.visible,
        s = e.enterTime,
        i = e.leaveTime,
        l = e.clearTime,
        c = e.name,
        m = W(e, Xs),
        a = M(""),
        f = O(a, 2),
        u = f[0],
        p = f[1],
        g = M(n),
        y = O(g, 2),
        h = y[0],
        A = y[1];
      return (
        U(
          function () {
            var E = n ? "enter" : "leave",
              v = n ? s : i;
            n && !h && A(!0), p("".concat(c, "-").concat(E));
            var _ = setTimeout(function () {
                p(
                  ""
                    .concat(c, "-")
                    .concat(E, " ")
                    .concat(c, "-")
                    .concat(E, "-active")
                ),
                  clearTimeout(_);
              }, v),
              x = setTimeout(function () {
                n || (p(""), A(!1)), clearTimeout(x);
              }, v + l);
            return function () {
              clearTimeout(_), clearTimeout(x);
            };
          },
          [n, h]
        ),
        !d.isValidElement(r) || !h
          ? null
          : d.cloneElement(
              r,
              N({}, m, {
                className: ""
                  .concat(r.props.className, " ")
                  .concat(o, " ")
                  .concat(u),
              })
            )
      );
    };
  sr.defaultProps = Ys;
  sr.displayName = "GeistCssTransition";
  var Xo = sr;
  var Yo = {},
    ei = function (e, r) {
      var o = r ? " [".concat(r, "]") : " ",
        n = "[Geist UI]".concat(o, ": ").concat(e);
      typeof console > "u" || Yo[n] || ((Yo[n] = !0), console.warn(n));
    },
    ir = ei;
  var ti = ["children", "type", "color", "className", "spaceRatio"],
    ri = { type: "default", className: "", spaceRatio: 1 },
    oi = function (e, r, o) {
      var n = {
        default: r.accents_6,
        secondary: r.secondary,
        success: r.success,
        warning: r.warning,
        error: r.error,
      };
      return o || n[e];
    },
    lr = function (e) {
      var r = e.children,
        o = e.type,
        n = e.color,
        s = e.className,
        i = e.spaceRatio,
        l = W(e, ti),
        c = G(),
        m = Y(),
        a = m.SCALES,
        f = Z("loading-container", s),
        u = j(
          function () {
            return oi(o, c.palette, n);
          },
          [o, c.palette, n]
        );
      return d.createElement(
        "div",
        N({}, l, {
          className:
            T.dynamic([
              [
                "2201634259",
                [
                  a.font(1),
                  a.width(1, "100%"),
                  a.height(1, "100%"),
                  a.pt(0),
                  a.pr(0),
                  a.pb(0),
                  a.pl(0),
                  a.mt(0),
                  a.mr(0),
                  a.mb(0),
                  a.ml(0),
                  c.palette.accents_5,
                  u,
                  i,
                ],
              ],
            ]) +
            " " +
            ((l && l.className != null && l.className) || f || ""),
        }),
        d.createElement(
          "span",
          {
            className:
              T.dynamic([
                [
                  "2201634259",
                  [
                    a.font(1),
                    a.width(1, "100%"),
                    a.height(1, "100%"),
                    a.pt(0),
                    a.pr(0),
                    a.pb(0),
                    a.pl(0),
                    a.mt(0),
                    a.mr(0),
                    a.mb(0),
                    a.ml(0),
                    c.palette.accents_5,
                    u,
                    i,
                  ],
                ],
              ]) + " loading",
          },
          r &&
            d.createElement(
              "label",
              {
                className: T.dynamic([
                  [
                    "2201634259",
                    [
                      a.font(1),
                      a.width(1, "100%"),
                      a.height(1, "100%"),
                      a.pt(0),
                      a.pr(0),
                      a.pb(0),
                      a.pl(0),
                      a.mt(0),
                      a.mr(0),
                      a.mb(0),
                      a.ml(0),
                      c.palette.accents_5,
                      u,
                      i,
                    ],
                  ],
                ]),
              },
              r
            ),
          d.createElement("i", {
            className: T.dynamic([
              [
                "2201634259",
                [
                  a.font(1),
                  a.width(1, "100%"),
                  a.height(1, "100%"),
                  a.pt(0),
                  a.pr(0),
                  a.pb(0),
                  a.pl(0),
                  a.mt(0),
                  a.mr(0),
                  a.mb(0),
                  a.ml(0),
                  c.palette.accents_5,
                  u,
                  i,
                ],
              ],
            ]),
          }),
          d.createElement("i", {
            className: T.dynamic([
              [
                "2201634259",
                [
                  a.font(1),
                  a.width(1, "100%"),
                  a.height(1, "100%"),
                  a.pt(0),
                  a.pr(0),
                  a.pb(0),
                  a.pl(0),
                  a.mt(0),
                  a.mr(0),
                  a.mb(0),
                  a.ml(0),
                  c.palette.accents_5,
                  u,
                  i,
                ],
              ],
            ]),
          }),
          d.createElement("i", {
            className: T.dynamic([
              [
                "2201634259",
                [
                  a.font(1),
                  a.width(1, "100%"),
                  a.height(1, "100%"),
                  a.pt(0),
                  a.pr(0),
                  a.pb(0),
                  a.pl(0),
                  a.mt(0),
                  a.mr(0),
                  a.mb(0),
                  a.ml(0),
                  c.palette.accents_5,
                  u,
                  i,
                ],
              ],
            ]),
          })
        ),
        d.createElement(
          T,
          {
            id: "2201634259",
            dynamic: [
              a.font(1),
              a.width(1, "100%"),
              a.height(1, "100%"),
              a.pt(0),
              a.pr(0),
              a.pb(0),
              a.pl(0),
              a.mt(0),
              a.mr(0),
              a.mb(0),
              a.ml(0),
              c.palette.accents_5,
              u,
              i,
            ],
          },
          ".loading-container.__jsx-style-dynamic-selector{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;font-size:"
            .concat(a.font(1), ";width:")
            .concat(a.width(1, "100%"), ";height:")
            .concat(a.height(1, "100%"), ";min-height:1em;padding:")
            .concat(a.pt(0), " ")
            .concat(a.pr(0), " ")
            .concat(a.pb(0), " ")
            .concat(a.pl(0), ";margin:")
            .concat(a.mt(0), " ")
            .concat(a.mr(0), " ")
            .concat(a.mb(0), " ")
            .concat(
              a.ml(0),
              ";}label.__jsx-style-dynamic-selector{margin-right:0.5em;color:"
            )
            .concat(
              c.palette.accents_5,
              ";line-height:1;}label.__jsx-style-dynamic-selector *{margin:0;}.loading.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;width:100%;height:100%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:transparent;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}i.__jsx-style-dynamic-selector{width:0.25em;height:0.25em;border-radius:50%;background-color:"
            )
            .concat(u, ";margin:0 calc(0.25em / 2 * ")
            .concat(
              i,
              ");display:inline-block;-webkit-animation:loading-blink-__jsx-style-dynamic-selector 1.4s infinite both;animation:loading-blink-__jsx-style-dynamic-selector 1.4s infinite both;}i.__jsx-style-dynamic-selector:nth-child(2){-webkit-animation-delay:0.2s;animation-delay:0.2s;}i.__jsx-style-dynamic-selector:nth-child(3){-webkit-animation-delay:0.4s;animation-delay:0.4s;}@-webkit-keyframes loading-blink-__jsx-style-dynamic-selector{0%{opacity:0.2;}20%{opacity:1;}100%{opacity:0.2;}}@keyframes loading-blink-__jsx-style-dynamic-selector{0%{opacity:0.2;}20%{opacity:1;}100%{opacity:0.2;}}"
            )
        )
      );
    };
  lr.defaultProps = ri;
  lr.displayName = "GeistLoading";
  var ai = Q(lr),
    ea = ai;
  var ta = ea;
  var ni = function (e) {
      var r = M(function () {
          return typeof e == "function" ? e() : e;
        }),
        o = O(r, 2),
        n = o[0],
        s = o[1],
        i = pe(e);
      U(
        function () {
          i.current = n;
        },
        [n]
      );
      var l = function (m) {
        var a = typeof m == "function" ? m(i.current) : m;
        (i.current = a), s(a);
      };
      return [n, l, i];
    },
    ra = ni;
  var oa = ra;
  var qe = oa;
  var si = function (e) {
      var r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
        o = e.replace(r, function (s, i, l, c) {
          return "".concat(i).concat(i).concat(l).concat(l).concat(c).concat(c);
        }),
        n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o);
      if (!n) throw new Error("Geist UI: Unsupported ".concat(e, " color."));
      return [
        Number.parseInt(n[1], 16),
        Number.parseInt(n[2], 16),
        Number.parseInt(n[3], 16),
      ];
    },
    ii = function (e) {
      if (e.charAt(0) === "#") return si(e);
      var r = e.replace(/ /g, ""),
        o = e.substr(0, 4),
        n = r.match(/\((.+)\)/);
      if (!o.startsWith("rgb") || !n)
        throw (
          (console.log(e),
          new Error('Geist UI: Only support ["RGB", "RGBA", "HEX"] color.'))
        );
      return n[1].split(",").map(function (s) {
        return Number.parseFloat(s);
      });
    },
    wt = function (e, r) {
      if (!/^#|rgb|RGB/.test(e)) return e;
      var o = ii(e),
        n = O(o, 3),
        s = n[0],
        i = n[1],
        l = n[2],
        c = r > 1 ? 1 : r < 0 ? 0 : r;
      return "rgba("
        .concat(s, ", ")
        .concat(i, ", ")
        .concat(l, ", ")
        .concat(c, ")");
    };
  var li = { x: 0, y: 0 },
    ur = function (e) {
      var r = e.x,
        o = e.y,
        n = e.color,
        s = e.onCompleted,
        i = pe(null),
        l = Number.isNaN(+o) ? 0 : o - 10,
        c = Number.isNaN(+r) ? 0 : r - 10;
      return (
        U(function () {
          if (!!i.current)
            return (
              i.current.addEventListener("animationend", s),
              function () {
                !i.current || i.current.removeEventListener("animationend", s);
              }
            );
        }),
        d.createElement(
          "div",
          { ref: i, className: "jsx-3424889537 drip" },
          d.createElement(
            "svg",
            {
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              style: { top: l, left: c },
              className: "jsx-3424889537",
            },
            d.createElement(
              "g",
              {
                stroke: "none",
                strokeWidth: "1",
                fill: "none",
                fillRule: "evenodd",
                className: "jsx-3424889537",
              },
              d.createElement(
                "g",
                { fill: n, className: "jsx-3424889537" },
                d.createElement("rect", {
                  width: "100%",
                  height: "100%",
                  rx: "10",
                  className: "jsx-3424889537",
                })
              )
            )
          ),
          d.createElement(
            T,
            { id: "3424889537" },
            ".drip.jsx-3424889537{position:absolute;left:0;right:0;top:0;bottom:0;}svg.jsx-3424889537{position:absolute;-webkit-animation:350ms ease-in expand-jsx-3424889537;animation:350ms ease-in expand-jsx-3424889537;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;width:1rem;height:1rem;}@-webkit-keyframes expand-jsx-3424889537{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}30%{opacity:1;}80%{opacity:0.5;}100%{-webkit-transform:scale(28);-ms-transform:scale(28);transform:scale(28);opacity:0;}}@keyframes expand-jsx-3424889537{0%{opacity:0;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}30%{opacity:1;}80%{opacity:0.5;}100%{-webkit-transform:scale(28);-ms-transform:scale(28);transform:scale(28);opacity:0;}}"
          )
        )
      );
    };
  ur.defaultProps = li;
  ur.displayName = "GeistButtonDrip";
  var aa = ur;
  var na = function (e) {
    var r = e.color;
    return d.createElement(
      "div",
      { className: "jsx-3416748964 btn-loading" },
      d.createElement(ta, { color: r }),
      d.createElement(
        T,
        { id: "3416748964" },
        ".btn-loading.jsx-3416748964{position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;background-color:var(--geist-ui-button-bg);}"
      )
    );
  };
  na.displayName = "GeistButtonLoading";
  var sa = na;
  var ui = ["isRight", "isSingle", "children", "className"],
    ci = { isRight: !1, className: "" },
    cr = function (e) {
      var r = e.isRight,
        o = e.isSingle,
        n = e.children,
        s = e.className,
        i = W(e, ui),
        l = Z("icon", { right: r, single: o }, s);
      return d.createElement(
        "span",
        N({}, i, {
          className:
            "jsx-643337184 " +
            ((i && i.className != null && i.className) || l || ""),
        }),
        n,
        d.createElement(
          T,
          { id: "643337184" },
          ".icon.jsx-643337184{position:absolute;left:var(--geist-ui-button-icon-padding);right:auto;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--geist-ui-button-color);z-index:1;}.right.jsx-643337184{right:var(--geist-ui-button-icon-padding);left:auto;}.icon.jsx-643337184 svg{background:transparent;height:calc(var(--geist-ui-button-height) / 2.35);width:calc(var(--geist-ui-button-height) / 2.35);}.single.jsx-643337184{position:static;-webkit-transform:none;-ms-transform:none;transform:none;}"
        )
      );
    };
  cr.defaultProps = ci;
  cr.displayName = "GeistButtonIcon";
  var fr = cr;
  var ia = function (e, r, o) {
      var n = o.icon,
        s = o.iconRight,
        i = n || s,
        l = Boolean(s),
        c = e
          ? "calc(var(--geist-ui-button-height) / 2 + var(--geist-ui-button-icon-padding) * .5)"
          : 0,
        m = Z("text", l ? "right" : "left");
      return i
        ? d.Children.count(r) === 0
          ? d.createElement(fr, { isRight: l, isSingle: !0 }, i)
          : d.createElement(
              d.Fragment,
              null,
              d.createElement(fr, { isRight: l }, i),
              d.createElement(
                "div",
                {
                  className:
                    T.dynamic([["3568181479", [c, c]]]) + " " + (m || ""),
                },
                r,
                d.createElement(
                  T,
                  { id: "3568181479", dynamic: [c, c] },
                  ".left.__jsx-style-dynamic-selector{padding-left:"
                    .concat(
                      c,
                      ";}.right.__jsx-style-dynamic-selector{padding-right:"
                    )
                    .concat(c, ";}")
                )
              )
            )
        : d.createElement("div", { className: "text" }, r);
    },
    la = function (e, r) {
      return r.isButtonGroup
        ? N({}, e, {
            auto: !0,
            shadow: !1,
            ghost: r.ghost || e.ghost,
            type: r.type || e.type,
            disabled: r.disabled || e.disabled,
          })
        : e;
    };
  var fi = { isButtonGroup: !1, disabled: !1 },
    mi = d.createContext(fi),
    ua = function () {
      return d.useContext(mi);
    };
  var pi = function (e, r) {
      var o = {
        secondary: {
          bg: e.background,
          border: e.foreground,
          color: e.foreground,
        },
        success: { bg: e.background, border: e.success, color: e.success },
        warning: { bg: e.background, border: e.warning, color: e.warning },
        error: { bg: e.background, border: e.error, color: e.error },
      };
      return o[r] || null;
    },
    mr = function (e, r) {
      var o = r.type,
        n = r.disabled,
        s = r.ghost,
        i = {
          default: { bg: e.background, border: e.border, color: e.accents_5 },
          secondary: {
            bg: e.foreground,
            border: e.foreground,
            color: e.background,
          },
          success: { bg: e.success, border: e.success, color: "#fff" },
          warning: { bg: e.warning, border: e.warning, color: "#fff" },
          error: { bg: e.error, border: e.error, color: "#fff" },
          abort: {
            bg: "transparent",
            border: "transparent",
            color: e.accents_5,
          },
        };
      if (n) return { bg: e.accents_1, border: e.accents_2, color: "#ccc" };
      var l = o?.replace("-light", ""),
        c = i.default;
      return s ? pi(e, l) || c : i[l] || c;
    },
    di = function (e, r) {
      var o = {
          secondary: {
            bg: e.foreground,
            border: e.background,
            color: e.background,
          },
          success: { bg: e.success, border: e.background, color: "white" },
          warning: { bg: e.warning, border: e.background, color: "white" },
          error: { bg: e.error, border: e.background, color: "white" },
        },
        n = r.replace("-light", "");
      return o[n] || null;
    },
    pr = function (e, r) {
      var o = r.type,
        n = r.disabled,
        s = r.loading,
        i = r.shadow,
        l = r.ghost,
        c = mr(e, r),
        m = wt(c.bg, 0.85),
        a = {
          default: { bg: e.background, border: e.foreground },
          secondary: { bg: e.background, border: e.foreground },
          success: { bg: e.background, border: e.success },
          warning: { bg: e.background, border: e.warning },
          error: { bg: e.background, border: e.error },
          abort: {
            bg: "transparent",
            border: "transparent",
            color: e.accents_5,
          },
          "secondary-light": N({}, c, { bg: m }),
          "success-light": N({}, c, { bg: m }),
          "warning-light": N({}, c, { bg: m }),
          "error-light": N({}, c, { bg: m }),
        };
      if (n) return { bg: e.accents_1, border: e.accents_2, color: "#ccc" };
      if (s) return N({}, c, { color: "transparent" });
      if (i) return c;
      var f = (l ? di(e, o) : a[o]) || a.default;
      return N({}, f, { color: f.color || f.border });
    },
    ca = function (e, r) {
      return e
        ? { cursor: "not-allowed", events: "auto" }
        : r
        ? { cursor: "default", events: "none" }
        : { cursor: "pointer", events: "auto" };
    },
    fa = function (e, r) {
      var o = r.type,
        n = o.endsWith("light"),
        s = pr(e, r);
      return n ? wt(s.bg, 0.65) : wt(e.accents_2, 0.65);
    };
  var gi = [
      "children",
      "disabled",
      "type",
      "loading",
      "shadow",
      "ghost",
      "effect",
      "onClick",
      "auto",
      "icon",
      "htmlType",
      "iconRight",
      "className",
    ],
    hi = {
      type: "default",
      htmlType: "button",
      ghost: !1,
      loading: !1,
      shadow: !1,
      auto: !1,
      effect: !0,
      disabled: !1,
      className: "",
    },
    dr = d.forwardRef(function (t, e) {
      var r = G(),
        o = Y(),
        n = o.SCALES,
        s = pe(null);
      mt(e, function () {
        return s.current;
      });
      var i = M(!1),
        l = O(i, 2),
        c = l[0],
        m = l[1],
        a = M(0),
        f = O(a, 2),
        u = f[0],
        p = f[1],
        g = M(0),
        y = O(g, 2),
        h = y[0],
        A = y[1],
        E = ua(),
        v = la(t, E),
        _ = v.children,
        x = v.disabled,
        S = v.type,
        k = v.loading,
        w = v.shadow,
        D = v.ghost,
        I = v.effect,
        C = v.onClick,
        P = v.auto,
        L = v.icon,
        B = v.htmlType,
        K = v.iconRight,
        q = v.className,
        $ = W(v, gi),
        se = j(
          function () {
            return mr(r.palette, v);
          },
          [r.palette, v]
        ),
        oe = se.bg,
        ge = se.border,
        ie = se.color,
        R = j(
          function () {
            return pr(r.palette, v);
          },
          [r.palette, v]
        ),
        Qe = j(
          function () {
            return ca(x, k);
          },
          [x, k]
        ),
        ue = Qe.cursor,
        ee = Qe.events,
        Xe = j(
          function () {
            return fa(r.palette, v);
          },
          [r.palette, v]
        ),
        be = function () {
          m(!1), p(0), A(0);
        },
        Ye = function (fe) {
          if (!(x || k)) {
            var tt = !w && !D && I;
            if (tt && s.current) {
              var he = s.current.getBoundingClientRect();
              m(!0), p(fe.clientX - he.left), A(fe.clientY - he.top);
            }
            C && C(fe);
          }
        },
        we = j(
          function () {
            return ia(P, _, { icon: L, iconRight: K });
          },
          [P, _, L, K]
        ),
        Ae = P ? n.pl(1.15) : n.pl(1.375),
        ce = P ? n.pr(1.15) : n.pr(1.375);
      return d.createElement(
        "button",
        N({ ref: s, type: B, disabled: x, onClick: Ye }, $, {
          className:
            T.dynamic([
              [
                "86551275",
                [
                  n.height(2.5),
                  r.layout.radius,
                  n.font(0.875),
                  ie,
                  oe,
                  ge,
                  ue,
                  ee,
                  w ? r.expressiveness.shadowSmall : "none",
                  n.pl(0.727),
                  n.height(2.5),
                  ie,
                  oe,
                  P ? "min-content" : n.width(10.5),
                  P ? "auto" : "initial",
                  n.height(2.5),
                  n.pt(0),
                  ce,
                  n.pb(0),
                  Ae,
                  n.mt(0),
                  n.mr(0),
                  n.mb(0),
                  n.ml(0),
                  R.color,
                  R.color,
                  R.bg,
                  R.border,
                  ue,
                  ee,
                  w ? r.expressiveness.shadowMedium : "none",
                  w ? "-1px" : "0px",
                ],
              ],
            ]) +
            " " +
            (($ && $.className != null && $.className) || Z("btn", q) || ""),
        }),
        k && d.createElement(sa, { color: ie }),
        we,
        c && d.createElement(aa, { x: u, y: h, color: Xe, onCompleted: be }),
        d.createElement(
          T,
          {
            id: "86551275",
            dynamic: [
              n.height(2.5),
              r.layout.radius,
              n.font(0.875),
              ie,
              oe,
              ge,
              ue,
              ee,
              w ? r.expressiveness.shadowSmall : "none",
              n.pl(0.727),
              n.height(2.5),
              ie,
              oe,
              P ? "min-content" : n.width(10.5),
              P ? "auto" : "initial",
              n.height(2.5),
              n.pt(0),
              ce,
              n.pb(0),
              Ae,
              n.mt(0),
              n.mr(0),
              n.mb(0),
              n.ml(0),
              R.color,
              R.color,
              R.bg,
              R.border,
              ue,
              ee,
              w ? r.expressiveness.shadowMedium : "none",
              w ? "-1px" : "0px",
            ],
          },
          ".btn.__jsx-style-dynamic-selector{box-sizing:border-box;display:inline-block;line-height:"
            .concat(n.height(2.5), ";border-radius:")
            .concat(r.layout.radius, ";font-weight:400;font-size:")
            .concat(
              n.font(0.875),
              ";-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;outline:none;text-transform:capitalize;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;white-space:nowrap;-webkit-transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms, border 200ms ease 0ms,color 200ms ease 0ms;transition:background-color 200ms ease 0ms,box-shadow 200ms ease 0ms, border 200ms ease 0ms,color 200ms ease 0ms;position:relative;overflow:hidden;color:"
            )
            .concat(ie, ";background-color:")
            .concat(oe, ";border:1px solid ")
            .concat(ge, ";cursor:")
            .concat(ue, ";pointer-events:")
            .concat(ee, ";box-shadow:")
            .concat(
              w ? r.expressiveness.shadowSmall : "none",
              ";--geist-ui-button-icon-padding:"
            )
            .concat(n.pl(0.727), ";--geist-ui-button-height:")
            .concat(n.height(2.5), ";--geist-ui-button-color:")
            .concat(ie, ";--geist-ui-button-bg:")
            .concat(oe, ";min-width:")
            .concat(P ? "min-content" : n.width(10.5), ";width:")
            .concat(P ? "auto" : "initial", ";height:")
            .concat(n.height(2.5), ";padding:")
            .concat(n.pt(0), " ")
            .concat(ce, " ")
            .concat(n.pb(0), " ")
            .concat(Ae, ";margin:")
            .concat(n.mt(0), " ")
            .concat(n.mr(0), " ")
            .concat(n.mb(0), " ")
            .concat(
              n.ml(0),
              ";}.btn.__jsx-style-dynamic-selector:hover,.btn.__jsx-style-dynamic-selector:focus{color:"
            )
            .concat(R.color, ";--geist-ui-button-color:")
            .concat(R.color, ";background-color:")
            .concat(R.bg, ";border-color:")
            .concat(R.border, ";cursor:")
            .concat(ue, ";pointer-events:")
            .concat(ee, ";box-shadow:")
            .concat(
              w ? r.expressiveness.shadowMedium : "none",
              ";-webkit-transform:translate3d(0px,"
            )
            .concat(w ? "-1px" : "0px", ",0px);-ms-transform:translate3d(0px,")
            .concat(w ? "-1px" : "0px", ",0px);transform:translate3d(0px,")
            .concat(
              w ? "-1px" : "0px",
              ",0px);}.btn.__jsx-style-dynamic-selector .text{position:relative;z-index:1;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;line-height:inherit;top:-1px;}.btn.__jsx-style-dynamic-selector .text p,.btn.__jsx-style-dynamic-selector .text pre,.btn.__jsx-style-dynamic-selector .text div{margin:0;}"
            )
        )
      );
    });
  dr.defaultProps = hi;
  dr.displayName = "GeistButton";
  var _i = Q(dr),
    ma = _i;
  var pa = ma;
  var gr = {
      padding: "12px 16px",
      margin: "8px 0",
      width: "420px",
      maxWidth: "90vw",
      maxHeight: "75px",
      placement: "bottomRight",
    },
    xi = {
      toasts: [],
      toastLayout: gr,
      updateToastLayout: function (e) {
        return e;
      },
      updateToasts: function (e) {
        return e;
      },
      lastUpdateToastId: null,
      updateLastToastId: function () {
        return null;
      },
    },
    hr = d.createContext(xi),
    da = function () {
      return d.useContext(hr);
    };
  var vi = { themes: bt.getPresets() },
    ga = d.createContext(vi);
  var yi = function (e) {
      var r = e.children,
        o = e.themeType,
        n = e.themes,
        s = n === void 0 ? [] : n,
        i = M({ themes: ye.getPresets() }),
        l = O(i, 2),
        c = l[0],
        m = l[1],
        a = j(
          function () {
            var f = c.themes.find(function (u) {
              return u.type === o;
            });
            return f || ye.getPresetStaticTheme();
          },
          [c, o]
        );
      return (
        U(
          function () {
            !(s != null && s.length) ||
              m(function (f) {
                var u = s.filter(function (g) {
                    return ye.isAvailableThemeType(g.type);
                  }),
                  p = ye.getPresets().concat(u);
                return N({}, f, { themes: p });
              });
          },
          [s]
        ),
        d.createElement(
          ga.Provider,
          { value: c },
          d.createElement(ar.Provider, { value: a }, r)
        )
      );
    },
    ha = yi;
  var _a = function (e, r) {
      var o = function (s, i) {
        i && i(s, r);
      };
      return !e || !e.length
        ? null
        : e.map(function (n, s) {
            return d.createElement(
              pa,
              {
                auto: !0,
                scale: 1 / 3,
                font: "13px",
                type: n.passive ? "default" : "secondary",
                key: "action-".concat(s),
                onClick: function (l) {
                  return o(l, n.handler);
                },
              },
              n.name
            );
          });
    },
    xa = function (e, r) {
      var o = {
          default: e.background,
          secondary: e.secondary,
          success: e.success,
          warning: e.warning,
          error: e.error,
        },
        n = !r || r === "default";
      return n
        ? { bgColor: o.default, color: e.foreground }
        : { bgColor: o[r], color: "white" };
    },
    op = ne("topLeft", "topRight", "bottomLeft", "bottomRight"),
    va = function (e) {
      return "".concat(e).toLowerCase().startsWith("top");
    },
    ya = function (e) {
      return "".concat(e).toLowerCase().endsWith("left");
    },
    ba = function (e) {
      var r = {
          topLeft: "translate(-60px, -60px)",
          topRight: "translate(60px, -60px)",
          bottomLeft: "translate(-60px, 60px)",
          bottomRight: "translate(60px, 60px)",
        },
        o = {
          topLeft: "translate(-50px, 15px) scale(0.85)",
          topRight: "translate(50px, 15px) scale(0.85)",
          bottomLeft: "translate(-50px, -15px) scale(0.85)",
          bottomRight: "translate(50px, -15px) scale(0.85)",
        };
      return { enter: r[e], leave: o[e] };
    };
  var bi = d.memo(function (t) {
      var e = t.toast,
        r = t.layout,
        o = G(),
        n = j(
          function () {
            return xa(o.palette, e.type);
          },
          [o.palette, e.type]
        ),
        s = n.color,
        i = n.bgColor,
        l = typeof e.text != "string",
        c = r.padding,
        m = r.margin,
        a = r.maxHeight,
        f = r.maxWidth,
        u = r.width,
        p = r.placement,
        g = j(
          function () {
            return ba(p);
          },
          [p]
        ),
        y = g.enter,
        h = g.leave;
      return d.createElement(
        Xo,
        { name: "toast", visible: e.visible, clearTime: 350 },
        d.createElement(
          "div",
          {
            key: e.id,
            className:
              T.dynamic([
                [
                  "1407001838",
                  [
                    u,
                    f,
                    a,
                    o.palette.foreground,
                    i,
                    s,
                    o.layout.radius,
                    o.expressiveness.shadowSmall,
                    o.layout.gapHalf,
                    y,
                    m,
                    c,
                    m,
                    c,
                    h,
                  ],
                ],
              ]) + " toast",
          },
          l
            ? e.text
            : d.createElement(
                d.Fragment,
                null,
                d.createElement(
                  "div",
                  {
                    className:
                      T.dynamic([
                        [
                          "1407001838",
                          [
                            u,
                            f,
                            a,
                            o.palette.foreground,
                            i,
                            s,
                            o.layout.radius,
                            o.expressiveness.shadowSmall,
                            o.layout.gapHalf,
                            y,
                            m,
                            c,
                            m,
                            c,
                            h,
                          ],
                        ],
                      ]) + " message",
                  },
                  e.text
                ),
                d.createElement(
                  "div",
                  {
                    className:
                      T.dynamic([
                        [
                          "1407001838",
                          [
                            u,
                            f,
                            a,
                            o.palette.foreground,
                            i,
                            s,
                            o.layout.radius,
                            o.expressiveness.shadowSmall,
                            o.layout.gapHalf,
                            y,
                            m,
                            c,
                            m,
                            c,
                            h,
                          ],
                        ],
                      ]) + " action",
                  },
                  _a(e.actions, e.cancel)
                )
              ),
          d.createElement(
            T,
            {
              id: "1407001838",
              dynamic: [
                u,
                f,
                a,
                o.palette.foreground,
                i,
                s,
                o.layout.radius,
                o.expressiveness.shadowSmall,
                o.layout.gapHalf,
                y,
                m,
                c,
                m,
                c,
                h,
              ],
            },
            ".toast.__jsx-style-dynamic-selector{width:"
              .concat(u, ";max-width:")
              .concat(f, ";max-height:")
              .concat(
                a,
                ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:"
              )
              .concat(o.palette.foreground, ";background-color:")
              .concat(i, ";color:")
              .concat(s, ";border:0;border-radius:")
              .concat(o.layout.radius, ";opacity:1;box-shadow:")
              .concat(
                o.expressiveness.shadowSmall,
                ";-webkit-transition:all 350ms cubic-bezier(0.1,0.2,0.1,1);transition:all 350ms cubic-bezier(0.1,0.2,0.1,1);overflow:hidden;}.message.__jsx-style-dynamic-selector{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;font-size:0.875em;display:-webkit-box;word-break:break-all;padding-right:"
              )
              .concat(
                o.layout.gapHalf,
                ";overflow:hidden;max-height:100%;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:2;line-height:1.1rem;}.toast-enter.__jsx-style-dynamic-selector{opacity:0;height:0;padding:0;margin:0;-webkit-transform:"
              )
              .concat(y, ";-ms-transform:")
              .concat(y, ";transform:")
              .concat(
                y,
                ";}.toast-enter-active.__jsx-style-dynamic-selector{opacity:1;height:auto;margin:"
              )
              .concat(m, ";padding:")
              .concat(
                c,
                ";-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);}.toast-leave.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);height:auto;margin:"
              )
              .concat(m, ";padding:")
              .concat(
                c,
                ";}.toast-leave-active.__jsx-style-dynamic-selector{opacity:0;-webkit-transform:"
              )
              .concat(h, ";-ms-transform:")
              .concat(h, ";transform:")
              .concat(h, ";}")
          )
        )
      );
    }),
    wa = bi;
  var wi = function () {
      var e = G(),
        r = Qo("toast"),
        o = qe(!1),
        n = O(o, 3),
        s = n[1],
        i = n[2],
        l = da(),
        c = l.toasts,
        m = l.updateToasts,
        a = l.toastLayout,
        f = l.lastUpdateToastId,
        u = j(
          function () {
            return a;
          },
          [a]
        ),
        p = j(
          function () {
            return c.map(function (h) {
              return d.createElement(wa, {
                toast: h,
                layout: u,
                key: h._internalIdent,
              });
            });
          },
          [c, u]
        ),
        g = j(
          function () {
            return Z("toasts", { top: va(a.placement), left: ya(a.placement) });
          },
          [u]
        ),
        y = function (A) {
          if ((s(A), A))
            return m(function (E) {
              return E.map(function (v) {
                return v.visible
                  ? (v._timeout && window.clearTimeout(v._timeout),
                    N({}, v, { timeout: null }))
                  : v;
              });
            });
          m(function (E) {
            return E.map(function (v, _) {
              return v.visible
                ? (v._timeout && window.clearTimeout(v._timeout),
                  N({}, v, {
                    _timeout: (function () {
                      var x = window.setTimeout(function () {
                        v.cancel(), window.clearTimeout(x);
                      }, v.delay + _ * 100);
                      return x;
                    })(),
                  }))
                : v;
            });
          });
        };
      return (
        U(
          function () {
            var h = c.findIndex(function (v) {
                return v._internalIdent === f;
              }),
              A = c[h];
            if (!(!A || A.visible || !i.current)) {
              var E = c.find(function (v, _) {
                return _ < h && v.visible;
              });
              E || !i.current || y(!1);
            }
          },
          [c, f]
        ),
        U(
          function () {
            var h = null,
              A = window.setInterval(function () {
                c.length !== 0 &&
                  (h = window.setTimeout(function () {
                    var E = !c.find(function (v) {
                      return v.visible;
                    });
                    E &&
                      m(function () {
                        return [];
                      }),
                      h && clearTimeout(h);
                  }, 350));
              }, 5e3);
            return function () {
              A && clearInterval(A), h && clearTimeout(h);
            };
          },
          [c]
        ),
        !r || !c || c.length === 0
          ? null
          : tr(
              d.createElement(
                "div",
                {
                  onMouseEnter: function () {
                    return y(!0);
                  },
                  onMouseLeave: function () {
                    return y(!1);
                  },
                  className:
                    T.dynamic([
                      [
                        "622610754",
                        [
                          e.layout.gap,
                          e.layout.gap,
                          e.layout.gap,
                          e.layout.gap,
                        ],
                      ],
                    ]) +
                    " " +
                    (g || ""),
                },
                p,
                d.createElement(
                  T,
                  {
                    id: "622610754",
                    dynamic: [
                      e.layout.gap,
                      e.layout.gap,
                      e.layout.gap,
                      e.layout.gap,
                    ],
                  },
                  ".toasts.__jsx-style-dynamic-selector{position:fixed;width:auto;max-width:100%;right:"
                    .concat(e.layout.gap, ";bottom:")
                    .concat(
                      e.layout.gap,
                      ";z-index:2000;-webkit-transition:all 400ms ease;transition:all 400ms ease;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.top.__jsx-style-dynamic-selector{bottom:unset;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;top:"
                    )
                    .concat(
                      e.layout.gap,
                      ";}.left.__jsx-style-dynamic-selector{right:unset;left:"
                    )
                    .concat(e.layout.gap, ";}")
                )
              ),
              r
            )
      );
    },
    Aa = wi;
  var Ai = function (e) {
      var r = e.themes,
        o = e.themeType,
        n = e.children,
        s = M(null),
        i = O(s, 2),
        l = i[0],
        c = i[1],
        m = qe([]),
        a = O(m, 3),
        f = a[0],
        u = a[1],
        p = a[2],
        g = qe(gr),
        y = O(g, 3),
        h = y[0],
        A = y[1],
        E = y[2],
        v = function (w) {
          var D = w(p.current);
          u(D);
        },
        _ = function (w) {
          var D = w(E.current);
          A(D);
        },
        x = function (w) {
          c(w());
        },
        S = j(
          function () {
            return {
              toasts: f,
              toastLayout: h,
              updateToasts: v,
              lastUpdateToastId: l,
              updateToastLayout: _,
              updateLastToastId: x,
            };
          },
          [f, h, l]
        );
      return d.createElement(
        hr.Provider,
        { value: S },
        d.createElement(
          ha,
          { themes: r, themeType: o },
          n,
          d.createElement(Aa, null)
        )
      );
    },
    Sa = Ai;
  var _r = Sa;
  var Si = { disabledAll: !1, inGroup: !1 },
    xr = d.createContext(Si),
    ka = function () {
      return d.useContext(xr);
    };
  var ki = ["className", "children"],
    Ci = { className: "" },
    vr = function (e) {
      var r = e.className,
        o = e.children,
        n = W(e, ki),
        s = G(),
        i = Y(),
        l = i.SCALES;
      return d.createElement(
        "span",
        N({}, n, {
          className:
            T.dynamic([
              [
                "2489497926",
                [
                  s.palette.accents_3,
                  l.font(0.85, "calc(var(--radio-size) * 0.85)"),
                  l.width(1, "auto"),
                  l.height(1, "auto"),
                  l.pt(0),
                  l.pr(0),
                  l.pb(0),
                  l.pl(0),
                  l.mt(0),
                  l.mr(0),
                  l.mb(0),
                  l.ml(
                    0,
                    "calc(var(--radio-size) + var(--radio-size) * 0.375)"
                  ),
                ],
              ],
            ]) +
            " " +
            ((n && n.className != null && n.className) || r || ""),
        }),
        o,
        d.createElement(
          T,
          {
            id: "2489497926",
            dynamic: [
              s.palette.accents_3,
              l.font(0.85, "calc(var(--radio-size) * 0.85)"),
              l.width(1, "auto"),
              l.height(1, "auto"),
              l.pt(0),
              l.pr(0),
              l.pb(0),
              l.pl(0),
              l.mt(0),
              l.mr(0),
              l.mb(0),
              l.ml(0, "calc(var(--radio-size) + var(--radio-size) * 0.375)"),
            ],
          },
          "span.__jsx-style-dynamic-selector{color:"
            .concat(s.palette.accents_3, ";font-size:")
            .concat(l.font(0.85, "calc(var(--radio-size) * 0.85)"), ";width:")
            .concat(l.width(1, "auto"), ";height:")
            .concat(l.height(1, "auto"), ";padding:")
            .concat(l.pt(0), " ")
            .concat(l.pr(0), " ")
            .concat(l.pb(0), " ")
            .concat(l.pl(0), ";margin:")
            .concat(l.mt(0), " ")
            .concat(l.mr(0), " ")
            .concat(l.mb(0), " ")
            .concat(
              l.ml(0, "calc(var(--radio-size) + var(--radio-size) * 0.375)"),
              ";}"
            )
        )
      );
    };
  vr.defaultProps = Ci;
  vr.displayName = "GeistRadioDescription";
  var Ti = Q(vr),
    $e = Ti;
  var Ca = function (e, r) {
    var o = {
      default: { label: e.foreground, border: e.border, bg: e.foreground },
      secondary: { label: e.foreground, border: e.border, bg: e.foreground },
      success: { label: e.success, border: e.success, bg: e.success },
      warning: { label: e.warning, border: e.warning, bg: e.warning },
      error: { label: e.error, border: e.error, bg: e.error },
    };
    return r ? o[r] : o.default;
  };
  var Ri = [
      "className",
      "checked",
      "onChange",
      "disabled",
      "type",
      "value",
      "children",
    ],
    Ei = { type: "default", disabled: !1, className: "" },
    yr = function (e) {
      var r = e.className,
        o = e.checked,
        n = e.onChange,
        s = e.disabled,
        i = e.type,
        l = e.value,
        c = e.children,
        m = W(e, Ri),
        a = G(),
        f = Y(),
        u = f.SCALES,
        p = M(!!o),
        g = O(p, 2),
        y = g[0],
        h = g[1],
        A = ka(),
        E = A.value,
        v = A.disabledAll,
        _ = A.inGroup,
        x = A.updateState,
        S = Ho(c, $e),
        k = O(S, 2),
        w = k[0],
        D = k[1];
      _ &&
        (o !== void 0 &&
          ir('Remove props "checked" if in the Radio.Group.', "Radio"),
        l === void 0 &&
          ir('Props "value" must be deinfed if in the Radio.Group.', "Radio"),
        U(
          function () {
            h(E === l);
          },
          [E, l]
        ));
      var I = j(
          function () {
            return Ca(a.palette, i);
          },
          [a.palette, i]
        ),
        C = I.label,
        P = I.border,
        L = I.bg,
        B = j(
          function () {
            return s || v;
          },
          [s, v]
        ),
        K = function ($) {
          if (!B) {
            var se = {
              target: { checked: !y },
              stopPropagation: $.stopPropagation,
              preventDefault: $.preventDefault,
              nativeEvent: $,
            };
            h(!y), _ && x && x(l), n && n(se);
          }
        };
      return (
        U(
          function () {
            o !== void 0 && h(Boolean(o));
          },
          [o]
        ),
        d.createElement(
          "div",
          {
            className:
              T.dynamic([
                [
                  "2664604043",
                  [
                    u.font(1),
                    u.width(1, "initial"),
                    u.height(1, "auto"),
                    u.pt(0),
                    u.pr(0),
                    u.pb(0),
                    u.pl(0),
                    u.mt(0),
                    u.mr(0),
                    u.mb(0),
                    u.ml(0),
                    B ? a.palette.accents_4 : C,
                    B ? "not-allowed" : "pointer",
                    P,
                    B ? a.palette.accents_4 : L,
                  ],
                ],
              ]) +
              " " +
              (Z("radio", r) || ""),
          },
          d.createElement(
            "label",
            {
              className: T.dynamic([
                [
                  "2664604043",
                  [
                    u.font(1),
                    u.width(1, "initial"),
                    u.height(1, "auto"),
                    u.pt(0),
                    u.pr(0),
                    u.pb(0),
                    u.pl(0),
                    u.mt(0),
                    u.mr(0),
                    u.mb(0),
                    u.ml(0),
                    B ? a.palette.accents_4 : C,
                    B ? "not-allowed" : "pointer",
                    P,
                    B ? a.palette.accents_4 : L,
                  ],
                ],
              ]),
            },
            d.createElement(
              "input",
              N({ type: "radio", value: l, checked: y, onChange: K }, m, {
                className:
                  T.dynamic([
                    [
                      "2664604043",
                      [
                        u.font(1),
                        u.width(1, "initial"),
                        u.height(1, "auto"),
                        u.pt(0),
                        u.pr(0),
                        u.pb(0),
                        u.pl(0),
                        u.mt(0),
                        u.mr(0),
                        u.mb(0),
                        u.ml(0),
                        B ? a.palette.accents_4 : C,
                        B ? "not-allowed" : "pointer",
                        P,
                        B ? a.palette.accents_4 : L,
                      ],
                    ],
                  ]) +
                  " " +
                  ((m && m.className != null && m.className) || ""),
              })
            ),
            d.createElement(
              "span",
              {
                className:
                  T.dynamic([
                    [
                      "2664604043",
                      [
                        u.font(1),
                        u.width(1, "initial"),
                        u.height(1, "auto"),
                        u.pt(0),
                        u.pr(0),
                        u.pb(0),
                        u.pl(0),
                        u.mt(0),
                        u.mr(0),
                        u.mb(0),
                        u.ml(0),
                        B ? a.palette.accents_4 : C,
                        B ? "not-allowed" : "pointer",
                        P,
                        B ? a.palette.accents_4 : L,
                      ],
                    ],
                  ]) + " name",
              },
              d.createElement("span", {
                className:
                  T.dynamic([
                    [
                      "2664604043",
                      [
                        u.font(1),
                        u.width(1, "initial"),
                        u.height(1, "auto"),
                        u.pt(0),
                        u.pr(0),
                        u.pb(0),
                        u.pl(0),
                        u.mt(0),
                        u.mr(0),
                        u.mb(0),
                        u.ml(0),
                        B ? a.palette.accents_4 : C,
                        B ? "not-allowed" : "pointer",
                        P,
                        B ? a.palette.accents_4 : L,
                      ],
                    ],
                  ]) +
                  " " +
                  (Z("point", { active: y }) || ""),
              }),
              w
            ),
            D && D
          ),
          d.createElement(
            T,
            {
              id: "2664604043",
              dynamic: [
                u.font(1),
                u.width(1, "initial"),
                u.height(1, "auto"),
                u.pt(0),
                u.pr(0),
                u.pb(0),
                u.pl(0),
                u.mt(0),
                u.mr(0),
                u.mb(0),
                u.ml(0),
                B ? a.palette.accents_4 : C,
                B ? "not-allowed" : "pointer",
                P,
                B ? a.palette.accents_4 : L,
              ],
            },
            "input.__jsx-style-dynamic-selector{opacity:0;visibility:hidden;overflow:hidden;width:1px;height:1px;top:-1000px;right:-1000px;position:fixed;font-size:0;}.radio.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;position:relative;--radio-size:"
              .concat(u.font(1), ";width:")
              .concat(u.width(1, "initial"), ";height:")
              .concat(u.height(1, "auto"), ";padding:")
              .concat(u.pt(0), " ")
              .concat(u.pr(0), " ")
              .concat(u.pb(0), " ")
              .concat(u.pl(0), ";margin:")
              .concat(u.mt(0), " ")
              .concat(u.mr(0), " ")
              .concat(u.mb(0), " ")
              .concat(
                u.ml(0),
                ";}label.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;color:"
              )
              .concat(B ? a.palette.accents_4 : C, ";cursor:")
              .concat(
                B ? "not-allowed" : "pointer",
                ";}.name.__jsx-style-dynamic-selector{font-size:var(--radio-size);font-weight:bold;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.point.__jsx-style-dynamic-selector{height:var(--radio-size);width:var(--radio-size);border-radius:50%;border:1px solid "
              )
              .concat(
                P,
                ";-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;position:relative;display:inline-block;-webkit-transform:scale(0.875);-ms-transform:scale(0.875);transform:scale(0.875);margin-right:calc(var(--radio-size) * 0.375);}.point.__jsx-style-dynamic-selector:before{content:'';position:absolute;left:-1px;top:-1px;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);height:var(--radio-size);width:var(--radio-size);border-radius:50%;background-color:"
              )
              .concat(
                B ? a.palette.accents_4 : L,
                ";}.active.__jsx-style-dynamic-selector:before{-webkit-transform:scale(0.875);-ms-transform:scale(0.875);transform:scale(0.875);-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;}"
              )
          )
        )
      );
    };
  yr.defaultProps = Ei;
  yr.displayName = "GeistRadio";
  var Ni = Q(yr),
    Je = Ni;
  var ji = [
      "disabled",
      "onChange",
      "value",
      "children",
      "className",
      "initialValue",
      "useRow",
    ],
    Pi = { disabled: !1, className: "", useRow: !1 },
    br = function (e) {
      var r = e.disabled,
        o = e.onChange,
        n = e.value,
        s = e.children,
        i = e.className,
        l = e.initialValue,
        c = e.useRow,
        m = W(e, ji),
        a = Y(),
        f = a.SCALES,
        u = M(l),
        p = O(u, 2),
        g = p[0],
        y = p[1],
        h = function (v) {
          y(v), o && o(v);
        },
        A = j(
          function () {
            return { updateState: h, disabledAll: r, inGroup: !0, value: g };
          },
          [r, g]
        );
      return (
        U(
          function () {
            n !== void 0 && y(n);
          },
          [n]
        ),
        d.createElement(
          xr.Provider,
          { value: A },
          d.createElement(
            "div",
            N({}, m, {
              className:
                T.dynamic([
                  [
                    "1223822443",
                    [
                      c ? "col" : "column",
                      f.font(1),
                      f.width(1, "auto"),
                      f.height(1, "auto"),
                      f.pt(0),
                      f.pr(0),
                      f.pb(0),
                      f.pl(0),
                      f.mt(0),
                      f.mr(0),
                      f.mb(0),
                      f.ml(0),
                      c ? 0 : "var(--radio-group-gap)",
                      c ? "var(--radio-group-gap)" : 0,
                      f.font(1),
                    ],
                  ],
                ]) +
                " " +
                ((m && m.className != null && m.className) ||
                  Z("radio-group", i) ||
                  ""),
            }),
            s
          ),
          d.createElement(
            T,
            {
              id: "1223822443",
              dynamic: [
                c ? "col" : "column",
                f.font(1),
                f.width(1, "auto"),
                f.height(1, "auto"),
                f.pt(0),
                f.pr(0),
                f.pb(0),
                f.pl(0),
                f.mt(0),
                f.mr(0),
                f.mb(0),
                f.ml(0),
                c ? 0 : "var(--radio-group-gap)",
                c ? "var(--radio-group-gap)" : 0,
                f.font(1),
              ],
            },
            ".radio-group.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:"
              .concat(c ? "col" : "column", ";-ms-flex-direction:")
              .concat(c ? "col" : "column", ";flex-direction:")
              .concat(c ? "col" : "column", ";--radio-group-gap:")
              .concat(f.font(1), ";width:")
              .concat(f.width(1, "auto"), ";height:")
              .concat(f.height(1, "auto"), ";padding:")
              .concat(f.pt(0), " ")
              .concat(f.pr(0), " ")
              .concat(f.pb(0), " ")
              .concat(f.pl(0), ";margin:")
              .concat(f.mt(0), " ")
              .concat(f.mr(0), " ")
              .concat(f.mb(0), " ")
              .concat(
                f.ml(0),
                ";}.radio-group.__jsx-style-dynamic-selector .radio{margin-top:"
              )
              .concat(c ? 0 : "var(--radio-group-gap)", ";margin-left:")
              .concat(c ? "var(--radio-group-gap)" : 0, ";--radio-size:")
              .concat(
                f.font(1),
                ";}.radio-group.__jsx-style-dynamic-selector .radio:first-of-type{margin:0;}"
              )
          )
        )
      );
    };
  br.defaultProps = Pi;
  br.displayName = "GeistRadioGroup";
  var Bi = Q(br),
    Ta = Bi;
  Je.Group = Ta;
  Je.Description = $e;
  Je.Desc = $e;
  var Ee = Je;
  var Di = ["children", "tag", "className", "type"],
    Li = { type: "default", className: "" },
    Oi = function (e, r) {
      var o = {
        default: "inherit",
        secondary: r.secondary,
        success: r.success,
        warning: r.warning,
        error: r.error,
      };
      return o[e] || o.default;
    },
    wr = function (e) {
      var r = e.children,
        o = e.tag,
        n = e.className,
        s = e.type,
        i = W(e, Di),
        l = o,
        c = G(),
        m = Y(),
        a = m.SCALES,
        f = m.getScaleProps,
        u = f("font"),
        p = f(["margin", "marginLeft", "marginRight", "mx", "ml", "mr"]),
        g = f(["margin", "marginTop", "marginBottom", "my", "mt", "mb"]),
        y = f(["padding", "paddingLeft", "paddingRight", "pl", "pr", "px"]),
        h = f(["padding", "paddingTop", "paddingBottom", "pt", "pb", "py"]),
        A = j(
          function () {
            return Oi(s, c.palette);
          },
          [s, c.palette]
        ),
        E = j(
          function () {
            var v = [
                { value: p, className: "mx" },
                { value: g, className: "my" },
                { value: y, className: "px" },
                { value: h, className: "py" },
                { value: u, className: "font" },
              ],
              _ = v.reduce(function (x, S) {
                return typeof S.value > "u"
                  ? x
                  : "".concat(x, " ").concat(S.className);
              }, "");
            return "".concat(_, " ").concat(n).trim();
          },
          [p, g, y, h, u, n]
        );
      return d.createElement(
        l,
        N({}, i, {
          className:
            T.dynamic([
              [
                "3155699851",
                [
                  o,
                  A,
                  a.width(1, "auto"),
                  a.height(1, "auto"),
                  a.font(1, "inherit"),
                  a.ml(0, "revert"),
                  a.mr(0, "revert"),
                  a.mt(0, "revert"),
                  a.mb(0, "revert"),
                  a.pl(0, "revert"),
                  a.pr(0, "revert"),
                  a.pt(0, "revert"),
                  a.pb(0, "revert"),
                ],
              ],
            ]) +
            " " +
            ((i && i.className != null && i.className) || E || ""),
        }),
        r,
        d.createElement(
          T,
          {
            id: "3155699851",
            dynamic: [
              o,
              A,
              a.width(1, "auto"),
              a.height(1, "auto"),
              a.font(1, "inherit"),
              a.ml(0, "revert"),
              a.mr(0, "revert"),
              a.mt(0, "revert"),
              a.mb(0, "revert"),
              a.pl(0, "revert"),
              a.pr(0, "revert"),
              a.pt(0, "revert"),
              a.pb(0, "revert"),
            ],
          },
          ""
            .concat(o, ".__jsx-style-dynamic-selector{color:")
            .concat(A, ";width:")
            .concat(a.width(1, "auto"), ";height:")
            .concat(
              a.height(1, "auto"),
              ";}.font.__jsx-style-dynamic-selector{font-size:"
            )
            .concat(
              a.font(1, "inherit"),
              ";}.mx.__jsx-style-dynamic-selector{margin-left:"
            )
            .concat(a.ml(0, "revert"), ";margin-right:")
            .concat(
              a.mr(0, "revert"),
              ";}.my.__jsx-style-dynamic-selector{margin-top:"
            )
            .concat(a.mt(0, "revert"), ";margin-bottom:")
            .concat(
              a.mb(0, "revert"),
              ";}.px.__jsx-style-dynamic-selector{padding-left:"
            )
            .concat(a.pl(0, "revert"), ";padding-right:")
            .concat(
              a.pr(0, "revert"),
              ";}.py.__jsx-style-dynamic-selector{padding-top:"
            )
            .concat(a.pt(0, "revert"), ";padding-bottom:")
            .concat(a.pb(0, "revert"), ";}")
        )
      );
    };
  wr.defaultProps = Li;
  wr.displayName = "GeistTextChild";
  var Ar = wr;
  var Ii = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "b",
      "small",
      "i",
      "span",
      "del",
      "em",
      "blockquote",
      "children",
      "className",
    ],
    Mi = {
      h1: !1,
      h2: !1,
      h3: !1,
      h4: !1,
      h5: !1,
      h6: !1,
      p: !1,
      b: !1,
      small: !1,
      i: !1,
      span: !1,
      del: !1,
      em: !1,
      blockquote: !1,
      className: "",
      type: "default",
    },
    Ui = function t(e, r) {
      if (!e.length) return r;
      var o = e.slice(1, e.length);
      return d.createElement(Ar, { tag: e[0] }, t(o, r));
    },
    Sr = function (e) {
      var r = e.h1,
        o = e.h2,
        n = e.h3,
        s = e.h4,
        i = e.h5,
        l = e.h6,
        c = e.p,
        m = e.b,
        a = e.small,
        f = e.i,
        u = e.span,
        p = e.del,
        g = e.em,
        y = e.blockquote,
        h = e.children,
        A = e.className,
        E = W(e, Ii),
        v = { h1: r, h2: o, h3: n, h4: s, h5: i, h6: l, p: c, blockquote: y },
        _ = { span: u, small: a, b: m, em: g, i: f, del: p },
        x = Object.keys(v).filter(function (I) {
          return v[I];
        }),
        S = Object.keys(_).filter(function (I) {
          return _[I];
        }),
        k = j(
          function () {
            return x[0] ? x[0] : S[0] ? S[0] : "p";
          },
          [x, S]
        ),
        w = S.filter(function (I) {
          return I !== k;
        }),
        D = j(
          function () {
            return w.length ? Ui(w, h) : h;
          },
          [w, h]
        );
      return d.createElement(Ar, N({ className: A, tag: k }, E), D);
    };
  Sr.defaultProps = Mi;
  Sr.displayName = "GeistText";
  var Fi = Q(Sr),
    Ra = Fi;
  var Ze = Ra;
  var { flushToHTML: Ea } = gt;
  var Na = gt;
  var zi = function (e) {
      var r = e.children,
        o = G();
      return d.createElement(
        d.Fragment,
        null,
        r,
        d.createElement(
          T,
          {
            id: "1357910706",
            dynamic: [
              o.palette.background,
              o.palette.foreground,
              o.palette.background,
              o.font.sans,
              o.font.sans,
              o.palette.link,
              o.expressiveness.linkStyle,
              o.expressiveness.linkHoverStyle,
              o.layout.gapHalf,
              o.layout.gapHalf,
              o.layout.gapHalf,
              o.layout.gap,
              o.palette.foreground,
              o.palette.accents_4,
              o.palette.code,
              o.font.mono,
              o.layout.gap,
              o.layout.gap,
              o.layout.gap,
              o.palette.accents_2,
              o.layout.radius,
              o.font.mono,
              o.palette.foreground,
              o.palette.accents_2,
              o.palette.accents_1,
              o.layout.gap,
              o.layout.gap,
              o.palette.accents_5,
              o.palette.accents_1,
              o.layout.radius,
              o.palette.border,
              o.palette.selection,
              o.palette.foreground,
            ],
          },
          "html,body{background-color:"
            .concat(o.palette.background, ";color:")
            .concat(
              o.palette.foreground,
              ";}html{font-size:16px;--geist-icons-background:"
            )
            .concat(
              o.palette.background,
              ";}body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;font-size:1rem;line-height:1.5;margin:0;padding:0;min-height:100%;position:relative;overflow-x:hidden;font-family:"
            )
            .concat(
              o.font.sans,
              ";}#__next{overflow-x:hidden;}*,*:before,*:after{box-sizing:inherit;text-rendering:geometricPrecision;-webkit-tap-highlight-color:transparent;}p,small{font-weight:400;color:inherit;-webkit-letter-spacing:-0.005625em;-moz-letter-spacing:-0.005625em;-ms-letter-spacing:-0.005625em;letter-spacing:-0.005625em;font-family:"
            )
            .concat(
              o.font.sans,
              ";}p{margin:1em 0;font-size:1em;line-height:1.625em;}small{margin:0;line-height:1.5;font-size:0.875em;}b{font-weight:600;}span{font-size:inherit;color:inherit;font-weight:inherit;}img{max-width:100%;}a{cursor:pointer;font-size:inherit;-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-box-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:"
            )
            .concat(o.palette.link, ";-webkit-text-decoration:")
            .concat(o.expressiveness.linkStyle, ";text-decoration:")
            .concat(
              o.expressiveness.linkStyle,
              ";}a:hover{-webkit-text-decoration:"
            )
            .concat(o.expressiveness.linkHoverStyle, ";text-decoration:")
            .concat(
              o.expressiveness.linkHoverStyle,
              ";}ul,ol{padding:0;list-style-type:none;margin:"
            )
            .concat(o.layout.gapHalf, " ")
            .concat(o.layout.gapHalf, " ")
            .concat(o.layout.gapHalf, " ")
            .concat(o.layout.gap, ";color:")
            .concat(
              o.palette.foreground,
              ";}ol{list-style-type:decimal;}li{margin-bottom:0.625em;font-size:1em;line-height:1.625em;}ul li:before{content:'\u2013';display:inline-block;color:"
            )
            .concat(
              o.palette.accents_4,
              ";position:absolute;margin-left:-0.9375em;}h1,h2,h3,h4,h5,h6{color:inherit;margin:0 0 0.7rem 0;}h1{font-size:3rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;line-height:1.5;font-weight:700;}h2{font-size:2.25rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;font-weight:600;}h3{font-size:1.5rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;font-weight:600;}h4{font-size:1.25rem;-webkit-letter-spacing:-0.02em;-moz-letter-spacing:-0.02em;-ms-letter-spacing:-0.02em;letter-spacing:-0.02em;font-weight:600;}h5{font-size:1rem;-webkit-letter-spacing:-0.01em;-moz-letter-spacing:-0.01em;-ms-letter-spacing:-0.01em;letter-spacing:-0.01em;font-weight:600;}h6{font-size:0.875rem;-webkit-letter-spacing:-0.005em;-moz-letter-spacing:-0.005em;-ms-letter-spacing:-0.005em;letter-spacing:-0.005em;font-weight:600;}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit;color:inherit;margin:0;}button:focus,input:focus,select:focus,textarea:focus{outline:none;}code{color:"
            )
            .concat(o.palette.code, ";font-family:")
            .concat(
              o.font.mono,
              ";font-size:0.9em;white-space:pre-wrap;}code:before,code:after{content:'\\`';}pre{padding:calc("
            )
            .concat(o.layout.gap, " * 0.9) ")
            .concat(o.layout.gap, ";margin:")
            .concat(o.layout.gap, " 0;border:1px solid ")
            .concat(o.palette.accents_2, ";border-radius:")
            .concat(o.layout.radius, ";font-family:")
            .concat(
              o.font.mono,
              ";white-space:pre;overflow:auto;line-height:1.5;text-align:left;font-size:14px;-webkit-overflow-scrolling:touch;}pre code{color:"
            )
            .concat(
              o.palette.foreground,
              ";font-size:1em;line-height:1.25em;white-space:pre;}pre code:before,pre code:after{display:none;}pre p{margin:0;}pre::-webkit-scrollbar{display:none;width:0;height:0;background:transparent;}hr{border-color:"
            )
            .concat(o.palette.accents_2, ";}details{background-color:")
            .concat(
              o.palette.accents_1,
              ";border:none;}details:focus,details:hover,details:active{outline:none;}summary{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;list-style:none;outline:none;}summary::marker,summary::before,summary::-webkit-details-marker{display:none;}summary::-moz-list-bullet{font-size:0;}summary:focus,summary:hover,summary:active{outline:none;list-style:none;}blockquote{padding:calc(0.667 * "
            )
            .concat(o.layout.gap, ") ")
            .concat(o.layout.gap, ";color:")
            .concat(o.palette.accents_5, ";background-color:")
            .concat(o.palette.accents_1, ";border-radius:")
            .concat(o.layout.radius, ";margin:1.5em 0;border:1px solid ")
            .concat(
              o.palette.border,
              ";}blockquote *:first-child{margin-top:0;}blockquote *:last-child{margin-bottom:0;}::selection{background-color:"
            )
            .concat(o.palette.selection, ";color:")
            .concat(o.palette.foreground, ";}")
        )
      );
    },
    kr = d.memo(zi);
  kr.flush = Na;
  kr.flushToHTML = Ea;
  var At = kr;
  var Hi =
      typeof global == "object" && global && global.Object === Object && global,
    St = Hi;
  var Wi = typeof self == "object" && self && self.Object === Object && self,
    Gi = St || Wi || Function("return this")(),
    Ne = Gi;
  var qi = Ne.Symbol,
    je = qi;
  var ja = Object.prototype,
    $i = ja.hasOwnProperty,
    Ji = ja.toString,
    Ve = je ? je.toStringTag : void 0;
  function Zi(t) {
    var e = $i.call(t, Ve),
      r = t[Ve];
    try {
      t[Ve] = void 0;
      var o = !0;
    } catch {}
    var n = Ji.call(t);
    return o && (e ? (t[Ve] = r) : delete t[Ve]), n;
  }
  var Pa = Zi;
  var Vi = Object.prototype,
    Ki = Vi.toString;
  function Qi(t) {
    return Ki.call(t);
  }
  var Ba = Qi;
  var Xi = "[object Null]",
    Yi = "[object Undefined]",
    Da = je ? je.toStringTag : void 0;
  function el(t) {
    return t == null
      ? t === void 0
        ? Yi
        : Xi
      : Da && Da in Object(t)
      ? Pa(t)
      : Ba(t);
  }
  var Pe = el;
  function tl(t) {
    return t != null && typeof t == "object";
  }
  var Be = tl;
  var rl = Array.isArray,
    La = rl;
  function ol(t) {
    var e = typeof t;
    return t != null && (e == "object" || e == "function");
  }
  var de = ol;
  function al(t) {
    return t;
  }
  var kt = al;
  var nl = "[object AsyncFunction]",
    sl = "[object Function]",
    il = "[object GeneratorFunction]",
    ll = "[object Proxy]";
  function ul(t) {
    if (!de(t)) return !1;
    var e = Pe(t);
    return e == sl || e == il || e == nl || e == ll;
  }
  var Ct = ul;
  var cl = Ne["__core-js_shared__"],
    Tt = cl;
  var Oa = (function () {
    var t = /[^.]+$/.exec((Tt && Tt.keys && Tt.keys.IE_PROTO) || "");
    return t ? "Symbol(src)_1." + t : "";
  })();
  function fl(t) {
    return !!Oa && Oa in t;
  }
  var Ia = fl;
  var ml = Function.prototype,
    pl = ml.toString;
  function dl(t) {
    if (t != null) {
      try {
        return pl.call(t);
      } catch {}
      try {
        return t + "";
      } catch {}
    }
    return "";
  }
  var Ma = dl;
  var gl = /[\\^$.*+?()[\]{}|]/g,
    hl = /^\[object .+?Constructor\]$/,
    _l = Function.prototype,
    xl = Object.prototype,
    vl = _l.toString,
    yl = xl.hasOwnProperty,
    bl = RegExp(
      "^" +
        vl
          .call(yl)
          .replace(gl, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function wl(t) {
    if (!de(t) || Ia(t)) return !1;
    var e = Ct(t) ? bl : hl;
    return e.test(Ma(t));
  }
  var Ua = wl;
  function Al(t, e) {
    return t?.[e];
  }
  var Fa = Al;
  function Sl(t, e) {
    var r = Fa(t, e);
    return Ua(r) ? r : void 0;
  }
  var za = Sl;
  function kl(t, e, r) {
    switch (r.length) {
      case 0:
        return t.call(e);
      case 1:
        return t.call(e, r[0]);
      case 2:
        return t.call(e, r[0], r[1]);
      case 3:
        return t.call(e, r[0], r[1], r[2]);
    }
    return t.apply(e, r);
  }
  var Ha = kl;
  var Cl = 800,
    Tl = 16,
    Rl = Date.now;
  function El(t) {
    var e = 0,
      r = 0;
    return function () {
      var o = Rl(),
        n = Tl - (o - r);
      if (((r = o), n > 0)) {
        if (++e >= Cl) return arguments[0];
      } else e = 0;
      return t.apply(void 0, arguments);
    };
  }
  var Wa = El;
  function Nl(t) {
    return function () {
      return t;
    };
  }
  var Ga = Nl;
  var jl = (function () {
      try {
        var t = za(Object, "defineProperty");
        return t({}, "", {}), t;
      } catch {}
    })(),
    Cr = jl;
  var Pl = Cr
      ? function (t, e) {
          return Cr(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Ga(e),
            writable: !0,
          });
        }
      : kt,
    qa = Pl;
  var Bl = Wa(qa),
    $a = Bl;
  var Dl = 9007199254740991,
    Ll = /^(?:0|[1-9]\d*)$/;
  function Ol(t, e) {
    var r = typeof t;
    return (
      (e = e ?? Dl),
      !!e &&
        (r == "number" || (r != "symbol" && Ll.test(t))) &&
        t > -1 &&
        t % 1 == 0 &&
        t < e
    );
  }
  var Rt = Ol;
  function Il(t, e) {
    return t === e || (t !== t && e !== e);
  }
  var Et = Il;
  var Ja = Math.max;
  function Ml(t, e, r) {
    return (
      (e = Ja(e === void 0 ? t.length - 1 : e, 0)),
      function () {
        for (
          var o = arguments, n = -1, s = Ja(o.length - e, 0), i = Array(s);
          ++n < s;

        )
          i[n] = o[e + n];
        n = -1;
        for (var l = Array(e + 1); ++n < e; ) l[n] = o[n];
        return (l[e] = r(i)), Ha(t, this, l);
      }
    );
  }
  var Za = Ml;
  function Ul(t, e) {
    return $a(Za(t, e, kt), t + "");
  }
  var Va = Ul;
  var Fl = 9007199254740991;
  function zl(t) {
    return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Fl;
  }
  var Nt = zl;
  function Hl(t) {
    return t != null && Nt(t.length) && !Ct(t);
  }
  var jt = Hl;
  function Wl(t, e, r) {
    if (!de(r)) return !1;
    var o = typeof e;
    return (o == "number" ? jt(r) && Rt(e, r.length) : o == "string" && e in r)
      ? Et(r[e], t)
      : !1;
  }
  var Ka = Wl;
  var Gl = Object.prototype;
  function ql(t) {
    var e = t && t.constructor,
      r = (typeof e == "function" && e.prototype) || Gl;
    return t === r;
  }
  var Qa = ql;
  function $l(t, e) {
    for (var r = -1, o = Array(t); ++r < t; ) o[r] = e(r);
    return o;
  }
  var Xa = $l;
  var Jl = "[object Arguments]";
  function Zl(t) {
    return Be(t) && Pe(t) == Jl;
  }
  var Tr = Zl;
  var Ya = Object.prototype,
    Vl = Ya.hasOwnProperty,
    Kl = Ya.propertyIsEnumerable,
    Ql = Tr(
      (function () {
        return arguments;
      })()
    )
      ? Tr
      : function (t) {
          return Be(t) && Vl.call(t, "callee") && !Kl.call(t, "callee");
        },
    en = Ql;
  function Xl() {
    return !1;
  }
  var tn = Xl;
  var an =
      typeof exports == "object" && exports && !exports.nodeType && exports,
    rn =
      an && typeof module == "object" && module && !module.nodeType && module,
    Yl = rn && rn.exports === an,
    on = Yl ? Ne.Buffer : void 0,
    eu = on ? on.isBuffer : void 0,
    tu = eu || tn,
    nn = tu;
  var ru = "[object Arguments]",
    ou = "[object Array]",
    au = "[object Boolean]",
    nu = "[object Date]",
    su = "[object Error]",
    iu = "[object Function]",
    lu = "[object Map]",
    uu = "[object Number]",
    cu = "[object Object]",
    fu = "[object RegExp]",
    mu = "[object Set]",
    pu = "[object String]",
    du = "[object WeakMap]",
    gu = "[object ArrayBuffer]",
    hu = "[object DataView]",
    _u = "[object Float32Array]",
    xu = "[object Float64Array]",
    vu = "[object Int8Array]",
    yu = "[object Int16Array]",
    bu = "[object Int32Array]",
    wu = "[object Uint8Array]",
    Au = "[object Uint8ClampedArray]",
    Su = "[object Uint16Array]",
    ku = "[object Uint32Array]",
    z = {};
  z[_u] = z[xu] = z[vu] = z[yu] = z[bu] = z[wu] = z[Au] = z[Su] = z[ku] = !0;
  z[ru] =
    z[ou] =
    z[gu] =
    z[au] =
    z[hu] =
    z[nu] =
    z[su] =
    z[iu] =
    z[lu] =
    z[uu] =
    z[cu] =
    z[fu] =
    z[mu] =
    z[pu] =
    z[du] =
      !1;
  function Cu(t) {
    return Be(t) && Nt(t.length) && !!z[Pe(t)];
  }
  var sn = Cu;
  function Tu(t) {
    return function (e) {
      return t(e);
    };
  }
  var ln = Tu;
  var un =
      typeof exports == "object" && exports && !exports.nodeType && exports,
    Ke =
      un && typeof module == "object" && module && !module.nodeType && module,
    Ru = Ke && Ke.exports === un,
    Rr = Ru && St.process,
    Eu = (function () {
      try {
        var t = Ke && Ke.require && Ke.require("util").types;
        return t || (Rr && Rr.binding && Rr.binding("util"));
      } catch {}
    })(),
    Er = Eu;
  var cn = Er && Er.isTypedArray,
    Nu = cn ? ln(cn) : sn,
    fn = Nu;
  var ju = Object.prototype,
    Pu = ju.hasOwnProperty;
  function Bu(t, e) {
    var r = La(t),
      o = !r && en(t),
      n = !r && !o && nn(t),
      s = !r && !o && !n && fn(t),
      i = r || o || n || s,
      l = i ? Xa(t.length, String) : [],
      c = l.length;
    for (var m in t)
      (e || Pu.call(t, m)) &&
        !(
          i &&
          (m == "length" ||
            (n && (m == "offset" || m == "parent")) ||
            (s && (m == "buffer" || m == "byteLength" || m == "byteOffset")) ||
            Rt(m, c))
        ) &&
        l.push(m);
    return l;
  }
  var mn = Bu;
  function Du(t) {
    var e = [];
    if (t != null) for (var r in Object(t)) e.push(r);
    return e;
  }
  var pn = Du;
  var Lu = Object.prototype,
    Ou = Lu.hasOwnProperty;
  function Iu(t) {
    if (!de(t)) return pn(t);
    var e = Qa(t),
      r = [];
    for (var o in t) (o == "constructor" && (e || !Ou.call(t, o))) || r.push(o);
    return r;
  }
  var dn = Iu;
  function Mu(t) {
    return jt(t) ? mn(t, !0) : dn(t);
  }
  var gn = Mu;
  var hn = Object.prototype,
    Uu = hn.hasOwnProperty,
    Fu = Va(function (t, e) {
      t = Object(t);
      var r = -1,
        o = e.length,
        n = o > 2 ? e[2] : void 0;
      for (n && Ka(e[0], e[1], n) && (o = 1); ++r < o; )
        for (var s = e[r], i = gn(s), l = -1, c = i.length; ++l < c; ) {
          var m = i[l],
            a = t[m];
          (a === void 0 || (Et(a, hn[m]) && !Uu.call(t, m))) && (t[m] = s[m]);
        }
      return t;
    }),
    Nr = Fu;
  var Pr = Mn(xn());
  var yn = {
      ["always"]: "Always",
      ["questionMark"]: "When query ends with question mark (?)",
      ["manually"]: "Manually",
    },
    Pt = ((o) => (
      (o.Auto = "auto"), (o.Light = "light"), (o.Dark = "dark"), o
    ))(Pt || {}),
    vn = { triggerMode: "always", theme: "auto" };
  async function Br() {
    let t = await Pr.default.storage.local.get(Object.keys(vn));
    return Nr(t, vn);
  }
  async function Dr(t) {
    return console.debug("update configs", t), Pr.default.storage.local.set(t);
  }
  var bn =
    "data:image/png;base64,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";
  function wn() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  var Hu = 0;
  function F(t, e, r, o, n) {
    var s,
      i,
      l = {};
    for (i in e) i == "ref" ? (s = e[i]) : (l[i] = e[i]);
    var c = {
      type: t,
      props: l,
      key: r,
      ref: s,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: --Hu,
      __source: n,
      __self: o,
    };
    if (typeof t == "function" && (s = t.defaultProps))
      for (i in s) l[i] === void 0 && (l[i] = s[i]);
    return b.vnode && b.vnode(c), c;
  }
  var Wu = (t) => {
    window.open(t, "_blank", "noopener,noreferrer");
  };
  function Gu(t) {
    let [e, r] = M("always");
    U(() => {
      Br().then((s) => r(s.triggerMode));
    }, []);
    let o = We((s) => {
        r(s), Dr({ triggerMode: s });
      }, []),
      n = We(
        (s) => {
          Dr({ theme: s }), t.onThemeChange(s);
        },
        [t]
      );
    return F("div", {
      className: "container mx-auto",
      children: [
        F("nav", {
          className: "flex flex-row justify-between items-center mt-5 px-2",
          children: [
            F("div", {
              className: "flex flex-row items-center gap-2",
              children: [
                F("img", { src: bn, className: "w-10 h-10 rounded-lg" }),
                F("span", {
                  className: "font-semibold",
                  children: "YouChat for Google",
                }),
              ],
            }),
            F("div", {
              className: "flex flex-row gap-3",
              children: [
                F("a", {
                  href: "https://github.com/fedebotu/youchat-google-extension/issues",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Feedback",
                }),
                F("a", {
                  href: "https://github.com/fedebotu/youchat-google-extension/issues",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Changelog",
                }),
                F("a", {
                  href: "https://github.com/fedebotu/youchat-google-extension",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Source code",
                }),
              ],
            }),
          ],
        }),
        F("main", {
          className: "w-[500px] mx-auto mt-14",
          children: [
            F(Ze, { h2: !0, children: "Options" }),
            F(Ze, { h3: !0, className: "mt-10", children: "Trigger Mode" }),
            F(Ee.Group, {
              value: e,
              onChange: (s) => o(s),
              children: Object.entries(yn).map(([s, i]) =>
                F(Ee, { value: s, children: i }, s)
              ),
            }),
            F(Ze, { h3: !0, className: "mt-10", children: "Theme" }),
            F(Ee.Group, {
              value: t.theme,
              onChange: (s) => n(s),
              children: Object.entries(Pt).map(([s, i]) =>
                F(Ee, { value: i, children: s }, i)
              ),
            }),
            F("p", {
              className: "italic mt-2",
              children: [
                "Note that this is an unofficial extension and not affiliated with",
                " ",
                F("span", {
                  className: "underline cursor-pointer",
                  onClick: () =>
                    Wu(
                      "https://you.com/search?q=what%20was%20the%20recent%20breakthrough%20in%20fusion%20research%3F"
                    ),
                  children: "YouChat",
                }),
                ".",
              ],
            }),
          ],
        }),
      ],
    });
  }
  function qu() {
    let [t, e] = M("auto"),
      r = j(() => (t === "auto" ? wn() : t), [t]);
    return (
      U(() => {
        Br().then((o) => e(o.theme));
      }, []),
      F(_r, {
        themeType: r,
        children: [F(At, {}), F(Gu, { theme: t, onThemeChange: e })],
      })
    );
  }
  var An = qu;
  me(F(An, {}), document.getElementById("app"));
})();
