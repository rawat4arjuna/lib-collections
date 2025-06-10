import { useReducer as L, useState as c, useEffect as i, useRef as a, useCallback as m, useLayoutEffect as g } from "react";
function S(e, t) {
  switch (t.type) {
    case "SET_STATE":
      return { ...e, ...t.payload };
    case "RESET_STATE":
      return {};
    case "REMOVE_STATE":
      const { [t.key]: r, ...o } = e;
      return o;
    default:
      throw new Error(`Unhandled action type: ${t.type}`);
  }
}
function A(e = {}) {
  const [t, r] = L(S, e);
  return [t, (s, v) => {
    if (typeof s == "string")
      r({ type: "SET_STATE", payload: { [s]: v } });
    else if (typeof s == "object")
      r({ type: "SET_STATE", payload: s });
    else
      throw new Error("Invalid key type. Key must be a string or an object.");
  }, (s) => {
    r({ type: "REMOVE_STATE", key: s });
  }, () => {
    r({ type: "RESET_STATE" });
  }];
}
function D(e, t) {
  const [r, o] = c(e);
  return i(() => {
    const n = setTimeout(() => {
      o(e);
    }, t);
    return () => {
      clearTimeout(n);
    };
  }, [e, t]), r;
}
function x(e, t) {
  let r = !1, o, n, u = null;
  const s = m(
    (...v) => (n = v, r || (r = !0, o = e(...n), u = setTimeout(() => {
      r = !1;
    }, t)), o),
    [e, t]
  );
  return s.cancel = () => {
    u && clearTimeout(u), r = !1;
  }, s;
}
function V(e, t) {
  const [r, o] = c(e), n = typeof e == "function", u = a(null);
  return i(() => {
    if (n) {
      const s = x(e, t);
      return u.current = s, () => {
        u.current && u.current.cancel && u.current.cancel();
      };
    } else {
      const s = setTimeout(() => {
        o(e);
      }, t);
      return () => {
        clearTimeout(s);
      };
    }
  }, [e, t, n]), n ? u.current : r;
}
function _(e, t) {
  const r = a(e), o = a(null);
  return i(() => {
    r.current = e;
  }, [e]), i(() => {
    if (t !== null) {
      const u = setTimeout(() => r.current(), t);
      return o.current = u, () => clearTimeout(u);
    }
    return () => {
    };
  }, [t]), () => {
    o.current && (clearTimeout(o.current), o.current = null);
  };
}
function M(e, t) {
  const r = a(e);
  i(() => {
    r.current = e;
  }, [e]), i(() => {
    function n() {
      r.current();
    }
    if (t !== null) {
      const u = setInterval(n, t);
      return () => clearInterval(u);
    }
    return () => {
    };
  }, [t]);
  const o = a(() => {
  });
  return i(() => {
    if (t !== null) {
      const n = setInterval(r.current, t);
      return o.current = () => clearInterval(n), () => clearInterval(n);
    }
    return o.current = () => {
    }, () => {
    };
  }, [t]), o.current;
}
function C(e = !1) {
  const [t, r] = c(e), o = m(() => {
    r((n) => !n);
  }, []);
  return [t, o];
}
function U(e = !1) {
  const [t, r] = c(e);
  return [t, { on: () => r(!0), off: () => r(!1), toggle: () => r((s) => !s) }];
}
function P() {
  const e = a(!1);
  return i(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e.current;
}
const k = (e, t) => {
  const r = a(!0);
  i(() => {
    if (r.current) {
      r.current = !1;
      return;
    }
    return e();
  }, t);
};
function H() {
  const e = a(!0);
  return e.current ? (e.current = !1, !0) : !1;
}
function O() {
  const [, e] = c(0);
  return m(() => {
    e((r) => r + 1);
  }, []);
}
function j(e) {
  const t = a(e);
  return t.current = e, t;
}
const F = typeof window < "u" ? g : i;
function W(e) {
  const [t, r] = c(!1);
  return i(() => {
    const o = e.current;
    if (!o)
      return;
    const n = () => r(!0), u = () => r(!1);
    return o.addEventListener("mouseenter", n), o.addEventListener("mouseleave", u), () => {
      o.removeEventListener("mouseenter", n), o.removeEventListener("mouseleave", u);
    };
  }, [e]), t;
}
function $() {
  const [e, t] = c(navigator.onLine);
  return i(() => {
    const r = () => t(!0), o = () => t(!1);
    return window.addEventListener("online", r), window.addEventListener("offline", o), () => {
      window.removeEventListener("online", r), window.removeEventListener("offline", o);
    };
  }, []), e;
}
const I = 6e4;
function B(e = I) {
  const [t, r] = c(!1), o = a(null), n = () => {
    r(!1), o.current && clearTimeout(o.current), o.current = setTimeout(() => {
      r(!0);
    }, e);
  };
  return i(() => (n(), window.addEventListener("mousemove", n), window.addEventListener("keydown", n), window.addEventListener("scroll", n), window.addEventListener("click", n), window.addEventListener("touchstart", n), window.addEventListener("touchmove", n), () => {
    o.current && clearTimeout(o.current), window.removeEventListener("mousemove", n), window.removeEventListener("keydown", n), window.removeEventListener("scroll", n), window.removeEventListener("click", n), window.removeEventListener("touchstart", n), window.removeEventListener("touchmove", n);
  }), [e]), t;
}
function K() {
  const [e, t] = c(() => document.visibilityState);
  return i(() => {
    const r = () => {
      t(document.visibilityState);
    };
    return document.addEventListener("visibilitychange", r), () => {
      document.removeEventListener("visibilitychange", r);
    };
  }, []), e;
}
function q() {
  const e = a(0);
  return e.current++, e.current;
}
function z(e, t) {
  const [r, o] = c(null), [n, u] = c(!0), [s, v] = c(null);
  return i(() => {
    (async () => {
      try {
        const l = await fetch(e, t);
        if (!l.ok)
          throw new Error(`HTTP error! status: ${l.status}`);
        const w = await l.json();
        o(w);
      } catch (l) {
        v(l);
      } finally {
        u(!1);
      }
    })();
  }, [e, t]), { data: r, loading: n, error: s };
}
function G(e) {
  const [t, r] = c({
    data: null,
    loading: !0,
    error: null
  }), o = m(() => {
    r({ data: null, loading: !0, error: null }), e().then((n) => {
      r({ data: n, loading: !1, error: null });
    }).catch((n) => {
      r({ data: null, loading: !1, error: n });
    });
  }, [e]);
  return i(() => {
    o();
  }, [o]), t;
}
function J(e, t = { retries: 3, delay: 1e3 }, r = []) {
  const [o, n] = c(), [u, s] = c(!0), [v, E] = c(null), [l, w] = c(0), d = a(!0), h = a(e);
  i(() => {
    h.current = e;
  }, [e]), m(async () => {
    s(!0), E(null);
    try {
      const f = await h.current();
      d.current && (n(f), s(!1));
    } catch (f) {
      d.current && (E(f), s(!1));
    }
  }, [l]), i(() => {
    d.current = !0;
    let f = 0;
    return (async () => {
      for (; f <= t.retries; )
        try {
          const T = await e();
          d.current && (n(T), s(!1), E(null));
          return;
        } catch (T) {
          d.current && E(T), f++, f <= t.retries ? await new Promise((y) => setTimeout(y, t.delay)) : d.current && s(!1);
        }
    })(), () => {
      d.current = !1;
    };
  }, [...r, t.retries, t.delay, l]);
  const R = m(() => {
    w((f) => f + 1);
  }, []);
  return { data: o, loading: u, error: v, retry: R };
}
function N(e, t, r = []) {
  const [o, n] = c(null), [u, s] = c(!1), [v, E] = c(null), l = a(null), w = a(!1), d = async () => {
    s(!0), E(null);
    try {
      const f = await e();
      w.current && n(f);
    } catch (f) {
      w.current && E(f);
    } finally {
      w.current && s(!1);
    }
  }, h = () => {
    l.current === null && (d(), l.current = window.setInterval(d, t));
  }, R = () => {
    l.current !== null && (window.clearInterval(l.current), l.current = null);
  };
  return i(() => (w.current = !0, h(), () => {
    w.current = !1, R();
  }), [t, ...r]), { data: o, loading: u, error: v, startPolling: h, stopPolling: R };
}
export {
  G as useRexoraAsync,
  U as useRexoraBoolean,
  D as useRexoraDebounce,
  K as useRexoraDocumentVisibility,
  z as useRexoraFetch,
  H as useRexoraFirstRender,
  O as useRexoraForceUpdate,
  W as useRexoraHover,
  B as useRexoraIdle,
  M as useRexoraInterval,
  F as useRexoraIsomorphicLayoutEffect,
  j as useRexoraLatest,
  P as useRexoraMounted,
  $ as useRexoraOnline,
  N as useRexoraPolling,
  q as useRexoraRenderCount,
  J as useRexoraRetry,
  A as useRexoraState,
  V as useRexoraThrottle,
  _ as useRexoraTimeout,
  C as useRexoraToggle,
  k as useRexoraUpdateEffect
};
