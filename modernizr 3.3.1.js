/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-details-inputtypes-touchevents-addtest-prefixes-setclasses-teststyles !*/
 !function(e, t, n) {
    function o(e, t) {
        return typeof e === t
    }
    function i() {
        var e, t, n, i, s, a, r;
        for (var l in d)
            if (d.hasOwnProperty(l)) {
                if (e = [],
                t = d[l],
                t.name && (e.push(t.name.toLowerCase()),
                t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++)
                        e.push(t.options.aliases[n].toLowerCase());
                for (i = o(t.fn, "function") ? t.fn() : t.fn,
                s = 0; s < e.length; s++)
                    a = e[s],
                    r = a.split("."),
                    1 === r.length ? Modernizr[r[0]] = i : (!Modernizr[r[0]] || Modernizr[r[0]]instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
                    Modernizr[r[0]][r[1]] = i),
                    u.push((i ? "" : "no-") + r.join("-"))
            }
    }
    function s(e) {
        var t = m.className
          , n = Modernizr._config.classPrefix || "";
        if (v && (t = t.baseVal),
        Modernizr._config.enableJSClass) {
            var o = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(o, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n),
        v ? m.className.baseVal = t : m.className = t)
    }
    function a(e, t) {
        if ("object" == typeof e)
            for (var n in e)
                h(e, n) && a(n, e[n]);
        else {
            e = e.toLowerCase();
            var o = e.split(".")
              , i = Modernizr[o[0]];
            if (2 == o.length && (i = i[o[1]]),
            "undefined" != typeof i)
                return Modernizr;
            t = "function" == typeof t ? t() : t,
            1 == o.length ? Modernizr[o[0]] = t : (!Modernizr[o[0]] || Modernizr[o[0]]instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])),
            Modernizr[o[0]][o[1]] = t),
            s([(t && 0 != t ? "" : "no-") + o.join("-")]),
            Modernizr._trigger(e, t)
        }
        return Modernizr
    }
    function r() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : v ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }
    function l() {
        var e = t.body;
        return e || (e = r(v ? "svg" : "body"),
        e.fake = !0),
        e
    }
    function f(e, n, o, i) {
        var s, a, f, u, d = "modernizr", c = r("div"), p = l();
        if (parseInt(o, 10))
            for (; o--; )
                f = r("div"),
                f.id = i ? i[o] : d + (o + 1),
                c.appendChild(f);
        return s = r("style"),
        s.type = "text/css",
        s.id = "s" + d,
        (p.fake ? p : c).appendChild(s),
        p.appendChild(c),
        s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(t.createTextNode(e)),
        c.id = d,
        p.fake && (p.style.background = "",
        p.style.overflow = "hidden",
        u = m.style.overflow,
        m.style.overflow = "hidden",
        m.appendChild(p)),
        a = n(c, e),
        p.fake ? (p.parentNode.removeChild(p),
        m.style.overflow = u,
        m.offsetHeight) : c.parentNode.removeChild(c),
        !!a
    }
    var u = []
      , d = []
      , c = {
        _version: "3.3.1",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, t) {
            var n = this;
            setTimeout(function() {
                t(n[e])
            }, 0)
        },
        addTest: function(e, t, n) {
            d.push({
                name: e,
                fn: t,
                options: n
            })
        },
        addAsyncTest: function(e) {
            d.push({
                name: null,
                fn: e
            })
        }
    }
      , Modernizr = function() {};
    Modernizr.prototype = c,
    Modernizr = new Modernizr;
    var p = c._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    c._prefixes = p;
    var h, m = t.documentElement, v = "svg" === m.nodeName.toLowerCase();
    !function() {
        var e = {}.hasOwnProperty;
        h = o(e, "undefined") || o(e.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined")
        }
        : function(t, n) {
            return e.call(t, n)
        }
    }(),
    c._l = {},
    c.on = function(e, t) {
        this._l[e] || (this._l[e] = []),
        this._l[e].push(t),
        Modernizr.hasOwnProperty(e) && setTimeout(function() {
            Modernizr._trigger(e, Modernizr[e])
        }, 0)
    }
    ,
    c._trigger = function(e, t) {
        if (this._l[e]) {
            var n = this._l[e];
            setTimeout(function() {
                var e, o;
                for (e = 0; e < n.length; e++)
                    (o = n[e])(t)
            }, 0),
            delete this._l[e]
        }
    }
    ,
    Modernizr._q.push(function() {
        c.addTest = a
    });
    var y = r("input")
      , g = "search tel url email datetime date month week time datetime-local number range color".split(" ")
      , _ = {};
    Modernizr.inputtypes = function(e) {
        for (var o, i, s, a = e.length, r = "1)", l = 0; a > l; l++)
            y.setAttribute("type", o = e[l]),
            s = "text" !== y.type && "style"in y,
            s && (y.value = r,
            y.style.cssText = "position:absolute;visibility:hidden;",
            /^range$/.test(o) && y.style.WebkitAppearance !== n ? (m.appendChild(y),
            i = t.defaultView,
            s = i.getComputedStyle && "textfield" !== i.getComputedStyle(y, null).WebkitAppearance && 0 !== y.offsetHeight,
            m.removeChild(y)) : /^(search|tel)$/.test(o) || (s = /^(url|email)$/.test(o) ? y.checkValidity && y.checkValidity() === !1 : y.value != r)),
            _[e[l]] = !!s;
        return _
    }(g);
    var w = c.testStyles = f;
    Modernizr.addTest("touchevents", function() {
        var n;
        if ("ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch)
            n = !0;
        else {
            var o = ["@media (", p.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
            w(o, function(e) {
                n = 9 === e.offsetTop
            })
        }
        return n
    }),
    Modernizr.addTest("details", function() {
        var e, t = r("details");
        return "open"in t ? (w("#modernizr details{display:block}", function(n) {
            n.appendChild(t),
            t.innerHTML = "<summary>a</summary>b",
            e = t.offsetHeight,
            t.open = !0,
            e = e != t.offsetHeight
        }),
        e) : !1
    }),
    i(),
    s(u),
    delete c.addTest,
    delete c.addAsyncTest;
    for (var b = 0; b < Modernizr._q.length; b++)
        Modernizr._q[b]();
    e.Modernizr = Modernizr
}(window, document);
