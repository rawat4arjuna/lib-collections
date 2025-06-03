var le = { exports: {} }, f = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Ye() {
  if (ke) return f;
  ke = 1;
  var R = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), H = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), S = Symbol.for("react.consumer"), b = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), q = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), Q = Symbol.iterator;
  function re(t) {
    return t === null || typeof t != "object" ? null : (t = Q && t[Q] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var K = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, X = Object.assign, ne = {};
  function j(t, n, c) {
    this.props = t, this.context = n, this.refs = ne, this.updater = c || K;
  }
  j.prototype.isReactComponent = {}, j.prototype.setState = function(t, n) {
    if (typeof t != "object" && typeof t != "function" && t != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, t, n, "setState");
  }, j.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function W() {
  }
  W.prototype = j.prototype;
  function V(t, n, c) {
    this.props = t, this.context = n, this.refs = ne, this.updater = c || K;
  }
  var C = V.prototype = new W();
  C.constructor = V, X(C, j.prototype), C.isPureReactComponent = !0;
  var oe = Array.isArray, v = { H: null, A: null, T: null, S: null, V: null }, Z = Object.prototype.hasOwnProperty;
  function F(t, n, c, i, E, m) {
    return c = m.ref, {
      $$typeof: R,
      type: t,
      key: n,
      ref: c !== void 0 ? c : null,
      props: m
    };
  }
  function P(t, n) {
    return F(
      t.type,
      n,
      void 0,
      void 0,
      void 0,
      t.props
    );
  }
  function N(t) {
    return typeof t == "object" && t !== null && t.$$typeof === R;
  }
  function pe(t) {
    var n = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(c) {
      return n[c];
    });
  }
  var g = /\/+/g;
  function x(t, n) {
    return typeof t == "object" && t !== null && t.key != null ? pe("" + t.key) : n.toString(36);
  }
  function I() {
  }
  function Y(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(I, I) : (t.status = "pending", t.then(
          function(n) {
            t.status === "pending" && (t.status = "fulfilled", t.value = n);
          },
          function(n) {
            t.status === "pending" && (t.status = "rejected", t.reason = n);
          }
        )), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function O(t, n, c, i, E) {
    var m = typeof t;
    (m === "undefined" || m === "boolean") && (t = null);
    var p = !1;
    if (t === null) p = !0;
    else
      switch (m) {
        case "bigint":
        case "string":
        case "number":
          p = !0;
          break;
        case "object":
          switch (t.$$typeof) {
            case R:
            case a:
              p = !0;
              break;
            case D:
              return p = t._init, O(
                p(t._payload),
                n,
                c,
                i,
                E
              );
          }
      }
    if (p)
      return E = E(t), p = i === "" ? "." + x(t, 0) : i, oe(E) ? (c = "", p != null && (c = p.replace(g, "$&/") + "/"), O(E, n, c, "", function(G) {
        return G;
      })) : E != null && (N(E) && (E = P(
        E,
        c + (E.key == null || t && t.key === E.key ? "" : ("" + E.key).replace(
          g,
          "$&/"
        ) + "/") + p
      )), n.push(E)), 1;
    p = 0;
    var A = i === "" ? "." : i + ":";
    if (oe(t))
      for (var w = 0; w < t.length; w++)
        i = t[w], m = A + x(i, w), p += O(
          i,
          n,
          c,
          m,
          E
        );
    else if (w = re(t), typeof w == "function")
      for (t = w.call(t), w = 0; !(i = t.next()).done; )
        i = i.value, m = A + x(i, w++), p += O(
          i,
          n,
          c,
          m,
          E
        );
    else if (m === "object") {
      if (typeof t.then == "function")
        return O(
          Y(t),
          n,
          c,
          i,
          E
        );
      throw n = String(t), Error(
        "Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return p;
  }
  function M(t, n, c) {
    if (t == null) return t;
    var i = [], E = 0;
    return O(t, i, "", "", function(m) {
      return n.call(c, m, E++);
    }), i;
  }
  function J(t) {
    if (t._status === -1) {
      var n = t._result;
      n = n(), n.then(
        function(c) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = c);
        },
        function(c) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = c);
        }
      ), t._status === -1 && (t._status = 0, t._result = n);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var z = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  };
  function ue() {
  }
  return f.Children = {
    map: M,
    forEach: function(t, n, c) {
      M(
        t,
        function() {
          n.apply(this, arguments);
        },
        c
      );
    },
    count: function(t) {
      var n = 0;
      return M(t, function() {
        n++;
      }), n;
    },
    toArray: function(t) {
      return M(t, function(n) {
        return n;
      }) || [];
    },
    only: function(t) {
      if (!N(t))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return t;
    }
  }, f.Component = j, f.Fragment = k, f.Profiler = U, f.PureComponent = V, f.StrictMode = H, f.Suspense = te, f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v, f.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(t) {
      return v.H.useMemoCache(t);
    }
  }, f.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, f.cloneElement = function(t, n, c) {
    if (t == null)
      throw Error(
        "The argument must be a React element, but you passed " + t + "."
      );
    var i = X({}, t.props), E = t.key, m = void 0;
    if (n != null)
      for (p in n.ref !== void 0 && (m = void 0), n.key !== void 0 && (E = "" + n.key), n)
        !Z.call(n, p) || p === "key" || p === "__self" || p === "__source" || p === "ref" && n.ref === void 0 || (i[p] = n[p]);
    var p = arguments.length - 2;
    if (p === 1) i.children = c;
    else if (1 < p) {
      for (var A = Array(p), w = 0; w < p; w++)
        A[w] = arguments[w + 2];
      i.children = A;
    }
    return F(t.type, E, void 0, void 0, m, i);
  }, f.createContext = function(t) {
    return t = {
      $$typeof: b,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, t.Provider = t, t.Consumer = {
      $$typeof: S,
      _context: t
    }, t;
  }, f.createElement = function(t, n, c) {
    var i, E = {}, m = null;
    if (n != null)
      for (i in n.key !== void 0 && (m = "" + n.key), n)
        Z.call(n, i) && i !== "key" && i !== "__self" && i !== "__source" && (E[i] = n[i]);
    var p = arguments.length - 2;
    if (p === 1) E.children = c;
    else if (1 < p) {
      for (var A = Array(p), w = 0; w < p; w++)
        A[w] = arguments[w + 2];
      E.children = A;
    }
    if (t && t.defaultProps)
      for (i in p = t.defaultProps, p)
        E[i] === void 0 && (E[i] = p[i]);
    return F(t, m, void 0, void 0, null, E);
  }, f.createRef = function() {
    return { current: null };
  }, f.forwardRef = function(t) {
    return { $$typeof: L, render: t };
  }, f.isValidElement = N, f.lazy = function(t) {
    return {
      $$typeof: D,
      _payload: { _status: -1, _result: t },
      _init: J
    };
  }, f.memo = function(t, n) {
    return {
      $$typeof: q,
      type: t,
      compare: n === void 0 ? null : n
    };
  }, f.startTransition = function(t) {
    var n = v.T, c = {};
    v.T = c;
    try {
      var i = t(), E = v.S;
      E !== null && E(c, i), typeof i == "object" && i !== null && typeof i.then == "function" && i.then(ue, z);
    } catch (m) {
      z(m);
    } finally {
      v.T = n;
    }
  }, f.unstable_useCacheRefresh = function() {
    return v.H.useCacheRefresh();
  }, f.use = function(t) {
    return v.H.use(t);
  }, f.useActionState = function(t, n, c) {
    return v.H.useActionState(t, n, c);
  }, f.useCallback = function(t, n) {
    return v.H.useCallback(t, n);
  }, f.useContext = function(t) {
    return v.H.useContext(t);
  }, f.useDebugValue = function() {
  }, f.useDeferredValue = function(t, n) {
    return v.H.useDeferredValue(t, n);
  }, f.useEffect = function(t, n, c) {
    var i = v.H;
    if (typeof c == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return i.useEffect(t, n);
  }, f.useId = function() {
    return v.H.useId();
  }, f.useImperativeHandle = function(t, n, c) {
    return v.H.useImperativeHandle(t, n, c);
  }, f.useInsertionEffect = function(t, n) {
    return v.H.useInsertionEffect(t, n);
  }, f.useLayoutEffect = function(t, n) {
    return v.H.useLayoutEffect(t, n);
  }, f.useMemo = function(t, n) {
    return v.H.useMemo(t, n);
  }, f.useOptimistic = function(t, n) {
    return v.H.useOptimistic(t, n);
  }, f.useReducer = function(t, n, c) {
    return v.H.useReducer(t, n, c);
  }, f.useRef = function(t) {
    return v.H.useRef(t);
  }, f.useState = function(t) {
    return v.H.useState(t);
  }, f.useSyncExternalStore = function(t, n, c) {
    return v.H.useSyncExternalStore(
      t,
      n,
      c
    );
  }, f.useTransition = function() {
    return v.H.useTransition();
  }, f.version = "19.1.0", f;
}
var ee = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ee.exports;
var je;
function He() {
  return je || (je = 1, function(R, a) {
    process.env.NODE_ENV !== "production" && function() {
      function k(e, r) {
        Object.defineProperty(S.prototype, e, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              r[0],
              r[1]
            );
          }
        });
      }
      function H(e) {
        return e === null || typeof e != "object" ? null : (e = ye && e[ye] || e["@@iterator"], typeof e == "function" ? e : null);
      }
      function U(e, r) {
        e = (e = e.constructor) && (e.displayName || e.name) || "ReactClass";
        var o = e + "." + r;
        Ee[o] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          r,
          e
        ), Ee[o] = !0);
      }
      function S(e, r, o) {
        this.props = e, this.context = r, this.refs = de, this.updater = o || he;
      }
      function b() {
      }
      function L(e, r, o) {
        this.props = e, this.context = r, this.refs = de, this.updater = o || he;
      }
      function te(e) {
        return "" + e;
      }
      function q(e) {
        try {
          te(e);
          var r = !1;
        } catch {
          r = !0;
        }
        if (r) {
          r = console;
          var o = r.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return o.call(
            r,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            u
          ), te(e);
        }
      }
      function D(e) {
        if (e == null) return null;
        if (typeof e == "function")
          return e.$$typeof === Me ? null : e.displayName || e.name || null;
        if (typeof e == "string") return e;
        switch (e) {
          case t:
            return "Fragment";
          case c:
            return "Profiler";
          case n:
            return "StrictMode";
          case p:
            return "Suspense";
          case A:
            return "SuspenseList";
          case Ne:
            return "Activity";
        }
        if (typeof e == "object")
          switch (typeof e.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), e.$$typeof) {
            case ue:
              return "Portal";
            case E:
              return (e.displayName || "Context") + ".Provider";
            case i:
              return (e._context.displayName || "Context") + ".Consumer";
            case m:
              var r = e.render;
              return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
            case w:
              return r = e.displayName || null, r !== null ? r : D(e.type) || "Memo";
            case G:
              r = e._payload, e = e._init;
              try {
                return D(e(r));
              } catch {
              }
          }
        return null;
      }
      function Q(e) {
        if (e === t) return "<>";
        if (typeof e == "object" && e !== null && e.$$typeof === G)
          return "<...>";
        try {
          var r = D(e);
          return r ? "<" + r + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function re() {
        var e = _.A;
        return e === null ? null : e.getOwner();
      }
      function K() {
        return Error("react-stack-top-frame");
      }
      function X(e) {
        if (ae.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning) return !1;
        }
        return e.key !== void 0;
      }
      function ne(e, r) {
        function o() {
          we || (we = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            r
          ));
        }
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function j() {
        var e = D(this.type);
        return Te[e] || (Te[e] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), e = this.props.ref, e !== void 0 ? e : null;
      }
      function W(e, r, o, u, s, y, l, h) {
        return o = y.ref, e = {
          $$typeof: z,
          type: e,
          key: r,
          props: y,
          _owner: s
        }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
          enumerable: !1,
          get: j
        }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(e, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(e, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: l
        }), Object.defineProperty(e, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: h
        }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
      }
      function V(e, r) {
        return r = W(
          e.type,
          r,
          void 0,
          void 0,
          e._owner,
          e.props,
          e._debugStack,
          e._debugTask
        ), e._store && (r._store.validated = e._store.validated), r;
      }
      function C(e) {
        return typeof e == "object" && e !== null && e.$$typeof === z;
      }
      function oe(e) {
        var r = { "=": "=0", ":": "=2" };
        return "$" + e.replace(/[=:]/g, function(o) {
          return r[o];
        });
      }
      function v(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (q(e.key), oe("" + e.key)) : r.toString(36);
      }
      function Z() {
      }
      function F(e) {
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw e.reason;
          default:
            switch (typeof e.status == "string" ? e.then(Z, Z) : (e.status = "pending", e.then(
              function(r) {
                e.status === "pending" && (e.status = "fulfilled", e.value = r);
              },
              function(r) {
                e.status === "pending" && (e.status = "rejected", e.reason = r);
              }
            )), e.status) {
              case "fulfilled":
                return e.value;
              case "rejected":
                throw e.reason;
            }
        }
        throw e;
      }
      function P(e, r, o, u, s) {
        var y = typeof e;
        (y === "undefined" || y === "boolean") && (e = null);
        var l = !1;
        if (e === null) l = !0;
        else
          switch (y) {
            case "bigint":
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case z:
                case ue:
                  l = !0;
                  break;
                case G:
                  return l = e._init, P(
                    l(e._payload),
                    r,
                    o,
                    u,
                    s
                  );
              }
          }
        if (l) {
          l = e, s = s(l);
          var h = u === "" ? "." + v(l, 0) : u;
          return me(s) ? (o = "", h != null && (o = h.replace(Oe, "$&/") + "/"), P(s, r, o, "", function($) {
            return $;
          })) : s != null && (C(s) && (s.key != null && (l && l.key === s.key || q(s.key)), o = V(
            s,
            o + (s.key == null || l && l.key === s.key ? "" : ("" + s.key).replace(
              Oe,
              "$&/"
            ) + "/") + h
          ), u !== "" && l != null && C(l) && l.key == null && l._store && !l._store.validated && (o._store.validated = 2), s = o), r.push(s)), 1;
        }
        if (l = 0, h = u === "" ? "." : u + ":", me(e))
          for (var d = 0; d < e.length; d++)
            u = e[d], y = h + v(u, d), l += P(
              u,
              r,
              o,
              y,
              s
            );
        else if (d = H(e), typeof d == "function")
          for (d === e.entries && (be || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), be = !0), e = d.call(e), d = 0; !(u = e.next()).done; )
            u = u.value, y = h + v(u, d++), l += P(
              u,
              r,
              o,
              y,
              s
            );
        else if (y === "object") {
          if (typeof e.then == "function")
            return P(
              F(e),
              r,
              o,
              u,
              s
            );
          throw r = String(e), Error(
            "Objects are not valid as a React child (found: " + (r === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return l;
      }
      function N(e, r, o) {
        if (e == null) return e;
        var u = [], s = 0;
        return P(e, u, "", "", function(y) {
          return r.call(o, y, s++);
        }), u;
      }
      function pe(e) {
        if (e._status === -1) {
          var r = e._result;
          r = r(), r.then(
            function(o) {
              (e._status === 0 || e._status === -1) && (e._status = 1, e._result = o);
            },
            function(o) {
              (e._status === 0 || e._status === -1) && (e._status = 2, e._result = o);
            }
          ), e._status === -1 && (e._status = 0, e._result = r);
        }
        if (e._status === 1)
          return r = e._result, r === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            r
          ), "default" in r || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            r
          ), r.default;
        throw e._result;
      }
      function g() {
        var e = _.H;
        return e === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), e;
      }
      function x() {
      }
      function I(e) {
        if (ie === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7);
            ie = (R && R[r]).call(
              R,
              "timers"
            ).setImmediate;
          } catch {
            ie = function(u) {
              Ce === !1 && (Ce = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var s = new MessageChannel();
              s.port1.onmessage = u, s.port2.postMessage(void 0);
            };
          }
        return ie(e);
      }
      function Y(e) {
        return 1 < e.length && typeof AggregateError == "function" ? new AggregateError(e) : e[0];
      }
      function O(e, r) {
        r !== ce - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), ce = r;
      }
      function M(e, r, o) {
        var u = _.actQueue;
        if (u !== null)
          if (u.length !== 0)
            try {
              J(u), I(function() {
                return M(e, r, o);
              });
              return;
            } catch (s) {
              _.thrownErrors.push(s);
            }
          else _.actQueue = null;
        0 < _.thrownErrors.length ? (u = Y(_.thrownErrors), _.thrownErrors.length = 0, o(u)) : r(e);
      }
      function J(e) {
        if (!_e) {
          _e = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var o = e[r];
              do {
                _.didUsePromise = !1;
                var u = o(!1);
                if (u !== null) {
                  if (_.didUsePromise) {
                    e[r] = o, e.splice(0, r);
                    return;
                  }
                  o = u;
                } else break;
              } while (!0);
            }
            e.length = 0;
          } catch (s) {
            e.splice(0, r + 1), _.thrownErrors.push(s);
          } finally {
            _e = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var z = Symbol.for("react.transitional.element"), ue = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), E = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), Ne = Symbol.for("react.activity"), ye = Symbol.iterator, Ee = {}, he = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(e) {
          U(e, "forceUpdate");
        },
        enqueueReplaceState: function(e) {
          U(e, "replaceState");
        },
        enqueueSetState: function(e) {
          U(e, "setState");
        }
      }, ve = Object.assign, de = {};
      Object.freeze(de), S.prototype.isReactComponent = {}, S.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, e, r, "setState");
      }, S.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      var T = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      }, se;
      for (se in T)
        T.hasOwnProperty(se) && k(se, T[se]);
      b.prototype = S.prototype, T = L.prototype = new b(), T.constructor = L, ve(T, S.prototype), T.isPureReactComponent = !0;
      var me = Array.isArray, Me = Symbol.for("react.client.reference"), _ = {
        H: null,
        A: null,
        T: null,
        S: null,
        V: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, ae = Object.prototype.hasOwnProperty, ge = console.createTask ? console.createTask : function() {
        return null;
      };
      T = {
        "react-stack-bottom-frame": function(e) {
          return e();
        }
      };
      var we, Re, Te = {}, $e = T["react-stack-bottom-frame"].bind(T, K)(), Le = ge(Q(K)), be = !1, Oe = /\/+/g, Se = typeof reportError == "function" ? reportError : function(e) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var r = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
            error: e
          });
          if (!window.dispatchEvent(r)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", e);
          return;
        }
        console.error(e);
      }, Ce = !1, ie = null, ce = 0, fe = !1, _e = !1, Ae = typeof queueMicrotask == "function" ? function(e) {
        queueMicrotask(function() {
          return queueMicrotask(e);
        });
      } : I;
      T = Object.freeze({
        __proto__: null,
        c: function(e) {
          return g().useMemoCache(e);
        }
      }), a.Children = {
        map: N,
        forEach: function(e, r, o) {
          N(
            e,
            function() {
              r.apply(this, arguments);
            },
            o
          );
        },
        count: function(e) {
          var r = 0;
          return N(e, function() {
            r++;
          }), r;
        },
        toArray: function(e) {
          return N(e, function(r) {
            return r;
          }) || [];
        },
        only: function(e) {
          if (!C(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        }
      }, a.Component = S, a.Fragment = t, a.Profiler = c, a.PureComponent = L, a.StrictMode = n, a.Suspense = p, a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, a.__COMPILER_RUNTIME = T, a.act = function(e) {
        var r = _.actQueue, o = ce;
        ce++;
        var u = _.actQueue = r !== null ? r : [], s = !1;
        try {
          var y = e();
        } catch (d) {
          _.thrownErrors.push(d);
        }
        if (0 < _.thrownErrors.length)
          throw O(r, o), e = Y(_.thrownErrors), _.thrownErrors.length = 0, e;
        if (y !== null && typeof y == "object" && typeof y.then == "function") {
          var l = y;
          return Ae(function() {
            s || fe || (fe = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(d, $) {
              s = !0, l.then(
                function(B) {
                  if (O(r, o), o === 0) {
                    try {
                      J(u), I(function() {
                        return M(
                          B,
                          d,
                          $
                        );
                      });
                    } catch (Ie) {
                      _.thrownErrors.push(Ie);
                    }
                    if (0 < _.thrownErrors.length) {
                      var De = Y(
                        _.thrownErrors
                      );
                      _.thrownErrors.length = 0, $(De);
                    }
                  } else d(B);
                },
                function(B) {
                  O(r, o), 0 < _.thrownErrors.length && (B = Y(
                    _.thrownErrors
                  ), _.thrownErrors.length = 0), $(B);
                }
              );
            }
          };
        }
        var h = y;
        if (O(r, o), o === 0 && (J(u), u.length !== 0 && Ae(function() {
          s || fe || (fe = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), _.actQueue = null), 0 < _.thrownErrors.length)
          throw e = Y(_.thrownErrors), _.thrownErrors.length = 0, e;
        return {
          then: function(d, $) {
            s = !0, o === 0 ? (_.actQueue = u, I(function() {
              return M(
                h,
                d,
                $
              );
            })) : d(h);
          }
        };
      }, a.cache = function(e) {
        return function() {
          return e.apply(null, arguments);
        };
      }, a.captureOwnerStack = function() {
        var e = _.getCurrentStack;
        return e === null ? null : e();
      }, a.cloneElement = function(e, r, o) {
        if (e == null)
          throw Error(
            "The argument must be a React element, but you passed " + e + "."
          );
        var u = ve({}, e.props), s = e.key, y = e._owner;
        if (r != null) {
          var l;
          e: {
            if (ae.call(r, "ref") && (l = Object.getOwnPropertyDescriptor(
              r,
              "ref"
            ).get) && l.isReactWarning) {
              l = !1;
              break e;
            }
            l = r.ref !== void 0;
          }
          l && (y = re()), X(r) && (q(r.key), s = "" + r.key);
          for (h in r)
            !ae.call(r, h) || h === "key" || h === "__self" || h === "__source" || h === "ref" && r.ref === void 0 || (u[h] = r[h]);
        }
        var h = arguments.length - 2;
        if (h === 1) u.children = o;
        else if (1 < h) {
          l = Array(h);
          for (var d = 0; d < h; d++)
            l[d] = arguments[d + 2];
          u.children = l;
        }
        for (u = W(
          e.type,
          s,
          void 0,
          void 0,
          y,
          u,
          e._debugStack,
          e._debugTask
        ), s = 2; s < arguments.length; s++)
          y = arguments[s], C(y) && y._store && (y._store.validated = 1);
        return u;
      }, a.createContext = function(e) {
        return e = {
          $$typeof: E,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, e.Provider = e, e.Consumer = {
          $$typeof: i,
          _context: e
        }, e._currentRenderer = null, e._currentRenderer2 = null, e;
      }, a.createElement = function(e, r, o) {
        for (var u = 2; u < arguments.length; u++) {
          var s = arguments[u];
          C(s) && s._store && (s._store.validated = 1);
        }
        if (u = {}, s = null, r != null)
          for (d in Re || !("__self" in r) || "key" in r || (Re = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), X(r) && (q(r.key), s = "" + r.key), r)
            ae.call(r, d) && d !== "key" && d !== "__self" && d !== "__source" && (u[d] = r[d]);
        var y = arguments.length - 2;
        if (y === 1) u.children = o;
        else if (1 < y) {
          for (var l = Array(y), h = 0; h < y; h++)
            l[h] = arguments[h + 2];
          Object.freeze && Object.freeze(l), u.children = l;
        }
        if (e && e.defaultProps)
          for (d in y = e.defaultProps, y)
            u[d] === void 0 && (u[d] = y[d]);
        s && ne(
          u,
          typeof e == "function" ? e.displayName || e.name || "Unknown" : e
        );
        var d = 1e4 > _.recentlyCreatedOwnerStacks++;
        return W(
          e,
          s,
          void 0,
          void 0,
          re(),
          u,
          d ? Error("react-stack-top-frame") : $e,
          d ? ge(Q(e)) : Le
        );
      }, a.createRef = function() {
        var e = { current: null };
        return Object.seal(e), e;
      }, a.forwardRef = function(e) {
        e != null && e.$$typeof === w ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof e != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          e === null ? "null" : typeof e
        ) : e.length !== 0 && e.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), e != null && e.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var r = { $$typeof: m, render: e }, o;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return o;
          },
          set: function(u) {
            o = u, e.name || e.displayName || (Object.defineProperty(e, "name", { value: u }), e.displayName = u);
          }
        }), r;
      }, a.isValidElement = C, a.lazy = function(e) {
        return {
          $$typeof: G,
          _payload: { _status: -1, _result: e },
          _init: pe
        };
      }, a.memo = function(e, r) {
        e == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          e === null ? "null" : typeof e
        ), r = {
          $$typeof: w,
          type: e,
          compare: r === void 0 ? null : r
        };
        var o;
        return Object.defineProperty(r, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return o;
          },
          set: function(u) {
            o = u, e.name || e.displayName || (Object.defineProperty(e, "name", { value: u }), e.displayName = u);
          }
        }), r;
      }, a.startTransition = function(e) {
        var r = _.T, o = {};
        _.T = o, o._updatedFibers = /* @__PURE__ */ new Set();
        try {
          var u = e(), s = _.S;
          s !== null && s(o, u), typeof u == "object" && u !== null && typeof u.then == "function" && u.then(x, Se);
        } catch (y) {
          Se(y);
        } finally {
          r === null && o._updatedFibers && (e = o._updatedFibers.size, o._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), _.T = r;
        }
      }, a.unstable_useCacheRefresh = function() {
        return g().useCacheRefresh();
      }, a.use = function(e) {
        return g().use(e);
      }, a.useActionState = function(e, r, o) {
        return g().useActionState(
          e,
          r,
          o
        );
      }, a.useCallback = function(e, r) {
        return g().useCallback(e, r);
      }, a.useContext = function(e) {
        var r = g();
        return e.$$typeof === i && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), r.useContext(e);
      }, a.useDebugValue = function(e, r) {
        return g().useDebugValue(e, r);
      }, a.useDeferredValue = function(e, r) {
        return g().useDeferredValue(e, r);
      }, a.useEffect = function(e, r, o) {
        e == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        );
        var u = g();
        if (typeof o == "function")
          throw Error(
            "useEffect CRUD overload is not enabled in this build of React."
          );
        return u.useEffect(e, r);
      }, a.useId = function() {
        return g().useId();
      }, a.useImperativeHandle = function(e, r, o) {
        return g().useImperativeHandle(e, r, o);
      }, a.useInsertionEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), g().useInsertionEffect(e, r);
      }, a.useLayoutEffect = function(e, r) {
        return e == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), g().useLayoutEffect(e, r);
      }, a.useMemo = function(e, r) {
        return g().useMemo(e, r);
      }, a.useOptimistic = function(e, r) {
        return g().useOptimistic(e, r);
      }, a.useReducer = function(e, r, o) {
        return g().useReducer(e, r, o);
      }, a.useRef = function(e) {
        return g().useRef(e);
      }, a.useState = function(e) {
        return g().useState(e);
      }, a.useSyncExternalStore = function(e, r, o) {
        return g().useSyncExternalStore(
          e,
          r,
          o
        );
      }, a.useTransition = function() {
        return g().useTransition();
      }, a.version = "19.1.0", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    }();
  }(ee, ee.exports)), ee.exports;
}
var Pe;
function Ue() {
  return Pe || (Pe = 1, process.env.NODE_ENV === "production" ? le.exports = Ye() : le.exports = He()), le.exports;
}
var qe = Ue();
function We(R, a) {
  switch (a.type) {
    case "SET_STATE":
      return { ...R, ...a.payload };
    case "RESET_STATE":
      return {};
    case "REMOVE_STATE":
      const { [a.key]: k, ...H } = R;
      return H;
    default:
      throw new Error(`Unhandled action type: ${a.type}`);
  }
}
function ze(R = {}) {
  const [a, k] = qe.useReducer(We, R);
  return [a, (b, L) => {
    if (typeof b == "string")
      k({ type: "SET_STATE", payload: { [b]: L } });
    else if (typeof b == "object")
      k({ type: "SET_STATE", payload: b });
    else
      throw new Error("Invalid key type. Key must be a string or an object.");
  }, (b) => {
    k({ type: "REMOVE_STATE", key: b });
  }, () => {
    k({ type: "RESET_STATE" });
  }];
}
export {
  ze as useRtlState
};
