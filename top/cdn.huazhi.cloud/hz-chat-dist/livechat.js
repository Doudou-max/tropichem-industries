!function(n) {
    var i = {};
    function o(e) {
        var t;
        return (i[e] || (t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        },
        n[e].call(t.exports, t, t.exports, o),
        t.l = !0,
        t)).exports
    }
    o.m = n,
    o.c = i,
    o.d = function(e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    o.t = function(t, e) {
        if (1 & e && (t = o(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (o.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                o.d(n, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return n
    }
    ,
    o.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return o.d(t, "a", t),
        t
    }
    ,
    o.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    o.p = "",
    o(o.s = 0)
}([function(e, t, n) {
    "use strict";
    n.r(t);
    var i, o, r, a, s, n = "https://cdn.huazhi.cloud/";
    function c(e) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        )(e)
    }
    i = "https://api.huazhi.cloud/biz/",
    o = "https://matomocdn.huazhi.cloud/js/",
    r = n + "hz_pc_livechat/",
    a = n + "hz_mobile_livechat/",
    s = "livechat.js",
    window.hzAjax = function() {
        var e = {
            type: (arguments[0].type || "GET").toUpperCase(),
            url: arguments[0].url || "",
            async: arguments[0].async || "true",
            data: arguments[0].data || null,
            dataType: arguments[0].dataType || "json",
            contentType: arguments[0].contentType || "application/x-www-form-urlencoded; charset=utf-8",
            beforeSend: arguments[0].beforeSend || function() {}
            ,
            success: arguments[0].success || function() {}
            ,
            error: arguments[0].error || function() {}
        }
          , t = (e.beforeSend(),
        hzCreatexmlHttpRequest());
        t.open(e.type, e.url, e.async),
        t.setRequestHeader("Content-Type", e.contentType),
        t.send(hzConvertData(e.data)),
        t.onreadystatechange = function() {
            4 == t.readyState && (200 == t.status ? e.success(JSON.parse(t.responseText)) : e.error())
        }
    }
    ,
    window.hzCreatexmlHttpRequest = function() {
        return window.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : window.XMLHttpRequest ? new XMLHttpRequest : void 0
    }
    ,
    window.hzConvertData = function(e) {
        if ("object" !== c(e))
            return e;
        var t, n = "";
        for (t in e)
            n += t + "=" + e[t] + "&";
        return n = n.substring(0, n.length - 1)
    }
    ,
    window.hzinitDayJS = function() {
        Date.prototype.format = function(e) {
            var t, n = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
            };
            for (t in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))),
            n)
                new RegExp("(" + t + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[t] : ("00" + n[t]).substr(("" + n[t]).length)));
            return e
        }
    }
    ,
    window.setHzLocVal = function(e, t) {
        var n = new Date;
        n.setTime(n.getTime() + 2592e6),
        document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + "; expires=" + n.toUTCString() + "; path=/; domain=." + getMainHost()
    }
    ,
    window.getHzLocVal = function(e) {
        var e = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
        return (e = document.cookie.match(e)) ? unescape(e[2]) : null
    }
    ,
    window.getMainHost = function() {
        var e = "mh_".concat(Math.random())
          , t = new RegExp("(^|;)\\s*".concat(e, "=12345"))
          , n = new Date(0)
          , i = document.domain.split(".")
          , o = [];
        for (o.unshift(i.pop()); i.length; ) {
            o.unshift(i.pop());
            var r = o.join(".")
              , a = "".concat(e, "=", 12345, ";domain=.").concat(r);
            if (document.cookie = a,
            t.test(document.cookie))
                return document.cookie = "".concat(a, ";expires=").concat(n),
                r
        }
    }
    ,
    window.addHzEvents = function(e, t, n) {
        (addHzEvents = document.addEventListener ? function(e, t, n) {
            e.addEventListener(t, n, !1)
        }
        : function(e, t, n) {
            e.attachEvent("on" + t, function() {
                n.call(e, arguments)
            })
        }
        )(e, t, n)
    }
    ,
    window.getHzExtId = function() {
        for (var e = document.getElementsByTagName("script"), t = null, n = 0; n < e.length; n++) {
            var i = e[n];
            i && i.getAttribute("src") && -1 < i.getAttribute("src").indexOf(s) && (t = (t = i.getAttribute("_extID")) || i.getAttribute("_extid"))
        }
        return t ? t.split("-") : ""
    }
    ;
    var d = getHzExtId();
    ({
        siteId: "",
        enterpriseId: "",
        _hzVisitorid: "",
        containerId: "",
        css: ["chunk-vendors.css", "app.css"],
        js: ["app.js", "chunk-vendors.js"],
        init: function(e) {
            var t, n = this;
            hzinitDayJS(),
            this.enterpriseId = d[0],
            this.siteId = d[1],
            this.containerId = d[2],
            this.locked = !1,
            this.windowHasLoad = !1,
            n.mobile = n.isMobile(),
            getHzLocVal("_hzVisitorid") ? this._hzVisitorid = getHzLocVal("_hzVisitorid") : (t = this.createUuid(),
            setHzLocVal("_hzVisitorid", t),
            this._hzVisitorid = t),
            window.utilConfig || this.setUtilConfig(),
            n.insertContainer(),
            n.addReadyStateListener(function() {
                setTimeout(function() {
                    n.render()
                }, 1e3)
            })
        },
        render: function() {
            var e = this;
            e.windowHasLoad || (e.windowHasLoad = !0,
            document.getElementById("hz_chat_app")) || (e.isMobile() ? (console.info("渲染mobile"),
            e.renderMobileChat()) : (console.info("渲染pc"),
            e.renderPcChat()))
        },
        insertContainer: function() {
            var e, t = this;
            window.Piwik ? (window.Piwik = {},
            delete window.Piwik,
            t.containerJs()) : (e = this.isInclude("piwik.js")) ? e.readyState ? (t.saveLog("insert", "IE--hasPiwikJs---插入追踪代码1"),
            e.onreadystatechange = function() {
                "loaded" != e.readyState && "complete" != e.readyState || (e.onreadystatechange = null,
                window.Piwik = {},
                delete window.Piwik,
                t.saveLog("insert", "IE--hasPiwikJs---插入追踪代码2"),
                t.containerJs())
            }
            ) : e.onload = function() {
                t.saveLog("insert", "非IE--hasPiwikJs---插入追踪代码"),
                window.Piwik = {},
                delete window.Piwik,
                t.containerJs()
            }
            : (t.saveLog("insert", "直接插入追踪代码"),
            t.containerJs())
        },
        containerJs: function() {
            [].push({
                "mtm.startTime": (new Date).getTime(),
                event: "mtm.Start"
            });
            var e = document
              , t = e.createElement("script")
              , e = e.getElementsByTagName("script")[0];
            t.type = "text/javascript",
            t.async = !0,
            t.defer = !0,
            t.src = o + "container_" + this.containerId + ".js",
            e.parentNode.insertBefore(t, e)
        },
        renderPcChat: function() {
            var n = this;
            this.createDom(),
            this.css.forEach(function(e, t) {
                e = r + "css/" + e;
                n.insertCss(e)
            }),
            window.webpackJsonp = [],
            this.js.forEach(function(e, t) {
                e = r + "js/" + e;
                n.insertJs(e)
            })
        },
        isMobile: function() {
            for (var e = navigator.userAgent, t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], n = !1, i = 0; i < t.length; i++)
                if (0 < e.indexOf(t[i])) {
                    n = !0;
                    break
                }
            var o = window.screen.width
              , r = window.screen.height;
            return n = o < 500 && r < 800 ? !0 : n
        },
        renderMobileChat: function() {
            var n = this;
            this.createDom(),
            this.css.forEach(function(e, t) {
                e = a + "css/" + e;
                n.insertCss(e)
            }),
            window.webpackJsonp = [],
            this.js.forEach(function(e, t) {
                e = a + "js/" + e;
                n.insertJs(e)
            })
        },
        isInclude: function(e) {
            for (var t = /js$/i.test(e), n = document.getElementsByTagName(t ? "script" : "link"), i = 0; i < n.length; i++)
                if (-1 != n[i][t ? "src" : "href"].indexOf(e))
                    return n[i];
            return ""
        },
        createDom: function() {
            var e = document.createElement("div")
              , t = document.body.firstChild;
            e.id = "huazhi_chat_app",
            e.setAttribute("siteId", this.siteId),
            window.bindEleId = e.id,
            console.info("bindEleId", bindEleId),
            document.body.insertBefore(e, t)
        },
        insertCss: function(e) {
            var t = document.createElement("link");
            t.type = "text/css",
            t.rel = "stylesheet",
            t.href = e,
            document.getElementsByTagName("head")[0].appendChild(t)
        },
        insertJs: function(e) {
            var t = document.createElement("script");
            t.type = "text/javascript",
            t.src = e,
            t.async = !0,
            t.defer = !0,
            t.readyState ? t.onreadystatechange = function() {
                "loaded" != t.readyState && "complete" != t.readyState || document.getElementsByTagName("body")[0].appendChild(t)
            }
            : document.body.appendChild(t)
        },
        createUuid: function() {
            var e = (new Date).format("yyyyMMddhhmmssS")
              , t = Math.floor(90 * Math.random()) + 10
              , n = this.siteId + "";
            return [n.length < 4 ? (Array(4).join("0") + n).slice(-4) : n, "HZ", e, t].join("")
        },
        setUtilConfig: function() {
            window.utilConfig = {},
            window.utilConfig.setLocVal = this.setLocVal,
            window.utilConfig.getLocVal = this.getLocVal,
            window.utilConfig.clearLocVal = this.clearLocVal,
            window.utilConfig.enterpriseId = this.enterpriseId,
            window.utilConfig.serverid = "",
            window.utilConfig.siteId = this.siteId,
            window.utilConfig.visitorid = this._hzVisitorid
        },
        addReadyStateListener: function(e) {
            "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? (console.info("readyState"),
            e()) : window.addHzEvents(window, "load", function() {
                console.info("window laod"),
                e()
            })
        },
        formatParams: function(e) {
            var t, n = [];
            for (t in e)
                n.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));
            return n.join("&")
        },
        getBrowerLang: function() {
            return (navigator.language || navigator.browserLanguage).toLowerCase()
        },
        saveLog: function(e, t) {
            var n;
            "" != i && (n = i + "visit/log",
            e = {
                type: e,
                desc: t,
                time: (new Date).format("yyyy-MM-dd hh:mm:ss:S"),
                visitorid: window.utilConfig ? utilConfig.visitorid : "",
                href: window.location.href,
                isMobile: this.mobile,
                browser: this.getBrowser(),
                language: (navigator.browserLanguage || navigator.language).toLowerCase()
            },
            hzAjax({
                type: "POST",
                url: n,
                contentType: "application/json",
                data: JSON.stringify(e),
                success: function() {}
            }))
        },
        getBrowser: function() {
            try {
                var e, t = function(e, t) {
                    return e = ("" + e).replace(/_/g, "."),
                    t = t || 1,
                    e = (e = String(e).split("."))[0] + "." + (e[1] || "0"),
                    e = Number(e).toFixed(t)
                }, n = function(e, t) {
                    o = e,
                    r = t
                }, i = navigator.userAgent.toLowerCase(), o = "", r = 0;
                return (e = i.match(/msie ([\d.]+)/)) ? n("ie", t(e[1])) : (e = i.match(/firefox\/([\d.]+)/)) ? n("firefox", t(e[1])) : (e = i.match(/chrome\/([\d.]+)/)) ? n("chrome", t(e[1])) : (e = i.match(/opera.([\d.]+)/)) ? n("opera", t(e[1])) : (e = i.match(/version\/([\d.]+).*safari/)) && n("safari", t(e[1])),
                o + "--" + r
            } catch (e) {
                return "---"
            }
        }
    }).init()
}
]);
