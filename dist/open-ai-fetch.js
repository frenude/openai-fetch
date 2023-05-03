function j(a) {
  return j = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
    return typeof r;
  } : function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, j(a);
}
function l() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  l = function() {
    return a;
  };
  var a = {}, r = Object.prototype, t = r.hasOwnProperty, n = Object.defineProperty || function(c, u, o) {
    c[u] = o.value;
  }, s = typeof Symbol == "function" ? Symbol : {}, i = s.iterator || "@@iterator", e = s.asyncIterator || "@@asyncIterator", h = s.toStringTag || "@@toStringTag";
  function y(c, u, o) {
    return Object.defineProperty(c, u, { value: o, enumerable: !0, configurable: !0, writable: !0 }), c[u];
  }
  try {
    y({}, "");
  } catch (c) {
    y = function(o, f, v) {
      return o[f] = v;
    };
  }
  function d(c, u, o, f) {
    var v = u && u.prototype instanceof F ? u : F, p = Object.create(v.prototype), T = new W(f || []);
    return n(p, "_invoke", { value: U(c, o, T) }), p;
  }
  function G(c, u, o) {
    try {
      return { type: "normal", arg: c.call(u, o) };
    } catch (f) {
      return { type: "throw", arg: f };
    }
  }
  a.wrap = d;
  var k = {};
  function F() {
  }
  function b() {
  }
  function O() {
  }
  var I = {};
  y(I, i, function() {
    return this;
  });
  var P = Object.getPrototypeOf, E = P && P(P(B([])));
  E && E !== r && t.call(E, i) && (I = E);
  var S = O.prototype = F.prototype = Object.create(I);
  function D(c) {
    ["next", "throw", "return"].forEach(function(u) {
      y(c, u, function(o) {
        return this._invoke(u, o);
      });
    });
  }
  function A(c, u) {
    function o(v, p, T, $) {
      var N = G(c[v], c, p);
      if (N.type !== "throw") {
        var C = N.arg, M = C.value;
        return M && j(M) == "object" && t.call(M, "__await") ? u.resolve(M.__await).then(function(L) {
          o("next", L, T, $);
        }, function(L) {
          o("throw", L, T, $);
        }) : u.resolve(M).then(function(L) {
          C.value = L, T(C);
        }, function(L) {
          return o("throw", L, T, $);
        });
      }
      $(N.arg);
    }
    var f;
    n(this, "_invoke", { value: function(p, T) {
      function $() {
        return new u(function(N, C) {
          o(p, T, N, C);
        });
      }
      return f = f ? f.then($, $) : $();
    } });
  }
  function U(c, u, o) {
    var f = "suspendedStart";
    return function(v, p) {
      if (f === "executing")
        throw new Error("Generator is already running");
      if (f === "completed") {
        if (v === "throw")
          throw p;
        return H();
      }
      for (o.method = v, o.arg = p; ; ) {
        var T = o.delegate;
        if (T) {
          var $ = q(T, o);
          if ($) {
            if ($ === k)
              continue;
            return $;
          }
        }
        if (o.method === "next")
          o.sent = o._sent = o.arg;
        else if (o.method === "throw") {
          if (f === "suspendedStart")
            throw f = "completed", o.arg;
          o.dispatchException(o.arg);
        } else
          o.method === "return" && o.abrupt("return", o.arg);
        f = "executing";
        var N = G(c, u, o);
        if (N.type === "normal") {
          if (f = o.done ? "completed" : "suspendedYield", N.arg === k)
            continue;
          return { value: N.arg, done: o.done };
        }
        N.type === "throw" && (f = "completed", o.method = "throw", o.arg = N.arg);
      }
    };
  }
  function q(c, u) {
    var o = u.method, f = c.iterator[o];
    if (f === void 0)
      return u.delegate = null, o === "throw" && c.iterator.return && (u.method = "return", u.arg = void 0, q(c, u), u.method === "throw") || o !== "return" && (u.method = "throw", u.arg = new TypeError("The iterator does not provide a '" + o + "' method")), k;
    var v = G(f, c.iterator, u.arg);
    if (v.type === "throw")
      return u.method = "throw", u.arg = v.arg, u.delegate = null, k;
    var p = v.arg;
    return p ? p.done ? (u[c.resultName] = p.value, u.next = c.nextLoc, u.method !== "return" && (u.method = "next", u.arg = void 0), u.delegate = null, k) : p : (u.method = "throw", u.arg = new TypeError("iterator result is not an object"), u.delegate = null, k);
  }
  function te(c) {
    var u = { tryLoc: c[0] };
    1 in c && (u.catchLoc = c[1]), 2 in c && (u.finallyLoc = c[2], u.afterLoc = c[3]), this.tryEntries.push(u);
  }
  function J(c) {
    var u = c.completion || {};
    u.type = "normal", delete u.arg, c.completion = u;
  }
  function W(c) {
    this.tryEntries = [{ tryLoc: "root" }], c.forEach(te, this), this.reset(!0);
  }
  function B(c) {
    if (c) {
      var u = c[i];
      if (u)
        return u.call(c);
      if (typeof c.next == "function")
        return c;
      if (!isNaN(c.length)) {
        var o = -1, f = function v() {
          for (; ++o < c.length; )
            if (t.call(c, o))
              return v.value = c[o], v.done = !1, v;
          return v.value = void 0, v.done = !0, v;
        };
        return f.next = f;
      }
    }
    return { next: H };
  }
  function H() {
    return { value: void 0, done: !0 };
  }
  return b.prototype = O, n(S, "constructor", { value: O, configurable: !0 }), n(O, "constructor", { value: b, configurable: !0 }), b.displayName = y(O, h, "GeneratorFunction"), a.isGeneratorFunction = function(c) {
    var u = typeof c == "function" && c.constructor;
    return !!u && (u === b || (u.displayName || u.name) === "GeneratorFunction");
  }, a.mark = function(c) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(c, O) : (c.__proto__ = O, y(c, h, "GeneratorFunction")), c.prototype = Object.create(S), c;
  }, a.awrap = function(c) {
    return { __await: c };
  }, D(A.prototype), y(A.prototype, e, function() {
    return this;
  }), a.AsyncIterator = A, a.async = function(c, u, o, f, v) {
    v === void 0 && (v = Promise);
    var p = new A(d(c, u, o, f), v);
    return a.isGeneratorFunction(u) ? p : p.next().then(function(T) {
      return T.done ? T.value : p.next();
    });
  }, D(S), y(S, h, "Generator"), y(S, i, function() {
    return this;
  }), y(S, "toString", function() {
    return "[object Generator]";
  }), a.keys = function(c) {
    var u = Object(c), o = [];
    for (var f in u)
      o.push(f);
    return o.reverse(), function v() {
      for (; o.length; ) {
        var p = o.pop();
        if (p in u)
          return v.value = p, v.done = !1, v;
      }
      return v.done = !0, v;
    };
  }, a.values = B, W.prototype = { constructor: W, reset: function(u) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(J), !u)
      for (var o in this)
        o.charAt(0) === "t" && t.call(this, o) && !isNaN(+o.slice(1)) && (this[o] = void 0);
  }, stop: function() {
    this.done = !0;
    var u = this.tryEntries[0].completion;
    if (u.type === "throw")
      throw u.arg;
    return this.rval;
  }, dispatchException: function(u) {
    if (this.done)
      throw u;
    var o = this;
    function f(C, M) {
      return T.type = "throw", T.arg = u, o.next = C, M && (o.method = "next", o.arg = void 0), !!M;
    }
    for (var v = this.tryEntries.length - 1; v >= 0; --v) {
      var p = this.tryEntries[v], T = p.completion;
      if (p.tryLoc === "root")
        return f("end");
      if (p.tryLoc <= this.prev) {
        var $ = t.call(p, "catchLoc"), N = t.call(p, "finallyLoc");
        if ($ && N) {
          if (this.prev < p.catchLoc)
            return f(p.catchLoc, !0);
          if (this.prev < p.finallyLoc)
            return f(p.finallyLoc);
        } else if ($) {
          if (this.prev < p.catchLoc)
            return f(p.catchLoc, !0);
        } else {
          if (!N)
            throw new Error("try statement without catch or finally");
          if (this.prev < p.finallyLoc)
            return f(p.finallyLoc);
        }
      }
    }
  }, abrupt: function(u, o) {
    for (var f = this.tryEntries.length - 1; f >= 0; --f) {
      var v = this.tryEntries[f];
      if (v.tryLoc <= this.prev && t.call(v, "finallyLoc") && this.prev < v.finallyLoc) {
        var p = v;
        break;
      }
    }
    p && (u === "break" || u === "continue") && p.tryLoc <= o && o <= p.finallyLoc && (p = null);
    var T = p ? p.completion : {};
    return T.type = u, T.arg = o, p ? (this.method = "next", this.next = p.finallyLoc, k) : this.complete(T);
  }, complete: function(u, o) {
    if (u.type === "throw")
      throw u.arg;
    return u.type === "break" || u.type === "continue" ? this.next = u.arg : u.type === "return" ? (this.rval = this.arg = u.arg, this.method = "return", this.next = "end") : u.type === "normal" && o && (this.next = o), k;
  }, finish: function(u) {
    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
      var f = this.tryEntries[o];
      if (f.finallyLoc === u)
        return this.complete(f.completion, f.afterLoc), J(f), k;
    }
  }, catch: function(u) {
    for (var o = this.tryEntries.length - 1; o >= 0; --o) {
      var f = this.tryEntries[o];
      if (f.tryLoc === u) {
        var v = f.completion;
        if (v.type === "throw") {
          var p = v.arg;
          J(f);
        }
        return p;
      }
    }
    throw new Error("illegal catch attempt");
  }, delegateYield: function(u, o, f) {
    return this.delegate = { iterator: B(u), resultName: o, nextLoc: f }, this.method === "next" && (this.arg = void 0), k;
  } }, a;
}
function Q(a, r) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(a);
    r && (n = n.filter(function(s) {
      return Object.getOwnPropertyDescriptor(a, s).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ae(a) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Q(Object(t), !0).forEach(function(n) {
      x(a, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : Q(Object(t)).forEach(function(n) {
      Object.defineProperty(a, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return a;
}
function X(a, r, t, n, s, i, e) {
  try {
    var h = a[i](e), y = h.value;
  } catch (d) {
    t(d);
    return;
  }
  h.done ? r(y) : Promise.resolve(y).then(n, s);
}
function m(a) {
  return function() {
    var r = this, t = arguments;
    return new Promise(function(n, s) {
      var i = a.apply(r, t);
      function e(y) {
        X(i, n, s, e, h, "next", y);
      }
      function h(y) {
        X(i, n, s, e, h, "throw", y);
      }
      e(void 0);
    });
  };
}
function ie(a, r) {
  if (!(a instanceof r))
    throw new TypeError("Cannot call a class as a function");
}
function Z(a, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(a, ee(n.key), n);
  }
}
function ue(a, r, t) {
  return r && Z(a.prototype, r), t && Z(a, t), Object.defineProperty(a, "prototype", { writable: !1 }), a;
}
function x(a, r, t) {
  return r = ee(r), r in a ? Object.defineProperty(a, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : a[r] = t, a;
}
function ee(a) {
  var r = se(a, "string");
  return j(r) === "symbol" ? r : String(r);
}
function se(a, r) {
  if (j(a) !== "object" || a === null)
    return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(a, r || "default");
    if (j(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (r === "string" ? String : Number)(a);
}
var w;
(function(a) {
  a.Model = "/v1/models", a.Completions = "/v1/completions", a.Chat = "/v1/chat/completions", a.Edit = "/v1/edits", a.Image = "/v1/images/generations", a.ImageEdit = "/v1/images/edits", a.IimageVariation = "/v1/images/variations", a.Embeddings = "/v1/embeddings", a.Transcriptions = "/v1/audio/transcriptions", a.Translations = "/v1/audio/translations", a.Files = "/v1/files", a.FineTune = "/v1/fine-tunes", a.Moderations = "/v1/moderations", a.Engines = "/v1/engines";
})(w || (w = {}));
var g;
(function(a) {
  a.POST = "POST", a.GET = "GET", a.PUT = "PUT", a.DELETE = "DELETE";
})(g || (g = {}));
function oe(a) {
  var r, t, n, s, i, e, h;
  return y(), {
    feed: d,
    reset: y
  };
  function y() {
    r = !0, t = "", n = 0, s = -1, i = void 0, e = void 0, h = "";
  }
  function d(k) {
    t = t ? t + k : k, r && ce(t) && (t = t.slice(re.length)), r = !1;
    for (var F = t.length, b = 0, O = !1; b < F; ) {
      O && (t[b] === "\n" && ++b, O = !1);
      for (var I = -1, P = s, E = void 0, S = n; I < 0 && S < F; ++S)
        E = t[S], E === ":" && P < 0 ? P = S - b : E === "\r" ? (O = !0, I = S - b) : E === "\n" && (I = S - b);
      if (I < 0) {
        n = F - b, s = P;
        break;
      } else
        n = 0, s = -1;
      G(t, b, P, I), b += I + 1;
    }
    b === F ? t = "" : b > 0 && (t = t.slice(b));
  }
  function G(k, F, b, O) {
    if (O === 0) {
      h.length > 0 && (a({
        type: "event",
        id: i,
        event: e || void 0,
        data: h.slice(0, -1)
        // remove trailing newline
      }), h = "", i = void 0), e = void 0;
      return;
    }
    var I = b < 0, P = k.slice(F, F + (I ? O : b)), E = 0;
    I ? E = O : k[F + b + 1] === " " ? E = b + 2 : E = b + 1;
    var S = F + E, D = O - E, A = k.slice(S, S + D).toString();
    if (P === "data")
      h += A ? "".concat(A, "\n") : "\n";
    else if (P === "event")
      e = A;
    else if (P === "id" && !A.includes("\0"))
      i = A;
    else if (P === "retry") {
      var U = parseInt(A, 10);
      Number.isNaN(U) || a({
        type: "reconnect-interval",
        value: U
      });
    }
  }
}
var re = [239, 187, 191];
function ce(a) {
  return re.every(function(r, t) {
    return a.charCodeAt(t) === r;
  });
}
function Y(a) {
  return a === void 0;
}
function le(a) {
  return a === null;
}
function fe(a) {
  return typeof a == "boolean";
}
function V(a) {
  return a === Object(a);
}
function _(a) {
  return Array.isArray(a);
}
function pe(a) {
  return a instanceof Date;
}
function ne(a, r) {
  return r ? V(a) && !Y(a.uri) : V(a) && typeof a.size == "number" && typeof a.type == "string" && typeof a.slice == "function";
}
function he(a, r) {
  return ne(a, r) && typeof a.name == "string" && (V(a.lastModifiedDate) || typeof a.lastModified == "number");
}
function z(a) {
  return Y(a) ? !1 : a;
}
function K(a, r, t, n) {
  r = r || {}, t = t || new FormData(), r.indices = z(r.indices), r.nullsAsUndefineds = z(r.nullsAsUndefineds), r.booleansAsIntegers = z(r.booleansAsIntegers), r.allowEmptyArrays = z(r.allowEmptyArrays), r.noFilesWithArrayNotation = z(r.noFilesWithArrayNotation), r.dotsForObjectNotation = z(r.dotsForObjectNotation);
  var s = typeof t.getParts == "function";
  return Y(a) || (le(a) ? r.nullsAsUndefineds || t.append(n, "") : fe(a) ? r.booleansAsIntegers ? t.append(n, a ? 1 : 0) : t.append(n, a) : _(a) ? a.length ? a.forEach(function(i, e) {
    var h = n + "[" + (r.indices ? e : "") + "]";
    r.noFilesWithArrayNotation && he(i, s) && (h = n), K(i, r, t, h);
  }) : r.allowEmptyArrays && t.append(n + "[]", "") : pe(a) ? t.append(n, a.toISOString()) : V(a) && !ne(a, s) ? Object.keys(a).forEach(function(i) {
    var e = a[i];
    if (_(e))
      for (; i.length > 2 && i.lastIndexOf("[]") === i.length - 2; )
        i = i.substring(0, i.length - 2);
    var h = n ? r.dotsForObjectNotation ? n + "." + i : n + "[" + i + "]" : i;
    K(e, r, t, h);
  }) : t.append(n, a)), t;
}
var R = {
  serialize: K
}, ve = "https://api.openai.com", de = /* @__PURE__ */ function() {
  function a(r) {
    ie(this, a), x(this, "configuration", void 0), this.configuration = r;
  }
  return ue(a, [{
    key: "doFetch",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s, i, e) {
        return l().wrap(function(y) {
          for (; ; )
            switch (y.prev = y.next) {
              case 0:
                return y.next = 2, fetch("".concat(this.configuration.basePath ? this.configuration.basePath : ve).concat(s), {
                  headers: ae({
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(this.configuration.apiKey)
                  }, this.configuration.organization && {
                    "OpenAI-Organization": this.configuration.organization
                  }),
                  cache: "no-store",
                  method: i,
                  body: e ? JSON.stringify(e) : null
                });
              case 2:
                return y.abrupt("return", y.sent);
              case 3:
              case "end":
                return y.stop();
            }
        }, n, this);
      }));
      function t(n, s, i) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "fetchOpenaiStream",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s, i, e) {
        var h;
        return l().wrap(function(d) {
          for (; ; )
            switch (d.prev = d.next) {
              case 0:
                return d.next = 2, this.doFetch(s, i, e);
              case 2:
                if (h = d.sent, !e.stream) {
                  d.next = 5;
                  break;
                }
                return d.abrupt("return", new Response(this.stream(h)));
              case 5:
                return d.t0 = JSON, d.next = 8, h.text();
              case 8:
                return d.t1 = d.sent, d.abrupt("return", d.t0.parse.call(d.t0, d.t1));
              case 10:
              case "end":
                return d.stop();
            }
        }, n, this);
      }));
      function t(n, s, i) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "fetchOpenai",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s, i, e) {
        var h;
        return l().wrap(function(d) {
          for (; ; )
            switch (d.prev = d.next) {
              case 0:
                return d.next = 2, this.doFetch(s, i, e);
              case 2:
                return h = d.sent, d.t0 = JSON, d.next = 6, h.text();
              case 6:
                return d.t1 = d.sent, d.abrupt("return", d.t0.parse.call(d.t0, d.t1));
              case 8:
              case "end":
                return d.stop();
            }
        }, n, this);
      }));
      function t(n, s, i) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "stream",
    value: function(t) {
      return new ReadableStream({
        start: function(s) {
          return m(/* @__PURE__ */ l().mark(function i() {
            var e, h, y, d, G, k, F;
            return l().wrap(function(O) {
              for (; ; )
                switch (O.prev = O.next) {
                  case 0:
                    h = function(P) {
                      if (P.type === "event") {
                        var E = P.data;
                        if (E === "[DONE]") {
                          s.close();
                          return;
                        }
                        try {
                          var S = new TextEncoder().encode(JSON.parse(E));
                          s.enqueue(S);
                        } catch (D) {
                          s.error(D);
                        }
                      }
                    }, y = oe(h), d = (e = t.body) === null || e === void 0 ? void 0 : e.pipeThrough(new TextDecoderStream()).getReader();
                  case 3:
                    return O.next = 6, d.read();
                  case 6:
                    if (G = O.sent, k = G.done, F = G.value, !k) {
                      O.next = 11;
                      break;
                    }
                    return O.abrupt("break", 14);
                  case 11:
                    y.feed(F), O.next = 3;
                    break;
                  case 14:
                  case "end":
                    return O.stop();
                }
            }, i);
          }))();
        }
      });
    }
  }, {
    key: "retrieveModel",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai("".concat(w.Model, "/").concat(s), g.GET, null);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "listModels",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n() {
        return l().wrap(function(i) {
          for (; ; )
            switch (i.prev = i.next) {
              case 0:
                return i.next = 2, this.fetchOpenai(w.Model, g.GET, null);
              case 2:
                return i.abrupt("return", i.sent);
              case 3:
              case "end":
                return i.stop();
            }
        }, n, this);
      }));
      function t() {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "createCompletion",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenaiStream(w.Completions, g.POST, s);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "createChatCompletion",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenaiStream(w.Chat, g.POST, s);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "createEdit",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai(w.Edit, g.POST, s);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "createEmbedding",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai(w.Embeddings, g.POST, s);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "createImage",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai(w.Image, g.POST, s);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "createImageEdit",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai(w.ImageEdit, g.POST, R.serialize(s));
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "createImageVariation",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai(w.IimageVariation, g.POST, R.serialize(s));
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "createTranscription",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai(w.Transcriptions, g.POST, R.serialize(s));
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "createTranslation",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai(w.Translations, g.POST, R.serialize(s));
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "listFiles",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n() {
        return l().wrap(function(i) {
          for (; ; )
            switch (i.prev = i.next) {
              case 0:
                return i.next = 2, this.fetchOpenai(w.Files, g.GET, null);
              case 2:
                return i.abrupt("return", i.sent);
              case 3:
              case "end":
                return i.stop();
            }
        }, n, this);
      }));
      function t() {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "createFile",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai(w.Files, g.POST, R.serialize(s));
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "deleteFile",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai("".concat(w.Files, "/").concat(s), g.DELETE, null);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "retrieveFile",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai("".concat(w.Files, "/").concat(s), g.GET, null);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "downloadFile",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai("".concat(w.Files, "/").concat(s, "/content"), g.GET, null);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "createFineTune",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai(w.FineTune, g.POST, s);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "listFineTunes",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n() {
        return l().wrap(function(i) {
          for (; ; )
            switch (i.prev = i.next) {
              case 0:
                return i.next = 2, this.fetchOpenai(w.FineTune, g.GET, null);
              case 2:
                return i.abrupt("return", i.sent);
              case 3:
              case "end":
                return i.stop();
            }
        }, n, this);
      }));
      function t() {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "retrieveFineTune",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai("".concat(w.FineTune, "/").concat(s), g.GET, null);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "cancelFineTune",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai("".concat(w.FineTune, "/").concat(s, "/cancel"), g.POST, null);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "listFineTuneEvents",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s, i) {
        return l().wrap(function(h) {
          for (; ; )
            switch (h.prev = h.next) {
              case 0:
                if (!(i != null && i.stream)) {
                  h.next = 4;
                  break;
                }
                return h.next = 3, this.fetchOpenaiStream("".concat(w.FineTune, "/").concat(s, "/events"), g.POST, i);
              case 3:
                return h.abrupt("return", h.sent);
              case 4:
                return h.next = 6, this.fetchOpenai("".concat(w.FineTune, "/").concat(s, "/events"), g.POST, null);
              case 6:
                return h.abrupt("return", h.sent);
              case 7:
              case "end":
                return h.stop();
            }
        }, n, this);
      }));
      function t(n, s) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "deleteModel",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai("".concat(w.Model, "/").concat(s), g.DELETE, null);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }, {
    key: "createModeration",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai(w.Moderations, g.POST, s);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
    /**
     * @deprecated
     */
  }, {
    key: "listEngines",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n() {
        return l().wrap(function(i) {
          for (; ; )
            switch (i.prev = i.next) {
              case 0:
                return i.next = 2, this.fetchOpenai(w.Engines, g.GET, null);
              case 2:
                return i.abrupt("return", i.sent);
              case 3:
              case "end":
                return i.stop();
            }
        }, n, this);
      }));
      function t() {
        return r.apply(this, arguments);
      }
      return t;
    }()
    /**
     * @deprecated
     */
  }, {
    key: "retrieveEngine",
    value: function() {
      var r = m(/* @__PURE__ */ l().mark(function n(s) {
        return l().wrap(function(e) {
          for (; ; )
            switch (e.prev = e.next) {
              case 0:
                return e.next = 2, this.fetchOpenai("".concat(w.Engines, "/").concat(s), g.GET, null);
              case 2:
                return e.abrupt("return", e.sent);
              case 3:
              case "end":
                return e.stop();
            }
        }, n, this);
      }));
      function t(n) {
        return r.apply(this, arguments);
      }
      return t;
    }()
  }]), a;
}();
export {
  de as OpenAiAPI
};
