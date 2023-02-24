"use strict";
(() => {
  var r7 = Object.create;
  var N1 = Object.defineProperty;
  var o7 = Object.getOwnPropertyDescriptor;
  var i7 = Object.getOwnPropertyNames;
  var l7 = Object.getPrototypeOf,
    c7 = Object.prototype.hasOwnProperty;
  var De = (e, t) => () => (
      t || e((t = { exports: {} }).exports, t), t.exports
    ),
    pn = (e, t) => {
      for (var n in t) N1(e, n, { get: t[n], enumerable: !0 });
    },
    s7 = (e, t, n, a) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let r of i7(t))
          !c7.call(e, r) &&
            r !== n &&
            N1(e, r, {
              get: () => t[r],
              enumerable: !(a = o7(t, r)) || a.enumerable,
            });
      return e;
    };
  var Ve = (e, t, n) => (
    (n = e != null ? r7(l7(e)) : {}),
    s7(
      t || !e || !e.__esModule
        ? N1(n, "default", { value: e, enumerable: !0 })
        : n,
      e
    )
  );
  var J5 = De(($1, ma) => {
    (function (e, t) {
      if (typeof define == "function" && define.amd)
        define("webextension-polyfill", ["module"], t);
      else if (typeof $1 < "u") t(ma);
      else {
        var n = { exports: {} };
        t(n), (e.browser = n.exports);
      }
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : $1,
      function (e) {
        "use strict";
        if (!globalThis.chrome?.runtime?.id)
          throw new Error(
            "This script should only be loaded in a browser extension."
          );
        if (
          typeof globalThis.browser > "u" ||
          Object.getPrototypeOf(globalThis.browser) !== Object.prototype
        ) {
          let t = "The message port closed before a response was received.",
            n = (a) => {
              let r = {
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
              if (Object.keys(r).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class o extends WeakMap {
                constructor(x, E = void 0) {
                  super(E), (this.createItem = x);
                }
                get(x) {
                  return (
                    this.has(x) || this.set(x, this.createItem(x)), super.get(x)
                  );
                }
              }
              let i = (y) =>
                  y && typeof y == "object" && typeof y.then == "function",
                l =
                  (y, x) =>
                  (...E) => {
                    a.runtime.lastError
                      ? y.reject(new Error(a.runtime.lastError.message))
                      : x.singleCallbackArg ||
                        (E.length <= 1 && x.singleCallbackArg !== !1)
                      ? y.resolve(E[0])
                      : y.resolve(E);
                  },
                s = (y) => (y == 1 ? "argument" : "arguments"),
                u = (y, x) =>
                  function (z, ...N) {
                    if (N.length < x.minArgs)
                      throw new Error(
                        `Expected at least ${x.minArgs} ${s(
                          x.minArgs
                        )} for ${y}(), got ${N.length}`
                      );
                    if (N.length > x.maxArgs)
                      throw new Error(
                        `Expected at most ${x.maxArgs} ${s(
                          x.maxArgs
                        )} for ${y}(), got ${N.length}`
                      );
                    return new Promise((L, W) => {
                      if (x.fallbackToNoCallback)
                        try {
                          z[y](...N, l({ resolve: L, reject: W }, x));
                        } catch (O) {
                          console.warn(
                            `${y} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            O
                          ),
                            z[y](...N),
                            (x.fallbackToNoCallback = !1),
                            (x.noCallback = !0),
                            L();
                        }
                      else
                        x.noCallback
                          ? (z[y](...N), L())
                          : z[y](...N, l({ resolve: L, reject: W }, x));
                    });
                  },
                c = (y, x, E) =>
                  new Proxy(x, {
                    apply(z, N, L) {
                      return E.call(N, y, ...L);
                    },
                  }),
                h = Function.call.bind(Object.prototype.hasOwnProperty),
                p = (y, x = {}, E = {}) => {
                  let z = Object.create(null),
                    N = {
                      has(W, O) {
                        return O in y || O in z;
                      },
                      get(W, O, $) {
                        if (O in z) return z[O];
                        if (!(O in y)) return;
                        let I = y[O];
                        if (typeof I == "function")
                          if (typeof x[O] == "function") I = c(y, y[O], x[O]);
                          else if (h(E, O)) {
                            let F = u(O, E[O]);
                            I = c(y, y[O], F);
                          } else I = I.bind(y);
                        else if (
                          typeof I == "object" &&
                          I !== null &&
                          (h(x, O) || h(E, O))
                        )
                          I = p(I, x[O], E[O]);
                        else if (h(E, "*")) I = p(I, x[O], E["*"]);
                        else
                          return (
                            Object.defineProperty(z, O, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return y[O];
                              },
                              set(F) {
                                y[O] = F;
                              },
                            }),
                            I
                          );
                        return (z[O] = I), I;
                      },
                      set(W, O, $, I) {
                        return O in z ? (z[O] = $) : (y[O] = $), !0;
                      },
                      defineProperty(W, O, $) {
                        return Reflect.defineProperty(z, O, $);
                      },
                      deleteProperty(W, O) {
                        return Reflect.deleteProperty(z, O);
                      },
                    },
                    L = Object.create(y);
                  return new Proxy(L, N);
                },
                d = (y) => ({
                  addListener(x, E, ...z) {
                    x.addListener(y.get(E), ...z);
                  },
                  hasListener(x, E) {
                    return x.hasListener(y.get(E));
                  },
                  removeListener(x, E) {
                    x.removeListener(y.get(E));
                  },
                }),
                g = new o((y) =>
                  typeof y != "function"
                    ? y
                    : function (E) {
                        let z = p(
                          E,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        y(z);
                      }
                ),
                b = new o((y) =>
                  typeof y != "function"
                    ? y
                    : function (E, z, N) {
                        let L = !1,
                          W,
                          O = new Promise((J) => {
                            W = function (w) {
                              (L = !0), J(w);
                            };
                          }),
                          $;
                        try {
                          $ = y(E, z, W);
                        } catch (J) {
                          $ = Promise.reject(J);
                        }
                        let I = $ !== !0 && i($);
                        if ($ !== !0 && !I && !L) return !1;
                        let F = (J) => {
                          J.then(
                            (w) => {
                              N(w);
                            },
                            (w) => {
                              let R;
                              w &&
                              (w instanceof Error ||
                                typeof w.message == "string")
                                ? (R = w.message)
                                : (R = "An unexpected error occurred"),
                                N({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: R,
                                });
                            }
                          ).catch((w) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              w
                            );
                          });
                        };
                        return F(I ? $ : O), !0;
                      }
                ),
                v = ({ reject: y, resolve: x }, E) => {
                  a.runtime.lastError
                    ? a.runtime.lastError.message === t
                      ? x()
                      : y(new Error(a.runtime.lastError.message))
                    : E && E.__mozWebExtensionPolyfillReject__
                    ? y(new Error(E.message))
                    : x(E);
                },
                _ = (y, x, E, ...z) => {
                  if (z.length < x.minArgs)
                    throw new Error(
                      `Expected at least ${x.minArgs} ${s(
                        x.minArgs
                      )} for ${y}(), got ${z.length}`
                    );
                  if (z.length > x.maxArgs)
                    throw new Error(
                      `Expected at most ${x.maxArgs} ${s(
                        x.maxArgs
                      )} for ${y}(), got ${z.length}`
                    );
                  return new Promise((N, L) => {
                    let W = v.bind(null, { resolve: N, reject: L });
                    z.push(W), E.sendMessage(...z);
                  });
                },
                C = {
                  devtools: { network: { onRequestFinished: d(g) } },
                  runtime: {
                    onMessage: d(b),
                    onMessageExternal: d(b),
                    sendMessage: _.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: _.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                M = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (r.privacy = {
                  network: { "*": M },
                  services: { "*": M },
                  websites: { "*": M },
                }),
                p(a, C, r)
              );
            };
          e.exports = n(chrome);
        } else e.exports = globalThis.browser;
      }
    );
  });
  var X1 = De((R8, ar) => {
    ar.exports = function (t) {
      return (
        t != null &&
        t.constructor != null &&
        typeof t.constructor.isBuffer == "function" &&
        t.constructor.isBuffer(t)
      );
    };
  });
  var br = De((Q8, vr) => {
    "use strict";
    var Ht = Object.prototype.hasOwnProperty,
      gr = Object.prototype.toString,
      ur = Object.defineProperty,
      dr = Object.getOwnPropertyDescriptor,
      pr = function (t) {
        return typeof Array.isArray == "function"
          ? Array.isArray(t)
          : gr.call(t) === "[object Array]";
      },
      hr = function (t) {
        if (!t || gr.call(t) !== "[object Object]") return !1;
        var n = Ht.call(t, "constructor"),
          a =
            t.constructor &&
            t.constructor.prototype &&
            Ht.call(t.constructor.prototype, "isPrototypeOf");
        if (t.constructor && !n && !a) return !1;
        var r;
        for (r in t);
        return typeof r > "u" || Ht.call(t, r);
      },
      mr = function (t, n) {
        ur && n.name === "__proto__"
          ? ur(t, n.name, {
              enumerable: !0,
              configurable: !0,
              value: n.newValue,
              writable: !0,
            })
          : (t[n.name] = n.newValue);
      },
      fr = function (t, n) {
        if (n === "__proto__")
          if (Ht.call(t, n)) {
            if (dr) return dr(t, n).value;
          } else return;
        return t[n];
      };
    vr.exports = function e() {
      var t,
        n,
        a,
        r,
        o,
        i,
        l = arguments[0],
        s = 1,
        u = arguments.length,
        c = !1;
      for (
        typeof l == "boolean" && ((c = l), (l = arguments[1] || {}), (s = 2)),
          (l == null || (typeof l != "object" && typeof l != "function")) &&
            (l = {});
        s < u;
        ++s
      )
        if (((t = arguments[s]), t != null))
          for (n in t)
            (a = fr(l, n)),
              (r = fr(t, n)),
              l !== r &&
                (c && r && (hr(r) || (o = pr(r)))
                  ? (o
                      ? ((o = !1), (i = a && pr(a) ? a : []))
                      : (i = a && hr(a) ? a : {}),
                    mr(l, { name: n, newValue: e(c, i, r) }))
                  : typeof r < "u" && mr(l, { name: n, newValue: r }));
      return l;
    };
  });
  var H2 = De((kg, O2) => {
    "use strict";
    var Uu = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    O2.exports = Uu;
  });
  var P2 = De((Sg, F2) => {
    "use strict";
    var $u = H2();
    function D2() {}
    function V2() {}
    V2.resetWarningCache = D2;
    F2.exports = function () {
      function e(a, r, o, i, l, s) {
        if (s !== $u) {
          var u = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
          throw ((u.name = "Invariant Violation"), u);
        }
      }
      e.isRequired = e;
      function t() {
        return e;
      }
      var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: V2,
        resetWarningCache: D2,
      };
      return (n.PropTypes = n), n;
    };
  });
  var U2 = De((Ng, B2) => {
    B2.exports = P2()();
    var Cg, Rg;
  });
  var Z2 = De((ie) => {
    "use strict";
    var D0 = Symbol.for("react.element"),
      V0 = Symbol.for("react.portal"),
      r1 = Symbol.for("react.fragment"),
      o1 = Symbol.for("react.strict_mode"),
      i1 = Symbol.for("react.profiler"),
      l1 = Symbol.for("react.provider"),
      c1 = Symbol.for("react.context"),
      Zu = Symbol.for("react.server_context"),
      s1 = Symbol.for("react.forward_ref"),
      u1 = Symbol.for("react.suspense"),
      d1 = Symbol.for("react.suspense_list"),
      p1 = Symbol.for("react.memo"),
      h1 = Symbol.for("react.lazy"),
      Xu = Symbol.for("react.offscreen"),
      Q2;
    Q2 = Symbol.for("react.module.reference");
    function Ue(e) {
      if (typeof e == "object" && e !== null) {
        var t = e.$$typeof;
        switch (t) {
          case D0:
            switch (((e = e.type), e)) {
              case r1:
              case i1:
              case o1:
              case u1:
              case d1:
                return e;
              default:
                switch (((e = e && e.$$typeof), e)) {
                  case Zu:
                  case c1:
                  case s1:
                  case h1:
                  case p1:
                  case l1:
                    return e;
                  default:
                    return t;
                }
            }
          case V0:
            return t;
        }
      }
    }
    ie.ContextConsumer = c1;
    ie.ContextProvider = l1;
    ie.Element = D0;
    ie.ForwardRef = s1;
    ie.Fragment = r1;
    ie.Lazy = h1;
    ie.Memo = p1;
    ie.Portal = V0;
    ie.Profiler = i1;
    ie.StrictMode = o1;
    ie.Suspense = u1;
    ie.SuspenseList = d1;
    ie.isAsyncMode = function () {
      return !1;
    };
    ie.isConcurrentMode = function () {
      return !1;
    };
    ie.isContextConsumer = function (e) {
      return Ue(e) === c1;
    };
    ie.isContextProvider = function (e) {
      return Ue(e) === l1;
    };
    ie.isElement = function (e) {
      return typeof e == "object" && e !== null && e.$$typeof === D0;
    };
    ie.isForwardRef = function (e) {
      return Ue(e) === s1;
    };
    ie.isFragment = function (e) {
      return Ue(e) === r1;
    };
    ie.isLazy = function (e) {
      return Ue(e) === h1;
    };
    ie.isMemo = function (e) {
      return Ue(e) === p1;
    };
    ie.isPortal = function (e) {
      return Ue(e) === V0;
    };
    ie.isProfiler = function (e) {
      return Ue(e) === i1;
    };
    ie.isStrictMode = function (e) {
      return Ue(e) === o1;
    };
    ie.isSuspense = function (e) {
      return Ue(e) === u1;
    };
    ie.isSuspenseList = function (e) {
      return Ue(e) === d1;
    };
    ie.isValidElementType = function (e) {
      return (
        typeof e == "string" ||
        typeof e == "function" ||
        e === r1 ||
        e === i1 ||
        e === o1 ||
        e === u1 ||
        e === d1 ||
        e === Xu ||
        (typeof e == "object" &&
          e !== null &&
          (e.$$typeof === h1 ||
            e.$$typeof === p1 ||
            e.$$typeof === l1 ||
            e.$$typeof === c1 ||
            e.$$typeof === s1 ||
            e.$$typeof === Q2 ||
            e.getModuleId !== void 0))
      );
    };
    ie.typeOf = Ue;
  });
  var j2 = De((Sv, X2) => {
    "use strict";
    X2.exports = Z2();
  });
  var lo = De((Lv, io) => {
    var no = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
      ju = /\n/g,
      Ju = /^\s*/,
      e3 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
      t3 = /^:\s*/,
      n3 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
      a3 = /^[;\s]*/,
      r3 = /^\s+|\s+$/g,
      o3 = `
`,
      ao = "/",
      ro = "*",
      w5 = "",
      i3 = "comment",
      l3 = "declaration";
    io.exports = function (e, t) {
      if (typeof e != "string")
        throw new TypeError("First argument must be a string");
      if (!e) return [];
      t = t || {};
      var n = 1,
        a = 1;
      function r(b) {
        var v = b.match(ju);
        v && (n += v.length);
        var _ = b.lastIndexOf(o3);
        a = ~_ ? b.length - _ : a + b.length;
      }
      function o() {
        var b = { line: n, column: a };
        return function (v) {
          return (v.position = new i(b)), c(), v;
        };
      }
      function i(b) {
        (this.start = b),
          (this.end = { line: n, column: a }),
          (this.source = t.source);
      }
      i.prototype.content = e;
      var l = [];
      function s(b) {
        var v = new Error(t.source + ":" + n + ":" + a + ": " + b);
        if (
          ((v.reason = b),
          (v.filename = t.source),
          (v.line = n),
          (v.column = a),
          (v.source = e),
          t.silent)
        )
          l.push(v);
        else throw v;
      }
      function u(b) {
        var v = b.exec(e);
        if (!!v) {
          var _ = v[0];
          return r(_), (e = e.slice(_.length)), v;
        }
      }
      function c() {
        u(Ju);
      }
      function h(b) {
        var v;
        for (b = b || []; (v = p()); ) v !== !1 && b.push(v);
        return b;
      }
      function p() {
        var b = o();
        if (!(ao != e.charAt(0) || ro != e.charAt(1))) {
          for (
            var v = 2;
            w5 != e.charAt(v) && (ro != e.charAt(v) || ao != e.charAt(v + 1));

          )
            ++v;
          if (((v += 2), w5 === e.charAt(v - 1)))
            return s("End of comment missing");
          var _ = e.slice(2, v - 2);
          return (
            (a += 2),
            r(_),
            (e = e.slice(v)),
            (a += 2),
            b({ type: i3, comment: _ })
          );
        }
      }
      function d() {
        var b = o(),
          v = u(e3);
        if (!!v) {
          if ((p(), !u(t3))) return s("property missing ':'");
          var _ = u(n3),
            C = b({
              type: l3,
              property: oo(v[0].replace(no, w5)),
              value: _ ? oo(_[0].replace(no, w5)) : w5,
            });
          return u(a3), C;
        }
      }
      function g() {
        var b = [];
        h(b);
        for (var v; (v = d()); ) v !== !1 && (b.push(v), h(b));
        return b;
      }
      return c(), g();
    };
    function oo(e) {
      return e ? e.replace(r3, w5) : w5;
    }
  });
  var so = De((Tv, co) => {
    var c3 = lo();
    function s3(e, t) {
      var n = null;
      if (!e || typeof e != "string") return n;
      for (
        var a, r = c3(e), o = typeof t == "function", i, l, s = 0, u = r.length;
        s < u;
        s++
      )
        (a = r[s]),
          (i = a.property),
          (l = a.value),
          o ? t(i, l, a) : l && (n || (n = {}), (n[i] = l));
      return n;
    }
    co.exports = s3;
  });
  var Hi = De((Hb, Oi) => {
    var Z0 = { exports: {} };
    function X0(e) {
      return (
        e instanceof Map
          ? (e.clear =
              e.delete =
              e.set =
                function () {
                  throw new Error("map is read-only");
                })
          : e instanceof Set &&
            (e.add =
              e.clear =
              e.delete =
                function () {
                  throw new Error("set is read-only");
                }),
        Object.freeze(e),
        Object.getOwnPropertyNames(e).forEach(function (t) {
          var n = e[t];
          typeof n == "object" && !Object.isFrozen(n) && X0(n);
        }),
        e
      );
    }
    Z0.exports = X0;
    Z0.exports.default = X0;
    var x1 = class {
      constructor(t) {
        t.data === void 0 && (t.data = {}),
          (this.data = t.data),
          (this.isMatchIgnored = !1);
      }
      ignoreMatch() {
        this.isMatchIgnored = !0;
      }
    };
    function Mi(e) {
      return e
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;");
    }
    function d5(e, ...t) {
      let n = Object.create(null);
      for (let a in e) n[a] = e[a];
      return (
        t.forEach(function (a) {
          for (let r in a) n[r] = a[r];
        }),
        n
      );
    }
    var Q3 = "</span>",
      Ei = (e) => !!e.scope || (e.sublanguage && e.language),
      Z3 = (e, { prefix: t }) => {
        if (e.includes(".")) {
          let n = e.split(".");
          return [
            `${t}${n.shift()}`,
            ...n.map((a, r) => `${a}${"_".repeat(r + 1)}`),
          ].join(" ");
        }
        return `${t}${e}`;
      },
      W0 = class {
        constructor(t, n) {
          (this.buffer = ""), (this.classPrefix = n.classPrefix), t.walk(this);
        }
        addText(t) {
          this.buffer += Mi(t);
        }
        openNode(t) {
          if (!Ei(t)) return;
          let n = "";
          t.sublanguage
            ? (n = `language-${t.language}`)
            : (n = Z3(t.scope, { prefix: this.classPrefix })),
            this.span(n);
        }
        closeNode(t) {
          !Ei(t) || (this.buffer += Q3);
        }
        value() {
          return this.buffer;
        }
        span(t) {
          this.buffer += `<span class="${t}">`;
        }
      },
      _i = (e = {}) => {
        let t = { children: [] };
        return Object.assign(t, e), t;
      },
      ft = class {
        constructor() {
          (this.rootNode = _i()), (this.stack = [this.rootNode]);
        }
        get top() {
          return this.stack[this.stack.length - 1];
        }
        get root() {
          return this.rootNode;
        }
        add(t) {
          this.top.children.push(t);
        }
        openNode(t) {
          let n = _i({ scope: t });
          this.add(n), this.stack.push(n);
        }
        closeNode() {
          if (this.stack.length > 1) return this.stack.pop();
        }
        closeAllNodes() {
          for (; this.closeNode(); );
        }
        toJSON() {
          return JSON.stringify(this.rootNode, null, 4);
        }
        walk(t) {
          return this.constructor._walk(t, this.rootNode);
        }
        static _walk(t, n) {
          return (
            typeof n == "string"
              ? t.addText(n)
              : n.children &&
                (t.openNode(n),
                n.children.forEach((a) => this._walk(t, a)),
                t.closeNode(n)),
            t
          );
        }
        static _collapse(t) {
          typeof t != "string" &&
            (!t.children ||
              (t.children.every((n) => typeof n == "string")
                ? (t.children = [t.children.join("")])
                : t.children.forEach((n) => {
                    ft._collapse(n);
                  })));
        }
      },
      Y0 = class extends ft {
        constructor(t) {
          super(), (this.options = t);
        }
        addKeyword(t, n) {
          t !== "" && (this.openNode(n), this.addText(t), this.closeNode());
        }
        addText(t) {
          t !== "" && this.add(t);
        }
        addSublanguage(t, n) {
          let a = t.root;
          (a.sublanguage = !0), (a.language = n), this.add(a);
        }
        toHTML() {
          return new W0(this, this.options).value();
        }
        finalize() {
          return !0;
        }
      };
    function gt(e) {
      return e ? (typeof e == "string" ? e : e.source) : null;
    }
    function zi(e) {
      return z5("(?=", e, ")");
    }
    function X3(e) {
      return z5("(?:", e, ")*");
    }
    function j3(e) {
      return z5("(?:", e, ")?");
    }
    function z5(...e) {
      return e.map((n) => gt(n)).join("");
    }
    function J3(e) {
      let t = e[e.length - 1];
      return typeof t == "object" && t.constructor === Object
        ? (e.splice(e.length - 1, 1), t)
        : {};
    }
    function j0(...e) {
      return (
        "(" + (J3(e).capture ? "" : "?:") + e.map((a) => gt(a)).join("|") + ")"
      );
    }
    function Ii(e) {
      return new RegExp(e.toString() + "|").exec("").length - 1;
    }
    function e4(e, t) {
      let n = e && e.exec(t);
      return n && n.index === 0;
    }
    var t4 = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
    function J0(e, { joinWith: t }) {
      let n = 0;
      return e
        .map((a) => {
          n += 1;
          let r = n,
            o = gt(a),
            i = "";
          for (; o.length > 0; ) {
            let l = t4.exec(o);
            if (!l) {
              i += o;
              break;
            }
            (i += o.substring(0, l.index)),
              (o = o.substring(l.index + l[0].length)),
              l[0][0] === "\\" && l[1]
                ? (i += "\\" + String(Number(l[1]) + r))
                : ((i += l[0]), l[0] === "(" && n++);
          }
          return i;
        })
        .map((a) => `(${a})`)
        .join(t);
    }
    var n4 = /\b\B/,
      ki = "[a-zA-Z]\\w*",
      en = "[a-zA-Z_]\\w*",
      Si = "\\b\\d+(\\.\\d+)?",
      Ci =
        "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
      Ri = "\\b(0b[01]+)",
      a4 =
        "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
      r4 = (e = {}) => {
        let t = /^#![ ]*\//;
        return (
          e.binary && (e.begin = z5(t, /.*\b/, e.binary, /\b.*/)),
          d5(
            {
              scope: "meta",
              begin: t,
              end: /$/,
              relevance: 0,
              "on:begin": (n, a) => {
                n.index !== 0 && a.ignoreMatch();
              },
            },
            e
          )
        );
      },
      vt = { begin: "\\\\[\\s\\S]", relevance: 0 },
      o4 = {
        scope: "string",
        begin: "'",
        end: "'",
        illegal: "\\n",
        contains: [vt],
      },
      i4 = {
        scope: "string",
        begin: '"',
        end: '"',
        illegal: "\\n",
        contains: [vt],
      },
      l4 = {
        begin:
          /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
      },
      M1 = function (e, t, n = {}) {
        let a = d5({ scope: "comment", begin: e, end: t, contains: [] }, n);
        a.contains.push({
          scope: "doctag",
          begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
          end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
          excludeBegin: !0,
          relevance: 0,
        });
        let r = j0(
          "I",
          "a",
          "is",
          "so",
          "us",
          "to",
          "at",
          "if",
          "in",
          "it",
          "on",
          /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
          /[A-Za-z]+[-][a-z]+/,
          /[A-Za-z][a-z]{2,}/
        );
        return (
          a.contains.push({
            begin: z5(/[ ]+/, "(", r, /[.]?[:]?([.][ ]|[ ])/, "){3}"),
          }),
          a
        );
      },
      c4 = M1("//", "$"),
      s4 = M1("/\\*", "\\*/"),
      u4 = M1("#", "$"),
      d4 = { scope: "number", begin: Si, relevance: 0 },
      p4 = { scope: "number", begin: Ci, relevance: 0 },
      h4 = { scope: "number", begin: Ri, relevance: 0 },
      m4 = {
        begin: /(?=\/[^/\n]*\/)/,
        contains: [
          {
            scope: "regexp",
            begin: /\//,
            end: /\/[gimuy]*/,
            illegal: /\n/,
            contains: [
              vt,
              { begin: /\[/, end: /\]/, relevance: 0, contains: [vt] },
            ],
          },
        ],
      },
      f4 = { scope: "title", begin: ki, relevance: 0 },
      g4 = { scope: "title", begin: en, relevance: 0 },
      v4 = { begin: "\\.\\s*" + en, relevance: 0 },
      b4 = function (e) {
        return Object.assign(e, {
          "on:begin": (t, n) => {
            n.data._beginMatch = t[1];
          },
          "on:end": (t, n) => {
            n.data._beginMatch !== t[1] && n.ignoreMatch();
          },
        });
      },
      y1 = Object.freeze({
        __proto__: null,
        MATCH_NOTHING_RE: n4,
        IDENT_RE: ki,
        UNDERSCORE_IDENT_RE: en,
        NUMBER_RE: Si,
        C_NUMBER_RE: Ci,
        BINARY_NUMBER_RE: Ri,
        RE_STARTERS_RE: a4,
        SHEBANG: r4,
        BACKSLASH_ESCAPE: vt,
        APOS_STRING_MODE: o4,
        QUOTE_STRING_MODE: i4,
        PHRASAL_WORDS_MODE: l4,
        COMMENT: M1,
        C_LINE_COMMENT_MODE: c4,
        C_BLOCK_COMMENT_MODE: s4,
        HASH_COMMENT_MODE: u4,
        NUMBER_MODE: d4,
        C_NUMBER_MODE: p4,
        BINARY_NUMBER_MODE: h4,
        REGEXP_MODE: m4,
        TITLE_MODE: f4,
        UNDERSCORE_TITLE_MODE: g4,
        METHOD_GUARD: v4,
        END_SAME_AS_BEGIN: b4,
      });
    function E4(e, t) {
      e.input[e.index - 1] === "." && t.ignoreMatch();
    }
    function _4(e, t) {
      e.className !== void 0 && ((e.scope = e.className), delete e.className);
    }
    function A4(e, t) {
      !t ||
        !e.beginKeywords ||
        ((e.begin =
          "\\b(" +
          e.beginKeywords.split(" ").join("|") +
          ")(?!\\.)(?=\\b|\\s)"),
        (e.__beforeBegin = E4),
        (e.keywords = e.keywords || e.beginKeywords),
        delete e.beginKeywords,
        e.relevance === void 0 && (e.relevance = 0));
    }
    function y4(e, t) {
      !Array.isArray(e.illegal) || (e.illegal = j0(...e.illegal));
    }
    function x4(e, t) {
      if (!!e.match) {
        if (e.begin || e.end)
          throw new Error("begin & end are not supported with match");
        (e.begin = e.match), delete e.match;
      }
    }
    function w4(e, t) {
      e.relevance === void 0 && (e.relevance = 1);
    }
    var M4 = (e, t) => {
        if (!e.beforeMatch) return;
        if (e.starts) throw new Error("beforeMatch cannot be used with starts");
        let n = Object.assign({}, e);
        Object.keys(e).forEach((a) => {
          delete e[a];
        }),
          (e.keywords = n.keywords),
          (e.begin = z5(n.beforeMatch, zi(n.begin))),
          (e.starts = {
            relevance: 0,
            contains: [Object.assign(n, { endsParent: !0 })],
          }),
          (e.relevance = 0),
          delete n.beforeMatch;
      },
      z4 = [
        "of",
        "and",
        "for",
        "in",
        "not",
        "or",
        "if",
        "then",
        "parent",
        "list",
        "value",
      ],
      I4 = "keyword";
    function Ni(e, t, n = I4) {
      let a = Object.create(null);
      return (
        typeof e == "string"
          ? r(n, e.split(" "))
          : Array.isArray(e)
          ? r(n, e)
          : Object.keys(e).forEach(function (o) {
              Object.assign(a, Ni(e[o], t, o));
            }),
        a
      );
      function r(o, i) {
        t && (i = i.map((l) => l.toLowerCase())),
          i.forEach(function (l) {
            let s = l.split("|");
            a[s[0]] = [o, k4(s[0], s[1])];
          });
      }
    }
    function k4(e, t) {
      return t ? Number(t) : S4(e) ? 0 : 1;
    }
    function S4(e) {
      return z4.includes(e.toLowerCase());
    }
    var Ai = {},
      M5 = (e) => {
        console.error(e);
      },
      yi = (e, ...t) => {
        console.log(`WARN: ${e}`, ...t);
      },
      P5 = (e, t) => {
        Ai[`${e}/${t}`] ||
          (console.log(`Deprecated as of ${e}. ${t}`), (Ai[`${e}/${t}`] = !0));
      },
      w1 = new Error();
    function Li(e, t, { key: n }) {
      let a = 0,
        r = e[n],
        o = {},
        i = {};
      for (let l = 1; l <= t.length; l++)
        (i[l + a] = r[l]), (o[l + a] = !0), (a += Ii(t[l - 1]));
      (e[n] = i), (e[n]._emit = o), (e[n]._multi = !0);
    }
    function C4(e) {
      if (!!Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin)
          throw (
            (M5(
              "skip, excludeBegin, returnBegin not compatible with beginScope: {}"
            ),
            w1)
          );
        if (typeof e.beginScope != "object" || e.beginScope === null)
          throw (M5("beginScope must be object"), w1);
        Li(e, e.begin, { key: "beginScope" }),
          (e.begin = J0(e.begin, { joinWith: "" }));
      }
    }
    function R4(e) {
      if (!!Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd)
          throw (
            (M5("skip, excludeEnd, returnEnd not compatible with endScope: {}"),
            w1)
          );
        if (typeof e.endScope != "object" || e.endScope === null)
          throw (M5("endScope must be object"), w1);
        Li(e, e.end, { key: "endScope" }),
          (e.end = J0(e.end, { joinWith: "" }));
      }
    }
    function N4(e) {
      e.scope &&
        typeof e.scope == "object" &&
        e.scope !== null &&
        ((e.beginScope = e.scope), delete e.scope);
    }
    function L4(e) {
      N4(e),
        typeof e.beginScope == "string" &&
          (e.beginScope = { _wrap: e.beginScope }),
        typeof e.endScope == "string" && (e.endScope = { _wrap: e.endScope }),
        C4(e),
        R4(e);
    }
    function T4(e) {
      function t(i, l) {
        return new RegExp(
          gt(i),
          "m" +
            (e.case_insensitive ? "i" : "") +
            (e.unicodeRegex ? "u" : "") +
            (l ? "g" : "")
        );
      }
      class n {
        constructor() {
          (this.matchIndexes = {}),
            (this.regexes = []),
            (this.matchAt = 1),
            (this.position = 0);
        }
        addRule(l, s) {
          (s.position = this.position++),
            (this.matchIndexes[this.matchAt] = s),
            this.regexes.push([s, l]),
            (this.matchAt += Ii(l) + 1);
        }
        compile() {
          this.regexes.length === 0 && (this.exec = () => null);
          let l = this.regexes.map((s) => s[1]);
          (this.matcherRe = t(J0(l, { joinWith: "|" }), !0)),
            (this.lastIndex = 0);
        }
        exec(l) {
          this.matcherRe.lastIndex = this.lastIndex;
          let s = this.matcherRe.exec(l);
          if (!s) return null;
          let u = s.findIndex((h, p) => p > 0 && h !== void 0),
            c = this.matchIndexes[u];
          return s.splice(0, u), Object.assign(s, c);
        }
      }
      class a {
        constructor() {
          (this.rules = []),
            (this.multiRegexes = []),
            (this.count = 0),
            (this.lastIndex = 0),
            (this.regexIndex = 0);
        }
        getMatcher(l) {
          if (this.multiRegexes[l]) return this.multiRegexes[l];
          let s = new n();
          return (
            this.rules.slice(l).forEach(([u, c]) => s.addRule(u, c)),
            s.compile(),
            (this.multiRegexes[l] = s),
            s
          );
        }
        resumingScanAtSamePosition() {
          return this.regexIndex !== 0;
        }
        considerAll() {
          this.regexIndex = 0;
        }
        addRule(l, s) {
          this.rules.push([l, s]), s.type === "begin" && this.count++;
        }
        exec(l) {
          let s = this.getMatcher(this.regexIndex);
          s.lastIndex = this.lastIndex;
          let u = s.exec(l);
          if (
            this.resumingScanAtSamePosition() &&
            !(u && u.index === this.lastIndex)
          ) {
            let c = this.getMatcher(0);
            (c.lastIndex = this.lastIndex + 1), (u = c.exec(l));
          }
          return (
            u &&
              ((this.regexIndex += u.position + 1),
              this.regexIndex === this.count && this.considerAll()),
            u
          );
        }
      }
      function r(i) {
        let l = new a();
        return (
          i.contains.forEach((s) =>
            l.addRule(s.begin, { rule: s, type: "begin" })
          ),
          i.terminatorEnd && l.addRule(i.terminatorEnd, { type: "end" }),
          i.illegal && l.addRule(i.illegal, { type: "illegal" }),
          l
        );
      }
      function o(i, l) {
        let s = i;
        if (i.isCompiled) return s;
        [_4, x4, L4, M4].forEach((c) => c(i, l)),
          e.compilerExtensions.forEach((c) => c(i, l)),
          (i.__beforeBegin = null),
          [A4, y4, w4].forEach((c) => c(i, l)),
          (i.isCompiled = !0);
        let u = null;
        return (
          typeof i.keywords == "object" &&
            i.keywords.$pattern &&
            ((i.keywords = Object.assign({}, i.keywords)),
            (u = i.keywords.$pattern),
            delete i.keywords.$pattern),
          (u = u || /\w+/),
          i.keywords && (i.keywords = Ni(i.keywords, e.case_insensitive)),
          (s.keywordPatternRe = t(u, !0)),
          l &&
            (i.begin || (i.begin = /\B|\b/),
            (s.beginRe = t(s.begin)),
            !i.end && !i.endsWithParent && (i.end = /\B|\b/),
            i.end && (s.endRe = t(s.end)),
            (s.terminatorEnd = gt(s.end) || ""),
            i.endsWithParent &&
              l.terminatorEnd &&
              (s.terminatorEnd += (i.end ? "|" : "") + l.terminatorEnd)),
          i.illegal && (s.illegalRe = t(i.illegal)),
          i.contains || (i.contains = []),
          (i.contains = [].concat(
            ...i.contains.map(function (c) {
              return O4(c === "self" ? i : c);
            })
          )),
          i.contains.forEach(function (c) {
            o(c, s);
          }),
          i.starts && o(i.starts, l),
          (s.matcher = r(s)),
          s
        );
      }
      if (
        (e.compilerExtensions || (e.compilerExtensions = []),
        e.contains && e.contains.includes("self"))
      )
        throw new Error(
          "ERR: contains `self` is not supported at the top-level of a language.  See documentation."
        );
      return (e.classNameAliases = d5(e.classNameAliases || {})), o(e);
    }
    function Ti(e) {
      return e ? e.endsWithParent || Ti(e.starts) : !1;
    }
    function O4(e) {
      return (
        e.variants &&
          !e.cachedVariants &&
          (e.cachedVariants = e.variants.map(function (t) {
            return d5(e, { variants: null }, t);
          })),
        e.cachedVariants
          ? e.cachedVariants
          : Ti(e)
          ? d5(e, { starts: e.starts ? d5(e.starts) : null })
          : Object.isFrozen(e)
          ? d5(e)
          : e
      );
    }
    var H4 = "11.7.0",
      Q0 = class extends Error {
        constructor(t, n) {
          super(t), (this.name = "HTMLInjectionError"), (this.html = n);
        }
      },
      K0 = Mi,
      xi = d5,
      wi = Symbol("nomatch"),
      D4 = 7,
      V4 = function (e) {
        let t = Object.create(null),
          n = Object.create(null),
          a = [],
          r = !0,
          o =
            "Could not find the language '{}', did you forget to load/include a language module?",
          i = { disableAutodetect: !0, name: "Plain text", contains: [] },
          l = {
            ignoreUnescapedHTML: !1,
            throwUnescapedHTML: !1,
            noHighlightRe: /^(no-?highlight)$/i,
            languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
            classPrefix: "hljs-",
            cssSelector: "pre code",
            languages: null,
            __emitter: Y0,
          };
        function s(w) {
          return l.noHighlightRe.test(w);
        }
        function u(w) {
          let R = w.className + " ";
          R += w.parentNode ? w.parentNode.className : "";
          let T = l.languageDetectRe.exec(R);
          if (T) {
            let B = L(T[1]);
            return (
              B ||
                (yi(o.replace("{}", T[1])),
                yi("Falling back to no-highlight mode for this block.", w)),
              B ? T[1] : "no-highlight"
            );
          }
          return R.split(/\s+/).find((B) => s(B) || L(B));
        }
        function c(w, R, T) {
          let B = "",
            q = "";
          typeof R == "object"
            ? ((B = w), (T = R.ignoreIllegals), (q = R.language))
            : (P5(
                "10.7.0",
                "highlight(lang, code, ...args) has been deprecated."
              ),
              P5(
                "10.7.0",
                `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`
              ),
              (q = w),
              (B = R)),
            T === void 0 && (T = !0);
          let m = { code: B, language: q };
          F("before:highlight", m);
          let f = m.result ? m.result : h(m.language, m.code, T);
          return (f.code = m.code), F("after:highlight", f), f;
        }
        function h(w, R, T, B) {
          let q = Object.create(null);
          function m(H, P) {
            return H.keywords[P];
          }
          function f() {
            if (!K.keywords) {
              ge.addText(ce);
              return;
            }
            let H = 0;
            K.keywordPatternRe.lastIndex = 0;
            let P = K.keywordPatternRe.exec(ce),
              j = "";
            for (; P; ) {
              j += ce.substring(H, P.index);
              let A = Qe.case_insensitive ? P[0].toLowerCase() : P[0],
                k = m(K, A);
              if (k) {
                let [U, ae] = k;
                if (
                  (ge.addText(j),
                  (j = ""),
                  (q[A] = (q[A] || 0) + 1),
                  q[A] <= D4 && (m5 += ae),
                  U.startsWith("_"))
                )
                  j += P[0];
                else {
                  let Se = Qe.classNameAliases[U] || U;
                  ge.addKeyword(P[0], Se);
                }
              } else j += P[0];
              (H = K.keywordPatternRe.lastIndex),
                (P = K.keywordPatternRe.exec(ce));
            }
            (j += ce.substring(H)), ge.addText(j);
          }
          function He() {
            if (ce === "") return;
            let H = null;
            if (typeof K.subLanguage == "string") {
              if (!t[K.subLanguage]) {
                ge.addText(ce);
                return;
              }
              (H = h(K.subLanguage, ce, !0, U5[K.subLanguage])),
                (U5[K.subLanguage] = H._top);
            } else H = d(ce, K.subLanguage.length ? K.subLanguage : null);
            K.relevance > 0 && (m5 += H.relevance),
              ge.addSublanguage(H._emitter, H.language);
          }
          function pe() {
            K.subLanguage != null ? He() : f(), (ce = "");
          }
          function _e(H, P) {
            let j = 1,
              A = P.length - 1;
            for (; j <= A; ) {
              if (!H._emit[j]) {
                j++;
                continue;
              }
              let k = Qe.classNameAliases[H[j]] || H[j],
                U = P[j];
              k ? ge.addKeyword(U, k) : ((ce = U), f(), (ce = "")), j++;
            }
          }
          function Ye(H, P) {
            return (
              H.scope &&
                typeof H.scope == "string" &&
                ge.openNode(Qe.classNameAliases[H.scope] || H.scope),
              H.beginScope &&
                (H.beginScope._wrap
                  ? (ge.addKeyword(
                      ce,
                      Qe.classNameAliases[H.beginScope._wrap] ||
                        H.beginScope._wrap
                    ),
                    (ce = ""))
                  : H.beginScope._multi && (_e(H.beginScope, P), (ce = ""))),
              (K = Object.create(H, { parent: { value: K } })),
              K
            );
          }
          function Ie(H, P, j) {
            let A = e4(H.endRe, j);
            if (A) {
              if (H["on:end"]) {
                let k = new x1(H);
                H["on:end"](P, k), k.isMatchIgnored && (A = !1);
              }
              if (A) {
                for (; H.endsParent && H.parent; ) H = H.parent;
                return H;
              }
            }
            if (H.endsWithParent) return Ie(H.parent, P, j);
          }
          function me(H) {
            return K.matcher.regexIndex === 0
              ? ((ce += H[0]), 1)
              : ((q5 = !0), 0);
          }
          function ne(H) {
            let P = H[0],
              j = H.rule,
              A = new x1(j),
              k = [j.__beforeBegin, j["on:begin"]];
            for (let U of k)
              if (!!U && (U(H, A), A.isMatchIgnored)) return me(P);
            return (
              j.skip
                ? (ce += P)
                : (j.excludeBegin && (ce += P),
                  pe(),
                  !j.returnBegin && !j.excludeBegin && (ce = P)),
              Ye(j, H),
              j.returnBegin ? 0 : P.length
            );
          }
          function ke(H) {
            let P = H[0],
              j = R.substring(H.index),
              A = Ie(K, H, j);
            if (!A) return wi;
            let k = K;
            K.endScope && K.endScope._wrap
              ? (pe(), ge.addKeyword(P, K.endScope._wrap))
              : K.endScope && K.endScope._multi
              ? (pe(), _e(K.endScope, H))
              : k.skip
              ? (ce += P)
              : (k.returnEnd || k.excludeEnd || (ce += P),
                pe(),
                k.excludeEnd && (ce = P));
            do
              K.scope && ge.closeNode(),
                !K.skip && !K.subLanguage && (m5 += K.relevance),
                (K = K.parent);
            while (K !== A.parent);
            return A.starts && Ye(A.starts, H), k.returnEnd ? 0 : P.length;
          }
          function qe() {
            let H = [];
            for (let P = K; P !== Qe; P = P.parent)
              P.scope && H.unshift(P.scope);
            H.forEach((P) => ge.openNode(P));
          }
          let Te = {};
          function h5(H, P) {
            let j = P && P[0];
            if (((ce += H), j == null)) return pe(), 0;
            if (
              Te.type === "begin" &&
              P.type === "end" &&
              Te.index === P.index &&
              j === ""
            ) {
              if (((ce += R.slice(P.index, P.index + 1)), !r)) {
                let A = new Error(`0 width match regex (${w})`);
                throw ((A.languageName = w), (A.badRule = Te.rule), A);
              }
              return 1;
            }
            if (((Te = P), P.type === "begin")) return ne(P);
            if (P.type === "illegal" && !T) {
              let A = new Error(
                'Illegal lexeme "' +
                  j +
                  '" for mode "' +
                  (K.scope || "<unnamed>") +
                  '"'
              );
              throw ((A.mode = K), A);
            } else if (P.type === "end") {
              let A = ke(P);
              if (A !== wi) return A;
            }
            if (P.type === "illegal" && j === "") return 1;
            if ($5 > 1e5 && $5 > P.index * 3)
              throw new Error(
                "potential infinite loop, way more iterations than matches"
              );
            return (ce += j), j.length;
          }
          let Qe = L(w);
          if (!Qe)
            throw (
              (M5(o.replace("{}", w)),
              new Error('Unknown language: "' + w + '"'))
            );
          let C1 = T4(Qe),
            B5 = "",
            K = B || C1,
            U5 = {},
            ge = new l.__emitter(l);
          qe();
          let ce = "",
            m5 = 0,
            Ze = 0,
            $5 = 0,
            q5 = !1;
          try {
            for (K.matcher.considerAll(); ; ) {
              $5++,
                q5 ? (q5 = !1) : K.matcher.considerAll(),
                (K.matcher.lastIndex = Ze);
              let H = K.matcher.exec(R);
              if (!H) break;
              let P = R.substring(Ze, H.index),
                j = h5(P, H);
              Ze = H.index + j;
            }
            return (
              h5(R.substring(Ze)),
              ge.closeAllNodes(),
              ge.finalize(),
              (B5 = ge.toHTML()),
              {
                language: w,
                value: B5,
                relevance: m5,
                illegal: !1,
                _emitter: ge,
                _top: K,
              }
            );
          } catch (H) {
            if (H.message && H.message.includes("Illegal"))
              return {
                language: w,
                value: K0(R),
                illegal: !0,
                relevance: 0,
                _illegalBy: {
                  message: H.message,
                  index: Ze,
                  context: R.slice(Ze - 100, Ze + 100),
                  mode: H.mode,
                  resultSoFar: B5,
                },
                _emitter: ge,
              };
            if (r)
              return {
                language: w,
                value: K0(R),
                illegal: !1,
                relevance: 0,
                errorRaised: H,
                _emitter: ge,
                _top: K,
              };
            throw H;
          }
        }
        function p(w) {
          let R = {
            value: K0(w),
            illegal: !1,
            relevance: 0,
            _top: i,
            _emitter: new l.__emitter(l),
          };
          return R._emitter.addText(w), R;
        }
        function d(w, R) {
          R = R || l.languages || Object.keys(t);
          let T = p(w),
            B = R.filter(L)
              .filter(O)
              .map((pe) => h(pe, w, !1));
          B.unshift(T);
          let q = B.sort((pe, _e) => {
              if (pe.relevance !== _e.relevance)
                return _e.relevance - pe.relevance;
              if (pe.language && _e.language) {
                if (L(pe.language).supersetOf === _e.language) return 1;
                if (L(_e.language).supersetOf === pe.language) return -1;
              }
              return 0;
            }),
            [m, f] = q,
            He = m;
          return (He.secondBest = f), He;
        }
        function g(w, R, T) {
          let B = (R && n[R]) || T;
          w.classList.add("hljs"), w.classList.add(`language-${B}`);
        }
        function b(w) {
          let R = null,
            T = u(w);
          if (s(T)) return;
          if (
            (F("before:highlightElement", { el: w, language: T }),
            w.children.length > 0 &&
              (l.ignoreUnescapedHTML ||
                (console.warn(
                  "One of your code blocks includes unescaped HTML. This is a potentially serious security risk."
                ),
                console.warn(
                  "https://github.com/highlightjs/highlight.js/wiki/security"
                ),
                console.warn("The element with unescaped HTML:"),
                console.warn(w)),
              l.throwUnescapedHTML))
          )
            throw new Q0(
              "One of your code blocks includes unescaped HTML.",
              w.innerHTML
            );
          R = w;
          let B = R.textContent,
            q = T ? c(B, { language: T, ignoreIllegals: !0 }) : d(B);
          (w.innerHTML = q.value),
            g(w, T, q.language),
            (w.result = {
              language: q.language,
              re: q.relevance,
              relevance: q.relevance,
            }),
            q.secondBest &&
              (w.secondBest = {
                language: q.secondBest.language,
                relevance: q.secondBest.relevance,
              }),
            F("after:highlightElement", { el: w, result: q, text: B });
        }
        function v(w) {
          l = xi(l, w);
        }
        let _ = () => {
          y(),
            P5(
              "10.6.0",
              "initHighlighting() deprecated.  Use highlightAll() now."
            );
        };
        function C() {
          y(),
            P5(
              "10.6.0",
              "initHighlightingOnLoad() deprecated.  Use highlightAll() now."
            );
        }
        let M = !1;
        function y() {
          if (document.readyState === "loading") {
            M = !0;
            return;
          }
          document.querySelectorAll(l.cssSelector).forEach(b);
        }
        function x() {
          M && y();
        }
        typeof window < "u" &&
          window.addEventListener &&
          window.addEventListener("DOMContentLoaded", x, !1);
        function E(w, R) {
          let T = null;
          try {
            T = R(e);
          } catch (B) {
            if (
              (M5(
                "Language definition for '{}' could not be registered.".replace(
                  "{}",
                  w
                )
              ),
              r)
            )
              M5(B);
            else throw B;
            T = i;
          }
          T.name || (T.name = w),
            (t[w] = T),
            (T.rawDefinition = R.bind(null, e)),
            T.aliases && W(T.aliases, { languageName: w });
        }
        function z(w) {
          delete t[w];
          for (let R of Object.keys(n)) n[R] === w && delete n[R];
        }
        function N() {
          return Object.keys(t);
        }
        function L(w) {
          return (w = (w || "").toLowerCase()), t[w] || t[n[w]];
        }
        function W(w, { languageName: R }) {
          typeof w == "string" && (w = [w]),
            w.forEach((T) => {
              n[T.toLowerCase()] = R;
            });
        }
        function O(w) {
          let R = L(w);
          return R && !R.disableAutodetect;
        }
        function $(w) {
          w["before:highlightBlock"] &&
            !w["before:highlightElement"] &&
            (w["before:highlightElement"] = (R) => {
              w["before:highlightBlock"](Object.assign({ block: R.el }, R));
            }),
            w["after:highlightBlock"] &&
              !w["after:highlightElement"] &&
              (w["after:highlightElement"] = (R) => {
                w["after:highlightBlock"](Object.assign({ block: R.el }, R));
              });
        }
        function I(w) {
          $(w), a.push(w);
        }
        function F(w, R) {
          let T = w;
          a.forEach(function (B) {
            B[T] && B[T](R);
          });
        }
        function J(w) {
          return (
            P5("10.7.0", "highlightBlock will be removed entirely in v12.0"),
            P5("10.7.0", "Please use highlightElement now."),
            b(w)
          );
        }
        Object.assign(e, {
          highlight: c,
          highlightAuto: d,
          highlightAll: y,
          highlightElement: b,
          highlightBlock: J,
          configure: v,
          initHighlighting: _,
          initHighlightingOnLoad: C,
          registerLanguage: E,
          unregisterLanguage: z,
          listLanguages: N,
          getLanguage: L,
          registerAliases: W,
          autoDetection: O,
          inherit: xi,
          addPlugin: I,
        }),
          (e.debugMode = function () {
            r = !1;
          }),
          (e.safeMode = function () {
            r = !0;
          }),
          (e.versionString = H4),
          (e.regex = {
            concat: z5,
            lookahead: zi,
            either: j0,
            optional: j3,
            anyNumberOfTimes: X3,
          });
        for (let w in y1) typeof y1[w] == "object" && Z0.exports(y1[w]);
        return Object.assign(e, y1), e;
      },
      bt = V4({});
    Oi.exports = bt;
    bt.HighlightJS = bt;
    bt.default = bt;
  });
  var Vi = De((Vb, tn) => {
    (function () {
      var e;
      typeof tn < "u"
        ? (e = tn.exports = a)
        : (e = (function () {
            return this || (0, eval)("this");
          })()),
        (e.format = a),
        (e.vsprintf = n),
        typeof console < "u" &&
          typeof console.log == "function" &&
          (e.printf = t);
      function t() {
        console.log(a.apply(null, arguments));
      }
      function n(r, o) {
        return a.apply(null, [r].concat(o));
      }
      function a(r) {
        for (
          var o = 1,
            i = [].slice.call(arguments),
            l = 0,
            s = r.length,
            u = "",
            c,
            h = !1,
            p,
            d,
            g = !1,
            b,
            v = function () {
              return i[o++];
            },
            _ = function () {
              for (var C = ""; /\d/.test(r[l]); ) (C += r[l++]), (c = r[l]);
              return C.length > 0 ? parseInt(C) : null;
            };
          l < s;
          ++l
        )
          if (((c = r[l]), h))
            switch (
              ((h = !1),
              c == "."
                ? ((g = !1), (c = r[++l]))
                : c == "0" && r[l + 1] == "."
                ? ((g = !0), (l += 2), (c = r[l]))
                : (g = !0),
              (b = _()),
              c)
            ) {
              case "b":
                u += parseInt(v(), 10).toString(2);
                break;
              case "c":
                (p = v()),
                  typeof p == "string" || p instanceof String
                    ? (u += p)
                    : (u += String.fromCharCode(parseInt(p, 10)));
                break;
              case "d":
                u += parseInt(v(), 10);
                break;
              case "f":
                (d = String(parseFloat(v()).toFixed(b || 6))),
                  (u += g ? d : d.replace(/^0/, ""));
                break;
              case "j":
                u += JSON.stringify(v());
                break;
              case "o":
                u += "0" + parseInt(v(), 10).toString(8);
                break;
              case "s":
                u += v();
                break;
              case "x":
                u += "0x" + parseInt(v(), 10).toString(16);
                break;
              case "X":
                u += "0x" + parseInt(v(), 10).toString(16).toUpperCase();
                break;
              default:
                u += c;
                break;
            }
          else c === "%" ? (h = !0) : (u += c);
        return u;
      }
    })();
  });
  var Z5,
    V,
    vn,
    u7,
    W5,
    hn,
    bn,
    _t = {},
    En = [],
    d7 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function Je(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function _n(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function Ge(e, t, n) {
    var a,
      r,
      o,
      i = {};
    for (o in t)
      o == "key" ? (a = t[o]) : o == "ref" ? (r = t[o]) : (i[o] = t[o]);
    if (
      (arguments.length > 2 &&
        (i.children = arguments.length > 3 ? Z5.call(arguments, 2) : n),
      typeof e == "function" && e.defaultProps != null)
    )
      for (o in e.defaultProps) i[o] === void 0 && (i[o] = e.defaultProps[o]);
    return Y5(e, i, a, r, null);
  }
  function Y5(e, t, n, a, r) {
    var o = {
      type: e,
      props: t,
      key: n,
      ref: a,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: r ?? ++vn,
    };
    return r == null && V.vnode != null && V.vnode(o), o;
  }
  function T1() {
    return { current: null };
  }
  function Ke(e) {
    return e.children;
  }
  function Fe(e, t) {
    (this.props = e), (this.context = t);
  }
  function Q5(e, t) {
    if (t == null) return e.__ ? Q5(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
    return typeof e.type == "function" ? Q5(e) : null;
  }
  function An(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return An(e);
    }
  }
  function L1(e) {
    ((!e.__d && (e.__d = !0) && W5.push(e) && !At.__r++) ||
      hn !== V.debounceRendering) &&
      ((hn = V.debounceRendering) || setTimeout)(At);
  }
  function At() {
    for (var e; (At.__r = W5.length); )
      (e = W5.sort(function (t, n) {
        return t.__v.__b - n.__v.__b;
      })),
        (W5 = []),
        e.some(function (t) {
          var n, a, r, o, i, l;
          t.__d &&
            ((i = (o = (n = t).__v).__e),
            (l = n.__P) &&
              ((a = []),
              ((r = Je({}, o)).__v = o.__v + 1),
              O1(
                l,
                o,
                r,
                n.__n,
                l.ownerSVGElement !== void 0,
                o.__h != null ? [i] : null,
                a,
                i ?? Q5(o),
                o.__h
              ),
              Mn(a, o),
              o.__e != i && An(o)));
        });
  }
  function yn(e, t, n, a, r, o, i, l, s, u) {
    var c,
      h,
      p,
      d,
      g,
      b,
      v,
      _ = (a && a.__k) || En,
      C = _.length;
    for (n.__k = [], c = 0; c < t.length; c++)
      if (
        (d = n.__k[c] =
          (d = t[c]) == null || typeof d == "boolean"
            ? null
            : typeof d == "string" ||
              typeof d == "number" ||
              typeof d == "bigint"
            ? Y5(null, d, null, null, d)
            : Array.isArray(d)
            ? Y5(Ke, { children: d }, null, null, null)
            : d.__b > 0
            ? Y5(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v)
            : d) != null
      ) {
        if (
          ((d.__ = n),
          (d.__b = n.__b + 1),
          (p = _[c]) === null || (p && d.key == p.key && d.type === p.type))
        )
          _[c] = void 0;
        else
          for (h = 0; h < C; h++) {
            if ((p = _[h]) && d.key == p.key && d.type === p.type) {
              _[h] = void 0;
              break;
            }
            p = null;
          }
        O1(e, d, (p = p || _t), r, o, i, l, s, u),
          (g = d.__e),
          (h = d.ref) &&
            p.ref != h &&
            (v || (v = []),
            p.ref && v.push(p.ref, null, d),
            v.push(h, d.__c || g, d)),
          g != null
            ? (b == null && (b = g),
              typeof d.type == "function" && d.__k === p.__k
                ? (d.__d = s = xn(d, s, e))
                : (s = wn(e, d, p, _, g, s)),
              typeof n.type == "function" && (n.__d = s))
            : s && p.__e == s && s.parentNode != e && (s = Q5(p));
      }
    for (n.__e = b, c = C; c--; ) _[c] != null && In(_[c], _[c]);
    if (v) for (c = 0; c < v.length; c++) zn(v[c], v[++c], v[++c]);
  }
  function xn(e, t, n) {
    for (var a, r = e.__k, o = 0; r && o < r.length; o++)
      (a = r[o]) &&
        ((a.__ = e),
        (t =
          typeof a.type == "function"
            ? xn(a, t, n)
            : wn(n, a, a, r, a.__e, t)));
    return t;
  }
  function Xe(e, t) {
    return (
      (t = t || []),
      e == null ||
        typeof e == "boolean" ||
        (Array.isArray(e)
          ? e.some(function (n) {
              Xe(n, t);
            })
          : t.push(e)),
      t
    );
  }
  function wn(e, t, n, a, r, o) {
    var i, l, s;
    if (t.__d !== void 0) (i = t.__d), (t.__d = void 0);
    else if (n == null || r != o || r.parentNode == null)
      e: if (o == null || o.parentNode !== e) e.appendChild(r), (i = null);
      else {
        for (l = o, s = 0; (l = l.nextSibling) && s < a.length; s += 1)
          if (l == r) break e;
        e.insertBefore(r, o), (i = o);
      }
    return i !== void 0 ? i : r.nextSibling;
  }
  function p7(e, t, n, a, r) {
    var o;
    for (o in n)
      o === "children" || o === "key" || o in t || yt(e, o, null, n[o], a);
    for (o in t)
      (r && typeof t[o] != "function") ||
        o === "children" ||
        o === "key" ||
        o === "value" ||
        o === "checked" ||
        n[o] === t[o] ||
        yt(e, o, t[o], n[o], a);
  }
  function mn(e, t, n) {
    t[0] === "-"
      ? e.setProperty(t, n)
      : (e[t] =
          n == null ? "" : typeof n != "number" || d7.test(t) ? n : n + "px");
  }
  function yt(e, t, n, a, r) {
    var o;
    e: if (t === "style")
      if (typeof n == "string") e.style.cssText = n;
      else {
        if ((typeof a == "string" && (e.style.cssText = a = ""), a))
          for (t in a) (n && t in n) || mn(e.style, t, "");
        if (n) for (t in n) (a && n[t] === a[t]) || mn(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      (o = t !== (t = t.replace(/Capture$/, ""))),
        (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + o] = n),
        n
          ? a || e.addEventListener(t, o ? gn : fn, o)
          : e.removeEventListener(t, o ? gn : fn, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        t !== "href" &&
        t !== "list" &&
        t !== "form" &&
        t !== "tabIndex" &&
        t !== "download" &&
        t in e
      )
        try {
          e[t] = n ?? "";
          break e;
        } catch {}
      typeof n == "function" ||
        (n == null || (n === !1 && t.indexOf("-") == -1)
          ? e.removeAttribute(t)
          : e.setAttribute(t, n));
    }
  }
  function fn(e) {
    this.l[e.type + !1](V.event ? V.event(e) : e);
  }
  function gn(e) {
    this.l[e.type + !0](V.event ? V.event(e) : e);
  }
  function O1(e, t, n, a, r, o, i, l, s) {
    var u,
      c,
      h,
      p,
      d,
      g,
      b,
      v,
      _,
      C,
      M,
      y,
      x,
      E,
      z,
      N = t.type;
    if (t.constructor !== void 0) return null;
    n.__h != null &&
      ((s = n.__h), (l = t.__e = n.__e), (t.__h = null), (o = [l])),
      (u = V.__b) && u(t);
    try {
      e: if (typeof N == "function") {
        if (
          ((v = t.props),
          (_ = (u = N.contextType) && a[u.__c]),
          (C = u ? (_ ? _.props.value : u.__) : a),
          n.__c
            ? (b = (c = t.__c = n.__c).__ = c.__E)
            : ("prototype" in N && N.prototype.render
                ? (t.__c = c = new N(v, C))
                : ((t.__c = c = new Fe(v, C)),
                  (c.constructor = N),
                  (c.render = m7)),
              _ && _.sub(c),
              (c.props = v),
              c.state || (c.state = {}),
              (c.context = C),
              (c.__n = a),
              (h = c.__d = !0),
              (c.__h = []),
              (c._sb = [])),
          c.__s == null && (c.__s = c.state),
          N.getDerivedStateFromProps != null &&
            (c.__s == c.state && (c.__s = Je({}, c.__s)),
            Je(c.__s, N.getDerivedStateFromProps(v, c.__s))),
          (p = c.props),
          (d = c.state),
          h)
        )
          N.getDerivedStateFromProps == null &&
            c.componentWillMount != null &&
            c.componentWillMount(),
            c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (
            (N.getDerivedStateFromProps == null &&
              v !== p &&
              c.componentWillReceiveProps != null &&
              c.componentWillReceiveProps(v, C),
            (!c.__e &&
              c.shouldComponentUpdate != null &&
              c.shouldComponentUpdate(v, c.__s, C) === !1) ||
              t.__v === n.__v)
          ) {
            for (
              c.props = v,
                c.state = c.__s,
                t.__v !== n.__v && (c.__d = !1),
                c.__v = t,
                t.__e = n.__e,
                t.__k = n.__k,
                t.__k.forEach(function (L) {
                  L && (L.__ = t);
                }),
                M = 0;
              M < c._sb.length;
              M++
            )
              c.__h.push(c._sb[M]);
            (c._sb = []), c.__h.length && i.push(c);
            break e;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(v, c.__s, C),
            c.componentDidUpdate != null &&
              c.__h.push(function () {
                c.componentDidUpdate(p, d, g);
              });
        }
        if (
          ((c.context = C),
          (c.props = v),
          (c.__v = t),
          (c.__P = e),
          (y = V.__r),
          (x = 0),
          "prototype" in N && N.prototype.render)
        ) {
          for (
            c.state = c.__s,
              c.__d = !1,
              y && y(t),
              u = c.render(c.props, c.state, c.context),
              E = 0;
            E < c._sb.length;
            E++
          )
            c.__h.push(c._sb[E]);
          c._sb = [];
        } else
          do
            (c.__d = !1),
              y && y(t),
              (u = c.render(c.props, c.state, c.context)),
              (c.state = c.__s);
          while (c.__d && ++x < 25);
        (c.state = c.__s),
          c.getChildContext != null && (a = Je(Je({}, a), c.getChildContext())),
          h ||
            c.getSnapshotBeforeUpdate == null ||
            (g = c.getSnapshotBeforeUpdate(p, d)),
          (z =
            u != null && u.type === Ke && u.key == null ? u.props.children : u),
          yn(e, Array.isArray(z) ? z : [z], t, n, a, r, o, i, l, s),
          (c.base = t.__e),
          (t.__h = null),
          c.__h.length && i.push(c),
          b && (c.__E = c.__ = null),
          (c.__e = !1);
      } else
        o == null && t.__v === n.__v
          ? ((t.__k = n.__k), (t.__e = n.__e))
          : (t.__e = h7(n.__e, t, n, a, r, o, i, s));
      (u = V.diffed) && u(t);
    } catch (L) {
      (t.__v = null),
        (s || o != null) &&
          ((t.__e = l), (t.__h = !!s), (o[o.indexOf(l)] = null)),
        V.__e(L, t, n);
    }
  }
  function Mn(e, t) {
    V.__c && V.__c(t, e),
      e.some(function (n) {
        try {
          (e = n.__h),
            (n.__h = []),
            e.some(function (a) {
              a.call(n);
            });
        } catch (a) {
          V.__e(a, n.__v);
        }
      });
  }
  function h7(e, t, n, a, r, o, i, l) {
    var s,
      u,
      c,
      h = n.props,
      p = t.props,
      d = t.type,
      g = 0;
    if ((d === "svg" && (r = !0), o != null)) {
      for (; g < o.length; g++)
        if (
          (s = o[g]) &&
          "setAttribute" in s == !!d &&
          (d ? s.localName === d : s.nodeType === 3)
        ) {
          (e = s), (o[g] = null);
          break;
        }
    }
    if (e == null) {
      if (d === null) return document.createTextNode(p);
      (e = r
        ? document.createElementNS("http://www.w3.org/2000/svg", d)
        : document.createElement(d, p.is && p)),
        (o = null),
        (l = !1);
    }
    if (d === null) h === p || (l && e.data === p) || (e.data = p);
    else {
      if (
        ((o = o && Z5.call(e.childNodes)),
        (u = (h = n.props || _t).dangerouslySetInnerHTML),
        (c = p.dangerouslySetInnerHTML),
        !l)
      ) {
        if (o != null)
          for (h = {}, g = 0; g < e.attributes.length; g++)
            h[e.attributes[g].name] = e.attributes[g].value;
        (c || u) &&
          ((c && ((u && c.__html == u.__html) || c.__html === e.innerHTML)) ||
            (e.innerHTML = (c && c.__html) || ""));
      }
      if ((p7(e, p, h, r, l), c)) t.__k = [];
      else if (
        ((g = t.props.children),
        yn(
          e,
          Array.isArray(g) ? g : [g],
          t,
          n,
          a,
          r && d !== "foreignObject",
          o,
          i,
          o ? o[0] : n.__k && Q5(n, 0),
          l
        ),
        o != null)
      )
        for (g = o.length; g--; ) o[g] != null && _n(o[g]);
      l ||
        ("value" in p &&
          (g = p.value) !== void 0 &&
          (g !== e.value ||
            (d === "progress" && !g) ||
            (d === "option" && g !== h.value)) &&
          yt(e, "value", g, h.value, !1),
        "checked" in p &&
          (g = p.checked) !== void 0 &&
          g !== e.checked &&
          yt(e, "checked", g, h.checked, !1));
    }
    return e;
  }
  function zn(e, t, n) {
    try {
      typeof e == "function" ? e(t) : (e.current = t);
    } catch (a) {
      V.__e(a, n);
    }
  }
  function In(e, t, n) {
    var a, r;
    if (
      (V.unmount && V.unmount(e),
      (a = e.ref) && ((a.current && a.current !== e.__e) || zn(a, null, t)),
      (a = e.__c) != null)
    ) {
      if (a.componentWillUnmount)
        try {
          a.componentWillUnmount();
        } catch (o) {
          V.__e(o, t);
        }
      (a.base = a.__P = null), (e.__c = void 0);
    }
    if ((a = e.__k))
      for (r = 0; r < a.length; r++)
        a[r] && In(a[r], t, n || typeof e.type != "function");
    n || e.__e == null || _n(e.__e), (e.__ = e.__e = e.__d = void 0);
  }
  function m7(e, t, n) {
    return this.constructor(e, n);
  }
  function r5(e, t, n) {
    var a, r, o;
    V.__ && V.__(e, t),
      (r = (a = typeof n == "function") ? null : (n && n.__k) || t.__k),
      (o = []),
      O1(
        t,
        (e = ((!a && n) || t).__k = Ge(Ke, null, [e])),
        r || _t,
        _t,
        t.ownerSVGElement !== void 0,
        !a && n ? [n] : r ? null : t.firstChild ? Z5.call(t.childNodes) : null,
        o,
        !a && n ? n : r ? r.__e : t.firstChild,
        a
      ),
      Mn(o, e);
  }
  function H1(e, t) {
    r5(e, t, H1);
  }
  function kn(e, t, n) {
    var a,
      r,
      o,
      i = Je({}, e.props);
    for (o in t)
      o == "key" ? (a = t[o]) : o == "ref" ? (r = t[o]) : (i[o] = t[o]);
    return (
      arguments.length > 2 &&
        (i.children = arguments.length > 3 ? Z5.call(arguments, 2) : n),
      Y5(e.type, i, a || e.key, r || e.ref, null)
    );
  }
  function D1(e, t) {
    var n = {
      __c: (t = "__cC" + bn++),
      __: e,
      Consumer: function (a, r) {
        return a.children(r);
      },
      Provider: function (a) {
        var r, o;
        return (
          this.getChildContext ||
            ((r = []),
            ((o = {})[t] = this),
            (this.getChildContext = function () {
              return o;
            }),
            (this.shouldComponentUpdate = function (i) {
              this.props.value !== i.value && r.some(L1);
            }),
            (this.sub = function (i) {
              r.push(i);
              var l = i.componentWillUnmount;
              i.componentWillUnmount = function () {
                r.splice(r.indexOf(i), 1), l && l.call(i);
              };
            })),
          a.children
        );
      },
    };
    return (n.Provider.__ = n.Consumer.contextType = n);
  }
  (Z5 = En.slice),
    (V = {
      __e: function (e, t, n, a) {
        for (var r, o, i; (t = t.__); )
          if ((r = t.__c) && !r.__)
            try {
              if (
                ((o = r.constructor) &&
                  o.getDerivedStateFromError != null &&
                  (r.setState(o.getDerivedStateFromError(e)), (i = r.__d)),
                r.componentDidCatch != null &&
                  (r.componentDidCatch(e, a || {}), (i = r.__d)),
                i)
              )
                return (r.__E = r);
            } catch (l) {
              e = l;
            }
        throw e;
      },
    }),
    (vn = 0),
    (u7 = function (e) {
      return e != null && e.constructor === void 0;
    }),
    (Fe.prototype.setState = function (e, t) {
      var n;
      (n =
        this.__s != null && this.__s !== this.state
          ? this.__s
          : (this.__s = Je({}, this.state))),
        typeof e == "function" && (e = e(Je({}, n), this.props)),
        e && Je(n, e),
        e != null && this.__v && (t && this._sb.push(t), L1(this));
    }),
    (Fe.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), L1(this));
    }),
    (Fe.prototype.render = Ke),
    (W5 = []),
    (At.__r = 0),
    (bn = 0);
  var f7 =
      typeof global == "object" && global && global.Object === Object && global,
    xt = f7;
  var g7 = typeof self == "object" && self && self.Object === Object && self,
    v7 = xt || g7 || Function("return this")(),
    S5 = v7;
  var b7 = S5.Symbol,
    C5 = b7;
  var Sn = Object.prototype,
    E7 = Sn.hasOwnProperty,
    _7 = Sn.toString,
    X5 = C5 ? C5.toStringTag : void 0;
  function A7(e) {
    var t = E7.call(e, X5),
      n = e[X5];
    try {
      e[X5] = void 0;
      var a = !0;
    } catch {}
    var r = _7.call(e);
    return a && (t ? (e[X5] = n) : delete e[X5]), r;
  }
  var Cn = A7;
  var y7 = Object.prototype,
    x7 = y7.toString;
  function w7(e) {
    return x7.call(e);
  }
  var Rn = w7;
  var M7 = "[object Null]",
    z7 = "[object Undefined]",
    Nn = C5 ? C5.toStringTag : void 0;
  function I7(e) {
    return e == null
      ? e === void 0
        ? z7
        : M7
      : Nn && Nn in Object(e)
      ? Cn(e)
      : Rn(e);
  }
  var R5 = I7;
  function k7(e) {
    return e != null && typeof e == "object";
  }
  var N5 = k7;
  var S7 = Array.isArray,
    Ln = S7;
  function C7(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var o5 = C7;
  function R7(e) {
    return e;
  }
  var wt = R7;
  var N7 = "[object AsyncFunction]",
    L7 = "[object Function]",
    T7 = "[object GeneratorFunction]",
    O7 = "[object Proxy]";
  function H7(e) {
    if (!o5(e)) return !1;
    var t = R5(e);
    return t == L7 || t == T7 || t == N7 || t == O7;
  }
  var Mt = H7;
  var D7 = S5["__core-js_shared__"],
    zt = D7;
  var Tn = (function () {
    var e = /[^.]+$/.exec((zt && zt.keys && zt.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function V7(e) {
    return !!Tn && Tn in e;
  }
  var On = V7;
  var F7 = Function.prototype,
    P7 = F7.toString;
  function B7(e) {
    if (e != null) {
      try {
        return P7.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var Hn = B7;
  var U7 = /[\\^$.*+?()[\]{}|]/g,
    $7 = /^\[object .+?Constructor\]$/,
    q7 = Function.prototype,
    G7 = Object.prototype,
    K7 = q7.toString,
    W7 = G7.hasOwnProperty,
    Y7 = RegExp(
      "^" +
        K7.call(W7)
          .replace(U7, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function Q7(e) {
    if (!o5(e) || On(e)) return !1;
    var t = Mt(e) ? Y7 : $7;
    return t.test(Hn(e));
  }
  var Dn = Q7;
  function Z7(e, t) {
    return e?.[t];
  }
  var Vn = Z7;
  function X7(e, t) {
    var n = Vn(e, t);
    return Dn(n) ? n : void 0;
  }
  var Fn = X7;
  function j7(e, t, n) {
    switch (n.length) {
      case 0:
        return e.call(t);
      case 1:
        return e.call(t, n[0]);
      case 2:
        return e.call(t, n[0], n[1]);
      case 3:
        return e.call(t, n[0], n[1], n[2]);
    }
    return e.apply(t, n);
  }
  var Pn = j7;
  var J7 = 800,
    el = 16,
    tl = Date.now;
  function nl(e) {
    var t = 0,
      n = 0;
    return function () {
      var a = tl(),
        r = el - (a - n);
      if (((n = a), r > 0)) {
        if (++t >= J7) return arguments[0];
      } else t = 0;
      return e.apply(void 0, arguments);
    };
  }
  var Bn = nl;
  function al(e) {
    return function () {
      return e;
    };
  }
  var Un = al;
  var rl = (function () {
      try {
        var e = Fn(Object, "defineProperty");
        return e({}, "", {}), e;
      } catch {}
    })(),
    V1 = rl;
  var ol = V1
      ? function (e, t) {
          return V1(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Un(t),
            writable: !0,
          });
        }
      : wt,
    $n = ol;
  var il = Bn($n),
    qn = il;
  var ll = 9007199254740991,
    cl = /^(?:0|[1-9]\d*)$/;
  function sl(e, t) {
    var n = typeof e;
    return (
      (t = t ?? ll),
      !!t &&
        (n == "number" || (n != "symbol" && cl.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var It = sl;
  function ul(e, t) {
    return e === t || (e !== e && t !== t);
  }
  var kt = ul;
  var Gn = Math.max;
  function dl(e, t, n) {
    return (
      (t = Gn(t === void 0 ? e.length - 1 : t, 0)),
      function () {
        for (
          var a = arguments, r = -1, o = Gn(a.length - t, 0), i = Array(o);
          ++r < o;

        )
          i[r] = a[t + r];
        r = -1;
        for (var l = Array(t + 1); ++r < t; ) l[r] = a[r];
        return (l[t] = n(i)), Pn(e, this, l);
      }
    );
  }
  var Kn = dl;
  function pl(e, t) {
    return qn(Kn(e, t, wt), e + "");
  }
  var Wn = pl;
  var hl = 9007199254740991;
  function ml(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= hl;
  }
  var St = ml;
  function fl(e) {
    return e != null && St(e.length) && !Mt(e);
  }
  var Ct = fl;
  function gl(e, t, n) {
    if (!o5(n)) return !1;
    var a = typeof t;
    return (a == "number" ? Ct(n) && It(t, n.length) : a == "string" && t in n)
      ? kt(n[t], e)
      : !1;
  }
  var Yn = gl;
  var vl = Object.prototype;
  function bl(e) {
    var t = e && e.constructor,
      n = (typeof t == "function" && t.prototype) || vl;
    return e === n;
  }
  var Qn = bl;
  function El(e, t) {
    for (var n = -1, a = Array(e); ++n < e; ) a[n] = t(n);
    return a;
  }
  var Zn = El;
  var _l = "[object Arguments]";
  function Al(e) {
    return N5(e) && R5(e) == _l;
  }
  var F1 = Al;
  var Xn = Object.prototype,
    yl = Xn.hasOwnProperty,
    xl = Xn.propertyIsEnumerable,
    wl = F1(
      (function () {
        return arguments;
      })()
    )
      ? F1
      : function (e) {
          return N5(e) && yl.call(e, "callee") && !xl.call(e, "callee");
        },
    jn = wl;
  function Ml() {
    return !1;
  }
  var Jn = Ml;
  var na =
      typeof exports == "object" && exports && !exports.nodeType && exports,
    ea =
      na && typeof module == "object" && module && !module.nodeType && module,
    zl = ea && ea.exports === na,
    ta = zl ? S5.Buffer : void 0,
    Il = ta ? ta.isBuffer : void 0,
    kl = Il || Jn,
    aa = kl;
  var Sl = "[object Arguments]",
    Cl = "[object Array]",
    Rl = "[object Boolean]",
    Nl = "[object Date]",
    Ll = "[object Error]",
    Tl = "[object Function]",
    Ol = "[object Map]",
    Hl = "[object Number]",
    Dl = "[object Object]",
    Vl = "[object RegExp]",
    Fl = "[object Set]",
    Pl = "[object String]",
    Bl = "[object WeakMap]",
    Ul = "[object ArrayBuffer]",
    $l = "[object DataView]",
    ql = "[object Float32Array]",
    Gl = "[object Float64Array]",
    Kl = "[object Int8Array]",
    Wl = "[object Int16Array]",
    Yl = "[object Int32Array]",
    Ql = "[object Uint8Array]",
    Zl = "[object Uint8ClampedArray]",
    Xl = "[object Uint16Array]",
    jl = "[object Uint32Array]",
    de = {};
  de[ql] =
    de[Gl] =
    de[Kl] =
    de[Wl] =
    de[Yl] =
    de[Ql] =
    de[Zl] =
    de[Xl] =
    de[jl] =
      !0;
  de[Sl] =
    de[Cl] =
    de[Ul] =
    de[Rl] =
    de[$l] =
    de[Nl] =
    de[Ll] =
    de[Tl] =
    de[Ol] =
    de[Hl] =
    de[Dl] =
    de[Vl] =
    de[Fl] =
    de[Pl] =
    de[Bl] =
      !1;
  function Jl(e) {
    return N5(e) && St(e.length) && !!de[R5(e)];
  }
  var ra = Jl;
  function ec(e) {
    return function (t) {
      return e(t);
    };
  }
  var oa = ec;
  var ia =
      typeof exports == "object" && exports && !exports.nodeType && exports,
    j5 =
      ia && typeof module == "object" && module && !module.nodeType && module,
    tc = j5 && j5.exports === ia,
    P1 = tc && xt.process,
    nc = (function () {
      try {
        var e = j5 && j5.require && j5.require("util").types;
        return e || (P1 && P1.binding && P1.binding("util"));
      } catch {}
    })(),
    B1 = nc;
  var la = B1 && B1.isTypedArray,
    ac = la ? oa(la) : ra,
    ca = ac;
  var rc = Object.prototype,
    oc = rc.hasOwnProperty;
  function ic(e, t) {
    var n = Ln(e),
      a = !n && jn(e),
      r = !n && !a && aa(e),
      o = !n && !a && !r && ca(e),
      i = n || a || r || o,
      l = i ? Zn(e.length, String) : [],
      s = l.length;
    for (var u in e)
      (t || oc.call(e, u)) &&
        !(
          i &&
          (u == "length" ||
            (r && (u == "offset" || u == "parent")) ||
            (o && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
            It(u, s))
        ) &&
        l.push(u);
    return l;
  }
  var sa = ic;
  function lc(e) {
    var t = [];
    if (e != null) for (var n in Object(e)) t.push(n);
    return t;
  }
  var ua = lc;
  var cc = Object.prototype,
    sc = cc.hasOwnProperty;
  function uc(e) {
    if (!o5(e)) return ua(e);
    var t = Qn(e),
      n = [];
    for (var a in e) (a == "constructor" && (t || !sc.call(e, a))) || n.push(a);
    return n;
  }
  var da = uc;
  function dc(e) {
    return Ct(e) ? sa(e, !0) : da(e);
  }
  var pa = dc;
  var ha = Object.prototype,
    pc = ha.hasOwnProperty,
    hc = Wn(function (e, t) {
      e = Object(e);
      var n = -1,
        a = t.length,
        r = a > 2 ? t[2] : void 0;
      for (r && Yn(t[0], t[1], r) && (a = 1); ++n < a; )
        for (var o = t[n], i = pa(o), l = -1, s = i.length; ++l < s; ) {
          var u = i[l],
            c = e[u];
          (c === void 0 || (kt(c, ha[u]) && !pc.call(e, u))) && (e[u] = o[u]);
        }
      return e;
    }),
    U1 = hc;
  var ga = Ve(J5());
  var fa = { triggerMode: "always", theme: "auto" };
  async function Rt() {
    let e = await ga.default.storage.local.get(Object.keys(fa));    
    return U1(e, fa);
  }
  function va() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  var f5,
    he,
    q1,
    ba,
    L5 = 0,
    Ma = [],
    Nt = [],
    Ea = V.__b,
    _a = V.__r,
    Aa = V.diffed,
    ya = V.__c,
    xa = V.unmount;
  function T5(e, t) {
    V.__h && V.__h(he, e, L5 || t), (L5 = 0);
    var n = he.__H || (he.__H = { __: [], __h: [] });
    return e >= n.__.length && n.__.push({ __V: Nt }), n.__[e];
  }
  function Ce(e) {
    return (L5 = 1), K1(Ra, e);
  }
  function K1(e, t, n) {
    var a = T5(f5++, 2);
    if (
      ((a.t = e),
      !a.__c &&
        ((a.__ = [
          n ? n(t) : Ra(void 0, t),
          function (o) {
            var i = a.__N ? a.__N[0] : a.__[0],
              l = a.t(i, o);
            i !== l && ((a.__N = [l, a.__[1]]), a.__c.setState({}));
          },
        ]),
        (a.__c = he),
        !he.u))
    ) {
      he.u = !0;
      var r = he.shouldComponentUpdate;
      he.shouldComponentUpdate = function (o, i, l) {
        if (!a.__c.__H) return !0;
        var s = a.__c.__H.__.filter(function (c) {
          return c.__c;
        });
        if (
          s.every(function (c) {
            return !c.__N;
          })
        )
          return !r || r.call(this, o, i, l);
        var u = !1;
        return (
          s.forEach(function (c) {
            if (c.__N) {
              var h = c.__[0];
              (c.__ = c.__N), (c.__N = void 0), h !== c.__[0] && (u = !0);
            }
          }),
          !(!u && a.__c.props === o) && (!r || r.call(this, o, i, l))
        );
      };
    }
    return a.__N || a.__;
  }
  function e5(e, t) {
    var n = T5(f5++, 3);
    !V.__s && W1(n.__H, t) && ((n.__ = e), (n.i = t), he.__H.__h.push(n));
  }
  function et(e, t) {
    var n = T5(f5++, 4);
    !V.__s && W1(n.__H, t) && ((n.__ = e), (n.i = t), he.__h.push(n));
  }
  function za(e) {
    return (
      (L5 = 5),
      Tt(function () {
        return { current: e };
      }, [])
    );
  }
  function Ia(e, t, n) {
    (L5 = 6),
      et(
        function () {
          return typeof e == "function"
            ? (e(t()),
              function () {
                return e(null);
              })
            : e
            ? ((e.current = t()),
              function () {
                return (e.current = null);
              })
            : void 0;
        },
        n == null ? n : n.concat(e)
      );
  }
  function Tt(e, t) {
    var n = T5(f5++, 7);
    return W1(n.__H, t) ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V) : n.__;
  }
  function i5(e, t) {
    return (
      (L5 = 8),
      Tt(function () {
        return e;
      }, t)
    );
  }
  function ka(e) {
    var t = he.context[e.__c],
      n = T5(f5++, 9);
    return (
      (n.c = e),
      t ? (n.__ == null && ((n.__ = !0), t.sub(he)), t.props.value) : e.__
    );
  }
  function Sa(e, t) {
    V.useDebugValue && V.useDebugValue(t ? t(e) : e);
  }
  function Ca() {
    var e = T5(f5++, 11);
    if (!e.__) {
      for (var t = he.__v; t !== null && !t.__m && t.__ !== null; ) t = t.__;
      var n = t.__m || (t.__m = [0, 0]);
      e.__ = "P" + n[0] + "-" + n[1]++;
    }
    return e.__;
  }
  function fc() {
    for (var e; (e = Ma.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(Lt), e.__H.__h.forEach(G1), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), V.__e(t, e.__v);
        }
  }
  (V.__b = function (e) {
    (he = null), Ea && Ea(e);
  }),
    (V.__r = function (e) {
      _a && _a(e), (f5 = 0);
      var t = (he = e.__c).__H;
      t &&
        (q1 === he
          ? ((t.__h = []),
            (he.__h = []),
            t.__.forEach(function (n) {
              n.__N && (n.__ = n.__N), (n.__V = Nt), (n.__N = n.i = void 0);
            }))
          : (t.__h.forEach(Lt), t.__h.forEach(G1), (t.__h = []))),
        (q1 = he);
    }),
    (V.diffed = function (e) {
      Aa && Aa(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((Ma.push(t) !== 1 && ba === V.requestAnimationFrame) ||
            ((ba = V.requestAnimationFrame) || gc)(fc)),
        t.__H.__.forEach(function (n) {
          n.i && (n.__H = n.i),
            n.__V !== Nt && (n.__ = n.__V),
            (n.i = void 0),
            (n.__V = Nt);
        })),
        (q1 = he = null);
    }),
    (V.__c = function (e, t) {
      t.some(function (n) {
        try {
          n.__h.forEach(Lt),
            (n.__h = n.__h.filter(function (a) {
              return !a.__ || G1(a);
            }));
        } catch (a) {
          t.some(function (r) {
            r.__h && (r.__h = []);
          }),
            (t = []),
            V.__e(a, n.__v);
        }
      }),
        ya && ya(e, t);
    }),
    (V.unmount = function (e) {
      xa && xa(e);
      var t,
        n = e.__c;
      n &&
        n.__H &&
        (n.__H.__.forEach(function (a) {
          try {
            Lt(a);
          } catch (r) {
            t = r;
          }
        }),
        (n.__H = void 0),
        t && V.__e(t, n.__v));
    });
  var wa = typeof requestAnimationFrame == "function";
  function gc(e) {
    var t,
      n = function () {
        clearTimeout(a), wa && cancelAnimationFrame(t), setTimeout(e);
      },
      a = setTimeout(n, 100);
    wa && (t = requestAnimationFrame(n));
  }
  function Lt(e) {
    var t = he,
      n = e.__c;
    typeof n == "function" && ((e.__c = void 0), n()), (he = t);
  }
  function G1(e) {
    var t = he;
    (e.__c = e.__()), (he = t);
  }
  function W1(e, t) {
    return (
      !e ||
      e.length !== t.length ||
      t.some(function (n, a) {
        return n !== e[a];
      })
    );
  }
  function Ra(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Pa(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function Q1(e, t) {
    for (var n in e) if (n !== "__source" && !(n in t)) return !0;
    for (var a in t) if (a !== "__source" && e[a] !== t[a]) return !0;
    return !1;
  }
  function Y1(e, t) {
    return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e != e && t != t);
  }
  function Z1(e) {
    this.props = e;
  }
  function nt(e, t) {
    function n(r) {
      var o = this.props.ref,
        i = o == r.ref;
      return (
        !i && o && (o.call ? o(null) : (o.current = null)),
        t ? !t(this.props, r) || !i : Q1(this.props, r)
      );
    }
    function a(r) {
      return (this.shouldComponentUpdate = n), Ge(e, r);
    }
    return (
      (a.displayName = "Memo(" + (e.displayName || e.name) + ")"),
      (a.prototype.isReactComponent = !0),
      (a.__f = !0),
      a
    );
  }
  ((Z1.prototype = new Fe()).isPureReactComponent = !0),
    (Z1.prototype.shouldComponentUpdate = function (e, t) {
      return Q1(this.props, e) || Q1(this.state, t);
    });
  var Na = V.__b;
  V.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)),
      Na && Na(e);
  };
  var vc =
    (typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref")) ||
    3911;
  function bc(e) {
    function t(n) {
      var a = Pa({}, n);
      return delete a.ref, e(a, n.ref || null);
    }
    return (
      (t.$$typeof = vc),
      (t.render = t),
      (t.prototype.isReactComponent = t.__f = !0),
      (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
      t
    );
  }
  var La = function (e, t) {
      return e == null ? null : Xe(Xe(e).map(t));
    },
    Ec = {
      map: La,
      forEach: La,
      count: function (e) {
        return e ? Xe(e).length : 0;
      },
      only: function (e) {
        var t = Xe(e);
        if (t.length !== 1) throw "Children.only";
        return t[0];
      },
      toArray: Xe,
    },
    _c = V.__e;
  V.__e = function (e, t, n, a) {
    if (e.then) {
      for (var r, o = t; (o = o.__); )
        if ((r = o.__c) && r.__c)
          return (
            t.__e == null && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t)
          );
    }
    _c(e, t, n, a);
  };
  var Ta = V.unmount;
  function Ba(e, t, n) {
    return (
      e &&
        (e.__c &&
          e.__c.__H &&
          (e.__c.__H.__.forEach(function (a) {
            typeof a.__c == "function" && a.__c();
          }),
          (e.__c.__H = null)),
        (e = Pa({}, e)).__c != null &&
          (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
        (e.__k =
          e.__k &&
          e.__k.map(function (a) {
            return Ba(a, t, n);
          }))),
      e
    );
  }
  function Ua(e, t, n) {
    return (
      e &&
        ((e.__v = null),
        (e.__k =
          e.__k &&
          e.__k.map(function (a) {
            return Ua(a, t, n);
          })),
        e.__c &&
          e.__c.__P === t &&
          (e.__e && n.insertBefore(e.__e, e.__d),
          (e.__c.__e = !0),
          (e.__c.__P = n))),
      e
    );
  }
  function Ot() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function $a(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function Ac(e) {
    var t, n, a;
    function r(o) {
      if (
        (t ||
          (t = e()).then(
            function (i) {
              n = i.default || i;
            },
            function (i) {
              a = i;
            }
          ),
        a)
      )
        throw a;
      if (!n) throw t;
      return Ge(n, o);
    }
    return (r.displayName = "Lazy"), (r.__f = !0), r;
  }
  function tt() {
    (this.u = null), (this.o = null);
  }
  (V.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && e.__h === !0 && (e.type = null), Ta && Ta(e);
  }),
    ((Ot.prototype = new Fe()).__c = function (e, t) {
      var n = t.__c,
        a = this;
      a.t == null && (a.t = []), a.t.push(n);
      var r = $a(a.__v),
        o = !1,
        i = function () {
          o || ((o = !0), (n.__R = null), r ? r(l) : l());
        };
      n.__R = i;
      var l = function () {
          if (!--a.__u) {
            if (a.state.__a) {
              var u = a.state.__a;
              a.__v.__k[0] = Ua(u, u.__c.__P, u.__c.__O);
            }
            var c;
            for (a.setState({ __a: (a.__b = null) }); (c = a.t.pop()); )
              c.forceUpdate();
          }
        },
        s = t.__h === !0;
      a.__u++ || s || a.setState({ __a: (a.__b = a.__v.__k[0]) }), e.then(i, i);
    }),
    (Ot.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (Ot.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement("div"),
            a = this.__v.__k[0].__c;
          this.__v.__k[0] = Ba(this.__b, n, (a.__O = a.__P));
        }
        this.__b = null;
      }
      var r = t.__a && Ge(Ke, null, e.fallback);
      return r && (r.__h = null), [Ge(Ke, null, t.__a ? null : e.children), r];
    });
  var Oa = function (e, t, n) {
    if (
      (++n[1] === n[0] && e.o.delete(t),
      e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
    )
      for (n = e.u; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.u = n = n[2];
      }
  };
  function yc(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function xc(e) {
    var t = this,
      n = e.i;
    (t.componentWillUnmount = function () {
      r5(null, t.l), (t.l = null), (t.i = null);
    }),
      t.i && t.i !== n && t.componentWillUnmount(),
      e.__v
        ? (t.l ||
            ((t.i = n),
            (t.l = {
              nodeType: 1,
              parentNode: n,
              childNodes: [],
              appendChild: function (a) {
                this.childNodes.push(a), t.i.appendChild(a);
              },
              insertBefore: function (a, r) {
                this.childNodes.push(a), t.i.appendChild(a);
              },
              removeChild: function (a) {
                this.childNodes.splice(this.childNodes.indexOf(a) >>> 1, 1),
                  t.i.removeChild(a);
              },
            })),
          r5(Ge(yc, { context: t.context }, e.__v), t.l))
        : t.l && t.componentWillUnmount();
  }
  function wc(e, t) {
    var n = Ge(xc, { __v: e, i: t });
    return (n.containerInfo = t), n;
  }
  ((tt.prototype = new Fe()).__a = function (e) {
    var t = this,
      n = $a(t.__v),
      a = t.o.get(e);
    return (
      a[0]++,
      function (r) {
        var o = function () {
          t.props.revealOrder ? (a.push(r), Oa(t, e, a)) : r();
        };
        n ? n(o) : o();
      }
    );
  }),
    (tt.prototype.render = function (e) {
      (this.u = null), (this.o = new Map());
      var t = Xe(e.children);
      e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
      for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
      return e.children;
    }),
    (tt.prototype.componentDidUpdate = tt.prototype.componentDidMount =
      function () {
        var e = this;
        this.o.forEach(function (t, n) {
          Oa(e, n, t);
        });
      });
  var qa =
      (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
      60103,
    Mc =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    zc = typeof document < "u",
    Ic = function (e) {
      return (
        typeof Symbol < "u" && typeof Symbol() == "symbol"
          ? /fil|che|rad/i
          : /fil|che|ra/i
      ).test(e);
    };
  function kc(e, t, n) {
    return (
      t.__k == null && (t.textContent = ""),
      r5(e, t),
      typeof n == "function" && n(),
      e ? e.__c : null
    );
  }
  function Sc(e, t, n) {
    return H1(e, t), typeof n == "function" && n(), e ? e.__c : null;
  }
  (Fe.prototype.isReactComponent = {}),
    [
      "componentWillMount",
      "componentWillReceiveProps",
      "componentWillUpdate",
    ].forEach(function (e) {
      Object.defineProperty(Fe.prototype, e, {
        configurable: !0,
        get: function () {
          return this["UNSAFE_" + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, {
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    });
  var Ha = V.event;
  function Cc() {}
  function Rc() {
    return this.cancelBubble;
  }
  function Nc() {
    return this.defaultPrevented;
  }
  V.event = function (e) {
    return (
      Ha && (e = Ha(e)),
      (e.persist = Cc),
      (e.isPropagationStopped = Rc),
      (e.isDefaultPrevented = Nc),
      (e.nativeEvent = e)
    );
  };
  var Ga,
    Da = {
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    Va = V.vnode;
  V.vnode = function (e) {
    var t = e.type,
      n = e.props,
      a = n;
    if (typeof t == "string") {
      var r = t.indexOf("-") === -1;
      for (var o in ((a = {}), n)) {
        var i = n[o];
        (zc && o === "children" && t === "noscript") ||
          (o === "value" && "defaultValue" in n && i == null) ||
          (o === "defaultValue" && "value" in n && n.value == null
            ? (o = "value")
            : o === "download" && i === !0
            ? (i = "")
            : /ondoubleclick/i.test(o)
            ? (o = "ondblclick")
            : /^onchange(textarea|input)/i.test(o + t) && !Ic(n.type)
            ? (o = "oninput")
            : /^onfocus$/i.test(o)
            ? (o = "onfocusin")
            : /^onblur$/i.test(o)
            ? (o = "onfocusout")
            : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(o)
            ? (o = o.toLowerCase())
            : r && Mc.test(o)
            ? (o = o.replace(/[A-Z0-9]/g, "-$&").toLowerCase())
            : i === null && (i = void 0),
          /^oninput$/i.test(o) &&
            ((o = o.toLowerCase()), a[o] && (o = "oninputCapture")),
          (a[o] = i));
      }
      t == "select" &&
        a.multiple &&
        Array.isArray(a.value) &&
        (a.value = Xe(n.children).forEach(function (l) {
          l.props.selected = a.value.indexOf(l.props.value) != -1;
        })),
        t == "select" &&
          a.defaultValue != null &&
          (a.value = Xe(n.children).forEach(function (l) {
            l.props.selected = a.multiple
              ? a.defaultValue.indexOf(l.props.value) != -1
              : a.defaultValue == l.props.value;
          })),
        (e.props = a),
        n.class != n.className &&
          ((Da.enumerable = "className" in n),
          n.className != null && (a.class = n.className),
          Object.defineProperty(a, "className", Da));
    }
    (e.$$typeof = qa), Va && Va(e);
  };
  var Fa = V.__r;
  V.__r = function (e) {
    Fa && Fa(e), (Ga = e.__c);
  };
  var Lc = {
    ReactCurrentDispatcher: {
      current: {
        readContext: function (e) {
          return Ga.__n[e.__c].props.value;
        },
      },
    },
  };
  function Tc(e) {
    return Ge.bind(null, e);
  }
  function Ka(e) {
    return !!e && e.$$typeof === qa;
  }
  function Oc(e) {
    return Ka(e) ? kn.apply(null, arguments) : e;
  }
  function Hc(e) {
    return !!e.__k && (r5(null, e), !0);
  }
  function Dc(e) {
    return (e && (e.base || (e.nodeType === 1 && e))) || null;
  }
  var Vc = function (e, t) {
      return e(t);
    },
    Fc = function (e, t) {
      return e(t);
    },
    Pc = Ke;
  function Wa(e) {
    e();
  }
  function Bc(e) {
    return e;
  }
  function Uc() {
    return [!1, Wa];
  }
  var $c = et;
  function qc(e, t) {
    var n = t(),
      a = Ce({ h: { __: n, v: t } }),
      r = a[0].h,
      o = a[1];
    return (
      et(
        function () {
          (r.__ = n), (r.v = t), Y1(r.__, t()) || o({ h: r });
        },
        [e, n, t]
      ),
      e5(
        function () {
          return (
            Y1(r.__, r.v()) || o({ h: r }),
            e(function () {
              Y1(r.__, r.v()) || o({ h: r });
            })
          );
        },
        [e]
      ),
      n
    );
  }
  var ee = {
    useState: Ce,
    useId: Ca,
    useReducer: K1,
    useEffect: e5,
    useLayoutEffect: et,
    useInsertionEffect: $c,
    useTransition: Uc,
    useDeferredValue: Bc,
    useSyncExternalStore: qc,
    startTransition: Wa,
    useRef: za,
    useImperativeHandle: Ia,
    useMemo: Tt,
    useCallback: i5,
    useContext: ka,
    useDebugValue: Sa,
    version: "17.0.2",
    Children: Ec,
    render: kc,
    hydrate: Sc,
    unmountComponentAtNode: Hc,
    createPortal: wc,
    createElement: Ge,
    createContext: D1,
    createFactory: Tc,
    cloneElement: Oc,
    createRef: T1,
    Fragment: Ke,
    isValidElement: Ka,
    findDOMNode: Dc,
    Component: Fe,
    PureComponent: Z1,
    memo: nt,
    forwardRef: bc,
    flushSync: Fc,
    unstable_batchedUpdates: Vc,
    StrictMode: Pc,
    Suspense: Ot,
    SuspenseList: tt,
    lazy: Ac,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Lc,
  };
  var Gc = { small: 16, medium: 32, large: 64 };
  function g5(e, t, n) {
    var a = n(),
      r = Object.keys(a);
    function o(i) {
      var l = i["aria-label"],
        s = i.tabIndex,
        u = i.className,
        c = i.fill,
        h = c === void 0 ? "currentColor" : c,
        p = i.size,
        d = i.verticalAlign,
        g = Gc[p] || p,
        b = Kc(r, g),
        v = a[b].width,
        _ = g * (v / b),
        C = a[b].path;
      return ee.createElement(
        "svg",
        {
          "aria-hidden": l ? "false" : "true",
          tabIndex: s,
          focusable: s >= 0 ? "true" : "false",
          "aria-label": l,
          role: "img",
          className: u,
          viewBox: "0 0 ".concat(v, " ").concat(b),
          width: _,
          height: g,
          fill: h,
          style: {
            display: "inline-block",
            userSelect: "none",
            verticalAlign: d,
            overflow: "visible",
          },
        },
        C
      );
    }
    return (
      (o.displayName = e),
      (o.defaultProps = {
        className: t,
        size: 16,
        verticalAlign: "text-bottom",
      }),
      o
    );
  }
  function Kc(e, t) {
    return e
      .map(function (n) {
        return parseInt(n, 10);
      })
      .reduce(function (n, a) {
        return a <= t ? a : n;
      }, e[0]);
  }
  var Ya = g5("CheckIcon", "octicon octicon-check", function () {
    return {
      16: {
        width: 16,
        path: ee.createElement("path", {
          fillRule: "evenodd",
          d: "M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z",
        }),
      },
      24: {
        width: 24,
        path: ee.createElement("path", {
          fillRule: "evenodd",
          d: "M21.03 5.72a.75.75 0 010 1.06l-11.5 11.5a.75.75 0 01-1.072-.012l-5.5-5.75a.75.75 0 111.084-1.036l4.97 5.195L19.97 5.72a.75.75 0 011.06 0z",
        }),
      },
    };
  });
  var Qa = g5("CopyIcon", "octicon octicon-copy", function () {
    return {
      16: {
        width: 16,
        path: ee.createElement(
          ee.Fragment,
          null,
          ee.createElement("path", {
            fillRule: "evenodd",
            d: "M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z",
          }),
          ee.createElement("path", {
            fillRule: "evenodd",
            d: "M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z",
          })
        ),
      },
      24: {
        width: 24,
        path: ee.createElement(
          ee.Fragment,
          null,
          ee.createElement("path", {
            fillRule: "evenodd",
            d: "M7.024 3.75c0-.966.784-1.75 1.75-1.75H20.25c.966 0 1.75.784 1.75 1.75v11.498a1.75 1.75 0 01-1.75 1.75H8.774a1.75 1.75 0 01-1.75-1.75V3.75zm1.75-.25a.25.25 0 00-.25.25v11.498c0 .139.112.25.25.25H20.25a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25H8.774z",
          }),
          ee.createElement("path", {
            d: "M1.995 10.749a1.75 1.75 0 011.75-1.751H5.25a.75.75 0 110 1.5H3.745a.25.25 0 00-.25.25L3.5 20.25c0 .138.111.25.25.25h9.5a.25.25 0 00.25-.25v-1.51a.75.75 0 111.5 0v1.51A1.75 1.75 0 0113.25 22h-9.5A1.75 1.75 0 012 20.25l-.005-9.501z",
          })
        ),
      },
    };
  });
  var Za = g5("GearIcon", "octicon octicon-gear", function () {
    return {
      16: {
        width: 16,
        path: ee.createElement("path", {
          fillRule: "evenodd",
          d: "M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z",
        }),
      },
      24: {
        width: 24,
        path: ee.createElement(
          ee.Fragment,
          null,
          ee.createElement("path", {
            fillRule: "evenodd",
            d: "M16 12a4 4 0 11-8 0 4 4 0 018 0zm-1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
          }),
          ee.createElement("path", {
            fillRule: "evenodd",
            d: "M12 1c-.268 0-.534.01-.797.028-.763.055-1.345.617-1.512 1.304l-.352 1.45c-.02.078-.09.172-.225.22a8.45 8.45 0 00-.728.303c-.13.06-.246.044-.315.002l-1.274-.776c-.604-.368-1.412-.354-1.99.147-.403.348-.78.726-1.129 1.128-.5.579-.515 1.387-.147 1.99l.776 1.275c.042.069.059.185-.002.315-.112.237-.213.48-.302.728-.05.135-.143.206-.221.225l-1.45.352c-.687.167-1.249.749-1.304 1.512a11.149 11.149 0 000 1.594c.055.763.617 1.345 1.304 1.512l1.45.352c.078.02.172.09.22.225.09.248.191.491.303.729.06.129.044.245.002.314l-.776 1.274c-.368.604-.354 1.412.147 1.99.348.403.726.78 1.128 1.129.579.5 1.387.515 1.99.147l1.275-.776c.069-.042.185-.059.315.002.237.112.48.213.728.302.135.05.206.143.225.221l.352 1.45c.167.687.749 1.249 1.512 1.303a11.125 11.125 0 001.594 0c.763-.054 1.345-.616 1.512-1.303l.352-1.45c.02-.078.09-.172.225-.22.248-.09.491-.191.729-.303.129-.06.245-.044.314-.002l1.274.776c.604.368 1.412.354 1.99-.147.403-.348.78-.726 1.129-1.128.5-.579.515-1.387.147-1.99l-.776-1.275c-.042-.069-.059-.185.002-.315.112-.237.213-.48.302-.728.05-.135.143-.206.221-.225l1.45-.352c.687-.167 1.249-.749 1.303-1.512a11.125 11.125 0 000-1.594c-.054-.763-.616-1.345-1.303-1.512l-1.45-.352c-.078-.02-.172-.09-.22-.225a8.469 8.469 0 00-.303-.728c-.06-.13-.044-.246-.002-.315l.776-1.274c.368-.604.354-1.412-.147-1.99-.348-.403-.726-.78-1.128-1.129-.579-.5-1.387-.515-1.99-.147l-1.275.776c-.069.042-.185.059-.315-.002a8.465 8.465 0 00-.728-.302c-.135-.05-.206-.143-.225-.221l-.352-1.45c-.167-.687-.749-1.249-1.512-1.304A11.149 11.149 0 0012 1zm-.69 1.525a9.648 9.648 0 011.38 0c.055.004.135.05.162.16l.351 1.45c.153.628.626 1.08 1.173 1.278.205.074.405.157.6.249a1.832 1.832 0 001.733-.074l1.275-.776c.097-.06.186-.036.228 0 .348.302.674.628.976.976.036.042.06.13 0 .228l-.776 1.274a1.832 1.832 0 00-.074 1.734c.092.195.175.395.248.6.198.547.652 1.02 1.278 1.172l1.45.353c.111.026.157.106.161.161a9.653 9.653 0 010 1.38c-.004.055-.05.135-.16.162l-1.45.351a1.833 1.833 0 00-1.278 1.173 6.926 6.926 0 01-.25.6 1.832 1.832 0 00.075 1.733l.776 1.275c.06.097.036.186 0 .228a9.555 9.555 0 01-.976.976c-.042.036-.13.06-.228 0l-1.275-.776a1.832 1.832 0 00-1.733-.074 6.926 6.926 0 01-.6.248 1.833 1.833 0 00-1.172 1.278l-.353 1.45c-.026.111-.106.157-.161.161a9.653 9.653 0 01-1.38 0c-.055-.004-.135-.05-.162-.16l-.351-1.45a1.833 1.833 0 00-1.173-1.278 6.928 6.928 0 01-.6-.25 1.832 1.832 0 00-1.734.075l-1.274.776c-.097.06-.186.036-.228 0a9.56 9.56 0 01-.976-.976c-.036-.042-.06-.13 0-.228l.776-1.275a1.832 1.832 0 00.074-1.733 6.948 6.948 0 01-.249-.6 1.833 1.833 0 00-1.277-1.172l-1.45-.353c-.111-.026-.157-.106-.161-.161a9.648 9.648 0 010-1.38c.004-.055.05-.135.16-.162l1.45-.351a1.833 1.833 0 001.278-1.173 6.95 6.95 0 01.249-.6 1.832 1.832 0 00-.074-1.734l-.776-1.274c-.06-.097-.036-.186 0-.228.302-.348.628-.674.976-.976.042-.036.13-.06.228 0l1.274.776a1.832 1.832 0 001.734.074 6.95 6.95 0 01.6-.249 1.833 1.833 0 001.172-1.277l.353-1.45c.026-.111.106-.157.161-.161z",
          })
        ),
      },
    };
  });
  var Xa = g5("LightBulbIcon", "octicon octicon-light-bulb", function () {
    return {
      16: {
        width: 16,
        path: ee.createElement("path", {
          fillRule: "evenodd",
          d: "M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z",
        }),
      },
      24: {
        width: 24,
        path: ee.createElement("path", {
          fillRule: "evenodd",
          d: "M12 2.5c-3.81 0-6.5 2.743-6.5 6.119 0 1.536.632 2.572 1.425 3.56.172.215.347.422.527.635l.096.112c.21.25.427.508.63.774.404.531.783 1.128.995 1.834a.75.75 0 01-1.436.432c-.138-.46-.397-.89-.753-1.357a18.354 18.354 0 00-.582-.714l-.092-.11c-.18-.212-.37-.436-.555-.667C4.87 12.016 4 10.651 4 8.618 4 4.363 7.415 1 12 1s8 3.362 8 7.619c0 2.032-.87 3.397-1.755 4.5-.185.23-.375.454-.555.667l-.092.109c-.21.248-.405.481-.582.714-.356.467-.615.898-.753 1.357a.75.75 0 01-1.437-.432c.213-.706.592-1.303.997-1.834.202-.266.419-.524.63-.774l.095-.112c.18-.213.355-.42.527-.634.793-.99 1.425-2.025 1.425-3.561C18.5 5.243 15.81 2.5 12 2.5zM9.5 21.75a.75.75 0 01.75-.75h3.5a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75zM8.75 18a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z",
        }),
      },
    };
  });
  var ja = g5("SearchIcon", "octicon octicon-search", function () {
    return {
      16: {
        width: 16,
        path: ee.createElement("path", {
          fillRule: "evenodd",
          d: "M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z",
        }),
      },
      24: {
        width: 24,
        path: ee.createElement("path", {
          fillRule: "evenodd",
          d: "M10.25 2a8.25 8.25 0 105.28 14.59l5.69 5.69a.75.75 0 101.06-1.06l-5.69-5.69A8.25 8.25 0 0010.25 2zM3.5 10.25a6.75 6.75 0 1113.5 0 6.75 6.75 0 01-13.5 0z",
        }),
      },
    };
  });
  var Ja = g5("ThumbsdownIcon", "octicon octicon-thumbsdown", function () {
      return {
        16: {
          width: 16,
          path: ee.createElement("path", {
            fillRule: "evenodd",
            d: "M7.083 15.986c1.34.153 2.334-.982 2.334-2.183v-.5c0-1.329.646-2.123 1.317-2.614.329-.24.66-.403.919-.508a1.75 1.75 0 001.514.872h1a1.75 1.75 0 001.75-1.75v-7.5a1.75 1.75 0 00-1.75-1.75h-1a1.75 1.75 0 00-1.662 1.2c-.525-.074-1.068-.228-1.726-.415L9.305.705C8.151.385 6.765.053 4.917.053c-1.706 0-2.97.152-3.722 1.139-.353.463-.537 1.042-.669 1.672C.41 3.424.32 4.108.214 4.897l-.04.306c-.25 1.869-.266 3.318.188 4.316.244.537.622.943 1.136 1.2.495.248 1.066.334 1.669.334h1.422l-.015.112c-.07.518-.157 1.17-.157 1.638 0 .921.151 1.718.655 2.299.512.589 1.248.797 2.011.884zm4.334-13.232c-.706-.089-1.39-.284-2.072-.479a63.914 63.914 0 00-.441-.125c-1.096-.304-2.335-.597-3.987-.597-1.794 0-2.28.222-2.529.548-.147.193-.275.505-.393 1.07-.105.502-.188 1.124-.295 1.93l-.04.3c-.25 1.882-.19 2.933.067 3.497a.921.921 0 00.443.48c.208.104.52.175.997.175h1.75c.685 0 1.295.577 1.205 1.335-.022.192-.049.39-.075.586-.066.488-.13.97-.13 1.329 0 .808.144 1.15.288 1.316.137.157.401.303 1.048.377.307.035.664-.237.664-.693v-.5c0-1.922.978-3.127 1.932-3.825a5.862 5.862 0 011.568-.809V2.754zm1.75 6.798a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25h1a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25h-1z",
          }),
        },
        24: {
          width: 24,
          path: ee.createElement("path", {
            fillRule: "evenodd",
            d: "M12.596 21.957c-1.301.092-2.303-.986-2.303-2.206v-1.053c0-2.666-1.813-3.785-2.774-4.2a1.864 1.864 0 00-.523-.13A1.75 1.75 0 015.25 16h-1.5A1.75 1.75 0 012 14.25V3.75C2 2.784 2.784 2 3.75 2h1.5a1.75 1.75 0 011.742 1.58c.838-.06 1.667-.296 2.69-.586l.602-.17C11.748 2.419 13.497 2 15.828 2c2.188 0 3.693.204 4.583 1.372.422.554.65 1.255.816 2.05.148.708.262 1.57.396 2.58l.051.39c.319 2.386.328 4.18-.223 5.394-.293.644-.743 1.125-1.355 1.431-.59.296-1.284.404-2.036.404h-2.05l.056.429c.025.18.05.372.076.572.06.483.117 1.006.117 1.438 0 1.245-.222 2.253-.92 2.942-.684.674-1.668.879-2.743.955zM7 5.082c1.059-.064 2.079-.355 3.118-.651.188-.054.377-.108.568-.16 1.406-.392 3.006-.771 5.142-.771 2.277 0 3.004.274 3.39.781.216.283.388.718.54 1.448.136.65.242 1.45.379 2.477l.05.385c.32 2.398.253 3.794-.102 4.574-.16.352-.375.569-.66.711-.305.153-.74.245-1.365.245h-2.37c-.681 0-1.293.57-1.211 1.328.026.244.065.537.105.834l.07.527c.06.482.105.922.105 1.25 0 1.125-.213 1.617-.473 1.873-.275.27-.774.456-1.795.528-.351.024-.698-.274-.698-.71v-1.053c0-3.55-2.488-5.063-3.68-5.577A3.485 3.485 0 007 12.861V5.08zM3.75 3.5a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h1.5a.25.25 0 00.25-.25V3.75a.25.25 0 00-.25-.25h-1.5z",
          }),
        },
      };
    }),
    er = g5("ThumbsupIcon", "octicon octicon-thumbsup", function () {
      return {
        16: {
          width: 16,
          path: ee.createElement("path", {
            fillRule: "evenodd",
            d: "M8.834.066C7.494-.087 6.5 1.048 6.5 2.25v.5c0 1.329-.647 2.124-1.318 2.614-.328.24-.66.403-.918.508A1.75 1.75 0 002.75 5h-1A1.75 1.75 0 000 6.75v7.5C0 15.216.784 16 1.75 16h1a1.75 1.75 0 001.662-1.201c.525.075 1.067.229 1.725.415.152.043.31.088.475.133 1.154.32 2.54.653 4.388.653 1.706 0 2.97-.153 3.722-1.14.353-.463.537-1.042.668-1.672.118-.56.208-1.243.313-2.033l.04-.306c.25-1.869.265-3.318-.188-4.316a2.418 2.418 0 00-1.137-1.2C13.924 5.085 13.353 5 12.75 5h-1.422l.015-.113c.07-.518.157-1.17.157-1.637 0-.922-.151-1.719-.656-2.3-.51-.589-1.247-.797-2.01-.884zM4.5 13.3c.705.088 1.39.284 2.072.478l.441.125c1.096.305 2.334.598 3.987.598 1.794 0 2.28-.223 2.528-.549.147-.193.276-.505.394-1.07.105-.502.188-1.124.295-1.93l.04-.3c.25-1.882.189-2.933-.068-3.497a.922.922 0 00-.442-.48c-.208-.104-.52-.174-.997-.174H11c-.686 0-1.295-.577-1.206-1.336.023-.192.05-.39.076-.586.065-.488.13-.97.13-1.328 0-.809-.144-1.15-.288-1.316-.137-.158-.402-.304-1.048-.378C8.357 1.521 8 1.793 8 2.25v.5c0 1.922-.978 3.128-1.933 3.825a5.861 5.861 0 01-1.567.81V13.3zM2.75 6.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25h-1a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25h1z",
          }),
        },
        24: {
          width: 24,
          path: ee.createElement("path", {
            fillRule: "evenodd",
            d: "M12.596 2.043c-1.301-.092-2.303.986-2.303 2.206v1.053c0 2.666-1.813 3.785-2.774 4.2a1.866 1.866 0 01-.523.131A1.75 1.75 0 005.25 8h-1.5A1.75 1.75 0 002 9.75v10.5c0 .967.784 1.75 1.75 1.75h1.5a1.75 1.75 0 001.742-1.58c.838.06 1.667.296 2.69.586l.602.17c1.464.406 3.213.824 5.544.824 2.188 0 3.693-.204 4.583-1.372.422-.554.65-1.255.816-2.05.148-.708.262-1.57.396-2.58l.051-.39c.319-2.386.328-4.18-.223-5.394-.293-.644-.743-1.125-1.355-1.431-.59-.296-1.284-.404-2.036-.404h-2.05l.056-.429c.025-.18.05-.372.076-.572.06-.483.117-1.006.117-1.438 0-1.245-.222-2.253-.92-2.941-.684-.675-1.668-.88-2.743-.956zM7 18.918c1.059.064 2.079.355 3.118.652l.568.16c1.406.39 3.006.77 5.142.77 2.277 0 3.004-.274 3.39-.781.216-.283.388-.718.54-1.448.136-.65.242-1.45.379-2.477l.05-.384c.32-2.4.253-3.795-.102-4.575-.16-.352-.375-.568-.66-.711-.305-.153-.74-.245-1.365-.245h-2.37c-.681 0-1.293-.57-1.211-1.328.026-.243.065-.537.105-.834l.07-.527c.06-.482.105-.921.105-1.25 0-1.125-.213-1.617-.473-1.873-.275-.27-.774-.455-1.795-.528-.351-.024-.698.274-.698.71v1.053c0 3.55-2.488 5.063-3.68 5.577-.372.16-.754.232-1.113.26v7.78zM3.75 20.5a.25.25 0 01-.25-.25V9.75a.25.25 0 01.25-.25h1.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25h-1.5z",
          }),
        },
      };
    });
  var tr = ["http", "https", "mailto", "tel"];
  function nr(e) {
    let t = (e || "").trim(),
      n = t.charAt(0);
    if (n === "#" || n === "/") return t;
    let a = t.indexOf(":");
    if (a === -1) return t;
    let r = -1;
    for (; ++r < tr.length; ) {
      let o = tr[r];
      if (a === o.length && t.slice(0, o.length).toLowerCase() === o) return t;
    }
    return (
      (r = t.indexOf("?")),
      (r !== -1 && a > r) || ((r = t.indexOf("#")), r !== -1 && a > r)
        ? t
        : "javascript:void(0)"
    );
  }
  var sr = Ve(X1(), 1);
  function v5(e) {
    return !e || typeof e != "object"
      ? ""
      : "position" in e || "type" in e
      ? rr(e.position)
      : "start" in e || "end" in e
      ? rr(e)
      : "line" in e || "column" in e
      ? j1(e)
      : "";
  }
  function j1(e) {
    return or(e && e.line) + ":" + or(e && e.column);
  }
  function rr(e) {
    return j1(e && e.start) + "-" + j1(e && e.end);
  }
  function or(e) {
    return e && typeof e == "number" ? e : 1;
  }
  var Me = class extends Error {
    constructor(t, n, a) {
      let r = [null, null],
        o = {
          start: { line: null, column: null },
          end: { line: null, column: null },
        };
      if (
        (super(),
        typeof n == "string" && ((a = n), (n = void 0)),
        typeof a == "string")
      ) {
        let i = a.indexOf(":");
        i === -1
          ? (r[1] = a)
          : ((r[0] = a.slice(0, i)), (r[1] = a.slice(i + 1)));
      }
      n &&
        ("type" in n || "position" in n
          ? n.position && (o = n.position)
          : "start" in n || "end" in n
          ? (o = n)
          : ("line" in n || "column" in n) && (o.start = n)),
        (this.name = v5(n) || "1:1"),
        (this.message = typeof t == "object" ? t.message : t),
        (this.stack = ""),
        typeof t == "object" && t.stack && (this.stack = t.stack),
        (this.reason = this.message),
        this.fatal,
        (this.line = o.start.line),
        (this.column = o.start.column),
        (this.position = o),
        (this.source = r[0]),
        (this.ruleId = r[1]),
        this.file,
        this.actual,
        this.expected,
        this.url,
        this.note;
    }
  };
  Me.prototype.file = "";
  Me.prototype.name = "";
  Me.prototype.reason = "";
  Me.prototype.message = "";
  Me.prototype.stack = "";
  Me.prototype.fatal = null;
  Me.prototype.column = null;
  Me.prototype.line = null;
  Me.prototype.source = null;
  Me.prototype.ruleId = null;
  Me.prototype.position = null;
  var We = { basename: Wc, dirname: Yc, extname: Qc, join: Zc, sep: "/" };
  function Wc(e, t) {
    if (t !== void 0 && typeof t != "string")
      throw new TypeError('"ext" argument must be a string');
    at(e);
    let n = 0,
      a = -1,
      r = e.length,
      o;
    if (t === void 0 || t.length === 0 || t.length > e.length) {
      for (; r--; )
        if (e.charCodeAt(r) === 47) {
          if (o) {
            n = r + 1;
            break;
          }
        } else a < 0 && ((o = !0), (a = r + 1));
      return a < 0 ? "" : e.slice(n, a);
    }
    if (t === e) return "";
    let i = -1,
      l = t.length - 1;
    for (; r--; )
      if (e.charCodeAt(r) === 47) {
        if (o) {
          n = r + 1;
          break;
        }
      } else
        i < 0 && ((o = !0), (i = r + 1)),
          l > -1 &&
            (e.charCodeAt(r) === t.charCodeAt(l--)
              ? l < 0 && (a = r)
              : ((l = -1), (a = i)));
    return n === a ? (a = i) : a < 0 && (a = e.length), e.slice(n, a);
  }
  function Yc(e) {
    if ((at(e), e.length === 0)) return ".";
    let t = -1,
      n = e.length,
      a;
    for (; --n; )
      if (e.charCodeAt(n) === 47) {
        if (a) {
          t = n;
          break;
        }
      } else a || (a = !0);
    return t < 0
      ? e.charCodeAt(0) === 47
        ? "/"
        : "."
      : t === 1 && e.charCodeAt(0) === 47
      ? "//"
      : e.slice(0, t);
  }
  function Qc(e) {
    at(e);
    let t = e.length,
      n = -1,
      a = 0,
      r = -1,
      o = 0,
      i;
    for (; t--; ) {
      let l = e.charCodeAt(t);
      if (l === 47) {
        if (i) {
          a = t + 1;
          break;
        }
        continue;
      }
      n < 0 && ((i = !0), (n = t + 1)),
        l === 46 ? (r < 0 ? (r = t) : o !== 1 && (o = 1)) : r > -1 && (o = -1);
    }
    return r < 0 || n < 0 || o === 0 || (o === 1 && r === n - 1 && r === a + 1)
      ? ""
      : e.slice(r, n);
  }
  function Zc(...e) {
    let t = -1,
      n;
    for (; ++t < e.length; )
      at(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
    return n === void 0 ? "." : Xc(n);
  }
  function Xc(e) {
    at(e);
    let t = e.charCodeAt(0) === 47,
      n = jc(e, !t);
    return (
      n.length === 0 && !t && (n = "."),
      n.length > 0 && e.charCodeAt(e.length - 1) === 47 && (n += "/"),
      t ? "/" + n : n
    );
  }
  function jc(e, t) {
    let n = "",
      a = 0,
      r = -1,
      o = 0,
      i = -1,
      l,
      s;
    for (; ++i <= e.length; ) {
      if (i < e.length) l = e.charCodeAt(i);
      else {
        if (l === 47) break;
        l = 47;
      }
      if (l === 47) {
        if (!(r === i - 1 || o === 1))
          if (r !== i - 1 && o === 2) {
            if (
              n.length < 2 ||
              a !== 2 ||
              n.charCodeAt(n.length - 1) !== 46 ||
              n.charCodeAt(n.length - 2) !== 46
            ) {
              if (n.length > 2) {
                if (((s = n.lastIndexOf("/")), s !== n.length - 1)) {
                  s < 0
                    ? ((n = ""), (a = 0))
                    : ((n = n.slice(0, s)),
                      (a = n.length - 1 - n.lastIndexOf("/"))),
                    (r = i),
                    (o = 0);
                  continue;
                }
              } else if (n.length > 0) {
                (n = ""), (a = 0), (r = i), (o = 0);
                continue;
              }
            }
            t && ((n = n.length > 0 ? n + "/.." : ".."), (a = 2));
          } else
            n.length > 0
              ? (n += "/" + e.slice(r + 1, i))
              : (n = e.slice(r + 1, i)),
              (a = i - r - 1);
        (r = i), (o = 0);
      } else l === 46 && o > -1 ? o++ : (o = -1);
    }
    return n;
  }
  function at(e) {
    if (typeof e != "string")
      throw new TypeError(
        "Path must be a string. Received " + JSON.stringify(e)
      );
  }
  var ir = { cwd: Jc };
  function Jc() {
    return "/";
  }
  function O5(e) {
    return e !== null && typeof e == "object" && e.href && e.origin;
  }
  function lr(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!O5(e)) {
      let t = new TypeError(
        'The "path" argument must be of type string or an instance of URL. Received `' +
          e +
          "`"
      );
      throw ((t.code = "ERR_INVALID_ARG_TYPE"), t);
    }
    if (e.protocol !== "file:") {
      let t = new TypeError("The URL must be of scheme file");
      throw ((t.code = "ERR_INVALID_URL_SCHEME"), t);
    }
    return es(e);
  }
  function es(e) {
    if (e.hostname !== "") {
      let a = new TypeError(
        'File URL host must be "localhost" or empty on darwin'
      );
      throw ((a.code = "ERR_INVALID_FILE_URL_HOST"), a);
    }
    let t = e.pathname,
      n = -1;
    for (; ++n < t.length; )
      if (t.charCodeAt(n) === 37 && t.charCodeAt(n + 1) === 50) {
        let a = t.charCodeAt(n + 2);
        if (a === 70 || a === 102) {
          let r = new TypeError(
            "File URL path must not include encoded / characters"
          );
          throw ((r.code = "ERR_INVALID_FILE_URL_PATH"), r);
        }
      }
    return decodeURIComponent(t);
  }
  var J1 = ["history", "path", "basename", "stem", "extname", "dirname"],
    b5 = class {
      constructor(t) {
        let n;
        t
          ? typeof t == "string" || (0, sr.default)(t)
            ? (n = { value: t })
            : O5(t)
            ? (n = { path: t })
            : (n = t)
          : (n = {}),
          (this.data = {}),
          (this.messages = []),
          (this.history = []),
          (this.cwd = ir.cwd()),
          this.value,
          this.stored,
          this.result,
          this.map;
        let a = -1;
        for (; ++a < J1.length; ) {
          let o = J1[a];
          o in n &&
            n[o] !== void 0 &&
            (this[o] = o === "history" ? [...n[o]] : n[o]);
        }
        let r;
        for (r in n) J1.includes(r) || (this[r] = n[r]);
      }
      get path() {
        return this.history[this.history.length - 1];
      }
      set path(t) {
        O5(t) && (t = lr(t)),
          t0(t, "path"),
          this.path !== t && this.history.push(t);
      }
      get dirname() {
        return typeof this.path == "string" ? We.dirname(this.path) : void 0;
      }
      set dirname(t) {
        cr(this.basename, "dirname"),
          (this.path = We.join(t || "", this.basename));
      }
      get basename() {
        return typeof this.path == "string" ? We.basename(this.path) : void 0;
      }
      set basename(t) {
        t0(t, "basename"),
          e0(t, "basename"),
          (this.path = We.join(this.dirname || "", t));
      }
      get extname() {
        return typeof this.path == "string" ? We.extname(this.path) : void 0;
      }
      set extname(t) {
        if ((e0(t, "extname"), cr(this.dirname, "extname"), t)) {
          if (t.charCodeAt(0) !== 46)
            throw new Error("`extname` must start with `.`");
          if (t.includes(".", 1))
            throw new Error("`extname` cannot contain multiple dots");
        }
        this.path = We.join(this.dirname, this.stem + (t || ""));
      }
      get stem() {
        return typeof this.path == "string"
          ? We.basename(this.path, this.extname)
          : void 0;
      }
      set stem(t) {
        t0(t, "stem"),
          e0(t, "stem"),
          (this.path = We.join(this.dirname || "", t + (this.extname || "")));
      }
      toString(t) {
        return (this.value || "").toString(t);
      }
      message(t, n, a) {
        let r = new Me(t, n, a);
        return (
          this.path &&
            ((r.name = this.path + ":" + r.name), (r.file = this.path)),
          (r.fatal = !1),
          this.messages.push(r),
          r
        );
      }
      info(t, n, a) {
        let r = this.message(t, n, a);
        return (r.fatal = null), r;
      }
      fail(t, n, a) {
        let r = this.message(t, n, a);
        throw ((r.fatal = !0), r);
      }
    };
  function e0(e, t) {
    if (e && e.includes(We.sep))
      throw new Error(
        "`" + t + "` cannot be a path: did not expect `" + We.sep + "`"
      );
  }
  function t0(e, t) {
    if (!e) throw new Error("`" + t + "` cannot be empty");
  }
  function cr(e, t) {
    if (!e)
      throw new Error("Setting `" + t + "` requires `path` to be set too");
  }
  function n0(e) {
    if (e) throw e;
  }
  var xr = Ve(X1(), 1),
    i0 = Ve(br(), 1);
  function rt(e) {
    if (typeof e != "object" || e === null) return !1;
    let t = Object.getPrototypeOf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  }
  function Er() {
    let e = [],
      t = { run: n, use: a };
    return t;
    function n(...r) {
      let o = -1,
        i = r.pop();
      if (typeof i != "function")
        throw new TypeError("Expected function as last argument, not " + i);
      l(null, ...r);
      function l(s, ...u) {
        let c = e[++o],
          h = -1;
        if (s) {
          i(s);
          return;
        }
        for (; ++h < r.length; )
          (u[h] === null || u[h] === void 0) && (u[h] = r[h]);
        (r = u), c ? ts(c, l)(...u) : i(null, ...u);
      }
    }
    function a(r) {
      if (typeof r != "function")
        throw new TypeError("Expected `middelware` to be a function, not " + r);
      return e.push(r), t;
    }
  }
  function ts(e, t) {
    let n;
    return a;
    function a(...i) {
      let l = e.length > i.length,
        s;
      l && i.push(r);
      try {
        s = e.apply(this, i);
      } catch (u) {
        let c = u;
        if (l && n) throw c;
        return r(c);
      }
      l ||
        (s instanceof Promise
          ? s.then(o, r)
          : s instanceof Error
          ? r(s)
          : o(s));
    }
    function r(i, ...l) {
      n || ((n = !0), t(i, ...l));
    }
    function o(i) {
      r(null, i);
    }
  }
  var l0 = Mr().freeze(),
    wr = {}.hasOwnProperty;
  function Mr() {
    let e = Er(),
      t = [],
      n = {},
      a,
      r = -1;
    return (
      (o.data = i),
      (o.Parser = void 0),
      (o.Compiler = void 0),
      (o.freeze = l),
      (o.attachers = t),
      (o.use = s),
      (o.parse = u),
      (o.stringify = c),
      (o.run = h),
      (o.runSync = p),
      (o.process = d),
      (o.processSync = g),
      o
    );
    function o() {
      let b = Mr(),
        v = -1;
      for (; ++v < t.length; ) b.use(...t[v]);
      return b.data((0, i0.default)(!0, {}, n)), b;
    }
    function i(b, v) {
      return typeof b == "string"
        ? arguments.length === 2
          ? (o0("data", a), (n[b] = v), o)
          : (wr.call(n, b) && n[b]) || null
        : b
        ? (o0("data", a), (n = b), o)
        : n;
    }
    function l() {
      if (a) return o;
      for (; ++r < t.length; ) {
        let [b, ...v] = t[r];
        if (v[0] === !1) continue;
        v[0] === !0 && (v[0] = void 0);
        let _ = b.call(o, ...v);
        typeof _ == "function" && e.use(_);
      }
      return (a = !0), (r = Number.POSITIVE_INFINITY), o;
    }
    function s(b, ...v) {
      let _;
      if ((o0("use", a), b != null))
        if (typeof b == "function") x(b, ...v);
        else if (typeof b == "object") Array.isArray(b) ? y(b) : M(b);
        else throw new TypeError("Expected usable value, not `" + b + "`");
      return _ && (n.settings = Object.assign(n.settings || {}, _)), o;
      function C(E) {
        if (typeof E == "function") x(E);
        else if (typeof E == "object")
          if (Array.isArray(E)) {
            let [z, ...N] = E;
            x(z, ...N);
          } else M(E);
        else throw new TypeError("Expected usable value, not `" + E + "`");
      }
      function M(E) {
        y(E.plugins), E.settings && (_ = Object.assign(_ || {}, E.settings));
      }
      function y(E) {
        let z = -1;
        if (E != null)
          if (Array.isArray(E))
            for (; ++z < E.length; ) {
              let N = E[z];
              C(N);
            }
          else
            throw new TypeError("Expected a list of plugins, not `" + E + "`");
      }
      function x(E, z) {
        let N = -1,
          L;
        for (; ++N < t.length; )
          if (t[N][0] === E) {
            L = t[N];
            break;
          }
        L
          ? (rt(L[1]) && rt(z) && (z = (0, i0.default)(!0, L[1], z)),
            (L[1] = z))
          : t.push([...arguments]);
      }
    }
    function u(b) {
      o.freeze();
      let v = ot(b),
        _ = o.Parser;
      return (
        a0("parse", _),
        _r(_, "parse") ? new _(String(v), v).parse() : _(String(v), v)
      );
    }
    function c(b, v) {
      o.freeze();
      let _ = ot(v),
        C = o.Compiler;
      return (
        r0("stringify", C),
        Ar(b),
        _r(C, "compile") ? new C(b, _).compile() : C(b, _)
      );
    }
    function h(b, v, _) {
      if (
        (Ar(b),
        o.freeze(),
        !_ && typeof v == "function" && ((_ = v), (v = void 0)),
        !_)
      )
        return new Promise(C);
      C(null, _);
      function C(M, y) {
        e.run(b, ot(v), x);
        function x(E, z, N) {
          (z = z || b), E ? y(E) : M ? M(z) : _(null, z, N);
        }
      }
    }
    function p(b, v) {
      let _, C;
      return o.run(b, v, M), yr("runSync", "run", C), _;
      function M(y, x) {
        n0(y), (_ = x), (C = !0);
      }
    }
    function d(b, v) {
      if ((o.freeze(), a0("process", o.Parser), r0("process", o.Compiler), !v))
        return new Promise(_);
      _(null, v);
      function _(C, M) {
        let y = ot(b);
        o.run(o.parse(y), y, (E, z, N) => {
          if (E || !z || !N) x(E);
          else {
            let L = o.stringify(z, N);
            L == null || (rs(L) ? (N.value = L) : (N.result = L)), x(E, N);
          }
        });
        function x(E, z) {
          E || !z ? M(E) : C ? C(z) : v(null, z);
        }
      }
    }
    function g(b) {
      let v;
      o.freeze(), a0("processSync", o.Parser), r0("processSync", o.Compiler);
      let _ = ot(b);
      return o.process(_, C), yr("processSync", "process", v), _;
      function C(M) {
        (v = !0), n0(M);
      }
    }
  }
  function _r(e, t) {
    return (
      typeof e == "function" &&
      e.prototype &&
      (ns(e.prototype) || t in e.prototype)
    );
  }
  function ns(e) {
    let t;
    for (t in e) if (wr.call(e, t)) return !0;
    return !1;
  }
  function a0(e, t) {
    if (typeof t != "function")
      throw new TypeError("Cannot `" + e + "` without `Parser`");
  }
  function r0(e, t) {
    if (typeof t != "function")
      throw new TypeError("Cannot `" + e + "` without `Compiler`");
  }
  function o0(e, t) {
    if (t)
      throw new Error(
        "Cannot call `" +
          e +
          "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
      );
  }
  function Ar(e) {
    if (!rt(e) || typeof e.type != "string")
      throw new TypeError("Expected node, got `" + e + "`");
  }
  function yr(e, t, n) {
    if (!n)
      throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
  }
  function ot(e) {
    return as(e) ? e : new b5(e);
  }
  function as(e) {
    return Boolean(
      e && typeof e == "object" && "message" in e && "messages" in e
    );
  }
  function rs(e) {
    return typeof e == "string" || (0, xr.default)(e);
  }
  function Ir(e, t) {
    var { includeImageAlt: n = !0 } = t || {};
    return kr(e, n);
  }
  function kr(e, t) {
    return (
      (e &&
        typeof e == "object" &&
        (e.value ||
          (t ? e.alt : "") ||
          ("children" in e && zr(e.children, t)) ||
          (Array.isArray(e) && zr(e, t)))) ||
      ""
    );
  }
  function zr(e, t) {
    for (var n = [], a = -1; ++a < e.length; ) n[a] = kr(e[a], t);
    return n.join("");
  }
  function ye(e, t, n, a) {
    let r = e.length,
      o = 0,
      i;
    if (
      (t < 0 ? (t = -t > r ? 0 : r + t) : (t = t > r ? r : t),
      (n = n > 0 ? n : 0),
      a.length < 1e4)
    )
      (i = Array.from(a)), i.unshift(t, n), [].splice.apply(e, i);
    else
      for (n && [].splice.apply(e, [t, n]); o < a.length; )
        (i = a.slice(o, o + 1e4)),
          i.unshift(t, 0),
          [].splice.apply(e, i),
          (o += 1e4),
          (t += 1e4);
  }
  function ze(e, t) {
    return e.length > 0 ? (ye(e, e.length, 0, t), e) : t;
  }
  var Sr = {}.hasOwnProperty;
  function Cr(e) {
    let t = {},
      n = -1;
    for (; ++n < e.length; ) os(t, e[n]);
    return t;
  }
  function os(e, t) {
    let n;
    for (n in t) {
      let r = (Sr.call(e, n) ? e[n] : void 0) || (e[n] = {}),
        o = t[n],
        i;
      for (i in o) {
        Sr.call(r, i) || (r[i] = []);
        let l = o[i];
        is(r[i], Array.isArray(l) ? l : l ? [l] : []);
      }
    }
  }
  function is(e, t) {
    let n = -1,
      a = [];
    for (; ++n < t.length; ) (t[n].add === "after" ? e : a).push(t[n]);
    ye(e, 0, 0, a);
  }
  var Rr =
    /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
  var Oe = l5(/[A-Za-z]/),
    it = l5(/\d/),
    Nr = l5(/[\dA-Fa-f]/),
    Ee = l5(/[\dA-Za-z]/),
    Lr = l5(/[!-/:-@[-`{-~]/),
    c0 = l5(/[#-'*+\--9=?A-Z^-~]/);
  function lt(e) {
    return e !== null && (e < 32 || e === 127);
  }
  function be(e) {
    return e !== null && (e < 0 || e === 32);
  }
  function D(e) {
    return e !== null && e < -2;
  }
  function oe(e) {
    return e === -2 || e === -1 || e === 32;
  }
  var Tr = l5(/\s/),
    Or = l5(Rr);
  function l5(e) {
    return t;
    function t(n) {
      return n !== null && e.test(String.fromCharCode(n));
    }
  }
  function Z(e, t, n, a) {
    let r = a ? a - 1 : Number.POSITIVE_INFINITY,
      o = 0;
    return i;
    function i(s) {
      return oe(s) ? (e.enter(n), l(s)) : t(s);
    }
    function l(s) {
      return oe(s) && o++ < r ? (e.consume(s), l) : (e.exit(n), t(s));
    }
  }
  var Hr = { tokenize: ls };
  function ls(e) {
    let t = e.attempt(this.parser.constructs.contentInitial, a, r),
      n;
    return t;
    function a(l) {
      if (l === null) {
        e.consume(l);
        return;
      }
      return (
        e.enter("lineEnding"),
        e.consume(l),
        e.exit("lineEnding"),
        Z(e, t, "linePrefix")
      );
    }
    function r(l) {
      return e.enter("paragraph"), o(l);
    }
    function o(l) {
      let s = e.enter("chunkText", { contentType: "text", previous: n });
      return n && (n.next = s), (n = s), i(l);
    }
    function i(l) {
      if (l === null) {
        e.exit("chunkText"), e.exit("paragraph"), e.consume(l);
        return;
      }
      return D(l) ? (e.consume(l), e.exit("chunkText"), o) : (e.consume(l), i);
    }
  }
  var Vr = { tokenize: cs },
    Dr = { tokenize: ss };
  function cs(e) {
    let t = this,
      n = [],
      a = 0,
      r,
      o,
      i;
    return l;
    function l(M) {
      if (a < n.length) {
        let y = n[a];
        return (t.containerState = y[1]), e.attempt(y[0].continuation, s, u)(M);
      }
      return u(M);
    }
    function s(M) {
      if ((a++, t.containerState._closeFlow)) {
        (t.containerState._closeFlow = void 0), r && C();
        let y = t.events.length,
          x = y,
          E;
        for (; x--; )
          if (
            t.events[x][0] === "exit" &&
            t.events[x][1].type === "chunkFlow"
          ) {
            E = t.events[x][1].end;
            break;
          }
        _(a);
        let z = y;
        for (; z < t.events.length; )
          (t.events[z][1].end = Object.assign({}, E)), z++;
        return (
          ye(t.events, x + 1, 0, t.events.slice(y)), (t.events.length = z), u(M)
        );
      }
      return l(M);
    }
    function u(M) {
      if (a === n.length) {
        if (!r) return p(M);
        if (r.currentConstruct && r.currentConstruct.concrete) return g(M);
        t.interrupt = Boolean(
          r.currentConstruct && !r._gfmTableDynamicInterruptHack
        );
      }
      return (t.containerState = {}), e.check(Dr, c, h)(M);
    }
    function c(M) {
      return r && C(), _(a), p(M);
    }
    function h(M) {
      return (
        (t.parser.lazy[t.now().line] = a !== n.length),
        (i = t.now().offset),
        g(M)
      );
    }
    function p(M) {
      return (t.containerState = {}), e.attempt(Dr, d, g)(M);
    }
    function d(M) {
      return a++, n.push([t.currentConstruct, t.containerState]), p(M);
    }
    function g(M) {
      if (M === null) {
        r && C(), _(0), e.consume(M);
        return;
      }
      return (
        (r = r || t.parser.flow(t.now())),
        e.enter("chunkFlow", {
          contentType: "flow",
          previous: o,
          _tokenizer: r,
        }),
        b(M)
      );
    }
    function b(M) {
      if (M === null) {
        v(e.exit("chunkFlow"), !0), _(0), e.consume(M);
        return;
      }
      return D(M)
        ? (e.consume(M),
          v(e.exit("chunkFlow")),
          (a = 0),
          (t.interrupt = void 0),
          l)
        : (e.consume(M), b);
    }
    function v(M, y) {
      let x = t.sliceStream(M);
      if (
        (y && x.push(null),
        (M.previous = o),
        o && (o.next = M),
        (o = M),
        r.defineSkip(M.start),
        r.write(x),
        t.parser.lazy[M.start.line])
      ) {
        let E = r.events.length;
        for (; E--; )
          if (
            r.events[E][1].start.offset < i &&
            (!r.events[E][1].end || r.events[E][1].end.offset > i)
          )
            return;
        let z = t.events.length,
          N = z,
          L,
          W;
        for (; N--; )
          if (
            t.events[N][0] === "exit" &&
            t.events[N][1].type === "chunkFlow"
          ) {
            if (L) {
              W = t.events[N][1].end;
              break;
            }
            L = !0;
          }
        for (_(a), E = z; E < t.events.length; )
          (t.events[E][1].end = Object.assign({}, W)), E++;
        ye(t.events, N + 1, 0, t.events.slice(z)), (t.events.length = E);
      }
    }
    function _(M) {
      let y = n.length;
      for (; y-- > M; ) {
        let x = n[y];
        (t.containerState = x[1]), x[0].exit.call(t, e);
      }
      n.length = M;
    }
    function C() {
      r.write([null]),
        (o = void 0),
        (r = void 0),
        (t.containerState._closeFlow = void 0);
    }
  }
  function ss(e, t, n) {
    return Z(
      e,
      e.attempt(this.parser.constructs.document, t, n),
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
  }
  function s0(e) {
    if (e === null || be(e) || Tr(e)) return 1;
    if (Or(e)) return 2;
  }
  function H5(e, t, n) {
    let a = [],
      r = -1;
    for (; ++r < e.length; ) {
      let o = e[r].resolveAll;
      o && !a.includes(o) && ((t = o(t, n)), a.push(o));
    }
    return t;
  }
  var ct = { name: "attention", tokenize: ds, resolveAll: us };
  function us(e, t) {
    let n = -1,
      a,
      r,
      o,
      i,
      l,
      s,
      u,
      c;
    for (; ++n < e.length; )
      if (
        e[n][0] === "enter" &&
        e[n][1].type === "attentionSequence" &&
        e[n][1]._close
      ) {
        for (a = n; a--; )
          if (
            e[a][0] === "exit" &&
            e[a][1].type === "attentionSequence" &&
            e[a][1]._open &&
            t.sliceSerialize(e[a][1]).charCodeAt(0) ===
              t.sliceSerialize(e[n][1]).charCodeAt(0)
          ) {
            if (
              (e[a][1]._close || e[n][1]._open) &&
              (e[n][1].end.offset - e[n][1].start.offset) % 3 &&
              !(
                (e[a][1].end.offset -
                  e[a][1].start.offset +
                  e[n][1].end.offset -
                  e[n][1].start.offset) %
                3
              )
            )
              continue;
            s =
              e[a][1].end.offset - e[a][1].start.offset > 1 &&
              e[n][1].end.offset - e[n][1].start.offset > 1
                ? 2
                : 1;
            let h = Object.assign({}, e[a][1].end),
              p = Object.assign({}, e[n][1].start);
            Fr(h, -s),
              Fr(p, s),
              (i = {
                type: s > 1 ? "strongSequence" : "emphasisSequence",
                start: h,
                end: Object.assign({}, e[a][1].end),
              }),
              (l = {
                type: s > 1 ? "strongSequence" : "emphasisSequence",
                start: Object.assign({}, e[n][1].start),
                end: p,
              }),
              (o = {
                type: s > 1 ? "strongText" : "emphasisText",
                start: Object.assign({}, e[a][1].end),
                end: Object.assign({}, e[n][1].start),
              }),
              (r = {
                type: s > 1 ? "strong" : "emphasis",
                start: Object.assign({}, i.start),
                end: Object.assign({}, l.end),
              }),
              (e[a][1].end = Object.assign({}, i.start)),
              (e[n][1].start = Object.assign({}, l.end)),
              (u = []),
              e[a][1].end.offset - e[a][1].start.offset &&
                (u = ze(u, [
                  ["enter", e[a][1], t],
                  ["exit", e[a][1], t],
                ])),
              (u = ze(u, [
                ["enter", r, t],
                ["enter", i, t],
                ["exit", i, t],
                ["enter", o, t],
              ])),
              (u = ze(
                u,
                H5(t.parser.constructs.insideSpan.null, e.slice(a + 1, n), t)
              )),
              (u = ze(u, [
                ["exit", o, t],
                ["enter", l, t],
                ["exit", l, t],
                ["exit", r, t],
              ])),
              e[n][1].end.offset - e[n][1].start.offset
                ? ((c = 2),
                  (u = ze(u, [
                    ["enter", e[n][1], t],
                    ["exit", e[n][1], t],
                  ])))
                : (c = 0),
              ye(e, a - 1, n - a + 3, u),
              (n = a + u.length - c - 2);
            break;
          }
      }
    for (n = -1; ++n < e.length; )
      e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
    return e;
  }
  function ds(e, t) {
    let n = this.parser.constructs.attentionMarkers.null,
      a = this.previous,
      r = s0(a),
      o;
    return i;
    function i(s) {
      return e.enter("attentionSequence"), (o = s), l(s);
    }
    function l(s) {
      if (s === o) return e.consume(s), l;
      let u = e.exit("attentionSequence"),
        c = s0(s),
        h = !c || (c === 2 && r) || n.includes(s),
        p = !r || (r === 2 && c) || n.includes(a);
      return (
        (u._open = Boolean(o === 42 ? h : h && (r || !p))),
        (u._close = Boolean(o === 42 ? p : p && (c || !h))),
        t(s)
      );
    }
  }
  function Fr(e, t) {
    (e.column += t), (e.offset += t), (e._bufferIndex += t);
  }
  var u0 = { name: "autolink", tokenize: ps };
  function ps(e, t, n) {
    let a = 1;
    return r;
    function r(g) {
      return (
        e.enter("autolink"),
        e.enter("autolinkMarker"),
        e.consume(g),
        e.exit("autolinkMarker"),
        e.enter("autolinkProtocol"),
        o
      );
    }
    function o(g) {
      return Oe(g) ? (e.consume(g), i) : c0(g) ? u(g) : n(g);
    }
    function i(g) {
      return g === 43 || g === 45 || g === 46 || Ee(g) ? l(g) : u(g);
    }
    function l(g) {
      return g === 58
        ? (e.consume(g), s)
        : (g === 43 || g === 45 || g === 46 || Ee(g)) && a++ < 32
        ? (e.consume(g), l)
        : u(g);
    }
    function s(g) {
      return g === 62
        ? (e.exit("autolinkProtocol"), d(g))
        : g === null || g === 32 || g === 60 || lt(g)
        ? n(g)
        : (e.consume(g), s);
    }
    function u(g) {
      return g === 64
        ? (e.consume(g), (a = 0), c)
        : c0(g)
        ? (e.consume(g), u)
        : n(g);
    }
    function c(g) {
      return Ee(g) ? h(g) : n(g);
    }
    function h(g) {
      return g === 46
        ? (e.consume(g), (a = 0), c)
        : g === 62
        ? ((e.exit("autolinkProtocol").type = "autolinkEmail"), d(g))
        : p(g);
    }
    function p(g) {
      return (g === 45 || Ee(g)) && a++ < 63
        ? (e.consume(g), g === 45 ? p : h)
        : n(g);
    }
    function d(g) {
      return (
        e.enter("autolinkMarker"),
        e.consume(g),
        e.exit("autolinkMarker"),
        e.exit("autolink"),
        t
      );
    }
  }
  var c5 = { tokenize: hs, partial: !0 };
  function hs(e, t, n) {
    return Z(e, a, "linePrefix");
    function a(r) {
      return r === null || D(r) ? t(r) : n(r);
    }
  }
  var Dt = {
    name: "blockQuote",
    tokenize: ms,
    continuation: { tokenize: fs },
    exit: gs,
  };
  function ms(e, t, n) {
    let a = this;
    return r;
    function r(i) {
      if (i === 62) {
        let l = a.containerState;
        return (
          l.open || (e.enter("blockQuote", { _container: !0 }), (l.open = !0)),
          e.enter("blockQuotePrefix"),
          e.enter("blockQuoteMarker"),
          e.consume(i),
          e.exit("blockQuoteMarker"),
          o
        );
      }
      return n(i);
    }
    function o(i) {
      return oe(i)
        ? (e.enter("blockQuotePrefixWhitespace"),
          e.consume(i),
          e.exit("blockQuotePrefixWhitespace"),
          e.exit("blockQuotePrefix"),
          t)
        : (e.exit("blockQuotePrefix"), t(i));
    }
  }
  function fs(e, t, n) {
    return Z(
      e,
      e.attempt(Dt, t, n),
      "linePrefix",
      this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
    );
  }
  function gs(e) {
    e.exit("blockQuote");
  }
  var Vt = { name: "characterEscape", tokenize: vs };
  function vs(e, t, n) {
    return a;
    function a(o) {
      return (
        e.enter("characterEscape"),
        e.enter("escapeMarker"),
        e.consume(o),
        e.exit("escapeMarker"),
        r
      );
    }
    function r(o) {
      return Lr(o)
        ? (e.enter("characterEscapeValue"),
          e.consume(o),
          e.exit("characterEscapeValue"),
          e.exit("characterEscape"),
          t)
        : n(o);
    }
  }
  var Pr = document.createElement("i");
  function D5(e) {
    let t = "&" + e + ";";
    Pr.innerHTML = t;
    let n = Pr.textContent;
    return (n.charCodeAt(n.length - 1) === 59 && e !== "semi") || n === t
      ? !1
      : n;
  }
  var Ft = { name: "characterReference", tokenize: bs };
  function bs(e, t, n) {
    let a = this,
      r = 0,
      o,
      i;
    return l;
    function l(h) {
      return (
        e.enter("characterReference"),
        e.enter("characterReferenceMarker"),
        e.consume(h),
        e.exit("characterReferenceMarker"),
        s
      );
    }
    function s(h) {
      return h === 35
        ? (e.enter("characterReferenceMarkerNumeric"),
          e.consume(h),
          e.exit("characterReferenceMarkerNumeric"),
          u)
        : (e.enter("characterReferenceValue"), (o = 31), (i = Ee), c(h));
    }
    function u(h) {
      return h === 88 || h === 120
        ? (e.enter("characterReferenceMarkerHexadecimal"),
          e.consume(h),
          e.exit("characterReferenceMarkerHexadecimal"),
          e.enter("characterReferenceValue"),
          (o = 6),
          (i = Nr),
          c)
        : (e.enter("characterReferenceValue"), (o = 7), (i = it), c(h));
    }
    function c(h) {
      let p;
      return h === 59 && r
        ? ((p = e.exit("characterReferenceValue")),
          i === Ee && !D5(a.sliceSerialize(p))
            ? n(h)
            : (e.enter("characterReferenceMarker"),
              e.consume(h),
              e.exit("characterReferenceMarker"),
              e.exit("characterReference"),
              t))
        : i(h) && r++ < o
        ? (e.consume(h), c)
        : n(h);
    }
  }
  var Pt = { name: "codeFenced", tokenize: Es, concrete: !0 };
  function Es(e, t, n) {
    let a = this,
      r = { tokenize: x, partial: !0 },
      o = { tokenize: y, partial: !0 },
      i = this.events[this.events.length - 1],
      l =
        i && i[1].type === "linePrefix"
          ? i[2].sliceSerialize(i[1], !0).length
          : 0,
      s = 0,
      u;
    return c;
    function c(E) {
      return (
        e.enter("codeFenced"),
        e.enter("codeFencedFence"),
        e.enter("codeFencedFenceSequence"),
        (u = E),
        h(E)
      );
    }
    function h(E) {
      return E === u
        ? (e.consume(E), s++, h)
        : (e.exit("codeFencedFenceSequence"),
          s < 3 ? n(E) : Z(e, p, "whitespace")(E));
    }
    function p(E) {
      return E === null || D(E)
        ? v(E)
        : (e.enter("codeFencedFenceInfo"),
          e.enter("chunkString", { contentType: "string" }),
          d(E));
    }
    function d(E) {
      return E === null || be(E)
        ? (e.exit("chunkString"),
          e.exit("codeFencedFenceInfo"),
          Z(e, g, "whitespace")(E))
        : E === 96 && E === u
        ? n(E)
        : (e.consume(E), d);
    }
    function g(E) {
      return E === null || D(E)
        ? v(E)
        : (e.enter("codeFencedFenceMeta"),
          e.enter("chunkString", { contentType: "string" }),
          b(E));
    }
    function b(E) {
      return E === null || D(E)
        ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), v(E))
        : E === 96 && E === u
        ? n(E)
        : (e.consume(E), b);
    }
    function v(E) {
      return e.exit("codeFencedFence"), a.interrupt ? t(E) : _(E);
    }
    function _(E) {
      return E === null
        ? M(E)
        : D(E)
        ? e.attempt(
            o,
            e.attempt(r, M, l ? Z(e, _, "linePrefix", l + 1) : _),
            M
          )(E)
        : (e.enter("codeFlowValue"), C(E));
    }
    function C(E) {
      return E === null || D(E)
        ? (e.exit("codeFlowValue"), _(E))
        : (e.consume(E), C);
    }
    function M(E) {
      return e.exit("codeFenced"), t(E);
    }
    function y(E, z, N) {
      let L = this;
      return W;
      function W($) {
        return E.enter("lineEnding"), E.consume($), E.exit("lineEnding"), O;
      }
      function O($) {
        return L.parser.lazy[L.now().line] ? N($) : z($);
      }
    }
    function x(E, z, N) {
      let L = 0;
      return Z(
        E,
        W,
        "linePrefix",
        this.parser.constructs.disable.null.includes("codeIndented")
          ? void 0
          : 4
      );
      function W(I) {
        return (
          E.enter("codeFencedFence"), E.enter("codeFencedFenceSequence"), O(I)
        );
      }
      function O(I) {
        return I === u
          ? (E.consume(I), L++, O)
          : L < s
          ? N(I)
          : (E.exit("codeFencedFenceSequence"), Z(E, $, "whitespace")(I));
      }
      function $(I) {
        return I === null || D(I) ? (E.exit("codeFencedFence"), z(I)) : N(I);
      }
    }
  }
  var st = { name: "codeIndented", tokenize: As },
    _s = { tokenize: ys, partial: !0 };
  function As(e, t, n) {
    let a = this;
    return r;
    function r(u) {
      return e.enter("codeIndented"), Z(e, o, "linePrefix", 4 + 1)(u);
    }
    function o(u) {
      let c = a.events[a.events.length - 1];
      return c &&
        c[1].type === "linePrefix" &&
        c[2].sliceSerialize(c[1], !0).length >= 4
        ? i(u)
        : n(u);
    }
    function i(u) {
      return u === null
        ? s(u)
        : D(u)
        ? e.attempt(_s, i, s)(u)
        : (e.enter("codeFlowValue"), l(u));
    }
    function l(u) {
      return u === null || D(u)
        ? (e.exit("codeFlowValue"), i(u))
        : (e.consume(u), l);
    }
    function s(u) {
      return e.exit("codeIndented"), t(u);
    }
  }
  function ys(e, t, n) {
    let a = this;
    return r;
    function r(i) {
      return a.parser.lazy[a.now().line]
        ? n(i)
        : D(i)
        ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), r)
        : Z(e, o, "linePrefix", 4 + 1)(i);
    }
    function o(i) {
      let l = a.events[a.events.length - 1];
      return l &&
        l[1].type === "linePrefix" &&
        l[2].sliceSerialize(l[1], !0).length >= 4
        ? t(i)
        : D(i)
        ? r(i)
        : n(i);
    }
  }
  var d0 = { name: "codeText", tokenize: Ms, resolve: xs, previous: ws };
  function xs(e) {
    let t = e.length - 4,
      n = 3,
      a,
      r;
    if (
      (e[n][1].type === "lineEnding" || e[n][1].type === "space") &&
      (e[t][1].type === "lineEnding" || e[t][1].type === "space")
    ) {
      for (a = n; ++a < t; )
        if (e[a][1].type === "codeTextData") {
          (e[n][1].type = "codeTextPadding"),
            (e[t][1].type = "codeTextPadding"),
            (n += 2),
            (t -= 2);
          break;
        }
    }
    for (a = n - 1, t++; ++a <= t; )
      r === void 0
        ? a !== t && e[a][1].type !== "lineEnding" && (r = a)
        : (a === t || e[a][1].type === "lineEnding") &&
          ((e[r][1].type = "codeTextData"),
          a !== r + 2 &&
            ((e[r][1].end = e[a - 1][1].end),
            e.splice(r + 2, a - r - 2),
            (t -= a - r - 2),
            (a = r + 2)),
          (r = void 0));
    return e;
  }
  function ws(e) {
    return (
      e !== 96 ||
      this.events[this.events.length - 1][1].type === "characterEscape"
    );
  }
  function Ms(e, t, n) {
    let a = this,
      r = 0,
      o,
      i;
    return l;
    function l(p) {
      return e.enter("codeText"), e.enter("codeTextSequence"), s(p);
    }
    function s(p) {
      return p === 96
        ? (e.consume(p), r++, s)
        : (e.exit("codeTextSequence"), u(p));
    }
    function u(p) {
      return p === null
        ? n(p)
        : p === 96
        ? ((i = e.enter("codeTextSequence")), (o = 0), h(p))
        : p === 32
        ? (e.enter("space"), e.consume(p), e.exit("space"), u)
        : D(p)
        ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), u)
        : (e.enter("codeTextData"), c(p));
    }
    function c(p) {
      return p === null || p === 32 || p === 96 || D(p)
        ? (e.exit("codeTextData"), u(p))
        : (e.consume(p), c);
    }
    function h(p) {
      return p === 96
        ? (e.consume(p), o++, h)
        : o === r
        ? (e.exit("codeTextSequence"), e.exit("codeText"), t(p))
        : ((i.type = "codeTextData"), c(p));
    }
  }
  function Bt(e) {
    let t = {},
      n = -1,
      a,
      r,
      o,
      i,
      l,
      s,
      u;
    for (; ++n < e.length; ) {
      for (; n in t; ) n = t[n];
      if (
        ((a = e[n]),
        n &&
          a[1].type === "chunkFlow" &&
          e[n - 1][1].type === "listItemPrefix" &&
          ((s = a[1]._tokenizer.events),
          (o = 0),
          o < s.length && s[o][1].type === "lineEndingBlank" && (o += 2),
          o < s.length && s[o][1].type === "content"))
      )
        for (; ++o < s.length && s[o][1].type !== "content"; )
          s[o][1].type === "chunkText" &&
            ((s[o][1]._isInFirstContentOfListItem = !0), o++);
      if (a[0] === "enter")
        a[1].contentType && (Object.assign(t, zs(e, n)), (n = t[n]), (u = !0));
      else if (a[1]._container) {
        for (
          o = n, r = void 0;
          o-- &&
          ((i = e[o]),
          i[1].type === "lineEnding" || i[1].type === "lineEndingBlank");

        )
          i[0] === "enter" &&
            (r && (e[r][1].type = "lineEndingBlank"),
            (i[1].type = "lineEnding"),
            (r = o));
        r &&
          ((a[1].end = Object.assign({}, e[r][1].start)),
          (l = e.slice(r, n)),
          l.unshift(a),
          ye(e, r, n - r + 1, l));
      }
    }
    return !u;
  }
  function zs(e, t) {
    let n = e[t][1],
      a = e[t][2],
      r = t - 1,
      o = [],
      i = n._tokenizer || a.parser[n.contentType](n.start),
      l = i.events,
      s = [],
      u = {},
      c,
      h,
      p = -1,
      d = n,
      g = 0,
      b = 0,
      v = [b];
    for (; d; ) {
      for (; e[++r][1] !== d; );
      o.push(r),
        d._tokenizer ||
          ((c = a.sliceStream(d)),
          d.next || c.push(null),
          h && i.defineSkip(d.start),
          d._isInFirstContentOfListItem &&
            (i._gfmTasklistFirstContentOfListItem = !0),
          i.write(c),
          d._isInFirstContentOfListItem &&
            (i._gfmTasklistFirstContentOfListItem = void 0)),
        (h = d),
        (d = d.next);
    }
    for (d = n; ++p < l.length; )
      l[p][0] === "exit" &&
        l[p - 1][0] === "enter" &&
        l[p][1].type === l[p - 1][1].type &&
        l[p][1].start.line !== l[p][1].end.line &&
        ((b = p + 1),
        v.push(b),
        (d._tokenizer = void 0),
        (d.previous = void 0),
        (d = d.next));
    for (
      i.events = [],
        d ? ((d._tokenizer = void 0), (d.previous = void 0)) : v.pop(),
        p = v.length;
      p--;

    ) {
      let _ = l.slice(v[p], v[p + 1]),
        C = o.pop();
      s.unshift([C, C + _.length - 1]), ye(e, C, 2, _);
    }
    for (p = -1; ++p < s.length; )
      (u[g + s[p][0]] = g + s[p][1]), (g += s[p][1] - s[p][0] - 1);
    return u;
  }
  var p0 = { tokenize: Ss, resolve: ks },
    Is = { tokenize: Cs, partial: !0 };
  function ks(e) {
    return Bt(e), e;
  }
  function Ss(e, t) {
    let n;
    return a;
    function a(l) {
      return (
        e.enter("content"),
        (n = e.enter("chunkContent", { contentType: "content" })),
        r(l)
      );
    }
    function r(l) {
      return l === null
        ? o(l)
        : D(l)
        ? e.check(Is, i, o)(l)
        : (e.consume(l), r);
    }
    function o(l) {
      return e.exit("chunkContent"), e.exit("content"), t(l);
    }
    function i(l) {
      return (
        e.consume(l),
        e.exit("chunkContent"),
        (n.next = e.enter("chunkContent", {
          contentType: "content",
          previous: n,
        })),
        (n = n.next),
        r
      );
    }
  }
  function Cs(e, t, n) {
    let a = this;
    return r;
    function r(i) {
      return (
        e.exit("chunkContent"),
        e.enter("lineEnding"),
        e.consume(i),
        e.exit("lineEnding"),
        Z(e, o, "linePrefix")
      );
    }
    function o(i) {
      if (i === null || D(i)) return n(i);
      let l = a.events[a.events.length - 1];
      return !a.parser.constructs.disable.null.includes("codeIndented") &&
        l &&
        l[1].type === "linePrefix" &&
        l[2].sliceSerialize(l[1], !0).length >= 4
        ? t(i)
        : e.interrupt(a.parser.constructs.flow, n, t)(i);
    }
  }
  function Ut(e, t, n, a, r, o, i, l, s) {
    let u = s || Number.POSITIVE_INFINITY,
      c = 0;
    return h;
    function h(_) {
      return _ === 60
        ? (e.enter(a), e.enter(r), e.enter(o), e.consume(_), e.exit(o), p)
        : _ === null || _ === 41 || lt(_)
        ? n(_)
        : (e.enter(a),
          e.enter(i),
          e.enter(l),
          e.enter("chunkString", { contentType: "string" }),
          b(_));
    }
    function p(_) {
      return _ === 62
        ? (e.enter(o), e.consume(_), e.exit(o), e.exit(r), e.exit(a), t)
        : (e.enter(l), e.enter("chunkString", { contentType: "string" }), d(_));
    }
    function d(_) {
      return _ === 62
        ? (e.exit("chunkString"), e.exit(l), p(_))
        : _ === null || _ === 60 || D(_)
        ? n(_)
        : (e.consume(_), _ === 92 ? g : d);
    }
    function g(_) {
      return _ === 60 || _ === 62 || _ === 92 ? (e.consume(_), d) : d(_);
    }
    function b(_) {
      return _ === 40
        ? ++c > u
          ? n(_)
          : (e.consume(_), b)
        : _ === 41
        ? c--
          ? (e.consume(_), b)
          : (e.exit("chunkString"), e.exit(l), e.exit(i), e.exit(a), t(_))
        : _ === null || be(_)
        ? c
          ? n(_)
          : (e.exit("chunkString"), e.exit(l), e.exit(i), e.exit(a), t(_))
        : lt(_)
        ? n(_)
        : (e.consume(_), _ === 92 ? v : b);
    }
    function v(_) {
      return _ === 40 || _ === 41 || _ === 92 ? (e.consume(_), b) : b(_);
    }
  }
  function $t(e, t, n, a, r, o) {
    let i = this,
      l = 0,
      s;
    return u;
    function u(d) {
      return e.enter(a), e.enter(r), e.consume(d), e.exit(r), e.enter(o), c;
    }
    function c(d) {
      return d === null ||
        d === 91 ||
        (d === 93 && !s) ||
        (d === 94 && !l && "_hiddenFootnoteSupport" in i.parser.constructs) ||
        l > 999
        ? n(d)
        : d === 93
        ? (e.exit(o), e.enter(r), e.consume(d), e.exit(r), e.exit(a), t)
        : D(d)
        ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), c)
        : (e.enter("chunkString", { contentType: "string" }), h(d));
    }
    function h(d) {
      return d === null || d === 91 || d === 93 || D(d) || l++ > 999
        ? (e.exit("chunkString"), c(d))
        : (e.consume(d), (s = s || !oe(d)), d === 92 ? p : h);
    }
    function p(d) {
      return d === 91 || d === 92 || d === 93 ? (e.consume(d), l++, h) : h(d);
    }
  }
  function qt(e, t, n, a, r, o) {
    let i;
    return l;
    function l(p) {
      return (
        e.enter(a),
        e.enter(r),
        e.consume(p),
        e.exit(r),
        (i = p === 40 ? 41 : p),
        s
      );
    }
    function s(p) {
      return p === i
        ? (e.enter(r), e.consume(p), e.exit(r), e.exit(a), t)
        : (e.enter(o), u(p));
    }
    function u(p) {
      return p === i
        ? (e.exit(o), s(i))
        : p === null
        ? n(p)
        : D(p)
        ? (e.enter("lineEnding"),
          e.consume(p),
          e.exit("lineEnding"),
          Z(e, u, "linePrefix"))
        : (e.enter("chunkString", { contentType: "string" }), c(p));
    }
    function c(p) {
      return p === i || p === null || D(p)
        ? (e.exit("chunkString"), u(p))
        : (e.consume(p), p === 92 ? h : c);
    }
    function h(p) {
      return p === i || p === 92 ? (e.consume(p), c) : c(p);
    }
  }
  function E5(e, t) {
    let n;
    return a;
    function a(r) {
      return D(r)
        ? (e.enter("lineEnding"),
          e.consume(r),
          e.exit("lineEnding"),
          (n = !0),
          a)
        : oe(r)
        ? Z(e, a, n ? "linePrefix" : "lineSuffix")(r)
        : t(r);
    }
  }
  function t5(e) {
    return e
      .replace(/[\t\n\r ]+/g, " ")
      .replace(/^ | $/g, "")
      .toLowerCase()
      .toUpperCase();
  }
  var h0 = { name: "definition", tokenize: Ns },
    Rs = { tokenize: Ls, partial: !0 };
  function Ns(e, t, n) {
    let a = this,
      r;
    return o;
    function o(s) {
      return (
        e.enter("definition"),
        $t.call(
          a,
          e,
          i,
          n,
          "definitionLabel",
          "definitionLabelMarker",
          "definitionLabelString"
        )(s)
      );
    }
    function i(s) {
      return (
        (r = t5(
          a.sliceSerialize(a.events[a.events.length - 1][1]).slice(1, -1)
        )),
        s === 58
          ? (e.enter("definitionMarker"),
            e.consume(s),
            e.exit("definitionMarker"),
            E5(
              e,
              Ut(
                e,
                e.attempt(Rs, Z(e, l, "whitespace"), Z(e, l, "whitespace")),
                n,
                "definitionDestination",
                "definitionDestinationLiteral",
                "definitionDestinationLiteralMarker",
                "definitionDestinationRaw",
                "definitionDestinationString"
              )
            ))
          : n(s)
      );
    }
    function l(s) {
      return s === null || D(s)
        ? (e.exit("definition"),
          a.parser.defined.includes(r) || a.parser.defined.push(r),
          t(s))
        : n(s);
    }
  }
  function Ls(e, t, n) {
    return a;
    function a(i) {
      return be(i) ? E5(e, r)(i) : n(i);
    }
    function r(i) {
      return i === 34 || i === 39 || i === 40
        ? qt(
            e,
            Z(e, o, "whitespace"),
            n,
            "definitionTitle",
            "definitionTitleMarker",
            "definitionTitleString"
          )(i)
        : n(i);
    }
    function o(i) {
      return i === null || D(i) ? t(i) : n(i);
    }
  }
  var m0 = { name: "hardBreakEscape", tokenize: Ts };
  function Ts(e, t, n) {
    return a;
    function a(o) {
      return (
        e.enter("hardBreakEscape"), e.enter("escapeMarker"), e.consume(o), r
      );
    }
    function r(o) {
      return D(o)
        ? (e.exit("escapeMarker"), e.exit("hardBreakEscape"), t(o))
        : n(o);
    }
  }
  var f0 = { name: "headingAtx", tokenize: Hs, resolve: Os };
  function Os(e, t) {
    let n = e.length - 2,
      a = 3,
      r,
      o;
    return (
      e[a][1].type === "whitespace" && (a += 2),
      n - 2 > a && e[n][1].type === "whitespace" && (n -= 2),
      e[n][1].type === "atxHeadingSequence" &&
        (a === n - 1 || (n - 4 > a && e[n - 2][1].type === "whitespace")) &&
        (n -= a + 1 === n ? 2 : 4),
      n > a &&
        ((r = {
          type: "atxHeadingText",
          start: e[a][1].start,
          end: e[n][1].end,
        }),
        (o = {
          type: "chunkText",
          start: e[a][1].start,
          end: e[n][1].end,
          contentType: "text",
        }),
        ye(e, a, n - a + 1, [
          ["enter", r, t],
          ["enter", o, t],
          ["exit", o, t],
          ["exit", r, t],
        ])),
      e
    );
  }
  function Hs(e, t, n) {
    let a = this,
      r = 0;
    return o;
    function o(c) {
      return e.enter("atxHeading"), e.enter("atxHeadingSequence"), i(c);
    }
    function i(c) {
      return c === 35 && r++ < 6
        ? (e.consume(c), i)
        : c === null || be(c)
        ? (e.exit("atxHeadingSequence"), a.interrupt ? t(c) : l(c))
        : n(c);
    }
    function l(c) {
      return c === 35
        ? (e.enter("atxHeadingSequence"), s(c))
        : c === null || D(c)
        ? (e.exit("atxHeading"), t(c))
        : oe(c)
        ? Z(e, l, "whitespace")(c)
        : (e.enter("atxHeadingText"), u(c));
    }
    function s(c) {
      return c === 35
        ? (e.consume(c), s)
        : (e.exit("atxHeadingSequence"), l(c));
    }
    function u(c) {
      return c === null || c === 35 || be(c)
        ? (e.exit("atxHeadingText"), l(c))
        : (e.consume(c), u);
    }
  }
  var Br = [
      "address",
      "article",
      "aside",
      "base",
      "basefont",
      "blockquote",
      "body",
      "caption",
      "center",
      "col",
      "colgroup",
      "dd",
      "details",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hr",
      "html",
      "iframe",
      "legend",
      "li",
      "link",
      "main",
      "menu",
      "menuitem",
      "nav",
      "noframes",
      "ol",
      "optgroup",
      "option",
      "p",
      "param",
      "section",
      "summary",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "title",
      "tr",
      "track",
      "ul",
    ],
    g0 = ["pre", "script", "style", "textarea"];
  var v0 = { name: "htmlFlow", tokenize: Fs, resolveTo: Vs, concrete: !0 },
    Ds = { tokenize: Ps, partial: !0 };
  function Vs(e) {
    let t = e.length;
    for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); );
    return (
      t > 1 &&
        e[t - 2][1].type === "linePrefix" &&
        ((e[t][1].start = e[t - 2][1].start),
        (e[t + 1][1].start = e[t - 2][1].start),
        e.splice(t - 2, 2)),
      e
    );
  }
  function Fs(e, t, n) {
    let a = this,
      r,
      o,
      i,
      l,
      s;
    return u;
    function u(f) {
      return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(f), c;
    }
    function c(f) {
      return f === 33
        ? (e.consume(f), h)
        : f === 47
        ? (e.consume(f), g)
        : f === 63
        ? (e.consume(f), (r = 3), a.interrupt ? t : B)
        : Oe(f)
        ? (e.consume(f), (i = String.fromCharCode(f)), (o = !0), b)
        : n(f);
    }
    function h(f) {
      return f === 45
        ? (e.consume(f), (r = 2), p)
        : f === 91
        ? (e.consume(f), (r = 5), (i = "CDATA["), (l = 0), d)
        : Oe(f)
        ? (e.consume(f), (r = 4), a.interrupt ? t : B)
        : n(f);
    }
    function p(f) {
      return f === 45 ? (e.consume(f), a.interrupt ? t : B) : n(f);
    }
    function d(f) {
      return f === i.charCodeAt(l++)
        ? (e.consume(f), l === i.length ? (a.interrupt ? t : O) : d)
        : n(f);
    }
    function g(f) {
      return Oe(f) ? (e.consume(f), (i = String.fromCharCode(f)), b) : n(f);
    }
    function b(f) {
      return f === null || f === 47 || f === 62 || be(f)
        ? f !== 47 && o && g0.includes(i.toLowerCase())
          ? ((r = 1), a.interrupt ? t(f) : O(f))
          : Br.includes(i.toLowerCase())
          ? ((r = 6), f === 47 ? (e.consume(f), v) : a.interrupt ? t(f) : O(f))
          : ((r = 7),
            a.interrupt && !a.parser.lazy[a.now().line]
              ? n(f)
              : o
              ? C(f)
              : _(f))
        : f === 45 || Ee(f)
        ? (e.consume(f), (i += String.fromCharCode(f)), b)
        : n(f);
    }
    function v(f) {
      return f === 62 ? (e.consume(f), a.interrupt ? t : O) : n(f);
    }
    function _(f) {
      return oe(f) ? (e.consume(f), _) : L(f);
    }
    function C(f) {
      return f === 47
        ? (e.consume(f), L)
        : f === 58 || f === 95 || Oe(f)
        ? (e.consume(f), M)
        : oe(f)
        ? (e.consume(f), C)
        : L(f);
    }
    function M(f) {
      return f === 45 || f === 46 || f === 58 || f === 95 || Ee(f)
        ? (e.consume(f), M)
        : y(f);
    }
    function y(f) {
      return f === 61 ? (e.consume(f), x) : oe(f) ? (e.consume(f), y) : C(f);
    }
    function x(f) {
      return f === null || f === 60 || f === 61 || f === 62 || f === 96
        ? n(f)
        : f === 34 || f === 39
        ? (e.consume(f), (s = f), E)
        : oe(f)
        ? (e.consume(f), x)
        : ((s = null), z(f));
    }
    function E(f) {
      return f === null || D(f)
        ? n(f)
        : f === s
        ? (e.consume(f), N)
        : (e.consume(f), E);
    }
    function z(f) {
      return f === null ||
        f === 34 ||
        f === 39 ||
        f === 60 ||
        f === 61 ||
        f === 62 ||
        f === 96 ||
        be(f)
        ? y(f)
        : (e.consume(f), z);
    }
    function N(f) {
      return f === 47 || f === 62 || oe(f) ? C(f) : n(f);
    }
    function L(f) {
      return f === 62 ? (e.consume(f), W) : n(f);
    }
    function W(f) {
      return oe(f) ? (e.consume(f), W) : f === null || D(f) ? O(f) : n(f);
    }
    function O(f) {
      return f === 45 && r === 2
        ? (e.consume(f), J)
        : f === 60 && r === 1
        ? (e.consume(f), w)
        : f === 62 && r === 4
        ? (e.consume(f), q)
        : f === 63 && r === 3
        ? (e.consume(f), B)
        : f === 93 && r === 5
        ? (e.consume(f), T)
        : D(f) && (r === 6 || r === 7)
        ? e.check(Ds, q, $)(f)
        : f === null || D(f)
        ? $(f)
        : (e.consume(f), O);
    }
    function $(f) {
      return e.exit("htmlFlowData"), I(f);
    }
    function I(f) {
      return f === null
        ? m(f)
        : D(f)
        ? e.attempt({ tokenize: F, partial: !0 }, I, m)(f)
        : (e.enter("htmlFlowData"), O(f));
    }
    function F(f, He, pe) {
      return _e;
      function _e(Ie) {
        return f.enter("lineEnding"), f.consume(Ie), f.exit("lineEnding"), Ye;
      }
      function Ye(Ie) {
        return a.parser.lazy[a.now().line] ? pe(Ie) : He(Ie);
      }
    }
    function J(f) {
      return f === 45 ? (e.consume(f), B) : O(f);
    }
    function w(f) {
      return f === 47 ? (e.consume(f), (i = ""), R) : O(f);
    }
    function R(f) {
      return f === 62 && g0.includes(i.toLowerCase())
        ? (e.consume(f), q)
        : Oe(f) && i.length < 8
        ? (e.consume(f), (i += String.fromCharCode(f)), R)
        : O(f);
    }
    function T(f) {
      return f === 93 ? (e.consume(f), B) : O(f);
    }
    function B(f) {
      return f === 62
        ? (e.consume(f), q)
        : f === 45 && r === 2
        ? (e.consume(f), B)
        : O(f);
    }
    function q(f) {
      return f === null || D(f)
        ? (e.exit("htmlFlowData"), m(f))
        : (e.consume(f), q);
    }
    function m(f) {
      return e.exit("htmlFlow"), t(f);
    }
  }
  function Ps(e, t, n) {
    return a;
    function a(r) {
      return (
        e.exit("htmlFlowData"),
        e.enter("lineEndingBlank"),
        e.consume(r),
        e.exit("lineEndingBlank"),
        e.attempt(c5, t, n)
      );
    }
  }
  var b0 = { name: "htmlText", tokenize: Bs };
  function Bs(e, t, n) {
    let a = this,
      r,
      o,
      i,
      l;
    return s;
    function s(m) {
      return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(m), u;
    }
    function u(m) {
      return m === 33
        ? (e.consume(m), c)
        : m === 47
        ? (e.consume(m), z)
        : m === 63
        ? (e.consume(m), x)
        : Oe(m)
        ? (e.consume(m), W)
        : n(m);
    }
    function c(m) {
      return m === 45
        ? (e.consume(m), h)
        : m === 91
        ? (e.consume(m), (o = "CDATA["), (i = 0), v)
        : Oe(m)
        ? (e.consume(m), y)
        : n(m);
    }
    function h(m) {
      return m === 45 ? (e.consume(m), p) : n(m);
    }
    function p(m) {
      return m === null || m === 62
        ? n(m)
        : m === 45
        ? (e.consume(m), d)
        : g(m);
    }
    function d(m) {
      return m === null || m === 62 ? n(m) : g(m);
    }
    function g(m) {
      return m === null
        ? n(m)
        : m === 45
        ? (e.consume(m), b)
        : D(m)
        ? ((l = g), T(m))
        : (e.consume(m), g);
    }
    function b(m) {
      return m === 45 ? (e.consume(m), q) : g(m);
    }
    function v(m) {
      return m === o.charCodeAt(i++)
        ? (e.consume(m), i === o.length ? _ : v)
        : n(m);
    }
    function _(m) {
      return m === null
        ? n(m)
        : m === 93
        ? (e.consume(m), C)
        : D(m)
        ? ((l = _), T(m))
        : (e.consume(m), _);
    }
    function C(m) {
      return m === 93 ? (e.consume(m), M) : _(m);
    }
    function M(m) {
      return m === 62 ? q(m) : m === 93 ? (e.consume(m), M) : _(m);
    }
    function y(m) {
      return m === null || m === 62
        ? q(m)
        : D(m)
        ? ((l = y), T(m))
        : (e.consume(m), y);
    }
    function x(m) {
      return m === null
        ? n(m)
        : m === 63
        ? (e.consume(m), E)
        : D(m)
        ? ((l = x), T(m))
        : (e.consume(m), x);
    }
    function E(m) {
      return m === 62 ? q(m) : x(m);
    }
    function z(m) {
      return Oe(m) ? (e.consume(m), N) : n(m);
    }
    function N(m) {
      return m === 45 || Ee(m) ? (e.consume(m), N) : L(m);
    }
    function L(m) {
      return D(m) ? ((l = L), T(m)) : oe(m) ? (e.consume(m), L) : q(m);
    }
    function W(m) {
      return m === 45 || Ee(m)
        ? (e.consume(m), W)
        : m === 47 || m === 62 || be(m)
        ? O(m)
        : n(m);
    }
    function O(m) {
      return m === 47
        ? (e.consume(m), q)
        : m === 58 || m === 95 || Oe(m)
        ? (e.consume(m), $)
        : D(m)
        ? ((l = O), T(m))
        : oe(m)
        ? (e.consume(m), O)
        : q(m);
    }
    function $(m) {
      return m === 45 || m === 46 || m === 58 || m === 95 || Ee(m)
        ? (e.consume(m), $)
        : I(m);
    }
    function I(m) {
      return m === 61
        ? (e.consume(m), F)
        : D(m)
        ? ((l = I), T(m))
        : oe(m)
        ? (e.consume(m), I)
        : O(m);
    }
    function F(m) {
      return m === null || m === 60 || m === 61 || m === 62 || m === 96
        ? n(m)
        : m === 34 || m === 39
        ? (e.consume(m), (r = m), J)
        : D(m)
        ? ((l = F), T(m))
        : oe(m)
        ? (e.consume(m), F)
        : (e.consume(m), (r = void 0), R);
    }
    function J(m) {
      return m === r
        ? (e.consume(m), w)
        : m === null
        ? n(m)
        : D(m)
        ? ((l = J), T(m))
        : (e.consume(m), J);
    }
    function w(m) {
      return m === 62 || m === 47 || be(m) ? O(m) : n(m);
    }
    function R(m) {
      return m === null ||
        m === 34 ||
        m === 39 ||
        m === 60 ||
        m === 61 ||
        m === 96
        ? n(m)
        : m === 62 || be(m)
        ? O(m)
        : (e.consume(m), R);
    }
    function T(m) {
      return (
        e.exit("htmlTextData"),
        e.enter("lineEnding"),
        e.consume(m),
        e.exit("lineEnding"),
        Z(
          e,
          B,
          "linePrefix",
          a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )
      );
    }
    function B(m) {
      return e.enter("htmlTextData"), l(m);
    }
    function q(m) {
      return m === 62
        ? (e.consume(m), e.exit("htmlTextData"), e.exit("htmlText"), t)
        : n(m);
    }
  }
  var _5 = { name: "labelEnd", tokenize: Ws, resolveTo: Ks, resolveAll: Gs },
    Us = { tokenize: Ys },
    $s = { tokenize: Qs },
    qs = { tokenize: Zs };
  function Gs(e) {
    let t = -1,
      n;
    for (; ++t < e.length; )
      (n = e[t][1]),
        (n.type === "labelImage" ||
          n.type === "labelLink" ||
          n.type === "labelEnd") &&
          (e.splice(t + 1, n.type === "labelImage" ? 4 : 2),
          (n.type = "data"),
          t++);
    return e;
  }
  function Ks(e, t) {
    let n = e.length,
      a = 0,
      r,
      o,
      i,
      l;
    for (; n--; )
      if (((r = e[n][1]), o)) {
        if (r.type === "link" || (r.type === "labelLink" && r._inactive)) break;
        e[n][0] === "enter" && r.type === "labelLink" && (r._inactive = !0);
      } else if (i) {
        if (
          e[n][0] === "enter" &&
          (r.type === "labelImage" || r.type === "labelLink") &&
          !r._balanced &&
          ((o = n), r.type !== "labelLink")
        ) {
          a = 2;
          break;
        }
      } else r.type === "labelEnd" && (i = n);
    let s = {
        type: e[o][1].type === "labelLink" ? "link" : "image",
        start: Object.assign({}, e[o][1].start),
        end: Object.assign({}, e[e.length - 1][1].end),
      },
      u = {
        type: "label",
        start: Object.assign({}, e[o][1].start),
        end: Object.assign({}, e[i][1].end),
      },
      c = {
        type: "labelText",
        start: Object.assign({}, e[o + a + 2][1].end),
        end: Object.assign({}, e[i - 2][1].start),
      };
    return (
      (l = [
        ["enter", s, t],
        ["enter", u, t],
      ]),
      (l = ze(l, e.slice(o + 1, o + a + 3))),
      (l = ze(l, [["enter", c, t]])),
      (l = ze(
        l,
        H5(t.parser.constructs.insideSpan.null, e.slice(o + a + 4, i - 3), t)
      )),
      (l = ze(l, [["exit", c, t], e[i - 2], e[i - 1], ["exit", u, t]])),
      (l = ze(l, e.slice(i + 1))),
      (l = ze(l, [["exit", s, t]])),
      ye(e, o, e.length, l),
      e
    );
  }
  function Ws(e, t, n) {
    let a = this,
      r = a.events.length,
      o,
      i;
    for (; r--; )
      if (
        (a.events[r][1].type === "labelImage" ||
          a.events[r][1].type === "labelLink") &&
        !a.events[r][1]._balanced
      ) {
        o = a.events[r][1];
        break;
      }
    return l;
    function l(c) {
      return o
        ? o._inactive
          ? u(c)
          : ((i = a.parser.defined.includes(
              t5(a.sliceSerialize({ start: o.end, end: a.now() }))
            )),
            e.enter("labelEnd"),
            e.enter("labelMarker"),
            e.consume(c),
            e.exit("labelMarker"),
            e.exit("labelEnd"),
            s)
        : n(c);
    }
    function s(c) {
      return c === 40
        ? e.attempt(Us, t, i ? t : u)(c)
        : c === 91
        ? e.attempt($s, t, i ? e.attempt(qs, t, u) : u)(c)
        : i
        ? t(c)
        : u(c);
    }
    function u(c) {
      return (o._balanced = !0), n(c);
    }
  }
  function Ys(e, t, n) {
    return a;
    function a(s) {
      return (
        e.enter("resource"),
        e.enter("resourceMarker"),
        e.consume(s),
        e.exit("resourceMarker"),
        E5(e, r)
      );
    }
    function r(s) {
      return s === 41
        ? l(s)
        : Ut(
            e,
            o,
            n,
            "resourceDestination",
            "resourceDestinationLiteral",
            "resourceDestinationLiteralMarker",
            "resourceDestinationRaw",
            "resourceDestinationString",
            32
          )(s);
    }
    function o(s) {
      return be(s) ? E5(e, i)(s) : l(s);
    }
    function i(s) {
      return s === 34 || s === 39 || s === 40
        ? qt(
            e,
            E5(e, l),
            n,
            "resourceTitle",
            "resourceTitleMarker",
            "resourceTitleString"
          )(s)
        : l(s);
    }
    function l(s) {
      return s === 41
        ? (e.enter("resourceMarker"),
          e.consume(s),
          e.exit("resourceMarker"),
          e.exit("resource"),
          t)
        : n(s);
    }
  }
  function Qs(e, t, n) {
    let a = this;
    return r;
    function r(i) {
      return $t.call(
        a,
        e,
        o,
        n,
        "reference",
        "referenceMarker",
        "referenceString"
      )(i);
    }
    function o(i) {
      return a.parser.defined.includes(
        t5(a.sliceSerialize(a.events[a.events.length - 1][1]).slice(1, -1))
      )
        ? t(i)
        : n(i);
    }
  }
  function Zs(e, t, n) {
    return a;
    function a(o) {
      return (
        e.enter("reference"),
        e.enter("referenceMarker"),
        e.consume(o),
        e.exit("referenceMarker"),
        r
      );
    }
    function r(o) {
      return o === 93
        ? (e.enter("referenceMarker"),
          e.consume(o),
          e.exit("referenceMarker"),
          e.exit("reference"),
          t)
        : n(o);
    }
  }
  var E0 = { name: "labelStartImage", tokenize: Xs, resolveAll: _5.resolveAll };
  function Xs(e, t, n) {
    let a = this;
    return r;
    function r(l) {
      return (
        e.enter("labelImage"),
        e.enter("labelImageMarker"),
        e.consume(l),
        e.exit("labelImageMarker"),
        o
      );
    }
    function o(l) {
      return l === 91
        ? (e.enter("labelMarker"),
          e.consume(l),
          e.exit("labelMarker"),
          e.exit("labelImage"),
          i)
        : n(l);
    }
    function i(l) {
      return l === 94 && "_hiddenFootnoteSupport" in a.parser.constructs
        ? n(l)
        : t(l);
    }
  }
  var _0 = { name: "labelStartLink", tokenize: js, resolveAll: _5.resolveAll };
  function js(e, t, n) {
    let a = this;
    return r;
    function r(i) {
      return (
        e.enter("labelLink"),
        e.enter("labelMarker"),
        e.consume(i),
        e.exit("labelMarker"),
        e.exit("labelLink"),
        o
      );
    }
    function o(i) {
      return i === 94 && "_hiddenFootnoteSupport" in a.parser.constructs
        ? n(i)
        : t(i);
    }
  }
  var ut = { name: "lineEnding", tokenize: Js };
  function Js(e, t) {
    return n;
    function n(a) {
      return (
        e.enter("lineEnding"),
        e.consume(a),
        e.exit("lineEnding"),
        Z(e, t, "linePrefix")
      );
    }
  }
  var A5 = { name: "thematicBreak", tokenize: eu };
  function eu(e, t, n) {
    let a = 0,
      r;
    return o;
    function o(s) {
      return e.enter("thematicBreak"), (r = s), i(s);
    }
    function i(s) {
      return s === r
        ? (e.enter("thematicBreakSequence"), l(s))
        : oe(s)
        ? Z(e, i, "whitespace")(s)
        : a < 3 || (s !== null && !D(s))
        ? n(s)
        : (e.exit("thematicBreak"), t(s));
    }
    function l(s) {
      return s === r
        ? (e.consume(s), a++, l)
        : (e.exit("thematicBreakSequence"), i(s));
    }
  }
  var xe = {
      name: "list",
      tokenize: au,
      continuation: { tokenize: ru },
      exit: iu,
    },
    tu = { tokenize: lu, partial: !0 },
    nu = { tokenize: ou, partial: !0 };
  function au(e, t, n) {
    let a = this,
      r = a.events[a.events.length - 1],
      o =
        r && r[1].type === "linePrefix"
          ? r[2].sliceSerialize(r[1], !0).length
          : 0,
      i = 0;
    return l;
    function l(d) {
      let g =
        a.containerState.type ||
        (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
      if (
        g === "listUnordered"
          ? !a.containerState.marker || d === a.containerState.marker
          : it(d)
      ) {
        if (
          (a.containerState.type ||
            ((a.containerState.type = g), e.enter(g, { _container: !0 })),
          g === "listUnordered")
        )
          return (
            e.enter("listItemPrefix"),
            d === 42 || d === 45 ? e.check(A5, n, u)(d) : u(d)
          );
        if (!a.interrupt || d === 49)
          return e.enter("listItemPrefix"), e.enter("listItemValue"), s(d);
      }
      return n(d);
    }
    function s(d) {
      return it(d) && ++i < 10
        ? (e.consume(d), s)
        : (!a.interrupt || i < 2) &&
          (a.containerState.marker
            ? d === a.containerState.marker
            : d === 41 || d === 46)
        ? (e.exit("listItemValue"), u(d))
        : n(d);
    }
    function u(d) {
      return (
        e.enter("listItemMarker"),
        e.consume(d),
        e.exit("listItemMarker"),
        (a.containerState.marker = a.containerState.marker || d),
        e.check(c5, a.interrupt ? n : c, e.attempt(tu, p, h))
      );
    }
    function c(d) {
      return (a.containerState.initialBlankLine = !0), o++, p(d);
    }
    function h(d) {
      return oe(d)
        ? (e.enter("listItemPrefixWhitespace"),
          e.consume(d),
          e.exit("listItemPrefixWhitespace"),
          p)
        : n(d);
    }
    function p(d) {
      return (
        (a.containerState.size =
          o + a.sliceSerialize(e.exit("listItemPrefix"), !0).length),
        t(d)
      );
    }
  }
  function ru(e, t, n) {
    let a = this;
    return (a.containerState._closeFlow = void 0), e.check(c5, r, o);
    function r(l) {
      return (
        (a.containerState.furtherBlankLines =
          a.containerState.furtherBlankLines ||
          a.containerState.initialBlankLine),
        Z(e, t, "listItemIndent", a.containerState.size + 1)(l)
      );
    }
    function o(l) {
      return a.containerState.furtherBlankLines || !oe(l)
        ? ((a.containerState.furtherBlankLines = void 0),
          (a.containerState.initialBlankLine = void 0),
          i(l))
        : ((a.containerState.furtherBlankLines = void 0),
          (a.containerState.initialBlankLine = void 0),
          e.attempt(nu, t, i)(l));
    }
    function i(l) {
      return (
        (a.containerState._closeFlow = !0),
        (a.interrupt = void 0),
        Z(
          e,
          e.attempt(xe, t, n),
          "linePrefix",
          a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4
        )(l)
      );
    }
  }
  function ou(e, t, n) {
    let a = this;
    return Z(e, r, "listItemIndent", a.containerState.size + 1);
    function r(o) {
      let i = a.events[a.events.length - 1];
      return i &&
        i[1].type === "listItemIndent" &&
        i[2].sliceSerialize(i[1], !0).length === a.containerState.size
        ? t(o)
        : n(o);
    }
  }
  function iu(e) {
    e.exit(this.containerState.type);
  }
  function lu(e, t, n) {
    let a = this;
    return Z(
      e,
      r,
      "listItemPrefixWhitespace",
      a.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4 + 1
    );
    function r(o) {
      let i = a.events[a.events.length - 1];
      return !oe(o) && i && i[1].type === "listItemPrefixWhitespace"
        ? t(o)
        : n(o);
    }
  }
  var Gt = { name: "setextUnderline", tokenize: su, resolveTo: cu };
  function cu(e, t) {
    let n = e.length,
      a,
      r,
      o;
    for (; n--; )
      if (e[n][0] === "enter") {
        if (e[n][1].type === "content") {
          a = n;
          break;
        }
        e[n][1].type === "paragraph" && (r = n);
      } else
        e[n][1].type === "content" && e.splice(n, 1),
          !o && e[n][1].type === "definition" && (o = n);
    let i = {
      type: "setextHeading",
      start: Object.assign({}, e[r][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    };
    return (
      (e[r][1].type = "setextHeadingText"),
      o
        ? (e.splice(r, 0, ["enter", i, t]),
          e.splice(o + 1, 0, ["exit", e[a][1], t]),
          (e[a][1].end = Object.assign({}, e[o][1].end)))
        : (e[a][1] = i),
      e.push(["exit", i, t]),
      e
    );
  }
  function su(e, t, n) {
    let a = this,
      r = a.events.length,
      o,
      i;
    for (; r--; )
      if (
        a.events[r][1].type !== "lineEnding" &&
        a.events[r][1].type !== "linePrefix" &&
        a.events[r][1].type !== "content"
      ) {
        i = a.events[r][1].type === "paragraph";
        break;
      }
    return l;
    function l(c) {
      return !a.parser.lazy[a.now().line] && (a.interrupt || i)
        ? (e.enter("setextHeadingLine"),
          e.enter("setextHeadingLineSequence"),
          (o = c),
          s(c))
        : n(c);
    }
    function s(c) {
      return c === o
        ? (e.consume(c), s)
        : (e.exit("setextHeadingLineSequence"), Z(e, u, "lineSuffix")(c));
    }
    function u(c) {
      return c === null || D(c) ? (e.exit("setextHeadingLine"), t(c)) : n(c);
    }
  }
  var Ur = { tokenize: uu };
  function uu(e) {
    let t = this,
      n = e.attempt(
        c5,
        a,
        e.attempt(
          this.parser.constructs.flowInitial,
          r,
          Z(
            e,
            e.attempt(this.parser.constructs.flow, r, e.attempt(p0, r)),
            "linePrefix"
          )
        )
      );
    return n;
    function a(o) {
      if (o === null) {
        e.consume(o);
        return;
      }
      return (
        e.enter("lineEndingBlank"),
        e.consume(o),
        e.exit("lineEndingBlank"),
        (t.currentConstruct = void 0),
        n
      );
    }
    function r(o) {
      if (o === null) {
        e.consume(o);
        return;
      }
      return (
        e.enter("lineEnding"),
        e.consume(o),
        e.exit("lineEnding"),
        (t.currentConstruct = void 0),
        n
      );
    }
  }
  var $r = { resolveAll: Wr() },
    qr = Kr("string"),
    Gr = Kr("text");
  function Kr(e) {
    return { tokenize: t, resolveAll: Wr(e === "text" ? du : void 0) };
    function t(n) {
      let a = this,
        r = this.parser.constructs[e],
        o = n.attempt(r, i, l);
      return i;
      function i(c) {
        return u(c) ? o(c) : l(c);
      }
      function l(c) {
        if (c === null) {
          n.consume(c);
          return;
        }
        return n.enter("data"), n.consume(c), s;
      }
      function s(c) {
        return u(c) ? (n.exit("data"), o(c)) : (n.consume(c), s);
      }
      function u(c) {
        if (c === null) return !0;
        let h = r[c],
          p = -1;
        if (h)
          for (; ++p < h.length; ) {
            let d = h[p];
            if (!d.previous || d.previous.call(a, a.previous)) return !0;
          }
        return !1;
      }
    }
  }
  function Wr(e) {
    return t;
    function t(n, a) {
      let r = -1,
        o;
      for (; ++r <= n.length; )
        o === void 0
          ? n[r] && n[r][1].type === "data" && ((o = r), r++)
          : (!n[r] || n[r][1].type !== "data") &&
            (r !== o + 2 &&
              ((n[o][1].end = n[r - 1][1].end),
              n.splice(o + 2, r - o - 2),
              (r = o + 2)),
            (o = void 0));
      return e ? e(n, a) : n;
    }
  }
  function du(e, t) {
    let n = 0;
    for (; ++n <= e.length; )
      if (
        (n === e.length || e[n][1].type === "lineEnding") &&
        e[n - 1][1].type === "data"
      ) {
        let a = e[n - 1][1],
          r = t.sliceStream(a),
          o = r.length,
          i = -1,
          l = 0,
          s;
        for (; o--; ) {
          let u = r[o];
          if (typeof u == "string") {
            for (i = u.length; u.charCodeAt(i - 1) === 32; ) l++, i--;
            if (i) break;
            i = -1;
          } else if (u === -2) (s = !0), l++;
          else if (u !== -1) {
            o++;
            break;
          }
        }
        if (l) {
          let u = {
            type:
              n === e.length || s || l < 2 ? "lineSuffix" : "hardBreakTrailing",
            start: {
              line: a.end.line,
              column: a.end.column - l,
              offset: a.end.offset - l,
              _index: a.start._index + o,
              _bufferIndex: o ? i : a.start._bufferIndex + i,
            },
            end: Object.assign({}, a.end),
          };
          (a.end = Object.assign({}, u.start)),
            a.start.offset === a.end.offset
              ? Object.assign(a, u)
              : (e.splice(n, 0, ["enter", u, t], ["exit", u, t]), (n += 2));
        }
        n++;
      }
    return e;
  }
  function Yr(e, t, n) {
    let a = Object.assign(
        n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 },
        { _index: 0, _bufferIndex: -1 }
      ),
      r = {},
      o = [],
      i = [],
      l = [],
      s = !0,
      u = {
        consume: y,
        enter: x,
        exit: E,
        attempt: L(z),
        check: L(N),
        interrupt: L(N, { interrupt: !0 }),
      },
      c = {
        previous: null,
        code: null,
        containerState: {},
        events: [],
        parser: e,
        sliceStream: b,
        sliceSerialize: g,
        now: v,
        defineSkip: _,
        write: d,
      },
      h = t.tokenize.call(c, u),
      p;
    return t.resolveAll && o.push(t), c;
    function d(I) {
      return (
        (i = ze(i, I)),
        C(),
        i[i.length - 1] !== null
          ? []
          : (W(t, 0), (c.events = H5(o, c.events, c)), c.events)
      );
    }
    function g(I, F) {
      return hu(b(I), F);
    }
    function b(I) {
      return pu(i, I);
    }
    function v() {
      return Object.assign({}, a);
    }
    function _(I) {
      (r[I.line] = I.column), $();
    }
    function C() {
      let I;
      for (; a._index < i.length; ) {
        let F = i[a._index];
        if (typeof F == "string")
          for (
            I = a._index, a._bufferIndex < 0 && (a._bufferIndex = 0);
            a._index === I && a._bufferIndex < F.length;

          )
            M(F.charCodeAt(a._bufferIndex));
        else M(F);
      }
    }
    function M(I) {
      (s = void 0), (p = I), (h = h(I));
    }
    function y(I) {
      D(I)
        ? (a.line++, (a.column = 1), (a.offset += I === -3 ? 2 : 1), $())
        : I !== -1 && (a.column++, a.offset++),
        a._bufferIndex < 0
          ? a._index++
          : (a._bufferIndex++,
            a._bufferIndex === i[a._index].length &&
              ((a._bufferIndex = -1), a._index++)),
        (c.previous = I),
        (s = !0);
    }
    function x(I, F) {
      let J = F || {};
      return (
        (J.type = I),
        (J.start = v()),
        c.events.push(["enter", J, c]),
        l.push(J),
        J
      );
    }
    function E(I) {
      let F = l.pop();
      return (F.end = v()), c.events.push(["exit", F, c]), F;
    }
    function z(I, F) {
      W(I, F.from);
    }
    function N(I, F) {
      F.restore();
    }
    function L(I, F) {
      return J;
      function J(w, R, T) {
        let B, q, m, f;
        return Array.isArray(w) ? pe(w) : "tokenize" in w ? pe([w]) : He(w);
        function He(me) {
          return ne;
          function ne(ke) {
            let qe = ke !== null && me[ke],
              Te = ke !== null && me.null,
              h5 = [
                ...(Array.isArray(qe) ? qe : qe ? [qe] : []),
                ...(Array.isArray(Te) ? Te : Te ? [Te] : []),
              ];
            return pe(h5)(ke);
          }
        }
        function pe(me) {
          return (B = me), (q = 0), me.length === 0 ? T : _e(me[q]);
        }
        function _e(me) {
          return ne;
          function ne(ke) {
            return (
              (f = O()),
              (m = me),
              me.partial || (c.currentConstruct = me),
              me.name && c.parser.constructs.disable.null.includes(me.name)
                ? Ie(ke)
                : me.tokenize.call(
                    F ? Object.assign(Object.create(c), F) : c,
                    u,
                    Ye,
                    Ie
                  )(ke)
            );
          }
        }
        function Ye(me) {
          return (s = !0), I(m, f), R;
        }
        function Ie(me) {
          return (s = !0), f.restore(), ++q < B.length ? _e(B[q]) : T;
        }
      }
    }
    function W(I, F) {
      I.resolveAll && !o.includes(I) && o.push(I),
        I.resolve &&
          ye(c.events, F, c.events.length - F, I.resolve(c.events.slice(F), c)),
        I.resolveTo && (c.events = I.resolveTo(c.events, c));
    }
    function O() {
      let I = v(),
        F = c.previous,
        J = c.currentConstruct,
        w = c.events.length,
        R = Array.from(l);
      return { restore: T, from: w };
      function T() {
        (a = I),
          (c.previous = F),
          (c.currentConstruct = J),
          (c.events.length = w),
          (l = R),
          $();
      }
    }
    function $() {
      a.line in r &&
        a.column < 2 &&
        ((a.column = r[a.line]), (a.offset += r[a.line] - 1));
    }
  }
  function pu(e, t) {
    let n = t.start._index,
      a = t.start._bufferIndex,
      r = t.end._index,
      o = t.end._bufferIndex,
      i;
    return (
      n === r
        ? (i = [e[n].slice(a, o)])
        : ((i = e.slice(n, r)),
          a > -1 && (i[0] = i[0].slice(a)),
          o > 0 && i.push(e[r].slice(0, o))),
      i
    );
  }
  function hu(e, t) {
    let n = -1,
      a = [],
      r;
    for (; ++n < e.length; ) {
      let o = e[n],
        i;
      if (typeof o == "string") i = o;
      else
        switch (o) {
          case -5: {
            i = "\r";
            break;
          }
          case -4: {
            i = `
`;
            break;
          }
          case -3: {
            i = `\r
`;
            break;
          }
          case -2: {
            i = t ? " " : "	";
            break;
          }
          case -1: {
            if (!t && r) continue;
            i = " ";
            break;
          }
          default:
            i = String.fromCharCode(o);
        }
      (r = o === -2), a.push(i);
    }
    return a.join("");
  }
  var A0 = {};
  pn(A0, {
    attentionMarkers: () => Au,
    contentInitial: () => fu,
    disable: () => yu,
    document: () => mu,
    flow: () => vu,
    flowInitial: () => gu,
    insideSpan: () => _u,
    string: () => bu,
    text: () => Eu,
  });
  var mu = {
      [42]: xe,
      [43]: xe,
      [45]: xe,
      [48]: xe,
      [49]: xe,
      [50]: xe,
      [51]: xe,
      [52]: xe,
      [53]: xe,
      [54]: xe,
      [55]: xe,
      [56]: xe,
      [57]: xe,
      [62]: Dt,
    },
    fu = { [91]: h0 },
    gu = { [-2]: st, [-1]: st, [32]: st },
    vu = {
      [35]: f0,
      [42]: A5,
      [45]: [Gt, A5],
      [60]: v0,
      [61]: Gt,
      [95]: A5,
      [96]: Pt,
      [126]: Pt,
    },
    bu = { [38]: Ft, [92]: Vt },
    Eu = {
      [-5]: ut,
      [-4]: ut,
      [-3]: ut,
      [33]: E0,
      [38]: Ft,
      [42]: ct,
      [60]: [u0, b0],
      [91]: _0,
      [92]: [m0, Vt],
      [93]: _5,
      [95]: ct,
      [96]: d0,
    },
    _u = { null: [ct, $r] },
    Au = { null: [42, 95] },
    yu = { null: [] };
  function Qr(e = {}) {
    let t = Cr([A0].concat(e.extensions || [])),
      n = {
        defined: [],
        lazy: {},
        constructs: t,
        content: a(Hr),
        document: a(Vr),
        flow: a(Ur),
        string: a(qr),
        text: a(Gr),
      };
    return n;
    function a(r) {
      return o;
      function o(i) {
        return Yr(n, r, i);
      }
    }
  }
  var Zr = /[\0\t\n\r]/g;
  function Xr() {
    let e = 1,
      t = "",
      n = !0,
      a;
    return r;
    function r(o, i, l) {
      let s = [],
        u,
        c,
        h,
        p,
        d;
      for (
        o = t + o.toString(i),
          h = 0,
          t = "",
          n && (o.charCodeAt(0) === 65279 && h++, (n = void 0));
        h < o.length;

      ) {
        if (
          ((Zr.lastIndex = h),
          (u = Zr.exec(o)),
          (p = u && u.index !== void 0 ? u.index : o.length),
          (d = o.charCodeAt(p)),
          !u)
        ) {
          t = o.slice(h);
          break;
        }
        if (d === 10 && h === p && a) s.push(-3), (a = void 0);
        else
          switch (
            (a && (s.push(-5), (a = void 0)),
            h < p && (s.push(o.slice(h, p)), (e += p - h)),
            d)
          ) {
            case 0: {
              s.push(65533), e++;
              break;
            }
            case 9: {
              for (c = Math.ceil(e / 4) * 4, s.push(-2); e++ < c; ) s.push(-1);
              break;
            }
            case 10: {
              s.push(-4), (e = 1);
              break;
            }
            default:
              (a = !0), (e = 1);
          }
        h = p + 1;
      }
      return l && (a && s.push(-5), t && s.push(t), s.push(null)), s;
    }
  }
  function jr(e) {
    for (; !Bt(e); );
    return e;
  }
  function Kt(e, t) {
    let n = Number.parseInt(e, t);
    return n < 9 ||
      n === 11 ||
      (n > 13 && n < 32) ||
      (n > 126 && n < 160) ||
      (n > 55295 && n < 57344) ||
      (n > 64975 && n < 65008) ||
      (n & 65535) === 65535 ||
      (n & 65535) === 65534 ||
      n > 1114111
      ? "\uFFFD"
      : String.fromCharCode(n);
  }
  var xu = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function Jr(e) {
    return e.replace(xu, wu);
  }
  function wu(e, t, n) {
    if (t) return t;
    if (n.charCodeAt(0) === 35) {
      let r = n.charCodeAt(1),
        o = r === 120 || r === 88;
      return Kt(n.slice(o ? 2 : 1), o ? 16 : 10);
    }
    return D5(n) || e;
  }
  var y0 = {}.hasOwnProperty,
    x0 = function (e, t, n) {
      return (
        typeof t != "string" && ((n = t), (t = void 0)),
        Mu(n)(jr(Qr(n).document().write(Xr()(e, t, !0))))
      );
    };
  function Mu(e = {}) {
    let t = t2(
        {
          transforms: [],
          canContainEols: [
            "emphasis",
            "fragment",
            "heading",
            "paragraph",
            "strong",
          ],
          enter: {
            autolink: s(m5),
            autolinkProtocol: $,
            autolinkEmail: $,
            atxHeading: s(K),
            blockQuote: s(Te),
            characterEscape: $,
            characterReference: $,
            codeFenced: s(h5),
            codeFencedFenceInfo: u,
            codeFencedFenceMeta: u,
            codeIndented: s(h5, u),
            codeText: s(Qe, u),
            codeTextData: $,
            data: $,
            codeFlowValue: $,
            definition: s(C1),
            definitionDestinationString: u,
            definitionLabelString: u,
            definitionTitleString: u,
            emphasis: s(B5),
            hardBreakEscape: s(U5),
            hardBreakTrailing: s(U5),
            htmlFlow: s(ge, u),
            htmlFlowData: $,
            htmlText: s(ge, u),
            htmlTextData: $,
            image: s(ce),
            label: u,
            link: s(m5),
            listItem: s($5),
            listItemValue: b,
            listOrdered: s(Ze, g),
            listUnordered: s(Ze),
            paragraph: s(q5),
            reference: Ye,
            referenceString: u,
            resourceDestinationString: u,
            resourceTitleString: u,
            setextHeading: s(K),
            strong: s(H),
            thematicBreak: s(j),
          },
          exit: {
            atxHeading: h(),
            atxHeadingSequence: N,
            autolink: h(),
            autolinkEmail: qe,
            autolinkProtocol: ke,
            blockQuote: h(),
            characterEscapeValue: I,
            characterReferenceMarkerHexadecimal: me,
            characterReferenceMarkerNumeric: me,
            characterReferenceValue: ne,
            codeFenced: h(M),
            codeFencedFence: C,
            codeFencedFenceInfo: v,
            codeFencedFenceMeta: _,
            codeFlowValue: I,
            codeIndented: h(y),
            codeText: h(T),
            codeTextData: I,
            data: I,
            definition: h(),
            definitionDestinationString: z,
            definitionLabelString: x,
            definitionTitleString: E,
            emphasis: h(),
            hardBreakEscape: h(J),
            hardBreakTrailing: h(J),
            htmlFlow: h(w),
            htmlFlowData: I,
            htmlText: h(R),
            htmlTextData: I,
            image: h(q),
            label: f,
            labelText: m,
            lineEnding: F,
            link: h(B),
            listItem: h(),
            listOrdered: h(),
            listUnordered: h(),
            paragraph: h(),
            referenceString: Ie,
            resourceDestinationString: He,
            resourceTitleString: pe,
            resource: _e,
            setextHeading: h(O),
            setextHeadingLineSequence: W,
            setextHeadingText: L,
            strong: h(),
            thematicBreak: h(),
          },
        },
        e.mdastExtensions || []
      ),
      n = {};
    return a;
    function a(A) {
      let k = { type: "root", children: [] },
        U = [k],
        ae = [],
        Se = [],
        G5 = {
          stack: U,
          tokenStack: ae,
          config: t,
          enter: c,
          exit: p,
          buffer: u,
          resume: d,
          setData: o,
          getData: i,
        },
        ue = -1;
      for (; ++ue < A.length; )
        if (
          A[ue][1].type === "listOrdered" ||
          A[ue][1].type === "listUnordered"
        )
          if (A[ue][0] === "enter") Se.push(ue);
          else {
            let Ae = Se.pop();
            ue = r(A, Ae, ue);
          }
      for (ue = -1; ++ue < A.length; ) {
        let Ae = t[A[ue][0]];
        y0.call(Ae, A[ue][1].type) &&
          Ae[A[ue][1].type].call(
            Object.assign({ sliceSerialize: A[ue][2].sliceSerialize }, G5),
            A[ue][1]
          );
      }
      if (ae.length > 0) {
        let Ae = ae[ae.length - 1];
        (Ae[1] || e2).call(G5, void 0, Ae[0]);
      }
      for (
        k.position = {
          start: l(
            A.length > 0 ? A[0][1].start : { line: 1, column: 1, offset: 0 }
          ),
          end: l(
            A.length > 0
              ? A[A.length - 2][1].end
              : { line: 1, column: 1, offset: 0 }
          ),
        },
          ue = -1;
        ++ue < t.transforms.length;

      )
        k = t.transforms[ue](k) || k;
      return k;
    }
    function r(A, k, U) {
      let ae = k - 1,
        Se = -1,
        G5 = !1,
        ue,
        Ae,
        k5,
        K5;
      for (; ++ae <= U; ) {
        let ve = A[ae];
        if (
          (ve[1].type === "listUnordered" ||
          ve[1].type === "listOrdered" ||
          ve[1].type === "blockQuote"
            ? (ve[0] === "enter" ? Se++ : Se--, (K5 = void 0))
            : ve[1].type === "lineEndingBlank"
            ? ve[0] === "enter" &&
              (ue && !K5 && !Se && !k5 && (k5 = ae), (K5 = void 0))
            : ve[1].type === "linePrefix" ||
              ve[1].type === "listItemValue" ||
              ve[1].type === "listItemMarker" ||
              ve[1].type === "listItemPrefix" ||
              ve[1].type === "listItemPrefixWhitespace" ||
              (K5 = void 0),
          (!Se && ve[0] === "enter" && ve[1].type === "listItemPrefix") ||
            (Se === -1 &&
              ve[0] === "exit" &&
              (ve[1].type === "listUnordered" || ve[1].type === "listOrdered")))
        ) {
          if (ue) {
            let R1 = ae;
            for (Ae = void 0; R1--; ) {
              let je = A[R1];
              if (
                je[1].type === "lineEnding" ||
                je[1].type === "lineEndingBlank"
              ) {
                if (je[0] === "exit") continue;
                Ae && ((A[Ae][1].type = "lineEndingBlank"), (G5 = !0)),
                  (je[1].type = "lineEnding"),
                  (Ae = R1);
              } else if (
                !(
                  je[1].type === "linePrefix" ||
                  je[1].type === "blockQuotePrefix" ||
                  je[1].type === "blockQuotePrefixWhitespace" ||
                  je[1].type === "blockQuoteMarker" ||
                  je[1].type === "listItemIndent"
                )
              )
                break;
            }
            k5 && (!Ae || k5 < Ae) && (ue._spread = !0),
              (ue.end = Object.assign({}, Ae ? A[Ae][1].start : ve[1].end)),
              A.splice(Ae || ae, 0, ["exit", ue, ve[2]]),
              ae++,
              U++;
          }
          ve[1].type === "listItemPrefix" &&
            ((ue = {
              type: "listItem",
              _spread: !1,
              start: Object.assign({}, ve[1].start),
            }),
            A.splice(ae, 0, ["enter", ue, ve[2]]),
            ae++,
            U++,
            (k5 = void 0),
            (K5 = !0));
        }
      }
      return (A[k][1]._spread = G5), U;
    }
    function o(A, k) {
      n[A] = k;
    }
    function i(A) {
      return n[A];
    }
    function l(A) {
      return { line: A.line, column: A.column, offset: A.offset };
    }
    function s(A, k) {
      return U;
      function U(ae) {
        c.call(this, A(ae), ae), k && k.call(this, ae);
      }
    }
    function u() {
      this.stack.push({ type: "fragment", children: [] });
    }
    function c(A, k, U) {
      return (
        this.stack[this.stack.length - 1].children.push(A),
        this.stack.push(A),
        this.tokenStack.push([k, U]),
        (A.position = { start: l(k.start) }),
        A
      );
    }
    function h(A) {
      return k;
      function k(U) {
        A && A.call(this, U), p.call(this, U);
      }
    }
    function p(A, k) {
      let U = this.stack.pop(),
        ae = this.tokenStack.pop();
      if (ae)
        ae[0].type !== A.type &&
          (k ? k.call(this, A, ae[0]) : (ae[1] || e2).call(this, A, ae[0]));
      else
        throw new Error(
          "Cannot close `" +
            A.type +
            "` (" +
            v5({ start: A.start, end: A.end }) +
            "): it\u2019s not open"
        );
      return (U.position.end = l(A.end)), U;
    }
    function d() {
      return Ir(this.stack.pop());
    }
    function g() {
      o("expectingFirstListItemValue", !0);
    }
    function b(A) {
      if (i("expectingFirstListItemValue")) {
        let k = this.stack[this.stack.length - 2];
        (k.start = Number.parseInt(this.sliceSerialize(A), 10)),
          o("expectingFirstListItemValue");
      }
    }
    function v() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.lang = A;
    }
    function _() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.meta = A;
    }
    function C() {
      i("flowCodeInside") || (this.buffer(), o("flowCodeInside", !0));
    }
    function M() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      (k.value = A.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, "")),
        o("flowCodeInside");
    }
    function y() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.value = A.replace(/(\r?\n|\r)$/g, "");
    }
    function x(A) {
      let k = this.resume(),
        U = this.stack[this.stack.length - 1];
      (U.label = k), (U.identifier = t5(this.sliceSerialize(A)).toLowerCase());
    }
    function E() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.title = A;
    }
    function z() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.url = A;
    }
    function N(A) {
      let k = this.stack[this.stack.length - 1];
      if (!k.depth) {
        let U = this.sliceSerialize(A).length;
        k.depth = U;
      }
    }
    function L() {
      o("setextHeadingSlurpLineEnding", !0);
    }
    function W(A) {
      let k = this.stack[this.stack.length - 1];
      k.depth = this.sliceSerialize(A).charCodeAt(0) === 61 ? 1 : 2;
    }
    function O() {
      o("setextHeadingSlurpLineEnding");
    }
    function $(A) {
      let k = this.stack[this.stack.length - 1],
        U = k.children[k.children.length - 1];
      (!U || U.type !== "text") &&
        ((U = P()), (U.position = { start: l(A.start) }), k.children.push(U)),
        this.stack.push(U);
    }
    function I(A) {
      let k = this.stack.pop();
      (k.value += this.sliceSerialize(A)), (k.position.end = l(A.end));
    }
    function F(A) {
      let k = this.stack[this.stack.length - 1];
      if (i("atHardBreak")) {
        let U = k.children[k.children.length - 1];
        (U.position.end = l(A.end)), o("atHardBreak");
        return;
      }
      !i("setextHeadingSlurpLineEnding") &&
        t.canContainEols.includes(k.type) &&
        ($.call(this, A), I.call(this, A));
    }
    function J() {
      o("atHardBreak", !0);
    }
    function w() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.value = A;
    }
    function R() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.value = A;
    }
    function T() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.value = A;
    }
    function B() {
      let A = this.stack[this.stack.length - 1];
      i("inReference")
        ? ((A.type += "Reference"),
          (A.referenceType = i("referenceType") || "shortcut"),
          delete A.url,
          delete A.title)
        : (delete A.identifier, delete A.label),
        o("referenceType");
    }
    function q() {
      let A = this.stack[this.stack.length - 1];
      i("inReference")
        ? ((A.type += "Reference"),
          (A.referenceType = i("referenceType") || "shortcut"),
          delete A.url,
          delete A.title)
        : (delete A.identifier, delete A.label),
        o("referenceType");
    }
    function m(A) {
      let k = this.stack[this.stack.length - 2],
        U = this.sliceSerialize(A);
      (k.label = Jr(U)), (k.identifier = t5(U).toLowerCase());
    }
    function f() {
      let A = this.stack[this.stack.length - 1],
        k = this.resume(),
        U = this.stack[this.stack.length - 1];
      o("inReference", !0),
        U.type === "link" ? (U.children = A.children) : (U.alt = k);
    }
    function He() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.url = A;
    }
    function pe() {
      let A = this.resume(),
        k = this.stack[this.stack.length - 1];
      k.title = A;
    }
    function _e() {
      o("inReference");
    }
    function Ye() {
      o("referenceType", "collapsed");
    }
    function Ie(A) {
      let k = this.resume(),
        U = this.stack[this.stack.length - 1];
      (U.label = k),
        (U.identifier = t5(this.sliceSerialize(A)).toLowerCase()),
        o("referenceType", "full");
    }
    function me(A) {
      o("characterReferenceType", A.type);
    }
    function ne(A) {
      let k = this.sliceSerialize(A),
        U = i("characterReferenceType"),
        ae;
      U
        ? ((ae = Kt(k, U === "characterReferenceMarkerNumeric" ? 10 : 16)),
          o("characterReferenceType"))
        : (ae = D5(k));
      let Se = this.stack.pop();
      (Se.value += ae), (Se.position.end = l(A.end));
    }
    function ke(A) {
      I.call(this, A);
      let k = this.stack[this.stack.length - 1];
      k.url = this.sliceSerialize(A);
    }
    function qe(A) {
      I.call(this, A);
      let k = this.stack[this.stack.length - 1];
      k.url = "mailto:" + this.sliceSerialize(A);
    }
    function Te() {
      return { type: "blockquote", children: [] };
    }
    function h5() {
      return { type: "code", lang: null, meta: null, value: "" };
    }
    function Qe() {
      return { type: "inlineCode", value: "" };
    }
    function C1() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: "",
      };
    }
    function B5() {
      return { type: "emphasis", children: [] };
    }
    function K() {
      return { type: "heading", depth: void 0, children: [] };
    }
    function U5() {
      return { type: "break" };
    }
    function ge() {
      return { type: "html", value: "" };
    }
    function ce() {
      return { type: "image", title: null, url: "", alt: null };
    }
    function m5() {
      return { type: "link", title: null, url: "", children: [] };
    }
    function Ze(A) {
      return {
        type: "list",
        ordered: A.type === "listOrdered",
        start: null,
        spread: A._spread,
        children: [],
      };
    }
    function $5(A) {
      return {
        type: "listItem",
        spread: A._spread,
        checked: null,
        children: [],
      };
    }
    function q5() {
      return { type: "paragraph", children: [] };
    }
    function H() {
      return { type: "strong", children: [] };
    }
    function P() {
      return { type: "text", value: "" };
    }
    function j() {
      return { type: "thematicBreak" };
    }
  }
  function t2(e, t) {
    let n = -1;
    for (; ++n < t.length; ) {
      let a = t[n];
      Array.isArray(a) ? t2(e, a) : zu(e, a);
    }
    return e;
  }
  function zu(e, t) {
    let n;
    for (n in t)
      if (y0.call(t, n)) {
        let a = n === "canContainEols" || n === "transforms",
          o = (y0.call(e, n) ? e[n] : void 0) || (e[n] = a ? [] : {}),
          i = t[n];
        i && (a ? (e[n] = [...o, ...i]) : Object.assign(o, i));
      }
  }
  function e2(e, t) {
    throw e
      ? new Error(
          "Cannot close `" +
            e.type +
            "` (" +
            v5({ start: e.start, end: e.end }) +
            "): a different token (`" +
            t.type +
            "`, " +
            v5({ start: t.start, end: t.end }) +
            ") is open"
        )
      : new Error(
          "Cannot close document, a token (`" +
            t.type +
            "`, " +
            v5({ start: t.start, end: t.end }) +
            ") is still open"
        );
  }
  function w0(e) {
    Object.assign(this, {
      Parser: (n) => {
        let a = this.data("settings");
        return x0(
          n,
          Object.assign({}, a, e, {
            extensions: this.data("micromarkExtensions") || [],
            mdastExtensions: this.data("fromMarkdownExtensions") || [],
          })
        );
      },
    });
  }
  var n2 = w0;
  var te = function (e, t, n) {
    var a = { type: String(e) };
    return (
      n == null && (typeof t == "string" || Array.isArray(t))
        ? (n = t)
        : Object.assign(a, t),
      Array.isArray(n) ? (a.children = n) : n != null && (a.value = String(n)),
      a
    );
  };
  var Wt = {}.hasOwnProperty;
  function Iu(e, t) {
    let n = t.data || {};
    return "value" in t &&
      !(
        Wt.call(n, "hName") ||
        Wt.call(n, "hProperties") ||
        Wt.call(n, "hChildren")
      )
      ? e.augment(t, te("text", t.value))
      : e(t, "div", re(e, t));
  }
  function M0(e, t, n) {
    let a = t && t.type,
      r;
    if (!a) throw new Error("Expected node, got `" + t + "`");
    return (
      Wt.call(e.handlers, a)
        ? (r = e.handlers[a])
        : e.passThrough && e.passThrough.includes(a)
        ? (r = ku)
        : (r = e.unknownHandler),
      (typeof r == "function" ? r : Iu)(e, t, n)
    );
  }
  function ku(e, t) {
    return "children" in t ? { ...t, children: re(e, t) } : t;
  }
  function re(e, t) {
    let n = [];
    if ("children" in t) {
      let a = t.children,
        r = -1;
      for (; ++r < a.length; ) {
        let o = M0(e, a[r], t);
        if (o) {
          if (
            r &&
            a[r - 1].type === "break" &&
            (!Array.isArray(o) &&
              o.type === "text" &&
              (o.value = o.value.replace(/^\s+/, "")),
            !Array.isArray(o) && o.type === "element")
          ) {
            let i = o.children[0];
            i && i.type === "text" && (i.value = i.value.replace(/^\s+/, ""));
          }
          Array.isArray(o) ? n.push(...o) : n.push(o);
        }
      }
    }
    return n;
  }
  var dt = function (e) {
    if (e == null) return Nu;
    if (typeof e == "string") return Ru(e);
    if (typeof e == "object") return Array.isArray(e) ? Su(e) : Cu(e);
    if (typeof e == "function") return Yt(e);
    throw new Error("Expected function, string, or object as test");
  };
  function Su(e) {
    let t = [],
      n = -1;
    for (; ++n < e.length; ) t[n] = dt(e[n]);
    return Yt(a);
    function a(...r) {
      let o = -1;
      for (; ++o < t.length; ) if (t[o].call(this, ...r)) return !0;
      return !1;
    }
  }
  function Cu(e) {
    return Yt(t);
    function t(n) {
      let a;
      for (a in e) if (n[a] !== e[a]) return !1;
      return !0;
    }
  }
  function Ru(e) {
    return Yt(t);
    function t(n) {
      return n && n.type === e;
    }
  }
  function Yt(e) {
    return t;
    function t(...n) {
      return Boolean(e.call(this, ...n));
    }
  }
  function Nu() {
    return !0;
  }
  var Lu = !0,
    Tu = "skip",
    a2 = !1,
    r2 = function (e, t, n, a) {
      typeof t == "function" &&
        typeof n != "function" &&
        ((a = n), (n = t), (t = null));
      let r = dt(t),
        o = a ? -1 : 1;
      i(e, null, [])();
      function i(l, s, u) {
        let c = typeof l == "object" && l !== null ? l : {},
          h;
        return (
          typeof c.type == "string" &&
            ((h =
              typeof c.tagName == "string"
                ? c.tagName
                : typeof c.name == "string"
                ? c.name
                : void 0),
            Object.defineProperty(p, "name", {
              value: "node (" + (c.type + (h ? "<" + h + ">" : "")) + ")",
            })),
          p
        );
        function p() {
          let d = [],
            g,
            b,
            v;
          if (
            (!t || r(l, s, u[u.length - 1] || null)) &&
            ((d = Ou(n(l, u))), d[0] === a2)
          )
            return d;
          if (l.children && d[0] !== Tu)
            for (
              b = (a ? l.children.length : -1) + o, v = u.concat(l);
              b > -1 && b < l.children.length;

            ) {
              if (((g = i(l.children[b], b, v)()), g[0] === a2)) return g;
              b = typeof g[1] == "number" ? g[1] : b + o;
            }
          return d;
        }
      }
    };
  function Ou(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [Lu, e] : [e];
  }
  var s5 = function (e, t, n, a) {
    typeof t == "function" &&
      typeof n != "function" &&
      ((a = n), (n = t), (t = null)),
      r2(e, t, r, a);
    function r(o, i) {
      let l = i[i.length - 1];
      return n(o, l ? l.children.indexOf(o) : null, l);
    }
  };
  var Qt = o2("start"),
    Zt = o2("end");
  function o2(e) {
    return t;
    function t(n) {
      let a = (n && n.position && n.position[e]) || {};
      return {
        line: a.line || null,
        column: a.column || null,
        offset: a.offset > -1 ? a.offset : null,
      };
    }
  }
  function i2(e) {
    return (
      !e ||
      !e.position ||
      !e.position.start ||
      !e.position.start.line ||
      !e.position.start.column ||
      !e.position.end ||
      !e.position.end.line ||
      !e.position.end.column
    );
  }
  var l2 = {}.hasOwnProperty;
  function s2(e) {
    let t = Object.create(null);
    if (!e || !e.type) throw new Error("mdast-util-definitions expected node");
    return (
      s5(e, "definition", (a) => {
        let r = c2(a.identifier);
        r && !l2.call(t, r) && (t[r] = a);
      }),
      n
    );
    function n(a) {
      let r = c2(a);
      return r && l2.call(t, r) ? t[r] : null;
    }
  }
  function c2(e) {
    return String(e || "").toUpperCase();
  }
  function Pe(e) {
    let t = [],
      n = -1,
      a = 0,
      r = 0;
    for (; ++n < e.length; ) {
      let o = e.charCodeAt(n),
        i = "";
      if (o === 37 && Ee(e.charCodeAt(n + 1)) && Ee(e.charCodeAt(n + 2))) r = 2;
      else if (o < 128)
        /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o)) ||
          (i = String.fromCharCode(o));
      else if (o > 55295 && o < 57344) {
        let l = e.charCodeAt(n + 1);
        o < 56320 && l > 56319 && l < 57344
          ? ((i = String.fromCharCode(o, l)), (r = 1))
          : (i = "\uFFFD");
      } else i = String.fromCharCode(o);
      i &&
        (t.push(e.slice(a, n), encodeURIComponent(i)),
        (a = n + r + 1),
        (i = "")),
        r && ((n += r), (r = 0));
    }
    return t.join("") + e.slice(a);
  }
  function Re(e, t) {
    let n = [],
      a = -1;
    for (
      t &&
      n.push(
        te(
          "text",
          `
`
        )
      );
      ++a < e.length;

    )
      a &&
        n.push(
          te(
            "text",
            `
`
          )
        ),
        n.push(e[a]);
    return (
      t &&
        e.length > 0 &&
        n.push(
          te(
            "text",
            `
`
          )
        ),
      n
    );
  }
  function u2(e) {
    let t = -1,
      n = [];
    for (; ++t < e.footnoteOrder.length; ) {
      let a = e.footnoteById[e.footnoteOrder[t].toUpperCase()];
      if (!a) continue;
      let r = re(e, a),
        o = String(a.identifier),
        i = Pe(o.toLowerCase()),
        l = 0,
        s = [];
      for (; ++l <= e.footnoteCounts[o]; ) {
        let h = {
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + e.clobberPrefix + "fnref-" + i + (l > 1 ? "-" + l : ""),
            dataFootnoteBackref: !0,
            className: ["data-footnote-backref"],
            ariaLabel: e.footnoteBackLabel,
          },
          children: [{ type: "text", value: "\u21A9" }],
        };
        l > 1 &&
          h.children.push({
            type: "element",
            tagName: "sup",
            children: [{ type: "text", value: String(l) }],
          }),
          s.length > 0 && s.push({ type: "text", value: " " }),
          s.push(h);
      }
      let u = r[r.length - 1];
      if (u && u.type === "element" && u.tagName === "p") {
        let h = u.children[u.children.length - 1];
        h && h.type === "text"
          ? (h.value += " ")
          : u.children.push({ type: "text", value: " " }),
          u.children.push(...s);
      } else r.push(...s);
      let c = {
        type: "element",
        tagName: "li",
        properties: { id: e.clobberPrefix + "fn-" + i },
        children: Re(r, !0),
      };
      a.position && (c.position = a.position), n.push(c);
    }
    return n.length === 0
      ? null
      : {
          type: "element",
          tagName: "section",
          properties: { dataFootnotes: !0, className: ["footnotes"] },
          children: [
            {
              type: "element",
              tagName: e.footnoteLabelTagName,
              properties: {
                ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
                id: "footnote-label",
              },
              children: [te("text", e.footnoteLabel)],
            },
            {
              type: "text",
              value: `
`,
            },
            {
              type: "element",
              tagName: "ol",
              properties: {},
              children: Re(n, !0),
            },
            {
              type: "text",
              value: `
`,
            },
          ],
        };
  }
  function d2(e, t) {
    return e(t, "blockquote", Re(re(e, t), !0));
  }
  function p2(e, t) {
    return [
      e(t, "br"),
      te(
        "text",
        `
`
      ),
    ];
  }
  function h2(e, t) {
    let n = t.value
        ? t.value +
          `
`
        : "",
      a = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
      r = {};
    a && (r.className = ["language-" + a]);
    let o = e(t, "code", r, [te("text", n)]);
    return t.meta && (o.data = { meta: t.meta }), e(t.position, "pre", [o]);
  }
  function m2(e, t) {
    return e(t, "del", re(e, t));
  }
  function f2(e, t) {
    return e(t, "em", re(e, t));
  }
  function Xt(e, t) {
    let n = String(t.identifier),
      a = Pe(n.toLowerCase()),
      r = e.footnoteOrder.indexOf(n),
      o;
    r === -1
      ? (e.footnoteOrder.push(n),
        (e.footnoteCounts[n] = 1),
        (o = e.footnoteOrder.length))
      : (e.footnoteCounts[n]++, (o = r + 1));
    let i = e.footnoteCounts[n];
    return e(t, "sup", [
      e(
        t.position,
        "a",
        {
          href: "#" + e.clobberPrefix + "fn-" + a,
          id: e.clobberPrefix + "fnref-" + a + (i > 1 ? "-" + i : ""),
          dataFootnoteRef: !0,
          ariaDescribedBy: "footnote-label",
        },
        [te("text", String(o))]
      ),
    ]);
  }
  function g2(e, t) {
    let n = e.footnoteById,
      a = 1;
    for (; a in n; ) a++;
    let r = String(a);
    return (
      (n[r] = {
        type: "footnoteDefinition",
        identifier: r,
        children: [{ type: "paragraph", children: t.children }],
        position: t.position,
      }),
      Xt(e, { type: "footnoteReference", identifier: r, position: t.position })
    );
  }
  function v2(e, t) {
    return e(t, "h" + t.depth, re(e, t));
  }
  function b2(e, t) {
    return e.dangerous ? e.augment(t, te("raw", t.value)) : null;
  }
  function jt(e, t) {
    let n = t.referenceType,
      a = "]";
    if (
      (n === "collapsed"
        ? (a += "[]")
        : n === "full" && (a += "[" + (t.label || t.identifier) + "]"),
      t.type === "imageReference")
    )
      return te("text", "![" + t.alt + a);
    let r = re(e, t),
      o = r[0];
    o && o.type === "text"
      ? (o.value = "[" + o.value)
      : r.unshift(te("text", "["));
    let i = r[r.length - 1];
    return i && i.type === "text" ? (i.value += a) : r.push(te("text", a)), r;
  }
  function E2(e, t) {
    let n = e.definition(t.identifier);
    if (!n) return jt(e, t);
    let a = { src: Pe(n.url || ""), alt: t.alt };
    return (
      n.title !== null && n.title !== void 0 && (a.title = n.title),
      e(t, "img", a)
    );
  }
  function _2(e, t) {
    let n = { src: Pe(t.url), alt: t.alt };
    return (
      t.title !== null && t.title !== void 0 && (n.title = t.title),
      e(t, "img", n)
    );
  }
  function A2(e, t) {
    return e(t, "code", [te("text", t.value.replace(/\r?\n|\r/g, " "))]);
  }
  function y2(e, t) {
    let n = e.definition(t.identifier);
    if (!n) return jt(e, t);
    let a = { href: Pe(n.url || "") };
    return (
      n.title !== null && n.title !== void 0 && (a.title = n.title),
      e(t, "a", a, re(e, t))
    );
  }
  function x2(e, t) {
    let n = { href: Pe(t.url) };
    return (
      t.title !== null && t.title !== void 0 && (n.title = t.title),
      e(t, "a", n, re(e, t))
    );
  }
  function w2(e, t, n) {
    let a = re(e, t),
      r = n ? Hu(n) : M2(t),
      o = {},
      i = [];
    if (typeof t.checked == "boolean") {
      let u;
      a[0] && a[0].type === "element" && a[0].tagName === "p"
        ? (u = a[0])
        : ((u = e(null, "p", [])), a.unshift(u)),
        u.children.length > 0 && u.children.unshift(te("text", " ")),
        u.children.unshift(
          e(null, "input", {
            type: "checkbox",
            checked: t.checked,
            disabled: !0,
          })
        ),
        (o.className = ["task-list-item"]);
    }
    let l = -1;
    for (; ++l < a.length; ) {
      let u = a[l];
      (r || l !== 0 || u.type !== "element" || u.tagName !== "p") &&
        i.push(
          te(
            "text",
            `
`
          )
        ),
        u.type === "element" && u.tagName === "p" && !r
          ? i.push(...u.children)
          : i.push(u);
    }
    let s = a[a.length - 1];
    return (
      s &&
        (r || !("tagName" in s) || s.tagName !== "p") &&
        i.push(
          te(
            "text",
            `
`
          )
        ),
      e(t, "li", o, i)
    );
  }
  function Hu(e) {
    let t = e.spread,
      n = e.children,
      a = -1;
    for (; !t && ++a < n.length; ) t = M2(n[a]);
    return Boolean(t);
  }
  function M2(e) {
    let t = e.spread;
    return t ?? e.children.length > 1;
  }
  function z2(e, t) {
    let n = {},
      a = t.ordered ? "ol" : "ul",
      r = re(e, t),
      o = -1;
    for (
      typeof t.start == "number" && t.start !== 1 && (n.start = t.start);
      ++o < r.length;

    ) {
      let i = r[o];
      if (
        i.type === "element" &&
        i.tagName === "li" &&
        i.properties &&
        Array.isArray(i.properties.className) &&
        i.properties.className.includes("task-list-item")
      ) {
        n.className = ["contains-task-list"];
        break;
      }
    }
    return e(t, a, n, Re(r, !0));
  }
  function I2(e, t) {
    return e(t, "p", re(e, t));
  }
  function k2(e, t) {
    return e.augment(t, te("root", Re(re(e, t))));
  }
  function S2(e, t) {
    return e(t, "strong", re(e, t));
  }
  function C2(e, t) {
    let n = t.children,
      a = -1,
      r = t.align || [],
      o = [];
    for (; ++a < n.length; ) {
      let i = n[a].children,
        l = a === 0 ? "th" : "td",
        s = [],
        u = -1,
        c = t.align ? r.length : i.length;
      for (; ++u < c; ) {
        let h = i[u];
        s.push(e(h, l, { align: r[u] }, h ? re(e, h) : []));
      }
      o[a] = e(n[a], "tr", Re(s, !0));
    }
    return e(
      t,
      "table",
      Re(
        [e(o[0].position, "thead", Re([o[0]], !0))].concat(
          o[1]
            ? e(
                { start: Qt(o[1]), end: Zt(o[o.length - 1]) },
                "tbody",
                Re(o.slice(1), !0)
              )
            : []
        ),
        !0
      )
    );
  }
  function N2(e) {
    let t = String(e),
      n = /\r?\n|\r/g,
      a = n.exec(t),
      r = 0,
      o = [];
    for (; a; )
      o.push(R2(t.slice(r, a.index), r > 0, !0), a[0]),
        (r = a.index + a[0].length),
        (a = n.exec(t));
    return o.push(R2(t.slice(r), r > 0, !1)), o.join("");
  }
  function R2(e, t, n) {
    let a = 0,
      r = e.length;
    if (t) {
      let o = e.codePointAt(a);
      for (; o === 9 || o === 32; ) a++, (o = e.codePointAt(a));
    }
    if (n) {
      let o = e.codePointAt(r - 1);
      for (; o === 9 || o === 32; ) r--, (o = e.codePointAt(r - 1));
    }
    return r > a ? e.slice(a, r) : "";
  }
  function L2(e, t) {
    return e.augment(t, te("text", N2(String(t.value))));
  }
  function T2(e, t) {
    return e(t, "hr");
  }
  var z0 = {
    blockquote: d2,
    break: p2,
    code: h2,
    delete: m2,
    emphasis: f2,
    footnoteReference: Xt,
    footnote: g2,
    heading: v2,
    html: b2,
    imageReference: E2,
    image: _2,
    inlineCode: A2,
    linkReference: y2,
    link: x2,
    listItem: w2,
    list: z2,
    paragraph: I2,
    root: k2,
    strong: S2,
    table: C2,
    text: L2,
    thematicBreak: T2,
    toml: Jt,
    yaml: Jt,
    definition: Jt,
    footnoteDefinition: Jt,
  };
  function Jt() {
    return null;
  }
  var Du = {}.hasOwnProperty;
  function Vu(e, t) {
    let n = t || {},
      a = n.allowDangerousHtml || !1,
      r = {};
    return (
      (i.dangerous = a),
      (i.clobberPrefix =
        n.clobberPrefix === void 0 || n.clobberPrefix === null
          ? "user-content-"
          : n.clobberPrefix),
      (i.footnoteLabel = n.footnoteLabel || "Footnotes"),
      (i.footnoteLabelTagName = n.footnoteLabelTagName || "h2"),
      (i.footnoteLabelProperties = n.footnoteLabelProperties || {
        className: ["sr-only"],
      }),
      (i.footnoteBackLabel = n.footnoteBackLabel || "Back to content"),
      (i.definition = s2(e)),
      (i.footnoteById = r),
      (i.footnoteOrder = []),
      (i.footnoteCounts = {}),
      (i.augment = o),
      (i.handlers = { ...z0, ...n.handlers }),
      (i.unknownHandler = n.unknownHandler),
      (i.passThrough = n.passThrough),
      s5(e, "footnoteDefinition", (l) => {
        let s = String(l.identifier).toUpperCase();
        Du.call(r, s) || (r[s] = l);
      }),
      i
    );
    function o(l, s) {
      if (l && "data" in l && l.data) {
        let u = l.data;
        u.hName &&
          (s.type !== "element" &&
            (s = {
              type: "element",
              tagName: "",
              properties: {},
              children: [],
            }),
          (s.tagName = u.hName)),
          s.type === "element" &&
            u.hProperties &&
            (s.properties = { ...s.properties, ...u.hProperties }),
          "children" in s &&
            s.children &&
            u.hChildren &&
            (s.children = u.hChildren);
      }
      if (l) {
        let u = "type" in l ? l : { position: l };
        i2(u) || (s.position = { start: Qt(u), end: Zt(u) });
      }
      return s;
    }
    function i(l, s, u, c) {
      return (
        Array.isArray(u) && ((c = u), (u = {})),
        o(l, {
          type: "element",
          tagName: s,
          properties: u || {},
          children: c || [],
        })
      );
    }
  }
  function e1(e, t) {
    let n = Vu(e, t),
      a = M0(n, e, null),
      r = u2(n);
    return (
      r &&
        a.children.push(
          te(
            "text",
            `
`
          ),
          r
        ),
      Array.isArray(a) ? { type: "root", children: a } : a
    );
  }
  var Fu = function (e, t) {
      return e && "run" in e ? Pu(e, t) : Bu(e || t);
    },
    I0 = Fu;
  function Pu(e, t) {
    return (n, a, r) => {
      e.run(e1(n, t), a, (o) => {
        r(o);
      });
    };
  }
  function Bu(e) {
    return (t) => e1(t, e);
  }
  var Y = Ve(U2(), 1);
  var n5 = class {
    constructor(t, n, a) {
      (this.property = t), (this.normal = n), a && (this.space = a);
    }
  };
  n5.prototype.property = {};
  n5.prototype.normal = {};
  n5.prototype.space = null;
  function k0(e, t) {
    let n = {},
      a = {},
      r = -1;
    for (; ++r < e.length; )
      Object.assign(n, e[r].property), Object.assign(a, e[r].normal);
    return new n5(n, a, t);
  }
  function pt(e) {
    return e.toLowerCase();
  }
  var we = class {
    constructor(t, n) {
      (this.property = t), (this.attribute = n);
    }
  };
  we.prototype.space = null;
  we.prototype.boolean = !1;
  we.prototype.booleanish = !1;
  we.prototype.overloadedBoolean = !1;
  we.prototype.number = !1;
  we.prototype.commaSeparated = !1;
  we.prototype.spaceSeparated = !1;
  we.prototype.commaOrSpaceSeparated = !1;
  we.prototype.mustUseProperty = !1;
  we.prototype.defined = !1;
  var ht = {};
  pn(ht, {
    boolean: () => X,
    booleanish: () => fe,
    commaOrSpaceSeparated: () => Ne,
    commaSeparated: () => u5,
    number: () => S,
    overloadedBoolean: () => S0,
    spaceSeparated: () => le,
  });
  var qu = 0,
    X = y5(),
    fe = y5(),
    S0 = y5(),
    S = y5(),
    le = y5(),
    u5 = y5(),
    Ne = y5();
  function y5() {
    return 2 ** ++qu;
  }
  var C0 = Object.keys(ht),
    x5 = class extends we {
      constructor(t, n, a, r) {
        let o = -1;
        if ((super(t, n), $2(this, "space", r), typeof a == "number"))
          for (; ++o < C0.length; ) {
            let i = C0[o];
            $2(this, C0[o], (a & ht[i]) === ht[i]);
          }
      }
    };
  x5.prototype.defined = !0;
  function $2(e, t, n) {
    n && (e[t] = n);
  }
  var Gu = {}.hasOwnProperty;
  function Be(e) {
    let t = {},
      n = {},
      a;
    for (a in e.properties)
      if (Gu.call(e.properties, a)) {
        let r = e.properties[a],
          o = new x5(a, e.transform(e.attributes || {}, a), r, e.space);
        e.mustUseProperty &&
          e.mustUseProperty.includes(a) &&
          (o.mustUseProperty = !0),
          (t[a] = o),
          (n[pt(a)] = a),
          (n[pt(o.attribute)] = a);
      }
    return new n5(t, n, e.space);
  }
  var R0 = Be({
    space: "xlink",
    transform(e, t) {
      return "xlink:" + t.slice(5).toLowerCase();
    },
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  });
  var N0 = Be({
    space: "xml",
    transform(e, t) {
      return "xml:" + t.slice(3).toLowerCase();
    },
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  });
  function t1(e, t) {
    return t in e ? e[t] : t;
  }
  function n1(e, t) {
    return t1(e, t.toLowerCase());
  }
  var L0 = Be({
    space: "xmlns",
    attributes: { xmlnsxlink: "xmlns:xlink" },
    transform: n1,
    properties: { xmlns: null, xmlnsXLink: null },
  });
  var T0 = Be({
    transform(e, t) {
      return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
    },
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: fe,
      ariaAutoComplete: null,
      ariaBusy: fe,
      ariaChecked: fe,
      ariaColCount: S,
      ariaColIndex: S,
      ariaColSpan: S,
      ariaControls: le,
      ariaCurrent: null,
      ariaDescribedBy: le,
      ariaDetails: null,
      ariaDisabled: fe,
      ariaDropEffect: le,
      ariaErrorMessage: null,
      ariaExpanded: fe,
      ariaFlowTo: le,
      ariaGrabbed: fe,
      ariaHasPopup: null,
      ariaHidden: fe,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: le,
      ariaLevel: S,
      ariaLive: null,
      ariaModal: fe,
      ariaMultiLine: fe,
      ariaMultiSelectable: fe,
      ariaOrientation: null,
      ariaOwns: le,
      ariaPlaceholder: null,
      ariaPosInSet: S,
      ariaPressed: fe,
      ariaReadOnly: fe,
      ariaRelevant: null,
      ariaRequired: fe,
      ariaRoleDescription: le,
      ariaRowCount: S,
      ariaRowIndex: S,
      ariaRowSpan: S,
      ariaSelected: fe,
      ariaSetSize: S,
      ariaSort: null,
      ariaValueMax: S,
      ariaValueMin: S,
      ariaValueNow: S,
      ariaValueText: null,
      role: null,
    },
  });
  var q2 = Be({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv",
    },
    transform: n1,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      abbr: null,
      accept: u5,
      acceptCharset: le,
      accessKey: le,
      action: null,
      allow: null,
      allowFullScreen: X,
      allowPaymentRequest: X,
      allowUserMedia: X,
      alt: null,
      as: null,
      async: X,
      autoCapitalize: null,
      autoComplete: le,
      autoFocus: X,
      autoPlay: X,
      capture: X,
      charSet: null,
      checked: X,
      cite: null,
      className: le,
      cols: S,
      colSpan: null,
      content: null,
      contentEditable: fe,
      controls: X,
      controlsList: le,
      coords: S | u5,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: X,
      defer: X,
      dir: null,
      dirName: null,
      disabled: X,
      download: S0,
      draggable: fe,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: X,
      formTarget: null,
      headers: le,
      height: S,
      hidden: X,
      high: S,
      href: null,
      hrefLang: null,
      htmlFor: le,
      httpEquiv: le,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: X,
      itemId: null,
      itemProp: le,
      itemRef: le,
      itemScope: X,
      itemType: le,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: X,
      low: S,
      manifest: null,
      max: null,
      maxLength: S,
      media: null,
      method: null,
      min: null,
      minLength: S,
      multiple: X,
      muted: X,
      name: null,
      nonce: null,
      noModule: X,
      noValidate: X,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: X,
      optimum: S,
      pattern: null,
      ping: le,
      placeholder: null,
      playsInline: X,
      poster: null,
      preload: null,
      readOnly: X,
      referrerPolicy: null,
      rel: le,
      required: X,
      reversed: X,
      rows: S,
      rowSpan: S,
      sandbox: le,
      scope: null,
      scoped: X,
      seamless: X,
      selected: X,
      shape: null,
      size: S,
      sizes: null,
      slot: null,
      span: S,
      spellCheck: fe,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: S,
      step: null,
      style: null,
      tabIndex: S,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: X,
      useMap: null,
      value: fe,
      width: S,
      wrap: null,
      align: null,
      aLink: null,
      archive: le,
      axis: null,
      background: null,
      bgColor: null,
      border: S,
      borderColor: null,
      bottomMargin: S,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: X,
      declare: X,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: S,
      leftMargin: S,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: S,
      marginWidth: S,
      noResize: X,
      noHref: X,
      noShade: X,
      noWrap: X,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: S,
      rules: null,
      scheme: null,
      scrolling: fe,
      standby: null,
      summary: null,
      text: null,
      topMargin: S,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: S,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: X,
      disableRemotePlayback: X,
      prefix: null,
      property: null,
      results: S,
      security: null,
      unselectable: null,
    },
  });
  var G2 = Be({
    space: "svg",
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin",
    },
    transform: t1,
    properties: {
      about: Ne,
      accentHeight: S,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: S,
      amplitude: S,
      arabicForm: null,
      ascent: S,
      attributeName: null,
      attributeType: null,
      azimuth: S,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: S,
      by: null,
      calcMode: null,
      capHeight: S,
      className: le,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: S,
      diffuseConstant: S,
      direction: null,
      display: null,
      dur: null,
      divisor: S,
      dominantBaseline: null,
      download: X,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: S,
      enableBackground: null,
      end: null,
      event: null,
      exponent: S,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: S,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: u5,
      g2: u5,
      glyphName: u5,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: S,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: S,
      horizOriginX: S,
      horizOriginY: S,
      id: null,
      ideographic: S,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: S,
      k: S,
      k1: S,
      k2: S,
      k3: S,
      k4: S,
      kernelMatrix: Ne,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: S,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: S,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: S,
      overlineThickness: S,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: S,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: le,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: S,
      pointsAtY: S,
      pointsAtZ: S,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: Ne,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: Ne,
      rev: Ne,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: Ne,
      requiredFeatures: Ne,
      requiredFonts: Ne,
      requiredFormats: Ne,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: S,
      specularExponent: S,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: S,
      strikethroughThickness: S,
      string: null,
      stroke: null,
      strokeDashArray: Ne,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: S,
      strokeOpacity: S,
      strokeWidth: null,
      style: null,
      surfaceScale: S,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: Ne,
      tabIndex: S,
      tableValues: null,
      target: null,
      targetX: S,
      targetY: S,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: Ne,
      to: null,
      transform: null,
      u1: null,
      u2: null,
      underlinePosition: S,
      underlineThickness: S,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: S,
      values: null,
      vAlphabetic: S,
      vMathematical: S,
      vectorEffect: null,
      vHanging: S,
      vIdeographic: S,
      version: null,
      vertAdvY: S,
      vertOriginX: S,
      vertOriginY: S,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: S,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
  });
  var Ku = /^data[-\w.:]+$/i,
    K2 = /-[a-z]/g,
    Wu = /[A-Z]/g;
  function O0(e, t) {
    let n = pt(t),
      a = t,
      r = we;
    if (n in e.normal) return e.property[e.normal[n]];
    if (n.length > 4 && n.slice(0, 4) === "data" && Ku.test(t)) {
      if (t.charAt(4) === "-") {
        let o = t.slice(5).replace(K2, Qu);
        a = "data" + o.charAt(0).toUpperCase() + o.slice(1);
      } else {
        let o = t.slice(4);
        if (!K2.test(o)) {
          let i = o.replace(Wu, Yu);
          i.charAt(0) !== "-" && (i = "-" + i), (t = "data" + i);
        }
      }
      r = x5;
    }
    return new r(a, t);
  }
  function Yu(e) {
    return "-" + e.toLowerCase();
  }
  function Qu(e) {
    return e.charAt(1).toUpperCase();
  }
  var a1 = {
    classId: "classID",
    dataType: "datatype",
    itemId: "itemID",
    strokeDashArray: "strokeDasharray",
    strokeDashOffset: "strokeDashoffset",
    strokeLineCap: "strokeLinecap",
    strokeLineJoin: "strokeLinejoin",
    strokeMiterLimit: "strokeMiterlimit",
    typeOf: "typeof",
    xLinkActuate: "xlinkActuate",
    xLinkArcRole: "xlinkArcrole",
    xLinkHref: "xlinkHref",
    xLinkRole: "xlinkRole",
    xLinkShow: "xlinkShow",
    xLinkTitle: "xlinkTitle",
    xLinkType: "xlinkType",
    xmlnsXLink: "xmlnsXlink",
  };
  var W2 = k0([N0, R0, L0, T0, q2], "html"),
    Y2 = k0([N0, R0, L0, T0, G2], "svg");
  function H0(e) {
    if (e.allowedElements && e.disallowedElements)
      throw new TypeError(
        "Only one of `allowedElements` and `disallowedElements` should be defined"
      );
    if (e.allowedElements || e.disallowedElements || e.allowElement)
      return (t) => {
        s5(t, "element", (n, a, r) => {
          let o = r,
            i;
          if (
            (e.allowedElements
              ? (i = !e.allowedElements.includes(n.tagName))
              : e.disallowedElements &&
                (i = e.disallowedElements.includes(n.tagName)),
            !i &&
              e.allowElement &&
              typeof a == "number" &&
              (i = !e.allowElement(n, a, o)),
            i && typeof a == "number")
          )
            return (
              e.unwrapDisallowed && n.children
                ? o.children.splice(a, 1, ...n.children)
                : o.children.splice(a, 1),
              a
            );
        });
      };
  }
  var uo = Ve(j2(), 1);
  function J2(e) {
    var t = e && typeof e == "object" && e.type === "text" ? e.value || "" : e;
    return typeof t == "string" && t.replace(/[ \t\n\f\r]/g, "") === "";
  }
  function eo(e) {
    return e.join(" ").trim();
  }
  function to(e, t) {
    let n = t || {};
    return (e[e.length - 1] === "" ? [...e, ""] : e)
      .join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " "))
      .trim();
  }
  var po = Ve(so(), 1),
    P0 = {}.hasOwnProperty,
    u3 = new Set(["table", "thead", "tbody", "tfoot", "tr"]);
  function B0(e, t) {
    let n = [],
      a = -1,
      r;
    for (; ++a < t.children.length; )
      (r = t.children[a]),
        r.type === "element"
          ? n.push(d3(e, r, a, t))
          : r.type === "text"
          ? (t.type !== "element" || !u3.has(t.tagName) || !J2(r)) &&
            n.push(r.value)
          : r.type === "raw" && !e.options.skipHtml && n.push(r.value);
    return n;
  }
  function d3(e, t, n, a) {
    let r = e.options,
      o = e.schema,
      i = t.tagName,
      l = {},
      s = o,
      u;
    if (
      (o.space === "html" && i === "svg" && ((s = Y2), (e.schema = s)),
      t.properties)
    )
      for (u in t.properties)
        P0.call(t.properties, u) && h3(l, u, t.properties[u], e);
    (i === "ol" || i === "ul") && e.listDepth++;
    let c = B0(e, t);
    (i === "ol" || i === "ul") && e.listDepth--, (e.schema = o);
    let h = t.position || {
        start: { line: null, column: null, offset: null },
        end: { line: null, column: null, offset: null },
      },
      p = r.components && P0.call(r.components, i) ? r.components[i] : i,
      d = typeof p == "string" || p === ee.Fragment;
    if (!uo.default.isValidElementType(p))
      throw new TypeError(
        `Component for name \`${i}\` not defined or is not renderable`
      );
    if (
      ((l.key = [i, h.start.line, h.start.column, n].join("-")),
      i === "a" &&
        r.linkTarget &&
        (l.target =
          typeof r.linkTarget == "function"
            ? r.linkTarget(
                String(l.href || ""),
                t.children,
                typeof l.title == "string" ? l.title : null
              )
            : r.linkTarget),
      i === "a" &&
        r.transformLinkUri &&
        (l.href = r.transformLinkUri(
          String(l.href || ""),
          t.children,
          typeof l.title == "string" ? l.title : null
        )),
      !d &&
        i === "code" &&
        a.type === "element" &&
        a.tagName !== "pre" &&
        (l.inline = !0),
      !d &&
        (i === "h1" ||
          i === "h2" ||
          i === "h3" ||
          i === "h4" ||
          i === "h5" ||
          i === "h6") &&
        (l.level = Number.parseInt(i.charAt(1), 10)),
      i === "img" &&
        r.transformImageUri &&
        (l.src = r.transformImageUri(
          String(l.src || ""),
          String(l.alt || ""),
          typeof l.title == "string" ? l.title : null
        )),
      !d && i === "li" && a.type === "element")
    ) {
      let g = p3(t);
      (l.checked = g && g.properties ? Boolean(g.properties.checked) : null),
        (l.index = F0(a, t)),
        (l.ordered = a.tagName === "ol");
    }
    return (
      !d &&
        (i === "ol" || i === "ul") &&
        ((l.ordered = i === "ol"), (l.depth = e.listDepth)),
      (i === "td" || i === "th") &&
        (l.align &&
          (l.style || (l.style = {}),
          (l.style.textAlign = l.align),
          delete l.align),
        d || (l.isHeader = i === "th")),
      !d &&
        i === "tr" &&
        a.type === "element" &&
        (l.isHeader = Boolean(a.tagName === "thead")),
      r.sourcePos && (l["data-sourcepos"] = g3(h)),
      !d && r.rawSourcePos && (l.sourcePosition = t.position),
      !d &&
        r.includeElementIndex &&
        ((l.index = F0(a, t)), (l.siblingCount = F0(a))),
      d || (l.node = t),
      c.length > 0 ? ee.createElement(p, l, c) : ee.createElement(p, l)
    );
  }
  function p3(e) {
    let t = -1;
    for (; ++t < e.children.length; ) {
      let n = e.children[t];
      if (n.type === "element" && n.tagName === "input") return n;
    }
    return null;
  }
  function F0(e, t) {
    let n = -1,
      a = 0;
    for (; ++n < e.children.length && e.children[n] !== t; )
      e.children[n].type === "element" && a++;
    return a;
  }
  function h3(e, t, n, a) {
    let r = O0(a.schema, t),
      o = n;
    o == null ||
      o !== o ||
      (Array.isArray(o) && (o = r.commaSeparated ? to(o) : eo(o)),
      r.property === "style" && typeof o == "string" && (o = m3(o)),
      r.space && r.property
        ? (e[P0.call(a1, r.property) ? a1[r.property] : r.property] = o)
        : r.attribute && (e[r.attribute] = o));
  }
  function m3(e) {
    let t = {};
    try {
      (0, po.default)(e, n);
    } catch {}
    return t;
    function n(a, r) {
      let o = a.slice(0, 4) === "-ms-" ? `ms-${a.slice(4)}` : a;
      t[o.replace(/-([a-z])/g, f3)] = r;
    }
  }
  function f3(e, t) {
    return t.toUpperCase();
  }
  function g3(e) {
    return [
      e.start.line,
      ":",
      e.start.column,
      "-",
      e.end.line,
      ":",
      e.end.column,
    ]
      .map(String)
      .join("");
  }
  var ho = {}.hasOwnProperty,
    v3 = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md",
    m1 = {
      plugins: { to: "plugins", id: "change-plugins-to-remarkplugins" },
      renderers: { to: "components", id: "change-renderers-to-components" },
      astPlugins: { id: "remove-buggy-html-in-markdown-parser" },
      allowDangerousHtml: { id: "remove-buggy-html-in-markdown-parser" },
      escapeHtml: { id: "remove-buggy-html-in-markdown-parser" },
      source: { to: "children", id: "change-source-to-children" },
      allowNode: {
        to: "allowElement",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
      },
      allowedTypes: {
        to: "allowedElements",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
      },
      disallowedTypes: {
        to: "disallowedElements",
        id: "replace-allownode-allowedtypes-and-disallowedtypes",
      },
      includeNodeIndex: {
        to: "includeElementIndex",
        id: "change-includenodeindex-to-includeelementindex",
      },
    };
  function mt(e) {
    for (let o in m1)
      if (ho.call(m1, o) && ho.call(e, o)) {
        let i = m1[o];
        console.warn(
          `[react-markdown] Warning: please ${
            i.to ? `use \`${i.to}\` instead of` : "remove"
          } \`${o}\` (see <${v3}#${i.id}> for more info)`
        ),
          delete m1[o];
      }
    let t = l0()
        .use(n2)
        .use(e.remarkPlugins || [])
        .use(I0, { ...e.remarkRehypeOptions, allowDangerousHtml: !0 })
        .use(e.rehypePlugins || [])
        .use(H0, e),
      n = new b5();
    typeof e.children == "string"
      ? (n.value = e.children)
      : e.children !== void 0 &&
        e.children !== null &&
        console.warn(
          `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
        );
    let a = t.runSync(t.parse(n), n);
    if (a.type !== "root") throw new TypeError("Expected a `root` node");
    let r = ee.createElement(
      ee.Fragment,
      {},
      B0({ options: e, schema: W2, listDepth: 0 }, a)
    );
    return (
      e.className &&
        (r = ee.createElement("div", { className: e.className }, r)),
      r
    );
  }
  mt.defaultProps = { transformLinkUri: nr };
  mt.propTypes = {
    children: Y.default.string,
    className: Y.default.string,
    allowElement: Y.default.func,
    allowedElements: Y.default.arrayOf(Y.default.string),
    disallowedElements: Y.default.arrayOf(Y.default.string),
    unwrapDisallowed: Y.default.bool,
    remarkPlugins: Y.default.arrayOf(
      Y.default.oneOfType([
        Y.default.object,
        Y.default.func,
        Y.default.arrayOf(
          Y.default.oneOfType([
            Y.default.bool,
            Y.default.string,
            Y.default.object,
            Y.default.func,
            Y.default.arrayOf(Y.default.any),
          ])
        ),
      ])
    ),
    rehypePlugins: Y.default.arrayOf(
      Y.default.oneOfType([
        Y.default.object,
        Y.default.func,
        Y.default.arrayOf(
          Y.default.oneOfType([
            Y.default.bool,
            Y.default.string,
            Y.default.object,
            Y.default.func,
            Y.default.arrayOf(Y.default.any),
          ])
        ),
      ])
    ),
    sourcePos: Y.default.bool,
    rawSourcePos: Y.default.bool,
    skipHtml: Y.default.bool,
    includeElementIndex: Y.default.bool,
    transformLinkUri: Y.default.oneOfType([Y.default.func, Y.default.bool]),
    linkTarget: Y.default.oneOfType([Y.default.func, Y.default.string]),
    transformImageUri: Y.default.func,
    components: Y.default.object,
  };
  function b3(e) {
    let t = e.regex,
      n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
      a = "decltype\\(auto\\)",
      r = "[a-zA-Z_]\\w*::",
      o = "<[^<>]+>",
      i =
        "(?!struct)(" +
        a +
        "|" +
        t.optional(r) +
        "[a-zA-Z_]\\w*" +
        t.optional(o) +
        ")",
      l = { className: "type", begin: "\\b[a-z\\d_]*_t\\b" },
      s = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
      u = {
        className: "string",
        variants: [
          {
            begin: '(u8?|U|L)?"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE],
          },
          { begin: "(u8?|U|L)?'(" + s + "|.)", end: "'", illegal: "." },
          e.END_SAME_AS_BEGIN({
            begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
            end: /\)([^()\\ ]{0,16})"/,
          }),
        ],
      },
      c = {
        className: "number",
        variants: [
          { begin: "\\b(0b[01']+)" },
          {
            begin:
              "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
          },
          {
            begin:
              "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
          },
        ],
        relevance: 0,
      },
      h = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          keyword:
            "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
        },
        contains: [
          { begin: /\\\n/, relevance: 0 },
          e.inherit(u, { className: "string" }),
          { className: "string", begin: /<.*?>/ },
          n,
          e.C_BLOCK_COMMENT_MODE,
        ],
      },
      p = {
        className: "title",
        begin: t.optional(r) + e.IDENT_RE,
        relevance: 0,
      },
      d = t.optional(r) + e.IDENT_RE + "\\s*\\(",
      g = [
        "alignas",
        "alignof",
        "and",
        "and_eq",
        "asm",
        "atomic_cancel",
        "atomic_commit",
        "atomic_noexcept",
        "auto",
        "bitand",
        "bitor",
        "break",
        "case",
        "catch",
        "class",
        "co_await",
        "co_return",
        "co_yield",
        "compl",
        "concept",
        "const_cast|10",
        "consteval",
        "constexpr",
        "constinit",
        "continue",
        "decltype",
        "default",
        "delete",
        "do",
        "dynamic_cast|10",
        "else",
        "enum",
        "explicit",
        "export",
        "extern",
        "false",
        "final",
        "for",
        "friend",
        "goto",
        "if",
        "import",
        "inline",
        "module",
        "mutable",
        "namespace",
        "new",
        "noexcept",
        "not",
        "not_eq",
        "nullptr",
        "operator",
        "or",
        "or_eq",
        "override",
        "private",
        "protected",
        "public",
        "reflexpr",
        "register",
        "reinterpret_cast|10",
        "requires",
        "return",
        "sizeof",
        "static_assert",
        "static_cast|10",
        "struct",
        "switch",
        "synchronized",
        "template",
        "this",
        "thread_local",
        "throw",
        "transaction_safe",
        "transaction_safe_dynamic",
        "true",
        "try",
        "typedef",
        "typeid",
        "typename",
        "union",
        "using",
        "virtual",
        "volatile",
        "while",
        "xor",
        "xor_eq",
      ],
      b = [
        "bool",
        "char",
        "char16_t",
        "char32_t",
        "char8_t",
        "double",
        "float",
        "int",
        "long",
        "short",
        "void",
        "wchar_t",
        "unsigned",
        "signed",
        "const",
        "static",
      ],
      v = [
        "any",
        "auto_ptr",
        "barrier",
        "binary_semaphore",
        "bitset",
        "complex",
        "condition_variable",
        "condition_variable_any",
        "counting_semaphore",
        "deque",
        "false_type",
        "future",
        "imaginary",
        "initializer_list",
        "istringstream",
        "jthread",
        "latch",
        "lock_guard",
        "multimap",
        "multiset",
        "mutex",
        "optional",
        "ostringstream",
        "packaged_task",
        "pair",
        "promise",
        "priority_queue",
        "queue",
        "recursive_mutex",
        "recursive_timed_mutex",
        "scoped_lock",
        "set",
        "shared_future",
        "shared_lock",
        "shared_mutex",
        "shared_timed_mutex",
        "shared_ptr",
        "stack",
        "string_view",
        "stringstream",
        "timed_mutex",
        "thread",
        "true_type",
        "tuple",
        "unique_lock",
        "unique_ptr",
        "unordered_map",
        "unordered_multimap",
        "unordered_multiset",
        "unordered_set",
        "variant",
        "vector",
        "weak_ptr",
        "wstring",
        "wstring_view",
      ],
      _ = [
        "abort",
        "abs",
        "acos",
        "apply",
        "as_const",
        "asin",
        "atan",
        "atan2",
        "calloc",
        "ceil",
        "cerr",
        "cin",
        "clog",
        "cos",
        "cosh",
        "cout",
        "declval",
        "endl",
        "exchange",
        "exit",
        "exp",
        "fabs",
        "floor",
        "fmod",
        "forward",
        "fprintf",
        "fputs",
        "free",
        "frexp",
        "fscanf",
        "future",
        "invoke",
        "isalnum",
        "isalpha",
        "iscntrl",
        "isdigit",
        "isgraph",
        "islower",
        "isprint",
        "ispunct",
        "isspace",
        "isupper",
        "isxdigit",
        "labs",
        "launder",
        "ldexp",
        "log",
        "log10",
        "make_pair",
        "make_shared",
        "make_shared_for_overwrite",
        "make_tuple",
        "make_unique",
        "malloc",
        "memchr",
        "memcmp",
        "memcpy",
        "memset",
        "modf",
        "move",
        "pow",
        "printf",
        "putchar",
        "puts",
        "realloc",
        "scanf",
        "sin",
        "sinh",
        "snprintf",
        "sprintf",
        "sqrt",
        "sscanf",
        "std",
        "stderr",
        "stdin",
        "stdout",
        "strcat",
        "strchr",
        "strcmp",
        "strcpy",
        "strcspn",
        "strlen",
        "strncat",
        "strncmp",
        "strncpy",
        "strpbrk",
        "strrchr",
        "strspn",
        "strstr",
        "swap",
        "tan",
        "tanh",
        "terminate",
        "to_underlying",
        "tolower",
        "toupper",
        "vfprintf",
        "visit",
        "vprintf",
        "vsprintf",
      ],
      y = {
        type: b,
        keyword: g,
        literal: ["NULL", "false", "nullopt", "nullptr", "true"],
        built_in: ["_Pragma"],
        _type_hints: v,
      },
      x = {
        className: "function.dispatch",
        relevance: 0,
        keywords: { _hint: _ },
        begin: t.concat(
          /\b/,
          /(?!decltype)/,
          /(?!if)/,
          /(?!for)/,
          /(?!switch)/,
          /(?!while)/,
          e.IDENT_RE,
          t.lookahead(/(<[^<>]+>|)\s*\(/)
        ),
      },
      E = [x, h, l, n, e.C_BLOCK_COMMENT_MODE, c, u],
      z = {
        variants: [
          { begin: /=/, end: /;/ },
          { begin: /\(/, end: /\)/ },
          { beginKeywords: "new throw return else", end: /;/ },
        ],
        keywords: y,
        contains: E.concat([
          {
            begin: /\(/,
            end: /\)/,
            keywords: y,
            contains: E.concat(["self"]),
            relevance: 0,
          },
        ]),
        relevance: 0,
      },
      N = {
        className: "function",
        begin: "(" + i + "[\\*&\\s]+)+" + d,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: y,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [
          { begin: a, keywords: y, relevance: 0 },
          { begin: d, returnBegin: !0, contains: [p], relevance: 0 },
          { begin: /::/, relevance: 0 },
          { begin: /:/, endsWithParent: !0, contains: [u, c] },
          { relevance: 0, match: /,/ },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: y,
            relevance: 0,
            contains: [
              n,
              e.C_BLOCK_COMMENT_MODE,
              u,
              c,
              l,
              {
                begin: /\(/,
                end: /\)/,
                keywords: y,
                relevance: 0,
                contains: ["self", n, e.C_BLOCK_COMMENT_MODE, u, c, l],
              },
            ],
          },
          l,
          n,
          e.C_BLOCK_COMMENT_MODE,
          h,
        ],
      };
    return {
      name: "C++",
      aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
      keywords: y,
      illegal: "</",
      classNameAliases: { "function.dispatch": "built_in" },
      contains: [].concat(z, N, x, E, [
        h,
        {
          begin:
            "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
          end: ">",
          keywords: y,
          contains: ["self", l],
        },
        { begin: e.IDENT_RE + "::", keywords: y },
        {
          match: [
            /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
            /\s+/,
            /\w+/,
          ],
          className: { 1: "keyword", 3: "title.class" },
        },
      ]),
    };
  }
  function mo(e) {
    let t = {
        type: ["boolean", "byte", "word", "String"],
        built_in: [
          "KeyboardController",
          "MouseController",
          "SoftwareSerial",
          "EthernetServer",
          "EthernetClient",
          "LiquidCrystal",
          "RobotControl",
          "GSMVoiceCall",
          "EthernetUDP",
          "EsploraTFT",
          "HttpClient",
          "RobotMotor",
          "WiFiClient",
          "GSMScanner",
          "FileSystem",
          "Scheduler",
          "GSMServer",
          "YunClient",
          "YunServer",
          "IPAddress",
          "GSMClient",
          "GSMModem",
          "Keyboard",
          "Ethernet",
          "Console",
          "GSMBand",
          "Esplora",
          "Stepper",
          "Process",
          "WiFiUDP",
          "GSM_SMS",
          "Mailbox",
          "USBHost",
          "Firmata",
          "PImage",
          "Client",
          "Server",
          "GSMPIN",
          "FileIO",
          "Bridge",
          "Serial",
          "EEPROM",
          "Stream",
          "Mouse",
          "Audio",
          "Servo",
          "File",
          "Task",
          "GPRS",
          "WiFi",
          "Wire",
          "TFT",
          "GSM",
          "SPI",
          "SD",
        ],
        _hints: [
          "setup",
          "loop",
          "runShellCommandAsynchronously",
          "analogWriteResolution",
          "retrieveCallingNumber",
          "printFirmwareVersion",
          "analogReadResolution",
          "sendDigitalPortPair",
          "noListenOnLocalhost",
          "readJoystickButton",
          "setFirmwareVersion",
          "readJoystickSwitch",
          "scrollDisplayRight",
          "getVoiceCallStatus",
          "scrollDisplayLeft",
          "writeMicroseconds",
          "delayMicroseconds",
          "beginTransmission",
          "getSignalStrength",
          "runAsynchronously",
          "getAsynchronously",
          "listenOnLocalhost",
          "getCurrentCarrier",
          "readAccelerometer",
          "messageAvailable",
          "sendDigitalPorts",
          "lineFollowConfig",
          "countryNameWrite",
          "runShellCommand",
          "readStringUntil",
          "rewindDirectory",
          "readTemperature",
          "setClockDivider",
          "readLightSensor",
          "endTransmission",
          "analogReference",
          "detachInterrupt",
          "countryNameRead",
          "attachInterrupt",
          "encryptionType",
          "readBytesUntil",
          "robotNameWrite",
          "readMicrophone",
          "robotNameRead",
          "cityNameWrite",
          "userNameWrite",
          "readJoystickY",
          "readJoystickX",
          "mouseReleased",
          "openNextFile",
          "scanNetworks",
          "noInterrupts",
          "digitalWrite",
          "beginSpeaker",
          "mousePressed",
          "isActionDone",
          "mouseDragged",
          "displayLogos",
          "noAutoscroll",
          "addParameter",
          "remoteNumber",
          "getModifiers",
          "keyboardRead",
          "userNameRead",
          "waitContinue",
          "processInput",
          "parseCommand",
          "printVersion",
          "readNetworks",
          "writeMessage",
          "blinkVersion",
          "cityNameRead",
          "readMessage",
          "setDataMode",
          "parsePacket",
          "isListening",
          "setBitOrder",
          "beginPacket",
          "isDirectory",
          "motorsWrite",
          "drawCompass",
          "digitalRead",
          "clearScreen",
          "serialEvent",
          "rightToLeft",
          "setTextSize",
          "leftToRight",
          "requestFrom",
          "keyReleased",
          "compassRead",
          "analogWrite",
          "interrupts",
          "WiFiServer",
          "disconnect",
          "playMelody",
          "parseFloat",
          "autoscroll",
          "getPINUsed",
          "setPINUsed",
          "setTimeout",
          "sendAnalog",
          "readSlider",
          "analogRead",
          "beginWrite",
          "createChar",
          "motorsStop",
          "keyPressed",
          "tempoWrite",
          "readButton",
          "subnetMask",
          "debugPrint",
          "macAddress",
          "writeGreen",
          "randomSeed",
          "attachGPRS",
          "readString",
          "sendString",
          "remotePort",
          "releaseAll",
          "mouseMoved",
          "background",
          "getXChange",
          "getYChange",
          "answerCall",
          "getResult",
          "voiceCall",
          "endPacket",
          "constrain",
          "getSocket",
          "writeJSON",
          "getButton",
          "available",
          "connected",
          "findUntil",
          "readBytes",
          "exitValue",
          "readGreen",
          "writeBlue",
          "startLoop",
          "IPAddress",
          "isPressed",
          "sendSysex",
          "pauseMode",
          "gatewayIP",
          "setCursor",
          "getOemKey",
          "tuneWrite",
          "noDisplay",
          "loadImage",
          "switchPIN",
          "onRequest",
          "onReceive",
          "changePIN",
          "playFile",
          "noBuffer",
          "parseInt",
          "overflow",
          "checkPIN",
          "knobRead",
          "beginTFT",
          "bitClear",
          "updateIR",
          "bitWrite",
          "position",
          "writeRGB",
          "highByte",
          "writeRed",
          "setSpeed",
          "readBlue",
          "noStroke",
          "remoteIP",
          "transfer",
          "shutdown",
          "hangCall",
          "beginSMS",
          "endWrite",
          "attached",
          "maintain",
          "noCursor",
          "checkReg",
          "checkPUK",
          "shiftOut",
          "isValid",
          "shiftIn",
          "pulseIn",
          "connect",
          "println",
          "localIP",
          "pinMode",
          "getIMEI",
          "display",
          "noBlink",
          "process",
          "getBand",
          "running",
          "beginSD",
          "drawBMP",
          "lowByte",
          "setBand",
          "release",
          "bitRead",
          "prepare",
          "pointTo",
          "readRed",
          "setMode",
          "noFill",
          "remove",
          "listen",
          "stroke",
          "detach",
          "attach",
          "noTone",
          "exists",
          "buffer",
          "height",
          "bitSet",
          "circle",
          "config",
          "cursor",
          "random",
          "IRread",
          "setDNS",
          "endSMS",
          "getKey",
          "micros",
          "millis",
          "begin",
          "print",
          "write",
          "ready",
          "flush",
          "width",
          "isPIN",
          "blink",
          "clear",
          "press",
          "mkdir",
          "rmdir",
          "close",
          "point",
          "yield",
          "image",
          "BSSID",
          "click",
          "delay",
          "read",
          "text",
          "move",
          "peek",
          "beep",
          "rect",
          "line",
          "open",
          "seek",
          "fill",
          "size",
          "turn",
          "stop",
          "home",
          "find",
          "step",
          "tone",
          "sqrt",
          "RSSI",
          "SSID",
          "end",
          "bit",
          "tan",
          "cos",
          "sin",
          "pow",
          "map",
          "abs",
          "max",
          "min",
          "get",
          "run",
          "put",
        ],
        literal: [
          "DIGITAL_MESSAGE",
          "FIRMATA_STRING",
          "ANALOG_MESSAGE",
          "REPORT_DIGITAL",
          "REPORT_ANALOG",
          "INPUT_PULLUP",
          "SET_PIN_MODE",
          "INTERNAL2V56",
          "SYSTEM_RESET",
          "LED_BUILTIN",
          "INTERNAL1V1",
          "SYSEX_START",
          "INTERNAL",
          "EXTERNAL",
          "DEFAULT",
          "OUTPUT",
          "INPUT",
          "HIGH",
          "LOW",
        ],
      },
      n = b3(e),
      a = n.keywords;
    return (
      (a.type = [...a.type, ...t.type]),
      (a.literal = [...a.literal, ...t.literal]),
      (a.built_in = [...a.built_in, ...t.built_in]),
      (a._hints = t._hints),
      (n.name = "Arduino"),
      (n.aliases = ["ino"]),
      (n.supersetOf = "cpp"),
      n
    );
  }
  function fo(e) {
    let t = e.regex,
      n = {},
      a = {
        begin: /\$\{/,
        end: /\}/,
        contains: ["self", { begin: /:-/, contains: [n] }],
      };
    Object.assign(n, {
      className: "variable",
      variants: [
        { begin: t.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])") },
        a,
      ],
    });
    let r = {
        className: "subst",
        begin: /\$\(/,
        end: /\)/,
        contains: [e.BACKSLASH_ESCAPE],
      },
      o = {
        begin: /<<-?\s*(?=\w+)/,
        starts: {
          contains: [
            e.END_SAME_AS_BEGIN({
              begin: /(\w+)/,
              end: /(\w+)/,
              className: "string",
            }),
          ],
        },
      },
      i = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [e.BACKSLASH_ESCAPE, n, r],
      };
    r.contains.push(i);
    let l = { className: "", begin: /\\"/ },
      s = { className: "string", begin: /'/, end: /'/ },
      u = {
        begin: /\$?\(\(/,
        end: /\)\)/,
        contains: [
          { begin: /\d+#[0-9a-f]+/, className: "number" },
          e.NUMBER_MODE,
          n,
        ],
      },
      c = ["fish", "bash", "zsh", "sh", "csh", "ksh", "tcsh", "dash", "scsh"],
      h = e.SHEBANG({ binary: `(${c.join("|")})`, relevance: 10 }),
      p = {
        className: "function",
        begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
        returnBegin: !0,
        contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
        relevance: 0,
      },
      d = [
        "if",
        "then",
        "else",
        "elif",
        "fi",
        "for",
        "while",
        "in",
        "do",
        "done",
        "case",
        "esac",
        "function",
      ],
      g = ["true", "false"],
      b = { match: /(\/[a-z._-]+)+/ },
      v = [
        "break",
        "cd",
        "continue",
        "eval",
        "exec",
        "exit",
        "export",
        "getopts",
        "hash",
        "pwd",
        "readonly",
        "return",
        "shift",
        "test",
        "times",
        "trap",
        "umask",
        "unset",
      ],
      _ = [
        "alias",
        "bind",
        "builtin",
        "caller",
        "command",
        "declare",
        "echo",
        "enable",
        "help",
        "let",
        "local",
        "logout",
        "mapfile",
        "printf",
        "read",
        "readarray",
        "source",
        "type",
        "typeset",
        "ulimit",
        "unalias",
      ],
      C = [
        "autoload",
        "bg",
        "bindkey",
        "bye",
        "cap",
        "chdir",
        "clone",
        "comparguments",
        "compcall",
        "compctl",
        "compdescribe",
        "compfiles",
        "compgroups",
        "compquote",
        "comptags",
        "comptry",
        "compvalues",
        "dirs",
        "disable",
        "disown",
        "echotc",
        "echoti",
        "emulate",
        "fc",
        "fg",
        "float",
        "functions",
        "getcap",
        "getln",
        "history",
        "integer",
        "jobs",
        "kill",
        "limit",
        "log",
        "noglob",
        "popd",
        "print",
        "pushd",
        "pushln",
        "rehash",
        "sched",
        "setcap",
        "setopt",
        "stat",
        "suspend",
        "ttyctl",
        "unfunction",
        "unhash",
        "unlimit",
        "unsetopt",
        "vared",
        "wait",
        "whence",
        "where",
        "which",
        "zcompile",
        "zformat",
        "zftp",
        "zle",
        "zmodload",
        "zparseopts",
        "zprof",
        "zpty",
        "zregexparse",
        "zsocket",
        "zstyle",
        "ztcp",
      ],
      M = [
        "chcon",
        "chgrp",
        "chown",
        "chmod",
        "cp",
        "dd",
        "df",
        "dir",
        "dircolors",
        "ln",
        "ls",
        "mkdir",
        "mkfifo",
        "mknod",
        "mktemp",
        "mv",
        "realpath",
        "rm",
        "rmdir",
        "shred",
        "sync",
        "touch",
        "truncate",
        "vdir",
        "b2sum",
        "base32",
        "base64",
        "cat",
        "cksum",
        "comm",
        "csplit",
        "cut",
        "expand",
        "fmt",
        "fold",
        "head",
        "join",
        "md5sum",
        "nl",
        "numfmt",
        "od",
        "paste",
        "ptx",
        "pr",
        "sha1sum",
        "sha224sum",
        "sha256sum",
        "sha384sum",
        "sha512sum",
        "shuf",
        "sort",
        "split",
        "sum",
        "tac",
        "tail",
        "tr",
        "tsort",
        "unexpand",
        "uniq",
        "wc",
        "arch",
        "basename",
        "chroot",
        "date",
        "dirname",
        "du",
        "echo",
        "env",
        "expr",
        "factor",
        "groups",
        "hostid",
        "id",
        "link",
        "logname",
        "nice",
        "nohup",
        "nproc",
        "pathchk",
        "pinky",
        "printenv",
        "printf",
        "pwd",
        "readlink",
        "runcon",
        "seq",
        "sleep",
        "stat",
        "stdbuf",
        "stty",
        "tee",
        "test",
        "timeout",
        "tty",
        "uname",
        "unlink",
        "uptime",
        "users",
        "who",
        "whoami",
        "yes",
      ];
    return {
      name: "Bash",
      aliases: ["sh"],
      keywords: {
        $pattern: /\b[a-z][a-z0-9._-]+\b/,
        keyword: d,
        literal: g,
        built_in: [...v, ..._, "set", "shopt", ...C, ...M],
      },
      contains: [h, e.SHEBANG(), p, u, e.HASH_COMMENT_MODE, o, b, i, l, s, n],
    };
  }
  function go(e) {
    let t = e.regex,
      n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
      a = "decltype\\(auto\\)",
      r = "[a-zA-Z_]\\w*::",
      o = "<[^<>]+>",
      i = "(" + a + "|" + t.optional(r) + "[a-zA-Z_]\\w*" + t.optional(o) + ")",
      l = {
        className: "type",
        variants: [
          { begin: "\\b[a-z\\d_]*_t\\b" },
          { match: /\batomic_[a-z]{3,6}\b/ },
        ],
      },
      s = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
      u = {
        className: "string",
        variants: [
          {
            begin: '(u8?|U|L)?"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE],
          },
          { begin: "(u8?|U|L)?'(" + s + "|.)", end: "'", illegal: "." },
          e.END_SAME_AS_BEGIN({
            begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
            end: /\)([^()\\ ]{0,16})"/,
          }),
        ],
      },
      c = {
        className: "number",
        variants: [
          { begin: "\\b(0b[01']+)" },
          {
            begin:
              "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
          },
          {
            begin:
              "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
          },
        ],
        relevance: 0,
      },
      h = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          keyword:
            "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
        },
        contains: [
          { begin: /\\\n/, relevance: 0 },
          e.inherit(u, { className: "string" }),
          { className: "string", begin: /<.*?>/ },
          n,
          e.C_BLOCK_COMMENT_MODE,
        ],
      },
      p = {
        className: "title",
        begin: t.optional(r) + e.IDENT_RE,
        relevance: 0,
      },
      d = t.optional(r) + e.IDENT_RE + "\\s*\\(",
      v = {
        keyword: [
          "asm",
          "auto",
          "break",
          "case",
          "continue",
          "default",
          "do",
          "else",
          "enum",
          "extern",
          "for",
          "fortran",
          "goto",
          "if",
          "inline",
          "register",
          "restrict",
          "return",
          "sizeof",
          "struct",
          "switch",
          "typedef",
          "union",
          "volatile",
          "while",
          "_Alignas",
          "_Alignof",
          "_Atomic",
          "_Generic",
          "_Noreturn",
          "_Static_assert",
          "_Thread_local",
          "alignas",
          "alignof",
          "noreturn",
          "static_assert",
          "thread_local",
          "_Pragma",
        ],
        type: [
          "float",
          "double",
          "signed",
          "unsigned",
          "int",
          "short",
          "long",
          "char",
          "void",
          "_Bool",
          "_Complex",
          "_Imaginary",
          "_Decimal32",
          "_Decimal64",
          "_Decimal128",
          "const",
          "static",
          "complex",
          "bool",
          "imaginary",
        ],
        literal: "true false NULL",
        built_in:
          "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
      },
      _ = [h, l, n, e.C_BLOCK_COMMENT_MODE, c, u],
      C = {
        variants: [
          { begin: /=/, end: /;/ },
          { begin: /\(/, end: /\)/ },
          { beginKeywords: "new throw return else", end: /;/ },
        ],
        keywords: v,
        contains: _.concat([
          {
            begin: /\(/,
            end: /\)/,
            keywords: v,
            contains: _.concat(["self"]),
            relevance: 0,
          },
        ]),
        relevance: 0,
      },
      M = {
        begin: "(" + i + "[\\*&\\s]+)+" + d,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: v,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [
          { begin: a, keywords: v, relevance: 0 },
          {
            begin: d,
            returnBegin: !0,
            contains: [e.inherit(p, { className: "title.function" })],
            relevance: 0,
          },
          { relevance: 0, match: /,/ },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: v,
            relevance: 0,
            contains: [
              n,
              e.C_BLOCK_COMMENT_MODE,
              u,
              c,
              l,
              {
                begin: /\(/,
                end: /\)/,
                keywords: v,
                relevance: 0,
                contains: ["self", n, e.C_BLOCK_COMMENT_MODE, u, c, l],
              },
            ],
          },
          l,
          n,
          e.C_BLOCK_COMMENT_MODE,
          h,
        ],
      };
    return {
      name: "C",
      aliases: ["h"],
      keywords: v,
      disableAutodetect: !0,
      illegal: "</",
      contains: [].concat(C, M, _, [
        h,
        { begin: e.IDENT_RE + "::", keywords: v },
        {
          className: "class",
          beginKeywords: "enum class struct union",
          end: /[{;:<>=]/,
          contains: [{ beginKeywords: "final class struct" }, e.TITLE_MODE],
        },
      ]),
      exports: { preprocessor: h, strings: u, keywords: v },
    };
  }
  function vo(e) {
    let t = e.regex,
      n = e.COMMENT("//", "$", { contains: [{ begin: /\\\n/ }] }),
      a = "decltype\\(auto\\)",
      r = "[a-zA-Z_]\\w*::",
      o = "<[^<>]+>",
      i =
        "(?!struct)(" +
        a +
        "|" +
        t.optional(r) +
        "[a-zA-Z_]\\w*" +
        t.optional(o) +
        ")",
      l = { className: "type", begin: "\\b[a-z\\d_]*_t\\b" },
      s = "\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)",
      u = {
        className: "string",
        variants: [
          {
            begin: '(u8?|U|L)?"',
            end: '"',
            illegal: "\\n",
            contains: [e.BACKSLASH_ESCAPE],
          },
          { begin: "(u8?|U|L)?'(" + s + "|.)", end: "'", illegal: "." },
          e.END_SAME_AS_BEGIN({
            begin: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/,
            end: /\)([^()\\ ]{0,16})"/,
          }),
        ],
      },
      c = {
        className: "number",
        variants: [
          { begin: "\\b(0b[01']+)" },
          {
            begin:
              "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)",
          },
          {
            begin:
              "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
          },
        ],
        relevance: 0,
      },
      h = {
        className: "meta",
        begin: /#\s*[a-z]+\b/,
        end: /$/,
        keywords: {
          keyword:
            "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include",
        },
        contains: [
          { begin: /\\\n/, relevance: 0 },
          e.inherit(u, { className: "string" }),
          { className: "string", begin: /<.*?>/ },
          n,
          e.C_BLOCK_COMMENT_MODE,
        ],
      },
      p = {
        className: "title",
        begin: t.optional(r) + e.IDENT_RE,
        relevance: 0,
      },
      d = t.optional(r) + e.IDENT_RE + "\\s*\\(",
      g = [
        "alignas",
        "alignof",
        "and",
        "and_eq",
        "asm",
        "atomic_cancel",
        "atomic_commit",
        "atomic_noexcept",
        "auto",
        "bitand",
        "bitor",
        "break",
        "case",
        "catch",
        "class",
        "co_await",
        "co_return",
        "co_yield",
        "compl",
        "concept",
        "const_cast|10",
        "consteval",
        "constexpr",
        "constinit",
        "continue",
        "decltype",
        "default",
        "delete",
        "do",
        "dynamic_cast|10",
        "else",
        "enum",
        "explicit",
        "export",
        "extern",
        "false",
        "final",
        "for",
        "friend",
        "goto",
        "if",
        "import",
        "inline",
        "module",
        "mutable",
        "namespace",
        "new",
        "noexcept",
        "not",
        "not_eq",
        "nullptr",
        "operator",
        "or",
        "or_eq",
        "override",
        "private",
        "protected",
        "public",
        "reflexpr",
        "register",
        "reinterpret_cast|10",
        "requires",
        "return",
        "sizeof",
        "static_assert",
        "static_cast|10",
        "struct",
        "switch",
        "synchronized",
        "template",
        "this",
        "thread_local",
        "throw",
        "transaction_safe",
        "transaction_safe_dynamic",
        "true",
        "try",
        "typedef",
        "typeid",
        "typename",
        "union",
        "using",
        "virtual",
        "volatile",
        "while",
        "xor",
        "xor_eq",
      ],
      b = [
        "bool",
        "char",
        "char16_t",
        "char32_t",
        "char8_t",
        "double",
        "float",
        "int",
        "long",
        "short",
        "void",
        "wchar_t",
        "unsigned",
        "signed",
        "const",
        "static",
      ],
      v = [
        "any",
        "auto_ptr",
        "barrier",
        "binary_semaphore",
        "bitset",
        "complex",
        "condition_variable",
        "condition_variable_any",
        "counting_semaphore",
        "deque",
        "false_type",
        "future",
        "imaginary",
        "initializer_list",
        "istringstream",
        "jthread",
        "latch",
        "lock_guard",
        "multimap",
        "multiset",
        "mutex",
        "optional",
        "ostringstream",
        "packaged_task",
        "pair",
        "promise",
        "priority_queue",
        "queue",
        "recursive_mutex",
        "recursive_timed_mutex",
        "scoped_lock",
        "set",
        "shared_future",
        "shared_lock",
        "shared_mutex",
        "shared_timed_mutex",
        "shared_ptr",
        "stack",
        "string_view",
        "stringstream",
        "timed_mutex",
        "thread",
        "true_type",
        "tuple",
        "unique_lock",
        "unique_ptr",
        "unordered_map",
        "unordered_multimap",
        "unordered_multiset",
        "unordered_set",
        "variant",
        "vector",
        "weak_ptr",
        "wstring",
        "wstring_view",
      ],
      _ = [
        "abort",
        "abs",
        "acos",
        "apply",
        "as_const",
        "asin",
        "atan",
        "atan2",
        "calloc",
        "ceil",
        "cerr",
        "cin",
        "clog",
        "cos",
        "cosh",
        "cout",
        "declval",
        "endl",
        "exchange",
        "exit",
        "exp",
        "fabs",
        "floor",
        "fmod",
        "forward",
        "fprintf",
        "fputs",
        "free",
        "frexp",
        "fscanf",
        "future",
        "invoke",
        "isalnum",
        "isalpha",
        "iscntrl",
        "isdigit",
        "isgraph",
        "islower",
        "isprint",
        "ispunct",
        "isspace",
        "isupper",
        "isxdigit",
        "labs",
        "launder",
        "ldexp",
        "log",
        "log10",
        "make_pair",
        "make_shared",
        "make_shared_for_overwrite",
        "make_tuple",
        "make_unique",
        "malloc",
        "memchr",
        "memcmp",
        "memcpy",
        "memset",
        "modf",
        "move",
        "pow",
        "printf",
        "putchar",
        "puts",
        "realloc",
        "scanf",
        "sin",
        "sinh",
        "snprintf",
        "sprintf",
        "sqrt",
        "sscanf",
        "std",
        "stderr",
        "stdin",
        "stdout",
        "strcat",
        "strchr",
        "strcmp",
        "strcpy",
        "strcspn",
        "strlen",
        "strncat",
        "strncmp",
        "strncpy",
        "strpbrk",
        "strrchr",
        "strspn",
        "strstr",
        "swap",
        "tan",
        "tanh",
        "terminate",
        "to_underlying",
        "tolower",
        "toupper",
        "vfprintf",
        "visit",
        "vprintf",
        "vsprintf",
      ],
      y = {
        type: b,
        keyword: g,
        literal: ["NULL", "false", "nullopt", "nullptr", "true"],
        built_in: ["_Pragma"],
        _type_hints: v,
      },
      x = {
        className: "function.dispatch",
        relevance: 0,
        keywords: { _hint: _ },
        begin: t.concat(
          /\b/,
          /(?!decltype)/,
          /(?!if)/,
          /(?!for)/,
          /(?!switch)/,
          /(?!while)/,
          e.IDENT_RE,
          t.lookahead(/(<[^<>]+>|)\s*\(/)
        ),
      },
      E = [x, h, l, n, e.C_BLOCK_COMMENT_MODE, c, u],
      z = {
        variants: [
          { begin: /=/, end: /;/ },
          { begin: /\(/, end: /\)/ },
          { beginKeywords: "new throw return else", end: /;/ },
        ],
        keywords: y,
        contains: E.concat([
          {
            begin: /\(/,
            end: /\)/,
            keywords: y,
            contains: E.concat(["self"]),
            relevance: 0,
          },
        ]),
        relevance: 0,
      },
      N = {
        className: "function",
        begin: "(" + i + "[\\*&\\s]+)+" + d,
        returnBegin: !0,
        end: /[{;=]/,
        excludeEnd: !0,
        keywords: y,
        illegal: /[^\w\s\*&:<>.]/,
        contains: [
          { begin: a, keywords: y, relevance: 0 },
          { begin: d, returnBegin: !0, contains: [p], relevance: 0 },
          { begin: /::/, relevance: 0 },
          { begin: /:/, endsWithParent: !0, contains: [u, c] },
          { relevance: 0, match: /,/ },
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: y,
            relevance: 0,
            contains: [
              n,
              e.C_BLOCK_COMMENT_MODE,
              u,
              c,
              l,
              {
                begin: /\(/,
                end: /\)/,
                keywords: y,
                relevance: 0,
                contains: ["self", n, e.C_BLOCK_COMMENT_MODE, u, c, l],
              },
            ],
          },
          l,
          n,
          e.C_BLOCK_COMMENT_MODE,
          h,
        ],
      };
    return {
      name: "C++",
      aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
      keywords: y,
      illegal: "</",
      classNameAliases: { "function.dispatch": "built_in" },
      contains: [].concat(z, N, x, E, [
        h,
        {
          begin:
            "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)",
          end: ">",
          keywords: y,
          contains: ["self", l],
        },
        { begin: e.IDENT_RE + "::", keywords: y },
        {
          match: [
            /\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/,
            /\s+/,
            /\w+/,
          ],
          className: { 1: "keyword", 3: "title.class" },
        },
      ]),
    };
  }
  function bo(e) {
    let t = [
        "bool",
        "byte",
        "char",
        "decimal",
        "delegate",
        "double",
        "dynamic",
        "enum",
        "float",
        "int",
        "long",
        "nint",
        "nuint",
        "object",
        "sbyte",
        "short",
        "string",
        "ulong",
        "uint",
        "ushort",
      ],
      n = [
        "public",
        "private",
        "protected",
        "static",
        "internal",
        "protected",
        "abstract",
        "async",
        "extern",
        "override",
        "unsafe",
        "virtual",
        "new",
        "sealed",
        "partial",
      ],
      a = ["default", "false", "null", "true"],
      r = [
        "abstract",
        "as",
        "base",
        "break",
        "case",
        "catch",
        "class",
        "const",
        "continue",
        "do",
        "else",
        "event",
        "explicit",
        "extern",
        "finally",
        "fixed",
        "for",
        "foreach",
        "goto",
        "if",
        "implicit",
        "in",
        "interface",
        "internal",
        "is",
        "lock",
        "namespace",
        "new",
        "operator",
        "out",
        "override",
        "params",
        "private",
        "protected",
        "public",
        "readonly",
        "record",
        "ref",
        "return",
        "scoped",
        "sealed",
        "sizeof",
        "stackalloc",
        "static",
        "struct",
        "switch",
        "this",
        "throw",
        "try",
        "typeof",
        "unchecked",
        "unsafe",
        "using",
        "virtual",
        "void",
        "volatile",
        "while",
      ],
      o = [
        "add",
        "alias",
        "and",
        "ascending",
        "async",
        "await",
        "by",
        "descending",
        "equals",
        "from",
        "get",
        "global",
        "group",
        "init",
        "into",
        "join",
        "let",
        "nameof",
        "not",
        "notnull",
        "on",
        "or",
        "orderby",
        "partial",
        "remove",
        "select",
        "set",
        "unmanaged",
        "value|0",
        "var",
        "when",
        "where",
        "with",
        "yield",
      ],
      i = { keyword: r.concat(o), built_in: t, literal: a },
      l = e.inherit(e.TITLE_MODE, { begin: "[a-zA-Z](\\.?\\w)*" }),
      s = {
        className: "number",
        variants: [
          { begin: "\\b(0b[01']+)" },
          {
            begin:
              "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)",
          },
          {
            begin:
              "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)",
          },
        ],
        relevance: 0,
      },
      u = {
        className: "string",
        begin: '@"',
        end: '"',
        contains: [{ begin: '""' }],
      },
      c = e.inherit(u, { illegal: /\n/ }),
      h = { className: "subst", begin: /\{/, end: /\}/, keywords: i },
      p = e.inherit(h, { illegal: /\n/ }),
      d = {
        className: "string",
        begin: /\$"/,
        end: '"',
        illegal: /\n/,
        contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, e.BACKSLASH_ESCAPE, p],
      },
      g = {
        className: "string",
        begin: /\$@"/,
        end: '"',
        contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, h],
      },
      b = e.inherit(g, {
        illegal: /\n/,
        contains: [{ begin: /\{\{/ }, { begin: /\}\}/ }, { begin: '""' }, p],
      });
    (h.contains = [
      g,
      d,
      u,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      s,
      e.C_BLOCK_COMMENT_MODE,
    ]),
      (p.contains = [
        b,
        d,
        c,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        s,
        e.inherit(e.C_BLOCK_COMMENT_MODE, { illegal: /\n/ }),
      ]);
    let v = { variants: [g, d, u, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE] },
      _ = { begin: "<", end: ">", contains: [{ beginKeywords: "in out" }, l] },
      C =
        e.IDENT_RE +
        "(<" +
        e.IDENT_RE +
        "(\\s*,\\s*" +
        e.IDENT_RE +
        ")*>)?(\\[\\])?",
      M = { begin: "@" + e.IDENT_RE, relevance: 0 };
    return {
      name: "C#",
      aliases: ["cs", "c#"],
      keywords: i,
      illegal: /::/,
      contains: [
        e.COMMENT("///", "$", {
          returnBegin: !0,
          contains: [
            {
              className: "doctag",
              variants: [
                { begin: "///", relevance: 0 },
                { begin: "<!--|-->" },
                { begin: "</?", end: ">" },
              ],
            },
          ],
        }),
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          className: "meta",
          begin: "#",
          end: "$",
          keywords: {
            keyword:
              "if else elif endif define undef warning error line region endregion pragma checksum",
          },
        },
        v,
        s,
        {
          beginKeywords: "class interface",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:,]/,
          contains: [
            { beginKeywords: "where class" },
            l,
            _,
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
          ],
        },
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [l, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
        },
        {
          beginKeywords: "record",
          relevance: 0,
          end: /[{;=]/,
          illegal: /[^\s:]/,
          contains: [l, _, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
        },
        {
          className: "meta",
          begin: "^\\s*\\[(?=[\\w])",
          excludeBegin: !0,
          end: "\\]",
          excludeEnd: !0,
          contains: [{ className: "string", begin: /"/, end: /"/ }],
        },
        { beginKeywords: "new return throw await else", relevance: 0 },
        {
          className: "function",
          begin: "(" + C + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
          returnBegin: !0,
          end: /\s*[{;=]/,
          excludeEnd: !0,
          keywords: i,
          contains: [
            { beginKeywords: n.join(" "), relevance: 0 },
            {
              begin: e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(",
              returnBegin: !0,
              contains: [e.TITLE_MODE, _],
              relevance: 0,
            },
            { match: /\(\)/ },
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: i,
              relevance: 0,
              contains: [v, s, e.C_BLOCK_COMMENT_MODE],
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
          ],
        },
        M,
      ],
    };
  }
  var E3 = (e) => ({
      IMPORTANT: { scope: "meta", begin: "!important" },
      BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
      HEXCOLOR: {
        scope: "number",
        begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
      },
      FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: "selector-attr",
        begin: /\[/,
        end: /\]/,
        illegal: "$",
        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
      },
      CSS_NUMBER_MODE: {
        scope: "number",
        begin:
          e.NUMBER_RE +
          "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0,
      },
      CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/ },
    }),
    _3 = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "p",
      "q",
      "quote",
      "samp",
      "section",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video",
    ],
    A3 = [
      "any-hover",
      "any-pointer",
      "aspect-ratio",
      "color",
      "color-gamut",
      "color-index",
      "device-aspect-ratio",
      "device-height",
      "device-width",
      "display-mode",
      "forced-colors",
      "grid",
      "height",
      "hover",
      "inverted-colors",
      "monochrome",
      "orientation",
      "overflow-block",
      "overflow-inline",
      "pointer",
      "prefers-color-scheme",
      "prefers-contrast",
      "prefers-reduced-motion",
      "prefers-reduced-transparency",
      "resolution",
      "scan",
      "scripting",
      "update",
      "width",
      "min-width",
      "max-width",
      "min-height",
      "max-height",
    ],
    y3 = [
      "active",
      "any-link",
      "blank",
      "checked",
      "current",
      "default",
      "defined",
      "dir",
      "disabled",
      "drop",
      "empty",
      "enabled",
      "first",
      "first-child",
      "first-of-type",
      "fullscreen",
      "future",
      "focus",
      "focus-visible",
      "focus-within",
      "has",
      "host",
      "host-context",
      "hover",
      "indeterminate",
      "in-range",
      "invalid",
      "is",
      "lang",
      "last-child",
      "last-of-type",
      "left",
      "link",
      "local-link",
      "not",
      "nth-child",
      "nth-col",
      "nth-last-child",
      "nth-last-col",
      "nth-last-of-type",
      "nth-of-type",
      "only-child",
      "only-of-type",
      "optional",
      "out-of-range",
      "past",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "right",
      "root",
      "scope",
      "target",
      "target-within",
      "user-invalid",
      "valid",
      "visited",
      "where",
    ],
    x3 = [
      "after",
      "backdrop",
      "before",
      "cue",
      "cue-region",
      "first-letter",
      "first-line",
      "grammar-error",
      "marker",
      "part",
      "placeholder",
      "selection",
      "slotted",
      "spelling-error",
    ],
    w3 = [
      "align-content",
      "align-items",
      "align-self",
      "all",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "block-size",
      "border",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "clip-path",
      "clip-rule",
      "color",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "content-visibility",
      "counter-increment",
      "counter-reset",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "empty-cells",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "flow",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-size",
      "font-size-adjust",
      "font-smoothing",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "glyph-orientation-vertical",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "inline-size",
      "isolation",
      "justify-content",
      "left",
      "letter-spacing",
      "line-break",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "mask",
      "mask-border",
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "position",
      "quotes",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "right",
      "row-gap",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "speak",
      "speak-as",
      "src",
      "tab-size",
      "table-layout",
      "text-align",
      "text-align-all",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-position",
      "top",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "unicode-bidi",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "z-index",
    ].reverse();
  function Eo(e) {
    let t = e.regex,
      n = E3(e),
      a = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
      r = "and or not only",
      o = /@-?\w[\w]*(-\w+)*/,
      i = "[a-zA-Z-][a-zA-Z0-9_-]*",
      l = [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE];
    return {
      name: "CSS",
      case_insensitive: !0,
      illegal: /[=|'\$]/,
      keywords: { keyframePosition: "from to" },
      classNameAliases: { keyframePosition: "selector-tag" },
      contains: [
        n.BLOCK_COMMENT,
        a,
        n.CSS_NUMBER_MODE,
        { className: "selector-id", begin: /#[A-Za-z0-9_-]+/, relevance: 0 },
        { className: "selector-class", begin: "\\." + i, relevance: 0 },
        n.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-pseudo",
          variants: [
            { begin: ":(" + y3.join("|") + ")" },
            { begin: ":(:)?(" + x3.join("|") + ")" },
          ],
        },
        n.CSS_VARIABLE,
        { className: "attribute", begin: "\\b(" + w3.join("|") + ")\\b" },
        {
          begin: /:/,
          end: /[;}{]/,
          contains: [
            n.BLOCK_COMMENT,
            n.HEXCOLOR,
            n.IMPORTANT,
            n.CSS_NUMBER_MODE,
            ...l,
            {
              begin: /(url|data-uri)\(/,
              end: /\)/,
              relevance: 0,
              keywords: { built_in: "url data-uri" },
              contains: [
                ...l,
                {
                  className: "string",
                  begin: /[^)]/,
                  endsWithParent: !0,
                  excludeEnd: !0,
                },
              ],
            },
            n.FUNCTION_DISPATCH,
          ],
        },
        {
          begin: t.lookahead(/@/),
          end: "[{;]",
          relevance: 0,
          illegal: /:/,
          contains: [
            { className: "keyword", begin: o },
            {
              begin: /\s/,
              endsWithParent: !0,
              excludeEnd: !0,
              relevance: 0,
              keywords: {
                $pattern: /[a-z-]+/,
                keyword: r,
                attribute: A3.join(" "),
              },
              contains: [
                { begin: /[a-z-]+(?=:)/, className: "attribute" },
                ...l,
                n.CSS_NUMBER_MODE,
              ],
            },
          ],
        },
        { className: "selector-tag", begin: "\\b(" + _3.join("|") + ")\\b" },
      ],
    };
  }
  function _o(e) {
    let t = e.regex;
    return {
      name: "Diff",
      aliases: ["patch"],
      contains: [
        {
          className: "meta",
          relevance: 10,
          match: t.either(
            /^@@ +-\d+,\d+ +\+\d+,\d+ +@@/,
            /^\*\*\* +\d+,\d+ +\*\*\*\*$/,
            /^--- +\d+,\d+ +----$/
          ),
        },
        {
          className: "comment",
          variants: [
            {
              begin: t.either(
                /Index: /,
                /^index/,
                /={3,}/,
                /^-{3}/,
                /^\*{3} /,
                /^\+{3}/,
                /^diff --git/
              ),
              end: /$/,
            },
            { match: /^\*{15}$/ },
          ],
        },
        { className: "addition", begin: /^\+/, end: /$/ },
        { className: "deletion", begin: /^-/, end: /$/ },
        { className: "addition", begin: /^!/, end: /$/ },
      ],
    };
  }
  function Ao(e) {
    let o = {
      keyword: [
        "break",
        "case",
        "chan",
        "const",
        "continue",
        "default",
        "defer",
        "else",
        "fallthrough",
        "for",
        "func",
        "go",
        "goto",
        "if",
        "import",
        "interface",
        "map",
        "package",
        "range",
        "return",
        "select",
        "struct",
        "switch",
        "type",
        "var",
      ],
      type: [
        "bool",
        "byte",
        "complex64",
        "complex128",
        "error",
        "float32",
        "float64",
        "int8",
        "int16",
        "int32",
        "int64",
        "string",
        "uint8",
        "uint16",
        "uint32",
        "uint64",
        "int",
        "uint",
        "uintptr",
        "rune",
      ],
      literal: ["true", "false", "iota", "nil"],
      built_in: [
        "append",
        "cap",
        "close",
        "complex",
        "copy",
        "imag",
        "len",
        "make",
        "new",
        "panic",
        "print",
        "println",
        "real",
        "recover",
        "delete",
      ],
    };
    return {
      name: "Go",
      aliases: ["golang"],
      keywords: o,
      illegal: "</",
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          className: "string",
          variants: [
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            { begin: "`", end: "`" },
          ],
        },
        {
          className: "number",
          variants: [
            { begin: e.C_NUMBER_RE + "[i]", relevance: 1 },
            e.C_NUMBER_MODE,
          ],
        },
        { begin: /:=/ },
        {
          className: "function",
          beginKeywords: "func",
          end: "\\s*(\\{|$)",
          excludeEnd: !0,
          contains: [
            e.TITLE_MODE,
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              endsParent: !0,
              keywords: o,
              illegal: /["']/,
            },
          ],
        },
      ],
    };
  }
  function yo(e) {
    let t = e.regex,
      n = /[_A-Za-z][_0-9A-Za-z]*/;
    return {
      name: "GraphQL",
      aliases: ["gql"],
      case_insensitive: !0,
      disableAutodetect: !1,
      keywords: {
        keyword: [
          "query",
          "mutation",
          "subscription",
          "type",
          "input",
          "schema",
          "directive",
          "interface",
          "union",
          "scalar",
          "fragment",
          "enum",
          "on",
        ],
        literal: ["true", "false", "null"],
      },
      contains: [
        e.HASH_COMMENT_MODE,
        e.QUOTE_STRING_MODE,
        e.NUMBER_MODE,
        { scope: "punctuation", match: /[.]{3}/, relevance: 0 },
        {
          scope: "punctuation",
          begin: /[\!\(\)\:\=\[\]\{\|\}]{1}/,
          relevance: 0,
        },
        {
          scope: "variable",
          begin: /\$/,
          end: /\W/,
          excludeEnd: !0,
          relevance: 0,
        },
        { scope: "meta", match: /@\w+/, excludeEnd: !0 },
        {
          scope: "symbol",
          begin: t.concat(n, t.lookahead(/\s*:/)),
          relevance: 0,
        },
      ],
      illegal: [/[;<']/, /BEGIN/],
    };
  }
  function xo(e) {
    let t = e.regex,
      n = {
        className: "number",
        relevance: 0,
        variants: [{ begin: /([+-]+)?[\d]+_[\d_]+/ }, { begin: e.NUMBER_RE }],
      },
      a = e.COMMENT();
    a.variants = [
      { begin: /;/, end: /$/ },
      { begin: /#/, end: /$/ },
    ];
    let r = {
        className: "variable",
        variants: [{ begin: /\$[\w\d"][\w\d_]*/ }, { begin: /\$\{(.*?)\}/ }],
      },
      o = { className: "literal", begin: /\bon|off|true|false|yes|no\b/ },
      i = {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE],
        variants: [
          { begin: "'''", end: "'''", relevance: 10 },
          { begin: '"""', end: '"""', relevance: 10 },
          { begin: '"', end: '"' },
          { begin: "'", end: "'" },
        ],
      },
      l = {
        begin: /\[/,
        end: /\]/,
        contains: [a, o, r, i, n, "self"],
        relevance: 0,
      },
      s = /[A-Za-z0-9_-]+/,
      u = /"(\\"|[^"])*"/,
      c = /'[^']*'/,
      h = t.either(s, u, c),
      p = t.concat(h, "(\\s*\\.\\s*", h, ")*", t.lookahead(/\s*=\s*[^#\s]/));
    return {
      name: "TOML, also INI",
      aliases: ["toml"],
      case_insensitive: !0,
      illegal: /\S/,
      contains: [
        a,
        { className: "section", begin: /\[+/, end: /\]+/ },
        {
          begin: p,
          className: "attr",
          starts: { end: /$/, contains: [a, l, o, r, i, n] },
        },
      ],
    };
  }
  var V5 = "[0-9](_*[0-9])*",
    f1 = `\\.(${V5})`,
    g1 = "[0-9a-fA-F](_*[0-9a-fA-F])*",
    wo = {
      className: "number",
      variants: [
        {
          begin: `(\\b(${V5})((${f1})|\\.)?|(${f1}))[eE][+-]?(${V5})[fFdD]?\\b`,
        },
        { begin: `\\b(${V5})((${f1})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
        { begin: `(${f1})[fFdD]?\\b` },
        { begin: `\\b(${V5})[fFdD]\\b` },
        {
          begin: `\\b0[xX]((${g1})\\.?|(${g1})?\\.(${g1}))[pP][+-]?(${V5})[fFdD]?\\b`,
        },
        { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
        { begin: `\\b0[xX](${g1})[lL]?\\b` },
        { begin: "\\b0(_*[0-7])*[lL]?\\b" },
        { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" },
      ],
      relevance: 0,
    };
  function Mo(e, t, n) {
    return n === -1 ? "" : e.replace(t, (a) => Mo(e, t, n - 1));
  }
  function zo(e) {
    let t = e.regex,
      n = "[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*",
      a = n + Mo("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2),
      s = {
        keyword: [
          "synchronized",
          "abstract",
          "private",
          "var",
          "static",
          "if",
          "const ",
          "for",
          "while",
          "strictfp",
          "finally",
          "protected",
          "import",
          "native",
          "final",
          "void",
          "enum",
          "else",
          "break",
          "transient",
          "catch",
          "instanceof",
          "volatile",
          "case",
          "assert",
          "package",
          "default",
          "public",
          "try",
          "switch",
          "continue",
          "throws",
          "protected",
          "public",
          "private",
          "module",
          "requires",
          "exports",
          "do",
          "sealed",
          "yield",
          "permits",
        ],
        literal: ["false", "true", "null"],
        type: [
          "char",
          "boolean",
          "long",
          "float",
          "int",
          "byte",
          "short",
          "double",
        ],
        built_in: ["super", "this"],
      },
      u = {
        className: "meta",
        begin: "@" + n,
        contains: [{ begin: /\(/, end: /\)/, contains: ["self"] }],
      },
      c = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        keywords: s,
        relevance: 0,
        contains: [e.C_BLOCK_COMMENT_MODE],
        endsParent: !0,
      };
    return {
      name: "Java",
      aliases: ["jsp"],
      keywords: s,
      illegal: /<\/|#/,
      contains: [
        e.COMMENT("/\\*\\*", "\\*/", {
          relevance: 0,
          contains: [
            { begin: /\w+@/, relevance: 0 },
            { className: "doctag", begin: "@[A-Za-z]+" },
          ],
        }),
        { begin: /import java\.[a-z]+\./, keywords: "import", relevance: 2 },
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          begin: /"""/,
          end: /"""/,
          className: "string",
          contains: [e.BACKSLASH_ESCAPE],
        },
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        {
          match: [
            /\b(?:class|interface|enum|extends|implements|new)/,
            /\s+/,
            n,
          ],
          className: { 1: "keyword", 3: "title.class" },
        },
        { match: /non-sealed/, scope: "keyword" },
        {
          begin: [t.concat(/(?!else)/, n), /\s+/, n, /\s+/, /=(?!=)/],
          className: { 1: "type", 3: "variable", 5: "operator" },
        },
        {
          begin: [/record/, /\s+/, n],
          className: { 1: "keyword", 3: "title.class" },
          contains: [c, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE],
        },
        { beginKeywords: "new throw return else", relevance: 0 },
        {
          begin: ["(?:" + a + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/],
          className: { 2: "title.function" },
          keywords: s,
          contains: [
            {
              className: "params",
              begin: /\(/,
              end: /\)/,
              keywords: s,
              relevance: 0,
              contains: [
                u,
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
                wo,
                e.C_BLOCK_COMMENT_MODE,
              ],
            },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
          ],
        },
        wo,
        u,
      ],
    };
  }
  var Io = "[A-Za-z$_][0-9A-Za-z$_]*",
    M3 = [
      "as",
      "in",
      "of",
      "if",
      "for",
      "while",
      "finally",
      "var",
      "new",
      "function",
      "do",
      "return",
      "void",
      "else",
      "break",
      "catch",
      "instanceof",
      "with",
      "throw",
      "case",
      "default",
      "try",
      "switch",
      "continue",
      "typeof",
      "delete",
      "let",
      "yield",
      "const",
      "class",
      "debugger",
      "async",
      "await",
      "static",
      "import",
      "from",
      "export",
      "extends",
    ],
    z3 = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    ko = [
      "Object",
      "Function",
      "Boolean",
      "Symbol",
      "Math",
      "Date",
      "Number",
      "BigInt",
      "String",
      "RegExp",
      "Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Int32Array",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array",
      "Set",
      "Map",
      "WeakSet",
      "WeakMap",
      "ArrayBuffer",
      "SharedArrayBuffer",
      "Atomics",
      "DataView",
      "JSON",
      "Promise",
      "Generator",
      "GeneratorFunction",
      "AsyncFunction",
      "Reflect",
      "Proxy",
      "Intl",
      "WebAssembly",
    ],
    So = [
      "Error",
      "EvalError",
      "InternalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ],
    Co = [
      "setInterval",
      "setTimeout",
      "clearInterval",
      "clearTimeout",
      "require",
      "exports",
      "eval",
      "isFinite",
      "isNaN",
      "parseFloat",
      "parseInt",
      "decodeURI",
      "decodeURIComponent",
      "encodeURI",
      "encodeURIComponent",
      "escape",
      "unescape",
    ],
    I3 = [
      "arguments",
      "this",
      "super",
      "console",
      "window",
      "document",
      "localStorage",
      "module",
      "global",
    ],
    k3 = [].concat(Co, ko, So);
  function Ro(e) {
    let t = e.regex,
      n = (R, { after: T }) => {
        let B = "</" + R[0].slice(1);
        return R.input.indexOf(B, T) !== -1;
      },
      a = Io,
      r = { begin: "<>", end: "</>" },
      o = /<[A-Za-z0-9\\._:-]+\s*\/>/,
      i = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (R, T) => {
          let B = R[0].length + R.index,
            q = R.input[B];
          if (q === "<" || q === ",") {
            T.ignoreMatch();
            return;
          }
          q === ">" && (n(R, { after: B }) || T.ignoreMatch());
          let m,
            f = R.input.substring(B);
          if ((m = f.match(/^\s*=/))) {
            T.ignoreMatch();
            return;
          }
          if ((m = f.match(/^\s+extends\s+/)) && m.index === 0) {
            T.ignoreMatch();
            return;
          }
        },
      },
      l = {
        $pattern: Io,
        keyword: M3,
        literal: z3,
        built_in: k3,
        "variable.language": I3,
      },
      s = "[0-9](_?[0-9])*",
      u = `\\.(${s})`,
      c = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
      h = {
        className: "number",
        variants: [
          { begin: `(\\b(${c})((${u})|\\.)?|(${u}))[eE][+-]?(${s})\\b` },
          { begin: `\\b(${c})\\b((${u})\\b|\\.)?|(${u})\\b` },
          { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
          { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
          { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
          { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
          { begin: "\\b0[0-7]+n?\\b" },
        ],
        relevance: 0,
      },
      p = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: l,
        contains: [],
      },
      d = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [e.BACKSLASH_ESCAPE, p],
          subLanguage: "xml",
        },
      },
      g = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [e.BACKSLASH_ESCAPE, p],
          subLanguage: "css",
        },
      },
      b = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [e.BACKSLASH_ESCAPE, p],
      },
      _ = {
        className: "comment",
        variants: [
          e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  { className: "doctag", begin: "@[A-Za-z]+" },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0,
                  },
                  {
                    className: "variable",
                    begin: a + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0,
                  },
                  { begin: /(?=[^\n])\s/, relevance: 0 },
                ],
              },
            ],
          }),
          e.C_BLOCK_COMMENT_MODE,
          e.C_LINE_COMMENT_MODE,
        ],
      },
      C = [
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        d,
        g,
        b,
        { match: /\$\d+/ },
        h,
      ];
    p.contains = C.concat({
      begin: /\{/,
      end: /\}/,
      keywords: l,
      contains: ["self"].concat(C),
    });
    let M = [].concat(_, p.contains),
      y = M.concat([
        { begin: /\(/, end: /\)/, keywords: l, contains: ["self"].concat(M) },
      ]),
      x = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: l,
        contains: y,
      },
      E = {
        variants: [
          {
            match: [
              /class/,
              /\s+/,
              a,
              /\s+/,
              /extends/,
              /\s+/,
              t.concat(a, "(", t.concat(/\./, a), ")*"),
            ],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited",
            },
          },
          {
            match: [/class/, /\s+/, a],
            scope: { 1: "keyword", 3: "title.class" },
          },
        ],
      },
      z = {
        relevance: 0,
        match: t.either(
          /\bJSON/,
          /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
          /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
          /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        ),
        className: "title.class",
        keywords: { _: [...ko, ...So] },
      },
      N = {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/,
      },
      L = {
        variants: [
          { match: [/function/, /\s+/, a, /(?=\s*\()/] },
          { match: [/function/, /\s*(?=\()/] },
        ],
        className: { 1: "keyword", 3: "title.function" },
        label: "func.def",
        contains: [x],
        illegal: /%/,
      },
      W = {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant",
      };
    function O(R) {
      return t.concat("(?!", R.join("|"), ")");
    }
    let $ = {
        match: t.concat(
          /\b/,
          O([...Co, "super", "import"]),
          a,
          t.lookahead(/\(/)
        ),
        className: "title.function",
        relevance: 0,
      },
      I = {
        begin: t.concat(/\./, t.lookahead(t.concat(a, /(?![0-9A-Za-z$_(])/))),
        end: a,
        excludeBegin: !0,
        keywords: "prototype",
        className: "property",
        relevance: 0,
      },
      F = {
        match: [/get|set/, /\s+/, a, /(?=\()/],
        className: { 1: "keyword", 3: "title.function" },
        contains: [{ begin: /\(\)/ }, x],
      },
      J =
        "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
        e.UNDERSCORE_IDENT_RE +
        ")\\s*=>",
      w = {
        match: [
          /const|var|let/,
          /\s+/,
          a,
          /\s*/,
          /=\s*/,
          /(async\s*)?/,
          t.lookahead(J),
        ],
        keywords: "async",
        className: { 1: "keyword", 3: "title.function" },
        contains: [x],
      };
    return {
      name: "Javascript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: l,
      exports: { PARAMS_CONTAINS: y, CLASS_REFERENCE: z },
      illegal: /#(?![$_A-z])/,
      contains: [
        e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
        N,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        d,
        g,
        b,
        _,
        { match: /\$\d+/ },
        h,
        z,
        { className: "attr", begin: a + t.lookahead(":"), relevance: 0 },
        w,
        {
          begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            _,
            e.REGEXP_MODE,
            {
              className: "function",
              begin: J,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                    { className: null, begin: /\(\s*\)/, skip: !0 },
                    {
                      begin: /\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: l,
                      contains: y,
                    },
                  ],
                },
              ],
            },
            { begin: /,/, relevance: 0 },
            { match: /\s+/, relevance: 0 },
            {
              variants: [
                { begin: r.begin, end: r.end },
                { match: o },
                { begin: i.begin, "on:begin": i.isTrulyOpeningTag, end: i.end },
              ],
              subLanguage: "xml",
              contains: [
                { begin: i.begin, end: i.end, skip: !0, contains: ["self"] },
              ],
            },
          ],
        },
        L,
        { beginKeywords: "while if switch catch for" },
        {
          begin:
            "\\b(?!function)" +
            e.UNDERSCORE_IDENT_RE +
            "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [
            x,
            e.inherit(e.TITLE_MODE, { begin: a, className: "title.function" }),
          ],
        },
        { match: /\.\.\./, relevance: 0 },
        I,
        { match: "\\$" + a, relevance: 0 },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [x],
        },
        $,
        W,
        E,
        F,
        { match: /\$[(.]/ },
      ],
    };
  }
  function No(e) {
    let t = {
        className: "attr",
        begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
        relevance: 1.01,
      },
      n = { match: /[{}[\],:]/, className: "punctuation", relevance: 0 },
      a = ["true", "false", "null"],
      r = { scope: "literal", beginKeywords: a.join(" ") };
    return {
      name: "JSON",
      keywords: { literal: a },
      contains: [
        t,
        n,
        e.QUOTE_STRING_MODE,
        r,
        e.C_NUMBER_MODE,
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
      ],
      illegal: "\\S",
    };
  }
  var F5 = "[0-9](_*[0-9])*",
    v1 = `\\.(${F5})`,
    b1 = "[0-9a-fA-F](_*[0-9a-fA-F])*",
    S3 = {
      className: "number",
      variants: [
        {
          begin: `(\\b(${F5})((${v1})|\\.)?|(${v1}))[eE][+-]?(${F5})[fFdD]?\\b`,
        },
        { begin: `\\b(${F5})((${v1})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
        { begin: `(${v1})[fFdD]?\\b` },
        { begin: `\\b(${F5})[fFdD]\\b` },
        {
          begin: `\\b0[xX]((${b1})\\.?|(${b1})?\\.(${b1}))[pP][+-]?(${F5})[fFdD]?\\b`,
        },
        { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
        { begin: `\\b0[xX](${b1})[lL]?\\b` },
        { begin: "\\b0(_*[0-7])*[lL]?\\b" },
        { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" },
      ],
      relevance: 0,
    };
  function Lo(e) {
    let t = {
        keyword:
          "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual",
        built_in:
          "Byte Short Char Int Long Boolean Float Double Void Unit Nothing",
        literal: "true false null",
      },
      n = {
        className: "keyword",
        begin: /\b(break|continue|return|this)\b/,
        starts: { contains: [{ className: "symbol", begin: /@\w+/ }] },
      },
      a = { className: "symbol", begin: e.UNDERSCORE_IDENT_RE + "@" },
      r = {
        className: "subst",
        begin: /\$\{/,
        end: /\}/,
        contains: [e.C_NUMBER_MODE],
      },
      o = { className: "variable", begin: "\\$" + e.UNDERSCORE_IDENT_RE },
      i = {
        className: "string",
        variants: [
          { begin: '"""', end: '"""(?=[^"])', contains: [o, r] },
          {
            begin: "'",
            end: "'",
            illegal: /\n/,
            contains: [e.BACKSLASH_ESCAPE],
          },
          {
            begin: '"',
            end: '"',
            illegal: /\n/,
            contains: [e.BACKSLASH_ESCAPE, o, r],
          },
        ],
      };
    r.contains.push(i);
    let l = {
        className: "meta",
        begin:
          "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" +
          e.UNDERSCORE_IDENT_RE +
          ")?",
      },
      s = {
        className: "meta",
        begin: "@" + e.UNDERSCORE_IDENT_RE,
        contains: [
          {
            begin: /\(/,
            end: /\)/,
            contains: [e.inherit(i, { className: "string" }), "self"],
          },
        ],
      },
      u = S3,
      c = e.COMMENT("/\\*", "\\*/", { contains: [e.C_BLOCK_COMMENT_MODE] }),
      h = {
        variants: [
          { className: "type", begin: e.UNDERSCORE_IDENT_RE },
          { begin: /\(/, end: /\)/, contains: [] },
        ],
      },
      p = h;
    return (
      (p.variants[1].contains = [h]),
      (h.variants[1].contains = [p]),
      {
        name: "Kotlin",
        aliases: ["kt", "kts"],
        keywords: t,
        contains: [
          e.COMMENT("/\\*\\*", "\\*/", {
            relevance: 0,
            contains: [{ className: "doctag", begin: "@[A-Za-z]+" }],
          }),
          e.C_LINE_COMMENT_MODE,
          c,
          n,
          a,
          l,
          s,
          {
            className: "function",
            beginKeywords: "fun",
            end: "[(]|$",
            returnBegin: !0,
            excludeEnd: !0,
            keywords: t,
            relevance: 5,
            contains: [
              {
                begin: e.UNDERSCORE_IDENT_RE + "\\s*\\(",
                returnBegin: !0,
                relevance: 0,
                contains: [e.UNDERSCORE_TITLE_MODE],
              },
              {
                className: "type",
                begin: /</,
                end: />/,
                keywords: "reified",
                relevance: 0,
              },
              {
                className: "params",
                begin: /\(/,
                end: /\)/,
                endsParent: !0,
                keywords: t,
                relevance: 0,
                contains: [
                  {
                    begin: /:/,
                    end: /[=,\/]/,
                    endsWithParent: !0,
                    contains: [h, e.C_LINE_COMMENT_MODE, c],
                    relevance: 0,
                  },
                  e.C_LINE_COMMENT_MODE,
                  c,
                  l,
                  s,
                  i,
                  e.C_NUMBER_MODE,
                ],
              },
              c,
            ],
          },
          {
            begin: [/class|interface|trait/, /\s+/, e.UNDERSCORE_IDENT_RE],
            beginScope: { 3: "title.class" },
            keywords: "class interface trait",
            end: /[:\{(]|$/,
            excludeEnd: !0,
            illegal: "extends implements",
            contains: [
              {
                beginKeywords: "public protected internal private constructor",
              },
              e.UNDERSCORE_TITLE_MODE,
              {
                className: "type",
                begin: /</,
                end: />/,
                excludeBegin: !0,
                excludeEnd: !0,
                relevance: 0,
              },
              {
                className: "type",
                begin: /[,:]\s*/,
                end: /[<\(,){\s]|$/,
                excludeBegin: !0,
                returnEnd: !0,
              },
              l,
              s,
            ],
          },
          i,
          {
            className: "meta",
            begin: "^#!/usr/bin/env",
            end: "$",
            illegal: `
`,
          },
          u,
        ],
      }
    );
  }
  var C3 = (e) => ({
      IMPORTANT: { scope: "meta", begin: "!important" },
      BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
      HEXCOLOR: {
        scope: "number",
        begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
      },
      FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: "selector-attr",
        begin: /\[/,
        end: /\]/,
        illegal: "$",
        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
      },
      CSS_NUMBER_MODE: {
        scope: "number",
        begin:
          e.NUMBER_RE +
          "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0,
      },
      CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/ },
    }),
    R3 = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "p",
      "q",
      "quote",
      "samp",
      "section",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video",
    ],
    N3 = [
      "any-hover",
      "any-pointer",
      "aspect-ratio",
      "color",
      "color-gamut",
      "color-index",
      "device-aspect-ratio",
      "device-height",
      "device-width",
      "display-mode",
      "forced-colors",
      "grid",
      "height",
      "hover",
      "inverted-colors",
      "monochrome",
      "orientation",
      "overflow-block",
      "overflow-inline",
      "pointer",
      "prefers-color-scheme",
      "prefers-contrast",
      "prefers-reduced-motion",
      "prefers-reduced-transparency",
      "resolution",
      "scan",
      "scripting",
      "update",
      "width",
      "min-width",
      "max-width",
      "min-height",
      "max-height",
    ],
    To = [
      "active",
      "any-link",
      "blank",
      "checked",
      "current",
      "default",
      "defined",
      "dir",
      "disabled",
      "drop",
      "empty",
      "enabled",
      "first",
      "first-child",
      "first-of-type",
      "fullscreen",
      "future",
      "focus",
      "focus-visible",
      "focus-within",
      "has",
      "host",
      "host-context",
      "hover",
      "indeterminate",
      "in-range",
      "invalid",
      "is",
      "lang",
      "last-child",
      "last-of-type",
      "left",
      "link",
      "local-link",
      "not",
      "nth-child",
      "nth-col",
      "nth-last-child",
      "nth-last-col",
      "nth-last-of-type",
      "nth-of-type",
      "only-child",
      "only-of-type",
      "optional",
      "out-of-range",
      "past",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "right",
      "root",
      "scope",
      "target",
      "target-within",
      "user-invalid",
      "valid",
      "visited",
      "where",
    ],
    Oo = [
      "after",
      "backdrop",
      "before",
      "cue",
      "cue-region",
      "first-letter",
      "first-line",
      "grammar-error",
      "marker",
      "part",
      "placeholder",
      "selection",
      "slotted",
      "spelling-error",
    ],
    L3 = [
      "align-content",
      "align-items",
      "align-self",
      "all",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "block-size",
      "border",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "clip-path",
      "clip-rule",
      "color",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "content-visibility",
      "counter-increment",
      "counter-reset",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "empty-cells",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "flow",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-size",
      "font-size-adjust",
      "font-smoothing",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "glyph-orientation-vertical",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "inline-size",
      "isolation",
      "justify-content",
      "left",
      "letter-spacing",
      "line-break",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "mask",
      "mask-border",
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "position",
      "quotes",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "right",
      "row-gap",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "speak",
      "speak-as",
      "src",
      "tab-size",
      "table-layout",
      "text-align",
      "text-align-all",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-position",
      "top",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "unicode-bidi",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "z-index",
    ].reverse(),
    T3 = To.concat(Oo);
  function Ho(e) {
    let t = C3(e),
      n = T3,
      a = "and or not only",
      r = "[\\w-]+",
      o = "(" + r + "|@\\{" + r + "\\})",
      i = [],
      l = [],
      s = function (M) {
        return { className: "string", begin: "~?" + M + ".*?" + M };
      },
      u = function (M, y, x) {
        return { className: M, begin: y, relevance: x };
      },
      c = { $pattern: /[a-z-]+/, keyword: a, attribute: N3.join(" ") },
      h = { begin: "\\(", end: "\\)", contains: l, keywords: c, relevance: 0 };
    l.push(
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE,
      s("'"),
      s('"'),
      t.CSS_NUMBER_MODE,
      {
        begin: "(url|data-uri)\\(",
        starts: { className: "string", end: "[\\)\\n]", excludeEnd: !0 },
      },
      t.HEXCOLOR,
      h,
      u("variable", "@@?" + r, 10),
      u("variable", "@\\{" + r + "\\}"),
      u("built_in", "~?`[^`]*?`"),
      {
        className: "attribute",
        begin: r + "\\s*:",
        end: ":",
        returnBegin: !0,
        excludeEnd: !0,
      },
      t.IMPORTANT,
      { beginKeywords: "and not" },
      t.FUNCTION_DISPATCH
    );
    let p = l.concat({ begin: /\{/, end: /\}/, contains: i }),
      d = {
        beginKeywords: "when",
        endsWithParent: !0,
        contains: [{ beginKeywords: "and not" }].concat(l),
      },
      g = {
        begin: o + "\\s*:",
        returnBegin: !0,
        end: /[;}]/,
        relevance: 0,
        contains: [
          { begin: /-(webkit|moz|ms|o)-/ },
          t.CSS_VARIABLE,
          {
            className: "attribute",
            begin: "\\b(" + L3.join("|") + ")\\b",
            end: /(?=:)/,
            starts: {
              endsWithParent: !0,
              illegal: "[<=$]",
              relevance: 0,
              contains: l,
            },
          },
        ],
      },
      b = {
        className: "keyword",
        begin:
          "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
        starts: {
          end: "[;{}]",
          keywords: c,
          returnEnd: !0,
          contains: l,
          relevance: 0,
        },
      },
      v = {
        className: "variable",
        variants: [
          { begin: "@" + r + "\\s*:", relevance: 15 },
          { begin: "@" + r },
        ],
        starts: { end: "[;}]", returnEnd: !0, contains: p },
      },
      _ = {
        variants: [
          { begin: "[\\.#:&\\[>]", end: "[;{}]" },
          { begin: o, end: /\{/ },
        ],
        returnBegin: !0,
        returnEnd: !0,
        illegal: `[<='$"]`,
        relevance: 0,
        contains: [
          e.C_LINE_COMMENT_MODE,
          e.C_BLOCK_COMMENT_MODE,
          d,
          u("keyword", "all\\b"),
          u("variable", "@\\{" + r + "\\}"),
          { begin: "\\b(" + R3.join("|") + ")\\b", className: "selector-tag" },
          t.CSS_NUMBER_MODE,
          u("selector-tag", o, 0),
          u("selector-id", "#" + o),
          u("selector-class", "\\." + o, 0),
          u("selector-tag", "&", 0),
          t.ATTRIBUTE_SELECTOR_MODE,
          { className: "selector-pseudo", begin: ":(" + To.join("|") + ")" },
          {
            className: "selector-pseudo",
            begin: ":(:)?(" + Oo.join("|") + ")",
          },
          { begin: /\(/, end: /\)/, relevance: 0, contains: p },
          { begin: "!important" },
          t.FUNCTION_DISPATCH,
        ],
      },
      C = {
        begin: r + `:(:)?(${n.join("|")})`,
        returnBegin: !0,
        contains: [_],
      };
    return (
      i.push(
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        b,
        v,
        C,
        g,
        _,
        d,
        t.FUNCTION_DISPATCH
      ),
      { name: "Less", case_insensitive: !0, illegal: `[=>'/<($"]`, contains: i }
    );
  }
  function Do(e) {
    let t = "\\[=*\\[",
      n = "\\]=*\\]",
      a = { begin: t, end: n, contains: ["self"] },
      r = [
        e.COMMENT("--(?!" + t + ")", "$"),
        e.COMMENT("--" + t, n, { contains: [a], relevance: 10 }),
      ];
    return {
      name: "Lua",
      keywords: {
        $pattern: e.UNDERSCORE_IDENT_RE,
        literal: "true false nil",
        keyword:
          "and break do else elseif end for goto if in local not or repeat return then until while",
        built_in:
          "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove",
      },
      contains: r.concat([
        {
          className: "function",
          beginKeywords: "function",
          end: "\\)",
          contains: [
            e.inherit(e.TITLE_MODE, {
              begin: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*",
            }),
            {
              className: "params",
              begin: "\\(",
              endsWithParent: !0,
              contains: r,
            },
          ].concat(r),
        },
        e.C_NUMBER_MODE,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        { className: "string", begin: t, end: n, contains: [a], relevance: 5 },
      ]),
    };
  }
  function Vo(e) {
    let t = {
        className: "variable",
        variants: [
          {
            begin: "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)",
            contains: [e.BACKSLASH_ESCAPE],
          },
          { begin: /\$[@%<?\^\+\*]/ },
        ],
      },
      n = {
        className: "string",
        begin: /"/,
        end: /"/,
        contains: [e.BACKSLASH_ESCAPE, t],
      },
      a = {
        className: "variable",
        begin: /\$\([\w-]+\s/,
        end: /\)/,
        keywords: {
          built_in:
            "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value",
        },
        contains: [t],
      },
      r = { begin: "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)" },
      o = {
        className: "meta",
        begin: /^\.PHONY:/,
        end: /$/,
        keywords: { $pattern: /[\.\w]+/, keyword: ".PHONY" },
      },
      i = { className: "section", begin: /^[^\s]+:/, end: /$/, contains: [t] };
    return {
      name: "Makefile",
      aliases: ["mk", "mak", "make"],
      keywords: {
        $pattern: /[\w-]+/,
        keyword:
          "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
      },
      contains: [e.HASH_COMMENT_MODE, t, n, a, r, o, i],
    };
  }
  function Fo(e) {
    let t = e.regex,
      n = {
        begin: /<\/?[A-Za-z_]/,
        end: ">",
        subLanguage: "xml",
        relevance: 0,
      },
      a = { begin: "^[-\\*]{3,}", end: "$" },
      r = {
        className: "code",
        variants: [
          { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
          { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
          { begin: "```", end: "```+[ ]*$" },
          { begin: "~~~", end: "~~~+[ ]*$" },
          { begin: "`.+?`" },
          {
            begin: "(?=^( {4}|\\t))",
            contains: [{ begin: "^( {4}|\\t)", end: "(\\n)$" }],
            relevance: 0,
          },
        ],
      },
      o = {
        className: "bullet",
        begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
        end: "\\s+",
        excludeEnd: !0,
      },
      i = {
        begin: /^\[[^\n]+\]:/,
        returnBegin: !0,
        contains: [
          {
            className: "symbol",
            begin: /\[/,
            end: /\]/,
            excludeBegin: !0,
            excludeEnd: !0,
          },
          { className: "link", begin: /:\s*/, end: /$/, excludeBegin: !0 },
        ],
      },
      l = /[A-Za-z][A-Za-z0-9+.-]*/,
      s = {
        variants: [
          { begin: /\[.+?\]\[.*?\]/, relevance: 0 },
          {
            begin:
              /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
            relevance: 2,
          },
          { begin: t.concat(/\[.+?\]\(/, l, /:\/\/.*?\)/), relevance: 2 },
          { begin: /\[.+?\]\([./?&#].*?\)/, relevance: 1 },
          { begin: /\[.*?\]\(.*?\)/, relevance: 0 },
        ],
        returnBegin: !0,
        contains: [
          { match: /\[(?=\])/ },
          {
            className: "string",
            relevance: 0,
            begin: "\\[",
            end: "\\]",
            excludeBegin: !0,
            returnEnd: !0,
          },
          {
            className: "link",
            relevance: 0,
            begin: "\\]\\(",
            end: "\\)",
            excludeBegin: !0,
            excludeEnd: !0,
          },
          {
            className: "symbol",
            relevance: 0,
            begin: "\\]\\[",
            end: "\\]",
            excludeBegin: !0,
            excludeEnd: !0,
          },
        ],
      },
      u = {
        className: "strong",
        contains: [],
        variants: [
          { begin: /_{2}(?!\s)/, end: /_{2}/ },
          { begin: /\*{2}(?!\s)/, end: /\*{2}/ },
        ],
      },
      c = {
        className: "emphasis",
        contains: [],
        variants: [
          { begin: /\*(?![*\s])/, end: /\*/ },
          { begin: /_(?![_\s])/, end: /_/, relevance: 0 },
        ],
      },
      h = e.inherit(u, { contains: [] }),
      p = e.inherit(c, { contains: [] });
    u.contains.push(p), c.contains.push(h);
    let d = [n, s];
    return (
      [u, c, h, p].forEach((v) => {
        v.contains = v.contains.concat(d);
      }),
      (d = d.concat(u, c)),
      {
        name: "Markdown",
        aliases: ["md", "mkdown", "mkd"],
        contains: [
          {
            className: "section",
            variants: [
              { begin: "^#{1,6}", end: "$", contains: d },
              {
                begin: "(?=^.+?\\n[=-]{2,}$)",
                contains: [
                  { begin: "^[=-]*$" },
                  { begin: "^", end: "\\n", contains: d },
                ],
              },
            ],
          },
          n,
          o,
          u,
          c,
          { className: "quote", begin: "^>\\s+", contains: d, end: "$" },
          r,
          a,
          s,
          i,
        ],
      }
    );
  }
  function Po(e) {
    let t = {
        className: "built_in",
        begin:
          "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+",
      },
      n = /[a-zA-Z@][a-zA-Z0-9_]*/,
      l = {
        "variable.language": ["this", "super"],
        $pattern: n,
        keyword: [
          "while",
          "export",
          "sizeof",
          "typedef",
          "const",
          "struct",
          "for",
          "union",
          "volatile",
          "static",
          "mutable",
          "if",
          "do",
          "return",
          "goto",
          "enum",
          "else",
          "break",
          "extern",
          "asm",
          "case",
          "default",
          "register",
          "explicit",
          "typename",
          "switch",
          "continue",
          "inline",
          "readonly",
          "assign",
          "readwrite",
          "self",
          "@synchronized",
          "id",
          "typeof",
          "nonatomic",
          "IBOutlet",
          "IBAction",
          "strong",
          "weak",
          "copy",
          "in",
          "out",
          "inout",
          "bycopy",
          "byref",
          "oneway",
          "__strong",
          "__weak",
          "__block",
          "__autoreleasing",
          "@private",
          "@protected",
          "@public",
          "@try",
          "@property",
          "@end",
          "@throw",
          "@catch",
          "@finally",
          "@autoreleasepool",
          "@synthesize",
          "@dynamic",
          "@selector",
          "@optional",
          "@required",
          "@encode",
          "@package",
          "@import",
          "@defs",
          "@compatibility_alias",
          "__bridge",
          "__bridge_transfer",
          "__bridge_retained",
          "__bridge_retain",
          "__covariant",
          "__contravariant",
          "__kindof",
          "_Nonnull",
          "_Nullable",
          "_Null_unspecified",
          "__FUNCTION__",
          "__PRETTY_FUNCTION__",
          "__attribute__",
          "getter",
          "setter",
          "retain",
          "unsafe_unretained",
          "nonnull",
          "nullable",
          "null_unspecified",
          "null_resettable",
          "class",
          "instancetype",
          "NS_DESIGNATED_INITIALIZER",
          "NS_UNAVAILABLE",
          "NS_REQUIRES_SUPER",
          "NS_RETURNS_INNER_POINTER",
          "NS_INLINE",
          "NS_AVAILABLE",
          "NS_DEPRECATED",
          "NS_ENUM",
          "NS_OPTIONS",
          "NS_SWIFT_UNAVAILABLE",
          "NS_ASSUME_NONNULL_BEGIN",
          "NS_ASSUME_NONNULL_END",
          "NS_REFINED_FOR_SWIFT",
          "NS_SWIFT_NAME",
          "NS_SWIFT_NOTHROW",
          "NS_DURING",
          "NS_HANDLER",
          "NS_ENDHANDLER",
          "NS_VALUERETURN",
          "NS_VOIDRETURN",
        ],
        literal: ["false", "true", "FALSE", "TRUE", "nil", "YES", "NO", "NULL"],
        built_in: [
          "dispatch_once_t",
          "dispatch_queue_t",
          "dispatch_sync",
          "dispatch_async",
          "dispatch_once",
        ],
        type: [
          "int",
          "float",
          "char",
          "unsigned",
          "signed",
          "short",
          "long",
          "double",
          "wchar_t",
          "unichar",
          "void",
          "bool",
          "BOOL",
          "id|0",
          "_Bool",
        ],
      },
      s = {
        $pattern: n,
        keyword: ["@interface", "@class", "@protocol", "@implementation"],
      };
    return {
      name: "Objective-C",
      aliases: ["mm", "objc", "obj-c", "obj-c++", "objective-c++"],
      keywords: l,
      illegal: "</",
      contains: [
        t,
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        e.C_NUMBER_MODE,
        e.QUOTE_STRING_MODE,
        e.APOS_STRING_MODE,
        {
          className: "string",
          variants: [
            {
              begin: '@"',
              end: '"',
              illegal: "\\n",
              contains: [e.BACKSLASH_ESCAPE],
            },
          ],
        },
        {
          className: "meta",
          begin: /#\s*[a-z]+\b/,
          end: /$/,
          keywords: {
            keyword:
              "if else elif endif define undef warning error line pragma ifdef ifndef include",
          },
          contains: [
            { begin: /\\\n/, relevance: 0 },
            e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
            { className: "string", begin: /<.*?>/, end: /$/, illegal: "\\n" },
            e.C_LINE_COMMENT_MODE,
            e.C_BLOCK_COMMENT_MODE,
          ],
        },
        {
          className: "class",
          begin: "(" + s.keyword.join("|") + ")\\b",
          end: /(\{|$)/,
          excludeEnd: !0,
          keywords: s,
          contains: [e.UNDERSCORE_TITLE_MODE],
        },
        { begin: "\\." + e.UNDERSCORE_IDENT_RE, relevance: 0 },
      ],
    };
  }
  function Bo(e) {
    let t = e.regex,
      n = [
        "abs",
        "accept",
        "alarm",
        "and",
        "atan2",
        "bind",
        "binmode",
        "bless",
        "break",
        "caller",
        "chdir",
        "chmod",
        "chomp",
        "chop",
        "chown",
        "chr",
        "chroot",
        "close",
        "closedir",
        "connect",
        "continue",
        "cos",
        "crypt",
        "dbmclose",
        "dbmopen",
        "defined",
        "delete",
        "die",
        "do",
        "dump",
        "each",
        "else",
        "elsif",
        "endgrent",
        "endhostent",
        "endnetent",
        "endprotoent",
        "endpwent",
        "endservent",
        "eof",
        "eval",
        "exec",
        "exists",
        "exit",
        "exp",
        "fcntl",
        "fileno",
        "flock",
        "for",
        "foreach",
        "fork",
        "format",
        "formline",
        "getc",
        "getgrent",
        "getgrgid",
        "getgrnam",
        "gethostbyaddr",
        "gethostbyname",
        "gethostent",
        "getlogin",
        "getnetbyaddr",
        "getnetbyname",
        "getnetent",
        "getpeername",
        "getpgrp",
        "getpriority",
        "getprotobyname",
        "getprotobynumber",
        "getprotoent",
        "getpwent",
        "getpwnam",
        "getpwuid",
        "getservbyname",
        "getservbyport",
        "getservent",
        "getsockname",
        "getsockopt",
        "given",
        "glob",
        "gmtime",
        "goto",
        "grep",
        "gt",
        "hex",
        "if",
        "index",
        "int",
        "ioctl",
        "join",
        "keys",
        "kill",
        "last",
        "lc",
        "lcfirst",
        "length",
        "link",
        "listen",
        "local",
        "localtime",
        "log",
        "lstat",
        "lt",
        "ma",
        "map",
        "mkdir",
        "msgctl",
        "msgget",
        "msgrcv",
        "msgsnd",
        "my",
        "ne",
        "next",
        "no",
        "not",
        "oct",
        "open",
        "opendir",
        "or",
        "ord",
        "our",
        "pack",
        "package",
        "pipe",
        "pop",
        "pos",
        "print",
        "printf",
        "prototype",
        "push",
        "q|0",
        "qq",
        "quotemeta",
        "qw",
        "qx",
        "rand",
        "read",
        "readdir",
        "readline",
        "readlink",
        "readpipe",
        "recv",
        "redo",
        "ref",
        "rename",
        "require",
        "reset",
        "return",
        "reverse",
        "rewinddir",
        "rindex",
        "rmdir",
        "say",
        "scalar",
        "seek",
        "seekdir",
        "select",
        "semctl",
        "semget",
        "semop",
        "send",
        "setgrent",
        "sethostent",
        "setnetent",
        "setpgrp",
        "setpriority",
        "setprotoent",
        "setpwent",
        "setservent",
        "setsockopt",
        "shift",
        "shmctl",
        "shmget",
        "shmread",
        "shmwrite",
        "shutdown",
        "sin",
        "sleep",
        "socket",
        "socketpair",
        "sort",
        "splice",
        "split",
        "sprintf",
        "sqrt",
        "srand",
        "stat",
        "state",
        "study",
        "sub",
        "substr",
        "symlink",
        "syscall",
        "sysopen",
        "sysread",
        "sysseek",
        "system",
        "syswrite",
        "tell",
        "telldir",
        "tie",
        "tied",
        "time",
        "times",
        "tr",
        "truncate",
        "uc",
        "ucfirst",
        "umask",
        "undef",
        "unless",
        "unlink",
        "unpack",
        "unshift",
        "untie",
        "until",
        "use",
        "utime",
        "values",
        "vec",
        "wait",
        "waitpid",
        "wantarray",
        "warn",
        "when",
        "while",
        "write",
        "x|0",
        "xor",
        "y|0",
      ],
      a = /[dualxmsipngr]{0,12}/,
      r = { $pattern: /[\w.]+/, keyword: n.join(" ") },
      o = { className: "subst", begin: "[$@]\\{", end: "\\}", keywords: r },
      i = { begin: /->\{/, end: /\}/ },
      l = {
        variants: [
          { begin: /\$\d/ },
          {
            begin: t.concat(
              /[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/,
              "(?![A-Za-z])(?![@$%])"
            ),
          },
          { begin: /[$%@][^\s\w{]/, relevance: 0 },
        ],
      },
      s = [e.BACKSLASH_ESCAPE, o, l],
      u = [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/],
      c = (d, g, b = "\\1") => {
        let v = b === "\\1" ? b : t.concat(b, g);
        return t.concat(
          t.concat("(?:", d, ")"),
          g,
          /(?:\\.|[^\\\/])*?/,
          v,
          /(?:\\.|[^\\\/])*?/,
          b,
          a
        );
      },
      h = (d, g, b) =>
        t.concat(t.concat("(?:", d, ")"), g, /(?:\\.|[^\\\/])*?/, b, a),
      p = [
        l,
        e.HASH_COMMENT_MODE,
        e.COMMENT(/^=\w/, /=cut/, { endsWithParent: !0 }),
        i,
        {
          className: "string",
          contains: s,
          variants: [
            { begin: "q[qwxr]?\\s*\\(", end: "\\)", relevance: 5 },
            { begin: "q[qwxr]?\\s*\\[", end: "\\]", relevance: 5 },
            { begin: "q[qwxr]?\\s*\\{", end: "\\}", relevance: 5 },
            { begin: "q[qwxr]?\\s*\\|", end: "\\|", relevance: 5 },
            { begin: "q[qwxr]?\\s*<", end: ">", relevance: 5 },
            { begin: "qw\\s+q", end: "q", relevance: 5 },
            { begin: "'", end: "'", contains: [e.BACKSLASH_ESCAPE] },
            { begin: '"', end: '"' },
            { begin: "`", end: "`", contains: [e.BACKSLASH_ESCAPE] },
            { begin: /\{\w+\}/, relevance: 0 },
            { begin: "-?\\w+\\s*=>", relevance: 0 },
          ],
        },
        {
          className: "number",
          begin:
            "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
          relevance: 0,
        },
        {
          begin:
            "(\\/\\/|" +
            e.RE_STARTERS_RE +
            "|\\b(split|return|print|reverse|grep)\\b)\\s*",
          keywords: "split return print reverse grep",
          relevance: 0,
          contains: [
            e.HASH_COMMENT_MODE,
            {
              className: "regexp",
              variants: [
                { begin: c("s|tr|y", t.either(...u, { capture: !0 })) },
                { begin: c("s|tr|y", "\\(", "\\)") },
                { begin: c("s|tr|y", "\\[", "\\]") },
                { begin: c("s|tr|y", "\\{", "\\}") },
              ],
              relevance: 2,
            },
            {
              className: "regexp",
              variants: [
                { begin: /(m|qr)\/\//, relevance: 0 },
                { begin: h("(?:m|qr)?", /\//, /\//) },
                { begin: h("m|qr", t.either(...u, { capture: !0 }), /\1/) },
                { begin: h("m|qr", /\(/, /\)/) },
                { begin: h("m|qr", /\[/, /\]/) },
                { begin: h("m|qr", /\{/, /\}/) },
              ],
            },
          ],
        },
        {
          className: "function",
          beginKeywords: "sub",
          end: "(\\s*\\(.*?\\))?[;{]",
          excludeEnd: !0,
          relevance: 5,
          contains: [e.TITLE_MODE],
        },
        { begin: "-\\w\\b", relevance: 0 },
        {
          begin: "^__DATA__$",
          end: "^__END__$",
          subLanguage: "mojolicious",
          contains: [{ begin: "^@@.*", end: "$", className: "comment" }],
        },
      ];
    return (
      (o.contains = p),
      (i.contains = p),
      { name: "Perl", aliases: ["pl", "pm"], keywords: r, contains: p }
    );
  }
  function Uo(e) {
    let t = e.regex,
      n = /(?![A-Za-z0-9])(?![$])/,
      a = t.concat(/[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/, n),
      r = t.concat(
        /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
        n
      ),
      o = { scope: "variable", match: "\\$+" + a },
      i = {
        scope: "meta",
        variants: [
          { begin: /<\?php/, relevance: 10 },
          { begin: /<\?=/ },
          { begin: /<\?/, relevance: 0.1 },
          { begin: /\?>/ },
        ],
      },
      l = {
        scope: "subst",
        variants: [{ begin: /\$\w+/ }, { begin: /\{\$/, end: /\}/ }],
      },
      s = e.inherit(e.APOS_STRING_MODE, { illegal: null }),
      u = e.inherit(e.QUOTE_STRING_MODE, {
        illegal: null,
        contains: e.QUOTE_STRING_MODE.contains.concat(l),
      }),
      c = e.END_SAME_AS_BEGIN({
        begin: /<<<[ \t]*(\w+)\n/,
        end: /[ \t]*(\w+)\b/,
        contains: e.QUOTE_STRING_MODE.contains.concat(l),
      }),
      h = `[ 	
]`,
      p = { scope: "string", variants: [u, s, c] },
      d = {
        scope: "number",
        variants: [
          { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
          { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
          { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
          {
            begin:
              "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?",
          },
        ],
        relevance: 0,
      },
      g = ["false", "null", "true"],
      b = [
        "__CLASS__",
        "__DIR__",
        "__FILE__",
        "__FUNCTION__",
        "__COMPILER_HALT_OFFSET__",
        "__LINE__",
        "__METHOD__",
        "__NAMESPACE__",
        "__TRAIT__",
        "die",
        "echo",
        "exit",
        "include",
        "include_once",
        "print",
        "require",
        "require_once",
        "array",
        "abstract",
        "and",
        "as",
        "binary",
        "bool",
        "boolean",
        "break",
        "callable",
        "case",
        "catch",
        "class",
        "clone",
        "const",
        "continue",
        "declare",
        "default",
        "do",
        "double",
        "else",
        "elseif",
        "empty",
        "enddeclare",
        "endfor",
        "endforeach",
        "endif",
        "endswitch",
        "endwhile",
        "enum",
        "eval",
        "extends",
        "final",
        "finally",
        "float",
        "for",
        "foreach",
        "from",
        "global",
        "goto",
        "if",
        "implements",
        "instanceof",
        "insteadof",
        "int",
        "integer",
        "interface",
        "isset",
        "iterable",
        "list",
        "match|0",
        "mixed",
        "new",
        "never",
        "object",
        "or",
        "private",
        "protected",
        "public",
        "readonly",
        "real",
        "return",
        "string",
        "switch",
        "throw",
        "trait",
        "try",
        "unset",
        "use",
        "var",
        "void",
        "while",
        "xor",
        "yield",
      ],
      v = [
        "Error|0",
        "AppendIterator",
        "ArgumentCountError",
        "ArithmeticError",
        "ArrayIterator",
        "ArrayObject",
        "AssertionError",
        "BadFunctionCallException",
        "BadMethodCallException",
        "CachingIterator",
        "CallbackFilterIterator",
        "CompileError",
        "Countable",
        "DirectoryIterator",
        "DivisionByZeroError",
        "DomainException",
        "EmptyIterator",
        "ErrorException",
        "Exception",
        "FilesystemIterator",
        "FilterIterator",
        "GlobIterator",
        "InfiniteIterator",
        "InvalidArgumentException",
        "IteratorIterator",
        "LengthException",
        "LimitIterator",
        "LogicException",
        "MultipleIterator",
        "NoRewindIterator",
        "OutOfBoundsException",
        "OutOfRangeException",
        "OuterIterator",
        "OverflowException",
        "ParentIterator",
        "ParseError",
        "RangeException",
        "RecursiveArrayIterator",
        "RecursiveCachingIterator",
        "RecursiveCallbackFilterIterator",
        "RecursiveDirectoryIterator",
        "RecursiveFilterIterator",
        "RecursiveIterator",
        "RecursiveIteratorIterator",
        "RecursiveRegexIterator",
        "RecursiveTreeIterator",
        "RegexIterator",
        "RuntimeException",
        "SeekableIterator",
        "SplDoublyLinkedList",
        "SplFileInfo",
        "SplFileObject",
        "SplFixedArray",
        "SplHeap",
        "SplMaxHeap",
        "SplMinHeap",
        "SplObjectStorage",
        "SplObserver",
        "SplPriorityQueue",
        "SplQueue",
        "SplStack",
        "SplSubject",
        "SplTempFileObject",
        "TypeError",
        "UnderflowException",
        "UnexpectedValueException",
        "UnhandledMatchError",
        "ArrayAccess",
        "BackedEnum",
        "Closure",
        "Fiber",
        "Generator",
        "Iterator",
        "IteratorAggregate",
        "Serializable",
        "Stringable",
        "Throwable",
        "Traversable",
        "UnitEnum",
        "WeakReference",
        "WeakMap",
        "Directory",
        "__PHP_Incomplete_Class",
        "parent",
        "php_user_filter",
        "self",
        "static",
        "stdClass",
      ],
      C = {
        keyword: b,
        literal: (($) => {
          let I = [];
          return (
            $.forEach((F) => {
              I.push(F),
                F.toLowerCase() === F
                  ? I.push(F.toUpperCase())
                  : I.push(F.toLowerCase());
            }),
            I
          );
        })(g),
        built_in: v,
      },
      M = ($) => $.map((I) => I.replace(/\|\d+$/, "")),
      y = {
        variants: [
          {
            match: [
              /new/,
              t.concat(h, "+"),
              t.concat("(?!", M(v).join("\\b|"), "\\b)"),
              r,
            ],
            scope: { 1: "keyword", 4: "title.class" },
          },
        ],
      },
      x = t.concat(a, "\\b(?!\\()"),
      E = {
        variants: [
          {
            match: [t.concat(/::/, t.lookahead(/(?!class\b)/)), x],
            scope: { 2: "variable.constant" },
          },
          { match: [/::/, /class/], scope: { 2: "variable.language" } },
          {
            match: [r, t.concat(/::/, t.lookahead(/(?!class\b)/)), x],
            scope: { 1: "title.class", 3: "variable.constant" },
          },
          {
            match: [r, t.concat("::", t.lookahead(/(?!class\b)/))],
            scope: { 1: "title.class" },
          },
          {
            match: [r, /::/, /class/],
            scope: { 1: "title.class", 3: "variable.language" },
          },
        ],
      },
      z = {
        scope: "attr",
        match: t.concat(a, t.lookahead(":"), t.lookahead(/(?!::)/)),
      },
      N = {
        relevance: 0,
        begin: /\(/,
        end: /\)/,
        keywords: C,
        contains: [z, o, E, e.C_BLOCK_COMMENT_MODE, p, d, y],
      },
      L = {
        relevance: 0,
        match: [
          /\b/,
          t.concat(
            "(?!fn\\b|function\\b|",
            M(b).join("\\b|"),
            "|",
            M(v).join("\\b|"),
            "\\b)"
          ),
          a,
          t.concat(h, "*"),
          t.lookahead(/(?=\()/),
        ],
        scope: { 3: "title.function.invoke" },
        contains: [N],
      };
    N.contains.push(L);
    let W = [z, E, e.C_BLOCK_COMMENT_MODE, p, d, y],
      O = {
        begin: t.concat(/#\[\s*/, r),
        beginScope: "meta",
        end: /]/,
        endScope: "meta",
        keywords: { literal: g, keyword: ["new", "array"] },
        contains: [
          {
            begin: /\[/,
            end: /]/,
            keywords: { literal: g, keyword: ["new", "array"] },
            contains: ["self", ...W],
          },
          ...W,
          { scope: "meta", match: r },
        ],
      };
    return {
      case_insensitive: !1,
      keywords: C,
      contains: [
        O,
        e.HASH_COMMENT_MODE,
        e.COMMENT("//", "$"),
        e.COMMENT("/\\*", "\\*/", {
          contains: [{ scope: "doctag", match: "@[A-Za-z]+" }],
        }),
        {
          match: /__halt_compiler\(\);/,
          keywords: "__halt_compiler",
          starts: {
            scope: "comment",
            end: e.MATCH_NOTHING_RE,
            contains: [{ match: /\?>/, scope: "meta", endsParent: !0 }],
          },
        },
        i,
        { scope: "variable.language", match: /\$this\b/ },
        o,
        L,
        E,
        {
          match: [/const/, /\s/, a],
          scope: { 1: "keyword", 3: "variable.constant" },
        },
        y,
        {
          scope: "function",
          relevance: 0,
          beginKeywords: "fn function",
          end: /[;{]/,
          excludeEnd: !0,
          illegal: "[$%\\[]",
          contains: [
            { beginKeywords: "use" },
            e.UNDERSCORE_TITLE_MODE,
            { begin: "=>", endsParent: !0 },
            {
              scope: "params",
              begin: "\\(",
              end: "\\)",
              excludeBegin: !0,
              excludeEnd: !0,
              keywords: C,
              contains: ["self", o, E, e.C_BLOCK_COMMENT_MODE, p, d],
            },
          ],
        },
        {
          scope: "class",
          variants: [
            { beginKeywords: "enum", illegal: /[($"]/ },
            { beginKeywords: "class interface trait", illegal: /[:($"]/ },
          ],
          relevance: 0,
          end: /\{/,
          excludeEnd: !0,
          contains: [
            { beginKeywords: "extends implements" },
            e.UNDERSCORE_TITLE_MODE,
          ],
        },
        {
          beginKeywords: "namespace",
          relevance: 0,
          end: ";",
          illegal: /[.']/,
          contains: [
            e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" }),
          ],
        },
        {
          beginKeywords: "use",
          relevance: 0,
          end: ";",
          contains: [
            { match: /\b(as|const|function)\b/, scope: "keyword" },
            e.UNDERSCORE_TITLE_MODE,
          ],
        },
        p,
        d,
      ],
    };
  }
  function $o(e) {
    return {
      name: "PHP template",
      subLanguage: "xml",
      contains: [
        {
          begin: /<\?(php|=)?/,
          end: /\?>/,
          subLanguage: "php",
          contains: [
            { begin: "/\\*", end: "\\*/", skip: !0 },
            { begin: 'b"', end: '"', skip: !0 },
            { begin: "b'", end: "'", skip: !0 },
            e.inherit(e.APOS_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0,
            }),
            e.inherit(e.QUOTE_STRING_MODE, {
              illegal: null,
              className: null,
              contains: null,
              skip: !0,
            }),
          ],
        },
      ],
    };
  }
  function qo(e) {
    return {
      name: "Plain text",
      aliases: ["text", "txt"],
      disableAutodetect: !0,
    };
  }
  function Go(e) {
    let t = e.regex,
      n = /[\p{XID_Start}_]\p{XID_Continue}*/u,
      a = [
        "and",
        "as",
        "assert",
        "async",
        "await",
        "break",
        "case",
        "class",
        "continue",
        "def",
        "del",
        "elif",
        "else",
        "except",
        "finally",
        "for",
        "from",
        "global",
        "if",
        "import",
        "in",
        "is",
        "lambda",
        "match",
        "nonlocal|10",
        "not",
        "or",
        "pass",
        "raise",
        "return",
        "try",
        "while",
        "with",
        "yield",
      ],
      l = {
        $pattern: /[A-Za-z]\w+|__\w+__/,
        keyword: a,
        built_in: [
          "__import__",
          "abs",
          "all",
          "any",
          "ascii",
          "bin",
          "bool",
          "breakpoint",
          "bytearray",
          "bytes",
          "callable",
          "chr",
          "classmethod",
          "compile",
          "complex",
          "delattr",
          "dict",
          "dir",
          "divmod",
          "enumerate",
          "eval",
          "exec",
          "filter",
          "float",
          "format",
          "frozenset",
          "getattr",
          "globals",
          "hasattr",
          "hash",
          "help",
          "hex",
          "id",
          "input",
          "int",
          "isinstance",
          "issubclass",
          "iter",
          "len",
          "list",
          "locals",
          "map",
          "max",
          "memoryview",
          "min",
          "next",
          "object",
          "oct",
          "open",
          "ord",
          "pow",
          "print",
          "property",
          "range",
          "repr",
          "reversed",
          "round",
          "set",
          "setattr",
          "slice",
          "sorted",
          "staticmethod",
          "str",
          "sum",
          "super",
          "tuple",
          "type",
          "vars",
          "zip",
        ],
        literal: [
          "__debug__",
          "Ellipsis",
          "False",
          "None",
          "NotImplemented",
          "True",
        ],
        type: [
          "Any",
          "Callable",
          "Coroutine",
          "Dict",
          "List",
          "Literal",
          "Generic",
          "Optional",
          "Sequence",
          "Set",
          "Tuple",
          "Type",
          "Union",
        ],
      },
      s = { className: "meta", begin: /^(>>>|\.\.\.) / },
      u = {
        className: "subst",
        begin: /\{/,
        end: /\}/,
        keywords: l,
        illegal: /#/,
      },
      c = { begin: /\{\{/, relevance: 0 },
      h = {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE],
        variants: [
          {
            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
            end: /'''/,
            contains: [e.BACKSLASH_ESCAPE, s],
            relevance: 10,
          },
          {
            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
            end: /"""/,
            contains: [e.BACKSLASH_ESCAPE, s],
            relevance: 10,
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])'''/,
            end: /'''/,
            contains: [e.BACKSLASH_ESCAPE, s, c, u],
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])"""/,
            end: /"""/,
            contains: [e.BACKSLASH_ESCAPE, s, c, u],
          },
          { begin: /([uU]|[rR])'/, end: /'/, relevance: 10 },
          { begin: /([uU]|[rR])"/, end: /"/, relevance: 10 },
          { begin: /([bB]|[bB][rR]|[rR][bB])'/, end: /'/ },
          { begin: /([bB]|[bB][rR]|[rR][bB])"/, end: /"/ },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])'/,
            end: /'/,
            contains: [e.BACKSLASH_ESCAPE, c, u],
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])"/,
            end: /"/,
            contains: [e.BACKSLASH_ESCAPE, c, u],
          },
          e.APOS_STRING_MODE,
          e.QUOTE_STRING_MODE,
        ],
      },
      p = "[0-9](_?[0-9])*",
      d = `(\\b(${p}))?\\.(${p})|\\b(${p})\\.`,
      g = `\\b|${a.join("|")}`,
      b = {
        className: "number",
        relevance: 0,
        variants: [
          { begin: `(\\b(${p})|(${d}))[eE][+-]?(${p})[jJ]?(?=${g})` },
          { begin: `(${d})[jJ]?` },
          { begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${g})` },
          { begin: `\\b0[bB](_?[01])+[lL]?(?=${g})` },
          { begin: `\\b0[oO](_?[0-7])+[lL]?(?=${g})` },
          { begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${g})` },
          { begin: `\\b(${p})[jJ](?=${g})` },
        ],
      },
      v = {
        className: "comment",
        begin: t.lookahead(/# type:/),
        end: /$/,
        keywords: l,
        contains: [
          { begin: /# type:/ },
          { begin: /#/, end: /\b\B/, endsWithParent: !0 },
        ],
      },
      _ = {
        className: "params",
        variants: [
          { className: "", begin: /\(\s*\)/, skip: !0 },
          {
            begin: /\(/,
            end: /\)/,
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: l,
            contains: ["self", s, b, h, e.HASH_COMMENT_MODE],
          },
        ],
      };
    return (
      (u.contains = [h, b, s]),
      {
        name: "Python",
        aliases: ["py", "gyp", "ipython"],
        unicodeRegex: !0,
        keywords: l,
        illegal: /(<\/|->|\?)|=>/,
        contains: [
          s,
          b,
          { begin: /\bself\b/ },
          { beginKeywords: "if", relevance: 0 },
          h,
          v,
          e.HASH_COMMENT_MODE,
          {
            match: [/\bdef/, /\s+/, n],
            scope: { 1: "keyword", 3: "title.function" },
            contains: [_],
          },
          {
            variants: [
              { match: [/\bclass/, /\s+/, n, /\s*/, /\(\s*/, n, /\s*\)/] },
              { match: [/\bclass/, /\s+/, n] },
            ],
            scope: {
              1: "keyword",
              3: "title.class",
              6: "title.class.inherited",
            },
          },
          {
            className: "meta",
            begin: /^[\t ]*@/,
            end: /(?=#)|$/,
            contains: [b, _, h],
          },
        ],
      }
    );
  }
  function Ko(e) {
    return {
      aliases: ["pycon"],
      contains: [
        {
          className: "meta.prompt",
          starts: { end: / |$/, starts: { end: "$", subLanguage: "python" } },
          variants: [{ begin: /^>>>(?=[ ]|$)/ }, { begin: /^\.\.\.(?=[ ]|$)/ }],
        },
      ],
    };
  }
  function Wo(e) {
    let t = e.regex,
      n = /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/,
      a = t.either(
        /0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/,
        /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/,
        /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/
      ),
      r = /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/,
      o = t.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/);
    return {
      name: "R",
      keywords: {
        $pattern: n,
        keyword: "function if in break next repeat else for while",
        literal:
          "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10",
        built_in:
          "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm",
      },
      contains: [
        e.COMMENT(/#'/, /$/, {
          contains: [
            {
              scope: "doctag",
              match: /@examples/,
              starts: {
                end: t.lookahead(
                  t.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)
                ),
                endsParent: !0,
              },
            },
            {
              scope: "doctag",
              begin: "@param",
              end: /$/,
              contains: [
                {
                  scope: "variable",
                  variants: [{ match: n }, { match: /`(?:\\.|[^`\\])+`/ }],
                  endsParent: !0,
                },
              ],
            },
            { scope: "doctag", match: /@[a-zA-Z]+/ },
            { scope: "keyword", match: /\\[a-zA-Z]+/ },
          ],
        }),
        e.HASH_COMMENT_MODE,
        {
          scope: "string",
          contains: [e.BACKSLASH_ESCAPE],
          variants: [
            e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\(/, end: /\)(-*)"/ }),
            e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\{/, end: /\}(-*)"/ }),
            e.END_SAME_AS_BEGIN({ begin: /[rR]"(-*)\[/, end: /\](-*)"/ }),
            e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\(/, end: /\)(-*)'/ }),
            e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\{/, end: /\}(-*)'/ }),
            e.END_SAME_AS_BEGIN({ begin: /[rR]'(-*)\[/, end: /\](-*)'/ }),
            { begin: '"', end: '"', relevance: 0 },
            { begin: "'", end: "'", relevance: 0 },
          ],
        },
        {
          relevance: 0,
          variants: [
            { scope: { 1: "operator", 2: "number" }, match: [r, a] },
            { scope: { 1: "operator", 2: "number" }, match: [/%[^%]*%/, a] },
            { scope: { 1: "punctuation", 2: "number" }, match: [o, a] },
            { scope: { 2: "number" }, match: [/[^a-zA-Z0-9._]|^/, a] },
          ],
        },
        { scope: { 3: "operator" }, match: [n, /\s+/, /<-/, /\s+/] },
        {
          scope: "operator",
          relevance: 0,
          variants: [{ match: r }, { match: /%[^%]*%/ }],
        },
        { scope: "punctuation", relevance: 0, match: o },
        { begin: "`", end: "`", contains: [{ begin: /\\./ }] },
      ],
    };
  }
  function Yo(e) {
    let t = e.regex,
      n =
        "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)",
      a = t.either(/\b([A-Z]+[a-z0-9]+)+/, /\b([A-Z]+[a-z0-9]+)+[A-Z]+/),
      r = t.concat(a, /(::\w+)*/),
      i = {
        "variable.constant": ["__FILE__", "__LINE__", "__ENCODING__"],
        "variable.language": ["self", "super"],
        keyword: [
          "alias",
          "and",
          "begin",
          "BEGIN",
          "break",
          "case",
          "class",
          "defined",
          "do",
          "else",
          "elsif",
          "end",
          "END",
          "ensure",
          "for",
          "if",
          "in",
          "module",
          "next",
          "not",
          "or",
          "redo",
          "require",
          "rescue",
          "retry",
          "return",
          "then",
          "undef",
          "unless",
          "until",
          "when",
          "while",
          "yield",
          ...[
            "include",
            "extend",
            "prepend",
            "public",
            "private",
            "protected",
            "raise",
            "throw",
          ],
        ],
        built_in: [
          "proc",
          "lambda",
          "attr_accessor",
          "attr_reader",
          "attr_writer",
          "define_method",
          "private_constant",
          "module_function",
        ],
        literal: ["true", "false", "nil"],
      },
      l = { className: "doctag", begin: "@[A-Za-z]+" },
      s = { begin: "#<", end: ">" },
      u = [
        e.COMMENT("#", "$", { contains: [l] }),
        e.COMMENT("^=begin", "^=end", { contains: [l], relevance: 10 }),
        e.COMMENT("^__END__", e.MATCH_NOTHING_RE),
      ],
      c = { className: "subst", begin: /#\{/, end: /\}/, keywords: i },
      h = {
        className: "string",
        contains: [e.BACKSLASH_ESCAPE, c],
        variants: [
          { begin: /'/, end: /'/ },
          { begin: /"/, end: /"/ },
          { begin: /`/, end: /`/ },
          { begin: /%[qQwWx]?\(/, end: /\)/ },
          { begin: /%[qQwWx]?\[/, end: /\]/ },
          { begin: /%[qQwWx]?\{/, end: /\}/ },
          { begin: /%[qQwWx]?</, end: />/ },
          { begin: /%[qQwWx]?\//, end: /\// },
          { begin: /%[qQwWx]?%/, end: /%/ },
          { begin: /%[qQwWx]?-/, end: /-/ },
          { begin: /%[qQwWx]?\|/, end: /\|/ },
          { begin: /\B\?(\\\d{1,3})/ },
          { begin: /\B\?(\\x[A-Fa-f0-9]{1,2})/ },
          { begin: /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/ },
          { begin: /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/ },
          { begin: /\B\?\\(c|C-)[\x20-\x7e]/ },
          { begin: /\B\?\\?\S/ },
          {
            begin: t.concat(
              /<<[-~]?'?/,
              t.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)
            ),
            contains: [
              e.END_SAME_AS_BEGIN({
                begin: /(\w+)/,
                end: /(\w+)/,
                contains: [e.BACKSLASH_ESCAPE, c],
              }),
            ],
          },
        ],
      },
      p = "[1-9](_?[0-9])*|0",
      d = "[0-9](_?[0-9])*",
      g = {
        className: "number",
        relevance: 0,
        variants: [
          { begin: `\\b(${p})(\\.(${d}))?([eE][+-]?(${d})|r)?i?\\b` },
          { begin: "\\b0[dD][0-9](_?[0-9])*r?i?\\b" },
          { begin: "\\b0[bB][0-1](_?[0-1])*r?i?\\b" },
          { begin: "\\b0[oO][0-7](_?[0-7])*r?i?\\b" },
          { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b" },
          { begin: "\\b0(_?[0-7])+r?i?\\b" },
        ],
      },
      b = {
        variants: [
          { match: /\(\)/ },
          {
            className: "params",
            begin: /\(/,
            end: /(?=\))/,
            excludeBegin: !0,
            endsParent: !0,
            keywords: i,
          },
        ],
      },
      E = [
        h,
        {
          variants: [
            { match: [/class\s+/, r, /\s+<\s+/, r] },
            { match: [/\b(class|module)\s+/, r] },
          ],
          scope: { 2: "title.class", 4: "title.class.inherited" },
          keywords: i,
        },
        {
          match: [/(include|extend)\s+/, r],
          scope: { 2: "title.class" },
          keywords: i,
        },
        { relevance: 0, match: [r, /\.new[. (]/], scope: { 1: "title.class" } },
        {
          relevance: 0,
          match: /\b[A-Z][A-Z_0-9]+\b/,
          className: "variable.constant",
        },
        { relevance: 0, match: a, scope: "title.class" },
        {
          match: [/def/, /\s+/, n],
          scope: { 1: "keyword", 3: "title.function" },
          contains: [b],
        },
        { begin: e.IDENT_RE + "::" },
        {
          className: "symbol",
          begin: e.UNDERSCORE_IDENT_RE + "(!|\\?)?:",
          relevance: 0,
        },
        {
          className: "symbol",
          begin: ":(?!\\s)",
          contains: [h, { begin: n }],
          relevance: 0,
        },
        g,
        {
          className: "variable",
          begin: "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])",
        },
        {
          className: "params",
          begin: /\|/,
          end: /\|/,
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0,
          keywords: i,
        },
        {
          begin: "(" + e.RE_STARTERS_RE + "|unless)\\s*",
          keywords: "unless",
          contains: [
            {
              className: "regexp",
              contains: [e.BACKSLASH_ESCAPE, c],
              illegal: /\n/,
              variants: [
                { begin: "/", end: "/[a-z]*" },
                { begin: /%r\{/, end: /\}[a-z]*/ },
                { begin: "%r\\(", end: "\\)[a-z]*" },
                { begin: "%r!", end: "![a-z]*" },
                { begin: "%r\\[", end: "\\][a-z]*" },
              ],
            },
          ].concat(s, u),
          relevance: 0,
        },
      ].concat(s, u);
    (c.contains = E), (b.contains = E);
    let z = "[>?]>",
      N = "[\\w#]+\\(\\w+\\):\\d+:\\d+[>*]",
      L = "(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>",
      W = [
        { begin: /^\s*=>/, starts: { end: "$", contains: E } },
        {
          className: "meta.prompt",
          begin: "^(" + z + "|" + N + "|" + L + ")(?=[ ])",
          starts: { end: "$", keywords: i, contains: E },
        },
      ];
    return (
      u.unshift(s),
      {
        name: "Ruby",
        aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
        keywords: i,
        illegal: /\/\*/,
        contains: [e.SHEBANG({ binary: "ruby" })].concat(W).concat(u).concat(E),
      }
    );
  }
  function Qo(e) {
    let t = e.regex,
      n = {
        className: "title.function.invoke",
        relevance: 0,
        begin: t.concat(/\b/, /(?!let\b)/, e.IDENT_RE, t.lookahead(/\s*\(/)),
      },
      a = "([ui](8|16|32|64|128|size)|f(32|64))?",
      r = [
        "abstract",
        "as",
        "async",
        "await",
        "become",
        "box",
        "break",
        "const",
        "continue",
        "crate",
        "do",
        "dyn",
        "else",
        "enum",
        "extern",
        "false",
        "final",
        "fn",
        "for",
        "if",
        "impl",
        "in",
        "let",
        "loop",
        "macro",
        "match",
        "mod",
        "move",
        "mut",
        "override",
        "priv",
        "pub",
        "ref",
        "return",
        "self",
        "Self",
        "static",
        "struct",
        "super",
        "trait",
        "true",
        "try",
        "type",
        "typeof",
        "unsafe",
        "unsized",
        "use",
        "virtual",
        "where",
        "while",
        "yield",
      ],
      o = ["true", "false", "Some", "None", "Ok", "Err"],
      i = [
        "drop ",
        "Copy",
        "Send",
        "Sized",
        "Sync",
        "Drop",
        "Fn",
        "FnMut",
        "FnOnce",
        "ToOwned",
        "Clone",
        "Debug",
        "PartialEq",
        "PartialOrd",
        "Eq",
        "Ord",
        "AsRef",
        "AsMut",
        "Into",
        "From",
        "Default",
        "Iterator",
        "Extend",
        "IntoIterator",
        "DoubleEndedIterator",
        "ExactSizeIterator",
        "SliceConcatExt",
        "ToString",
        "assert!",
        "assert_eq!",
        "bitflags!",
        "bytes!",
        "cfg!",
        "col!",
        "concat!",
        "concat_idents!",
        "debug_assert!",
        "debug_assert_eq!",
        "env!",
        "panic!",
        "file!",
        "format!",
        "format_args!",
        "include_bytes!",
        "include_str!",
        "line!",
        "local_data_key!",
        "module_path!",
        "option_env!",
        "print!",
        "println!",
        "select!",
        "stringify!",
        "try!",
        "unimplemented!",
        "unreachable!",
        "vec!",
        "write!",
        "writeln!",
        "macro_rules!",
        "assert_ne!",
        "debug_assert_ne!",
      ],
      l = [
        "i8",
        "i16",
        "i32",
        "i64",
        "i128",
        "isize",
        "u8",
        "u16",
        "u32",
        "u64",
        "u128",
        "usize",
        "f32",
        "f64",
        "str",
        "char",
        "bool",
        "Box",
        "Option",
        "Result",
        "String",
        "Vec",
      ];
    return {
      name: "Rust",
      aliases: ["rs"],
      keywords: {
        $pattern: e.IDENT_RE + "!?",
        type: l,
        keyword: r,
        literal: o,
        built_in: i,
      },
      illegal: "</",
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
        e.inherit(e.QUOTE_STRING_MODE, { begin: /b?"/, illegal: null }),
        {
          className: "string",
          variants: [
            { begin: /b?r(#*)"(.|\n)*?"\1(?!#)/ },
            { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ },
          ],
        },
        { className: "symbol", begin: /'[a-zA-Z_][a-zA-Z0-9_]*/ },
        {
          className: "number",
          variants: [
            { begin: "\\b0b([01_]+)" + a },
            { begin: "\\b0o([0-7_]+)" + a },
            { begin: "\\b0x([A-Fa-f0-9_]+)" + a },
            { begin: "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + a },
          ],
          relevance: 0,
        },
        {
          begin: [/fn/, /\s+/, e.UNDERSCORE_IDENT_RE],
          className: { 1: "keyword", 3: "title.function" },
        },
        {
          className: "meta",
          begin: "#!?\\[",
          end: "\\]",
          contains: [{ className: "string", begin: /"/, end: /"/ }],
        },
        {
          begin: [/let/, /\s+/, /(?:mut\s+)?/, e.UNDERSCORE_IDENT_RE],
          className: { 1: "keyword", 3: "keyword", 4: "variable" },
        },
        {
          begin: [/for/, /\s+/, e.UNDERSCORE_IDENT_RE, /\s+/, /in/],
          className: { 1: "keyword", 3: "variable", 5: "keyword" },
        },
        {
          begin: [/type/, /\s+/, e.UNDERSCORE_IDENT_RE],
          className: { 1: "keyword", 3: "title.class" },
        },
        {
          begin: [
            /(?:trait|enum|struct|union|impl|for)/,
            /\s+/,
            e.UNDERSCORE_IDENT_RE,
          ],
          className: { 1: "keyword", 3: "title.class" },
        },
        {
          begin: e.IDENT_RE + "::",
          keywords: { keyword: "Self", built_in: i, type: l },
        },
        { className: "punctuation", begin: "->" },
        n,
      ],
    };
  }
  var O3 = (e) => ({
      IMPORTANT: { scope: "meta", begin: "!important" },
      BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
      HEXCOLOR: {
        scope: "number",
        begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
      },
      FUNCTION_DISPATCH: { className: "built_in", begin: /[\w-]+(?=\()/ },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: "selector-attr",
        begin: /\[/,
        end: /\]/,
        illegal: "$",
        contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE],
      },
      CSS_NUMBER_MODE: {
        scope: "number",
        begin:
          e.NUMBER_RE +
          "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        relevance: 0,
      },
      CSS_VARIABLE: { className: "attr", begin: /--[A-Za-z][A-Za-z0-9_-]*/ },
    }),
    H3 = [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "blockquote",
      "body",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "dd",
      "del",
      "details",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "label",
      "legend",
      "li",
      "main",
      "mark",
      "menu",
      "nav",
      "object",
      "ol",
      "p",
      "q",
      "quote",
      "samp",
      "section",
      "span",
      "strong",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "ul",
      "var",
      "video",
    ],
    D3 = [
      "any-hover",
      "any-pointer",
      "aspect-ratio",
      "color",
      "color-gamut",
      "color-index",
      "device-aspect-ratio",
      "device-height",
      "device-width",
      "display-mode",
      "forced-colors",
      "grid",
      "height",
      "hover",
      "inverted-colors",
      "monochrome",
      "orientation",
      "overflow-block",
      "overflow-inline",
      "pointer",
      "prefers-color-scheme",
      "prefers-contrast",
      "prefers-reduced-motion",
      "prefers-reduced-transparency",
      "resolution",
      "scan",
      "scripting",
      "update",
      "width",
      "min-width",
      "max-width",
      "min-height",
      "max-height",
    ],
    V3 = [
      "active",
      "any-link",
      "blank",
      "checked",
      "current",
      "default",
      "defined",
      "dir",
      "disabled",
      "drop",
      "empty",
      "enabled",
      "first",
      "first-child",
      "first-of-type",
      "fullscreen",
      "future",
      "focus",
      "focus-visible",
      "focus-within",
      "has",
      "host",
      "host-context",
      "hover",
      "indeterminate",
      "in-range",
      "invalid",
      "is",
      "lang",
      "last-child",
      "last-of-type",
      "left",
      "link",
      "local-link",
      "not",
      "nth-child",
      "nth-col",
      "nth-last-child",
      "nth-last-col",
      "nth-last-of-type",
      "nth-of-type",
      "only-child",
      "only-of-type",
      "optional",
      "out-of-range",
      "past",
      "placeholder-shown",
      "read-only",
      "read-write",
      "required",
      "right",
      "root",
      "scope",
      "target",
      "target-within",
      "user-invalid",
      "valid",
      "visited",
      "where",
    ],
    F3 = [
      "after",
      "backdrop",
      "before",
      "cue",
      "cue-region",
      "first-letter",
      "first-line",
      "grammar-error",
      "marker",
      "part",
      "placeholder",
      "selection",
      "slotted",
      "spelling-error",
    ],
    P3 = [
      "align-content",
      "align-items",
      "align-self",
      "all",
      "animation",
      "animation-delay",
      "animation-direction",
      "animation-duration",
      "animation-fill-mode",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "backface-visibility",
      "background",
      "background-attachment",
      "background-blend-mode",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "block-size",
      "border",
      "border-block",
      "border-block-color",
      "border-block-end",
      "border-block-end-color",
      "border-block-end-style",
      "border-block-end-width",
      "border-block-start",
      "border-block-start-color",
      "border-block-start-style",
      "border-block-start-width",
      "border-block-style",
      "border-block-width",
      "border-bottom",
      "border-bottom-color",
      "border-bottom-left-radius",
      "border-bottom-right-radius",
      "border-bottom-style",
      "border-bottom-width",
      "border-collapse",
      "border-color",
      "border-image",
      "border-image-outset",
      "border-image-repeat",
      "border-image-slice",
      "border-image-source",
      "border-image-width",
      "border-inline",
      "border-inline-color",
      "border-inline-end",
      "border-inline-end-color",
      "border-inline-end-style",
      "border-inline-end-width",
      "border-inline-start",
      "border-inline-start-color",
      "border-inline-start-style",
      "border-inline-start-width",
      "border-inline-style",
      "border-inline-width",
      "border-left",
      "border-left-color",
      "border-left-style",
      "border-left-width",
      "border-radius",
      "border-right",
      "border-right-color",
      "border-right-style",
      "border-right-width",
      "border-spacing",
      "border-style",
      "border-top",
      "border-top-color",
      "border-top-left-radius",
      "border-top-right-radius",
      "border-top-style",
      "border-top-width",
      "border-width",
      "bottom",
      "box-decoration-break",
      "box-shadow",
      "box-sizing",
      "break-after",
      "break-before",
      "break-inside",
      "caption-side",
      "caret-color",
      "clear",
      "clip",
      "clip-path",
      "clip-rule",
      "color",
      "column-count",
      "column-fill",
      "column-gap",
      "column-rule",
      "column-rule-color",
      "column-rule-style",
      "column-rule-width",
      "column-span",
      "column-width",
      "columns",
      "contain",
      "content",
      "content-visibility",
      "counter-increment",
      "counter-reset",
      "cue",
      "cue-after",
      "cue-before",
      "cursor",
      "direction",
      "display",
      "empty-cells",
      "filter",
      "flex",
      "flex-basis",
      "flex-direction",
      "flex-flow",
      "flex-grow",
      "flex-shrink",
      "flex-wrap",
      "float",
      "flow",
      "font",
      "font-display",
      "font-family",
      "font-feature-settings",
      "font-kerning",
      "font-language-override",
      "font-size",
      "font-size-adjust",
      "font-smoothing",
      "font-stretch",
      "font-style",
      "font-synthesis",
      "font-variant",
      "font-variant-caps",
      "font-variant-east-asian",
      "font-variant-ligatures",
      "font-variant-numeric",
      "font-variant-position",
      "font-variation-settings",
      "font-weight",
      "gap",
      "glyph-orientation-vertical",
      "grid",
      "grid-area",
      "grid-auto-columns",
      "grid-auto-flow",
      "grid-auto-rows",
      "grid-column",
      "grid-column-end",
      "grid-column-start",
      "grid-gap",
      "grid-row",
      "grid-row-end",
      "grid-row-start",
      "grid-template",
      "grid-template-areas",
      "grid-template-columns",
      "grid-template-rows",
      "hanging-punctuation",
      "height",
      "hyphens",
      "icon",
      "image-orientation",
      "image-rendering",
      "image-resolution",
      "ime-mode",
      "inline-size",
      "isolation",
      "justify-content",
      "left",
      "letter-spacing",
      "line-break",
      "line-height",
      "list-style",
      "list-style-image",
      "list-style-position",
      "list-style-type",
      "margin",
      "margin-block",
      "margin-block-end",
      "margin-block-start",
      "margin-bottom",
      "margin-inline",
      "margin-inline-end",
      "margin-inline-start",
      "margin-left",
      "margin-right",
      "margin-top",
      "marks",
      "mask",
      "mask-border",
      "mask-border-mode",
      "mask-border-outset",
      "mask-border-repeat",
      "mask-border-slice",
      "mask-border-source",
      "mask-border-width",
      "mask-clip",
      "mask-composite",
      "mask-image",
      "mask-mode",
      "mask-origin",
      "mask-position",
      "mask-repeat",
      "mask-size",
      "mask-type",
      "max-block-size",
      "max-height",
      "max-inline-size",
      "max-width",
      "min-block-size",
      "min-height",
      "min-inline-size",
      "min-width",
      "mix-blend-mode",
      "nav-down",
      "nav-index",
      "nav-left",
      "nav-right",
      "nav-up",
      "none",
      "normal",
      "object-fit",
      "object-position",
      "opacity",
      "order",
      "orphans",
      "outline",
      "outline-color",
      "outline-offset",
      "outline-style",
      "outline-width",
      "overflow",
      "overflow-wrap",
      "overflow-x",
      "overflow-y",
      "padding",
      "padding-block",
      "padding-block-end",
      "padding-block-start",
      "padding-bottom",
      "padding-inline",
      "padding-inline-end",
      "padding-inline-start",
      "padding-left",
      "padding-right",
      "padding-top",
      "page-break-after",
      "page-break-before",
      "page-break-inside",
      "pause",
      "pause-after",
      "pause-before",
      "perspective",
      "perspective-origin",
      "pointer-events",
      "position",
      "quotes",
      "resize",
      "rest",
      "rest-after",
      "rest-before",
      "right",
      "row-gap",
      "scroll-margin",
      "scroll-margin-block",
      "scroll-margin-block-end",
      "scroll-margin-block-start",
      "scroll-margin-bottom",
      "scroll-margin-inline",
      "scroll-margin-inline-end",
      "scroll-margin-inline-start",
      "scroll-margin-left",
      "scroll-margin-right",
      "scroll-margin-top",
      "scroll-padding",
      "scroll-padding-block",
      "scroll-padding-block-end",
      "scroll-padding-block-start",
      "scroll-padding-bottom",
      "scroll-padding-inline",
      "scroll-padding-inline-end",
      "scroll-padding-inline-start",
      "scroll-padding-left",
      "scroll-padding-right",
      "scroll-padding-top",
      "scroll-snap-align",
      "scroll-snap-stop",
      "scroll-snap-type",
      "scrollbar-color",
      "scrollbar-gutter",
      "scrollbar-width",
      "shape-image-threshold",
      "shape-margin",
      "shape-outside",
      "speak",
      "speak-as",
      "src",
      "tab-size",
      "table-layout",
      "text-align",
      "text-align-all",
      "text-align-last",
      "text-combine-upright",
      "text-decoration",
      "text-decoration-color",
      "text-decoration-line",
      "text-decoration-style",
      "text-emphasis",
      "text-emphasis-color",
      "text-emphasis-position",
      "text-emphasis-style",
      "text-indent",
      "text-justify",
      "text-orientation",
      "text-overflow",
      "text-rendering",
      "text-shadow",
      "text-transform",
      "text-underline-position",
      "top",
      "transform",
      "transform-box",
      "transform-origin",
      "transform-style",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "unicode-bidi",
      "vertical-align",
      "visibility",
      "voice-balance",
      "voice-duration",
      "voice-family",
      "voice-pitch",
      "voice-range",
      "voice-rate",
      "voice-stress",
      "voice-volume",
      "white-space",
      "widows",
      "width",
      "will-change",
      "word-break",
      "word-spacing",
      "word-wrap",
      "writing-mode",
      "z-index",
    ].reverse();
  function Zo(e) {
    let t = O3(e),
      n = F3,
      a = V3,
      r = "@[a-z-]+",
      o = "and or not only",
      l = {
        className: "variable",
        begin: "(\\$" + "[a-zA-Z-][a-zA-Z0-9_-]*" + ")\\b",
        relevance: 0,
      };
    return {
      name: "SCSS",
      case_insensitive: !0,
      illegal: "[=/|']",
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        t.CSS_NUMBER_MODE,
        { className: "selector-id", begin: "#[A-Za-z0-9_-]+", relevance: 0 },
        {
          className: "selector-class",
          begin: "\\.[A-Za-z0-9_-]+",
          relevance: 0,
        },
        t.ATTRIBUTE_SELECTOR_MODE,
        {
          className: "selector-tag",
          begin: "\\b(" + H3.join("|") + ")\\b",
          relevance: 0,
        },
        { className: "selector-pseudo", begin: ":(" + a.join("|") + ")" },
        { className: "selector-pseudo", begin: ":(:)?(" + n.join("|") + ")" },
        l,
        { begin: /\(/, end: /\)/, contains: [t.CSS_NUMBER_MODE] },
        t.CSS_VARIABLE,
        { className: "attribute", begin: "\\b(" + P3.join("|") + ")\\b" },
        {
          begin:
            "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b",
        },
        {
          begin: /:/,
          end: /[;}{]/,
          relevance: 0,
          contains: [
            t.BLOCK_COMMENT,
            l,
            t.HEXCOLOR,
            t.CSS_NUMBER_MODE,
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            t.IMPORTANT,
            t.FUNCTION_DISPATCH,
          ],
        },
        {
          begin: "@(page|font-face)",
          keywords: { $pattern: r, keyword: "@page @font-face" },
        },
        {
          begin: "@",
          end: "[{;]",
          returnBegin: !0,
          keywords: {
            $pattern: /[a-z-]+/,
            keyword: o,
            attribute: D3.join(" "),
          },
          contains: [
            { begin: r, className: "keyword" },
            { begin: /[a-z-]+(?=:)/, className: "attribute" },
            l,
            e.QUOTE_STRING_MODE,
            e.APOS_STRING_MODE,
            t.HEXCOLOR,
            t.CSS_NUMBER_MODE,
          ],
        },
        t.FUNCTION_DISPATCH,
      ],
    };
  }
  function Xo(e) {
    return {
      name: "Shell Session",
      aliases: ["console", "shellsession"],
      contains: [
        {
          className: "meta.prompt",
          begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/,
          starts: { end: /[^\\](?=\s*$)/, subLanguage: "bash" },
        },
      ],
    };
  }
  function jo(e) {
    let t = e.regex,
      n = e.COMMENT("--", "$"),
      a = {
        className: "string",
        variants: [{ begin: /'/, end: /'/, contains: [{ begin: /''/ }] }],
      },
      r = { begin: /"/, end: /"/, contains: [{ begin: /""/ }] },
      o = ["true", "false", "unknown"],
      i = [
        "double precision",
        "large object",
        "with timezone",
        "without timezone",
      ],
      l = [
        "bigint",
        "binary",
        "blob",
        "boolean",
        "char",
        "character",
        "clob",
        "date",
        "dec",
        "decfloat",
        "decimal",
        "float",
        "int",
        "integer",
        "interval",
        "nchar",
        "nclob",
        "national",
        "numeric",
        "real",
        "row",
        "smallint",
        "time",
        "timestamp",
        "varchar",
        "varying",
        "varbinary",
      ],
      s = ["add", "asc", "collation", "desc", "final", "first", "last", "view"],
      u = [
        "abs",
        "acos",
        "all",
        "allocate",
        "alter",
        "and",
        "any",
        "are",
        "array",
        "array_agg",
        "array_max_cardinality",
        "as",
        "asensitive",
        "asin",
        "asymmetric",
        "at",
        "atan",
        "atomic",
        "authorization",
        "avg",
        "begin",
        "begin_frame",
        "begin_partition",
        "between",
        "bigint",
        "binary",
        "blob",
        "boolean",
        "both",
        "by",
        "call",
        "called",
        "cardinality",
        "cascaded",
        "case",
        "cast",
        "ceil",
        "ceiling",
        "char",
        "char_length",
        "character",
        "character_length",
        "check",
        "classifier",
        "clob",
        "close",
        "coalesce",
        "collate",
        "collect",
        "column",
        "commit",
        "condition",
        "connect",
        "constraint",
        "contains",
        "convert",
        "copy",
        "corr",
        "corresponding",
        "cos",
        "cosh",
        "count",
        "covar_pop",
        "covar_samp",
        "create",
        "cross",
        "cube",
        "cume_dist",
        "current",
        "current_catalog",
        "current_date",
        "current_default_transform_group",
        "current_path",
        "current_role",
        "current_row",
        "current_schema",
        "current_time",
        "current_timestamp",
        "current_path",
        "current_role",
        "current_transform_group_for_type",
        "current_user",
        "cursor",
        "cycle",
        "date",
        "day",
        "deallocate",
        "dec",
        "decimal",
        "decfloat",
        "declare",
        "default",
        "define",
        "delete",
        "dense_rank",
        "deref",
        "describe",
        "deterministic",
        "disconnect",
        "distinct",
        "double",
        "drop",
        "dynamic",
        "each",
        "element",
        "else",
        "empty",
        "end",
        "end_frame",
        "end_partition",
        "end-exec",
        "equals",
        "escape",
        "every",
        "except",
        "exec",
        "execute",
        "exists",
        "exp",
        "external",
        "extract",
        "false",
        "fetch",
        "filter",
        "first_value",
        "float",
        "floor",
        "for",
        "foreign",
        "frame_row",
        "free",
        "from",
        "full",
        "function",
        "fusion",
        "get",
        "global",
        "grant",
        "group",
        "grouping",
        "groups",
        "having",
        "hold",
        "hour",
        "identity",
        "in",
        "indicator",
        "initial",
        "inner",
        "inout",
        "insensitive",
        "insert",
        "int",
        "integer",
        "intersect",
        "intersection",
        "interval",
        "into",
        "is",
        "join",
        "json_array",
        "json_arrayagg",
        "json_exists",
        "json_object",
        "json_objectagg",
        "json_query",
        "json_table",
        "json_table_primitive",
        "json_value",
        "lag",
        "language",
        "large",
        "last_value",
        "lateral",
        "lead",
        "leading",
        "left",
        "like",
        "like_regex",
        "listagg",
        "ln",
        "local",
        "localtime",
        "localtimestamp",
        "log",
        "log10",
        "lower",
        "match",
        "match_number",
        "match_recognize",
        "matches",
        "max",
        "member",
        "merge",
        "method",
        "min",
        "minute",
        "mod",
        "modifies",
        "module",
        "month",
        "multiset",
        "national",
        "natural",
        "nchar",
        "nclob",
        "new",
        "no",
        "none",
        "normalize",
        "not",
        "nth_value",
        "ntile",
        "null",
        "nullif",
        "numeric",
        "octet_length",
        "occurrences_regex",
        "of",
        "offset",
        "old",
        "omit",
        "on",
        "one",
        "only",
        "open",
        "or",
        "order",
        "out",
        "outer",
        "over",
        "overlaps",
        "overlay",
        "parameter",
        "partition",
        "pattern",
        "per",
        "percent",
        "percent_rank",
        "percentile_cont",
        "percentile_disc",
        "period",
        "portion",
        "position",
        "position_regex",
        "power",
        "precedes",
        "precision",
        "prepare",
        "primary",
        "procedure",
        "ptf",
        "range",
        "rank",
        "reads",
        "real",
        "recursive",
        "ref",
        "references",
        "referencing",
        "regr_avgx",
        "regr_avgy",
        "regr_count",
        "regr_intercept",
        "regr_r2",
        "regr_slope",
        "regr_sxx",
        "regr_sxy",
        "regr_syy",
        "release",
        "result",
        "return",
        "returns",
        "revoke",
        "right",
        "rollback",
        "rollup",
        "row",
        "row_number",
        "rows",
        "running",
        "savepoint",
        "scope",
        "scroll",
        "search",
        "second",
        "seek",
        "select",
        "sensitive",
        "session_user",
        "set",
        "show",
        "similar",
        "sin",
        "sinh",
        "skip",
        "smallint",
        "some",
        "specific",
        "specifictype",
        "sql",
        "sqlexception",
        "sqlstate",
        "sqlwarning",
        "sqrt",
        "start",
        "static",
        "stddev_pop",
        "stddev_samp",
        "submultiset",
        "subset",
        "substring",
        "substring_regex",
        "succeeds",
        "sum",
        "symmetric",
        "system",
        "system_time",
        "system_user",
        "table",
        "tablesample",
        "tan",
        "tanh",
        "then",
        "time",
        "timestamp",
        "timezone_hour",
        "timezone_minute",
        "to",
        "trailing",
        "translate",
        "translate_regex",
        "translation",
        "treat",
        "trigger",
        "trim",
        "trim_array",
        "true",
        "truncate",
        "uescape",
        "union",
        "unique",
        "unknown",
        "unnest",
        "update",
        "upper",
        "user",
        "using",
        "value",
        "values",
        "value_of",
        "var_pop",
        "var_samp",
        "varbinary",
        "varchar",
        "varying",
        "versioning",
        "when",
        "whenever",
        "where",
        "width_bucket",
        "window",
        "with",
        "within",
        "without",
        "year",
      ],
      c = [
        "abs",
        "acos",
        "array_agg",
        "asin",
        "atan",
        "avg",
        "cast",
        "ceil",
        "ceiling",
        "coalesce",
        "corr",
        "cos",
        "cosh",
        "count",
        "covar_pop",
        "covar_samp",
        "cume_dist",
        "dense_rank",
        "deref",
        "element",
        "exp",
        "extract",
        "first_value",
        "floor",
        "json_array",
        "json_arrayagg",
        "json_exists",
        "json_object",
        "json_objectagg",
        "json_query",
        "json_table",
        "json_table_primitive",
        "json_value",
        "lag",
        "last_value",
        "lead",
        "listagg",
        "ln",
        "log",
        "log10",
        "lower",
        "max",
        "min",
        "mod",
        "nth_value",
        "ntile",
        "nullif",
        "percent_rank",
        "percentile_cont",
        "percentile_disc",
        "position",
        "position_regex",
        "power",
        "rank",
        "regr_avgx",
        "regr_avgy",
        "regr_count",
        "regr_intercept",
        "regr_r2",
        "regr_slope",
        "regr_sxx",
        "regr_sxy",
        "regr_syy",
        "row_number",
        "sin",
        "sinh",
        "sqrt",
        "stddev_pop",
        "stddev_samp",
        "substring",
        "substring_regex",
        "sum",
        "tan",
        "tanh",
        "translate",
        "translate_regex",
        "treat",
        "trim",
        "trim_array",
        "unnest",
        "upper",
        "value_of",
        "var_pop",
        "var_samp",
        "width_bucket",
      ],
      h = [
        "current_catalog",
        "current_date",
        "current_default_transform_group",
        "current_path",
        "current_role",
        "current_schema",
        "current_transform_group_for_type",
        "current_user",
        "session_user",
        "system_time",
        "system_user",
        "current_time",
        "localtime",
        "current_timestamp",
        "localtimestamp",
      ],
      p = [
        "create table",
        "insert into",
        "primary key",
        "foreign key",
        "not null",
        "alter table",
        "add constraint",
        "grouping sets",
        "on overflow",
        "character set",
        "respect nulls",
        "ignore nulls",
        "nulls first",
        "nulls last",
        "depth first",
        "breadth first",
      ],
      d = c,
      g = [...u, ...s].filter((M) => !c.includes(M)),
      b = { className: "variable", begin: /@[a-z0-9]+/ },
      v = {
        className: "operator",
        begin: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
        relevance: 0,
      },
      _ = {
        begin: t.concat(/\b/, t.either(...d), /\s*\(/),
        relevance: 0,
        keywords: { built_in: d },
      };
    function C(M, { exceptions: y, when: x } = {}) {
      let E = x;
      return (
        (y = y || []),
        M.map((z) =>
          z.match(/\|\d+$/) || y.includes(z) ? z : E(z) ? `${z}|0` : z
        )
      );
    }
    return {
      name: "SQL",
      case_insensitive: !0,
      illegal: /[{}]|<\//,
      keywords: {
        $pattern: /\b[\w\.]+/,
        keyword: C(g, { when: (M) => M.length < 3 }),
        literal: o,
        type: l,
        built_in: h,
      },
      contains: [
        {
          begin: t.either(...p),
          relevance: 0,
          keywords: {
            $pattern: /[\w\.]+/,
            keyword: g.concat(p),
            literal: o,
            type: l,
          },
        },
        { className: "type", begin: t.either(...i) },
        _,
        b,
        a,
        r,
        e.C_NUMBER_MODE,
        e.C_BLOCK_COMMENT_MODE,
        n,
        v,
      ],
    };
  }
  function ni(e) {
    return e ? (typeof e == "string" ? e : e.source) : null;
  }
  function E1(e) {
    return se("(?=", e, ")");
  }
  function se(...e) {
    return e.map((n) => ni(n)).join("");
  }
  function B3(e) {
    let t = e[e.length - 1];
    return typeof t == "object" && t.constructor === Object
      ? (e.splice(e.length - 1, 1), t)
      : {};
  }
  function Le(...e) {
    return (
      "(" + (B3(e).capture ? "" : "?:") + e.map((a) => ni(a)).join("|") + ")"
    );
  }
  var G0 = (e) => se(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/),
    U3 = ["Protocol", "Type"].map(G0),
    Jo = ["init", "self"].map(G0),
    $3 = ["Any", "Self"],
    U0 = [
      "actor",
      "any",
      "associatedtype",
      "async",
      "await",
      /as\?/,
      /as!/,
      "as",
      "break",
      "case",
      "catch",
      "class",
      "continue",
      "convenience",
      "default",
      "defer",
      "deinit",
      "didSet",
      "distributed",
      "do",
      "dynamic",
      "else",
      "enum",
      "extension",
      "fallthrough",
      /fileprivate\(set\)/,
      "fileprivate",
      "final",
      "for",
      "func",
      "get",
      "guard",
      "if",
      "import",
      "indirect",
      "infix",
      /init\?/,
      /init!/,
      "inout",
      /internal\(set\)/,
      "internal",
      "in",
      "is",
      "isolated",
      "nonisolated",
      "lazy",
      "let",
      "mutating",
      "nonmutating",
      /open\(set\)/,
      "open",
      "operator",
      "optional",
      "override",
      "postfix",
      "precedencegroup",
      "prefix",
      /private\(set\)/,
      "private",
      "protocol",
      /public\(set\)/,
      "public",
      "repeat",
      "required",
      "rethrows",
      "return",
      "set",
      "some",
      "static",
      "struct",
      "subscript",
      "super",
      "switch",
      "throws",
      "throw",
      /try\?/,
      /try!/,
      "try",
      "typealias",
      /unowned\(safe\)/,
      /unowned\(unsafe\)/,
      "unowned",
      "var",
      "weak",
      "where",
      "while",
      "willSet",
    ],
    ei = ["false", "nil", "true"],
    q3 = [
      "assignment",
      "associativity",
      "higherThan",
      "left",
      "lowerThan",
      "none",
      "right",
    ],
    G3 = [
      "#colorLiteral",
      "#column",
      "#dsohandle",
      "#else",
      "#elseif",
      "#endif",
      "#error",
      "#file",
      "#fileID",
      "#fileLiteral",
      "#filePath",
      "#function",
      "#if",
      "#imageLiteral",
      "#keyPath",
      "#line",
      "#selector",
      "#sourceLocation",
      "#warn_unqualified_access",
      "#warning",
    ],
    ti = [
      "abs",
      "all",
      "any",
      "assert",
      "assertionFailure",
      "debugPrint",
      "dump",
      "fatalError",
      "getVaList",
      "isKnownUniquelyReferenced",
      "max",
      "min",
      "numericCast",
      "pointwiseMax",
      "pointwiseMin",
      "precondition",
      "preconditionFailure",
      "print",
      "readLine",
      "repeatElement",
      "sequence",
      "stride",
      "swap",
      "swift_unboxFromSwiftValueWithType",
      "transcode",
      "type",
      "unsafeBitCast",
      "unsafeDowncast",
      "withExtendedLifetime",
      "withUnsafeMutablePointer",
      "withUnsafePointer",
      "withVaList",
      "withoutActuallyEscaping",
      "zip",
    ],
    ai = Le(
      /[/=\-+!*%<>&|^~?]/,
      /[\u00A1-\u00A7]/,
      /[\u00A9\u00AB]/,
      /[\u00AC\u00AE]/,
      /[\u00B0\u00B1]/,
      /[\u00B6\u00BB\u00BF\u00D7\u00F7]/,
      /[\u2016-\u2017]/,
      /[\u2020-\u2027]/,
      /[\u2030-\u203E]/,
      /[\u2041-\u2053]/,
      /[\u2055-\u205E]/,
      /[\u2190-\u23FF]/,
      /[\u2500-\u2775]/,
      /[\u2794-\u2BFF]/,
      /[\u2E00-\u2E7F]/,
      /[\u3001-\u3003]/,
      /[\u3008-\u3020]/,
      /[\u3030]/
    ),
    ri = Le(
      ai,
      /[\u0300-\u036F]/,
      /[\u1DC0-\u1DFF]/,
      /[\u20D0-\u20FF]/,
      /[\uFE00-\uFE0F]/,
      /[\uFE20-\uFE2F]/
    ),
    $0 = se(ai, ri, "*"),
    oi = Le(
      /[a-zA-Z_]/,
      /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/,
      /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/,
      /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/,
      /[\u1E00-\u1FFF]/,
      /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/,
      /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/,
      /[\u2C00-\u2DFF\u2E80-\u2FFF]/,
      /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/,
      /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/,
      /[\uFE47-\uFEFE\uFF00-\uFFFD]/
    ),
    _1 = Le(oi, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/),
    a5 = se(oi, _1, "*"),
    q0 = se(/[A-Z]/, _1, "*"),
    K3 = [
      "autoclosure",
      se(/convention\(/, Le("swift", "block", "c"), /\)/),
      "discardableResult",
      "dynamicCallable",
      "dynamicMemberLookup",
      "escaping",
      "frozen",
      "GKInspectable",
      "IBAction",
      "IBDesignable",
      "IBInspectable",
      "IBOutlet",
      "IBSegueAction",
      "inlinable",
      "main",
      "nonobjc",
      "NSApplicationMain",
      "NSCopying",
      "NSManaged",
      se(/objc\(/, a5, /\)/),
      "objc",
      "objcMembers",
      "propertyWrapper",
      "requires_stored_property_inits",
      "resultBuilder",
      "testable",
      "UIApplicationMain",
      "unknown",
      "usableFromInline",
    ],
    W3 = [
      "iOS",
      "iOSApplicationExtension",
      "macOS",
      "macOSApplicationExtension",
      "macCatalyst",
      "macCatalystApplicationExtension",
      "watchOS",
      "watchOSApplicationExtension",
      "tvOS",
      "tvOSApplicationExtension",
      "swift",
    ];
  function ii(e) {
    let t = { match: /\s+/, relevance: 0 },
      n = e.COMMENT("/\\*", "\\*/", { contains: ["self"] }),
      a = [e.C_LINE_COMMENT_MODE, n],
      r = { match: [/\./, Le(...U3, ...Jo)], className: { 2: "keyword" } },
      o = { match: se(/\./, Le(...U0)), relevance: 0 },
      i = U0.filter((ne) => typeof ne == "string").concat(["_|0"]),
      l = U0.filter((ne) => typeof ne != "string")
        .concat($3)
        .map(G0),
      s = { variants: [{ className: "keyword", match: Le(...l, ...Jo) }] },
      u = { $pattern: Le(/\b\w+/, /#\w+/), keyword: i.concat(G3), literal: ei },
      c = [r, o, s],
      h = { match: se(/\./, Le(...ti)), relevance: 0 },
      p = { className: "built_in", match: se(/\b/, Le(...ti), /(?=\()/) },
      d = [h, p],
      g = { match: /->/, relevance: 0 },
      b = {
        className: "operator",
        relevance: 0,
        variants: [{ match: $0 }, { match: `\\.(\\.|${ri})+` }],
      },
      v = [g, b],
      _ = "([0-9]_*)+",
      C = "([0-9a-fA-F]_*)+",
      M = {
        className: "number",
        relevance: 0,
        variants: [
          { match: `\\b(${_})(\\.(${_}))?([eE][+-]?(${_}))?\\b` },
          { match: `\\b0x(${C})(\\.(${C}))?([pP][+-]?(${_}))?\\b` },
          { match: /\b0o([0-7]_*)+\b/ },
          { match: /\b0b([01]_*)+\b/ },
        ],
      },
      y = (ne = "") => ({
        className: "subst",
        variants: [
          { match: se(/\\/, ne, /[0\\tnr"']/) },
          { match: se(/\\/, ne, /u\{[0-9a-fA-F]{1,8}\}/) },
        ],
      }),
      x = (ne = "") => ({
        className: "subst",
        match: se(/\\/, ne, /[\t ]*(?:[\r\n]|\r\n)/),
      }),
      E = (ne = "") => ({
        className: "subst",
        label: "interpol",
        begin: se(/\\/, ne, /\(/),
        end: /\)/,
      }),
      z = (ne = "") => ({
        begin: se(ne, /"""/),
        end: se(/"""/, ne),
        contains: [y(ne), x(ne), E(ne)],
      }),
      N = (ne = "") => ({
        begin: se(ne, /"/),
        end: se(/"/, ne),
        contains: [y(ne), E(ne)],
      }),
      L = {
        className: "string",
        variants: [
          z(),
          z("#"),
          z("##"),
          z("###"),
          N(),
          N("#"),
          N("##"),
          N("###"),
        ],
      },
      W = { match: se(/`/, a5, /`/) },
      O = { className: "variable", match: /\$\d+/ },
      $ = { className: "variable", match: `\\$${_1}+` },
      I = [W, O, $],
      F = {
        match: /(@|#(un)?)available/,
        className: "keyword",
        starts: {
          contains: [
            { begin: /\(/, end: /\)/, keywords: W3, contains: [...v, M, L] },
          ],
        },
      },
      J = { className: "keyword", match: se(/@/, Le(...K3)) },
      w = { className: "meta", match: se(/@/, a5) },
      R = [F, J, w],
      T = {
        match: E1(/\b[A-Z]/),
        relevance: 0,
        contains: [
          {
            className: "type",
            match: se(
              /(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/,
              _1,
              "+"
            ),
          },
          { className: "type", match: q0, relevance: 0 },
          { match: /[?!]+/, relevance: 0 },
          { match: /\.\.\./, relevance: 0 },
          { match: se(/\s+&\s+/, E1(q0)), relevance: 0 },
        ],
      },
      B = {
        begin: /</,
        end: />/,
        keywords: u,
        contains: [...a, ...c, ...R, g, T],
      };
    T.contains.push(B);
    let q = { match: se(a5, /\s*:/), keywords: "_|0", relevance: 0 },
      m = {
        begin: /\(/,
        end: /\)/,
        relevance: 0,
        keywords: u,
        contains: ["self", q, ...a, ...c, ...d, ...v, M, L, ...I, ...R, T],
      },
      f = { begin: /</, end: />/, contains: [...a, T] },
      He = {
        begin: Le(E1(se(a5, /\s*:/)), E1(se(a5, /\s+/, a5, /\s*:/))),
        end: /:/,
        relevance: 0,
        contains: [
          { className: "keyword", match: /\b_\b/ },
          { className: "params", match: a5 },
        ],
      },
      pe = {
        begin: /\(/,
        end: /\)/,
        keywords: u,
        contains: [He, ...a, ...c, ...v, M, L, ...R, T, m],
        endsParent: !0,
        illegal: /["']/,
      },
      _e = {
        match: [/func/, /\s+/, Le(W.match, a5, $0)],
        className: { 1: "keyword", 3: "title.function" },
        contains: [f, pe, t],
        illegal: [/\[/, /%/],
      },
      Ye = {
        match: [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/],
        className: { 1: "keyword" },
        contains: [f, pe, t],
        illegal: /\[|%/,
      },
      Ie = {
        match: [/operator/, /\s+/, $0],
        className: { 1: "keyword", 3: "title" },
      },
      me = {
        begin: [/precedencegroup/, /\s+/, q0],
        className: { 1: "keyword", 3: "title" },
        contains: [T],
        keywords: [...q3, ...ei],
        end: /}/,
      };
    for (let ne of L.variants) {
      let ke = ne.contains.find((Te) => Te.label === "interpol");
      ke.keywords = u;
      let qe = [...c, ...d, ...v, M, L, ...I];
      ke.contains = [
        ...qe,
        { begin: /\(/, end: /\)/, contains: ["self", ...qe] },
      ];
    }
    return {
      name: "Swift",
      keywords: u,
      contains: [
        ...a,
        _e,
        Ye,
        {
          beginKeywords: "struct protocol class extension enum actor",
          end: "\\{",
          excludeEnd: !0,
          keywords: u,
          contains: [
            e.inherit(e.TITLE_MODE, {
              className: "title.class",
              begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/,
            }),
            ...c,
          ],
        },
        Ie,
        me,
        { beginKeywords: "import", end: /$/, contains: [...a], relevance: 0 },
        ...c,
        ...d,
        ...v,
        M,
        L,
        ...I,
        ...R,
        T,
        m,
      ],
    };
  }
  var A1 = "[A-Za-z$_][0-9A-Za-z$_]*",
    li = [
      "as",
      "in",
      "of",
      "if",
      "for",
      "while",
      "finally",
      "var",
      "new",
      "function",
      "do",
      "return",
      "void",
      "else",
      "break",
      "catch",
      "instanceof",
      "with",
      "throw",
      "case",
      "default",
      "try",
      "switch",
      "continue",
      "typeof",
      "delete",
      "let",
      "yield",
      "const",
      "class",
      "debugger",
      "async",
      "await",
      "static",
      "import",
      "from",
      "export",
      "extends",
    ],
    ci = ["true", "false", "null", "undefined", "NaN", "Infinity"],
    si = [
      "Object",
      "Function",
      "Boolean",
      "Symbol",
      "Math",
      "Date",
      "Number",
      "BigInt",
      "String",
      "RegExp",
      "Array",
      "Float32Array",
      "Float64Array",
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Int32Array",
      "Uint16Array",
      "Uint32Array",
      "BigInt64Array",
      "BigUint64Array",
      "Set",
      "Map",
      "WeakSet",
      "WeakMap",
      "ArrayBuffer",
      "SharedArrayBuffer",
      "Atomics",
      "DataView",
      "JSON",
      "Promise",
      "Generator",
      "GeneratorFunction",
      "AsyncFunction",
      "Reflect",
      "Proxy",
      "Intl",
      "WebAssembly",
    ],
    ui = [
      "Error",
      "EvalError",
      "InternalError",
      "RangeError",
      "ReferenceError",
      "SyntaxError",
      "TypeError",
      "URIError",
    ],
    di = [
      "setInterval",
      "setTimeout",
      "clearInterval",
      "clearTimeout",
      "require",
      "exports",
      "eval",
      "isFinite",
      "isNaN",
      "parseFloat",
      "parseInt",
      "decodeURI",
      "decodeURIComponent",
      "encodeURI",
      "encodeURIComponent",
      "escape",
      "unescape",
    ],
    pi = [
      "arguments",
      "this",
      "super",
      "console",
      "window",
      "document",
      "localStorage",
      "module",
      "global",
    ],
    hi = [].concat(di, si, ui);
  function Y3(e) {
    let t = e.regex,
      n = (R, { after: T }) => {
        let B = "</" + R[0].slice(1);
        return R.input.indexOf(B, T) !== -1;
      },
      a = A1,
      r = { begin: "<>", end: "</>" },
      o = /<[A-Za-z0-9\\._:-]+\s*\/>/,
      i = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (R, T) => {
          let B = R[0].length + R.index,
            q = R.input[B];
          if (q === "<" || q === ",") {
            T.ignoreMatch();
            return;
          }
          q === ">" && (n(R, { after: B }) || T.ignoreMatch());
          let m,
            f = R.input.substring(B);
          if ((m = f.match(/^\s*=/))) {
            T.ignoreMatch();
            return;
          }
          if ((m = f.match(/^\s+extends\s+/)) && m.index === 0) {
            T.ignoreMatch();
            return;
          }
        },
      },
      l = {
        $pattern: A1,
        keyword: li,
        literal: ci,
        built_in: hi,
        "variable.language": pi,
      },
      s = "[0-9](_?[0-9])*",
      u = `\\.(${s})`,
      c = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",
      h = {
        className: "number",
        variants: [
          { begin: `(\\b(${c})((${u})|\\.)?|(${u}))[eE][+-]?(${s})\\b` },
          { begin: `\\b(${c})\\b((${u})\\b|\\.)?|(${u})\\b` },
          { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
          { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
          { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
          { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
          { begin: "\\b0[0-7]+n?\\b" },
        ],
        relevance: 0,
      },
      p = {
        className: "subst",
        begin: "\\$\\{",
        end: "\\}",
        keywords: l,
        contains: [],
      },
      d = {
        begin: "html`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [e.BACKSLASH_ESCAPE, p],
          subLanguage: "xml",
        },
      },
      g = {
        begin: "css`",
        end: "",
        starts: {
          end: "`",
          returnEnd: !1,
          contains: [e.BACKSLASH_ESCAPE, p],
          subLanguage: "css",
        },
      },
      b = {
        className: "string",
        begin: "`",
        end: "`",
        contains: [e.BACKSLASH_ESCAPE, p],
      },
      _ = {
        className: "comment",
        variants: [
          e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
            relevance: 0,
            contains: [
              {
                begin: "(?=@[A-Za-z]+)",
                relevance: 0,
                contains: [
                  { className: "doctag", begin: "@[A-Za-z]+" },
                  {
                    className: "type",
                    begin: "\\{",
                    end: "\\}",
                    excludeEnd: !0,
                    excludeBegin: !0,
                    relevance: 0,
                  },
                  {
                    className: "variable",
                    begin: a + "(?=\\s*(-)|$)",
                    endsParent: !0,
                    relevance: 0,
                  },
                  { begin: /(?=[^\n])\s/, relevance: 0 },
                ],
              },
            ],
          }),
          e.C_BLOCK_COMMENT_MODE,
          e.C_LINE_COMMENT_MODE,
        ],
      },
      C = [
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        d,
        g,
        b,
        { match: /\$\d+/ },
        h,
      ];
    p.contains = C.concat({
      begin: /\{/,
      end: /\}/,
      keywords: l,
      contains: ["self"].concat(C),
    });
    let M = [].concat(_, p.contains),
      y = M.concat([
        { begin: /\(/, end: /\)/, keywords: l, contains: ["self"].concat(M) },
      ]),
      x = {
        className: "params",
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: l,
        contains: y,
      },
      E = {
        variants: [
          {
            match: [
              /class/,
              /\s+/,
              a,
              /\s+/,
              /extends/,
              /\s+/,
              t.concat(a, "(", t.concat(/\./, a), ")*"),
            ],
            scope: {
              1: "keyword",
              3: "title.class",
              5: "keyword",
              7: "title.class.inherited",
            },
          },
          {
            match: [/class/, /\s+/, a],
            scope: { 1: "keyword", 3: "title.class" },
          },
        ],
      },
      z = {
        relevance: 0,
        match: t.either(
          /\bJSON/,
          /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
          /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
          /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
        ),
        className: "title.class",
        keywords: { _: [...si, ...ui] },
      },
      N = {
        label: "use_strict",
        className: "meta",
        relevance: 10,
        begin: /^\s*['"]use (strict|asm)['"]/,
      },
      L = {
        variants: [
          { match: [/function/, /\s+/, a, /(?=\s*\()/] },
          { match: [/function/, /\s*(?=\()/] },
        ],
        className: { 1: "keyword", 3: "title.function" },
        label: "func.def",
        contains: [x],
        illegal: /%/,
      },
      W = {
        relevance: 0,
        match: /\b[A-Z][A-Z_0-9]+\b/,
        className: "variable.constant",
      };
    function O(R) {
      return t.concat("(?!", R.join("|"), ")");
    }
    let $ = {
        match: t.concat(
          /\b/,
          O([...di, "super", "import"]),
          a,
          t.lookahead(/\(/)
        ),
        className: "title.function",
        relevance: 0,
      },
      I = {
        begin: t.concat(/\./, t.lookahead(t.concat(a, /(?![0-9A-Za-z$_(])/))),
        end: a,
        excludeBegin: !0,
        keywords: "prototype",
        className: "property",
        relevance: 0,
      },
      F = {
        match: [/get|set/, /\s+/, a, /(?=\()/],
        className: { 1: "keyword", 3: "title.function" },
        contains: [{ begin: /\(\)/ }, x],
      },
      J =
        "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" +
        e.UNDERSCORE_IDENT_RE +
        ")\\s*=>",
      w = {
        match: [
          /const|var|let/,
          /\s+/,
          a,
          /\s*/,
          /=\s*/,
          /(async\s*)?/,
          t.lookahead(J),
        ],
        keywords: "async",
        className: { 1: "keyword", 3: "title.function" },
        contains: [x],
      };
    return {
      name: "Javascript",
      aliases: ["js", "jsx", "mjs", "cjs"],
      keywords: l,
      exports: { PARAMS_CONTAINS: y, CLASS_REFERENCE: z },
      illegal: /#(?![$_A-z])/,
      contains: [
        e.SHEBANG({ label: "shebang", binary: "node", relevance: 5 }),
        N,
        e.APOS_STRING_MODE,
        e.QUOTE_STRING_MODE,
        d,
        g,
        b,
        _,
        { match: /\$\d+/ },
        h,
        z,
        { className: "attr", begin: a + t.lookahead(":"), relevance: 0 },
        w,
        {
          begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
          keywords: "return throw case",
          relevance: 0,
          contains: [
            _,
            e.REGEXP_MODE,
            {
              className: "function",
              begin: J,
              returnBegin: !0,
              end: "\\s*=>",
              contains: [
                {
                  className: "params",
                  variants: [
                    { begin: e.UNDERSCORE_IDENT_RE, relevance: 0 },
                    { className: null, begin: /\(\s*\)/, skip: !0 },
                    {
                      begin: /\(/,
                      end: /\)/,
                      excludeBegin: !0,
                      excludeEnd: !0,
                      keywords: l,
                      contains: y,
                    },
                  ],
                },
              ],
            },
            { begin: /,/, relevance: 0 },
            { match: /\s+/, relevance: 0 },
            {
              variants: [
                { begin: r.begin, end: r.end },
                { match: o },
                { begin: i.begin, "on:begin": i.isTrulyOpeningTag, end: i.end },
              ],
              subLanguage: "xml",
              contains: [
                { begin: i.begin, end: i.end, skip: !0, contains: ["self"] },
              ],
            },
          ],
        },
        L,
        { beginKeywords: "while if switch catch for" },
        {
          begin:
            "\\b(?!function)" +
            e.UNDERSCORE_IDENT_RE +
            "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
          returnBegin: !0,
          label: "func.def",
          contains: [
            x,
            e.inherit(e.TITLE_MODE, { begin: a, className: "title.function" }),
          ],
        },
        { match: /\.\.\./, relevance: 0 },
        I,
        { match: "\\$" + a, relevance: 0 },
        {
          match: [/\bconstructor(?=\s*\()/],
          className: { 1: "title.function" },
          contains: [x],
        },
        $,
        W,
        E,
        F,
        { match: /\$[(.]/ },
      ],
    };
  }
  function mi(e) {
    let t = Y3(e),
      n = A1,
      a = [
        "any",
        "void",
        "number",
        "boolean",
        "string",
        "object",
        "never",
        "symbol",
        "bigint",
        "unknown",
      ],
      r = {
        beginKeywords: "namespace",
        end: /\{/,
        excludeEnd: !0,
        contains: [t.exports.CLASS_REFERENCE],
      },
      o = {
        beginKeywords: "interface",
        end: /\{/,
        excludeEnd: !0,
        keywords: { keyword: "interface extends", built_in: a },
        contains: [t.exports.CLASS_REFERENCE],
      },
      i = { className: "meta", relevance: 10, begin: /^\s*['"]use strict['"]/ },
      l = [
        "type",
        "namespace",
        "interface",
        "public",
        "private",
        "protected",
        "implements",
        "declare",
        "abstract",
        "readonly",
        "enum",
        "override",
      ],
      s = {
        $pattern: A1,
        keyword: li.concat(l),
        literal: ci,
        built_in: hi.concat(a),
        "variable.language": pi,
      },
      u = { className: "meta", begin: "@" + n },
      c = (p, d, g) => {
        let b = p.contains.findIndex((v) => v.label === d);
        if (b === -1) throw new Error("can not find mode to replace");
        p.contains.splice(b, 1, g);
      };
    Object.assign(t.keywords, s),
      t.exports.PARAMS_CONTAINS.push(u),
      (t.contains = t.contains.concat([u, r, o])),
      c(t, "shebang", e.SHEBANG()),
      c(t, "use_strict", i);
    let h = t.contains.find((p) => p.label === "func.def");
    return (
      (h.relevance = 0),
      Object.assign(t, { name: "TypeScript", aliases: ["ts", "tsx"] }),
      t
    );
  }
  function fi(e) {
    let t = e.regex,
      n = { className: "string", begin: /"(""|[^/n])"C\b/ },
      a = {
        className: "string",
        begin: /"/,
        end: /"/,
        illegal: /\n/,
        contains: [{ begin: /""/ }],
      },
      r = /\d{1,2}\/\d{1,2}\/\d{4}/,
      o = /\d{4}-\d{1,2}-\d{1,2}/,
      i = /(\d|1[012])(:\d+){0,2} *(AM|PM)/,
      l = /\d{1,2}(:\d{1,2}){1,2}/,
      s = {
        className: "literal",
        variants: [
          { begin: t.concat(/# */, t.either(o, r), / *#/) },
          { begin: t.concat(/# */, l, / *#/) },
          { begin: t.concat(/# */, i, / *#/) },
          {
            begin: t.concat(/# */, t.either(o, r), / +/, t.either(i, l), / *#/),
          },
        ],
      },
      u = {
        className: "number",
        relevance: 0,
        variants: [
          {
            begin:
              /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/,
          },
          { begin: /\b\d[\d_]*((U?[SIL])|[%&])?/ },
          { begin: /&H[\dA-F_]+((U?[SIL])|[%&])?/ },
          { begin: /&O[0-7_]+((U?[SIL])|[%&])?/ },
          { begin: /&B[01_]+((U?[SIL])|[%&])?/ },
        ],
      },
      c = { className: "label", begin: /^\w+:/ },
      h = e.COMMENT(/'''/, /$/, {
        contains: [{ className: "doctag", begin: /<\/?/, end: />/ }],
      }),
      p = e.COMMENT(null, /$/, {
        variants: [{ begin: /'/ }, { begin: /([\t ]|^)REM(?=\s)/ }],
      });
    return {
      name: "Visual Basic .NET",
      aliases: ["vb"],
      case_insensitive: !0,
      classNameAliases: { label: "symbol" },
      keywords: {
        keyword:
          "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield",
        built_in:
          "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort",
        type: "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort",
        literal: "true false nothing",
      },
      illegal: "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ",
      contains: [
        n,
        a,
        s,
        u,
        c,
        h,
        p,
        {
          className: "meta",
          begin:
            /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/,
          end: /$/,
          keywords: {
            keyword:
              "const disable else elseif enable end externalsource if region then",
          },
          contains: [p],
        },
      ],
    };
  }
  function gi(e) {
    e.regex;
    let t = e.COMMENT(/\(;/, /;\)/);
    t.contains.push("self");
    let n = e.COMMENT(/;;/, /$/),
      a = [
        "anyfunc",
        "block",
        "br",
        "br_if",
        "br_table",
        "call",
        "call_indirect",
        "data",
        "drop",
        "elem",
        "else",
        "end",
        "export",
        "func",
        "global.get",
        "global.set",
        "local.get",
        "local.set",
        "local.tee",
        "get_global",
        "get_local",
        "global",
        "if",
        "import",
        "local",
        "loop",
        "memory",
        "memory.grow",
        "memory.size",
        "module",
        "mut",
        "nop",
        "offset",
        "param",
        "result",
        "return",
        "select",
        "set_global",
        "set_local",
        "start",
        "table",
        "tee_local",
        "then",
        "type",
        "unreachable",
      ],
      r = {
        begin: [/(?:func|call|call_indirect)/, /\s+/, /\$[^\s)]+/],
        className: { 1: "keyword", 3: "title.function" },
      },
      o = { className: "variable", begin: /\$[\w_]+/ },
      i = { match: /(\((?!;)|\))+/, className: "punctuation", relevance: 0 },
      l = {
        className: "number",
        relevance: 0,
        match:
          /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
      },
      s = { match: /(i32|i64|f32|f64)(?!\.)/, className: "type" },
      u = {
        className: "keyword",
        match:
          /\b(f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))\b/,
      };
    return {
      name: "WebAssembly",
      keywords: { $pattern: /[\w.]+/, keyword: a },
      contains: [
        n,
        t,
        {
          match: [/(?:offset|align)/, /\s*/, /=/],
          className: { 1: "keyword", 3: "operator" },
        },
        o,
        i,
        r,
        e.QUOTE_STRING_MODE,
        s,
        u,
        l,
      ],
    };
  }
  function vi(e) {
    let t = e.regex,
      n = t.concat(
        /[\p{L}_]/u,
        t.optional(/[\p{L}0-9_.-]*:/u),
        /[\p{L}0-9_.-]*/u
      ),
      a = /[\p{L}0-9._:-]+/u,
      r = { className: "symbol", begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
      o = {
        begin: /\s/,
        contains: [
          { className: "keyword", begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ },
        ],
      },
      i = e.inherit(o, { begin: /\(/, end: /\)/ }),
      l = e.inherit(e.APOS_STRING_MODE, { className: "string" }),
      s = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }),
      u = {
        endsWithParent: !0,
        illegal: /</,
        relevance: 0,
        contains: [
          { className: "attr", begin: a, relevance: 0 },
          {
            begin: /=\s*/,
            relevance: 0,
            contains: [
              {
                className: "string",
                endsParent: !0,
                variants: [
                  { begin: /"/, end: /"/, contains: [r] },
                  { begin: /'/, end: /'/, contains: [r] },
                  { begin: /[^\s"'=<>`]+/ },
                ],
              },
            ],
          },
        ],
      };
    return {
      name: "HTML, XML",
      aliases: [
        "html",
        "xhtml",
        "rss",
        "atom",
        "xjb",
        "xsd",
        "xsl",
        "plist",
        "wsf",
        "svg",
      ],
      case_insensitive: !0,
      unicodeRegex: !0,
      contains: [
        {
          className: "meta",
          begin: /<![a-z]/,
          end: />/,
          relevance: 10,
          contains: [
            o,
            s,
            l,
            i,
            {
              begin: /\[/,
              end: /\]/,
              contains: [
                {
                  className: "meta",
                  begin: /<![a-z]/,
                  end: />/,
                  contains: [o, i, s, l],
                },
              ],
            },
          ],
        },
        e.COMMENT(/<!--/, /-->/, { relevance: 10 }),
        { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
        r,
        {
          className: "meta",
          end: /\?>/,
          variants: [
            { begin: /<\?xml/, relevance: 10, contains: [s] },
            { begin: /<\?[a-z][a-z0-9]+/ },
          ],
        },
        {
          className: "tag",
          begin: /<style(?=\s|>)/,
          end: />/,
          keywords: { name: "style" },
          contains: [u],
          starts: {
            end: /<\/style>/,
            returnEnd: !0,
            subLanguage: ["css", "xml"],
          },
        },
        {
          className: "tag",
          begin: /<script(?=\s|>)/,
          end: />/,
          keywords: { name: "script" },
          contains: [u],
          starts: {
            end: /<\/script>/,
            returnEnd: !0,
            subLanguage: ["javascript", "handlebars", "xml"],
          },
        },
        { className: "tag", begin: /<>|<\/>/ },
        {
          className: "tag",
          begin: t.concat(
            /</,
            t.lookahead(t.concat(n, t.either(/\/>/, />/, /\s/)))
          ),
          end: /\/?>/,
          contains: [{ className: "name", begin: n, relevance: 0, starts: u }],
        },
        {
          className: "tag",
          begin: t.concat(/<\//, t.lookahead(t.concat(n, />/))),
          contains: [
            { className: "name", begin: n, relevance: 0 },
            { begin: />/, relevance: 0, endsParent: !0 },
          ],
        },
      ],
    };
  }
  function bi(e) {
    let t = "true false yes no null",
      n = "[\\w#;/?:@&=+$,.~*'()[\\]]+",
      a = {
        className: "attr",
        variants: [
          { begin: "\\w[\\w :\\/.-]*:(?=[ 	]|$)" },
          { begin: '"\\w[\\w :\\/.-]*":(?=[ 	]|$)' },
          { begin: "'\\w[\\w :\\/.-]*':(?=[ 	]|$)" },
        ],
      },
      r = {
        className: "template-variable",
        variants: [
          { begin: /\{\{/, end: /\}\}/ },
          { begin: /%\{/, end: /\}/ },
        ],
      },
      o = {
        className: "string",
        relevance: 0,
        variants: [
          { begin: /'/, end: /'/ },
          { begin: /"/, end: /"/ },
          { begin: /\S+/ },
        ],
        contains: [e.BACKSLASH_ESCAPE, r],
      },
      i = e.inherit(o, {
        variants: [
          { begin: /'/, end: /'/ },
          { begin: /"/, end: /"/ },
          { begin: /[^\s,{}[\]]+/ },
        ],
      }),
      l = "[0-9]{4}(-[0-9][0-9]){0,2}",
      s = "([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",
      u = "(\\.[0-9]*)?",
      c = "([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",
      h = { className: "number", begin: "\\b" + l + s + u + c + "\\b" },
      p = {
        end: ",",
        endsWithParent: !0,
        excludeEnd: !0,
        keywords: t,
        relevance: 0,
      },
      d = {
        begin: /\{/,
        end: /\}/,
        contains: [p],
        illegal: "\\n",
        relevance: 0,
      },
      g = {
        begin: "\\[",
        end: "\\]",
        contains: [p],
        illegal: "\\n",
        relevance: 0,
      },
      b = [
        a,
        { className: "meta", begin: "^---\\s*$", relevance: 10 },
        {
          className: "string",
          begin:
            "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*",
        },
        {
          begin: "<%[%=-]?",
          end: "[%-]?%>",
          subLanguage: "ruby",
          excludeBegin: !0,
          excludeEnd: !0,
          relevance: 0,
        },
        { className: "type", begin: "!\\w+!" + n },
        { className: "type", begin: "!<" + n + ">" },
        { className: "type", begin: "!" + n },
        { className: "type", begin: "!!" + n },
        { className: "meta", begin: "&" + e.UNDERSCORE_IDENT_RE + "$" },
        { className: "meta", begin: "\\*" + e.UNDERSCORE_IDENT_RE + "$" },
        { className: "bullet", begin: "-(?=[ ]|$)", relevance: 0 },
        e.HASH_COMMENT_MODE,
        { beginKeywords: t, keywords: { literal: t } },
        h,
        { className: "number", begin: e.C_NUMBER_RE + "\\b", relevance: 0 },
        d,
        g,
        o,
      ],
      v = [...b];
    return (
      v.pop(),
      v.push(i),
      (p.contains = v),
      { name: "YAML", case_insensitive: !0, aliases: ["yml"], contains: b }
    );
  }
  var Di = Ve(Hi(), 1);
  var $e = Di.default;
  var Fi = Ve(Vi(), 1),
    Et = Object.assign(I5(Error), {
      eval: I5(EvalError),
      range: I5(RangeError),
      reference: I5(ReferenceError),
      syntax: I5(SyntaxError),
      type: I5(TypeError),
      uri: I5(URIError),
    });
  function I5(e) {
    return (t.displayName = e.displayName || e.name), t;
    function t(n, ...a) {
      let r = n && (0, Fi.default)(n, ...a);
      return new e(r);
    }
  }
  var F4 = {}.hasOwnProperty,
    Pi = "hljs-";
  function Bi(e, t, n = {}) {
    let a = n.prefix;
    if (typeof e != "string")
      throw Et("Expected `string` for name, got `%s`", e);
    if (!$e.getLanguage(e))
      throw Et("Unknown language: `%s` is not registered", e);
    if (typeof t != "string")
      throw Et("Expected `string` for value, got `%s`", t);
    a == null && (a = Pi), $e.configure({ __emitter: nn, classPrefix: a });
    let r = $e.highlight(t, { language: e, ignoreIllegals: !0 });
    if (($e.configure({}), r.errorRaised)) throw r.errorRaised;
    return (
      (r._emitter.root.data.language = r.language),
      (r._emitter.root.data.relevance = r.relevance),
      r._emitter.root
    );
  }
  function P4(e, t = {}) {
    let n = t.subset || $e.listLanguages(),
      a = t.prefix,
      r = -1,
      o = {
        type: "root",
        data: { language: null, relevance: 0 },
        children: [],
      };
    if ((a == null && (a = Pi), typeof e != "string"))
      throw Et("Expected `string` for value, got `%s`", e);
    for (; ++r < n.length; ) {
      let i = n[r];
      if (!$e.getLanguage(i)) continue;
      let l = Bi(i, e, t);
      l.data.relevance > o.data.relevance && (o = l);
    }
    return o;
  }
  function B4(e, t) {
    $e.registerLanguage(e, t);
  }
  var U4 = function (e, t) {
    if (typeof e == "string") $e.registerAliases(t, { languageName: e });
    else {
      let n;
      for (n in e)
        F4.call(e, n) && $e.registerAliases(e[n], { languageName: n });
    }
  };
  function $4(e) {
    return Boolean($e.getLanguage(e));
  }
  function q4() {
    return $e.listLanguages();
  }
  var nn = class {
      constructor(t) {
        (this.options = t),
          (this.root = {
            type: "root",
            data: { language: null, relevance: 0 },
            children: [],
          }),
          (this.stack = [this.root]);
      }
      addText(t) {
        if (t === "") return;
        let n = this.stack[this.stack.length - 1],
          a = n.children[n.children.length - 1];
        a && a.type === "text"
          ? (a.value += t)
          : n.children.push({ type: "text", value: t });
      }
      addKeyword(t, n) {
        this.openNode(n), this.addText(t), this.closeNode();
      }
      addSublanguage(t, n) {
        let a = this.stack[this.stack.length - 1],
          r = t.root.children;
        n
          ? a.children.push({
              type: "element",
              tagName: "span",
              properties: { className: [n] },
              children: r,
            })
          : a.children.push(...r);
      }
      openNode(t) {
        let n = t
            .split(".")
            .map((o, i) =>
              i ? o + "_".repeat(i) : this.options.classPrefix + o
            ),
          a = this.stack[this.stack.length - 1],
          r = {
            type: "element",
            tagName: "span",
            properties: { className: n },
            children: [],
          };
        a.children.push(r), this.stack.push(r);
      }
      closeNode() {
        this.stack.pop();
      }
      closeAllNodes() {}
      finalize() {}
      toHTML() {
        return "";
      }
    },
    Q = {
      highlight: Bi,
      highlightAuto: P4,
      registerLanguage: B4,
      registered: $4,
      listLanguages: q4,
      registerAlias: U4,
    };
  Q.registerLanguage("arduino", mo);
  Q.registerLanguage("bash", fo);
  Q.registerLanguage("c", go);
  Q.registerLanguage("cpp", vo);
  Q.registerLanguage("csharp", bo);
  Q.registerLanguage("css", Eo);
  Q.registerLanguage("diff", _o);
  Q.registerLanguage("go", Ao);
  Q.registerLanguage("graphql", yo);
  Q.registerLanguage("ini", xo);
  Q.registerLanguage("java", zo);
  Q.registerLanguage("javascript", Ro);
  Q.registerLanguage("json", No);
  Q.registerLanguage("kotlin", Lo);
  Q.registerLanguage("less", Ho);
  Q.registerLanguage("lua", Do);
  Q.registerLanguage("makefile", Vo);
  Q.registerLanguage("markdown", Fo);
  Q.registerLanguage("objectivec", Po);
  Q.registerLanguage("perl", Bo);
  Q.registerLanguage("php", Uo);
  Q.registerLanguage("php-template", $o);
  Q.registerLanguage("plaintext", qo);
  Q.registerLanguage("python", Go);
  Q.registerLanguage("python-repl", Ko);
  Q.registerLanguage("r", Wo);
  Q.registerLanguage("ruby", Yo);
  Q.registerLanguage("rust", Qo);
  Q.registerLanguage("scss", Zo);
  Q.registerLanguage("shell", Xo);
  Q.registerLanguage("sql", jo);
  Q.registerLanguage("swift", ii);
  Q.registerLanguage("typescript", mi);
  Q.registerLanguage("vbnet", fi);
  Q.registerLanguage("wasm", gi);
  Q.registerLanguage("xml", vi);
  Q.registerLanguage("yaml", bi);
  var p5 = function (e) {
    if (e == null) return an;
    if (typeof e == "string") return K4(e);
    if (typeof e == "object") return G4(e);
    if (typeof e == "function") return Ui(e);
    throw new Error("Expected function, string, or array as test");
  };
  function G4(e) {
    let t = [],
      n = -1;
    for (; ++n < e.length; ) t[n] = p5(e[n]);
    return Ui(a);
    function a(...r) {
      let o = -1;
      for (; ++o < t.length; ) if (t[o].call(this, ...r)) return !0;
      return !1;
    }
  }
  function K4(e) {
    return t;
    function t(n) {
      return an(n) && n.tagName === e;
    }
  }
  function Ui(e) {
    return t;
    function t(n, ...a) {
      return an(n) && Boolean(e.call(this, n, ...a));
    }
  }
  function an(e) {
    return Boolean(
      e &&
        typeof e == "object" &&
        e.type === "element" &&
        typeof e.tagName == "string"
    );
  }
  var rn = function (e, t, n) {
    var a = dt(n);
    if (!e || !e.type || !e.children) throw new Error("Expected parent node");
    if (typeof t == "number") {
      if (t < 0 || t === Number.POSITIVE_INFINITY)
        throw new Error("Expected positive finite number as index");
    } else if (((t = e.children.indexOf(t)), t < 0))
      throw new Error("Expected child node or index");
    for (; ++t < e.children.length; )
      if (a(e.children[t], t, e)) return e.children[t];
    return null;
  };
  var $i = /\n/g,
    qi = /[\t ]+/g,
    on = p5("br"),
    W4 = p5("p"),
    Gi = p5(["th", "td"]),
    Ki = p5("tr"),
    Y4 = p5([
      "datalist",
      "head",
      "noembed",
      "noframes",
      "noscript",
      "rp",
      "script",
      "style",
      "template",
      "title",
      j4,
      J4,
    ]),
    Wi = p5([
      "address",
      "article",
      "aside",
      "blockquote",
      "body",
      "caption",
      "center",
      "dd",
      "dialog",
      "dir",
      "dl",
      "dt",
      "div",
      "figure",
      "figcaption",
      "footer",
      "form,",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "html",
      "legend",
      "listing",
      "main",
      "menu",
      "nav",
      "ol",
      "p",
      "plaintext",
      "pre",
      "section",
      "ul",
      "xmp",
    ]);
  function ln(e, t = {}) {
    let n = e.children || [],
      a = Wi(e),
      r = Zi(e, {
        whitespace: t.whitespace || "normal",
        breakBefore: !1,
        breakAfter: !1,
      }),
      o = -1,
      i,
      l,
      s;
    if (e.type === "text" || e.type === "comment")
      return Qi(e, { whitespace: r, breakBefore: !0, breakAfter: !0 });
    for (i = []; ++o < n.length; )
      i = i.concat(
        Yi(n[o], e, {
          whitespace: r,
          breakBefore: o ? null : a,
          breakAfter: o < n.length - 1 ? on(n[o + 1]) : a,
        })
      );
    o = -1;
    let u = [];
    for (; ++o < i.length; )
      (l = i[o]),
        typeof l == "number"
          ? s !== void 0 && l > s && (s = l)
          : l &&
            (s &&
              u.push(
                `
`.repeat(s)
              ),
            (s = 0),
            u.push(l));
    return u.join("");
  }
  function Yi(e, t, n) {
    return e.type === "element"
      ? Q4(e, t, n)
      : e.type === "text"
      ? [n.whitespace === "normal" ? Qi(e, n) : Z4(e)]
      : [];
  }
  function Q4(e, t, n) {
    let a = Zi(e, n),
      r = e.children || [],
      o = -1,
      i = [],
      l,
      s;
    if (Y4(e)) return i;
    for (
      on(e) || (Ki(e) && rn(t, e, Ki))
        ? (s = `
`)
        : W4(e)
        ? ((l = 2), (s = 2))
        : Wi(e) && ((l = 1), (s = 1));
      ++o < r.length;

    )
      i = i.concat(
        Yi(r[o], e, {
          whitespace: a,
          breakBefore: o ? void 0 : l,
          breakAfter: o < r.length - 1 ? on(r[o + 1]) : s,
        })
      );
    return (
      Gi(e) && rn(t, e, Gi) && i.push("	"), l && i.unshift(l), s && i.push(s), i
    );
  }
  function Qi(e, t) {
    let n = String(e.value),
      a = [],
      r = [],
      o = 0,
      i = -1,
      l,
      s,
      u;
    for (; o < n.length; )
      ($i.lastIndex = o),
        (l = $i.exec(n)),
        (s = l ? l.index : n.length),
        a.push(
          X4(
            n
              .slice(o, s)
              .replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""),
            t.breakBefore,
            t.breakAfter
          )
        ),
        (o = s + 1);
    for (; ++i < a.length; )
      a[i].charCodeAt(a[i].length - 1) === 8203 ||
      (i < a.length - 1 && a[i + 1].charCodeAt(0) === 8203)
        ? (r.push(a[i]), (u = ""))
        : a[i] && (u && r.push(u), r.push(a[i]), (u = " "));
    return r.join("");
  }
  function Z4(e) {
    return String(e.value);
  }
  function X4(e, t, n) {
    let a = [],
      r = 0,
      o,
      i;
    for (; r < e.length; )
      (qi.lastIndex = r),
        (o = qi.exec(e)),
        (i = o ? o.index : e.length),
        !r && !i && o && !t && a.push(""),
        r !== i && a.push(e.slice(r, i)),
        (r = o ? i + o[0].length : i);
    return r !== i && !n && a.push(""), a.join(" ");
  }
  function Zi(e, t) {
    let n;
    if (e.type === "element")
      switch (((n = e.properties || {}), e.tagName)) {
        case "listing":
        case "plaintext":
        case "xmp":
          return "pre";
        case "nobr":
          return "nowrap";
        case "pre":
          return n.wrap ? "pre-wrap" : "pre";
        case "td":
        case "th":
          return n.noWrap ? "nowrap" : t.whitespace;
        case "textarea":
          return "pre-wrap";
        default:
      }
    return t.whitespace;
  }
  function j4(e) {
    return Boolean((e.properties || {}).hidden);
  }
  function J4(e) {
    return e.tagName === "dialog" && !(e.properties || {}).open;
  }
  var e6 = {}.hasOwnProperty;
  function z1(e = {}) {
    let {
        aliases: t,
        languages: n,
        prefix: a,
        plainText: r,
        ignoreMissing: o,
        subset: i,
        detect: l,
      } = e,
      s = "hljs";
    if ((t && Q.registerAlias(t), n)) {
      let u;
      for (u in n) e6.call(n, u) && Q.registerLanguage(u, n[u]);
    }
    if (a) {
      let u = a.indexOf("-");
      s = u > -1 ? a.slice(0, u) : a;
    }
    return (u, c) => {
      s5(u, "element", (h, p, d) => {
        let g = d;
        if (
          !g ||
          !("tagName" in g) ||
          g.tagName !== "pre" ||
          h.tagName !== "code" ||
          !h.properties
        )
          return;
        let b = t6(h);
        if (b === !1 || (!b && !l) || (b && r && r.includes(b))) return;
        Array.isArray(h.properties.className) || (h.properties.className = []),
          h.properties.className.includes(s) ||
            h.properties.className.unshift(s);
        let v;
        try {
          v = b
            ? Q.highlight(b, ln(g), { prefix: a })
            : Q.highlightAuto(ln(g), { prefix: a, subset: i });
        } catch (_) {
          let C = _;
          (!o || !/Unknown language/.test(C.message)) &&
            c.fail(C, h, "rehype-highlight:missing-language");
          return;
        }
        !b &&
          v.data.language &&
          h.properties.className.push("language-" + v.data.language),
          Array.isArray(v.children) &&
            v.children.length > 0 &&
            (h.children = v.children);
      });
    };
  }
  function t6(e) {
    let t = e.properties && e.properties.className,
      n = -1;
    if (!!Array.isArray(t))
      for (; ++n < t.length; ) {
        let a = String(t[n]);
        if (a === "no-highlight" || a === "nohighlight") return !1;
        if (a.slice(0, 5) === "lang-") return a.slice(5);
        if (a.slice(0, 9) === "language-") return a.slice(9);
      }
  }
  var un = Ve(J5());
  var cn = Ve(J5());
  var n6 = 0;
  function G(e, t, n, a, r) {    
    var o,
      i,
      l = {};
    for (i in t) i == "ref" ? (o = t[i]) : (l[i] = t[i]);
    var s = {
      type: e,
      props: l,
      key: n,
      ref: o,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: --n6,
      __source: r,
      __self: a,
    };
    if (typeof e == "function" && (o = e.defaultProps))
      for (i in o) l[i] === void 0 && (l[i] = o[i]);
    return V.vnode && V.vnode(s), s;
  }
  function a6(e) {
    let [t, n] = Ce(!1),
      [a, r] = Ce(null),
      o = i5(async () => {
        a ||
          (r("thumbsUp"),
          await cn.default.runtime.sendMessage({
            type: "FEEDBACK",
            data: {
              conversation_id: e.conversationId,
              message_id: e.messageId,
              rating: "thumbsUp",
            },
          }));
      }, [e, a]),
      i = i5(async () => {
        await navigator.clipboard.writeText(e.answerText), n(!0);
      }, [e.answerText]);
    e5(() => {
      if (t) {
        let s = setTimeout(() => {
          n(!1);
        }, 500);
        return () => clearTimeout(s);
      }
    }, [t]);
    let l = i5(async () => {
      a ||
        (r("thumbsDown"),
        await cn.default.runtime.sendMessage({
          type: "FEEDBACK",
          data: {
            conversation_id: e.conversationId,
            message_id: e.messageId,
            rating: "thumbsDown",
            text: "",
            tags: [],
          },
        }));
    }, [e, a]);
    return G("div", {
      className: "gpt-feedback",
      children: [
        G("span", {
          onClick: o,
          className: a === "thumbsUp" ? "gpt-feedback-selected" : void 0,
          children: G(er, { size: 14 }),
        }),
        G("span", {
          onClick: l,
          className: a === "thumbsDown" ? "gpt-feedback-selected" : void 0,
          children: G(Ja, { size: 14 }),
        }),
        G("span", {
          onClick: i,
          children: t ? G(Ya, { size: 14 }) : G(Qa, { size: 14 }),
        }),
      ],
    });
  }
  var Xi = nt(a6);
  var sn = Ve(J5());
  function I1(e) {
    for (let t of e) {
      let n = document.querySelector(t);
      if (n) return n;
    }
  }
  function ji(e) {
    return (
      e.endsWith("?") ||
      e.endsWith("\uFF1F") ||
      e.endsWith("\u061F") ||
      e.endsWith("\u2E2E")
    );
  }
  function Ji() {
    var e;
    return (e = navigator.brave) == null ? void 0 : e.isBrave();
  }
  async function e7() {
    let { triggerModeTipShowTimes: e = 0 } = await sn.default.storage.local.get(
      "triggerModeTipShowTimes"
    );
    if (e >= 3) return !1;
    let { triggerMode: t } = await Rt(),
      n = t === "always";
    return (
      n &&
        (await sn.default.storage.local.set({
          triggerModeTipShowCount: e + 1,
        })),
      n
    );
  }
  function o6(e) {    
    let [t, n] = Ce(null),
      [a, r] = Ce(""),
      [o, i] = Ce(0),
      [l, s] = Ce(!1),
      [u, c] = Ce(!1);
    e5(() => {
      let d = un.default.runtime.connect(),
        g = (b) => {          
          b.text ? n(b) : b.error ? r(b.error) : b.event === "DONE" && s(!0);
          
        };      
      
      return (
        d.onMessage.addListener(g),
        d.postMessage({ question: e.question }),
        () => {          
          d.onMessage.removeListener(g), d.disconnect();
        }
      );
    }, [e.question, o]),
      e5(() => {
        let d = () => {
          a &&
            (a == "UNAUTHORIZED" || a === "CLOUDFLARE") &&
            (r(""), i((g) => g + 1));
        };
        return (
          window.addEventListener("focus", d),
          () => {
            window.removeEventListener("focus", d);
          }
        );
      }, [a]),
      e5(() => {
        e7().then((d) => c(d));
      }, []);
    let h = i5(() => {
        un.default.runtime.sendMessage({ type: "OPEN_OPTIONS_PAGE" });
      }, []),
      p = (d) => {
        window.open(d, "_blank", "noopener,noreferrer");
      };
    return t
      ? G("div", {
          id: "answer",
          className: "markdown-body gpt-inner",
          dir: "auto",
          children: [
            G("div", {
              className: "gpt-header",
              children: [
                G("span", { className: "font-bold", children: "YouChat" }),
                G("span", {
                  className: "cursor-pointer leading-[0]",
                  onClick: h,
                  children: G(Za, { size: 14 }),
                }),
                G(Xi, {
                  messageId: t.messageId,
                  conversationId: t.conversationId,
                  answerText: t.text,
                }),
              ],
            }),
            G(mt, { rehypePlugins: [[z1, { detect: !0 }]], children: t.text }),
            t.links &&
              t.links.map((d) =>
                G("div", {
                  style: { textOverflow: "ellipsis" },
                  className:
                    "mt-2 hover:underline hover:pointer cursor-pointer flex flex-wrap",
                  onClick: () => p(d.url),
                  children: [
                    G("div", {
                      className: "overflow-hidden max-w-xs",
                      children: G("span", {
                        className: "text-sm",
                        style: { textOverflow: "ellipsis" },
                        children: G("a", {
                          href: "javascript:void(0)",
                          children: ["[", d.index, "] ", d.name],
                        }),
                      }),
                    }),
                    G("div", {
                      className: "overflow-hidden max-w-xs",
                      children: G("span", {
                        className: "text-xs text-gray-500",
                        style: { textOverflow: "ellipsis" },
                        children: [" ", d.url],
                      }),
                    }),
                  ],
                })
              ),
          ],
        })
      : a === "UNAUTHORIZED" ||
        a === "CLOUDFLARE" ||
        a === "FORBIDDEN" ||
        a.includes("403")
      ? G("p", {
          className: "gpt-inner",
          children: [
            "Please pass Cloudflare ",
            " ",
            G("a", {
              href: "https://you.com/api/streamingSearch?q=hi%20go&domain=youchat",
              target: "_blank",
              rel: "noreferrer",
              children: "here",
            }),
            " first. You may close that tab after passing the check.",
            G("span", {
              className: "italic block mt-2 text-xs",
              children: [
                "Still not working?",
                "You may also try ",
                G("a", {
                  href: "https://github.com/fedebotu/youchat-google-extension#troubleshooting",
                  children: "these troubleshooting steps ",
                }),
                ". Otherwise, please report any issues ",
                G("a", {
                  href: "https://github.com/fedebotu/youchat-google-extension/issues",
                  children: " here ",
                }),
                ".",
              ],
            }),
            o > 0 &&
              (() =>
                Ji()
                  ? G("span", {
                      className: "block mt-2",
                      children: [
                        "Still not working? Follow",
                        " ",
                        G("a", {
                          href: "https://github.com/fedebotu/youchat-google-extension#troubleshooting",
                          children: "Brave Troubleshooting",
                        }),
                      ],
                    })
                  : G("span", {
                      className: "italic block mt-2 text-xs",
                      children:
                        "YouChat requires passing a security check every once in a while.",
                    }))(),
          ],
        })
      : a
      ? G("p", {
          className: "gpt-inner",
          children: [
            "Failed to load response from YouChat:",
            G("br", {}),
            " ",
            a,
            G("br", {}),
            G("span", {
              className: "italic block mt-2 text-xs",
              children: [
                "You may also try ",
                G("a", {
                  href: "https://github.com/fedebotu/youchat-google-extension#troubleshooting",
                  children: "these troubleshooting steps ",
                }),
                ". Otherwise, please report any issues ",
                G("a", {
                  href: "https://github.com/fedebotu/youchat-google-extension/issues",
                  children: " here ",
                }),
                ".",
              ],
            }),
          ],
        })
      : G("p", {
          className: "gpt-loading gpt-inner",
          children: "Waiting for YouChat response...",
        });
  }
  
  var k1 = nt(o6);
  
  function i6(e) {
    let [t, n] = Ce(!1);
    return e.triggerMode === "always"
      ? G(k1, { question: e.question })
      : e.triggerMode === "questionMark"
      ? ji(e.question.trim())
        ? G(k1, { question: e.question })
        : G("p", {
            className: "gpt-inner icon-and-text",
            children: [
              G(Xa, { size: "small" }),
              " Trigger YouChat by append a question mark after your query",
            ],
          })
      : t
      ? G(k1, { question: e.question })
      : G("p", {
          className: "gpt-inner icon-and-text cursor-pointer",
          onClick: () => n(!0),
          children: [G(ja, { size: "small" }), " Ask YouChat for this query"],
        });
  }
  var t7 = i6;
  var dn = {
    google: {
      inputQuery: ["input[name='q']"],
      sidebarContainerQuery: ["#rhs"],
      appendContainerQuery: ["#rcnt"],
    },
    bing: {
      inputQuery: ["[name='q']"],
      sidebarContainerQuery: ["#b_context"],
      appendContainerQuery: [],
    },
    yahoo: {
      inputQuery: ["input[name='p']"],
      sidebarContainerQuery: [
        "#right",
        ".Contents__inner.Contents__inner--sub",
      ],
      appendContainerQuery: ["#cols", "#contents__wrap"],
    },
    duckduckgo: {
      inputQuery: ["input[name='q']"],
      sidebarContainerQuery: [".results--sidebar.js-results-sidebar"],
      appendContainerQuery: ["#links_wrapper"],
    },
    baidu: {
      inputQuery: ["input[name='wd']"],
      sidebarContainerQuery: ["#content_right"],
      appendContainerQuery: ["#container"],
      watchRouteChange(e) {
        let t = document.getElementById("wrapper_wrapper");
        new MutationObserver(function (a) {
          for (let r of a)
            if (r.type === "childList") {
              for (let o of r.addedNodes)
                if ("id" in o && o.id === "container") {
                  e();
                  return;
                }
            }
        }).observe(t, { childList: !0 });
      },
    },
    kagi: {
      inputQuery: ["input[name='q']"],
      sidebarContainerQuery: [".right-content-box._0_right_sidebar"],
      appendContainerQuery: ["#_0_app_content"],
    },
    yandex: {
      inputQuery: ["input[name='text']"],
      sidebarContainerQuery: ["#search-result-aside"],
      appendContainerQuery: [],
    },
    naver: {
      inputQuery: ["input[name='query']"],
      sidebarContainerQuery: ["#sub_pack"],
      appendContainerQuery: ["#content"],
    },
    brave: {
      inputQuery: ["input[name='q']"],
      sidebarContainerQuery: ["#side-right"],
      appendContainerQuery: [],
    },
    searx: {
      inputQuery: ["input[name='q']"],
      sidebarContainerQuery: ["#sidebar_results"],
      appendContainerQuery: [],
    },
  };
  async function l6(e, t) {    
    let n = document.createElement("div");
    n.className = "chat-gpt-container";
    let a = await Rt(),
      r;
    a.theme === "auto" ? (r = va()) : (r = a.theme),
      r === "dark" ? n.classList.add("gpt-dark") : n.classList.add("gpt-light");
    let o = I1(t.sidebarContainerQuery);
    if (o) o.prepend(n);
    else {
      n.classList.add("sidebar-free");
      let i = I1(t.appendContainerQuery);
      i && i.appendChild(n);
    }
    r5(G(t7, { question: e, triggerMode: a.triggerMode || "always" }), n);
  }
  var c6 = new RegExp(Object.keys(dn).join("|")),
    n7 = location.hostname.match(c6)[0],
    S1 = dn[n7];
  function a7(){
    //let e = I1(S1.inputQuery);    
    //e && e.value && (console.debug("Mount ChatGPT on", n7), l6(e.value, S1));
    // l6("Find the sum of 7 and 8", S1)
    // l6("Find the sum of 5 and 6", S1)

    // setInterval(function(){
    //   fetch('https://aiteacher.kz/unchecked')
    //   .then(response => response.json())
    //   .then(data => {
    //     if(data["status"]==true){
    //       data["data"].forEach(function(e){
    //         console.log(e)
    //         l6(e, S1)            
    //       })
    //     }      
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });
    // }, 10000);
   

  }
  a7();
  S1.watchRouteChange && S1.watchRouteChange(a7);
  setInterval(function(){
    fetch('https://aiteacher.kz/unchecked')
    .then(response => response.json())
    .then(data => {
      if(data["status"]==true){
        data["data"].forEach(function(e){
          console.log(e)
          l6(e, S1)            
        })
      }      
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, 10000);
})();
