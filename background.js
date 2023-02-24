"use strict";
(() => {
  var z = Object.create;
  var _ = Object.defineProperty;
  var H = Object.getOwnPropertyDescriptor;
  var V = Object.getOwnPropertyNames;
  var J = Object.getPrototypeOf,
    K = Object.prototype.hasOwnProperty;
  var Q = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports);
  var X = (r, t, n, l) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let m of V(t))
        !K.call(r, m) &&
          m !== n &&
          _(r, m, {
            get: () => t[m],
            enumerable: !(l = H(t, m)) || l.enumerable,
          });
    return r;
  };
  var Y = (r, t, n) => (
    (n = r != null ? z(J(r)) : {}),
    X(
      t || !r || !r.__esModule
        ? _(n, "default", { value: r, enumerable: !0 })
        : n,
      r
    )
  );
  var I = Q((F, j) => {
    (function (r, t) {
      if (typeof define == "function" && define.amd)
        define("webextension-polyfill", ["module"], t);
      else if (typeof F < "u") t(j);
      else {
        var n = { exports: {} };
        t(n), (r.browser = n.exports);
      }
    })(
      typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : F,
      function (r) {
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
            n = (l) => {
              let m = {
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
              if (Object.keys(m).length === 0)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class k extends WeakMap {
                constructor(s, i = void 0) {
                  super(i), (this.createItem = s);
                }
                get(s) {
                  return (
                    this.has(s) || this.set(s, this.createItem(s)), super.get(s)
                  );
                }
              }
              let b = (e) =>
                  e && typeof e == "object" && typeof e.then == "function",
                f =
                  (e, s) =>
                  (...i) => {
                    l.runtime.lastError
                      ? e.reject(new Error(l.runtime.lastError.message))
                      : s.singleCallbackArg ||
                        (i.length <= 1 && s.singleCallbackArg !== !1)
                      ? e.resolve(i[0])
                      : e.resolve(i);
                  },
                T = (e) => (e == 1 ? "argument" : "arguments"),
                N = (e, s) =>
                  function (g, ...d) {
                    if (d.length < s.minArgs)
                      throw new Error(
                        `Expected at least ${s.minArgs} ${T(
                          s.minArgs
                        )} for ${e}(), got ${d.length}`
                      );
                    if (d.length > s.maxArgs)
                      throw new Error(
                        `Expected at most ${s.maxArgs} ${T(
                          s.maxArgs
                        )} for ${e}(), got ${d.length}`
                      );
                    return new Promise((w, v) => {
                      if (s.fallbackToNoCallback)
                        try {
                          g[e](...d, f({ resolve: w, reject: v }, s));
                        } catch (a) {
                          console.warn(
                            `${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,
                            a
                          ),
                            g[e](...d),
                            (s.fallbackToNoCallback = !1),
                            (s.noCallback = !0),
                            w();
                        }
                      else
                        s.noCallback
                          ? (g[e](...d), w())
                          : g[e](...d, f({ resolve: w, reject: v }, s));
                    });
                  },
                E = (e, s, i) =>
                  new Proxy(s, {
                    apply(g, d, w) {
                      return i.call(d, e, ...w);
                    },
                  }),
                p = Function.call.bind(Object.prototype.hasOwnProperty),
                A = (e, s = {}, i = {}) => {
                  let g = Object.create(null),
                    d = {
                      has(v, a) {
                        return a in e || a in g;
                      },
                      get(v, a, C) {
                        if (a in g) return g[a];
                        if (!(a in e)) return;
                        let u = e[a];
                        if (typeof u == "function")
                          if (typeof s[a] == "function") u = E(e, e[a], s[a]);
                          else if (p(i, a)) {
                            let O = N(a, i[a]);
                            u = E(e, e[a], O);
                          } else u = u.bind(e);
                        else if (
                          typeof u == "object" &&
                          u !== null &&
                          (p(s, a) || p(i, a))
                        )
                          u = A(u, s[a], i[a]);
                        else if (p(i, "*")) u = A(u, s[a], i["*"]);
                        else
                          return (
                            Object.defineProperty(g, a, {
                              configurable: !0,
                              enumerable: !0,
                              get() {
                                return e[a];
                              },
                              set(O) {
                                e[a] = O;
                              },
                            }),
                            u
                          );
                        return (g[a] = u), u;
                      },
                      set(v, a, C, u) {
                        return a in g ? (g[a] = C) : (e[a] = C), !0;
                      },
                      defineProperty(v, a, C) {
                        return Reflect.defineProperty(g, a, C);
                      },
                      deleteProperty(v, a) {
                        return Reflect.deleteProperty(g, a);
                      },
                    },
                    w = Object.create(e);
                  return new Proxy(w, d);
                },
                o = (e) => ({
                  addListener(s, i, ...g) {
                    s.addListener(e.get(i), ...g);
                  },
                  hasListener(s, i) {
                    return s.hasListener(e.get(i));
                  },
                  removeListener(s, i) {
                    s.removeListener(e.get(i));
                  },
                }),
                c = new k((e) =>
                  typeof e != "function"
                    ? e
                    : function (i) {
                        let g = A(
                          i,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        e(g);
                      }
                ),
                x = new k((e) =>
                  typeof e != "function"
                    ? e
                    : function (i, g, d) {
                        let w = !1,
                          v,
                          a = new Promise(($) => {
                            v = function (S) {
                              (w = !0), $(S);
                            };
                          }),
                          C;
                        try {
                          C = e(i, g, v);
                        } catch ($) {
                          C = Promise.reject($);
                        }
                        let u = C !== !0 && b(C);
                        if (C !== !0 && !u && !w) return !1;
                        let O = ($) => {
                          $.then(
                            (S) => {
                              d(S);
                            },
                            (S) => {
                              let L;
                              S &&
                              (S instanceof Error ||
                                typeof S.message == "string")
                                ? (L = S.message)
                                : (L = "An unexpected error occurred"),
                                d({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: L,
                                });
                            }
                          ).catch((S) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              S
                            );
                          });
                        };
                        return O(u ? C : a), !0;
                      }
                ),
                h = ({ reject: e, resolve: s }, i) => {
                  l.runtime.lastError
                    ? l.runtime.lastError.message === t
                      ? s()
                      : e(new Error(l.runtime.lastError.message))
                    : i && i.__mozWebExtensionPolyfillReject__
                    ? e(new Error(i.message))
                    : s(i);
                },
                y = (e, s, i, ...g) => {
                  if (g.length < s.minArgs)
                    throw new Error(
                      `Expected at least ${s.minArgs} ${T(
                        s.minArgs
                      )} for ${e}(), got ${g.length}`
                    );
                  if (g.length > s.maxArgs)
                    throw new Error(
                      `Expected at most ${s.maxArgs} ${T(
                        s.maxArgs
                      )} for ${e}(), got ${g.length}`
                    );
                  return new Promise((d, w) => {
                    let v = h.bind(null, { resolve: d, reject: w });
                    g.push(v), i.sendMessage(...g);
                  });
                },
                P = {
                  devtools: { network: { onRequestFinished: o(c) } },
                  runtime: {
                    onMessage: o(x),
                    onMessageExternal: o(x),
                    sendMessage: y.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: y.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                R = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (m.privacy = {
                  network: { "*": R },
                  services: { "*": R },
                  websites: { "*": R },
                }),
                A(l, P, m)
              );
            };
          r.exports = n(chrome);
        } else r.exports = globalThis.browser;
      }
    );
  });
  var M = Y(I());
  async function B(r, t, n) {
    let m = `https://you.com/api/streamingSearch?q=${JSON.stringify(
      n
    )}&domain=youchat`;        
    return fetch(m, {
      method: r,
      headers: { "Content-Type": "application/json" },
    });
  }
  async function q(r) {
    await B("POST", "/conversation/message_feedback", r);
  }
  async function D(r, t) {
    await B("PATCH", `/conversation/${r}`, t);
  }
  function W(r) {
    let t, n, l, m, k, b, f;
    return T(), { feed: N, reset: T };
    function T() {
      (t = !0),
        (n = ""),
        (l = 0),
        (m = -1),
        (k = void 0),
        (b = void 0),
        (f = "");
    }
    function N(p) {
      (n = n ? n + p : p), t && ee(n) && (n = n.slice(U.length)), (t = !1);
      let A = n.length,
        o = 0,
        c = !1;
      for (; o < A; ) {
        c &&
          (n[o] ===
            `
` && ++o,
          (c = !1));
        let x = -1,
          h = m,
          y;
        for (let P = l; x < 0 && P < A; ++P)
          (y = n[P]),
            y === ":" && h < 0
              ? (h = P - o)
              : y === "\r"
              ? ((c = !0), (x = P - o))
              : y ===
                  `
` && (x = P - o);
        if (x < 0) {
          (l = A - o), (m = h);
          break;
        } else (l = 0), (m = -1);
        E(n, o, h, x), (o += x + 1);
      }
      o === A ? (n = "") : o > 0 && (n = n.slice(o));
    }
    function E(p, A, o, c) {
      if (c === 0) {
        f.length > 0 &&
          (r({
            type: "event",
            id: k,
            event: b || void 0,
            data: f.slice(0, -1),
          }),
          (f = ""),
          (k = void 0)),
          (b = void 0);
        return;
      }
      let x = o < 0,
        h = p.slice(A, A + (x ? c : o)),
        y = 0;
      x ? (y = c) : p[A + o + 1] === " " ? (y = o + 2) : (y = o + 1);
      let P = A + y,
        R = c - y,
        e = p.slice(P, P + R).toString();
      if (h === "data")
        f += e
          ? "".concat(
              e,
              `
`
            )
          : `
`;
      else if (h === "event") b = e;
      else if (h === "id" && !e.includes("\0")) k = e;
      else if (h === "retry") {
        let s = parseInt(e, 10);
        Number.isNaN(s) || r({ type: "reconnect-interval", value: s });
      }
    }
  }
  var U = [239, 187, 191];
  function ee(r) {
    return U.every((t, n) => r.charCodeAt(n) === t);
  }
  async function* G(r) {
    let t = r.getReader();
    try {
      for (;;) {
        let { done: n, value: l } = await t.read();
        if (n) return;
        yield l;
      }
    } finally {
      t.releaseLock();
    }
  }
  async function Z(r, t) {
    let { onMessage: n, ...l } = t,
      m = await fetch(r, l);
    if (!m.ok) {
      let b = (await m.json().catch(() => ({}))).detail;
      throw new Error(b || `${m.status} ${m.statusText}`);
    }
    let k = W((b) => {
      n(b);
    });    
    for await (let b of G(m.body)) {
      let f = new TextDecoder().decode(b);
      k.feed(f);      
    }    
  }
  async function se(r, t) {    
    console.log("START");
    let n,
      l = () => {
        n && D(n, { is_visible: !1 });
      },
      m = new AbortController();
    r.onDisconnect.addListener(() => {      
      m.abort(), l();      
    });
    let k = [];   

    await Z("https://you.com/api/streamingSearch?q=" + t + "&domain=youchat", {
      method: "GET",
      signal: m.signal,
      onMessage(b) {                
        console.debug("sse message", b), k.push(b);
        let f = String(""),
          T = [],
          N = 1,
          E = [];
                
        if(b.event=="done" || b.event=="error") {          
          for (let i=0; i<k.length-1; i++) {                        
            if(JSON.parse(k[i]["data"])["youChatToken"]){              
              f += JSON.parse(k[i]["data"])["youChatToken"];
            }            
          }                            
           
          try {
            const arr = JSON.parse(f.match("\{(.*?)\}")[0])     
            const obj = {tpID:arr.tpID,totalMark:arr.totalMark,feedback:arr.feedback,req:t}          
            console.log(JSON.stringify(obj))            
            fetch("https://aiteacher.kz/update", {
              method: "POST",       
              mode: "no-cors",     
              body: JSON.stringify(obj),
              headers: {
                "Content-Type": "application/json"
              }           
            }).then(response => {
              console.log('Request sent!');
            })
            .catch(error => {
              console.error('Error:', error);
            });         
          } catch(error) {
            console.error('Invalid JSON string:', error.message);
          }          
          
                                      
          return
        }
          
        for (let p of k) {
          let A = JSON.parse(p.data),
            o = String("");
          if (
            (A.hasOwnProperty("youChatToken") && (o = A.youChatToken),
            A.hasOwnProperty("youChatSerpResults") &&
              (T = A.youChatSerpResults),
            T.length > 0)
          ) {
            for (let c of T)
              if (o.includes(c.url)) {
                let x = 0;
                E.some((h) => h.url === c.url)
                  ? (x = E.find((h) => h.url === c.url).index)
                  : (E.push({ index: N, name: c.name, url: c.url }),
                    (x = N),
                    N++),
                  (f = f.replace(c.url, `[[${x}]](${c.url})`)),
                  (o = `[[${x}]](${c.url})`);
              }
          }
          f += o;
        }                
        
        f &&
          r.postMessage({
            text: f,
            links: E,
            status: "done",
            messageId: "dummy",
            conversationId: "dummy",
          });                
      },            
    });
    
  }
  M.default.runtime.onConnect.addListener((r) => {
    r.onMessage.addListener(async (t) => {      
      console.debug("received msg", t);
      try {
        await se(r, t.question);        
      } catch (n) {
        console.error(n), r.postMessage({ error: n.message });
      }
    });
  });
  M.default.runtime.onMessage.addListener(async (r) => {
    r.type === "FEEDBACK"
      ? await q(r.data)
      : r.type === "OPEN_OPTIONS_PAGE" && M.default.runtime.openOptionsPage();
  });
  M.default.action
    ? M.default.action.onClicked.addListener(() => {
        M.default.runtime.openOptionsPage();
      })
    : M.default.browserAction.onClicked.addListener(() => {
        M.default.runtime.openOptionsPage();
      });
})();
